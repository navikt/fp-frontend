import{g as Pl,r as v,u as er,_ as Oi,s as ki,c as Vr,a as ee,R as m,b as kt,d as wr,T as Kd,S as Ur,m as Pd,e as jr,f as so,h as Hn,Q as Gd,o as oo,w as Bd,i as $e,P as Kn,n as ha,j as N,t as dn,O as da,I as Fd,k as yi,l as Gl,p as uo,q as Eo,v as mo,x as Bl,y as Fl,N as Vl,J as No,z as Vd,A as wd,B as Ud,C as jd}from"./iframe-CE_qr0Ob.js";import{r as qd}from"./index-BhcPtKVf.js";import"./preload-helper-PPVm8Dsz.js";var wl=qd();const Et=Pl(wl);function Hd(e,n){var a=e.values,r=Oi(e,["values"]),t=n.values,l=Oi(n,["values"]);return ki(t,a)&&ki(r,l)}function _o(e){var n=er(),a=n.formatMessage,r=n.textComponent,t=r===void 0?v.Fragment:r,l=e.id,i=e.description,s=e.defaultMessage,o=e.values,d=e.children,u=e.tagName,E=u===void 0?t:u,_=e.ignoreTag,T={id:l,description:i,defaultMessage:s},I=a(T,o,{ignoreTag:_});return typeof d=="function"?d(Array.isArray(I)?I:[I]):E?v.createElement(E,null,I):v.createElement(v.Fragment,null,I)}_o.displayName="FormattedMessage";var x=v.memo(_o,Hd);x.displayName="MemoizedFormattedMessage";var nn=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.OVERSTYRING_AV_FAKTA_OM_FØDSEL="6019",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(nn||{}),Ye=(e=>(e.AVV_DOK="AVV_DOK",e.AVV_FODSEL="AVV_FODSEL",e.UTV_FRIST="UTV_FRIST",e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG="VENT_PÅ_TILBAKEKREVINGSGRUNNLAG",e.VENT_PÅ_BRUKERTILBAKEMELDING="VENT_PÅ_BRUKERTILBAKEMELDING",e.VENT_UTLAND_TRYGD="VENT_UTLAND_TRYGD",e.UTVIDET_TILSVAR_FRIST="UTV_TIL_FRIST",e.ENDRE_TILKJENT_YTELSE="ENDRE_TILKJENT_YTELSE",e.VENT_PÅ_MULIG_MOTREGNING="VENT_PÅ_MULIG_MOTREGNING",e.AVV_RESPONS_REVURDERING="AVV_RESPONS_REVURDERING",e.FOR_TIDLIG_SOKNAD="FOR_TIDLIG_SOKNAD",e.VENT_PÅ_SISTE_AAP_ELLER_DP_MELDEKORT="VENT_PÅ_SISTE_AAP_MELDEKORT",e.ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER="ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",e.ANKE_OVERSENDT_TIL_TRYGDERETTEN="ANKE_OVERSENDT_TIL_TRYGDERETTEN",e.VENT_PÅ_KORRIGERT_BESTEBEREGNING="VENT_PÅ_KORRIGERT_BESTEBEREGNING",e.VENT_OPDT_INNTEKTSMELDING="VENT_OPDT_INNTEKTSMELDING",e.VENT_OPPTJENING_OPPLYSNINGER="VENT_OPPTJENING_OPPLYSNINGER",e.VENT_INNTEKT_RAPPORTERINGSFRIST="VENT_INNTEKT_RAPPORTERINGSFRIST",e.VENT_MANGLENDE_SYKEMELDING="VENT_MANGLENDE_SYKEMELDING",e.VENT_SØKNAD_SENDT_INFORMASJONSBREV="VENT_SØKNAD_SENDT_INFORMASJONSBREV",e.VENT_ÅPEN_BEHANDLING="VENT_ÅPEN_BEHANDLING",e.VENT_KABAL="VENT_KABAL",e))(Ye||{}),Mr=(e=>(e.PERMISJON="PERMISJON",e.PERMITTERING="PERMITTERING",e.PERMISJON_VED_MILITÆRTJENESTE="PERMISJON_VED_MILITÆRTJENESTE",e.UTDANNINGSPERMISJON_LOVFESTET="UTDANNINGSPERMISJON_LOVFESTET",e.UTDANNINGSPERMISJON="UTDANNINGSPERMISJON",e.UTDANNINGSPERMISJON_IKKE_LOVFESTET="UTDANNINGSPERMISJON_IKKE_LOVFESTET",e.VELFERDSPERMISJON="VELFERDSPERMISJON",e.ANNEN_PERMISJON_LOVFESTET="ANNEN_PERMISJON_LOVFESTET",e.PERMISJON_MED_FORELDREPENGER="PERMISJON_MED_FORELDREPENGER",e.ANNEN_PERMISJON_IKKE_LOVFESTET="ANNEN_PERMISJON_IKKE_LOVFESTET",e))(Mr||{});const xd=(e,n,a)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${n}&dokumentId=${a}`,Jd=(e,n,a)=>{const r=globalThis.open(e,n);r&&setTimeout(()=>{r.document.title=a},1e3)};var To=(e=>(e.GENERAL_ERROR="GENERAL_ERROR",e.POLLING_TIMEOUT="POLLING_TIMEOUT",e.POLLING_HALTED_OR_DELAYED="POLLING_HALTED_OR_DELAYED",e.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND="REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND",e.REQUEST_FORBIDDEN="REQUEST_FORBIDDEN",e.REQUEST_UNAUTHORIZED="REQUEST_UNAUTHORIZED",e))(To||{});const qr=e=>Vr({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Yd=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Ul=v.forwardRef((e,n)=>{var{className:a,size:r="medium",as:t="p",spacing:l,truncate:i,weight:s="regular",align:o,visuallyHidden:d,textColor:u}=e,E=Yd(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=ee();return m.createElement(t,Object.assign({},E,{ref:n,className:_(a,"navds-body-long",`navds-body-long--${r}`,qr({spacing:l,truncate:i,weight:s,align:o,visuallyHidden:d,textColor:u}))}))});var Cd=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const ne=v.forwardRef((e,n)=>{var{className:a,size:r="medium",as:t="p",spacing:l,truncate:i,weight:s="regular",align:o,visuallyHidden:d,textColor:u}=e,E=Cd(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=ee();return m.createElement(t,Object.assign({},E,{ref:n,className:_(a,"navds-body-short",`navds-body-short--${r}`,qr({spacing:l,truncate:i,weight:s,align:o,visuallyHidden:d,textColor:u}))}))});var $d=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const hr=v.forwardRef((e,n)=>{var{className:a,size:r="medium",spacing:t,uppercase:l,as:i="p",truncate:s,weight:o="regular",align:d,visuallyHidden:u,textColor:E}=e,_=$d(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:T}=ee();return m.createElement(i,Object.assign({},_,{ref:n,className:T(a,"navds-detail",qr({spacing:t,truncate:s,weight:o,align:d,visuallyHidden:u,textColor:E,uppercase:l}),{"navds-detail--small":r==="small"})}))});var Wd=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Hr=v.forwardRef((e,n)=>{var{children:a,className:r,size:t,spacing:l,as:i="p",showIcon:s=!1}=e,o=Wd(e,["children","className","size","spacing","as","showIcon"]);const{cn:d}=ee();return m.createElement(i,Object.assign({},o,{ref:n,className:d("navds-error-message","navds-label",r,qr({spacing:l}),{"navds-label--small":t==="small","navds-error-message--show-icon":s})}),s&&m.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),a)});var zd=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const xr=v.forwardRef((e,n)=>{var{level:a="1",size:r,className:t,as:l,spacing:i,align:s,visuallyHidden:o,textColor:d}=e,u=zd(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:E}=ee(),_=l??`h${a}`;return m.createElement(_,Object.assign({},u,{ref:n,className:E(t,"navds-heading",`navds-heading--${r}`,qr({spacing:i,align:s,visuallyHidden:o,textColor:d}))}))});var Xd=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};v.forwardRef((e,n)=>{var{className:a,spacing:r,as:t="p"}=e,l=Xd(e,["className","spacing","as"]);const{cn:i}=ee();return m.createElement(t,Object.assign({},l,{ref:n,className:i(a,"navds-ingress",{"navds-typo--spacing":!!r})}))});var Qd=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const ge=v.forwardRef((e,n)=>{var{className:a,size:r="medium",as:t="label",spacing:l,visuallyHidden:i,textColor:s}=e,o=Qd(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:d}=ee();return m.createElement(t,Object.assign({},o,{ref:n,className:d(a,"navds-label",qr({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":r==="small"})}))});function vo(e,n=166,a=!1){let r;function t(...l){const i=()=>{r=void 0,e.apply(this,l)};!r&&a&&i(),clearTimeout(r),r=setTimeout(i,n)}return t.clear=()=>{clearTimeout(r)},t}function Je(e,n){const a=Object.entries(e).filter(([r])=>!n.includes(r));return Object.fromEntries(a)}const Kr=globalThis?.document?v.useLayoutEffect:()=>{};let Li=0;function Zd(e){const[n,a]=v.useState(e),r=e||n;return v.useEffect(()=>{n==null&&(Li+=1,a(`aksel-id-${Li}`))},[n]),r}const bi=m.useId;function cn(e){var n;if(bi!==void 0){const a=bi();return e??a.replace(/(:)/g,"")}return(n=Zd(e))!==null&&n!==void 0?n:""}function Ea(e,n=[]){const a=v.useRef(e);return v.useEffect(()=>{a.current=e}),v.useCallback(((...r)=>{var t;return(t=a.current)===null||t===void 0?void 0:t.call(a,...r)}),n)}function Pr({value:e,defaultValue:n,onChange:a}){const r=Ea(a),[t,l]=v.useState(n),i=e!==void 0,s=i?e:t,o=Ea(d=>{const E=typeof d=="function"?d(s):d;i||l(E),r(E)},[i,r,s]);return[s,o]}let Mi=0;function eE(e){const[n,a]=v.useState(e),r=e||n;return v.useEffect(()=>{n==null&&(Mi+=1,a(`aksel-icon-${Mi}`))},[n]),r}const hi=m.useId;function Oe(e){var n;return hi!==void 0?hi().replace(/(:)/g,""):(n=eE(e))!==null&&n!==void 0?n:""}var nE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const rE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=nE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",d:"M8.97 6.97a.75.75 0 1 1 1.06 1.06l-3.22 3.22H19a.75.75 0 0 1 0 1.5H6.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06z"}))});var aE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const tE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=aE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",d:"M14.087 6.873a.75.75 0 0 1 .943.097l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H5a.75.75 0 0 1-.75-.74V12a.75.75 0 0 1 .75-.75h12.19l-3.22-3.22a.75.75 0 0 1 .117-1.157"}))});var lE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const iE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=lE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var sE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const oE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=sE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var uE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const dE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=uE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var EE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const mE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=EE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var NE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const va=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=NE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var _E=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Io=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=_E(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var TE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const jl=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=TE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var vE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const IE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=vE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var RE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const gE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=RE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var fE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const cE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=fE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.6 3.068c-1.28-.487-2.1-1.686-2.1-3.068a3.257 3.257 0 0 1 3.276-3.264 3.26 3.26 0 0 1 3.271 3.264c0 1.353-.83 2.554-2.559 3.242a.75.75 0 0 0-.472.697v1.235a.75.75 0 0 0 .212.523l1.482 1.522-1.215 1.991a.75.75 0 0 0 .123.934l.592.564-1.982 2.214-.145-.132v-9.021a.75.75 0 0 0-.483-.701m-.327-3.13a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var SE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const DE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=SE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.273-.063a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var AE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Ro=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=AE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var pE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const OE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=pE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var kE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const yE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=kE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var LE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const bE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=LE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var ME=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const go=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=ME(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var hE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const KE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=hE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var PE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const GE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=PE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var BE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const FE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=BE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var VE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const fo=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=VE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var wE=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const UE=v.forwardRef((e,n)=>{var{title:a,titleId:r}=e,t=wE(e,["title","titleId"]);let l=Oe();return l=a?r||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":l},t),a?m.createElement("title",{id:l},a):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Xn(e,n,{checkForDefaultPrevented:a=!0}={}){return function(t){if(e?.(t),a===!1||!t.defaultPrevented)return n?.(t)}}const[jE,Ia]=kt({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),qE=typeof window<"u"&&window.matchMedia===void 0,HE=(e,n)=>{const[a,r]=v.useState(n);return v.useEffect(()=>{if(qE)return;const t=window.matchMedia(e);r(t.matches);const l=i=>{r(i.matches)};return t.addEventListener("change",l),()=>{t.removeEventListener("change",l)}},[e]),a};function mn(e){return(n={})=>{const a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}function We(e){return(n,a)=>{const r=a?.context?String(a.context):"standalone";let t;if(r==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=a?.width?String(a.width):i;t=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=a?.width?String(a.width):e.defaultWidth;t=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(n):n;return t[l]}}function ze(e){return(n,a={})=>{const r=a.width,t=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],l=n.match(t);if(!l)return null;const i=l[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],o=Array.isArray(s)?JE(s,E=>E.test(i)):xE(s,E=>E.test(i));let d;d=e.valueCallback?e.valueCallback(o):o,d=a.valueCallback?a.valueCallback(d):d;const u=n.slice(i.length);return{value:d,rest:u}}}function xE(e,n){for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&n(e[a]))return a}function JE(e,n){for(let a=0;a<e.length;a++)if(n(e[a]))return a}function ql(e){return(n,a={})=>{const r=n.match(e.matchPattern);if(!r)return null;const t=r[0],l=n.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=a.valueCallback?a.valueCallback(i):i;const s=n.slice(t.length);return{value:i,rest:s}}}const co=6048e5,YE=864e5,CE=6e4,$E=36e5,WE=1e3,Ki=Symbol.for("constructDateFrom");function Ne(e,n){return typeof e=="function"?e(n):e&&typeof e=="object"&&Ki in e?e[Ki](n):e instanceof Date?new e.constructor(n):new Date(n)}function Jr(e,...n){const a=Ne.bind(null,n.find(r=>typeof r=="object"));return n.map(a)}let zE={};function Tr(){return zE}function ie(e,n){return Ne(n||e,e)}function Un(e,n){const a=Tr(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,t=ie(e,n?.in),l=t.getDay(),i=(l<r?7:0)+l-r;return t.setDate(t.getDate()-i),t.setHours(0,0,0,0),t}const XE={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},So=(e,n,a)=>{let r;const t=XE[e];return typeof t=="string"?r=t:n===1?r=t.one:r=t.other.replace("{{count}}",n.toString()),a?.addSuffix?a.comparison&&a.comparison>0?"in "+r:r+" ago":r},QE={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Do=(e,n,a,r)=>QE[e],ZE={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},em={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},nm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},rm={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},am={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},tm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},lm=(e,n)=>{const a=Number(e),r=a%100;if(r>20||r<10)switch(r%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},Ao={ordinalNumber:lm,era:We({values:ZE,defaultWidth:"wide"}),quarter:We({values:em,defaultWidth:"wide",argumentCallback:e=>e-1}),month:We({values:nm,defaultWidth:"wide"}),day:We({values:rm,defaultWidth:"wide"}),dayPeriod:We({values:am,defaultWidth:"wide",formattingValues:tm,defaultFormattingWidth:"wide"})},im=/^(\d+)(th|st|nd|rd)?/i,sm=/\d+/i,om={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},um={any:[/^b/i,/^(a|c)/i]},dm={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Em={any:[/1/i,/2/i,/3/i,/4/i]},mm={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Nm={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},_m={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Tm={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},vm={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Im={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},po={ordinalNumber:ql({matchPattern:im,parsePattern:sm,valueCallback:e=>parseInt(e,10)}),era:ze({matchPatterns:om,defaultMatchWidth:"wide",parsePatterns:um,defaultParseWidth:"any"}),quarter:ze({matchPatterns:dm,defaultMatchWidth:"wide",parsePatterns:Em,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ze({matchPatterns:mm,defaultMatchWidth:"wide",parsePatterns:Nm,defaultParseWidth:"any"}),day:ze({matchPatterns:_m,defaultMatchWidth:"wide",parsePatterns:Tm,defaultParseWidth:"any"}),dayPeriod:ze({matchPatterns:vm,defaultMatchWidth:"any",parsePatterns:Im,defaultParseWidth:"any"})},Rm={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},gm={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},fm={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},cm={date:mn({formats:Rm,defaultWidth:"full"}),time:mn({formats:gm,defaultWidth:"full"}),dateTime:mn({formats:fm,defaultWidth:"full"})},Oo={code:"en-GB",formatDistance:So,formatLong:cm,formatRelative:Do,localize:Ao,match:po,options:{weekStartsOn:1,firstWeekContainsDate:4}},Sm={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Dm={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Am={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},pm={date:mn({formats:Sm,defaultWidth:"full"}),time:mn({formats:Dm,defaultWidth:"full"}),dateTime:mn({formats:Am,defaultWidth:"full"})},yt={code:"en-US",formatDistance:So,formatLong:pm,formatRelative:Do,localize:Ao,match:po,options:{weekStartsOn:0,firstWeekContainsDate:1}},Om={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},km=(e,n,a)=>{let r;const t=Om[e];return typeof t=="string"?r=t:n===1?r=t.one:r=t.other.replace("{{count}}",String(n)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+r:r+" siden":r},ym={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Lm={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},bm={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Mm={date:mn({formats:ym,defaultWidth:"full"}),time:mn({formats:Lm,defaultWidth:"full"}),dateTime:mn({formats:bm,defaultWidth:"full"})},hm={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Km=(e,n,a,r)=>hm[e],Pm={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Gm={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Bm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Fm={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Vm={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},wm=(e,n)=>Number(e)+".",Um={ordinalNumber:wm,era:We({values:Pm,defaultWidth:"wide"}),quarter:We({values:Gm,defaultWidth:"wide",argumentCallback:e=>e-1}),month:We({values:Bm,defaultWidth:"wide"}),day:We({values:Fm,defaultWidth:"wide"}),dayPeriod:We({values:Vm,defaultWidth:"wide"})},jm=/^(\d+)\.?/i,qm=/\d+/i,Hm={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},xm={any:[/^f/i,/^e/i]},Jm={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Ym={any:[/1/i,/2/i,/3/i,/4/i]},Cm={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},$m={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Wm={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},zm={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Xm={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Qm={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Zm={ordinalNumber:ql({matchPattern:jm,parsePattern:qm,valueCallback:e=>parseInt(e,10)}),era:ze({matchPatterns:Hm,defaultMatchWidth:"wide",parsePatterns:xm,defaultParseWidth:"any"}),quarter:ze({matchPatterns:Jm,defaultMatchWidth:"wide",parsePatterns:Ym,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ze({matchPatterns:Cm,defaultMatchWidth:"wide",parsePatterns:$m,defaultParseWidth:"any"}),day:ze({matchPatterns:Wm,defaultMatchWidth:"wide",parsePatterns:zm,defaultParseWidth:"any"}),dayPeriod:ze({matchPatterns:Xm,defaultMatchWidth:"any",parsePatterns:Qm,defaultParseWidth:"any"})},ko={code:"nb",formatDistance:km,formatLong:Mm,formatRelative:Km,localize:Um,match:Zm,options:{weekStartsOn:1,firstWeekContainsDate:4}},eN={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},nN=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],rN=(e,n,a)=>{let r;const t=eN[e];return typeof t=="string"?r=t:n===1?r=t.one:r=t.other.replace("{{count}}",n<13?nN[n]:String(n)),a?.addSuffix?a.comparison&&a.comparison>0?"om "+r:r+" sidan":r},aN={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},tN={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},lN={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},iN={date:mn({formats:aN,defaultWidth:"full"}),time:mn({formats:tN,defaultWidth:"full"}),dateTime:mn({formats:lN,defaultWidth:"full"})},sN={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},oN=(e,n,a,r)=>sN[e],uN={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},dN={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},EN={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},mN={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},NN={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},_N=(e,n)=>Number(e)+".",TN={ordinalNumber:_N,era:We({values:uN,defaultWidth:"wide"}),quarter:We({values:dN,defaultWidth:"wide",argumentCallback:e=>e-1}),month:We({values:EN,defaultWidth:"wide"}),day:We({values:mN,defaultWidth:"wide"}),dayPeriod:We({values:NN,defaultWidth:"wide"})},vN=/^(\d+)\.?/i,IN=/\d+/i,RN={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},gN={any:[/^f/i,/^e/i]},fN={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},cN={any:[/1/i,/2/i,/3/i,/4/i]},SN={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},DN={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},AN={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},pN={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},ON={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},kN={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},yN={ordinalNumber:ql({matchPattern:vN,parsePattern:IN,valueCallback:e=>parseInt(e,10)}),era:ze({matchPatterns:RN,defaultMatchWidth:"wide",parsePatterns:gN,defaultParseWidth:"any"}),quarter:ze({matchPatterns:fN,defaultMatchWidth:"wide",parsePatterns:cN,defaultParseWidth:"any",valueCallback:e=>e+1}),month:ze({matchPatterns:SN,defaultMatchWidth:"wide",parsePatterns:DN,defaultParseWidth:"any"}),day:ze({matchPatterns:AN,defaultMatchWidth:"wide",parsePatterns:pN,defaultParseWidth:"any"}),dayPeriod:ze({matchPatterns:ON,defaultMatchWidth:"any",parsePatterns:kN,defaultParseWidth:"any"})},yo={code:"nn",formatDistance:rN,formatLong:iN,formatRelative:oN,localize:TN,match:yN,options:{weekStartsOn:1,firstWeekContainsDate:4}},LN={global:{dateLocale:ko,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},bN=v.createContext({locale:LN}),Lt=()=>v.useContext(bN);var MN=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const hN=v.forwardRef((e,n)=>{var a,r,t,{rootElement:l,asChild:i}=e,s=MN(e,["rootElement","asChild"]);const o=wr(!1),d=(a=Lt())===null||a===void 0?void 0:a.rootElement,u=(r=l??d)!==null&&r!==void 0?r:(t=globalThis?.document)===null||t===void 0?void 0:t.body,E=i?Ur:"div";return o?.isDarkside?u?Et.createPortal(m.createElement(Kd,{theme:o.theme,asChild:!0,hasBackground:!1,"data-color":o.color},m.createElement(E,Object.assign({ref:n,"data-aksel-portal":""},s))),u):null:u?Et.createPortal(m.createElement(E,Object.assign({ref:n,"data-aksel-portal":""},s)),u):null});function Pi(e){return e.sort((n,a)=>{const r=n.compareDocumentPosition(a);if(r&Node.DOCUMENT_POSITION_FOLLOWING||r&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(r&Node.DOCUMENT_POSITION_PRECEDING||r&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(r&Node.DOCUMENT_POSITION_DISCONNECTED||r&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const KN=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Gi(e,n,a){let r=e+1;return a&&r>=n&&(r=0),r}function Bi(e,n,a){let r=e-1;return a&&r<0&&(r=n),r}const Wt=e=>e;class PN{constructor(){this.descendants=new Map,this.register=n=>{if(n!=null)return KN(n)?this.registerNode(n):a=>{this.registerNode(a,n)}},this.unregister=n=>{this.descendants.delete(n);const a=Pi(Array.from(this.descendants.keys()));this.assignIndex(a)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=n=>{this.descendants.forEach(a=>{const r=n.indexOf(a.node);a.index=r,a.node.dataset.index=a.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((a,r)=>a.index-r.index),this.enabledValues=()=>this.values().filter(n=>!n.disabled),this.item=n=>{if(this.count()!==0)return this.values()[n]},this.enabledItem=n=>{if(this.enabledCount()!==0)return this.enabledValues()[n]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const n=this.enabledValues().length-1;return this.enabledItem(n)},this.indexOf=n=>{var a,r;return n&&(r=(a=this.descendants.get(n))===null||a===void 0?void 0:a.index)!==null&&r!==void 0?r:-1},this.enabledIndexOf=n=>n==null?-1:this.enabledValues().findIndex(a=>a.node.isSameNode(n)),this.next=(n,a=!0)=>{const r=Gi(n,this.count(),a);return this.item(r)},this.nextEnabled=(n,a=!0)=>{const r=this.item(n);if(!r)return;const t=this.enabledIndexOf(r.node),l=Gi(t,this.enabledCount(),a);return this.enabledItem(l)},this.prev=(n,a=!0)=>{const r=Bi(n,this.count()-1,a);return this.item(r)},this.prevEnabled=(n,a=!0)=>{const r=this.item(n);if(!r)return;const t=this.enabledIndexOf(r.node),l=Bi(t,this.enabledCount()-1,a);return this.enabledItem(l)},this.registerNode=(n,a)=>{if(!n)return;const r=this.descendants.get(n);if(r){this.descendants.set(n,Object.assign({index:r.index,node:n},a));return}const t=Array.from(this.descendants.keys()).concat(n),l=Pi(t);a?.disabled&&(a.disabled=!!a.disabled);const i=Object.assign({node:n,index:-1},a);this.descendants.set(n,i),this.assignIndex(l)}}}function GN(){const[e,n]=kt({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),a=Wt(l=>m.createElement(e,Object.assign({},l.value),l.children));function r(l){const i=n(),[s,o]=v.useState(-1),d=v.useRef(null);Kr(()=>()=>{d.current&&i.unregister(d.current)},[]),Kr(()=>{if(!d.current)return;const E=Number(d.current.dataset.index);s!==E&&!Number.isNaN(E)&&o(E)});const u=Wt(l?i.register(l):i.register);return{descendants:i,index:s,enabledIndex:i.enabledIndexOf(d.current),register:Pd([u,d])}}function t(){return v.useRef(new PN).current}return[a,n,t,r]}function BN(e,n=globalThis?.document){const a=Ea(e);v.useEffect(()=>{const r=t=>{t.key==="Escape"&&a(t)};return n.addEventListener("keydown",r,!0),()=>n.removeEventListener("keydown",r,!0)},[a,n])}const Lo={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function bo(e,n,a,{discrete:r}={discrete:!1}){if(!n)return;const t=a.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:a});t.addEventListener(e,n,{once:!0}),r&&t?Et.flushSync(()=>t.dispatchEvent(l)):t.dispatchEvent(l)}function FN(e,n=globalThis?.document){const a=Ea(e),r=v.useRef(!1);return v.useEffect(()=>{const t=l=>{if(l.target&&!r.current){const i={originalEvent:l};bo(Lo.FOCUS_OUTSIDE,a,i)}};return n.addEventListener("focusin",t),()=>n.removeEventListener("focusin",t)},[n,a]),{onFocusCapture:()=>{r.current=!0},onBlurCapture:()=>{r.current=!1}}}function VN(e,n=globalThis?.document){const a=Ea(e),r=v.useRef(!1),t=v.useRef(()=>{});return v.useEffect(()=>{const l=s=>{function o(){bo(Lo.POINTER_DOWN_OUTSIDE,a,{originalEvent:s},{discrete:!0})}s.target&&!r.current?s.pointerType==="touch"?(n.removeEventListener("click",t.current),t.current=o,n.addEventListener("click",t.current,{once:!0})):o():n.removeEventListener("click",t.current),r.current=!1},i=window.setTimeout(()=>{n.addEventListener("pointerdown",l)},0);return()=>{window.clearTimeout(i),n.removeEventListener("pointerdown",l),n.removeEventListener("click",t.current)}},[n,a]),{onPointerDownCapture:()=>{r.current=!0}}}var wN=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const[UN,jN,qN,HN]=GN();let gr=0,Fi;const xN=v.forwardRef((e,n)=>jN(!1)?m.createElement(Vi,Object.assign({ref:n},e)):m.createElement(JN,null,m.createElement(Vi,Object.assign({ref:n},e)))),JN=({children:e})=>{const n=qN();return m.createElement(UN,{value:n},e)},Vi=v.forwardRef((e,n)=>{var a,{children:r,asChild:t,onEscapeKeyDown:l,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:o,onDismiss:d,safeZone:u,disableOutsidePointerEvents:E=!1,enabled:_=!0}=e,T=wN(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,I]=v.useState({}),{register:f,index:g,descendants:S}=HN({disableOutsidePointerEvents:E,disabled:!_,forceUpdate:()=>I({})}),[c,R]=v.useState(null),A=jr(R,f,n),D=(a=c?.ownerDocument)!==null&&a!==void 0?a:globalThis?.document,k=v.useRef(!1),L=v.useRef(!1),B=(()=>{let O=-1;return S.enabledValues().forEach((P,U)=>{P.disableOutsidePointerEvents&&(O=U)}),{isPointerEventsEnabled:g>=O,isBodyPointerEventsDisabled:gr>0,pointerStyle:g>=O&&gr>0?"auto":void 0}})();function M(O){var b,P;if(!u?.anchor&&!u?.dismissable||!_)return;O.defaultPrevented||(k.current=!0,O.detail.originalEvent.type==="pointerdown"&&(L.current=!0));const U=O.target;O.detail.originalEvent.type==="pointerdown"?(!((b=u?.anchor)===null||b===void 0)&&b.contains(U)||U===u?.anchor)&&O.preventDefault():!(U instanceof HTMLElement&&![u?.anchor,u?.dismissable].some(V=>V?.contains(U))&&!U.contains((P=u?.dismissable)!==null&&P!==void 0?P:null))&&O.preventDefault(),O.detail.originalEvent.type==="focusin"&&L.current&&O.preventDefault(),L.current=!1,k.current=!1}const G=VN(O=>{!B.isPointerEventsEnabled||!_||(i?.(O),o?.(O),u&&M(O),!O.defaultPrevented&&d&&d())},D),w=FN(O=>{_&&(s?.(O),o?.(O),u&&M(O),!O.defaultPrevented&&d&&d())},D);BN(O=>{!_||!(g===S.enabledCount()-1)||(l?.(O),!O.defaultPrevented&&d&&(O.preventDefault(),d()))},D),v.useEffect(()=>{if(!(!c||!_||!E))return gr===0&&(Fi=D.body.style.pointerEvents,D.body.style.pointerEvents="none"),gr++,()=>{gr===1&&(D.body.style.pointerEvents=Fi),gr--}},[c,D,E,S,_]),v.useEffect(()=>()=>S.values().forEach(O=>O.forceUpdate()),[S,c]);const K=t?Ur:"div";return m.createElement(K,Object.assign({ref:A},T,{onFocusCapture:w.onFocusCapture,onBlurCapture:w.onBlurCapture,onPointerDownCapture:G.onPointerDownCapture,style:Object.assign({pointerEvents:B.pointerStyle},T.style)}),r)}),Gr=Math.min,or=Math.max,mt=Math.round,Ka=Math.floor,yn=e=>({x:e,y:e}),YN={left:"right",right:"left",bottom:"top",top:"bottom"},CN={start:"end",end:"start"};function vl(e,n,a){return or(e,Gr(n,a))}function Ra(e,n){return typeof e=="function"?e(n):e}function ur(e){return e.split("-")[0]}function ga(e){return e.split("-")[1]}function Mo(e){return e==="x"?"y":"x"}function Hl(e){return e==="y"?"height":"width"}const $N=new Set(["top","bottom"]);function Wn(e){return $N.has(ur(e))?"y":"x"}function xl(e){return Mo(Wn(e))}function WN(e,n,a){a===void 0&&(a=!1);const r=ga(e),t=xl(e),l=Hl(t);let i=t==="x"?r===(a?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[l]>n.floating[l]&&(i=Nt(i)),[i,Nt(i)]}function zN(e){const n=Nt(e);return[Il(e),n,Il(n)]}function Il(e){return e.replace(/start|end/g,n=>CN[n])}const wi=["left","right"],Ui=["right","left"],XN=["top","bottom"],QN=["bottom","top"];function ZN(e,n,a){switch(e){case"top":case"bottom":return a?n?Ui:wi:n?wi:Ui;case"left":case"right":return n?XN:QN;default:return[]}}function e_(e,n,a,r){const t=ga(e);let l=ZN(ur(e),a==="start",r);return t&&(l=l.map(i=>i+"-"+t),n&&(l=l.concat(l.map(Il)))),l}function Nt(e){return e.replace(/left|right|bottom|top/g,n=>YN[n])}function n_(e){return{top:0,right:0,bottom:0,left:0,...e}}function ho(e){return typeof e!="number"?n_(e):{top:e,right:e,bottom:e,left:e}}function _t(e){const{x:n,y:a,width:r,height:t}=e;return{width:r,height:t,top:a,left:n,right:n+r,bottom:a+t,x:n,y:a}}function ji(e,n,a){let{reference:r,floating:t}=e;const l=Wn(n),i=xl(n),s=Hl(i),o=ur(n),d=l==="y",u=r.x+r.width/2-t.width/2,E=r.y+r.height/2-t.height/2,_=r[s]/2-t[s]/2;let T;switch(o){case"top":T={x:u,y:r.y-t.height};break;case"bottom":T={x:u,y:r.y+r.height};break;case"right":T={x:r.x+r.width,y:E};break;case"left":T={x:r.x-t.width,y:E};break;default:T={x:r.x,y:r.y}}switch(ga(n)){case"start":T[i]-=_*(a&&d?-1:1);break;case"end":T[i]+=_*(a&&d?-1:1);break}return T}const r_=async(e,n,a)=>{const{placement:r="bottom",strategy:t="absolute",middleware:l=[],platform:i}=a,s=l.filter(Boolean),o=await(i.isRTL==null?void 0:i.isRTL(n));let d=await i.getElementRects({reference:e,floating:n,strategy:t}),{x:u,y:E}=ji(d,r,o),_=r,T={},I=0;for(let f=0;f<s.length;f++){const{name:g,fn:S}=s[f],{x:c,y:R,data:A,reset:D}=await S({x:u,y:E,initialPlacement:r,placement:_,strategy:t,middlewareData:T,rects:d,platform:i,elements:{reference:e,floating:n}});u=c??u,E=R??E,T={...T,[g]:{...T[g],...A}},D&&I<=50&&(I++,typeof D=="object"&&(D.placement&&(_=D.placement),D.rects&&(d=D.rects===!0?await i.getElementRects({reference:e,floating:n,strategy:t}):D.rects),{x:u,y:E}=ji(d,_,o)),f=-1)}return{x:u,y:E,placement:_,strategy:t,middlewareData:T}};async function Ko(e,n){var a;n===void 0&&(n={});const{x:r,y:t,platform:l,rects:i,elements:s,strategy:o}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:E="floating",altBoundary:_=!1,padding:T=0}=Ra(n,e),I=ho(T),g=s[_?E==="floating"?"reference":"floating":E],S=_t(await l.getClippingRect({element:(a=await(l.isElement==null?void 0:l.isElement(g)))==null||a?g:g.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(s.floating)),boundary:d,rootBoundary:u,strategy:o})),c=E==="floating"?{x:r,y:t,width:i.floating.width,height:i.floating.height}:i.reference,R=await(l.getOffsetParent==null?void 0:l.getOffsetParent(s.floating)),A=await(l.isElement==null?void 0:l.isElement(R))?await(l.getScale==null?void 0:l.getScale(R))||{x:1,y:1}:{x:1,y:1},D=_t(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:c,offsetParent:R,strategy:o}):c);return{top:(S.top-D.top+I.top)/A.y,bottom:(D.bottom-S.bottom+I.bottom)/A.y,left:(S.left-D.left+I.left)/A.x,right:(D.right-S.right+I.right)/A.x}}const a_=e=>({name:"arrow",options:e,async fn(n){const{x:a,y:r,placement:t,rects:l,platform:i,elements:s,middlewareData:o}=n,{element:d,padding:u=0}=Ra(e,n)||{};if(d==null)return{};const E=ho(u),_={x:a,y:r},T=xl(t),I=Hl(T),f=await i.getDimensions(d),g=T==="y",S=g?"top":"left",c=g?"bottom":"right",R=g?"clientHeight":"clientWidth",A=l.reference[I]+l.reference[T]-_[T]-l.floating[I],D=_[T]-l.reference[T],k=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d));let L=k?k[R]:0;(!L||!await(i.isElement==null?void 0:i.isElement(k)))&&(L=s.floating[R]||l.floating[I]);const B=A/2-D/2,M=L/2-f[I]/2-1,G=Gr(E[S],M),w=Gr(E[c],M),K=G,O=L-f[I]-w,b=L/2-f[I]/2+B,P=vl(K,b,O),U=!o.arrow&&ga(t)!=null&&b!==P&&l.reference[I]/2-(b<K?G:w)-f[I]/2<0,j=U?b<K?b-K:b-O:0;return{[T]:_[T]+j,data:{[T]:P,centerOffset:b-P-j,...U&&{alignmentOffset:j}},reset:U}}}),t_=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var a,r;const{placement:t,middlewareData:l,rects:i,initialPlacement:s,platform:o,elements:d}=n,{mainAxis:u=!0,crossAxis:E=!0,fallbackPlacements:_,fallbackStrategy:T="bestFit",fallbackAxisSideDirection:I="none",flipAlignment:f=!0,...g}=Ra(e,n);if((a=l.arrow)!=null&&a.alignmentOffset)return{};const S=ur(t),c=Wn(s),R=ur(s)===s,A=await(o.isRTL==null?void 0:o.isRTL(d.floating)),D=_||(R||!f?[Nt(s)]:zN(s)),k=I!=="none";!_&&k&&D.push(...e_(s,f,I,A));const L=[s,...D],B=await Ko(n,g),M=[];let G=((r=l.flip)==null?void 0:r.overflows)||[];if(u&&M.push(B[S]),E){const b=WN(t,i,A);M.push(B[b[0]],B[b[1]])}if(G=[...G,{placement:t,overflows:M}],!M.every(b=>b<=0)){var w,K;const b=(((w=l.flip)==null?void 0:w.index)||0)+1,P=L[b];if(P&&(!(E==="alignment"?c!==Wn(P):!1)||G.every(V=>Wn(V.placement)===c?V.overflows[0]>0:!0)))return{data:{index:b,overflows:G},reset:{placement:P}};let U=(K=G.filter(j=>j.overflows[0]<=0).sort((j,V)=>j.overflows[1]-V.overflows[1])[0])==null?void 0:K.placement;if(!U)switch(T){case"bestFit":{var O;const j=(O=G.filter(V=>{if(k){const F=Wn(V.placement);return F===c||F==="y"}return!0}).map(V=>[V.placement,V.overflows.filter(F=>F>0).reduce((F,Y)=>F+Y,0)]).sort((V,F)=>V[1]-F[1])[0])==null?void 0:O[0];j&&(U=j);break}case"initialPlacement":U=s;break}if(t!==U)return{reset:{placement:U}}}return{}}}},l_=new Set(["left","top"]);async function i_(e,n){const{placement:a,platform:r,elements:t}=e,l=await(r.isRTL==null?void 0:r.isRTL(t.floating)),i=ur(a),s=ga(a),o=Wn(a)==="y",d=l_.has(i)?-1:1,u=l&&o?-1:1,E=Ra(n,e);let{mainAxis:_,crossAxis:T,alignmentAxis:I}=typeof E=="number"?{mainAxis:E,crossAxis:0,alignmentAxis:null}:{mainAxis:E.mainAxis||0,crossAxis:E.crossAxis||0,alignmentAxis:E.alignmentAxis};return s&&typeof I=="number"&&(T=s==="end"?I*-1:I),o?{x:T*u,y:_*d}:{x:_*d,y:T*u}}const s_=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var a,r;const{x:t,y:l,placement:i,middlewareData:s}=n,o=await i_(n,e);return i===((a=s.offset)==null?void 0:a.placement)&&(r=s.arrow)!=null&&r.alignmentOffset?{}:{x:t+o.x,y:l+o.y,data:{...o,placement:i}}}}},o_=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:a,y:r,placement:t}=n,{mainAxis:l=!0,crossAxis:i=!1,limiter:s={fn:g=>{let{x:S,y:c}=g;return{x:S,y:c}}},...o}=Ra(e,n),d={x:a,y:r},u=await Ko(n,o),E=Wn(ur(t)),_=Mo(E);let T=d[_],I=d[E];if(l){const g=_==="y"?"top":"left",S=_==="y"?"bottom":"right",c=T+u[g],R=T-u[S];T=vl(c,T,R)}if(i){const g=E==="y"?"top":"left",S=E==="y"?"bottom":"right",c=I+u[g],R=I-u[S];I=vl(c,I,R)}const f=s.fn({...n,[_]:T,[E]:I});return{...f,data:{x:f.x-a,y:f.y-r,enabled:{[_]:l,[E]:i}}}}}};function bt(){return typeof window<"u"}function Yr(e){return Po(e)?(e.nodeName||"").toLowerCase():"#document"}function en(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Ln(e){var n;return(n=(Po(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function Po(e){return bt()?e instanceof Node||e instanceof en(e).Node:!1}function ve(e){return bt()?e instanceof Element||e instanceof en(e).Element:!1}function ln(e){return bt()?e instanceof HTMLElement||e instanceof en(e).HTMLElement:!1}function Tt(e){return!bt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof en(e).ShadowRoot}const u_=new Set(["inline","contents"]);function fa(e){const{overflow:n,overflowX:a,overflowY:r,display:t}=Nn(e);return/auto|scroll|overlay|hidden|clip/.test(n+r+a)&&!u_.has(t)}const d_=new Set(["table","td","th"]);function E_(e){return d_.has(Yr(e))}const m_=[":popover-open",":modal"];function Mt(e){return m_.some(n=>{try{return e.matches(n)}catch{return!1}})}const N_=["transform","translate","scale","rotate","perspective"],__=["transform","translate","scale","rotate","perspective","filter"],T_=["paint","layout","strict","content"];function Jl(e){const n=ht(),a=ve(e)?Nn(e):e;return N_.some(r=>a[r]?a[r]!=="none":!1)||(a.containerType?a.containerType!=="normal":!1)||!n&&(a.backdropFilter?a.backdropFilter!=="none":!1)||!n&&(a.filter?a.filter!=="none":!1)||__.some(r=>(a.willChange||"").includes(r))||T_.some(r=>(a.contain||"").includes(r))}function v_(e){let n=jn(e);for(;ln(n)&&!Vn(n);){if(Jl(n))return n;if(Mt(n))return null;n=jn(n)}return null}function ht(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const I_=new Set(["html","body","#document"]);function Vn(e){return I_.has(Yr(e))}function Nn(e){return en(e).getComputedStyle(e)}function Kt(e){return ve(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function jn(e){if(Yr(e)==="html")return e;const n=e.assignedSlot||e.parentNode||Tt(e)&&e.host||Ln(e);return Tt(n)?n.host:n}function Go(e){const n=jn(e);return Vn(n)?e.ownerDocument?e.ownerDocument.body:e.body:ln(n)&&fa(n)?n:Go(n)}function Qn(e,n,a){var r;n===void 0&&(n=[]),a===void 0&&(a=!0);const t=Go(e),l=t===((r=e.ownerDocument)==null?void 0:r.body),i=en(t);if(l){const s=Rl(i);return n.concat(i,i.visualViewport||[],fa(t)?t:[],s&&a?Qn(s):[])}return n.concat(t,Qn(t,[],a))}function Rl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Bo(e){const n=Nn(e);let a=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const t=ln(e),l=t?e.offsetWidth:a,i=t?e.offsetHeight:r,s=mt(a)!==l||mt(r)!==i;return s&&(a=l,r=i),{width:a,height:r,$:s}}function Yl(e){return ve(e)?e:e.contextElement}function Or(e){const n=Yl(e);if(!ln(n))return yn(1);const a=n.getBoundingClientRect(),{width:r,height:t,$:l}=Bo(n);let i=(l?mt(a.width):a.width)/r,s=(l?mt(a.height):a.height)/t;return(!i||!Number.isFinite(i))&&(i=1),(!s||!Number.isFinite(s))&&(s=1),{x:i,y:s}}const R_=yn(0);function Fo(e){const n=en(e);return!ht()||!n.visualViewport?R_:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function g_(e,n,a){return n===void 0&&(n=!1),!a||n&&a!==en(e)?!1:n}function dr(e,n,a,r){n===void 0&&(n=!1),a===void 0&&(a=!1);const t=e.getBoundingClientRect(),l=Yl(e);let i=yn(1);n&&(r?ve(r)&&(i=Or(r)):i=Or(e));const s=g_(l,a,r)?Fo(l):yn(0);let o=(t.left+s.x)/i.x,d=(t.top+s.y)/i.y,u=t.width/i.x,E=t.height/i.y;if(l){const _=en(l),T=r&&ve(r)?en(r):r;let I=_,f=Rl(I);for(;f&&r&&T!==I;){const g=Or(f),S=f.getBoundingClientRect(),c=Nn(f),R=S.left+(f.clientLeft+parseFloat(c.paddingLeft))*g.x,A=S.top+(f.clientTop+parseFloat(c.paddingTop))*g.y;o*=g.x,d*=g.y,u*=g.x,E*=g.y,o+=R,d+=A,I=en(f),f=Rl(I)}}return _t({width:u,height:E,x:o,y:d})}function Pt(e,n){const a=Kt(e).scrollLeft;return n?n.left+a:dr(Ln(e)).left+a}function Vo(e,n){const a=e.getBoundingClientRect(),r=a.left+n.scrollLeft-Pt(e,a),t=a.top+n.scrollTop;return{x:r,y:t}}function f_(e){let{elements:n,rect:a,offsetParent:r,strategy:t}=e;const l=t==="fixed",i=Ln(r),s=n?Mt(n.floating):!1;if(r===i||s&&l)return a;let o={scrollLeft:0,scrollTop:0},d=yn(1);const u=yn(0),E=ln(r);if((E||!E&&!l)&&((Yr(r)!=="body"||fa(i))&&(o=Kt(r)),ln(r))){const T=dr(r);d=Or(r),u.x=T.x+r.clientLeft,u.y=T.y+r.clientTop}const _=i&&!E&&!l?Vo(i,o):yn(0);return{width:a.width*d.x,height:a.height*d.y,x:a.x*d.x-o.scrollLeft*d.x+u.x+_.x,y:a.y*d.y-o.scrollTop*d.y+u.y+_.y}}function c_(e){return Array.from(e.getClientRects())}function S_(e){const n=Ln(e),a=Kt(e),r=e.ownerDocument.body,t=or(n.scrollWidth,n.clientWidth,r.scrollWidth,r.clientWidth),l=or(n.scrollHeight,n.clientHeight,r.scrollHeight,r.clientHeight);let i=-a.scrollLeft+Pt(e);const s=-a.scrollTop;return Nn(r).direction==="rtl"&&(i+=or(n.clientWidth,r.clientWidth)-t),{width:t,height:l,x:i,y:s}}const qi=25;function D_(e,n){const a=en(e),r=Ln(e),t=a.visualViewport;let l=r.clientWidth,i=r.clientHeight,s=0,o=0;if(t){l=t.width,i=t.height;const u=ht();(!u||u&&n==="fixed")&&(s=t.offsetLeft,o=t.offsetTop)}const d=Pt(r);if(d<=0){const u=r.ownerDocument,E=u.body,_=getComputedStyle(E),T=u.compatMode==="CSS1Compat"&&parseFloat(_.marginLeft)+parseFloat(_.marginRight)||0,I=Math.abs(r.clientWidth-E.clientWidth-T);I<=qi&&(l-=I)}else d<=qi&&(l+=d);return{width:l,height:i,x:s,y:o}}const A_=new Set(["absolute","fixed"]);function p_(e,n){const a=dr(e,!0,n==="fixed"),r=a.top+e.clientTop,t=a.left+e.clientLeft,l=ln(e)?Or(e):yn(1),i=e.clientWidth*l.x,s=e.clientHeight*l.y,o=t*l.x,d=r*l.y;return{width:i,height:s,x:o,y:d}}function Hi(e,n,a){let r;if(n==="viewport")r=D_(e,a);else if(n==="document")r=S_(Ln(e));else if(ve(n))r=p_(n,a);else{const t=Fo(e);r={x:n.x-t.x,y:n.y-t.y,width:n.width,height:n.height}}return _t(r)}function wo(e,n){const a=jn(e);return a===n||!ve(a)||Vn(a)?!1:Nn(a).position==="fixed"||wo(a,n)}function O_(e,n){const a=n.get(e);if(a)return a;let r=Qn(e,[],!1).filter(s=>ve(s)&&Yr(s)!=="body"),t=null;const l=Nn(e).position==="fixed";let i=l?jn(e):e;for(;ve(i)&&!Vn(i);){const s=Nn(i),o=Jl(i);!o&&s.position==="fixed"&&(t=null),(l?!o&&!t:!o&&s.position==="static"&&!!t&&A_.has(t.position)||fa(i)&&!o&&wo(e,i))?r=r.filter(u=>u!==i):t=s,i=jn(i)}return n.set(e,r),r}function k_(e){let{element:n,boundary:a,rootBoundary:r,strategy:t}=e;const i=[...a==="clippingAncestors"?Mt(n)?[]:O_(n,this._c):[].concat(a),r],s=i[0],o=i.reduce((d,u)=>{const E=Hi(n,u,t);return d.top=or(E.top,d.top),d.right=Gr(E.right,d.right),d.bottom=Gr(E.bottom,d.bottom),d.left=or(E.left,d.left),d},Hi(n,s,t));return{width:o.right-o.left,height:o.bottom-o.top,x:o.left,y:o.top}}function y_(e){const{width:n,height:a}=Bo(e);return{width:n,height:a}}function L_(e,n,a){const r=ln(n),t=Ln(n),l=a==="fixed",i=dr(e,!0,l,n);let s={scrollLeft:0,scrollTop:0};const o=yn(0);function d(){o.x=Pt(t)}if(r||!r&&!l)if((Yr(n)!=="body"||fa(t))&&(s=Kt(n)),r){const T=dr(n,!0,l,n);o.x=T.x+n.clientLeft,o.y=T.y+n.clientTop}else t&&d();l&&!r&&t&&d();const u=t&&!r&&!l?Vo(t,s):yn(0),E=i.left+s.scrollLeft-o.x-u.x,_=i.top+s.scrollTop-o.y-u.y;return{x:E,y:_,width:i.width,height:i.height}}function zt(e){return Nn(e).position==="static"}function xi(e,n){if(!ln(e)||Nn(e).position==="fixed")return null;if(n)return n(e);let a=e.offsetParent;return Ln(e)===a&&(a=a.ownerDocument.body),a}function Uo(e,n){const a=en(e);if(Mt(e))return a;if(!ln(e)){let t=jn(e);for(;t&&!Vn(t);){if(ve(t)&&!zt(t))return t;t=jn(t)}return a}let r=xi(e,n);for(;r&&E_(r)&&zt(r);)r=xi(r,n);return r&&Vn(r)&&zt(r)&&!Jl(r)?a:r||v_(e)||a}const b_=async function(e){const n=this.getOffsetParent||Uo,a=this.getDimensions,r=await a(e.floating);return{reference:L_(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function M_(e){return Nn(e).direction==="rtl"}const h_={convertOffsetParentRelativeRectToViewportRelativeRect:f_,getDocumentElement:Ln,getClippingRect:k_,getOffsetParent:Uo,getElementRects:b_,getClientRects:c_,getDimensions:y_,getScale:Or,isElement:ve,isRTL:M_};function jo(e,n){return e.x===n.x&&e.y===n.y&&e.width===n.width&&e.height===n.height}function K_(e,n){let a=null,r;const t=Ln(e);function l(){var s;clearTimeout(r),(s=a)==null||s.disconnect(),a=null}function i(s,o){s===void 0&&(s=!1),o===void 0&&(o=1),l();const d=e.getBoundingClientRect(),{left:u,top:E,width:_,height:T}=d;if(s||n(),!_||!T)return;const I=Ka(E),f=Ka(t.clientWidth-(u+_)),g=Ka(t.clientHeight-(E+T)),S=Ka(u),R={rootMargin:-I+"px "+-f+"px "+-g+"px "+-S+"px",threshold:or(0,Gr(1,o))||1};let A=!0;function D(k){const L=k[0].intersectionRatio;if(L!==o){if(!A)return i();L?i(!1,L):r=setTimeout(()=>{i(!1,1e-7)},1e3)}L===1&&!jo(d,e.getBoundingClientRect())&&i(),A=!1}try{a=new IntersectionObserver(D,{...R,root:t.ownerDocument})}catch{a=new IntersectionObserver(D,R)}a.observe(e)}return i(!0),l}function gl(e,n,a,r){r===void 0&&(r={});const{ancestorScroll:t=!0,ancestorResize:l=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:o=!1}=r,d=Yl(e),u=t||l?[...d?Qn(d):[],...Qn(n)]:[];u.forEach(S=>{t&&S.addEventListener("scroll",a,{passive:!0}),l&&S.addEventListener("resize",a)});const E=d&&s?K_(d,a):null;let _=-1,T=null;i&&(T=new ResizeObserver(S=>{let[c]=S;c&&c.target===d&&T&&(T.unobserve(n),cancelAnimationFrame(_),_=requestAnimationFrame(()=>{var R;(R=T)==null||R.observe(n)})),a()}),d&&!o&&T.observe(d),T.observe(n));let I,f=o?dr(e):null;o&&g();function g(){const S=dr(e);f&&!jo(f,S)&&a(),f=S,I=requestAnimationFrame(g)}return a(),()=>{var S;u.forEach(c=>{t&&c.removeEventListener("scroll",a),l&&c.removeEventListener("resize",a)}),E?.(),(S=T)==null||S.disconnect(),T=null,o&&cancelAnimationFrame(I)}}const P_=s_,G_=o_,B_=t_,Ji=a_,F_=(e,n,a)=>{const r=new Map,t={platform:h_,...a},l={...t.platform,_c:r};return r_(e,n,{...t,platform:l})};var V_=typeof document<"u",w_=function(){},ut=V_?v.useLayoutEffect:w_;function vt(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let a,r,t;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(a=e.length,a!==n.length)return!1;for(r=a;r--!==0;)if(!vt(e[r],n[r]))return!1;return!0}if(t=Object.keys(e),a=t.length,a!==Object.keys(n).length)return!1;for(r=a;r--!==0;)if(!{}.hasOwnProperty.call(n,t[r]))return!1;for(r=a;r--!==0;){const l=t[r];if(!(l==="_owner"&&e.$$typeof)&&!vt(e[l],n[l]))return!1}return!0}return e!==e&&n!==n}function qo(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Yi(e,n){const a=qo(e);return Math.round(n*a)/a}function Xt(e){const n=v.useRef(e);return ut(()=>{n.current=e}),n}function U_(e){e===void 0&&(e={});const{placement:n="bottom",strategy:a="absolute",middleware:r=[],platform:t,elements:{reference:l,floating:i}={},transform:s=!0,whileElementsMounted:o,open:d}=e,[u,E]=v.useState({x:0,y:0,strategy:a,placement:n,middlewareData:{},isPositioned:!1}),[_,T]=v.useState(r);vt(_,r)||T(r);const[I,f]=v.useState(null),[g,S]=v.useState(null),c=v.useCallback(V=>{V!==k.current&&(k.current=V,f(V))},[]),R=v.useCallback(V=>{V!==L.current&&(L.current=V,S(V))},[]),A=l||I,D=i||g,k=v.useRef(null),L=v.useRef(null),B=v.useRef(u),M=o!=null,G=Xt(o),w=Xt(t),K=Xt(d),O=v.useCallback(()=>{if(!k.current||!L.current)return;const V={placement:n,strategy:a,middleware:_};w.current&&(V.platform=w.current),F_(k.current,L.current,V).then(F=>{const Y={...F,isPositioned:K.current!==!1};b.current&&!vt(B.current,Y)&&(B.current=Y,wl.flushSync(()=>{E(Y)}))})},[_,n,a,w,K]);ut(()=>{d===!1&&B.current.isPositioned&&(B.current.isPositioned=!1,E(V=>({...V,isPositioned:!1})))},[d]);const b=v.useRef(!1);ut(()=>(b.current=!0,()=>{b.current=!1}),[]),ut(()=>{if(A&&(k.current=A),D&&(L.current=D),A&&D){if(G.current)return G.current(A,D,O);O()}},[A,D,O,G,M]);const P=v.useMemo(()=>({reference:k,floating:L,setReference:c,setFloating:R}),[c,R]),U=v.useMemo(()=>({reference:A,floating:D}),[A,D]),j=v.useMemo(()=>{const V={position:a,left:0,top:0};if(!U.floating)return V;const F=Yi(U.floating,u.x),Y=Yi(U.floating,u.y);return s?{...V,transform:"translate("+F+"px, "+Y+"px)",...qo(U.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:F,top:Y}},[a,s,U.floating,u.x,u.y]);return v.useMemo(()=>({...u,update:O,refs:P,elements:U,floatingStyles:j}),[u,O,P,U,j])}const j_=e=>{function n(a){return{}.hasOwnProperty.call(a,"current")}return{name:"arrow",options:e,fn(a){const{element:r,padding:t}=typeof e=="function"?e(a):e;return r&&n(r)?r.current!=null?Ji({element:r.current,padding:t}).fn(a):{}:r?Ji({element:r,padding:t}).fn(a):{}}}},Ho=(e,n)=>({...P_(e),options:[e,n]}),xo=(e,n)=>({...G_(e),options:[e,n]}),Jo=(e,n)=>({...B_(e),options:[e,n]}),Yo=(e,n)=>({...j_(e),options:[e,n]}),Ci=/(\w+)/g;function q_(e,n){const a=Array.isArray(e)?e:H_(e);for(const r of n){if(!r)continue;let t=r;for(let l=0;l<a.length;l++){const i=t[a[l]];i!==void 0&&(t=i)}if(typeof t=="string")return t}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function H_(e){const n=[];let a=Ci.exec(e);for(;a;){const[,r,t]=a;n.push(r||t),a=Ci.exec(e)}return n}const x_=/{[^}]*}/g;function xn(e,...n){const a=Lt(),r=a.translations||[],t=[...n,...Array.isArray(r)?r.map(i=>i[e]):[r[e]],a.locale[e]];return(i,s)=>{const o=q_(i,t);return s?o.replace(x_,d=>{const u=d.substring(1,d.length-1);if(s[u]===void 0){const E=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${E}'`)}return s[u]}):o}}function Co(){const e=Lt(),n=e.translations||[],a=Array.isArray(n)?n.map(r=>r.global):[n.global];a.push(e.locale.global);for(const r of a)if(r?.dateLocale)return r.dateLocale;throw new Error("dateLocale not found.")}var J_=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Y_=v.forwardRef((e,n)=>{var{className:a,size:r="medium",title:t,transparent:l=!1,variant:i="neutral",id:s,"data-color":o}=e,d=J_(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:u}=ee(),E=cn(),_=xn("Loader");return m.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${E}`,ref:n,className:u("navds-loader",a,`navds-loader--${r}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":o??C_(i)},Je(d,["children"]),{"data-variant":i}),m.createElement("title",{id:s??`loader-${E}`},t||_("title")),m.createElement("circle",{className:u("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),m.createElement("circle",{className:u("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function C_(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var $_=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const ke=v.forwardRef((e,n)=>{var{as:a="button",variant:r="primary",className:t,children:l,size:i="medium",loading:s=!1,disabled:o,icon:d,iconPosition:u="left",onKeyUp:E,"data-color":_}=e,T=$_(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:I}=ee(),f=o||s?Je(T,["href"]):T,g=S=>{S.key===" "&&!o&&!s&&S.currentTarget.click()};return m.createElement(a,Object.assign({},a!=="button"?{role:"button"}:{},{"data-color":_??W_(r),"data-variant":z_(r)},f,{ref:n,onKeyUp:Xn(E,g),className:I(t,"navds-button",`navds-button--${r}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!d&&!l,"navds-button--disabled":o??s}),disabled:o??s?!0:void 0}),d&&u==="left"&&m.createElement("span",{className:I("navds-button__icon")},d),s&&m.createElement(Y_,{size:i}),l&&m.createElement(ge,{as:"span",size:i==="medium"?"medium":"small"},l),d&&u==="right"&&m.createElement("span",{className:I("navds-button__icon")},d))});function W_(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function z_(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var X_=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Q_={error:UE,warning:jl,info:gE,success:mE},ca=v.forwardRef((e,n)=>{var{children:a,className:r,variant:t,size:l="medium",fullWidth:i=!1,contentMaxWidth:s=!0,inline:o=!1,closeButton:d=!1,onClose:u}=e,E=X_(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:_}=ee(),T=xn("Alert"),I=Q_[t];return m.createElement("div",Object.assign({},E,{"data-color":Z_(t),"data-variant":t,ref:n,className:_(r,"navds-alert",`navds-alert--${t}`,`navds-alert--${l}`,{"navds-alert--full-width":i,"navds-alert--inline":o,"navds-alert--close-button":d})}),m.createElement(I,{title:T(t),className:_("navds-alert__icon")}),m.createElement(Ul,{as:"div",size:l,className:_("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},a),d&&!o&&m.createElement("div",{className:_("navds-alert__button-wrapper")},m.createElement(ke,{className:_("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:m.createElement(fo,{title:["error","warning"].includes(t)?T("closeAlert"):T("closeMessage")})})))});function Z_(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function Sa(e,n,a){const r=ie(e,a?.in);return isNaN(n)?Ne(a?.in||e,NaN):(n&&r.setDate(r.getDate()+n),r)}function Cl(e,n,a){const r=ie(e,a?.in);if(isNaN(n))return Ne(e,NaN);if(!n)return r;const t=r.getDate(),l=Ne(e,r.getTime());l.setMonth(r.getMonth()+n+1,0);const i=l.getDate();return t>=i?l:(r.setFullYear(l.getFullYear(),l.getMonth(),t),r)}function It(e,n){const a=ie(e,n?.in).getDay();return a===0||a===6}function Er(e,n){return Un(e,{...n,weekStartsOn:1})}function $o(e,n){const a=ie(e,n?.in),r=a.getFullYear(),t=Ne(a,0);t.setFullYear(r+1,0,4),t.setHours(0,0,0,0);const l=Er(t),i=Ne(a,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=Er(i);return a.getTime()>=l.getTime()?r+1:a.getTime()>=s.getTime()?r:r-1}function Rt(e){const n=ie(e),a=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return a.setUTCFullYear(n.getFullYear()),+e-+a}function qn(e,n){const a=ie(e,n?.in);return a.setHours(0,0,0,0),a}function zn(e,n,a){const[r,t]=Jr(a?.in,e,n),l=qn(r),i=qn(t),s=+l-Rt(l),o=+i-Rt(i);return Math.round((s-o)/YE)}function eT(e,n){const a=$o(e,n),r=Ne(e,0);return r.setFullYear(a,0,4),r.setHours(0,0,0,0),Er(r)}function nT(e,n,a){return Sa(e,n*7,a)}function $l(e,n,a){return Cl(e,n*12,a)}function rT(e,n){let a,r=n?.in;return e.forEach(t=>{!r&&typeof t=="object"&&(r=Ne.bind(null,t));const l=ie(t,r);(!a||a<l||isNaN(+l))&&(a=l)}),Ne(r,a||NaN)}function aT(e,n){let a,r=n?.in;return e.forEach(t=>{!r&&typeof t=="object"&&(r=Ne.bind(null,t));const l=ie(t,r);(!a||a>l||isNaN(+l))&&(a=l)}),Ne(r,a||NaN)}function Wl(e,n,a){const[r,t]=Jr(a?.in,e,n);return+qn(r)==+qn(t)}function Wo(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function tT(e){return!(!Wo(e)&&typeof e!="number"||isNaN(+ie(e)))}function lT(e,n,a){const[r,t]=Jr(a?.in,e,n),l=r.getFullYear()-t.getFullYear(),i=r.getMonth()-t.getMonth();return l*12+i}function zo(e,n){const a=ie(e,n?.in),r=a.getMonth();return a.setFullYear(a.getFullYear(),r+1,0),a.setHours(23,59,59,999),a}function iT(e,n){const[a,r]=Jr(e,n.start,n.end);return{start:a,end:r}}function Xo(e,n){const{start:a,end:r}=iT(n?.in,e);let t=+a>+r;const l=t?+a:+r,i=t?r:a;i.setHours(0,0,0,0),i.setDate(1);let s=1;const o=[];for(;+i<=l;)o.push(Ne(a,i)),i.setMonth(i.getMonth()+s);return t?o.reverse():o}function mr(e,n){const a=ie(e,n?.in);return a.setDate(1),a.setHours(0,0,0,0),a}function Gt(e,n){const a=ie(e,n?.in),r=a.getFullYear();return a.setFullYear(r+1,0,0),a.setHours(23,59,59,999),a}function Da(e,n){const a=ie(e,n?.in);return a.setFullYear(a.getFullYear(),0,1),a.setHours(0,0,0,0),a}function Qo(e,n){const a=Tr(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,t=ie(e,n?.in),l=t.getDay(),i=(l<r?-7:0)+6-(l-r);return t.setDate(t.getDate()+i),t.setHours(23,59,59,999),t}function sT(e,n){return Qo(e,{...n,weekStartsOn:1})}function oT(e,n){const a=ie(e,n?.in);return zn(a,Da(a))+1}function zl(e,n){const a=ie(e,n?.in),r=+Er(a)-+eT(a);return Math.round(r/co)+1}function Xl(e,n){const a=ie(e,n?.in),r=a.getFullYear(),t=Tr(),l=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??t.firstWeekContainsDate??t.locale?.options?.firstWeekContainsDate??1,i=Ne(n?.in||e,0);i.setFullYear(r+1,0,l),i.setHours(0,0,0,0);const s=Un(i,n),o=Ne(n?.in||e,0);o.setFullYear(r,0,l),o.setHours(0,0,0,0);const d=Un(o,n);return+a>=+s?r+1:+a>=+d?r:r-1}function uT(e,n){const a=Tr(),r=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,t=Xl(e,n),l=Ne(n?.in||e,0);return l.setFullYear(t,0,r),l.setHours(0,0,0,0),Un(l,n)}function Ql(e,n){const a=ie(e,n?.in),r=+Un(a,n)-+uT(a,n);return Math.round(r/co)+1}function me(e,n){const a=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return a+r}const $n={y(e,n){const a=e.getFullYear(),r=a>0?a:1-a;return me(n==="yy"?r%100:r,n.length)},M(e,n){const a=e.getMonth();return n==="M"?String(a+1):me(a+1,2)},d(e,n){return me(e.getDate(),n.length)},a(e,n){const a=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h(e,n){return me(e.getHours()%12||12,n.length)},H(e,n){return me(e.getHours(),n.length)},m(e,n){return me(e.getMinutes(),n.length)},s(e,n){return me(e.getSeconds(),n.length)},S(e,n){const a=n.length,r=e.getMilliseconds(),t=Math.trunc(r*Math.pow(10,a-3));return me(t,n.length)}},fr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},$i={G:function(e,n,a){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return a.era(r,{width:"abbreviated"});case"GGGGG":return a.era(r,{width:"narrow"});case"GGGG":default:return a.era(r,{width:"wide"})}},y:function(e,n,a){if(n==="yo"){const r=e.getFullYear(),t=r>0?r:1-r;return a.ordinalNumber(t,{unit:"year"})}return $n.y(e,n)},Y:function(e,n,a,r){const t=Xl(e,r),l=t>0?t:1-t;if(n==="YY"){const i=l%100;return me(i,2)}return n==="Yo"?a.ordinalNumber(l,{unit:"year"}):me(l,n.length)},R:function(e,n){const a=$o(e);return me(a,n.length)},u:function(e,n){const a=e.getFullYear();return me(a,n.length)},Q:function(e,n,a){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return me(r,2);case"Qo":return a.ordinalNumber(r,{unit:"quarter"});case"QQQ":return a.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,a){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return me(r,2);case"qo":return a.ordinalNumber(r,{unit:"quarter"});case"qqq":return a.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,a){const r=e.getMonth();switch(n){case"M":case"MM":return $n.M(e,n);case"Mo":return a.ordinalNumber(r+1,{unit:"month"});case"MMM":return a.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,a){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return me(r+1,2);case"Lo":return a.ordinalNumber(r+1,{unit:"month"});case"LLL":return a.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,a,r){const t=Ql(e,r);return n==="wo"?a.ordinalNumber(t,{unit:"week"}):me(t,n.length)},I:function(e,n,a){const r=zl(e);return n==="Io"?a.ordinalNumber(r,{unit:"week"}):me(r,n.length)},d:function(e,n,a){return n==="do"?a.ordinalNumber(e.getDate(),{unit:"date"}):$n.d(e,n)},D:function(e,n,a){const r=oT(e);return n==="Do"?a.ordinalNumber(r,{unit:"dayOfYear"}):me(r,n.length)},E:function(e,n,a){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return a.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(r,{width:"short",context:"formatting"});case"EEEE":default:return a.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,a,r){const t=e.getDay(),l=(t-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(l);case"ee":return me(l,2);case"eo":return a.ordinalNumber(l,{unit:"day"});case"eee":return a.day(t,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(t,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(t,{width:"short",context:"formatting"});case"eeee":default:return a.day(t,{width:"wide",context:"formatting"})}},c:function(e,n,a,r){const t=e.getDay(),l=(t-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(l);case"cc":return me(l,n.length);case"co":return a.ordinalNumber(l,{unit:"day"});case"ccc":return a.day(t,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(t,{width:"narrow",context:"standalone"});case"cccccc":return a.day(t,{width:"short",context:"standalone"});case"cccc":default:return a.day(t,{width:"wide",context:"standalone"})}},i:function(e,n,a){const r=e.getDay(),t=r===0?7:r;switch(n){case"i":return String(t);case"ii":return me(t,n.length);case"io":return a.ordinalNumber(t,{unit:"day"});case"iii":return a.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(r,{width:"short",context:"formatting"});case"iiii":default:return a.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,a){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})}},b:function(e,n,a){const r=e.getHours();let t;switch(r===12?t=fr.noon:r===0?t=fr.midnight:t=r/12>=1?"pm":"am",n){case"b":case"bb":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})}},B:function(e,n,a){const r=e.getHours();let t;switch(r>=17?t=fr.evening:r>=12?t=fr.afternoon:r>=4?t=fr.morning:t=fr.night,n){case"B":case"BB":case"BBB":return a.dayPeriod(t,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(t,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(t,{width:"wide",context:"formatting"})}},h:function(e,n,a){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),a.ordinalNumber(r,{unit:"hour"})}return $n.h(e,n)},H:function(e,n,a){return n==="Ho"?a.ordinalNumber(e.getHours(),{unit:"hour"}):$n.H(e,n)},K:function(e,n,a){const r=e.getHours()%12;return n==="Ko"?a.ordinalNumber(r,{unit:"hour"}):me(r,n.length)},k:function(e,n,a){let r=e.getHours();return r===0&&(r=24),n==="ko"?a.ordinalNumber(r,{unit:"hour"}):me(r,n.length)},m:function(e,n,a){return n==="mo"?a.ordinalNumber(e.getMinutes(),{unit:"minute"}):$n.m(e,n)},s:function(e,n,a){return n==="so"?a.ordinalNumber(e.getSeconds(),{unit:"second"}):$n.s(e,n)},S:function(e,n){return $n.S(e,n)},X:function(e,n,a){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return zi(r);case"XXXX":case"XX":return lr(r);case"XXXXX":case"XXX":default:return lr(r,":")}},x:function(e,n,a){const r=e.getTimezoneOffset();switch(n){case"x":return zi(r);case"xxxx":case"xx":return lr(r);case"xxxxx":case"xxx":default:return lr(r,":")}},O:function(e,n,a){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Wi(r,":");case"OOOO":default:return"GMT"+lr(r,":")}},z:function(e,n,a){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Wi(r,":");case"zzzz":default:return"GMT"+lr(r,":")}},t:function(e,n,a){const r=Math.trunc(+e/1e3);return me(r,n.length)},T:function(e,n,a){return me(+e,n.length)}};function Wi(e,n=""){const a=e>0?"-":"+",r=Math.abs(e),t=Math.trunc(r/60),l=r%60;return l===0?a+String(t):a+String(t)+n+me(l,2)}function zi(e,n){return e%60===0?(e>0?"-":"+")+me(Math.abs(e)/60,2):lr(e,n)}function lr(e,n=""){const a=e>0?"-":"+",r=Math.abs(e),t=me(Math.trunc(r/60),2),l=me(r%60,2);return a+t+n+l}const Xi=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},Zo=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},dT=(e,n)=>{const a=e.match(/(P+)(p+)?/)||[],r=a[1],t=a[2];if(!t)return Xi(e,n);let l;switch(r){case"P":l=n.dateTime({width:"short"});break;case"PP":l=n.dateTime({width:"medium"});break;case"PPP":l=n.dateTime({width:"long"});break;case"PPPP":default:l=n.dateTime({width:"full"});break}return l.replace("{{date}}",Xi(r,n)).replace("{{time}}",Zo(t,n))},fl={p:Zo,P:dT},ET=/^D+$/,mT=/^Y+$/,NT=["D","DD","YY","YYYY"];function eu(e){return ET.test(e)}function nu(e){return mT.test(e)}function cl(e,n,a){const r=_T(e,n,a);if(console.warn(r),NT.includes(e))throw new RangeError(r)}function _T(e,n,a){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${a}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const TT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,vT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,IT=/^'([^]*?)'?$/,RT=/''/g,gT=/[a-zA-Z]/;function Nr(e,n,a){const r=Tr(),t=a?.locale??r.locale??yt,l=a?.firstWeekContainsDate??a?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=a?.weekStartsOn??a?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=ie(e,a?.in);if(!tT(s))throw new RangeError("Invalid time value");let o=n.match(vT).map(u=>{const E=u[0];if(E==="p"||E==="P"){const _=fl[E];return _(u,t.formatLong)}return u}).join("").match(TT).map(u=>{if(u==="''")return{isToken:!1,value:"'"};const E=u[0];if(E==="'")return{isToken:!1,value:fT(u)};if($i[E])return{isToken:!0,value:u};if(E.match(gT))throw new RangeError("Format string contains an unescaped latin alphabet character `"+E+"`");return{isToken:!1,value:u}});t.localize.preprocessor&&(o=t.localize.preprocessor(s,o));const d={firstWeekContainsDate:l,weekStartsOn:i,locale:t};return o.map(u=>{if(!u.isToken)return u.value;const E=u.value;(!a?.useAdditionalWeekYearTokens&&nu(E)||!a?.useAdditionalDayOfYearTokens&&eu(E))&&cl(E,n,String(e));const _=$i[E[0]];return _(s,E,t.localize,d)}).join("")}function fT(e){const n=e.match(IT);return n?n[1].replace(RT,"'"):e}function cT(e,n){const a=ie(e,n?.in),r=a.getFullYear(),t=a.getMonth(),l=Ne(a,0);return l.setFullYear(r,t+1,0),l.setHours(0,0,0,0),l.getDate()}function ST(){return Object.assign({},Tr())}function DT(e,n){const a=ie(e,n?.in).getDay();return a===0?7:a}function Zl(e,n){return ie(e,n?.in).getMonth()}function ei(e,n){return ie(e,n?.in).getFullYear()}function ru(e,n){return+ie(e)>+ie(n)}function Aa(e,n){return+ie(e)<+ie(n)}function AT(e,n){const a=pT(n)?new n(0):Ne(n,0);return a.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),a.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),a}function pT(e){return typeof e=="function"&&e.prototype?.constructor===e}const OT=10;class au{subPriority=0;validate(n,a){return!0}}class kT extends au{constructor(n,a,r,t,l){super(),this.value=n,this.validateValue=a,this.setValue=r,this.priority=t,l&&(this.subPriority=l)}validate(n,a){return this.validateValue(n,this.value,a)}set(n,a,r){return this.setValue(n,a,this.value,r)}}class yT extends au{priority=OT;subPriority=-1;constructor(n,a){super(),this.context=n||(r=>Ne(a,r))}set(n,a){return a.timestampIsSet?n:Ne(n,AT(n,this.context))}}class ue{run(n,a,r,t){const l=this.parse(n,a,r,t);return l?{setter:new kT(l.value,this.validate,this.set,this.priority,this.subPriority),rest:l.rest}:null}validate(n,a,r){return!0}}class LT extends ue{priority=140;parse(n,a,r){switch(a){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"})||r.era(n,{width:"narrow"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})||r.era(n,{width:"abbreviated"})||r.era(n,{width:"narrow"})}}set(n,a,r){return a.era=r,n.setFullYear(r,0,1),n.setHours(0,0,0,0),n}incompatibleTokens=["R","u","t","T"]}const Me={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},pn={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function he(e,n){return e&&{value:n(e.value),rest:e.rest}}function Ae(e,n){const a=n.match(e);return a?{value:parseInt(a[0],10),rest:n.slice(a[0].length)}:null}function On(e,n){const a=n.match(e);if(!a)return null;if(a[0]==="Z")return{value:0,rest:n.slice(1)};const r=a[1]==="+"?1:-1,t=a[2]?parseInt(a[2],10):0,l=a[3]?parseInt(a[3],10):0,i=a[5]?parseInt(a[5],10):0;return{value:r*(t*$E+l*CE+i*WE),rest:n.slice(a[0].length)}}function tu(e){return Ae(Me.anyDigitsSigned,e)}function Le(e,n){switch(e){case 1:return Ae(Me.singleDigit,n);case 2:return Ae(Me.twoDigits,n);case 3:return Ae(Me.threeDigits,n);case 4:return Ae(Me.fourDigits,n);default:return Ae(new RegExp("^\\d{1,"+e+"}"),n)}}function gt(e,n){switch(e){case 1:return Ae(Me.singleDigitSigned,n);case 2:return Ae(Me.twoDigitsSigned,n);case 3:return Ae(Me.threeDigitsSigned,n);case 4:return Ae(Me.fourDigitsSigned,n);default:return Ae(new RegExp("^-?\\d{1,"+e+"}"),n)}}function ni(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function lu(e,n){const a=n>0,r=a?n:1-n;let t;if(r<=50)t=e||100;else{const l=r+50,i=Math.trunc(l/100)*100,s=e>=l%100;t=e+i-(s?100:0)}return a?t:1-t}function iu(e){return e%400===0||e%4===0&&e%100!==0}class bT extends ue{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(n,a,r){const t=l=>({year:l,isTwoDigitYear:a==="yy"});switch(a){case"y":return he(Le(4,n),t);case"yo":return he(r.ordinalNumber(n,{unit:"year"}),t);default:return he(Le(a.length,n),t)}}validate(n,a){return a.isTwoDigitYear||a.year>0}set(n,a,r){const t=n.getFullYear();if(r.isTwoDigitYear){const i=lu(r.year,t);return n.setFullYear(i,0,1),n.setHours(0,0,0,0),n}const l=!("era"in a)||a.era===1?r.year:1-r.year;return n.setFullYear(l,0,1),n.setHours(0,0,0,0),n}}class MT extends ue{priority=130;parse(n,a,r){const t=l=>({year:l,isTwoDigitYear:a==="YY"});switch(a){case"Y":return he(Le(4,n),t);case"Yo":return he(r.ordinalNumber(n,{unit:"year"}),t);default:return he(Le(a.length,n),t)}}validate(n,a){return a.isTwoDigitYear||a.year>0}set(n,a,r,t){const l=Xl(n,t);if(r.isTwoDigitYear){const s=lu(r.year,l);return n.setFullYear(s,0,t.firstWeekContainsDate),n.setHours(0,0,0,0),Un(n,t)}const i=!("era"in a)||a.era===1?r.year:1-r.year;return n.setFullYear(i,0,t.firstWeekContainsDate),n.setHours(0,0,0,0),Un(n,t)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]}class hT extends ue{priority=130;parse(n,a){return gt(a==="R"?4:a.length,n)}set(n,a,r){const t=Ne(n,0);return t.setFullYear(r,0,4),t.setHours(0,0,0,0),Er(t)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]}class KT extends ue{priority=130;parse(n,a){return gt(a==="u"?4:a.length,n)}set(n,a,r){return n.setFullYear(r,0,1),n.setHours(0,0,0,0),n}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]}class PT extends ue{priority=120;parse(n,a,r){switch(a){case"Q":case"QQ":return Le(a.length,n);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"})||r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})||r.quarter(n,{width:"abbreviated",context:"formatting"})||r.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,a){return a>=1&&a<=4}set(n,a,r){return n.setMonth((r-1)*3,1),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]}class GT extends ue{priority=120;parse(n,a,r){switch(a){case"q":case"qq":return Le(a.length,n);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"})||r.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})||r.quarter(n,{width:"abbreviated",context:"standalone"})||r.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,a){return a>=1&&a<=4}set(n,a,r){return n.setMonth((r-1)*3,1),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]}class BT extends ue{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(n,a,r){const t=l=>l-1;switch(a){case"M":return he(Ae(Me.month,n),t);case"MM":return he(Le(2,n),t);case"Mo":return he(r.ordinalNumber(n,{unit:"month"}),t);case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"})||r.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})||r.month(n,{width:"abbreviated",context:"formatting"})||r.month(n,{width:"narrow",context:"formatting"})}}validate(n,a){return a>=0&&a<=11}set(n,a,r){return n.setMonth(r,1),n.setHours(0,0,0,0),n}}class FT extends ue{priority=110;parse(n,a,r){const t=l=>l-1;switch(a){case"L":return he(Ae(Me.month,n),t);case"LL":return he(Le(2,n),t);case"Lo":return he(r.ordinalNumber(n,{unit:"month"}),t);case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"})||r.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})||r.month(n,{width:"abbreviated",context:"standalone"})||r.month(n,{width:"narrow",context:"standalone"})}}validate(n,a){return a>=0&&a<=11}set(n,a,r){return n.setMonth(r,1),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]}function VT(e,n,a){const r=ie(e,a?.in),t=Ql(r,a)-n;return r.setDate(r.getDate()-t*7),ie(r,a?.in)}class wT extends ue{priority=100;parse(n,a,r){switch(a){case"w":return Ae(Me.week,n);case"wo":return r.ordinalNumber(n,{unit:"week"});default:return Le(a.length,n)}}validate(n,a){return a>=1&&a<=53}set(n,a,r,t){return Un(VT(n,r,t),t)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]}function UT(e,n,a){const r=ie(e,a?.in),t=zl(r,a)-n;return r.setDate(r.getDate()-t*7),r}class jT extends ue{priority=100;parse(n,a,r){switch(a){case"I":return Ae(Me.week,n);case"Io":return r.ordinalNumber(n,{unit:"week"});default:return Le(a.length,n)}}validate(n,a){return a>=1&&a<=53}set(n,a,r){return Er(UT(n,r))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]}const qT=[31,28,31,30,31,30,31,31,30,31,30,31],HT=[31,29,31,30,31,30,31,31,30,31,30,31];class xT extends ue{priority=90;subPriority=1;parse(n,a,r){switch(a){case"d":return Ae(Me.date,n);case"do":return r.ordinalNumber(n,{unit:"date"});default:return Le(a.length,n)}}validate(n,a){const r=n.getFullYear(),t=iu(r),l=n.getMonth();return t?a>=1&&a<=HT[l]:a>=1&&a<=qT[l]}set(n,a,r){return n.setDate(r),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]}class JT extends ue{priority=90;subpriority=1;parse(n,a,r){switch(a){case"D":case"DD":return Ae(Me.dayOfYear,n);case"Do":return r.ordinalNumber(n,{unit:"date"});default:return Le(a.length,n)}}validate(n,a){const r=n.getFullYear();return iu(r)?a>=1&&a<=366:a>=1&&a<=365}set(n,a,r){return n.setMonth(0,r),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]}function ri(e,n,a){const r=Tr(),t=a?.weekStartsOn??a?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,l=ie(e,a?.in),i=l.getDay(),o=(n%7+7)%7,d=7-t,u=n<0||n>6?n-(i+d)%7:(o+d)%7-(i+d)%7;return Sa(l,u,a)}class YT extends ue{priority=90;parse(n,a,r){switch(a){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})||r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"})}}validate(n,a){return a>=0&&a<=6}set(n,a,r,t){return n=ri(n,r,t),n.setHours(0,0,0,0),n}incompatibleTokens=["D","i","e","c","t","T"]}class CT extends ue{priority=90;parse(n,a,r,t){const l=i=>{const s=Math.floor((i-1)/7)*7;return(i+t.weekStartsOn+6)%7+s};switch(a){case"e":case"ee":return he(Le(a.length,n),l);case"eo":return he(r.ordinalNumber(n,{unit:"day"}),l);case"eee":return r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"eeeee":return r.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return r.day(n,{width:"wide",context:"formatting"})||r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"})}}validate(n,a){return a>=0&&a<=6}set(n,a,r,t){return n=ri(n,r,t),n.setHours(0,0,0,0),n}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]}class $T extends ue{priority=90;parse(n,a,r,t){const l=i=>{const s=Math.floor((i-1)/7)*7;return(i+t.weekStartsOn+6)%7+s};switch(a){case"c":case"cc":return he(Le(a.length,n),l);case"co":return he(r.ordinalNumber(n,{unit:"day"}),l);case"ccc":return r.day(n,{width:"abbreviated",context:"standalone"})||r.day(n,{width:"short",context:"standalone"})||r.day(n,{width:"narrow",context:"standalone"});case"ccccc":return r.day(n,{width:"narrow",context:"standalone"});case"cccccc":return r.day(n,{width:"short",context:"standalone"})||r.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return r.day(n,{width:"wide",context:"standalone"})||r.day(n,{width:"abbreviated",context:"standalone"})||r.day(n,{width:"short",context:"standalone"})||r.day(n,{width:"narrow",context:"standalone"})}}validate(n,a){return a>=0&&a<=6}set(n,a,r,t){return n=ri(n,r,t),n.setHours(0,0,0,0),n}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]}function WT(e,n,a){const r=ie(e,a?.in),t=DT(r,a),l=n-t;return Sa(r,l,a)}class zT extends ue{priority=90;parse(n,a,r){const t=l=>l===0?7:l;switch(a){case"i":case"ii":return Le(a.length,n);case"io":return r.ordinalNumber(n,{unit:"day"});case"iii":return he(r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"}),t);case"iiiii":return he(r.day(n,{width:"narrow",context:"formatting"}),t);case"iiiiii":return he(r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"}),t);case"iiii":default:return he(r.day(n,{width:"wide",context:"formatting"})||r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"}),t)}}validate(n,a){return a>=1&&a<=7}set(n,a,r){return n=WT(n,r),n.setHours(0,0,0,0),n}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]}class XT extends ue{priority=80;parse(n,a,r){switch(a){case"a":case"aa":case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})||r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,a,r){return n.setHours(ni(r),0,0,0),n}incompatibleTokens=["b","B","H","k","t","T"]}class QT extends ue{priority=80;parse(n,a,r){switch(a){case"b":case"bb":case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})||r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,a,r){return n.setHours(ni(r),0,0,0),n}incompatibleTokens=["a","B","H","k","t","T"]}class ZT extends ue{priority=80;parse(n,a,r){switch(a){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})||r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,a,r){return n.setHours(ni(r),0,0,0),n}incompatibleTokens=["a","b","t","T"]}class ev extends ue{priority=70;parse(n,a,r){switch(a){case"h":return Ae(Me.hour12h,n);case"ho":return r.ordinalNumber(n,{unit:"hour"});default:return Le(a.length,n)}}validate(n,a){return a>=1&&a<=12}set(n,a,r){const t=n.getHours()>=12;return t&&r<12?n.setHours(r+12,0,0,0):!t&&r===12?n.setHours(0,0,0,0):n.setHours(r,0,0,0),n}incompatibleTokens=["H","K","k","t","T"]}class nv extends ue{priority=70;parse(n,a,r){switch(a){case"H":return Ae(Me.hour23h,n);case"Ho":return r.ordinalNumber(n,{unit:"hour"});default:return Le(a.length,n)}}validate(n,a){return a>=0&&a<=23}set(n,a,r){return n.setHours(r,0,0,0),n}incompatibleTokens=["a","b","h","K","k","t","T"]}class rv extends ue{priority=70;parse(n,a,r){switch(a){case"K":return Ae(Me.hour11h,n);case"Ko":return r.ordinalNumber(n,{unit:"hour"});default:return Le(a.length,n)}}validate(n,a){return a>=0&&a<=11}set(n,a,r){return n.getHours()>=12&&r<12?n.setHours(r+12,0,0,0):n.setHours(r,0,0,0),n}incompatibleTokens=["h","H","k","t","T"]}class av extends ue{priority=70;parse(n,a,r){switch(a){case"k":return Ae(Me.hour24h,n);case"ko":return r.ordinalNumber(n,{unit:"hour"});default:return Le(a.length,n)}}validate(n,a){return a>=1&&a<=24}set(n,a,r){const t=r<=24?r%24:r;return n.setHours(t,0,0,0),n}incompatibleTokens=["a","b","h","H","K","t","T"]}class tv extends ue{priority=60;parse(n,a,r){switch(a){case"m":return Ae(Me.minute,n);case"mo":return r.ordinalNumber(n,{unit:"minute"});default:return Le(a.length,n)}}validate(n,a){return a>=0&&a<=59}set(n,a,r){return n.setMinutes(r,0,0),n}incompatibleTokens=["t","T"]}class lv extends ue{priority=50;parse(n,a,r){switch(a){case"s":return Ae(Me.second,n);case"so":return r.ordinalNumber(n,{unit:"second"});default:return Le(a.length,n)}}validate(n,a){return a>=0&&a<=59}set(n,a,r){return n.setSeconds(r,0),n}incompatibleTokens=["t","T"]}class iv extends ue{priority=30;parse(n,a){const r=t=>Math.trunc(t*Math.pow(10,-a.length+3));return he(Le(a.length,n),r)}set(n,a,r){return n.setMilliseconds(r),n}incompatibleTokens=["t","T"]}class sv extends ue{priority=10;parse(n,a){switch(a){case"X":return On(pn.basicOptionalMinutes,n);case"XX":return On(pn.basic,n);case"XXXX":return On(pn.basicOptionalSeconds,n);case"XXXXX":return On(pn.extendedOptionalSeconds,n);case"XXX":default:return On(pn.extended,n)}}set(n,a,r){return a.timestampIsSet?n:Ne(n,n.getTime()-Rt(n)-r)}incompatibleTokens=["t","T","x"]}class ov extends ue{priority=10;parse(n,a){switch(a){case"x":return On(pn.basicOptionalMinutes,n);case"xx":return On(pn.basic,n);case"xxxx":return On(pn.basicOptionalSeconds,n);case"xxxxx":return On(pn.extendedOptionalSeconds,n);case"xxx":default:return On(pn.extended,n)}}set(n,a,r){return a.timestampIsSet?n:Ne(n,n.getTime()-Rt(n)-r)}incompatibleTokens=["t","T","X"]}class uv extends ue{priority=40;parse(n){return tu(n)}set(n,a,r){return[Ne(n,r*1e3),{timestampIsSet:!0}]}incompatibleTokens="*"}class dv extends ue{priority=20;parse(n){return tu(n)}set(n,a,r){return[Ne(n,r),{timestampIsSet:!0}]}incompatibleTokens="*"}const Ev={G:new LT,y:new bT,Y:new MT,R:new hT,u:new KT,Q:new PT,q:new GT,M:new BT,L:new FT,w:new wT,I:new jT,d:new xT,D:new JT,E:new YT,e:new CT,c:new $T,i:new zT,a:new XT,b:new QT,B:new ZT,h:new ev,H:new nv,K:new rv,k:new av,m:new tv,s:new lv,S:new iv,X:new sv,x:new ov,t:new uv,T:new dv},mv=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Nv=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,_v=/^'([^]*?)'?$/,Tv=/''/g,vv=/\S/,Iv=/[a-zA-Z]/;function kr(e,n,a,r){const t=()=>Ne(r?.in||a,NaN),l=ST(),i=r?.locale??l.locale??yt,s=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??l.firstWeekContainsDate??l.locale?.options?.firstWeekContainsDate??1,o=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??l.weekStartsOn??l.locale?.options?.weekStartsOn??0;if(!n)return e?t():ie(a,r?.in);const d={firstWeekContainsDate:s,weekStartsOn:o,locale:i},u=[new yT(r?.in,a)],E=n.match(Nv).map(g=>{const S=g[0];if(S in fl){const c=fl[S];return c(g,i.formatLong)}return g}).join("").match(mv),_=[];for(let g of E){!r?.useAdditionalWeekYearTokens&&nu(g)&&cl(g,n,e),!r?.useAdditionalDayOfYearTokens&&eu(g)&&cl(g,n,e);const S=g[0],c=Ev[S];if(c){const{incompatibleTokens:R}=c;if(Array.isArray(R)){const D=_.find(k=>R.includes(k.token)||k.token===S);if(D)throw new RangeError(`The format string mustn't contain \`${D.fullToken}\` and \`${g}\` at the same time`)}else if(c.incompatibleTokens==="*"&&_.length>0)throw new RangeError(`The format string mustn't contain \`${g}\` and any other token at the same time`);_.push({token:S,fullToken:g});const A=c.run(e,g,i.match,d);if(!A)return t();u.push(A.setter),e=A.rest}else{if(S.match(Iv))throw new RangeError("Format string contains an unescaped latin alphabet character `"+S+"`");if(g==="''"?g="'":S==="'"&&(g=Rv(g)),e.indexOf(g)===0)e=e.slice(g.length);else return t()}}if(e.length>0&&vv.test(e))return t();const T=u.map(g=>g.priority).sort((g,S)=>S-g).filter((g,S,c)=>c.indexOf(g)===S).map(g=>u.filter(S=>S.priority===g).sort((S,c)=>c.subPriority-S.subPriority)).map(g=>g[0]);let I=ie(a,r?.in);if(isNaN(+I))return t();const f={};for(const g of T){if(!g.validate(I,d))return t();const S=g.set(I,f,d);Array.isArray(S)?(I=S[0],Object.assign(f,S[1])):I=S}return I}function Rv(e){return e.match(_v)[1].replace(Tv,"'")}function gv(e,n,a){const[r,t]=Jr(a?.in,e,n);return r.getFullYear()===t.getFullYear()&&r.getMonth()===t.getMonth()}function su(e,n,a){const[r,t]=Jr(a?.in,e,n);return r.getFullYear()===t.getFullYear()}function fv(e,n,a){return Sa(e,-n,a)}function ou(e,n,a){const r=ie(e,a?.in),t=r.getFullYear(),l=r.getDate(),i=Ne(e,0);i.setFullYear(t,n,15),i.setHours(0,0,0,0);const s=cT(i);return r.setMonth(n,Math.min(l,s)),r}function uu(e,n,a){const r=ie(e,a?.in);return isNaN(+r)?Ne(e,NaN):(r.setFullYear(n),r)}function cv(e,n,a){return Cl(e,-n,a)}function Sv(e,n,a){const{years:r=0,months:t=0,weeks:l=0,days:i=0,hours:s=0,minutes:o=0,seconds:d=0}=n,u=cv(e,t+r*12,a),E=fv(u,i+l*7,a),_=o+s*60,I=(d+_*60)*1e3;return Ne(e,+E-I)}function Dv(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Av(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(n=>{let{brand:a,version:r}=n;return a+"/"+r}).join(" "):navigator.userAgent}function pv(){return/apple/i.test(navigator.vendor)}function Ov(){return Dv().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function kv(){return Av().includes("jsdom/")}const yv="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Qi(e){let n=e.activeElement;for(;((a=n)==null||(a=a.shadowRoot)==null?void 0:a.activeElement)!=null;){var a;n=n.shadowRoot.activeElement}return n}function ma(e,n){if(!e||!n)return!1;const a=n.getRootNode==null?void 0:n.getRootNode();if(e.contains(n))return!0;if(a&&Tt(a)){let r=n;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Dr(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Qt(e,n){if(n==null)return!1;if("composedPath"in e)return e.composedPath().includes(n);const a=e;return a.target!=null&&n.contains(a.target)}function Lv(e){return e.matches("html,body")}function ir(e){return e?.ownerDocument||document}function bv(e){return ln(e)&&e.matches(yv)}function Mv(e){if(!e||kv())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function Zt(e,n,a){a===void 0&&(a=!0);let r=e.filter(l=>{var i;return l.parentId===n&&((i=l.context)==null?void 0:i.open)}),t=r;for(;t.length;)t=a?e.filter(l=>{var i;return(i=t)==null?void 0:i.some(s=>{var o;return l.parentId===s.id&&((o=l.context)==null?void 0:o.open)})}):e,r=r.concat(t);return r}function hv(e){return"nativeEvent"in e}function Sl(e,n){const a=["mouse","pen"];return a.push("",void 0),a.includes(e)}var wn=typeof document<"u"?v.useLayoutEffect:v.useEffect;const Kv={...so};function Pa(e){const n=v.useRef(e);return wn(()=>{n.current=e}),n}const Pv=Kv.useInsertionEffect,Gv=Pv||(e=>e());function Pn(e){const n=v.useRef(()=>{});return Gv(()=>{n.current=e}),v.useCallback(function(){for(var a=arguments.length,r=new Array(a),t=0;t<a;t++)r[t]=arguments[t];return n.current==null?void 0:n.current(...r)},[])}const Bv="data-floating-ui-focusable",Zi="active",es="selected",Fv={...so};let ns=!1,Vv=0;const rs=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Vv++;function wv(){const[e,n]=v.useState(()=>ns?rs():void 0);return wn(()=>{e==null&&n(rs())},[]),v.useEffect(()=>{ns=!0},[]),e}const Uv=Fv.useId,du=Uv||wv;function jv(){const e=new Map;return{emit(n,a){var r;(r=e.get(n))==null||r.forEach(t=>t(a))},on(n,a){e.has(n)||e.set(n,new Set),e.get(n).add(a)},off(n,a){var r;(r=e.get(n))==null||r.delete(a)}}}const qv=v.createContext(null),Hv=v.createContext(null),Eu=()=>{var e;return((e=v.useContext(qv))==null?void 0:e.id)||null},ai=()=>v.useContext(Hv);function Bt(e){return"data-floating-ui-"+e}function on(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const as=Bt("safe-polygon");function el(e,n,a){if(a&&!Sl(a))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const r=e();return typeof r=="number"?r:r?.[n]}return e?.[n]}function nl(e){return typeof e=="function"?e():e}function xv(e,n){n===void 0&&(n={});const{open:a,onOpenChange:r,dataRef:t,events:l,elements:i}=e,{enabled:s=!0,delay:o=0,handleClose:d=null,mouseOnly:u=!1,restMs:E=0,move:_=!0}=n,T=ai(),I=Eu(),f=Pa(d),g=Pa(o),S=Pa(a),c=Pa(E),R=v.useRef(),A=v.useRef(-1),D=v.useRef(),k=v.useRef(-1),L=v.useRef(!0),B=v.useRef(!1),M=v.useRef(()=>{}),G=v.useRef(!1),w=v.useCallback(()=>{var j;const V=(j=t.current.openEvent)==null?void 0:j.type;return V?.includes("mouse")&&V!=="mousedown"},[t]);v.useEffect(()=>{if(!s)return;function j(V){let{open:F}=V;F||(on(A),on(k),L.current=!0,G.current=!1)}return l.on("openchange",j),()=>{l.off("openchange",j)}},[s,l]),v.useEffect(()=>{if(!s||!f.current||!a)return;function j(F){w()&&r(!1,F,"hover")}const V=ir(i.floating).documentElement;return V.addEventListener("mouseleave",j),()=>{V.removeEventListener("mouseleave",j)}},[i.floating,a,r,s,f,w]);const K=v.useCallback(function(j,V,F){V===void 0&&(V=!0),F===void 0&&(F="hover");const Y=el(g.current,"close",R.current);Y&&!D.current?(on(A),A.current=window.setTimeout(()=>r(!1,j,F),Y)):V&&(on(A),r(!1,j,F))},[g,r]),O=Pn(()=>{M.current(),D.current=void 0}),b=Pn(()=>{if(B.current){const j=ir(i.floating).body;j.style.pointerEvents="",j.removeAttribute(as),B.current=!1}}),P=Pn(()=>t.current.openEvent?["click","mousedown"].includes(t.current.openEvent.type):!1);v.useEffect(()=>{if(!s)return;function j(W){if(on(A),L.current=!1,u&&!Sl(R.current)||nl(c.current)>0&&!el(g.current,"open"))return;const te=el(g.current,"open",R.current);te?A.current=window.setTimeout(()=>{S.current||r(!0,W,"hover")},te):a||r(!0,W,"hover")}function V(W){if(P()){b();return}M.current();const te=ir(i.floating);if(on(k),G.current=!1,f.current&&t.current.floatingContext){a||on(A),D.current=f.current({...t.current.floatingContext,tree:T,x:W.clientX,y:W.clientY,onClose(){b(),O(),P()||K(W,!0,"safe-polygon")}});const Z=D.current;te.addEventListener("mousemove",Z),M.current=()=>{te.removeEventListener("mousemove",Z)};return}(R.current==="touch"?!ma(i.floating,W.relatedTarget):!0)&&K(W)}function F(W){P()||t.current.floatingContext&&(f.current==null||f.current({...t.current.floatingContext,tree:T,x:W.clientX,y:W.clientY,onClose(){b(),O(),P()||K(W)}})(W))}function Y(){on(A)}function z(W){P()||K(W,!1)}if(ve(i.domReference)){const W=i.domReference,te=i.floating;return a&&W.addEventListener("mouseleave",F),_&&W.addEventListener("mousemove",j,{once:!0}),W.addEventListener("mouseenter",j),W.addEventListener("mouseleave",V),te&&(te.addEventListener("mouseleave",F),te.addEventListener("mouseenter",Y),te.addEventListener("mouseleave",z)),()=>{a&&W.removeEventListener("mouseleave",F),_&&W.removeEventListener("mousemove",j),W.removeEventListener("mouseenter",j),W.removeEventListener("mouseleave",V),te&&(te.removeEventListener("mouseleave",F),te.removeEventListener("mouseenter",Y),te.removeEventListener("mouseleave",z))}}},[i,s,e,u,_,K,O,b,r,a,S,T,g,f,t,P,c]),wn(()=>{var j;if(s&&a&&(j=f.current)!=null&&j.__options.blockPointerEvents&&w()){B.current=!0;const F=i.floating;if(ve(i.domReference)&&F){var V;const Y=ir(i.floating).body;Y.setAttribute(as,"");const z=i.domReference,W=T==null||(V=T.nodesRef.current.find(te=>te.id===I))==null||(V=V.context)==null?void 0:V.elements.floating;return W&&(W.style.pointerEvents=""),Y.style.pointerEvents="none",z.style.pointerEvents="auto",F.style.pointerEvents="auto",()=>{Y.style.pointerEvents="",z.style.pointerEvents="",F.style.pointerEvents=""}}}},[s,a,I,i,T,f,w]),wn(()=>{a||(R.current=void 0,G.current=!1,O(),b())},[a,O,b]),v.useEffect(()=>()=>{O(),on(A),on(k),b()},[s,i.domReference,O,b]);const U=v.useMemo(()=>{function j(V){R.current=V.pointerType}return{onPointerDown:j,onPointerEnter:j,onMouseMove(V){const{nativeEvent:F}=V;function Y(){!L.current&&!S.current&&r(!0,F,"hover")}u&&!Sl(R.current)||a||nl(c.current)===0||G.current&&V.movementX**2+V.movementY**2<2||(on(k),R.current==="touch"?Y():(G.current=!0,k.current=window.setTimeout(Y,nl(c.current))))}}},[u,r,a,S,c]);return v.useMemo(()=>s?{reference:U}:{},[s,U])}function rl(e,n){if(!e||!n)return!1;const a=n.getRootNode==null?void 0:n.getRootNode();if(e.contains(n))return!0;if(a&&Tt(a)){let r=n;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function Jv(e){return"composedPath"in e?e.composedPath()[0]:e.target}const Yv=v.createContext(null),ts=Bt("portal");function Cv(e){e===void 0&&(e={});const{id:n,root:a}=e,r=du(),t=$v(),[l,i]=v.useState(null),s=v.useRef(null);return wn(()=>()=>{l?.remove(),queueMicrotask(()=>{s.current=null})},[l]),wn(()=>{if(!r||s.current)return;const o=n?document.getElementById(n):null;if(!o)return;const d=document.createElement("div");d.id=r,d.setAttribute(ts,""),o.appendChild(d),s.current=d,i(d)},[n,r]),wn(()=>{if(a===null||!r||s.current)return;let o=a||t?.portalNode;o&&!ve(o)&&(o=o.current),o=o||document.body;let d=null;n&&(d=document.createElement("div"),d.id=n,o.appendChild(d));const u=document.createElement("div");u.id=r,u.setAttribute(ts,""),o=d||o,o.appendChild(u),s.current=u,i(u)},[n,a,r,t]),l}const $v=()=>v.useContext(Yv),Wv={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},zv={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},ls=e=>{var n,a;return{escapeKey:typeof e=="boolean"?e:(n=e?.escapeKey)!=null?n:!1,outsidePress:typeof e=="boolean"?e:(a=e?.outsidePress)!=null?a:!0}};function Xv(e,n){n===void 0&&(n={});const{open:a,onOpenChange:r,elements:t,dataRef:l}=e,{enabled:i=!0,escapeKey:s=!0,outsidePress:o=!0,outsidePressEvent:d="pointerdown",referencePress:u=!1,referencePressEvent:E="pointerdown",ancestorScroll:_=!1,bubbles:T,capture:I}=n,f=ai(),g=Pn(typeof o=="function"?o:()=>!1),S=typeof o=="function"?g:o,c=v.useRef(!1),R=v.useRef(!1),{escapeKey:A,outsidePress:D}=ls(T),{escapeKey:k,outsidePress:L}=ls(I),B=v.useRef(!1),M=Pn(P=>{var U;if(!a||!i||!s||P.key!=="Escape"||B.current)return;const j=(U=l.current.floatingContext)==null?void 0:U.nodeId,V=f?Zt(f.nodesRef.current,j):[];if(!A&&(P.stopPropagation(),V.length>0)){let F=!0;if(V.forEach(Y=>{var z;if((z=Y.context)!=null&&z.open&&!Y.context.dataRef.current.__escapeKeyBubbles){F=!1;return}}),!F)return}r(!1,hv(P)?P.nativeEvent:P,"escape-key")}),G=Pn(P=>{var U;const j=()=>{var V;M(P),(V=Dr(P))==null||V.removeEventListener("keydown",j)};(U=Dr(P))==null||U.addEventListener("keydown",j)}),w=Pn(P=>{var U;const j=c.current;c.current=!1;const V=R.current;if(R.current=!1,d==="click"&&V||j||typeof S=="function"&&!S(P))return;const F=Dr(P),Y="["+Bt("inert")+"]",z=ir(t.floating).querySelectorAll(Y);let W=ve(F)?F:null;for(;W&&!Vn(W);){const J=jn(W);if(Vn(J)||!ve(J))break;W=J}if(z.length&&ve(F)&&!Lv(F)&&!ma(F,t.floating)&&Array.from(z).every(J=>!ma(W,J)))return;if(ln(F)&&b){const J=Vn(F),re=Nn(F),ae=/auto|scroll/,de=J||ae.test(re.overflowX),we=J||ae.test(re.overflowY),Ue=de&&F.clientWidth>0&&F.scrollWidth>F.clientWidth,je=we&&F.clientHeight>0&&F.scrollHeight>F.clientHeight,Mn=re.direction==="rtl",sn=je&&(Mn?P.offsetX<=F.offsetWidth-F.clientWidth:P.offsetX>F.clientWidth),_n=Ue&&P.offsetY>F.clientHeight;if(sn||_n)return}const te=(U=l.current.floatingContext)==null?void 0:U.nodeId,Be=f&&Zt(f.nodesRef.current,te).some(J=>{var re;return Qt(P,(re=J.context)==null?void 0:re.elements.floating)});if(Qt(P,t.floating)||Qt(P,t.domReference)||Be)return;const Z=f?Zt(f.nodesRef.current,te):[];if(Z.length>0){let J=!0;if(Z.forEach(re=>{var ae;if((ae=re.context)!=null&&ae.open&&!re.context.dataRef.current.__outsidePressBubbles){J=!1;return}}),!J)return}r(!1,P,"outside-press")}),K=Pn(P=>{var U;const j=()=>{var V;w(P),(V=Dr(P))==null||V.removeEventListener(d,j)};(U=Dr(P))==null||U.addEventListener(d,j)});v.useEffect(()=>{if(!a||!i)return;l.current.__escapeKeyBubbles=A,l.current.__outsidePressBubbles=D;let P=-1;function U(z){r(!1,z,"ancestor-scroll")}function j(){window.clearTimeout(P),B.current=!0}function V(){P=window.setTimeout(()=>{B.current=!1},ht()?5:0)}const F=ir(t.floating);s&&(F.addEventListener("keydown",k?G:M,k),F.addEventListener("compositionstart",j),F.addEventListener("compositionend",V)),S&&F.addEventListener(d,L?K:w,L);let Y=[];return _&&(ve(t.domReference)&&(Y=Qn(t.domReference)),ve(t.floating)&&(Y=Y.concat(Qn(t.floating))),!ve(t.reference)&&t.reference&&t.reference.contextElement&&(Y=Y.concat(Qn(t.reference.contextElement)))),Y=Y.filter(z=>{var W;return z!==((W=F.defaultView)==null?void 0:W.visualViewport)}),Y.forEach(z=>{z.addEventListener("scroll",U,{passive:!0})}),()=>{s&&(F.removeEventListener("keydown",k?G:M,k),F.removeEventListener("compositionstart",j),F.removeEventListener("compositionend",V)),S&&F.removeEventListener(d,L?K:w,L),Y.forEach(z=>{z.removeEventListener("scroll",U)}),window.clearTimeout(P)}},[l,t,s,S,d,a,r,_,i,A,D,M,k,G,w,L,K]),v.useEffect(()=>{c.current=!1},[S,d]);const O=v.useMemo(()=>({onKeyDown:M,...u&&{[Wv[E]]:P=>{r(!1,P.nativeEvent,"reference-press")},...E!=="click"&&{onClick(P){r(!1,P.nativeEvent,"reference-press")}}}}),[M,r,u,E]),b=v.useMemo(()=>({onKeyDown:M,onMouseDown(){R.current=!0},onMouseUp(){R.current=!0},[zv[d]]:()=>{c.current=!0}}),[M,d]);return v.useMemo(()=>i?{reference:O,floating:b}:{},[i,O,b])}function Qv(e){const{open:n=!1,onOpenChange:a,elements:r}=e,t=du(),l=v.useRef({}),[i]=v.useState(()=>jv()),s=Eu()!=null,[o,d]=v.useState(r.reference),u=Pn((T,I,f)=>{l.current.openEvent=T?I:void 0,i.emit("openchange",{open:T,event:I,reason:f,nested:s}),a?.(T,I,f)}),E=v.useMemo(()=>({setPositionReference:d}),[]),_=v.useMemo(()=>({reference:o||r.reference||null,floating:r.floating||null,domReference:r.reference}),[o,r.reference,r.floating]);return v.useMemo(()=>({dataRef:l,open:n,onOpenChange:u,elements:_,events:i,floatingId:t,refs:E}),[n,u,_,i,t,E])}function mu(e){e===void 0&&(e={});const{nodeId:n}=e,a=Qv({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||a,t=r.elements,[l,i]=v.useState(null),[s,o]=v.useState(null),u=t?.domReference||l,E=v.useRef(null),_=ai();wn(()=>{u&&(E.current=u)},[u]);const T=U_({...e,elements:{...t,...s&&{reference:s}}}),I=v.useCallback(R=>{const A=ve(R)?{getBoundingClientRect:()=>R.getBoundingClientRect(),getClientRects:()=>R.getClientRects(),contextElement:R}:R;o(A),T.refs.setReference(A)},[T.refs]),f=v.useCallback(R=>{(ve(R)||R===null)&&(E.current=R,i(R)),(ve(T.refs.reference.current)||T.refs.reference.current===null||R!==null&&!ve(R))&&T.refs.setReference(R)},[T.refs]),g=v.useMemo(()=>({...T.refs,setReference:f,setPositionReference:I,domReference:E}),[T.refs,f,I]),S=v.useMemo(()=>({...T.elements,domReference:u}),[T.elements,u]),c=v.useMemo(()=>({...T,...r,refs:g,elements:S,nodeId:n}),[T,g,S,n,r]);return wn(()=>{r.dataRef.current.floatingContext=c;const R=_?.nodesRef.current.find(A=>A.id===n);R&&(R.context=c)}),v.useMemo(()=>({...T,context:c,refs:g,elements:S}),[T,g,S,c])}function al(){return Ov()&&pv()}function Zv(e,n){n===void 0&&(n={});const{open:a,onOpenChange:r,events:t,dataRef:l,elements:i}=e,{enabled:s=!0,visibleOnly:o=!0}=n,d=v.useRef(!1),u=v.useRef(-1),E=v.useRef(!0);v.useEffect(()=>{if(!s)return;const T=en(i.domReference);function I(){!a&&ln(i.domReference)&&i.domReference===Qi(ir(i.domReference))&&(d.current=!0)}function f(){E.current=!0}function g(){E.current=!1}return T.addEventListener("blur",I),al()&&(T.addEventListener("keydown",f,!0),T.addEventListener("pointerdown",g,!0)),()=>{T.removeEventListener("blur",I),al()&&(T.removeEventListener("keydown",f,!0),T.removeEventListener("pointerdown",g,!0))}},[i.domReference,a,s]),v.useEffect(()=>{if(!s)return;function T(I){let{reason:f}=I;(f==="reference-press"||f==="escape-key")&&(d.current=!0)}return t.on("openchange",T),()=>{t.off("openchange",T)}},[t,s]),v.useEffect(()=>()=>{on(u)},[]);const _=v.useMemo(()=>({onMouseLeave(){d.current=!1},onFocus(T){if(d.current)return;const I=Dr(T.nativeEvent);if(o&&ve(I)){if(al()&&!T.relatedTarget){if(!E.current&&!bv(I))return}else if(!Mv(I))return}r(!0,T.nativeEvent,"focus")},onBlur(T){d.current=!1;const I=T.relatedTarget,f=T.nativeEvent,g=ve(I)&&I.hasAttribute(Bt("focus-guard"))&&I.getAttribute("data-type")==="outside";u.current=window.setTimeout(()=>{var S;const c=Qi(i.domReference?i.domReference.ownerDocument:document);!I&&c===i.domReference||ma((S=l.current.floatingContext)==null?void 0:S.refs.floating.current,c)||ma(i.domReference,c)||g||r(!1,f,"focus")})}}),[l,i.domReference,r,o]);return v.useMemo(()=>s?{reference:_}:{},[s,_])}function tl(e,n,a){const r=new Map,t=a==="item";let l=e;if(t&&e){const{[Zi]:i,[es]:s,...o}=e;l=o}return{...a==="floating"&&{tabIndex:-1,[Bv]:""},...l,...n.map(i=>{const s=i?i[a]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((i,s)=>(s&&Object.entries(s).forEach(o=>{let[d,u]=o;if(!(t&&[Zi,es].includes(d)))if(d.indexOf("on")===0){if(r.has(d)||r.set(d,[]),typeof u=="function"){var E;(E=r.get(d))==null||E.push(u),i[d]=function(){for(var _,T=arguments.length,I=new Array(T),f=0;f<T;f++)I[f]=arguments[f];return(_=r.get(d))==null?void 0:_.map(g=>g(...I)).find(g=>g!==void 0)}}}else i[d]=u}),i),{})}}function eI(e){e===void 0&&(e=[]);const n=e.map(s=>s?.reference),a=e.map(s=>s?.floating),r=e.map(s=>s?.item),t=v.useCallback(s=>tl(s,e,"reference"),n),l=v.useCallback(s=>tl(s,e,"floating"),a),i=v.useCallback(s=>tl(s,e,"item"),r);return v.useMemo(()=>({getReferenceProps:t,getFloatingProps:l,getItemProps:i}),[t,l,i])}function nI(e,n,a){a===void 0&&(a=!0);let r=e.filter(l=>{var i;return l.parentId===n&&((i=l.context)==null?void 0:i.open)}),t=r;for(;t.length;)t=a?e.filter(l=>{var i;return(i=t)==null?void 0:i.some(s=>{var o;return l.parentId===s.id&&((o=l.context)==null?void 0:o.open)})}):e,r=r.concat(t);return r}function is(e,n){const[a,r]=e;let t=!1;const l=n.length;for(let i=0,s=l-1;i<l;s=i++){const[o,d]=n[i]||[0,0],[u,E]=n[s]||[0,0];d>=r!=E>=r&&a<=(u-o)*(r-d)/(E-d)+o&&(t=!t)}return t}function rI(e,n){return e[0]>=n.x&&e[0]<=n.x+n.width&&e[1]>=n.y&&e[1]<=n.y+n.height}function aI(e){e===void 0&&(e={});const{buffer:n=.5,blockPointerEvents:a=!1,requireIntent:r=!0}=e;let t,l=!1,i=null,s=null,o=performance.now();function d(E,_){const T=performance.now(),I=T-o;if(i===null||s===null||I===0)return i=E,s=_,o=T,null;const f=E-i,g=_-s,c=Math.sqrt(f*f+g*g)/I;return i=E,s=_,o=T,c}const u=E=>{let{x:_,y:T,placement:I,elements:f,onClose:g,nodeId:S,tree:c}=E;return function(A){function D(){clearTimeout(t),g()}if(clearTimeout(t),!f.domReference||!f.floating||I==null||_==null||T==null)return;const{clientX:k,clientY:L}=A,B=[k,L],M=Jv(A),G=A.type==="mouseleave",w=rl(f.floating,M),K=rl(f.domReference,M),O=f.domReference.getBoundingClientRect(),b=f.floating.getBoundingClientRect(),P=I.split("-")[0],U=_>b.right-b.width/2,j=T>b.bottom-b.height/2,V=rI(B,O),F=b.width>O.width,Y=b.height>O.height,z=(F?O:b).left,W=(F?O:b).right,te=(Y?O:b).top,Be=(Y?O:b).bottom;if(w&&(l=!0,!G))return;if(K&&(l=!1),K&&!G){l=!0;return}if(G&&ve(A.relatedTarget)&&rl(f.floating,A.relatedTarget)||c&&nI(c.nodesRef.current,S).some(re=>{let{context:ae}=re;return ae?.open}))return;if(P==="top"&&T>=O.bottom-1||P==="bottom"&&T<=O.top+1||P==="left"&&_>=O.right-1||P==="right"&&_<=O.left+1)return D();let Z=[];switch(P){case"top":Z=[[z,O.top+1],[z,b.bottom-1],[W,b.bottom-1],[W,O.top+1]];break;case"bottom":Z=[[z,b.top+1],[z,O.bottom-1],[W,O.bottom-1],[W,b.top+1]];break;case"left":Z=[[b.right-1,Be],[b.right-1,te],[O.left+1,te],[O.left+1,Be]];break;case"right":Z=[[O.right-1,Be],[O.right-1,te],[b.left+1,te],[b.left+1,Be]];break}function J(re){let[ae,de]=re;switch(P){case"top":{const we=[F?ae+n/2:U?ae+n*4:ae-n*4,de+n+1],Ue=[F?ae-n/2:U?ae+n*4:ae-n*4,de+n+1],je=[[b.left,U||F?b.bottom-n:b.top],[b.right,U?F?b.bottom-n:b.top:b.bottom-n]];return[we,Ue,...je]}case"bottom":{const we=[F?ae+n/2:U?ae+n*4:ae-n*4,de-n],Ue=[F?ae-n/2:U?ae+n*4:ae-n*4,de-n],je=[[b.left,U||F?b.top+n:b.bottom],[b.right,U?F?b.top+n:b.bottom:b.top+n]];return[we,Ue,...je]}case"left":{const we=[ae+n+1,Y?de+n/2:j?de+n*4:de-n*4],Ue=[ae+n+1,Y?de-n/2:j?de+n*4:de-n*4];return[...[[j||Y?b.right-n:b.left,b.top],[j?Y?b.right-n:b.left:b.right-n,b.bottom]],we,Ue]}case"right":{const we=[ae-n,Y?de+n/2:j?de+n*4:de-n*4],Ue=[ae-n,Y?de-n/2:j?de+n*4:de-n*4],je=[[j||Y?b.left+n:b.right,b.top],[j?Y?b.left+n:b.right:b.left+n,b.bottom]];return[we,Ue,...je]}}}if(!is([k,L],Z)){if(l&&!V)return D();if(!G&&r){const re=d(A.clientX,A.clientY);if(re!==null&&re<.1)return D()}is([k,L],J([_,T]))?!l&&r&&(t=window.setTimeout(D,40)):D()}}};return u.__options={blockPointerEvents:a},u}const Ft=()=>{const{cn:e}=ee();return m.createElement(Ro,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Nu=()=>{const{cn:e}=ee();return m.createElement(Ro,{title:xn("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var tI=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const lI=v.forwardRef((e,n)=>{var{className:a,header:r,children:t,open:l,defaultOpen:i=!1,onClick:s,size:o="medium",onOpenChange:d}=e,u=tI(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:E}=ee(),[_,T]=Pr({defaultValue:i,value:l,onChange:d}),I=o==="small"?"small":"medium";return m.createElement("div",{className:E("navds-read-more",`navds-read-more--${o}`,a,{"navds-read-more--open":_}),"data-volume":"low"},m.createElement("button",Object.assign({},u,{ref:n,type:"button",className:E("navds-read-more__button","navds-body-short",{"navds-body-short--small":o==="small"}),onClick:Xn(s,()=>T(f=>!f)),"aria-expanded":_,"data-state":_?"open":"closed"}),m.createElement(va,{className:E("navds-read-more__expand-icon"),"aria-hidden":!0}),m.createElement("span",null,r)),m.createElement(Ul,{as:"div","aria-hidden":!_,className:E("navds-read-more__content",{"navds-read-more__content--closed":!_}),size:I,"data-state":_?"open":"closed"},t))}),ft=v.createContext(null),Cr=(e,n)=>{var a,r,t;const{size:l,error:i,errorId:s}=e,o=v.useContext(ft),d=cn(),u=(a=e.id)!==null&&a!==void 0?a:`${n}-${d}`,E=s??`${n}-error-${d}`,_=`${n}-description-${d}`,T=o?.disabled||e.disabled,I=(o?.readOnly||e.readOnly)&&!T||void 0,f=!T&&!I&&!!(i||o?.error),g=!T&&!I&&!!i&&typeof i!="boolean",S=Object.assign({},f?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:g,hasError:f,errorId:E,inputDescriptionId:_,size:(r=l??o?.size)!==null&&r!==void 0?r:"medium",readOnly:I,inputProps:Object.assign(Object.assign({id:u},S),{"aria-describedby":Vr(e["aria-describedby"],{[_]:e.description&&!ct(e.description),[E]:g,[(t=o?.errorId)!==null&&t!==void 0?t:""]:f&&o?.error})||void 0,disabled:T})}};function ct(e,n=!0){if(m.isValidElement(e)){if(e.type===lI)return!0;if(e.props.children&&n)return ct(e.props.children,!1)}else if(Array.isArray(e))return e.some(a=>ct(a,n));return!1}const _u={global:{dateLocale:Oo,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},Tu={global:{dateLocale:yo,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},vu=(e="nb")=>{switch(e){case"nn":return yo;case"en":return Oo;default:return ko}},Iu=e=>{switch(e){case"nn":return Tu.DatePicker;case"en":case"en-GB":return _u.DatePicker;default:return}},iI=e=>{switch(e){case"nn":return Tu.global;case"en":case"en-GB":return _u.global;default:return}},[Ru,Vt]=kt();var sI=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const[oI,ti]=kt({errorMessage:"useDateInputContext must be used with DateInputContext"}),gu=v.forwardRef((e,n)=>{const{className:a,hideLabel:r=!1,label:t,description:l,variant:i="datepicker",setAnchorRef:s}=e,o=sI(e,["className","hideLabel","label","description","variant","setAnchorRef"]),d=v.useRef(null),u=Vt().translate,{cn:E}=ee(),_=i==="datepicker",T={prefix:_?"datepicker-input":"monthpicker-input",iconTitle:{open:_?"openDatePicker":"openMonthPicker",close:_?"closeDatePicker":"closeMonthPicker"}},I=ti(),{inputProps:f,size:g="medium",inputDescriptionId:S,errorId:c,showErrorMsg:R,hasError:A,readOnly:D}=Cr(e,T.prefix);return m.createElement("div",{className:E(a,"navds-form-field",`navds-form-field--${g}`,"navds-date__field",{"navds-text-field--error":A,"navds-date__field--error":A,"navds-form-field--disabled":!!f.disabled,"navds-text-field--disabled":!!f.disabled,"navds-form-field--readonly":D,"navds-text-field--readonly":D,"navds-date__field--readonly":D})},m.createElement(ge,{htmlFor:f.id,size:g,className:E("navds-form-field__label",{"navds-sr-only":r})},D&&m.createElement(Ft,null),t),!!l&&m.createElement(ne,{as:"div",className:E("navds-form-field__description",{"navds-sr-only":r}),id:S,size:g},l),m.createElement("div",{className:E("navds-date__field-wrapper")},m.createElement("input",Object.assign({ref:n},Je(o,["error","errorId","size"]),f,{autoComplete:"off","aria-controls":I?.open?I.ariaId:void 0,readOnly:D,className:E("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${g}`),size:_?11:14})),m.createElement("button",{disabled:f.disabled||D,tabIndex:D||I?.open?-1:0,onClick:()=>{I?.onOpen(),s?.(d.current)},type:"button",className:E("navds-date__field-button"),ref:d},m.createElement(oE,{title:u(T.iconTitle[I?.open?"close":"open"])}))),m.createElement("div",{className:E("navds-form-field__error"),id:c,"aria-relevant":"additions removals","aria-live":"polite"},R&&m.createElement(Hr,{size:g,showIcon:!0},e.error)))}),uI=v.forwardRef((e,n)=>m.createElement(gu,Object.assign({},e,{ref:n})));v.forwardRef((e,n)=>m.createElement(gu,Object.assign({},e,{variant:"monthpicker",ref:n})));var dI=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const EI=v.forwardRef((e,n)=>{var{className:a}=e,r=dI(e,["className"]);const{cn:t}=ee();return m.createElement("div",Object.assign({},r,{ref:n,className:t("navds-modal__body",a)}))});var mI=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const NI=v.forwardRef((e,n)=>{var{className:a}=e,r=mI(e,["className"]);const{cn:t}=ee();return m.createElement("div",Object.assign({},r,{ref:n,className:t("navds-modal__footer",a)}))});var _I=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const fu=v.forwardRef((e,n)=>{var{children:a,className:r,closeButton:t=!0}=e,l=_I(e,["children","className","closeButton"]);const{cn:i}=ee(),s=Ia(),o=xn("global");return m.createElement("div",Object.assign({},l,{ref:n,className:i("navds-modal__header",r)}),s.closeHandler&&t&&m.createElement(ke,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:d=>{["Enter"," "].includes(d.key)&&d.repeat&&d.preventDefault()},onClick:s.closeHandler,icon:m.createElement(fo,{title:o("close")})}),a)}),ss=({clientX:e,clientY:n},{left:a,top:r,right:t,bottom:l})=>!(e<a||n<r||e>t||n>l);function TI(e,n,a){if(!(n&&n.closeButton===!1))return a?()=>{var r;return a()!==!1&&((r=e.current)===null||r===void 0?void 0:r.close())}:()=>{var r;return(r=e.current)===null||r===void 0?void 0:r.close()}}const Ga="navds-modal__document-body",Ba="aksel-modal__document-body";function vI(e,n,a){m.useEffect(()=>{if(a||!e.current||!n)return;e.current.open&&document.body.classList.add(Ba,Ga);const r=new MutationObserver(()=>{var t;!((t=e.current)===null||t===void 0)&&t.open?document.body.classList.add(Ba,Ga):document.body.classList.remove(Ba,Ga)});return r.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{r.disconnect(),document.body.classList.remove(Ba,Ga)}},[e,n,a])}const pr=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function cu(e,n){var a="on"+n.type.toLowerCase();return typeof e[a]=="function"&&e[a](n),e.dispatchEvent(n)}function aa(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Su(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function II(e,n){for(var a=0;a<e.length;++a)if(e[a]===n)return!0;return!1}function ll(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Du(e){var n=["button","input","keygen","select","textarea"],a=n.map(function(i){return i+":not([disabled])"});a.push('[tabindex]:not([disabled]):not([tabindex=""])');var r=e.querySelector(a.join(", "));if(!r&&"attachShadow"in Element.prototype)for(var t=e.querySelectorAll("*"),l=0;l<t.length&&!(t[l].tagName&&t[l].shadowRoot&&(r=Du(t[l].shadowRoot),r));l++);return r}function os(e){return e.isConnected||document.body.contains(e)}function Au(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var a=se.formSubmitter;if(!a){var r=e.target,t="getRootNode"in r&&r.getRootNode()||document;a=t.activeElement}return!a||a.form!==n?null:a}function RI(e){if(!e.defaultPrevented){var n=e.target,a=se.imagemapUseValue,r=Au(e);a===null&&r&&(a=r.value);var t=aa(n);if(t){var l=r&&r.getAttribute("formmethod")||n.getAttribute("method");l==="dialog"&&(e.preventDefault(),a!=null?t.close(a):t.close())}}}function pu(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",RI,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var a=!1,r=(function(){a?this.downgradeModal():this.maybeHideModal(),a=!1}).bind(this),t,l=function(i){if(i.target===e){var s="DOMNodeRemoved";a|=i.type.substr(0,s.length)===s,window.clearTimeout(t),t=window.setTimeout(r,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,l)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}pu.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&os(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),se.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var a=document.createEvent("MouseEvents");a.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(a),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Du(this.dialog_)),Su(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!os(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!se.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,se.needsCentering(this.dialog_)?(se.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});cu(this.dialog_,n)}};var se={};se.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,a=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,a)+"px"};se.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var a=document.styleSheets[n],r=null;try{r=a.cssRules}catch{}if(r)for(var t=0;t<r.length;++t){var l=r[t],i=null;try{i=document.querySelectorAll(l.selectorText)}catch{}if(!(!i||!II(i,e))){var s=l.style.getPropertyValue("top"),o=l.style.getPropertyValue("bottom");if(s&&s!=="auto"||o&&o!=="auto")return!0}}}return!1};se.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!se.isInlinePositionSetByStylesheet(e)};se.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new pu(e)};se.registerDialog=function(e){e.showModal||se.forceRegisterDialog(e)};se.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var a=[];n.forEach(function(r){for(var t=0,l;l=r.removedNodes[t];++t)l instanceof Element&&(l.localName==="dialog"&&a.push(l),a=a.concat(l.querySelectorAll("dialog")))}),a.length&&e(a)}))};se.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};se.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};se.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,a;a=this.pendingDialogStack[n];++n)a.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var r=this.pendingDialogStack[0];if(r){var t=r.dialog.parentNode||document.body;t.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};se.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=aa(e);){for(var n=0,a;a=this.pendingDialogStack[n];++n)if(a.dialog===e)return n===0;e=e.parentElement}return!1};se.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Su(n),this.forwardTab_!==void 0)){var a=this.pendingDialogStack[0],r=a.dialog,t=r.compareDocumentPosition(n);return t&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?a.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};se.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),a=this.pendingDialogStack[0];a&&cu(a.dialog,n)&&a.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};se.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(a){e.indexOf(a.dialog)!==-1?a.downgradeModal():a.maybeHideModal()})};se.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};se.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};pr&&(se.dm=new se.DialogManager,se.formSubmitter=null,se.imagemapUseValue=null);if(pr){var us=document.createElement("form");if(us.setAttribute("method","dialog"),us.method!=="dialog"){var cr=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(cr){var gI=cr.get;cr.get=function(){return ll(this)?"dialog":gI.call(this)};var fI=cr.set;cr.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):fI.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",cr)}}document.addEventListener("click",function(e){if(se.formSubmitter=null,se.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var a=e.composedPath();n=a.shift()||n}if(!(!n||!ll(n.form))){var r=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!r){if(!(n.localName==="input"&&n.type==="image"))return;se.imagemapUseValue=e.offsetX+","+e.offsetY}var t=aa(n);t&&(se.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,a=aa(n);if(!a){var r=Au(e),t=r&&r.getAttribute("formmethod")||n.getAttribute("method");t==="dialog"&&e.preventDefault()}});var cI=HTMLFormElement.prototype.submit,SI=function(){if(!ll(this))return cI.call(this);var e=aa(this);e&&e.close()};HTMLFormElement.prototype.submit=SI}var DI=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Rn=v.forwardRef((e,n)=>{var a,r,{header:t,children:l,open:i,onBeforeClose:s,onCancel:o,closeOnBackdropClick:d,width:u,placement:E,portal:_,className:T,"aria-labelledby":I,style:f,onClick:g,onMouseDown:S}=e,c=DI(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:R}=ee(),A=v.useRef(R("navds-modal--polyfilled")),D=v.useRef(null),k=jr(D,n),L=cn(),B=(a=Lt())===null||a===void 0?void 0:a.rootElement,M=Cv({root:B}),G=ti(!1),w=Ia(!1)!==void 0;w&&!G&&console.error("Modals should not be nested"),v.useEffect(()=>{pr&&D.current&&M&&(se.registerDialog(D.current),D.current.classList.add(A.current)),D.current&&M&&(D.current.autofocus=!0)},[M]),v.useEffect(()=>{D.current&&M&&i!==void 0&&(i&&!D.current.open?D.current.showModal():!i&&D.current.open&&D.current.close())},[M,i]),vI(D,M,w);const K=typeof u=="string"&&["small","medium"].includes(u),O=R("navds-modal",T,{[A.current]:pr,"navds-modal--autowidth":!u,[`navds-modal--${u}`]:K,"navds-modal--top":E==="top"&&!pr}),b=Object.assign(Object.assign({},f),K?{}:{width:u}),P=v.useRef({clientX:0,clientY:0}),U=W=>{P.current=W},j=d&&!pr,V=W=>{if(W.target!==D.current)return;const te=D.current.getBoundingClientRect();ss(P.current,te)||ss(W,te)||s!==void 0&&s()===!1||D.current.close()},F=W=>{s&&s()===!1&&W.preventDefault()},Y=!I&&!c["aria-label"]&&t?L:I,z=m.createElement("dialog",Object.assign({},c,{ref:k,className:O,style:b,onCancel:Xn(o,F),onClick:j?Xn(g,V):g,onMouseDown:j?Xn(S,U):S,"aria-labelledby":Y}),m.createElement(jE,{closeHandler:TI(D,t,s),ref:D},t&&m.createElement(fu,null,t.label&&m.createElement(hr,{className:R("navds-modal__label")},t.label),m.createElement(xr,{size:(r=t.size)!==null&&r!==void 0?r:"medium",level:"1",id:L},t.icon&&m.createElement("span",{className:R("navds-modal__header-icon")},t.icon),t.heading)),l));return _?M?wl.createPortal(z,M):null:z});Rn.Header=fu;Rn.Body=EI;Rn.Footer=NI;var AI=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const pI=v.forwardRef((e,n)=>{var{className:a}=e,r=AI(e,["className"]);const{cn:t}=ee();return m.createElement("div",Object.assign({},r,{ref:n,className:t("navds-popover__content",a)}))});var OI=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Br=v.forwardRef((e,n)=>{var{className:a,children:r,anchorEl:t,arrow:l=!0,open:i,onClose:s,placement:o="top",offset:d,strategy:u,flip:E=!0}=e,_=OI(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:T}=ee(),I=v.useRef(null),f=Ia(!1)!==void 0,g=ti(!1),S=u??(f?"fixed":"absolute"),c=g?!1:E,R=wr(!1),{update:A,refs:D,placement:k,middlewareData:{arrow:{x:L,y:B}={}},floatingStyles:M}=mu({strategy:S,placement:o,open:i,middleware:[Ho(d??(R?.isDarkside?8:l?16:4)),c&&Jo({padding:5,fallbackPlacements:["bottom","top"]}),xo({padding:12}),Yo({element:I,padding:8})]});Kr(()=>{D.setReference(t)},[t]);const G=jr(D.setFloating,n);Kr(()=>{if(!D.reference.current||!D.floating.current||!i)return;const K=gl(D.reference.current,D.floating.current,A);return()=>K()},[D.floating,D.reference,A,i,t]);const w={top:"bottom",right:"left",bottom:"top",left:"right"}[k.split("-")[0]];return m.createElement(xN,{asChild:!0,safeZone:{anchor:t,dismissable:D.floating.current},onDismiss:()=>i&&s?.(),enabled:i},m.createElement("div",Object.assign({ref:G},_,{className:T("navds-popover",a,{"navds-popover--hidden":!i||!t}),style:Object.assign(Object.assign({},_.style),M),"data-placement":k,"aria-hidden":!i||!t}),r,l&&!R?.isDarkside&&m.createElement("div",{ref:K=>{I.current=K},style:Object.assign(Object.assign(Object.assign({},L!=null?{left:L}:{}),B!=null?{top:B}:{}),w?{[w]:"-0.5rem"}:{}),className:T("navds-popover__arrow")})))});Br.Content=pI;const kI={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},yI=({open:e,children:n,onClose:a,anchor:r,locale:t,translate:l,variant:i,popoverProps:s})=>{const o=xn("global",iI(t)),{cn:d}=ee(),u=v.useRef(null),E=Ia(!1)!==void 0;return HE("screen and (min-width: 768px)",!0)&&!E?m.createElement(Br,Object.assign({arrow:!1,anchorEl:r,open:e,onClose:a,placement:"bottom-start",role:"dialog",className:d("navds-date__popover",{"navds-date":i==="month"}),flip:!1},s),n):m.createElement(Rn,{ref:u,open:e,onClose:T=>{T.stopPropagation(),a()},"aria-label":l(kI[i]),className:d("navds-date__modal",{"navds-date__nested-modal":E,"navds-date":i==="month"}),closeOnBackdropClick:!0,placement:"top"},m.createElement("div",{className:d("navds-date__modal-body")},n,m.createElement(ke,{variant:"tertiary",onClick:()=>{var T;return(T=u?.current)===null||T===void 0?void 0:T.close()},size:"small",type:"button"},o("close"))))};function Ou(e){return!!(e&&typeof e=="object"&&"from"in e)}const LI={},na={};function ta(e,n){try{const r=(LI[e]||=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format)(n).split("GMT")[1]||"";return r in na?na[r]:ds(r,r.split(":"))}catch{if(e in na)return na[e];const a=e?.match(bI);return a?ds(e,a.slice(1)):NaN}}const bI=/([+-]\d\d):?(\d\d)?/;function ds(e,n){const a=+n[0],r=+(n[1]||0);return na[e]=a>0?a*60+r:a*60-r}class kn extends Date{constructor(...n){super(),n.length>1&&typeof n[n.length-1]=="string"&&(this.timeZone=n.pop()),this.internal=new Date,isNaN(ta(this.timeZone,this))?this.setTime(NaN):n.length?typeof n[0]=="number"&&(n.length===1||n.length===2&&typeof n[1]!="number")?this.setTime(n[0]):typeof n[0]=="string"?this.setTime(+new Date(n[0])):n[0]instanceof Date?this.setTime(+n[0]):(this.setTime(+new Date(...n)),ku(this),Dl(this)):this.setTime(Date.now())}static tz(n,...a){return a.length?new kn(...a,n):new kn(Date.now(),n)}withTimeZone(n){return new kn(+this,n)}getTimezoneOffset(){return-ta(this.timeZone,this)}setTime(n){return Date.prototype.setTime.apply(this,arguments),Dl(this),+this}[Symbol.for("constructDateFrom")](n){return new kn(+new Date(n),this.timeZone)}}const Es=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!Es.test(e))return;const n=e.replace(Es,"$1UTC");kn.prototype[n]&&(e.startsWith("get")?kn.prototype[e]=function(){return this.internal[n]()}:(kn.prototype[e]=function(){return Date.prototype[n].apply(this.internal,arguments),MI(this),+this},kn.prototype[n]=function(){return Date.prototype[n].apply(this,arguments),Dl(this),+this}))});function Dl(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function MI(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),ku(e)}function ku(e){const n=ta(e.timeZone,e),a=new Date(+e);a.setUTCHours(a.getUTCHours()-1);const r=-new Date(+e).getTimezoneOffset(),t=-new Date(+a).getTimezoneOffset(),l=r-t,i=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();l&&i&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+l);const s=r-n;s&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+s);const o=ta(e.timeZone,e),u=-new Date(+e).getTimezoneOffset()-o,E=o!==n,_=u-s;if(E&&_){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+_);const T=ta(e.timeZone,e),I=o-T;I&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+I),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+I))}}class xe extends kn{static tz(n,...a){return a.length?new xe(...a,n):new xe(Date.now(),n)}toISOString(){const[n,a,r]=this.tzComponents(),t=`${n}${a}:${r}`;return this.internal.toISOString().slice(0,-1)+t}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[n,a,r,t]=this.internal.toUTCString().split(" ");return`${n?.slice(0,-1)} ${r} ${a} ${t}`}toTimeString(){const n=this.internal.toUTCString().split(" ")[4],[a,r,t]=this.tzComponents();return`${n} GMT${a}${r}${t} (${hI(this.timeZone,this)})`}toLocaleString(n,a){return Date.prototype.toLocaleString.call(this,n,{...a,timeZone:a?.timeZone||this.timeZone})}toLocaleDateString(n,a){return Date.prototype.toLocaleDateString.call(this,n,{...a,timeZone:a?.timeZone||this.timeZone})}toLocaleTimeString(n,a){return Date.prototype.toLocaleTimeString.call(this,n,{...a,timeZone:a?.timeZone||this.timeZone})}tzComponents(){const n=this.getTimezoneOffset(),a=n>0?"-":"+",r=String(Math.floor(Math.abs(n)/60)).padStart(2,"0"),t=String(Math.abs(n)%60).padStart(2,"0");return[a,r,t]}withTimeZone(n){return new xe(+this,n)}[Symbol.for("constructDateFrom")](n){return new xe(+new Date(n),this.timeZone)}}function hI(e,n){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(n).slice(12)}var Q;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(Q||(Q={}));var Se;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(Se||(Se={}));var gn;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(gn||(gn={}));var rn;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(rn||(rn={}));const ms=5,KI=4;function PI(e,n){const a=n.startOfMonth(e),r=a.getDay()>0?a.getDay():7,t=n.addDays(e,-r+1),l=n.addDays(t,ms*7-1);return n.getMonth(e)===n.getMonth(l)?ms:KI}function yu(e,n){const a=n.startOfMonth(e),r=a.getDay();return r===1?a:r===0?n.addDays(a,-6):n.addDays(a,-1*(r-1))}function GI(e,n){const a=yu(e,n),r=PI(e,n);return n.addDays(a,r*7-1)}class Jn{constructor(n,a){this.Date=Date,this.today=()=>this.overrides?.today?this.overrides.today():this.options.timeZone?xe.tz(this.options.timeZone):new this.Date,this.newDate=(r,t,l)=>this.overrides?.newDate?this.overrides.newDate(r,t,l):this.options.timeZone?new xe(r,t,l,this.options.timeZone):new Date(r,t,l),this.addDays=(r,t)=>this.overrides?.addDays?this.overrides.addDays(r,t):Sa(r,t),this.addMonths=(r,t)=>this.overrides?.addMonths?this.overrides.addMonths(r,t):Cl(r,t),this.addWeeks=(r,t)=>this.overrides?.addWeeks?this.overrides.addWeeks(r,t):nT(r,t),this.addYears=(r,t)=>this.overrides?.addYears?this.overrides.addYears(r,t):$l(r,t),this.differenceInCalendarDays=(r,t)=>this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(r,t):zn(r,t),this.differenceInCalendarMonths=(r,t)=>this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(r,t):lT(r,t),this.eachMonthOfInterval=r=>this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(r):Xo(r),this.endOfBroadcastWeek=r=>this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(r):GI(r,this),this.endOfISOWeek=r=>this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(r):sT(r),this.endOfMonth=r=>this.overrides?.endOfMonth?this.overrides.endOfMonth(r):zo(r),this.endOfWeek=(r,t)=>this.overrides?.endOfWeek?this.overrides.endOfWeek(r,t):Qo(r,this.options),this.endOfYear=r=>this.overrides?.endOfYear?this.overrides.endOfYear(r):Gt(r),this.format=(r,t,l)=>{const i=this.overrides?.format?this.overrides.format(r,t,this.options):Nr(r,t,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(i):i},this.getISOWeek=r=>this.overrides?.getISOWeek?this.overrides.getISOWeek(r):zl(r),this.getMonth=(r,t)=>this.overrides?.getMonth?this.overrides.getMonth(r,this.options):Zl(r,this.options),this.getYear=(r,t)=>this.overrides?.getYear?this.overrides.getYear(r,this.options):ei(r,this.options),this.getWeek=(r,t)=>this.overrides?.getWeek?this.overrides.getWeek(r,this.options):Ql(r,this.options),this.isAfter=(r,t)=>this.overrides?.isAfter?this.overrides.isAfter(r,t):ru(r,t),this.isBefore=(r,t)=>this.overrides?.isBefore?this.overrides.isBefore(r,t):Aa(r,t),this.isDate=r=>this.overrides?.isDate?this.overrides.isDate(r):Wo(r),this.isSameDay=(r,t)=>this.overrides?.isSameDay?this.overrides.isSameDay(r,t):Wl(r,t),this.isSameMonth=(r,t)=>this.overrides?.isSameMonth?this.overrides.isSameMonth(r,t):gv(r,t),this.isSameYear=(r,t)=>this.overrides?.isSameYear?this.overrides.isSameYear(r,t):su(r,t),this.max=r=>this.overrides?.max?this.overrides.max(r):rT(r),this.min=r=>this.overrides?.min?this.overrides.min(r):aT(r),this.setMonth=(r,t)=>this.overrides?.setMonth?this.overrides.setMonth(r,t):ou(r,t),this.setYear=(r,t)=>this.overrides?.setYear?this.overrides.setYear(r,t):uu(r,t),this.startOfBroadcastWeek=(r,t)=>this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(r,this):yu(r,this),this.startOfDay=r=>this.overrides?.startOfDay?this.overrides.startOfDay(r):qn(r),this.startOfISOWeek=r=>this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(r):Er(r),this.startOfMonth=r=>this.overrides?.startOfMonth?this.overrides.startOfMonth(r):mr(r),this.startOfWeek=(r,t)=>this.overrides?.startOfWeek?this.overrides.startOfWeek(r,this.options):Un(r,this.options),this.startOfYear=r=>this.overrides?.startOfYear?this.overrides.startOfYear(r):Da(r),this.options={locale:yt,...n},this.overrides=a}getDigitMap(){const{numerals:n="latn"}=this.options,a=new Intl.NumberFormat("en-US",{numberingSystem:n}),r={};for(let t=0;t<10;t++)r[t.toString()]=a.format(t);return r}replaceDigits(n){const a=this.getDigitMap();return n.replace(/\d/g,r=>a[r]||r)}formatNumber(n){return this.replaceDigits(n.toString())}}const bn=new Jn;class Lu{constructor(n,a,r=bn){this.date=n,this.displayMonth=a,this.outside=!!(a&&!r.isSameMonth(n,a)),this.dateLib=r}isEqualTo(n){return this.dateLib.isSameDay(n.date,this.date)&&this.dateLib.isSameMonth(n.displayMonth,this.displayMonth)}}class BI{constructor(n,a){this.date=n,this.weeks=a}}class FI{constructor(n,a){this.days=a,this.weekNumber=n}}function Bn(e,n,a=!1,r=bn){let{from:t,to:l}=e;const{differenceInCalendarDays:i,isSameDay:s}=r;return t&&l?(i(l,t)<0&&([t,l]=[l,t]),i(n,t)>=(a?1:0)&&i(l,n)>=(a?1:0)):!a&&l?s(l,n):!a&&t?s(t,n):!1}function bu(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function li(e){return!!(e&&typeof e=="object"&&"from"in e)}function Mu(e){return!!(e&&typeof e=="object"&&"after"in e)}function hu(e){return!!(e&&typeof e=="object"&&"before"in e)}function Ku(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function Pu(e,n){return Array.isArray(e)&&e.every(n.isDate)}function En(e,n,a=bn){const r=Array.isArray(n)?n:[n],{isSameDay:t,differenceInCalendarDays:l,isAfter:i}=a;return r.some(s=>{if(typeof s=="boolean")return s;if(a.isDate(s))return t(e,s);if(Pu(s,a))return s.includes(e);if(li(s))return Bn(s,e,!1,a);if(Ku(s))return Array.isArray(s.dayOfWeek)?s.dayOfWeek.includes(e.getDay()):s.dayOfWeek===e.getDay();if(bu(s)){const o=l(s.before,e),d=l(s.after,e),u=o>0,E=d<0;return i(s.before,s.after)?E&&u:u||E}return Mu(s)?l(e,s.after)>0:hu(s)?l(s.before,e)>0:typeof s=="function"?s(e):!1})}function VI(e,n,a){const{disabled:r,hidden:t,modifiers:l,showOutsideDays:i,broadcastCalendar:s,today:o}=n,{isSameDay:d,isSameMonth:u,startOfMonth:E,isBefore:_,endOfMonth:T,isAfter:I}=a,f=n.startMonth&&E(n.startMonth),g=n.endMonth&&T(n.endMonth),S={[Se.focused]:[],[Se.outside]:[],[Se.disabled]:[],[Se.hidden]:[],[Se.today]:[]},c={};for(const R of e){const{date:A,displayMonth:D}=R,k=!!(D&&!u(A,D)),L=!!(f&&_(A,f)),B=!!(g&&I(A,g)),M=!!(r&&En(A,r,a)),G=!!(t&&En(A,t,a))||L||B||!s&&!i&&k||s&&i===!1&&k,w=d(A,o??a.today());k&&S.outside.push(R),M&&S.disabled.push(R),G&&S.hidden.push(R),w&&S.today.push(R),l&&Object.keys(l).forEach(K=>{const O=l?.[K];O&&En(A,O,a)&&(c[K]?c[K].push(R):c[K]=[R])})}return R=>{const A={[Se.focused]:!1,[Se.disabled]:!1,[Se.hidden]:!1,[Se.outside]:!1,[Se.today]:!1},D={};for(const k in S){const L=S[k];A[k]=L.some(B=>B===R)}for(const k in c)D[k]=c[k].some(L=>L===R);return{...A,...D}}}function wI(e,n,a={}){return Object.entries(e).filter(([,t])=>t===!0).reduce((t,[l])=>(a[l]?t.push(a[l]):n[Se[l]]?t.push(n[Se[l]]):n[gn[l]]&&t.push(n[gn[l]]),t),[n[Q.Day]])}function UI(e){return m.createElement("button",{...e})}function jI(e){return m.createElement("span",{...e})}function qI(e){const{size:n=24,orientation:a="left",className:r}=e;return m.createElement("svg",{className:r,width:n,height:n,viewBox:"0 0 24 24"},a==="up"&&m.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),a==="down"&&m.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),a==="left"&&m.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),a==="right"&&m.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function HI(e){const{day:n,modifiers:a,...r}=e;return m.createElement("td",{...r})}function xI(e){const{day:n,modifiers:a,...r}=e,t=m.useRef(null);return m.useEffect(()=>{a.focused&&t.current?.focus()},[a.focused]),m.createElement("button",{ref:t,...r})}function JI(e){const{options:n,className:a,components:r,classNames:t,...l}=e,i=[t[Q.Dropdown],a].join(" "),s=n?.find(({value:o})=>o===l.value);return m.createElement("span",{"data-disabled":l.disabled,className:t[Q.DropdownRoot]},m.createElement(r.Select,{className:i,...l},n?.map(({value:o,label:d,disabled:u})=>m.createElement(r.Option,{key:o,value:o,disabled:u},d))),m.createElement("span",{className:t[Q.CaptionLabel],"aria-hidden":!0},s?.label,m.createElement(r.Chevron,{orientation:"down",size:18,className:t[Q.Chevron]})))}function YI(e){return m.createElement("div",{...e})}function CI(e){return m.createElement("div",{...e})}function $I(e){const{calendarMonth:n,displayIndex:a,...r}=e;return m.createElement("div",{...r},e.children)}function WI(e){const{calendarMonth:n,displayIndex:a,...r}=e;return m.createElement("div",{...r})}function zI(e){return m.createElement("table",{...e})}function XI(e){return m.createElement("div",{...e})}const Gu=v.createContext(void 0);function vr(){const e=v.useContext(Gu);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function QI(e){const{components:n}=vr();return m.createElement(n.Dropdown,{...e})}function ZI(e){const{onPreviousClick:n,onNextClick:a,previousMonth:r,nextMonth:t,...l}=e,{components:i,classNames:s,labels:{labelPrevious:o,labelNext:d}}=vr(),u=v.useCallback(_=>{t&&a?.(_)},[t,a]),E=v.useCallback(_=>{r&&n?.(_)},[r,n]);return m.createElement("nav",{...l},m.createElement(i.PreviousMonthButton,{type:"button",className:s[Q.PreviousMonthButton],tabIndex:r?void 0:-1,"aria-disabled":r?void 0:!0,"aria-label":o(r),onClick:E},m.createElement(i.Chevron,{disabled:r?void 0:!0,className:s[Q.Chevron],orientation:"left"})),m.createElement(i.NextMonthButton,{type:"button",className:s[Q.NextMonthButton],tabIndex:t?void 0:-1,"aria-disabled":t?void 0:!0,"aria-label":d(t),onClick:u},m.createElement(i.Chevron,{disabled:t?void 0:!0,orientation:"right",className:s[Q.Chevron]})))}function eR(e){const{components:n}=vr();return m.createElement(n.Button,{...e})}function nR(e){return m.createElement("option",{...e})}function rR(e){const{components:n}=vr();return m.createElement(n.Button,{...e})}function aR(e){const{rootRef:n,...a}=e;return m.createElement("div",{...a,ref:n})}function tR(e){return m.createElement("select",{...e})}function lR(e){const{week:n,...a}=e;return m.createElement("tr",{...a})}function iR(e){return m.createElement("th",{...e})}function sR(e){return m.createElement("thead",{"aria-hidden":!0},m.createElement("tr",{...e}))}function oR(e){const{week:n,...a}=e;return m.createElement("th",{...a})}function uR(e){return m.createElement("th",{...e})}function dR(e){return m.createElement("tbody",{...e})}function ER(e){const{components:n}=vr();return m.createElement(n.Dropdown,{...e})}const mR=Object.freeze(Object.defineProperty({__proto__:null,Button:UI,CaptionLabel:jI,Chevron:qI,Day:HI,DayButton:xI,Dropdown:JI,DropdownNav:YI,Footer:CI,Month:$I,MonthCaption:WI,MonthGrid:zI,Months:XI,MonthsDropdown:QI,Nav:ZI,NextMonthButton:eR,Option:nR,PreviousMonthButton:rR,Root:aR,Select:tR,Week:lR,WeekNumber:oR,WeekNumberHeader:uR,Weekday:iR,Weekdays:sR,Weeks:dR,YearsDropdown:ER},Symbol.toStringTag,{value:"Module"}));function NR(e){return{...mR,...e}}function _R(e){const n={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([a,r])=>{a.startsWith("data-")&&(n[a]=r)}),n}function TR(){const e={};for(const n in Q)e[Q[n]]=`rdp-${Q[n]}`;for(const n in Se)e[Se[n]]=`rdp-${Se[n]}`;for(const n in gn)e[gn[n]]=`rdp-${gn[n]}`;for(const n in rn)e[rn[n]]=`rdp-${rn[n]}`;return e}function Bu(e,n,a){return(a??new Jn(n)).format(e,"LLLL y")}const vR=Bu;function IR(e,n,a){return(a??new Jn(n)).format(e,"d")}function RR(e,n=bn){return n.format(e,"LLLL")}function gR(e,n=bn){return e<10?n.formatNumber(`0${e.toLocaleString()}`):n.formatNumber(`${e.toLocaleString()}`)}function fR(){return""}function cR(e,n,a){return(a??new Jn(n)).format(e,"cccccc")}function Fu(e,n=bn){return n.format(e,"yyyy")}const SR=Fu,DR=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:Bu,formatDay:IR,formatMonthCaption:vR,formatMonthDropdown:RR,formatWeekNumber:gR,formatWeekNumberHeader:fR,formatWeekdayName:cR,formatYearCaption:SR,formatYearDropdown:Fu},Symbol.toStringTag,{value:"Module"}));function AR(e){return e?.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e?.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...DR,...e}}function pR(e,n,a,r,t){const{startOfMonth:l,startOfYear:i,endOfYear:s,eachMonthOfInterval:o,getMonth:d}=t;return o({start:i(e),end:s(e)}).map(_=>{const T=r.formatMonthDropdown(_,t),I=d(_),f=n&&_<l(n)||a&&_>l(a)||!1;return{value:I,label:T,disabled:f}})}function OR(e,n={},a={}){let r={...n?.[Q.Day]};return Object.entries(e).filter(([,t])=>t===!0).forEach(([t])=>{r={...r,...a?.[t]}}),r}function kR(e,n,a){const r=e.today(),t=n?e.startOfISOWeek(r):e.startOfWeek(r),l=[];for(let i=0;i<7;i++){const s=e.addDays(t,i);l.push(s)}return l}function yR(e,n,a,r){if(!e||!n)return;const{startOfYear:t,endOfYear:l,addYears:i,getYear:s,isBefore:o,isSameYear:d}=r,u=t(e),E=l(n),_=[];let T=u;for(;o(T,E)||d(T,E);)_.push(T),T=i(T,1);return _.map(I=>{const f=a.formatYearDropdown(I,r);return{value:s(I),label:f,disabled:!1}})}function Vu(e,n,a){return(a??new Jn(n)).format(e,"LLLL y")}const LR=Vu;function bR(e,n,a,r){let t=(r??new Jn(a)).format(e,"PPPP");return n?.today&&(t=`Today, ${t}`),t}function wu(e,n,a,r){let t=(r??new Jn(a)).format(e,"PPPP");return n.today&&(t=`Today, ${t}`),n.selected&&(t=`${t}, selected`),t}const MR=wu;function hR(){return""}function KR(e){return"Choose the Month"}function PR(e){return"Go to the Next Month"}function GR(e){return"Go to the Previous Month"}function BR(e,n,a){return(a??new Jn(n)).format(e,"cccc")}function FR(e,n){return`Week ${e}`}function VR(e){return"Week Number"}function wR(e){return"Choose the Year"}const UR=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:LR,labelDay:MR,labelDayButton:wu,labelGrid:Vu,labelGridcell:bR,labelMonthDropdown:KR,labelNav:hR,labelNext:PR,labelPrevious:GR,labelWeekNumber:FR,labelWeekNumberHeader:VR,labelWeekday:BR,labelYearDropdown:wR},Symbol.toStringTag,{value:"Module"})),pa=e=>e instanceof HTMLElement?e:null,il=e=>[...e.querySelectorAll("[data-animated-month]")??[]],jR=e=>pa(e.querySelector("[data-animated-month]")),sl=e=>pa(e.querySelector("[data-animated-caption]")),ol=e=>pa(e.querySelector("[data-animated-weeks]")),qR=e=>pa(e.querySelector("[data-animated-nav]")),HR=e=>pa(e.querySelector("[data-animated-weekdays]"));function xR(e,n,{classNames:a,months:r,focused:t,dateLib:l}){const i=v.useRef(null),s=v.useRef(r),o=v.useRef(!1);v.useLayoutEffect(()=>{const d=s.current;if(s.current=r,!n||!e.current||!(e.current instanceof HTMLElement)||r.length===0||d.length===0||r.length!==d.length)return;const u=l.isSameMonth(r[0].date,d[0].date),E=l.isAfter(r[0].date,d[0].date),_=E?a[rn.caption_after_enter]:a[rn.caption_before_enter],T=E?a[rn.weeks_after_enter]:a[rn.weeks_before_enter],I=i.current,f=e.current.cloneNode(!0);if(f instanceof HTMLElement?(il(f).forEach(R=>{if(!(R instanceof HTMLElement))return;const A=jR(R);A&&R.contains(A)&&R.removeChild(A);const D=sl(R);D&&D.classList.remove(_);const k=ol(R);k&&k.classList.remove(T)}),i.current=f):i.current=null,o.current||u||t)return;const g=I instanceof HTMLElement?il(I):[],S=il(e.current);if(S&&S.every(c=>c instanceof HTMLElement)&&g&&g.every(c=>c instanceof HTMLElement)){o.current=!0,e.current.style.isolation="isolate";const c=qR(e.current);c&&(c.style.zIndex="1"),S.forEach((R,A)=>{const D=g[A];if(!D)return;R.style.position="relative",R.style.overflow="hidden";const k=sl(R);k&&k.classList.add(_);const L=ol(R);L&&L.classList.add(T);const B=()=>{o.current=!1,e.current&&(e.current.style.isolation=""),c&&(c.style.zIndex=""),k&&k.classList.remove(_),L&&L.classList.remove(T),R.style.position="",R.style.overflow="",R.contains(D)&&R.removeChild(D)};D.style.pointerEvents="none",D.style.position="absolute",D.style.overflow="hidden",D.setAttribute("aria-hidden","true");const M=HR(D);M&&(M.style.opacity="0");const G=sl(D);G&&(G.classList.add(E?a[rn.caption_before_exit]:a[rn.caption_after_exit]),G.addEventListener("animationend",B));const w=ol(D);w&&w.classList.add(E?a[rn.weeks_before_exit]:a[rn.weeks_after_exit]),R.insertBefore(D,R.firstChild)})}})}function JR(e,n,a,r){const t=e[0],l=e[e.length-1],{ISOWeek:i,fixedWeeks:s,broadcastCalendar:o}=a??{},{addDays:d,differenceInCalendarDays:u,differenceInCalendarMonths:E,endOfBroadcastWeek:_,endOfISOWeek:T,endOfMonth:I,endOfWeek:f,isAfter:g,startOfBroadcastWeek:S,startOfISOWeek:c,startOfWeek:R}=r,A=o?S(t,r):i?c(t):R(t),D=o?_(l):i?T(I(l)):f(I(l)),k=u(D,A),L=E(l,t)+1,B=[];for(let w=0;w<=k;w++){const K=d(A,w);if(n&&g(K,n))break;B.push(K)}const G=(o?35:42)*L;if(s&&B.length<G){const w=G-B.length;for(let K=0;K<w;K++){const O=d(B[B.length-1],1);B.push(O)}}return B}function YR(e){const n=[];return e.reduce((a,r)=>{const t=r.weeks.reduce((l,i)=>[...l,...i.days],n);return[...a,...t]},n)}function CR(e,n,a,r){const{numberOfMonths:t=1}=a,l=[];for(let i=0;i<t;i++){const s=r.addMonths(e,i);if(n&&s>n)break;l.push(s)}return l}function Ns(e,n){const{month:a,defaultMonth:r,today:t=n.today(),numberOfMonths:l=1,endMonth:i,startMonth:s}=e;let o=a||r||t;const{differenceInCalendarMonths:d,addMonths:u,startOfMonth:E}=n;if(i&&d(i,o)<0){const _=-1*(l-1);o=u(i,_)}return s&&d(o,s)<0&&(o=s),E(o)}function $R(e,n,a,r){const{addDays:t,endOfBroadcastWeek:l,endOfISOWeek:i,endOfMonth:s,endOfWeek:o,getISOWeek:d,getWeek:u,startOfBroadcastWeek:E,startOfISOWeek:_,startOfWeek:T}=r,I=e.reduce((f,g)=>{const S=a.broadcastCalendar?E(g,r):a.ISOWeek?_(g):T(g),c=a.broadcastCalendar?l(g):a.ISOWeek?i(s(g)):o(s(g)),R=n.filter(L=>L>=S&&L<=c),A=a.broadcastCalendar?35:42;if(a.fixedWeeks&&R.length<A){const L=n.filter(B=>{const M=A-R.length;return B>c&&B<=t(c,M)});R.push(...L)}const D=R.reduce((L,B)=>{const M=a.ISOWeek?d(B):u(B),G=L.find(K=>K.weekNumber===M),w=new Lu(B,g,r);return G?G.days.push(w):L.push(new FI(M,[w])),L},[]),k=new BI(g,D);return f.push(k),f},[]);return a.reverseMonths?I.reverse():I}function WR(e,n){let{startMonth:a,endMonth:r}=e;const{startOfYear:t,startOfDay:l,startOfMonth:i,endOfMonth:s,addYears:o,endOfYear:d,newDate:u,today:E}=n,{fromYear:_,toYear:T,fromMonth:I,toMonth:f}=e;!a&&I&&(a=I),!a&&_&&(a=n.newDate(_,0,1)),!r&&f&&(r=f),!r&&T&&(r=u(T,11,31));const g=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return a?a=i(a):_?a=u(_,0,1):!a&&g&&(a=t(o(e.today??E(),-100))),r?r=s(r):T?r=u(T,11,31):!r&&g&&(r=d(e.today??E())),[a&&l(a),r&&l(r)]}function zR(e,n,a,r){if(a.disableNavigation)return;const{pagedNavigation:t,numberOfMonths:l=1}=a,{startOfMonth:i,addMonths:s,differenceInCalendarMonths:o}=r,d=t?l:1,u=i(e);if(!n)return s(u,d);if(!(o(n,e)<l))return s(u,d)}function XR(e,n,a,r){if(a.disableNavigation)return;const{pagedNavigation:t,numberOfMonths:l}=a,{startOfMonth:i,addMonths:s,differenceInCalendarMonths:o}=r,d=t?l??1:1,u=i(e);if(!n)return s(u,-d);if(!(o(u,n)<=0))return s(u,-d)}function QR(e){const n=[];return e.reduce((a,r)=>[...a,...r.weeks],n)}function wt(e,n){const[a,r]=v.useState(e);return[n===void 0?a:n,r]}function ZR(e,n){const[a,r]=WR(e,n),{startOfMonth:t,endOfMonth:l}=n,i=Ns(e,n),[s,o]=wt(i,e.month?i:void 0);v.useEffect(()=>{const k=Ns(e,n);o(k)},[e.timeZone]);const d=CR(s,r,e,n),u=JR(d,e.endMonth?l(e.endMonth):void 0,e,n),E=$R(d,u,e,n),_=QR(E),T=YR(E),I=XR(s,a,e,n),f=zR(s,r,e,n),{disableNavigation:g,onMonthChange:S}=e,c=k=>_.some(L=>L.days.some(B=>B.isEqualTo(k))),R=k=>{if(g)return;let L=t(k);a&&L<t(a)&&(L=t(a)),r&&L>t(r)&&(L=t(r)),o(L),S?.(L)};return{months:E,weeks:_,days:T,navStart:a,navEnd:r,previousMonth:I,nextMonth:f,goToMonth:R,goToDay:k=>{c(k)||R(k.date)}}}var An;(function(e){e[e.Today=0]="Today",e[e.Selected=1]="Selected",e[e.LastFocused=2]="LastFocused",e[e.FocusedModifier=3]="FocusedModifier"})(An||(An={}));function _s(e){return!e[Se.disabled]&&!e[Se.hidden]&&!e[Se.outside]}function eg(e,n,a,r){let t,l=-1;for(const i of e){const s=n(i);_s(s)&&(s[Se.focused]&&l<An.FocusedModifier?(t=i,l=An.FocusedModifier):r?.isEqualTo(i)&&l<An.LastFocused?(t=i,l=An.LastFocused):a(i.date)&&l<An.Selected?(t=i,l=An.Selected):s[Se.today]&&l<An.Today&&(t=i,l=An.Today))}return t||(t=e.find(i=>_s(n(i)))),t}function ng(e,n,a,r,t,l,i){const{ISOWeek:s,broadcastCalendar:o}=l,{addDays:d,addMonths:u,addWeeks:E,addYears:_,endOfBroadcastWeek:T,endOfISOWeek:I,endOfWeek:f,max:g,min:S,startOfBroadcastWeek:c,startOfISOWeek:R,startOfWeek:A}=i;let k={day:d,week:E,month:u,year:_,startOfWeek:L=>o?c(L,i):s?R(L):A(L),endOfWeek:L=>o?T(L):s?I(L):f(L)}[e](a,n==="after"?1:-1);return n==="before"&&r?k=g([r,k]):n==="after"&&t&&(k=S([t,k])),k}function Uu(e,n,a,r,t,l,i,s=0){if(s>365)return;const o=ng(e,n,a.date,r,t,l,i),d=!!(l.disabled&&En(o,l.disabled,i)),u=!!(l.hidden&&En(o,l.hidden,i)),E=o,_=new Lu(o,E,i);return!d&&!u?_:Uu(e,n,_,r,t,l,i,s+1)}function rg(e,n,a,r,t){const{autoFocus:l}=e,[i,s]=v.useState(),o=eg(n.days,a,r||(()=>!1),i),[d,u]=v.useState(l?o:void 0);return{isFocusTarget:f=>!!o?.isEqualTo(f),setFocused:u,focused:d,blur:()=>{s(d),u(void 0)},moveFocus:(f,g)=>{if(!d)return;const S=Uu(f,g,d,n.navStart,n.navEnd,e,t);S&&(n.goToDay(S),u(S))}}}function ag(e,n){const{selected:a,required:r,onSelect:t}=e,[l,i]=wt(a,t?a:void 0),s=t?a:l,{isSameDay:o}=n,d=T=>s?.some(I=>o(I,T))??!1,{min:u,max:E}=e;return{selected:s,select:(T,I,f)=>{let g=[...s??[]];if(d(T)){if(s?.length===u||r&&s?.length===1)return;g=s?.filter(S=>!o(S,T))}else s?.length===E?g=[T]:g=[...g,T];return t||i(g),t?.(g,T,I,f),g},isSelected:d}}function tg(e,n,a=0,r=0,t=!1,l=bn){const{from:i,to:s}=n||{},{isSameDay:o,isAfter:d,isBefore:u}=l;let E;if(!i&&!s)E={from:e,to:a>0?void 0:e};else if(i&&!s)o(i,e)?t?E={from:i,to:void 0}:E=void 0:u(e,i)?E={from:e,to:i}:E={from:i,to:e};else if(i&&s)if(o(i,e)&&o(s,e))t?E={from:i,to:s}:E=void 0;else if(o(i,e))E={from:i,to:a>0?void 0:e};else if(o(s,e))E={from:e,to:a>0?void 0:e};else if(u(e,i))E={from:e,to:s};else if(d(e,i))E={from:i,to:e};else if(d(e,s))E={from:i,to:e};else throw new Error("Invalid range");if(E?.from&&E?.to){const _=l.differenceInCalendarDays(E.to,E.from);r>0&&_>r?E={from:e,to:void 0}:a>1&&_<a&&(E={from:e,to:void 0})}return E}function lg(e,n,a=bn){const r=Array.isArray(n)?n:[n];let t=e.from;const l=a.differenceInCalendarDays(e.to,e.from),i=Math.min(l,6);for(let s=0;s<=i;s++){if(r.includes(t.getDay()))return!0;t=a.addDays(t,1)}return!1}function Ts(e,n,a=bn){return Bn(e,n.from,!1,a)||Bn(e,n.to,!1,a)||Bn(n,e.from,!1,a)||Bn(n,e.to,!1,a)}function ig(e,n,a=bn){const r=Array.isArray(n)?n:[n];if(r.filter(s=>typeof s!="function").some(s=>typeof s=="boolean"?s:a.isDate(s)?Bn(e,s,!1,a):Pu(s,a)?s.some(o=>Bn(e,o,!1,a)):li(s)?s.from&&s.to?Ts(e,{from:s.from,to:s.to},a):!1:Ku(s)?lg(e,s.dayOfWeek,a):bu(s)?a.isAfter(s.before,s.after)?Ts(e,{from:a.addDays(s.after,1),to:a.addDays(s.before,-1)},a):En(e.from,s,a)||En(e.to,s,a):Mu(s)||hu(s)?En(e.from,s,a)||En(e.to,s,a):!1))return!0;const i=r.filter(s=>typeof s=="function");if(i.length){let s=e.from;const o=a.differenceInCalendarDays(e.to,e.from);for(let d=0;d<=o;d++){if(i.some(u=>u(s)))return!0;s=a.addDays(s,1)}}return!1}function sg(e,n){const{disabled:a,excludeDisabled:r,selected:t,required:l,onSelect:i}=e,[s,o]=wt(t,i?t:void 0),d=i?t:s;return{selected:d,select:(_,T,I)=>{const{min:f,max:g}=e,S=_?tg(_,d,f,g,l,n):void 0;return r&&a&&S?.from&&S.to&&ig({from:S.from,to:S.to},a,n)&&(S.from=_,S.to=void 0),i||o(S),i?.(S,_,T,I),S},isSelected:_=>d&&Bn(d,_,!1,n)}}function og(e,n){const{selected:a,required:r,onSelect:t}=e,[l,i]=wt(a,t?a:void 0),s=t?a:l,{isSameDay:o}=n;return{selected:s,select:(E,_,T)=>{let I=E;return!r&&s&&s&&o(E,s)&&(I=void 0),t||i(I),t?.(I,E,_,T),I},isSelected:E=>s?o(s,E):!1}}function ug(e,n){const a=og(e,n),r=ag(e,n),t=sg(e,n);switch(e.mode){case"single":return a;case"multiple":return r;case"range":return t;default:return}}function dg(e){let n=e;n.timeZone&&(n={...e},n.today&&(n.today=new xe(n.today,n.timeZone)),n.month&&(n.month=new xe(n.month,n.timeZone)),n.defaultMonth&&(n.defaultMonth=new xe(n.defaultMonth,n.timeZone)),n.startMonth&&(n.startMonth=new xe(n.startMonth,n.timeZone)),n.endMonth&&(n.endMonth=new xe(n.endMonth,n.timeZone)),n.mode==="single"&&n.selected?n.selected=new xe(n.selected,n.timeZone):n.mode==="multiple"&&n.selected?n.selected=n.selected?.map(le=>new xe(le,n.timeZone)):n.mode==="range"&&n.selected&&(n.selected={from:n.selected.from?new xe(n.selected.from,n.timeZone):void 0,to:n.selected.to?new xe(n.selected.to,n.timeZone):void 0}));const{components:a,formatters:r,labels:t,dateLib:l,locale:i,classNames:s}=v.useMemo(()=>{const le={...yt,...n.locale};return{dateLib:new Jn({locale:le,weekStartsOn:n.broadcastCalendar?1:n.weekStartsOn,firstWeekContainsDate:n.firstWeekContainsDate,useAdditionalWeekYearTokens:n.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:n.useAdditionalDayOfYearTokens,timeZone:n.timeZone,numerals:n.numerals},n.dateLib),components:NR(n.components),formatters:AR(n.formatters),labels:{...UR,...n.labels},locale:le,classNames:{...TR(),...n.classNames}}},[n.locale,n.broadcastCalendar,n.weekStartsOn,n.firstWeekContainsDate,n.useAdditionalWeekYearTokens,n.useAdditionalDayOfYearTokens,n.timeZone,n.numerals,n.dateLib,n.components,n.formatters,n.labels,n.classNames]),{captionLayout:o,mode:d,navLayout:u,numberOfMonths:E=1,onDayBlur:_,onDayClick:T,onDayFocus:I,onDayKeyDown:f,onDayMouseEnter:g,onDayMouseLeave:S,onNextClick:c,onPrevClick:R,showWeekNumber:A,styles:D}=n,{formatCaption:k,formatDay:L,formatMonthDropdown:B,formatWeekNumber:M,formatWeekNumberHeader:G,formatWeekdayName:w,formatYearDropdown:K}=r,O=ZR(n,l),{days:b,months:P,navStart:U,navEnd:j,previousMonth:V,nextMonth:F,goToMonth:Y}=O,z=VI(b,n,l),{isSelected:W,select:te,selected:Be}=ug(n,l)??{},{blur:Z,focused:J,isFocusTarget:re,moveFocus:ae,setFocused:de}=rg(n,O,z,W??(()=>!1),l),{labelDayButton:we,labelGridcell:Ue,labelGrid:je,labelMonthDropdown:Mn,labelNav:sn,labelPrevious:_n,labelNext:rr,labelWeekday:ar,labelWeekNumber:Ir,labelWeekNumberHeader:Yn,labelYearDropdown:p}=t,y=v.useMemo(()=>kR(l,n.ISOWeek),[l,n.ISOWeek]),h=d!==void 0||T!==void 0,C=v.useCallback(()=>{V&&(Y(V),R?.(V))},[V,Y,R]),H=v.useCallback(()=>{F&&(Y(F),c?.(F))},[Y,F,c]),q=v.useCallback((le,ce)=>Ie=>{Ie.preventDefault(),Ie.stopPropagation(),de(le),te?.(le.date,ce,Ie),T?.(le.date,ce,Ie)},[te,T,de]),X=v.useCallback((le,ce)=>Ie=>{de(le),I?.(le.date,ce,Ie)},[I,de]),oe=v.useCallback((le,ce)=>Ie=>{Z(),_?.(le.date,ce,Ie)},[Z,_]),_e=v.useCallback((le,ce)=>Ie=>{const Cn={ArrowLeft:["day",n.dir==="rtl"?"after":"before"],ArrowRight:["day",n.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[Ie.shiftKey?"year":"month","before"],PageDown:[Ie.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(Cn[Ie.key]){Ie.preventDefault(),Ie.stopPropagation();const[Tn,Ma]=Cn[Ie.key];ae(Tn,Ma)}f?.(le.date,ce,Ie)},[ae,f,n.dir]),Qe=v.useCallback((le,ce)=>Ie=>{g?.(le.date,ce,Ie)},[g]),Rr=v.useCallback((le,ce)=>Ie=>{S?.(le.date,ce,Ie)},[S]),Sn=v.useCallback(le=>ce=>{const Ie=Number(ce.target.value),Cn=l.setMonth(l.startOfMonth(le),Ie);Y(Cn)},[l,Y]),xt=v.useCallback(le=>ce=>{const Ie=Number(ce.target.value),Cn=l.setYear(l.startOfMonth(le),Ie);Y(Cn)},[l,Y]),{className:$r,style:Wr}=v.useMemo(()=>({className:[s[Q.Root],n.className].filter(Boolean).join(" "),style:{...D?.[Q.Root],...n.style}}),[s,n.className,n.style,D]),Jt=_R(n),zr=v.useRef(null);xR(zr,!!n.animate,{classNames:s,months:P,focused:J,dateLib:l});const Yt={dayPickerProps:n,selected:Be,select:te,isSelected:W,months:P,nextMonth:F,previousMonth:V,goToMonth:Y,getModifiers:z,components:a,classNames:s,styles:D,labels:t,formatters:r};return m.createElement(Gu.Provider,{value:Yt},m.createElement(a.Root,{rootRef:n.animate?zr:void 0,className:$r,style:Wr,dir:n.dir,id:n.id,lang:n.lang,nonce:n.nonce,title:n.title,role:n.role,"aria-label":n["aria-label"],...Jt},m.createElement(a.Months,{className:s[Q.Months],style:D?.[Q.Months]},!n.hideNavigation&&!u&&m.createElement(a.Nav,{"data-animated-nav":n.animate?"true":void 0,className:s[Q.Nav],style:D?.[Q.Nav],"aria-label":sn(),onPreviousClick:C,onNextClick:H,previousMonth:V,nextMonth:F}),P.map((le,ce)=>{const Ie=pR(le.date,U,j,r,l),Cn=yR(U,j,r,l);return m.createElement(a.Month,{"data-animated-month":n.animate?"true":void 0,className:s[Q.Month],style:D?.[Q.Month],key:ce,displayIndex:ce,calendarMonth:le},u==="around"&&!n.hideNavigation&&ce===0&&m.createElement(a.PreviousMonthButton,{type:"button",className:s[Q.PreviousMonthButton],tabIndex:V?void 0:-1,"aria-disabled":V?void 0:!0,"aria-label":_n(V),onClick:C,"data-animated-button":n.animate?"true":void 0},m.createElement(a.Chevron,{disabled:V?void 0:!0,className:s[Q.Chevron],orientation:n.dir==="rtl"?"right":"left"})),m.createElement(a.MonthCaption,{"data-animated-caption":n.animate?"true":void 0,className:s[Q.MonthCaption],style:D?.[Q.MonthCaption],calendarMonth:le,displayIndex:ce},o?.startsWith("dropdown")?m.createElement(a.DropdownNav,{className:s[Q.Dropdowns],style:D?.[Q.Dropdowns]},o==="dropdown"||o==="dropdown-months"?m.createElement(a.MonthsDropdown,{className:s[Q.MonthsDropdown],"aria-label":Mn(),classNames:s,components:a,disabled:!!n.disableNavigation,onChange:Sn(le.date),options:Ie,style:D?.[Q.Dropdown],value:l.getMonth(le.date)}):m.createElement("span",null,B(le.date,l)),o==="dropdown"||o==="dropdown-years"?m.createElement(a.YearsDropdown,{className:s[Q.YearsDropdown],"aria-label":p(l.options),classNames:s,components:a,disabled:!!n.disableNavigation,onChange:xt(le.date),options:Cn,style:D?.[Q.Dropdown],value:l.getYear(le.date)}):m.createElement("span",null,K(le.date,l)),m.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},k(le.date,l.options,l))):m.createElement(a.CaptionLabel,{className:s[Q.CaptionLabel],role:"status","aria-live":"polite"},k(le.date,l.options,l))),u==="around"&&!n.hideNavigation&&ce===E-1&&m.createElement(a.NextMonthButton,{type:"button",className:s[Q.NextMonthButton],tabIndex:F?void 0:-1,"aria-disabled":F?void 0:!0,"aria-label":rr(F),onClick:H,"data-animated-button":n.animate?"true":void 0},m.createElement(a.Chevron,{disabled:F?void 0:!0,className:s[Q.Chevron],orientation:n.dir==="rtl"?"left":"right"})),ce===E-1&&u==="after"&&!n.hideNavigation&&m.createElement(a.Nav,{"data-animated-nav":n.animate?"true":void 0,className:s[Q.Nav],style:D?.[Q.Nav],"aria-label":sn(),onPreviousClick:C,onNextClick:H,previousMonth:V,nextMonth:F}),m.createElement(a.MonthGrid,{role:"grid","aria-multiselectable":d==="multiple"||d==="range","aria-label":je(le.date,l.options,l)||void 0,className:s[Q.MonthGrid],style:D?.[Q.MonthGrid]},!n.hideWeekdays&&m.createElement(a.Weekdays,{"data-animated-weekdays":n.animate?"true":void 0,className:s[Q.Weekdays],style:D?.[Q.Weekdays]},A&&m.createElement(a.WeekNumberHeader,{"aria-label":Yn(l.options),className:s[Q.WeekNumberHeader],style:D?.[Q.WeekNumberHeader],scope:"col"},G()),y.map((Tn,Ma)=>m.createElement(a.Weekday,{"aria-label":ar(Tn,l.options,l),className:s[Q.Weekday],key:Ma,style:D?.[Q.Weekday],scope:"col"},w(Tn,l.options,l)))),m.createElement(a.Weeks,{"data-animated-weeks":n.animate?"true":void 0,className:s[Q.Weeks],style:D?.[Q.Weeks]},le.weeks.map((Tn,Ma)=>m.createElement(a.Week,{className:s[Q.Week],key:Tn.weekNumber,style:D?.[Q.Week],week:Tn},A&&m.createElement(a.WeekNumber,{week:Tn,style:D?.[Q.WeekNumber],"aria-label":Ir(Tn.weekNumber,{locale:i}),className:s[Q.WeekNumber],scope:"row",role:"rowheader"},M(Tn.weekNumber,l)),Tn.days.map(He=>{const{date:Dn}=He,Ee=z(He);if(Ee[Se.focused]=!Ee.hidden&&!!J?.isEqualTo(He),Ee[gn.selected]=W?.(Dn)||Ee.selected,li(Be)){const{from:Ct,to:$t}=Be;Ee[gn.range_start]=!!(Ct&&$t&&l.isSameDay(Dn,Ct)),Ee[gn.range_end]=!!(Ct&&$t&&l.isSameDay(Dn,$t)),Ee[gn.range_middle]=Bn(Be,Dn,!0,l)}const bd=OR(Ee,D,n.modifiersStyles),Md=wI(Ee,s,n.modifiersClassNames),hd=!h&&!Ee.hidden?Ue(Dn,Ee,l.options,l):void 0;return m.createElement(a.Day,{key:`${l.format(Dn,"yyyy-MM-dd")}_${l.format(He.displayMonth,"yyyy-MM")}`,day:He,modifiers:Ee,className:Md.join(" "),style:bd,role:"gridcell","aria-selected":Ee.selected||void 0,"aria-label":hd,"data-day":l.format(Dn,"yyyy-MM-dd"),"data-month":He.outside?l.format(Dn,"yyyy-MM"):void 0,"data-selected":Ee.selected||void 0,"data-disabled":Ee.disabled||void 0,"data-hidden":Ee.hidden||void 0,"data-outside":He.outside||void 0,"data-focused":Ee.focused||void 0,"data-today":Ee.today||void 0},!Ee.hidden&&h?m.createElement(a.DayButton,{className:s[Q.DayButton],style:D?.[Q.DayButton],type:"button",day:He,modifiers:Ee,disabled:Ee.disabled||void 0,tabIndex:re(He)?0:-1,"aria-label":we(Dn,Ee,l.options,l),onClick:q(He,Ee),onBlur:oe(He,Ee),onFocus:X(He,Ee),onKeyDown:_e(He,Ee),onMouseEnter:Qe(He,Ee),onMouseLeave:Rr(He,Ee)},L(Dn,l.options,l)):!Ee.hidden&&L(He.date,l.options,l))}))))))})),n.footer&&m.createElement(a.Footer,{className:s[Q.Footer],style:D?.[Q.Footer],role:"status","aria-live":"polite"},n.footer)))}var Eg=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const ju=v.forwardRef((e,n)=>{var{as:a="div",className:r,above:t,below:l,variant:i,asChild:s}=e,o=Eg(e,["as","className","above","below","variant","asChild"]);const{cn:d}=ee(),u=i==="show"?t:l,E=i==="show"?l:t,_=s?Ur:a;return m.createElement(_,Object.assign({},o,{ref:n,className:d("navds-responsive",r,{[`navds-responsive__above--${u}`]:u,[`navds-responsive__below--${E}`]:E})}))}),mg=v.forwardRef((e,n)=>m.createElement(ju,Object.assign({},e,{ref:n,variant:"hide"}))),ii=v.forwardRef((e,n)=>m.createElement(ju,Object.assign({},e,{ref:n,variant:"show"})));function fn(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function Ng({day:e,fromDate:n,toDate:a}){const r=a&&zn(e,qn(a))>0,t=n&&zn(qn(n),e)>0;return r||t||!1}const qu="dd.MM.yyyy",_g="MMMM yyyy",Hu=[qu,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...Hu];const ul=(e,n,a,r,t)=>{let l;const i=Hu;if(t){for(const s of i)if(l=kr(e,s,n,{locale:a}),fn(l)&&!dl(e,n,a,i))return l;for(const s of[...i.map(o=>o.replace("yyyy","yy"))])if(l=kr(e,s,n,{locale:a}),fn(l)&&dl(e,n,a,i)){const o=Tg(e,s,n,a);return fn(new Date(o))?new Date(o):new Date("Invalid date")}return new Date("Invalid date")}for(const s of i)if(l=kr(e,s,n,{locale:a}),fn(l)&&!dl(e,n,a,i))return l;return new Date("Invalid date")};function dl(e,n,a,r){let t;const l=r.map(i=>i.replace("yyyy","yy"));for(const i of l)if(t=kr(e,i,n,{locale:a}),fn(t))return!0;return!1}function Tg(e,n,a,r){const t=kr(vs(e,"19"),n.replace("yy","yyyy"),a,{locale:r}),l=kr(vs(e,"20"),n.replace("yy","yyyy"),a,{locale:r});return fn(t)&&fn(l)?Aa(t,Sv(new Date,{years:80}))?l:t:new Date("Invalid date")}function vs(e,n){const a=e.slice(-2);return`${e.slice(0,e.length-2)}${n}${a}`}const Xr=(e,n,a,r)=>Nr(e,r??qu,{locale:n}),vg=({month:e,start:n,end:a})=>{if(!e)return;let r=e;return n&&Aa(r,n)&&(r=n),a&&ru(r,a)&&(r=a),mr(r)};function Ig(e,n,a,r){return Xo({start:Da(e),end:Gt(e)}).map(i=>{const s=Nr(i,"LLLL",{locale:r}),o=Zl(i),d=n&&i<mr(n)||a&&i>mr(a)||!1;return{value:o,label:s,disabled:d}})}function Rg(e,n,a){if(!e||!n)return;const r=Da(e),t=Gt(n),l=[];let i=r;for(;Aa(i,t)||su(i,t);)l.push(i),i=$l(i,1);return l.map(s=>{const o=Nr(s,"yyyy",{locale:a});return{value:ei(s),label:o,disabled:!1}})}function gg({captionLayout:e,startMonth:n,endMonth:a,today:r}){const t=e==="dropdown",l=r??new Date;return n?n=mr(n):!n&&t&&(n=Da($l(l,-100))),a?a=zo(a):!a&&t&&(a=Gt(l)),[n&&qn(n),a&&qn(a)]}var fg=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const cg=e=>{var{day:n,modifiers:a,locale:r,children:t}=e,l=fg(e,["day","modifiers","locale","children"]);const{cn:i}=ee(),s=v.useRef(null);return v.useEffect(()=>{var o;a.focused&&((o=s.current)===null||o===void 0||o.focus())},[a.focused]),a.hidden?m.createElement(m.Fragment,null):m.createElement("button",Object.assign({},l,{ref:s,"aria-hidden":n.outside,"aria-pressed":!!a.selected,"aria-label":Nr(n.date,"cccc d",{locale:r}),"data-pressed":a.selected,"data-today":a.today||void 0,className:i(l.className,{"rdp-day_disabled":a.disabled,"rdp-day_selected":a.selected,"rdp-day_range_start":a.range_start,"rdp-day_range_middle":a.range_middle,"rdp-day_range_end":a.range_end,"rdp-day_today":a.today,"rdp-day_outside":a.outside,"rdp-day__weekend":a.weekend})}),t)};var Sg=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Al=v.forwardRef((e,n)=>{const{inputProps:a,errorId:r,showErrorMsg:t,hasError:l,size:i,inputDescriptionId:s,readOnly:o}=Cr(e,"select"),{children:d,label:u,className:E,description:_,htmlSize:T,hideLabel:I=!1,style:f}=e,g=Sg(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:S}=ee(),c={onMouseDown:R=>{o&&(R.preventDefault(),R.target.focus())},onKeyDown:R=>{o&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(R.key)&&R.preventDefault()}};return m.createElement("div",{className:S(E,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!a.disabled,"navds-form-field--readonly":o,"navds-select--error":l,"navds-select--readonly":o})},m.createElement(ge,{htmlFor:a.id,size:i,className:S("navds-form-field__label",{"navds-sr-only":I})},o&&m.createElement(Nu,null),u),!!_&&m.createElement(ne,{className:S("navds-form-field__description",{"navds-sr-only":I}),id:s,size:i,as:"div"},_),m.createElement("div",{className:S("navds-select__container"),style:f},m.createElement("select",Object.assign({},Je(g,["error","errorId","size","readOnly"]),a,c,{ref:n,className:S("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:T}),d),m.createElement(va,{className:S("navds-select__chevron"),"aria-hidden":!0})),m.createElement("div",{className:S("navds-form-field__error"),id:r,"aria-relevant":"additions removals","aria-live":"polite"},t&&m.createElement(Hr,{size:i,showIcon:!0},e.error)))}),xu=({week:{weekNumber:e,days:n},onWeekNumberClick:a,className:r,style:t,showOnDesktop:l})=>{const i=Vt().translate,{cn:s}=ee(),{getModifiers:o}=vr(),d=v.useMemo(()=>n.filter(E=>{const _=o(E);return!(_.hidden||_.outside||_.disabled)}).length===0,[n,o]),u=l?ii:mg;return!a||d?m.createElement(u,{above:"sm",asChild:!0},m.createElement("td",{className:"rdp-cell"},m.createElement(hr,{as:"span",textColor:"subtle",className:r,style:t,"aria-label":i("weekNumber",{week:e})},e))):m.createElement(u,{above:"sm",asChild:!0},m.createElement("td",{className:s("rdp-cell",{"navds-date__week-wrapper":!l})},m.createElement(ke,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":i("selectWeekNumber",{week:e}),style:t,className:s("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{a(e,n.map(E=>E.date))},icon:m.createElement("span",{className:s("navds-date__weeknumber-number")},e)})))},Dg=({onWeekNumberClick:e,weeks:n})=>{const a=Vt().translate,{cn:r}=ee(),t=cn();return e?m.createElement(ii,{below:"sm",asChild:!0},m.createElement("table",{className:"rdp-table",role:"grid"},m.createElement("tbody",{className:"rdp-tbody"},m.createElement("tr",{className:r("rdp-row navds-date__week-row")},m.createElement(hr,{as:"th",weight:"semibold",className:r("rdp-cell navds-date__week-cell")},m.createElement("span",{className:r("navds-date__week-wrapper"),id:t},a("week"))),n?.map(l=>m.createElement(xu,{key:l.weekNumber,week:l,onWeekNumberClick:e,showOnDesktop:!1,className:r("navds-date__week-wrapper")})))))):null};var Ag=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const pg=e=>{var{children:n,calendarMonth:a,locale:r,onWeekNumberClick:t}=e,l=Ag(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:i,goToMonth:s,previousMonth:o,nextMonth:d}=vr(),{captionLayout:u}=i,{cn:E}=ee(),_=Vt().translate,T=v.useCallback((R,A)=>{const D=Number(A.target.value),k=ou(mr(R),D);s(k)},[s]),I=v.useCallback((R,A)=>{const D=Number(A.target.value),k=uu(mr(R),D);s(k)},[s]),[f,g]=gg({captionLayout:u==="dropdown"?"dropdown":"label",startMonth:i.startMonth,endMonth:i.endMonth,today:i.today}),S=Ig(a.date,f,g,r),c=Rg(f,g,r);return m.createElement("div",Object.assign({},Je(l,["displayIndex"])),m.createElement("div",{className:E("navds-date__caption")},u?.startsWith("dropdown")&&m.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:E("navds-sr-only")},Nr(a.date,"LLLL y",{locale:r})),m.createElement(ke,{variant:"tertiary-neutral",disabled:!o,onClick:()=>o&&s(o),icon:m.createElement(rE,{title:_("goToPreviousMonth")}),className:E("navds-date__caption-button"),type:"button"}),u?.startsWith("dropdown")?m.createElement("div",{className:E("navds-date__caption")},m.createElement(Al,{label:_("month"),hideLabel:!0,className:E("navds-date__caption__month"),onChange:R=>T(a.date,R),value:Zl(a.date)},S?.map(({value:R,label:A,disabled:D})=>m.createElement("option",{key:R,value:R,disabled:D},A))),m.createElement(Al,{label:_("year"),hideLabel:!0,className:E("navds-date__caption__year"),onChange:R=>I(a.date,R),value:ei(a.date)},c?.map(({value:R,label:A,disabled:D})=>m.createElement("option",{key:R,value:R,disabled:D},A)))):m.createElement(ne,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:E("navds-date__caption-label")},Nr(a.date,"LLLL y",{locale:r})),m.createElement(ke,{variant:"tertiary-neutral",icon:m.createElement(tE,{title:_("goToNextMonth")}),onClick:()=>d&&s(d),disabled:!d,className:E("navds-date__caption-button"),type:"button"})),m.createElement(Dg,{weeks:a.weeks,onWeekNumberClick:t}),n)};var Og=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const kg={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},Ju=e=>{var{className:n,dropdownCaption:a,disabled:r=[],disableWeekends:t=!1,showWeekNumber:l=!1,selected:i,fixedWeeks:s=!1,onWeekNumberClick:o,fromDate:d,toDate:u,month:E,mode:_,handleSelect:T,locale:I}=e,f=Og(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:g}=ee(),S=Co(),c=I?vu(I):S,R=_??"single";return m.createElement(dg,Object.assign({captionLayout:a?"dropdown":"label",hideNavigation:!0,locale:c,mode:R,onSelect:(A,D)=>{if(R!=="range"||A||!Ou(i)){T(A);return}if(!i.to){T({from:D,to:void 0});return}let k;Wl(i.to,D)?k=void 0:Aa(D,i.to)?k={from:D,to:i.to}:k={from:i.to,to:D},T(k)},selected:i,classNames:kg,components:{MonthCaption:()=>m.createElement(m.Fragment,null),DayButton:v.useCallback(A=>m.createElement(cg,Object.assign({},A,{locale:c})),[c]),Month:v.useCallback(A=>m.createElement(pg,Object.assign({},A,{locale:c,onWeekNumberClick:R==="multiple"?o:void 0})),[c,R,o]),Day:v.useCallback(A=>m.createElement("td",Object.assign({},Je(A,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:v.useCallback(A=>m.createElement(xu,Object.assign({},A,{showOnDesktop:!0,onWeekNumberClick:R==="multiple"?o:void 0})),[R,o]),WeekNumberHeader:v.useCallback(A=>m.createElement(ii,{above:"sm",asChild:!0},m.createElement("th",Object.assign({},A))),[]),Weekdays:v.useCallback(A=>m.createElement("thead",Object.assign({},A,{className:"rdp-head","aria-hidden":!0}),m.createElement("tr",{className:"rdp-head_row"},A.children)),[])},className:g("navds-date",n),disabled:A=>t&&It(A)||En(A,r)||Ng({day:A,fromDate:d,toDate:u}),weekStartsOn:1,modifiers:{weekend:A=>t&&It(A)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:l,fixedWeeks:s,showOutsideDays:!0,startMonth:d,endMonth:u,month:vg({month:E,start:d,end:u})},Je(f,["onSelect","role","id","defaultSelected"])))};var yg=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Lg=v.forwardRef((e,n)=>{var{className:a,locale:r,translations:t,selected:l,defaultSelected:i,onSelect:s,mode:o}=e,d=yg(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:u}=ee(),E=xn("DatePicker",t,Iu(r)),[_,T]=Pr({defaultValue:i,value:l,onChange:I=>s?.(I)});return m.createElement(Ru,{translate:E},m.createElement("div",{ref:n,className:u("navds-date__standalone-wrapper",a)},m.createElement(Ju,Object.assign({},d,{locale:r,handleSelect:T,selected:_,mode:o}))))});var bg=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const St=v.forwardRef((e,n)=>{var{children:a,locale:r,translations:t,selected:l,id:i,defaultSelected:s,wrapperClassName:o,open:d,onClose:u,onOpenToggle:E,strategy:_,mode:T}=e,I=bg(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const f=xn("DatePicker",t,Iu(r)),{cn:g}=ee(),S=cn(i),[c,R]=Pr({defaultValue:!1,value:d}),[A,D]=v.useState(null),k=jr(D,n),[L,B]=Pr({defaultValue:s,value:l,onChange:M=>{var G;let w=!1;T==="single"&&M?w=!0:Ou(M)&&M.from&&M.to&&(w=!0,Wl(M.from,M.to)&&(w=!1)),w&&(u?.(),R(!1)),(G=I?.onSelect)===null||G===void 0||G.call(I,M)}});return m.createElement(Ru,{translate:f},m.createElement(oI,{open:c,onOpen:()=>{R(M=>!M),E?.()},ariaId:S,defined:!0},m.createElement("div",{ref:k,className:g("navds-date__wrapper",o)},a,m.createElement(yI,{open:c,anchor:A,onClose:()=>{u?.(),c&&R(!1)},locale:r,translate:f,variant:T??"single",popoverProps:{id:S,strategy:_}},m.createElement(Ju,Object.assign({},I,{locale:r,handleSelect:B,selected:L,mode:T}))))))});St.Standalone=Lg;St.Input=uI;const Mg=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),hg=(e={})=>{var n;const{locale:a,required:r,defaultSelected:t,today:l=new Date,fromDate:i,toDate:s,disabled:o,disableWeekends:d,onDateChange:u,inputFormat:E,onValidate:_,defaultMonth:T,allowTwoDigitYear:I=!0}=e,[f,g]=v.useState(null),S=Co(),c=a?vu(a):S,[R,A]=v.useState(t),[D,k]=v.useState((n=R??T)!==null&&n!==void 0?n:l),[L,B]=v.useState(R),[M,G]=v.useState(!1),w=R?Xr(R,c,"date",E):"",[K,O]=v.useState(w),b=v.useCallback(Z=>{var J,re;G(Z),Z&&k((re=(J=L??R)!==null&&J!==void 0?J:T)!==null&&re!==void 0?re:l)},[T,R,L,l]),P=Z=>{u?.(Z),B(Z)},U=(Z={})=>_?.(Mg(Z));return{datepickerProps:{month:D,onMonthChange:k,onDayClick:(Z,{selected:J})=>{if(!(J&&r)){if(Z&&!J&&(b(!1),f?.focus()),J){P(void 0),O(""),U({isValidDate:!1,isEmpty:!0});return}P(Z),U(),k(Z),O(Z?Xr(Z,c,"date",E):"")}},selected:L??new Date("Invalid date"),locale:a,fromDate:i,toDate:s,today:l,open:M,onClose:()=>{b(!1),f?.focus()},onOpenToggle:()=>b(!M),disabled:o,disableWeekends:d},inputProps:{onChange:Z=>{O(Z.target.value);const J=ul(Z.target.value,l,c,"date",I),re=i&&J&&zn(i,J)>0,ae=s&&J&&zn(J,s)>0;if(!fn(J)||d&&It(J)||o&&En(J,o)){P(void 0),U({isInvalid:!fn(J),isWeekend:d&&It(J),isDisabled:o&&En(J,o),isValidDate:!1,isEmpty:!Z.target.value,isBefore:re??!1,isAfter:ae??!1});return}if(re||ae){P(void 0),U({isValidDate:!1,isBefore:re??!1,isAfter:ae??!1});return}P(J),U(),k(T??J)},onFocus:Z=>{if(Z.target.readOnly)return;const J=ul(Z.target.value,l,c,"date",I);if(fn(J)){O(Xr(J,c,"date",E));const re=i&&J&&zn(i,J)>0,ae=s&&J&&zn(J,s)>0;!re&&!ae&&k(J)}},onBlur:Z=>{const J=ul(Z.target.value,l,c,"date",I);fn(J)&&O(Xr(J,c,"date",E))},value:K,setAnchorRef:g},reset:()=>{var Z;P(R),k((Z=R??T)!==null&&Z!==void 0?Z:l),O(w??""),A(t)},selectedDay:L,setSelected:Z=>{var J;P(Z),k((J=Z??T)!==null&&J!==void 0?J:l),O(Z?Xr(Z,c,"date",E):"")}}};function qe(e,n,a,r){return r?typeof r=="string"?{[`--__${e}c-${n}-${a}-xs`]:r}:Object.fromEntries(Object.entries(r).map(([t,l])=>[`--__${e}c-${n}-${a}-${t}`,l])):{}}const Kg={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Is=(e,n,a,r,t,l)=>n.split(" ").map((i,s,o)=>{var d;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let u=`var(--${l}-${a}-${i})`;if(r.includes(i))u=i==="px"?"1px":i;else if(i.startsWith("space"))u=`var(--${l}-${i})`;else{const E=`--${l}-spacing-${i}`;u=`var(${(d=Kg[E])!==null&&d!==void 0?d:E})`}return t?i==="0"?"0":`calc(-1 * ${u})`:u}).join(" ");function un(e,n,a,r,t,l=!1,i=[]){if(!t)return{};if(typeof t=="string")return{[`--__${e}c-${n}-${a}-xs`]:Is(a,t,r,i,l,e)};const s={};return Object.entries(t).forEach(([o,d])=>{s[`--__${e}c-${n}-${a}-${o}`]=Is(a,d,r,i,l,e)}),s}const Pg=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Gg=({children:e,className:n,padding:a,paddingInline:r,paddingBlock:t,margin:l,marginInline:i,marginBlock:s,width:o,minWidth:d,maxWidth:u,height:E,minHeight:_,maxHeight:T,position:I,inset:f,top:g,right:S,left:c,bottom:R,overflow:A,overflowX:D,overflowY:k,flexBasis:L,flexGrow:B,flexShrink:M,gridColumn:G})=>{const w=wr(!1),{cn:K}=ee(),O=w?.isDarkside?"ax":"a",b=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},un(O,"r","p","spacing",a)),un(O,"r","pi","spacing",r)),un(O,"r","pb","spacing",t)),un(O,"r","m","spacing",l)),un(O,"r","mi","spacing",i)),un(O,"r","mb","spacing",s)),qe(O,"r","w",o)),qe(O,"r","minw",d)),qe(O,"r","maxw",u)),qe(O,"r","h",E)),qe(O,"r","minh",_)),qe(O,"r","maxh",T)),qe(O,"r","position",I)),un(O,"r","inset","spacing",f)),un(O,"r","top","spacing",g)),un(O,"r","right","spacing",S)),un(O,"r","bottom","spacing",R)),un(O,"r","left","spacing",c)),qe(O,"r","overflow",A)),qe(O,"r","overflowx",D)),qe(O,"r","overflowy",k)),qe(O,"r","flex-basis",L)),qe(O,"r","flex-grow",B)),qe(O,"r","flex-shrink",M)),qe(O,"r","grid-column",G));return m.createElement(Ur,{className:K({className:n,"navds-r-p":a,"navds-r-pi":r,"navds-r-pb":t,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":o,"navds-r-minw":d,"navds-r-maxw":u,"navds-r-h":E,"navds-r-minh":_,"navds-r-maxh":T,"navds-r-position":I,"navds-r-inset":f,"navds-r-top":g,"navds-r-right":S,"navds-r-bottom":R,"navds-r-left":c,"navds-r-overflow":A,"navds-r-overflowx":D,"navds-r-overflowy":k,"navds-r-flex-basis":L,"navds-r-flex-grow":B,"navds-r-flex-shrink":M,"navds-r-grid-column":G}),style:b},e)};var Bg=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Yu=v.forwardRef((e,n)=>{var{children:a,className:r,as:t="div",align:l,justify:i,wrap:s=!0,gap:o,style:d,direction:u="row",asChild:E}=e,_=Bg(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const T=wr(!1),I=T?.isDarkside?"ax":"a",{cn:f}=ee(),g=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),un(I,"stack","gap","spacing",o)),qe(I,"stack","direction",u)),qe(I,"stack","align",l)),qe(I,"stack","justify",i)),S=E?Ur:t;return m.createElement(Gg,Object.assign({},_),m.createElement(S,Object.assign({},Je(_,Pg),{ref:n,style:g,className:f("navds-stack",r,{"navds-vstack":u==="column","navds-hstack":u==="row","navds-stack-gap":o,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":u,"navds-stack-wrap":s})}),a))});var Fg=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const fe=v.forwardRef((e,n)=>{var{as:a="div"}=e,r=Fg(e,["as"]);return m.createElement(Yu,Object.assign({as:a},r,{ref:n,direction:"row"}))});var Vg=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const ye=v.forwardRef((e,n)=>{var{as:a="div"}=e,r=Vg(e,["as"]);return m.createElement(Yu,Object.assign({as:a},r,{ref:n,direction:"column",wrap:!1}))}),yr=()=>{const{cn:e}=ee();return m.createElement("span",{className:e("navds-stack__spacer")})};var wg=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const si=v.forwardRef((e,n)=>{var{as:a="a",className:r,underline:t=!0,variant:l,inlineText:i=!1,"data-color":s}=e,o=wg(e,["as","className","underline","variant","inlineText","data-color"]);const d=wr(!1),{cn:u}=ee();let E;return d?.isDarkside?E=l:E=l??"action",m.createElement(a,Object.assign({"data-color":s??Ug(E),"data-variant":E},o,{ref:n,className:u("navds-link",r,{[`navds-link--${E}`]:E,"navds-link--remove-underline":!t,"navds-link--inline-text":i})}))});function Ug(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var jg=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const qg=v.forwardRef((e,n)=>{var{className:a}=e,r=jg(e,["className"]);const{cn:t}=ee();return m.createElement("tbody",Object.assign({},r,{ref:n,className:t("navds-table__body",a)}))});var Hg=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Cu=v.forwardRef((e,n)=>{var{className:a,children:r,align:t,textSize:l}=e,i=Hg(e,["className","children","align","textSize"]);const{cn:s}=ee();return m.createElement("th",Object.assign({ref:n,className:s("navds-table__header-cell","navds-label",a,{[`navds-table__header-cell--align-${t}`]:t,"navds-label--small":l==="small"})},i),r)}),$u=v.createContext(null);var xg=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Jg=v.forwardRef((e,n)=>{var a,r,t,l,{className:i,children:s,sortable:o=!1,sortKey:d}=e,u=xg(e,["className","children","sortable","sortKey"]);const E=v.useContext($u),{cn:_}=ee();return o&&!d&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),m.createElement(Cu,Object.assign({scope:"col",ref:n,className:_(i),"aria-sort":o?((a=E?.sort)===null||a===void 0?void 0:a.orderBy)===d?(r=E?.sort)===null||r===void 0?void 0:r.direction:"none":void 0},u),o?m.createElement("button",{type:"button",className:_("navds-table__sort-button"),onClick:o&&d?()=>{var T;return(T=E?.onSortChange)===null||T===void 0?void 0:T.call(E,d)}:void 0},s,((t=E?.sort)===null||t===void 0?void 0:t.orderBy)===d?((l=E?.sort)===null||l===void 0?void 0:l.direction)==="descending"?m.createElement(KE,{"aria-hidden":!0}):m.createElement(GE,{"aria-hidden":!0}):m.createElement(iE,{"aria-hidden":!0})):s)});var Yg=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Wu=v.forwardRef((e,n)=>{var{className:a,children:r="",align:t,textSize:l}=e,i=Yg(e,["className","children","align","textSize"]);const{cn:s}=ee();return m.createElement(ne,Object.assign({as:"td",ref:n,className:s("navds-table__data-cell",a,{[`navds-table__data-cell--align-${t}`]:t}),size:l},i),r)});var Cg=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const $g=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function Wg(e){const n=parseFloat(e);return!Number.isNaN(n)&&Number.isFinite(n)}function Rs(e){return typeof e=="string"&&e[e.length-1]==="%"&&Wg(e.substring(0,e.length-1))}function El(e,n){n===0&&e?.style&&(e.style.display="none")}function zg(e,n){n===0&&e?.style&&(e.style.display="")}const Xg=e=>{var{children:n,className:a,innerClassName:r,duration:t=250,easing:l="ease",height:i}=e,s=Cg(e,["children","className","innerClassName","duration","easing","height"]);const{cn:o}=ee(),d=v.useRef(i),u=v.useRef(null),E=v.useRef(),_=v.useRef(),T=v.useRef(i),I=v.useRef("visible"),f=$g?0:t;typeof T.current=="number"?(typeof i!="string"&&(T.current=i<0?0:i),I.current="hidden"):Rs(T.current)&&(T.current=i==="0%"?0:i,I.current="hidden");const[g,S]=v.useState(T.current),[c,R]=v.useState(I.current),[A,D]=v.useState(!1);v.useEffect(()=>{El(u.current,T.current)},[]),v.useEffect(()=>{if(i!==d.current&&u.current){zg(u.current,d.current),u.current.style.overflow="hidden";const M=u.current.offsetHeight;u.current.style.overflow="";const G=f;let w,K,O="hidden",b;const P=d.current==="auto";typeof i=="number"?(w=i<0?0:i,K=w):Rs(i)?(w=i==="0%"?0:i,K=w):(w=M,K="auto",O=void 0),P&&(K=w,w=M),S(w),R("hidden"),D(!P),clearTimeout(_.current),clearTimeout(E.current),P?(b=!0,_.current=setTimeout(()=>{S(K),R(O),D(b)},50),E.current=setTimeout(()=>{D(!1),El(u.current,K)},G)):_.current=setTimeout(()=>{S(K),R(O),D(!1),i!=="auto"&&El(u.current,w)},G)}return d.current=i,()=>{clearTimeout(_.current),clearTimeout(E.current)}},[i]);const k={height:g,overflow:c};A&&(k.transition=`height ${f}ms ${l} 0ms`,k.WebkitTransition=k.transition);const B=typeof s["aria-hidden"]<"u"?s["aria-hidden"]:i===0;return m.createElement("div",Object.assign({},s,{className:o(a),style:k}),m.createElement("div",{"aria-hidden":B,className:o(r),ref:u},n))},Qg=new Set(["BUTTON","A","INPUT","SELECT","TEXTAREA","DETAILS","SUMMARY","LABEL"]),Zg=new Set(["button","link","checkbox","radio","switch","menuitem","option","tab","textbox","combobox","spinbutton","slider"]);function zu(e){for(let n=e;n&&n.nodeName!=="TR"&&n.nodeName!=="TH";n=n.parentElement){const a=n.nodeName;if(Qg.has(a))return!0;const r=n.getAttribute("role");if(r&&Zg.has(r)||n.hasAttribute("tabindex")&&n.getAttribute("tabindex")!=="-1")return!0}return!1}var ef=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Xu=v.forwardRef((e,n)=>{var{className:a,selected:r=!1,shadeOnHover:t=!0,onClick:l,onRowClick:i}=e,s=ef(e,["className","selected","shadeOnHover","onClick","onRowClick"]);const{cn:o}=ee(),d=u=>{i&&(zu(u.target)||i(u))};return m.createElement("tr",Object.assign({},s,{ref:n,className:o("navds-table__row",a,{"navds-table__row--selected":r,"navds-table__row--shade-on-hover":t}),onClick:Xn(l,d),"data-interactive":!!i}))});var nf=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const rf=v.forwardRef((e,n)=>{var{className:a,children:r,content:t,togglePlacement:l="left",defaultOpen:i=!1,open:s,onOpenChange:o,expansionDisabled:d=!1,expandOnRowClick:u=!1,colSpan:E=999,contentGutter:_,onClick:T}=e,I=nf(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:f}=ee(),[g,S]=Pr({defaultValue:i,value:s,onChange:o}),c=xn("global"),R=cn(),A=k=>{S(L=>!L),k.stopPropagation()},D=k=>{u&&!d&&!zu(k.target)&&A(k)};return m.createElement(m.Fragment,null,m.createElement(Xu,Object.assign({},I,{ref:n,className:f("navds-table__expandable-row",a,{"navds-table__expandable-row--open":g,"navds-table__expandable-row--expansion-disabled":d,"navds-table__expandable-row--clickable":u}),onClick:Xn(T,D)}),l==="right"&&r,m.createElement(Wu,{className:f("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":g}),onClick:d?()=>null:A},!d&&m.createElement("button",{className:f("navds-table__toggle-expand-button"),type:"button","aria-controls":R,"aria-expanded":g,onClick:A},m.createElement(va,{className:f("navds-table__expandable-icon"),title:c(g?"showLess":"showMore")}))),l==="left"&&r),m.createElement("tr",{"data-state":g?"open":"closed",className:f("navds-table__expanded-row"),"aria-hidden":!g,id:R},m.createElement("td",{colSpan:E,className:f("navds-table__expanded-row-cell")},m.createElement(Xg,{className:f("navds-table__expanded-row-collapse"),innerClassName:f(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${_??l}`),height:g?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},t))))});var af=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const tf=v.forwardRef((e,n)=>{var{className:a}=e,r=af(e,["className"]);const{cn:t}=ee();return m.createElement("thead",Object.assign({},r,{ref:n,className:t("navds-table__header",a)}))});var lf=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const De=v.forwardRef((e,n)=>{var{className:a,zebraStripes:r=!1,size:t="medium",onSortChange:l,sort:i,stickyHeader:s=!1}=e,o=lf(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:d}=ee();return m.createElement($u.Provider,{value:{onSortChange:l,sort:i}},m.createElement("table",Object.assign({},o,{ref:n,className:d("navds-table",`navds-table--${t}`,a,{"navds-table--zebra-stripes":r,"navds-table--sticky-header":s})})))});De.Header=tf;De.Body=qg;De.Row=Xu;De.ColumnHeader=Jg;De.HeaderCell=Cu;De.DataCell=Wu;De.ExpandableRow=rf;var sf=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const of=v.forwardRef((e,n)=>{var{children:a,className:r,variant:t,size:l="medium",icon:i,"data-color":s}=e,o=sf(e,["children","className","variant","size","icon","data-color"]);const{cn:d}=ee(),u=t?.endsWith("-filled")&&"strong",E=t?.endsWith("-moderate")&&"moderate";return m.createElement(ne,Object.assign({"data-color":s??uf(t),"data-variant":u||E||"outline"},o,{ref:n,as:"span",size:l==="medium"?"medium":"small",className:d("navds-tag",r,`navds-tag--${t}`,`navds-tag--${l}`)}),i&&m.createElement("span",{className:d("navds-tag__icon--left")},i),a)});function uf(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var df=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Qu=v.forwardRef((e,n)=>{var{children:a,className:r,arrow:t=!0,placement:l="top",open:i,defaultOpen:s=!1,onOpenChange:o,offset:d,content:u,delay:E=150,id:_,keys:T,maxChar:I=80,describesChild:f=!1}=e,g=df(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:S}=ee(),[c,R]=Pr({defaultValue:s,value:i,onChange:o}),A=v.useRef(null),D=Ia(!1),k=D?D.ref.current:void 0,{x:L,y:B,strategy:M,context:G,placement:w,middlewareData:{arrow:{x:K,y:O}={},hide:{referenceHidden:b}={}},refs:P}=mu({placement:l,open:c,onOpenChange:z=>R(z),middleware:[Ho(d??(t?8:4)),xo(),Jo({padding:5,fallbackPlacements:["bottom","top"]}),Yo({element:A,padding:5})],whileElementsMounted:D?(z,W,te)=>gl(z,W,te,{animationFrame:!0}):gl,strategy:D?"fixed":void 0}),{getReferenceProps:U,getFloatingProps:j}=eI([xv(G,{handleClose:aI(),restMs:E}),Zv(G),Xv(G)]),V=cn(_),F=jr(n,P.setFloating);if(!a||a?.type===m.Fragment||a===m.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;u?.length>I&&c&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${u.length}
Tooltip-content: ${u}`);const Y=f?c?{"aria-describedby":V}:{title:u}:{"aria-label":u};return m.createElement(m.Fragment,null,m.createElement(Ur,Object.assign({ref:P.setReference},U(),Y,{"aria-keyshortcuts":T?T.join("+"):void 0}),a),m.createElement(hN,{rootElement:k,asChild:!0},c&&m.createElement("div",Object.assign({},j(Object.assign(Object.assign({},g),{ref:F,style:{position:M,top:B??0,left:L??0,visibility:b?"hidden":"visible"},role:"tooltip",id:V,className:S("navds-tooltip","navds-detail navds-detail--small",r)})),{"data-side":w,"data-state":"open"}),u,T&&m.createElement("span",{className:S("navds-tooltip__keys"),"aria-hidden":!0},T.map(z=>m.createElement(hr,{as:"kbd",key:z,className:S("navds-tooltip__key")},z))),t&&m.createElement("div",{ref:z=>{A.current=z},className:S("navds-tooltip__arrow"),style:{left:K!=null?`${K}px`:"",top:O!=null?`${O}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[w]]:"-3.5px"}}))))}),Ef=(e,n)=>{const a=Cr(e,"fieldset");return Object.assign(Object.assign({},a),{inputProps:{"aria-labelledby":e["aria-labelledby"]||Vr(n,{[a.inputDescriptionId]:e.description&&!ct(e.description)})}})};var mf=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Nf=v.forwardRef((e,n)=>{var a,r,t;const l=cn(),{inputProps:i,errorId:s,showErrorMsg:o,hasError:d,size:u,readOnly:E,inputDescriptionId:_}=Ef(e,l),{cn:T}=ee(),I=v.useContext(ft),{children:f,className:g,errorPropagation:S=!0,legend:c,description:R,hideLegend:A,nativeReadOnly:D=!0}=e,k=mf(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return m.createElement(ft.Provider,{value:{error:S?(a=e.error)!==null&&a!==void 0?a:I?.error:void 0,errorId:Vr({[s]:o,[(r=I?.errorId)!==null&&r!==void 0?r:""]:!!I?.error}),size:u,disabled:(t=e.disabled)!==null&&t!==void 0?t:!1,readOnly:E}},m.createElement("fieldset",Object.assign({},Je(k,["errorId","error","size","readOnly"]),i,{ref:n,className:T(g,"navds-fieldset",`navds-fieldset--${u}`,{"navds-fieldset--error":d,"navds-fieldset--readonly":E})}),m.createElement(ge,{id:l,size:u,as:"legend",className:T("navds-fieldset__legend",{"navds-sr-only":!!A})},E&&(D?m.createElement(Ft,null):m.createElement(Nu,null)),c),!!R&&m.createElement(ne,{className:T("navds-fieldset__description",{"navds-sr-only":!!A}),id:_,size:u??"medium",as:"div"},e.description),f,m.createElement("div",{id:s,"aria-relevant":"additions removals","aria-live":"polite",className:T("navds-fieldset__error")},o&&m.createElement(Hr,{size:u,showIcon:!0},e.error))))});var _f=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Zu=m.createContext(null),Tf=v.forwardRef((e,n)=>{var a,r,{children:t,className:l,name:i,defaultValue:s,value:o,onChange:d=()=>{},required:u,readOnly:E}=e,_=_f(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:T}=ee(),I=v.useContext(ft),f=cn();return m.createElement(Nf,Object.assign({},_,{readOnly:E,ref:n,className:T(l,"navds-radio-group",`navds-radio-group--${(r=(a=_.size)!==null&&a!==void 0?a:I?.size)!==null&&r!==void 0?r:"medium"}`),nativeReadOnly:!1}),m.createElement(Zu.Provider,{value:{name:i??`radioGroupName-${f}`,defaultValue:s,value:o,onChange:d,required:u}},m.createElement("div",{className:T("navds-radio-buttons")},t)))});var vf=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const If=e=>{const n=v.useContext(Zu),a=Cr(Je(e,["description"]),"radio"),{inputProps:r,readOnly:t}=a,l=vf(a,["inputProps","readOnly"]);return n||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:t,inputProps:Object.assign(Object.assign({},r),{name:n?.name,defaultChecked:n?.defaultValue===void 0?void 0:n?.defaultValue===e.value,checked:n?.value===void 0?void 0:n?.value===e.value,onChange:i=>{var s,o;t||((s=e.onChange)===null||s===void 0||s.call(e,i),(o=n?.onChange)===null||o===void 0||o.call(n,e.value))},onClick:i=>{var s;if(t){i.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,i)},required:n?.required,type:"radio"})})},Lr=v.forwardRef((e,n)=>{const{cn:a}=ee(),{inputProps:r,size:t,hasError:l,readOnly:i}=If(e),s=cn(),o=wr(!1);return o?.isDarkside?m.createElement("div",{className:a(e.className,"navds-radio",`navds-radio--${t}`,{"navds-radio--error":l,"navds-radio--disabled":r.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},m.createElement("input",Object.assign({},Je(e,["children","size","description","readOnly"]),Je(r,["aria-invalid","aria-describedby"]),{"aria-describedby":Vr(r["aria-describedby"],{[s]:e.description})||void 0,className:a("navds-radio__input"),ref:n})),m.createElement(ne,{as:"label",htmlFor:r.id,className:a("navds-radio__label"),size:t},e.children),e.description&&m.createElement(ne,{id:s,size:t,className:a("navds-form-field__subdescription navds-radio__description")},e.description)):m.createElement("div",{className:a(e.className,"navds-radio",`navds-radio--${t}`,{"navds-radio--error":l,"navds-radio--disabled":r.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},m.createElement("input",Object.assign({},Je(e,["children","size","description","readOnly"]),Je(r,["aria-invalid"]),{className:a("navds-radio__input"),ref:n})),m.createElement("label",{htmlFor:r.id,className:a("navds-radio__label")},m.createElement("span",{className:a("navds-radio__content")},m.createElement(ne,{as:"span",size:t},e.children),e.description&&m.createElement(ne,{as:"span",size:t,className:a("navds-form-field__subdescription navds-radio__description")},e.description))))});var Rf=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const gs=(e,n,a)=>{const{outerHeightStyle:r,overflow:t}=n;return a.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==t)?(a.current+=1,n):e},fs=e=>(e?.ownerDocument||document).defaultView||window;function Fa(e){return parseInt(e,10)||0}const gf=v.forwardRef((e,n)=>{var a,r,{className:t,onChange:l,maxRows:i,minRows:s=1,autoScrollbar:o,style:d,value:u}=e,E=Rf(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:_}=v.useRef(u!=null),T=v.useRef(null),I=jr(T,n),f=v.useRef(null),g=v.useRef(0),[S,c]=v.useState({outerHeightStyle:0}),R=m.useCallback(()=>{const L=T.current,M=fs(L).getComputedStyle(L);if(M.width==="0px")return{outerHeightStyle:0};const G=f.current;G.style.width=M.width,G.value=L.value||E.placeholder||"x",G.value.slice(-1)===`
`&&(G.value+=" ");const w=M.boxSizing,K=Fa(M.paddingBottom)+Fa(M.paddingTop),O=Fa(M.borderBottomWidth)+Fa(M.borderTopWidth),b=G.scrollHeight-K;G.value="x";const P=G.scrollHeight-K;let U=b;s&&(U=Math.max(Number(s)*P,U)),i&&(U=Math.min(Number(i)*P,U)),U=Math.max(U,P);const j=U+(w==="border-box"?K+O:0),V=Math.abs(U-b)<=1;return{outerHeightStyle:j,overflow:V}},[i,s,E.placeholder]),A=()=>{const L=R();cs(L)||c(B=>gs(B,L,g))};Kr(()=>{const L=()=>{const K=R();cs(K)||Et.flushSync(()=>{c(O=>gs(O,K,g))})},B=vo(()=>{var K,O,b;if(g.current=0,!((K=T.current)===null||K===void 0)&&K.style.height||!((O=T.current)===null||O===void 0)&&O.style.width){((b=T.current)===null||b===void 0?void 0:b.style.overflow)==="hidden"&&c(P=>Object.assign(Object.assign({},P),{overflow:!1}));return}L()},166,!0),M=T.current,G=fs(M);G.addEventListener("resize",B);let w;return typeof ResizeObserver<"u"&&(w=new ResizeObserver(B),w.observe(M)),()=>{B.clear(),G.removeEventListener("resize",B),w&&w.disconnect()}},[R]),Kr(()=>{A()}),v.useEffect(()=>{g.current=0},[u]);const D=L=>{g.current=0,_||A(),l&&l(L)},k=Object.assign({"--__ac-textarea-height":S.outerHeightStyle+"px","--__axc-textarea-height":S.outerHeightStyle+"px",overflow:S.overflow&&!o&&!(!((a=T.current)===null||a===void 0)&&a.style.height)&&!(!((r=T.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},d);return m.createElement(m.Fragment,null,m.createElement("textarea",Object.assign({value:u,onChange:D,ref:I,rows:s,style:k},E,{className:t})),m.createElement("textarea",{"aria-hidden":!0,className:t,readOnly:!0,ref:f,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d)}))});function cs(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const ff=({maxLengthId:e,maxLength:n,currentLength:a,size:r,i18n:t})=>{const{cn:l}=ee(),i=xn("Textarea",{charsLeft:t?.counterLeft?`{chars} ${t.counterLeft}`:void 0,charsTooMany:t?.counterTooMuch?`{chars} ${t.counterTooMuch}`:void 0}),s=n-a,[o,d]=v.useState(s);return v.useEffect(()=>{const u=vo(()=>{d(s)},2e3);return u(),()=>{u.clear()}},[s]),m.createElement(m.Fragment,null,m.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:n})),s<20&&m.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},Ss(o,i)),m.createElement(ne,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:r},Ss(s,i)))},Ss=(e,n)=>e<0?n("charsTooMany",{chars:Math.abs(e)}):n("charsLeft",{chars:e});var cf=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Sf=v.forwardRef((e,n)=>{var a,r,t;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:o,size:d,inputDescriptionId:u}=Cr(e,"textarea"),{label:E,className:_,description:T,maxLength:I,hideLabel:f=!1,resize:g,UNSAFE_autoScrollbar:S,i18n:c,readOnly:R}=e,A=cf(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:D}=ee(),k=cn(),L=I!==void 0&&I>0,[B,M]=v.useState((a=e?.defaultValue)!==null&&a!==void 0?a:""),G=()=>{let K=A?.minRows?A?.minRows:3;return d==="small"&&(K=A?.minRows?A?.minRows:2),K},w=Vr(l["aria-describedby"],{[k??""]:L});return m.createElement("div",{className:D(_,"navds-form-field",`navds-form-field--${d}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":R,"navds-textarea--readonly":R,"navds-textarea--error":o,"navds-textarea--autoscrollbar":S,[`navds-textarea--resize-${g===!0?"both":g}`]:g})},m.createElement(ge,{htmlFor:l.id,size:d,className:D("navds-form-field__label",{"navds-sr-only":f})},R&&m.createElement(Ft,null),E),!!T&&m.createElement(ne,{className:D("navds-form-field__description",{"navds-sr-only":f}),id:u,size:d,as:"div"},T),m.createElement(gf,Object.assign({},Je(A,["error","errorId","size"]),l,{onChange:Xn(e.onChange,e.value===void 0?K=>M(K.target.value):void 0),minRows:G(),autoScrollbar:S,ref:n,readOnly:R,className:D("navds-textarea__input","navds-body-short",`navds-body-short--${d??"medium"}`)},w?{"aria-describedby":w}:{})),L&&!R&&!l.disabled&&m.createElement(ff,{maxLengthId:k,maxLength:I,currentLength:(t=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&t!==void 0?t:B.length,size:d,i18n:c}),m.createElement("div",{className:D("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},s&&m.createElement(Hr,{size:d,showIcon:!0},e.error)))});var Df=function(e,n){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)n.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a};const Af=v.forwardRef((e,n)=>{const{cn:a}=ee(),{inputProps:r,errorId:t,showErrorMsg:l,hasError:i,size:s,inputDescriptionId:o}=Cr(e,"textField"),{label:d,className:u,description:E,htmlSize:_,hideLabel:T=!1,type:I="text",readOnly:f}=e,g=Df(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return m.createElement("div",{className:a(u,"navds-form-field",`navds-form-field--${s}`,{"navds-text-field--error":i,"navds-text-field--disabled":!!r.disabled,"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":f,"navds-text-field--readonly":f})},m.createElement(ge,{htmlFor:r.id,size:s,className:a("navds-form-field__label",{"navds-sr-only":T})},f&&m.createElement(Ft,null),d),!!E&&m.createElement(ne,{className:a("navds-form-field__description",{"navds-sr-only":T}),id:o,size:s,as:"div"},E),m.createElement("input",Object.assign({},Je(g,["error","errorId","size"]),r,{ref:n,type:I,readOnly:f,className:a("navds-text-field__input","navds-body-short",`navds-body-short--${s??"medium"}`),size:_})),m.createElement("div",{className:a("navds-form-field__error"),id:t,"aria-relevant":"additions removals","aria-live":"polite"},l&&m.createElement(Hr,{size:s,showIcon:!0},e.error)))});var Ve=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Ve||{}),Oa=e=>e.type==="checkbox",sr=e=>e instanceof Date,Ce=e=>e==null;const ed=e=>typeof e=="object";var Ge=e=>!Ce(e)&&!Array.isArray(e)&&ed(e)&&!sr(e),nd=e=>Ge(e)&&e.target?Oa(e.target)?e.target.checked:e.target.value:e,pf=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,rd=(e,n)=>e.has(pf(n)),Of=e=>{const n=e.constructor&&e.constructor.prototype;return Ge(n)&&n.hasOwnProperty("isPrototypeOf")},oi=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Fe(e){let n;const a=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)n=new Date(e);else if(!(oi&&(e instanceof Blob||r))&&(a||Ge(e)))if(n=a?[]:Object.create(Object.getPrototypeOf(e)),!a&&!Of(e))n=e;else for(const t in e)e.hasOwnProperty(t)&&(n[t]=Fe(e[t]));else return e;return n}var Ut=e=>/^\w*$/.test(e),be=e=>e===void 0,ui=e=>Array.isArray(e)?e.filter(Boolean):[],di=e=>ui(e.replace(/["|']|\]/g,"").split(/\.|\[/)),$=(e,n,a)=>{if(!n||!Ge(e))return a;const r=(Ut(n)?[n]:di(n)).reduce((t,l)=>Ce(t)?t:t[l],e);return be(r)||r===e?be(e[n])?a:e[n]:r},an=e=>typeof e=="boolean",Re=(e,n,a)=>{let r=-1;const t=Ut(n)?[n]:di(n),l=t.length,i=l-1;for(;++r<l;){const s=t[r];let o=a;if(r!==i){const d=e[s];o=Ge(d)||Array.isArray(d)?d:isNaN(+t[r+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=o,e=e[s]}};const Dt={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},vn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},hn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ei=m.createContext(null);Ei.displayName="HookFormContext";const nr=()=>m.useContext(Ei),kf=e=>{const{children:n,...a}=e;return m.createElement(Ei.Provider,{value:a},n)};var ad=(e,n,a,r=!0)=>{const t={defaultValues:n._defaultValues};for(const l in e)Object.defineProperty(t,l,{get:()=>{const i=l;return n._proxyFormState[i]!==vn.all&&(n._proxyFormState[i]=!r||vn.all),a&&(a[i]=!0),e[i]}});return t};const mi=typeof window<"u"?m.useLayoutEffect:m.useEffect;function yf(e){const n=nr(),{control:a=n.control,disabled:r,name:t,exact:l}=e||{},[i,s]=m.useState(a._formState),o=m.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return mi(()=>a._subscribe({name:t,formState:o.current,exact:l,callback:d=>{!r&&s({...a._formState,...d})}}),[t,r,l]),m.useEffect(()=>{o.current.isValid&&a._setValid(!0)},[a]),m.useMemo(()=>ad(i,a,o.current,!1),[i,a])}var tn=e=>typeof e=="string",td=(e,n,a,r,t)=>tn(e)?(r&&n.watch.add(e),$(a,e,t)):Array.isArray(e)?e.map(l=>(r&&n.watch.add(l),$(a,l))):(r&&(n.watchAll=!0),a),pl=e=>Ce(e)||!ed(e);function Gn(e,n,a=new WeakSet){if(pl(e)||pl(n))return e===n;if(sr(e)&&sr(n))return e.getTime()===n.getTime();const r=Object.keys(e),t=Object.keys(n);if(r.length!==t.length)return!1;if(a.has(e)||a.has(n))return!0;a.add(e),a.add(n);for(const l of r){const i=e[l];if(!t.includes(l))return!1;if(l!=="ref"){const s=n[l];if(sr(i)&&sr(s)||Ge(i)&&Ge(s)||Array.isArray(i)&&Array.isArray(s)?!Gn(i,s,a):i!==s)return!1}}return!0}function Lf(e){const n=nr(),{control:a=n.control,name:r,defaultValue:t,disabled:l,exact:i,compute:s}=e||{},o=m.useRef(t),d=m.useRef(s),u=m.useRef(void 0);d.current=s;const E=m.useMemo(()=>a._getWatch(r,o.current),[a,r]),[_,T]=m.useState(d.current?d.current(E):E);return mi(()=>a._subscribe({name:r,formState:{values:!0},exact:i,callback:I=>{if(!l){const f=td(r,a._names,I.values||a._formValues,!1,o.current);if(d.current){const g=d.current(f);Gn(g,u.current)||(T(g),u.current=g)}else T(f)}}}),[a,l,r,i]),m.useEffect(()=>a._removeUnmounted()),_}function ka(e){const n=nr(),{name:a,disabled:r,control:t=n.control,shouldUnregister:l,defaultValue:i}=e,s=rd(t._names.array,a),o=m.useMemo(()=>$(t._formValues,a,$(t._defaultValues,a,i)),[t,a,i]),d=Lf({control:t,name:a,defaultValue:o,exact:!0}),u=yf({control:t,name:a,exact:!0}),E=m.useRef(e),_=m.useRef(void 0),T=m.useRef(t.register(a,{...e.rules,value:d,...an(e.disabled)?{disabled:e.disabled}:{}}));E.current=e;const I=m.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!$(u.errors,a)},isDirty:{enumerable:!0,get:()=>!!$(u.dirtyFields,a)},isTouched:{enumerable:!0,get:()=>!!$(u.touchedFields,a)},isValidating:{enumerable:!0,get:()=>!!$(u.validatingFields,a)},error:{enumerable:!0,get:()=>$(u.errors,a)}}),[u,a]),f=m.useCallback(R=>T.current.onChange({target:{value:nd(R),name:a},type:Dt.CHANGE}),[a]),g=m.useCallback(()=>T.current.onBlur({target:{value:$(t._formValues,a),name:a},type:Dt.BLUR}),[a,t._formValues]),S=m.useCallback(R=>{const A=$(t._fields,a);A&&R&&(A._f.ref={focus:()=>R.focus&&R.focus(),select:()=>R.select&&R.select(),setCustomValidity:D=>R.setCustomValidity(D),reportValidity:()=>R.reportValidity()})},[t._fields,a]),c=m.useMemo(()=>({name:a,value:d,...an(r)||u.disabled?{disabled:u.disabled||r}:{},onChange:f,onBlur:g,ref:S}),[a,r,u.disabled,f,g,S,d]);return m.useEffect(()=>{const R=t._options.shouldUnregister||l,A=_.current;A&&A!==a&&!s&&t.unregister(A),t.register(a,{...E.current.rules,...an(E.current.disabled)?{disabled:E.current.disabled}:{}});const D=(k,L)=>{const B=$(t._fields,k);B&&B._f&&(B._f.mount=L)};if(D(a,!0),R){const k=Fe($(t._options.defaultValues,a));Re(t._defaultValues,a,k),be($(t._formValues,a))&&Re(t._formValues,a,k)}return!s&&t.register(a),_.current=a,()=>{(s?R&&!t._state.action:R)?t.unregister(a):D(a,!1)}},[a,t,s,l]),m.useEffect(()=>{t._setDisabledField({disabled:r,name:a})},[r,a,t]),m.useMemo(()=>({field:c,formState:u,fieldState:I}),[c,u,I])}var bf=(e,n,a,r,t)=>n?{...a[e],types:{...a[e]&&a[e].types?a[e].types:{},[r]:t||!0}}:{},la=e=>Array.isArray(e)?e:[e],Ds=()=>{let e=[];return{get observers(){return e},next:t=>{for(const l of e)l.next&&l.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(l=>l!==t)}}),unsubscribe:()=>{e=[]}}};function ld(e,n){const a={};for(const r in e)if(e.hasOwnProperty(r)){const t=e[r],l=n[r];if(t&&Ge(t)&&l){const i=ld(t,l);Ge(i)&&(a[r]=i)}else e[r]&&(a[r]=l)}return a}var Ze=e=>Ge(e)&&!Object.keys(e).length,Ni=e=>e.type==="file",In=e=>typeof e=="function",At=e=>{if(!oi)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},id=e=>e.type==="select-multiple",_i=e=>e.type==="radio",Mf=e=>_i(e)||Oa(e),ml=e=>At(e)&&e.isConnected;function hf(e,n){const a=n.slice(0,-1).length;let r=0;for(;r<a;)e=be(e)?r++:e[n[r++]];return e}function Kf(e){for(const n in e)if(e.hasOwnProperty(n)&&!be(e[n]))return!1;return!0}function Pe(e,n){const a=Array.isArray(n)?n:Ut(n)?[n]:di(n),r=a.length===1?e:hf(e,a),t=a.length-1,l=a[t];return r&&delete r[l],t!==0&&(Ge(r)&&Ze(r)||Array.isArray(r)&&Kf(r))&&Pe(e,a.slice(0,-1)),e}var Pf=e=>{for(const n in e)if(In(e[n]))return!0;return!1};function sd(e){return Array.isArray(e)||Ge(e)&&!Pf(e)}function Ol(e,n={}){for(const a in e)sd(e[a])?(n[a]=Array.isArray(e[a])?[]:{},Ol(e[a],n[a])):Ce(e[a])||(n[a]=!0);return n}function Ar(e,n,a){a||(a=Ol(n));for(const r in e)sd(e[r])?be(n)||pl(a[r])?a[r]=Ol(e[r],Array.isArray(e[r])?[]:{}):Ar(e[r],Ce(n)?{}:n[r],a[r]):a[r]=!Gn(e[r],n[r]);return a}const As={value:!1,isValid:!1},ps={value:!0,isValid:!0};var od=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(a=>a&&a.checked&&!a.disabled).map(a=>a.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!be(e[0].attributes.value)?be(e[0].value)||e[0].value===""?ps:{value:e[0].value,isValid:!0}:ps:As}return As},ud=(e,{valueAsNumber:n,valueAsDate:a,setValueAs:r})=>be(e)?e:n?e===""?NaN:e&&+e:a&&tn(e)?new Date(e):r?r(e):e;const Os={isValid:!1,value:null};var dd=e=>Array.isArray(e)?e.reduce((n,a)=>a&&a.checked&&!a.disabled?{isValid:!0,value:a.value}:n,Os):Os;function ks(e){const n=e.ref;return Ni(n)?n.files:_i(n)?dd(e.refs).value:id(n)?[...n.selectedOptions].map(({value:a})=>a):Oa(n)?od(e.refs).value:ud(be(n.value)?e.ref.value:n.value,e)}var Gf=(e,n,a,r)=>{const t={};for(const l of e){const i=$(n,l);i&&Re(t,l,i._f)}return{criteriaMode:a,names:[...e],fields:t,shouldUseNativeValidation:r}},pt=e=>e instanceof RegExp,Qr=e=>be(e)?e:pt(e)?e.source:Ge(e)?pt(e.value)?e.value.source:e.value:e,ys=e=>({isOnSubmit:!e||e===vn.onSubmit,isOnBlur:e===vn.onBlur,isOnChange:e===vn.onChange,isOnAll:e===vn.all,isOnTouch:e===vn.onTouched});const Ls="AsyncFunction";var Bf=e=>!!e&&!!e.validate&&!!(In(e.validate)&&e.validate.constructor.name===Ls||Ge(e.validate)&&Object.values(e.validate).find(n=>n.constructor.name===Ls)),Ff=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),bs=(e,n,a)=>!a&&(n.watchAll||n.watch.has(e)||[...n.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const ia=(e,n,a,r)=>{for(const t of a||Object.keys(e)){const l=$(e,t);if(l){const{_f:i,...s}=l;if(i){if(i.refs&&i.refs[0]&&n(i.refs[0],t)&&!r)return!0;if(i.ref&&n(i.ref,i.name)&&!r)return!0;if(ia(s,n))break}else if(Ge(s)&&ia(s,n))break}}};function Ms(e,n,a){const r=$(e,a);if(r||Ut(a))return{error:r,name:a};const t=a.split(".");for(;t.length;){const l=t.join("."),i=$(n,l),s=$(e,l);if(i&&!Array.isArray(i)&&a!==l)return{name:a};if(s&&s.type)return{name:l,error:s};if(s&&s.root&&s.root.type)return{name:`${l}.root`,error:s.root};t.pop()}return{name:a}}var Vf=(e,n,a,r)=>{a(e);const{name:t,...l}=e;return Ze(l)||Object.keys(l).length>=Object.keys(n).length||Object.keys(l).find(i=>n[i]===(!r||vn.all))},wf=(e,n,a)=>!e||!n||e===n||la(e).some(r=>r&&(a?r===n:r.startsWith(n)||n.startsWith(r))),Uf=(e,n,a,r,t)=>t.isOnAll?!1:!a&&t.isOnTouch?!(n||e):(a?r.isOnBlur:t.isOnBlur)?!e:(a?r.isOnChange:t.isOnChange)?e:!0,jf=(e,n)=>!ui($(e,n)).length&&Pe(e,n),qf=(e,n,a)=>{const r=la($(e,a));return Re(r,"root",n[a]),Re(e,a,r),e};function hs(e,n,a="validate"){if(tn(e)||Array.isArray(e)&&e.every(tn)||an(e)&&!e)return{type:a,message:tn(e)?e:"",ref:n}}var Sr=e=>Ge(e)&&!pt(e)?e:{value:e,message:""},Ks=async(e,n,a,r,t,l)=>{const{ref:i,refs:s,required:o,maxLength:d,minLength:u,min:E,max:_,pattern:T,validate:I,name:f,valueAsNumber:g,mount:S}=e._f,c=$(a,f);if(!S||n.has(f))return{};const R=s?s[0]:i,A=K=>{t&&R.reportValidity&&(R.setCustomValidity(an(K)?"":K||""),R.reportValidity())},D={},k=_i(i),L=Oa(i),B=k||L,M=(g||Ni(i))&&be(i.value)&&be(c)||At(i)&&i.value===""||c===""||Array.isArray(c)&&!c.length,G=bf.bind(null,f,r,D),w=(K,O,b,P=hn.maxLength,U=hn.minLength)=>{const j=K?O:b;D[f]={type:K?P:U,message:j,ref:i,...G(K?P:U,j)}};if(l?!Array.isArray(c)||!c.length:o&&(!B&&(M||Ce(c))||an(c)&&!c||L&&!od(s).isValid||k&&!dd(s).isValid)){const{value:K,message:O}=tn(o)?{value:!!o,message:o}:Sr(o);if(K&&(D[f]={type:hn.required,message:O,ref:R,...G(hn.required,O)},!r))return A(O),D}if(!M&&(!Ce(E)||!Ce(_))){let K,O;const b=Sr(_),P=Sr(E);if(!Ce(c)&&!isNaN(c)){const U=i.valueAsNumber||c&&+c;Ce(b.value)||(K=U>b.value),Ce(P.value)||(O=U<P.value)}else{const U=i.valueAsDate||new Date(c),j=Y=>new Date(new Date().toDateString()+" "+Y),V=i.type=="time",F=i.type=="week";tn(b.value)&&c&&(K=V?j(c)>j(b.value):F?c>b.value:U>new Date(b.value)),tn(P.value)&&c&&(O=V?j(c)<j(P.value):F?c<P.value:U<new Date(P.value))}if((K||O)&&(w(!!K,b.message,P.message,hn.max,hn.min),!r))return A(D[f].message),D}if((d||u)&&!M&&(tn(c)||l&&Array.isArray(c))){const K=Sr(d),O=Sr(u),b=!Ce(K.value)&&c.length>+K.value,P=!Ce(O.value)&&c.length<+O.value;if((b||P)&&(w(b,K.message,O.message),!r))return A(D[f].message),D}if(T&&!M&&tn(c)){const{value:K,message:O}=Sr(T);if(pt(K)&&!c.match(K)&&(D[f]={type:hn.pattern,message:O,ref:i,...G(hn.pattern,O)},!r))return A(O),D}if(I){if(In(I)){const K=await I(c,a),O=hs(K,R);if(O&&(D[f]={...O,...G(hn.validate,O.message)},!r))return A(O.message),D}else if(Ge(I)){let K={};for(const O in I){if(!Ze(K)&&!r)break;const b=hs(await I[O](c,a),R,O);b&&(K={...b,...G(O,b.message)},A(b.message),r&&(D[f]=K))}if(!Ze(K)&&(D[f]={ref:R,...K},!r))return D}}return A(!0),D};const Hf={mode:vn.onSubmit,reValidateMode:vn.onChange,shouldFocusError:!0};function xf(e={}){let n={...Hf,...e},a={submitCount:0,isDirty:!1,isReady:!1,isLoading:In(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},r={},t=Ge(n.defaultValues)||Ge(n.values)?Fe(n.defaultValues||n.values)||{}:{},l=n.shouldUnregister?{}:Fe(t),i={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},o,d=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let E={...u};const _={array:Ds(),state:Ds()},T=n.criteriaMode===vn.all,I=p=>y=>{clearTimeout(d),d=setTimeout(p,y)},f=async p=>{if(!n.disabled&&(u.isValid||E.isValid||p)){const y=n.resolver?Ze((await L()).errors):await M(r,!0);y!==a.isValid&&_.state.next({isValid:y})}},g=(p,y)=>{!n.disabled&&(u.isValidating||u.validatingFields||E.isValidating||E.validatingFields)&&((p||Array.from(s.mount)).forEach(h=>{h&&(y?Re(a.validatingFields,h,y):Pe(a.validatingFields,h))}),_.state.next({validatingFields:a.validatingFields,isValidating:!Ze(a.validatingFields)}))},S=(p,y=[],h,C,H=!0,q=!0)=>{if(C&&h&&!n.disabled){if(i.action=!0,q&&Array.isArray($(r,p))){const X=h($(r,p),C.argA,C.argB);H&&Re(r,p,X)}if(q&&Array.isArray($(a.errors,p))){const X=h($(a.errors,p),C.argA,C.argB);H&&Re(a.errors,p,X),jf(a.errors,p)}if((u.touchedFields||E.touchedFields)&&q&&Array.isArray($(a.touchedFields,p))){const X=h($(a.touchedFields,p),C.argA,C.argB);H&&Re(a.touchedFields,p,X)}(u.dirtyFields||E.dirtyFields)&&(a.dirtyFields=Ar(t,l)),_.state.next({name:p,isDirty:w(p,y),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else Re(l,p,y)},c=(p,y)=>{Re(a.errors,p,y),_.state.next({errors:a.errors})},R=p=>{a.errors=p,_.state.next({errors:a.errors,isValid:!1})},A=(p,y,h,C)=>{const H=$(r,p);if(H){const q=$(l,p,be(h)?$(t,p):h);be(q)||C&&C.defaultChecked||y?Re(l,p,y?q:ks(H._f)):b(p,q),i.mount&&f()}},D=(p,y,h,C,H)=>{let q=!1,X=!1;const oe={name:p};if(!n.disabled){if(!h||C){(u.isDirty||E.isDirty)&&(X=a.isDirty,a.isDirty=oe.isDirty=w(),q=X!==oe.isDirty);const _e=Gn($(t,p),y);X=!!$(a.dirtyFields,p),_e?Pe(a.dirtyFields,p):Re(a.dirtyFields,p,!0),oe.dirtyFields=a.dirtyFields,q=q||(u.dirtyFields||E.dirtyFields)&&X!==!_e}if(h){const _e=$(a.touchedFields,p);_e||(Re(a.touchedFields,p,h),oe.touchedFields=a.touchedFields,q=q||(u.touchedFields||E.touchedFields)&&_e!==h)}q&&H&&_.state.next(oe)}return q?oe:{}},k=(p,y,h,C)=>{const H=$(a.errors,p),q=(u.isValid||E.isValid)&&an(y)&&a.isValid!==y;if(n.delayError&&h?(o=I(()=>c(p,h)),o(n.delayError)):(clearTimeout(d),o=null,h?Re(a.errors,p,h):Pe(a.errors,p)),(h?!Gn(H,h):H)||!Ze(C)||q){const X={...C,...q&&an(y)?{isValid:y}:{},errors:a.errors,name:p};a={...a,...X},_.state.next(X)}},L=async p=>{g(p,!0);const y=await n.resolver(l,n.context,Gf(p||s.mount,r,n.criteriaMode,n.shouldUseNativeValidation));return g(p),y},B=async p=>{const{errors:y}=await L(p);if(p)for(const h of p){const C=$(y,h);C?Re(a.errors,h,C):Pe(a.errors,h)}else a.errors=y;return y},M=async(p,y,h={valid:!0})=>{for(const C in p){const H=p[C];if(H){const{_f:q,...X}=H;if(q){const oe=s.array.has(q.name),_e=H._f&&Bf(H._f);_e&&u.validatingFields&&g([q.name],!0);const Qe=await Ks(H,s.disabled,l,T,n.shouldUseNativeValidation&&!y,oe);if(_e&&u.validatingFields&&g([q.name]),Qe[q.name]&&(h.valid=!1,y))break;!y&&($(Qe,q.name)?oe?qf(a.errors,Qe,q.name):Re(a.errors,q.name,Qe[q.name]):Pe(a.errors,q.name))}!Ze(X)&&await M(X,y,h)}}return h.valid},G=()=>{for(const p of s.unMount){const y=$(r,p);y&&(y._f.refs?y._f.refs.every(h=>!ml(h)):!ml(y._f.ref))&&re(p)}s.unMount=new Set},w=(p,y)=>!n.disabled&&(p&&y&&Re(l,p,y),!Gn(Y(),t)),K=(p,y,h)=>td(p,s,{...i.mount?l:be(y)?t:tn(p)?{[p]:y}:y},h,y),O=p=>ui($(i.mount?l:t,p,n.shouldUnregister?$(t,p,[]):[])),b=(p,y,h={})=>{const C=$(r,p);let H=y;if(C){const q=C._f;q&&(!q.disabled&&Re(l,p,ud(y,q)),H=At(q.ref)&&Ce(y)?"":y,id(q.ref)?[...q.ref.options].forEach(X=>X.selected=H.includes(X.value)):q.refs?Oa(q.ref)?q.refs.forEach(X=>{(!X.defaultChecked||!X.disabled)&&(Array.isArray(H)?X.checked=!!H.find(oe=>oe===X.value):X.checked=H===X.value||!!H)}):q.refs.forEach(X=>X.checked=X.value===H):Ni(q.ref)?q.ref.value="":(q.ref.value=H,q.ref.type||_.state.next({name:p,values:Fe(l)})))}(h.shouldDirty||h.shouldTouch)&&D(p,H,h.shouldTouch,h.shouldDirty,!0),h.shouldValidate&&F(p)},P=(p,y,h)=>{for(const C in y){if(!y.hasOwnProperty(C))return;const H=y[C],q=p+"."+C,X=$(r,q);(s.array.has(p)||Ge(H)||X&&!X._f)&&!sr(H)?P(q,H,h):b(q,H,h)}},U=(p,y,h={})=>{const C=$(r,p),H=s.array.has(p),q=Fe(y);Re(l,p,q),H?(_.array.next({name:p,values:Fe(l)}),(u.isDirty||u.dirtyFields||E.isDirty||E.dirtyFields)&&h.shouldDirty&&_.state.next({name:p,dirtyFields:Ar(t,l),isDirty:w(p,q)})):C&&!C._f&&!Ce(q)?P(p,q,h):b(p,q,h),bs(p,s)&&_.state.next({...a,name:p}),_.state.next({name:i.mount?p:void 0,values:Fe(l)})},j=async p=>{i.mount=!0;const y=p.target;let h=y.name,C=!0;const H=$(r,h),q=_e=>{C=Number.isNaN(_e)||sr(_e)&&isNaN(_e.getTime())||Gn(_e,$(l,h,_e))},X=ys(n.mode),oe=ys(n.reValidateMode);if(H){let _e,Qe;const Rr=y.type?ks(H._f):nd(p),Sn=p.type===Dt.BLUR||p.type===Dt.FOCUS_OUT,xt=!Ff(H._f)&&!n.resolver&&!$(a.errors,h)&&!H._f.deps||Uf(Sn,$(a.touchedFields,h),a.isSubmitted,oe,X),$r=bs(h,s,Sn);Re(l,h,Rr),Sn?(!y||!y.readOnly)&&(H._f.onBlur&&H._f.onBlur(p),o&&o(0)):H._f.onChange&&H._f.onChange(p);const Wr=D(h,Rr,Sn),Jt=!Ze(Wr)||$r;if(!Sn&&_.state.next({name:h,type:p.type,values:Fe(l)}),xt)return(u.isValid||E.isValid)&&(n.mode==="onBlur"?Sn&&f():Sn||f()),Jt&&_.state.next({name:h,...$r?{}:Wr});if(!Sn&&$r&&_.state.next({...a}),n.resolver){const{errors:zr}=await L([h]);if(q(Rr),C){const Yt=Ms(a.errors,r,h),le=Ms(zr,r,Yt.name||h);_e=le.error,h=le.name,Qe=Ze(zr)}}else g([h],!0),_e=(await Ks(H,s.disabled,l,T,n.shouldUseNativeValidation))[h],g([h]),q(Rr),C&&(_e?Qe=!1:(u.isValid||E.isValid)&&(Qe=await M(r,!0)));C&&(H._f.deps&&(!Array.isArray(H._f.deps)||H._f.deps.length>0)&&F(H._f.deps),k(h,Qe,_e,Wr))}},V=(p,y)=>{if($(a.errors,y)&&p.focus)return p.focus(),1},F=async(p,y={})=>{let h,C;const H=la(p);if(n.resolver){const q=await B(be(p)?p:H);h=Ze(q),C=p?!H.some(X=>$(q,X)):h}else p?(C=(await Promise.all(H.map(async q=>{const X=$(r,q);return await M(X&&X._f?{[q]:X}:X)}))).every(Boolean),!(!C&&!a.isValid)&&f()):C=h=await M(r);return _.state.next({...!tn(p)||(u.isValid||E.isValid)&&h!==a.isValid?{}:{name:p},...n.resolver||!p?{isValid:h}:{},errors:a.errors}),y.shouldFocus&&!C&&ia(r,V,p?H:s.mount),C},Y=(p,y)=>{let h={...i.mount?l:t};return y&&(h=ld(y.dirtyFields?a.dirtyFields:a.touchedFields,h)),be(p)?h:tn(p)?$(h,p):p.map(C=>$(h,C))},z=(p,y)=>({invalid:!!$((y||a).errors,p),isDirty:!!$((y||a).dirtyFields,p),error:$((y||a).errors,p),isValidating:!!$(a.validatingFields,p),isTouched:!!$((y||a).touchedFields,p)}),W=p=>{p&&la(p).forEach(y=>Pe(a.errors,y)),_.state.next({errors:p?a.errors:{}})},te=(p,y,h)=>{const C=($(r,p,{_f:{}})._f||{}).ref,H=$(a.errors,p)||{},{ref:q,message:X,type:oe,..._e}=H;Re(a.errors,p,{..._e,...y,ref:C}),_.state.next({name:p,errors:a.errors,isValid:!1}),h&&h.shouldFocus&&C&&C.focus&&C.focus()},Be=(p,y)=>In(p)?_.state.subscribe({next:h=>"values"in h&&p(K(void 0,y),h)}):K(p,y,!0),Z=p=>_.state.subscribe({next:y=>{wf(p.name,y.name,p.exact)&&Vf(y,p.formState||u,ar,p.reRenderRoot)&&p.callback({values:{...l},...a,...y,defaultValues:t})}}).unsubscribe,J=p=>(i.mount=!0,E={...E,...p.formState},Z({...p,formState:E})),re=(p,y={})=>{for(const h of p?la(p):s.mount)s.mount.delete(h),s.array.delete(h),y.keepValue||(Pe(r,h),Pe(l,h)),!y.keepError&&Pe(a.errors,h),!y.keepDirty&&Pe(a.dirtyFields,h),!y.keepTouched&&Pe(a.touchedFields,h),!y.keepIsValidating&&Pe(a.validatingFields,h),!n.shouldUnregister&&!y.keepDefaultValue&&Pe(t,h);_.state.next({values:Fe(l)}),_.state.next({...a,...y.keepDirty?{isDirty:w()}:{}}),!y.keepIsValid&&f()},ae=({disabled:p,name:y})=>{(an(p)&&i.mount||p||s.disabled.has(y))&&(p?s.disabled.add(y):s.disabled.delete(y))},de=(p,y={})=>{let h=$(r,p);const C=an(y.disabled)||an(n.disabled);return Re(r,p,{...h||{},_f:{...h&&h._f?h._f:{ref:{name:p}},name:p,mount:!0,...y}}),s.mount.add(p),h?ae({disabled:an(y.disabled)?y.disabled:n.disabled,name:p}):A(p,!0,y.value),{...C?{disabled:y.disabled||n.disabled}:{},...n.progressive?{required:!!y.required,min:Qr(y.min),max:Qr(y.max),minLength:Qr(y.minLength),maxLength:Qr(y.maxLength),pattern:Qr(y.pattern)}:{},name:p,onChange:j,onBlur:j,ref:H=>{if(H){de(p,y),h=$(r,p);const q=be(H.value)&&H.querySelectorAll&&H.querySelectorAll("input,select,textarea")[0]||H,X=Mf(q),oe=h._f.refs||[];if(X?oe.find(_e=>_e===q):q===h._f.ref)return;Re(r,p,{_f:{...h._f,...X?{refs:[...oe.filter(ml),q,...Array.isArray($(t,p))?[{}]:[]],ref:{type:q.type,name:p}}:{ref:q}}}),A(p,!1,void 0,q)}else h=$(r,p,{}),h._f&&(h._f.mount=!1),(n.shouldUnregister||y.shouldUnregister)&&!(rd(s.array,p)&&i.action)&&s.unMount.add(p)}}},we=()=>n.shouldFocusError&&ia(r,V,s.mount),Ue=p=>{an(p)&&(_.state.next({disabled:p}),ia(r,(y,h)=>{const C=$(r,h);C&&(y.disabled=C._f.disabled||p,Array.isArray(C._f.refs)&&C._f.refs.forEach(H=>{H.disabled=C._f.disabled||p}))},0,!1))},je=(p,y)=>async h=>{let C;h&&(h.preventDefault&&h.preventDefault(),h.persist&&h.persist());let H=Fe(l);if(_.state.next({isSubmitting:!0}),n.resolver){const{errors:q,values:X}=await L();a.errors=q,H=Fe(X)}else await M(r);if(s.disabled.size)for(const q of s.disabled)Pe(H,q);if(Pe(a.errors,"root"),Ze(a.errors)){_.state.next({errors:{}});try{await p(H,h)}catch(q){C=q}}else y&&await y({...a.errors},h),we(),setTimeout(we);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ze(a.errors)&&!C,submitCount:a.submitCount+1,errors:a.errors}),C)throw C},Mn=(p,y={})=>{$(r,p)&&(be(y.defaultValue)?U(p,Fe($(t,p))):(U(p,y.defaultValue),Re(t,p,Fe(y.defaultValue))),y.keepTouched||Pe(a.touchedFields,p),y.keepDirty||(Pe(a.dirtyFields,p),a.isDirty=y.defaultValue?w(p,Fe($(t,p))):w()),y.keepError||(Pe(a.errors,p),u.isValid&&f()),_.state.next({...a}))},sn=(p,y={})=>{const h=p?Fe(p):t,C=Fe(h),H=Ze(p),q=H?t:C;if(y.keepDefaultValues||(t=h),!y.keepValues){if(y.keepDirtyValues){const X=new Set([...s.mount,...Object.keys(Ar(t,l))]);for(const oe of Array.from(X))$(a.dirtyFields,oe)?Re(q,oe,$(l,oe)):U(oe,$(q,oe))}else{if(oi&&be(p))for(const X of s.mount){const oe=$(r,X);if(oe&&oe._f){const _e=Array.isArray(oe._f.refs)?oe._f.refs[0]:oe._f.ref;if(At(_e)){const Qe=_e.closest("form");if(Qe){Qe.reset();break}}}}if(y.keepFieldsRef)for(const X of s.mount)U(X,$(q,X));else r={}}l=n.shouldUnregister?y.keepDefaultValues?Fe(t):{}:Fe(q),_.array.next({values:{...q}}),_.state.next({values:{...q}})}s={mount:y.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!u.isValid||!!y.keepIsValid||!!y.keepDirtyValues,i.watch=!!n.shouldUnregister,_.state.next({submitCount:y.keepSubmitCount?a.submitCount:0,isDirty:H?!1:y.keepDirty?a.isDirty:!!(y.keepDefaultValues&&!Gn(p,t)),isSubmitted:y.keepIsSubmitted?a.isSubmitted:!1,dirtyFields:H?{}:y.keepDirtyValues?y.keepDefaultValues&&l?Ar(t,l):a.dirtyFields:y.keepDefaultValues&&p?Ar(t,p):y.keepDirty?a.dirtyFields:{},touchedFields:y.keepTouched?a.touchedFields:{},errors:y.keepErrors?a.errors:{},isSubmitSuccessful:y.keepIsSubmitSuccessful?a.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:t})},_n=(p,y)=>sn(In(p)?p(l):p,y),rr=(p,y={})=>{const h=$(r,p),C=h&&h._f;if(C){const H=C.refs?C.refs[0]:C.ref;H.focus&&(H.focus(),y.shouldSelect&&In(H.select)&&H.select())}},ar=p=>{a={...a,...p}},Yn={control:{register:de,unregister:re,getFieldState:z,handleSubmit:je,setError:te,_subscribe:Z,_runSchema:L,_focusError:we,_getWatch:K,_getDirty:w,_setValid:f,_setFieldArray:S,_setDisabledField:ae,_setErrors:R,_getFieldArray:O,_reset:sn,_resetDefaultValues:()=>In(n.defaultValues)&&n.defaultValues().then(p=>{_n(p,n.resetOptions),_.state.next({isLoading:!1})}),_removeUnmounted:G,_disableForm:Ue,_subjects:_,_proxyFormState:u,get _fields(){return r},get _formValues(){return l},get _state(){return i},set _state(p){i=p},get _defaultValues(){return t},get _names(){return s},set _names(p){s=p},get _formState(){return a},get _options(){return n},set _options(p){n={...n,...p}}},subscribe:J,trigger:F,register:de,handleSubmit:je,watch:Be,setValue:U,getValues:Y,reset:_n,resetField:Mn,clearErrors:W,unregister:re,setError:te,setFocus:rr,getFieldState:z};return{...Yn,formControl:Yn}}function jt(e={}){const n=m.useRef(void 0),a=m.useRef(void 0),[r,t]=m.useState({isDirty:!1,isValidating:!1,isLoading:In(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:In(e.defaultValues)?void 0:e.defaultValues});if(!n.current)if(e.formControl)n.current={...e.formControl,formState:r},e.defaultValues&&!In(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...s}=xf(e);n.current={...s,formState:r}}const l=n.current.control;return l._options=e,mi(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>t({...l._formState}),reRenderRoot:!0});return t(s=>({...s,isReady:!0})),l._formState.isReady=!0,i},[l]),m.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),m.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),m.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),m.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),m.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==r.isDirty&&l._subjects.state.next({isDirty:i})}},[l,r.isDirty]),m.useEffect(()=>{e.values&&!Gn(e.values,a.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),a.current=e.values,t(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),m.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),n.current.formState=ad(r,l),n.current}function Jf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ps={exports:{}},Zr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gs;function Yf(){if(Gs)return Zr;Gs=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(r,t,l){var i=null;if(l!==void 0&&(i=""+l),t.key!==void 0&&(i=""+t.key),"key"in t){l={};for(var s in t)s!=="key"&&(l[s]=t[s])}else l=t;return t=l.ref,{$$typeof:e,type:r,key:i,ref:t!==void 0?t:null,props:l}}return Zr.Fragment=n,Zr.jsx=a,Zr.jsxs=a,Zr}var Bs;function Cf(){return Bs||(Bs=1,Ps.exports=Yf()),Ps.exports}var Te=Cf();const $f=({children:e})=>{const n=v.Children.toArray(e);return n.length===0?null:Te.jsx(ca,{variant:"warning",size:"small",children:Te.jsx(ye,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:n.map(a=>Te.jsx(ne,{size:"small",children:a},Wf(a)))})})},Wf=e=>{if(v.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},ya={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"},Fs=Hn(ya),zf=({onClick:e=()=>{},erOverstyrt:n=!1})=>{const[a,r]=v.useState(n),t=()=>{a||(r(!0),e(!0))};return v.useEffect(()=>{r(n)},[n]),Te.jsx(ke,{variant:a?"tertiary-neutral":"tertiary","data-testid":"overstyringsknapp",type:"button",size:"small",onClick:t,"aria-disabled":n,disabled:n,icon:a?Te.jsx(DE,{"aria-hidden":!0,color:"var(--ax-neutral-400)",height:25,width:25,title:Fs.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):Te.jsx(cE,{"aria-hidden":!0,color:"var(--ax-accent-500)",height:25,width:25,title:Fs.formatMessage({id:"OverstyringKnapp.Overstyring"})})})};var Vs={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ws;function Xf(){return ws||(ws=1,(function(e){(function(){var n={}.hasOwnProperty;function a(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=t(l,r.call(this,s)))}return l}function r(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return a.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)n.call(l,s)&&l[s]&&(i=t(i,this&&this[s]||s));return i}function t(l,i){return i?l?l+" "+i:l+i:l}e.exports?(a.default=a,e.exports=a):window.classNames=a})()})(Vs)),Vs.exports}var Qf=Xf();const Ti=Jf(Qf),Zf="_borderbox_1a0x6_1",ec="_error_1a0x6_5",nc="_warning_1a0x6_8",rc={borderbox:Zf,error:ec,warning:nc};Ti.bind(rc);const ac="_aksjonspunkt_11wjs_1",tc="_erAksjonspunktApent_11wjs_4",lc="_erIkkeGodkjentAvBeslutter_11wjs_8",ic={aksjonspunkt:ac,erAksjonspunktApent:tc,erIkkeGodkjentAvBeslutter:lc};Ti.bind(ic);const Ot=({dateString:e,year:n,month:a,day:r})=>Te.jsx(Te.Fragment,{children:oo(e,{year:n,month:a,day:r})}),Us=Hn(ya),sc=({text:e,okButtonText:n,showModal:a,cancel:r,submit:t})=>Te.jsxs(Rn,{width:"small",open:a,"aria-label":e,onClose:r,children:[Te.jsx(Rn.Body,{children:Te.jsx(xr,{size:"small",level:"2",children:e})}),Te.jsxs(Rn.Footer,{children:[Te.jsx(ke,{variant:"primary",size:"small",onClick:t,autoFocus:!0,type:"button",children:n||Us.formatMessage({id:"OkAvbrytModal.Ok"})}),Te.jsx(ke,{variant:"secondary",size:"small",onClick:r,type:"button",children:Us.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),sa=({dateStringFom:e,dateStringTom:n,showTodayString:a=!1})=>Te.jsx(Te.Fragment,{children:Gd(e,n,{showTodayString:a})});Hn(ya);const oc="_divider_1jpov_1",uc="_dividerParagraf_1jpov_8",dc="_leftPanel_1jpov_11",Ec="_rightPanel_1jpov_14",kl={divider:oc,dividerParagraf:uc,leftPanel:dc,rightPanel:Ec},mc=Ti.bind(kl),js=({spaceUnder:e=!1,spaceAbove:n=!1,leftPanel:a=!1,rightPanel:r=!1,dividerParagraf:t=!1,className:l})=>Te.jsxs(Te.Fragment,{children:[n&&Te.jsx("div",{style:{marginBottom:"32px"}}),Te.jsx("div",{className:mc(l,{leftPanel:a,rightPanel:r}),children:Te.jsx("div",{className:t?kl.dividerParagraf:kl.divider})}),e&&Te.jsx("div",{style:{marginBottom:"32px"}})]}),Ed=()=>Te.jsx("span",{"data-testid":"editedIcon",children:Te.jsx(OE,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});Hn(ya);const Nc=Hn(ya),_c=({tekst:e,children:n})=>{const[a,r]=v.useState(!1);if(!e)return n;const t=async()=>{await navigator.clipboard.writeText(e),r(!0),setTimeout(()=>{r(!1)},1e3)};return Te.jsx(Qu,{content:Nc.formatMessage({id:a?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:Te.jsx("span",{"aria-hidden":"true",onClick:t,children:n??e})})},qs={default:"_default_af3od_1",rød:"_rød_af3od_5"},yl=({beløp:e,kr:n=!1,rød:a=!1})=>{const r=e?.toString().replace(/\s/g,"");return Te.jsx(_c,{tekst:r,children:Te.jsxs("span",{className:a?qs.rød:qs.default,children:[r?Bd(r):"-",r&&n&&" kr"]})})};var Nl={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Hs;function Tc(){return Hs||(Hs=1,(function(e){(function(){var n={}.hasOwnProperty;function a(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=t(l,r(s)))}return l}function r(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return a.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)n.call(l,s)&&l[s]&&(i=t(i,s));return i}function t(l,i){return i?l?l+" "+i:l+i:l}e.exports?(a.default=a,e.exports=a):window.classNames=a})()})(Nl)),Nl.exports}var vc=Tc();const Ic=Pl(vc);function Rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xs={exports:{}},ea={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Js;function gc(){if(Js)return ea;Js=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(r,t,l){var i=null;if(l!==void 0&&(i=""+l),t.key!==void 0&&(i=""+t.key),"key"in t){l={};for(var s in t)s!=="key"&&(l[s]=t[s])}else l=t;return t=l.ref,{$$typeof:e,type:r,key:i,ref:t!==void 0?t:null,props:l}}return ea.Fragment=n,ea.jsx=a,ea.jsxs=a,ea}var Ys;function fc(){return Ys||(Ys=1,xs.exports=gc()),xs.exports}var pe=fc();const La=e=>e.reduce((n,a,r)=>({...n,[r]:t=>a(t)||!0}),{}),ba=(e,n)=>n.split(".").reduce((a,r)=>a!==void 0?a[r]:a,e)?.message;var Ll={exports:{}},cc=Ll.exports,Cs;function Sc(){return Cs||(Cs=1,(function(e,n){(function(a,r){e.exports=r()})(cc,function(){var a={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,t=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,o={},d=function(g){return(g=+g)+(g>68?1900:2e3)},u=function(g){return function(S){this[g]=+S}},E=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=(function(S){if(!S||S==="Z")return 0;var c=S.match(/([+-]|\d\d)/g),R=60*c[1]+(+c[2]||0);return R===0?0:c[0]==="+"?-R:R})(g)}],_=function(g){var S=o[g];return S&&(S.indexOf?S:S.s.concat(S.f))},T=function(g,S){var c,R=o.meridiem;if(R){for(var A=1;A<=24;A+=1)if(g.indexOf(R(A,0,S))>-1){c=A>12;break}}else c=g===(S?"pm":"PM");return c},I={A:[s,function(g){this.afternoon=T(g,!1)}],a:[s,function(g){this.afternoon=T(g,!0)}],Q:[t,function(g){this.month=3*(g-1)+1}],S:[t,function(g){this.milliseconds=100*+g}],SS:[l,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[l,u("day")],Do:[s,function(g){var S=o.ordinal,c=g.match(/\d+/);if(this.day=c[0],S)for(var R=1;R<=31;R+=1)S(R).replace(/\[|\]/g,"")===g&&(this.day=R)}],w:[i,u("week")],ww:[l,u("week")],M:[i,u("month")],MM:[l,u("month")],MMM:[s,function(g){var S=_("months"),c=(_("monthsShort")||S.map(function(R){return R.slice(0,3)})).indexOf(g)+1;if(c<1)throw new Error;this.month=c%12||c}],MMMM:[s,function(g){var S=_("months").indexOf(g)+1;if(S<1)throw new Error;this.month=S%12||S}],Y:[/[+-]?\d+/,u("year")],YY:[l,function(g){this.year=d(g)}],YYYY:[/\d{4}/,u("year")],Z:E,ZZ:E};function f(g){var S,c;S=g,c=o&&o.formats;for(var R=(g=S.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(G,w,K){var O=K&&K.toUpperCase();return w||c[K]||a[K]||c[O].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(b,P,U){return P||U.slice(1)})})).match(r),A=R.length,D=0;D<A;D+=1){var k=R[D],L=I[k],B=L&&L[0],M=L&&L[1];R[D]=M?{regex:B,parser:M}:k.replace(/^\[|\]$/g,"")}return function(G){for(var w={},K=0,O=0;K<A;K+=1){var b=R[K];if(typeof b=="string")O+=b.length;else{var P=b.regex,U=b.parser,j=G.slice(O),V=P.exec(j)[0];U.call(w,V),G=G.replace(V,"")}}return(function(F){var Y=F.afternoon;if(Y!==void 0){var z=F.hours;Y?z<12&&(F.hours+=12):z===12&&(F.hours=0),delete F.afternoon}})(w),w}}return function(g,S,c){c.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(d=g.parseTwoDigitYear);var R=S.prototype,A=R.parse;R.parse=function(D){var k=D.date,L=D.utc,B=D.args;this.$u=L;var M=B[1];if(typeof M=="string"){var G=B[2]===!0,w=B[3]===!0,K=G||w,O=B[2];w&&(O=B[2]),o=this.$locale(),!G&&O&&(o=c.Ls[O]),this.$d=(function(j,V,F,Y){try{if(["x","X"].indexOf(V)>-1)return new Date((V==="X"?1e3:1)*j);var z=f(V)(j),W=z.year,te=z.month,Be=z.day,Z=z.hours,J=z.minutes,re=z.seconds,ae=z.milliseconds,de=z.zone,we=z.week,Ue=new Date,je=Be||(W||te?1:Ue.getDate()),Mn=W||Ue.getFullYear(),sn=0;W&&!te||(sn=te>0?te-1:Ue.getMonth());var _n,rr=Z||0,ar=J||0,Ir=re||0,Yn=ae||0;return de?new Date(Date.UTC(Mn,sn,je,rr,ar,Ir,Yn+60*de.offset*1e3)):F?new Date(Date.UTC(Mn,sn,je,rr,ar,Ir,Yn)):(_n=new Date(Mn,sn,je,rr,ar,Ir,Yn),we&&(_n=Y(_n).week(we).toDate()),_n)}catch{return new Date("")}})(k,M,L,c),this.init(),O&&O!==!0&&(this.$L=this.locale(O).$L),K&&k!=this.format(M)&&(this.$d=new Date("")),o={}}else if(M instanceof Array)for(var b=M.length,P=1;P<=b;P+=1){B[1]=M[P-1];var U=c.apply(this,B);if(U.isValid()){this.$d=U.$d,this.$L=U.$L,this.init();break}P===b&&(this.$d=new Date(""))}else A.call(this,D)}}})})(Ll)),Ll.exports}var Dc=Sc();const Ac=Rc(Dc),pc="_textarea_14c7r_1",Oc="_readOnlyField_14c7r_7",$s={textarea:pc,readOnlyField:Oc},kc=e=>e!=null&&e!=="",qt=({label:e,value:n,isEdited:a=!1,type:r,hideLabel:t,size:l})=>kc(n)?pe.jsxs(ye,{gap:"space-4",children:[e&&!t&&pe.jsx(ge,{size:l,children:e}),pe.jsxs(fe,{gap:"space-8",align:"center",wrap:!1,children:[pe.jsx(Ul,{className:r==="textarea"?$s.textarea:$s.readOnlyField,size:l,children:n}),a&&pe.jsx(Ed,{})]})]}):null;$e.extend(Ac);const Na=({label:e,description:n,validate:a=[],hideLabel:r=!1,isReadOnly:t=!1,size:l="small",onChange:i,disabledDays:s,isEdited:o,defaultMonth:d,fromDate:u,toDate:E,..._})=>{const{name:T,control:I,disabled:f}=_,{formState:{errors:g}}=nr(),{field:S}=ka({name:T,control:I,rules:{validate:v.useMemo(()=>La(a),[a])}}),c=S.value?$e(S.value,Kn,!0).format(ha):"",[R,A]=v.useState(c),{datepickerProps:D,inputProps:k}=hg({onDateChange:M=>{if(M!==void 0){const G=$e(M).format(Kn);i&&i(G),S.onChange(G),A($e(G,Kn,!0).format(ha))}},defaultSelected:S.value?$e(S.value,Kn,!0).toDate():void 0,defaultMonth:d||(!S.value&&E?E:void 0),disabled:s}),L=v.useCallback(M=>{const G=$e(M.target.value,ha,!0).format(Kn),w=G!=="Invalid Date";A(M.target.value),i&&i(w?G:M.target.value),S.onChange(w?G:M.target.value)},[A,i,S]);if(t)return pe.jsx(qt,{label:e,value:S.value?$e(S.value,Kn,!0).format(ha):void 0,isEdited:o,hideLabel:r,size:l});const B={...D,fromDate:u,toDate:E,dropdownCaption:u&&E?!0:void 0};return pe.jsx(St,{...B,children:pe.jsx(St.Input,{...k,hideLabel:r,onChange:L,value:R,size:l,label:e,description:n,disabled:f,error:ba(g,T)})})},bl=({name:e,control:n,label:a,validate:r=[],readOnly:t=!1,type:l,shouldValidateOnBlur:i=!1,onBlur:s,onChange:o,description:d,autoFocus:u,parse:E=k=>k,format:_=k=>k,normalizeOnBlur:T,isEdited:I,maxLength:f,autoComplete:g=!1,disabled:S,className:c,hideLabel:R,size:A="small",...D})=>{const{formState:{errors:k},trigger:L}=nr(),{field:B}=ka({name:e,control:n,rules:{validate:v.useMemo(()=>La(r),[r])}});return t?pe.jsx(qt,{label:a,value:B.value,isEdited:I,hideLabel:R,size:A}):pe.jsx(Af,{size:A,hideLabel:R,description:d,label:a,error:ba(k,e),...B,value:B.value?_(B.value):"",autoFocus:u,autoComplete:g?void 0:"off",maxLength:f,disabled:S,type:l,className:c,onChange:M=>{const G=M.currentTarget.value?E(M.currentTarget.value):null;return o&&o(G),B.onChange(G)},onBlur:async M=>{if(B.onBlur(),i){const G=await L();s&&G&&s(M?.target?.value)}else s&&s(M?.target?.value);T&&B.onChange(M?.target?.value?T(E(M?.target?.value)):null)},...D})},yc="_noReadOnlyIcon_11vhl_2",Lc={noReadOnlyIcon:yc},md=({label:e,description:n,validate:a=[],onChange:r,children:t,className:l,isReadOnly:i=!1,size:s="small",isEdited:o=!1,hideLegend:d=!1,...u})=>{const{name:E,control:_}=u,{formState:{errors:T}}=nr(),{field:I}=ka({name:E,control:_,rules:{validate:La(a)}});return pe.jsx(Tf,{name:E,value:I.value!==void 0?I.value:null,legend:pe.jsxs(fe,{justify:"center",gap:"space-8",children:[e,i&&o&&pe.jsx(Ed,{})]}),hideLegend:d,"aria-readonly":i,readOnly:i,description:n,size:s,error:ba(T,E),onChange:f=>{r&&r(f),I.onChange(f)},className:Ic(l,Lc.noReadOnlyIcon),children:t})},bc=({label:e,selectValues:n,validate:a=[],readOnly:r=!1,description:t,hideValueOnDisable:l=!1,onChange:i,className:s,hideLabel:o,isEdited:d,size:u="small",...E})=>{const{name:_,control:T,disabled:I}=E,{formState:{errors:f}}=nr(),{field:g}=ka({name:_,control:T,rules:{validate:v.useMemo(()=>La(a),[a])}});if(r){const R=n.map(D=>D.props).find(D=>D.value===g.value),A=R?R.children:void 0;return pe.jsx(qt,{value:A,label:e,hideLabel:o,isEdited:d,size:u})}const S=g.value||"",c=!n.map(R=>R.props.value).includes(S)&&S!=="";return c&&console.warn(`No corresponding option found for value '${S}'`),pe.jsxs(Al,{size:u,className:s,error:ba(f,_),label:e,description:t,value:l&&I||c?"":g.value,disabled:I,onChange:R=>{i&&i(R),g.onChange(R)},hideLabel:o,children:[pe.jsx("option",{style:{display:"none"}}),",",n]})},Mc="_textAreaFieldWithBadges_bdz0b_1",hc="_etikettWrapper_bdz0b_4",Ws={textAreaFieldWithBadges:Mc,etikettWrapper:hc},vi=({name:e,control:n,label:a,readOnly:r,maxLength:t,badges:l,validate:i=[],parse:s=T=>T,className:o,description:d,isEdited:u,size:E="small",..._})=>{const{formState:{errors:T}}=nr(),{field:I}=ka({name:e,control:n,rules:{validate:v.useMemo(()=>La(i),[i])}});return r?pe.jsx(qt,{size:E,label:a,value:I.value,type:"textarea",isEdited:u,hideLabel:_.hideLabel}):pe.jsxs("div",{className:l?Ws.textAreaFieldWithBadges:null,children:[l&&pe.jsx("div",{className:Ws.etikettWrapper,children:l.map(({type:f,titleText:g})=>pe.jsx(of,{variant:f,size:"small",children:g},g))}),pe.jsx(Sf,{size:E,label:a,description:d,className:o,autoComplete:"off",...I,onChange:f=>I.onChange(f.currentTarget.value!==""?s(f.currentTarget.value):null),value:I.value?I.value:"",error:ba(T,e),maxLength:t,..._})]})},Ht=({formMethods:e,onSubmit:n,children:a,className:r,setDataOnUnmount:t})=>{const{handleSubmit:l,getValues:i}=e;return v.useEffect(()=>()=>{t&&t(i())},[]),pe.jsx(kf,{...e,children:pe.jsx("form",{className:r,onSubmit:n?l(s=>n(s)):void 0,children:a})})},Nd=({submitCallback:e,cancelEvent:n,showModal:a,ventearsaker:r,erTilbakekreving:t,frist:l,ventearsak:i,visBrevErBestilt:s=!1,hasManualPaVent:o,defaultVenteårsak:d=null})=>{const u=er(),E=jt({defaultValues:Pc(o,l,i??d)}),_=E.watch("frist"),T=E.watch("ventearsak"),I=wc(i,T),f=Uc(l,_),g=!(l===_&&!I),S=Vc(t,l,_,T);return N.jsx(Ht,{formMethods:E,onSubmit:e,children:N.jsxs(Rn,{width:"small",open:a,onClose:n,"aria-label":u.formatMessage({id:i?"SettPaVentModal.ErSettPaVent":"SettPaVentModal.SettesPaVent"}),children:[N.jsx(Rn.Header,{children:N.jsx(xr,{size:"small",level:"2",children:N.jsx(x,{id:i?"SettPaVentModal.ErSettPaVent":"SettPaVentModal.SettesPaVent"})})}),N.jsx(Rn.Body,{children:N.jsxs(ye,{gap:"space-16",children:[(o||_)&&N.jsx(Na,{name:"frist",control:E.control,label:N.jsx(x,{id:"SettPaVentModal.Frist"}),validate:[dn,da,Fd]}),N.jsx(bc,{name:"ventearsak",control:E.control,label:N.jsx(x,{id:"SettPaVentModal.Arsak"}),validate:[dn],selectValues:r.filter(c=>!o||(t?Fc(c,T):Gc.has(c.kode))).sort((c,R)=>c.navn.localeCompare(R.navn)).map(c=>N.jsx("option",{value:c.kode,children:c.navn},c.kode)),readOnly:!o}),s&&N.jsx(ne,{size:"small",children:N.jsx(x,{id:"SettPaVentModal.BrevBlirBestilt"})}),o&&N.jsx(ne,{size:"small",children:N.jsx(x,{id:"SettPaVentModal.EndreFrist"})}),!o&&S&&N.jsxs(N.Fragment,{children:[N.jsx(ne,{size:"small",children:N.jsx(x,{id:"SettPaVentModal.UtløptFrist"})}),N.jsx(ne,{size:"small",children:N.jsx(x,{id:"SettPaVentModal.HenleggeSaken"})})]})]})}),N.jsxs(Rn.Footer,{children:[N.jsx(ke,{size:"small",variant:"primary",style:{paddingInline:"36px"},onClick:g?void 0:n,disabled:!I&&!f,children:N.jsx(x,{id:"SettPaVentModal.Ok"})}),(!o||g||!s)&&N.jsx(ke,{size:"small",variant:"secondary",onClick:n,type:"button",children:N.jsx(x,{id:I||f?"SettPaVentModal.Avbryt":"SettPaVentModal.Lukk"})})]})]})})},Kc=()=>{const e=$e().toDate();return e.setDate(e.getDate()+28),$e(e).format(Kn)},Pc=(e,n,a)=>({ventearsak:a??void 0,frist:n||e===!1?n??void 0:Kc()}),Gc=new Set([Ye.AVV_DOK,Ye.AVV_FODSEL,Ye.VENT_PÅ_BRUKERTILBAKEMELDING,Ye.UTV_FRIST,Ye.FOR_TIDLIG_SOKNAD,Ye.VENT_OPDT_INNTEKTSMELDING,Ye.VENT_UTLAND_TRYGD,Ye.UTVIDET_TILSVAR_FRIST,Ye.ENDRE_TILKJENT_YTELSE,Ye.VENT_PÅ_MULIG_MOTREGNING]),Bc=new Set([Ye.VENT_PÅ_BRUKERTILBAKEMELDING,Ye.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG]),Fc=(e,n)=>Bc.has(e.kode)?e.kode===n:!0,Vc=(e,n,a,r)=>{const t=e&&(!!a&&yi(a)===null||!!n&&yi(n)===null),l=r===Ye.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG;return e&&t&&l},wc=(e,n)=>!(e===n||!n&&!e),Uc=(e,n)=>!(e===n||!n&&!e);Nd.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModal",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasManualPaVent:{required:!0,tsType:{name:"boolean"},description:""},frist:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},ventearsak:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},defaultVenteårsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const jc={"SettPaVentModal.ModalDescription":"Behandlingen settes på vent med frist","SettPaVentModal.ModalDescriptionErPaVent":"Behandlingen er satt på vent","SettPaVentModal.PaVent":"På vent","SettPaVentModal.SettesPaVent":"Behandlingen settes på vent","SettPaVentModal.ErSettPaVent":"Behandlingen er satt på vent","SettPaVentModal.Frist":"Frist","SettPaVentModal.Ok":"OK","SettPaVentModal.Avbryt":"Avbryt","SettPaVentModal.Lukk":"Lukk","SettPaVentModal.BrevBlirBestilt":"Brevet blir bestilt","SettPaVentModal.Arsak":"Årsak","SettPaVentModal.EndreFrist":"Du kan endre frist eller årsak før du fortsetter","SettPaVentModal.UtløptFrist":"OBS! Fristen på denne behandlingen er utløpt!","SettPaVentModal.HenleggeSaken":`Kontroller hvorfor Økonomi ikke har dannet et kravgrunnlag.
 Dersom det feilutbetalte beløpet er bortfalt skal saken henlegges.
For mer informasjon, se rutine under tilbakekreving.`},qc=Hn(jc),_d=({frist:e=null,ventearsak:n=null,hasManualPaVent:a=!1,...r})=>N.jsx(Gl,{value:qc,children:N.jsx(Nd,{frist:e,ventearsak:n,hasManualPaVent:a,...r})});_d.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModalIndex",props:{cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},frist:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},ventearsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:""},hasManualPaVent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},defaultVenteårsak:{required:!1,tsType:{name:"string"},description:""}}};const Ii=v.createContext({isDirty:!1,setDirty:()=>{}}),Td=({children:e})=>{const[n,a]=v.useState(!1),r=v.useMemo(()=>({isDirty:n,setDirty:a}),[n,a]);return N.jsx(Ii.Provider,{value:r,children:e})},Ri=e=>{const n=v.useContext(Ii);v.useEffect(()=>{n.setDirty(e)},[e])},Hc=()=>v.useContext(Ii).isDirty;Td.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const zs=(e,n)=>({arbeidsgiverIdent:e,arbeidsgiverNavn:n.navn,...n.erPrivatPerson?{erPrivatPerson:!0,arbeidsgiverFødselsdato:n.fødselsdato}:{erPrivatPerson:!1}}),Va=e=>n=>n.arbeidsgiverIdent===e.arbeidsgiverIdent,xc=(e,n)=>{const{fom:a,tom:r,saksbehandlersVurdering:t,stillingsprosent:l,begrunnelse:i}=e;if(e.saksbehandlersVurdering)return e.saksbehandlersVurdering==="MANUELT_OPPRETTET_AV_SAKSBEHANDLER"||e.saksbehandlersVurdering==="OPPRETT_BASERT_PÅ_INNTEKTSMELDING"?{arbeidsgiverNavn:n,fom:a,tom:r,stillingsprosent:l,saksbehandlersVurdering:t??void 0,begrunnelse:i??void 0}:{saksbehandlersVurdering:t??void 0,begrunnelse:i??void 0}},Jc=({saksbehandlersVurdering:e,begrunnelse:n})=>e?{saksbehandlersVurdering:e,begrunnelse:n??void 0}:void 0,Yc=(e,n)=>e.filter(a=>a.arbeidsgiverIdent===n),Cc=(e,n)=>n.map(a=>{const r=e.find(t=>$c(a,t));return{arbeidsforhold:a,inntektsmelding:r}}),$c=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),Wc=e=>e.årsak?-1:1,zc=(e,n)=>{const a=e.årsak,r=n.årsak;return a&&!r?-1:r&&!a?1:e.arbeidsgiverNavn.localeCompare(n.arbeidsgiverNavn)},Xc=(e,n)=>{const{arbeidsforhold:a,inntektsmeldinger:r,inntekter:t}=e,l=[...a.sort(Wc)].reduce((s,o)=>{if(s.find(Va(o)))return s;const u=a.filter(Va(o)),E=zs(o.arbeidsgiverIdent,n[o.arbeidsgiverIdent]),_=Yc(r,o.arbeidsgiverIdent),T=t.find(Va(o))?.inntekter??[],I={...E,årsak:o.årsak??_[0]?.årsak??void 0,avklaring:xc(o,E.arbeidsgiverNavn),arbeidsforholdForRad:u,inntektsmeldingerForRad:_,inntektsposter:T};return s.concat(I)},[]),i=r.filter(s=>!a.some(o=>s.arbeidsgiverIdent===o.arbeidsgiverIdent)).map(s=>{const o=zs(s.arbeidsgiverIdent,n[s.arbeidsgiverIdent]),d=t.find(Va(s))?.inntekter??[];return{...o,årsak:s.årsak??void 0,avklaring:Jc(s),arbeidsforholdForRad:[],inntektsmeldingerForRad:[s],inntektsposter:d}});return l.concat(i).sort(zc)},Xs=e=>{const n=e.findIndex(a=>a.årsak&&!a.avklaring);return n===-1?[]:[n]};var _l={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Qs;function Qc(){return Qs||(Qs=1,(function(e){(function(){var n={}.hasOwnProperty;function a(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=t(l,r.call(this,s)))}return l}function r(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return a.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)n.call(l,s)&&l[s]&&(i=t(i,this&&this[s]||s));return i}function t(l,i){return i?l?l+" "+i:l+i:l}e.exports?(a.default=a,e.exports=a):window.classNames=a})()})(_l)),_l.exports}var Zc=Qc();const eS=Pl(Zc),vd=({saksnummer:e,journalpostId:n,dokumentId:a,dokumentTittel:r,children:t})=>{const l=`${n}-${a}`,i=xd(e,n,a);return N.jsx(si,{href:i,target:l,rel:"noopener noreferrer",onClick:nS(r),children:t??r})},nS=e=>n=>{e&&(n.preventDefault(),Jd(n.currentTarget.href,n.currentTarget.target,e))};vd.__docgenInfo={description:"",methods:[],displayName:"DokumentLink",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},journalpostId:{required:!0,tsType:{name:"string"},description:""},dokumentId:{required:!0,tsType:{name:"string"},description:""},dokumentTittel:{required:!1,tsType:{name:"string"},description:""}}};const br=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,Zn=globalThis,oa="10.15.0";function gi(){return fi(Zn),Zn}function fi(e){const n=e.__SENTRY__=e.__SENTRY__||{};return n.version=n.version||oa,n[oa]=n[oa]||{}}function ci(e,n,a=Zn){const r=a.__SENTRY__=a.__SENTRY__||{},t=r[oa]=r[oa]||{};return t[e]||(t[e]=n())}const rS="Sentry Logger ",Zs={};function aS(e){if(!("console"in Zn))return e();const n=Zn.console,a={},r=Object.keys(Zs);r.forEach(t=>{const l=Zs[t];a[t]=n[t],n[t]=l});try{return e()}finally{r.forEach(t=>{n[t]=a[t]})}}function tS(){Di().enabled=!0}function lS(){Di().enabled=!1}function Id(){return Di().enabled}function iS(...e){Si("log",...e)}function sS(...e){Si("warn",...e)}function oS(...e){Si("error",...e)}function Si(e,...n){br&&Id()&&aS(()=>{Zn.console[e](`${rS}[${e}]:`,...n)})}function Di(){return br?ci("loggerSettings",()=>({enabled:!1})):{enabled:!1}}const dt={enable:tS,disable:lS,isEnabled:Id,log:iS,warn:sS,error:oS},uS=Object.prototype.toString;function dS(e,n){return uS.call(e)===`[object ${n}]`}function ES(e){return dS(e,"Object")}function mS(e){return!!(e?.then&&typeof e.then=="function")}function NS(e,n=0){return typeof e!="string"||n===0||e.length<=n?e:`${e.slice(0,n)}...`}function _S(e,n,a){try{Object.defineProperty(e,n,{value:a,writable:!0,configurable:!0})}catch{br&&dt.log(`Failed to add non-enumerable property "${n}" to object`,e)}}function TS(){const e=Zn;return e.crypto||e.msCrypto}function ua(e=TS()){let n=()=>Math.random()*16;try{if(e?.randomUUID)return e.randomUUID().replace(/-/g,"");e?.getRandomValues&&(n=()=>{const a=new Uint8Array(1);return e.getRandomValues(a),a[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,a=>(a^(n()&15)>>a/4).toString(16))}const Rd=1e3;function gd(){return Date.now()/Rd}function vS(){const{performance:e}=Zn;if(!e?.now||!e.timeOrigin)return gd;const n=e.timeOrigin;return()=>(n+e.now())/Rd}let eo;function IS(){return(eo??(eo=vS()))()}function RS(e,n={}){if(n.user&&(!e.ipAddress&&n.user.ip_address&&(e.ipAddress=n.user.ip_address),!e.did&&!n.did&&(e.did=n.user.id||n.user.email||n.user.username)),e.timestamp=n.timestamp||IS(),n.abnormal_mechanism&&(e.abnormal_mechanism=n.abnormal_mechanism),n.ignoreDuration&&(e.ignoreDuration=n.ignoreDuration),n.sid&&(e.sid=n.sid.length===32?n.sid:ua()),n.init!==void 0&&(e.init=n.init),!e.did&&n.did&&(e.did=`${n.did}`),typeof n.started=="number"&&(e.started=n.started),e.ignoreDuration)e.duration=void 0;else if(typeof n.duration=="number")e.duration=n.duration;else{const a=e.timestamp-e.started;e.duration=a>=0?a:0}n.release&&(e.release=n.release),n.environment&&(e.environment=n.environment),!e.ipAddress&&n.ipAddress&&(e.ipAddress=n.ipAddress),!e.userAgent&&n.userAgent&&(e.userAgent=n.userAgent),typeof n.errors=="number"&&(e.errors=n.errors),n.status&&(e.status=n.status)}function fd(e,n,a=2){if(!n||typeof n!="object"||a<=0)return n;if(e&&Object.keys(n).length===0)return e;const r={...e};for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(r[t]=fd(r[t],n[t],a-1));return r}function no(){return ua()}const Ml="_sentrySpan";function ro(e,n){n?_S(e,Ml,n):delete e[Ml]}function ao(e){return e[Ml]}const gS=100;class _r{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:no(),sampleRand:Math.random()}}clone(){const n=new _r;return n._breadcrumbs=[...this._breadcrumbs],n._tags={...this._tags},n._extra={...this._extra},n._contexts={...this._contexts},this._contexts.flags&&(n._contexts.flags={values:[...this._contexts.flags.values]}),n._user=this._user,n._level=this._level,n._session=this._session,n._transactionName=this._transactionName,n._fingerprint=this._fingerprint,n._eventProcessors=[...this._eventProcessors],n._attachments=[...this._attachments],n._sdkProcessingMetadata={...this._sdkProcessingMetadata},n._propagationContext={...this._propagationContext},n._client=this._client,n._lastEventId=this._lastEventId,ro(n,ao(this)),n}setClient(n){this._client=n}setLastEventId(n){this._lastEventId=n}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(n){this._scopeListeners.push(n)}addEventProcessor(n){return this._eventProcessors.push(n),this}setUser(n){return this._user=n||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&RS(this._session,{user:n}),this._notifyScopeListeners(),this}getUser(){return this._user}setTags(n){return this._tags={...this._tags,...n},this._notifyScopeListeners(),this}setTag(n,a){return this._tags={...this._tags,[n]:a},this._notifyScopeListeners(),this}setExtras(n){return this._extra={...this._extra,...n},this._notifyScopeListeners(),this}setExtra(n,a){return this._extra={...this._extra,[n]:a},this._notifyScopeListeners(),this}setFingerprint(n){return this._fingerprint=n,this._notifyScopeListeners(),this}setLevel(n){return this._level=n,this._notifyScopeListeners(),this}setTransactionName(n){return this._transactionName=n,this._notifyScopeListeners(),this}setContext(n,a){return a===null?delete this._contexts[n]:this._contexts[n]=a,this._notifyScopeListeners(),this}setSession(n){return n?this._session=n:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(n){if(!n)return this;const a=typeof n=="function"?n(this):n,r=a instanceof _r?a.getScopeData():ES(a)?n:void 0,{tags:t,extra:l,user:i,contexts:s,level:o,fingerprint:d=[],propagationContext:u}=r||{};return this._tags={...this._tags,...t},this._extra={...this._extra,...l},this._contexts={...this._contexts,...s},i&&Object.keys(i).length&&(this._user=i),o&&(this._level=o),d.length&&(this._fingerprint=d),u&&(this._propagationContext=u),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._session=void 0,ro(this,void 0),this._attachments=[],this.setPropagationContext({traceId:no(),sampleRand:Math.random()}),this._notifyScopeListeners(),this}addBreadcrumb(n,a){const r=typeof a=="number"?a:gS;if(r<=0)return this;const t={timestamp:gd(),...n,message:n.message?NS(n.message,2048):n.message};return this._breadcrumbs.push(t),this._breadcrumbs.length>r&&(this._breadcrumbs=this._breadcrumbs.slice(-r),this._client?.recordDroppedEvent("buffer_overflow","log_item")),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(n){return this._attachments.push(n),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:ao(this)}}setSDKProcessingMetadata(n){return this._sdkProcessingMetadata=fd(this._sdkProcessingMetadata,n,2),this}setPropagationContext(n){return this._propagationContext=n,this}getPropagationContext(){return this._propagationContext}captureException(n,a){const r=a?.event_id||ua();if(!this._client)return br&&dt.warn("No client configured on scope - will not capture exception!"),r;const t=new Error("Sentry syntheticException");return this._client.captureException(n,{originalException:n,syntheticException:t,...a,event_id:r},this),r}captureMessage(n,a,r){const t=r?.event_id||ua();if(!this._client)return br&&dt.warn("No client configured on scope - will not capture message!"),t;const l=new Error(n);return this._client.captureMessage(n,a,{originalException:n,syntheticException:l,...r,event_id:t},this),t}captureEvent(n,a){const r=a?.event_id||ua();return this._client?(this._client.captureEvent(n,{...a,event_id:r},this),r):(br&&dt.warn("No client configured on scope - will not capture event!"),r)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(n=>{n(this)}),this._notifyingListeners=!1)}}function fS(){return ci("defaultCurrentScope",()=>new _r)}function cS(){return ci("defaultIsolationScope",()=>new _r)}class SS{constructor(n,a){let r;n?r=n:r=new _r;let t;a?t=a:t=new _r,this._stack=[{scope:r}],this._isolationScope=t}withScope(n){const a=this._pushScope();let r;try{r=n(a)}catch(t){throw this._popScope(),t}return mS(r)?r.then(t=>(this._popScope(),t),t=>{throw this._popScope(),t}):(this._popScope(),r)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const n=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:n}),n}_popScope(){return this._stack.length<=1?!1:!!this._stack.pop()}}function Fr(){const e=gi(),n=fi(e);return n.stack=n.stack||new SS(fS(),cS())}function DS(e){return Fr().withScope(e)}function AS(e,n){const a=Fr();return a.withScope(()=>(a.getStackTop().scope=e,n(e)))}function to(e){return Fr().withScope(()=>e(Fr().getIsolationScope()))}function pS(){return{withIsolationScope:to,withScope:DS,withSetScope:AS,withSetIsolationScope:(e,n)=>to(n),getCurrentScope:()=>Fr().getScope(),getIsolationScope:()=>Fr().getIsolationScope()}}function cd(e){const n=fi(e);return n.acs?n.acs:pS()}function OS(){const e=gi();return cd(e).getCurrentScope()}function kS(...e){const n=gi(),a=cd(n);if(e.length===2){const[r,t]=e;return r?a.withSetScope(r,t):a.withScope(t)}return a.withScope(e[0])}function yS(e,n){return OS().captureException(e,void 0)}const LS="_pageContainer_b1mme_1",bS={pageContainer:LS},Sd={"GenericErrorPage.Header":"Noe gikk galt","NotFoundPage.Header":"Beklager, vi finner ikke siden du leter etter.","NotFoundPage.LinkText":"Gå til forsiden","UnauthorizedPage.Header":"Du må logge inn for å få tilgang til systemet","UnauthorizedPage.LinkText":"Gå til innloggingssiden","ForbiddenPage.Header":"Du har ikke tilgang til å slå opp denne personen","ForbiddenPage.LinkText":"Gå til forsiden","ErrorPage.Header":"Det har oppstått en teknisk feil i denne behandlingen. {br}Meld feilen i Porten. Ta med feilmeldingsteksten.","IngenBehandlingValgtPanel.ZeroBehandlinger":"Ingen behandlinger er opprettet","IngenBehandlingValgtPanel.PleaseSelectBehandling":"Velg behandling"},MS=Hn(Sd),Dd=({children:e,titleCode:n="GenericErrorPage.Header"})=>N.jsx(Gl,{value:MS,children:N.jsxs("div",{className:bS.pageContainer,children:[N.jsx(xr,{size:"large",level:"3",children:N.jsx(x,{id:n,values:{br:N.jsx("br",{})}})}),N.jsx("br",{}),e]})});Dd.__docgenInfo={description:`FeilsideContainer

Presentasjonskomponent. Denne komponenten vises når den Nav-ansatte prøver å aksessere en url som ikke finnes.
Det blir presentert en generell feilmelding og en lenke som tar Nav-ansatt tilbake til hovedsiden.`,methods:[],displayName:"ErrorPageWrapper",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},titleCode:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'GenericErrorPage.Header'",computed:!1}}}};const Ad=()=>N.jsx(Dd,{titleCode:"ErrorPage.Header",children:N.jsx("br",{})});Ad.__docgenInfo={description:"",methods:[],displayName:"ErrorPage"};Hn(Sd);class hS extends v.Component{static defaultProps={showChild:!1};constructor(n){super(n),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n,a){const{errorMessageCallback:r}=this.props;kS(l=>{for(const i of Object.entries(a))l.setExtra(i[0],i[1]),yS(n)});const t=a.componentStack?[n.toString(),a.componentStack.split(`
`).map(l=>l.trim()).find(l=>!!l)].join(" "):n.toString();r({type:To.GENERAL_ERROR,message:t}),console.error(n)}render(){const{children:n,showChild:a,errorMessage:r}=this.props,{hasError:t}=this.state;return t?r?N.jsx(Hr,{size:"small",style:{margin:"20px"},children:r}):N.jsxs(N.Fragment,{children:[a&&N.jsx("div",{style:{marginTop:"150px"},children:n}),N.jsx(Ad,{})]}):n}}hS.__docgenInfo={description:"",methods:[],displayName:"ErrorBoundary",props:{errorMessageCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(error: FpError) => void",signature:{arguments:[{type:{name:"union",raw:`| GeneralError
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
}`,signature:{properties:[{key:"type",value:{name:"ErrorType.POLLING_HALTED_OR_DELAYED",required:!0}},{key:"status",value:{name:"literal",value:"'DELAYED'",required:!0}},{key:"message",value:{name:"string",required:!0}},{key:"eta",value:{name:"string",required:!0}}]}}]},name:"error"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},showChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const KS="_inline_glms2_1",PS="_docIcon_glms2_9",GS="_phoneIcon_glms2_14",Tl={inline:KS,docIcon:PS,phoneIcon:GS},_a=({saksnummer:e,arbeidsforhold:n,inntektsmelding:a,skalViseArbeidsforholdId:r,alleKodeverk:t,ikkeVisInfo:l,radData:i})=>N.jsxs(N.Fragment,{children:[N.jsxs(ye,{gap:"space-16",children:[!l&&N.jsxs(fe,{gap:"space-16",children:[N.jsx(ge,{size:"small",children:N.jsx(x,{id:i.erPrivatPerson?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),N.jsx(ne,{size:"small",children:i.erPrivatPerson?N.jsx(Ot,{dateString:i.arbeidsgiverFødselsdato}):i.arbeidsgiverIdent})]}),r&&N.jsxs(fe,{gap:"space-16",children:[N.jsx(ge,{size:"small",children:N.jsx(x,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),N.jsx(ne,{size:"small",children:a.eksternArbeidsforholdId})]}),n&&N.jsxs(N.Fragment,{children:[N.jsxs(fe,{gap:"space-16",children:[N.jsx(ge,{size:"small",children:N.jsx(x,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),N.jsx(ne,{size:"small",children:`${n.stillingsprosent}%`})]}),n.permisjonOgMangel&&N.jsxs(fe,{gap:"space-16",children:[N.jsx(ge,{size:"small",children:t.PermisjonsbeskrivelseType.find(s=>s.kode===n.permisjonOgMangel?.type)?.navn??""}),N.jsx(ne,{size:"small",children:N.jsx(sa,{dateStringFom:n.permisjonOgMangel.permisjonFom,dateStringTom:n.permisjonOgMangel.permisjonTom})})]})]}),N.jsxs(fe,{gap:"space-16",children:[N.jsx(ge,{size:"small",children:N.jsx(x,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),N.jsx(ne,{size:"small",children:N.jsx(yl,{beløp:a.inntektPrMnd})})]}),N.jsxs(fe,{gap:"space-16",children:[N.jsx(ge,{size:"small",children:N.jsx(x,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),N.jsx(ne,{size:"small",children:N.jsx(x,{id:a.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),a.refusjonPrMnd!==void 0&&N.jsxs(fe,{gap:"space-16",children:[N.jsx(ge,{size:"small",children:N.jsx(x,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),N.jsx(ne,{size:"small",children:N.jsx(yl,{beløp:a.refusjonPrMnd})})]}),N.jsxs(vd,{saksnummer:e,journalpostId:a.journalpostId,dokumentId:a.dokumentId,children:[N.jsx(ne,{size:"small",className:Tl.inline,children:N.jsx(x,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})}),N.jsx(IE,{className:Tl.docIcon})]})]}),N.jsxs(fe,{gap:"space-16",children:[N.jsx(yE,{className:Tl.phoneIcon}),N.jsxs(ye,{gap:"space-4",children:[N.jsx(ge,{size:"small",children:N.jsx(x,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),N.jsx(hr,{children:a.kontaktpersonNavn}),N.jsx(hr,{children:N.jsx(x,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:a.kontaktpersonNummer}})})]})]})]});_a.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"signature",type:"object",raw:`{
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
  FagsakMarkering: FagsakMarkeringType;
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"union",raw:`| '-'
| 'UTDANNING'
| 'FORELDREPENGER'
| 'PERMITTERING'
| 'ANNEN_PERMISJON'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'ANNEN_PERMISJON'"}],required:!0}},{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"union",raw:`| 'ETTERLØNN_SLUTTPAKKE'
| 'FORENKLET_OPPGJØRSORDNING'
| 'FRILANSER'
| 'FRILANSER_OPPDRAGSTAKER'
| 'LØNN_UNDER_UTDANNING'
| 'MARITIMT_ARBEIDSFORHOLD'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'ORDINÆRT_ARBEIDSFORHOLD'
| 'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'
| 'NÆRING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'VANLIG'
| '-'`,elements:[{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FORENKLET_OPPGJØRSORDNING'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'FRILANSER_OPPDRAGSTAKER'"},{name:"literal",value:"'LØNN_UNDER_UTDANNING'"},{name:"literal",value:"'MARITIMT_ARBEIDSFORHOLD'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'ORDINÆRT_ARBEIDSFORHOLD'"},{name:"literal",value:"'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Avslagsårsak",value:{name:"union",raw:`| '1001'
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
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingResultatType",value:{name:"union",raw:`| 'IKKE_FASTSATT'
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
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"BehandlingStatus",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"BehandlingType",value:{name:"union",raw:`| 'BT-002'
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
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FamilieHendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FaresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakStatus",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"FagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakMarkering",value:{name:"union",raw:`| 'EØS_BOSATT_NORGE'
| 'BOSATT_UTLAND'
| 'SAMMENSATT_KONTROLL'
| 'DØD_DØDFØDSEL'
| 'PRAKSIS_UTSETTELSE'
| 'BARE_FAR_RETT'
| 'SELVSTENDIG_NÆRING'
| 'HASTER'`,elements:[{name:"literal",value:"'EØS_BOSATT_NORGE'"},{name:"literal",value:"'BOSATT_UTLAND'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'DØD_DØDFØDSEL'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'SELVSTENDIG_NÆRING'"},{name:"literal",value:"'HASTER'"}],required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FarSøkerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FordelingPeriodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"ForeldreType",value:{name:"union",raw:"'MOR' | 'FAR' | 'MEDMOR' | 'ANDRE' | '-'",elements:[{name:"literal",value:"'MOR'"},{name:"literal",value:"'FAR'"},{name:"literal",value:"'MEDMOR'"},{name:"literal",value:"'ANDRE'"},{name:"literal",value:"'-'"}],required:!0}},{key:"HistorikkAktør",value:{name:"union",raw:`| 'BESL'
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const BS="_inline_p47ci_1",FS="_aksjonpunktImage_p47ci_5",VS="_arrow_p47ci_12",wS="_ikkeMottatt_p47ci_18",US="_skiller_p47ci_30",tr={inline:BS,aksjonpunktImage:FS,arrow:VS,ikkeMottatt:wS,skiller:US},Ai=({saksnummer:e,alleKodeverk:n,radData:a})=>{const r=er(),[t,l]=v.useState({}),{arbeidsforholdForRad:i,inntektsmeldingerForRad:s,arbeidsgiverIdent:o,erPrivatPerson:d}=a,u=i.length===1,E=Cc(s,i);return N.jsxs(ye,{gap:"space-16",children:[N.jsxs(fe,{gap:"space-16",children:[N.jsx(ge,{size:"small",children:N.jsx(x,{id:d?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),N.jsx(ne,{size:"small",children:d?N.jsx(Ot,{dateString:a.arbeidsgiverFødselsdato}):o})]}),!u&&N.jsxs(N.Fragment,{children:[N.jsx(js,{dividerParagraf:!0,className:tr.skiller}),E.map(({arbeidsforhold:_,inntektsmelding:T})=>N.jsxs(m.Fragment,{children:[N.jsxs(ye,{gap:"space-8",children:[N.jsxs(fe,{gap:"space-16",children:[N.jsx(ge,{size:"small",children:N.jsx(x,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),N.jsxs("div",{children:[_.eksternArbeidsforholdId&&_.eksternArbeidsforholdId.length<50&&N.jsx("div",{children:N.jsx(ne,{size:"small",children:_.eksternArbeidsforholdId})}),_.eksternArbeidsforholdId&&_.eksternArbeidsforholdId.length>=50&&N.jsx(Qu,{content:jS(_.eksternArbeidsforholdId),children:N.jsx(ne,{size:"small",children:`${_.eksternArbeidsforholdId.substring(0,50)}...`})}),!_.eksternArbeidsforholdId&&N.jsx(ne,{size:"small",children:"-"})]}),T&&N.jsxs(N.Fragment,{children:[N.jsx(yr,{}),N.jsx(ge,{size:"small",children:N.jsx(x,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!T&&N.jsxs(N.Fragment,{children:[N.jsx(yr,{}),N.jsxs("div",{children:[N.jsx(jl,{className:tr.aksjonpunktImage,title:r.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),N.jsx("div",{className:tr.ikkeMottatt,children:N.jsx(ge,{size:"small",children:N.jsx(x,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),N.jsxs(fe,{gap:"space-16",children:[N.jsx(ge,{size:"small",children:N.jsx(x,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),N.jsx(ne,{size:"small",children:N.jsx(sa,{dateStringFom:_.fom,dateStringTom:_.tom})}),T&&N.jsxs(N.Fragment,{children:[N.jsx(yr,{}),N.jsx(ne,{size:"small",children:N.jsx(Ot,{dateString:T.motattDato})})]})]}),N.jsxs(fe,{gap:"space-16",children:[N.jsx(ge,{size:"small",children:N.jsx(x,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),N.jsx(ne,{size:"small",children:`${_.stillingsprosent}%`})]}),_.permisjonOgMangel&&N.jsxs(fe,{gap:"space-16",children:[N.jsx(ge,{size:"small",children:n.PermisjonsbeskrivelseType.find(I=>I.kode===_.permisjonOgMangel?.type)?.navn??""}),N.jsx(ne,{size:"small",children:N.jsx(sa,{dateStringFom:_.permisjonOgMangel.permisjonFom,dateStringTom:_.permisjonOgMangel.permisjonTom})})]}),T&&N.jsxs(N.Fragment,{children:[_.internArbeidsforholdId&&t[_.internArbeidsforholdId]&&N.jsx(_a,{saksnummer:e,inntektsmelding:T,skalViseArbeidsforholdId:!1,radData:a,alleKodeverk:n}),N.jsxs(si,{onClick:I=>{I.preventDefault(),l(f=>{if(!_.internArbeidsforholdId)return f;const g=f[_.internArbeidsforholdId];return{...f,[_.internArbeidsforholdId]:g===void 0||g===!1}})},href:"",children:[N.jsx("span",{children:N.jsx(ne,{size:"small",className:tr.inline,children:N.jsx(x,{id:!_.internArbeidsforholdId||!t[_.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),_.internArbeidsforholdId&&t[_.internArbeidsforholdId]?N.jsx(Io,{className:tr.arrow}):N.jsx(va,{className:tr.arrow})]})]})]}),N.jsx(js,{dividerParagraf:!0,className:tr.skiller})]},`${_.arbeidsgiverIdent}${_.internArbeidsforholdId}`))]}),u&&E.length>0&&E[0].inntektsmelding&&N.jsx(_a,{saksnummer:e,radData:a,arbeidsforhold:i[0],inntektsmelding:E[0].inntektsmelding,skalViseArbeidsforholdId:s.length>1,alleKodeverk:n,ikkeVisInfo:!0}),u&&s.length===0&&N.jsxs(N.Fragment,{children:[N.jsxs(fe,{gap:"space-16",children:[N.jsx(ge,{size:"small",children:N.jsx(x,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),N.jsx(ne,{size:"small",children:`${i[0].stillingsprosent}%`})]}),i[0].permisjonOgMangel&&N.jsxs(fe,{gap:"space-16",children:[N.jsx(ge,{size:"small",children:n.PermisjonsbeskrivelseType.find(_=>_.kode===i[0].permisjonOgMangel?.type)?.navn??""}),N.jsx(ne,{size:"small",children:N.jsx(sa,{dateStringFom:i[0].permisjonOgMangel.permisjonFom,dateStringTom:i[0].permisjonOgMangel.permisjonTom})})]})]})]})},jS=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(r,t)=>e.slice(t*25,t*25+25)).join("-")};Ai.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
  FagsakMarkering: FagsakMarkeringType;
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"union",raw:`| '-'
| 'UTDANNING'
| 'FORELDREPENGER'
| 'PERMITTERING'
| 'ANNEN_PERMISJON'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'ANNEN_PERMISJON'"}],required:!0}},{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"union",raw:`| 'ETTERLØNN_SLUTTPAKKE'
| 'FORENKLET_OPPGJØRSORDNING'
| 'FRILANSER'
| 'FRILANSER_OPPDRAGSTAKER'
| 'LØNN_UNDER_UTDANNING'
| 'MARITIMT_ARBEIDSFORHOLD'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'ORDINÆRT_ARBEIDSFORHOLD'
| 'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'
| 'NÆRING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'VANLIG'
| '-'`,elements:[{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FORENKLET_OPPGJØRSORDNING'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'FRILANSER_OPPDRAGSTAKER'"},{name:"literal",value:"'LØNN_UNDER_UTDANNING'"},{name:"literal",value:"'MARITIMT_ARBEIDSFORHOLD'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'ORDINÆRT_ARBEIDSFORHOLD'"},{name:"literal",value:"'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Avslagsårsak",value:{name:"union",raw:`| '1001'
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
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingResultatType",value:{name:"union",raw:`| 'IKKE_FASTSATT'
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
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"BehandlingStatus",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"BehandlingType",value:{name:"union",raw:`| 'BT-002'
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
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FamilieHendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FaresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakStatus",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"FagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakMarkering",value:{name:"union",raw:`| 'EØS_BOSATT_NORGE'
| 'BOSATT_UTLAND'
| 'SAMMENSATT_KONTROLL'
| 'DØD_DØDFØDSEL'
| 'PRAKSIS_UTSETTELSE'
| 'BARE_FAR_RETT'
| 'SELVSTENDIG_NÆRING'
| 'HASTER'`,elements:[{name:"literal",value:"'EØS_BOSATT_NORGE'"},{name:"literal",value:"'BOSATT_UTLAND'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'DØD_DØDFØDSEL'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'SELVSTENDIG_NÆRING'"},{name:"literal",value:"'HASTER'"}],required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FarSøkerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FordelingPeriodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"ForeldreType",value:{name:"union",raw:"'MOR' | 'FAR' | 'MEDMOR' | 'ANDRE' | '-'",elements:[{name:"literal",value:"'MOR'"},{name:"literal",value:"'FAR'"},{name:"literal",value:"'MEDMOR'"},{name:"literal",value:"'ANDRE'"},{name:"literal",value:"'-'"}],required:!0}},{key:"HistorikkAktør",value:{name:"union",raw:`| 'BESL'
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const qS="_bredde_gb3eb_1",HS="_inline_gb3eb_9",xS="_arrow_gb3eb_13",wa={bredde:qS,inline:HS,arrow:xS},hl=({saksnummer:e,skjæringstidspunkt:n,alleKodeverk:a,radData:r})=>{const[t,l]=v.useState(!1),{inntektsposter:i,arbeidsforholdForRad:s}=r,o=JS(n,i),d=s.length===1,u=i.length>0&&i.some(E=>E.beløp>0);return N.jsxs(ye,{gap:"space-32",children:[N.jsx(Ai,{saksnummer:e,alleKodeverk:a,radData:r}),u&&N.jsxs(ye,{gap:"space-8",children:[N.jsx(ge,{size:"small",children:N.jsx(x,{id:d?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),N.jsx(ye,{gap:"space-4",children:o.filter((E,_)=>t?!0:_<3).map(E=>N.jsxs(fe,{gap:"space-8",className:wa.bredde,children:[N.jsx(ne,{size:"small",children:N.jsx(x,{id:`ArbeidsforholdInformasjonPanel.${$e(E.fom).month()+1}`})}),N.jsx(ne,{size:"small",children:$e(E.fom).year()}),N.jsx(yr,{}),N.jsx(ne,{size:"small",children:N.jsx(yl,{beløp:E.beløp})})]},E.fom))}),N.jsxs(si,{onClick:E=>{E.preventDefault(),l(!t)},href:"",children:[N.jsx("span",{children:N.jsx(ne,{size:"small",className:wa.inline,children:N.jsx(x,{id:t?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),t?N.jsx(Io,{className:wa.arrow}):N.jsx(va,{className:wa.arrow})]})]}),!u&&N.jsx(ge,{size:"small",children:N.jsx(x,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})})]})},JS=(e,n)=>{const r=$e(e).subtract(1,"month").startOf("month"),t=r.subtract(12,"month"),l=[];for(let i=r;i.isAfter(t);i=i.subtract(1,"month")){const s=i.format(Kn),o=n.find(d=>$e(d.fom).startOf("month").format(Kn)===s);l.push({beløp:o?.beløp||0,fom:s})}return l};hl.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
  FagsakMarkering: FagsakMarkeringType;
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"union",raw:`| '-'
| 'UTDANNING'
| 'FORELDREPENGER'
| 'PERMITTERING'
| 'ANNEN_PERMISJON'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'ANNEN_PERMISJON'"}],required:!0}},{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"union",raw:`| 'ETTERLØNN_SLUTTPAKKE'
| 'FORENKLET_OPPGJØRSORDNING'
| 'FRILANSER'
| 'FRILANSER_OPPDRAGSTAKER'
| 'LØNN_UNDER_UTDANNING'
| 'MARITIMT_ARBEIDSFORHOLD'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'ORDINÆRT_ARBEIDSFORHOLD'
| 'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'
| 'NÆRING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'VANLIG'
| '-'`,elements:[{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FORENKLET_OPPGJØRSORDNING'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'FRILANSER_OPPDRAGSTAKER'"},{name:"literal",value:"'LØNN_UNDER_UTDANNING'"},{name:"literal",value:"'MARITIMT_ARBEIDSFORHOLD'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'ORDINÆRT_ARBEIDSFORHOLD'"},{name:"literal",value:"'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Avslagsårsak",value:{name:"union",raw:`| '1001'
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
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingResultatType",value:{name:"union",raw:`| 'IKKE_FASTSATT'
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
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"BehandlingStatus",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"BehandlingType",value:{name:"union",raw:`| 'BT-002'
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
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FamilieHendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FaresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakStatus",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"FagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakMarkering",value:{name:"union",raw:`| 'EØS_BOSATT_NORGE'
| 'BOSATT_UTLAND'
| 'SAMMENSATT_KONTROLL'
| 'DØD_DØDFØDSEL'
| 'PRAKSIS_UTSETTELSE'
| 'BARE_FAR_RETT'
| 'SELVSTENDIG_NÆRING'
| 'HASTER'`,elements:[{name:"literal",value:"'EØS_BOSATT_NORGE'"},{name:"literal",value:"'BOSATT_UTLAND'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'DØD_DØDFØDSEL'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'SELVSTENDIG_NÆRING'"},{name:"literal",value:"'HASTER'"}],required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FarSøkerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FordelingPeriodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"ForeldreType",value:{name:"union",raw:"'MOR' | 'FAR' | 'MEDMOR' | 'ANDRE' | '-'",elements:[{name:"literal",value:"'MOR'"},{name:"literal",value:"'FAR'"},{name:"literal",value:"'MEDMOR'"},{name:"literal",value:"'ANDRE'"},{name:"literal",value:"'-'"}],required:!0}},{key:"HistorikkAktør",value:{name:"union",raw:`| 'BESL'
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const YS="_hjelpetekst_6zosx_1",CS="_alertStripe_6zosx_5",$S="_hjelpetekstInnhold_6zosx_9",WS="_svg_6zosx_14",Ua={hjelpetekst:YS,alertStripe:CS,hjelpetekstInnhold:$S,svg:WS},zS=Bl(3),XS=Fl(1500),QS=Eo(1),ZS=mo(100),pd=({behandlingUuid:e,behandlingVersjon:n,radData:a,isReadOnly:r,registrerArbeidsforhold:t,lagreVurdering:l,lukkArbeidsforholdRad:i,oppdaterTabell:s})=>{const o=er(),d={saksbehandlersVurdering:a.avklaring?.saksbehandlersVurdering,begrunnelse:a.avklaring?.begrunnelse,fom:a.avklaring?.fom,tom:a.avklaring?.tom,stillingsprosent:a.avklaring?.stillingsprosent},u=jt({defaultValues:d});Ri(u.formState.isDirty);const E=u.watch("saksbehandlersVurdering"),_=()=>{i(),u.reset(d)},T=a.inntektsmeldingerForRad[0],I=R=>{const A=nD(s,a,T,R);return R.saksbehandlersVurdering==="OPPRETT_BASERT_PÅ_INNTEKTSMELDING"?t({behandlingUuid:e,behandlingVersjon:n,internArbeidsforholdRef:T.internArbeidsforholdId??void 0,arbeidsgiverNavn:a.arbeidsgiverNavn,arbeidsgiverIdent:T.arbeidsgiverIdent,vurdering:"OPPRETT_BASERT_PÅ_INNTEKTSMELDING",begrunnelse:R.begrunnelse??"",fom:R.fom??"",tom:R.tom,stillingsprosent:R.stillingsprosent??0}).then(A).finally(()=>u.reset(R)):l({behandlingUuid:e,behandlingVersjon:n,vurdering:R.saksbehandlersVurdering,begrunnelse:R.begrunnelse,arbeidsgiverIdent:T.arbeidsgiverIdent,internArbeidsforholdRef:T.internArbeidsforholdId??void 0}).then(A).finally(()=>u.reset(R))},f=v.useRef(null),[g,S]=v.useState(!1),c=()=>S(R=>!R);return N.jsxs(ye,{gap:"space-32",children:[N.jsx("div",{className:Ua.alertStripe,children:N.jsx(ca,{variant:"info",children:N.jsx(x,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),N.jsx(Ht,{formMethods:u,onSubmit:I,children:N.jsxs(ye,{gap:"space-16",children:[N.jsxs(md,{name:"saksbehandlersVurdering",control:u.control,label:N.jsxs(fe,{gap:"space-8",children:[N.jsx(x,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),N.jsx(go,{className:Ua.svg,ref:f,onClick:c,title:o.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),N.jsx(Br,{open:g,onClose:c,anchorEl:f.current,className:Ua.hjelpetekst,children:N.jsx(Br.Content,{className:Ua.hjelpetekstInnhold,children:N.jsx(ne,{children:N.jsx(x,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[dn],isReadOnly:r,children:[N.jsx(Lr,{value:"KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",size:"small",children:N.jsx(x,{id:"ManglendeOpplysningerForm.TarKontakt"})}),N.jsx(Lr,{value:"IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",size:"small",children:N.jsx(x,{id:"ManglendeOpplysningerForm.GåVidere"})}),N.jsx(Lr,{value:"OPPRETT_BASERT_PÅ_INNTEKTSMELDING",size:"small",children:N.jsx(x,{id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"})})]}),E==="OPPRETT_BASERT_PÅ_INNTEKTSMELDING"&&N.jsxs(fe,{gap:"space-16",children:[N.jsx(Na,{name:"fom",control:u.control,label:N.jsx(x,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[dn,da],isReadOnly:r}),N.jsx(Na,{name:"tom",control:u.control,label:N.jsx(x,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[da,eD(u.getValues)],isReadOnly:r}),N.jsx(bl,{name:"stillingsprosent",control:u.control,label:N.jsx(x,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:R=>{const A=Number.parseInt(R.toString(),10);return Number.isNaN(A)?R:A},validate:[dn,uo,QS,ZS],readOnly:r,maxLength:3})]}),N.jsx(vi,{name:"begrunnelse",control:u.control,label:N.jsx(x,{id:"ManglendeOpplysningerForm.Begrunn"}),validate:[dn,zS,XS,Vl],maxLength:1500,readOnly:r}),!r&&N.jsxs(fe,{gap:"space-16",children:[N.jsx(ke,{size:"small",variant:"secondary",loading:u.formState.isSubmitting,disabled:!u.formState.isDirty||u.formState.isSubmitting,children:N.jsx(x,{id:"ManglendeOpplysningerForm.Lagre"})}),N.jsx(ke,{size:"small",variant:"tertiary",loading:!1,disabled:u.formState.isSubmitting,onClick:_,type:"button",children:N.jsx(x,{id:"ManglendeOpplysningerForm.Avbryt"})})]})]})})]})},eD=e=>n=>{const a=e("fom");return a&&n?No(a)(n):null},nD=(e,n,a,r)=>()=>{e(t=>t.map(l=>{if(a.arbeidsgiverIdent===l.arbeidsgiverIdent){const s=r.saksbehandlersVurdering==="OPPRETT_BASERT_PÅ_INNTEKTSMELDING"?{arbeidsgiverIdent:a.arbeidsgiverIdent,fom:r.fom,tom:r.tom,stillingsprosent:r.stillingsprosent,begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering}:{begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering};return{...n,avklaring:s}}return l}))};pd.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const rD="_alertStripe_i1zil_1",aD="_hjelpetekst_i1zil_5",tD="_hjelpetekstInnhold_i1zil_9",lD="_svg_i1zil_14",ja={alertStripe:rD,hjelpetekst:aD,hjelpetekstInnhold:tD,svg:lD},iD=Bl(3),sD=Fl(1500),Od=({behandlingUuid:e,behandlingVersjon:n,radData:a,isReadOnly:r,lagreVurdering:t,lukkArbeidsforholdRad:l,oppdaterTabell:i})=>{const s=er(),{arbeidsforholdForRad:o,inntektsmeldingerForRad:d}=a,u={saksbehandlersVurdering:a.avklaring?.saksbehandlersVurdering,begrunnelse:a.avklaring?.begrunnelse},E=jt({defaultValues:u});Ri(E.formState.isDirty);const _=o.length===1,T=()=>{l(),E.reset(u)},I=R=>{const A={behandlingUuid:e,behandlingVersjon:n,vurdering:R.saksbehandlersVurdering??"-",arbeidsgiverIdent:a.arbeidsgiverIdent,internArbeidsforholdRef:_?o[0].internArbeidsforholdId??void 0:void 0,begrunnelse:R.begrunnelse??""};return t(A).then(oD(i,a,R)).finally(()=>E.reset(R))},f=v.useRef(null),[g,S]=v.useState(!1),c=()=>S(R=>!R);return N.jsx(Ht,{formMethods:E,onSubmit:I,children:N.jsxs(ye,{gap:"space-16",children:[!_&&d.length>0&&N.jsx("div",{className:ja.alertStripe,children:N.jsx(ca,{variant:"info",children:N.jsx(x,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})})}),N.jsx(md,{name:"saksbehandlersVurdering",control:E.control,label:N.jsxs(fe,{gap:"space-8",children:[N.jsx(x,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),N.jsx(go,{ref:f,onClick:c,className:ja.svg,title:s.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),N.jsx(Br,{open:g,onClose:c,anchorEl:f.current,className:ja.hjelpetekst,children:N.jsx(Br.Content,{className:ja.hjelpetekstInnhold,children:N.jsxs(ye,{gap:"space-16",children:[N.jsx(ne,{children:N.jsx(x,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),N.jsx(ne,{children:N.jsx(x,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),N.jsx(ne,{children:N.jsx(x,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})})]}),validate:[dn],isReadOnly:r,children:N.jsxs(ye,{gap:"space-2",children:[N.jsx(Lr,{value:"KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",size:"small",children:N.jsx(x,{id:"InntektsmeldingInnhentesForm.TarKontakt"})}),!a.erPrivatPerson&&N.jsx(Lr,{value:"MELDING_TIL_ARBEIDSGIVER_NAV_NO",size:"small",children:N.jsx(x,{id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"})}),N.jsx(Lr,{value:"FORTSETT_UTEN_INNTEKTSMELDING",size:"small",children:N.jsx(x,{id:"InntektsmeldingInnhentesForm.GåVidere"})})]})}),N.jsx(vi,{name:"begrunnelse",control:E.control,label:N.jsx(x,{id:_?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),validate:[dn,iD,sD,Vl],maxLength:1500,readOnly:r}),!r&&N.jsxs(fe,{gap:"space-16",children:[N.jsx(ke,{size:"small",variant:"secondary",loading:E.formState.isSubmitting,disabled:!E.formState.isDirty||E.formState.isSubmitting,children:N.jsx(x,{id:"InntektsmeldingInnhentesForm.Lagre"})}),N.jsx(ke,{size:"small",variant:"tertiary",loading:!1,disabled:E.formState.isSubmitting,onClick:T,type:"button",children:N.jsx(x,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]})]})})},oD=(e,n,a)=>()=>{e(r=>r.map(t=>t.arbeidsgiverIdent===n.arbeidsgiverIdent?{...n,avklaring:{begrunnelse:a.begrunnelse,saksbehandlersVurdering:a.saksbehandlersVurdering}}:t))};Od.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const Ta="342352362",uD=Bl(3),dD=Fl(1500),ED=Eo(1),mD=mo(100),pi=({behandlingUuid:e,behandlingVersjon:n,isReadOnly:a,registrerArbeidsforhold:r,radData:t,lukkArbeidsforholdRad:l,erOverstyrt:i,oppdaterTabell:s,erNyttArbeidsforhold:o=!1})=>{const d=er(),[u,E]=v.useState(!1),_={fom:t?.avklaring?.fom,tom:t?.avklaring?.tom,stillingsprosent:t?.avklaring?.stillingsprosent,begrunnelse:t?.avklaring?.begrunnelse,arbeidsgiverNavn:t?.avklaring?.arbeidsgiverNavn},T=jt({defaultValues:_});Ri(T.formState.isDirty);const I=()=>{l(),T.reset(_)},f=S=>{const c=lo("MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e,n,S);return r(c).then(()=>{s(_D(S)),T.reset(S),o&&l()})},g=()=>{const S=T.getValues(),c=lo("FJERN_FRA_BEHANDLINGEN",e,n,S);r(c).then(TD(s,l,o))};return N.jsxs(ye,{gap:"space-16",children:[!t&&N.jsx(xr,{size:"small",level:"3",children:N.jsx(x,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),N.jsx(Ht,{formMethods:T,onSubmit:f,children:N.jsxs(ye,{gap:"space-24",children:[N.jsxs(fe,{gap:"space-16",children:[i&&N.jsxs(N.Fragment,{children:[N.jsx(bl,{name:"arbeidsgiverNavn",control:T.control,label:N.jsx(x,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[dn],readOnly:a||!i}),N.jsx(Na,{name:"fom",control:T.control,label:N.jsx(x,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[dn,da],isReadOnly:a||!i}),N.jsx(Na,{name:"tom",control:T.control,label:N.jsx(x,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[da,ND(T.getValues)],isReadOnly:a||!i})]}),N.jsx(bl,{name:"stillingsprosent",control:T.control,label:N.jsx(x,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:S=>{const c=Number.parseInt(S.toString(),10);return Number.isNaN(c)?S:c},validate:[dn,uo,ED,mD],readOnly:a||!i,maxLength:3})]}),N.jsx(vi,{name:"begrunnelse",control:T.control,label:N.jsx(x,{id:"LeggTilArbeidsforholdForm.Begrunn"}),validate:[dn,uD,dD,Vl],maxLength:1500,readOnly:a||!i}),i&&N.jsxs(fe,{gap:"space-16",children:[N.jsx(ke,{size:"small",variant:"secondary",loading:T.formState.isSubmitting,disabled:!T.formState.isDirty||T.formState.isSubmitting,children:N.jsx(x,{id:"LeggTilArbeidsforholdForm.Lagre"})}),N.jsx(ke,{size:"small",variant:"tertiary",loading:!1,disabled:T.formState.isSubmitting,onClick:I,type:"button",children:N.jsx(x,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),t&&N.jsxs(N.Fragment,{children:[N.jsx(yr,{}),N.jsx(ke,{size:"small",variant:"tertiary",loading:!1,disabled:T.formState.isSubmitting,onClick:()=>E(!0),type:"button",icon:N.jsx(FE,{"aria-hidden":!0}),children:N.jsx(x,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]})]})}),u&&N.jsx(sc,{text:d.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:g,cancel:()=>E(!1),showModal:!0})]})},lo=(e,n,a,r)=>({vurdering:e,behandlingUuid:n,behandlingVersjon:a,arbeidsgiverIdent:Ta,begrunnelse:r.begrunnelse??"",arbeidsgiverNavn:r.arbeidsgiverNavn??"",fom:r.fom??"",tom:r.tom,stillingsprosent:r.stillingsprosent??0}),ND=e=>n=>{const a=e("fom");return n&&a?No(a)(n):null},_D=e=>n=>{const a={erPrivatPerson:!1,arbeidsgiverIdent:Ta,arbeidsgiverNavn:e.arbeidsgiverNavn??"",avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:"MANUELT_OPPRETTET_AV_SAKSBEHANDLER"},inntektsmeldingerForRad:[],inntektsposter:[],arbeidsforholdForRad:[]},r=n.findIndex(t=>t.arbeidsgiverIdent===Ta);return r===-1?n.concat(a):n.map((t,l)=>l===r?a:t)},TD=(e,n,a)=>()=>{e(r=>r.filter(t=>t.arbeidsgiverIdent!==Ta)),a&&n()};pi.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const vD="_exclamationmarkIcon_5sygz_1",ID="_checkmarkIcon_5sygz_8",RD="_panelOpen_5sygz_15",gD="_panelOpenAp_5sygz_24",fD="_row_5sygz_34",cD="_isOpen_5sygz_38",SD="_isApOpen_5sygz_42",ra={exclamationmarkIcon:vD,checkmarkIcon:ID,panelOpen:RD,panelOpenAp:gD,row:fD,isOpen:cD,isApOpen:SD},DD=eS.bind(ra),kd=({saksnummer:e,behandlingUuid:n,behandlingVersjon:a,radData:r,isReadOnly:t,erOverstyrt:l,oppdaterTabell:i,registrerArbeidsforhold:s,lagreVurdering:o,toggleÅpenRad:d,erRadÅpen:u,alleKodeverk:E,skjæringstidspunkt:_})=>{const T=er(),{inntektsmeldingerForRad:I,arbeidsforholdForRad:f,arbeidsgiverNavn:g,avklaring:S,årsak:c}=r,R=S?.saksbehandlersVurdering==="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",A=f.length>0&&I.length>0&&!c,D=c===Ve.MANGLENDE_INNTEKTSMELDING,k=c===Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,L=!!c&&!S?.saksbehandlersVurdering,B=f.length>0&&I.length===0&&!c&&!R,M=f.length===0&&I.length>0&&!c,G=pD(f,S);return N.jsxs(De.ExpandableRow,{open:u,onOpenChange:d,expandOnRowClick:!0,togglePlacement:"right",contentGutter:"none",className:DD("row",{isOpen:u,isApOpen:L}),content:N.jsxs(ye,{gap:"space-16",className:L?ra.panelOpenAp:ra.panelOpen,children:[R&&N.jsx(pi,{behandlingUuid:n,behandlingVersjon:a,isReadOnly:!1,registrerArbeidsforhold:s,radData:r,lukkArbeidsforholdRad:d,erOverstyrt:l,oppdaterTabell:i}),A&&N.jsx(Ai,{saksnummer:e,alleKodeverk:E,radData:r}),M&&N.jsx(_a,{saksnummer:e,arbeidsforhold:f.length>0?f[0]:void 0,inntektsmelding:I[0],skalViseArbeidsforholdId:!1,alleKodeverk:E,radData:r}),D&&N.jsxs(N.Fragment,{children:[N.jsx(hl,{saksnummer:e,skjæringstidspunkt:_,alleKodeverk:E,radData:r}),N.jsx(Od,{behandlingUuid:n,behandlingVersjon:a,isReadOnly:t,radData:r,lagreVurdering:o,lukkArbeidsforholdRad:d,oppdaterTabell:i})]}),k&&N.jsxs(N.Fragment,{children:[N.jsx(_a,{saksnummer:e,inntektsmelding:I[0],skalViseArbeidsforholdId:I.length>1,radData:r,alleKodeverk:E}),N.jsx(pd,{behandlingUuid:n,behandlingVersjon:a,radData:r,isReadOnly:t,registrerArbeidsforhold:s,lagreVurdering:o,lukkArbeidsforholdRad:d,oppdaterTabell:i})]}),B&&N.jsx(hl,{saksnummer:e,skjæringstidspunkt:_,alleKodeverk:E,radData:r})]}),children:[N.jsxs(De.DataCell,{children:[!L&&N.jsx(dE,{title:T.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:ra.checkmarkIcon}),L&&N.jsx(jl,{title:T.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:ra.exclamationmarkIcon})]}),N.jsx(De.DataCell,{children:N.jsx(ne,{children:g})}),N.jsx(De.DataCell,{children:N.jsx(ne,{children:G?.fom?N.jsx(sa,{dateStringFom:G.fom,dateStringTom:G.tom}):"-"})}),N.jsx(De.DataCell,{children:N.jsx(ne,{children:N.jsx(x,{id:AD(R,f.length>0)})})}),N.jsx(De.DataCell,{children:N.jsxs(ne,{children:[f.length<2&&I.length===1&&N.jsx(Ot,{dateString:I[0].motattDato}),!D&&f.length>1&&I.length===f.length&&N.jsx(x,{id:"ArbeidsforholdRad.Mottatt"}),(R||D&&I.length<f.length)&&N.jsx(x,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})},AD=(e,n)=>e?"ArbeidsforholdRad.Saksbehandler":n?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",pD=(e,n)=>{if(n?.saksbehandlersVurdering==="MANUELT_OPPRETTET_AV_SAKSBEHANDLER"||n?.saksbehandlersVurdering==="OPPRETT_BASERT_PÅ_INNTEKTSMELDING")return{fom:n.fom,tom:n.tom};const a=e.reduce((r,t)=>({fom:r.fom&&$e(r.fom).isBefore(t.fom)?r.fom:t.fom,tom:r.tom&&$e(r.tom).isAfter(t.tom)?r.tom:t.tom}),{fom:void 0,tom:void 0});return a.fom?a:void 0};kd.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
  FagsakMarkering: FagsakMarkeringType;
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"union",raw:`| '-'
| 'UTDANNING'
| 'FORELDREPENGER'
| 'PERMITTERING'
| 'ANNEN_PERMISJON'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'UTDANNING'"},{name:"literal",value:"'FORELDREPENGER'"},{name:"literal",value:"'PERMITTERING'"},{name:"literal",value:"'ANNEN_PERMISJON'"}],required:!0}},{key:"AktivitetStatus",value:{name:"union",raw:`| 'MIDL_INAKTIV'
| 'AAP'
| 'AT'
| 'DP'
| 'SP_AV_DP'
| 'PSB_AV_DP'
| 'FL'
| 'MS'
| 'SN'
| 'AT_FL'
| 'AT_SN'
| 'FL_SN'
| 'AT_FL_SN'
| 'BA'
| 'KUN_YTELSE'
| 'TY'
| 'VENTELØNN_VARTPENGER'
| '-'`,elements:[{name:"literal",value:"'MIDL_INAKTIV'"},{name:"literal",value:"'AAP'"},{name:"literal",value:"'AT'"},{name:"literal",value:"'DP'"},{name:"literal",value:"'SP_AV_DP'"},{name:"literal",value:"'PSB_AV_DP'"},{name:"literal",value:"'FL'"},{name:"literal",value:"'MS'"},{name:"literal",value:"'SN'"},{name:"literal",value:"'AT_FL'"},{name:"literal",value:"'AT_SN'"},{name:"literal",value:"'FL_SN'"},{name:"literal",value:"'AT_FL_SN'"},{name:"literal",value:"'BA'"},{name:"literal",value:"'KUN_YTELSE'"},{name:"literal",value:"'TY'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'-'"}],required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"union",raw:`| 'ETTERLØNN_SLUTTPAKKE'
| 'FORENKLET_OPPGJØRSORDNING'
| 'FRILANSER'
| 'FRILANSER_OPPDRAGSTAKER'
| 'LØNN_UNDER_UTDANNING'
| 'MARITIMT_ARBEIDSFORHOLD'
| 'MILITÆR_ELLER_SIVILTJENESTE'
| 'ORDINÆRT_ARBEIDSFORHOLD'
| 'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'
| 'NÆRING'
| 'UTENLANDSK_ARBEIDSFORHOLD'
| 'VENTELØNN_VARTPENGER'
| 'VANLIG'
| '-'`,elements:[{name:"literal",value:"'ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FORENKLET_OPPGJØRSORDNING'"},{name:"literal",value:"'FRILANSER'"},{name:"literal",value:"'FRILANSER_OPPDRAGSTAKER'"},{name:"literal",value:"'LØNN_UNDER_UTDANNING'"},{name:"literal",value:"'MARITIMT_ARBEIDSFORHOLD'"},{name:"literal",value:"'MILITÆR_ELLER_SIVILTJENESTE'"},{name:"literal",value:"'ORDINÆRT_ARBEIDSFORHOLD'"},{name:"literal",value:"'PENSJON_OG_ANDRE_TYPER_YTELSER_UTEN_ANSETTELSESFORHOLD'"},{name:"literal",value:"'NÆRING'"},{name:"literal",value:"'UTENLANDSK_ARBEIDSFORHOLD'"},{name:"literal",value:"'VENTELØNN_VARTPENGER'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"Avslagsårsak",value:{name:"union",raw:`| '1001'
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
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!0}},{key:"BehandlingResultatType",value:{name:"union",raw:`| 'IKKE_FASTSATT'
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
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"BehandlingStatus",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"BehandlingType",value:{name:"union",raw:`| 'BT-002'
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
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FamilieHendelseType",value:{name:"union",raw:`| 'ADPSJN'
| 'OMSRGO'
| 'FODSL'
| 'TERM'
| '-'`,elements:[{name:"literal",value:"'ADPSJN'"},{name:"literal",value:"'OMSRGO'"},{name:"literal",value:"'FODSL'"},{name:"literal",value:"'TERM'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FaresignalVurdering",value:{name:"union",raw:`| 'INNVIRKNING'
| 'INNVILGET_REDUSERT'
| 'INNVILGET_UENDRET'
| 'AVSLAG_FARESIGNAL'
| 'AVSLAG_ANNET'
| 'INGEN_INNVIRKNING'
| '-'`,elements:[{name:"literal",value:"'INNVIRKNING'"},{name:"literal",value:"'INNVILGET_REDUSERT'"},{name:"literal",value:"'INNVILGET_UENDRET'"},{name:"literal",value:"'AVSLAG_FARESIGNAL'"},{name:"literal",value:"'AVSLAG_ANNET'"},{name:"literal",value:"'INGEN_INNVIRKNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakStatus",value:{name:"union",raw:"'OPPR' | 'UBEH' | 'LOP' | 'AVSLU'",elements:[{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UBEH'"},{name:"literal",value:"'LOP'"},{name:"literal",value:"'AVSLU'"}],required:!0}},{key:"FagsakYtelseType",value:{name:"union",raw:"'ES' | 'FP' | 'SVP' | '-'",elements:[{name:"literal",value:"'ES'"},{name:"literal",value:"'FP'"},{name:"literal",value:"'SVP'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FagsakMarkering",value:{name:"union",raw:`| 'EØS_BOSATT_NORGE'
| 'BOSATT_UTLAND'
| 'SAMMENSATT_KONTROLL'
| 'DØD_DØDFØDSEL'
| 'PRAKSIS_UTSETTELSE'
| 'BARE_FAR_RETT'
| 'SELVSTENDIG_NÆRING'
| 'HASTER'`,elements:[{name:"literal",value:"'EØS_BOSATT_NORGE'"},{name:"literal",value:"'BOSATT_UTLAND'"},{name:"literal",value:"'SAMMENSATT_KONTROLL'"},{name:"literal",value:"'DØD_DØDFØDSEL'"},{name:"literal",value:"'PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'BARE_FAR_RETT'"},{name:"literal",value:"'SELVSTENDIG_NÆRING'"},{name:"literal",value:"'HASTER'"}],required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"union",raw:`| 'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'
| 'VURDER_SN_NY_I_ARBEIDSLIVET'
| 'VURDER_NYOPPSTARTET_FL'
| 'FASTSETT_MAANEDSINNTEKT_FL'
| 'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_LØNNSENDRING'
| 'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'
| 'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'
| 'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'
| 'VURDER_ETTERLØNN_SLUTTPAKKE'
| 'FASTSETT_ETTERLØNN_SLUTTPAKKE'
| 'VURDER_MOTTAR_YTELSE'
| 'VURDER_BESTEBEREGNING'
| 'VURDER_MILITÆR_SIVILTJENESTE'
| 'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'
| 'FASTSETT_BG_KUN_YTELSE'
| 'TILSTØTENDE_YTELSE'
| 'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'
| '-'`,elements:[{name:"literal",value:"'VURDER_TIDSBEGRENSET_ARBEIDSFORHOLD'"},{name:"literal",value:"'VURDER_SN_NY_I_ARBEIDSLIVET'"},{name:"literal",value:"'VURDER_NYOPPSTARTET_FL'"},{name:"literal",value:"'FASTSETT_MAANEDSINNTEKT_FL'"},{name:"literal",value:"'FASTSETT_BG_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_LØNNSENDRING'"},{name:"literal",value:"'FASTSETT_MÅNEDSLØNN_ARBEIDSTAKER_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'VURDER_AT_OG_FL_I_SAMME_ORGANISASJON'"},{name:"literal",value:"'FASTSETT_BESTEBEREGNING_FØDENDE_KVINNE'"},{name:"literal",value:"'VURDER_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'FASTSETT_ETTERLØNN_SLUTTPAKKE'"},{name:"literal",value:"'VURDER_MOTTAR_YTELSE'"},{name:"literal",value:"'VURDER_BESTEBEREGNING'"},{name:"literal",value:"'VURDER_MILITÆR_SIVILTJENESTE'"},{name:"literal",value:"'VURDER_REFUSJONSKRAV_SOM_HAR_KOMMET_FOR_SENT'"},{name:"literal",value:"'FASTSETT_BG_KUN_YTELSE'"},{name:"literal",value:"'TILSTØTENDE_YTELSE'"},{name:"literal",value:"'FASTSETT_ENDRET_BEREGNINGSGRUNNLAG'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FarSøkerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!0}},{key:"FordelingPeriodeKilde",value:{name:"union",raw:`| 'SØKNAD'
| 'TIDLIGERE_VEDTAK'
| 'ANDRE_NAV_VEDTAK'
| 'SAKSBEHANDLER'`,elements:[{name:"literal",value:"'SØKNAD'"},{name:"literal",value:"'TIDLIGERE_VEDTAK'"},{name:"literal",value:"'ANDRE_NAV_VEDTAK'"},{name:"literal",value:"'SAKSBEHANDLER'"}],required:!0}},{key:"ForeldreType",value:{name:"union",raw:"'MOR' | 'FAR' | 'MEDMOR' | 'ANDRE' | '-'",elements:[{name:"literal",value:"'MOR'"},{name:"literal",value:"'FAR'"},{name:"literal",value:"'MEDMOR'"},{name:"literal",value:"'ANDRE'"},{name:"literal",value:"'-'"}],required:!0}},{key:"HistorikkAktør",value:{name:"union",raw:`| 'BESL'
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const OD="_alertStripe_mucgx_5",kD={alertStripe:OD},yd=({behandling:e,aksjonspunkt:n,readOnly:a,arbeidOgInntekt:r,registrerArbeidsforhold:t,erOverstyrer:l,tabellData:i,settÅpneRadIndexer:s,setErOverstyrt:o,oppdaterTabell:d})=>{const u=er(),{arbeidsforhold:E,inntektsmeldinger:_}=r,[T,I]=v.useState(!1),[f,g]=v.useState(!1),S=()=>{o(!0),I(!0);const D=i.findIndex(k=>k.avklaring?.saksbehandlersVurdering==="MANUELT_OPPRETTET_AV_SAKSBEHANDLER");D!==-1&&s([D])},c=yD(i,n),R=i.every(D=>D.arbeidsgiverIdent!==Ta),A=n?.status==="OPPR";return N.jsxs(ye,{gap:"space-32",children:[N.jsxs(fe,{gap:"space-16",children:[N.jsx(xr,{size:"small",level:"3",children:N.jsx(x,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),l&&A&&!a&&N.jsx(zf,{onClick:S}),N.jsx(yr,{}),N.jsx(ne,{size:"small",children:N.jsx(x,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:oo(r.skjæringstidspunkt)}})})]}),N.jsxs(ye,{gap:"space-16",children:[c.length>0&&N.jsx($f,{children:c.map(D=>u.formatMessage({id:D})).join(" ")}),E.length===0&&_.length===0&&l&&N.jsx("div",{className:kD.alertStripe,children:N.jsx(ca,{variant:"info",children:N.jsx(x,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),T&&R&&!f&&N.jsx("div",{children:N.jsx(ke,{size:"small",variant:"tertiary",icon:N.jsx(bE,{"aria-hidden":!0}),onClick:()=>g(!0),children:N.jsx(x,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})})}),f&&N.jsx(pi,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:t,lukkArbeidsforholdRad:()=>g(!1),oppdaterTabell:d,erOverstyrt:!0,erNyttArbeidsforhold:!0})]})]})},yD=(e,n)=>{const a=e.some(i=>i.årsak===Ve.MANGLENDE_INNTEKTSMELDING),r=e.some(i=>i.årsak===Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),t=n?.status==="OPPR",l=[];return t&&a&&l.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),t&&r&&l.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),l};yd.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const LD="_alertStripe_x50kg_1",bD="_headerRow_x50kg_5",io={alertStripe:LD,headerRow:bD},Ld=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:a,lagreVurdering:r,erOverstyrer:t,settBehandlingPåVentCallback:l,åpneForNyVurdering:i})=>{const[s,o]=v.useState(!1),[d,u]=v.useState(!1),[E,_]=v.useState(!1),{alleKodeverk:T,submitCallback:I,aksjonspunkterForPanel:f,behandling:g,fagsak:S,isReadOnly:c}=Vd(),R=f.length>0?f[0]:void 0,{mellomlagretFormData:A,setMellomlagretFormData:D}=wd(),[k,L]=v.useState(A??Xc(e,n)),[B,M]=v.useState(Xs(k)),G=Hc();v.useEffect(()=>()=>{D(k)},[k]);const w=J=>{B.some(re=>re===J)?M(B.filter(re=>re!==J)):M(B.concat(J))},K=v.useRef(null),O=J=>{L(J),M(Xs(J(k))),K.current?.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},b=()=>{o(!0),I({kode:nn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},P=()=>{o(!0),i()},U=J=>{o(!0),u(!1);const{frist:re,ventearsak:ae}=J;ae&&l({frist:re,ventearsak:ae})},j=k.some(J=>J.avklaring?.saksbehandlersVurdering==="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING"||J.avklaring?.saksbehandlersVurdering==="MELDING_TIL_ARBEIDSGIVER_NAV_NO"||J.avklaring?.saksbehandlersVurdering==="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD"),V=k.every(J=>!J.årsak||J.årsak&&J.avklaring),F=R===void 0,Y=R?.status==="UTFO",z=R?.status==="OPPR",te=!c&&(Y||t&&F),Be=!c&&z&&V&&!G&&j,Z=!c&&z&&V&&!G&&!j;return N.jsxs(ye,{gap:"space-16",children:[N.jsx(yd,{behandling:g,aksjonspunkt:R,readOnly:c,arbeidOgInntekt:e,registrerArbeidsforhold:a,erOverstyrer:t,tabellData:k,settÅpneRadIndexer:M,setErOverstyrt:_,oppdaterTabell:O}),N.jsxs(De,{ref:K,children:[N.jsx(De.Header,{children:N.jsxs(De.Row,{className:io.headerRow,children:[N.jsx(De.HeaderCell,{scope:"col"}),N.jsx(De.HeaderCell,{scope:"col",children:N.jsx(x,{id:"ArbeidOgInntektFaktaPanel.Arbeidsforhold"})}),N.jsx(De.HeaderCell,{scope:"col",children:N.jsx(x,{id:"ArbeidOgInntektFaktaPanel.Periode"})}),N.jsx(De.HeaderCell,{scope:"col",children:N.jsx(x,{id:"ArbeidOgInntektFaktaPanel.Kilde"})}),N.jsx(De.HeaderCell,{scope:"col",children:N.jsx(x,{id:"ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt"})}),N.jsx(De.HeaderCell,{scope:"col"})]})}),N.jsx(De.Body,{children:k.map((J,re)=>N.jsx(kd,{saksnummer:S.saksnummer,behandlingUuid:g.uuid,behandlingVersjon:g.versjon,radData:J,skjæringstidspunkt:e.skjæringstidspunkt,isReadOnly:c||Y||F,registrerArbeidsforhold:a,lagreVurdering:r,toggleÅpenRad:()=>w(re),erOverstyrt:E,oppdaterTabell:O,erRadÅpen:B.includes(re),alleKodeverk:T},`${J.arbeidsgiverNavn}${J.arbeidsgiverIdent}`))})]}),Be&&N.jsxs("div",{children:[N.jsx(ke,{size:"small",variant:"primary",disabled:s,onClick:()=>u(!0),type:"button",children:N.jsx(x,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),N.jsx(_d,{submitCallback:U,cancelEvent:()=>u(!1),defaultVenteårsak:Ye.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:T.Venteårsak,erTilbakekreving:!1,showModal:d,frist:null})]}),Z&&N.jsx("div",{children:N.jsx(ke,{size:"small",variant:"primary",disabled:s,loading:s,onClick:b,type:"button",children:N.jsx(x,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})})}),te&&N.jsxs(ye,{gap:"space-16",children:[N.jsx("div",{className:io.alertStripe,children:N.jsx(ca,{variant:"info",children:N.jsx(x,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),N.jsx("div",{children:N.jsx(ke,{size:"small",variant:"secondary",disabled:s,loading:s,onClick:P,type:"button",children:N.jsx(x,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})})]})]})};Ld.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const MD={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?"},hD=Hn(MD),Kl=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:a,lagreVurdering:r,erOverstyrer:t,settBehandlingPåVentCallback:l,åpneForNyVurdering:i})=>N.jsx(Gl,{value:hD,children:N.jsx(Td,{children:N.jsx(Ld,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:a,lagreVurdering:r,erOverstyrer:t,settBehandlingPåVentCallback:l,åpneForNyVurdering:i})})});Kl.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:qa}=__STORYBOOK_MODULE_ACTIONS__,Fn="342352362",Xe={innsendingstidspunkt:"2021-12-06T00:00:00",kildeSystem:"Altinn",bortfalteNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",behandlingsIdeer:[],tilknyttedeBehandlingIder:[],aktiveNaturalytelser:[]},Ke={arbeidsgiverIdent:Fn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31"},BD={title:"fakta/fakta-arbeid-og-inntekter",component:Kl,decorators:[Ud,jd],args:{arbeidsgiverOpplysningerPerId:{},lagreVurdering:qa("onLagreVurdering"),registrerArbeidsforhold:qa("onRegistrerArbeidsforhold"),åpneForNyVurdering:qa("onÅpneForNyVurdering"),settBehandlingPåVentCallback:qa("onSettBehandlingPåVentCallback"),erOverstyrer:!1},render:e=>N.jsx(Kl,{...e})},Ha={args:{aksjonspunkterForPanel:[{definisjon:nn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:"OPPR"}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ve.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Mr.VELFERDSPERMISJON}}],inntektsmeldinger:[],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:41e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},xa={args:{aksjonspunkterForPanel:[{definisjon:nn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:"OPPR"}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ve.MANGLENDE_INNTEKTSMELDING}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Ja={args:{aksjonspunkterForPanel:[{definisjon:nn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:"UTFO"}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:"KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",begrunnelse:"Vil innehente inntektsmelding fordi..."}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},Ya={args:{aksjonspunkterForPanel:[{definisjon:nn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:"OPPR"}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[{...Xe,inntektPrMnd:3e4,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Ca={args:{aksjonspunkterForPanel:[{definisjon:nn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:"UTFO"}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:"OPPRETT_BASERT_PÅ_INNTEKTSMELDING",begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},$a={args:{aksjonspunkterForPanel:[{definisjon:nn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:"UTFO"}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:"OPPRETT_BASERT_PÅ_INNTEKTSMELDING",begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},Wa={args:{aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:"KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING"}],inntektsmeldinger:[{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",journalpostId:"1",dokumentId:"2"}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},za={args:{aksjonspunkterForPanel:[{definisjon:nn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:"OPPR"}],arbeidsgiverOpplysningerPerId:{},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},Xa={args:{arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Qa={args:{aksjonspunkterForPanel:[{definisjon:nn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:"OPPR"}],arbeidsgiverOpplysningerPerId:{[Fn]:{erPrivatPerson:!1,identifikator:Fn,navn:"Telenor",referanse:Fn}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:Fn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:"MANUELT_OPPRETTET_AV_SAKSBEHANDLER"}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},Za={args:{arbeidsgiverOpplysningerPerId:{[Fn]:{erPrivatPerson:!1,identifikator:Fn,navn:"Telenor",referanse:Fn}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,...Ke,arbeidsgiverIdent:Fn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:"MANUELT_OPPRETTET_AV_SAKSBEHANDLER"}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0,isReadOnly:!0}},et={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Mr.VELFERDSPERMISJON}}],inntektsmeldinger:[{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},nt={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31"},{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",fom:"2021-12-01",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",stillingsprosent:80,tom:"9999-12-31"}],inntektsmeldinger:[{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",inntektPrMnd:1e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"41925090",motattDato:"2021-11-06",journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},rt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:nn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:"OPPR"}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"},910909092:{erPrivatPerson:!1,identifikator:"910909092",navn:"DNB",referanse:"910909092"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31"},{...Ke,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING}],inntektsmeldinger:[{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Xe,arbeidsgiverIdent:"910909092",inntektPrMnd:1e4,kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"55599999",motattDato:"2021-12-06",refusjonPrMnd:5e3,journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:31e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:3e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:3e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:3e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},at={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:nn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:"OPPR"}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"9374546382674846453452720241327384837356378478393893847474783",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING},{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING}],inntektsmeldinger:[{...Xe,inntektPrMnd:3e4,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001sdsfdsdfsdfwer",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8cwds",kontaktpersonNavn:"Espen Solstråle",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"1",motattDato:"2021-12-01",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD},{...Xe,inntektPrMnd:3e4,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c8wew",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},tt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:nn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:"OPPR"}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",type:Mr.PERMITTERING}},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d3",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Mr.VELFERDSPERMISJON},saksbehandlersVurdering:"-"}],inntektsmeldinger:[{...Xe,inntektPrMnd:3e4,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},lt={args:{erOverstyrer:!0,isReadOnly:!0,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[{...Xe,inntektPrMnd:4e4,arbeidsgiverIdent:"947064649",kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975324",dokumentId:"549168225",motattDato:"2022-02-15"}],arbeidsforhold:[],inntekter:[],skjæringstidspunkt:"2022-02-16"}}},it={args:{erOverstyrer:!1,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[],arbeidsforhold:[{...Ke,arbeidsgiverIdent:"947064649",internArbeidsforholdId:"f98840f3-e74b-4255-ac33-b1cdcdb60311",eksternArbeidsforholdId:"2",fom:"2002-02-16",tom:"9999-12-31",stillingsprosent:20}],inntekter:[],skjæringstidspunkt:"2022-02-05"}}},st={args:{erOverstyrer:!1,aksjonspunkterForPanel:[{definisjon:nn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:"OPPR"}],arbeidsgiverOpplysningerPerId:{342352362:{erPrivatPerson:!1,referanse:"342352362",identifikator:"342352362",navn:"Lagt til av saksbehandler"},947064649:{erPrivatPerson:!1,referanse:"947064649",identifikator:"947064649",navn:"SJOKKERENDE ELEKTRIKER"},972674818:{erPrivatPerson:!1,referanse:"972674818",identifikator:"972674818",navn:"PENGELØS SPAREBANK"}},arbeidOgInntekt:{inntektsmeldinger:[{...Xe,inntektPrMnd:2e4,arbeidsgiverIdent:"972674818",kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975527",dokumentId:"549168458",motattDato:"2022-02-16",begrunnelse:"her vil jeg mase på AG",saksbehandlersVurdering:"KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING"}],arbeidsforhold:[{...Ke,arbeidsgiverIdent:"947064649",internArbeidsforholdId:"6e220db0-5cdf-410f-b8a0-a78ac4ff87a1",eksternArbeidsforholdId:"2",fom:"2018-10-01",tom:"9999-12-31",stillingsprosent:50,årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:"FORTSETT_UTEN_INNTEKTSMELDING",begrunnelse:"her trenger jeg ikke IM. ja ja"},{...Ke,arbeidsgiverIdent:"972674818",internArbeidsforholdId:"3aee54db-af17-4b18-8c9c-897be1f4d572",eksternArbeidsforholdId:"1",fom:"2000-05-13",tom:"9999-12-31"}],inntekter:[{arbeidsgiverIdent:"947064649",inntekter:[{beløp:15e3,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]},{arbeidsgiverIdent:"972674818",inntekter:[{beløp:2e4,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]}],skjæringstidspunkt:"2022-02-15"}}},ot={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!0,fødselsdato:"2000-01-01",identifikator:"910909088",navn:"Bettan",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Ke,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Mr.VELFERDSPERMISJON}}],inntektsmeldinger:[{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}};Ha.parameters={...Ha.parameters,docs:{...Ha.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: 'OPPR'
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
}`,...Ha.parameters?.docs?.source}}};xa.parameters={...xa.parameters,docs:{...xa.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: 'OPPR'
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
}`,...xa.parameters?.docs?.source}}};Ja.parameters={...Ja.parameters,docs:{...Ja.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: 'UTFO'
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
        saksbehandlersVurdering: 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING',
        begrunnelse: 'Vil innehente inntektsmelding fordi...'
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    isReadOnly: true
  }
}`,...Ja.parameters?.docs?.source}}};Ya.parameters={...Ya.parameters,docs:{...Ya.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: 'OPPR'
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
}`,...Ya.parameters?.docs?.source}}};Ca.parameters={...Ca.parameters,docs:{...Ca.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: 'UTFO'
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
        saksbehandlersVurdering: 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING',
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
}`,...Ca.parameters?.docs?.source}}};$a.parameters={...$a.parameters,docs:{...$a.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: 'UTFO'
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
        saksbehandlersVurdering: 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING',
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
}`,...$a.parameters?.docs?.source}}};Wa.parameters={...Wa.parameters,docs:{...Wa.parameters?.docs,source:{originalSource:`{
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
}`,...Wa.parameters?.docs?.source}}};za.parameters={...za.parameters,docs:{...za.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: 'OPPR'
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
}`,...za.parameters?.docs?.source}}};Xa.parameters={...Xa.parameters,docs:{...Xa.parameters?.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...Xa.parameters?.docs?.source}}};Qa.parameters={...Qa.parameters,docs:{...Qa.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: 'OPPR'
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
        saksbehandlersVurdering: 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    erOverstyrer: true
  }
}`,...Qa.parameters?.docs?.source}}};Za.parameters={...Za.parameters,docs:{...Za.parameters?.docs,source:{originalSource:`{
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
        saksbehandlersVurdering: 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'
      }],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    },
    erOverstyrer: true,
    isReadOnly: true
  }
}`,...Za.parameters?.docs?.source}}};et.parameters={...et.parameters,docs:{...et.parameters?.docs,source:{originalSource:`{
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
}`,...et.parameters?.docs?.source}}};nt.parameters={...nt.parameters,docs:{...nt.parameters?.docs,source:{originalSource:`{
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
}`,...nt.parameters?.docs?.source}}};rt.parameters={...rt.parameters,docs:{...rt.parameters?.docs,source:{originalSource:`{
  args: {
    erOverstyrer: true,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: 'OPPR'
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
}`,...rt.parameters?.docs?.source}}};at.parameters={...at.parameters,docs:{...at.parameters?.docs,source:{originalSource:`{
  args: {
    erOverstyrer: true,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: 'OPPR'
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
}`,...at.parameters?.docs?.source}}};tt.parameters={...tt.parameters,docs:{...tt.parameters?.docs,source:{originalSource:`{
  args: {
    erOverstyrer: true,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: 'OPPR'
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
}`,...tt.parameters?.docs?.source}}};lt.parameters={...lt.parameters,docs:{...lt.parameters?.docs,source:{originalSource:`{
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
}`,...lt.parameters?.docs?.source}}};it.parameters={...it.parameters,docs:{...it.parameters?.docs,source:{originalSource:`{
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
}`,...it.parameters?.docs?.source}}};st.parameters={...st.parameters,docs:{...st.parameters?.docs,source:{originalSource:`{
  args: {
    erOverstyrer: false,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,
      status: 'OPPR'
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
        saksbehandlersVurdering: 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
        saksbehandlersVurdering: 'FORTSETT_UTEN_INNTEKTSMELDING',
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
}`,...st.parameters?.docs?.source}}};ot.parameters={...ot.parameters,docs:{...ot.parameters?.docs,source:{originalSource:`{
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
}`,...ot.parameters?.docs?.source}}};const FD=["InnhentInntektsmelding","InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret","InnhentInntektsmeldingDerBehandlingErAvsluttet","AvklarManglendeArbeidsforhold","AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet","AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig","IngenAksjonspunktMenTilbakehoppMuligForOverstyrer","SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer","SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer","ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet","ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet","ArbeidsforholdErOK","ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet","FlereArbeidsforholdOgInntekstemeldinger","ArbeidsforholdMedSammeOrgNr","ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre","FoerRegisterinnhenting","AutomatiskIgnorertInntektsmelding","EtterAtEtterspurtInntektsmeldingErKommet","SkalViseFødselsnummerForPrivatperson"];export{Za as ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet,Qa as ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet,et as ArbeidsforholdErOK,nt as ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet,at as ArbeidsforholdMedSammeOrgNr,tt as ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre,it as AutomatiskIgnorertInntektsmelding,Ya as AvklarManglendeArbeidsforhold,Ca as AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet,$a as AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig,st as EtterAtEtterspurtInntektsmeldingErKommet,rt as FlereArbeidsforholdOgInntekstemeldinger,lt as FoerRegisterinnhenting,Wa as IngenAksjonspunktMenTilbakehoppMuligForOverstyrer,Ha as InnhentInntektsmelding,Ja as InnhentInntektsmeldingDerBehandlingErAvsluttet,xa as InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret,Xa as SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer,za as SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer,ot as SkalViseFødselsnummerForPrivatperson,FD as __namedExportsOrder,BD as default};
