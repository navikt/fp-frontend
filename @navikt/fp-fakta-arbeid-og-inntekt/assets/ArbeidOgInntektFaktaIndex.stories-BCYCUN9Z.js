import{g as Bl,r as v,u as rr,_ as Oi,s as bi,c as jr,a as ee,R as m,b as ba,d as qr,T as Gd,S as Ur,m as Bd,e as xr,f as uo,h as Jn,Q as Fd,o as Eo,w as wd,i as ze,P as Gn,n as Kt,j as N,t as mn,O as mt,I as Vd,k as Li,l as Fl,p as mo,q as No,v as _o,x as wl,y as Vl,N as jl,J as To,A as Ce,z as jd,B as qd,C as Ud,D as xd}from"./iframe-DdQy6Sew.js";import{r as Hd}from"./index-UFXUBfqk.js";import"./preload-helper-PPVm8Dsz.js";var ql=Hd();const Na=Bl(ql);function Jd(e,n){var t=e.values,r=Oi(e,["values"]),a=n.values,l=Oi(n,["values"]);return bi(a,t)&&bi(r,l)}function vo(e){var n=rr(),t=n.formatMessage,r=n.textComponent,a=r===void 0?v.Fragment:r,l=e.id,i=e.description,s=e.defaultMessage,o=e.values,d=e.children,u=e.tagName,E=u===void 0?a:u,_=e.ignoreTag,T={id:l,description:i,defaultMessage:s},g=t(T,o,{ignoreTag:_});return typeof d=="function"?d(Array.isArray(g)?g:[g]):E?v.createElement(E,null,g):v.createElement(v.Fragment,null,g)}vo.displayName="FormattedMessage";var H=v.memo(vo,Jd);H.displayName="MemoizedFormattedMessage";var tn=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.OVERSTYRING_AV_FAKTA_OM_FØDSEL="6019",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(tn||{}),Ee=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(Ee||{}),$e=(e=>(e.AVV_DOK="AVV_DOK",e.AVV_FODSEL="AVV_FODSEL",e.UTV_FRIST="UTV_FRIST",e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG="VENT_PÅ_TILBAKEKREVINGSGRUNNLAG",e.VENT_PÅ_BRUKERTILBAKEMELDING="VENT_PÅ_BRUKERTILBAKEMELDING",e.VENT_UTLAND_TRYGD="VENT_UTLAND_TRYGD",e.UTVIDET_TILSVAR_FRIST="UTV_TIL_FRIST",e.ENDRE_TILKJENT_YTELSE="ENDRE_TILKJENT_YTELSE",e.VENT_PÅ_MULIG_MOTREGNING="VENT_PÅ_MULIG_MOTREGNING",e.AVV_RESPONS_REVURDERING="AVV_RESPONS_REVURDERING",e.FOR_TIDLIG_SOKNAD="FOR_TIDLIG_SOKNAD",e.VENT_PÅ_SISTE_AAP_ELLER_DP_MELDEKORT="VENT_PÅ_SISTE_AAP_MELDEKORT",e.ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER="ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",e.ANKE_OVERSENDT_TIL_TRYGDERETTEN="ANKE_OVERSENDT_TIL_TRYGDERETTEN",e.VENT_PÅ_KORRIGERT_BESTEBEREGNING="VENT_PÅ_KORRIGERT_BESTEBEREGNING",e.VENT_OPDT_INNTEKTSMELDING="VENT_OPDT_INNTEKTSMELDING",e.VENT_OPPTJENING_OPPLYSNINGER="VENT_OPPTJENING_OPPLYSNINGER",e.VENT_INNTEKT_RAPPORTERINGSFRIST="VENT_INNTEKT_RAPPORTERINGSFRIST",e.VENT_MANGLENDE_SYKEMELDING="VENT_MANGLENDE_SYKEMELDING",e.VENT_SØKNAD_SENDT_INFORMASJONSBREV="VENT_SØKNAD_SENDT_INFORMASJONSBREV",e.VENT_ÅPEN_BEHANDLING="VENT_ÅPEN_BEHANDLING",e.VENT_KABAL="VENT_KABAL",e))($e||{}),Pr=(e=>(e.PERMISJON="PERMISJON",e.PERMITTERING="PERMITTERING",e.PERMISJON_VED_MILITÆRTJENESTE="PERMISJON_VED_MILITÆRTJENESTE",e.UTDANNINGSPERMISJON_LOVFESTET="UTDANNINGSPERMISJON_LOVFESTET",e.UTDANNINGSPERMISJON="UTDANNINGSPERMISJON",e.UTDANNINGSPERMISJON_IKKE_LOVFESTET="UTDANNINGSPERMISJON_IKKE_LOVFESTET",e.VELFERDSPERMISJON="VELFERDSPERMISJON",e.ANNEN_PERMISJON_LOVFESTET="ANNEN_PERMISJON_LOVFESTET",e.PERMISJON_MED_FORELDREPENGER="PERMISJON_MED_FORELDREPENGER",e.ANNEN_PERMISJON_IKKE_LOVFESTET="ANNEN_PERMISJON_IKKE_LOVFESTET",e))(Pr||{});const Yd=(e,n,t)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${n}&dokumentId=${t}`,Cd=(e,n,t)=>{const r=globalThis.open(e,n);r&&setTimeout(()=>{r.document.title=t},1e3)};var go=(e=>(e.GENERAL_ERROR="GENERAL_ERROR",e.POLLING_TIMEOUT="POLLING_TIMEOUT",e.POLLING_HALTED_OR_DELAYED="POLLING_HALTED_OR_DELAYED",e.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND="REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND",e.REQUEST_FORBIDDEN="REQUEST_FORBIDDEN",e.REQUEST_UNAUTHORIZED="REQUEST_UNAUTHORIZED",e))(go||{});const Hr=e=>jr({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var $d=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Ul=v.forwardRef((e,n)=>{var{className:t,size:r="medium",as:a="p",spacing:l,truncate:i,weight:s="regular",align:o,visuallyHidden:d,textColor:u}=e,E=$d(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=ee();return m.createElement(a,Object.assign({},E,{ref:n,className:_(t,"navds-body-long",`navds-body-long--${r}`,Hr({spacing:l,truncate:i,weight:s,align:o,visuallyHidden:d,textColor:u}))}))});var Wd=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const ne=v.forwardRef((e,n)=>{var{className:t,size:r="medium",as:a="p",spacing:l,truncate:i,weight:s="regular",align:o,visuallyHidden:d,textColor:u}=e,E=Wd(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=ee();return m.createElement(a,Object.assign({},E,{ref:n,className:_(t,"navds-body-short",`navds-body-short--${r}`,Hr({spacing:l,truncate:i,weight:s,align:o,visuallyHidden:d,textColor:u}))}))});var zd=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Kr=v.forwardRef((e,n)=>{var{className:t,size:r="medium",spacing:a,uppercase:l,as:i="p",truncate:s,weight:o="regular",align:d,visuallyHidden:u,textColor:E}=e,_=zd(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:T}=ee();return m.createElement(i,Object.assign({},_,{ref:n,className:T(t,"navds-detail",Hr({spacing:a,truncate:s,weight:o,align:d,visuallyHidden:u,textColor:E,uppercase:l}),{"navds-detail--small":r==="small"})}))});var Xd=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Jr=v.forwardRef((e,n)=>{var{children:t,className:r,size:a,spacing:l,as:i="p",showIcon:s=!1}=e,o=Xd(e,["children","className","size","spacing","as","showIcon"]);const{cn:d}=ee();return m.createElement(i,Object.assign({},o,{ref:n,className:d("navds-error-message","navds-label",r,Hr({spacing:l}),{"navds-label--small":a==="small","navds-error-message--show-icon":s})}),s&&m.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var Qd=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Yr=v.forwardRef((e,n)=>{var{level:t="1",size:r,className:a,as:l,spacing:i,align:s,visuallyHidden:o,textColor:d}=e,u=Qd(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:E}=ee(),_=l??`h${t}`;return m.createElement(_,Object.assign({},u,{ref:n,className:E(a,"navds-heading",`navds-heading--${r}`,Hr({spacing:i,align:s,visuallyHidden:o,textColor:d}))}))});var Zd=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};v.forwardRef((e,n)=>{var{className:t,spacing:r,as:a="p"}=e,l=Zd(e,["className","spacing","as"]);const{cn:i}=ee();return m.createElement(a,Object.assign({},l,{ref:n,className:i(t,"navds-ingress",{"navds-typo--spacing":!!r})}))});var eE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Re=v.forwardRef((e,n)=>{var{className:t,size:r="medium",as:a="label",spacing:l,visuallyHidden:i,textColor:s}=e,o=eE(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:d}=ee();return m.createElement(a,Object.assign({},o,{ref:n,className:d(t,"navds-label",Hr({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":r==="small"})}))});function Io(e,n=166,t=!1){let r;function a(...l){const i=()=>{r=void 0,e.apply(this,l)};!r&&t&&i(),clearTimeout(r),r=setTimeout(i,n)}return a.clear=()=>{clearTimeout(r)},a}function Ye(e,n){const t=Object.entries(e).filter(([r])=>!n.includes(r));return Object.fromEntries(t)}const Gr=globalThis?.document?v.useLayoutEffect:()=>{};let hi=0;function nE(e){const[n,t]=v.useState(e),r=e||n;return v.useEffect(()=>{n==null&&(hi+=1,t(`aksel-id-${hi}`))},[n]),r}const Mi=m.useId;function pn(e){var n;if(Mi!==void 0){const t=Mi();return e??t.replace(/(:)/g,"")}return(n=nE(e))!==null&&n!==void 0?n:""}function Nt(e,n=[]){const t=v.useRef(e);return v.useEffect(()=>{t.current=e}),v.useCallback(((...r)=>{var a;return(a=t.current)===null||a===void 0?void 0:a.call(t,...r)}),n)}function Br({value:e,defaultValue:n,onChange:t}){const r=Nt(t),[a,l]=v.useState(n),i=e!==void 0,s=i?e:a,o=Nt(d=>{const E=typeof d=="function"?d(s):d;i||l(E),r(E)},[i,r,s]);return[s,o]}let Pi=0;function rE(e){const[n,t]=v.useState(e),r=e||n;return v.useEffect(()=>{n==null&&(Pi+=1,t(`aksel-icon-${Pi}`))},[n]),r}const Ki=m.useId;function ye(e){var n;return Ki!==void 0?Ki().replace(/(:)/g,""):(n=rE(e))!==null&&n!==void 0?n:""}var tE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const aE=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=tE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",d:"M8.97 6.97a.75.75 0 1 1 1.06 1.06l-3.22 3.22H19a.75.75 0 0 1 0 1.5H6.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06z"}))});var lE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const iE=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=lE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",d:"M14.087 6.873a.75.75 0 0 1 .943.097l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H5a.75.75 0 0 1-.75-.74V12a.75.75 0 0 1 .75-.75h12.19l-3.22-3.22a.75.75 0 0 1 .117-1.157"}))});var sE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const oE=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=sE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var uE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const dE=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=uE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var EE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const mE=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=EE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var NE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const _E=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=NE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var TE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const It=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=TE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var vE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const fo=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=vE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var gE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const xl=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=gE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var IE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const fE=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=IE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var RE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const cE=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=RE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var SE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const pE=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=SE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.6 3.068c-1.28-.487-2.1-1.686-2.1-3.068a3.257 3.257 0 0 1 3.276-3.264 3.26 3.26 0 0 1 3.271 3.264c0 1.353-.83 2.554-2.559 3.242a.75.75 0 0 0-.472.697v1.235a.75.75 0 0 0 .212.523l1.482 1.522-1.215 1.991a.75.75 0 0 0 .123.934l.592.564-1.982 2.214-.145-.132v-9.021a.75.75 0 0 0-.483-.701m-.327-3.13a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var DE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const AE=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=DE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.273-.063a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var kE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Ro=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=kE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var yE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const OE=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=yE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var bE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const LE=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=bE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var hE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const ME=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=hE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var PE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const co=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=PE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var KE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const GE=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=KE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var BE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const FE=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=BE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var wE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const VE=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=wE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var jE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const So=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=jE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var qE=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const UE=v.forwardRef((e,n)=>{var{title:t,titleId:r}=e,a=qE(e,["title","titleId"]);let l=ye();return l=t?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Zn(e,n,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e?.(a),t===!1||!a.defaultPrevented)return n?.(a)}}const[xE,ft]=ba({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),HE=typeof window<"u"&&window.matchMedia===void 0,JE=(e,n)=>{const[t,r]=v.useState(n);return v.useEffect(()=>{if(HE)return;const a=window.matchMedia(e);r(a.matches);const l=i=>{r(i.matches)};return a.addEventListener("change",l),()=>{a.removeEventListener("change",l)}},[e]),t};function _n(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function Xe(e){return(n,t)=>{const r=t?.context?String(t.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=t?.width?String(t.width):i;a=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=t?.width?String(t.width):e.defaultWidth;a=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(n):n;return a[l]}}function Qe(e){return(n,t={})=>{const r=t.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],l=n.match(a);if(!l)return null;const i=l[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],o=Array.isArray(s)?CE(s,E=>E.test(i)):YE(s,E=>E.test(i));let d;d=e.valueCallback?e.valueCallback(o):o,d=t.valueCallback?t.valueCallback(d):d;const u=n.slice(i.length);return{value:d,rest:u}}}function YE(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function CE(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function Hl(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const a=r[0],l=n.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=t.valueCallback?t.valueCallback(i):i;const s=n.slice(a.length);return{value:i,rest:s}}}const po=6048e5,$E=864e5,WE=6e4,zE=36e5,XE=1e3,Gi=Symbol.for("constructDateFrom");function _e(e,n){return typeof e=="function"?e(n):e&&typeof e=="object"&&Gi in e?e[Gi](n):e instanceof Date?new e.constructor(n):new Date(n)}function Cr(e,...n){const t=_e.bind(null,n.find(r=>typeof r=="object"));return n.map(t)}let QE={};function gr(){return QE}function ie(e,n){return _e(n||e,e)}function Un(e,n){const t=gr(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=ie(e,n?.in),l=a.getDay(),i=(l<r?7:0)+l-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}const ZE={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Do=(e,n,t)=>{let r;const a=ZE[e];return typeof a=="string"?r=a:n===1?r=a.one:r=a.other.replace("{{count}}",n.toString()),t?.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r},em={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ao=(e,n,t,r)=>em[e],nm={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},rm={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},tm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},am={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},lm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},im={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},sm=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},ko={ordinalNumber:sm,era:Xe({values:nm,defaultWidth:"wide"}),quarter:Xe({values:rm,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Xe({values:tm,defaultWidth:"wide"}),day:Xe({values:am,defaultWidth:"wide"}),dayPeriod:Xe({values:lm,defaultWidth:"wide",formattingValues:im,defaultFormattingWidth:"wide"})},om=/^(\d+)(th|st|nd|rd)?/i,um=/\d+/i,dm={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Em={any:[/^b/i,/^(a|c)/i]},mm={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Nm={any:[/1/i,/2/i,/3/i,/4/i]},_m={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Tm={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},vm={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},gm={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Im={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},fm={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},yo={ordinalNumber:Hl({matchPattern:om,parsePattern:um,valueCallback:e=>parseInt(e,10)}),era:Qe({matchPatterns:dm,defaultMatchWidth:"wide",parsePatterns:Em,defaultParseWidth:"any"}),quarter:Qe({matchPatterns:mm,defaultMatchWidth:"wide",parsePatterns:Nm,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Qe({matchPatterns:_m,defaultMatchWidth:"wide",parsePatterns:Tm,defaultParseWidth:"any"}),day:Qe({matchPatterns:vm,defaultMatchWidth:"wide",parsePatterns:gm,defaultParseWidth:"any"}),dayPeriod:Qe({matchPatterns:Im,defaultMatchWidth:"any",parsePatterns:fm,defaultParseWidth:"any"})},Rm={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},cm={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Sm={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},pm={date:_n({formats:Rm,defaultWidth:"full"}),time:_n({formats:cm,defaultWidth:"full"}),dateTime:_n({formats:Sm,defaultWidth:"full"})},Oo={code:"en-GB",formatDistance:Do,formatLong:pm,formatRelative:Ao,localize:ko,match:yo,options:{weekStartsOn:1,firstWeekContainsDate:4}},Dm={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Am={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},km={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ym={date:_n({formats:Dm,defaultWidth:"full"}),time:_n({formats:Am,defaultWidth:"full"}),dateTime:_n({formats:km,defaultWidth:"full"})},La={code:"en-US",formatDistance:Do,formatLong:ym,formatRelative:Ao,localize:ko,match:yo,options:{weekStartsOn:0,firstWeekContainsDate:1}},Om={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},bm=(e,n,t)=>{let r;const a=Om[e];return typeof a=="string"?r=a:n===1?r=a.one:r=a.other.replace("{{count}}",String(n)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+r:r+" siden":r},Lm={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},hm={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Mm={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Pm={date:_n({formats:Lm,defaultWidth:"full"}),time:_n({formats:hm,defaultWidth:"full"}),dateTime:_n({formats:Mm,defaultWidth:"full"})},Km={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Gm=(e,n,t,r)=>Km[e],Bm={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Fm={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},wm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Vm={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},jm={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},qm=(e,n)=>Number(e)+".",Um={ordinalNumber:qm,era:Xe({values:Bm,defaultWidth:"wide"}),quarter:Xe({values:Fm,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Xe({values:wm,defaultWidth:"wide"}),day:Xe({values:Vm,defaultWidth:"wide"}),dayPeriod:Xe({values:jm,defaultWidth:"wide"})},xm=/^(\d+)\.?/i,Hm=/\d+/i,Jm={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Ym={any:[/^f/i,/^e/i]},Cm={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},$m={any:[/1/i,/2/i,/3/i,/4/i]},Wm={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},zm={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Xm={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Qm={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Zm={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},eN={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},nN={ordinalNumber:Hl({matchPattern:xm,parsePattern:Hm,valueCallback:e=>parseInt(e,10)}),era:Qe({matchPatterns:Jm,defaultMatchWidth:"wide",parsePatterns:Ym,defaultParseWidth:"any"}),quarter:Qe({matchPatterns:Cm,defaultMatchWidth:"wide",parsePatterns:$m,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Qe({matchPatterns:Wm,defaultMatchWidth:"wide",parsePatterns:zm,defaultParseWidth:"any"}),day:Qe({matchPatterns:Xm,defaultMatchWidth:"wide",parsePatterns:Qm,defaultParseWidth:"any"}),dayPeriod:Qe({matchPatterns:Zm,defaultMatchWidth:"any",parsePatterns:eN,defaultParseWidth:"any"})},bo={code:"nb",formatDistance:bm,formatLong:Pm,formatRelative:Gm,localize:Um,match:nN,options:{weekStartsOn:1,firstWeekContainsDate:4}},rN={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},tN=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],aN=(e,n,t)=>{let r;const a=rN[e];return typeof a=="string"?r=a:n===1?r=a.one:r=a.other.replace("{{count}}",n<13?tN[n]:String(n)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+r:r+" sidan":r},lN={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},iN={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},sN={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},oN={date:_n({formats:lN,defaultWidth:"full"}),time:_n({formats:iN,defaultWidth:"full"}),dateTime:_n({formats:sN,defaultWidth:"full"})},uN={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},dN=(e,n,t,r)=>uN[e],EN={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},mN={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},NN={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},_N={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},TN={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},vN=(e,n)=>Number(e)+".",gN={ordinalNumber:vN,era:Xe({values:EN,defaultWidth:"wide"}),quarter:Xe({values:mN,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Xe({values:NN,defaultWidth:"wide"}),day:Xe({values:_N,defaultWidth:"wide"}),dayPeriod:Xe({values:TN,defaultWidth:"wide"})},IN=/^(\d+)\.?/i,fN=/\d+/i,RN={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},cN={any:[/^f/i,/^e/i]},SN={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},pN={any:[/1/i,/2/i,/3/i,/4/i]},DN={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},AN={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},kN={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},yN={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},ON={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},bN={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},LN={ordinalNumber:Hl({matchPattern:IN,parsePattern:fN,valueCallback:e=>parseInt(e,10)}),era:Qe({matchPatterns:RN,defaultMatchWidth:"wide",parsePatterns:cN,defaultParseWidth:"any"}),quarter:Qe({matchPatterns:SN,defaultMatchWidth:"wide",parsePatterns:pN,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Qe({matchPatterns:DN,defaultMatchWidth:"wide",parsePatterns:AN,defaultParseWidth:"any"}),day:Qe({matchPatterns:kN,defaultMatchWidth:"wide",parsePatterns:yN,defaultParseWidth:"any"}),dayPeriod:Qe({matchPatterns:ON,defaultMatchWidth:"any",parsePatterns:bN,defaultParseWidth:"any"})},Lo={code:"nn",formatDistance:aN,formatLong:oN,formatRelative:dN,localize:gN,match:LN,options:{weekStartsOn:1,firstWeekContainsDate:4}},hN={global:{dateLocale:bo,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},MN=v.createContext({locale:hN}),ha=()=>v.useContext(MN);var PN=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const KN=v.forwardRef((e,n)=>{var t,r,a,{rootElement:l,asChild:i}=e,s=PN(e,["rootElement","asChild"]);const o=qr(!1),d=(t=ha())===null||t===void 0?void 0:t.rootElement,u=(r=l??d)!==null&&r!==void 0?r:(a=globalThis?.document)===null||a===void 0?void 0:a.body,E=i?Ur:"div";return o?.isDarkside?u?Na.createPortal(m.createElement(Gd,{theme:o.theme,asChild:!0,hasBackground:!1,"data-color":o.color},m.createElement(E,Object.assign({ref:n,"data-aksel-portal":""},s))),u):null:u?Na.createPortal(m.createElement(E,Object.assign({ref:n,"data-aksel-portal":""},s)),u):null});function Bi(e){return e.sort((n,t)=>{const r=n.compareDocumentPosition(t);if(r&Node.DOCUMENT_POSITION_FOLLOWING||r&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(r&Node.DOCUMENT_POSITION_PRECEDING||r&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(r&Node.DOCUMENT_POSITION_DISCONNECTED||r&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const GN=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Fi(e,n,t){let r=e+1;return t&&r>=n&&(r=0),r}function wi(e,n,t){let r=e-1;return t&&r<0&&(r=n),r}const Xa=e=>e;class BN{constructor(){this.descendants=new Map,this.register=n=>{if(n!=null)return GN(n)?this.registerNode(n):t=>{this.registerNode(t,n)}},this.unregister=n=>{this.descendants.delete(n);const t=Bi(Array.from(this.descendants.keys()));this.assignIndex(t)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=n=>{this.descendants.forEach(t=>{const r=n.indexOf(t.node);t.index=r,t.node.dataset.index=t.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((t,r)=>t.index-r.index),this.enabledValues=()=>this.values().filter(n=>!n.disabled),this.item=n=>{if(this.count()!==0)return this.values()[n]},this.enabledItem=n=>{if(this.enabledCount()!==0)return this.enabledValues()[n]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const n=this.enabledValues().length-1;return this.enabledItem(n)},this.indexOf=n=>{var t,r;return n&&(r=(t=this.descendants.get(n))===null||t===void 0?void 0:t.index)!==null&&r!==void 0?r:-1},this.enabledIndexOf=n=>n==null?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(n)),this.next=(n,t=!0)=>{const r=Fi(n,this.count(),t);return this.item(r)},this.nextEnabled=(n,t=!0)=>{const r=this.item(n);if(!r)return;const a=this.enabledIndexOf(r.node),l=Fi(a,this.enabledCount(),t);return this.enabledItem(l)},this.prev=(n,t=!0)=>{const r=wi(n,this.count()-1,t);return this.item(r)},this.prevEnabled=(n,t=!0)=>{const r=this.item(n);if(!r)return;const a=this.enabledIndexOf(r.node),l=wi(a,this.enabledCount()-1,t);return this.enabledItem(l)},this.registerNode=(n,t)=>{if(!n)return;const r=this.descendants.get(n);if(r){this.descendants.set(n,Object.assign({index:r.index,node:n},t));return}const a=Array.from(this.descendants.keys()).concat(n),l=Bi(a);t?.disabled&&(t.disabled=!!t.disabled);const i=Object.assign({node:n,index:-1},t);this.descendants.set(n,i),this.assignIndex(l)}}}function FN(){const[e,n]=ba({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),t=Xa(l=>m.createElement(e,Object.assign({},l.value),l.children));function r(l){const i=n(),[s,o]=v.useState(-1),d=v.useRef(null);Gr(()=>()=>{d.current&&i.unregister(d.current)},[]),Gr(()=>{if(!d.current)return;const E=Number(d.current.dataset.index);s!==E&&!Number.isNaN(E)&&o(E)});const u=Xa(l?i.register(l):i.register);return{descendants:i,index:s,enabledIndex:i.enabledIndexOf(d.current),register:Bd([u,d])}}function a(){return v.useRef(new BN).current}return[t,n,a,r]}function wN(e,n=globalThis?.document){const t=Nt(e);v.useEffect(()=>{const r=a=>{a.key==="Escape"&&t(a)};return n.addEventListener("keydown",r,!0),()=>n.removeEventListener("keydown",r,!0)},[t,n])}const ho={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function Mo(e,n,t,{discrete:r}={discrete:!1}){if(!n)return;const a=t.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});a.addEventListener(e,n,{once:!0}),r&&a?Na.flushSync(()=>a.dispatchEvent(l)):a.dispatchEvent(l)}function VN(e,n=globalThis?.document){const t=Nt(e),r=v.useRef(!1);return v.useEffect(()=>{const a=l=>{if(l.target&&!r.current){const i={originalEvent:l};Mo(ho.FOCUS_OUTSIDE,t,i)}};return n.addEventListener("focusin",a),()=>n.removeEventListener("focusin",a)},[n,t]),{onFocusCapture:()=>{r.current=!0},onBlurCapture:()=>{r.current=!1}}}function jN(e,n=globalThis?.document){const t=Nt(e),r=v.useRef(!1),a=v.useRef(()=>{});return v.useEffect(()=>{const l=s=>{function o(){Mo(ho.POINTER_DOWN_OUTSIDE,t,{originalEvent:s},{discrete:!0})}s.target&&!r.current?s.pointerType==="touch"?(n.removeEventListener("click",a.current),a.current=o,n.addEventListener("click",a.current,{once:!0})):o():n.removeEventListener("click",a.current),r.current=!1},i=window.setTimeout(()=>{n.addEventListener("pointerdown",l)},0);return()=>{window.clearTimeout(i),n.removeEventListener("pointerdown",l),n.removeEventListener("click",a.current)}},[n,t]),{onPointerDownCapture:()=>{r.current=!0}}}var qN=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const[UN,xN,HN,JN]=FN();let cr=0,Vi;const YN=v.forwardRef((e,n)=>xN(!1)?m.createElement(ji,Object.assign({ref:n},e)):m.createElement(CN,null,m.createElement(ji,Object.assign({ref:n},e)))),CN=({children:e})=>{const n=HN();return m.createElement(UN,{value:n},e)},ji=v.forwardRef((e,n)=>{var t,{children:r,asChild:a,onEscapeKeyDown:l,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:o,onDismiss:d,safeZone:u,disableOutsidePointerEvents:E=!1,enabled:_=!0}=e,T=qN(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,g]=v.useState({}),{register:R,index:f,descendants:S}=JN({disableOutsidePointerEvents:E,disabled:!_,forceUpdate:()=>g({})}),[c,I]=v.useState(null),D=xr(I,R,n),p=(t=c?.ownerDocument)!==null&&t!==void 0?t:globalThis?.document,y=v.useRef(!1),b=v.useRef(!1),B=(()=>{let k=-1;return S.enabledValues().forEach((K,j)=>{K.disableOutsidePointerEvents&&(k=j)}),{isPointerEventsEnabled:f>=k,isBodyPointerEventsDisabled:cr>0,pointerStyle:f>=k&&cr>0?"auto":void 0}})();function h(k){var L,K;if(!u?.anchor&&!u?.dismissable||!_)return;k.defaultPrevented||(y.current=!0,k.detail.originalEvent.type==="pointerdown"&&(b.current=!0));const j=k.target;k.detail.originalEvent.type==="pointerdown"?(!((L=u?.anchor)===null||L===void 0)&&L.contains(j)||j===u?.anchor)&&k.preventDefault():!(j instanceof HTMLElement&&![u?.anchor,u?.dismissable].some(w=>w?.contains(j))&&!j.contains((K=u?.dismissable)!==null&&K!==void 0?K:null))&&k.preventDefault(),k.detail.originalEvent.type==="focusin"&&b.current&&k.preventDefault(),b.current=!1,y.current=!1}const G=jN(k=>{!B.isPointerEventsEnabled||!_||(i?.(k),o?.(k),u&&h(k),!k.defaultPrevented&&d&&d())},p),V=VN(k=>{_&&(s?.(k),o?.(k),u&&h(k),!k.defaultPrevented&&d&&d())},p);wN(k=>{!_||!(f===S.enabledCount()-1)||(l?.(k),!k.defaultPrevented&&d&&(k.preventDefault(),d()))},p),v.useEffect(()=>{if(!(!c||!_||!E))return cr===0&&(Vi=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),cr++,()=>{cr===1&&(p.body.style.pointerEvents=Vi),cr--}},[c,p,E,S,_]),v.useEffect(()=>()=>S.values().forEach(k=>k.forceUpdate()),[S,c]);const P=a?Ur:"div";return m.createElement(P,Object.assign({ref:D},T,{onFocusCapture:V.onFocusCapture,onBlurCapture:V.onBlurCapture,onPointerDownCapture:G.onPointerDownCapture,style:Object.assign({pointerEvents:B.pointerStyle},T.style)}),r)}),Fr=Math.min,dr=Math.max,_a=Math.round,Gt=Math.floor,Ln=e=>({x:e,y:e}),$N={left:"right",right:"left",bottom:"top",top:"bottom"},WN={start:"end",end:"start"};function Il(e,n,t){return dr(e,Fr(n,t))}function Rt(e,n){return typeof e=="function"?e(n):e}function Er(e){return e.split("-")[0]}function ct(e){return e.split("-")[1]}function Po(e){return e==="x"?"y":"x"}function Jl(e){return e==="y"?"height":"width"}const zN=new Set(["top","bottom"]);function Xn(e){return zN.has(Er(e))?"y":"x"}function Yl(e){return Po(Xn(e))}function XN(e,n,t){t===void 0&&(t=!1);const r=ct(e),a=Yl(e),l=Jl(a);let i=a==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[l]>n.floating[l]&&(i=Ta(i)),[i,Ta(i)]}function QN(e){const n=Ta(e);return[fl(e),n,fl(n)]}function fl(e){return e.replace(/start|end/g,n=>WN[n])}const qi=["left","right"],Ui=["right","left"],ZN=["top","bottom"],e_=["bottom","top"];function n_(e,n,t){switch(e){case"top":case"bottom":return t?n?Ui:qi:n?qi:Ui;case"left":case"right":return n?ZN:e_;default:return[]}}function r_(e,n,t,r){const a=ct(e);let l=n_(Er(e),t==="start",r);return a&&(l=l.map(i=>i+"-"+a),n&&(l=l.concat(l.map(fl)))),l}function Ta(e){return e.replace(/left|right|bottom|top/g,n=>$N[n])}function t_(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ko(e){return typeof e!="number"?t_(e):{top:e,right:e,bottom:e,left:e}}function va(e){const{x:n,y:t,width:r,height:a}=e;return{width:r,height:a,top:t,left:n,right:n+r,bottom:t+a,x:n,y:t}}function xi(e,n,t){let{reference:r,floating:a}=e;const l=Xn(n),i=Yl(n),s=Jl(i),o=Er(n),d=l==="y",u=r.x+r.width/2-a.width/2,E=r.y+r.height/2-a.height/2,_=r[s]/2-a[s]/2;let T;switch(o){case"top":T={x:u,y:r.y-a.height};break;case"bottom":T={x:u,y:r.y+r.height};break;case"right":T={x:r.x+r.width,y:E};break;case"left":T={x:r.x-a.width,y:E};break;default:T={x:r.x,y:r.y}}switch(ct(n)){case"start":T[i]-=_*(t&&d?-1:1);break;case"end":T[i]+=_*(t&&d?-1:1);break}return T}const a_=async(e,n,t)=>{const{placement:r="bottom",strategy:a="absolute",middleware:l=[],platform:i}=t,s=l.filter(Boolean),o=await(i.isRTL==null?void 0:i.isRTL(n));let d=await i.getElementRects({reference:e,floating:n,strategy:a}),{x:u,y:E}=xi(d,r,o),_=r,T={},g=0;for(let R=0;R<s.length;R++){const{name:f,fn:S}=s[R],{x:c,y:I,data:D,reset:p}=await S({x:u,y:E,initialPlacement:r,placement:_,strategy:a,middlewareData:T,rects:d,platform:i,elements:{reference:e,floating:n}});u=c??u,E=I??E,T={...T,[f]:{...T[f],...D}},p&&g<=50&&(g++,typeof p=="object"&&(p.placement&&(_=p.placement),p.rects&&(d=p.rects===!0?await i.getElementRects({reference:e,floating:n,strategy:a}):p.rects),{x:u,y:E}=xi(d,_,o)),R=-1)}return{x:u,y:E,placement:_,strategy:a,middlewareData:T}};async function Go(e,n){var t;n===void 0&&(n={});const{x:r,y:a,platform:l,rects:i,elements:s,strategy:o}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:E="floating",altBoundary:_=!1,padding:T=0}=Rt(n,e),g=Ko(T),f=s[_?E==="floating"?"reference":"floating":E],S=va(await l.getClippingRect({element:(t=await(l.isElement==null?void 0:l.isElement(f)))==null||t?f:f.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(s.floating)),boundary:d,rootBoundary:u,strategy:o})),c=E==="floating"?{x:r,y:a,width:i.floating.width,height:i.floating.height}:i.reference,I=await(l.getOffsetParent==null?void 0:l.getOffsetParent(s.floating)),D=await(l.isElement==null?void 0:l.isElement(I))?await(l.getScale==null?void 0:l.getScale(I))||{x:1,y:1}:{x:1,y:1},p=va(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:c,offsetParent:I,strategy:o}):c);return{top:(S.top-p.top+g.top)/D.y,bottom:(p.bottom-S.bottom+g.bottom)/D.y,left:(S.left-p.left+g.left)/D.x,right:(p.right-S.right+g.right)/D.x}}const l_=e=>({name:"arrow",options:e,async fn(n){const{x:t,y:r,placement:a,rects:l,platform:i,elements:s,middlewareData:o}=n,{element:d,padding:u=0}=Rt(e,n)||{};if(d==null)return{};const E=Ko(u),_={x:t,y:r},T=Yl(a),g=Jl(T),R=await i.getDimensions(d),f=T==="y",S=f?"top":"left",c=f?"bottom":"right",I=f?"clientHeight":"clientWidth",D=l.reference[g]+l.reference[T]-_[T]-l.floating[g],p=_[T]-l.reference[T],y=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d));let b=y?y[I]:0;(!b||!await(i.isElement==null?void 0:i.isElement(y)))&&(b=s.floating[I]||l.floating[g]);const B=D/2-p/2,h=b/2-R[g]/2-1,G=Fr(E[S],h),V=Fr(E[c],h),P=G,k=b-R[g]-V,L=b/2-R[g]/2+B,K=Il(P,L,k),j=!o.arrow&&ct(a)!=null&&L!==K&&l.reference[g]/2-(L<P?G:V)-R[g]/2<0,q=j?L<P?L-P:L-k:0;return{[T]:_[T]+q,data:{[T]:K,centerOffset:L-K-q,...j&&{alignmentOffset:q}},reset:j}}}),i_=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var t,r;const{placement:a,middlewareData:l,rects:i,initialPlacement:s,platform:o,elements:d}=n,{mainAxis:u=!0,crossAxis:E=!0,fallbackPlacements:_,fallbackStrategy:T="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:R=!0,...f}=Rt(e,n);if((t=l.arrow)!=null&&t.alignmentOffset)return{};const S=Er(a),c=Xn(s),I=Er(s)===s,D=await(o.isRTL==null?void 0:o.isRTL(d.floating)),p=_||(I||!R?[Ta(s)]:QN(s)),y=g!=="none";!_&&y&&p.push(...r_(s,R,g,D));const b=[s,...p],B=await Go(n,f),h=[];let G=((r=l.flip)==null?void 0:r.overflows)||[];if(u&&h.push(B[S]),E){const L=XN(a,i,D);h.push(B[L[0]],B[L[1]])}if(G=[...G,{placement:a,overflows:h}],!h.every(L=>L<=0)){var V,P;const L=(((V=l.flip)==null?void 0:V.index)||0)+1,K=b[L];if(K&&(!(E==="alignment"?c!==Xn(K):!1)||G.every(w=>Xn(w.placement)===c?w.overflows[0]>0:!0)))return{data:{index:L,overflows:G},reset:{placement:K}};let j=(P=G.filter(q=>q.overflows[0]<=0).sort((q,w)=>q.overflows[1]-w.overflows[1])[0])==null?void 0:P.placement;if(!j)switch(T){case"bestFit":{var k;const q=(k=G.filter(w=>{if(y){const F=Xn(w.placement);return F===c||F==="y"}return!0}).map(w=>[w.placement,w.overflows.filter(F=>F>0).reduce((F,Y)=>F+Y,0)]).sort((w,F)=>w[1]-F[1])[0])==null?void 0:k[0];q&&(j=q);break}case"initialPlacement":j=s;break}if(a!==j)return{reset:{placement:j}}}return{}}}},s_=new Set(["left","top"]);async function o_(e,n){const{placement:t,platform:r,elements:a}=e,l=await(r.isRTL==null?void 0:r.isRTL(a.floating)),i=Er(t),s=ct(t),o=Xn(t)==="y",d=s_.has(i)?-1:1,u=l&&o?-1:1,E=Rt(n,e);let{mainAxis:_,crossAxis:T,alignmentAxis:g}=typeof E=="number"?{mainAxis:E,crossAxis:0,alignmentAxis:null}:{mainAxis:E.mainAxis||0,crossAxis:E.crossAxis||0,alignmentAxis:E.alignmentAxis};return s&&typeof g=="number"&&(T=s==="end"?g*-1:g),o?{x:T*u,y:_*d}:{x:_*d,y:T*u}}const u_=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var t,r;const{x:a,y:l,placement:i,middlewareData:s}=n,o=await o_(n,e);return i===((t=s.offset)==null?void 0:t.placement)&&(r=s.arrow)!=null&&r.alignmentOffset?{}:{x:a+o.x,y:l+o.y,data:{...o,placement:i}}}}},d_=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:t,y:r,placement:a}=n,{mainAxis:l=!0,crossAxis:i=!1,limiter:s={fn:f=>{let{x:S,y:c}=f;return{x:S,y:c}}},...o}=Rt(e,n),d={x:t,y:r},u=await Go(n,o),E=Xn(Er(a)),_=Po(E);let T=d[_],g=d[E];if(l){const f=_==="y"?"top":"left",S=_==="y"?"bottom":"right",c=T+u[f],I=T-u[S];T=Il(c,T,I)}if(i){const f=E==="y"?"top":"left",S=E==="y"?"bottom":"right",c=g+u[f],I=g-u[S];g=Il(c,g,I)}const R=s.fn({...n,[_]:T,[E]:g});return{...R,data:{x:R.x-t,y:R.y-r,enabled:{[_]:l,[E]:i}}}}}};function Ma(){return typeof window<"u"}function $r(e){return Bo(e)?(e.nodeName||"").toLowerCase():"#document"}function rn(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function hn(e){var n;return(n=(Bo(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function Bo(e){return Ma()?e instanceof Node||e instanceof rn(e).Node:!1}function ge(e){return Ma()?e instanceof Element||e instanceof rn(e).Element:!1}function on(e){return Ma()?e instanceof HTMLElement||e instanceof rn(e).HTMLElement:!1}function ga(e){return!Ma()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof rn(e).ShadowRoot}const E_=new Set(["inline","contents"]);function St(e){const{overflow:n,overflowX:t,overflowY:r,display:a}=Tn(e);return/auto|scroll|overlay|hidden|clip/.test(n+r+t)&&!E_.has(a)}const m_=new Set(["table","td","th"]);function N_(e){return m_.has($r(e))}const __=[":popover-open",":modal"];function Pa(e){return __.some(n=>{try{return e.matches(n)}catch{return!1}})}const T_=["transform","translate","scale","rotate","perspective"],v_=["transform","translate","scale","rotate","perspective","filter"],g_=["paint","layout","strict","content"];function Cl(e){const n=Ka(),t=ge(e)?Tn(e):e;return T_.some(r=>t[r]?t[r]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!n&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!n&&(t.filter?t.filter!=="none":!1)||v_.some(r=>(t.willChange||"").includes(r))||g_.some(r=>(t.contain||"").includes(r))}function I_(e){let n=xn(e);for(;on(n)&&!jn(n);){if(Cl(n))return n;if(Pa(n))return null;n=xn(n)}return null}function Ka(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const f_=new Set(["html","body","#document"]);function jn(e){return f_.has($r(e))}function Tn(e){return rn(e).getComputedStyle(e)}function Ga(e){return ge(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function xn(e){if($r(e)==="html")return e;const n=e.assignedSlot||e.parentNode||ga(e)&&e.host||hn(e);return ga(n)?n.host:n}function Fo(e){const n=xn(e);return jn(n)?e.ownerDocument?e.ownerDocument.body:e.body:on(n)&&St(n)?n:Fo(n)}function er(e,n,t){var r;n===void 0&&(n=[]),t===void 0&&(t=!0);const a=Fo(e),l=a===((r=e.ownerDocument)==null?void 0:r.body),i=rn(a);if(l){const s=Rl(i);return n.concat(i,i.visualViewport||[],St(a)?a:[],s&&t?er(s):[])}return n.concat(a,er(a,[],t))}function Rl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function wo(e){const n=Tn(e);let t=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const a=on(e),l=a?e.offsetWidth:t,i=a?e.offsetHeight:r,s=_a(t)!==l||_a(r)!==i;return s&&(t=l,r=i),{width:t,height:r,$:s}}function $l(e){return ge(e)?e:e.contextElement}function Or(e){const n=$l(e);if(!on(n))return Ln(1);const t=n.getBoundingClientRect(),{width:r,height:a,$:l}=wo(n);let i=(l?_a(t.width):t.width)/r,s=(l?_a(t.height):t.height)/a;return(!i||!Number.isFinite(i))&&(i=1),(!s||!Number.isFinite(s))&&(s=1),{x:i,y:s}}const R_=Ln(0);function Vo(e){const n=rn(e);return!Ka()||!n.visualViewport?R_:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function c_(e,n,t){return n===void 0&&(n=!1),!t||n&&t!==rn(e)?!1:n}function mr(e,n,t,r){n===void 0&&(n=!1),t===void 0&&(t=!1);const a=e.getBoundingClientRect(),l=$l(e);let i=Ln(1);n&&(r?ge(r)&&(i=Or(r)):i=Or(e));const s=c_(l,t,r)?Vo(l):Ln(0);let o=(a.left+s.x)/i.x,d=(a.top+s.y)/i.y,u=a.width/i.x,E=a.height/i.y;if(l){const _=rn(l),T=r&&ge(r)?rn(r):r;let g=_,R=Rl(g);for(;R&&r&&T!==g;){const f=Or(R),S=R.getBoundingClientRect(),c=Tn(R),I=S.left+(R.clientLeft+parseFloat(c.paddingLeft))*f.x,D=S.top+(R.clientTop+parseFloat(c.paddingTop))*f.y;o*=f.x,d*=f.y,u*=f.x,E*=f.y,o+=I,d+=D,g=rn(R),R=Rl(g)}}return va({width:u,height:E,x:o,y:d})}function Ba(e,n){const t=Ga(e).scrollLeft;return n?n.left+t:mr(hn(e)).left+t}function jo(e,n){const t=e.getBoundingClientRect(),r=t.left+n.scrollLeft-Ba(e,t),a=t.top+n.scrollTop;return{x:r,y:a}}function S_(e){let{elements:n,rect:t,offsetParent:r,strategy:a}=e;const l=a==="fixed",i=hn(r),s=n?Pa(n.floating):!1;if(r===i||s&&l)return t;let o={scrollLeft:0,scrollTop:0},d=Ln(1);const u=Ln(0),E=on(r);if((E||!E&&!l)&&(($r(r)!=="body"||St(i))&&(o=Ga(r)),on(r))){const T=mr(r);d=Or(r),u.x=T.x+r.clientLeft,u.y=T.y+r.clientTop}const _=i&&!E&&!l?jo(i,o):Ln(0);return{width:t.width*d.x,height:t.height*d.y,x:t.x*d.x-o.scrollLeft*d.x+u.x+_.x,y:t.y*d.y-o.scrollTop*d.y+u.y+_.y}}function p_(e){return Array.from(e.getClientRects())}function D_(e){const n=hn(e),t=Ga(e),r=e.ownerDocument.body,a=dr(n.scrollWidth,n.clientWidth,r.scrollWidth,r.clientWidth),l=dr(n.scrollHeight,n.clientHeight,r.scrollHeight,r.clientHeight);let i=-t.scrollLeft+Ba(e);const s=-t.scrollTop;return Tn(r).direction==="rtl"&&(i+=dr(n.clientWidth,r.clientWidth)-a),{width:a,height:l,x:i,y:s}}const Hi=25;function A_(e,n){const t=rn(e),r=hn(e),a=t.visualViewport;let l=r.clientWidth,i=r.clientHeight,s=0,o=0;if(a){l=a.width,i=a.height;const u=Ka();(!u||u&&n==="fixed")&&(s=a.offsetLeft,o=a.offsetTop)}const d=Ba(r);if(d<=0){const u=r.ownerDocument,E=u.body,_=getComputedStyle(E),T=u.compatMode==="CSS1Compat"&&parseFloat(_.marginLeft)+parseFloat(_.marginRight)||0,g=Math.abs(r.clientWidth-E.clientWidth-T);g<=Hi&&(l-=g)}else d<=Hi&&(l+=d);return{width:l,height:i,x:s,y:o}}const k_=new Set(["absolute","fixed"]);function y_(e,n){const t=mr(e,!0,n==="fixed"),r=t.top+e.clientTop,a=t.left+e.clientLeft,l=on(e)?Or(e):Ln(1),i=e.clientWidth*l.x,s=e.clientHeight*l.y,o=a*l.x,d=r*l.y;return{width:i,height:s,x:o,y:d}}function Ji(e,n,t){let r;if(n==="viewport")r=A_(e,t);else if(n==="document")r=D_(hn(e));else if(ge(n))r=y_(n,t);else{const a=Vo(e);r={x:n.x-a.x,y:n.y-a.y,width:n.width,height:n.height}}return va(r)}function qo(e,n){const t=xn(e);return t===n||!ge(t)||jn(t)?!1:Tn(t).position==="fixed"||qo(t,n)}function O_(e,n){const t=n.get(e);if(t)return t;let r=er(e,[],!1).filter(s=>ge(s)&&$r(s)!=="body"),a=null;const l=Tn(e).position==="fixed";let i=l?xn(e):e;for(;ge(i)&&!jn(i);){const s=Tn(i),o=Cl(i);!o&&s.position==="fixed"&&(a=null),(l?!o&&!a:!o&&s.position==="static"&&!!a&&k_.has(a.position)||St(i)&&!o&&qo(e,i))?r=r.filter(u=>u!==i):a=s,i=xn(i)}return n.set(e,r),r}function b_(e){let{element:n,boundary:t,rootBoundary:r,strategy:a}=e;const i=[...t==="clippingAncestors"?Pa(n)?[]:O_(n,this._c):[].concat(t),r],s=i[0],o=i.reduce((d,u)=>{const E=Ji(n,u,a);return d.top=dr(E.top,d.top),d.right=Fr(E.right,d.right),d.bottom=Fr(E.bottom,d.bottom),d.left=dr(E.left,d.left),d},Ji(n,s,a));return{width:o.right-o.left,height:o.bottom-o.top,x:o.left,y:o.top}}function L_(e){const{width:n,height:t}=wo(e);return{width:n,height:t}}function h_(e,n,t){const r=on(n),a=hn(n),l=t==="fixed",i=mr(e,!0,l,n);let s={scrollLeft:0,scrollTop:0};const o=Ln(0);function d(){o.x=Ba(a)}if(r||!r&&!l)if(($r(n)!=="body"||St(a))&&(s=Ga(n)),r){const T=mr(n,!0,l,n);o.x=T.x+n.clientLeft,o.y=T.y+n.clientTop}else a&&d();l&&!r&&a&&d();const u=a&&!r&&!l?jo(a,s):Ln(0),E=i.left+s.scrollLeft-o.x-u.x,_=i.top+s.scrollTop-o.y-u.y;return{x:E,y:_,width:i.width,height:i.height}}function Qa(e){return Tn(e).position==="static"}function Yi(e,n){if(!on(e)||Tn(e).position==="fixed")return null;if(n)return n(e);let t=e.offsetParent;return hn(e)===t&&(t=t.ownerDocument.body),t}function Uo(e,n){const t=rn(e);if(Pa(e))return t;if(!on(e)){let a=xn(e);for(;a&&!jn(a);){if(ge(a)&&!Qa(a))return a;a=xn(a)}return t}let r=Yi(e,n);for(;r&&N_(r)&&Qa(r);)r=Yi(r,n);return r&&jn(r)&&Qa(r)&&!Cl(r)?t:r||I_(e)||t}const M_=async function(e){const n=this.getOffsetParent||Uo,t=this.getDimensions,r=await t(e.floating);return{reference:h_(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function P_(e){return Tn(e).direction==="rtl"}const K_={convertOffsetParentRelativeRectToViewportRelativeRect:S_,getDocumentElement:hn,getClippingRect:b_,getOffsetParent:Uo,getElementRects:M_,getClientRects:p_,getDimensions:L_,getScale:Or,isElement:ge,isRTL:P_};function xo(e,n){return e.x===n.x&&e.y===n.y&&e.width===n.width&&e.height===n.height}function G_(e,n){let t=null,r;const a=hn(e);function l(){var s;clearTimeout(r),(s=t)==null||s.disconnect(),t=null}function i(s,o){s===void 0&&(s=!1),o===void 0&&(o=1),l();const d=e.getBoundingClientRect(),{left:u,top:E,width:_,height:T}=d;if(s||n(),!_||!T)return;const g=Gt(E),R=Gt(a.clientWidth-(u+_)),f=Gt(a.clientHeight-(E+T)),S=Gt(u),I={rootMargin:-g+"px "+-R+"px "+-f+"px "+-S+"px",threshold:dr(0,Fr(1,o))||1};let D=!0;function p(y){const b=y[0].intersectionRatio;if(b!==o){if(!D)return i();b?i(!1,b):r=setTimeout(()=>{i(!1,1e-7)},1e3)}b===1&&!xo(d,e.getBoundingClientRect())&&i(),D=!1}try{t=new IntersectionObserver(p,{...I,root:a.ownerDocument})}catch{t=new IntersectionObserver(p,I)}t.observe(e)}return i(!0),l}function cl(e,n,t,r){r===void 0&&(r={});const{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:o=!1}=r,d=$l(e),u=a||l?[...d?er(d):[],...er(n)]:[];u.forEach(S=>{a&&S.addEventListener("scroll",t,{passive:!0}),l&&S.addEventListener("resize",t)});const E=d&&s?G_(d,t):null;let _=-1,T=null;i&&(T=new ResizeObserver(S=>{let[c]=S;c&&c.target===d&&T&&(T.unobserve(n),cancelAnimationFrame(_),_=requestAnimationFrame(()=>{var I;(I=T)==null||I.observe(n)})),t()}),d&&!o&&T.observe(d),T.observe(n));let g,R=o?mr(e):null;o&&f();function f(){const S=mr(e);R&&!xo(R,S)&&t(),R=S,g=requestAnimationFrame(f)}return t(),()=>{var S;u.forEach(c=>{a&&c.removeEventListener("scroll",t),l&&c.removeEventListener("resize",t)}),E?.(),(S=T)==null||S.disconnect(),T=null,o&&cancelAnimationFrame(g)}}const B_=u_,F_=d_,w_=i_,Ci=l_,V_=(e,n,t)=>{const r=new Map,a={platform:K_,...t},l={...a.platform,_c:r};return a_(e,n,{...a,platform:l})};var j_=typeof document<"u",q_=function(){},Ea=j_?v.useLayoutEffect:q_;function Ia(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let t,r,a;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==n.length)return!1;for(r=t;r--!==0;)if(!Ia(e[r],n[r]))return!1;return!0}if(a=Object.keys(e),t=a.length,t!==Object.keys(n).length)return!1;for(r=t;r--!==0;)if(!{}.hasOwnProperty.call(n,a[r]))return!1;for(r=t;r--!==0;){const l=a[r];if(!(l==="_owner"&&e.$$typeof)&&!Ia(e[l],n[l]))return!1}return!0}return e!==e&&n!==n}function Ho(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function $i(e,n){const t=Ho(e);return Math.round(n*t)/t}function Za(e){const n=v.useRef(e);return Ea(()=>{n.current=e}),n}function U_(e){e===void 0&&(e={});const{placement:n="bottom",strategy:t="absolute",middleware:r=[],platform:a,elements:{reference:l,floating:i}={},transform:s=!0,whileElementsMounted:o,open:d}=e,[u,E]=v.useState({x:0,y:0,strategy:t,placement:n,middlewareData:{},isPositioned:!1}),[_,T]=v.useState(r);Ia(_,r)||T(r);const[g,R]=v.useState(null),[f,S]=v.useState(null),c=v.useCallback(w=>{w!==y.current&&(y.current=w,R(w))},[]),I=v.useCallback(w=>{w!==b.current&&(b.current=w,S(w))},[]),D=l||g,p=i||f,y=v.useRef(null),b=v.useRef(null),B=v.useRef(u),h=o!=null,G=Za(o),V=Za(a),P=Za(d),k=v.useCallback(()=>{if(!y.current||!b.current)return;const w={placement:n,strategy:t,middleware:_};V.current&&(w.platform=V.current),V_(y.current,b.current,w).then(F=>{const Y={...F,isPositioned:P.current!==!1};L.current&&!Ia(B.current,Y)&&(B.current=Y,ql.flushSync(()=>{E(Y)}))})},[_,n,t,V,P]);Ea(()=>{d===!1&&B.current.isPositioned&&(B.current.isPositioned=!1,E(w=>({...w,isPositioned:!1})))},[d]);const L=v.useRef(!1);Ea(()=>(L.current=!0,()=>{L.current=!1}),[]),Ea(()=>{if(D&&(y.current=D),p&&(b.current=p),D&&p){if(G.current)return G.current(D,p,k);k()}},[D,p,k,G,h]);const K=v.useMemo(()=>({reference:y,floating:b,setReference:c,setFloating:I}),[c,I]),j=v.useMemo(()=>({reference:D,floating:p}),[D,p]),q=v.useMemo(()=>{const w={position:t,left:0,top:0};if(!j.floating)return w;const F=$i(j.floating,u.x),Y=$i(j.floating,u.y);return s?{...w,transform:"translate("+F+"px, "+Y+"px)",...Ho(j.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:F,top:Y}},[t,s,j.floating,u.x,u.y]);return v.useMemo(()=>({...u,update:k,refs:K,elements:j,floatingStyles:q}),[u,k,K,j,q])}const x_=e=>{function n(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:r,padding:a}=typeof e=="function"?e(t):e;return r&&n(r)?r.current!=null?Ci({element:r.current,padding:a}).fn(t):{}:r?Ci({element:r,padding:a}).fn(t):{}}}},Jo=(e,n)=>({...B_(e),options:[e,n]}),Yo=(e,n)=>({...F_(e),options:[e,n]}),Co=(e,n)=>({...w_(e),options:[e,n]}),$o=(e,n)=>({...x_(e),options:[e,n]}),Wi=/(\w+)/g;function H_(e,n){const t=Array.isArray(e)?e:J_(e);for(const r of n){if(!r)continue;let a=r;for(let l=0;l<t.length;l++){const i=a[t[l]];i!==void 0&&(a=i)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function J_(e){const n=[];let t=Wi.exec(e);for(;t;){const[,r,a]=t;n.push(r||a),t=Wi.exec(e)}return n}const Y_=/{[^}]*}/g;function Yn(e,...n){const t=ha(),r=t.translations||[],a=[...n,...Array.isArray(r)?r.map(i=>i[e]):[r[e]],t.locale[e]];return(i,s)=>{const o=H_(i,a);return s?o.replace(Y_,d=>{const u=d.substring(1,d.length-1);if(s[u]===void 0){const E=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${E}'`)}return s[u]}):o}}function Wo(){const e=ha(),n=e.translations||[],t=Array.isArray(n)?n.map(r=>r.global):[n.global];t.push(e.locale.global);for(const r of t)if(r?.dateLocale)return r.dateLocale;throw new Error("dateLocale not found.")}var C_=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const $_=v.forwardRef((e,n)=>{var{className:t,size:r="medium",title:a,transparent:l=!1,variant:i="neutral",id:s,"data-color":o}=e,d=C_(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:u}=ee(),E=pn(),_=Yn("Loader");return m.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${E}`,ref:n,className:u("navds-loader",t,`navds-loader--${r}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":o??W_(i)},Ye(d,["children"]),{"data-variant":i}),m.createElement("title",{id:s??`loader-${E}`},a||_("title")),m.createElement("circle",{className:u("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),m.createElement("circle",{className:u("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function W_(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var z_=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Oe=v.forwardRef((e,n)=>{var{as:t="button",variant:r="primary",className:a,children:l,size:i="medium",loading:s=!1,disabled:o,icon:d,iconPosition:u="left",onKeyUp:E,"data-color":_}=e,T=z_(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:g}=ee(),R=o||s?Ye(T,["href"]):T,f=S=>{S.key===" "&&!o&&!s&&S.currentTarget.click()};return m.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},{"data-color":_??X_(r),"data-variant":Q_(r)},R,{ref:n,onKeyUp:Zn(E,f),className:g(a,"navds-button",`navds-button--${r}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!d&&!l,"navds-button--disabled":o??s}),disabled:o??s?!0:void 0}),d&&u==="left"&&m.createElement("span",{className:g("navds-button__icon")},d),s&&m.createElement($_,{size:i}),l&&m.createElement(Re,{as:"span",size:i==="medium"?"medium":"small"},l),d&&u==="right"&&m.createElement("span",{className:g("navds-button__icon")},d))});function X_(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function Q_(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var Z_=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const eT={error:UE,warning:xl,info:cE,success:_E},pt=v.forwardRef((e,n)=>{var{children:t,className:r,variant:a,size:l="medium",fullWidth:i=!1,contentMaxWidth:s=!0,inline:o=!1,closeButton:d=!1,onClose:u}=e,E=Z_(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:_}=ee(),T=Yn("Alert"),g=eT[a];return m.createElement("div",Object.assign({},E,{"data-color":nT(a),"data-variant":a,ref:n,className:_(r,"navds-alert",`navds-alert--${a}`,`navds-alert--${l}`,{"navds-alert--full-width":i,"navds-alert--inline":o,"navds-alert--close-button":d})}),m.createElement(g,{title:T(a),className:_("navds-alert__icon")}),m.createElement(Ul,{as:"div",size:l,className:_("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},t),d&&!o&&m.createElement("div",{className:_("navds-alert__button-wrapper")},m.createElement(Oe,{className:_("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:m.createElement(So,{title:["error","warning"].includes(a)?T("closeAlert"):T("closeMessage")})})))});function nT(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function Dt(e,n,t){const r=ie(e,t?.in);return isNaN(n)?_e(t?.in||e,NaN):(n&&r.setDate(r.getDate()+n),r)}function Wl(e,n,t){const r=ie(e,t?.in);if(isNaN(n))return _e(e,NaN);if(!n)return r;const a=r.getDate(),l=_e(e,r.getTime());l.setMonth(r.getMonth()+n+1,0);const i=l.getDate();return a>=i?l:(r.setFullYear(l.getFullYear(),l.getMonth(),a),r)}function fa(e,n){const t=ie(e,n?.in).getDay();return t===0||t===6}function Nr(e,n){return Un(e,{...n,weekStartsOn:1})}function zo(e,n){const t=ie(e,n?.in),r=t.getFullYear(),a=_e(t,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const l=Nr(a),i=_e(t,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=Nr(i);return t.getTime()>=l.getTime()?r+1:t.getTime()>=s.getTime()?r:r-1}function Ra(e){const n=ie(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function Hn(e,n){const t=ie(e,n?.in);return t.setHours(0,0,0,0),t}function Qn(e,n,t){const[r,a]=Cr(t?.in,e,n),l=Hn(r),i=Hn(a),s=+l-Ra(l),o=+i-Ra(i);return Math.round((s-o)/$E)}function rT(e,n){const t=zo(e,n),r=_e(e,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),Nr(r)}function tT(e,n,t){return Dt(e,n*7,t)}function zl(e,n,t){return Wl(e,n*12,t)}function aT(e,n){let t,r=n?.in;return e.forEach(a=>{!r&&typeof a=="object"&&(r=_e.bind(null,a));const l=ie(a,r);(!t||t<l||isNaN(+l))&&(t=l)}),_e(r,t||NaN)}function lT(e,n){let t,r=n?.in;return e.forEach(a=>{!r&&typeof a=="object"&&(r=_e.bind(null,a));const l=ie(a,r);(!t||t>l||isNaN(+l))&&(t=l)}),_e(r,t||NaN)}function Xl(e,n,t){const[r,a]=Cr(t?.in,e,n);return+Hn(r)==+Hn(a)}function Xo(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function iT(e){return!(!Xo(e)&&typeof e!="number"||isNaN(+ie(e)))}function sT(e,n,t){const[r,a]=Cr(t?.in,e,n),l=r.getFullYear()-a.getFullYear(),i=r.getMonth()-a.getMonth();return l*12+i}function Qo(e,n){const t=ie(e,n?.in),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function oT(e,n){const[t,r]=Cr(e,n.start,n.end);return{start:t,end:r}}function Zo(e,n){const{start:t,end:r}=oT(n?.in,e);let a=+t>+r;const l=a?+t:+r,i=a?r:t;i.setHours(0,0,0,0),i.setDate(1);let s=1;const o=[];for(;+i<=l;)o.push(_e(t,i)),i.setMonth(i.getMonth()+s);return a?o.reverse():o}function _r(e,n){const t=ie(e,n?.in);return t.setDate(1),t.setHours(0,0,0,0),t}function Fa(e,n){const t=ie(e,n?.in),r=t.getFullYear();return t.setFullYear(r+1,0,0),t.setHours(23,59,59,999),t}function At(e,n){const t=ie(e,n?.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function eu(e,n){const t=gr(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=ie(e,n?.in),l=a.getDay(),i=(l<r?-7:0)+6-(l-r);return a.setDate(a.getDate()+i),a.setHours(23,59,59,999),a}function uT(e,n){return eu(e,{...n,weekStartsOn:1})}function dT(e,n){const t=ie(e,n?.in);return Qn(t,At(t))+1}function Ql(e,n){const t=ie(e,n?.in),r=+Nr(t)-+rT(t);return Math.round(r/po)+1}function Zl(e,n){const t=ie(e,n?.in),r=t.getFullYear(),a=gr(),l=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=_e(n?.in||e,0);i.setFullYear(r+1,0,l),i.setHours(0,0,0,0);const s=Un(i,n),o=_e(n?.in||e,0);o.setFullYear(r,0,l),o.setHours(0,0,0,0);const d=Un(o,n);return+t>=+s?r+1:+t>=+d?r:r-1}function ET(e,n){const t=gr(),r=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??t.firstWeekContainsDate??t.locale?.options?.firstWeekContainsDate??1,a=Zl(e,n),l=_e(n?.in||e,0);return l.setFullYear(a,0,r),l.setHours(0,0,0,0),Un(l,n)}function ei(e,n){const t=ie(e,n?.in),r=+Un(t,n)-+ET(t,n);return Math.round(r/po)+1}function Ne(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const zn={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return Ne(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):Ne(t+1,2)},d(e,n){return Ne(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return Ne(e.getHours()%12||12,n.length)},H(e,n){return Ne(e.getHours(),n.length)},m(e,n){return Ne(e.getMinutes(),n.length)},s(e,n){return Ne(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),a=Math.trunc(r*Math.pow(10,t-3));return Ne(a,n.length)}},Sr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},zi={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),a=r>0?r:1-r;return t.ordinalNumber(a,{unit:"year"})}return zn.y(e,n)},Y:function(e,n,t,r){const a=Zl(e,r),l=a>0?a:1-a;if(n==="YY"){const i=l%100;return Ne(i,2)}return n==="Yo"?t.ordinalNumber(l,{unit:"year"}):Ne(l,n.length)},R:function(e,n){const t=zo(e);return Ne(t,n.length)},u:function(e,n){const t=e.getFullYear();return Ne(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return Ne(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return Ne(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return zn.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return Ne(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const a=ei(e,r);return n==="wo"?t.ordinalNumber(a,{unit:"week"}):Ne(a,n.length)},I:function(e,n,t){const r=Ql(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):Ne(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):zn.d(e,n)},D:function(e,n,t){const r=dT(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):Ne(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const a=e.getDay(),l=(a-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(l);case"ee":return Ne(l,2);case"eo":return t.ordinalNumber(l,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});case"eeee":default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const a=e.getDay(),l=(a-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(l);case"cc":return Ne(l,n.length);case"co":return t.ordinalNumber(l,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});case"cccc":default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),a=r===0?7:r;switch(n){case"i":return String(a);case"ii":return Ne(a,n.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const a=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let a;switch(r===12?a=Sr.noon:r===0?a=Sr.midnight:a=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let a;switch(r>=17?a=Sr.evening:r>=12?a=Sr.afternoon:r>=4?a=Sr.morning:a=Sr.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return zn.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):zn.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):Ne(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):Ne(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):zn.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):zn.s(e,n)},S:function(e,n){return zn.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return Qi(r);case"XXXX":case"XX":return sr(r);case"XXXXX":case"XXX":default:return sr(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return Qi(r);case"xxxx":case"xx":return sr(r);case"xxxxx":case"xxx":default:return sr(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Xi(r,":");case"OOOO":default:return"GMT"+sr(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Xi(r,":");case"zzzz":default:return"GMT"+sr(r,":")}},t:function(e,n,t){const r=Math.trunc(+e/1e3);return Ne(r,n.length)},T:function(e,n,t){return Ne(+e,n.length)}};function Xi(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),l=r%60;return l===0?t+String(a):t+String(a)+n+Ne(l,2)}function Qi(e,n){return e%60===0?(e>0?"-":"+")+Ne(Math.abs(e)/60,2):sr(e,n)}function sr(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),a=Ne(Math.trunc(r/60),2),l=Ne(r%60,2);return t+a+n+l}const Zi=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},nu=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},mT=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],a=t[2];if(!a)return Zi(e,n);let l;switch(r){case"P":l=n.dateTime({width:"short"});break;case"PP":l=n.dateTime({width:"medium"});break;case"PPP":l=n.dateTime({width:"long"});break;case"PPPP":default:l=n.dateTime({width:"full"});break}return l.replace("{{date}}",Zi(r,n)).replace("{{time}}",nu(a,n))},Sl={p:nu,P:mT},NT=/^D+$/,_T=/^Y+$/,TT=["D","DD","YY","YYYY"];function ru(e){return NT.test(e)}function tu(e){return _T.test(e)}function pl(e,n,t){const r=vT(e,n,t);if(console.warn(r),TT.includes(e))throw new RangeError(r)}function vT(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const gT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,IT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,fT=/^'([^]*?)'?$/,RT=/''/g,cT=/[a-zA-Z]/;function Tr(e,n,t){const r=gr(),a=t?.locale??r.locale??La,l=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=ie(e,t?.in);if(!iT(s))throw new RangeError("Invalid time value");let o=n.match(IT).map(u=>{const E=u[0];if(E==="p"||E==="P"){const _=Sl[E];return _(u,a.formatLong)}return u}).join("").match(gT).map(u=>{if(u==="''")return{isToken:!1,value:"'"};const E=u[0];if(E==="'")return{isToken:!1,value:ST(u)};if(zi[E])return{isToken:!0,value:u};if(E.match(cT))throw new RangeError("Format string contains an unescaped latin alphabet character `"+E+"`");return{isToken:!1,value:u}});a.localize.preprocessor&&(o=a.localize.preprocessor(s,o));const d={firstWeekContainsDate:l,weekStartsOn:i,locale:a};return o.map(u=>{if(!u.isToken)return u.value;const E=u.value;(!t?.useAdditionalWeekYearTokens&&tu(E)||!t?.useAdditionalDayOfYearTokens&&ru(E))&&pl(E,n,String(e));const _=zi[E[0]];return _(s,E,a.localize,d)}).join("")}function ST(e){const n=e.match(fT);return n?n[1].replace(RT,"'"):e}function pT(e,n){const t=ie(e,n?.in),r=t.getFullYear(),a=t.getMonth(),l=_e(t,0);return l.setFullYear(r,a+1,0),l.setHours(0,0,0,0),l.getDate()}function DT(){return Object.assign({},gr())}function AT(e,n){const t=ie(e,n?.in).getDay();return t===0?7:t}function ni(e,n){return ie(e,n?.in).getMonth()}function ri(e,n){return ie(e,n?.in).getFullYear()}function au(e,n){return+ie(e)>+ie(n)}function kt(e,n){return+ie(e)<+ie(n)}function kT(e,n){const t=yT(n)?new n(0):_e(n,0);return t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),t.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),t}function yT(e){return typeof e=="function"&&e.prototype?.constructor===e}const OT=10;class lu{subPriority=0;validate(n,t){return!0}}class bT extends lu{constructor(n,t,r,a,l){super(),this.value=n,this.validateValue=t,this.setValue=r,this.priority=a,l&&(this.subPriority=l)}validate(n,t){return this.validateValue(n,this.value,t)}set(n,t,r){return this.setValue(n,t,this.value,r)}}class LT extends lu{priority=OT;subPriority=-1;constructor(n,t){super(),this.context=n||(r=>_e(t,r))}set(n,t){return t.timestampIsSet?n:_e(n,kT(n,this.context))}}class ue{run(n,t,r,a){const l=this.parse(n,t,r,a);return l?{setter:new bT(l.value,this.validate,this.set,this.priority,this.subPriority),rest:l.rest}:null}validate(n,t,r){return!0}}class hT extends ue{priority=140;parse(n,t,r){switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"})||r.era(n,{width:"narrow"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})||r.era(n,{width:"abbreviated"})||r.era(n,{width:"narrow"})}}set(n,t,r){return t.era=r,n.setFullYear(r,0,1),n.setHours(0,0,0,0),n}incompatibleTokens=["R","u","t","T"]}const Me={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},yn={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Pe(e,n){return e&&{value:n(e.value),rest:e.rest}}function Ae(e,n){const t=n.match(e);return t?{value:parseInt(t[0],10),rest:n.slice(t[0].length)}:null}function On(e,n){const t=n.match(e);if(!t)return null;if(t[0]==="Z")return{value:0,rest:n.slice(1)};const r=t[1]==="+"?1:-1,a=t[2]?parseInt(t[2],10):0,l=t[3]?parseInt(t[3],10):0,i=t[5]?parseInt(t[5],10):0;return{value:r*(a*zE+l*WE+i*XE),rest:n.slice(t[0].length)}}function iu(e){return Ae(Me.anyDigitsSigned,e)}function Le(e,n){switch(e){case 1:return Ae(Me.singleDigit,n);case 2:return Ae(Me.twoDigits,n);case 3:return Ae(Me.threeDigits,n);case 4:return Ae(Me.fourDigits,n);default:return Ae(new RegExp("^\\d{1,"+e+"}"),n)}}function ca(e,n){switch(e){case 1:return Ae(Me.singleDigitSigned,n);case 2:return Ae(Me.twoDigitsSigned,n);case 3:return Ae(Me.threeDigitsSigned,n);case 4:return Ae(Me.fourDigitsSigned,n);default:return Ae(new RegExp("^-?\\d{1,"+e+"}"),n)}}function ti(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function su(e,n){const t=n>0,r=t?n:1-n;let a;if(r<=50)a=e||100;else{const l=r+50,i=Math.trunc(l/100)*100,s=e>=l%100;a=e+i-(s?100:0)}return t?a:1-a}function ou(e){return e%400===0||e%4===0&&e%100!==0}class MT extends ue{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(n,t,r){const a=l=>({year:l,isTwoDigitYear:t==="yy"});switch(t){case"y":return Pe(Le(4,n),a);case"yo":return Pe(r.ordinalNumber(n,{unit:"year"}),a);default:return Pe(Le(t.length,n),a)}}validate(n,t){return t.isTwoDigitYear||t.year>0}set(n,t,r){const a=n.getFullYear();if(r.isTwoDigitYear){const i=su(r.year,a);return n.setFullYear(i,0,1),n.setHours(0,0,0,0),n}const l=!("era"in t)||t.era===1?r.year:1-r.year;return n.setFullYear(l,0,1),n.setHours(0,0,0,0),n}}class PT extends ue{priority=130;parse(n,t,r){const a=l=>({year:l,isTwoDigitYear:t==="YY"});switch(t){case"Y":return Pe(Le(4,n),a);case"Yo":return Pe(r.ordinalNumber(n,{unit:"year"}),a);default:return Pe(Le(t.length,n),a)}}validate(n,t){return t.isTwoDigitYear||t.year>0}set(n,t,r,a){const l=Zl(n,a);if(r.isTwoDigitYear){const s=su(r.year,l);return n.setFullYear(s,0,a.firstWeekContainsDate),n.setHours(0,0,0,0),Un(n,a)}const i=!("era"in t)||t.era===1?r.year:1-r.year;return n.setFullYear(i,0,a.firstWeekContainsDate),n.setHours(0,0,0,0),Un(n,a)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]}class KT extends ue{priority=130;parse(n,t){return ca(t==="R"?4:t.length,n)}set(n,t,r){const a=_e(n,0);return a.setFullYear(r,0,4),a.setHours(0,0,0,0),Nr(a)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]}class GT extends ue{priority=130;parse(n,t){return ca(t==="u"?4:t.length,n)}set(n,t,r){return n.setFullYear(r,0,1),n.setHours(0,0,0,0),n}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]}class BT extends ue{priority=120;parse(n,t,r){switch(t){case"Q":case"QQ":return Le(t.length,n);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"})||r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})||r.quarter(n,{width:"abbreviated",context:"formatting"})||r.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=1&&t<=4}set(n,t,r){return n.setMonth((r-1)*3,1),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]}class FT extends ue{priority=120;parse(n,t,r){switch(t){case"q":case"qq":return Le(t.length,n);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"})||r.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})||r.quarter(n,{width:"abbreviated",context:"standalone"})||r.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=1&&t<=4}set(n,t,r){return n.setMonth((r-1)*3,1),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]}class wT extends ue{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(n,t,r){const a=l=>l-1;switch(t){case"M":return Pe(Ae(Me.month,n),a);case"MM":return Pe(Le(2,n),a);case"Mo":return Pe(r.ordinalNumber(n,{unit:"month"}),a);case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"})||r.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})||r.month(n,{width:"abbreviated",context:"formatting"})||r.month(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=11}set(n,t,r){return n.setMonth(r,1),n.setHours(0,0,0,0),n}}class VT extends ue{priority=110;parse(n,t,r){const a=l=>l-1;switch(t){case"L":return Pe(Ae(Me.month,n),a);case"LL":return Pe(Le(2,n),a);case"Lo":return Pe(r.ordinalNumber(n,{unit:"month"}),a);case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"})||r.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})||r.month(n,{width:"abbreviated",context:"standalone"})||r.month(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=0&&t<=11}set(n,t,r){return n.setMonth(r,1),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]}function jT(e,n,t){const r=ie(e,t?.in),a=ei(r,t)-n;return r.setDate(r.getDate()-a*7),ie(r,t?.in)}class qT extends ue{priority=100;parse(n,t,r){switch(t){case"w":return Ae(Me.week,n);case"wo":return r.ordinalNumber(n,{unit:"week"});default:return Le(t.length,n)}}validate(n,t){return t>=1&&t<=53}set(n,t,r,a){return Un(jT(n,r,a),a)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]}function UT(e,n,t){const r=ie(e,t?.in),a=Ql(r,t)-n;return r.setDate(r.getDate()-a*7),r}class xT extends ue{priority=100;parse(n,t,r){switch(t){case"I":return Ae(Me.week,n);case"Io":return r.ordinalNumber(n,{unit:"week"});default:return Le(t.length,n)}}validate(n,t){return t>=1&&t<=53}set(n,t,r){return Nr(UT(n,r))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]}const HT=[31,28,31,30,31,30,31,31,30,31,30,31],JT=[31,29,31,30,31,30,31,31,30,31,30,31];class YT extends ue{priority=90;subPriority=1;parse(n,t,r){switch(t){case"d":return Ae(Me.date,n);case"do":return r.ordinalNumber(n,{unit:"date"});default:return Le(t.length,n)}}validate(n,t){const r=n.getFullYear(),a=ou(r),l=n.getMonth();return a?t>=1&&t<=JT[l]:t>=1&&t<=HT[l]}set(n,t,r){return n.setDate(r),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]}class CT extends ue{priority=90;subpriority=1;parse(n,t,r){switch(t){case"D":case"DD":return Ae(Me.dayOfYear,n);case"Do":return r.ordinalNumber(n,{unit:"date"});default:return Le(t.length,n)}}validate(n,t){const r=n.getFullYear();return ou(r)?t>=1&&t<=366:t>=1&&t<=365}set(n,t,r){return n.setMonth(0,r),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]}function ai(e,n,t){const r=gr(),a=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,l=ie(e,t?.in),i=l.getDay(),o=(n%7+7)%7,d=7-a,u=n<0||n>6?n-(i+d)%7:(o+d)%7-(i+d)%7;return Dt(l,u,t)}class $T extends ue{priority=90;parse(n,t,r){switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})||r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=6}set(n,t,r,a){return n=ai(n,r,a),n.setHours(0,0,0,0),n}incompatibleTokens=["D","i","e","c","t","T"]}class WT extends ue{priority=90;parse(n,t,r,a){const l=i=>{const s=Math.floor((i-1)/7)*7;return(i+a.weekStartsOn+6)%7+s};switch(t){case"e":case"ee":return Pe(Le(t.length,n),l);case"eo":return Pe(r.ordinalNumber(n,{unit:"day"}),l);case"eee":return r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"eeeee":return r.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return r.day(n,{width:"wide",context:"formatting"})||r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=6}set(n,t,r,a){return n=ai(n,r,a),n.setHours(0,0,0,0),n}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]}class zT extends ue{priority=90;parse(n,t,r,a){const l=i=>{const s=Math.floor((i-1)/7)*7;return(i+a.weekStartsOn+6)%7+s};switch(t){case"c":case"cc":return Pe(Le(t.length,n),l);case"co":return Pe(r.ordinalNumber(n,{unit:"day"}),l);case"ccc":return r.day(n,{width:"abbreviated",context:"standalone"})||r.day(n,{width:"short",context:"standalone"})||r.day(n,{width:"narrow",context:"standalone"});case"ccccc":return r.day(n,{width:"narrow",context:"standalone"});case"cccccc":return r.day(n,{width:"short",context:"standalone"})||r.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return r.day(n,{width:"wide",context:"standalone"})||r.day(n,{width:"abbreviated",context:"standalone"})||r.day(n,{width:"short",context:"standalone"})||r.day(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=0&&t<=6}set(n,t,r,a){return n=ai(n,r,a),n.setHours(0,0,0,0),n}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]}function XT(e,n,t){const r=ie(e,t?.in),a=AT(r,t),l=n-a;return Dt(r,l,t)}class QT extends ue{priority=90;parse(n,t,r){const a=l=>l===0?7:l;switch(t){case"i":case"ii":return Le(t.length,n);case"io":return r.ordinalNumber(n,{unit:"day"});case"iii":return Pe(r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"}),a);case"iiiii":return Pe(r.day(n,{width:"narrow",context:"formatting"}),a);case"iiiiii":return Pe(r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"}),a);case"iiii":default:return Pe(r.day(n,{width:"wide",context:"formatting"})||r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"}),a)}}validate(n,t){return t>=1&&t<=7}set(n,t,r){return n=XT(n,r),n.setHours(0,0,0,0),n}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]}class ZT extends ue{priority=80;parse(n,t,r){switch(t){case"a":case"aa":case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})||r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,r){return n.setHours(ti(r),0,0,0),n}incompatibleTokens=["b","B","H","k","t","T"]}class ev extends ue{priority=80;parse(n,t,r){switch(t){case"b":case"bb":case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})||r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,r){return n.setHours(ti(r),0,0,0),n}incompatibleTokens=["a","B","H","k","t","T"]}class nv extends ue{priority=80;parse(n,t,r){switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})||r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,r){return n.setHours(ti(r),0,0,0),n}incompatibleTokens=["a","b","t","T"]}class rv extends ue{priority=70;parse(n,t,r){switch(t){case"h":return Ae(Me.hour12h,n);case"ho":return r.ordinalNumber(n,{unit:"hour"});default:return Le(t.length,n)}}validate(n,t){return t>=1&&t<=12}set(n,t,r){const a=n.getHours()>=12;return a&&r<12?n.setHours(r+12,0,0,0):!a&&r===12?n.setHours(0,0,0,0):n.setHours(r,0,0,0),n}incompatibleTokens=["H","K","k","t","T"]}class tv extends ue{priority=70;parse(n,t,r){switch(t){case"H":return Ae(Me.hour23h,n);case"Ho":return r.ordinalNumber(n,{unit:"hour"});default:return Le(t.length,n)}}validate(n,t){return t>=0&&t<=23}set(n,t,r){return n.setHours(r,0,0,0),n}incompatibleTokens=["a","b","h","K","k","t","T"]}class av extends ue{priority=70;parse(n,t,r){switch(t){case"K":return Ae(Me.hour11h,n);case"Ko":return r.ordinalNumber(n,{unit:"hour"});default:return Le(t.length,n)}}validate(n,t){return t>=0&&t<=11}set(n,t,r){return n.getHours()>=12&&r<12?n.setHours(r+12,0,0,0):n.setHours(r,0,0,0),n}incompatibleTokens=["h","H","k","t","T"]}class lv extends ue{priority=70;parse(n,t,r){switch(t){case"k":return Ae(Me.hour24h,n);case"ko":return r.ordinalNumber(n,{unit:"hour"});default:return Le(t.length,n)}}validate(n,t){return t>=1&&t<=24}set(n,t,r){const a=r<=24?r%24:r;return n.setHours(a,0,0,0),n}incompatibleTokens=["a","b","h","H","K","t","T"]}class iv extends ue{priority=60;parse(n,t,r){switch(t){case"m":return Ae(Me.minute,n);case"mo":return r.ordinalNumber(n,{unit:"minute"});default:return Le(t.length,n)}}validate(n,t){return t>=0&&t<=59}set(n,t,r){return n.setMinutes(r,0,0),n}incompatibleTokens=["t","T"]}class sv extends ue{priority=50;parse(n,t,r){switch(t){case"s":return Ae(Me.second,n);case"so":return r.ordinalNumber(n,{unit:"second"});default:return Le(t.length,n)}}validate(n,t){return t>=0&&t<=59}set(n,t,r){return n.setSeconds(r,0),n}incompatibleTokens=["t","T"]}class ov extends ue{priority=30;parse(n,t){const r=a=>Math.trunc(a*Math.pow(10,-t.length+3));return Pe(Le(t.length,n),r)}set(n,t,r){return n.setMilliseconds(r),n}incompatibleTokens=["t","T"]}class uv extends ue{priority=10;parse(n,t){switch(t){case"X":return On(yn.basicOptionalMinutes,n);case"XX":return On(yn.basic,n);case"XXXX":return On(yn.basicOptionalSeconds,n);case"XXXXX":return On(yn.extendedOptionalSeconds,n);case"XXX":default:return On(yn.extended,n)}}set(n,t,r){return t.timestampIsSet?n:_e(n,n.getTime()-Ra(n)-r)}incompatibleTokens=["t","T","x"]}class dv extends ue{priority=10;parse(n,t){switch(t){case"x":return On(yn.basicOptionalMinutes,n);case"xx":return On(yn.basic,n);case"xxxx":return On(yn.basicOptionalSeconds,n);case"xxxxx":return On(yn.extendedOptionalSeconds,n);case"xxx":default:return On(yn.extended,n)}}set(n,t,r){return t.timestampIsSet?n:_e(n,n.getTime()-Ra(n)-r)}incompatibleTokens=["t","T","X"]}class Ev extends ue{priority=40;parse(n){return iu(n)}set(n,t,r){return[_e(n,r*1e3),{timestampIsSet:!0}]}incompatibleTokens="*"}class mv extends ue{priority=20;parse(n){return iu(n)}set(n,t,r){return[_e(n,r),{timestampIsSet:!0}]}incompatibleTokens="*"}const Nv={G:new hT,y:new MT,Y:new PT,R:new KT,u:new GT,Q:new BT,q:new FT,M:new wT,L:new VT,w:new qT,I:new xT,d:new YT,D:new CT,E:new $T,e:new WT,c:new zT,i:new QT,a:new ZT,b:new ev,B:new nv,h:new rv,H:new tv,K:new av,k:new lv,m:new iv,s:new sv,S:new ov,X:new uv,x:new dv,t:new Ev,T:new mv},_v=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Tv=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,vv=/^'([^]*?)'?$/,gv=/''/g,Iv=/\S/,fv=/[a-zA-Z]/;function br(e,n,t,r){const a=()=>_e(r?.in||t,NaN),l=DT(),i=r?.locale??l.locale??La,s=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??l.firstWeekContainsDate??l.locale?.options?.firstWeekContainsDate??1,o=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??l.weekStartsOn??l.locale?.options?.weekStartsOn??0;if(!n)return e?a():ie(t,r?.in);const d={firstWeekContainsDate:s,weekStartsOn:o,locale:i},u=[new LT(r?.in,t)],E=n.match(Tv).map(f=>{const S=f[0];if(S in Sl){const c=Sl[S];return c(f,i.formatLong)}return f}).join("").match(_v),_=[];for(let f of E){!r?.useAdditionalWeekYearTokens&&tu(f)&&pl(f,n,e),!r?.useAdditionalDayOfYearTokens&&ru(f)&&pl(f,n,e);const S=f[0],c=Nv[S];if(c){const{incompatibleTokens:I}=c;if(Array.isArray(I)){const p=_.find(y=>I.includes(y.token)||y.token===S);if(p)throw new RangeError(`The format string mustn't contain \`${p.fullToken}\` and \`${f}\` at the same time`)}else if(c.incompatibleTokens==="*"&&_.length>0)throw new RangeError(`The format string mustn't contain \`${f}\` and any other token at the same time`);_.push({token:S,fullToken:f});const D=c.run(e,f,i.match,d);if(!D)return a();u.push(D.setter),e=D.rest}else{if(S.match(fv))throw new RangeError("Format string contains an unescaped latin alphabet character `"+S+"`");if(f==="''"?f="'":S==="'"&&(f=Rv(f)),e.indexOf(f)===0)e=e.slice(f.length);else return a()}}if(e.length>0&&Iv.test(e))return a();const T=u.map(f=>f.priority).sort((f,S)=>S-f).filter((f,S,c)=>c.indexOf(f)===S).map(f=>u.filter(S=>S.priority===f).sort((S,c)=>c.subPriority-S.subPriority)).map(f=>f[0]);let g=ie(t,r?.in);if(isNaN(+g))return a();const R={};for(const f of T){if(!f.validate(g,d))return a();const S=f.set(g,R,d);Array.isArray(S)?(g=S[0],Object.assign(R,S[1])):g=S}return g}function Rv(e){return e.match(vv)[1].replace(gv,"'")}function cv(e,n,t){const[r,a]=Cr(t?.in,e,n);return r.getFullYear()===a.getFullYear()&&r.getMonth()===a.getMonth()}function uu(e,n,t){const[r,a]=Cr(t?.in,e,n);return r.getFullYear()===a.getFullYear()}function Sv(e,n,t){return Dt(e,-n,t)}function du(e,n,t){const r=ie(e,t?.in),a=r.getFullYear(),l=r.getDate(),i=_e(e,0);i.setFullYear(a,n,15),i.setHours(0,0,0,0);const s=pT(i);return r.setMonth(n,Math.min(l,s)),r}function Eu(e,n,t){const r=ie(e,t?.in);return isNaN(+r)?_e(e,NaN):(r.setFullYear(n),r)}function pv(e,n,t){return Wl(e,-n,t)}function Dv(e,n,t){const{years:r=0,months:a=0,weeks:l=0,days:i=0,hours:s=0,minutes:o=0,seconds:d=0}=n,u=pv(e,a+r*12,t),E=Sv(u,i+l*7,t),_=o+s*60,g=(d+_*60)*1e3;return _e(e,+E-g)}function Av(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function kv(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(n=>{let{brand:t,version:r}=n;return t+"/"+r}).join(" "):navigator.userAgent}function yv(){return/apple/i.test(navigator.vendor)}function Ov(){return Av().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function bv(){return kv().includes("jsdom/")}const Lv="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function es(e){let n=e.activeElement;for(;((t=n)==null||(t=t.shadowRoot)==null?void 0:t.activeElement)!=null;){var t;n=n.shadowRoot.activeElement}return n}function _t(e,n){if(!e||!n)return!1;const t=n.getRootNode==null?void 0:n.getRootNode();if(e.contains(n))return!0;if(t&&ga(t)){let r=n;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Ar(e){return"composedPath"in e?e.composedPath()[0]:e.target}function el(e,n){if(n==null)return!1;if("composedPath"in e)return e.composedPath().includes(n);const t=e;return t.target!=null&&n.contains(t.target)}function hv(e){return e.matches("html,body")}function or(e){return e?.ownerDocument||document}function Mv(e){return on(e)&&e.matches(Lv)}function Pv(e){if(!e||bv())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function nl(e,n,t){t===void 0&&(t=!0);let r=e.filter(l=>{var i;return l.parentId===n&&((i=l.context)==null?void 0:i.open)}),a=r;for(;a.length;)a=t?e.filter(l=>{var i;return(i=a)==null?void 0:i.some(s=>{var o;return l.parentId===s.id&&((o=l.context)==null?void 0:o.open)})}):e,r=r.concat(a);return r}function Kv(e){return"nativeEvent"in e}function Dl(e,n){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}var qn=typeof document<"u"?v.useLayoutEffect:v.useEffect;const Gv={...uo};function Bt(e){const n=v.useRef(e);return qn(()=>{n.current=e}),n}const Bv=Gv.useInsertionEffect,Fv=Bv||(e=>e());function Bn(e){const n=v.useRef(()=>{});return Fv(()=>{n.current=e}),v.useCallback(function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return n.current==null?void 0:n.current(...r)},[])}const wv="data-floating-ui-focusable",ns="active",rs="selected",Vv={...uo};let ts=!1,jv=0;const as=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+jv++;function qv(){const[e,n]=v.useState(()=>ts?as():void 0);return qn(()=>{e==null&&n(as())},[]),v.useEffect(()=>{ts=!0},[]),e}const Uv=Vv.useId,mu=Uv||qv;function xv(){const e=new Map;return{emit(n,t){var r;(r=e.get(n))==null||r.forEach(a=>a(t))},on(n,t){e.has(n)||e.set(n,new Set),e.get(n).add(t)},off(n,t){var r;(r=e.get(n))==null||r.delete(t)}}}const Hv=v.createContext(null),Jv=v.createContext(null),Nu=()=>{var e;return((e=v.useContext(Hv))==null?void 0:e.id)||null},li=()=>v.useContext(Jv);function wa(e){return"data-floating-ui-"+e}function dn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const ls=wa("safe-polygon");function rl(e,n,t){if(t&&!Dl(t))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const r=e();return typeof r=="number"?r:r?.[n]}return e?.[n]}function tl(e){return typeof e=="function"?e():e}function Yv(e,n){n===void 0&&(n={});const{open:t,onOpenChange:r,dataRef:a,events:l,elements:i}=e,{enabled:s=!0,delay:o=0,handleClose:d=null,mouseOnly:u=!1,restMs:E=0,move:_=!0}=n,T=li(),g=Nu(),R=Bt(d),f=Bt(o),S=Bt(t),c=Bt(E),I=v.useRef(),D=v.useRef(-1),p=v.useRef(),y=v.useRef(-1),b=v.useRef(!0),B=v.useRef(!1),h=v.useRef(()=>{}),G=v.useRef(!1),V=v.useCallback(()=>{var q;const w=(q=a.current.openEvent)==null?void 0:q.type;return w?.includes("mouse")&&w!=="mousedown"},[a]);v.useEffect(()=>{if(!s)return;function q(w){let{open:F}=w;F||(dn(D),dn(y),b.current=!0,G.current=!1)}return l.on("openchange",q),()=>{l.off("openchange",q)}},[s,l]),v.useEffect(()=>{if(!s||!R.current||!t)return;function q(F){V()&&r(!1,F,"hover")}const w=or(i.floating).documentElement;return w.addEventListener("mouseleave",q),()=>{w.removeEventListener("mouseleave",q)}},[i.floating,t,r,s,R,V]);const P=v.useCallback(function(q,w,F){w===void 0&&(w=!0),F===void 0&&(F="hover");const Y=rl(f.current,"close",I.current);Y&&!p.current?(dn(D),D.current=window.setTimeout(()=>r(!1,q,F),Y)):w&&(dn(D),r(!1,q,F))},[f,r]),k=Bn(()=>{h.current(),p.current=void 0}),L=Bn(()=>{if(B.current){const q=or(i.floating).body;q.style.pointerEvents="",q.removeAttribute(ls),B.current=!1}}),K=Bn(()=>a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1);v.useEffect(()=>{if(!s)return;function q(W){if(dn(D),b.current=!1,u&&!Dl(I.current)||tl(c.current)>0&&!rl(f.current,"open"))return;const ae=rl(f.current,"open",I.current);ae?D.current=window.setTimeout(()=>{S.current||r(!0,W,"hover")},ae):t||r(!0,W,"hover")}function w(W){if(K()){L();return}h.current();const ae=or(i.floating);if(dn(y),G.current=!1,R.current&&a.current.floatingContext){t||dn(D),p.current=R.current({...a.current.floatingContext,tree:T,x:W.clientX,y:W.clientY,onClose(){L(),k(),K()||P(W,!0,"safe-polygon")}});const Z=p.current;ae.addEventListener("mousemove",Z),h.current=()=>{ae.removeEventListener("mousemove",Z)};return}(I.current==="touch"?!_t(i.floating,W.relatedTarget):!0)&&P(W)}function F(W){K()||a.current.floatingContext&&(R.current==null||R.current({...a.current.floatingContext,tree:T,x:W.clientX,y:W.clientY,onClose(){L(),k(),K()||P(W)}})(W))}function Y(){dn(D)}function z(W){K()||P(W,!1)}if(ge(i.domReference)){const W=i.domReference,ae=i.floating;return t&&W.addEventListener("mouseleave",F),_&&W.addEventListener("mousemove",q,{once:!0}),W.addEventListener("mouseenter",q),W.addEventListener("mouseleave",w),ae&&(ae.addEventListener("mouseleave",F),ae.addEventListener("mouseenter",Y),ae.addEventListener("mouseleave",z)),()=>{t&&W.removeEventListener("mouseleave",F),_&&W.removeEventListener("mousemove",q),W.removeEventListener("mouseenter",q),W.removeEventListener("mouseleave",w),ae&&(ae.removeEventListener("mouseleave",F),ae.removeEventListener("mouseenter",Y),ae.removeEventListener("mouseleave",z))}}},[i,s,e,u,_,P,k,L,r,t,S,T,f,R,a,K,c]),qn(()=>{var q;if(s&&t&&(q=R.current)!=null&&q.__options.blockPointerEvents&&V()){B.current=!0;const F=i.floating;if(ge(i.domReference)&&F){var w;const Y=or(i.floating).body;Y.setAttribute(ls,"");const z=i.domReference,W=T==null||(w=T.nodesRef.current.find(ae=>ae.id===g))==null||(w=w.context)==null?void 0:w.elements.floating;return W&&(W.style.pointerEvents=""),Y.style.pointerEvents="none",z.style.pointerEvents="auto",F.style.pointerEvents="auto",()=>{Y.style.pointerEvents="",z.style.pointerEvents="",F.style.pointerEvents=""}}}},[s,t,g,i,T,R,V]),qn(()=>{t||(I.current=void 0,G.current=!1,k(),L())},[t,k,L]),v.useEffect(()=>()=>{k(),dn(D),dn(y),L()},[s,i.domReference,k,L]);const j=v.useMemo(()=>{function q(w){I.current=w.pointerType}return{onPointerDown:q,onPointerEnter:q,onMouseMove(w){const{nativeEvent:F}=w;function Y(){!b.current&&!S.current&&r(!0,F,"hover")}u&&!Dl(I.current)||t||tl(c.current)===0||G.current&&w.movementX**2+w.movementY**2<2||(dn(y),I.current==="touch"?Y():(G.current=!0,y.current=window.setTimeout(Y,tl(c.current))))}}},[u,r,t,S,c]);return v.useMemo(()=>s?{reference:j}:{},[s,j])}function al(e,n){if(!e||!n)return!1;const t=n.getRootNode==null?void 0:n.getRootNode();if(e.contains(n))return!0;if(t&&ga(t)){let r=n;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Cv(e){return"composedPath"in e?e.composedPath()[0]:e.target}const $v=v.createContext(null),is=wa("portal");function Wv(e){e===void 0&&(e={});const{id:n,root:t}=e,r=mu(),a=zv(),[l,i]=v.useState(null),s=v.useRef(null);return qn(()=>()=>{l?.remove(),queueMicrotask(()=>{s.current=null})},[l]),qn(()=>{if(!r||s.current)return;const o=n?document.getElementById(n):null;if(!o)return;const d=document.createElement("div");d.id=r,d.setAttribute(is,""),o.appendChild(d),s.current=d,i(d)},[n,r]),qn(()=>{if(t===null||!r||s.current)return;let o=t||a?.portalNode;o&&!ge(o)&&(o=o.current),o=o||document.body;let d=null;n&&(d=document.createElement("div"),d.id=n,o.appendChild(d));const u=document.createElement("div");u.id=r,u.setAttribute(is,""),o=d||o,o.appendChild(u),s.current=u,i(u)},[n,t,r,a]),l}const zv=()=>v.useContext($v),Xv={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Qv={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},ss=e=>{var n,t;return{escapeKey:typeof e=="boolean"?e:(n=e?.escapeKey)!=null?n:!1,outsidePress:typeof e=="boolean"?e:(t=e?.outsidePress)!=null?t:!0}};function Zv(e,n){n===void 0&&(n={});const{open:t,onOpenChange:r,elements:a,dataRef:l}=e,{enabled:i=!0,escapeKey:s=!0,outsidePress:o=!0,outsidePressEvent:d="pointerdown",referencePress:u=!1,referencePressEvent:E="pointerdown",ancestorScroll:_=!1,bubbles:T,capture:g}=n,R=li(),f=Bn(typeof o=="function"?o:()=>!1),S=typeof o=="function"?f:o,c=v.useRef(!1),I=v.useRef(!1),{escapeKey:D,outsidePress:p}=ss(T),{escapeKey:y,outsidePress:b}=ss(g),B=v.useRef(!1),h=Bn(K=>{var j;if(!t||!i||!s||K.key!=="Escape"||B.current)return;const q=(j=l.current.floatingContext)==null?void 0:j.nodeId,w=R?nl(R.nodesRef.current,q):[];if(!D&&(K.stopPropagation(),w.length>0)){let F=!0;if(w.forEach(Y=>{var z;if((z=Y.context)!=null&&z.open&&!Y.context.dataRef.current.__escapeKeyBubbles){F=!1;return}}),!F)return}r(!1,Kv(K)?K.nativeEvent:K,"escape-key")}),G=Bn(K=>{var j;const q=()=>{var w;h(K),(w=Ar(K))==null||w.removeEventListener("keydown",q)};(j=Ar(K))==null||j.addEventListener("keydown",q)}),V=Bn(K=>{var j;const q=c.current;c.current=!1;const w=I.current;if(I.current=!1,d==="click"&&w||q||typeof S=="function"&&!S(K))return;const F=Ar(K),Y="["+wa("inert")+"]",z=or(a.floating).querySelectorAll(Y);let W=ge(F)?F:null;for(;W&&!jn(W);){const J=xn(W);if(jn(J)||!ge(J))break;W=J}if(z.length&&ge(F)&&!hv(F)&&!_t(F,a.floating)&&Array.from(z).every(J=>!_t(W,J)))return;if(on(F)&&L){const J=jn(F),re=Tn(F),te=/auto|scroll/,de=J||te.test(re.overflowX),je=J||te.test(re.overflowY),qe=de&&F.clientWidth>0&&F.scrollWidth>F.clientWidth,Ue=je&&F.clientHeight>0&&F.scrollHeight>F.clientHeight,Pn=re.direction==="rtl",un=Ue&&(Pn?K.offsetX<=F.offsetWidth-F.clientWidth:K.offsetX>F.clientWidth),vn=qe&&K.offsetY>F.clientHeight;if(un||vn)return}const ae=(j=l.current.floatingContext)==null?void 0:j.nodeId,Fe=R&&nl(R.nodesRef.current,ae).some(J=>{var re;return el(K,(re=J.context)==null?void 0:re.elements.floating)});if(el(K,a.floating)||el(K,a.domReference)||Fe)return;const Z=R?nl(R.nodesRef.current,ae):[];if(Z.length>0){let J=!0;if(Z.forEach(re=>{var te;if((te=re.context)!=null&&te.open&&!re.context.dataRef.current.__outsidePressBubbles){J=!1;return}}),!J)return}r(!1,K,"outside-press")}),P=Bn(K=>{var j;const q=()=>{var w;V(K),(w=Ar(K))==null||w.removeEventListener(d,q)};(j=Ar(K))==null||j.addEventListener(d,q)});v.useEffect(()=>{if(!t||!i)return;l.current.__escapeKeyBubbles=D,l.current.__outsidePressBubbles=p;let K=-1;function j(z){r(!1,z,"ancestor-scroll")}function q(){window.clearTimeout(K),B.current=!0}function w(){K=window.setTimeout(()=>{B.current=!1},Ka()?5:0)}const F=or(a.floating);s&&(F.addEventListener("keydown",y?G:h,y),F.addEventListener("compositionstart",q),F.addEventListener("compositionend",w)),S&&F.addEventListener(d,b?P:V,b);let Y=[];return _&&(ge(a.domReference)&&(Y=er(a.domReference)),ge(a.floating)&&(Y=Y.concat(er(a.floating))),!ge(a.reference)&&a.reference&&a.reference.contextElement&&(Y=Y.concat(er(a.reference.contextElement)))),Y=Y.filter(z=>{var W;return z!==((W=F.defaultView)==null?void 0:W.visualViewport)}),Y.forEach(z=>{z.addEventListener("scroll",j,{passive:!0})}),()=>{s&&(F.removeEventListener("keydown",y?G:h,y),F.removeEventListener("compositionstart",q),F.removeEventListener("compositionend",w)),S&&F.removeEventListener(d,b?P:V,b),Y.forEach(z=>{z.removeEventListener("scroll",j)}),window.clearTimeout(K)}},[l,a,s,S,d,t,r,_,i,D,p,h,y,G,V,b,P]),v.useEffect(()=>{c.current=!1},[S,d]);const k=v.useMemo(()=>({onKeyDown:h,...u&&{[Xv[E]]:K=>{r(!1,K.nativeEvent,"reference-press")},...E!=="click"&&{onClick(K){r(!1,K.nativeEvent,"reference-press")}}}}),[h,r,u,E]),L=v.useMemo(()=>({onKeyDown:h,onMouseDown(){I.current=!0},onMouseUp(){I.current=!0},[Qv[d]]:()=>{c.current=!0}}),[h,d]);return v.useMemo(()=>i?{reference:k,floating:L}:{},[i,k,L])}function eg(e){const{open:n=!1,onOpenChange:t,elements:r}=e,a=mu(),l=v.useRef({}),[i]=v.useState(()=>xv()),s=Nu()!=null,[o,d]=v.useState(r.reference),u=Bn((T,g,R)=>{l.current.openEvent=T?g:void 0,i.emit("openchange",{open:T,event:g,reason:R,nested:s}),t?.(T,g,R)}),E=v.useMemo(()=>({setPositionReference:d}),[]),_=v.useMemo(()=>({reference:o||r.reference||null,floating:r.floating||null,domReference:r.reference}),[o,r.reference,r.floating]);return v.useMemo(()=>({dataRef:l,open:n,onOpenChange:u,elements:_,events:i,floatingId:a,refs:E}),[n,u,_,i,a,E])}function _u(e){e===void 0&&(e={});const{nodeId:n}=e,t=eg({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||t,a=r.elements,[l,i]=v.useState(null),[s,o]=v.useState(null),u=a?.domReference||l,E=v.useRef(null),_=li();qn(()=>{u&&(E.current=u)},[u]);const T=U_({...e,elements:{...a,...s&&{reference:s}}}),g=v.useCallback(I=>{const D=ge(I)?{getBoundingClientRect:()=>I.getBoundingClientRect(),getClientRects:()=>I.getClientRects(),contextElement:I}:I;o(D),T.refs.setReference(D)},[T.refs]),R=v.useCallback(I=>{(ge(I)||I===null)&&(E.current=I,i(I)),(ge(T.refs.reference.current)||T.refs.reference.current===null||I!==null&&!ge(I))&&T.refs.setReference(I)},[T.refs]),f=v.useMemo(()=>({...T.refs,setReference:R,setPositionReference:g,domReference:E}),[T.refs,R,g]),S=v.useMemo(()=>({...T.elements,domReference:u}),[T.elements,u]),c=v.useMemo(()=>({...T,...r,refs:f,elements:S,nodeId:n}),[T,f,S,n,r]);return qn(()=>{r.dataRef.current.floatingContext=c;const I=_?.nodesRef.current.find(D=>D.id===n);I&&(I.context=c)}),v.useMemo(()=>({...T,context:c,refs:f,elements:S}),[T,f,S,c])}function ll(){return Ov()&&yv()}function ng(e,n){n===void 0&&(n={});const{open:t,onOpenChange:r,events:a,dataRef:l,elements:i}=e,{enabled:s=!0,visibleOnly:o=!0}=n,d=v.useRef(!1),u=v.useRef(-1),E=v.useRef(!0);v.useEffect(()=>{if(!s)return;const T=rn(i.domReference);function g(){!t&&on(i.domReference)&&i.domReference===es(or(i.domReference))&&(d.current=!0)}function R(){E.current=!0}function f(){E.current=!1}return T.addEventListener("blur",g),ll()&&(T.addEventListener("keydown",R,!0),T.addEventListener("pointerdown",f,!0)),()=>{T.removeEventListener("blur",g),ll()&&(T.removeEventListener("keydown",R,!0),T.removeEventListener("pointerdown",f,!0))}},[i.domReference,t,s]),v.useEffect(()=>{if(!s)return;function T(g){let{reason:R}=g;(R==="reference-press"||R==="escape-key")&&(d.current=!0)}return a.on("openchange",T),()=>{a.off("openchange",T)}},[a,s]),v.useEffect(()=>()=>{dn(u)},[]);const _=v.useMemo(()=>({onMouseLeave(){d.current=!1},onFocus(T){if(d.current)return;const g=Ar(T.nativeEvent);if(o&&ge(g)){if(ll()&&!T.relatedTarget){if(!E.current&&!Mv(g))return}else if(!Pv(g))return}r(!0,T.nativeEvent,"focus")},onBlur(T){d.current=!1;const g=T.relatedTarget,R=T.nativeEvent,f=ge(g)&&g.hasAttribute(wa("focus-guard"))&&g.getAttribute("data-type")==="outside";u.current=window.setTimeout(()=>{var S;const c=es(i.domReference?i.domReference.ownerDocument:document);!g&&c===i.domReference||_t((S=l.current.floatingContext)==null?void 0:S.refs.floating.current,c)||_t(i.domReference,c)||f||r(!1,R,"focus")})}}),[l,i.domReference,r,o]);return v.useMemo(()=>s?{reference:_}:{},[s,_])}function il(e,n,t){const r=new Map,a=t==="item";let l=e;if(a&&e){const{[ns]:i,[rs]:s,...o}=e;l=o}return{...t==="floating"&&{tabIndex:-1,[wv]:""},...l,...n.map(i=>{const s=i?i[t]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((i,s)=>(s&&Object.entries(s).forEach(o=>{let[d,u]=o;if(!(a&&[ns,rs].includes(d)))if(d.indexOf("on")===0){if(r.has(d)||r.set(d,[]),typeof u=="function"){var E;(E=r.get(d))==null||E.push(u),i[d]=function(){for(var _,T=arguments.length,g=new Array(T),R=0;R<T;R++)g[R]=arguments[R];return(_=r.get(d))==null?void 0:_.map(f=>f(...g)).find(f=>f!==void 0)}}}else i[d]=u}),i),{})}}function rg(e){e===void 0&&(e=[]);const n=e.map(s=>s?.reference),t=e.map(s=>s?.floating),r=e.map(s=>s?.item),a=v.useCallback(s=>il(s,e,"reference"),n),l=v.useCallback(s=>il(s,e,"floating"),t),i=v.useCallback(s=>il(s,e,"item"),r);return v.useMemo(()=>({getReferenceProps:a,getFloatingProps:l,getItemProps:i}),[a,l,i])}function tg(e,n,t){t===void 0&&(t=!0);let r=e.filter(l=>{var i;return l.parentId===n&&((i=l.context)==null?void 0:i.open)}),a=r;for(;a.length;)a=t?e.filter(l=>{var i;return(i=a)==null?void 0:i.some(s=>{var o;return l.parentId===s.id&&((o=l.context)==null?void 0:o.open)})}):e,r=r.concat(a);return r}function os(e,n){const[t,r]=e;let a=!1;const l=n.length;for(let i=0,s=l-1;i<l;s=i++){const[o,d]=n[i]||[0,0],[u,E]=n[s]||[0,0];d>=r!=E>=r&&t<=(u-o)*(r-d)/(E-d)+o&&(a=!a)}return a}function ag(e,n){return e[0]>=n.x&&e[0]<=n.x+n.width&&e[1]>=n.y&&e[1]<=n.y+n.height}function lg(e){e===void 0&&(e={});const{buffer:n=.5,blockPointerEvents:t=!1,requireIntent:r=!0}=e;let a,l=!1,i=null,s=null,o=performance.now();function d(E,_){const T=performance.now(),g=T-o;if(i===null||s===null||g===0)return i=E,s=_,o=T,null;const R=E-i,f=_-s,c=Math.sqrt(R*R+f*f)/g;return i=E,s=_,o=T,c}const u=E=>{let{x:_,y:T,placement:g,elements:R,onClose:f,nodeId:S,tree:c}=E;return function(D){function p(){clearTimeout(a),f()}if(clearTimeout(a),!R.domReference||!R.floating||g==null||_==null||T==null)return;const{clientX:y,clientY:b}=D,B=[y,b],h=Cv(D),G=D.type==="mouseleave",V=al(R.floating,h),P=al(R.domReference,h),k=R.domReference.getBoundingClientRect(),L=R.floating.getBoundingClientRect(),K=g.split("-")[0],j=_>L.right-L.width/2,q=T>L.bottom-L.height/2,w=ag(B,k),F=L.width>k.width,Y=L.height>k.height,z=(F?k:L).left,W=(F?k:L).right,ae=(Y?k:L).top,Fe=(Y?k:L).bottom;if(V&&(l=!0,!G))return;if(P&&(l=!1),P&&!G){l=!0;return}if(G&&ge(D.relatedTarget)&&al(R.floating,D.relatedTarget)||c&&tg(c.nodesRef.current,S).some(re=>{let{context:te}=re;return te?.open}))return;if(K==="top"&&T>=k.bottom-1||K==="bottom"&&T<=k.top+1||K==="left"&&_>=k.right-1||K==="right"&&_<=k.left+1)return p();let Z=[];switch(K){case"top":Z=[[z,k.top+1],[z,L.bottom-1],[W,L.bottom-1],[W,k.top+1]];break;case"bottom":Z=[[z,L.top+1],[z,k.bottom-1],[W,k.bottom-1],[W,L.top+1]];break;case"left":Z=[[L.right-1,Fe],[L.right-1,ae],[k.left+1,ae],[k.left+1,Fe]];break;case"right":Z=[[k.right-1,Fe],[k.right-1,ae],[L.left+1,ae],[L.left+1,Fe]];break}function J(re){let[te,de]=re;switch(K){case"top":{const je=[F?te+n/2:j?te+n*4:te-n*4,de+n+1],qe=[F?te-n/2:j?te+n*4:te-n*4,de+n+1],Ue=[[L.left,j||F?L.bottom-n:L.top],[L.right,j?F?L.bottom-n:L.top:L.bottom-n]];return[je,qe,...Ue]}case"bottom":{const je=[F?te+n/2:j?te+n*4:te-n*4,de-n],qe=[F?te-n/2:j?te+n*4:te-n*4,de-n],Ue=[[L.left,j||F?L.top+n:L.bottom],[L.right,j?F?L.top+n:L.bottom:L.top+n]];return[je,qe,...Ue]}case"left":{const je=[te+n+1,Y?de+n/2:q?de+n*4:de-n*4],qe=[te+n+1,Y?de-n/2:q?de+n*4:de-n*4];return[...[[q||Y?L.right-n:L.left,L.top],[q?Y?L.right-n:L.left:L.right-n,L.bottom]],je,qe]}case"right":{const je=[te-n,Y?de+n/2:q?de+n*4:de-n*4],qe=[te-n,Y?de-n/2:q?de+n*4:de-n*4],Ue=[[q||Y?L.left+n:L.right,L.top],[q?Y?L.left+n:L.right:L.left+n,L.bottom]];return[je,qe,...Ue]}}}if(!os([y,b],Z)){if(l&&!w)return p();if(!G&&r){const re=d(D.clientX,D.clientY);if(re!==null&&re<.1)return p()}os([y,b],J([_,T]))?!l&&r&&(a=window.setTimeout(p,40)):p()}}};return u.__options={blockPointerEvents:t},u}const Va=()=>{const{cn:e}=ee();return m.createElement(Ro,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Tu=()=>{const{cn:e}=ee();return m.createElement(Ro,{title:Yn("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var ig=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const sg=v.forwardRef((e,n)=>{var{className:t,header:r,children:a,open:l,defaultOpen:i=!1,onClick:s,size:o="medium",onOpenChange:d}=e,u=ig(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:E}=ee(),[_,T]=Br({defaultValue:i,value:l,onChange:d}),g=o==="small"?"small":"medium";return m.createElement("div",{className:E("navds-read-more",`navds-read-more--${o}`,t,{"navds-read-more--open":_}),"data-volume":"low"},m.createElement("button",Object.assign({},u,{ref:n,type:"button",className:E("navds-read-more__button","navds-body-short",{"navds-body-short--small":o==="small"}),onClick:Zn(s,()=>T(R=>!R)),"aria-expanded":_,"data-state":_?"open":"closed"}),m.createElement(It,{className:E("navds-read-more__expand-icon"),"aria-hidden":!0}),m.createElement("span",null,r)),m.createElement(Ul,{as:"div","aria-hidden":!_,className:E("navds-read-more__content",{"navds-read-more__content--closed":!_}),size:g,"data-state":_?"open":"closed"},a))}),Sa=v.createContext(null),Wr=(e,n)=>{var t,r,a;const{size:l,error:i,errorId:s}=e,o=v.useContext(Sa),d=pn(),u=(t=e.id)!==null&&t!==void 0?t:`${n}-${d}`,E=s??`${n}-error-${d}`,_=`${n}-description-${d}`,T=o?.disabled||e.disabled,g=(o?.readOnly||e.readOnly)&&!T||void 0,R=!T&&!g&&!!(i||o?.error),f=!T&&!g&&!!i&&typeof i!="boolean",S=Object.assign({},R?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:f,hasError:R,errorId:E,inputDescriptionId:_,size:(r=l??o?.size)!==null&&r!==void 0?r:"medium",readOnly:g,inputProps:Object.assign(Object.assign({id:u},S),{"aria-describedby":jr(e["aria-describedby"],{[_]:e.description&&!pa(e.description),[E]:f,[(a=o?.errorId)!==null&&a!==void 0?a:""]:R&&o?.error})||void 0,disabled:T})}};function pa(e,n=!0){if(m.isValidElement(e)){if(e.type===sg)return!0;if(e.props.children&&n)return pa(e.props.children,!1)}else if(Array.isArray(e))return e.some(t=>pa(t,n));return!1}const vu={global:{dateLocale:Oo,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},gu={global:{dateLocale:Lo,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},Iu=(e="nb")=>{switch(e){case"nn":return Lo;case"en":return Oo;default:return bo}},fu=e=>{switch(e){case"nn":return gu.DatePicker;case"en":case"en-GB":return vu.DatePicker;default:return}},og=e=>{switch(e){case"nn":return gu.global;case"en":case"en-GB":return vu.global;default:return}},[Ru,ja]=ba();var ug=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const[dg,ii]=ba({errorMessage:"useDateInputContext must be used with DateInputContext"}),cu=v.forwardRef((e,n)=>{const{className:t,hideLabel:r=!1,label:a,description:l,variant:i="datepicker",setAnchorRef:s}=e,o=ug(e,["className","hideLabel","label","description","variant","setAnchorRef"]),d=v.useRef(null),u=ja().translate,{cn:E}=ee(),_=i==="datepicker",T={prefix:_?"datepicker-input":"monthpicker-input",iconTitle:{open:_?"openDatePicker":"openMonthPicker",close:_?"closeDatePicker":"closeMonthPicker"}},g=ii(),{inputProps:R,size:f="medium",inputDescriptionId:S,errorId:c,showErrorMsg:I,hasError:D,readOnly:p}=Wr(e,T.prefix);return m.createElement("div",{className:E(t,"navds-form-field",`navds-form-field--${f}`,"navds-date__field",{"navds-text-field--error":D,"navds-date__field--error":D,"navds-form-field--disabled":!!R.disabled,"navds-text-field--disabled":!!R.disabled,"navds-form-field--readonly":p,"navds-text-field--readonly":p,"navds-date__field--readonly":p})},m.createElement(Re,{htmlFor:R.id,size:f,className:E("navds-form-field__label",{"navds-sr-only":r})},p&&m.createElement(Va,null),a),!!l&&m.createElement(ne,{as:"div",className:E("navds-form-field__description",{"navds-sr-only":r}),id:S,size:f},l),m.createElement("div",{className:E("navds-date__field-wrapper")},m.createElement("input",Object.assign({ref:n},Ye(o,["error","errorId","size"]),R,{autoComplete:"off","aria-controls":g?.open?g.ariaId:void 0,readOnly:p,className:E("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${f}`),size:_?11:14})),m.createElement("button",{disabled:R.disabled||p,tabIndex:p||g?.open?-1:0,onClick:()=>{g?.onOpen(),s?.(d.current)},type:"button",className:E("navds-date__field-button"),ref:d},m.createElement(dE,{title:u(T.iconTitle[g?.open?"close":"open"])}))),m.createElement("div",{className:E("navds-form-field__error"),id:c,"aria-relevant":"additions removals","aria-live":"polite"},I&&m.createElement(Jr,{size:f,showIcon:!0},e.error)))}),Eg=v.forwardRef((e,n)=>m.createElement(cu,Object.assign({},e,{ref:n})));v.forwardRef((e,n)=>m.createElement(cu,Object.assign({},e,{variant:"monthpicker",ref:n})));var mg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Ng=v.forwardRef((e,n)=>{var{className:t}=e,r=mg(e,["className"]);const{cn:a}=ee();return m.createElement("div",Object.assign({},r,{ref:n,className:a("navds-modal__body",t)}))});var _g=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Tg=v.forwardRef((e,n)=>{var{className:t}=e,r=_g(e,["className"]);const{cn:a}=ee();return m.createElement("div",Object.assign({},r,{ref:n,className:a("navds-modal__footer",t)}))});var vg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Su=v.forwardRef((e,n)=>{var{children:t,className:r,closeButton:a=!0}=e,l=vg(e,["children","className","closeButton"]);const{cn:i}=ee(),s=ft(),o=Yn("global");return m.createElement("div",Object.assign({},l,{ref:n,className:i("navds-modal__header",r)}),s.closeHandler&&a&&m.createElement(Oe,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:d=>{["Enter"," "].includes(d.key)&&d.repeat&&d.preventDefault()},onClick:s.closeHandler,icon:m.createElement(So,{title:o("close")})}),t)}),us=({clientX:e,clientY:n},{left:t,top:r,right:a,bottom:l})=>!(e<t||n<r||e>a||n>l);function gg(e,n,t){if(!(n&&n.closeButton===!1))return t?()=>{var r;return t()!==!1&&((r=e.current)===null||r===void 0?void 0:r.close())}:()=>{var r;return(r=e.current)===null||r===void 0?void 0:r.close()}}const Ft="navds-modal__document-body",wt="aksel-modal__document-body";function Ig(e,n,t){m.useEffect(()=>{if(t||!e.current||!n)return;e.current.open&&document.body.classList.add(wt,Ft);const r=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(wt,Ft):document.body.classList.remove(wt,Ft)});return r.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{r.disconnect(),document.body.classList.remove(wt,Ft)}},[e,n,t])}const yr=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function pu(e,n){var t="on"+n.type.toLowerCase();return typeof e[t]=="function"&&e[t](n),e.dispatchEvent(n)}function lt(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Du(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function fg(e,n){for(var t=0;t<e.length;++t)if(e[t]===n)return!0;return!1}function sl(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Au(e){var n=["button","input","keygen","select","textarea"],t=n.map(function(i){return i+":not([disabled])"});t.push('[tabindex]:not([disabled]):not([tabindex=""])');var r=e.querySelector(t.join(", "));if(!r&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),l=0;l<a.length&&!(a[l].tagName&&a[l].shadowRoot&&(r=Au(a[l].shadowRoot),r));l++);return r}function ds(e){return e.isConnected||document.body.contains(e)}function ku(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var t=se.formSubmitter;if(!t){var r=e.target,a="getRootNode"in r&&r.getRootNode()||document;t=a.activeElement}return!t||t.form!==n?null:t}function Rg(e){if(!e.defaultPrevented){var n=e.target,t=se.imagemapUseValue,r=ku(e);t===null&&r&&(t=r.value);var a=lt(n);if(a){var l=r&&r.getAttribute("formmethod")||n.getAttribute("method");l==="dialog"&&(e.preventDefault(),t!=null?a.close(t):a.close())}}}function yu(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",Rg,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t=!1,r=(function(){t?this.downgradeModal():this.maybeHideModal(),t=!1}).bind(this),a,l=function(i){if(i.target===e){var s="DOMNodeRemoved";t|=i.type.substr(0,s.length)===s,window.clearTimeout(a),a=window.setTimeout(r,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,l)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}yu.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&ds(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),se.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var t=document.createEvent("MouseEvents");t.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(t),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Au(this.dialog_)),Du(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!ds(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!se.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,se.needsCentering(this.dialog_)?(se.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});pu(this.dialog_,n)}};var se={};se.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,t=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,t)+"px"};se.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var t=document.styleSheets[n],r=null;try{r=t.cssRules}catch{}if(r)for(var a=0;a<r.length;++a){var l=r[a],i=null;try{i=document.querySelectorAll(l.selectorText)}catch{}if(!(!i||!fg(i,e))){var s=l.style.getPropertyValue("top"),o=l.style.getPropertyValue("bottom");if(s&&s!=="auto"||o&&o!=="auto")return!0}}}return!1};se.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!se.isInlinePositionSetByStylesheet(e)};se.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new yu(e)};se.registerDialog=function(e){e.showModal||se.forceRegisterDialog(e)};se.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var t=[];n.forEach(function(r){for(var a=0,l;l=r.removedNodes[a];++a)l instanceof Element&&(l.localName==="dialog"&&t.push(l),t=t.concat(l.querySelectorAll("dialog")))}),t.length&&e(t)}))};se.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};se.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};se.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,t;t=this.pendingDialogStack[n];++n)t.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var r=this.pendingDialogStack[0];if(r){var a=r.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};se.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=lt(e);){for(var n=0,t;t=this.pendingDialogStack[n];++n)if(t.dialog===e)return n===0;e=e.parentElement}return!1};se.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Du(n),this.forwardTab_!==void 0)){var t=this.pendingDialogStack[0],r=t.dialog,a=r.compareDocumentPosition(n);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};se.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),t=this.pendingDialogStack[0];t&&pu(t.dialog,n)&&t.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};se.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(t){e.indexOf(t.dialog)!==-1?t.downgradeModal():t.maybeHideModal()})};se.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};se.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};yr&&(se.dm=new se.DialogManager,se.formSubmitter=null,se.imagemapUseValue=null);if(yr){var Es=document.createElement("form");if(Es.setAttribute("method","dialog"),Es.method!=="dialog"){var pr=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(pr){var cg=pr.get;pr.get=function(){return sl(this)?"dialog":cg.call(this)};var Sg=pr.set;pr.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Sg.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",pr)}}document.addEventListener("click",function(e){if(se.formSubmitter=null,se.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var t=e.composedPath();n=t.shift()||n}if(!(!n||!sl(n.form))){var r=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!r){if(!(n.localName==="input"&&n.type==="image"))return;se.imagemapUseValue=e.offsetX+","+e.offsetY}var a=lt(n);a&&(se.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,t=lt(n);if(!t){var r=ku(e),a=r&&r.getAttribute("formmethod")||n.getAttribute("method");a==="dialog"&&e.preventDefault()}});var pg=HTMLFormElement.prototype.submit,Dg=function(){if(!sl(this))return pg.call(this);var e=lt(this);e&&e.close()};HTMLFormElement.prototype.submit=Dg}var Ag=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Rn=v.forwardRef((e,n)=>{var t,r,{header:a,children:l,open:i,onBeforeClose:s,onCancel:o,closeOnBackdropClick:d,width:u,placement:E,portal:_,className:T,"aria-labelledby":g,style:R,onClick:f,onMouseDown:S}=e,c=Ag(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:I}=ee(),D=v.useRef(I("navds-modal--polyfilled")),p=v.useRef(null),y=xr(p,n),b=pn(),B=(t=ha())===null||t===void 0?void 0:t.rootElement,h=Wv({root:B}),G=ii(!1),V=ft(!1)!==void 0;V&&!G&&console.error("Modals should not be nested"),v.useEffect(()=>{yr&&p.current&&h&&(se.registerDialog(p.current),p.current.classList.add(D.current)),p.current&&h&&(p.current.autofocus=!0)},[h]),v.useEffect(()=>{p.current&&h&&i!==void 0&&(i&&!p.current.open?p.current.showModal():!i&&p.current.open&&p.current.close())},[h,i]),Ig(p,h,V);const P=typeof u=="string"&&["small","medium"].includes(u),k=I("navds-modal",T,{[D.current]:yr,"navds-modal--autowidth":!u,[`navds-modal--${u}`]:P,"navds-modal--top":E==="top"&&!yr}),L=Object.assign(Object.assign({},R),P?{}:{width:u}),K=v.useRef({clientX:0,clientY:0}),j=W=>{K.current=W},q=d&&!yr,w=W=>{if(W.target!==p.current)return;const ae=p.current.getBoundingClientRect();us(K.current,ae)||us(W,ae)||s!==void 0&&s()===!1||p.current.close()},F=W=>{s&&s()===!1&&W.preventDefault()},Y=!g&&!c["aria-label"]&&a?b:g,z=m.createElement("dialog",Object.assign({},c,{ref:y,className:k,style:L,onCancel:Zn(o,F),onClick:q?Zn(f,w):f,onMouseDown:q?Zn(S,j):S,"aria-labelledby":Y}),m.createElement(xE,{closeHandler:gg(p,a,s),ref:p},a&&m.createElement(Su,null,a.label&&m.createElement(Kr,{className:I("navds-modal__label")},a.label),m.createElement(Yr,{size:(r=a.size)!==null&&r!==void 0?r:"medium",level:"1",id:b},a.icon&&m.createElement("span",{className:I("navds-modal__header-icon")},a.icon),a.heading)),l));return _?h?ql.createPortal(z,h):null:z});Rn.Header=Su;Rn.Body=Ng;Rn.Footer=Tg;var kg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const yg=v.forwardRef((e,n)=>{var{className:t}=e,r=kg(e,["className"]);const{cn:a}=ee();return m.createElement("div",Object.assign({},r,{ref:n,className:a("navds-popover__content",t)}))});var Og=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const wr=v.forwardRef((e,n)=>{var{className:t,children:r,anchorEl:a,arrow:l=!0,open:i,onClose:s,placement:o="top",offset:d,strategy:u,flip:E=!0}=e,_=Og(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:T}=ee(),g=v.useRef(null),R=ft(!1)!==void 0,f=ii(!1),S=u??(R?"fixed":"absolute"),c=f?!1:E,I=qr(!1),{update:D,refs:p,placement:y,middlewareData:{arrow:{x:b,y:B}={}},floatingStyles:h}=_u({strategy:S,placement:o,open:i,middleware:[Jo(d??(I?.isDarkside?8:l?16:4)),c&&Co({padding:5,fallbackPlacements:["bottom","top"]}),Yo({padding:12}),$o({element:g,padding:8})]});Gr(()=>{p.setReference(a)},[a]);const G=xr(p.setFloating,n);Gr(()=>{if(!p.reference.current||!p.floating.current||!i)return;const P=cl(p.reference.current,p.floating.current,D);return()=>P()},[p.floating,p.reference,D,i,a]);const V={top:"bottom",right:"left",bottom:"top",left:"right"}[y.split("-")[0]];return m.createElement(YN,{asChild:!0,safeZone:{anchor:a,dismissable:p.floating.current},onDismiss:()=>i&&s?.(),enabled:i},m.createElement("div",Object.assign({ref:G},_,{className:T("navds-popover",t,{"navds-popover--hidden":!i||!a}),style:Object.assign(Object.assign({},_.style),h),"data-placement":y,"aria-hidden":!i||!a}),r,l&&!I?.isDarkside&&m.createElement("div",{ref:P=>{g.current=P},style:Object.assign(Object.assign(Object.assign({},b!=null?{left:b}:{}),B!=null?{top:B}:{}),V?{[V]:"-0.5rem"}:{}),className:T("navds-popover__arrow")})))});wr.Content=yg;const bg={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},Lg=({open:e,children:n,onClose:t,anchor:r,locale:a,translate:l,variant:i,popoverProps:s})=>{const o=Yn("global",og(a)),{cn:d}=ee(),u=v.useRef(null),E=ft(!1)!==void 0;return JE("screen and (min-width: 768px)",!0)&&!E?m.createElement(wr,Object.assign({arrow:!1,anchorEl:r,open:e,onClose:t,placement:"bottom-start",role:"dialog",className:d("navds-date__popover",{"navds-date":i==="month"}),flip:!1},s),n):m.createElement(Rn,{ref:u,open:e,onClose:T=>{T.stopPropagation(),t()},"aria-label":l(bg[i]),className:d("navds-date__modal",{"navds-date__nested-modal":E,"navds-date":i==="month"}),closeOnBackdropClick:!0,placement:"top"},m.createElement("div",{className:d("navds-date__modal-body")},n,m.createElement(Oe,{variant:"tertiary",onClick:()=>{var T;return(T=u?.current)===null||T===void 0?void 0:T.close()},size:"small",type:"button"},o("close"))))};function Ou(e){return!!(e&&typeof e=="object"&&"from"in e)}const hg={},tt={};function it(e,n){try{const r=(hg[e]||=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format)(n).split("GMT")[1]||"";return r in tt?tt[r]:ms(r,r.split(":"))}catch{if(e in tt)return tt[e];const t=e?.match(Mg);return t?ms(e,t.slice(1)):NaN}}const Mg=/([+-]\d\d):?(\d\d)?/;function ms(e,n){const t=+n[0],r=+(n[1]||0);return tt[e]=t>0?t*60+r:t*60-r}class bn extends Date{constructor(...n){super(),n.length>1&&typeof n[n.length-1]=="string"&&(this.timeZone=n.pop()),this.internal=new Date,isNaN(it(this.timeZone,this))?this.setTime(NaN):n.length?typeof n[0]=="number"&&(n.length===1||n.length===2&&typeof n[1]!="number")?this.setTime(n[0]):typeof n[0]=="string"?this.setTime(+new Date(n[0])):n[0]instanceof Date?this.setTime(+n[0]):(this.setTime(+new Date(...n)),bu(this),Al(this)):this.setTime(Date.now())}static tz(n,...t){return t.length?new bn(...t,n):new bn(Date.now(),n)}withTimeZone(n){return new bn(+this,n)}getTimezoneOffset(){return-it(this.timeZone,this)}setTime(n){return Date.prototype.setTime.apply(this,arguments),Al(this),+this}[Symbol.for("constructDateFrom")](n){return new bn(+new Date(n),this.timeZone)}}const Ns=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!Ns.test(e))return;const n=e.replace(Ns,"$1UTC");bn.prototype[n]&&(e.startsWith("get")?bn.prototype[e]=function(){return this.internal[n]()}:(bn.prototype[e]=function(){return Date.prototype[n].apply(this.internal,arguments),Pg(this),+this},bn.prototype[n]=function(){return Date.prototype[n].apply(this,arguments),Al(this),+this}))});function Al(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function Pg(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),bu(e)}function bu(e){const n=it(e.timeZone,e),t=new Date(+e);t.setUTCHours(t.getUTCHours()-1);const r=-new Date(+e).getTimezoneOffset(),a=-new Date(+t).getTimezoneOffset(),l=r-a,i=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();l&&i&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+l);const s=r-n;s&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+s);const o=it(e.timeZone,e),u=-new Date(+e).getTimezoneOffset()-o,E=o!==n,_=u-s;if(E&&_){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+_);const T=it(e.timeZone,e),g=o-T;g&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+g),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+g))}}class Je extends bn{static tz(n,...t){return t.length?new Je(...t,n):new Je(Date.now(),n)}toISOString(){const[n,t,r]=this.tzComponents(),a=`${n}${t}:${r}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[n,t,r,a]=this.internal.toUTCString().split(" ");return`${n?.slice(0,-1)} ${r} ${t} ${a}`}toTimeString(){const n=this.internal.toUTCString().split(" ")[4],[t,r,a]=this.tzComponents();return`${n} GMT${t}${r}${a} (${Kg(this.timeZone,this)})`}toLocaleString(n,t){return Date.prototype.toLocaleString.call(this,n,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(n,t){return Date.prototype.toLocaleDateString.call(this,n,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(n,t){return Date.prototype.toLocaleTimeString.call(this,n,{...t,timeZone:t?.timeZone||this.timeZone})}tzComponents(){const n=this.getTimezoneOffset(),t=n>0?"-":"+",r=String(Math.floor(Math.abs(n)/60)).padStart(2,"0"),a=String(Math.abs(n)%60).padStart(2,"0");return[t,r,a]}withTimeZone(n){return new Je(+this,n)}[Symbol.for("constructDateFrom")](n){return new Je(+new Date(n),this.timeZone)}}function Kg(e,n){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(n).slice(12)}var Q;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(Q||(Q={}));var pe;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(pe||(pe={}));var cn;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(cn||(cn={}));var an;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(an||(an={}));const _s=5,Gg=4;function Bg(e,n){const t=n.startOfMonth(e),r=t.getDay()>0?t.getDay():7,a=n.addDays(e,-r+1),l=n.addDays(a,_s*7-1);return n.getMonth(e)===n.getMonth(l)?_s:Gg}function Lu(e,n){const t=n.startOfMonth(e),r=t.getDay();return r===1?t:r===0?n.addDays(t,-6):n.addDays(t,-1*(r-1))}function Fg(e,n){const t=Lu(e,n),r=Bg(e,n);return n.addDays(t,r*7-1)}class Cn{constructor(n,t){this.Date=Date,this.today=()=>this.overrides?.today?this.overrides.today():this.options.timeZone?Je.tz(this.options.timeZone):new this.Date,this.newDate=(r,a,l)=>this.overrides?.newDate?this.overrides.newDate(r,a,l):this.options.timeZone?new Je(r,a,l,this.options.timeZone):new Date(r,a,l),this.addDays=(r,a)=>this.overrides?.addDays?this.overrides.addDays(r,a):Dt(r,a),this.addMonths=(r,a)=>this.overrides?.addMonths?this.overrides.addMonths(r,a):Wl(r,a),this.addWeeks=(r,a)=>this.overrides?.addWeeks?this.overrides.addWeeks(r,a):tT(r,a),this.addYears=(r,a)=>this.overrides?.addYears?this.overrides.addYears(r,a):zl(r,a),this.differenceInCalendarDays=(r,a)=>this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(r,a):Qn(r,a),this.differenceInCalendarMonths=(r,a)=>this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(r,a):sT(r,a),this.eachMonthOfInterval=r=>this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(r):Zo(r),this.endOfBroadcastWeek=r=>this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(r):Fg(r,this),this.endOfISOWeek=r=>this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(r):uT(r),this.endOfMonth=r=>this.overrides?.endOfMonth?this.overrides.endOfMonth(r):Qo(r),this.endOfWeek=(r,a)=>this.overrides?.endOfWeek?this.overrides.endOfWeek(r,a):eu(r,this.options),this.endOfYear=r=>this.overrides?.endOfYear?this.overrides.endOfYear(r):Fa(r),this.format=(r,a,l)=>{const i=this.overrides?.format?this.overrides.format(r,a,this.options):Tr(r,a,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(i):i},this.getISOWeek=r=>this.overrides?.getISOWeek?this.overrides.getISOWeek(r):Ql(r),this.getMonth=(r,a)=>this.overrides?.getMonth?this.overrides.getMonth(r,this.options):ni(r,this.options),this.getYear=(r,a)=>this.overrides?.getYear?this.overrides.getYear(r,this.options):ri(r,this.options),this.getWeek=(r,a)=>this.overrides?.getWeek?this.overrides.getWeek(r,this.options):ei(r,this.options),this.isAfter=(r,a)=>this.overrides?.isAfter?this.overrides.isAfter(r,a):au(r,a),this.isBefore=(r,a)=>this.overrides?.isBefore?this.overrides.isBefore(r,a):kt(r,a),this.isDate=r=>this.overrides?.isDate?this.overrides.isDate(r):Xo(r),this.isSameDay=(r,a)=>this.overrides?.isSameDay?this.overrides.isSameDay(r,a):Xl(r,a),this.isSameMonth=(r,a)=>this.overrides?.isSameMonth?this.overrides.isSameMonth(r,a):cv(r,a),this.isSameYear=(r,a)=>this.overrides?.isSameYear?this.overrides.isSameYear(r,a):uu(r,a),this.max=r=>this.overrides?.max?this.overrides.max(r):aT(r),this.min=r=>this.overrides?.min?this.overrides.min(r):lT(r),this.setMonth=(r,a)=>this.overrides?.setMonth?this.overrides.setMonth(r,a):du(r,a),this.setYear=(r,a)=>this.overrides?.setYear?this.overrides.setYear(r,a):Eu(r,a),this.startOfBroadcastWeek=(r,a)=>this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(r,this):Lu(r,this),this.startOfDay=r=>this.overrides?.startOfDay?this.overrides.startOfDay(r):Hn(r),this.startOfISOWeek=r=>this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(r):Nr(r),this.startOfMonth=r=>this.overrides?.startOfMonth?this.overrides.startOfMonth(r):_r(r),this.startOfWeek=(r,a)=>this.overrides?.startOfWeek?this.overrides.startOfWeek(r,this.options):Un(r,this.options),this.startOfYear=r=>this.overrides?.startOfYear?this.overrides.startOfYear(r):At(r),this.options={locale:La,...n},this.overrides=t}getDigitMap(){const{numerals:n="latn"}=this.options,t=new Intl.NumberFormat("en-US",{numberingSystem:n}),r={};for(let a=0;a<10;a++)r[a.toString()]=t.format(a);return r}replaceDigits(n){const t=this.getDigitMap();return n.replace(/\d/g,r=>t[r]||r)}formatNumber(n){return this.replaceDigits(n.toString())}}const Mn=new Cn;class hu{constructor(n,t,r=Mn){this.date=n,this.displayMonth=t,this.outside=!!(t&&!r.isSameMonth(n,t)),this.dateLib=r}isEqualTo(n){return this.dateLib.isSameDay(n.date,this.date)&&this.dateLib.isSameMonth(n.displayMonth,this.displayMonth)}}class wg{constructor(n,t){this.date=n,this.weeks=t}}class Vg{constructor(n,t){this.days=t,this.weekNumber=n}}function wn(e,n,t=!1,r=Mn){let{from:a,to:l}=e;const{differenceInCalendarDays:i,isSameDay:s}=r;return a&&l?(i(l,a)<0&&([a,l]=[l,a]),i(n,a)>=(t?1:0)&&i(l,n)>=(t?1:0)):!t&&l?s(l,n):!t&&a?s(a,n):!1}function Mu(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function si(e){return!!(e&&typeof e=="object"&&"from"in e)}function Pu(e){return!!(e&&typeof e=="object"&&"after"in e)}function Ku(e){return!!(e&&typeof e=="object"&&"before"in e)}function Gu(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function Bu(e,n){return Array.isArray(e)&&e.every(n.isDate)}function Nn(e,n,t=Mn){const r=Array.isArray(n)?n:[n],{isSameDay:a,differenceInCalendarDays:l,isAfter:i}=t;return r.some(s=>{if(typeof s=="boolean")return s;if(t.isDate(s))return a(e,s);if(Bu(s,t))return s.includes(e);if(si(s))return wn(s,e,!1,t);if(Gu(s))return Array.isArray(s.dayOfWeek)?s.dayOfWeek.includes(e.getDay()):s.dayOfWeek===e.getDay();if(Mu(s)){const o=l(s.before,e),d=l(s.after,e),u=o>0,E=d<0;return i(s.before,s.after)?E&&u:u||E}return Pu(s)?l(e,s.after)>0:Ku(s)?l(s.before,e)>0:typeof s=="function"?s(e):!1})}function jg(e,n,t){const{disabled:r,hidden:a,modifiers:l,showOutsideDays:i,broadcastCalendar:s,today:o}=n,{isSameDay:d,isSameMonth:u,startOfMonth:E,isBefore:_,endOfMonth:T,isAfter:g}=t,R=n.startMonth&&E(n.startMonth),f=n.endMonth&&T(n.endMonth),S={[pe.focused]:[],[pe.outside]:[],[pe.disabled]:[],[pe.hidden]:[],[pe.today]:[]},c={};for(const I of e){const{date:D,displayMonth:p}=I,y=!!(p&&!u(D,p)),b=!!(R&&_(D,R)),B=!!(f&&g(D,f)),h=!!(r&&Nn(D,r,t)),G=!!(a&&Nn(D,a,t))||b||B||!s&&!i&&y||s&&i===!1&&y,V=d(D,o??t.today());y&&S.outside.push(I),h&&S.disabled.push(I),G&&S.hidden.push(I),V&&S.today.push(I),l&&Object.keys(l).forEach(P=>{const k=l?.[P];k&&Nn(D,k,t)&&(c[P]?c[P].push(I):c[P]=[I])})}return I=>{const D={[pe.focused]:!1,[pe.disabled]:!1,[pe.hidden]:!1,[pe.outside]:!1,[pe.today]:!1},p={};for(const y in S){const b=S[y];D[y]=b.some(B=>B===I)}for(const y in c)p[y]=c[y].some(b=>b===I);return{...D,...p}}}function qg(e,n,t={}){return Object.entries(e).filter(([,a])=>a===!0).reduce((a,[l])=>(t[l]?a.push(t[l]):n[pe[l]]?a.push(n[pe[l]]):n[cn[l]]&&a.push(n[cn[l]]),a),[n[Q.Day]])}function Ug(e){return m.createElement("button",{...e})}function xg(e){return m.createElement("span",{...e})}function Hg(e){const{size:n=24,orientation:t="left",className:r}=e;return m.createElement("svg",{className:r,width:n,height:n,viewBox:"0 0 24 24"},t==="up"&&m.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),t==="down"&&m.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),t==="left"&&m.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),t==="right"&&m.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function Jg(e){const{day:n,modifiers:t,...r}=e;return m.createElement("td",{...r})}function Yg(e){const{day:n,modifiers:t,...r}=e,a=m.useRef(null);return m.useEffect(()=>{t.focused&&a.current?.focus()},[t.focused]),m.createElement("button",{ref:a,...r})}function Cg(e){const{options:n,className:t,components:r,classNames:a,...l}=e,i=[a[Q.Dropdown],t].join(" "),s=n?.find(({value:o})=>o===l.value);return m.createElement("span",{"data-disabled":l.disabled,className:a[Q.DropdownRoot]},m.createElement(r.Select,{className:i,...l},n?.map(({value:o,label:d,disabled:u})=>m.createElement(r.Option,{key:o,value:o,disabled:u},d))),m.createElement("span",{className:a[Q.CaptionLabel],"aria-hidden":!0},s?.label,m.createElement(r.Chevron,{orientation:"down",size:18,className:a[Q.Chevron]})))}function $g(e){return m.createElement("div",{...e})}function Wg(e){return m.createElement("div",{...e})}function zg(e){const{calendarMonth:n,displayIndex:t,...r}=e;return m.createElement("div",{...r},e.children)}function Xg(e){const{calendarMonth:n,displayIndex:t,...r}=e;return m.createElement("div",{...r})}function Qg(e){return m.createElement("table",{...e})}function Zg(e){return m.createElement("div",{...e})}const Fu=v.createContext(void 0);function Ir(){const e=v.useContext(Fu);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function eI(e){const{components:n}=Ir();return m.createElement(n.Dropdown,{...e})}function nI(e){const{onPreviousClick:n,onNextClick:t,previousMonth:r,nextMonth:a,...l}=e,{components:i,classNames:s,labels:{labelPrevious:o,labelNext:d}}=Ir(),u=v.useCallback(_=>{a&&t?.(_)},[a,t]),E=v.useCallback(_=>{r&&n?.(_)},[r,n]);return m.createElement("nav",{...l},m.createElement(i.PreviousMonthButton,{type:"button",className:s[Q.PreviousMonthButton],tabIndex:r?void 0:-1,"aria-disabled":r?void 0:!0,"aria-label":o(r),onClick:E},m.createElement(i.Chevron,{disabled:r?void 0:!0,className:s[Q.Chevron],orientation:"left"})),m.createElement(i.NextMonthButton,{type:"button",className:s[Q.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":d(a),onClick:u},m.createElement(i.Chevron,{disabled:a?void 0:!0,orientation:"right",className:s[Q.Chevron]})))}function rI(e){const{components:n}=Ir();return m.createElement(n.Button,{...e})}function tI(e){return m.createElement("option",{...e})}function aI(e){const{components:n}=Ir();return m.createElement(n.Button,{...e})}function lI(e){const{rootRef:n,...t}=e;return m.createElement("div",{...t,ref:n})}function iI(e){return m.createElement("select",{...e})}function sI(e){const{week:n,...t}=e;return m.createElement("tr",{...t})}function oI(e){return m.createElement("th",{...e})}function uI(e){return m.createElement("thead",{"aria-hidden":!0},m.createElement("tr",{...e}))}function dI(e){const{week:n,...t}=e;return m.createElement("th",{...t})}function EI(e){return m.createElement("th",{...e})}function mI(e){return m.createElement("tbody",{...e})}function NI(e){const{components:n}=Ir();return m.createElement(n.Dropdown,{...e})}const _I=Object.freeze(Object.defineProperty({__proto__:null,Button:Ug,CaptionLabel:xg,Chevron:Hg,Day:Jg,DayButton:Yg,Dropdown:Cg,DropdownNav:$g,Footer:Wg,Month:zg,MonthCaption:Xg,MonthGrid:Qg,Months:Zg,MonthsDropdown:eI,Nav:nI,NextMonthButton:rI,Option:tI,PreviousMonthButton:aI,Root:lI,Select:iI,Week:sI,WeekNumber:dI,WeekNumberHeader:EI,Weekday:oI,Weekdays:uI,Weeks:mI,YearsDropdown:NI},Symbol.toStringTag,{value:"Module"}));function TI(e){return{..._I,...e}}function vI(e){const n={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([t,r])=>{t.startsWith("data-")&&(n[t]=r)}),n}function gI(){const e={};for(const n in Q)e[Q[n]]=`rdp-${Q[n]}`;for(const n in pe)e[pe[n]]=`rdp-${pe[n]}`;for(const n in cn)e[cn[n]]=`rdp-${cn[n]}`;for(const n in an)e[an[n]]=`rdp-${an[n]}`;return e}function wu(e,n,t){return(t??new Cn(n)).format(e,"LLLL y")}const II=wu;function fI(e,n,t){return(t??new Cn(n)).format(e,"d")}function RI(e,n=Mn){return n.format(e,"LLLL")}function cI(e,n=Mn){return e<10?n.formatNumber(`0${e.toLocaleString()}`):n.formatNumber(`${e.toLocaleString()}`)}function SI(){return""}function pI(e,n,t){return(t??new Cn(n)).format(e,"cccccc")}function Vu(e,n=Mn){return n.format(e,"yyyy")}const DI=Vu,AI=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:wu,formatDay:fI,formatMonthCaption:II,formatMonthDropdown:RI,formatWeekNumber:cI,formatWeekNumberHeader:SI,formatWeekdayName:pI,formatYearCaption:DI,formatYearDropdown:Vu},Symbol.toStringTag,{value:"Module"}));function kI(e){return e?.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e?.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...AI,...e}}function yI(e,n,t,r,a){const{startOfMonth:l,startOfYear:i,endOfYear:s,eachMonthOfInterval:o,getMonth:d}=a;return o({start:i(e),end:s(e)}).map(_=>{const T=r.formatMonthDropdown(_,a),g=d(_),R=n&&_<l(n)||t&&_>l(t)||!1;return{value:g,label:T,disabled:R}})}function OI(e,n={},t={}){let r={...n?.[Q.Day]};return Object.entries(e).filter(([,a])=>a===!0).forEach(([a])=>{r={...r,...t?.[a]}}),r}function bI(e,n,t){const r=e.today(),a=n?e.startOfISOWeek(r):e.startOfWeek(r),l=[];for(let i=0;i<7;i++){const s=e.addDays(a,i);l.push(s)}return l}function LI(e,n,t,r){if(!e||!n)return;const{startOfYear:a,endOfYear:l,addYears:i,getYear:s,isBefore:o,isSameYear:d}=r,u=a(e),E=l(n),_=[];let T=u;for(;o(T,E)||d(T,E);)_.push(T),T=i(T,1);return _.map(g=>{const R=t.formatYearDropdown(g,r);return{value:s(g),label:R,disabled:!1}})}function ju(e,n,t){return(t??new Cn(n)).format(e,"LLLL y")}const hI=ju;function MI(e,n,t,r){let a=(r??new Cn(t)).format(e,"PPPP");return n?.today&&(a=`Today, ${a}`),a}function qu(e,n,t,r){let a=(r??new Cn(t)).format(e,"PPPP");return n.today&&(a=`Today, ${a}`),n.selected&&(a=`${a}, selected`),a}const PI=qu;function KI(){return""}function GI(e){return"Choose the Month"}function BI(e){return"Go to the Next Month"}function FI(e){return"Go to the Previous Month"}function wI(e,n,t){return(t??new Cn(n)).format(e,"cccc")}function VI(e,n){return`Week ${e}`}function jI(e){return"Week Number"}function qI(e){return"Choose the Year"}const UI=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:hI,labelDay:PI,labelDayButton:qu,labelGrid:ju,labelGridcell:MI,labelMonthDropdown:GI,labelNav:KI,labelNext:BI,labelPrevious:FI,labelWeekNumber:VI,labelWeekNumberHeader:jI,labelWeekday:wI,labelYearDropdown:qI},Symbol.toStringTag,{value:"Module"})),yt=e=>e instanceof HTMLElement?e:null,ol=e=>[...e.querySelectorAll("[data-animated-month]")??[]],xI=e=>yt(e.querySelector("[data-animated-month]")),ul=e=>yt(e.querySelector("[data-animated-caption]")),dl=e=>yt(e.querySelector("[data-animated-weeks]")),HI=e=>yt(e.querySelector("[data-animated-nav]")),JI=e=>yt(e.querySelector("[data-animated-weekdays]"));function YI(e,n,{classNames:t,months:r,focused:a,dateLib:l}){const i=v.useRef(null),s=v.useRef(r),o=v.useRef(!1);v.useLayoutEffect(()=>{const d=s.current;if(s.current=r,!n||!e.current||!(e.current instanceof HTMLElement)||r.length===0||d.length===0||r.length!==d.length)return;const u=l.isSameMonth(r[0].date,d[0].date),E=l.isAfter(r[0].date,d[0].date),_=E?t[an.caption_after_enter]:t[an.caption_before_enter],T=E?t[an.weeks_after_enter]:t[an.weeks_before_enter],g=i.current,R=e.current.cloneNode(!0);if(R instanceof HTMLElement?(ol(R).forEach(I=>{if(!(I instanceof HTMLElement))return;const D=xI(I);D&&I.contains(D)&&I.removeChild(D);const p=ul(I);p&&p.classList.remove(_);const y=dl(I);y&&y.classList.remove(T)}),i.current=R):i.current=null,o.current||u||a)return;const f=g instanceof HTMLElement?ol(g):[],S=ol(e.current);if(S&&S.every(c=>c instanceof HTMLElement)&&f&&f.every(c=>c instanceof HTMLElement)){o.current=!0,e.current.style.isolation="isolate";const c=HI(e.current);c&&(c.style.zIndex="1"),S.forEach((I,D)=>{const p=f[D];if(!p)return;I.style.position="relative",I.style.overflow="hidden";const y=ul(I);y&&y.classList.add(_);const b=dl(I);b&&b.classList.add(T);const B=()=>{o.current=!1,e.current&&(e.current.style.isolation=""),c&&(c.style.zIndex=""),y&&y.classList.remove(_),b&&b.classList.remove(T),I.style.position="",I.style.overflow="",I.contains(p)&&I.removeChild(p)};p.style.pointerEvents="none",p.style.position="absolute",p.style.overflow="hidden",p.setAttribute("aria-hidden","true");const h=JI(p);h&&(h.style.opacity="0");const G=ul(p);G&&(G.classList.add(E?t[an.caption_before_exit]:t[an.caption_after_exit]),G.addEventListener("animationend",B));const V=dl(p);V&&V.classList.add(E?t[an.weeks_before_exit]:t[an.weeks_after_exit]),I.insertBefore(p,I.firstChild)})}})}function CI(e,n,t,r){const a=e[0],l=e[e.length-1],{ISOWeek:i,fixedWeeks:s,broadcastCalendar:o}=t??{},{addDays:d,differenceInCalendarDays:u,differenceInCalendarMonths:E,endOfBroadcastWeek:_,endOfISOWeek:T,endOfMonth:g,endOfWeek:R,isAfter:f,startOfBroadcastWeek:S,startOfISOWeek:c,startOfWeek:I}=r,D=o?S(a,r):i?c(a):I(a),p=o?_(l):i?T(g(l)):R(g(l)),y=u(p,D),b=E(l,a)+1,B=[];for(let V=0;V<=y;V++){const P=d(D,V);if(n&&f(P,n))break;B.push(P)}const G=(o?35:42)*b;if(s&&B.length<G){const V=G-B.length;for(let P=0;P<V;P++){const k=d(B[B.length-1],1);B.push(k)}}return B}function $I(e){const n=[];return e.reduce((t,r)=>{const a=r.weeks.reduce((l,i)=>[...l,...i.days],n);return[...t,...a]},n)}function WI(e,n,t,r){const{numberOfMonths:a=1}=t,l=[];for(let i=0;i<a;i++){const s=r.addMonths(e,i);if(n&&s>n)break;l.push(s)}return l}function Ts(e,n){const{month:t,defaultMonth:r,today:a=n.today(),numberOfMonths:l=1,endMonth:i,startMonth:s}=e;let o=t||r||a;const{differenceInCalendarMonths:d,addMonths:u,startOfMonth:E}=n;if(i&&d(i,o)<0){const _=-1*(l-1);o=u(i,_)}return s&&d(o,s)<0&&(o=s),E(o)}function zI(e,n,t,r){const{addDays:a,endOfBroadcastWeek:l,endOfISOWeek:i,endOfMonth:s,endOfWeek:o,getISOWeek:d,getWeek:u,startOfBroadcastWeek:E,startOfISOWeek:_,startOfWeek:T}=r,g=e.reduce((R,f)=>{const S=t.broadcastCalendar?E(f,r):t.ISOWeek?_(f):T(f),c=t.broadcastCalendar?l(f):t.ISOWeek?i(s(f)):o(s(f)),I=n.filter(b=>b>=S&&b<=c),D=t.broadcastCalendar?35:42;if(t.fixedWeeks&&I.length<D){const b=n.filter(B=>{const h=D-I.length;return B>c&&B<=a(c,h)});I.push(...b)}const p=I.reduce((b,B)=>{const h=t.ISOWeek?d(B):u(B),G=b.find(P=>P.weekNumber===h),V=new hu(B,f,r);return G?G.days.push(V):b.push(new Vg(h,[V])),b},[]),y=new wg(f,p);return R.push(y),R},[]);return t.reverseMonths?g.reverse():g}function XI(e,n){let{startMonth:t,endMonth:r}=e;const{startOfYear:a,startOfDay:l,startOfMonth:i,endOfMonth:s,addYears:o,endOfYear:d,newDate:u,today:E}=n,{fromYear:_,toYear:T,fromMonth:g,toMonth:R}=e;!t&&g&&(t=g),!t&&_&&(t=n.newDate(_,0,1)),!r&&R&&(r=R),!r&&T&&(r=u(T,11,31));const f=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return t?t=i(t):_?t=u(_,0,1):!t&&f&&(t=a(o(e.today??E(),-100))),r?r=s(r):T?r=u(T,11,31):!r&&f&&(r=d(e.today??E())),[t&&l(t),r&&l(r)]}function QI(e,n,t,r){if(t.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l=1}=t,{startOfMonth:i,addMonths:s,differenceInCalendarMonths:o}=r,d=a?l:1,u=i(e);if(!n)return s(u,d);if(!(o(n,e)<l))return s(u,d)}function ZI(e,n,t,r){if(t.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l}=t,{startOfMonth:i,addMonths:s,differenceInCalendarMonths:o}=r,d=a?l??1:1,u=i(e);if(!n)return s(u,-d);if(!(o(u,n)<=0))return s(u,-d)}function ef(e){const n=[];return e.reduce((t,r)=>[...t,...r.weeks],n)}function qa(e,n){const[t,r]=v.useState(e);return[n===void 0?t:n,r]}function nf(e,n){const[t,r]=XI(e,n),{startOfMonth:a,endOfMonth:l}=n,i=Ts(e,n),[s,o]=qa(i,e.month?i:void 0);v.useEffect(()=>{const y=Ts(e,n);o(y)},[e.timeZone]);const d=WI(s,r,e,n),u=CI(d,e.endMonth?l(e.endMonth):void 0,e,n),E=zI(d,u,e,n),_=ef(E),T=$I(E),g=ZI(s,t,e,n),R=QI(s,r,e,n),{disableNavigation:f,onMonthChange:S}=e,c=y=>_.some(b=>b.days.some(B=>B.isEqualTo(y))),I=y=>{if(f)return;let b=a(y);t&&b<a(t)&&(b=a(t)),r&&b>a(r)&&(b=a(r)),o(b),S?.(b)};return{months:E,weeks:_,days:T,navStart:t,navEnd:r,previousMonth:g,nextMonth:R,goToMonth:I,goToDay:y=>{c(y)||I(y.date)}}}var kn;(function(e){e[e.Today=0]="Today",e[e.Selected=1]="Selected",e[e.LastFocused=2]="LastFocused",e[e.FocusedModifier=3]="FocusedModifier"})(kn||(kn={}));function vs(e){return!e[pe.disabled]&&!e[pe.hidden]&&!e[pe.outside]}function rf(e,n,t,r){let a,l=-1;for(const i of e){const s=n(i);vs(s)&&(s[pe.focused]&&l<kn.FocusedModifier?(a=i,l=kn.FocusedModifier):r?.isEqualTo(i)&&l<kn.LastFocused?(a=i,l=kn.LastFocused):t(i.date)&&l<kn.Selected?(a=i,l=kn.Selected):s[pe.today]&&l<kn.Today&&(a=i,l=kn.Today))}return a||(a=e.find(i=>vs(n(i)))),a}function tf(e,n,t,r,a,l,i){const{ISOWeek:s,broadcastCalendar:o}=l,{addDays:d,addMonths:u,addWeeks:E,addYears:_,endOfBroadcastWeek:T,endOfISOWeek:g,endOfWeek:R,max:f,min:S,startOfBroadcastWeek:c,startOfISOWeek:I,startOfWeek:D}=i;let y={day:d,week:E,month:u,year:_,startOfWeek:b=>o?c(b,i):s?I(b):D(b),endOfWeek:b=>o?T(b):s?g(b):R(b)}[e](t,n==="after"?1:-1);return n==="before"&&r?y=f([r,y]):n==="after"&&a&&(y=S([a,y])),y}function Uu(e,n,t,r,a,l,i,s=0){if(s>365)return;const o=tf(e,n,t.date,r,a,l,i),d=!!(l.disabled&&Nn(o,l.disabled,i)),u=!!(l.hidden&&Nn(o,l.hidden,i)),E=o,_=new hu(o,E,i);return!d&&!u?_:Uu(e,n,_,r,a,l,i,s+1)}function af(e,n,t,r,a){const{autoFocus:l}=e,[i,s]=v.useState(),o=rf(n.days,t,r||(()=>!1),i),[d,u]=v.useState(l?o:void 0);return{isFocusTarget:R=>!!o?.isEqualTo(R),setFocused:u,focused:d,blur:()=>{s(d),u(void 0)},moveFocus:(R,f)=>{if(!d)return;const S=Uu(R,f,d,n.navStart,n.navEnd,e,a);S&&(n.goToDay(S),u(S))}}}function lf(e,n){const{selected:t,required:r,onSelect:a}=e,[l,i]=qa(t,a?t:void 0),s=a?t:l,{isSameDay:o}=n,d=T=>s?.some(g=>o(g,T))??!1,{min:u,max:E}=e;return{selected:s,select:(T,g,R)=>{let f=[...s??[]];if(d(T)){if(s?.length===u||r&&s?.length===1)return;f=s?.filter(S=>!o(S,T))}else s?.length===E?f=[T]:f=[...f,T];return a||i(f),a?.(f,T,g,R),f},isSelected:d}}function sf(e,n,t=0,r=0,a=!1,l=Mn){const{from:i,to:s}=n||{},{isSameDay:o,isAfter:d,isBefore:u}=l;let E;if(!i&&!s)E={from:e,to:t>0?void 0:e};else if(i&&!s)o(i,e)?a?E={from:i,to:void 0}:E=void 0:u(e,i)?E={from:e,to:i}:E={from:i,to:e};else if(i&&s)if(o(i,e)&&o(s,e))a?E={from:i,to:s}:E=void 0;else if(o(i,e))E={from:i,to:t>0?void 0:e};else if(o(s,e))E={from:e,to:t>0?void 0:e};else if(u(e,i))E={from:e,to:s};else if(d(e,i))E={from:i,to:e};else if(d(e,s))E={from:i,to:e};else throw new Error("Invalid range");if(E?.from&&E?.to){const _=l.differenceInCalendarDays(E.to,E.from);r>0&&_>r?E={from:e,to:void 0}:t>1&&_<t&&(E={from:e,to:void 0})}return E}function of(e,n,t=Mn){const r=Array.isArray(n)?n:[n];let a=e.from;const l=t.differenceInCalendarDays(e.to,e.from),i=Math.min(l,6);for(let s=0;s<=i;s++){if(r.includes(a.getDay()))return!0;a=t.addDays(a,1)}return!1}function gs(e,n,t=Mn){return wn(e,n.from,!1,t)||wn(e,n.to,!1,t)||wn(n,e.from,!1,t)||wn(n,e.to,!1,t)}function uf(e,n,t=Mn){const r=Array.isArray(n)?n:[n];if(r.filter(s=>typeof s!="function").some(s=>typeof s=="boolean"?s:t.isDate(s)?wn(e,s,!1,t):Bu(s,t)?s.some(o=>wn(e,o,!1,t)):si(s)?s.from&&s.to?gs(e,{from:s.from,to:s.to},t):!1:Gu(s)?of(e,s.dayOfWeek,t):Mu(s)?t.isAfter(s.before,s.after)?gs(e,{from:t.addDays(s.after,1),to:t.addDays(s.before,-1)},t):Nn(e.from,s,t)||Nn(e.to,s,t):Pu(s)||Ku(s)?Nn(e.from,s,t)||Nn(e.to,s,t):!1))return!0;const i=r.filter(s=>typeof s=="function");if(i.length){let s=e.from;const o=t.differenceInCalendarDays(e.to,e.from);for(let d=0;d<=o;d++){if(i.some(u=>u(s)))return!0;s=t.addDays(s,1)}}return!1}function df(e,n){const{disabled:t,excludeDisabled:r,selected:a,required:l,onSelect:i}=e,[s,o]=qa(a,i?a:void 0),d=i?a:s;return{selected:d,select:(_,T,g)=>{const{min:R,max:f}=e,S=_?sf(_,d,R,f,l,n):void 0;return r&&t&&S?.from&&S.to&&uf({from:S.from,to:S.to},t,n)&&(S.from=_,S.to=void 0),i||o(S),i?.(S,_,T,g),S},isSelected:_=>d&&wn(d,_,!1,n)}}function Ef(e,n){const{selected:t,required:r,onSelect:a}=e,[l,i]=qa(t,a?t:void 0),s=a?t:l,{isSameDay:o}=n;return{selected:s,select:(E,_,T)=>{let g=E;return!r&&s&&s&&o(E,s)&&(g=void 0),a||i(g),a?.(g,E,_,T),g},isSelected:E=>s?o(s,E):!1}}function mf(e,n){const t=Ef(e,n),r=lf(e,n),a=df(e,n);switch(e.mode){case"single":return t;case"multiple":return r;case"range":return a;default:return}}function Nf(e){let n=e;n.timeZone&&(n={...e},n.today&&(n.today=new Je(n.today,n.timeZone)),n.month&&(n.month=new Je(n.month,n.timeZone)),n.defaultMonth&&(n.defaultMonth=new Je(n.defaultMonth,n.timeZone)),n.startMonth&&(n.startMonth=new Je(n.startMonth,n.timeZone)),n.endMonth&&(n.endMonth=new Je(n.endMonth,n.timeZone)),n.mode==="single"&&n.selected?n.selected=new Je(n.selected,n.timeZone):n.mode==="multiple"&&n.selected?n.selected=n.selected?.map(le=>new Je(le,n.timeZone)):n.mode==="range"&&n.selected&&(n.selected={from:n.selected.from?new Je(n.selected.from,n.timeZone):void 0,to:n.selected.to?new Je(n.selected.to,n.timeZone):void 0}));const{components:t,formatters:r,labels:a,dateLib:l,locale:i,classNames:s}=v.useMemo(()=>{const le={...La,...n.locale};return{dateLib:new Cn({locale:le,weekStartsOn:n.broadcastCalendar?1:n.weekStartsOn,firstWeekContainsDate:n.firstWeekContainsDate,useAdditionalWeekYearTokens:n.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:n.useAdditionalDayOfYearTokens,timeZone:n.timeZone,numerals:n.numerals},n.dateLib),components:TI(n.components),formatters:kI(n.formatters),labels:{...UI,...n.labels},locale:le,classNames:{...gI(),...n.classNames}}},[n.locale,n.broadcastCalendar,n.weekStartsOn,n.firstWeekContainsDate,n.useAdditionalWeekYearTokens,n.useAdditionalDayOfYearTokens,n.timeZone,n.numerals,n.dateLib,n.components,n.formatters,n.labels,n.classNames]),{captionLayout:o,mode:d,navLayout:u,numberOfMonths:E=1,onDayBlur:_,onDayClick:T,onDayFocus:g,onDayKeyDown:R,onDayMouseEnter:f,onDayMouseLeave:S,onNextClick:c,onPrevClick:I,showWeekNumber:D,styles:p}=n,{formatCaption:y,formatDay:b,formatMonthDropdown:B,formatWeekNumber:h,formatWeekNumberHeader:G,formatWeekdayName:V,formatYearDropdown:P}=r,k=nf(n,l),{days:L,months:K,navStart:j,navEnd:q,previousMonth:w,nextMonth:F,goToMonth:Y}=k,z=jg(L,n,l),{isSelected:W,select:ae,selected:Fe}=mf(n,l)??{},{blur:Z,focused:J,isFocusTarget:re,moveFocus:te,setFocused:de}=af(n,k,z,W??(()=>!1),l),{labelDayButton:je,labelGridcell:qe,labelGrid:Ue,labelMonthDropdown:Pn,labelNav:un,labelPrevious:vn,labelNext:ar,labelWeekday:lr,labelWeekNumber:fr,labelWeekNumberHeader:$n,labelYearDropdown:A}=a,O=v.useMemo(()=>bI(l,n.ISOWeek),[l,n.ISOWeek]),M=d!==void 0||T!==void 0,C=v.useCallback(()=>{w&&(Y(w),I?.(w))},[w,Y,I]),x=v.useCallback(()=>{F&&(Y(F),c?.(F))},[Y,F,c]),U=v.useCallback((le,Se)=>Ie=>{Ie.preventDefault(),Ie.stopPropagation(),de(le),ae?.(le.date,Se,Ie),T?.(le.date,Se,Ie)},[ae,T,de]),X=v.useCallback((le,Se)=>Ie=>{de(le),g?.(le.date,Se,Ie)},[g,de]),oe=v.useCallback((le,Se)=>Ie=>{Z(),_?.(le.date,Se,Ie)},[Z,_]),Te=v.useCallback((le,Se)=>Ie=>{const Wn={ArrowLeft:["day",n.dir==="rtl"?"after":"before"],ArrowRight:["day",n.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[Ie.shiftKey?"year":"month","before"],PageDown:[Ie.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(Wn[Ie.key]){Ie.preventDefault(),Ie.stopPropagation();const[gn,Pt]=Wn[Ie.key];te(gn,Pt)}R?.(le.date,Se,Ie)},[te,R,n.dir]),en=v.useCallback((le,Se)=>Ie=>{f?.(le.date,Se,Ie)},[f]),Rr=v.useCallback((le,Se)=>Ie=>{S?.(le.date,Se,Ie)},[S]),Dn=v.useCallback(le=>Se=>{const Ie=Number(Se.target.value),Wn=l.setMonth(l.startOfMonth(le),Ie);Y(Wn)},[l,Y]),Ya=v.useCallback(le=>Se=>{const Ie=Number(Se.target.value),Wn=l.setYear(l.startOfMonth(le),Ie);Y(Wn)},[l,Y]),{className:zr,style:Xr}=v.useMemo(()=>({className:[s[Q.Root],n.className].filter(Boolean).join(" "),style:{...p?.[Q.Root],...n.style}}),[s,n.className,n.style,p]),Ca=vI(n),Qr=v.useRef(null);YI(Qr,!!n.animate,{classNames:s,months:K,focused:J,dateLib:l});const $a={dayPickerProps:n,selected:Fe,select:ae,isSelected:W,months:K,nextMonth:F,previousMonth:w,goToMonth:Y,getModifiers:z,components:t,classNames:s,styles:p,labels:a,formatters:r};return m.createElement(Fu.Provider,{value:$a},m.createElement(t.Root,{rootRef:n.animate?Qr:void 0,className:zr,style:Xr,dir:n.dir,id:n.id,lang:n.lang,nonce:n.nonce,title:n.title,role:n.role,"aria-label":n["aria-label"],...Ca},m.createElement(t.Months,{className:s[Q.Months],style:p?.[Q.Months]},!n.hideNavigation&&!u&&m.createElement(t.Nav,{"data-animated-nav":n.animate?"true":void 0,className:s[Q.Nav],style:p?.[Q.Nav],"aria-label":un(),onPreviousClick:C,onNextClick:x,previousMonth:w,nextMonth:F}),K.map((le,Se)=>{const Ie=yI(le.date,j,q,r,l),Wn=LI(j,q,r,l);return m.createElement(t.Month,{"data-animated-month":n.animate?"true":void 0,className:s[Q.Month],style:p?.[Q.Month],key:Se,displayIndex:Se,calendarMonth:le},u==="around"&&!n.hideNavigation&&Se===0&&m.createElement(t.PreviousMonthButton,{type:"button",className:s[Q.PreviousMonthButton],tabIndex:w?void 0:-1,"aria-disabled":w?void 0:!0,"aria-label":vn(w),onClick:C,"data-animated-button":n.animate?"true":void 0},m.createElement(t.Chevron,{disabled:w?void 0:!0,className:s[Q.Chevron],orientation:n.dir==="rtl"?"right":"left"})),m.createElement(t.MonthCaption,{"data-animated-caption":n.animate?"true":void 0,className:s[Q.MonthCaption],style:p?.[Q.MonthCaption],calendarMonth:le,displayIndex:Se},o?.startsWith("dropdown")?m.createElement(t.DropdownNav,{className:s[Q.Dropdowns],style:p?.[Q.Dropdowns]},o==="dropdown"||o==="dropdown-months"?m.createElement(t.MonthsDropdown,{className:s[Q.MonthsDropdown],"aria-label":Pn(),classNames:s,components:t,disabled:!!n.disableNavigation,onChange:Dn(le.date),options:Ie,style:p?.[Q.Dropdown],value:l.getMonth(le.date)}):m.createElement("span",null,B(le.date,l)),o==="dropdown"||o==="dropdown-years"?m.createElement(t.YearsDropdown,{className:s[Q.YearsDropdown],"aria-label":A(l.options),classNames:s,components:t,disabled:!!n.disableNavigation,onChange:Ya(le.date),options:Wn,style:p?.[Q.Dropdown],value:l.getYear(le.date)}):m.createElement("span",null,P(le.date,l)),m.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},y(le.date,l.options,l))):m.createElement(t.CaptionLabel,{className:s[Q.CaptionLabel],role:"status","aria-live":"polite"},y(le.date,l.options,l))),u==="around"&&!n.hideNavigation&&Se===E-1&&m.createElement(t.NextMonthButton,{type:"button",className:s[Q.NextMonthButton],tabIndex:F?void 0:-1,"aria-disabled":F?void 0:!0,"aria-label":ar(F),onClick:x,"data-animated-button":n.animate?"true":void 0},m.createElement(t.Chevron,{disabled:F?void 0:!0,className:s[Q.Chevron],orientation:n.dir==="rtl"?"left":"right"})),Se===E-1&&u==="after"&&!n.hideNavigation&&m.createElement(t.Nav,{"data-animated-nav":n.animate?"true":void 0,className:s[Q.Nav],style:p?.[Q.Nav],"aria-label":un(),onPreviousClick:C,onNextClick:x,previousMonth:w,nextMonth:F}),m.createElement(t.MonthGrid,{role:"grid","aria-multiselectable":d==="multiple"||d==="range","aria-label":Ue(le.date,l.options,l)||void 0,className:s[Q.MonthGrid],style:p?.[Q.MonthGrid]},!n.hideWeekdays&&m.createElement(t.Weekdays,{"data-animated-weekdays":n.animate?"true":void 0,className:s[Q.Weekdays],style:p?.[Q.Weekdays]},D&&m.createElement(t.WeekNumberHeader,{"aria-label":$n(l.options),className:s[Q.WeekNumberHeader],style:p?.[Q.WeekNumberHeader],scope:"col"},G()),O.map((gn,Pt)=>m.createElement(t.Weekday,{"aria-label":lr(gn,l.options,l),className:s[Q.Weekday],key:Pt,style:p?.[Q.Weekday],scope:"col"},V(gn,l.options,l)))),m.createElement(t.Weeks,{"data-animated-weeks":n.animate?"true":void 0,className:s[Q.Weeks],style:p?.[Q.Weeks]},le.weeks.map((gn,Pt)=>m.createElement(t.Week,{className:s[Q.Week],key:gn.weekNumber,style:p?.[Q.Week],week:gn},D&&m.createElement(t.WeekNumber,{week:gn,style:p?.[Q.WeekNumber],"aria-label":fr(gn.weekNumber,{locale:i}),className:s[Q.WeekNumber],scope:"row",role:"rowheader"},h(gn.weekNumber,l)),gn.days.map(He=>{const{date:An}=He,me=z(He);if(me[pe.focused]=!me.hidden&&!!J?.isEqualTo(He),me[cn.selected]=W?.(An)||me.selected,si(Fe)){const{from:Wa,to:za}=Fe;me[cn.range_start]=!!(Wa&&za&&l.isSameDay(An,Wa)),me[cn.range_end]=!!(Wa&&za&&l.isSameDay(An,za)),me[cn.range_middle]=wn(Fe,An,!0,l)}const Md=OI(me,p,n.modifiersStyles),Pd=qg(me,s,n.modifiersClassNames),Kd=!M&&!me.hidden?qe(An,me,l.options,l):void 0;return m.createElement(t.Day,{key:`${l.format(An,"yyyy-MM-dd")}_${l.format(He.displayMonth,"yyyy-MM")}`,day:He,modifiers:me,className:Pd.join(" "),style:Md,role:"gridcell","aria-selected":me.selected||void 0,"aria-label":Kd,"data-day":l.format(An,"yyyy-MM-dd"),"data-month":He.outside?l.format(An,"yyyy-MM"):void 0,"data-selected":me.selected||void 0,"data-disabled":me.disabled||void 0,"data-hidden":me.hidden||void 0,"data-outside":He.outside||void 0,"data-focused":me.focused||void 0,"data-today":me.today||void 0},!me.hidden&&M?m.createElement(t.DayButton,{className:s[Q.DayButton],style:p?.[Q.DayButton],type:"button",day:He,modifiers:me,disabled:me.disabled||void 0,tabIndex:re(He)?0:-1,"aria-label":je(An,me,l.options,l),onClick:U(He,me),onBlur:oe(He,me),onFocus:X(He,me),onKeyDown:Te(He,me),onMouseEnter:en(He,me),onMouseLeave:Rr(He,me)},b(An,l.options,l)):!me.hidden&&b(He.date,l.options,l))}))))))})),n.footer&&m.createElement(t.Footer,{className:s[Q.Footer],style:p?.[Q.Footer],role:"status","aria-live":"polite"},n.footer)))}var _f=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const xu=v.forwardRef((e,n)=>{var{as:t="div",className:r,above:a,below:l,variant:i,asChild:s}=e,o=_f(e,["as","className","above","below","variant","asChild"]);const{cn:d}=ee(),u=i==="show"?a:l,E=i==="show"?l:a,_=s?Ur:t;return m.createElement(_,Object.assign({},o,{ref:n,className:d("navds-responsive",r,{[`navds-responsive__above--${u}`]:u,[`navds-responsive__below--${E}`]:E})}))}),Tf=v.forwardRef((e,n)=>m.createElement(xu,Object.assign({},e,{ref:n,variant:"hide"}))),oi=v.forwardRef((e,n)=>m.createElement(xu,Object.assign({},e,{ref:n,variant:"show"})));function Sn(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function vf({day:e,fromDate:n,toDate:t}){const r=t&&Qn(e,Hn(t))>0,a=n&&Qn(Hn(n),e)>0;return r||a||!1}const Hu="dd.MM.yyyy",gf="MMMM yyyy",Ju=[Hu,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...Ju];const El=(e,n,t,r,a)=>{let l;const i=Ju;if(a){for(const s of i)if(l=br(e,s,n,{locale:t}),Sn(l)&&!ml(e,n,t,i))return l;for(const s of[...i.map(o=>o.replace("yyyy","yy"))])if(l=br(e,s,n,{locale:t}),Sn(l)&&ml(e,n,t,i)){const o=If(e,s,n,t);return Sn(new Date(o))?new Date(o):new Date("Invalid date")}return new Date("Invalid date")}for(const s of i)if(l=br(e,s,n,{locale:t}),Sn(l)&&!ml(e,n,t,i))return l;return new Date("Invalid date")};function ml(e,n,t,r){let a;const l=r.map(i=>i.replace("yyyy","yy"));for(const i of l)if(a=br(e,i,n,{locale:t}),Sn(a))return!0;return!1}function If(e,n,t,r){const a=br(Is(e,"19"),n.replace("yy","yyyy"),t,{locale:r}),l=br(Is(e,"20"),n.replace("yy","yyyy"),t,{locale:r});return Sn(a)&&Sn(l)?kt(a,Dv(new Date,{years:80}))?l:a:new Date("Invalid date")}function Is(e,n){const t=e.slice(-2);return`${e.slice(0,e.length-2)}${n}${t}`}const Zr=(e,n,t,r)=>Tr(e,r??Hu,{locale:n}),ff=({month:e,start:n,end:t})=>{if(!e)return;let r=e;return n&&kt(r,n)&&(r=n),t&&au(r,t)&&(r=t),_r(r)};function Rf(e,n,t,r){return Zo({start:At(e),end:Fa(e)}).map(i=>{const s=Tr(i,"LLLL",{locale:r}),o=ni(i),d=n&&i<_r(n)||t&&i>_r(t)||!1;return{value:o,label:s,disabled:d}})}function cf(e,n,t){if(!e||!n)return;const r=At(e),a=Fa(n),l=[];let i=r;for(;kt(i,a)||uu(i,a);)l.push(i),i=zl(i,1);return l.map(s=>{const o=Tr(s,"yyyy",{locale:t});return{value:ri(s),label:o,disabled:!1}})}function Sf({captionLayout:e,startMonth:n,endMonth:t,today:r}){const a=e==="dropdown",l=r??new Date;return n?n=_r(n):!n&&a&&(n=At(zl(l,-100))),t?t=Qo(t):!t&&a&&(t=Fa(l)),[n&&Hn(n),t&&Hn(t)]}var pf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Df=e=>{var{day:n,modifiers:t,locale:r,children:a}=e,l=pf(e,["day","modifiers","locale","children"]);const{cn:i}=ee(),s=v.useRef(null);return v.useEffect(()=>{var o;t.focused&&((o=s.current)===null||o===void 0||o.focus())},[t.focused]),t.hidden?m.createElement(m.Fragment,null):m.createElement("button",Object.assign({},l,{ref:s,"aria-hidden":n.outside,"aria-pressed":!!t.selected,"aria-label":Tr(n.date,"cccc d",{locale:r}),"data-pressed":t.selected,"data-today":t.today||void 0,className:i(l.className,{"rdp-day_disabled":t.disabled,"rdp-day_selected":t.selected,"rdp-day_range_start":t.range_start,"rdp-day_range_middle":t.range_middle,"rdp-day_range_end":t.range_end,"rdp-day_today":t.today,"rdp-day_outside":t.outside,"rdp-day__weekend":t.weekend})}),a)};var Af=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const kl=v.forwardRef((e,n)=>{const{inputProps:t,errorId:r,showErrorMsg:a,hasError:l,size:i,inputDescriptionId:s,readOnly:o}=Wr(e,"select"),{children:d,label:u,className:E,description:_,htmlSize:T,hideLabel:g=!1,style:R}=e,f=Af(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:S}=ee(),c={onMouseDown:I=>{o&&(I.preventDefault(),I.target.focus())},onKeyDown:I=>{o&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(I.key)&&I.preventDefault()}};return m.createElement("div",{className:S(E,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!t.disabled,"navds-form-field--readonly":o,"navds-select--error":l,"navds-select--readonly":o})},m.createElement(Re,{htmlFor:t.id,size:i,className:S("navds-form-field__label",{"navds-sr-only":g})},o&&m.createElement(Tu,null),u),!!_&&m.createElement(ne,{className:S("navds-form-field__description",{"navds-sr-only":g}),id:s,size:i,as:"div"},_),m.createElement("div",{className:S("navds-select__container"),style:R},m.createElement("select",Object.assign({},Ye(f,["error","errorId","size","readOnly"]),t,c,{ref:n,className:S("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:T}),d),m.createElement(It,{className:S("navds-select__chevron"),"aria-hidden":!0})),m.createElement("div",{className:S("navds-form-field__error"),id:r,"aria-relevant":"additions removals","aria-live":"polite"},a&&m.createElement(Jr,{size:i,showIcon:!0},e.error)))}),Yu=({week:{weekNumber:e,days:n},onWeekNumberClick:t,className:r,style:a,showOnDesktop:l})=>{const i=ja().translate,{cn:s}=ee(),{getModifiers:o}=Ir(),d=v.useMemo(()=>n.filter(E=>{const _=o(E);return!(_.hidden||_.outside||_.disabled)}).length===0,[n,o]),u=l?oi:Tf;return!t||d?m.createElement(u,{above:"sm",asChild:!0},m.createElement("td",{className:"rdp-cell"},m.createElement(Kr,{as:"span",textColor:"subtle",className:r,style:a,"aria-label":i("weekNumber",{week:e})},e))):m.createElement(u,{above:"sm",asChild:!0},m.createElement("td",{className:s("rdp-cell",{"navds-date__week-wrapper":!l})},m.createElement(Oe,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":i("selectWeekNumber",{week:e}),style:a,className:s("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{t(e,n.map(E=>E.date))},icon:m.createElement("span",{className:s("navds-date__weeknumber-number")},e)})))},kf=({onWeekNumberClick:e,weeks:n})=>{const t=ja().translate,{cn:r}=ee(),a=pn();return e?m.createElement(oi,{below:"sm",asChild:!0},m.createElement("table",{className:"rdp-table",role:"grid"},m.createElement("tbody",{className:"rdp-tbody"},m.createElement("tr",{className:r("rdp-row navds-date__week-row")},m.createElement(Kr,{as:"th",weight:"semibold",className:r("rdp-cell navds-date__week-cell")},m.createElement("span",{className:r("navds-date__week-wrapper"),id:a},t("week"))),n?.map(l=>m.createElement(Yu,{key:l.weekNumber,week:l,onWeekNumberClick:e,showOnDesktop:!1,className:r("navds-date__week-wrapper")})))))):null};var yf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Of=e=>{var{children:n,calendarMonth:t,locale:r,onWeekNumberClick:a}=e,l=yf(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:i,goToMonth:s,previousMonth:o,nextMonth:d}=Ir(),{captionLayout:u}=i,{cn:E}=ee(),_=ja().translate,T=v.useCallback((I,D)=>{const p=Number(D.target.value),y=du(_r(I),p);s(y)},[s]),g=v.useCallback((I,D)=>{const p=Number(D.target.value),y=Eu(_r(I),p);s(y)},[s]),[R,f]=Sf({captionLayout:u==="dropdown"?"dropdown":"label",startMonth:i.startMonth,endMonth:i.endMonth,today:i.today}),S=Rf(t.date,R,f,r),c=cf(R,f,r);return m.createElement("div",Object.assign({},Ye(l,["displayIndex"])),m.createElement("div",{className:E("navds-date__caption")},u?.startsWith("dropdown")&&m.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:E("navds-sr-only")},Tr(t.date,"LLLL y",{locale:r})),m.createElement(Oe,{variant:"tertiary-neutral",disabled:!o,onClick:()=>o&&s(o),icon:m.createElement(aE,{title:_("goToPreviousMonth")}),className:E("navds-date__caption-button"),type:"button"}),u?.startsWith("dropdown")?m.createElement("div",{className:E("navds-date__caption")},m.createElement(kl,{label:_("month"),hideLabel:!0,className:E("navds-date__caption__month"),onChange:I=>T(t.date,I),value:ni(t.date)},S?.map(({value:I,label:D,disabled:p})=>m.createElement("option",{key:I,value:I,disabled:p},D))),m.createElement(kl,{label:_("year"),hideLabel:!0,className:E("navds-date__caption__year"),onChange:I=>g(t.date,I),value:ri(t.date)},c?.map(({value:I,label:D,disabled:p})=>m.createElement("option",{key:I,value:I,disabled:p},D)))):m.createElement(ne,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:E("navds-date__caption-label")},Tr(t.date,"LLLL y",{locale:r})),m.createElement(Oe,{variant:"tertiary-neutral",icon:m.createElement(iE,{title:_("goToNextMonth")}),onClick:()=>d&&s(d),disabled:!d,className:E("navds-date__caption-button"),type:"button"})),m.createElement(kf,{weeks:t.weeks,onWeekNumberClick:a}),n)};var bf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Lf={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},Cu=e=>{var{className:n,dropdownCaption:t,disabled:r=[],disableWeekends:a=!1,showWeekNumber:l=!1,selected:i,fixedWeeks:s=!1,onWeekNumberClick:o,fromDate:d,toDate:u,month:E,mode:_,handleSelect:T,locale:g}=e,R=bf(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:f}=ee(),S=Wo(),c=g?Iu(g):S,I=_??"single";return m.createElement(Nf,Object.assign({captionLayout:t?"dropdown":"label",hideNavigation:!0,locale:c,mode:I,onSelect:(D,p)=>{if(I!=="range"||D||!Ou(i)){T(D);return}if(!i.to){T({from:p,to:void 0});return}let y;Xl(i.to,p)?y=void 0:kt(p,i.to)?y={from:p,to:i.to}:y={from:i.to,to:p},T(y)},selected:i,classNames:Lf,components:{MonthCaption:()=>m.createElement(m.Fragment,null),DayButton:v.useCallback(D=>m.createElement(Df,Object.assign({},D,{locale:c})),[c]),Month:v.useCallback(D=>m.createElement(Of,Object.assign({},D,{locale:c,onWeekNumberClick:I==="multiple"?o:void 0})),[c,I,o]),Day:v.useCallback(D=>m.createElement("td",Object.assign({},Ye(D,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:v.useCallback(D=>m.createElement(Yu,Object.assign({},D,{showOnDesktop:!0,onWeekNumberClick:I==="multiple"?o:void 0})),[I,o]),WeekNumberHeader:v.useCallback(D=>m.createElement(oi,{above:"sm",asChild:!0},m.createElement("th",Object.assign({},D))),[]),Weekdays:v.useCallback(D=>m.createElement("thead",Object.assign({},D,{className:"rdp-head","aria-hidden":!0}),m.createElement("tr",{className:"rdp-head_row"},D.children)),[])},className:f("navds-date",n),disabled:D=>a&&fa(D)||Nn(D,r)||vf({day:D,fromDate:d,toDate:u}),weekStartsOn:1,modifiers:{weekend:D=>a&&fa(D)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:l,fixedWeeks:s,showOutsideDays:!0,startMonth:d,endMonth:u,month:ff({month:E,start:d,end:u})},Ye(R,["onSelect","role","id","defaultSelected"])))};var hf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Mf=v.forwardRef((e,n)=>{var{className:t,locale:r,translations:a,selected:l,defaultSelected:i,onSelect:s,mode:o}=e,d=hf(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:u}=ee(),E=Yn("DatePicker",a,fu(r)),[_,T]=Br({defaultValue:i,value:l,onChange:g=>s?.(g)});return m.createElement(Ru,{translate:E},m.createElement("div",{ref:n,className:u("navds-date__standalone-wrapper",t)},m.createElement(Cu,Object.assign({},d,{locale:r,handleSelect:T,selected:_,mode:o}))))});var Pf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Da=v.forwardRef((e,n)=>{var{children:t,locale:r,translations:a,selected:l,id:i,defaultSelected:s,wrapperClassName:o,open:d,onClose:u,onOpenToggle:E,strategy:_,mode:T}=e,g=Pf(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const R=Yn("DatePicker",a,fu(r)),{cn:f}=ee(),S=pn(i),[c,I]=Br({defaultValue:!1,value:d}),[D,p]=v.useState(null),y=xr(p,n),[b,B]=Br({defaultValue:s,value:l,onChange:h=>{var G;let V=!1;T==="single"&&h?V=!0:Ou(h)&&h.from&&h.to&&(V=!0,Xl(h.from,h.to)&&(V=!1)),V&&(u?.(),I(!1)),(G=g?.onSelect)===null||G===void 0||G.call(g,h)}});return m.createElement(Ru,{translate:R},m.createElement(dg,{open:c,onOpen:()=>{I(h=>!h),E?.()},ariaId:S,defined:!0},m.createElement("div",{ref:y,className:f("navds-date__wrapper",o)},t,m.createElement(Lg,{open:c,anchor:D,onClose:()=>{u?.(),c&&I(!1)},locale:r,translate:R,variant:T??"single",popoverProps:{id:S,strategy:_}},m.createElement(Cu,Object.assign({},g,{locale:r,handleSelect:B,selected:b,mode:T}))))))});Da.Standalone=Mf;Da.Input=Eg;const Kf=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),Gf=(e={})=>{var n;const{locale:t,required:r,defaultSelected:a,today:l=new Date,fromDate:i,toDate:s,disabled:o,disableWeekends:d,onDateChange:u,inputFormat:E,onValidate:_,defaultMonth:T,allowTwoDigitYear:g=!0}=e,[R,f]=v.useState(null),S=Wo(),c=t?Iu(t):S,[I,D]=v.useState(a),[p,y]=v.useState((n=I??T)!==null&&n!==void 0?n:l),[b,B]=v.useState(I),[h,G]=v.useState(!1),V=I?Zr(I,c,"date",E):"",[P,k]=v.useState(V),L=v.useCallback(Z=>{var J,re;G(Z),Z&&y((re=(J=b??I)!==null&&J!==void 0?J:T)!==null&&re!==void 0?re:l)},[T,I,b,l]),K=Z=>{u?.(Z),B(Z)},j=(Z={})=>_?.(Kf(Z));return{datepickerProps:{month:p,onMonthChange:y,onDayClick:(Z,{selected:J})=>{if(!(J&&r)){if(Z&&!J&&(L(!1),R?.focus()),J){K(void 0),k(""),j({isValidDate:!1,isEmpty:!0});return}K(Z),j(),y(Z),k(Z?Zr(Z,c,"date",E):"")}},selected:b??new Date("Invalid date"),locale:t,fromDate:i,toDate:s,today:l,open:h,onClose:()=>{L(!1),R?.focus()},onOpenToggle:()=>L(!h),disabled:o,disableWeekends:d},inputProps:{onChange:Z=>{k(Z.target.value);const J=El(Z.target.value,l,c,"date",g),re=i&&J&&Qn(i,J)>0,te=s&&J&&Qn(J,s)>0;if(!Sn(J)||d&&fa(J)||o&&Nn(J,o)){K(void 0),j({isInvalid:!Sn(J),isWeekend:d&&fa(J),isDisabled:o&&Nn(J,o),isValidDate:!1,isEmpty:!Z.target.value,isBefore:re??!1,isAfter:te??!1});return}if(re||te){K(void 0),j({isValidDate:!1,isBefore:re??!1,isAfter:te??!1});return}K(J),j(),y(T??J)},onFocus:Z=>{if(Z.target.readOnly)return;const J=El(Z.target.value,l,c,"date",g);if(Sn(J)){k(Zr(J,c,"date",E));const re=i&&J&&Qn(i,J)>0,te=s&&J&&Qn(J,s)>0;!re&&!te&&y(J)}},onBlur:Z=>{const J=El(Z.target.value,l,c,"date",g);Sn(J)&&k(Zr(J,c,"date",E))},value:P,setAnchorRef:f},reset:()=>{var Z;K(I),y((Z=I??T)!==null&&Z!==void 0?Z:l),k(V??""),D(a)},selectedDay:b,setSelected:Z=>{var J;K(Z),y((J=Z??T)!==null&&J!==void 0?J:l),k(Z?Zr(Z,c,"date",E):"")}}};function xe(e,n,t,r){return r?typeof r=="string"?{[`--__${e}c-${n}-${t}-xs`]:r}:Object.fromEntries(Object.entries(r).map(([a,l])=>[`--__${e}c-${n}-${t}-${a}`,l])):{}}const Bf={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},fs=(e,n,t,r,a,l)=>n.split(" ").map((i,s,o)=>{var d;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let u=`var(--${l}-${t}-${i})`;if(r.includes(i))u=i==="px"?"1px":i;else if(i.startsWith("space"))u=`var(--${l}-${i})`;else{const E=`--${l}-spacing-${i}`;u=`var(${(d=Bf[E])!==null&&d!==void 0?d:E})`}return a?i==="0"?"0":`calc(-1 * ${u})`:u}).join(" ");function En(e,n,t,r,a,l=!1,i=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${n}-${t}-xs`]:fs(t,a,r,i,l,e)};const s={};return Object.entries(a).forEach(([o,d])=>{s[`--__${e}c-${n}-${t}-${o}`]=fs(t,d,r,i,l,e)}),s}const Ff=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],wf=({children:e,className:n,padding:t,paddingInline:r,paddingBlock:a,margin:l,marginInline:i,marginBlock:s,width:o,minWidth:d,maxWidth:u,height:E,minHeight:_,maxHeight:T,position:g,inset:R,top:f,right:S,left:c,bottom:I,overflow:D,overflowX:p,overflowY:y,flexBasis:b,flexGrow:B,flexShrink:h,gridColumn:G})=>{const V=qr(!1),{cn:P}=ee(),k=V?.isDarkside?"ax":"a",L=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},En(k,"r","p","spacing",t)),En(k,"r","pi","spacing",r)),En(k,"r","pb","spacing",a)),En(k,"r","m","spacing",l)),En(k,"r","mi","spacing",i)),En(k,"r","mb","spacing",s)),xe(k,"r","w",o)),xe(k,"r","minw",d)),xe(k,"r","maxw",u)),xe(k,"r","h",E)),xe(k,"r","minh",_)),xe(k,"r","maxh",T)),xe(k,"r","position",g)),En(k,"r","inset","spacing",R)),En(k,"r","top","spacing",f)),En(k,"r","right","spacing",S)),En(k,"r","bottom","spacing",I)),En(k,"r","left","spacing",c)),xe(k,"r","overflow",D)),xe(k,"r","overflowx",p)),xe(k,"r","overflowy",y)),xe(k,"r","flex-basis",b)),xe(k,"r","flex-grow",B)),xe(k,"r","flex-shrink",h)),xe(k,"r","grid-column",G));return m.createElement(Ur,{className:P({className:n,"navds-r-p":t,"navds-r-pi":r,"navds-r-pb":a,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":o,"navds-r-minw":d,"navds-r-maxw":u,"navds-r-h":E,"navds-r-minh":_,"navds-r-maxh":T,"navds-r-position":g,"navds-r-inset":R,"navds-r-top":f,"navds-r-right":S,"navds-r-bottom":I,"navds-r-left":c,"navds-r-overflow":D,"navds-r-overflowx":p,"navds-r-overflowy":y,"navds-r-flex-basis":b,"navds-r-flex-grow":B,"navds-r-flex-shrink":h,"navds-r-grid-column":G}),style:L},e)};var Vf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const $u=v.forwardRef((e,n)=>{var{children:t,className:r,as:a="div",align:l,justify:i,wrap:s=!0,gap:o,style:d,direction:u="row",asChild:E}=e,_=Vf(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const T=qr(!1),g=T?.isDarkside?"ax":"a",{cn:R}=ee(),f=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),En(g,"stack","gap","spacing",o)),xe(g,"stack","direction",u)),xe(g,"stack","align",l)),xe(g,"stack","justify",i)),S=E?Ur:a;return m.createElement(wf,Object.assign({},_),m.createElement(S,Object.assign({},Ye(_,Ff),{ref:n,style:f,className:R("navds-stack",r,{"navds-vstack":u==="column","navds-hstack":u==="row","navds-stack-gap":o,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":u,"navds-stack-wrap":s})}),t))});var jf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const ce=v.forwardRef((e,n)=>{var{as:t="div"}=e,r=jf(e,["as"]);return m.createElement($u,Object.assign({as:t},r,{ref:n,direction:"row"}))});var qf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const be=v.forwardRef((e,n)=>{var{as:t="div"}=e,r=qf(e,["as"]);return m.createElement($u,Object.assign({as:t},r,{ref:n,direction:"column",wrap:!1}))}),Lr=()=>{const{cn:e}=ee();return m.createElement("span",{className:e("navds-stack__spacer")})};var Uf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const ui=v.forwardRef((e,n)=>{var{as:t="a",className:r,underline:a=!0,variant:l,inlineText:i=!1,"data-color":s}=e,o=Uf(e,["as","className","underline","variant","inlineText","data-color"]);const d=qr(!1),{cn:u}=ee();let E;return d?.isDarkside?E=l:E=l??"action",m.createElement(t,Object.assign({"data-color":s??xf(E),"data-variant":E},o,{ref:n,className:u("navds-link",r,{[`navds-link--${E}`]:E,"navds-link--remove-underline":!a,"navds-link--inline-text":i})}))});function xf(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var Hf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Jf=v.forwardRef((e,n)=>{var{className:t}=e,r=Hf(e,["className"]);const{cn:a}=ee();return m.createElement("tbody",Object.assign({},r,{ref:n,className:a("navds-table__body",t)}))});var Yf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Wu=v.forwardRef((e,n)=>{var{className:t,children:r,align:a,textSize:l}=e,i=Yf(e,["className","children","align","textSize"]);const{cn:s}=ee();return m.createElement("th",Object.assign({ref:n,className:s("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":l==="small"})},i),r)}),zu=v.createContext(null);var Cf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const $f=v.forwardRef((e,n)=>{var t,r,a,l,{className:i,children:s,sortable:o=!1,sortKey:d}=e,u=Cf(e,["className","children","sortable","sortKey"]);const E=v.useContext(zu),{cn:_}=ee();return o&&!d&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),m.createElement(Wu,Object.assign({scope:"col",ref:n,className:_(i),"aria-sort":o?((t=E?.sort)===null||t===void 0?void 0:t.orderBy)===d?(r=E?.sort)===null||r===void 0?void 0:r.direction:"none":void 0},u),o?m.createElement("button",{type:"button",className:_("navds-table__sort-button"),onClick:o&&d?()=>{var T;return(T=E?.onSortChange)===null||T===void 0?void 0:T.call(E,d)}:void 0},s,((a=E?.sort)===null||a===void 0?void 0:a.orderBy)===d?((l=E?.sort)===null||l===void 0?void 0:l.direction)==="descending"?m.createElement(GE,{"aria-hidden":!0}):m.createElement(FE,{"aria-hidden":!0}):m.createElement(oE,{"aria-hidden":!0})):s)});var Wf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Xu=v.forwardRef((e,n)=>{var{className:t,children:r="",align:a,textSize:l}=e,i=Wf(e,["className","children","align","textSize"]);const{cn:s}=ee();return m.createElement(ne,Object.assign({as:"td",ref:n,className:s("navds-table__data-cell",t,{[`navds-table__data-cell--align-${a}`]:a}),size:l},i),r)});var zf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Xf=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function Qf(e){const n=parseFloat(e);return!Number.isNaN(n)&&Number.isFinite(n)}function Rs(e){return typeof e=="string"&&e[e.length-1]==="%"&&Qf(e.substring(0,e.length-1))}function Nl(e,n){n===0&&e?.style&&(e.style.display="none")}function Zf(e,n){n===0&&e?.style&&(e.style.display="")}const eR=e=>{var{children:n,className:t,innerClassName:r,duration:a=250,easing:l="ease",height:i}=e,s=zf(e,["children","className","innerClassName","duration","easing","height"]);const{cn:o}=ee(),d=v.useRef(i),u=v.useRef(null),E=v.useRef(),_=v.useRef(),T=v.useRef(i),g=v.useRef("visible"),R=Xf?0:a;typeof T.current=="number"?(typeof i!="string"&&(T.current=i<0?0:i),g.current="hidden"):Rs(T.current)&&(T.current=i==="0%"?0:i,g.current="hidden");const[f,S]=v.useState(T.current),[c,I]=v.useState(g.current),[D,p]=v.useState(!1);v.useEffect(()=>{Nl(u.current,T.current)},[]),v.useEffect(()=>{if(i!==d.current&&u.current){Zf(u.current,d.current),u.current.style.overflow="hidden";const h=u.current.offsetHeight;u.current.style.overflow="";const G=R;let V,P,k="hidden",L;const K=d.current==="auto";typeof i=="number"?(V=i<0?0:i,P=V):Rs(i)?(V=i==="0%"?0:i,P=V):(V=h,P="auto",k=void 0),K&&(P=V,V=h),S(V),I("hidden"),p(!K),clearTimeout(_.current),clearTimeout(E.current),K?(L=!0,_.current=setTimeout(()=>{S(P),I(k),p(L)},50),E.current=setTimeout(()=>{p(!1),Nl(u.current,P)},G)):_.current=setTimeout(()=>{S(P),I(k),p(!1),i!=="auto"&&Nl(u.current,V)},G)}return d.current=i,()=>{clearTimeout(_.current),clearTimeout(E.current)}},[i]);const y={height:f,overflow:c};D&&(y.transition=`height ${R}ms ${l} 0ms`,y.WebkitTransition=y.transition);const B=typeof s["aria-hidden"]<"u"?s["aria-hidden"]:i===0;return m.createElement("div",Object.assign({},s,{className:o(t),style:y}),m.createElement("div",{"aria-hidden":B,className:o(r),ref:u},n))},nR=new Set(["BUTTON","A","INPUT","SELECT","TEXTAREA","DETAILS","SUMMARY","LABEL"]),rR=new Set(["button","link","checkbox","radio","switch","menuitem","option","tab","textbox","combobox","spinbutton","slider"]);function Qu(e){for(let n=e;n&&n.nodeName!=="TR"&&n.nodeName!=="TH";n=n.parentElement){const t=n.nodeName;if(nR.has(t))return!0;const r=n.getAttribute("role");if(r&&rR.has(r)||n.hasAttribute("tabindex")&&n.getAttribute("tabindex")!=="-1")return!0}return!1}var tR=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const Zu=v.forwardRef((e,n)=>{var{className:t,selected:r=!1,shadeOnHover:a=!0,onClick:l,onRowClick:i}=e,s=tR(e,["className","selected","shadeOnHover","onClick","onRowClick"]);const{cn:o}=ee(),d=u=>{i&&(Qu(u.target)||i(u))};return m.createElement("tr",Object.assign({},s,{ref:n,className:o("navds-table__row",t,{"navds-table__row--selected":r,"navds-table__row--shade-on-hover":a}),onClick:Zn(l,d),"data-interactive":!!i}))});var aR=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const lR=v.forwardRef((e,n)=>{var{className:t,children:r,content:a,togglePlacement:l="left",defaultOpen:i=!1,open:s,onOpenChange:o,expansionDisabled:d=!1,expandOnRowClick:u=!1,colSpan:E=999,contentGutter:_,onClick:T}=e,g=aR(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:R}=ee(),[f,S]=Br({defaultValue:i,value:s,onChange:o}),c=Yn("global"),I=pn(),D=y=>{S(b=>!b),y.stopPropagation()},p=y=>{u&&!d&&!Qu(y.target)&&D(y)};return m.createElement(m.Fragment,null,m.createElement(Zu,Object.assign({},g,{ref:n,className:R("navds-table__expandable-row",t,{"navds-table__expandable-row--open":f,"navds-table__expandable-row--expansion-disabled":d,"navds-table__expandable-row--clickable":u}),onClick:Zn(T,p)}),l==="right"&&r,m.createElement(Xu,{className:R("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":f}),onClick:d?()=>null:D},!d&&m.createElement("button",{className:R("navds-table__toggle-expand-button"),type:"button","aria-controls":I,"aria-expanded":f,onClick:D},m.createElement(It,{className:R("navds-table__expandable-icon"),title:c(f?"showLess":"showMore")}))),l==="left"&&r),m.createElement("tr",{"data-state":f?"open":"closed",className:R("navds-table__expanded-row"),"aria-hidden":!f,id:I},m.createElement("td",{colSpan:E,className:R("navds-table__expanded-row-cell")},m.createElement(eR,{className:R("navds-table__expanded-row-collapse"),innerClassName:R(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${_??l}`),height:f?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});var iR=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const sR=v.forwardRef((e,n)=>{var{className:t}=e,r=iR(e,["className"]);const{cn:a}=ee();return m.createElement("thead",Object.assign({},r,{ref:n,className:a("navds-table__header",t)}))});var oR=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const De=v.forwardRef((e,n)=>{var{className:t,zebraStripes:r=!1,size:a="medium",onSortChange:l,sort:i,stickyHeader:s=!1}=e,o=oR(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:d}=ee();return m.createElement(zu.Provider,{value:{onSortChange:l,sort:i}},m.createElement("table",Object.assign({},o,{ref:n,className:d("navds-table",`navds-table--${a}`,t,{"navds-table--zebra-stripes":r,"navds-table--sticky-header":s})})))});De.Header=sR;De.Body=Jf;De.Row=Zu;De.ColumnHeader=$f;De.HeaderCell=Wu;De.DataCell=Xu;De.ExpandableRow=lR;var uR=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const dR=v.forwardRef((e,n)=>{var{children:t,className:r,variant:a,size:l="medium",icon:i,"data-color":s}=e,o=uR(e,["children","className","variant","size","icon","data-color"]);const{cn:d}=ee(),u=a?.endsWith("-filled")&&"strong",E=a?.endsWith("-moderate")&&"moderate";return m.createElement(ne,Object.assign({"data-color":s??ER(a),"data-variant":u||E||"outline"},o,{ref:n,as:"span",size:l==="medium"?"medium":"small",className:d("navds-tag",r,`navds-tag--${a}`,`navds-tag--${l}`)}),i&&m.createElement("span",{className:d("navds-tag__icon--left")},i),t)});function ER(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var mR=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const ed=v.forwardRef((e,n)=>{var{children:t,className:r,arrow:a=!0,placement:l="top",open:i,defaultOpen:s=!1,onOpenChange:o,offset:d,content:u,delay:E=150,id:_,keys:T,maxChar:g=80,describesChild:R=!1}=e,f=mR(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:S}=ee(),[c,I]=Br({defaultValue:s,value:i,onChange:o}),D=v.useRef(null),p=ft(!1),y=p?p.ref.current:void 0,{x:b,y:B,strategy:h,context:G,placement:V,middlewareData:{arrow:{x:P,y:k}={},hide:{referenceHidden:L}={}},refs:K}=_u({placement:l,open:c,onOpenChange:z=>I(z),middleware:[Jo(d??(a?8:4)),Yo(),Co({padding:5,fallbackPlacements:["bottom","top"]}),$o({element:D,padding:5})],whileElementsMounted:p?(z,W,ae)=>cl(z,W,ae,{animationFrame:!0}):cl,strategy:p?"fixed":void 0}),{getReferenceProps:j,getFloatingProps:q}=rg([Yv(G,{handleClose:lg(),restMs:E}),ng(G),Zv(G)]),w=pn(_),F=xr(n,K.setFloating);if(!t||t?.type===m.Fragment||t===m.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;u?.length>g&&c&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${u.length}
Tooltip-content: ${u}`);const Y=R?c?{"aria-describedby":w}:{title:u}:{"aria-label":u};return m.createElement(m.Fragment,null,m.createElement(Ur,Object.assign({ref:K.setReference},j(),Y,{"aria-keyshortcuts":T?T.join("+"):void 0}),t),m.createElement(KN,{rootElement:y,asChild:!0},c&&m.createElement("div",Object.assign({},q(Object.assign(Object.assign({},f),{ref:F,style:{position:h,top:B??0,left:b??0,visibility:L?"hidden":"visible"},role:"tooltip",id:w,className:S("navds-tooltip","navds-detail navds-detail--small",r)})),{"data-side":V,"data-state":"open"}),u,T&&m.createElement("span",{className:S("navds-tooltip__keys"),"aria-hidden":!0},T.map(z=>m.createElement(Kr,{as:"kbd",key:z,className:S("navds-tooltip__key")},z))),a&&m.createElement("div",{ref:z=>{D.current=z},className:S("navds-tooltip__arrow"),style:{left:P!=null?`${P}px`:"",top:k!=null?`${k}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[V]]:"-3.5px"}}))))}),NR=(e,n)=>{const t=Wr(e,"fieldset");return Object.assign(Object.assign({},t),{inputProps:{"aria-labelledby":e["aria-labelledby"]||jr(n,{[t.inputDescriptionId]:e.description&&!pa(e.description)})}})};var _R=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const TR=v.forwardRef((e,n)=>{var t,r,a;const l=pn(),{inputProps:i,errorId:s,showErrorMsg:o,hasError:d,size:u,readOnly:E,inputDescriptionId:_}=NR(e,l),{cn:T}=ee(),g=v.useContext(Sa),{children:R,className:f,errorPropagation:S=!0,legend:c,description:I,hideLegend:D,nativeReadOnly:p=!0}=e,y=_R(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return m.createElement(Sa.Provider,{value:{error:S?(t=e.error)!==null&&t!==void 0?t:g?.error:void 0,errorId:jr({[s]:o,[(r=g?.errorId)!==null&&r!==void 0?r:""]:!!g?.error}),size:u,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:E}},m.createElement("fieldset",Object.assign({},Ye(y,["errorId","error","size","readOnly"]),i,{ref:n,className:T(f,"navds-fieldset",`navds-fieldset--${u}`,{"navds-fieldset--error":d,"navds-fieldset--readonly":E})}),m.createElement(Re,{id:l,size:u,as:"legend",className:T("navds-fieldset__legend",{"navds-sr-only":!!D})},E&&(p?m.createElement(Va,null):m.createElement(Tu,null)),c),!!I&&m.createElement(ne,{className:T("navds-fieldset__description",{"navds-sr-only":!!D}),id:_,size:u??"medium",as:"div"},e.description),R,m.createElement("div",{id:s,"aria-relevant":"additions removals","aria-live":"polite",className:T("navds-fieldset__error")},o&&m.createElement(Jr,{size:u,showIcon:!0},e.error))))});var vR=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const nd=m.createContext(null),gR=v.forwardRef((e,n)=>{var t,r,{children:a,className:l,name:i,defaultValue:s,value:o,onChange:d=()=>{},required:u,readOnly:E}=e,_=vR(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:T}=ee(),g=v.useContext(Sa),R=pn();return m.createElement(TR,Object.assign({},_,{readOnly:E,ref:n,className:T(l,"navds-radio-group",`navds-radio-group--${(r=(t=_.size)!==null&&t!==void 0?t:g?.size)!==null&&r!==void 0?r:"medium"}`),nativeReadOnly:!1}),m.createElement(nd.Provider,{value:{name:i??`radioGroupName-${R}`,defaultValue:s,value:o,onChange:d,required:u}},m.createElement("div",{className:T("navds-radio-buttons")},a)))});var IR=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const fR=e=>{const n=v.useContext(nd),t=Wr(Ye(e,["description"]),"radio"),{inputProps:r,readOnly:a}=t,l=IR(t,["inputProps","readOnly"]);return n||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:a,inputProps:Object.assign(Object.assign({},r),{name:n?.name,defaultChecked:n?.defaultValue===void 0?void 0:n?.defaultValue===e.value,checked:n?.value===void 0?void 0:n?.value===e.value,onChange:i=>{var s,o;a||((s=e.onChange)===null||s===void 0||s.call(e,i),(o=n?.onChange)===null||o===void 0||o.call(n,e.value))},onClick:i=>{var s;if(a){i.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,i)},required:n?.required,type:"radio"})})},hr=v.forwardRef((e,n)=>{const{cn:t}=ee(),{inputProps:r,size:a,hasError:l,readOnly:i}=fR(e),s=pn(),o=qr(!1);return o?.isDarkside?m.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":l,"navds-radio--disabled":r.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},m.createElement("input",Object.assign({},Ye(e,["children","size","description","readOnly"]),Ye(r,["aria-invalid","aria-describedby"]),{"aria-describedby":jr(r["aria-describedby"],{[s]:e.description})||void 0,className:t("navds-radio__input"),ref:n})),m.createElement(ne,{as:"label",htmlFor:r.id,className:t("navds-radio__label"),size:a},e.children),e.description&&m.createElement(ne,{id:s,size:a,className:t("navds-form-field__subdescription navds-radio__description")},e.description)):m.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":l,"navds-radio--disabled":r.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},m.createElement("input",Object.assign({},Ye(e,["children","size","description","readOnly"]),Ye(r,["aria-invalid"]),{className:t("navds-radio__input"),ref:n})),m.createElement("label",{htmlFor:r.id,className:t("navds-radio__label")},m.createElement("span",{className:t("navds-radio__content")},m.createElement(ne,{as:"span",size:a},e.children),e.description&&m.createElement(ne,{as:"span",size:a,className:t("navds-form-field__subdescription navds-radio__description")},e.description))))});var RR=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const cs=(e,n,t)=>{const{outerHeightStyle:r,overflow:a}=n;return t.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==a)?(t.current+=1,n):e},Ss=e=>(e?.ownerDocument||document).defaultView||window;function Vt(e){return parseInt(e,10)||0}const cR=v.forwardRef((e,n)=>{var t,r,{className:a,onChange:l,maxRows:i,minRows:s=1,autoScrollbar:o,style:d,value:u}=e,E=RR(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:_}=v.useRef(u!=null),T=v.useRef(null),g=xr(T,n),R=v.useRef(null),f=v.useRef(0),[S,c]=v.useState({outerHeightStyle:0}),I=m.useCallback(()=>{const b=T.current,h=Ss(b).getComputedStyle(b);if(h.width==="0px")return{outerHeightStyle:0};const G=R.current;G.style.width=h.width,G.value=b.value||E.placeholder||"x",G.value.slice(-1)===`
`&&(G.value+=" ");const V=h.boxSizing,P=Vt(h.paddingBottom)+Vt(h.paddingTop),k=Vt(h.borderBottomWidth)+Vt(h.borderTopWidth),L=G.scrollHeight-P;G.value="x";const K=G.scrollHeight-P;let j=L;s&&(j=Math.max(Number(s)*K,j)),i&&(j=Math.min(Number(i)*K,j)),j=Math.max(j,K);const q=j+(V==="border-box"?P+k:0),w=Math.abs(j-L)<=1;return{outerHeightStyle:q,overflow:w}},[i,s,E.placeholder]),D=()=>{const b=I();ps(b)||c(B=>cs(B,b,f))};Gr(()=>{const b=()=>{const P=I();ps(P)||Na.flushSync(()=>{c(k=>cs(k,P,f))})},B=Io(()=>{var P,k,L;if(f.current=0,!((P=T.current)===null||P===void 0)&&P.style.height||!((k=T.current)===null||k===void 0)&&k.style.width){((L=T.current)===null||L===void 0?void 0:L.style.overflow)==="hidden"&&c(K=>Object.assign(Object.assign({},K),{overflow:!1}));return}b()},166,!0),h=T.current,G=Ss(h);G.addEventListener("resize",B);let V;return typeof ResizeObserver<"u"&&(V=new ResizeObserver(B),V.observe(h)),()=>{B.clear(),G.removeEventListener("resize",B),V&&V.disconnect()}},[I]),Gr(()=>{D()}),v.useEffect(()=>{f.current=0},[u]);const p=b=>{f.current=0,_||D(),l&&l(b)},y=Object.assign({"--__ac-textarea-height":S.outerHeightStyle+"px","--__axc-textarea-height":S.outerHeightStyle+"px",overflow:S.overflow&&!o&&!(!((t=T.current)===null||t===void 0)&&t.style.height)&&!(!((r=T.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},d);return m.createElement(m.Fragment,null,m.createElement("textarea",Object.assign({value:u,onChange:p,ref:g,rows:s,style:y},E,{className:a})),m.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:R,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d)}))});function ps(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const SR=({maxLengthId:e,maxLength:n,currentLength:t,size:r,i18n:a})=>{const{cn:l}=ee(),i=Yn("Textarea",{charsLeft:a?.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a?.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),s=n-t,[o,d]=v.useState(s);return v.useEffect(()=>{const u=Io(()=>{d(s)},2e3);return u(),()=>{u.clear()}},[s]),m.createElement(m.Fragment,null,m.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:n})),s<20&&m.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},Ds(o,i)),m.createElement(ne,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:r},Ds(s,i)))},Ds=(e,n)=>e<0?n("charsTooMany",{chars:Math.abs(e)}):n("charsLeft",{chars:e});var pR=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const DR=v.forwardRef((e,n)=>{var t,r,a;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:o,size:d,inputDescriptionId:u}=Wr(e,"textarea"),{label:E,className:_,description:T,maxLength:g,hideLabel:R=!1,resize:f,UNSAFE_autoScrollbar:S,i18n:c,readOnly:I}=e,D=pR(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:p}=ee(),y=pn(),b=g!==void 0&&g>0,[B,h]=v.useState((t=e?.defaultValue)!==null&&t!==void 0?t:""),G=()=>{let P=D?.minRows?D?.minRows:3;return d==="small"&&(P=D?.minRows?D?.minRows:2),P},V=jr(l["aria-describedby"],{[y??""]:b});return m.createElement("div",{className:p(_,"navds-form-field",`navds-form-field--${d}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":I,"navds-textarea--readonly":I,"navds-textarea--error":o,"navds-textarea--autoscrollbar":S,[`navds-textarea--resize-${f===!0?"both":f}`]:f})},m.createElement(Re,{htmlFor:l.id,size:d,className:p("navds-form-field__label",{"navds-sr-only":R})},I&&m.createElement(Va,null),E),!!T&&m.createElement(ne,{className:p("navds-form-field__description",{"navds-sr-only":R}),id:u,size:d,as:"div"},T),m.createElement(cR,Object.assign({},Ye(D,["error","errorId","size"]),l,{onChange:Zn(e.onChange,e.value===void 0?P=>h(P.target.value):void 0),minRows:G(),autoScrollbar:S,ref:n,readOnly:I,className:p("navds-textarea__input","navds-body-short",`navds-body-short--${d??"medium"}`)},V?{"aria-describedby":V}:{})),b&&!I&&!l.disabled&&m.createElement(SR,{maxLengthId:y,maxLength:g,currentLength:(a=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&a!==void 0?a:B.length,size:d,i18n:c}),m.createElement("div",{className:p("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},s&&m.createElement(Jr,{size:d,showIcon:!0},e.error)))});var AR=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};const kR=v.forwardRef((e,n)=>{const{cn:t}=ee(),{inputProps:r,errorId:a,showErrorMsg:l,hasError:i,size:s,inputDescriptionId:o}=Wr(e,"textField"),{label:d,className:u,description:E,htmlSize:_,hideLabel:T=!1,type:g="text",readOnly:R}=e,f=AR(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return m.createElement("div",{className:t(u,"navds-form-field",`navds-form-field--${s}`,{"navds-text-field--error":i,"navds-text-field--disabled":!!r.disabled,"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":R,"navds-text-field--readonly":R})},m.createElement(Re,{htmlFor:r.id,size:s,className:t("navds-form-field__label",{"navds-sr-only":T})},R&&m.createElement(Va,null),d),!!E&&m.createElement(ne,{className:t("navds-form-field__description",{"navds-sr-only":T}),id:o,size:s,as:"div"},E),m.createElement("input",Object.assign({},Ye(f,["error","errorId","size"]),r,{ref:n,type:g,readOnly:R,className:t("navds-text-field__input","navds-body-short",`navds-body-short--${s??"medium"}`),size:_})),m.createElement("div",{className:t("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},l&&m.createElement(Jr,{size:s,showIcon:!0},e.error)))});var Ve=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Ve||{}),Ot=e=>e.type==="checkbox",ur=e=>e instanceof Date,We=e=>e==null;const rd=e=>typeof e=="object";var Be=e=>!We(e)&&!Array.isArray(e)&&rd(e)&&!ur(e),td=e=>Be(e)&&e.target?Ot(e.target)?e.target.checked:e.target.value:e,yR=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ad=(e,n)=>e.has(yR(n)),OR=e=>{const n=e.constructor&&e.constructor.prototype;return Be(n)&&n.hasOwnProperty("isPrototypeOf")},di=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function we(e){let n;const t=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)n=new Date(e);else if(!(di&&(e instanceof Blob||r))&&(t||Be(e)))if(n=t?[]:Object.create(Object.getPrototypeOf(e)),!t&&!OR(e))n=e;else for(const a in e)e.hasOwnProperty(a)&&(n[a]=we(e[a]));else return e;return n}var Ua=e=>/^\w*$/.test(e),he=e=>e===void 0,Ei=e=>Array.isArray(e)?e.filter(Boolean):[],mi=e=>Ei(e.replace(/["|']|\]/g,"").split(/\.|\[/)),$=(e,n,t)=>{if(!n||!Be(e))return t;const r=(Ua(n)?[n]:mi(n)).reduce((a,l)=>We(a)?a:a[l],e);return he(r)||r===e?he(e[n])?t:e[n]:r},ln=e=>typeof e=="boolean",fe=(e,n,t)=>{let r=-1;const a=Ua(n)?[n]:mi(n),l=a.length,i=l-1;for(;++r<l;){const s=a[r];let o=t;if(r!==i){const d=e[s];o=Be(d)||Array.isArray(d)?d:isNaN(+a[r+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=o,e=e[s]}};const Aa={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},In={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Kn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ni=m.createContext(null);Ni.displayName="HookFormContext";const tr=()=>m.useContext(Ni),bR=e=>{const{children:n,...t}=e;return m.createElement(Ni.Provider,{value:t},n)};var ld=(e,n,t,r=!0)=>{const a={defaultValues:n._defaultValues};for(const l in e)Object.defineProperty(a,l,{get:()=>{const i=l;return n._proxyFormState[i]!==In.all&&(n._proxyFormState[i]=!r||In.all),t&&(t[i]=!0),e[i]}});return a};const _i=typeof window<"u"?m.useLayoutEffect:m.useEffect;function LR(e){const n=tr(),{control:t=n.control,disabled:r,name:a,exact:l}=e||{},[i,s]=m.useState(t._formState),o=m.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return _i(()=>t._subscribe({name:a,formState:o.current,exact:l,callback:d=>{!r&&s({...t._formState,...d})}}),[a,r,l]),m.useEffect(()=>{o.current.isValid&&t._setValid(!0)},[t]),m.useMemo(()=>ld(i,t,o.current,!1),[i,t])}var sn=e=>typeof e=="string",id=(e,n,t,r,a)=>sn(e)?(r&&n.watch.add(e),$(t,e,a)):Array.isArray(e)?e.map(l=>(r&&n.watch.add(l),$(t,l))):(r&&(n.watchAll=!0),t),yl=e=>We(e)||!rd(e);function Fn(e,n,t=new WeakSet){if(yl(e)||yl(n))return e===n;if(ur(e)&&ur(n))return e.getTime()===n.getTime();const r=Object.keys(e),a=Object.keys(n);if(r.length!==a.length)return!1;if(t.has(e)||t.has(n))return!0;t.add(e),t.add(n);for(const l of r){const i=e[l];if(!a.includes(l))return!1;if(l!=="ref"){const s=n[l];if(ur(i)&&ur(s)||Be(i)&&Be(s)||Array.isArray(i)&&Array.isArray(s)?!Fn(i,s,t):i!==s)return!1}}return!0}function hR(e){const n=tr(),{control:t=n.control,name:r,defaultValue:a,disabled:l,exact:i,compute:s}=e||{},o=m.useRef(a),d=m.useRef(s),u=m.useRef(void 0);d.current=s;const E=m.useMemo(()=>t._getWatch(r,o.current),[t,r]),[_,T]=m.useState(d.current?d.current(E):E);return _i(()=>t._subscribe({name:r,formState:{values:!0},exact:i,callback:g=>{if(!l){const R=id(r,t._names,g.values||t._formValues,!1,o.current);if(d.current){const f=d.current(R);Fn(f,u.current)||(T(f),u.current=f)}else T(R)}}}),[t,l,r,i]),m.useEffect(()=>t._removeUnmounted()),_}function bt(e){const n=tr(),{name:t,disabled:r,control:a=n.control,shouldUnregister:l,defaultValue:i}=e,s=ad(a._names.array,t),o=m.useMemo(()=>$(a._formValues,t,$(a._defaultValues,t,i)),[a,t,i]),d=hR({control:a,name:t,defaultValue:o,exact:!0}),u=LR({control:a,name:t,exact:!0}),E=m.useRef(e),_=m.useRef(void 0),T=m.useRef(a.register(t,{...e.rules,value:d,...ln(e.disabled)?{disabled:e.disabled}:{}}));E.current=e;const g=m.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!$(u.errors,t)},isDirty:{enumerable:!0,get:()=>!!$(u.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!$(u.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!$(u.validatingFields,t)},error:{enumerable:!0,get:()=>$(u.errors,t)}}),[u,t]),R=m.useCallback(I=>T.current.onChange({target:{value:td(I),name:t},type:Aa.CHANGE}),[t]),f=m.useCallback(()=>T.current.onBlur({target:{value:$(a._formValues,t),name:t},type:Aa.BLUR}),[t,a._formValues]),S=m.useCallback(I=>{const D=$(a._fields,t);D&&I&&(D._f.ref={focus:()=>I.focus&&I.focus(),select:()=>I.select&&I.select(),setCustomValidity:p=>I.setCustomValidity(p),reportValidity:()=>I.reportValidity()})},[a._fields,t]),c=m.useMemo(()=>({name:t,value:d,...ln(r)||u.disabled?{disabled:u.disabled||r}:{},onChange:R,onBlur:f,ref:S}),[t,r,u.disabled,R,f,S,d]);return m.useEffect(()=>{const I=a._options.shouldUnregister||l,D=_.current;D&&D!==t&&!s&&a.unregister(D),a.register(t,{...E.current.rules,...ln(E.current.disabled)?{disabled:E.current.disabled}:{}});const p=(y,b)=>{const B=$(a._fields,y);B&&B._f&&(B._f.mount=b)};if(p(t,!0),I){const y=we($(a._options.defaultValues,t));fe(a._defaultValues,t,y),he($(a._formValues,t))&&fe(a._formValues,t,y)}return!s&&a.register(t),_.current=t,()=>{(s?I&&!a._state.action:I)?a.unregister(t):p(t,!1)}},[t,a,s,l]),m.useEffect(()=>{a._setDisabledField({disabled:r,name:t})},[r,t,a]),m.useMemo(()=>({field:c,formState:u,fieldState:g}),[c,u,g])}var MR=(e,n,t,r,a)=>n?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[r]:a||!0}}:{},st=e=>Array.isArray(e)?e:[e],As=()=>{let e=[];return{get observers(){return e},next:a=>{for(const l of e)l.next&&l.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(l=>l!==a)}}),unsubscribe:()=>{e=[]}}};function sd(e,n){const t={};for(const r in e)if(e.hasOwnProperty(r)){const a=e[r],l=n[r];if(a&&Be(a)&&l){const i=sd(a,l);Be(i)&&(t[r]=i)}else e[r]&&(t[r]=l)}return t}var nn=e=>Be(e)&&!Object.keys(e).length,Ti=e=>e.type==="file",fn=e=>typeof e=="function",ka=e=>{if(!di)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},od=e=>e.type==="select-multiple",vi=e=>e.type==="radio",PR=e=>vi(e)||Ot(e),_l=e=>ka(e)&&e.isConnected;function KR(e,n){const t=n.slice(0,-1).length;let r=0;for(;r<t;)e=he(e)?r++:e[n[r++]];return e}function GR(e){for(const n in e)if(e.hasOwnProperty(n)&&!he(e[n]))return!1;return!0}function Ge(e,n){const t=Array.isArray(n)?n:Ua(n)?[n]:mi(n),r=t.length===1?e:KR(e,t),a=t.length-1,l=t[a];return r&&delete r[l],a!==0&&(Be(r)&&nn(r)||Array.isArray(r)&&GR(r))&&Ge(e,t.slice(0,-1)),e}var BR=e=>{for(const n in e)if(fn(e[n]))return!0;return!1};function ud(e){return Array.isArray(e)||Be(e)&&!BR(e)}function Ol(e,n={}){for(const t in e)ud(e[t])?(n[t]=Array.isArray(e[t])?[]:{},Ol(e[t],n[t])):We(e[t])||(n[t]=!0);return n}function kr(e,n,t){t||(t=Ol(n));for(const r in e)ud(e[r])?he(n)||yl(t[r])?t[r]=Ol(e[r],Array.isArray(e[r])?[]:{}):kr(e[r],We(n)?{}:n[r],t[r]):t[r]=!Fn(e[r],n[r]);return t}const ks={value:!1,isValid:!1},ys={value:!0,isValid:!0};var dd=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!he(e[0].attributes.value)?he(e[0].value)||e[0].value===""?ys:{value:e[0].value,isValid:!0}:ys:ks}return ks},Ed=(e,{valueAsNumber:n,valueAsDate:t,setValueAs:r})=>he(e)?e:n?e===""?NaN:e&&+e:t&&sn(e)?new Date(e):r?r(e):e;const Os={isValid:!1,value:null};var md=e=>Array.isArray(e)?e.reduce((n,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:n,Os):Os;function bs(e){const n=e.ref;return Ti(n)?n.files:vi(n)?md(e.refs).value:od(n)?[...n.selectedOptions].map(({value:t})=>t):Ot(n)?dd(e.refs).value:Ed(he(n.value)?e.ref.value:n.value,e)}var FR=(e,n,t,r)=>{const a={};for(const l of e){const i=$(n,l);i&&fe(a,l,i._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:r}},ya=e=>e instanceof RegExp,et=e=>he(e)?e:ya(e)?e.source:Be(e)?ya(e.value)?e.value.source:e.value:e,Ls=e=>({isOnSubmit:!e||e===In.onSubmit,isOnBlur:e===In.onBlur,isOnChange:e===In.onChange,isOnAll:e===In.all,isOnTouch:e===In.onTouched});const hs="AsyncFunction";var wR=e=>!!e&&!!e.validate&&!!(fn(e.validate)&&e.validate.constructor.name===hs||Be(e.validate)&&Object.values(e.validate).find(n=>n.constructor.name===hs)),VR=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Ms=(e,n,t)=>!t&&(n.watchAll||n.watch.has(e)||[...n.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const ot=(e,n,t,r)=>{for(const a of t||Object.keys(e)){const l=$(e,a);if(l){const{_f:i,...s}=l;if(i){if(i.refs&&i.refs[0]&&n(i.refs[0],a)&&!r)return!0;if(i.ref&&n(i.ref,i.name)&&!r)return!0;if(ot(s,n))break}else if(Be(s)&&ot(s,n))break}}};function Ps(e,n,t){const r=$(e,t);if(r||Ua(t))return{error:r,name:t};const a=t.split(".");for(;a.length;){const l=a.join("."),i=$(n,l),s=$(e,l);if(i&&!Array.isArray(i)&&t!==l)return{name:t};if(s&&s.type)return{name:l,error:s};if(s&&s.root&&s.root.type)return{name:`${l}.root`,error:s.root};a.pop()}return{name:t}}var jR=(e,n,t,r)=>{t(e);const{name:a,...l}=e;return nn(l)||Object.keys(l).length>=Object.keys(n).length||Object.keys(l).find(i=>n[i]===(!r||In.all))},qR=(e,n,t)=>!e||!n||e===n||st(e).some(r=>r&&(t?r===n:r.startsWith(n)||n.startsWith(r))),UR=(e,n,t,r,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(n||e):(t?r.isOnBlur:a.isOnBlur)?!e:(t?r.isOnChange:a.isOnChange)?e:!0,xR=(e,n)=>!Ei($(e,n)).length&&Ge(e,n),HR=(e,n,t)=>{const r=st($(e,t));return fe(r,"root",n[t]),fe(e,t,r),e};function Ks(e,n,t="validate"){if(sn(e)||Array.isArray(e)&&e.every(sn)||ln(e)&&!e)return{type:t,message:sn(e)?e:"",ref:n}}var Dr=e=>Be(e)&&!ya(e)?e:{value:e,message:""},Gs=async(e,n,t,r,a,l)=>{const{ref:i,refs:s,required:o,maxLength:d,minLength:u,min:E,max:_,pattern:T,validate:g,name:R,valueAsNumber:f,mount:S}=e._f,c=$(t,R);if(!S||n.has(R))return{};const I=s?s[0]:i,D=P=>{a&&I.reportValidity&&(I.setCustomValidity(ln(P)?"":P||""),I.reportValidity())},p={},y=vi(i),b=Ot(i),B=y||b,h=(f||Ti(i))&&he(i.value)&&he(c)||ka(i)&&i.value===""||c===""||Array.isArray(c)&&!c.length,G=MR.bind(null,R,r,p),V=(P,k,L,K=Kn.maxLength,j=Kn.minLength)=>{const q=P?k:L;p[R]={type:P?K:j,message:q,ref:i,...G(P?K:j,q)}};if(l?!Array.isArray(c)||!c.length:o&&(!B&&(h||We(c))||ln(c)&&!c||b&&!dd(s).isValid||y&&!md(s).isValid)){const{value:P,message:k}=sn(o)?{value:!!o,message:o}:Dr(o);if(P&&(p[R]={type:Kn.required,message:k,ref:I,...G(Kn.required,k)},!r))return D(k),p}if(!h&&(!We(E)||!We(_))){let P,k;const L=Dr(_),K=Dr(E);if(!We(c)&&!isNaN(c)){const j=i.valueAsNumber||c&&+c;We(L.value)||(P=j>L.value),We(K.value)||(k=j<K.value)}else{const j=i.valueAsDate||new Date(c),q=Y=>new Date(new Date().toDateString()+" "+Y),w=i.type=="time",F=i.type=="week";sn(L.value)&&c&&(P=w?q(c)>q(L.value):F?c>L.value:j>new Date(L.value)),sn(K.value)&&c&&(k=w?q(c)<q(K.value):F?c<K.value:j<new Date(K.value))}if((P||k)&&(V(!!P,L.message,K.message,Kn.max,Kn.min),!r))return D(p[R].message),p}if((d||u)&&!h&&(sn(c)||l&&Array.isArray(c))){const P=Dr(d),k=Dr(u),L=!We(P.value)&&c.length>+P.value,K=!We(k.value)&&c.length<+k.value;if((L||K)&&(V(L,P.message,k.message),!r))return D(p[R].message),p}if(T&&!h&&sn(c)){const{value:P,message:k}=Dr(T);if(ya(P)&&!c.match(P)&&(p[R]={type:Kn.pattern,message:k,ref:i,...G(Kn.pattern,k)},!r))return D(k),p}if(g){if(fn(g)){const P=await g(c,t),k=Ks(P,I);if(k&&(p[R]={...k,...G(Kn.validate,k.message)},!r))return D(k.message),p}else if(Be(g)){let P={};for(const k in g){if(!nn(P)&&!r)break;const L=Ks(await g[k](c,t),I,k);L&&(P={...L,...G(k,L.message)},D(L.message),r&&(p[R]=P))}if(!nn(P)&&(p[R]={ref:I,...P},!r))return p}}return D(!0),p};const JR={mode:In.onSubmit,reValidateMode:In.onChange,shouldFocusError:!0};function YR(e={}){let n={...JR,...e},t={submitCount:0,isDirty:!1,isReady:!1,isLoading:fn(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},r={},a=Be(n.defaultValues)||Be(n.values)?we(n.defaultValues||n.values)||{}:{},l=n.shouldUnregister?{}:we(a),i={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},o,d=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let E={...u};const _={array:As(),state:As()},T=n.criteriaMode===In.all,g=A=>O=>{clearTimeout(d),d=setTimeout(A,O)},R=async A=>{if(!n.disabled&&(u.isValid||E.isValid||A)){const O=n.resolver?nn((await b()).errors):await h(r,!0);O!==t.isValid&&_.state.next({isValid:O})}},f=(A,O)=>{!n.disabled&&(u.isValidating||u.validatingFields||E.isValidating||E.validatingFields)&&((A||Array.from(s.mount)).forEach(M=>{M&&(O?fe(t.validatingFields,M,O):Ge(t.validatingFields,M))}),_.state.next({validatingFields:t.validatingFields,isValidating:!nn(t.validatingFields)}))},S=(A,O=[],M,C,x=!0,U=!0)=>{if(C&&M&&!n.disabled){if(i.action=!0,U&&Array.isArray($(r,A))){const X=M($(r,A),C.argA,C.argB);x&&fe(r,A,X)}if(U&&Array.isArray($(t.errors,A))){const X=M($(t.errors,A),C.argA,C.argB);x&&fe(t.errors,A,X),xR(t.errors,A)}if((u.touchedFields||E.touchedFields)&&U&&Array.isArray($(t.touchedFields,A))){const X=M($(t.touchedFields,A),C.argA,C.argB);x&&fe(t.touchedFields,A,X)}(u.dirtyFields||E.dirtyFields)&&(t.dirtyFields=kr(a,l)),_.state.next({name:A,isDirty:V(A,O),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else fe(l,A,O)},c=(A,O)=>{fe(t.errors,A,O),_.state.next({errors:t.errors})},I=A=>{t.errors=A,_.state.next({errors:t.errors,isValid:!1})},D=(A,O,M,C)=>{const x=$(r,A);if(x){const U=$(l,A,he(M)?$(a,A):M);he(U)||C&&C.defaultChecked||O?fe(l,A,O?U:bs(x._f)):L(A,U),i.mount&&R()}},p=(A,O,M,C,x)=>{let U=!1,X=!1;const oe={name:A};if(!n.disabled){if(!M||C){(u.isDirty||E.isDirty)&&(X=t.isDirty,t.isDirty=oe.isDirty=V(),U=X!==oe.isDirty);const Te=Fn($(a,A),O);X=!!$(t.dirtyFields,A),Te?Ge(t.dirtyFields,A):fe(t.dirtyFields,A,!0),oe.dirtyFields=t.dirtyFields,U=U||(u.dirtyFields||E.dirtyFields)&&X!==!Te}if(M){const Te=$(t.touchedFields,A);Te||(fe(t.touchedFields,A,M),oe.touchedFields=t.touchedFields,U=U||(u.touchedFields||E.touchedFields)&&Te!==M)}U&&x&&_.state.next(oe)}return U?oe:{}},y=(A,O,M,C)=>{const x=$(t.errors,A),U=(u.isValid||E.isValid)&&ln(O)&&t.isValid!==O;if(n.delayError&&M?(o=g(()=>c(A,M)),o(n.delayError)):(clearTimeout(d),o=null,M?fe(t.errors,A,M):Ge(t.errors,A)),(M?!Fn(x,M):x)||!nn(C)||U){const X={...C,...U&&ln(O)?{isValid:O}:{},errors:t.errors,name:A};t={...t,...X},_.state.next(X)}},b=async A=>{f(A,!0);const O=await n.resolver(l,n.context,FR(A||s.mount,r,n.criteriaMode,n.shouldUseNativeValidation));return f(A),O},B=async A=>{const{errors:O}=await b(A);if(A)for(const M of A){const C=$(O,M);C?fe(t.errors,M,C):Ge(t.errors,M)}else t.errors=O;return O},h=async(A,O,M={valid:!0})=>{for(const C in A){const x=A[C];if(x){const{_f:U,...X}=x;if(U){const oe=s.array.has(U.name),Te=x._f&&wR(x._f);Te&&u.validatingFields&&f([U.name],!0);const en=await Gs(x,s.disabled,l,T,n.shouldUseNativeValidation&&!O,oe);if(Te&&u.validatingFields&&f([U.name]),en[U.name]&&(M.valid=!1,O))break;!O&&($(en,U.name)?oe?HR(t.errors,en,U.name):fe(t.errors,U.name,en[U.name]):Ge(t.errors,U.name))}!nn(X)&&await h(X,O,M)}}return M.valid},G=()=>{for(const A of s.unMount){const O=$(r,A);O&&(O._f.refs?O._f.refs.every(M=>!_l(M)):!_l(O._f.ref))&&re(A)}s.unMount=new Set},V=(A,O)=>!n.disabled&&(A&&O&&fe(l,A,O),!Fn(Y(),a)),P=(A,O,M)=>id(A,s,{...i.mount?l:he(O)?a:sn(A)?{[A]:O}:O},M,O),k=A=>Ei($(i.mount?l:a,A,n.shouldUnregister?$(a,A,[]):[])),L=(A,O,M={})=>{const C=$(r,A);let x=O;if(C){const U=C._f;U&&(!U.disabled&&fe(l,A,Ed(O,U)),x=ka(U.ref)&&We(O)?"":O,od(U.ref)?[...U.ref.options].forEach(X=>X.selected=x.includes(X.value)):U.refs?Ot(U.ref)?U.refs.forEach(X=>{(!X.defaultChecked||!X.disabled)&&(Array.isArray(x)?X.checked=!!x.find(oe=>oe===X.value):X.checked=x===X.value||!!x)}):U.refs.forEach(X=>X.checked=X.value===x):Ti(U.ref)?U.ref.value="":(U.ref.value=x,U.ref.type||_.state.next({name:A,values:we(l)})))}(M.shouldDirty||M.shouldTouch)&&p(A,x,M.shouldTouch,M.shouldDirty,!0),M.shouldValidate&&F(A)},K=(A,O,M)=>{for(const C in O){if(!O.hasOwnProperty(C))return;const x=O[C],U=A+"."+C,X=$(r,U);(s.array.has(A)||Be(x)||X&&!X._f)&&!ur(x)?K(U,x,M):L(U,x,M)}},j=(A,O,M={})=>{const C=$(r,A),x=s.array.has(A),U=we(O);fe(l,A,U),x?(_.array.next({name:A,values:we(l)}),(u.isDirty||u.dirtyFields||E.isDirty||E.dirtyFields)&&M.shouldDirty&&_.state.next({name:A,dirtyFields:kr(a,l),isDirty:V(A,U)})):C&&!C._f&&!We(U)?K(A,U,M):L(A,U,M),Ms(A,s)&&_.state.next({...t,name:A}),_.state.next({name:i.mount?A:void 0,values:we(l)})},q=async A=>{i.mount=!0;const O=A.target;let M=O.name,C=!0;const x=$(r,M),U=Te=>{C=Number.isNaN(Te)||ur(Te)&&isNaN(Te.getTime())||Fn(Te,$(l,M,Te))},X=Ls(n.mode),oe=Ls(n.reValidateMode);if(x){let Te,en;const Rr=O.type?bs(x._f):td(A),Dn=A.type===Aa.BLUR||A.type===Aa.FOCUS_OUT,Ya=!VR(x._f)&&!n.resolver&&!$(t.errors,M)&&!x._f.deps||UR(Dn,$(t.touchedFields,M),t.isSubmitted,oe,X),zr=Ms(M,s,Dn);fe(l,M,Rr),Dn?(!O||!O.readOnly)&&(x._f.onBlur&&x._f.onBlur(A),o&&o(0)):x._f.onChange&&x._f.onChange(A);const Xr=p(M,Rr,Dn),Ca=!nn(Xr)||zr;if(!Dn&&_.state.next({name:M,type:A.type,values:we(l)}),Ya)return(u.isValid||E.isValid)&&(n.mode==="onBlur"?Dn&&R():Dn||R()),Ca&&_.state.next({name:M,...zr?{}:Xr});if(!Dn&&zr&&_.state.next({...t}),n.resolver){const{errors:Qr}=await b([M]);if(U(Rr),C){const $a=Ps(t.errors,r,M),le=Ps(Qr,r,$a.name||M);Te=le.error,M=le.name,en=nn(Qr)}}else f([M],!0),Te=(await Gs(x,s.disabled,l,T,n.shouldUseNativeValidation))[M],f([M]),U(Rr),C&&(Te?en=!1:(u.isValid||E.isValid)&&(en=await h(r,!0)));C&&(x._f.deps&&(!Array.isArray(x._f.deps)||x._f.deps.length>0)&&F(x._f.deps),y(M,en,Te,Xr))}},w=(A,O)=>{if($(t.errors,O)&&A.focus)return A.focus(),1},F=async(A,O={})=>{let M,C;const x=st(A);if(n.resolver){const U=await B(he(A)?A:x);M=nn(U),C=A?!x.some(X=>$(U,X)):M}else A?(C=(await Promise.all(x.map(async U=>{const X=$(r,U);return await h(X&&X._f?{[U]:X}:X)}))).every(Boolean),!(!C&&!t.isValid)&&R()):C=M=await h(r);return _.state.next({...!sn(A)||(u.isValid||E.isValid)&&M!==t.isValid?{}:{name:A},...n.resolver||!A?{isValid:M}:{},errors:t.errors}),O.shouldFocus&&!C&&ot(r,w,A?x:s.mount),C},Y=(A,O)=>{let M={...i.mount?l:a};return O&&(M=sd(O.dirtyFields?t.dirtyFields:t.touchedFields,M)),he(A)?M:sn(A)?$(M,A):A.map(C=>$(M,C))},z=(A,O)=>({invalid:!!$((O||t).errors,A),isDirty:!!$((O||t).dirtyFields,A),error:$((O||t).errors,A),isValidating:!!$(t.validatingFields,A),isTouched:!!$((O||t).touchedFields,A)}),W=A=>{A&&st(A).forEach(O=>Ge(t.errors,O)),_.state.next({errors:A?t.errors:{}})},ae=(A,O,M)=>{const C=($(r,A,{_f:{}})._f||{}).ref,x=$(t.errors,A)||{},{ref:U,message:X,type:oe,...Te}=x;fe(t.errors,A,{...Te,...O,ref:C}),_.state.next({name:A,errors:t.errors,isValid:!1}),M&&M.shouldFocus&&C&&C.focus&&C.focus()},Fe=(A,O)=>fn(A)?_.state.subscribe({next:M=>"values"in M&&A(P(void 0,O),M)}):P(A,O,!0),Z=A=>_.state.subscribe({next:O=>{qR(A.name,O.name,A.exact)&&jR(O,A.formState||u,lr,A.reRenderRoot)&&A.callback({values:{...l},...t,...O,defaultValues:a})}}).unsubscribe,J=A=>(i.mount=!0,E={...E,...A.formState},Z({...A,formState:E})),re=(A,O={})=>{for(const M of A?st(A):s.mount)s.mount.delete(M),s.array.delete(M),O.keepValue||(Ge(r,M),Ge(l,M)),!O.keepError&&Ge(t.errors,M),!O.keepDirty&&Ge(t.dirtyFields,M),!O.keepTouched&&Ge(t.touchedFields,M),!O.keepIsValidating&&Ge(t.validatingFields,M),!n.shouldUnregister&&!O.keepDefaultValue&&Ge(a,M);_.state.next({values:we(l)}),_.state.next({...t,...O.keepDirty?{isDirty:V()}:{}}),!O.keepIsValid&&R()},te=({disabled:A,name:O})=>{(ln(A)&&i.mount||A||s.disabled.has(O))&&(A?s.disabled.add(O):s.disabled.delete(O))},de=(A,O={})=>{let M=$(r,A);const C=ln(O.disabled)||ln(n.disabled);return fe(r,A,{...M||{},_f:{...M&&M._f?M._f:{ref:{name:A}},name:A,mount:!0,...O}}),s.mount.add(A),M?te({disabled:ln(O.disabled)?O.disabled:n.disabled,name:A}):D(A,!0,O.value),{...C?{disabled:O.disabled||n.disabled}:{},...n.progressive?{required:!!O.required,min:et(O.min),max:et(O.max),minLength:et(O.minLength),maxLength:et(O.maxLength),pattern:et(O.pattern)}:{},name:A,onChange:q,onBlur:q,ref:x=>{if(x){de(A,O),M=$(r,A);const U=he(x.value)&&x.querySelectorAll&&x.querySelectorAll("input,select,textarea")[0]||x,X=PR(U),oe=M._f.refs||[];if(X?oe.find(Te=>Te===U):U===M._f.ref)return;fe(r,A,{_f:{...M._f,...X?{refs:[...oe.filter(_l),U,...Array.isArray($(a,A))?[{}]:[]],ref:{type:U.type,name:A}}:{ref:U}}}),D(A,!1,void 0,U)}else M=$(r,A,{}),M._f&&(M._f.mount=!1),(n.shouldUnregister||O.shouldUnregister)&&!(ad(s.array,A)&&i.action)&&s.unMount.add(A)}}},je=()=>n.shouldFocusError&&ot(r,w,s.mount),qe=A=>{ln(A)&&(_.state.next({disabled:A}),ot(r,(O,M)=>{const C=$(r,M);C&&(O.disabled=C._f.disabled||A,Array.isArray(C._f.refs)&&C._f.refs.forEach(x=>{x.disabled=C._f.disabled||A}))},0,!1))},Ue=(A,O)=>async M=>{let C;M&&(M.preventDefault&&M.preventDefault(),M.persist&&M.persist());let x=we(l);if(_.state.next({isSubmitting:!0}),n.resolver){const{errors:U,values:X}=await b();t.errors=U,x=we(X)}else await h(r);if(s.disabled.size)for(const U of s.disabled)Ge(x,U);if(Ge(t.errors,"root"),nn(t.errors)){_.state.next({errors:{}});try{await A(x,M)}catch(U){C=U}}else O&&await O({...t.errors},M),je(),setTimeout(je);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:nn(t.errors)&&!C,submitCount:t.submitCount+1,errors:t.errors}),C)throw C},Pn=(A,O={})=>{$(r,A)&&(he(O.defaultValue)?j(A,we($(a,A))):(j(A,O.defaultValue),fe(a,A,we(O.defaultValue))),O.keepTouched||Ge(t.touchedFields,A),O.keepDirty||(Ge(t.dirtyFields,A),t.isDirty=O.defaultValue?V(A,we($(a,A))):V()),O.keepError||(Ge(t.errors,A),u.isValid&&R()),_.state.next({...t}))},un=(A,O={})=>{const M=A?we(A):a,C=we(M),x=nn(A),U=x?a:C;if(O.keepDefaultValues||(a=M),!O.keepValues){if(O.keepDirtyValues){const X=new Set([...s.mount,...Object.keys(kr(a,l))]);for(const oe of Array.from(X))$(t.dirtyFields,oe)?fe(U,oe,$(l,oe)):j(oe,$(U,oe))}else{if(di&&he(A))for(const X of s.mount){const oe=$(r,X);if(oe&&oe._f){const Te=Array.isArray(oe._f.refs)?oe._f.refs[0]:oe._f.ref;if(ka(Te)){const en=Te.closest("form");if(en){en.reset();break}}}}if(O.keepFieldsRef)for(const X of s.mount)j(X,$(U,X));else r={}}l=n.shouldUnregister?O.keepDefaultValues?we(a):{}:we(U),_.array.next({values:{...U}}),_.state.next({values:{...U}})}s={mount:O.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!u.isValid||!!O.keepIsValid||!!O.keepDirtyValues,i.watch=!!n.shouldUnregister,_.state.next({submitCount:O.keepSubmitCount?t.submitCount:0,isDirty:x?!1:O.keepDirty?t.isDirty:!!(O.keepDefaultValues&&!Fn(A,a)),isSubmitted:O.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:x?{}:O.keepDirtyValues?O.keepDefaultValues&&l?kr(a,l):t.dirtyFields:O.keepDefaultValues&&A?kr(a,A):O.keepDirty?t.dirtyFields:{},touchedFields:O.keepTouched?t.touchedFields:{},errors:O.keepErrors?t.errors:{},isSubmitSuccessful:O.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:a})},vn=(A,O)=>un(fn(A)?A(l):A,O),ar=(A,O={})=>{const M=$(r,A),C=M&&M._f;if(C){const x=C.refs?C.refs[0]:C.ref;x.focus&&(x.focus(),O.shouldSelect&&fn(x.select)&&x.select())}},lr=A=>{t={...t,...A}},$n={control:{register:de,unregister:re,getFieldState:z,handleSubmit:Ue,setError:ae,_subscribe:Z,_runSchema:b,_focusError:je,_getWatch:P,_getDirty:V,_setValid:R,_setFieldArray:S,_setDisabledField:te,_setErrors:I,_getFieldArray:k,_reset:un,_resetDefaultValues:()=>fn(n.defaultValues)&&n.defaultValues().then(A=>{vn(A,n.resetOptions),_.state.next({isLoading:!1})}),_removeUnmounted:G,_disableForm:qe,_subjects:_,_proxyFormState:u,get _fields(){return r},get _formValues(){return l},get _state(){return i},set _state(A){i=A},get _defaultValues(){return a},get _names(){return s},set _names(A){s=A},get _formState(){return t},get _options(){return n},set _options(A){n={...n,...A}}},subscribe:J,trigger:F,register:de,handleSubmit:Ue,watch:Fe,setValue:j,getValues:Y,reset:vn,resetField:Pn,clearErrors:W,unregister:re,setError:ae,setFocus:ar,getFieldState:z};return{...$n,formControl:$n}}function xa(e={}){const n=m.useRef(void 0),t=m.useRef(void 0),[r,a]=m.useState({isDirty:!1,isValidating:!1,isLoading:fn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:fn(e.defaultValues)?void 0:e.defaultValues});if(!n.current)if(e.formControl)n.current={...e.formControl,formState:r},e.defaultValues&&!fn(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...s}=YR(e);n.current={...s,formState:r}}const l=n.current.control;return l._options=e,_i(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>a({...l._formState}),reRenderRoot:!0});return a(s=>({...s,isReady:!0})),l._formState.isReady=!0,i},[l]),m.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),m.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),m.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),m.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),m.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==r.isDirty&&l._subjects.state.next({isDirty:i})}},[l,r.isDirty]),m.useEffect(()=>{e.values&&!Fn(e.values,t.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),t.current=e.values,a(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),m.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),n.current.formState=ld(r,l),n.current}function CR(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bs={exports:{}},nt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fs;function $R(){if(Fs)return nt;Fs=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(r,a,l){var i=null;if(l!==void 0&&(i=""+l),a.key!==void 0&&(i=""+a.key),"key"in a){l={};for(var s in a)s!=="key"&&(l[s]=a[s])}else l=a;return a=l.ref,{$$typeof:e,type:r,key:i,ref:a!==void 0?a:null,props:l}}return nt.Fragment=n,nt.jsx=t,nt.jsxs=t,nt}var ws;function WR(){return ws||(ws=1,Bs.exports=$R()),Bs.exports}var ve=WR();const zR=({children:e})=>{const n=v.Children.toArray(e);return n.length===0?null:ve.jsx(pt,{variant:"warning",size:"small",children:ve.jsx(be,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:n.map(t=>ve.jsx(ne,{size:"small",children:t},XR(t)))})})},XR=e=>{if(v.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},Lt={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"},Vs=Jn(Lt),QR=({onClick:e=()=>{},erOverstyrt:n=!1})=>{const[t,r]=v.useState(n),a=()=>{t||(r(!0),e(!0))};return v.useEffect(()=>{r(n)},[n]),ve.jsx(Oe,{variant:t?"tertiary-neutral":"tertiary","data-testid":"overstyringsknapp",type:"button",size:"small",onClick:a,"aria-disabled":n,disabled:n,icon:t?ve.jsx(AE,{"aria-hidden":!0,color:"var(--ax-neutral-400)",height:25,width:25,title:Vs.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):ve.jsx(pE,{"aria-hidden":!0,color:"var(--ax-accent-500)",height:25,width:25,title:Vs.formatMessage({id:"OverstyringKnapp.Overstyring"})})})};var js={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var qs;function ZR(){return qs||(qs=1,(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=a(l,r.call(this,s)))}return l}function r(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)n.call(l,s)&&l[s]&&(i=a(i,this&&this[s]||s));return i}function a(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(js)),js.exports}var ec=ZR();const gi=CR(ec),nc="_borderbox_1a0x6_1",rc="_error_1a0x6_5",tc="_warning_1a0x6_8",ac={borderbox:nc,error:rc,warning:tc};gi.bind(ac);const lc="_aksjonspunkt_11wjs_1",ic="_erAksjonspunktApent_11wjs_4",sc="_erIkkeGodkjentAvBeslutter_11wjs_8",oc={aksjonspunkt:lc,erAksjonspunktApent:ic,erIkkeGodkjentAvBeslutter:sc};gi.bind(oc);const Oa=({dateString:e,year:n,month:t,day:r})=>ve.jsx(ve.Fragment,{children:Eo(e,{year:n,month:t,day:r})}),Us=Jn(Lt),uc=({text:e,okButtonText:n,showModal:t,cancel:r,submit:a})=>ve.jsxs(Rn,{width:"small",open:t,"aria-label":e,onClose:r,children:[ve.jsx(Rn.Body,{children:ve.jsx(Yr,{size:"small",level:"2",children:e})}),ve.jsxs(Rn.Footer,{children:[ve.jsx(Oe,{variant:"primary",size:"small",onClick:a,autoFocus:!0,type:"button",children:n||Us.formatMessage({id:"OkAvbrytModal.Ok"})}),ve.jsx(Oe,{variant:"secondary",size:"small",onClick:r,type:"button",children:Us.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),ut=({dateStringFom:e,dateStringTom:n,showTodayString:t=!1})=>ve.jsx(ve.Fragment,{children:Fd(e,n,{showTodayString:t})});Jn(Lt);const dc="_divider_1jpov_1",Ec="_dividerParagraf_1jpov_8",mc="_leftPanel_1jpov_11",Nc="_rightPanel_1jpov_14",bl={divider:dc,dividerParagraf:Ec,leftPanel:mc,rightPanel:Nc},_c=gi.bind(bl),xs=({spaceUnder:e=!1,spaceAbove:n=!1,leftPanel:t=!1,rightPanel:r=!1,dividerParagraf:a=!1,className:l})=>ve.jsxs(ve.Fragment,{children:[n&&ve.jsx("div",{style:{marginBottom:"32px"}}),ve.jsx("div",{className:_c(l,{leftPanel:t,rightPanel:r}),children:ve.jsx("div",{className:a?bl.dividerParagraf:bl.divider})}),e&&ve.jsx("div",{style:{marginBottom:"32px"}})]}),Nd=()=>ve.jsx("span",{"data-testid":"editedIcon",children:ve.jsx(OE,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});Jn(Lt);const Tc=Jn(Lt),vc=({tekst:e,children:n})=>{const[t,r]=v.useState(!1);if(!e)return n;const a=async()=>{await navigator.clipboard.writeText(e),r(!0),setTimeout(()=>{r(!1)},1e3)};return ve.jsx(ed,{content:Tc.formatMessage({id:t?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:ve.jsx("span",{"aria-hidden":"true",onClick:a,children:n??e})})},Hs={default:"_default_af3od_1",rød:"_rød_af3od_5"},Ll=({beløp:e,kr:n=!1,rød:t=!1})=>{const r=e?.toString().replace(/\s/g,"");return ve.jsx(vc,{tekst:r,children:ve.jsxs("span",{className:t?Hs.rød:Hs.default,children:[r?wd(r):"-",r&&n&&" kr"]})})};var Tl={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Js;function gc(){return Js||(Js=1,(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=a(l,r(s)))}return l}function r(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)n.call(l,s)&&l[s]&&(i=a(i,s));return i}function a(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(Tl)),Tl.exports}var Ic=gc();const fc=Bl(Ic);function Rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ys={exports:{}},rt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs;function cc(){if(Cs)return rt;Cs=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(r,a,l){var i=null;if(l!==void 0&&(i=""+l),a.key!==void 0&&(i=""+a.key),"key"in a){l={};for(var s in a)s!=="key"&&(l[s]=a[s])}else l=a;return a=l.ref,{$$typeof:e,type:r,key:i,ref:a!==void 0?a:null,props:l}}return rt.Fragment=n,rt.jsx=t,rt.jsxs=t,rt}var $s;function Sc(){return $s||($s=1,Ys.exports=cc()),Ys.exports}var ke=Sc();const ht=e=>e.reduce((n,t,r)=>({...n,[r]:a=>t(a)||!0}),{}),Mt=(e,n)=>n.split(".").reduce((t,r)=>t!==void 0?t[r]:t,e)?.message;var hl={exports:{}},pc=hl.exports,Ws;function Dc(){return Ws||(Ws=1,(function(e,n){(function(t,r){e.exports=r()})(pc,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,o={},d=function(f){return(f=+f)+(f>68?1900:2e3)},u=function(f){return function(S){this[f]=+S}},E=[/[+-]\d\d:?(\d\d)?|Z/,function(f){(this.zone||(this.zone={})).offset=(function(S){if(!S||S==="Z")return 0;var c=S.match(/([+-]|\d\d)/g),I=60*c[1]+(+c[2]||0);return I===0?0:c[0]==="+"?-I:I})(f)}],_=function(f){var S=o[f];return S&&(S.indexOf?S:S.s.concat(S.f))},T=function(f,S){var c,I=o.meridiem;if(I){for(var D=1;D<=24;D+=1)if(f.indexOf(I(D,0,S))>-1){c=D>12;break}}else c=f===(S?"pm":"PM");return c},g={A:[s,function(f){this.afternoon=T(f,!1)}],a:[s,function(f){this.afternoon=T(f,!0)}],Q:[a,function(f){this.month=3*(f-1)+1}],S:[a,function(f){this.milliseconds=100*+f}],SS:[l,function(f){this.milliseconds=10*+f}],SSS:[/\d{3}/,function(f){this.milliseconds=+f}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[l,u("day")],Do:[s,function(f){var S=o.ordinal,c=f.match(/\d+/);if(this.day=c[0],S)for(var I=1;I<=31;I+=1)S(I).replace(/\[|\]/g,"")===f&&(this.day=I)}],w:[i,u("week")],ww:[l,u("week")],M:[i,u("month")],MM:[l,u("month")],MMM:[s,function(f){var S=_("months"),c=(_("monthsShort")||S.map(function(I){return I.slice(0,3)})).indexOf(f)+1;if(c<1)throw new Error;this.month=c%12||c}],MMMM:[s,function(f){var S=_("months").indexOf(f)+1;if(S<1)throw new Error;this.month=S%12||S}],Y:[/[+-]?\d+/,u("year")],YY:[l,function(f){this.year=d(f)}],YYYY:[/\d{4}/,u("year")],Z:E,ZZ:E};function R(f){var S,c;S=f,c=o&&o.formats;for(var I=(f=S.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(G,V,P){var k=P&&P.toUpperCase();return V||c[P]||t[P]||c[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(L,K,j){return K||j.slice(1)})})).match(r),D=I.length,p=0;p<D;p+=1){var y=I[p],b=g[y],B=b&&b[0],h=b&&b[1];I[p]=h?{regex:B,parser:h}:y.replace(/^\[|\]$/g,"")}return function(G){for(var V={},P=0,k=0;P<D;P+=1){var L=I[P];if(typeof L=="string")k+=L.length;else{var K=L.regex,j=L.parser,q=G.slice(k),w=K.exec(q)[0];j.call(V,w),G=G.replace(w,"")}}return(function(F){var Y=F.afternoon;if(Y!==void 0){var z=F.hours;Y?z<12&&(F.hours+=12):z===12&&(F.hours=0),delete F.afternoon}})(V),V}}return function(f,S,c){c.p.customParseFormat=!0,f&&f.parseTwoDigitYear&&(d=f.parseTwoDigitYear);var I=S.prototype,D=I.parse;I.parse=function(p){var y=p.date,b=p.utc,B=p.args;this.$u=b;var h=B[1];if(typeof h=="string"){var G=B[2]===!0,V=B[3]===!0,P=G||V,k=B[2];V&&(k=B[2]),o=this.$locale(),!G&&k&&(o=c.Ls[k]),this.$d=(function(q,w,F,Y){try{if(["x","X"].indexOf(w)>-1)return new Date((w==="X"?1e3:1)*q);var z=R(w)(q),W=z.year,ae=z.month,Fe=z.day,Z=z.hours,J=z.minutes,re=z.seconds,te=z.milliseconds,de=z.zone,je=z.week,qe=new Date,Ue=Fe||(W||ae?1:qe.getDate()),Pn=W||qe.getFullYear(),un=0;W&&!ae||(un=ae>0?ae-1:qe.getMonth());var vn,ar=Z||0,lr=J||0,fr=re||0,$n=te||0;return de?new Date(Date.UTC(Pn,un,Ue,ar,lr,fr,$n+60*de.offset*1e3)):F?new Date(Date.UTC(Pn,un,Ue,ar,lr,fr,$n)):(vn=new Date(Pn,un,Ue,ar,lr,fr,$n),je&&(vn=Y(vn).week(je).toDate()),vn)}catch{return new Date("")}})(y,h,b,c),this.init(),k&&k!==!0&&(this.$L=this.locale(k).$L),P&&y!=this.format(h)&&(this.$d=new Date("")),o={}}else if(h instanceof Array)for(var L=h.length,K=1;K<=L;K+=1){B[1]=h[K-1];var j=c.apply(this,B);if(j.isValid()){this.$d=j.$d,this.$L=j.$L,this.init();break}K===L&&(this.$d=new Date(""))}else D.call(this,p)}}})})(hl)),hl.exports}var Ac=Dc();const kc=Rc(Ac),yc="_textarea_14c7r_1",Oc="_readOnlyField_14c7r_7",zs={textarea:yc,readOnlyField:Oc},bc=e=>e!=null&&e!=="",Ha=({label:e,value:n,isEdited:t=!1,type:r,hideLabel:a,size:l})=>bc(n)?ke.jsxs(be,{gap:"space-4",children:[e&&!a&&ke.jsx(Re,{size:l,children:e}),ke.jsxs(ce,{gap:"space-8",align:"center",wrap:!1,children:[ke.jsx(Ul,{className:r==="textarea"?zs.textarea:zs.readOnlyField,size:l,children:n}),t&&ke.jsx(Nd,{})]})]}):null;ze.extend(kc);const Tt=({label:e,description:n,validate:t=[],hideLabel:r=!1,isReadOnly:a=!1,size:l="small",onChange:i,disabledDays:s,isEdited:o,defaultMonth:d,fromDate:u,toDate:E,..._})=>{const{name:T,control:g,disabled:R}=_,{formState:{errors:f}}=tr(),{field:S}=bt({name:T,control:g,rules:{validate:v.useMemo(()=>ht(t),[t])}}),c=S.value?ze(S.value,Gn,!0).format(Kt):"",[I,D]=v.useState(c),{datepickerProps:p,inputProps:y}=Gf({onDateChange:h=>{if(h!==void 0){const G=ze(h).format(Gn);i&&i(G),S.onChange(G),D(ze(G,Gn,!0).format(Kt))}},defaultSelected:S.value?ze(S.value,Gn,!0).toDate():void 0,defaultMonth:d||(!S.value&&E?E:void 0),disabled:s}),b=v.useCallback(h=>{const G=ze(h.target.value,Kt,!0).format(Gn),V=G!=="Invalid Date";D(h.target.value),i&&i(V?G:h.target.value),S.onChange(V?G:h.target.value)},[D,i,S]);if(a)return ke.jsx(Ha,{label:e,value:S.value?ze(S.value,Gn,!0).format(Kt):void 0,isEdited:o,hideLabel:r,size:l});const B={...p,fromDate:u,toDate:E,dropdownCaption:u&&E?!0:void 0};return ke.jsx(Da,{...B,children:ke.jsx(Da.Input,{...y,hideLabel:r,onChange:b,value:I,size:l,label:e,description:n,disabled:R,error:Mt(f,T)})})},Ml=({name:e,control:n,label:t,validate:r=[],readOnly:a=!1,type:l,shouldValidateOnBlur:i=!1,onBlur:s,onChange:o,description:d,autoFocus:u,parse:E=y=>y,format:_=y=>y,normalizeOnBlur:T,isEdited:g,maxLength:R,autoComplete:f=!1,disabled:S,className:c,hideLabel:I,size:D="small",...p})=>{const{formState:{errors:y},trigger:b}=tr(),{field:B}=bt({name:e,control:n,rules:{validate:v.useMemo(()=>ht(r),[r])}});return a?ke.jsx(Ha,{label:t,value:B.value,isEdited:g,hideLabel:I,size:D}):ke.jsx(kR,{size:D,hideLabel:I,description:d,label:t,error:Mt(y,e),...B,value:B.value?_(B.value):"",autoFocus:u,autoComplete:f?void 0:"off",maxLength:R,disabled:S,type:l,className:c,onChange:h=>{const G=h.currentTarget.value?E(h.currentTarget.value):null;return o&&o(G),B.onChange(G)},onBlur:async h=>{if(B.onBlur(),i){const G=await b();s&&G&&s(h?.target?.value)}else s&&s(h?.target?.value);T&&B.onChange(h?.target?.value?T(E(h?.target?.value)):null)},...p})},Lc="_noReadOnlyIcon_11vhl_2",hc={noReadOnlyIcon:Lc},_d=({label:e,description:n,validate:t=[],onChange:r,children:a,className:l,isReadOnly:i=!1,size:s="small",isEdited:o=!1,hideLegend:d=!1,...u})=>{const{name:E,control:_}=u,{formState:{errors:T}}=tr(),{field:g}=bt({name:E,control:_,rules:{validate:ht(t)}});return ke.jsx(gR,{name:E,value:g.value!==void 0?g.value:null,legend:ke.jsxs(ce,{justify:"center",gap:"space-8",children:[e,i&&o&&ke.jsx(Nd,{})]}),hideLegend:d,"aria-readonly":i,readOnly:i,description:n,size:s,error:Mt(T,E),onChange:R=>{r&&r(R),g.onChange(R)},className:fc(l,hc.noReadOnlyIcon),children:a})},Mc=({label:e,selectValues:n,validate:t=[],readOnly:r=!1,description:a,hideValueOnDisable:l=!1,onChange:i,className:s,hideLabel:o,isEdited:d,size:u="small",...E})=>{const{name:_,control:T,disabled:g}=E,{formState:{errors:R}}=tr(),{field:f}=bt({name:_,control:T,rules:{validate:v.useMemo(()=>ht(t),[t])}});if(r){const I=n.map(p=>p.props).find(p=>p.value===f.value),D=I?I.children:void 0;return ke.jsx(Ha,{value:D,label:e,hideLabel:o,isEdited:d,size:u})}const S=f.value||"",c=!n.map(I=>I.props.value).includes(S)&&S!=="";return c&&console.warn(`No corresponding option found for value '${S}'`),ke.jsxs(kl,{size:u,className:s,error:Mt(R,_),label:e,description:a,value:l&&g||c?"":f.value,disabled:g,onChange:I=>{i&&i(I),f.onChange(I)},hideLabel:o,children:[ke.jsx("option",{style:{display:"none"}}),",",n]})},Pc="_textAreaFieldWithBadges_bdz0b_1",Kc="_etikettWrapper_bdz0b_4",Xs={textAreaFieldWithBadges:Pc,etikettWrapper:Kc},Ii=({name:e,control:n,label:t,readOnly:r,maxLength:a,badges:l,validate:i=[],parse:s=T=>T,className:o,description:d,isEdited:u,size:E="small",..._})=>{const{formState:{errors:T}}=tr(),{field:g}=bt({name:e,control:n,rules:{validate:v.useMemo(()=>ht(i),[i])}});return r?ke.jsx(Ha,{size:E,label:t,value:g.value,type:"textarea",isEdited:u,hideLabel:_.hideLabel}):ke.jsxs("div",{className:l?Xs.textAreaFieldWithBadges:null,children:[l&&ke.jsx("div",{className:Xs.etikettWrapper,children:l.map(({type:R,titleText:f})=>ke.jsx(dR,{variant:R,size:"small",children:f},f))}),ke.jsx(DR,{size:E,label:t,description:d,className:o,autoComplete:"off",...g,onChange:R=>g.onChange(R.currentTarget.value!==""?s(R.currentTarget.value):null),value:g.value?g.value:"",error:Mt(T,e),maxLength:a,..._})]})},Ja=({formMethods:e,onSubmit:n,children:t,className:r,setDataOnUnmount:a})=>{const{handleSubmit:l,getValues:i}=e;return v.useEffect(()=>()=>{a&&a(i())},[]),ke.jsx(bR,{...e,children:ke.jsx("form",{className:r,onSubmit:n?l(s=>n(s)):void 0,children:t})})},Td=({submitCallback:e,cancelEvent:n,showModal:t,ventearsaker:r,erTilbakekreving:a,frist:l,ventearsak:i,visBrevErBestilt:s=!1,hasManualPaVent:o,defaultVenteårsak:d=null})=>{const u=rr(),E=xa({defaultValues:Bc(o,l,i??d)}),_=E.watch("frist"),T=E.watch("ventearsak"),g=qc(i,T),R=Uc(l,_),f=!(l===_&&!g),S=jc(a,l,_,T);return N.jsx(Ja,{formMethods:E,onSubmit:e,children:N.jsxs(Rn,{width:"small",open:t,onClose:n,"aria-label":u.formatMessage({id:i?"SettPaVentModal.ErSettPaVent":"SettPaVentModal.SettesPaVent"}),children:[N.jsx(Rn.Header,{children:N.jsx(Yr,{size:"small",level:"2",children:N.jsx(H,{id:i?"SettPaVentModal.ErSettPaVent":"SettPaVentModal.SettesPaVent"})})}),N.jsx(Rn.Body,{children:N.jsxs(be,{gap:"space-16",children:[(o||_)&&N.jsx(Tt,{name:"frist",control:E.control,label:N.jsx(H,{id:"SettPaVentModal.Frist"}),validate:[mn,mt,Vd]}),N.jsx(Mc,{name:"ventearsak",control:E.control,label:N.jsx(H,{id:"SettPaVentModal.Arsak"}),validate:[mn],selectValues:r.filter(c=>!o||(a?Vc(c,T):Fc.has(c.kode))).sort((c,I)=>c.navn.localeCompare(I.navn)).map(c=>N.jsx("option",{value:c.kode,children:c.navn},c.kode)),readOnly:!o}),s&&N.jsx(ne,{size:"small",children:N.jsx(H,{id:"SettPaVentModal.BrevBlirBestilt"})}),o&&N.jsx(ne,{size:"small",children:N.jsx(H,{id:"SettPaVentModal.EndreFrist"})}),!o&&S&&N.jsxs(N.Fragment,{children:[N.jsx(ne,{size:"small",children:N.jsx(H,{id:"SettPaVentModal.UtløptFrist"})}),N.jsx(ne,{size:"small",children:N.jsx(H,{id:"SettPaVentModal.HenleggeSaken"})})]})]})}),N.jsxs(Rn.Footer,{children:[N.jsx(Oe,{size:"small",variant:"primary",style:{paddingInline:"36px"},onClick:f?void 0:n,disabled:!g&&!R,children:N.jsx(H,{id:"SettPaVentModal.Ok"})}),(!o||f||!s)&&N.jsx(Oe,{size:"small",variant:"secondary",onClick:n,type:"button",children:N.jsx(H,{id:g||R?"SettPaVentModal.Avbryt":"SettPaVentModal.Lukk"})})]})]})})},Gc=()=>{const e=ze().toDate();return e.setDate(e.getDate()+28),ze(e).format(Gn)},Bc=(e,n,t)=>({ventearsak:t??void 0,frist:n||e===!1?n??void 0:Gc()}),Fc=new Set([$e.AVV_DOK,$e.AVV_FODSEL,$e.VENT_PÅ_BRUKERTILBAKEMELDING,$e.UTV_FRIST,$e.FOR_TIDLIG_SOKNAD,$e.VENT_OPDT_INNTEKTSMELDING,$e.VENT_UTLAND_TRYGD,$e.UTVIDET_TILSVAR_FRIST,$e.ENDRE_TILKJENT_YTELSE,$e.VENT_PÅ_MULIG_MOTREGNING]),wc=new Set([$e.VENT_PÅ_BRUKERTILBAKEMELDING,$e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG]),Vc=(e,n)=>wc.has(e.kode)?e.kode===n:!0,jc=(e,n,t,r)=>{const a=e&&(!!t&&Li(t)===null||!!n&&Li(n)===null),l=r===$e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG;return e&&a&&l},qc=(e,n)=>!(e===n||!n&&!e),Uc=(e,n)=>!(e===n||!n&&!e);Td.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModal",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasManualPaVent:{required:!0,tsType:{name:"boolean"},description:""},frist:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},ventearsak:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},defaultVenteårsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const xc={"SettPaVentModal.ModalDescription":"Behandlingen settes på vent med frist","SettPaVentModal.ModalDescriptionErPaVent":"Behandlingen er satt på vent","SettPaVentModal.PaVent":"På vent","SettPaVentModal.SettesPaVent":"Behandlingen settes på vent","SettPaVentModal.ErSettPaVent":"Behandlingen er satt på vent","SettPaVentModal.Frist":"Frist","SettPaVentModal.Ok":"OK","SettPaVentModal.Avbryt":"Avbryt","SettPaVentModal.Lukk":"Lukk","SettPaVentModal.BrevBlirBestilt":"Brevet blir bestilt","SettPaVentModal.Arsak":"Årsak","SettPaVentModal.EndreFrist":"Du kan endre frist eller årsak før du fortsetter","SettPaVentModal.UtløptFrist":"OBS! Fristen på denne behandlingen er utløpt!","SettPaVentModal.HenleggeSaken":`Kontroller hvorfor Økonomi ikke har dannet et kravgrunnlag.
 Dersom det feilutbetalte beløpet er bortfalt skal saken henlegges.
For mer informasjon, se rutine under tilbakekreving.`},Hc=Jn(xc),vd=({frist:e=null,ventearsak:n=null,hasManualPaVent:t=!1,...r})=>N.jsx(Fl,{value:Hc,children:N.jsx(Td,{frist:e,ventearsak:n,hasManualPaVent:t,...r})});vd.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModalIndex",props:{cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},frist:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},ventearsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:""},hasManualPaVent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},defaultVenteårsak:{required:!1,tsType:{name:"string"},description:""}}};const fi=v.createContext({isDirty:!1,setDirty:()=>{}}),gd=({children:e})=>{const[n,t]=v.useState(!1),r=v.useMemo(()=>({isDirty:n,setDirty:t}),[n,t]);return N.jsx(fi.Provider,{value:r,children:e})},Ri=e=>{const n=v.useContext(fi);v.useEffect(()=>{n.setDirty(e)},[e])},Jc=()=>v.useContext(fi).isDirty;gd.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const Qs=(e,n)=>({arbeidsgiverIdent:e,arbeidsgiverNavn:n.navn,...n.erPrivatPerson?{erPrivatPerson:!0,arbeidsgiverFødselsdato:n.fødselsdato}:{erPrivatPerson:!1}}),jt=e=>n=>n.arbeidsgiverIdent===e.arbeidsgiverIdent,Yc=(e,n)=>{const{fom:t,tom:r,saksbehandlersVurdering:a,stillingsprosent:l,begrunnelse:i}=e;if(e.saksbehandlersVurdering)return e.saksbehandlersVurdering===Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverNavn:n,fom:t,tom:r,stillingsprosent:l,saksbehandlersVurdering:a??void 0,begrunnelse:i??void 0}:{saksbehandlersVurdering:a??void 0,begrunnelse:i??void 0}},Cc=({saksbehandlersVurdering:e,begrunnelse:n})=>e?{saksbehandlersVurdering:e,begrunnelse:n??void 0}:void 0,$c=(e,n)=>e.filter(t=>t.arbeidsgiverIdent===n),Wc=(e,n)=>n.map(t=>{const r=e.find(a=>zc(t,a));return{arbeidsforhold:t,inntektsmelding:r}}),zc=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),Xc=e=>e.årsak?-1:1,Qc=(e,n)=>{const t=e.årsak,r=n.årsak;return t&&!r?-1:r&&!t?1:e.arbeidsgiverNavn.localeCompare(n.arbeidsgiverNavn)},Zc=(e,n)=>{const{arbeidsforhold:t,inntektsmeldinger:r,inntekter:a}=e,l=[...t.sort(Xc)].reduce((s,o)=>{if(s.find(jt(o)))return s;const u=t.filter(jt(o)),E=Qs(o.arbeidsgiverIdent,n[o.arbeidsgiverIdent]),_=$c(r,o.arbeidsgiverIdent),T=a.find(jt(o))?.inntekter??[],g={...E,årsak:o.årsak??_[0]?.årsak??void 0,avklaring:Yc(o,E.arbeidsgiverNavn),arbeidsforholdForRad:u,inntektsmeldingerForRad:_,inntektsposter:T};return s.concat(g)},[]),i=r.filter(s=>!t.some(o=>s.arbeidsgiverIdent===o.arbeidsgiverIdent)).map(s=>{const o=Qs(s.arbeidsgiverIdent,n[s.arbeidsgiverIdent]),d=a.find(jt(s))?.inntekter??[];return{...o,årsak:s.årsak??void 0,avklaring:Cc(s),arbeidsforholdForRad:[],inntektsmeldingerForRad:[s],inntektsposter:d}});return l.concat(i).sort(Qc)},Zs=e=>{const n=e.findIndex(t=>t.årsak&&!t.avklaring);return n===-1?[]:[n]};var vl={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var eo;function eS(){return eo||(eo=1,(function(e){(function(){var n={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=a(l,r.call(this,s)))}return l}function r(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)n.call(l,s)&&l[s]&&(i=a(i,this&&this[s]||s));return i}function a(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(vl)),vl.exports}var nS=eS();const rS=Bl(nS),Id=({saksnummer:e,journalpostId:n,dokumentId:t,dokumentTittel:r,children:a})=>{const l=`${n}-${t}`,i=Yd(e,n,t);return N.jsx(ui,{href:i,target:l,rel:"noopener noreferrer",onClick:tS(r),children:a??r})},tS=e=>n=>{e&&(n.preventDefault(),Cd(n.currentTarget.href,n.currentTarget.target,e))};Id.__docgenInfo={description:"",methods:[],displayName:"DokumentLink",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},journalpostId:{required:!0,tsType:{name:"string"},description:""},dokumentId:{required:!0,tsType:{name:"string"},description:""},dokumentTittel:{required:!1,tsType:{name:"string"},description:""}}};const Mr=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,nr=globalThis,dt="10.15.0";function ci(){return Si(nr),nr}function Si(e){const n=e.__SENTRY__=e.__SENTRY__||{};return n.version=n.version||dt,n[dt]=n[dt]||{}}function pi(e,n,t=nr){const r=t.__SENTRY__=t.__SENTRY__||{},a=r[dt]=r[dt]||{};return a[e]||(a[e]=n())}const aS="Sentry Logger ",no={};function lS(e){if(!("console"in nr))return e();const n=nr.console,t={},r=Object.keys(no);r.forEach(a=>{const l=no[a];t[a]=n[a],n[a]=l});try{return e()}finally{r.forEach(a=>{n[a]=t[a]})}}function iS(){Ai().enabled=!0}function sS(){Ai().enabled=!1}function fd(){return Ai().enabled}function oS(...e){Di("log",...e)}function uS(...e){Di("warn",...e)}function dS(...e){Di("error",...e)}function Di(e,...n){Mr&&fd()&&lS(()=>{nr.console[e](`${aS}[${e}]:`,...n)})}function Ai(){return Mr?pi("loggerSettings",()=>({enabled:!1})):{enabled:!1}}const ma={enable:iS,disable:sS,isEnabled:fd,log:oS,warn:uS,error:dS},ES=Object.prototype.toString;function mS(e,n){return ES.call(e)===`[object ${n}]`}function NS(e){return mS(e,"Object")}function _S(e){return!!(e?.then&&typeof e.then=="function")}function TS(e,n=0){return typeof e!="string"||n===0||e.length<=n?e:`${e.slice(0,n)}...`}function vS(e,n,t){try{Object.defineProperty(e,n,{value:t,writable:!0,configurable:!0})}catch{Mr&&ma.log(`Failed to add non-enumerable property "${n}" to object`,e)}}function gS(){const e=nr;return e.crypto||e.msCrypto}function Et(e=gS()){let n=()=>Math.random()*16;try{if(e?.randomUUID)return e.randomUUID().replace(/-/g,"");e?.getRandomValues&&(n=()=>{const t=new Uint8Array(1);return e.getRandomValues(t),t[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,t=>(t^(n()&15)>>t/4).toString(16))}const Rd=1e3;function cd(){return Date.now()/Rd}function IS(){const{performance:e}=nr;if(!e?.now||!e.timeOrigin)return cd;const n=e.timeOrigin;return()=>(n+e.now())/Rd}let ro;function fS(){return(ro??(ro=IS()))()}function RS(e,n={}){if(n.user&&(!e.ipAddress&&n.user.ip_address&&(e.ipAddress=n.user.ip_address),!e.did&&!n.did&&(e.did=n.user.id||n.user.email||n.user.username)),e.timestamp=n.timestamp||fS(),n.abnormal_mechanism&&(e.abnormal_mechanism=n.abnormal_mechanism),n.ignoreDuration&&(e.ignoreDuration=n.ignoreDuration),n.sid&&(e.sid=n.sid.length===32?n.sid:Et()),n.init!==void 0&&(e.init=n.init),!e.did&&n.did&&(e.did=`${n.did}`),typeof n.started=="number"&&(e.started=n.started),e.ignoreDuration)e.duration=void 0;else if(typeof n.duration=="number")e.duration=n.duration;else{const t=e.timestamp-e.started;e.duration=t>=0?t:0}n.release&&(e.release=n.release),n.environment&&(e.environment=n.environment),!e.ipAddress&&n.ipAddress&&(e.ipAddress=n.ipAddress),!e.userAgent&&n.userAgent&&(e.userAgent=n.userAgent),typeof n.errors=="number"&&(e.errors=n.errors),n.status&&(e.status=n.status)}function Sd(e,n,t=2){if(!n||typeof n!="object"||t<=0)return n;if(e&&Object.keys(n).length===0)return e;const r={...e};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=Sd(r[a],n[a],t-1));return r}function to(){return Et()}const Pl="_sentrySpan";function ao(e,n){n?vS(e,Pl,n):delete e[Pl]}function lo(e){return e[Pl]}const cS=100;class vr{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:to(),sampleRand:Math.random()}}clone(){const n=new vr;return n._breadcrumbs=[...this._breadcrumbs],n._tags={...this._tags},n._extra={...this._extra},n._contexts={...this._contexts},this._contexts.flags&&(n._contexts.flags={values:[...this._contexts.flags.values]}),n._user=this._user,n._level=this._level,n._session=this._session,n._transactionName=this._transactionName,n._fingerprint=this._fingerprint,n._eventProcessors=[...this._eventProcessors],n._attachments=[...this._attachments],n._sdkProcessingMetadata={...this._sdkProcessingMetadata},n._propagationContext={...this._propagationContext},n._client=this._client,n._lastEventId=this._lastEventId,ao(n,lo(this)),n}setClient(n){this._client=n}setLastEventId(n){this._lastEventId=n}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(n){this._scopeListeners.push(n)}addEventProcessor(n){return this._eventProcessors.push(n),this}setUser(n){return this._user=n||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&RS(this._session,{user:n}),this._notifyScopeListeners(),this}getUser(){return this._user}setTags(n){return this._tags={...this._tags,...n},this._notifyScopeListeners(),this}setTag(n,t){return this._tags={...this._tags,[n]:t},this._notifyScopeListeners(),this}setExtras(n){return this._extra={...this._extra,...n},this._notifyScopeListeners(),this}setExtra(n,t){return this._extra={...this._extra,[n]:t},this._notifyScopeListeners(),this}setFingerprint(n){return this._fingerprint=n,this._notifyScopeListeners(),this}setLevel(n){return this._level=n,this._notifyScopeListeners(),this}setTransactionName(n){return this._transactionName=n,this._notifyScopeListeners(),this}setContext(n,t){return t===null?delete this._contexts[n]:this._contexts[n]=t,this._notifyScopeListeners(),this}setSession(n){return n?this._session=n:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(n){if(!n)return this;const t=typeof n=="function"?n(this):n,r=t instanceof vr?t.getScopeData():NS(t)?n:void 0,{tags:a,extra:l,user:i,contexts:s,level:o,fingerprint:d=[],propagationContext:u}=r||{};return this._tags={...this._tags,...a},this._extra={...this._extra,...l},this._contexts={...this._contexts,...s},i&&Object.keys(i).length&&(this._user=i),o&&(this._level=o),d.length&&(this._fingerprint=d),u&&(this._propagationContext=u),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,ao(this,void 0),this._attachments=[],this.setPropagationContext({traceId:to(),sampleRand:Math.random()}),this._notifyScopeListeners(),this}addBreadcrumb(n,t){const r=typeof t=="number"?t:cS;if(r<=0)return this;const a={timestamp:cd(),...n,message:n.message?TS(n.message,2048):n.message};return this._breadcrumbs.push(a),this._breadcrumbs.length>r&&(this._breadcrumbs=this._breadcrumbs.slice(-r),this._client?.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(n){return this._attachments.push(n),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:lo(this)}}setSDKProcessingMetadata(n){return this._sdkProcessingMetadata=Sd(this._sdkProcessingMetadata,n,2),this}setPropagationContext(n){return this._propagationContext=n,this}getPropagationContext(){return this._propagationContext}captureException(n,t){const r=t?.event_id||Et();if(!this._client)return Mr&&ma.warn("No client configured on scope - will not capture exception!"),r;const a=new Error("Sentry syntheticException");return this._client.captureException(n,{originalException:n,syntheticException:a,...t,event_id:r},this),r}captureMessage(n,t,r){const a=r?.event_id||Et();if(!this._client)return Mr&&ma.warn("No client configured on scope - will not capture message!"),a;const l=new Error(n);return this._client.captureMessage(n,t,{originalException:n,syntheticException:l,...r,event_id:a},this),a}captureEvent(n,t){const r=t?.event_id||Et();return this._client?(this._client.captureEvent(n,{...t,event_id:r},this),r):(Mr&&ma.warn("No client configured on scope - will not capture event!"),r)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(n=>{n(this)}),this._notifyingListeners=!1)}}function SS(){return pi("defaultCurrentScope",()=>new vr)}function pS(){return pi("defaultIsolationScope",()=>new vr)}class DS{constructor(n,t){let r;n?r=n:r=new vr;let a;t?a=t:a=new vr,this._stack=[{scope:r}],this._isolationScope=a}withScope(n){const t=this._pushScope();let r;try{r=n(t)}catch(a){throw this._popScope(),a}return _S(r)?r.then(a=>(this._popScope(),a),a=>{throw this._popScope(),a}):(this._popScope(),r)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const n=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:n}),n}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function Vr(){const e=ci(),n=Si(e);return n.stack=n.stack||new DS(SS(),pS())}function AS(e){return Vr().withScope(e)}function kS(e,n){const t=Vr();return t.withScope(()=>(t.getStackTop().scope=e,n(e)))}function io(e){return Vr().withScope(()=>e(Vr().getIsolationScope()))}function yS(){return{withIsolationScope:io,withScope:AS,withSetScope:kS,withSetIsolationScope:(e,n)=>io(n),getCurrentScope:()=>Vr().getScope(),getIsolationScope:()=>Vr().getIsolationScope()}}function pd(e){const n=Si(e);return n.acs?n.acs:yS()}function OS(){const e=ci();return pd(e).getCurrentScope()}function bS(...e){const n=ci(),t=pd(n);if(e.length===2){const[r,a]=e;return r?t.withSetScope(r,a):t.withScope(a)}return t.withScope(e[0])}function LS(e,n){return OS().captureException(e,void 0)}const hS="_pageContainer_b1mme_1",MS={pageContainer:hS},Dd={"GenericErrorPage.Header":"Noe gikk galt","NotFoundPage.Header":"Beklager, vi finner ikke siden du leter etter.","NotFoundPage.LinkText":"Gå til forsiden","UnauthorizedPage.Header":"Du må logge inn for å få tilgang til systemet","UnauthorizedPage.LinkText":"Gå til innloggingssiden","ForbiddenPage.Header":"Du har ikke tilgang til å slå opp denne personen","ForbiddenPage.LinkText":"Gå til forsiden","ErrorPage.Header":"Det har oppstått en teknisk feil i denne behandlingen. {br}Meld feilen i Porten. Ta med feilmeldingsteksten.","IngenBehandlingValgtPanel.ZeroBehandlinger":"Ingen behandlinger er opprettet","IngenBehandlingValgtPanel.PleaseSelectBehandling":"Velg behandling"},PS=Jn(Dd),Ad=({children:e,titleCode:n="GenericErrorPage.Header"})=>N.jsx(Fl,{value:PS,children:N.jsxs("div",{className:MS.pageContainer,children:[N.jsx(Yr,{size:"large",level:"3",children:N.jsx(H,{id:n,values:{br:N.jsx("br",{})}})}),N.jsx("br",{}),e]})});Ad.__docgenInfo={description:`FeilsideContainer

Presentasjonskomponent. Denne komponenten vises når den Nav-ansatte prøver å aksessere en url som ikke finnes.
Det blir presentert en generell feilmelding og en lenke som tar Nav-ansatt tilbake til hovedsiden.`,methods:[],displayName:"ErrorPageWrapper",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},titleCode:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'GenericErrorPage.Header'",computed:!1}}}};const kd=()=>N.jsx(Ad,{titleCode:"ErrorPage.Header",children:N.jsx("br",{})});kd.__docgenInfo={description:"",methods:[],displayName:"ErrorPage"};Jn(Dd);class KS extends v.Component{static defaultProps={showChild:!1};constructor(n){super(n),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n,t){const{errorMessageCallback:r}=this.props;bS(l=>{for(const i of Object.entries(t))l.setExtra(i[0],i[1]),LS(n)});const a=t.componentStack?[n.toString(),t.componentStack.split(`
`).map(l=>l.trim()).find(l=>!!l)].join(" "):n.toString();r({type:go.GENERAL_ERROR,message:a}),console.error(n)}render(){const{children:n,showChild:t,errorMessage:r}=this.props,{hasError:a}=this.state;return a?r?N.jsx(Jr,{size:"small",style:{margin:"20px"},children:r}):N.jsxs(N.Fragment,{children:[t&&N.jsx("div",{style:{marginTop:"150px"},children:n}),N.jsx(kd,{})]}):n}}KS.__docgenInfo={description:"",methods:[],displayName:"ErrorBoundary",props:{errorMessageCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(error: FpError) => void",signature:{arguments:[{type:{name:"union",raw:`| GeneralError
| PollingTimeoutError
| RequestForbiddenError
| RequestUnauthorizedError
| RequestGatewayTimeoutOrNotFoundError
| PollingHaltedError
| PollingDelayedError`,elements:[{name:"signature",type:"object",raw:`{
  type: ErrorType.GENERAL_ERROR;
  message: string;
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.GENERAL_ERROR",required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: ErrorType.POLLING_TIMEOUT;
  message: string;
  location: string;
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.POLLING_TIMEOUT",required:!0}},{key:"message",value:{name:"string",required:!0}},{key:"location",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: ErrorType.REQUEST_FORBIDDEN;
  message: string;
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.REQUEST_FORBIDDEN",required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: ErrorType.REQUEST_UNAUTHORIZED;
  message: string;
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.REQUEST_UNAUTHORIZED",required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: ErrorType.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND;
  location: string;
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND",required:!0}},{key:"location",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: ErrorType.POLLING_HALTED_OR_DELAYED;
  status: 'HALTED';
  message: string;
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.POLLING_HALTED_OR_DELAYED",required:!0}},{key:"status",value:{name:"literal",value:"'HALTED'",required:!0}},{key:"message",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:`{
  type: ErrorType.POLLING_HALTED_OR_DELAYED;
  status: 'DELAYED';
  message: string;
  eta: string;
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.POLLING_HALTED_OR_DELAYED",required:!0}},{key:"status",value:{name:"literal",value:"'DELAYED'",required:!0}},{key:"message",value:{name:"string",required:!0}},{key:"eta",value:{name:"string",required:!0}}]}}]},name:"error"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},showChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const GS="_inline_glms2_1",BS="_docIcon_glms2_9",FS="_phoneIcon_glms2_14",gl={inline:GS,docIcon:BS,phoneIcon:FS},vt=({saksnummer:e,arbeidsforhold:n,inntektsmelding:t,skalViseArbeidsforholdId:r,alleKodeverk:a,ikkeVisInfo:l,radData:i})=>N.jsxs(N.Fragment,{children:[N.jsxs(be,{gap:"space-16",children:[!l&&N.jsxs(ce,{gap:"space-16",children:[N.jsx(Re,{size:"small",children:N.jsx(H,{id:i.erPrivatPerson?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),N.jsx(ne,{size:"small",children:i.erPrivatPerson?N.jsx(Oa,{dateString:i.arbeidsgiverFødselsdato}):i.arbeidsgiverIdent})]}),r&&N.jsxs(ce,{gap:"space-16",children:[N.jsx(Re,{size:"small",children:N.jsx(H,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),N.jsx(ne,{size:"small",children:t.eksternArbeidsforholdId})]}),n&&N.jsxs(N.Fragment,{children:[N.jsxs(ce,{gap:"space-16",children:[N.jsx(Re,{size:"small",children:N.jsx(H,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),N.jsx(ne,{size:"small",children:`${n.stillingsprosent}%`})]}),n.permisjonOgMangel&&N.jsxs(ce,{gap:"space-16",children:[N.jsx(Re,{size:"small",children:a.PermisjonsbeskrivelseType.find(s=>s.kode===n.permisjonOgMangel?.type)?.navn??""}),N.jsx(ne,{size:"small",children:N.jsx(ut,{dateStringFom:n.permisjonOgMangel.permisjonFom,dateStringTom:n.permisjonOgMangel.permisjonTom})})]})]}),N.jsxs(ce,{gap:"space-16",children:[N.jsx(Re,{size:"small",children:N.jsx(H,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),N.jsx(ne,{size:"small",children:N.jsx(Ll,{beløp:t.inntektPrMnd})})]}),N.jsxs(ce,{gap:"space-16",children:[N.jsx(Re,{size:"small",children:N.jsx(H,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),N.jsx(ne,{size:"small",children:N.jsx(H,{id:t.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),t.refusjonPrMnd!==void 0&&N.jsxs(ce,{gap:"space-16",children:[N.jsx(Re,{size:"small",children:N.jsx(H,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),N.jsx(ne,{size:"small",children:N.jsx(Ll,{beløp:t.refusjonPrMnd})})]}),N.jsxs(Id,{saksnummer:e,journalpostId:t.journalpostId,dokumentId:t.dokumentId,children:[N.jsx(ne,{size:"small",className:gl.inline,children:N.jsx(H,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})}),N.jsx(fE,{className:gl.docIcon})]})]}),N.jsxs(ce,{gap:"space-16",children:[N.jsx(LE,{className:gl.phoneIcon}),N.jsxs(be,{gap:"space-4",children:[N.jsx(Re,{size:"small",children:N.jsx(H,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),N.jsx(Kr,{children:t.kontaktpersonNavn}),N.jsx(Kr,{children:N.jsx(H,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:t.kontaktpersonNummer}})})]})]})]});vt.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}},description:""},inntektsmelding:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}},description:""},skalViseArbeidsforholdId:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
  Inntektskategori: Inntektskategori;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"BehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingÅrsakType",value:{name:"union",raw:`| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"FagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
| 'FBARN'
| 'VOKSEN'
| 'ADVOKAT'
| 'ANNEN_F'`,elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}},{key:"Inntektskategori",value:{name:"Inntektskategori",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"union",raw:"VilkarType | '-'",elements:[{name:"VilkarType"},{name:"literal",value:"'-'"}]},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType | '-', KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const wS="_inline_p47ci_1",VS="_aksjonpunktImage_p47ci_5",jS="_arrow_p47ci_12",qS="_ikkeMottatt_p47ci_18",US="_skiller_p47ci_30",ir={inline:wS,aksjonpunktImage:VS,arrow:jS,ikkeMottatt:qS,skiller:US},ki=({saksnummer:e,alleKodeverk:n,radData:t})=>{const r=rr(),[a,l]=v.useState({}),{arbeidsforholdForRad:i,inntektsmeldingerForRad:s,arbeidsgiverIdent:o,erPrivatPerson:d}=t,u=i.length===1,E=Wc(s,i);return N.jsxs(be,{gap:"space-16",children:[N.jsxs(ce,{gap:"space-16",children:[N.jsx(Re,{size:"small",children:N.jsx(H,{id:d?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),N.jsx(ne,{size:"small",children:d?N.jsx(Oa,{dateString:t.arbeidsgiverFødselsdato}):o})]}),!u&&N.jsxs(N.Fragment,{children:[N.jsx(xs,{dividerParagraf:!0,className:ir.skiller}),E.map(({arbeidsforhold:_,inntektsmelding:T})=>N.jsxs(m.Fragment,{children:[N.jsxs(be,{gap:"space-8",children:[N.jsxs(ce,{gap:"space-16",children:[N.jsx(Re,{size:"small",children:N.jsx(H,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),N.jsxs("div",{children:[_.eksternArbeidsforholdId&&_.eksternArbeidsforholdId.length<50&&N.jsx("div",{children:N.jsx(ne,{size:"small",children:_.eksternArbeidsforholdId})}),_.eksternArbeidsforholdId&&_.eksternArbeidsforholdId.length>=50&&N.jsx(ed,{content:xS(_.eksternArbeidsforholdId),children:N.jsx(ne,{size:"small",children:`${_.eksternArbeidsforholdId.substring(0,50)}...`})}),!_.eksternArbeidsforholdId&&N.jsx(ne,{size:"small",children:"-"})]}),T&&N.jsxs(N.Fragment,{children:[N.jsx(Lr,{}),N.jsx(Re,{size:"small",children:N.jsx(H,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!T&&N.jsxs(N.Fragment,{children:[N.jsx(Lr,{}),N.jsxs("div",{children:[N.jsx(xl,{className:ir.aksjonpunktImage,title:r.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),N.jsx("div",{className:ir.ikkeMottatt,children:N.jsx(Re,{size:"small",children:N.jsx(H,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),N.jsxs(ce,{gap:"space-16",children:[N.jsx(Re,{size:"small",children:N.jsx(H,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),N.jsx(ne,{size:"small",children:N.jsx(ut,{dateStringFom:_.fom,dateStringTom:_.tom})}),T&&N.jsxs(N.Fragment,{children:[N.jsx(Lr,{}),N.jsx(ne,{size:"small",children:N.jsx(Oa,{dateString:T.motattDato})})]})]}),N.jsxs(ce,{gap:"space-16",children:[N.jsx(Re,{size:"small",children:N.jsx(H,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),N.jsx(ne,{size:"small",children:`${_.stillingsprosent}%`})]}),_.permisjonOgMangel&&N.jsxs(ce,{gap:"space-16",children:[N.jsx(Re,{size:"small",children:n.PermisjonsbeskrivelseType.find(g=>g.kode===_.permisjonOgMangel?.type)?.navn??""}),N.jsx(ne,{size:"small",children:N.jsx(ut,{dateStringFom:_.permisjonOgMangel.permisjonFom,dateStringTom:_.permisjonOgMangel.permisjonTom})})]}),T&&N.jsxs(N.Fragment,{children:[_.internArbeidsforholdId&&a[_.internArbeidsforholdId]&&N.jsx(vt,{saksnummer:e,inntektsmelding:T,skalViseArbeidsforholdId:!1,radData:t,alleKodeverk:n}),N.jsxs(ui,{onClick:g=>{g.preventDefault(),l(R=>{if(!_.internArbeidsforholdId)return R;const f=R[_.internArbeidsforholdId];return{...R,[_.internArbeidsforholdId]:f===void 0||f===!1}})},href:"",children:[N.jsx("span",{children:N.jsx(ne,{size:"small",className:ir.inline,children:N.jsx(H,{id:!_.internArbeidsforholdId||!a[_.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),_.internArbeidsforholdId&&a[_.internArbeidsforholdId]?N.jsx(fo,{className:ir.arrow}):N.jsx(It,{className:ir.arrow})]})]})]}),N.jsx(xs,{dividerParagraf:!0,className:ir.skiller})]},`${_.arbeidsgiverIdent}${_.internArbeidsforholdId}`))]}),u&&E.length>0&&E[0].inntektsmelding&&N.jsx(vt,{saksnummer:e,radData:t,arbeidsforhold:i[0],inntektsmelding:E[0].inntektsmelding,skalViseArbeidsforholdId:s.length>1,alleKodeverk:n,ikkeVisInfo:!0}),u&&s.length===0&&N.jsxs(N.Fragment,{children:[N.jsxs(ce,{gap:"space-16",children:[N.jsx(Re,{size:"small",children:N.jsx(H,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),N.jsx(ne,{size:"small",children:`${i[0].stillingsprosent}%`})]}),i[0].permisjonOgMangel&&N.jsxs(ce,{gap:"space-16",children:[N.jsx(Re,{size:"small",children:n.PermisjonsbeskrivelseType.find(_=>_.kode===i[0].permisjonOgMangel?.type)?.navn??""}),N.jsx(ne,{size:"small",children:N.jsx(ut,{dateStringFom:i[0].permisjonOgMangel.permisjonFom,dateStringTom:i[0].permisjonOgMangel.permisjonTom})})]})]})]})},xS=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(r,a)=>e.slice(a*25,a*25+25)).join("-")};ki.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
  Inntektskategori: Inntektskategori;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"BehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingÅrsakType",value:{name:"union",raw:`| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"FagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
| 'FBARN'
| 'VOKSEN'
| 'ADVOKAT'
| 'ANNEN_F'`,elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}},{key:"Inntektskategori",value:{name:"Inntektskategori",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"union",raw:"VilkarType | '-'",elements:[{name:"VilkarType"},{name:"literal",value:"'-'"}]},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType | '-', KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const HS="_bredde_gb3eb_1",JS="_inline_gb3eb_9",YS="_arrow_gb3eb_13",qt={bredde:HS,inline:JS,arrow:YS},Kl=({saksnummer:e,skjæringstidspunkt:n,alleKodeverk:t,radData:r})=>{const[a,l]=v.useState(!1),{inntektsposter:i,arbeidsforholdForRad:s}=r,o=CS(n,i),d=s.length===1,u=i.length>0&&i.some(E=>E.beløp>0);return N.jsxs(be,{gap:"space-32",children:[N.jsx(ki,{saksnummer:e,alleKodeverk:t,radData:r}),u&&N.jsxs(be,{gap:"space-8",children:[N.jsx(Re,{size:"small",children:N.jsx(H,{id:d?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),N.jsx(be,{gap:"space-4",children:o.filter((E,_)=>a?!0:_<3).map(E=>N.jsxs(ce,{gap:"space-8",className:qt.bredde,children:[N.jsx(ne,{size:"small",children:N.jsx(H,{id:`ArbeidsforholdInformasjonPanel.${ze(E.fom).month()+1}`})}),N.jsx(ne,{size:"small",children:ze(E.fom).year()}),N.jsx(Lr,{}),N.jsx(ne,{size:"small",children:N.jsx(Ll,{beløp:E.beløp})})]},E.fom))}),N.jsxs(ui,{onClick:E=>{E.preventDefault(),l(!a)},href:"",children:[N.jsx("span",{children:N.jsx(ne,{size:"small",className:qt.inline,children:N.jsx(H,{id:a?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),a?N.jsx(fo,{className:qt.arrow}):N.jsx(It,{className:qt.arrow})]})]}),!u&&N.jsx(Re,{size:"small",children:N.jsx(H,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})})]})},CS=(e,n)=>{const r=ze(e).subtract(1,"month").startOf("month"),a=r.subtract(12,"month"),l=[];for(let i=r;i.isAfter(a);i=i.subtract(1,"month")){const s=i.format(Gn),o=n.find(d=>ze(d.fom).startOf("month").format(Gn)===s);l.push({beløp:o?.beløp||0,fom:s})}return l};Kl.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
  Inntektskategori: Inntektskategori;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"BehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingÅrsakType",value:{name:"union",raw:`| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"FagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
| 'FBARN'
| 'VOKSEN'
| 'ADVOKAT'
| 'ANNEN_F'`,elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}},{key:"Inntektskategori",value:{name:"Inntektskategori",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"union",raw:"VilkarType | '-'",elements:[{name:"VilkarType"},{name:"literal",value:"'-'"}]},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType | '-', KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const $S="_hjelpetekst_6zosx_1",WS="_alertStripe_6zosx_5",zS="_hjelpetekstInnhold_6zosx_9",XS="_svg_6zosx_14",Ut={hjelpetekst:$S,alertStripe:WS,hjelpetekstInnhold:zS,svg:XS},QS=wl(3),ZS=Vl(1500),ep=No(1),np=_o(100),yd=({behandlingUuid:e,behandlingVersjon:n,radData:t,isReadOnly:r,registrerArbeidsforhold:a,lagreVurdering:l,lukkArbeidsforholdRad:i,oppdaterTabell:s})=>{const o=rr(),d={saksbehandlersVurdering:t.avklaring?.saksbehandlersVurdering,begrunnelse:t.avklaring?.begrunnelse,fom:t.avklaring?.fom,tom:t.avklaring?.tom,stillingsprosent:t.avklaring?.stillingsprosent},u=xa({defaultValues:d});Ri(u.formState.isDirty);const E=u.watch("saksbehandlersVurdering"),_=()=>{i(),u.reset(d)},T=t.inntektsmeldingerForRad[0],g=I=>{const D=tp(s,t,T,I);return I.saksbehandlersVurdering===Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?a({behandlingUuid:e,behandlingVersjon:n,internArbeidsforholdRef:T.internArbeidsforholdId??void 0,arbeidsgiverNavn:t.arbeidsgiverNavn,arbeidsgiverIdent:T.arbeidsgiverIdent,vurdering:Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:I.begrunnelse??"",fom:I.fom??"",tom:I.tom,stillingsprosent:I.stillingsprosent??0}).then(D).finally(()=>u.reset(I)):l({behandlingUuid:e,behandlingVersjon:n,vurdering:I.saksbehandlersVurdering,begrunnelse:I.begrunnelse,arbeidsgiverIdent:T.arbeidsgiverIdent,internArbeidsforholdRef:T.internArbeidsforholdId??void 0}).then(D).finally(()=>u.reset(I))},R=v.useRef(null),[f,S]=v.useState(!1),c=()=>S(I=>!I);return N.jsxs(be,{gap:"space-32",children:[N.jsx("div",{className:Ut.alertStripe,children:N.jsx(pt,{variant:"info",children:N.jsx(H,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),N.jsx(Ja,{formMethods:u,onSubmit:g,children:N.jsxs(be,{gap:"space-16",children:[N.jsxs(_d,{name:"saksbehandlersVurdering",control:u.control,label:N.jsxs(ce,{gap:"space-8",children:[N.jsx(H,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),N.jsx(co,{className:Ut.svg,ref:R,onClick:c,title:o.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),N.jsx(wr,{open:f,onClose:c,anchorEl:R.current,className:Ut.hjelpetekst,children:N.jsx(wr.Content,{className:Ut.hjelpetekstInnhold,children:N.jsx(ne,{children:N.jsx(H,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[mn],isReadOnly:r,children:[N.jsx(hr,{value:Ee.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD,size:"small",children:N.jsx(H,{id:"ManglendeOpplysningerForm.TarKontakt"})}),N.jsx(hr,{value:Ee.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,size:"small",children:N.jsx(H,{id:"ManglendeOpplysningerForm.GåVidere"})}),N.jsx(hr,{value:Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,size:"small",children:N.jsx(H,{id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"})})]}),E===Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&N.jsxs(ce,{gap:"space-16",children:[N.jsx(Tt,{name:"fom",control:u.control,label:N.jsx(H,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[mn,mt],isReadOnly:r}),N.jsx(Tt,{name:"tom",control:u.control,label:N.jsx(H,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[mt,rp(u.getValues)],isReadOnly:r}),N.jsx(Ml,{name:"stillingsprosent",control:u.control,label:N.jsx(H,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:I=>{const D=Number.parseInt(I.toString(),10);return Number.isNaN(D)?I:D},validate:[mn,mo,ep,np],readOnly:r,maxLength:3})]}),N.jsx(Ii,{name:"begrunnelse",control:u.control,label:N.jsx(H,{id:"ManglendeOpplysningerForm.Begrunn"}),validate:[mn,QS,ZS,jl],maxLength:1500,readOnly:r}),!r&&N.jsxs(ce,{gap:"space-16",children:[N.jsx(Oe,{size:"small",variant:"secondary",loading:u.formState.isSubmitting,disabled:!u.formState.isDirty||u.formState.isSubmitting,children:N.jsx(H,{id:"ManglendeOpplysningerForm.Lagre"})}),N.jsx(Oe,{size:"small",variant:"tertiary",loading:!1,disabled:u.formState.isSubmitting,onClick:_,type:"button",children:N.jsx(H,{id:"ManglendeOpplysningerForm.Avbryt"})})]})]})})]})},rp=e=>n=>{const t=e("fom");return t&&n?To(t)(n):null},tp=(e,n,t,r)=>()=>{e(a=>a.map(l=>{if(t.arbeidsgiverIdent===l.arbeidsgiverIdent){const s=r.saksbehandlersVurdering===Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:t.arbeidsgiverIdent,fom:r.fom,tom:r.tom,stillingsprosent:r.stillingsprosent,begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering}:{begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering};return{...n,avklaring:s}}return l}))};yd.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn?: string;
  begrunnelse?: string;
  behandlingUuid: string;
  behandlingVersjon: number;
  fom: string;
  internArbeidsforholdRef?: string;
  stillingsprosent: number;
  tom?: string;
  vurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  behandlingUuid: string;
  behandlingVersjon: number;
  internArbeidsforholdRef?: string;
  vurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lukkArbeidsforholdRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const ap="_alertStripe_i1zil_1",lp="_hjelpetekst_i1zil_5",ip="_hjelpetekstInnhold_i1zil_9",sp="_svg_i1zil_14",xt={alertStripe:ap,hjelpetekst:lp,hjelpetekstInnhold:ip,svg:sp},op=wl(3),up=Vl(1500),Od=({behandlingUuid:e,behandlingVersjon:n,radData:t,isReadOnly:r,lagreVurdering:a,lukkArbeidsforholdRad:l,oppdaterTabell:i})=>{const s=rr(),{arbeidsforholdForRad:o,inntektsmeldingerForRad:d}=t,u={saksbehandlersVurdering:t.avklaring?.saksbehandlersVurdering,begrunnelse:t.avklaring?.begrunnelse},E=xa({defaultValues:u});Ri(E.formState.isDirty);const _=o.length===1,T=()=>{l(),E.reset(u)},g=I=>{const D={behandlingUuid:e,behandlingVersjon:n,vurdering:I.saksbehandlersVurdering??"-",arbeidsgiverIdent:t.arbeidsgiverIdent,internArbeidsforholdRef:_?o[0].internArbeidsforholdId??void 0:void 0,begrunnelse:I.begrunnelse??""};return a(D).then(dp(i,t,I)).finally(()=>E.reset(I))},R=v.useRef(null),[f,S]=v.useState(!1),c=()=>S(I=>!I);return N.jsx(Ja,{formMethods:E,onSubmit:g,children:N.jsxs(be,{gap:"space-16",children:[!_&&d.length>0&&N.jsx("div",{className:xt.alertStripe,children:N.jsx(pt,{variant:"info",children:N.jsx(H,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})})}),N.jsx(_d,{name:"saksbehandlersVurdering",control:E.control,label:N.jsxs(ce,{gap:"space-8",children:[N.jsx(H,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),N.jsx(co,{ref:R,onClick:c,className:xt.svg,title:s.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),N.jsx(wr,{open:f,onClose:c,anchorEl:R.current,className:xt.hjelpetekst,children:N.jsx(wr.Content,{className:xt.hjelpetekstInnhold,children:N.jsxs(be,{gap:"space-16",children:[N.jsx(ne,{children:N.jsx(H,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),N.jsx(ne,{children:N.jsx(H,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),N.jsx(ne,{children:N.jsx(H,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})})]}),validate:[mn],isReadOnly:r,children:N.jsxs(be,{gap:"space-2",children:[N.jsx(hr,{value:Ee.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,size:"small",children:N.jsx(H,{id:"InntektsmeldingInnhentesForm.TarKontakt"})}),!t.erPrivatPerson&&N.jsx(hr,{value:Ee.MELDING_TIL_ARBEIDSGIVER_NAV_NO,size:"small",children:N.jsx(H,{id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"})}),N.jsx(hr,{value:Ee.FORTSETT_UTEN_INNTEKTSMELDING,size:"small",children:N.jsx(H,{id:"InntektsmeldingInnhentesForm.GåVidere"})})]})}),N.jsx(Ii,{name:"begrunnelse",control:E.control,label:N.jsx(H,{id:_?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),validate:[mn,op,up,jl],maxLength:1500,readOnly:r}),!r&&N.jsxs(ce,{gap:"space-16",children:[N.jsx(Oe,{size:"small",variant:"secondary",loading:E.formState.isSubmitting,disabled:!E.formState.isDirty||E.formState.isSubmitting,children:N.jsx(H,{id:"InntektsmeldingInnhentesForm.Lagre"})}),N.jsx(Oe,{size:"small",variant:"tertiary",loading:!1,disabled:E.formState.isSubmitting,onClick:T,type:"button",children:N.jsx(H,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]})]})})},dp=(e,n,t)=>()=>{e(r=>r.map(a=>a.arbeidsgiverIdent===n.arbeidsgiverIdent?{...n,avklaring:{begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}}:a))};Od.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  behandlingUuid: string;
  behandlingVersjon: number;
  internArbeidsforholdRef?: string;
  vurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lukkArbeidsforholdRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const gt="342352362",Ep=wl(3),mp=Vl(1500),Np=No(1),_p=_o(100),yi=({behandlingUuid:e,behandlingVersjon:n,isReadOnly:t,registrerArbeidsforhold:r,radData:a,lukkArbeidsforholdRad:l,erOverstyrt:i,oppdaterTabell:s,erNyttArbeidsforhold:o=!1})=>{const d=rr(),[u,E]=v.useState(!1),_={fom:a?.avklaring?.fom,tom:a?.avklaring?.tom,stillingsprosent:a?.avklaring?.stillingsprosent,begrunnelse:a?.avklaring?.begrunnelse,arbeidsgiverNavn:a?.avklaring?.arbeidsgiverNavn},T=xa({defaultValues:_});Ri(T.formState.isDirty);const g=()=>{l(),T.reset(_)},R=S=>{const c=so(Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,e,n,S);return r(c).then(()=>{s(vp(S)),T.reset(S),o&&l()})},f=()=>{const S=T.getValues(),c=so(Ee.FJERN_FRA_BEHANDLINGEN,e,n,S);r(c).then(gp(s,l,o))};return N.jsxs(be,{gap:"space-16",children:[!a&&N.jsx(Yr,{size:"small",level:"3",children:N.jsx(H,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),N.jsx(Ja,{formMethods:T,onSubmit:R,children:N.jsxs(be,{gap:"space-24",children:[N.jsxs(ce,{gap:"space-16",children:[i&&N.jsxs(N.Fragment,{children:[N.jsx(Ml,{name:"arbeidsgiverNavn",control:T.control,label:N.jsx(H,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[mn],readOnly:t||!i}),N.jsx(Tt,{name:"fom",control:T.control,label:N.jsx(H,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[mn,mt],isReadOnly:t||!i}),N.jsx(Tt,{name:"tom",control:T.control,label:N.jsx(H,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[mt,Tp(T.getValues)],isReadOnly:t||!i})]}),N.jsx(Ml,{name:"stillingsprosent",control:T.control,label:N.jsx(H,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:S=>{const c=Number.parseInt(S.toString(),10);return Number.isNaN(c)?S:c},validate:[mn,mo,Np,_p],readOnly:t||!i,maxLength:3})]}),N.jsx(Ii,{name:"begrunnelse",control:T.control,label:N.jsx(H,{id:"LeggTilArbeidsforholdForm.Begrunn"}),validate:[mn,Ep,mp,jl],maxLength:1500,readOnly:t||!i}),i&&N.jsxs(ce,{gap:"space-16",children:[N.jsx(Oe,{size:"small",variant:"secondary",loading:T.formState.isSubmitting,disabled:!T.formState.isDirty||T.formState.isSubmitting,children:N.jsx(H,{id:"LeggTilArbeidsforholdForm.Lagre"})}),N.jsx(Oe,{size:"small",variant:"tertiary",loading:!1,disabled:T.formState.isSubmitting,onClick:g,type:"button",children:N.jsx(H,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),a&&N.jsxs(N.Fragment,{children:[N.jsx(Lr,{}),N.jsx(Oe,{size:"small",variant:"tertiary",loading:!1,disabled:T.formState.isSubmitting,onClick:()=>E(!0),type:"button",icon:N.jsx(VE,{"aria-hidden":!0}),children:N.jsx(H,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]})]})}),u&&N.jsx(uc,{text:d.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:f,cancel:()=>E(!1),showModal:!0})]})},so=(e,n,t,r)=>({vurdering:e,behandlingUuid:n,behandlingVersjon:t,arbeidsgiverIdent:gt,begrunnelse:r.begrunnelse??"",arbeidsgiverNavn:r.arbeidsgiverNavn??"",fom:r.fom??"",tom:r.tom,stillingsprosent:r.stillingsprosent??0}),Tp=e=>n=>{const t=e("fom");return n&&t?To(t)(n):null},vp=e=>n=>{const t={erPrivatPerson:!1,arbeidsgiverIdent:gt,arbeidsgiverNavn:e.arbeidsgiverNavn??"",avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER},inntektsmeldingerForRad:[],inntektsposter:[],arbeidsforholdForRad:[]},r=n.findIndex(a=>a.arbeidsgiverIdent===gt);return r===-1?n.concat(t):n.map((a,l)=>l===r?t:a)},gp=(e,n,t)=>()=>{e(r=>r.filter(a=>a.arbeidsgiverIdent!==gt)),t&&n()};yi.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn?: string;
  begrunnelse?: string;
  behandlingUuid: string;
  behandlingVersjon: number;
  fom: string;
  internArbeidsforholdRef?: string;
  stillingsprosent: number;
  tom?: string;
  vurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},radData:{required:!1,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ip="_exclamationmarkIcon_5sygz_1",fp="_checkmarkIcon_5sygz_8",Rp="_panelOpen_5sygz_15",cp="_panelOpenAp_5sygz_24",Sp="_row_5sygz_34",pp="_isOpen_5sygz_38",Dp="_isApOpen_5sygz_42",at={exclamationmarkIcon:Ip,checkmarkIcon:fp,panelOpen:Rp,panelOpenAp:cp,row:Sp,isOpen:pp,isApOpen:Dp},Ap=rS.bind(at),bd=({saksnummer:e,behandlingUuid:n,behandlingVersjon:t,radData:r,isReadOnly:a,erOverstyrt:l,oppdaterTabell:i,registrerArbeidsforhold:s,lagreVurdering:o,toggleÅpenRad:d,erRadÅpen:u,alleKodeverk:E,skjæringstidspunkt:_})=>{const T=rr(),{inntektsmeldingerForRad:g,arbeidsforholdForRad:R,arbeidsgiverNavn:f,avklaring:S,årsak:c}=r,I=S?.saksbehandlersVurdering===Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,D=R.length>0&&g.length>0&&!c,p=c===Ve.MANGLENDE_INNTEKTSMELDING,y=c===Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,b=!!c&&!S?.saksbehandlersVurdering,B=R.length>0&&g.length===0&&!c&&!I,h=R.length===0&&g.length>0&&!c,G=yp(R,S);return N.jsxs(De.ExpandableRow,{open:u,onOpenChange:d,expandOnRowClick:!0,togglePlacement:"right",contentGutter:"none",className:Ap("row",{isOpen:u,isApOpen:b}),content:N.jsxs(be,{gap:"space-16",className:b?at.panelOpenAp:at.panelOpen,children:[I&&N.jsx(yi,{behandlingUuid:n,behandlingVersjon:t,isReadOnly:!1,registrerArbeidsforhold:s,radData:r,lukkArbeidsforholdRad:d,erOverstyrt:l,oppdaterTabell:i}),D&&N.jsx(ki,{saksnummer:e,alleKodeverk:E,radData:r}),h&&N.jsx(vt,{saksnummer:e,arbeidsforhold:R.length>0?R[0]:void 0,inntektsmelding:g[0],skalViseArbeidsforholdId:!1,alleKodeverk:E,radData:r}),p&&N.jsxs(N.Fragment,{children:[N.jsx(Kl,{saksnummer:e,skjæringstidspunkt:_,alleKodeverk:E,radData:r}),N.jsx(Od,{behandlingUuid:n,behandlingVersjon:t,isReadOnly:a,radData:r,lagreVurdering:o,lukkArbeidsforholdRad:d,oppdaterTabell:i})]}),y&&N.jsxs(N.Fragment,{children:[N.jsx(vt,{saksnummer:e,inntektsmelding:g[0],skalViseArbeidsforholdId:g.length>1,radData:r,alleKodeverk:E}),N.jsx(yd,{behandlingUuid:n,behandlingVersjon:t,radData:r,isReadOnly:a,registrerArbeidsforhold:s,lagreVurdering:o,lukkArbeidsforholdRad:d,oppdaterTabell:i})]}),B&&N.jsx(Kl,{saksnummer:e,skjæringstidspunkt:_,alleKodeverk:E,radData:r})]}),children:[N.jsxs(De.DataCell,{children:[!b&&N.jsx(mE,{title:T.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:at.checkmarkIcon}),b&&N.jsx(xl,{title:T.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:at.exclamationmarkIcon})]}),N.jsx(De.DataCell,{children:N.jsx(ne,{children:f})}),N.jsx(De.DataCell,{children:N.jsx(ne,{children:G?.fom?N.jsx(ut,{dateStringFom:G.fom,dateStringTom:G.tom}):"-"})}),N.jsx(De.DataCell,{children:N.jsx(ne,{children:N.jsx(H,{id:kp(I,R.length>0)})})}),N.jsx(De.DataCell,{children:N.jsxs(ne,{children:[R.length<2&&g.length===1&&N.jsx(Oa,{dateString:g[0].motattDato}),!p&&R.length>1&&g.length===R.length&&N.jsx(H,{id:"ArbeidsforholdRad.Mottatt"}),(I||p&&g.length<R.length)&&N.jsx(H,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})},kp=(e,n)=>e?"ArbeidsforholdRad.Saksbehandler":n?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",yp=(e,n)=>{if(n?.saksbehandlersVurdering===Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||n?.saksbehandlersVurdering===Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:n.fom,tom:n.tom};const t=e.reduce((r,a)=>({fom:r.fom&&ze(r.fom).isBefore(a.fom)?r.fom:a.fom,tom:r.tom&&ze(r.tom).isAfter(a.tom)?r.tom:a.tom}),{fom:void 0,tom:void 0});return t.fom?t:void 0};bd.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn?: string;
  begrunnelse?: string;
  behandlingUuid: string;
  behandlingVersjon: number;
  fom: string;
  internArbeidsforholdRef?: string;
  stillingsprosent: number;
  tom?: string;
  vurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  behandlingUuid: string;
  behandlingVersjon: number;
  internArbeidsforholdRef?: string;
  vurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},toggleÅpenRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erRadÅpen:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
  Inntektskategori: Inntektskategori;
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"BehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingÅrsakType",value:{name:"union",raw:`| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"FagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"union",raw:`| 'BESL'
| 'SBH'
| 'SOKER'
| 'ARBEIDSGIVER'
| 'VL'
| '-'`,elements:[{name:"literal",value:"'BESL'"},{name:"literal",value:"'SBH'"},{name:"literal",value:"'SOKER'"},{name:"literal",value:"'ARBEIDSGIVER'"},{name:"literal",value:"'VL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
| 'FBARN'
| 'VOKSEN'
| 'ADVOKAT'
| 'ANNEN_F'`,elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}},{key:"Inntektskategori",value:{name:"Inntektskategori",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"union",raw:"VilkarType | '-'",elements:[{name:"VilkarType"},{name:"literal",value:"'-'"}]},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"unknown",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn<'Avslagsårsak'>[]"}],raw:"Record<VilkarType | '-', KodeverkMedNavn<'Avslagsårsak'>[]>",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"Array",elements:[{name:"intersection",raw:`KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const Op="_alertStripe_mucgx_5",bp={alertStripe:Op},Ld=({behandling:e,aksjonspunkt:n,readOnly:t,arbeidOgInntekt:r,registrerArbeidsforhold:a,erOverstyrer:l,tabellData:i,settÅpneRadIndexer:s,setErOverstyrt:o,oppdaterTabell:d})=>{const u=rr(),{arbeidsforhold:E,inntektsmeldinger:_}=r,[T,g]=v.useState(!1),[R,f]=v.useState(!1),S=()=>{o(!0),g(!0);const p=i.findIndex(y=>y.avklaring?.saksbehandlersVurdering===Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER);p!==-1&&s([p])},c=Lp(i,n),I=i.every(p=>p.arbeidsgiverIdent!==gt),D=n?.status===Ce.OPPRETTET;return N.jsxs(be,{gap:"space-32",children:[N.jsxs(ce,{gap:"space-16",children:[N.jsx(Yr,{size:"small",level:"3",children:N.jsx(H,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),l&&D&&!t&&N.jsx(QR,{onClick:S}),N.jsx(Lr,{}),N.jsx(ne,{size:"small",children:N.jsx(H,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Eo(r.skjæringstidspunkt)}})})]}),N.jsxs(be,{gap:"space-16",children:[c.length>0&&N.jsx(zR,{children:c.map(p=>u.formatMessage({id:p})).join(" ")}),E.length===0&&_.length===0&&l&&N.jsx("div",{className:bp.alertStripe,children:N.jsx(pt,{variant:"info",children:N.jsx(H,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),T&&I&&!R&&N.jsx("div",{children:N.jsx(Oe,{size:"small",variant:"tertiary",icon:N.jsx(ME,{"aria-hidden":!0}),onClick:()=>f(!0),children:N.jsx(H,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})})}),R&&N.jsx(yi,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:a,lukkArbeidsforholdRad:()=>f(!1),oppdaterTabell:d,erOverstyrt:!0,erNyttArbeidsforhold:!0})]})]})},Lp=(e,n)=>{const t=e.some(i=>i.årsak===Ve.MANGLENDE_INNTEKTSMELDING),r=e.some(i=>i.årsak===Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),a=n?.status===Ce.OPPRETTET,l=[];return a&&t&&l.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),a&&r&&l.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),l};Ld.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aksjonspunkt: Array<tjenester_behandling_aksjonspunkt_AksjonspunktDto>;
  alleUttaksperioderAvslått?: boolean;
  ansvarligBeslutter?: string;
  ansvarligSaksbehandler?: string;
  avsluttet?: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  behandlingHenlagt: boolean;
  behandlingKoet?: boolean;
  behandlingKøet: boolean;
  behandlingPaaVent?: boolean;
  behandlingPåVent: boolean;
  behandlingsfristTid?: string;
  behandlingsresultat?: tjenester_behandling_dto_behandling_BehandlingsresultatDto;
  behandlingÅrsaker: Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>;
  endret?: string;
  endretAvBrukernavn?: string;
  erAktivPapirsoknad: boolean;
  erPaaVent?: boolean;
  fagsakId?: number;
  fristBehandlingPaaVent?: string;
  fristBehandlingPåVent?: string;
  førsteÅrsak?: tjenester_behandling_dto_behandling_BehandlingÅrsakDto;
  gjeldendeVedtak: boolean;
  harRegisterdata?: boolean;
  harSattEndringsdato: boolean;
  harSøknad: boolean;
  id?: number;
  links: Array<rest_ResourceLink>;
  opprettet: string;
  originalVedtaksDato?: string;
  sjekkSimuleringResultat?: boolean;
  sprakkode?: foreldrepenger_behandlingslager_geografisk_Språkkode;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  taskStatus?: tjenester_behandling_dto_AsyncPollingStatus;
  toTrinnsBehandling: boolean;
  type: foreldrepenger_behandlingslager_behandling_BehandlingType;
  uuid: string;
  venteArsakKode?: string;
  venteÅrsakKode?: string;
  versjon: number;
  vilkår: Array<tjenester_behandling_vilkår_VilkårDto>;
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  begrunnelse?: string;
  besluttersBegrunnelse?: string;
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  endretAv?: string;
  endretTidspunkt?: string;
  erAktivt: boolean;
  fristTid?: string;
  kanLoses: boolean;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
}`,signature:{properties:[{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6019'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| 'UNDEFINED'
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5069'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:"'UNDEFINED'"},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]}}],raw:"Array<tjenester_behandling_aksjonspunkt_AksjonspunktDto>",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!1}},{key:"ansvarligBeslutter",value:{name:"string",required:!1}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingKoet",value:{name:"boolean",required:!1}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"behandlingPaaVent",value:{name:"boolean",required:!1}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"behandlingsfristTid",value:{name:"string",required:!1}},{key:"behandlingsresultat",value:{name:"signature",type:"object",raw:`{
  avslagsarsak?: foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak;
  avslagsarsakFritekst?: string;
  endretDekningsgrad?: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  fritekstbrev?: string;
  harRedigertVedtaksbrev: boolean;
  id: number;
  konsekvenserForYtelsen?: Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>;
  opphørsdato?: string;
  overskrift?: string;
  rettenTil?: foreldrepenger_behandlingslager_behandling_RettenTil;
  skjæringstidspunkt?: tjenester_behandling_dto_behandling_SkjæringstidspunktDto;
  type: foreldrepenger_behandlingslager_behandling_BehandlingResultatType;
  vedtaksbrev?: foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev;
  vedtaksbrevStatus: foreldrepenger_domene_vedtak_intern_VedtaksbrevStatus;
}`,signature:{properties:[{key:"avslagsarsak",value:{name:"union",raw:`| '1001'
| '1002'
| '1003'
| '1004'
| '1005'
| '1006'
| '1007'
| '1008'
| '1009'
| '1010'
| '1011'
| '1012'
| '1013'
| '1014'
| '1015'
| '1016'
| '1017'
| '1018'
| '1019'
| '1020'
| '1021'
| '1023'
| '1024'
| '1025'
| '1026'
| '1027'
| '1028'
| '1029'
| '1031'
| '1032'
| '1033'
| '1034'
| '1035'
| '1041'
| '1051'
| '1052'
| '1060'
| '1061'
| '1062'
| '1063'
| '1064'
| '1065'
| '1066'
| '1099'
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"endretDekningsgrad",value:{name:"boolean",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"id",value:{name:"number",required:!0}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}},{key:"overskrift",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"union",raw:"'HAR_RETT_TIL_FP' | 'HAR_IKKE_RETT_TIL_FP' | '-'",elements:[{name:"literal",value:"'HAR_RETT_TIL_FP'"},{name:"literal",value:"'HAR_IKKE_RETT_TIL_FP'"},{name:"literal",value:"'-'"}],required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato?: string;
  utenMinsterett?: boolean;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!1}},{key:"utenMinsterett",value:{name:"boolean",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'IKKE_FASTSATT'
| 'INNVILGET'
| 'AVSLÅTT'
| 'OPPHØR'
| 'HENLAGT_SØKNAD_TRUKKET'
| 'HENLAGT_FEILOPPRETTET'
| 'HENLAGT_BRUKER_DØD'
| 'MERGET_OG_HENLAGT'
| 'HENLAGT_SØKNAD_MANGLER'
| 'FORELDREPENGER_ENDRET'
| 'FORELDREPENGER_SENERE'
| 'INGEN_ENDRING'
| 'MANGLER_BEREGNINGSREGLER'
| 'KLAGE_AVVIST'
| 'KLAGE_MEDHOLD'
| 'KLAGE_DELVIS_MEDHOLD'
| 'KLAGE_OMGJORT_UGUNST'
| 'KLAGE_YTELSESVEDTAK_OPPHEVET'
| 'KLAGE_YTELSESVEDTAK_STADFESTET'
| 'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'
| 'HENLAGT_KLAGE_TRUKKET'
| 'HJEMSENDE_UTEN_OPPHEVE'
| 'ANKE_AVVIST'
| 'ANKE_MEDHOLD'
| 'ANKE_DELVIS_MEDHOLD'
| 'ANKE_OMGJORT_UGUNST'
| 'ANKE_OPPHEVE_OG_HJEMSENDE'
| 'ANKE_HJEMSENDE_UTEN_OPPHEV'
| 'ANKE_YTELSESVEDTAK_STADFESTET'
| 'HENLAGT_ANKE_TRUKKET'
| 'INNSYN_INNVILGET'
| 'INNSYN_DELVIS_INNVILGET'
| 'INNSYN_AVVIST'
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"vedtaksbrev",value:{name:"union",raw:"'AUTOMATISK' | 'FRITEKST' | 'INGEN' | '-'",elements:[{name:"literal",value:"'AUTOMATISK'"},{name:"literal",value:"'FRITEKST'"},{name:"literal",value:"'INGEN'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]},required:!1}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  erAutomatiskRevurdering: boolean;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"union",raw:`| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]},required:!1}],raw:"Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>",required:!0}},{key:"endret",value:{name:"string",required:!1}},{key:"endretAvBrukernavn",value:{name:"string",required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"erPaaVent",value:{name:"boolean",required:!1}},{key:"fagsakId",value:{name:"number",required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  erAutomatiskRevurdering: boolean;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"behandlingArsakType",value:{name:"union",raw:`| 'RE-LOV'
| 'RE-RGLF'
| 'RE-FEFAKTA'
| 'RE-PRSSL'
| 'RE-ANNET'
| 'RE-MDL'
| 'RE-OPTJ'
| 'RE-FRDLING'
| 'RE-INNTK'
| 'RE-FØDSEL'
| 'RE-DØD'
| 'RE-SRTB'
| 'RE-FRIST'
| 'RE-BER-GRUN'
| 'RE-KLAG-U-INNTK'
| 'RE-KLAG-M-INNTK'
| 'ETTER_KLAGE'
| 'RE-MF'
| 'RE-MFIP'
| 'RE-AVAB'
| 'RE-END-FRA-BRUKER'
| 'RE-END-INNTEKTSMELD'
| 'BERØRT-BEHANDLING'
| 'REBEREGN-FERIEPENGER'
| 'RE-UTSATT-START'
| 'RE-SATS-REGULERING'
| 'ENDRE-DEKNINGSGRAD'
| 'INFOBREV_BEHANDLING'
| 'INFOBREV_OPPHOLD'
| 'INFOBREV_PÅMINNELSE'
| 'OPPHØR-NYTT-BARN'
| 'RE-HENDELSE-FØDSEL'
| 'RE-HENDELSE-DØD-F'
| 'RE-HENDELSE-DØD-B'
| 'RE-HENDELSE-DØDFØD'
| 'RE-HENDELSE-UTFLYTTING'
| 'RE-VEDTAK-PSB'
| 'FEIL_PRAKSIS_UTSETTELSE'
| 'FEIL_PRAKSIS_IVERKS_UTSET'
| 'FEIL_PRAKSIS_BG_AAP_KOMBI'
| 'KLAGE_TILBAKE'
| 'RE-YTELSE'
| 'RE-REGISTEROPPL'
| 'KØET-BEHANDLING'
| 'RE-TILST-YT-INNVIL'
| 'RE-TILST-YT-OPPH'
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]},required:!1}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"harRegisterdata",value:{name:"boolean",required:!1}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"id",value:{name:"number",required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"Array<rest_ResourceLink>",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"originalVedtaksDato",value:{name:"string",required:!1}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!1}},{key:"sprakkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  cancelUri?: string;
  eta?: string;
  location?: string;
  message: string;
  pending?: boolean;
  pollIntervalMillis?: number;
  readOnly?: boolean;
  status?: tjenester_behandling_dto_AsyncPollingStatus_Status;
}`,signature:{properties:[{key:"cancelUri",value:{name:"string",required:!1}},{key:"eta",value:{name:"string",required:!1}},{key:"location",value:{name:"string",required:!1}},{key:"message",value:{name:"string",required:!0}},{key:"pending",value:{name:"boolean",required:!1}},{key:"pollIntervalMillis",value:{name:"number",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"status",value:{name:"union",raw:`| 'PENDING'
| 'COMPLETE'
| 'DELAYED'
| 'CANCELLED'
| 'HALTED'`,elements:[{name:"literal",value:"'PENDING'"},{name:"literal",value:"'COMPLETE'"},{name:"literal",value:"'DELAYED'"},{name:"literal",value:"'CANCELLED'"},{name:"literal",value:"'HALTED'"}],required:!1}}]},required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"type",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"uuid",value:{name:"string",required:!0}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"venteÅrsakKode",value:{name:"string",required:!1}},{key:"versjon",value:{name:"number",required:!0}},{key:"vilkår",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  avslagKode?: string;
  evaluering?: string;
  input?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
}`,signature:{properties:[{key:"avslagKode",value:{name:"string",required:!1}},{key:"evaluering",value:{name:"string",required:!1}},{key:"input",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!0}}]}},description:""},aksjonspunkt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  begrunnelse?: string;
  besluttersBegrunnelse?: string;
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  endretAv?: string;
  endretTidspunkt?: string;
  erAktivt: boolean;
  fristTid?: string;
  kanLoses: boolean;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
}`,signature:{properties:[{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"definisjon",value:{name:"union",raw:`| '5001'
| '5027'
| '5004'
| '5005'
| '5006'
| '5007'
| '5008'
| '5011'
| '5012'
| '5013'
| '5014'
| '5015'
| '5016'
| '5017'
| '5002'
| '5026'
| '5028'
| '5030'
| '5031'
| '5033'
| '5034'
| '5003'
| '5035'
| '5037'
| '5038'
| '5039'
| '5040'
| '5043'
| '5046'
| '5047'
| '5049'
| '5051'
| '5052'
| '5054'
| '5055'
| '5057'
| '5058'
| '5059'
| '5060'
| '5061'
| '5068'
| '5064'
| '5065'
| '5063'
| '5066'
| '5071'
| '5072'
| '5073'
| '5076'
| '5077'
| '5085'
| '5082'
| '5084'
| '5029'
| '5086'
| '5089'
| '5041'
| '5062'
| '5091'
| '5092'
| '5095'
| '5096'
| '5074'
| '5101'
| '5102'
| '5103'
| '6002'
| '6003'
| '6004'
| '6005'
| '6006'
| '6008'
| '6009'
| '6010'
| '6011'
| '6065'
| '6014'
| '6015'
| '6045'
| '6016'
| '6018'
| '6019'
| '6017'
| '6103'
| '7001'
| '7002'
| '7003'
| '7005'
| '7007'
| '7008'
| '7011'
| '7013'
| '7014'
| '7020'
| '7030'
| '7033'
| '7037'
| '7039'
| '7040'
| 'UNDEFINED'
| '5009'
| '5019'
| '5020'
| '5021'
| '5022'
| '5023'
| '5024'
| '5025'
| '5032'
| '5036'
| '5042'
| '5044'
| '5045'
| '5048'
| '5050'
| '5053'
| '5056'
| '5067'
| '5069'
| '5070'
| '5075'
| '5078'
| '5079'
| '5080'
| '5081'
| '5083'
| '5087'
| '5088'
| '5090'
| '5093'
| '5094'
| '5097'
| '5098'
| '5099'
| '6007'
| '6012'
| '6013'
| '6068'
| '6070'
| '7004'
| '7006'
| '7009'
| '7015'
| '7016'
| '7017'
| '7018'
| '7019'
| '7021'
| '7022'
| '7023'
| '7024'
| '7025'
| '7026'
| '7027'
| '7028'
| '7029'
| '7032'
| '7034'
| '7035'
| '7036'
| '7038'
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:"'UNDEFINED'"},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
| 'FP_VK_11'
| 'FP_VK_16'
| 'FP_VK_2'
| 'FP_VK_2_F'
| 'FP_VK_2_L'
| 'FP_VK_3'
| 'FP_VK_4'
| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| 'FP_VK_34'
| 'FP_VK_21'
| 'FP_VK_23'
| 'FP_VK_41'
| 'SVP_VK_1'
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  arbeidsforhold: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>;
  inntekter: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>;
  inntektsmeldinger: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>;
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter?: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektspostDto>;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektspostDto>",required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>",required:!0}},{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn?: string;
  begrunnelse?: string;
  behandlingUuid: string;
  behandlingVersjon: number;
  fom: string;
  internArbeidsforholdRef?: string;
  stillingsprosent: number;
  tom?: string;
  vurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},tabellData:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"inntektsmeldingerForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Inntektspost[]",required:!0}},{key:"årsak",value:{name:"string",required:!1}},{key:"avklaring",value:{name:"signature",type:"object",raw:`{
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverNavn?: string;
  fom?: string;
  tom?: string;
  stillingsprosent?: number;
}`,signature:{properties:[{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}}]},required:!1}}]}},{name:"union",raw:`| {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const hp="_alertStripe_x50kg_1",Mp="_headerRow_x50kg_5",oo={alertStripe:hp,headerRow:Mp},hd=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:t,lagreVurdering:r,erOverstyrer:a,settBehandlingPåVentCallback:l,åpneForNyVurdering:i})=>{const[s,o]=v.useState(!1),[d,u]=v.useState(!1),[E,_]=v.useState(!1),{alleKodeverk:T,submitCallback:g,aksjonspunkterForPanel:R,behandling:f,fagsak:S,isReadOnly:c}=jd(),I=R.length>0?R[0]:void 0,{mellomlagretFormData:D,setMellomlagretFormData:p}=qd(),[y,b]=v.useState(D??Zc(e,n)),[B,h]=v.useState(Zs(y)),G=Jc();v.useEffect(()=>()=>{p(y)},[y]);const V=J=>{B.some(re=>re===J)?h(B.filter(re=>re!==J)):h(B.concat(J))},P=v.useRef(null),k=J=>{b(J),h(Zs(J(y))),P.current?.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},L=()=>{o(!0),g({kode:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},K=()=>{o(!0),i()},j=J=>{o(!0),u(!1);const{frist:re,ventearsak:te}=J;te&&l({frist:re,ventearsak:te})},q=y.some(J=>J.avklaring?.saksbehandlersVurdering===Ee.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||J.avklaring?.saksbehandlersVurdering===Ee.MELDING_TIL_ARBEIDSGIVER_NAV_NO||J.avklaring?.saksbehandlersVurdering===Ee.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD),w=y.every(J=>!J.årsak||J.årsak&&J.avklaring),F=I===void 0,Y=I?.status===Ce.UTFORT,z=I?.status===Ce.OPPRETTET,ae=!c&&(Y||a&&F),Fe=!c&&z&&w&&!G&&q,Z=!c&&z&&w&&!G&&!q;return N.jsxs(be,{gap:"space-16",children:[N.jsx(Ld,{behandling:f,aksjonspunkt:I,readOnly:c,arbeidOgInntekt:e,registrerArbeidsforhold:t,erOverstyrer:a,tabellData:y,settÅpneRadIndexer:h,setErOverstyrt:_,oppdaterTabell:k}),N.jsxs(De,{ref:P,children:[N.jsx(De.Header,{children:N.jsxs(De.Row,{className:oo.headerRow,children:[N.jsx(De.HeaderCell,{scope:"col"}),N.jsx(De.HeaderCell,{scope:"col",children:N.jsx(H,{id:"ArbeidOgInntektFaktaPanel.Arbeidsforhold"})}),N.jsx(De.HeaderCell,{scope:"col",children:N.jsx(H,{id:"ArbeidOgInntektFaktaPanel.Periode"})}),N.jsx(De.HeaderCell,{scope:"col",children:N.jsx(H,{id:"ArbeidOgInntektFaktaPanel.Kilde"})}),N.jsx(De.HeaderCell,{scope:"col",children:N.jsx(H,{id:"ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt"})}),N.jsx(De.HeaderCell,{scope:"col"})]})}),N.jsx(De.Body,{children:y.map((J,re)=>N.jsx(bd,{saksnummer:S.saksnummer,behandlingUuid:f.uuid,behandlingVersjon:f.versjon,radData:J,skjæringstidspunkt:e.skjæringstidspunkt,isReadOnly:c||Y||F,registrerArbeidsforhold:t,lagreVurdering:r,toggleÅpenRad:()=>V(re),erOverstyrt:E,oppdaterTabell:k,erRadÅpen:B.includes(re),alleKodeverk:T},`${J.arbeidsgiverNavn}${J.arbeidsgiverIdent}`))})]}),Fe&&N.jsxs("div",{children:[N.jsx(Oe,{size:"small",variant:"primary",disabled:s,onClick:()=>u(!0),type:"button",children:N.jsx(H,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),N.jsx(vd,{submitCallback:j,cancelEvent:()=>u(!1),defaultVenteårsak:$e.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:T.Venteårsak,erTilbakekreving:!1,showModal:d,frist:null})]}),Z&&N.jsx("div",{children:N.jsx(Oe,{size:"small",variant:"primary",disabled:s,loading:s,onClick:L,type:"button",children:N.jsx(H,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})})}),ae&&N.jsxs(be,{gap:"space-16",children:[N.jsx("div",{className:oo.alertStripe,children:N.jsx(pt,{variant:"info",children:N.jsx(H,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),N.jsx("div",{children:N.jsx(Oe,{size:"small",variant:"secondary",disabled:s,loading:s,onClick:K,type:"button",children:N.jsx(H,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})})]})]})};hd.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  arbeidsforhold: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>;
  inntekter: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>;
  inntektsmeldinger: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>;
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter?: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektspostDto>;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektspostDto>",required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>",required:!0}},{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn?: string;
  begrunnelse?: string;
  behandlingUuid: string;
  behandlingVersjon: number;
  fom: string;
  internArbeidsforholdRef?: string;
  stillingsprosent: number;
  tom?: string;
  vurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  behandlingUuid: string;
  behandlingVersjon: number;
  internArbeidsforholdRef?: string;
  vurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Pp={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?"},Kp=Jn(Pp),Gl=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:t,lagreVurdering:r,erOverstyrer:a,settBehandlingPåVentCallback:l,åpneForNyVurdering:i})=>N.jsx(Fl,{value:Kp,children:N.jsx(gd,{children:N.jsx(hd,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:t,lagreVurdering:r,erOverstyrer:a,settBehandlingPåVentCallback:l,åpneForNyVurdering:i})})});Gl.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  arbeidsforhold: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>;
  inntekter: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>;
  inntektsmeldinger: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>;
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  internArbeidsforholdId?: string;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  stillingsprosent?: number;
  tom: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'PERMISJON'
| 'UTDANNINGSPERMISJON'
| 'UTDANNINGSPERMISJON_IKKE_LOVFESTET'
| 'UTDANNINGSPERMISJON_LOVFESTET'
| 'VELFERDSPERMISJON'
| 'ANNEN_PERMISJON_IKKE_LOVFESTET'
| 'ANNEN_PERMISJON_LOVFESTET'
| 'PERMISJON_MED_FORELDREPENGER'
| 'PERMITTERING'
| 'PERMISJON_VED_MILITÆRTJENESTE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON'"},{name:"literal",value:"'UTDANNINGSPERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'UTDANNINGSPERMISJON_LOVFESTET'"},{name:"literal",value:"'VELFERDSPERMISJON'"},{name:"literal",value:"'ANNEN_PERMISJON_IKKE_LOVFESTET'"},{name:"literal",value:"'ANNEN_PERMISJON_LOVFESTET'"},{name:"literal",value:"'PERMISJON_MED_FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'PERMISJON_VED_MILITÆRTJENESTE'"}],required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]},required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"tom",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  inntekter?: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektspostDto>;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beløp: number;
  fom?: string;
  tom?: string;
  type?: foreldrepenger_domene_iay_modell_kodeverk_InntektspostType;
}`,signature:{properties:[{key:"beløp",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
| 'LØNN'
| 'YTELSE'
| 'VANLIG'
| 'SELVSTENDIG_NÆRINGSDRIVENDE'
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektspostDto>",required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>",required:!0}},{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  dokumentId: string;
  eksternArbeidsforholdId?: string;
  innsendingstidspunkt: string;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  inntektPrMnd: number;
  internArbeidsforholdId?: string;
  journalpostId: string;
  kildeSystem: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  motattDato: string;
  refusjonPrMnd?: number;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  startDatoPermisjon?: string;
  tilknyttedeBehandlingIder: Array<string>;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
}`,signature:{properties:[{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  indexKey?: string;
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
}`,signature:{properties:[{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}},{key:"indexKey",value:{name:"string",required:!1}},{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
| 'AKSJER_UNDERKURS'
| 'LOSJI'
| 'KOST_DOEGN'
| 'BESOEKSREISER_HJEM'
| 'KOSTBESPARELSE_HJEM'
| 'RENTEFORDEL_LAAN'
| 'BIL'
| 'KOST_DAGER'
| 'BOLIG'
| 'FORSIKRINGER'
| 'FRI_TRANSPORT'
| 'OPSJONER'
| 'TILSKUDD_BARNEHAGE'
| 'ANNET'
| 'BEDRIFTSBARNEHAGE'
| 'YRKESBIL_KILOMETER'
| 'YRKESBIL_LISTEPRIS'
| 'UTENLANDSK_PENSJONSORDNING'
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  indexKey?: string;
  verdi?: number;
}`,signature:{properties:[{key:"indexKey",value:{name:"string",required:!1}},{key:"verdi",value:{name:"number",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  arbeidsgiverNavn?: string;
  begrunnelse?: string;
  behandlingUuid: string;
  behandlingVersjon: number;
  fom: string;
  internArbeidsforholdRef?: string;
  stillingsprosent: number;
  tom?: string;
  vurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  begrunnelse?: string;
  behandlingUuid: string;
  behandlingVersjon: number;
  internArbeidsforholdRef?: string;
  vurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
| 'FORTSETT_UTEN_INNTEKTSMELDING'
| 'MELDING_TIL_ARBEIDSGIVER_NAV_NO'
| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'
| 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'
| 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
| 'FJERN_FRA_BEHANDLINGEN'
| 'SLÅTT_SAMMEN_MED_ANNET'
| 'BRUK_MED_OVERSTYRT_PERIODE'
| 'INNTEKT_IKKE_MED_I_BG'
| 'BRUK'
| 'NYTT_ARBEIDSFORHOLD'
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:Ht}=__STORYBOOK_MODULE_ACTIONS__,Vn="342352362",Ze={innsendingstidspunkt:"2021-12-06T00:00:00",kildeSystem:"Altinn",bortfalteNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",behandlingsIdeer:[],tilknyttedeBehandlingIder:[],aktiveNaturalytelser:[]},Ke={arbeidsgiverIdent:Vn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31"},wp={title:"fakta/fakta-arbeid-og-inntekter",component:Gl,decorators:[Ud,xd],args:{arbeidsgiverOpplysningerPerId:{},lagreVurdering:Ht("onLagreVurdering"),registrerArbeidsforhold:Ht("onRegistrerArbeidsforhold"),åpneForNyVurdering:Ht("onÅpneForNyVurdering"),settBehandlingPåVentCallback:Ht("onSettBehandlingPåVentCallback"),erOverstyrer:!1},render:e=>N.jsx(Gl,{...e})},Jt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ve.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Pr.VELFERDSPERMISJON}}],inntektsmeldinger:[],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:41e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Yt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ve.MANGLENDE_INNTEKTSMELDING}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Ct={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:Ee.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,begrunnelse:"Vil innehente inntektsmelding fordi..."}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},$t={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[{...Ze,inntektPrMnd:3e4,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Wt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},zt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},Xt={args:{aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:"KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING"}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",journalpostId:"1",dokumentId:"2"}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},Qt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},Zt={args:{arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},ea={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{[Vn]:{erPrivatPerson:!1,identifikator:Vn,navn:"Telenor",referanse:Vn}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:Vn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},na={args:{arbeidsgiverOpplysningerPerId:{[Vn]:{erPrivatPerson:!1,identifikator:Vn,navn:"Telenor",referanse:Vn}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,...Ke,arbeidsgiverIdent:Vn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0,isReadOnly:!0}},ra={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Pr.VELFERDSPERMISJON}}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},ta={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31"},{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",fom:"2021-12-01",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",stillingsprosent:80,tom:"9999-12-31"}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",inntektPrMnd:1e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"41925090",motattDato:"2021-11-06",journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},aa={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"},910909092:{erPrivatPerson:!1,identifikator:"910909092",navn:"DNB",referanse:"910909092"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31"},{...Ke,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Ze,arbeidsgiverIdent:"910909092",inntektPrMnd:1e4,kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"55599999",motattDato:"2021-12-06",refusjonPrMnd:5e3,journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:31e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:3e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:3e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:3e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},la={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"9374546382674846453452720241327384837356378478393893847474783",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING},{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING}],inntektsmeldinger:[{...Ze,inntektPrMnd:3e4,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001sdsfdsdfsdfwer",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8cwds",kontaktpersonNavn:"Espen Solstråle",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"1",motattDato:"2021-12-01",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD},{...Ze,inntektPrMnd:3e4,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c8wew",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},ia={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",type:Pr.PERMITTERING}},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d3",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Pr.VELFERDSPERMISJON},saksbehandlersVurdering:"-"}],inntektsmeldinger:[{...Ze,inntektPrMnd:3e4,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},sa={args:{erOverstyrer:!0,isReadOnly:!0,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[{...Ze,inntektPrMnd:4e4,arbeidsgiverIdent:"947064649",kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975324",dokumentId:"549168225",motattDato:"2022-02-15"}],arbeidsforhold:[],inntekter:[],skjæringstidspunkt:"2022-02-16"}}},oa={args:{erOverstyrer:!1,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[],arbeidsforhold:[{...Ke,arbeidsgiverIdent:"947064649",internArbeidsforholdId:"f98840f3-e74b-4255-ac33-b1cdcdb60311",eksternArbeidsforholdId:"2",fom:"2002-02-16",tom:"9999-12-31",stillingsprosent:20}],inntekter:[],skjæringstidspunkt:"2022-02-05"}}},ua={args:{erOverstyrer:!1,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{342352362:{erPrivatPerson:!1,referanse:"342352362",identifikator:"342352362",navn:"Lagt til av saksbehandler"},947064649:{erPrivatPerson:!1,referanse:"947064649",identifikator:"947064649",navn:"SJOKKERENDE ELEKTRIKER"},972674818:{erPrivatPerson:!1,referanse:"972674818",identifikator:"972674818",navn:"PENGELØS SPAREBANK"}},arbeidOgInntekt:{inntektsmeldinger:[{...Ze,inntektPrMnd:2e4,arbeidsgiverIdent:"972674818",kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975527",dokumentId:"549168458",motattDato:"2022-02-16",begrunnelse:"her vil jeg mase på AG",saksbehandlersVurdering:Ee.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING}],arbeidsforhold:[{...Ke,arbeidsgiverIdent:"947064649",internArbeidsforholdId:"6e220db0-5cdf-410f-b8a0-a78ac4ff87a1",eksternArbeidsforholdId:"2",fom:"2018-10-01",tom:"9999-12-31",stillingsprosent:50,årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:Ee.FORTSETT_UTEN_INNTEKTSMELDING,begrunnelse:"her trenger jeg ikke IM. ja ja"},{...Ke,arbeidsgiverIdent:"972674818",internArbeidsforholdId:"3aee54db-af17-4b18-8c9c-897be1f4d572",eksternArbeidsforholdId:"1",fom:"2000-05-13",tom:"9999-12-31"}],inntekter:[{arbeidsgiverIdent:"947064649",inntekter:[{beløp:15e3,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]},{arbeidsgiverIdent:"972674818",inntekter:[{beløp:2e4,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]}],skjæringstidspunkt:"2022-02-15"}}},da={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!0,fødselsdato:"2000-01-01",identifikator:"910909088",navn:"Bettan",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Pr.VELFERDSPERMISJON}}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}};Jt.parameters={...Jt.parameters,docs:{...Jt.parameters?.docs,source:{originalSource:`{
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
        ...defaultArbeidsforhold,
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
        }
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
}`,...Jt.parameters?.docs?.source}}};Yt.parameters={...Yt.parameters,docs:{...Yt.parameters?.docs,source:{originalSource:`{
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
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '910909088',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        tom: '9999-12-31',
        stillingsprosent: 100,
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...Yt.parameters?.docs?.source}}};Ct.parameters={...Ct.parameters,docs:{...Ct.parameters?.docs,source:{originalSource:`{
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
        ...defaultArbeidsforhold,
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
    },
    isReadOnly: true
  }
}`,...Ct.parameters?.docs?.source}}};$t.parameters={...$t.parameters,docs:{...$t.parameters?.docs,source:{originalSource:`{
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
}`,...$t.parameters?.docs?.source}}};Wt.parameters={...Wt.parameters,docs:{...Wt.parameters?.docs,source:{originalSource:`{
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
        ...defaultArbeidsforhold,
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
        journalpostId: '1',
        dokumentId: '2',
        årsak: AksjonspunktÅrsak.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD
      }],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    isReadOnly: true
  }
}`,...Wt.parameters?.docs?.source}}};zt.parameters={...zt.parameters,docs:{...zt.parameters?.docs,source:{originalSource:`{
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
        ...defaultArbeidsforhold,
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
}`,...zt.parameters?.docs?.source}}};Xt.parameters={...Xt.parameters,docs:{...Xt.parameters?.docs,source:{originalSource:`{
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
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '910909088',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2021-10-06',
        tom: '2021-12-12',
        stillingsprosent: 100,
        saksbehandlersVurdering: 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
        journalpostId: '1',
        dokumentId: '2'
      }],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    isReadOnly: false,
    erOverstyrer: true
  }
}`,...Xt.parameters?.docs?.source}}};Qt.parameters={...Qt.parameters,docs:{...Qt.parameters?.docs,source:{originalSource:`{
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
}`,...Qt.parameters?.docs?.source}}};Zt.parameters={...Zt.parameters,docs:{...Zt.parameters?.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...Zt.parameters?.docs?.source}}};ea.parameters={...ea.parameters,docs:{...ea.parameters?.docs,source:{originalSource:`{
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
        ...defaultArbeidsforhold,
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
}`,...ea.parameters?.docs?.source}}};na.parameters={...na.parameters,docs:{...na.parameters?.docs,source:{originalSource:`{
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
        ...defaultArbeidsforhold,
        ...defaultArbeidsforhold,
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
}`,...na.parameters?.docs?.source}}};ra.parameters={...ra.parameters,docs:{...ra.parameters?.docs,source:{originalSource:`{
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
        ...defaultArbeidsforhold,
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
        }
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
}`,...ra.parameters?.docs?.source}}};ta.parameters={...ta.parameters,docs:{...ta.parameters?.docs,source:{originalSource:`{
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
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        stillingsprosent: 100,
        tom: '9999-12-31'
      }, {
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-002',
        fom: '2021-12-01',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa85',
        stillingsprosent: 80,
        tom: '9999-12-31'
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
}`,...ta.parameters?.docs?.source}}};aa.parameters={...aa.parameters,docs:{...aa.parameters?.docs,source:{originalSource:`{
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
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: 'ARB001-001',
        fom: '2019-12-06',
        internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
        stillingsprosent: 100,
        tom: '9999-12-31'
      }, {
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '910909090',
        eksternArbeidsforholdId: 'ARB001-002',
        fom: '2019-06-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
        stillingsprosent: 80,
        tom: '2021-12-31',
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING
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
        inntektPrMnd: 10000,
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
}`,...aa.parameters?.docs?.source}}};la.parameters={...la.parameters,docs:{...la.parameters?.docs,source:{originalSource:`{
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
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: '9374546382674846453452720241327384837356378478393893847474783',
        fom: '2019-12-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
        stillingsprosent: 100,
        tom: '9999-12-31',
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING
      }, {
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: '937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783',
        fom: '2019-06-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
        stillingsprosent: 80,
        tom: '2021-12-31',
        årsak: AksjonspunktÅrsak.MANGLENDE_INNTEKTSMELDING
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 30000,
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
}`,...la.parameters?.docs?.source}}};ia.parameters={...ia.parameters,docs:{...ia.parameters?.docs,source:{originalSource:`{
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
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: '2433453225',
        fom: '2019-06-06',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
        stillingsprosent: 80,
        tom: '2021-12-31',
        permisjonOgMangel: {
          permisjonFom: '2022-10-01',
          type: PermisjonsbeskrivelseType.PERMITTERING
        }
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
        saksbehandlersVurdering: '-'
      }],
      inntektsmeldinger: [{
        ...fellesInntektsmeldingFelter,
        inntektPrMnd: 30000,
        arbeidsgiverIdent: '910909088',
        eksternArbeidsforholdId: '2433453225',
        internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
        kontaktpersonNavn: 'Corpolarsen',
        kontaktpersonNummer: '41925090',
        journalpostId: '1',
        dokumentId: '2',
        motattDato: '2021-12-06'
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
}`,...ia.parameters?.docs?.source}}};sa.parameters={...sa.parameters,docs:{...sa.parameters?.docs,source:{originalSource:`{
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
        arbeidsgiverIdent: '947064649',
        kontaktpersonNavn: 'Dolly Dollesen',
        kontaktpersonNummer: '99999999',
        journalpostId: '524975324',
        dokumentId: '549168225',
        motattDato: '2022-02-15'
      }],
      arbeidsforhold: [],
      inntekter: [],
      skjæringstidspunkt: '2022-02-16'
    }
  }
}`,...sa.parameters?.docs?.source}}};oa.parameters={...oa.parameters,docs:{...oa.parameters?.docs,source:{originalSource:`{
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
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '947064649',
        internArbeidsforholdId: 'f98840f3-e74b-4255-ac33-b1cdcdb60311',
        eksternArbeidsforholdId: '2',
        fom: '2002-02-16',
        tom: '9999-12-31',
        stillingsprosent: 20.0
      }],
      inntekter: [],
      skjæringstidspunkt: '2022-02-05'
    }
  }
}`,...oa.parameters?.docs?.source}}};ua.parameters={...ua.parameters,docs:{...ua.parameters?.docs,source:{originalSource:`{
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
        arbeidsgiverIdent: '972674818',
        kontaktpersonNavn: 'Dolly Dollesen',
        kontaktpersonNummer: '99999999',
        journalpostId: '524975527',
        dokumentId: '549168458',
        motattDato: '2022-02-16',
        begrunnelse: 'her vil jeg mase på AG',
        saksbehandlersVurdering: ArbeidsforholdKomplettVurderingType.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING
      }],
      arbeidsforhold: [{
        ...defaultArbeidsforhold,
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
        ...defaultArbeidsforhold,
        arbeidsgiverIdent: '972674818',
        internArbeidsforholdId: '3aee54db-af17-4b18-8c9c-897be1f4d572',
        eksternArbeidsforholdId: '1',
        fom: '2000-05-13',
        tom: '9999-12-31'
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
}`,...ua.parameters?.docs?.source}}};da.parameters={...da.parameters,docs:{...da.parameters?.docs,source:{originalSource:`{
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
        ...defaultArbeidsforhold,
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
        }
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
}`,...da.parameters?.docs?.source}}};const Vp=["InnhentInntektsmelding","InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret","InnhentInntektsmeldingDerBehandlingErAvsluttet","AvklarManglendeArbeidsforhold","AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet","AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig","IngenAksjonspunktMenTilbakehoppMuligForOverstyrer","SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer","SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer","ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet","ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet","ArbeidsforholdErOK","ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet","FlereArbeidsforholdOgInntekstemeldinger","ArbeidsforholdMedSammeOrgNr","ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre","FoerRegisterinnhenting","AutomatiskIgnorertInntektsmelding","EtterAtEtterspurtInntektsmeldingErKommet","SkalViseFødselsnummerForPrivatperson"];export{na as ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet,ea as ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet,ra as ArbeidsforholdErOK,ta as ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet,la as ArbeidsforholdMedSammeOrgNr,ia as ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre,oa as AutomatiskIgnorertInntektsmelding,$t as AvklarManglendeArbeidsforhold,Wt as AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet,zt as AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig,ua as EtterAtEtterspurtInntektsmeldingErKommet,aa as FlereArbeidsforholdOgInntekstemeldinger,sa as FoerRegisterinnhenting,Xt as IngenAksjonspunktMenTilbakehoppMuligForOverstyrer,Jt as InnhentInntektsmelding,Ct as InnhentInntektsmeldingDerBehandlingErAvsluttet,Yt as InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret,Zt as SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer,Qt as SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer,da as SkalViseFødselsnummerForPrivatperson,Vp as __namedExportsOrder,wp as default};
