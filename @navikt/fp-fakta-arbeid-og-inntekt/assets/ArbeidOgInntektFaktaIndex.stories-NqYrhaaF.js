import{g as xo,r as m,u as Xn,_ as di,s as ui,c as it,a as ee,R as p,b as bs,d as ot,T as nu,S as _r,m as ru,e as Mr,f as Fo,h as gr,W as tu,Q as su,o as Vo,A as au,i as We,P as Dn,n as jt,j as k,t as un,O as Zr,F as iu,E as ou,k as gi,l as Lo,p as Co,q as Bo,v as Ko,w as ja,x as Ea,M as Ta,J as Go,y as He,z as lu,B as du,C as uu,D as gu}from"./iframe-BsQc_k2e.js";import{r as mu}from"./index-Bq2pkqLL.js";var Oa=mu();const ts=xo(Oa);function cu(e,n){var t=e.values,r=di(e,["values"]),s=n.values,a=di(n,["values"]);return ui(s,t)&&ui(r,a)}function Uo(e){var n=Xn(),t=n.formatMessage,r=n.textComponent,s=r===void 0?m.Fragment:r,a=e.id,i=e.description,o=e.defaultMessage,l=e.values,u=e.children,d=e.tagName,g=d===void 0?s:d,c=e.ignoreTag,f={id:a,description:i,defaultMessage:o},y=t(f,l,{ignoreTag:c});return typeof u=="function"?u(Array.isArray(y)?y:[y]):g?m.createElement(g,null,y):m.createElement(m.Fragment,null,y)}Uo.displayName="FormattedMessage";var W=m.memo(Uo,cu);W.displayName="MemoizedFormattedMessage";var rn=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(rn||{}),me=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(me||{}),Ye=(e=>(e.AVV_DOK="AVV_DOK",e.AVV_FODSEL="AVV_FODSEL",e.UTV_FRIST="UTV_FRIST",e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG="VENT_PÅ_TILBAKEKREVINGSGRUNNLAG",e.VENT_PÅ_BRUKERTILBAKEMELDING="VENT_PÅ_BRUKERTILBAKEMELDING",e.VENT_UTLAND_TRYGD="VENT_UTLAND_TRYGD",e.UTVIDET_TILSVAR_FRIST="UTV_TIL_FRIST",e.ENDRE_TILKJENT_YTELSE="ENDRE_TILKJENT_YTELSE",e.VENT_PÅ_MULIG_MOTREGNING="VENT_PÅ_MULIG_MOTREGNING",e.AVV_RESPONS_REVURDERING="AVV_RESPONS_REVURDERING",e.FOR_TIDLIG_SOKNAD="FOR_TIDLIG_SOKNAD",e.VENT_PÅ_SISTE_AAP_ELLER_DP_MELDEKORT="VENT_PÅ_SISTE_AAP_MELDEKORT",e.ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER="ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",e.ANKE_OVERSENDT_TIL_TRYGDERETTEN="ANKE_OVERSENDT_TIL_TRYGDERETTEN",e.VENT_PÅ_KORRIGERT_BESTEBEREGNING="VENT_PÅ_KORRIGERT_BESTEBEREGNING",e.VENT_OPDT_INNTEKTSMELDING="VENT_OPDT_INNTEKTSMELDING",e.VENT_OPPTJENING_OPPLYSNINGER="VENT_OPPTJENING_OPPLYSNINGER",e.VENT_INNTEKT_RAPPORTERINGSFRIST="VENT_INNTEKT_RAPPORTERINGSFRIST",e.VENT_MANGLENDE_SYKEMELDING="VENT_MANGLENDE_SYKEMELDING",e.VENT_SØKNAD_SENDT_INFORMASJONSBREV="VENT_SØKNAD_SENDT_INFORMASJONSBREV",e.VENT_ÅPEN_BEHANDLING="VENT_ÅPEN_BEHANDLING",e.VENT_KABAL="VENT_KABAL",e))(Ye||{}),Tr=(e=>(e.PERMISJON="PERMISJON",e.PERMITTERING="PERMITTERING",e.PERMISJON_VED_MILITÆRTJENESTE="PERMISJON_VED_MILITÆRTJENESTE",e.UTDANNINGSPERMISJON_LOVFESTET="UTDANNINGSPERMISJON_LOVFESTET",e.UTDANNINGSPERMISJON="UTDANNINGSPERMISJON",e.UTDANNINGSPERMISJON_IKKE_LOVFESTET="UTDANNINGSPERMISJON_IKKE_LOVFESTET",e.VELFERDSPERMISJON="VELFERDSPERMISJON",e.ANNEN_PERMISJON_LOVFESTET="ANNEN_PERMISJON_LOVFESTET",e.PERMISJON_MED_FORELDREPENGER="PERMISJON_MED_FORELDREPENGER",e.ANNEN_PERMISJON_IKKE_LOVFESTET="ANNEN_PERMISJON_IKKE_LOVFESTET",e))(Tr||{});const fu=(e,n,t)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${n}&dokumentId=${t}`,ku=(e,n,t)=>{const r=window.open(e,n);r&&setTimeout(()=>{r.document.title=t},1e3)},Dr=e=>it({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var pu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Ho=m.forwardRef((e,n)=>{var{className:t,size:r="medium",as:s="p",spacing:a,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,g=pu(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:c}=ee();return p.createElement(s,Object.assign({},g,{ref:n,className:c(t,"navds-body-long",`navds-body-long--${r}`,Dr({spacing:a,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var vu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const ne=m.forwardRef((e,n)=>{var{className:t,size:r="medium",as:s="p",spacing:a,truncate:i,weight:o="regular",align:l,visuallyHidden:u,textColor:d}=e,g=vu(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:c}=ee();return p.createElement(s,Object.assign({},g,{ref:n,className:c(t,"navds-body-short",`navds-body-short--${r}`,Dr({spacing:a,truncate:i,weight:o,align:l,visuallyHidden:u,textColor:d}))}))});var yu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Or=m.forwardRef((e,n)=>{var{className:t,size:r="medium",spacing:s,uppercase:a,as:i="p",truncate:o,weight:l="regular",align:u,visuallyHidden:d,textColor:g}=e,c=yu(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:f}=ee();return p.createElement(i,Object.assign({},c,{ref:n,className:f(t,"navds-detail",Dr({spacing:s,truncate:o,weight:l,align:u,visuallyHidden:d,textColor:g,uppercase:a}),{"navds-detail--small":r==="small"})}))});var bu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const lt=m.forwardRef((e,n)=>{var{children:t,className:r,size:s,spacing:a,as:i="p",showIcon:o=!1}=e,l=bu(e,["children","className","size","spacing","as","showIcon"]);const{cn:u}=ee();return p.createElement(i,Object.assign({},l,{ref:n,className:u("navds-error-message","navds-label",r,Dr({spacing:a}),{"navds-label--small":s==="small","navds-error-message--show-icon":o})}),o&&p.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},p.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var hu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const hs=m.forwardRef((e,n)=>{var{level:t="1",size:r,className:s,as:a,spacing:i,align:o,visuallyHidden:l,textColor:u}=e,d=hu(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:g}=ee(),c=a??`h${t}`;return p.createElement(c,Object.assign({},d,{ref:n,className:g(s,"navds-heading",`navds-heading--${r}`,Dr({spacing:i,align:o,visuallyHidden:l,textColor:u}))}))});var Iu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};m.forwardRef((e,n)=>{var{className:t,spacing:r,as:s="p"}=e,a=Iu(e,["className","spacing","as"]);const{cn:i}=ee();return p.createElement(s,Object.assign({},a,{ref:n,className:i(t,"navds-ingress",{"navds-typo--spacing":!!r})}))});var wu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const we=m.forwardRef((e,n)=>{var{className:t,size:r="medium",as:s="label",spacing:a,visuallyHidden:i,textColor:o}=e,l=wu(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:u}=ee();return p.createElement(s,Object.assign({},l,{ref:n,className:u(t,"navds-label",Dr({spacing:a,visuallyHidden:i,textColor:o}),{"navds-label--small":r==="small"})}))});function Yo(e,n=166,t=!1){let r;function s(...a){const i=()=>{r=void 0,e.apply(this,a)};!r&&t&&i(),clearTimeout(r),r=setTimeout(i,n)}return s.clear=()=>{clearTimeout(r)},s}function Xe(e,n){const t=Object.entries(e).filter(([r])=>!n.includes(r));return Object.fromEntries(t)}const Nr=globalThis?.document?m.useLayoutEffect:()=>{};let mi=0;function Au(e){const[n,t]=m.useState(e),r=e||n;return m.useEffect(()=>{n==null&&(mi+=1,t(`aksel-id-${mi}`))},[n]),r}const ci=p.useId;function hn(e){var n;if(ci!==void 0){const t=ci();return e??t.replace(/(:)/g,"")}return(n=Au(e))!==null&&n!==void 0?n:""}function et(e,n=[]){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useCallback((...r)=>{var s;return(s=t.current)===null||s===void 0?void 0:s.call(t,...r)},n)}function nt({value:e,defaultValue:n,onChange:t}){const r=et(t),[s,a]=m.useState(n),i=e!==void 0,o=i?e:s,l=et(u=>{const g=typeof u=="function"?u(o):u;i||a(g),r(g)},[i,r,o]);return[o,l]}let fi=0;function ju(e){const[n,t]=m.useState(e),r=e||n;return m.useEffect(()=>{n==null&&(fi+=1,t(`aksel-icon-${fi}`))},[n]),r}const ki=p.useId;function Oe(e){var n;return ki!==void 0?ki().replace(/(:)/g,""):(n=ju(e))!==null&&n!==void 0?n:""}var Eu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Tu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=Eu(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",d:"M4.47 11.47a.75.75 0 0 0 0 1.06l4.5 4.5a.75.75 0 0 0 1.06-1.06l-3.22-3.22H19a.75.75 0 0 0 0-1.5H6.81l3.22-3.22a.75.75 0 1 0-1.06-1.06z"}))});var Ou=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Nu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=Ou(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",d:"M14.087 6.874a.752.752 0 0 0-.117 1.156l3.22 3.22H5a.75.75 0 0 0 0 1.5h12.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-.943-.096"}))});var Ru=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Pu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=Ru(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var qu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const _u=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=qu(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Mu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Du=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=Mu(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var Su=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const xu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=Su(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Fu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Is=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=Fu(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Vu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const $o=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=Vu(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var Lu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Na=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=Lu(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Cu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Bu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=Cu(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var Ku=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Gu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=Ku(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Uu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Hu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=Uu(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.6 3.068c-1.28-.487-2.1-1.686-2.1-3.068a3.257 3.257 0 0 1 3.276-3.264 3.26 3.26 0 0 1 3.271 3.264c0 1.353-.83 2.554-2.559 3.242a.75.75 0 0 0-.472.697v1.235a.75.75 0 0 0 .212.523l1.482 1.522-1.215 1.991a.75.75 0 0 0 .123.934l.592.564-1.982 2.214-.145-.132v-9.021a.75.75 0 0 0-.483-.701m-.327-3.13a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var Yu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const $u=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=Yu(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.273-.063a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var Wu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Wo=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=Wu(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var zu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Ju=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=zu(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Xu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Qu=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=Xu(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var Zu=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const eg=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=Zu(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var ng=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const zo=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=ng(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var rg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const tg=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=rg(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var sg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const ag=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=sg(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var ig=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const og=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=ig(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var lg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Jo=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=lg(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var dg=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const ug=m.forwardRef((e,n)=>{var{title:t,titleId:r}=e,s=dg(e,["title","titleId"]);let a=Oe();return a=t?r||"title-"+a:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:n,"aria-labelledby":a},s),t?m.createElement("title",{id:a},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function wr(e,n,{checkForDefaultPrevented:t=!0}={}){return function(s){if(e?.(s),t===!1||!s.defaultPrevented)return n?.(s)}}const[gg,dt]=bs({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),mg=typeof window<"u"&&window.matchMedia===void 0,cg=(e,n)=>{const[t,r]=m.useState(n);return m.useEffect(()=>{if(mg)return;const s=window.matchMedia(e);r(s.matches);const a=i=>{r(i.matches)};return s.addEventListener("change",a),()=>{s.removeEventListener("change",a)}},[e]),t};function mn(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function ze(e){return(n,t)=>{const r=t?.context?String(t.context):"standalone";let s;if(r==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,o=t?.width?String(t.width):i;s=e.formattingValues[o]||e.formattingValues[i]}else{const i=e.defaultWidth,o=t?.width?String(t.width):e.defaultWidth;s=e.values[o]||e.values[i]}const a=e.argumentCallback?e.argumentCallback(n):n;return s[a]}}function Je(e){return(n,t={})=>{const r=t.width,s=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=n.match(s);if(!a)return null;const i=a[0],o=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?kg(o,g=>g.test(i)):fg(o,g=>g.test(i));let u;u=e.valueCallback?e.valueCallback(l):l,u=t.valueCallback?t.valueCallback(u):u;const d=n.slice(i.length);return{value:u,rest:d}}}function fg(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function kg(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function Ra(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const s=r[0],a=n.match(e.parsePattern);if(!a)return null;let i=e.valueCallback?e.valueCallback(a[0]):a[0];i=t.valueCallback?t.valueCallback(i):i;const o=n.slice(s.length);return{value:i,rest:o}}}const Xo=6048e5,pg=864e5,vg=6e4,yg=36e5,bg=1e3,pi=Symbol.for("constructDateFrom");function ke(e,n){return typeof e=="function"?e(n):e&&typeof e=="object"&&pi in e?e[pi](n):e instanceof Date?new e.constructor(n):new Date(n)}function Sr(e,...n){const t=ke.bind(null,n.find(r=>typeof r=="object"));return n.map(t)}let hg={};function mr(){return hg}function ie(e,n){return ke(n||e,e)}function Cn(e,n){const t=mr(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,s=ie(e,n?.in),a=s.getDay(),i=(a<r?7:0)+a-r;return s.setDate(s.getDate()-i),s.setHours(0,0,0,0),s}const Ig={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Qo=(e,n,t)=>{let r;const s=Ig[e];return typeof s=="string"?r=s:n===1?r=s.one:r=s.other.replace("{{count}}",n.toString()),t?.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r},wg={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Zo=(e,n,t,r)=>wg[e],Ag={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},jg={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Eg={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Tg={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Og={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Ng={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Rg=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},el={ordinalNumber:Rg,era:ze({values:Ag,defaultWidth:"wide"}),quarter:ze({values:jg,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ze({values:Eg,defaultWidth:"wide"}),day:ze({values:Tg,defaultWidth:"wide"}),dayPeriod:ze({values:Og,defaultWidth:"wide",formattingValues:Ng,defaultFormattingWidth:"wide"})},Pg=/^(\d+)(th|st|nd|rd)?/i,qg=/\d+/i,_g={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Mg={any:[/^b/i,/^(a|c)/i]},Dg={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Sg={any:[/1/i,/2/i,/3/i,/4/i]},xg={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Fg={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Vg={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Lg={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Cg={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Bg={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},nl={ordinalNumber:Ra({matchPattern:Pg,parsePattern:qg,valueCallback:e=>parseInt(e,10)}),era:Je({matchPatterns:_g,defaultMatchWidth:"wide",parsePatterns:Mg,defaultParseWidth:"any"}),quarter:Je({matchPatterns:Dg,defaultMatchWidth:"wide",parsePatterns:Sg,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Je({matchPatterns:xg,defaultMatchWidth:"wide",parsePatterns:Fg,defaultParseWidth:"any"}),day:Je({matchPatterns:Vg,defaultMatchWidth:"wide",parsePatterns:Lg,defaultParseWidth:"any"}),dayPeriod:Je({matchPatterns:Cg,defaultMatchWidth:"any",parsePatterns:Bg,defaultParseWidth:"any"})},Kg={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},Gg={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Ug={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Hg={date:mn({formats:Kg,defaultWidth:"full"}),time:mn({formats:Gg,defaultWidth:"full"}),dateTime:mn({formats:Ug,defaultWidth:"full"})},rl={code:"en-GB",formatDistance:Qo,formatLong:Hg,formatRelative:Zo,localize:el,match:nl,options:{weekStartsOn:1,firstWeekContainsDate:4}},Yg={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},$g={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Wg={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},zg={date:mn({formats:Yg,defaultWidth:"full"}),time:mn({formats:$g,defaultWidth:"full"}),dateTime:mn({formats:Wg,defaultWidth:"full"})},ws={code:"en-US",formatDistance:Qo,formatLong:zg,formatRelative:Zo,localize:el,match:nl,options:{weekStartsOn:0,firstWeekContainsDate:1}},Jg={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Xg=(e,n,t)=>{let r;const s=Jg[e];return typeof s=="string"?r=s:n===1?r=s.one:r=s.other.replace("{{count}}",String(n)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+r:r+" siden":r},Qg={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Zg={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},em={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},nm={date:mn({formats:Qg,defaultWidth:"full"}),time:mn({formats:Zg,defaultWidth:"full"}),dateTime:mn({formats:em,defaultWidth:"full"})},rm={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},tm=(e,n,t,r)=>rm[e],sm={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},am={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},im={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},om={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},lm={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},dm=(e,n)=>Number(e)+".",um={ordinalNumber:dm,era:ze({values:sm,defaultWidth:"wide"}),quarter:ze({values:am,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ze({values:im,defaultWidth:"wide"}),day:ze({values:om,defaultWidth:"wide"}),dayPeriod:ze({values:lm,defaultWidth:"wide"})},gm=/^(\d+)\.?/i,mm=/\d+/i,cm={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},fm={any:[/^f/i,/^e/i]},km={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},pm={any:[/1/i,/2/i,/3/i,/4/i]},vm={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},ym={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},bm={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},hm={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Im={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},wm={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Am={ordinalNumber:Ra({matchPattern:gm,parsePattern:mm,valueCallback:e=>parseInt(e,10)}),era:Je({matchPatterns:cm,defaultMatchWidth:"wide",parsePatterns:fm,defaultParseWidth:"any"}),quarter:Je({matchPatterns:km,defaultMatchWidth:"wide",parsePatterns:pm,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Je({matchPatterns:vm,defaultMatchWidth:"wide",parsePatterns:ym,defaultParseWidth:"any"}),day:Je({matchPatterns:bm,defaultMatchWidth:"wide",parsePatterns:hm,defaultParseWidth:"any"}),dayPeriod:Je({matchPatterns:Im,defaultMatchWidth:"any",parsePatterns:wm,defaultParseWidth:"any"})},tl={code:"nb",formatDistance:Xg,formatLong:nm,formatRelative:tm,localize:um,match:Am,options:{weekStartsOn:1,firstWeekContainsDate:4}},jm={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},Em=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],Tm=(e,n,t)=>{let r;const s=jm[e];return typeof s=="string"?r=s:n===1?r=s.one:r=s.other.replace("{{count}}",n<13?Em[n]:String(n)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+r:r+" sidan":r},Om={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Nm={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Rm={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Pm={date:mn({formats:Om,defaultWidth:"full"}),time:mn({formats:Nm,defaultWidth:"full"}),dateTime:mn({formats:Rm,defaultWidth:"full"})},qm={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},_m=(e,n,t,r)=>qm[e],Mm={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Dm={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Sm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},xm={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},Fm={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},Vm=(e,n)=>Number(e)+".",Lm={ordinalNumber:Vm,era:ze({values:Mm,defaultWidth:"wide"}),quarter:ze({values:Dm,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ze({values:Sm,defaultWidth:"wide"}),day:ze({values:xm,defaultWidth:"wide"}),dayPeriod:ze({values:Fm,defaultWidth:"wide"})},Cm=/^(\d+)\.?/i,Bm=/\d+/i,Km={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Gm={any:[/^f/i,/^e/i]},Um={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Hm={any:[/1/i,/2/i,/3/i,/4/i]},Ym={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},$m={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Wm={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},zm={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},Jm={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},Xm={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Qm={ordinalNumber:Ra({matchPattern:Cm,parsePattern:Bm,valueCallback:e=>parseInt(e,10)}),era:Je({matchPatterns:Km,defaultMatchWidth:"wide",parsePatterns:Gm,defaultParseWidth:"any"}),quarter:Je({matchPatterns:Um,defaultMatchWidth:"wide",parsePatterns:Hm,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Je({matchPatterns:Ym,defaultMatchWidth:"wide",parsePatterns:$m,defaultParseWidth:"any"}),day:Je({matchPatterns:Wm,defaultMatchWidth:"wide",parsePatterns:zm,defaultParseWidth:"any"}),dayPeriod:Je({matchPatterns:Jm,defaultMatchWidth:"any",parsePatterns:Xm,defaultParseWidth:"any"})},sl={code:"nn",formatDistance:Tm,formatLong:Pm,formatRelative:_m,localize:Lm,match:Qm,options:{weekStartsOn:1,firstWeekContainsDate:4}},Zm={global:{dateLocale:tl,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},ec=m.createContext({locale:Zm}),As=()=>m.useContext(ec);var nc=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const rc=m.forwardRef((e,n)=>{var t,r,s,{rootElement:a,asChild:i}=e,o=nc(e,["rootElement","asChild"]);const l=ot(!1),u=(t=As())===null||t===void 0?void 0:t.rootElement,d=(r=a??u)!==null&&r!==void 0?r:(s=globalThis?.document)===null||s===void 0?void 0:s.body,g=i?_r:"div";return l?d?ts.createPortal(p.createElement(nu,{theme:l.theme,asChild:!0,hasBackground:!1,"data-color":l.color},p.createElement(g,Object.assign({ref:n,"data-aksel-portal":""},o))),d):null:d?ts.createPortal(p.createElement(g,Object.assign({ref:n,"data-aksel-portal":""},o)),d):null});function vi(e){return e.sort((n,t)=>{const r=n.compareDocumentPosition(t);if(r&Node.DOCUMENT_POSITION_FOLLOWING||r&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(r&Node.DOCUMENT_POSITION_PRECEDING||r&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(r&Node.DOCUMENT_POSITION_DISCONNECTED||r&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const tc=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function yi(e,n,t){let r=e+1;return t&&r>=n&&(r=0),r}function bi(e,n,t){let r=e-1;return t&&r<0&&(r=n),r}const Ks=e=>e;class sc{constructor(){this.descendants=new Map,this.register=n=>{if(n!=null)return tc(n)?this.registerNode(n):t=>{this.registerNode(t,n)}},this.unregister=n=>{this.descendants.delete(n);const t=vi(Array.from(this.descendants.keys()));this.assignIndex(t)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=n=>{this.descendants.forEach(t=>{const r=n.indexOf(t.node);t.index=r,t.node.dataset.index=t.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((t,r)=>t.index-r.index),this.enabledValues=()=>this.values().filter(n=>!n.disabled),this.item=n=>{if(this.count()!==0)return this.values()[n]},this.enabledItem=n=>{if(this.enabledCount()!==0)return this.enabledValues()[n]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const n=this.enabledValues().length-1;return this.enabledItem(n)},this.indexOf=n=>{var t,r;return n&&(r=(t=this.descendants.get(n))===null||t===void 0?void 0:t.index)!==null&&r!==void 0?r:-1},this.enabledIndexOf=n=>n==null?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(n)),this.next=(n,t=!0)=>{const r=yi(n,this.count(),t);return this.item(r)},this.nextEnabled=(n,t=!0)=>{const r=this.item(n);if(!r)return;const s=this.enabledIndexOf(r.node),a=yi(s,this.enabledCount(),t);return this.enabledItem(a)},this.prev=(n,t=!0)=>{const r=bi(n,this.count()-1,t);return this.item(r)},this.prevEnabled=(n,t=!0)=>{const r=this.item(n);if(!r)return;const s=this.enabledIndexOf(r.node),a=bi(s,this.enabledCount()-1,t);return this.enabledItem(a)},this.registerNode=(n,t)=>{if(!n)return;const r=this.descendants.get(n);if(r){this.descendants.set(n,Object.assign({index:r.index,node:n},t));return}const s=Array.from(this.descendants.keys()).concat(n),a=vi(s);t?.disabled&&(t.disabled=!!t.disabled);const i=Object.assign({node:n,index:-1},t);this.descendants.set(n,i),this.assignIndex(a)}}}function ac(){const[e,n]=bs({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),t=Ks(a=>p.createElement(e,Object.assign({},a.value),a.children));function r(a){const i=n(),[o,l]=m.useState(-1),u=m.useRef(null);Nr(()=>()=>{u.current&&i.unregister(u.current)},[]),Nr(()=>{if(!u.current)return;const g=Number(u.current.dataset.index);o!==g&&!Number.isNaN(g)&&l(g)});const d=Ks(a?i.register(a):i.register);return{descendants:i,index:o,enabledIndex:i.enabledIndexOf(u.current),register:ru([d,u])}}function s(){return m.useRef(new sc).current}return[t,n,s,r]}function ic(e,n=globalThis?.document){const t=et(e);m.useEffect(()=>{const r=s=>{s.key==="Escape"&&t(s)};return n.addEventListener("keydown",r,!0),()=>n.removeEventListener("keydown",r,!0)},[t,n])}const al={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function il(e,n,t,{discrete:r}={discrete:!1}){if(!n)return;const s=t.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});s.addEventListener(e,n,{once:!0}),r&&s?ts.flushSync(()=>s.dispatchEvent(a)):s.dispatchEvent(a)}function oc(e,n=globalThis?.document){const t=et(e),r=m.useRef(!1);return m.useEffect(()=>{const s=a=>{if(a.target&&!r.current){const i={originalEvent:a};il(al.FOCUS_OUTSIDE,t,i)}};return n.addEventListener("focusin",s),()=>n.removeEventListener("focusin",s)},[n,t]),{onFocusCapture:()=>{r.current=!0},onBlurCapture:()=>{r.current=!1}}}function lc(e,n=globalThis?.document){const t=et(e),r=m.useRef(!1),s=m.useRef(()=>{});return m.useEffect(()=>{const a=o=>{function l(){il(al.POINTER_DOWN_OUTSIDE,t,{originalEvent:o},{discrete:!0})}o.target&&!r.current?o.pointerType==="touch"?(n.removeEventListener("click",s.current),s.current=l,n.addEventListener("click",s.current,{once:!0})):l():n.removeEventListener("click",s.current),r.current=!1},i=window.setTimeout(()=>{n.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(i),n.removeEventListener("pointerdown",a),n.removeEventListener("click",s.current)}},[n,t]),{onPointerDownCapture:()=>{r.current=!0}}}var dc=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const[uc,gc,mc,cc]=ac();let pr=0,hi;const fc=m.forwardRef((e,n)=>gc(!1)?p.createElement(Ii,Object.assign({ref:n},e)):p.createElement(kc,null,p.createElement(Ii,Object.assign({ref:n},e)))),kc=({children:e})=>{const n=mc();return p.createElement(uc,{value:n},e)},Ii=m.forwardRef((e,n)=>{var t,{children:r,asChild:s,onEscapeKeyDown:a,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:l,onDismiss:u,safeZone:d,disableOutsidePointerEvents:g=!1,enabled:c=!0}=e,f=dc(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,y]=m.useState({}),{register:w,index:v,descendants:A}=cc({disableOutsidePointerEvents:g,disabled:!c,forceUpdate:()=>y({})}),[h,b]=m.useState(null),j=Mr(b,w,n),I=(t=h?.ownerDocument)!==null&&t!==void 0?t:globalThis?.document,O=m.useRef(!1),N=m.useRef(!1),x=(()=>{let T=-1;return A.enabledValues().forEach((D,C)=>{D.disableOutsidePointerEvents&&(T=C)}),{isPointerEventsEnabled:v>=T,isBodyPointerEventsDisabled:pr>0,pointerStyle:v>=T&&pr>0?"auto":void 0}})();function q(T){var P,D;if(!d?.anchor&&!d?.dismissable||!c)return;T.defaultPrevented||(O.current=!0,T.detail.originalEvent.type==="pointerdown"&&(N.current=!0));const C=T.target;T.detail.originalEvent.type==="pointerdown"?(!((P=d?.anchor)===null||P===void 0)&&P.contains(C)||C===d?.anchor)&&T.preventDefault():!(C instanceof HTMLElement&&![d?.anchor,d?.dismissable].some(V=>V?.contains(C))&&!C.contains((D=d?.dismissable)!==null&&D!==void 0?D:null))&&T.preventDefault(),T.detail.originalEvent.type==="focusin"&&N.current&&T.preventDefault(),N.current=!1,O.current=!1}const F=lc(T=>{!x.isPointerEventsEnabled||!c||(i?.(T),l?.(T),d&&q(T),!T.defaultPrevented&&u&&u())},I),L=oc(T=>{c&&(o?.(T),l?.(T),d&&q(T),!T.defaultPrevented&&u&&u())},I);ic(T=>{!c||!(v===A.enabledCount()-1)||(a?.(T),!T.defaultPrevented&&u&&(T.preventDefault(),u()))},I),m.useEffect(()=>{if(!(!h||!c||!g))return pr===0&&(hi=I.body.style.pointerEvents,I.body.style.pointerEvents="none"),pr++,()=>{pr===1&&(I.body.style.pointerEvents=hi),pr--}},[h,I,g,A,c]),m.useEffect(()=>()=>A.values().forEach(T=>T.forceUpdate()),[A,h]);const _=s?_r:"div";return p.createElement(_,Object.assign({ref:j},f,{onFocusCapture:L.onFocusCapture,onBlurCapture:L.onBlurCapture,onPointerDownCapture:F.onPointerDownCapture,style:Object.assign({pointerEvents:x.pointerStyle},f.style)}),r)}),Rr=Math.min,ar=Math.max,ss=Math.round,Et=Math.floor,Nn=e=>({x:e,y:e}),pc={left:"right",right:"left",bottom:"top",top:"bottom"},vc={start:"end",end:"start"};function la(e,n,t){return ar(e,Rr(n,t))}function ut(e,n){return typeof e=="function"?e(n):e}function ir(e){return e.split("-")[0]}function gt(e){return e.split("-")[1]}function ol(e){return e==="x"?"y":"x"}function Pa(e){return e==="y"?"height":"width"}function Pr(e){return["top","bottom"].includes(ir(e))?"y":"x"}function qa(e){return ol(Pr(e))}function yc(e,n,t){t===void 0&&(t=!1);const r=gt(e),s=qa(e),a=Pa(s);let i=s==="x"?r===(t?"end":"start")?"right":"left":r==="start"?"bottom":"top";return n.reference[a]>n.floating[a]&&(i=as(i)),[i,as(i)]}function bc(e){const n=as(e);return[da(e),n,da(n)]}function da(e){return e.replace(/start|end/g,n=>vc[n])}function hc(e,n,t){const r=["left","right"],s=["right","left"],a=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return t?n?s:r:n?r:s;case"left":case"right":return n?a:i;default:return[]}}function Ic(e,n,t,r){const s=gt(e);let a=hc(ir(e),t==="start",r);return s&&(a=a.map(i=>i+"-"+s),n&&(a=a.concat(a.map(da)))),a}function as(e){return e.replace(/left|right|bottom|top/g,n=>pc[n])}function wc(e){return{top:0,right:0,bottom:0,left:0,...e}}function ll(e){return typeof e!="number"?wc(e):{top:e,right:e,bottom:e,left:e}}function is(e){const{x:n,y:t,width:r,height:s}=e;return{width:r,height:s,top:t,left:n,right:n+r,bottom:t+s,x:n,y:t}}function wi(e,n,t){let{reference:r,floating:s}=e;const a=Pr(n),i=qa(n),o=Pa(i),l=ir(n),u=a==="y",d=r.x+r.width/2-s.width/2,g=r.y+r.height/2-s.height/2,c=r[o]/2-s[o]/2;let f;switch(l){case"top":f={x:d,y:r.y-s.height};break;case"bottom":f={x:d,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:g};break;case"left":f={x:r.x-s.width,y:g};break;default:f={x:r.x,y:r.y}}switch(gt(n)){case"start":f[i]-=c*(t&&u?-1:1);break;case"end":f[i]+=c*(t&&u?-1:1);break}return f}const Ac=async(e,n,t)=>{const{placement:r="bottom",strategy:s="absolute",middleware:a=[],platform:i}=t,o=a.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(n));let u=await i.getElementRects({reference:e,floating:n,strategy:s}),{x:d,y:g}=wi(u,r,l),c=r,f={},y=0;for(let w=0;w<o.length;w++){const{name:v,fn:A}=o[w],{x:h,y:b,data:j,reset:I}=await A({x:d,y:g,initialPlacement:r,placement:c,strategy:s,middlewareData:f,rects:u,platform:i,elements:{reference:e,floating:n}});d=h??d,g=b??g,f={...f,[v]:{...f[v],...j}},I&&y<=50&&(y++,typeof I=="object"&&(I.placement&&(c=I.placement),I.rects&&(u=I.rects===!0?await i.getElementRects({reference:e,floating:n,strategy:s}):I.rects),{x:d,y:g}=wi(u,c,l)),w=-1)}return{x:d,y:g,placement:c,strategy:s,middlewareData:f}};async function dl(e,n){var t;n===void 0&&(n={});const{x:r,y:s,platform:a,rects:i,elements:o,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:g="floating",altBoundary:c=!1,padding:f=0}=ut(n,e),y=ll(f),v=o[c?g==="floating"?"reference":"floating":g],A=is(await a.getClippingRect({element:(t=await(a.isElement==null?void 0:a.isElement(v)))==null||t?v:v.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(o.floating)),boundary:u,rootBoundary:d,strategy:l})),h=g==="floating"?{x:r,y:s,width:i.floating.width,height:i.floating.height}:i.reference,b=await(a.getOffsetParent==null?void 0:a.getOffsetParent(o.floating)),j=await(a.isElement==null?void 0:a.isElement(b))?await(a.getScale==null?void 0:a.getScale(b))||{x:1,y:1}:{x:1,y:1},I=is(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:h,offsetParent:b,strategy:l}):h);return{top:(A.top-I.top+y.top)/j.y,bottom:(I.bottom-A.bottom+y.bottom)/j.y,left:(A.left-I.left+y.left)/j.x,right:(I.right-A.right+y.right)/j.x}}const jc=e=>({name:"arrow",options:e,async fn(n){const{x:t,y:r,placement:s,rects:a,platform:i,elements:o,middlewareData:l}=n,{element:u,padding:d=0}=ut(e,n)||{};if(u==null)return{};const g=ll(d),c={x:t,y:r},f=qa(s),y=Pa(f),w=await i.getDimensions(u),v=f==="y",A=v?"top":"left",h=v?"bottom":"right",b=v?"clientHeight":"clientWidth",j=a.reference[y]+a.reference[f]-c[f]-a.floating[y],I=c[f]-a.reference[f],O=await(i.getOffsetParent==null?void 0:i.getOffsetParent(u));let N=O?O[b]:0;(!N||!await(i.isElement==null?void 0:i.isElement(O)))&&(N=o.floating[b]||a.floating[y]);const x=j/2-I/2,q=N/2-w[y]/2-1,F=Rr(g[A],q),L=Rr(g[h],q),_=F,T=N-w[y]-L,P=N/2-w[y]/2+x,D=la(_,P,T),C=!l.arrow&&gt(s)!=null&&P!==D&&a.reference[y]/2-(P<_?F:L)-w[y]/2<0,B=C?P<_?P-_:P-T:0;return{[f]:c[f]+B,data:{[f]:D,centerOffset:P-D-B,...C&&{alignmentOffset:B}},reset:C}}}),Ec=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var t,r;const{placement:s,middlewareData:a,rects:i,initialPlacement:o,platform:l,elements:u}=n,{mainAxis:d=!0,crossAxis:g=!0,fallbackPlacements:c,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:w=!0,...v}=ut(e,n);if((t=a.arrow)!=null&&t.alignmentOffset)return{};const A=ir(s),h=Pr(o),b=ir(o)===o,j=await(l.isRTL==null?void 0:l.isRTL(u.floating)),I=c||(b||!w?[as(o)]:bc(o)),O=y!=="none";!c&&O&&I.push(...Ic(o,w,y,j));const N=[o,...I],x=await dl(n,v),q=[];let F=((r=a.flip)==null?void 0:r.overflows)||[];if(d&&q.push(x[A]),g){const P=yc(s,i,j);q.push(x[P[0]],x[P[1]])}if(F=[...F,{placement:s,overflows:q}],!q.every(P=>P<=0)){var L,_;const P=(((L=a.flip)==null?void 0:L.index)||0)+1,D=N[P];if(D)return{data:{index:P,overflows:F},reset:{placement:D}};let C=(_=F.filter(B=>B.overflows[0]<=0).sort((B,V)=>B.overflows[1]-V.overflows[1])[0])==null?void 0:_.placement;if(!C)switch(f){case"bestFit":{var T;const B=(T=F.filter(V=>{if(O){const S=Pr(V.placement);return S===h||S==="y"}return!0}).map(V=>[V.placement,V.overflows.filter(S=>S>0).reduce((S,H)=>S+H,0)]).sort((V,S)=>V[1]-S[1])[0])==null?void 0:T[0];B&&(C=B);break}case"initialPlacement":C=o;break}if(s!==C)return{reset:{placement:C}}}return{}}}};async function Tc(e,n){const{placement:t,platform:r,elements:s}=e,a=await(r.isRTL==null?void 0:r.isRTL(s.floating)),i=ir(t),o=gt(t),l=Pr(t)==="y",u=["left","top"].includes(i)?-1:1,d=a&&l?-1:1,g=ut(n,e);let{mainAxis:c,crossAxis:f,alignmentAxis:y}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:g.mainAxis||0,crossAxis:g.crossAxis||0,alignmentAxis:g.alignmentAxis};return o&&typeof y=="number"&&(f=o==="end"?y*-1:y),l?{x:f*d,y:c*u}:{x:c*u,y:f*d}}const Oc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var t,r;const{x:s,y:a,placement:i,middlewareData:o}=n,l=await Tc(n,e);return i===((t=o.offset)==null?void 0:t.placement)&&(r=o.arrow)!=null&&r.alignmentOffset?{}:{x:s+l.x,y:a+l.y,data:{...l,placement:i}}}}},Nc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:t,y:r,placement:s}=n,{mainAxis:a=!0,crossAxis:i=!1,limiter:o={fn:v=>{let{x:A,y:h}=v;return{x:A,y:h}}},...l}=ut(e,n),u={x:t,y:r},d=await dl(n,l),g=Pr(ir(s)),c=ol(g);let f=u[c],y=u[g];if(a){const v=c==="y"?"top":"left",A=c==="y"?"bottom":"right",h=f+d[v],b=f-d[A];f=la(h,f,b)}if(i){const v=g==="y"?"top":"left",A=g==="y"?"bottom":"right",h=y+d[v],b=y-d[A];y=la(h,y,b)}const w=o.fn({...n,[c]:f,[g]:y});return{...w,data:{x:w.x-t,y:w.y-r,enabled:{[c]:a,[g]:i}}}}}};function js(){return typeof window<"u"}function xr(e){return ul(e)?(e.nodeName||"").toLowerCase():"#document"}function nn(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Pn(e){var n;return(n=(ul(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function ul(e){return js()?e instanceof Node||e instanceof nn(e).Node:!1}function be(e){return js()?e instanceof Element||e instanceof nn(e).Element:!1}function an(e){return js()?e instanceof HTMLElement||e instanceof nn(e).HTMLElement:!1}function os(e){return!js()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof nn(e).ShadowRoot}function mt(e){const{overflow:n,overflowX:t,overflowY:r,display:s}=cn(e);return/auto|scroll|overlay|hidden|clip/.test(n+r+t)&&!["inline","contents"].includes(s)}function Rc(e){return["table","td","th"].includes(xr(e))}function Es(e){return[":popover-open",":modal"].some(n=>{try{return e.matches(n)}catch{return!1}})}function _a(e){const n=Ts(),t=be(e)?cn(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>t[r]?t[r]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!n&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!n&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(t.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(t.contain||"").includes(r))}function Pc(e){let n=Bn(e);for(;an(n)&&!Vn(n);){if(_a(n))return n;if(Es(n))return null;n=Bn(n)}return null}function Ts(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Vn(e){return["html","body","#document"].includes(xr(e))}function cn(e){return nn(e).getComputedStyle(e)}function Os(e){return be(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Bn(e){if(xr(e)==="html")return e;const n=e.assignedSlot||e.parentNode||os(e)&&e.host||Pn(e);return os(n)?n.host:n}function gl(e){const n=Bn(e);return Vn(n)?e.ownerDocument?e.ownerDocument.body:e.body:an(n)&&mt(n)?n:gl(n)}function Jn(e,n,t){var r;n===void 0&&(n=[]),t===void 0&&(t=!0);const s=gl(e),a=s===((r=e.ownerDocument)==null?void 0:r.body),i=nn(s);if(a){const o=ua(i);return n.concat(i,i.visualViewport||[],mt(s)?s:[],o&&t?Jn(o):[])}return n.concat(s,Jn(s,[],t))}function ua(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ml(e){const n=cn(e);let t=parseFloat(n.width)||0,r=parseFloat(n.height)||0;const s=an(e),a=s?e.offsetWidth:t,i=s?e.offsetHeight:r,o=ss(t)!==a||ss(r)!==i;return o&&(t=a,r=i),{width:t,height:r,$:o}}function Ma(e){return be(e)?e:e.contextElement}function Ar(e){const n=Ma(e);if(!an(n))return Nn(1);const t=n.getBoundingClientRect(),{width:r,height:s,$:a}=ml(n);let i=(a?ss(t.width):t.width)/r,o=(a?ss(t.height):t.height)/s;return(!i||!Number.isFinite(i))&&(i=1),(!o||!Number.isFinite(o))&&(o=1),{x:i,y:o}}const qc=Nn(0);function cl(e){const n=nn(e);return!Ts()||!n.visualViewport?qc:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function _c(e,n,t){return n===void 0&&(n=!1),!t||n&&t!==nn(e)?!1:n}function or(e,n,t,r){n===void 0&&(n=!1),t===void 0&&(t=!1);const s=e.getBoundingClientRect(),a=Ma(e);let i=Nn(1);n&&(r?be(r)&&(i=Ar(r)):i=Ar(e));const o=_c(a,t,r)?cl(a):Nn(0);let l=(s.left+o.x)/i.x,u=(s.top+o.y)/i.y,d=s.width/i.x,g=s.height/i.y;if(a){const c=nn(a),f=r&&be(r)?nn(r):r;let y=c,w=ua(y);for(;w&&r&&f!==y;){const v=Ar(w),A=w.getBoundingClientRect(),h=cn(w),b=A.left+(w.clientLeft+parseFloat(h.paddingLeft))*v.x,j=A.top+(w.clientTop+parseFloat(h.paddingTop))*v.y;l*=v.x,u*=v.y,d*=v.x,g*=v.y,l+=b,u+=j,y=nn(w),w=ua(y)}}return is({width:d,height:g,x:l,y:u})}function Da(e,n){const t=Os(e).scrollLeft;return n?n.left+t:or(Pn(e)).left+t}function fl(e,n,t){t===void 0&&(t=!1);const r=e.getBoundingClientRect(),s=r.left+n.scrollLeft-(t?0:Da(e,r)),a=r.top+n.scrollTop;return{x:s,y:a}}function Mc(e){let{elements:n,rect:t,offsetParent:r,strategy:s}=e;const a=s==="fixed",i=Pn(r),o=n?Es(n.floating):!1;if(r===i||o&&a)return t;let l={scrollLeft:0,scrollTop:0},u=Nn(1);const d=Nn(0),g=an(r);if((g||!g&&!a)&&((xr(r)!=="body"||mt(i))&&(l=Os(r)),an(r))){const f=or(r);u=Ar(r),d.x=f.x+r.clientLeft,d.y=f.y+r.clientTop}const c=i&&!g&&!a?fl(i,l,!0):Nn(0);return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-l.scrollLeft*u.x+d.x+c.x,y:t.y*u.y-l.scrollTop*u.y+d.y+c.y}}function Dc(e){return Array.from(e.getClientRects())}function Sc(e){const n=Pn(e),t=Os(e),r=e.ownerDocument.body,s=ar(n.scrollWidth,n.clientWidth,r.scrollWidth,r.clientWidth),a=ar(n.scrollHeight,n.clientHeight,r.scrollHeight,r.clientHeight);let i=-t.scrollLeft+Da(e);const o=-t.scrollTop;return cn(r).direction==="rtl"&&(i+=ar(n.clientWidth,r.clientWidth)-s),{width:s,height:a,x:i,y:o}}function xc(e,n){const t=nn(e),r=Pn(e),s=t.visualViewport;let a=r.clientWidth,i=r.clientHeight,o=0,l=0;if(s){a=s.width,i=s.height;const u=Ts();(!u||u&&n==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:a,height:i,x:o,y:l}}function Fc(e,n){const t=or(e,!0,n==="fixed"),r=t.top+e.clientTop,s=t.left+e.clientLeft,a=an(e)?Ar(e):Nn(1),i=e.clientWidth*a.x,o=e.clientHeight*a.y,l=s*a.x,u=r*a.y;return{width:i,height:o,x:l,y:u}}function Ai(e,n,t){let r;if(n==="viewport")r=xc(e,t);else if(n==="document")r=Sc(Pn(e));else if(be(n))r=Fc(n,t);else{const s=cl(e);r={x:n.x-s.x,y:n.y-s.y,width:n.width,height:n.height}}return is(r)}function kl(e,n){const t=Bn(e);return t===n||!be(t)||Vn(t)?!1:cn(t).position==="fixed"||kl(t,n)}function Vc(e,n){const t=n.get(e);if(t)return t;let r=Jn(e,[],!1).filter(o=>be(o)&&xr(o)!=="body"),s=null;const a=cn(e).position==="fixed";let i=a?Bn(e):e;for(;be(i)&&!Vn(i);){const o=cn(i),l=_a(i);!l&&o.position==="fixed"&&(s=null),(a?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||mt(i)&&!l&&kl(e,i))?r=r.filter(d=>d!==i):s=o,i=Bn(i)}return n.set(e,r),r}function Lc(e){let{element:n,boundary:t,rootBoundary:r,strategy:s}=e;const i=[...t==="clippingAncestors"?Es(n)?[]:Vc(n,this._c):[].concat(t),r],o=i[0],l=i.reduce((u,d)=>{const g=Ai(n,d,s);return u.top=ar(g.top,u.top),u.right=Rr(g.right,u.right),u.bottom=Rr(g.bottom,u.bottom),u.left=ar(g.left,u.left),u},Ai(n,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Cc(e){const{width:n,height:t}=ml(e);return{width:n,height:t}}function Bc(e,n,t){const r=an(n),s=Pn(n),a=t==="fixed",i=or(e,!0,a,n);let o={scrollLeft:0,scrollTop:0};const l=Nn(0);if(r||!r&&!a)if((xr(n)!=="body"||mt(s))&&(o=Os(n)),r){const c=or(n,!0,a,n);l.x=c.x+n.clientLeft,l.y=c.y+n.clientTop}else s&&(l.x=Da(s));const u=s&&!r&&!a?fl(s,o):Nn(0),d=i.left+o.scrollLeft-l.x-u.x,g=i.top+o.scrollTop-l.y-u.y;return{x:d,y:g,width:i.width,height:i.height}}function Gs(e){return cn(e).position==="static"}function ji(e,n){if(!an(e)||cn(e).position==="fixed")return null;if(n)return n(e);let t=e.offsetParent;return Pn(e)===t&&(t=t.ownerDocument.body),t}function pl(e,n){const t=nn(e);if(Es(e))return t;if(!an(e)){let s=Bn(e);for(;s&&!Vn(s);){if(be(s)&&!Gs(s))return s;s=Bn(s)}return t}let r=ji(e,n);for(;r&&Rc(r)&&Gs(r);)r=ji(r,n);return r&&Vn(r)&&Gs(r)&&!_a(r)?t:r||Pc(e)||t}const Kc=async function(e){const n=this.getOffsetParent||pl,t=this.getDimensions,r=await t(e.floating);return{reference:Bc(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Gc(e){return cn(e).direction==="rtl"}const Uc={convertOffsetParentRelativeRectToViewportRelativeRect:Mc,getDocumentElement:Pn,getClippingRect:Lc,getOffsetParent:pl,getElementRects:Kc,getClientRects:Dc,getDimensions:Cc,getScale:Ar,isElement:be,isRTL:Gc};function vl(e,n){return e.x===n.x&&e.y===n.y&&e.width===n.width&&e.height===n.height}function Hc(e,n){let t=null,r;const s=Pn(e);function a(){var o;clearTimeout(r),(o=t)==null||o.disconnect(),t=null}function i(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),a();const u=e.getBoundingClientRect(),{left:d,top:g,width:c,height:f}=u;if(o||n(),!c||!f)return;const y=Et(g),w=Et(s.clientWidth-(d+c)),v=Et(s.clientHeight-(g+f)),A=Et(d),b={rootMargin:-y+"px "+-w+"px "+-v+"px "+-A+"px",threshold:ar(0,Rr(1,l))||1};let j=!0;function I(O){const N=O[0].intersectionRatio;if(N!==l){if(!j)return i();N?i(!1,N):r=setTimeout(()=>{i(!1,1e-7)},1e3)}N===1&&!vl(u,e.getBoundingClientRect())&&i(),j=!1}try{t=new IntersectionObserver(I,{...b,root:s.ownerDocument})}catch{t=new IntersectionObserver(I,b)}t.observe(e)}return i(!0),a}function ga(e,n,t,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:a=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=Ma(e),d=s||a?[...u?Jn(u):[],...Jn(n)]:[];d.forEach(A=>{s&&A.addEventListener("scroll",t,{passive:!0}),a&&A.addEventListener("resize",t)});const g=u&&o?Hc(u,t):null;let c=-1,f=null;i&&(f=new ResizeObserver(A=>{let[h]=A;h&&h.target===u&&f&&(f.unobserve(n),cancelAnimationFrame(c),c=requestAnimationFrame(()=>{var b;(b=f)==null||b.observe(n)})),t()}),u&&!l&&f.observe(u),f.observe(n));let y,w=l?or(e):null;l&&v();function v(){const A=or(e);w&&!vl(w,A)&&t(),w=A,y=requestAnimationFrame(v)}return t(),()=>{var A;d.forEach(h=>{s&&h.removeEventListener("scroll",t),a&&h.removeEventListener("resize",t)}),g?.(),(A=f)==null||A.disconnect(),f=null,l&&cancelAnimationFrame(y)}}const Yc=Oc,$c=Nc,Wc=Ec,Ei=jc,zc=(e,n,t)=>{const r=new Map,s={platform:Uc,...t},a={...s.platform,_c:r};return Ac(e,n,{...s,platform:a})};var ns=typeof document<"u"?m.useLayoutEffect:m.useEffect;function ls(e,n){if(e===n)return!0;if(typeof e!=typeof n)return!1;if(typeof e=="function"&&e.toString()===n.toString())return!0;let t,r,s;if(e&&n&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==n.length)return!1;for(r=t;r--!==0;)if(!ls(e[r],n[r]))return!1;return!0}if(s=Object.keys(e),t=s.length,t!==Object.keys(n).length)return!1;for(r=t;r--!==0;)if(!{}.hasOwnProperty.call(n,s[r]))return!1;for(r=t;r--!==0;){const a=s[r];if(!(a==="_owner"&&e.$$typeof)&&!ls(e[a],n[a]))return!1}return!0}return e!==e&&n!==n}function yl(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ti(e,n){const t=yl(e);return Math.round(n*t)/t}function Us(e){const n=m.useRef(e);return ns(()=>{n.current=e}),n}function Jc(e){e===void 0&&(e={});const{placement:n="bottom",strategy:t="absolute",middleware:r=[],platform:s,elements:{reference:a,floating:i}={},transform:o=!0,whileElementsMounted:l,open:u}=e,[d,g]=m.useState({x:0,y:0,strategy:t,placement:n,middlewareData:{},isPositioned:!1}),[c,f]=m.useState(r);ls(c,r)||f(r);const[y,w]=m.useState(null),[v,A]=m.useState(null),h=m.useCallback(V=>{V!==O.current&&(O.current=V,w(V))},[]),b=m.useCallback(V=>{V!==N.current&&(N.current=V,A(V))},[]),j=a||y,I=i||v,O=m.useRef(null),N=m.useRef(null),x=m.useRef(d),q=l!=null,F=Us(l),L=Us(s),_=Us(u),T=m.useCallback(()=>{if(!O.current||!N.current)return;const V={placement:n,strategy:t,middleware:c};L.current&&(V.platform=L.current),zc(O.current,N.current,V).then(S=>{const H={...S,isPositioned:_.current!==!1};P.current&&!ls(x.current,H)&&(x.current=H,Oa.flushSync(()=>{g(H)}))})},[c,n,t,L,_]);ns(()=>{u===!1&&x.current.isPositioned&&(x.current.isPositioned=!1,g(V=>({...V,isPositioned:!1})))},[u]);const P=m.useRef(!1);ns(()=>(P.current=!0,()=>{P.current=!1}),[]),ns(()=>{if(j&&(O.current=j),I&&(N.current=I),j&&I){if(F.current)return F.current(j,I,T);T()}},[j,I,T,F,q]);const D=m.useMemo(()=>({reference:O,floating:N,setReference:h,setFloating:b}),[h,b]),C=m.useMemo(()=>({reference:j,floating:I}),[j,I]),B=m.useMemo(()=>{const V={position:t,left:0,top:0};if(!C.floating)return V;const S=Ti(C.floating,d.x),H=Ti(C.floating,d.y);return o?{...V,transform:"translate("+S+"px, "+H+"px)",...yl(C.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:S,top:H}},[t,o,C.floating,d.x,d.y]);return m.useMemo(()=>({...d,update:T,refs:D,elements:C,floatingStyles:B}),[d,T,D,C,B])}const Xc=e=>{function n(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:r,padding:s}=typeof e=="function"?e(t):e;return r&&n(r)?r.current!=null?Ei({element:r.current,padding:s}).fn(t):{}:r?Ei({element:r,padding:s}).fn(t):{}}}},bl=(e,n)=>({...Yc(e),options:[e,n]}),hl=(e,n)=>({...$c(e),options:[e,n]}),Il=(e,n)=>({...Wc(e),options:[e,n]}),wl=(e,n)=>({...Xc(e),options:[e,n]}),Oi=/(\w+)/g;function Qc(e,n){const t=Array.isArray(e)?e:Zc(e);for(const r of n){if(!r)continue;let s=r;for(let a=0;a<t.length;a++){const i=s[t[a]];i!==void 0&&(s=i)}if(typeof s=="string")return s}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Zc(e){const n=[];let t=Oi.exec(e);for(;t;){const[,r,s]=t;n.push(r||s),t=Oi.exec(e)}return n}const ef=/{[^}]*}/g;function Gn(e,...n){const t=As(),r=t.translations||[],s=[...n,...Array.isArray(r)?r.map(i=>i[e]):[r[e]],t.locale[e]];return(i,o)=>{const l=Qc(i,s);return o?l.replace(ef,u=>{const d=u.substring(1,u.length-1);if(o[d]===void 0){const g=JSON.stringify(o);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${d}'. The following replacements were passed: '${g}'`)}return o[d]}):l}}function Al(){const e=As(),n=e.translations||[],t=Array.isArray(n)?n.map(r=>r.global):[n.global];t.push(e.locale.global);for(const r of t)if(r?.dateLocale)return r.dateLocale;throw new Error("dateLocale not found.")}var nf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const rf=m.forwardRef((e,n)=>{var{className:t,size:r="medium",title:s,transparent:a=!1,variant:i="neutral",id:o,"data-color":l}=e,u=nf(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:d}=ee(),g=hn(),c=Gn("Loader");return p.createElement("svg",Object.assign({"aria-labelledby":o??`loader-${g}`,ref:n,className:d("navds-loader",t,`navds-loader--${r}`,`navds-loader--${i}`,{"navds-loader--transparent":a}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":l??tf(i)},Xe(u,["children"]),{"data-variant":i}),p.createElement("title",{id:o??`loader-${g}`},s||c("title")),p.createElement("circle",{className:d("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),p.createElement("circle",{className:d("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function tf(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var sf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Ne=m.forwardRef((e,n)=>{var{as:t="button",variant:r="primary",className:s,children:a,size:i="medium",loading:o=!1,disabled:l,icon:u,iconPosition:d="left",onKeyUp:g,"data-color":c}=e,f=sf(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:y}=ee(),w=l||o?Xe(f,["href"]):f,v=A=>{A.key===" "&&!l&&!o&&A.currentTarget.click()};return p.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},{"data-color":c??af(r),"data-variant":of(r)},w,{ref:n,onKeyUp:wr(g,v),className:y(s,"navds-button",`navds-button--${r}`,`navds-button--${i}`,{"navds-button--loading":o,"navds-button--icon-only":!!u&&!a,"navds-button--disabled":l??o}),disabled:l??o?!0:void 0}),u&&d==="left"&&p.createElement("span",{className:y("navds-button__icon")},u),o&&p.createElement(rf,{size:i}),a&&p.createElement(we,{as:"span",size:i==="medium"?"medium":"small"},a),u&&d==="right"&&p.createElement("span",{className:y("navds-button__icon")},u))});function af(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function of(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var lf=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const df={error:ug,warning:Na,info:Gu,success:xu},ct=m.forwardRef((e,n)=>{var{children:t,className:r,variant:s,size:a="medium",fullWidth:i=!1,contentMaxWidth:o=!0,inline:l=!1,closeButton:u=!1,onClose:d}=e,g=lf(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:c}=ee(),f=Gn("Alert"),y=df[s];return p.createElement("div",Object.assign({},g,{"data-color":uf(s),"data-variant":s,ref:n,className:c(r,"navds-alert",`navds-alert--${s}`,`navds-alert--${a}`,{"navds-alert--full-width":i,"navds-alert--inline":l,"navds-alert--close-button":u})}),p.createElement(y,{title:f(s),className:c("navds-alert__icon")}),p.createElement(Ho,{as:"div",size:a,className:c("navds-alert__wrapper",o&&"navds-alert__wrapper--maxwidth")},t),u&&!l&&p.createElement("div",{className:c("navds-alert__button-wrapper")},p.createElement(Ne,{className:c("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:d,type:"button",icon:p.createElement(Jo,{title:["error","warning"].includes(s)?f("closeAlert"):f("closeMessage")})})))});function uf(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function ft(e,n,t){const r=ie(e,t?.in);return isNaN(n)?ke(t?.in||e,NaN):(n&&r.setDate(r.getDate()+n),r)}function Sa(e,n,t){const r=ie(e,t?.in);if(isNaN(n))return ke(e,NaN);if(!n)return r;const s=r.getDate(),a=ke(e,r.getTime());a.setMonth(r.getMonth()+n+1,0);const i=a.getDate();return s>=i?a:(r.setFullYear(a.getFullYear(),a.getMonth(),s),r)}function ds(e,n){const t=ie(e,n?.in).getDay();return t===0||t===6}function lr(e,n){return Cn(e,{...n,weekStartsOn:1})}function jl(e,n){const t=ie(e,n?.in),r=t.getFullYear(),s=ke(t,0);s.setFullYear(r+1,0,4),s.setHours(0,0,0,0);const a=lr(s),i=ke(t,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const o=lr(i);return t.getTime()>=a.getTime()?r+1:t.getTime()>=o.getTime()?r:r-1}function us(e){const n=ie(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function Kn(e,n){const t=ie(e,n?.in);return t.setHours(0,0,0,0),t}function Wn(e,n,t){const[r,s]=Sr(t?.in,e,n),a=Kn(r),i=Kn(s),o=+a-us(a),l=+i-us(i);return Math.round((o-l)/pg)}function gf(e,n){const t=jl(e,n),r=ke(e,0);return r.setFullYear(t,0,4),r.setHours(0,0,0,0),lr(r)}function mf(e,n,t){return ft(e,n*7,t)}function xa(e,n,t){return Sa(e,n*12,t)}function cf(e,n){let t,r=n?.in;return e.forEach(s=>{!r&&typeof s=="object"&&(r=ke.bind(null,s));const a=ie(s,r);(!t||t<a||isNaN(+a))&&(t=a)}),ke(r,t||NaN)}function ff(e,n){let t,r=n?.in;return e.forEach(s=>{!r&&typeof s=="object"&&(r=ke.bind(null,s));const a=ie(s,r);(!t||t>a||isNaN(+a))&&(t=a)}),ke(r,t||NaN)}function Fa(e,n,t){const[r,s]=Sr(t?.in,e,n);return+Kn(r)==+Kn(s)}function El(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function kf(e){return!(!El(e)&&typeof e!="number"||isNaN(+ie(e)))}function pf(e,n,t){const[r,s]=Sr(t?.in,e,n),a=r.getFullYear()-s.getFullYear(),i=r.getMonth()-s.getMonth();return a*12+i}function Tl(e,n){const t=ie(e,n?.in),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function vf(e,n){const[t,r]=Sr(e,n.start,n.end);return{start:t,end:r}}function Ol(e,n){const{start:t,end:r}=vf(n?.in,e);let s=+t>+r;const a=s?+t:+r,i=s?r:t;i.setHours(0,0,0,0),i.setDate(1);let o=1;const l=[];for(;+i<=a;)l.push(ke(t,i)),i.setMonth(i.getMonth()+o);return s?l.reverse():l}function dr(e,n){const t=ie(e,n?.in);return t.setDate(1),t.setHours(0,0,0,0),t}function Ns(e,n){const t=ie(e,n?.in),r=t.getFullYear();return t.setFullYear(r+1,0,0),t.setHours(23,59,59,999),t}function kt(e,n){const t=ie(e,n?.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function Nl(e,n){const t=mr(),r=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,s=ie(e,n?.in),a=s.getDay(),i=(a<r?-7:0)+6-(a-r);return s.setDate(s.getDate()+i),s.setHours(23,59,59,999),s}function yf(e,n){return Nl(e,{...n,weekStartsOn:1})}function bf(e,n){const t=ie(e,n?.in);return Wn(t,kt(t))+1}function Va(e,n){const t=ie(e,n?.in),r=+lr(t)-+gf(t);return Math.round(r/Xo)+1}function La(e,n){const t=ie(e,n?.in),r=t.getFullYear(),s=mr(),a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,i=ke(n?.in||e,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);const o=Cn(i,n),l=ke(n?.in||e,0);l.setFullYear(r,0,a),l.setHours(0,0,0,0);const u=Cn(l,n);return+t>=+o?r+1:+t>=+u?r:r-1}function hf(e,n){const t=mr(),r=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??t.firstWeekContainsDate??t.locale?.options?.firstWeekContainsDate??1,s=La(e,n),a=ke(n?.in||e,0);return a.setFullYear(s,0,r),a.setHours(0,0,0,0),Cn(a,n)}function Ca(e,n){const t=ie(e,n?.in),r=+Cn(t,n)-+hf(t,n);return Math.round(r/Xo)+1}function fe(e,n){const t=e<0?"-":"",r=Math.abs(e).toString().padStart(n,"0");return t+r}const $n={y(e,n){const t=e.getFullYear(),r=t>0?t:1-t;return fe(n==="yy"?r%100:r,n.length)},M(e,n){const t=e.getMonth();return n==="M"?String(t+1):fe(t+1,2)},d(e,n){return fe(e.getDate(),n.length)},a(e,n){const t=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,n){return fe(e.getHours()%12||12,n.length)},H(e,n){return fe(e.getHours(),n.length)},m(e,n){return fe(e.getMinutes(),n.length)},s(e,n){return fe(e.getSeconds(),n.length)},S(e,n){const t=n.length,r=e.getMilliseconds(),s=Math.trunc(r*Math.pow(10,t-3));return fe(s,n.length)}},vr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ni={G:function(e,n,t){const r=e.getFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,n,t){if(n==="yo"){const r=e.getFullYear(),s=r>0?r:1-r;return t.ordinalNumber(s,{unit:"year"})}return $n.y(e,n)},Y:function(e,n,t,r){const s=La(e,r),a=s>0?s:1-s;if(n==="YY"){const i=a%100;return fe(i,2)}return n==="Yo"?t.ordinalNumber(a,{unit:"year"}):fe(a,n.length)},R:function(e,n){const t=jl(e);return fe(t,n.length)},u:function(e,n){const t=e.getFullYear();return fe(t,n.length)},Q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"Q":return String(r);case"QQ":return fe(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,n,t){const r=Math.ceil((e.getMonth()+1)/3);switch(n){case"q":return String(r);case"qq":return fe(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,n,t){const r=e.getMonth();switch(n){case"M":case"MM":return $n.M(e,n);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,n,t){const r=e.getMonth();switch(n){case"L":return String(r+1);case"LL":return fe(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,t,r){const s=Ca(e,r);return n==="wo"?t.ordinalNumber(s,{unit:"week"}):fe(s,n.length)},I:function(e,n,t){const r=Va(e);return n==="Io"?t.ordinalNumber(r,{unit:"week"}):fe(r,n.length)},d:function(e,n,t){return n==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):$n.d(e,n)},D:function(e,n,t){const r=bf(e);return n==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):fe(r,n.length)},E:function(e,n,t){const r=e.getDay();switch(n){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,n,t,r){const s=e.getDay(),a=(s-r.weekStartsOn+8)%7||7;switch(n){case"e":return String(a);case"ee":return fe(a,2);case"eo":return t.ordinalNumber(a,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(e,n,t,r){const s=e.getDay(),a=(s-r.weekStartsOn+8)%7||7;switch(n){case"c":return String(a);case"cc":return fe(a,n.length);case"co":return t.ordinalNumber(a,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(e,n,t){const r=e.getDay(),s=r===0?7:r;switch(n){case"i":return String(s);case"ii":return fe(s,n.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,n,t){const s=e.getHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(e,n,t){const r=e.getHours();let s;switch(r===12?s=vr.noon:r===0?s=vr.midnight:s=r/12>=1?"pm":"am",n){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(e,n,t){const r=e.getHours();let s;switch(r>=17?s=vr.evening:r>=12?s=vr.afternoon:r>=4?s=vr.morning:s=vr.night,n){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(e,n,t){if(n==="ho"){let r=e.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return $n.h(e,n)},H:function(e,n,t){return n==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):$n.H(e,n)},K:function(e,n,t){const r=e.getHours()%12;return n==="Ko"?t.ordinalNumber(r,{unit:"hour"}):fe(r,n.length)},k:function(e,n,t){let r=e.getHours();return r===0&&(r=24),n==="ko"?t.ordinalNumber(r,{unit:"hour"}):fe(r,n.length)},m:function(e,n,t){return n==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):$n.m(e,n)},s:function(e,n,t){return n==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):$n.s(e,n)},S:function(e,n){return $n.S(e,n)},X:function(e,n,t){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(n){case"X":return Pi(r);case"XXXX":case"XX":return rr(r);case"XXXXX":case"XXX":default:return rr(r,":")}},x:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"x":return Pi(r);case"xxxx":case"xx":return rr(r);case"xxxxx":case"xxx":default:return rr(r,":")}},O:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+Ri(r,":");case"OOOO":default:return"GMT"+rr(r,":")}},z:function(e,n,t){const r=e.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+Ri(r,":");case"zzzz":default:return"GMT"+rr(r,":")}},t:function(e,n,t){const r=Math.trunc(+e/1e3);return fe(r,n.length)},T:function(e,n,t){return fe(+e,n.length)}};function Ri(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),s=Math.trunc(r/60),a=r%60;return a===0?t+String(s):t+String(s)+n+fe(a,2)}function Pi(e,n){return e%60===0?(e>0?"-":"+")+fe(Math.abs(e)/60,2):rr(e,n)}function rr(e,n=""){const t=e>0?"-":"+",r=Math.abs(e),s=fe(Math.trunc(r/60),2),a=fe(r%60,2);return t+s+n+a}const qi=(e,n)=>{switch(e){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},Rl=(e,n)=>{switch(e){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},If=(e,n)=>{const t=e.match(/(P+)(p+)?/)||[],r=t[1],s=t[2];if(!s)return qi(e,n);let a;switch(r){case"P":a=n.dateTime({width:"short"});break;case"PP":a=n.dateTime({width:"medium"});break;case"PPP":a=n.dateTime({width:"long"});break;case"PPPP":default:a=n.dateTime({width:"full"});break}return a.replace("{{date}}",qi(r,n)).replace("{{time}}",Rl(s,n))},ma={p:Rl,P:If},wf=/^D+$/,Af=/^Y+$/,jf=["D","DD","YY","YYYY"];function Pl(e){return wf.test(e)}function ql(e){return Af.test(e)}function ca(e,n,t){const r=Ef(e,n,t);if(console.warn(r),jf.includes(e))throw new RangeError(r)}function Ef(e,n,t){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Tf=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Of=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Nf=/^'([^]*?)'?$/,Rf=/''/g,Pf=/[a-zA-Z]/;function ur(e,n,t){const r=mr(),s=t?.locale??r.locale??ws,a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,o=ie(e,t?.in);if(!kf(o))throw new RangeError("Invalid time value");let l=n.match(Of).map(d=>{const g=d[0];if(g==="p"||g==="P"){const c=ma[g];return c(d,s.formatLong)}return d}).join("").match(Tf).map(d=>{if(d==="''")return{isToken:!1,value:"'"};const g=d[0];if(g==="'")return{isToken:!1,value:qf(d)};if(Ni[g])return{isToken:!0,value:d};if(g.match(Pf))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return{isToken:!1,value:d}});s.localize.preprocessor&&(l=s.localize.preprocessor(o,l));const u={firstWeekContainsDate:a,weekStartsOn:i,locale:s};return l.map(d=>{if(!d.isToken)return d.value;const g=d.value;(!t?.useAdditionalWeekYearTokens&&ql(g)||!t?.useAdditionalDayOfYearTokens&&Pl(g))&&ca(g,n,String(e));const c=Ni[g[0]];return c(o,g,s.localize,u)}).join("")}function qf(e){const n=e.match(Nf);return n?n[1].replace(Rf,"'"):e}function _f(e,n){const t=ie(e,n?.in),r=t.getFullYear(),s=t.getMonth(),a=ke(t,0);return a.setFullYear(r,s+1,0),a.setHours(0,0,0,0),a.getDate()}function Mf(){return Object.assign({},mr())}function Df(e,n){const t=ie(e,n?.in).getDay();return t===0?7:t}function Ba(e,n){return ie(e,n?.in).getMonth()}function Ka(e,n){return ie(e,n?.in).getFullYear()}function _l(e,n){return+ie(e)>+ie(n)}function pt(e,n){return+ie(e)<+ie(n)}function Sf(e,n){const t=xf(n)?new n(0):ke(n,0);return t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),t.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),t}function xf(e){return typeof e=="function"&&e.prototype?.constructor===e}const Ff=10;class Ml{subPriority=0;validate(n,t){return!0}}class Vf extends Ml{constructor(n,t,r,s,a){super(),this.value=n,this.validateValue=t,this.setValue=r,this.priority=s,a&&(this.subPriority=a)}validate(n,t){return this.validateValue(n,this.value,t)}set(n,t,r){return this.setValue(n,t,this.value,r)}}class Lf extends Ml{priority=Ff;subPriority=-1;constructor(n,t){super(),this.context=n||(r=>ke(t,r))}set(n,t){return t.timestampIsSet?n:ke(n,Sf(n,this.context))}}class de{run(n,t,r,s){const a=this.parse(n,t,r,s);return a?{setter:new Vf(a.value,this.validate,this.set,this.priority,this.subPriority),rest:a.rest}:null}validate(n,t,r){return!0}}class Cf extends de{priority=140;parse(n,t,r){switch(t){case"G":case"GG":case"GGG":return r.era(n,{width:"abbreviated"})||r.era(n,{width:"narrow"});case"GGGGG":return r.era(n,{width:"narrow"});case"GGGG":default:return r.era(n,{width:"wide"})||r.era(n,{width:"abbreviated"})||r.era(n,{width:"narrow"})}}set(n,t,r){return t.era=r,n.setFullYear(r,0,1),n.setHours(0,0,0,0),n}incompatibleTokens=["R","u","t","T"]}const qe={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},jn={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function _e(e,n){return e&&{value:n(e.value),rest:e.rest}}function Te(e,n){const t=n.match(e);return t?{value:parseInt(t[0],10),rest:n.slice(t[0].length)}:null}function En(e,n){const t=n.match(e);if(!t)return null;if(t[0]==="Z")return{value:0,rest:n.slice(1)};const r=t[1]==="+"?1:-1,s=t[2]?parseInt(t[2],10):0,a=t[3]?parseInt(t[3],10):0,i=t[5]?parseInt(t[5],10):0;return{value:r*(s*yg+a*vg+i*bg),rest:n.slice(t[0].length)}}function Dl(e){return Te(qe.anyDigitsSigned,e)}function Re(e,n){switch(e){case 1:return Te(qe.singleDigit,n);case 2:return Te(qe.twoDigits,n);case 3:return Te(qe.threeDigits,n);case 4:return Te(qe.fourDigits,n);default:return Te(new RegExp("^\\d{1,"+e+"}"),n)}}function gs(e,n){switch(e){case 1:return Te(qe.singleDigitSigned,n);case 2:return Te(qe.twoDigitsSigned,n);case 3:return Te(qe.threeDigitsSigned,n);case 4:return Te(qe.fourDigitsSigned,n);default:return Te(new RegExp("^-?\\d{1,"+e+"}"),n)}}function Ga(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function Sl(e,n){const t=n>0,r=t?n:1-n;let s;if(r<=50)s=e||100;else{const a=r+50,i=Math.trunc(a/100)*100,o=e>=a%100;s=e+i-(o?100:0)}return t?s:1-s}function xl(e){return e%400===0||e%4===0&&e%100!==0}class Bf extends de{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(n,t,r){const s=a=>({year:a,isTwoDigitYear:t==="yy"});switch(t){case"y":return _e(Re(4,n),s);case"yo":return _e(r.ordinalNumber(n,{unit:"year"}),s);default:return _e(Re(t.length,n),s)}}validate(n,t){return t.isTwoDigitYear||t.year>0}set(n,t,r){const s=n.getFullYear();if(r.isTwoDigitYear){const i=Sl(r.year,s);return n.setFullYear(i,0,1),n.setHours(0,0,0,0),n}const a=!("era"in t)||t.era===1?r.year:1-r.year;return n.setFullYear(a,0,1),n.setHours(0,0,0,0),n}}class Kf extends de{priority=130;parse(n,t,r){const s=a=>({year:a,isTwoDigitYear:t==="YY"});switch(t){case"Y":return _e(Re(4,n),s);case"Yo":return _e(r.ordinalNumber(n,{unit:"year"}),s);default:return _e(Re(t.length,n),s)}}validate(n,t){return t.isTwoDigitYear||t.year>0}set(n,t,r,s){const a=La(n,s);if(r.isTwoDigitYear){const o=Sl(r.year,a);return n.setFullYear(o,0,s.firstWeekContainsDate),n.setHours(0,0,0,0),Cn(n,s)}const i=!("era"in t)||t.era===1?r.year:1-r.year;return n.setFullYear(i,0,s.firstWeekContainsDate),n.setHours(0,0,0,0),Cn(n,s)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]}class Gf extends de{priority=130;parse(n,t){return gs(t==="R"?4:t.length,n)}set(n,t,r){const s=ke(n,0);return s.setFullYear(r,0,4),s.setHours(0,0,0,0),lr(s)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]}class Uf extends de{priority=130;parse(n,t){return gs(t==="u"?4:t.length,n)}set(n,t,r){return n.setFullYear(r,0,1),n.setHours(0,0,0,0),n}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]}class Hf extends de{priority=120;parse(n,t,r){switch(t){case"Q":case"QQ":return Re(t.length,n);case"Qo":return r.ordinalNumber(n,{unit:"quarter"});case"QQQ":return r.quarter(n,{width:"abbreviated",context:"formatting"})||r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQQ":return r.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(n,{width:"wide",context:"formatting"})||r.quarter(n,{width:"abbreviated",context:"formatting"})||r.quarter(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=1&&t<=4}set(n,t,r){return n.setMonth((r-1)*3,1),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]}class Yf extends de{priority=120;parse(n,t,r){switch(t){case"q":case"qq":return Re(t.length,n);case"qo":return r.ordinalNumber(n,{unit:"quarter"});case"qqq":return r.quarter(n,{width:"abbreviated",context:"standalone"})||r.quarter(n,{width:"narrow",context:"standalone"});case"qqqqq":return r.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(n,{width:"wide",context:"standalone"})||r.quarter(n,{width:"abbreviated",context:"standalone"})||r.quarter(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=1&&t<=4}set(n,t,r){return n.setMonth((r-1)*3,1),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]}class $f extends de{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(n,t,r){const s=a=>a-1;switch(t){case"M":return _e(Te(qe.month,n),s);case"MM":return _e(Re(2,n),s);case"Mo":return _e(r.ordinalNumber(n,{unit:"month"}),s);case"MMM":return r.month(n,{width:"abbreviated",context:"formatting"})||r.month(n,{width:"narrow",context:"formatting"});case"MMMMM":return r.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(n,{width:"wide",context:"formatting"})||r.month(n,{width:"abbreviated",context:"formatting"})||r.month(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=11}set(n,t,r){return n.setMonth(r,1),n.setHours(0,0,0,0),n}}class Wf extends de{priority=110;parse(n,t,r){const s=a=>a-1;switch(t){case"L":return _e(Te(qe.month,n),s);case"LL":return _e(Re(2,n),s);case"Lo":return _e(r.ordinalNumber(n,{unit:"month"}),s);case"LLL":return r.month(n,{width:"abbreviated",context:"standalone"})||r.month(n,{width:"narrow",context:"standalone"});case"LLLLL":return r.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(n,{width:"wide",context:"standalone"})||r.month(n,{width:"abbreviated",context:"standalone"})||r.month(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=0&&t<=11}set(n,t,r){return n.setMonth(r,1),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]}function zf(e,n,t){const r=ie(e,t?.in),s=Ca(r,t)-n;return r.setDate(r.getDate()-s*7),ie(r,t?.in)}class Jf extends de{priority=100;parse(n,t,r){switch(t){case"w":return Te(qe.week,n);case"wo":return r.ordinalNumber(n,{unit:"week"});default:return Re(t.length,n)}}validate(n,t){return t>=1&&t<=53}set(n,t,r,s){return Cn(zf(n,r,s),s)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]}function Xf(e,n,t){const r=ie(e,t?.in),s=Va(r,t)-n;return r.setDate(r.getDate()-s*7),r}class Qf extends de{priority=100;parse(n,t,r){switch(t){case"I":return Te(qe.week,n);case"Io":return r.ordinalNumber(n,{unit:"week"});default:return Re(t.length,n)}}validate(n,t){return t>=1&&t<=53}set(n,t,r){return lr(Xf(n,r))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]}const Zf=[31,28,31,30,31,30,31,31,30,31,30,31],ek=[31,29,31,30,31,30,31,31,30,31,30,31];class nk extends de{priority=90;subPriority=1;parse(n,t,r){switch(t){case"d":return Te(qe.date,n);case"do":return r.ordinalNumber(n,{unit:"date"});default:return Re(t.length,n)}}validate(n,t){const r=n.getFullYear(),s=xl(r),a=n.getMonth();return s?t>=1&&t<=ek[a]:t>=1&&t<=Zf[a]}set(n,t,r){return n.setDate(r),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]}class rk extends de{priority=90;subpriority=1;parse(n,t,r){switch(t){case"D":case"DD":return Te(qe.dayOfYear,n);case"Do":return r.ordinalNumber(n,{unit:"date"});default:return Re(t.length,n)}}validate(n,t){const r=n.getFullYear();return xl(r)?t>=1&&t<=366:t>=1&&t<=365}set(n,t,r){return n.setMonth(0,r),n.setHours(0,0,0,0),n}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]}function Ua(e,n,t){const r=mr(),s=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,a=ie(e,t?.in),i=a.getDay(),l=(n%7+7)%7,u=7-s,d=n<0||n>6?n-(i+u)%7:(l+u)%7-(i+u)%7;return ft(a,d,t)}class tk extends de{priority=90;parse(n,t,r){switch(t){case"E":case"EE":case"EEE":return r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"EEEEE":return r.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"EEEE":default:return r.day(n,{width:"wide",context:"formatting"})||r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=6}set(n,t,r,s){return n=Ua(n,r,s),n.setHours(0,0,0,0),n}incompatibleTokens=["D","i","e","c","t","T"]}class sk extends de{priority=90;parse(n,t,r,s){const a=i=>{const o=Math.floor((i-1)/7)*7;return(i+s.weekStartsOn+6)%7+o};switch(t){case"e":case"ee":return _e(Re(t.length,n),a);case"eo":return _e(r.ordinalNumber(n,{unit:"day"}),a);case"eee":return r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"eeeee":return r.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"});case"eeee":default:return r.day(n,{width:"wide",context:"formatting"})||r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"})}}validate(n,t){return t>=0&&t<=6}set(n,t,r,s){return n=Ua(n,r,s),n.setHours(0,0,0,0),n}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]}class ak extends de{priority=90;parse(n,t,r,s){const a=i=>{const o=Math.floor((i-1)/7)*7;return(i+s.weekStartsOn+6)%7+o};switch(t){case"c":case"cc":return _e(Re(t.length,n),a);case"co":return _e(r.ordinalNumber(n,{unit:"day"}),a);case"ccc":return r.day(n,{width:"abbreviated",context:"standalone"})||r.day(n,{width:"short",context:"standalone"})||r.day(n,{width:"narrow",context:"standalone"});case"ccccc":return r.day(n,{width:"narrow",context:"standalone"});case"cccccc":return r.day(n,{width:"short",context:"standalone"})||r.day(n,{width:"narrow",context:"standalone"});case"cccc":default:return r.day(n,{width:"wide",context:"standalone"})||r.day(n,{width:"abbreviated",context:"standalone"})||r.day(n,{width:"short",context:"standalone"})||r.day(n,{width:"narrow",context:"standalone"})}}validate(n,t){return t>=0&&t<=6}set(n,t,r,s){return n=Ua(n,r,s),n.setHours(0,0,0,0),n}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]}function ik(e,n,t){const r=ie(e,t?.in),s=Df(r,t),a=n-s;return ft(r,a,t)}class ok extends de{priority=90;parse(n,t,r){const s=a=>a===0?7:a;switch(t){case"i":case"ii":return Re(t.length,n);case"io":return r.ordinalNumber(n,{unit:"day"});case"iii":return _e(r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"}),s);case"iiiii":return _e(r.day(n,{width:"narrow",context:"formatting"}),s);case"iiiiii":return _e(r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"}),s);case"iiii":default:return _e(r.day(n,{width:"wide",context:"formatting"})||r.day(n,{width:"abbreviated",context:"formatting"})||r.day(n,{width:"short",context:"formatting"})||r.day(n,{width:"narrow",context:"formatting"}),s)}}validate(n,t){return t>=1&&t<=7}set(n,t,r){return n=ik(n,r),n.setHours(0,0,0,0),n}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]}class lk extends de{priority=80;parse(n,t,r){switch(t){case"a":case"aa":case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})||r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,r){return n.setHours(Ga(r),0,0,0),n}incompatibleTokens=["b","B","H","k","t","T"]}class dk extends de{priority=80;parse(n,t,r){switch(t){case"b":case"bb":case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})||r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,r){return n.setHours(Ga(r),0,0,0),n}incompatibleTokens=["a","B","H","k","t","T"]}class uk extends de{priority=80;parse(n,t,r){switch(t){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})||r.dayPeriod(n,{width:"abbreviated",context:"formatting"})||r.dayPeriod(n,{width:"narrow",context:"formatting"})}}set(n,t,r){return n.setHours(Ga(r),0,0,0),n}incompatibleTokens=["a","b","t","T"]}class gk extends de{priority=70;parse(n,t,r){switch(t){case"h":return Te(qe.hour12h,n);case"ho":return r.ordinalNumber(n,{unit:"hour"});default:return Re(t.length,n)}}validate(n,t){return t>=1&&t<=12}set(n,t,r){const s=n.getHours()>=12;return s&&r<12?n.setHours(r+12,0,0,0):!s&&r===12?n.setHours(0,0,0,0):n.setHours(r,0,0,0),n}incompatibleTokens=["H","K","k","t","T"]}class mk extends de{priority=70;parse(n,t,r){switch(t){case"H":return Te(qe.hour23h,n);case"Ho":return r.ordinalNumber(n,{unit:"hour"});default:return Re(t.length,n)}}validate(n,t){return t>=0&&t<=23}set(n,t,r){return n.setHours(r,0,0,0),n}incompatibleTokens=["a","b","h","K","k","t","T"]}class ck extends de{priority=70;parse(n,t,r){switch(t){case"K":return Te(qe.hour11h,n);case"Ko":return r.ordinalNumber(n,{unit:"hour"});default:return Re(t.length,n)}}validate(n,t){return t>=0&&t<=11}set(n,t,r){return n.getHours()>=12&&r<12?n.setHours(r+12,0,0,0):n.setHours(r,0,0,0),n}incompatibleTokens=["h","H","k","t","T"]}class fk extends de{priority=70;parse(n,t,r){switch(t){case"k":return Te(qe.hour24h,n);case"ko":return r.ordinalNumber(n,{unit:"hour"});default:return Re(t.length,n)}}validate(n,t){return t>=1&&t<=24}set(n,t,r){const s=r<=24?r%24:r;return n.setHours(s,0,0,0),n}incompatibleTokens=["a","b","h","H","K","t","T"]}class kk extends de{priority=60;parse(n,t,r){switch(t){case"m":return Te(qe.minute,n);case"mo":return r.ordinalNumber(n,{unit:"minute"});default:return Re(t.length,n)}}validate(n,t){return t>=0&&t<=59}set(n,t,r){return n.setMinutes(r,0,0),n}incompatibleTokens=["t","T"]}class pk extends de{priority=50;parse(n,t,r){switch(t){case"s":return Te(qe.second,n);case"so":return r.ordinalNumber(n,{unit:"second"});default:return Re(t.length,n)}}validate(n,t){return t>=0&&t<=59}set(n,t,r){return n.setSeconds(r,0),n}incompatibleTokens=["t","T"]}class vk extends de{priority=30;parse(n,t){const r=s=>Math.trunc(s*Math.pow(10,-t.length+3));return _e(Re(t.length,n),r)}set(n,t,r){return n.setMilliseconds(r),n}incompatibleTokens=["t","T"]}class yk extends de{priority=10;parse(n,t){switch(t){case"X":return En(jn.basicOptionalMinutes,n);case"XX":return En(jn.basic,n);case"XXXX":return En(jn.basicOptionalSeconds,n);case"XXXXX":return En(jn.extendedOptionalSeconds,n);case"XXX":default:return En(jn.extended,n)}}set(n,t,r){return t.timestampIsSet?n:ke(n,n.getTime()-us(n)-r)}incompatibleTokens=["t","T","x"]}class bk extends de{priority=10;parse(n,t){switch(t){case"x":return En(jn.basicOptionalMinutes,n);case"xx":return En(jn.basic,n);case"xxxx":return En(jn.basicOptionalSeconds,n);case"xxxxx":return En(jn.extendedOptionalSeconds,n);case"xxx":default:return En(jn.extended,n)}}set(n,t,r){return t.timestampIsSet?n:ke(n,n.getTime()-us(n)-r)}incompatibleTokens=["t","T","X"]}class hk extends de{priority=40;parse(n){return Dl(n)}set(n,t,r){return[ke(n,r*1e3),{timestampIsSet:!0}]}incompatibleTokens="*"}class Ik extends de{priority=20;parse(n){return Dl(n)}set(n,t,r){return[ke(n,r),{timestampIsSet:!0}]}incompatibleTokens="*"}const wk={G:new Cf,y:new Bf,Y:new Kf,R:new Gf,u:new Uf,Q:new Hf,q:new Yf,M:new $f,L:new Wf,w:new Jf,I:new Qf,d:new nk,D:new rk,E:new tk,e:new sk,c:new ak,i:new ok,a:new lk,b:new dk,B:new uk,h:new gk,H:new mk,K:new ck,k:new fk,m:new kk,s:new pk,S:new vk,X:new yk,x:new bk,t:new hk,T:new Ik},Ak=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,jk=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ek=/^'([^]*?)'?$/,Tk=/''/g,Ok=/\S/,Nk=/[a-zA-Z]/;function jr(e,n,t,r){const s=()=>ke(r?.in||t,NaN),a=Mf(),i=r?.locale??a.locale??ws,o=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,l=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0;if(!n)return e?s():ie(t,r?.in);const u={firstWeekContainsDate:o,weekStartsOn:l,locale:i},d=[new Lf(r?.in,t)],g=n.match(jk).map(v=>{const A=v[0];if(A in ma){const h=ma[A];return h(v,i.formatLong)}return v}).join("").match(Ak),c=[];for(let v of g){!r?.useAdditionalWeekYearTokens&&ql(v)&&ca(v,n,e),!r?.useAdditionalDayOfYearTokens&&Pl(v)&&ca(v,n,e);const A=v[0],h=wk[A];if(h){const{incompatibleTokens:b}=h;if(Array.isArray(b)){const I=c.find(O=>b.includes(O.token)||O.token===A);if(I)throw new RangeError(`The format string mustn't contain \`${I.fullToken}\` and \`${v}\` at the same time`)}else if(h.incompatibleTokens==="*"&&c.length>0)throw new RangeError(`The format string mustn't contain \`${v}\` and any other token at the same time`);c.push({token:A,fullToken:v});const j=h.run(e,v,i.match,u);if(!j)return s();d.push(j.setter),e=j.rest}else{if(A.match(Nk))throw new RangeError("Format string contains an unescaped latin alphabet character `"+A+"`");if(v==="''"?v="'":A==="'"&&(v=Rk(v)),e.indexOf(v)===0)e=e.slice(v.length);else return s()}}if(e.length>0&&Ok.test(e))return s();const f=d.map(v=>v.priority).sort((v,A)=>A-v).filter((v,A,h)=>h.indexOf(v)===A).map(v=>d.filter(A=>A.priority===v).sort((A,h)=>h.subPriority-A.subPriority)).map(v=>v[0]);let y=ie(t,r?.in);if(isNaN(+y))return s();const w={};for(const v of f){if(!v.validate(y,u))return s();const A=v.set(y,w,u);Array.isArray(A)?(y=A[0],Object.assign(w,A[1])):y=A}return y}function Rk(e){return e.match(Ek)[1].replace(Tk,"'")}function Pk(e,n,t){const[r,s]=Sr(t?.in,e,n);return r.getFullYear()===s.getFullYear()&&r.getMonth()===s.getMonth()}function Fl(e,n,t){const[r,s]=Sr(t?.in,e,n);return r.getFullYear()===s.getFullYear()}function qk(e,n,t){return ft(e,-n,t)}function Vl(e,n,t){const r=ie(e,t?.in),s=r.getFullYear(),a=r.getDate(),i=ke(e,0);i.setFullYear(s,n,15),i.setHours(0,0,0,0);const o=_f(i);return r.setMonth(n,Math.min(a,o)),r}function Ll(e,n,t){const r=ie(e,t?.in);return isNaN(+r)?ke(e,NaN):(r.setFullYear(n),r)}function _k(e,n,t){return Sa(e,-n,t)}function Mk(e,n,t){const{years:r=0,months:s=0,weeks:a=0,days:i=0,hours:o=0,minutes:l=0,seconds:u=0}=n,d=_k(e,s+r*12,t),g=qk(d,i+a*7,t),c=l+o*60,y=(u+c*60)*1e3;return ke(e,+g-y)}function Dk(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Sk(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(n=>{let{brand:t,version:r}=n;return t+"/"+r}).join(" "):navigator.userAgent}function xk(){return/apple/i.test(navigator.vendor)}function Fk(){return Dk().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Vk(){return Sk().includes("jsdom/")}const Lk="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function _i(e){let n=e.activeElement;for(;((t=n)==null||(t=t.shadowRoot)==null?void 0:t.activeElement)!=null;){var t;n=n.shadowRoot.activeElement}return n}function rt(e,n){if(!e||!n)return!1;const t=n.getRootNode==null?void 0:n.getRootNode();if(e.contains(n))return!0;if(t&&os(t)){let r=n;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function hr(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Hs(e,n){if(n==null)return!1;if("composedPath"in e)return e.composedPath().includes(n);const t=e;return t.target!=null&&n.contains(t.target)}function Ck(e){return e.matches("html,body")}function tr(e){return e?.ownerDocument||document}function Bk(e){return an(e)&&e.matches(Lk)}function Kk(e){if(!e||Vk())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function Ys(e,n,t){t===void 0&&(t=!0);let r=e.filter(a=>{var i;return a.parentId===n&&((i=a.context)==null?void 0:i.open)}),s=r;for(;s.length;)s=t?e.filter(a=>{var i;return(i=s)==null?void 0:i.some(o=>{var l;return a.parentId===o.id&&((l=a.context)==null?void 0:l.open)})}):e,r=r.concat(s);return r}function Gk(e){return"nativeEvent"in e}function fa(e,n){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}var Ln=typeof document<"u"?m.useLayoutEffect:m.useEffect;const Uk={...Fo};function Tt(e){const n=m.useRef(e);return Ln(()=>{n.current=e}),n}const Hk=Uk.useInsertionEffect,Yk=Hk||(e=>e());function Sn(e){const n=m.useRef(()=>{});return Yk(()=>{n.current=e}),m.useCallback(function(){for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return n.current==null?void 0:n.current(...r)},[])}const $k="data-floating-ui-focusable",Mi="active",Di="selected",Wk={...Fo};let Si=!1,zk=0;const xi=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+zk++;function Jk(){const[e,n]=m.useState(()=>Si?xi():void 0);return Ln(()=>{e==null&&n(xi())},[]),m.useEffect(()=>{Si=!0},[]),e}const Xk=Wk.useId,Cl=Xk||Jk;function Qk(){const e=new Map;return{emit(n,t){var r;(r=e.get(n))==null||r.forEach(s=>s(t))},on(n,t){e.has(n)||e.set(n,new Set),e.get(n).add(t)},off(n,t){var r;(r=e.get(n))==null||r.delete(t)}}}const Zk=m.createContext(null),ep=m.createContext(null),Bl=()=>{var e;return((e=m.useContext(Zk))==null?void 0:e.id)||null},Ha=()=>m.useContext(ep);function Rs(e){return"data-floating-ui-"+e}function ln(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Fi=Rs("safe-polygon");function $s(e,n,t){if(t&&!fa(t))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const r=e();return typeof r=="number"?r:r?.[n]}return e?.[n]}function Ws(e){return typeof e=="function"?e():e}function np(e,n){n===void 0&&(n={});const{open:t,onOpenChange:r,dataRef:s,events:a,elements:i}=e,{enabled:o=!0,delay:l=0,handleClose:u=null,mouseOnly:d=!1,restMs:g=0,move:c=!0}=n,f=Ha(),y=Bl(),w=Tt(u),v=Tt(l),A=Tt(t),h=Tt(g),b=m.useRef(),j=m.useRef(-1),I=m.useRef(),O=m.useRef(-1),N=m.useRef(!0),x=m.useRef(!1),q=m.useRef(()=>{}),F=m.useRef(!1),L=m.useCallback(()=>{var B;const V=(B=s.current.openEvent)==null?void 0:B.type;return V?.includes("mouse")&&V!=="mousedown"},[s]);m.useEffect(()=>{if(!o)return;function B(V){let{open:S}=V;S||(ln(j),ln(O),N.current=!0,F.current=!1)}return a.on("openchange",B),()=>{a.off("openchange",B)}},[o,a]),m.useEffect(()=>{if(!o||!w.current||!t)return;function B(S){L()&&r(!1,S,"hover")}const V=tr(i.floating).documentElement;return V.addEventListener("mouseleave",B),()=>{V.removeEventListener("mouseleave",B)}},[i.floating,t,r,o,w,L]);const _=m.useCallback(function(B,V,S){V===void 0&&(V=!0),S===void 0&&(S="hover");const H=$s(v.current,"close",b.current);H&&!I.current?(ln(j),j.current=window.setTimeout(()=>r(!1,B,S),H)):V&&(ln(j),r(!1,B,S))},[v,r]),T=Sn(()=>{q.current(),I.current=void 0}),P=Sn(()=>{if(x.current){const B=tr(i.floating).body;B.style.pointerEvents="",B.removeAttribute(Fi),x.current=!1}}),D=Sn(()=>s.current.openEvent?["click","mousedown"].includes(s.current.openEvent.type):!1);m.useEffect(()=>{if(!o)return;function B(z){if(ln(j),N.current=!1,d&&!fa(b.current)||Ws(h.current)>0&&!$s(v.current,"open"))return;const se=$s(v.current,"open",b.current);se?j.current=window.setTimeout(()=>{A.current||r(!0,z,"hover")},se):t||r(!0,z,"hover")}function V(z){if(D()){P();return}q.current();const se=tr(i.floating);if(ln(O),F.current=!1,w.current&&s.current.floatingContext){t||ln(j),I.current=w.current({...s.current.floatingContext,tree:f,x:z.clientX,y:z.clientY,onClose(){P(),T(),D()||_(z,!0,"safe-polygon")}});const Z=I.current;se.addEventListener("mousemove",Z),q.current=()=>{se.removeEventListener("mousemove",Z)};return}(b.current==="touch"?!rt(i.floating,z.relatedTarget):!0)&&_(z)}function S(z){D()||s.current.floatingContext&&(w.current==null||w.current({...s.current.floatingContext,tree:f,x:z.clientX,y:z.clientY,onClose(){P(),T(),D()||_(z)}})(z))}function H(){ln(j)}function J(z){D()||_(z,!1)}if(be(i.domReference)){const z=i.domReference,se=i.floating;return t&&z.addEventListener("mouseleave",S),c&&z.addEventListener("mousemove",B,{once:!0}),z.addEventListener("mouseenter",B),z.addEventListener("mouseleave",V),se&&(se.addEventListener("mouseleave",S),se.addEventListener("mouseenter",H),se.addEventListener("mouseleave",J)),()=>{t&&z.removeEventListener("mouseleave",S),c&&z.removeEventListener("mousemove",B),z.removeEventListener("mouseenter",B),z.removeEventListener("mouseleave",V),se&&(se.removeEventListener("mouseleave",S),se.removeEventListener("mouseenter",H),se.removeEventListener("mouseleave",J))}}},[i,o,e,d,c,_,T,P,r,t,A,f,v,w,s,D,h]),Ln(()=>{var B;if(o&&t&&(B=w.current)!=null&&B.__options.blockPointerEvents&&L()){x.current=!0;const S=i.floating;if(be(i.domReference)&&S){var V;const H=tr(i.floating).body;H.setAttribute(Fi,"");const J=i.domReference,z=f==null||(V=f.nodesRef.current.find(se=>se.id===y))==null||(V=V.context)==null?void 0:V.elements.floating;return z&&(z.style.pointerEvents=""),H.style.pointerEvents="none",J.style.pointerEvents="auto",S.style.pointerEvents="auto",()=>{H.style.pointerEvents="",J.style.pointerEvents="",S.style.pointerEvents=""}}}},[o,t,y,i,f,w,L]),Ln(()=>{t||(b.current=void 0,F.current=!1,T(),P())},[t,T,P]),m.useEffect(()=>()=>{T(),ln(j),ln(O),P()},[o,i.domReference,T,P]);const C=m.useMemo(()=>{function B(V){b.current=V.pointerType}return{onPointerDown:B,onPointerEnter:B,onMouseMove(V){const{nativeEvent:S}=V;function H(){!N.current&&!A.current&&r(!0,S,"hover")}d&&!fa(b.current)||t||Ws(h.current)===0||F.current&&V.movementX**2+V.movementY**2<2||(ln(O),b.current==="touch"?H():(F.current=!0,O.current=window.setTimeout(H,Ws(h.current))))}}},[d,r,t,A,h]);return m.useMemo(()=>o?{reference:C}:{},[o,C])}function zs(e,n){if(!e||!n)return!1;const t=n.getRootNode==null?void 0:n.getRootNode();if(e.contains(n))return!0;if(t&&os(t)){let r=n;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function rp(e){return"composedPath"in e?e.composedPath()[0]:e.target}const tp=m.createContext(null),Vi=Rs("portal");function sp(e){e===void 0&&(e={});const{id:n,root:t}=e,r=Cl(),s=ap(),[a,i]=m.useState(null),o=m.useRef(null);return Ln(()=>()=>{a?.remove(),queueMicrotask(()=>{o.current=null})},[a]),Ln(()=>{if(!r||o.current)return;const l=n?document.getElementById(n):null;if(!l)return;const u=document.createElement("div");u.id=r,u.setAttribute(Vi,""),l.appendChild(u),o.current=u,i(u)},[n,r]),Ln(()=>{if(t===null||!r||o.current)return;let l=t||s?.portalNode;l&&!be(l)&&(l=l.current),l=l||document.body;let u=null;n&&(u=document.createElement("div"),u.id=n,l.appendChild(u));const d=document.createElement("div");d.id=r,d.setAttribute(Vi,""),l=u||l,l.appendChild(d),o.current=d,i(d)},[n,t,r,s]),a}const ap=()=>m.useContext(tp),ip={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},op={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Li=e=>{var n,t;return{escapeKey:typeof e=="boolean"?e:(n=e?.escapeKey)!=null?n:!1,outsidePress:typeof e=="boolean"?e:(t=e?.outsidePress)!=null?t:!0}};function lp(e,n){n===void 0&&(n={});const{open:t,onOpenChange:r,elements:s,dataRef:a}=e,{enabled:i=!0,escapeKey:o=!0,outsidePress:l=!0,outsidePressEvent:u="pointerdown",referencePress:d=!1,referencePressEvent:g="pointerdown",ancestorScroll:c=!1,bubbles:f,capture:y}=n,w=Ha(),v=Sn(typeof l=="function"?l:()=>!1),A=typeof l=="function"?v:l,h=m.useRef(!1),b=m.useRef(!1),{escapeKey:j,outsidePress:I}=Li(f),{escapeKey:O,outsidePress:N}=Li(y),x=m.useRef(!1),q=Sn(D=>{var C;if(!t||!i||!o||D.key!=="Escape"||x.current)return;const B=(C=a.current.floatingContext)==null?void 0:C.nodeId,V=w?Ys(w.nodesRef.current,B):[];if(!j&&(D.stopPropagation(),V.length>0)){let S=!0;if(V.forEach(H=>{var J;if((J=H.context)!=null&&J.open&&!H.context.dataRef.current.__escapeKeyBubbles){S=!1;return}}),!S)return}r(!1,Gk(D)?D.nativeEvent:D,"escape-key")}),F=Sn(D=>{var C;const B=()=>{var V;q(D),(V=hr(D))==null||V.removeEventListener("keydown",B)};(C=hr(D))==null||C.addEventListener("keydown",B)}),L=Sn(D=>{var C;const B=h.current;h.current=!1;const V=b.current;if(b.current=!1,u==="click"&&V||B||typeof A=="function"&&!A(D))return;const S=hr(D),H="["+Rs("inert")+"]",J=tr(s.floating).querySelectorAll(H);let z=be(S)?S:null;for(;z&&!Vn(z);){const U=Bn(z);if(Vn(U)||!be(U))break;z=U}if(J.length&&be(S)&&!Ck(S)&&!rt(S,s.floating)&&Array.from(J).every(U=>!rt(z,U)))return;if(an(S)&&P){const U=Vn(S),re=cn(S),te=/auto|scroll/,ue=U||te.test(re.overflowX),Le=U||te.test(re.overflowY),Ce=ue&&S.clientWidth>0&&S.scrollWidth>S.clientWidth,Be=Le&&S.clientHeight>0&&S.scrollHeight>S.clientHeight,_n=re.direction==="rtl",on=Be&&(_n?D.offsetX<=S.offsetWidth-S.clientWidth:D.offsetX>S.clientWidth),fn=Ce&&D.offsetY>S.clientHeight;if(on||fn)return}const se=(C=a.current.floatingContext)==null?void 0:C.nodeId,xe=w&&Ys(w.nodesRef.current,se).some(U=>{var re;return Hs(D,(re=U.context)==null?void 0:re.elements.floating)});if(Hs(D,s.floating)||Hs(D,s.domReference)||xe)return;const Z=w?Ys(w.nodesRef.current,se):[];if(Z.length>0){let U=!0;if(Z.forEach(re=>{var te;if((te=re.context)!=null&&te.open&&!re.context.dataRef.current.__outsidePressBubbles){U=!1;return}}),!U)return}r(!1,D,"outside-press")}),_=Sn(D=>{var C;const B=()=>{var V;L(D),(V=hr(D))==null||V.removeEventListener(u,B)};(C=hr(D))==null||C.addEventListener(u,B)});m.useEffect(()=>{if(!t||!i)return;a.current.__escapeKeyBubbles=j,a.current.__outsidePressBubbles=I;let D=-1;function C(J){r(!1,J,"ancestor-scroll")}function B(){window.clearTimeout(D),x.current=!0}function V(){D=window.setTimeout(()=>{x.current=!1},Ts()?5:0)}const S=tr(s.floating);o&&(S.addEventListener("keydown",O?F:q,O),S.addEventListener("compositionstart",B),S.addEventListener("compositionend",V)),A&&S.addEventListener(u,N?_:L,N);let H=[];return c&&(be(s.domReference)&&(H=Jn(s.domReference)),be(s.floating)&&(H=H.concat(Jn(s.floating))),!be(s.reference)&&s.reference&&s.reference.contextElement&&(H=H.concat(Jn(s.reference.contextElement)))),H=H.filter(J=>{var z;return J!==((z=S.defaultView)==null?void 0:z.visualViewport)}),H.forEach(J=>{J.addEventListener("scroll",C,{passive:!0})}),()=>{o&&(S.removeEventListener("keydown",O?F:q,O),S.removeEventListener("compositionstart",B),S.removeEventListener("compositionend",V)),A&&S.removeEventListener(u,N?_:L,N),H.forEach(J=>{J.removeEventListener("scroll",C)}),window.clearTimeout(D)}},[a,s,o,A,u,t,r,c,i,j,I,q,O,F,L,N,_]),m.useEffect(()=>{h.current=!1},[A,u]);const T=m.useMemo(()=>({onKeyDown:q,...d&&{[ip[g]]:D=>{r(!1,D.nativeEvent,"reference-press")},...g!=="click"&&{onClick(D){r(!1,D.nativeEvent,"reference-press")}}}}),[q,r,d,g]),P=m.useMemo(()=>({onKeyDown:q,onMouseDown(){b.current=!0},onMouseUp(){b.current=!0},[op[u]]:()=>{h.current=!0}}),[q,u]);return m.useMemo(()=>i?{reference:T,floating:P}:{},[i,T,P])}function dp(e){const{open:n=!1,onOpenChange:t,elements:r}=e,s=Cl(),a=m.useRef({}),[i]=m.useState(()=>Qk()),o=Bl()!=null,[l,u]=m.useState(r.reference),d=Sn((f,y,w)=>{a.current.openEvent=f?y:void 0,i.emit("openchange",{open:f,event:y,reason:w,nested:o}),t?.(f,y,w)}),g=m.useMemo(()=>({setPositionReference:u}),[]),c=m.useMemo(()=>({reference:l||r.reference||null,floating:r.floating||null,domReference:r.reference}),[l,r.reference,r.floating]);return m.useMemo(()=>({dataRef:a,open:n,onOpenChange:d,elements:c,events:i,floatingId:s,refs:g}),[n,d,c,i,s,g])}function Kl(e){e===void 0&&(e={});const{nodeId:n}=e,t=dp({...e,elements:{reference:null,floating:null,...e.elements}}),r=e.rootContext||t,s=r.elements,[a,i]=m.useState(null),[o,l]=m.useState(null),d=s?.domReference||a,g=m.useRef(null),c=Ha();Ln(()=>{d&&(g.current=d)},[d]);const f=Jc({...e,elements:{...s,...o&&{reference:o}}}),y=m.useCallback(b=>{const j=be(b)?{getBoundingClientRect:()=>b.getBoundingClientRect(),getClientRects:()=>b.getClientRects(),contextElement:b}:b;l(j),f.refs.setReference(j)},[f.refs]),w=m.useCallback(b=>{(be(b)||b===null)&&(g.current=b,i(b)),(be(f.refs.reference.current)||f.refs.reference.current===null||b!==null&&!be(b))&&f.refs.setReference(b)},[f.refs]),v=m.useMemo(()=>({...f.refs,setReference:w,setPositionReference:y,domReference:g}),[f.refs,w,y]),A=m.useMemo(()=>({...f.elements,domReference:d}),[f.elements,d]),h=m.useMemo(()=>({...f,...r,refs:v,elements:A,nodeId:n}),[f,v,A,n,r]);return Ln(()=>{r.dataRef.current.floatingContext=h;const b=c?.nodesRef.current.find(j=>j.id===n);b&&(b.context=h)}),m.useMemo(()=>({...f,context:h,refs:v,elements:A}),[f,v,A,h])}function Js(){return Fk()&&xk()}function up(e,n){n===void 0&&(n={});const{open:t,onOpenChange:r,events:s,dataRef:a,elements:i}=e,{enabled:o=!0,visibleOnly:l=!0}=n,u=m.useRef(!1),d=m.useRef(-1),g=m.useRef(!0);m.useEffect(()=>{if(!o)return;const f=nn(i.domReference);function y(){!t&&an(i.domReference)&&i.domReference===_i(tr(i.domReference))&&(u.current=!0)}function w(){g.current=!0}function v(){g.current=!1}return f.addEventListener("blur",y),Js()&&(f.addEventListener("keydown",w,!0),f.addEventListener("pointerdown",v,!0)),()=>{f.removeEventListener("blur",y),Js()&&(f.removeEventListener("keydown",w,!0),f.removeEventListener("pointerdown",v,!0))}},[i.domReference,t,o]),m.useEffect(()=>{if(!o)return;function f(y){let{reason:w}=y;(w==="reference-press"||w==="escape-key")&&(u.current=!0)}return s.on("openchange",f),()=>{s.off("openchange",f)}},[s,o]),m.useEffect(()=>()=>{ln(d)},[]);const c=m.useMemo(()=>({onMouseLeave(){u.current=!1},onFocus(f){if(u.current)return;const y=hr(f.nativeEvent);if(l&&be(y)){if(Js()&&!f.relatedTarget){if(!g.current&&!Bk(y))return}else if(!Kk(y))return}r(!0,f.nativeEvent,"focus")},onBlur(f){u.current=!1;const y=f.relatedTarget,w=f.nativeEvent,v=be(y)&&y.hasAttribute(Rs("focus-guard"))&&y.getAttribute("data-type")==="outside";d.current=window.setTimeout(()=>{var A;const h=_i(i.domReference?i.domReference.ownerDocument:document);!y&&h===i.domReference||rt((A=a.current.floatingContext)==null?void 0:A.refs.floating.current,h)||rt(i.domReference,h)||v||r(!1,w,"focus")})}}),[a,i.domReference,r,l]);return m.useMemo(()=>o?{reference:c}:{},[o,c])}function Xs(e,n,t){const r=new Map,s=t==="item";let a=e;if(s&&e){const{[Mi]:i,[Di]:o,...l}=e;a=l}return{...t==="floating"&&{tabIndex:-1,[$k]:""},...a,...n.map(i=>{const o=i?i[t]:null;return typeof o=="function"?e?o(e):null:o}).concat(e).reduce((i,o)=>(o&&Object.entries(o).forEach(l=>{let[u,d]=l;if(!(s&&[Mi,Di].includes(u)))if(u.indexOf("on")===0){if(r.has(u)||r.set(u,[]),typeof d=="function"){var g;(g=r.get(u))==null||g.push(d),i[u]=function(){for(var c,f=arguments.length,y=new Array(f),w=0;w<f;w++)y[w]=arguments[w];return(c=r.get(u))==null?void 0:c.map(v=>v(...y)).find(v=>v!==void 0)}}}else i[u]=d}),i),{})}}function gp(e){e===void 0&&(e=[]);const n=e.map(o=>o?.reference),t=e.map(o=>o?.floating),r=e.map(o=>o?.item),s=m.useCallback(o=>Xs(o,e,"reference"),n),a=m.useCallback(o=>Xs(o,e,"floating"),t),i=m.useCallback(o=>Xs(o,e,"item"),r);return m.useMemo(()=>({getReferenceProps:s,getFloatingProps:a,getItemProps:i}),[s,a,i])}function mp(e,n,t){t===void 0&&(t=!0);let r=e.filter(a=>{var i;return a.parentId===n&&((i=a.context)==null?void 0:i.open)}),s=r;for(;s.length;)s=t?e.filter(a=>{var i;return(i=s)==null?void 0:i.some(o=>{var l;return a.parentId===o.id&&((l=a.context)==null?void 0:l.open)})}):e,r=r.concat(s);return r}function Ci(e,n){const[t,r]=e;let s=!1;const a=n.length;for(let i=0,o=a-1;i<a;o=i++){const[l,u]=n[i]||[0,0],[d,g]=n[o]||[0,0];u>=r!=g>=r&&t<=(d-l)*(r-u)/(g-u)+l&&(s=!s)}return s}function cp(e,n){return e[0]>=n.x&&e[0]<=n.x+n.width&&e[1]>=n.y&&e[1]<=n.y+n.height}function fp(e){e===void 0&&(e={});const{buffer:n=.5,blockPointerEvents:t=!1,requireIntent:r=!0}=e;let s,a=!1,i=null,o=null,l=performance.now();function u(g,c){const f=performance.now(),y=f-l;if(i===null||o===null||y===0)return i=g,o=c,l=f,null;const w=g-i,v=c-o,h=Math.sqrt(w*w+v*v)/y;return i=g,o=c,l=f,h}const d=g=>{let{x:c,y:f,placement:y,elements:w,onClose:v,nodeId:A,tree:h}=g;return function(j){function I(){clearTimeout(s),v()}if(clearTimeout(s),!w.domReference||!w.floating||y==null||c==null||f==null)return;const{clientX:O,clientY:N}=j,x=[O,N],q=rp(j),F=j.type==="mouseleave",L=zs(w.floating,q),_=zs(w.domReference,q),T=w.domReference.getBoundingClientRect(),P=w.floating.getBoundingClientRect(),D=y.split("-")[0],C=c>P.right-P.width/2,B=f>P.bottom-P.height/2,V=cp(x,T),S=P.width>T.width,H=P.height>T.height,J=(S?T:P).left,z=(S?T:P).right,se=(H?T:P).top,xe=(H?T:P).bottom;if(L&&(a=!0,!F))return;if(_&&(a=!1),_&&!F){a=!0;return}if(F&&be(j.relatedTarget)&&zs(w.floating,j.relatedTarget)||h&&mp(h.nodesRef.current,A).some(re=>{let{context:te}=re;return te?.open}))return;if(D==="top"&&f>=T.bottom-1||D==="bottom"&&f<=T.top+1||D==="left"&&c>=T.right-1||D==="right"&&c<=T.left+1)return I();let Z=[];switch(D){case"top":Z=[[J,T.top+1],[J,P.bottom-1],[z,P.bottom-1],[z,T.top+1]];break;case"bottom":Z=[[J,P.top+1],[J,T.bottom-1],[z,T.bottom-1],[z,P.top+1]];break;case"left":Z=[[P.right-1,xe],[P.right-1,se],[T.left+1,se],[T.left+1,xe]];break;case"right":Z=[[T.right-1,xe],[T.right-1,se],[P.left+1,se],[P.left+1,xe]];break}function U(re){let[te,ue]=re;switch(D){case"top":{const Le=[S?te+n/2:C?te+n*4:te-n*4,ue+n+1],Ce=[S?te-n/2:C?te+n*4:te-n*4,ue+n+1],Be=[[P.left,C||S?P.bottom-n:P.top],[P.right,C?S?P.bottom-n:P.top:P.bottom-n]];return[Le,Ce,...Be]}case"bottom":{const Le=[S?te+n/2:C?te+n*4:te-n*4,ue-n],Ce=[S?te-n/2:C?te+n*4:te-n*4,ue-n],Be=[[P.left,C||S?P.top+n:P.bottom],[P.right,C?S?P.top+n:P.bottom:P.top+n]];return[Le,Ce,...Be]}case"left":{const Le=[te+n+1,H?ue+n/2:B?ue+n*4:ue-n*4],Ce=[te+n+1,H?ue-n/2:B?ue+n*4:ue-n*4];return[...[[B||H?P.right-n:P.left,P.top],[B?H?P.right-n:P.left:P.right-n,P.bottom]],Le,Ce]}case"right":{const Le=[te-n,H?ue+n/2:B?ue+n*4:ue-n*4],Ce=[te-n,H?ue-n/2:B?ue+n*4:ue-n*4],Be=[[B||H?P.left+n:P.right,P.top],[B?H?P.left+n:P.right:P.left+n,P.bottom]];return[Le,Ce,...Be]}}}if(!Ci([O,N],Z)){if(a&&!V)return I();if(!F&&r){const re=u(j.clientX,j.clientY);if(re!==null&&re<.1)return I()}Ci([O,N],U([c,f]))?!a&&r&&(s=window.setTimeout(I,40)):I()}}};return d.__options={blockPointerEvents:t},d}const Ps=()=>{const{cn:e}=ee();return p.createElement(Wo,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Gl=()=>{const{cn:e}=ee();return p.createElement(Wo,{title:Gn("global")("readOnly"),className:e("navds-form-field__readonly-icon")})},ms=m.createContext(null),Fr=(e,n)=>{var t,r,s;const{size:a,error:i,errorId:o}=e,l=m.useContext(ms),u=hn(),d=(t=e.id)!==null&&t!==void 0?t:`${n}-${u}`,g=o??`${n}-error-${u}`,c=`${n}-description-${u}`,f=l?.disabled||e.disabled,y=(l?.readOnly||e.readOnly)&&!f||void 0,w=!f&&!y&&!!(i||l?.error),v=!f&&!y&&!!i&&typeof i!="boolean",A=Object.assign({},w?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:v,hasError:w,errorId:g,inputDescriptionId:c,size:(r=a??l?.size)!==null&&r!==void 0?r:"medium",readOnly:y,inputProps:Object.assign(Object.assign({id:d},A),{"aria-describedby":it(e["aria-describedby"],{[c]:!!e?.description&&typeof e?.description=="string",[g]:v,[(s=l?.errorId)!==null&&s!==void 0?s:""]:w&&!!l?.error})||void 0,disabled:f})}},Ul={global:{dateLocale:rl,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},Hl={global:{dateLocale:sl,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},Yl=(e="nb")=>{switch(e){case"nn":return sl;case"en":return rl;default:return tl}},$l=e=>{switch(e){case"nn":return Hl.DatePicker;case"en":case"en-GB":return Ul.DatePicker;default:return}},kp=e=>{switch(e){case"nn":return Hl.global;case"en":case"en-GB":return Ul.global;default:return}},[Wl,qs]=bs();var pp=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const[vp,Ya]=bs({errorMessage:"useDateInputContext must be used with DateInputContext"}),zl=m.forwardRef((e,n)=>{const{className:t,hideLabel:r=!1,label:s,description:a,variant:i="datepicker",setAnchorRef:o}=e,l=pp(e,["className","hideLabel","label","description","variant","setAnchorRef"]),u=m.useRef(null),d=qs().translate,{cn:g}=ee(),c=i==="datepicker",f={prefix:c?"datepicker-input":"monthpicker-input",iconTitle:{open:c?"openDatePicker":"openMonthPicker",close:c?"closeDatePicker":"closeMonthPicker"}},y=Ya(),{inputProps:w,size:v="medium",inputDescriptionId:A,errorId:h,showErrorMsg:b,hasError:j,readOnly:I}=Fr(e,f.prefix);return p.createElement("div",{className:g(t,"navds-form-field",`navds-form-field--${v}`,"navds-date__field",{"navds-text-field--error":j,"navds-date__field--error":j,"navds-form-field--disabled":!!w.disabled,"navds-text-field--disabled":!!w.disabled,"navds-form-field--readonly":I,"navds-text-field--readonly":I,"navds-date__field--readonly":I})},p.createElement(we,{htmlFor:w.id,size:v,className:g("navds-form-field__label",{"navds-sr-only":r})},I&&p.createElement(Ps,null),s),!!a&&p.createElement(ne,{as:"div",className:g("navds-form-field__description",{"navds-sr-only":r}),id:A,size:v},a),p.createElement("div",{className:g("navds-date__field-wrapper")},p.createElement("input",Object.assign({ref:n},Xe(l,["error","errorId","size"]),w,{autoComplete:"off","aria-controls":y?.open?y.ariaId:void 0,readOnly:I,className:g("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${v}`),size:c?11:14})),p.createElement("button",{disabled:w.disabled||I,tabIndex:I||y?.open?-1:0,onClick:()=>{y?.onOpen(),o?.(u.current)},type:"button",className:g("navds-date__field-button"),ref:u},p.createElement(_u,{title:d(f.iconTitle[y?.open?"close":"open"])}))),p.createElement("div",{className:g("navds-form-field__error"),id:h,"aria-relevant":"additions removals","aria-live":"polite"},b&&p.createElement(lt,{size:v,showIcon:!0},e.error)))}),yp=m.forwardRef((e,n)=>p.createElement(zl,Object.assign({},e,{ref:n})));m.forwardRef((e,n)=>p.createElement(zl,Object.assign({},e,{variant:"monthpicker",ref:n})));var bp=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const hp=m.forwardRef((e,n)=>{var{className:t}=e,r=bp(e,["className"]);const{cn:s}=ee();return p.createElement("div",Object.assign({},r,{ref:n,className:s("navds-modal__body",t)}))});var Ip=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const wp=m.forwardRef((e,n)=>{var{className:t}=e,r=Ip(e,["className"]);const{cn:s}=ee();return p.createElement("div",Object.assign({},r,{ref:n,className:s("navds-modal__footer",t)}))});var Ap=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Jl=m.forwardRef((e,n)=>{var{children:t,className:r,closeButton:s=!0}=e,a=Ap(e,["children","className","closeButton"]);const{cn:i}=ee(),o=dt(),l=Gn("global");return p.createElement("div",Object.assign({},a,{ref:n,className:i("navds-modal__header",r)}),o.closeHandler&&s&&p.createElement(Ne,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:u=>{["Enter"," "].includes(u.key)&&u.repeat&&u.preventDefault()},onClick:o.closeHandler,icon:p.createElement(Jo,{title:l("close")})}),t)}),Bi=({clientX:e,clientY:n},{left:t,top:r,right:s,bottom:a})=>!(e<t||n<r||e>s||n>a);function jp(e,n,t){if(!(n&&n.closeButton===!1))return t?()=>{var r;return t()!==!1&&((r=e.current)===null||r===void 0?void 0:r.close())}:()=>{var r;return(r=e.current)===null||r===void 0?void 0:r.close()}}const Ot="navds-modal__document-body",Nt="aksel-modal__document-body";function Ep(e,n,t){p.useEffect(()=>{if(t||!e.current||!n)return;e.current.open&&document.body.classList.add(Nt,Ot);const r=new MutationObserver(()=>{var s;!((s=e.current)===null||s===void 0)&&s.open?document.body.classList.add(Nt,Ot):document.body.classList.remove(Nt,Ot)});return r.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{r.disconnect(),document.body.classList.remove(Nt,Ot)}},[e,n,t])}const Ir=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function Xl(e,n){var t="on"+n.type.toLowerCase();return typeof e[t]=="function"&&e[t](n),e.dispatchEvent(n)}function Wr(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Ql(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Tp(e,n){for(var t=0;t<e.length;++t)if(e[t]===n)return!0;return!1}function Qs(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function Zl(e){var n=["button","input","keygen","select","textarea"],t=n.map(function(i){return i+":not([disabled])"});t.push('[tabindex]:not([disabled]):not([tabindex=""])');var r=e.querySelector(t.join(", "));if(!r&&"attachShadow"in Element.prototype)for(var s=e.querySelectorAll("*"),a=0;a<s.length&&!(s[a].tagName&&s[a].shadowRoot&&(r=Zl(s[a].shadowRoot),r));a++);return r}function Ki(e){return e.isConnected||document.body.contains(e)}function ed(e){if(e.submitter)return e.submitter;var n=e.target;if(!(n instanceof HTMLFormElement))return null;var t=oe.formSubmitter;if(!t){var r=e.target,s="getRootNode"in r&&r.getRootNode()||document;t=s.activeElement}return!t||t.form!==n?null:t}function Op(e){if(!e.defaultPrevented){var n=e.target,t=oe.imagemapUseValue,r=ed(e);t===null&&r&&(t=r.value);var s=Wr(n);if(s){var a=r&&r.getAttribute("formmethod")||n.getAttribute("method");a==="dialog"&&(e.preventDefault(),t!=null?s.close(t):s.close())}}}function nd(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",Op,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var n=new MutationObserver(this.maybeHideModal.bind(this));n.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t=!1,r=(function(){t?this.downgradeModal():this.maybeHideModal(),t=!1}).bind(this),s,a=function(i){if(i.target===e){var o="DOMNodeRemoved";t|=i.type.substr(0,o.length)===o,window.clearTimeout(s),s=window.setTimeout(r,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,a)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}nd.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Ki(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),oe.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var n=document.createElement("div");this.dialog_.insertBefore(n,this.dialog_.firstChild),n.tabIndex=-1,n.focus(),this.dialog_.removeChild(n)}var t=document.createEvent("MouseEvents");t.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(t),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=Zl(this.dialog_)),Ql(document.activeElement),e&&e.focus()},updateZIndex:function(e,n){if(e<n)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=n},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Ki(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!oe.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,oe.needsCentering(this.dialog_)?(oe.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var n=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});Xl(this.dialog_,n)}};var oe={};oe.reposition=function(e){var n=document.body.scrollTop||document.documentElement.scrollTop,t=n+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(n,t)+"px"};oe.isInlinePositionSetByStylesheet=function(e){for(var n=0;n<document.styleSheets.length;++n){var t=document.styleSheets[n],r=null;try{r=t.cssRules}catch{}if(r)for(var s=0;s<r.length;++s){var a=r[s],i=null;try{i=document.querySelectorAll(a.selectorText)}catch{}if(!(!i||!Tp(i,e))){var o=a.style.getPropertyValue("top"),l=a.style.getPropertyValue("bottom");if(o&&o!=="auto"||l&&l!=="auto")return!0}}}return!1};oe.needsCentering=function(e){var n=window.getComputedStyle(e);return n.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!oe.isInlinePositionSetByStylesheet(e)};oe.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new nd(e)};oe.registerDialog=function(e){e.showModal||oe.forceRegisterDialog(e)};oe.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(n){this.forwardTab_=void 0,n.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(n){var t=[];n.forEach(function(r){for(var s=0,a;a=r.removedNodes[s];++s)a instanceof Element&&(a.localName==="dialog"&&t.push(a),t=t.concat(a.querySelectorAll("dialog")))}),t.length&&e(t)}))};oe.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};oe.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};oe.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,n=0,t;t=this.pendingDialogStack[n];++n)t.updateZIndex(--e,--e),n===0&&(this.overlay.style.zIndex=--e);var r=this.pendingDialogStack[0];if(r){var s=r.dialog.parentNode||document.body;s.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};oe.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=Wr(e);){for(var n=0,t;t=this.pendingDialogStack[n];++n)if(t.dialog===e)return n===0;e=e.parentElement}return!1};oe.DialogManager.prototype.handleFocus_=function(e){var n=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(n)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Ql(n),this.forwardTab_!==void 0)){var t=this.pendingDialogStack[0],r=t.dialog,s=r.compareDocumentPosition(n);return s&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():n!==document.documentElement&&document.documentElement.focus()),!1}};oe.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var n=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),t=this.pendingDialogStack[0];t&&Xl(t.dialog,n)&&t.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};oe.DialogManager.prototype.checkDOM_=function(e){var n=this.pendingDialogStack.slice();n.forEach(function(t){e.indexOf(t.dialog)!==-1?t.downgradeModal():t.maybeHideModal()})};oe.DialogManager.prototype.pushDialog=function(e){var n=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=n?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};oe.DialogManager.prototype.removeDialog=function(e){var n=this.pendingDialogStack.indexOf(e);n!==-1&&(this.pendingDialogStack.splice(n,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Ir&&(oe.dm=new oe.DialogManager,oe.formSubmitter=null,oe.imagemapUseValue=null);if(Ir){var Gi=document.createElement("form");if(Gi.setAttribute("method","dialog"),Gi.method!=="dialog"){var yr=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(yr){var Np=yr.get;yr.get=function(){return Qs(this)?"dialog":Np.call(this)};var Rp=yr.set;yr.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):Rp.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",yr)}}document.addEventListener("click",function(e){if(oe.formSubmitter=null,oe.imagemapUseValue=null,!e.defaultPrevented){var n=e.target;if("composedPath"in e){var t=e.composedPath();n=t.shift()||n}if(!(!n||!Qs(n.form))){var r=n.type==="submit"&&["button","input"].indexOf(n.localName)>-1;if(!r){if(!(n.localName==="input"&&n.type==="image"))return;oe.imagemapUseValue=e.offsetX+","+e.offsetY}var s=Wr(n);s&&(oe.formSubmitter=n)}}},!1),document.addEventListener("submit",function(e){var n=e.target,t=Wr(n);if(!t){var r=ed(e),s=r&&r.getAttribute("formmethod")||n.getAttribute("method");s==="dialog"&&e.preventDefault()}});var Pp=HTMLFormElement.prototype.submit,qp=function(){if(!Qs(this))return Pp.call(this);var e=Wr(this);e&&e.close()};HTMLFormElement.prototype.submit=qp}var _p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Rn=m.forwardRef((e,n)=>{var t,r,{header:s,children:a,open:i,onBeforeClose:o,onCancel:l,closeOnBackdropClick:u,width:d,placement:g,portal:c,className:f,"aria-labelledby":y,style:w,onClick:v,onMouseDown:A}=e,h=_p(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:b}=ee(),j=m.useRef(b("navds-modal--polyfilled")),I=m.useRef(null),O=Mr(I,n),N=hn(),x=(t=As())===null||t===void 0?void 0:t.rootElement,q=sp({root:x}),F=Ya(!1),L=dt(!1)!==void 0;L&&!F&&console.error("Modals should not be nested"),m.useEffect(()=>{Ir&&I.current&&q&&(oe.registerDialog(I.current),I.current.classList.add(j.current)),I.current&&q&&(I.current.autofocus=!0)},[q]),m.useEffect(()=>{I.current&&q&&i!==void 0&&(i&&!I.current.open?I.current.showModal():!i&&I.current.open&&I.current.close())},[q,i]),Ep(I,q,L);const _=typeof d=="string"&&["small","medium"].includes(d),T=b("navds-modal",f,{[j.current]:Ir,"navds-modal--autowidth":!d,[`navds-modal--${d}`]:_,"navds-modal--top":g==="top"&&!Ir}),P=Object.assign(Object.assign({},w),_?{}:{width:d}),D=m.useRef({clientX:0,clientY:0}),C=z=>{D.current=z},B=u&&!Ir,V=z=>{if(z.target!==I.current)return;const se=I.current.getBoundingClientRect();Bi(D.current,se)||Bi(z,se)||o!==void 0&&o()===!1||I.current.close()},S=z=>{o&&o()===!1&&z.preventDefault()},H=!y&&!h["aria-label"]&&s?N:y,J=p.createElement("dialog",Object.assign({},h,{ref:O,className:T,style:P,onCancel:wr(l,S),onClick:B?wr(v,V):v,onMouseDown:B?wr(A,C):A,"aria-labelledby":H}),p.createElement(gg,{closeHandler:jp(I,s,o),ref:I},s&&p.createElement(Jl,null,s.label&&p.createElement(Or,{className:b("navds-modal__label")},s.label),p.createElement(hs,{size:(r=s.size)!==null&&r!==void 0?r:"medium",level:"1",id:N},s.icon&&p.createElement("span",{className:b("navds-modal__header-icon")},s.icon),s.heading)),a));return c?q?Oa.createPortal(J,q):null:J});Rn.Header=Jl;Rn.Body=hp;Rn.Footer=wp;var Mp=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Dp=m.forwardRef((e,n)=>{var{className:t}=e,r=Mp(e,["className"]);const{cn:s}=ee();return p.createElement("div",Object.assign({},r,{ref:n,className:s("navds-popover__content",t)}))});var Sp=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const qr=m.forwardRef((e,n)=>{var{className:t,children:r,anchorEl:s,arrow:a=!0,open:i,onClose:o,placement:l="top",offset:u,strategy:d,flip:g=!0}=e,c=Sp(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:f}=ee(),y=m.useRef(null),w=dt(!1)!==void 0,v=Ya(!1),A=d??(w?"fixed":"absolute"),h=v?!1:g,b=ot(!1),{update:j,refs:I,placement:O,middlewareData:{arrow:{x:N,y:x}={}},floatingStyles:q}=Kl({strategy:A,placement:l,open:i,middleware:[bl(u??(b?8:a?16:4)),h&&Il({padding:5,fallbackPlacements:["bottom","top"]}),hl({padding:12}),wl({element:y,padding:8})]});Nr(()=>{I.setReference(s)},[s]);const F=Mr(I.setFloating,n);Nr(()=>{if(!I.reference.current||!I.floating.current||!i)return;const _=ga(I.reference.current,I.floating.current,j);return()=>_()},[I.floating,I.reference,j,i,s]);const L={top:"bottom",right:"left",bottom:"top",left:"right"}[O.split("-")[0]];return p.createElement(fc,{asChild:!0,safeZone:{anchor:s,dismissable:I.floating.current},onDismiss:()=>i&&o?.(),enabled:i},p.createElement("div",Object.assign({ref:F},c,{className:f("navds-popover",t,{"navds-popover--hidden":!i||!s}),style:Object.assign(Object.assign({},c.style),q),"data-placement":O,"aria-hidden":!i||!s}),r,a&&!b&&p.createElement("div",{ref:_=>{y.current=_},style:Object.assign(Object.assign(Object.assign({},N!=null?{left:N}:{}),x!=null?{top:x}:{}),L?{[L]:"-0.5rem"}:{}),className:f("navds-popover__arrow")})))});qr.Content=Dp;const xp={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},Fp=({open:e,children:n,onClose:t,anchor:r,locale:s,translate:a,variant:i,popoverProps:o})=>{const l=Gn("global",kp(s)),{cn:u}=ee(),d=m.useRef(null),g=dt(!1)!==void 0;return cg("screen and (min-width: 768px)",!0)&&!g?p.createElement(qr,Object.assign({arrow:!1,anchorEl:r,open:e,onClose:t,placement:"bottom-start",role:"dialog",className:u("navds-date__popover",{"navds-date":i==="month"}),flip:!1},o),n):p.createElement(Rn,{ref:d,open:e,onClose:f=>{f.stopPropagation(),t()},"aria-label":a(xp[i]),className:u("navds-date__modal",{"navds-date__nested-modal":g,"navds-date":i==="month"}),closeOnBackdropClick:!0,placement:"top"},p.createElement("div",{className:u("navds-date__modal-body")},n,p.createElement(Ne,{variant:"tertiary",onClick:()=>{var f;return(f=d?.current)===null||f===void 0?void 0:f.close()},size:"small",type:"button"},l("close"))))};function rd(e){return!!(e&&typeof e=="object"&&"from"in e)}const Vp={},Yr={};function zr(e,n){try{const r=(Vp[e]||=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format)(n).split("GMT")[1]||"";return r in Yr?Yr[r]:Ui(r,r.split(":"))}catch{if(e in Yr)return Yr[e];const t=e?.match(Lp);return t?Ui(e,t.slice(1)):NaN}}const Lp=/([+-]\d\d):?(\d\d)?/;function Ui(e,n){const t=+n[0],r=+(n[1]||0);return Yr[e]=t>0?t*60+r:t*60-r}class Tn extends Date{constructor(...n){super(),n.length>1&&typeof n[n.length-1]=="string"&&(this.timeZone=n.pop()),this.internal=new Date,isNaN(zr(this.timeZone,this))?this.setTime(NaN):n.length?typeof n[0]=="number"&&(n.length===1||n.length===2&&typeof n[1]!="number")?this.setTime(n[0]):typeof n[0]=="string"?this.setTime(+new Date(n[0])):n[0]instanceof Date?this.setTime(+n[0]):(this.setTime(+new Date(...n)),td(this),ka(this)):this.setTime(Date.now())}static tz(n,...t){return t.length?new Tn(...t,n):new Tn(Date.now(),n)}withTimeZone(n){return new Tn(+this,n)}getTimezoneOffset(){return-zr(this.timeZone,this)}setTime(n){return Date.prototype.setTime.apply(this,arguments),ka(this),+this}[Symbol.for("constructDateFrom")](n){return new Tn(+new Date(n),this.timeZone)}}const Hi=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!Hi.test(e))return;const n=e.replace(Hi,"$1UTC");Tn.prototype[n]&&(e.startsWith("get")?Tn.prototype[e]=function(){return this.internal[n]()}:(Tn.prototype[e]=function(){return Date.prototype[n].apply(this.internal,arguments),Cp(this),+this},Tn.prototype[n]=function(){return Date.prototype[n].apply(this,arguments),ka(this),+this}))});function ka(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function Cp(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),td(e)}function td(e){const n=zr(e.timeZone,e),t=new Date(+e);t.setUTCHours(t.getUTCHours()-1);const r=-new Date(+e).getTimezoneOffset(),s=-new Date(+t).getTimezoneOffset(),a=r-s,i=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();a&&i&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+a);const o=r-n;o&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+o);const l=zr(e.timeZone,e),d=-new Date(+e).getTimezoneOffset()-l,g=l!==n,c=d-o;if(g&&c){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+c);const f=zr(e.timeZone,e),y=l-f;y&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+y),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+y))}}class Ue extends Tn{static tz(n,...t){return t.length?new Ue(...t,n):new Ue(Date.now(),n)}toISOString(){const[n,t,r]=this.tzComponents(),s=`${n}${t}:${r}`;return this.internal.toISOString().slice(0,-1)+s}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[n,t,r,s]=this.internal.toUTCString().split(" ");return`${n?.slice(0,-1)} ${r} ${t} ${s}`}toTimeString(){const n=this.internal.toUTCString().split(" ")[4],[t,r,s]=this.tzComponents();return`${n} GMT${t}${r}${s} (${Bp(this.timeZone,this)})`}toLocaleString(n,t){return Date.prototype.toLocaleString.call(this,n,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(n,t){return Date.prototype.toLocaleDateString.call(this,n,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(n,t){return Date.prototype.toLocaleTimeString.call(this,n,{...t,timeZone:t?.timeZone||this.timeZone})}tzComponents(){const n=this.getTimezoneOffset(),t=n>0?"-":"+",r=String(Math.floor(Math.abs(n)/60)).padStart(2,"0"),s=String(Math.abs(n)%60).padStart(2,"0");return[t,r,s]}withTimeZone(n){return new Ue(+this,n)}[Symbol.for("constructDateFrom")](n){return new Ue(+new Date(n),this.timeZone)}}function Bp(e,n){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(n).slice(12)}var Q;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(Q||(Q={}));var je;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(je||(je={}));var yn;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(yn||(yn={}));var tn;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(tn||(tn={}));const Yi=5,Kp=4;function Gp(e,n){const t=n.startOfMonth(e),r=t.getDay()>0?t.getDay():7,s=n.addDays(e,-r+1),a=n.addDays(s,Yi*7-1);return n.getMonth(e)===n.getMonth(a)?Yi:Kp}function sd(e,n){const t=n.startOfMonth(e),r=t.getDay();return r===1?t:r===0?n.addDays(t,-1*6):n.addDays(t,-1*(r-1))}function Up(e,n){const t=sd(e,n),r=Gp(e,n);return n.addDays(t,r*7-1)}class Un{constructor(n,t){this.Date=Date,this.today=()=>this.overrides?.today?this.overrides.today():this.options.timeZone?Ue.tz(this.options.timeZone):new this.Date,this.newDate=(r,s,a)=>this.overrides?.newDate?this.overrides.newDate(r,s,a):this.options.timeZone?new Ue(r,s,a,this.options.timeZone):new Date(r,s,a),this.addDays=(r,s)=>this.overrides?.addDays?this.overrides.addDays(r,s):ft(r,s),this.addMonths=(r,s)=>this.overrides?.addMonths?this.overrides.addMonths(r,s):Sa(r,s),this.addWeeks=(r,s)=>this.overrides?.addWeeks?this.overrides.addWeeks(r,s):mf(r,s),this.addYears=(r,s)=>this.overrides?.addYears?this.overrides.addYears(r,s):xa(r,s),this.differenceInCalendarDays=(r,s)=>this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(r,s):Wn(r,s),this.differenceInCalendarMonths=(r,s)=>this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(r,s):pf(r,s),this.eachMonthOfInterval=r=>this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(r):Ol(r),this.endOfBroadcastWeek=r=>this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(r):Up(r,this),this.endOfISOWeek=r=>this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(r):yf(r),this.endOfMonth=r=>this.overrides?.endOfMonth?this.overrides.endOfMonth(r):Tl(r),this.endOfWeek=(r,s)=>this.overrides?.endOfWeek?this.overrides.endOfWeek(r,s):Nl(r,this.options),this.endOfYear=r=>this.overrides?.endOfYear?this.overrides.endOfYear(r):Ns(r),this.format=(r,s,a)=>{const i=this.overrides?.format?this.overrides.format(r,s,this.options):ur(r,s,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(i):i},this.getISOWeek=r=>this.overrides?.getISOWeek?this.overrides.getISOWeek(r):Va(r),this.getMonth=(r,s)=>this.overrides?.getMonth?this.overrides.getMonth(r,this.options):Ba(r,this.options),this.getYear=(r,s)=>this.overrides?.getYear?this.overrides.getYear(r,this.options):Ka(r,this.options),this.getWeek=(r,s)=>this.overrides?.getWeek?this.overrides.getWeek(r,this.options):Ca(r,this.options),this.isAfter=(r,s)=>this.overrides?.isAfter?this.overrides.isAfter(r,s):_l(r,s),this.isBefore=(r,s)=>this.overrides?.isBefore?this.overrides.isBefore(r,s):pt(r,s),this.isDate=r=>this.overrides?.isDate?this.overrides.isDate(r):El(r),this.isSameDay=(r,s)=>this.overrides?.isSameDay?this.overrides.isSameDay(r,s):Fa(r,s),this.isSameMonth=(r,s)=>this.overrides?.isSameMonth?this.overrides.isSameMonth(r,s):Pk(r,s),this.isSameYear=(r,s)=>this.overrides?.isSameYear?this.overrides.isSameYear(r,s):Fl(r,s),this.max=r=>this.overrides?.max?this.overrides.max(r):cf(r),this.min=r=>this.overrides?.min?this.overrides.min(r):ff(r),this.setMonth=(r,s)=>this.overrides?.setMonth?this.overrides.setMonth(r,s):Vl(r,s),this.setYear=(r,s)=>this.overrides?.setYear?this.overrides.setYear(r,s):Ll(r,s),this.startOfBroadcastWeek=(r,s)=>this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(r,this):sd(r,this),this.startOfDay=r=>this.overrides?.startOfDay?this.overrides.startOfDay(r):Kn(r),this.startOfISOWeek=r=>this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(r):lr(r),this.startOfMonth=r=>this.overrides?.startOfMonth?this.overrides.startOfMonth(r):dr(r),this.startOfWeek=(r,s)=>this.overrides?.startOfWeek?this.overrides.startOfWeek(r,this.options):Cn(r,this.options),this.startOfYear=r=>this.overrides?.startOfYear?this.overrides.startOfYear(r):kt(r),this.options={locale:ws,...n},this.overrides=t}getDigitMap(){const{numerals:n="latn"}=this.options,t=new Intl.NumberFormat("en-US",{numberingSystem:n}),r={};for(let s=0;s<10;s++)r[s.toString()]=t.format(s);return r}replaceDigits(n){const t=this.getDigitMap();return n.replace(/\d/g,r=>t[r]||r)}formatNumber(n){return this.replaceDigits(n.toString())}}const qn=new Un;class ad{constructor(n,t,r=qn){this.date=n,this.displayMonth=t,this.outside=!!(t&&!r.isSameMonth(n,t)),this.dateLib=r}isEqualTo(n){return this.dateLib.isSameDay(n.date,this.date)&&this.dateLib.isSameMonth(n.displayMonth,this.displayMonth)}}class Hp{constructor(n,t){this.date=n,this.weeks=t}}class Yp{constructor(n,t){this.days=t,this.weekNumber=n}}function Fn(e,n,t=!1,r=qn){let{from:s,to:a}=e;const{differenceInCalendarDays:i,isSameDay:o}=r;return s&&a?(i(a,s)<0&&([s,a]=[a,s]),i(n,s)>=(t?1:0)&&i(a,n)>=(t?1:0)):!t&&a?o(a,n):!t&&s?o(s,n):!1}function id(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function $a(e){return!!(e&&typeof e=="object"&&"from"in e)}function od(e){return!!(e&&typeof e=="object"&&"after"in e)}function ld(e){return!!(e&&typeof e=="object"&&"before"in e)}function dd(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function ud(e,n){return Array.isArray(e)&&e.every(n.isDate)}function gn(e,n,t=qn){const r=Array.isArray(n)?n:[n],{isSameDay:s,differenceInCalendarDays:a,isAfter:i}=t;return r.some(o=>{if(typeof o=="boolean")return o;if(t.isDate(o))return s(e,o);if(ud(o,t))return o.includes(e);if($a(o))return Fn(o,e,!1,t);if(dd(o))return Array.isArray(o.dayOfWeek)?o.dayOfWeek.includes(e.getDay()):o.dayOfWeek===e.getDay();if(id(o)){const l=a(o.before,e),u=a(o.after,e),d=l>0,g=u<0;return i(o.before,o.after)?g&&d:d||g}return od(o)?a(e,o.after)>0:ld(o)?a(o.before,e)>0:typeof o=="function"?o(e):!1})}function $p(e,n,t){const{disabled:r,hidden:s,modifiers:a,showOutsideDays:i,broadcastCalendar:o,today:l}=n,{isSameDay:u,isSameMonth:d,startOfMonth:g,isBefore:c,endOfMonth:f,isAfter:y}=t,w=n.startMonth&&g(n.startMonth),v=n.endMonth&&f(n.endMonth),A={[je.focused]:[],[je.outside]:[],[je.disabled]:[],[je.hidden]:[],[je.today]:[]},h={};for(const b of e){const{date:j,displayMonth:I}=b,O=!!(I&&!d(j,I)),N=!!(w&&c(j,w)),x=!!(v&&y(j,v)),q=!!(r&&gn(j,r,t)),F=!!(s&&gn(j,s,t))||N||x||!o&&!i&&O||o&&i===!1&&O,L=u(j,l??t.today());O&&A.outside.push(b),q&&A.disabled.push(b),F&&A.hidden.push(b),L&&A.today.push(b),a&&Object.keys(a).forEach(_=>{const T=a?.[_];T&&gn(j,T,t)&&(h[_]?h[_].push(b):h[_]=[b])})}return b=>{const j={[je.focused]:!1,[je.disabled]:!1,[je.hidden]:!1,[je.outside]:!1,[je.today]:!1},I={};for(const O in A){const N=A[O];j[O]=N.some(x=>x===b)}for(const O in h)I[O]=h[O].some(N=>N===b);return{...j,...I}}}function Wp(e,n,t={}){return Object.entries(e).filter(([,s])=>s===!0).reduce((s,[a])=>(t[a]?s.push(t[a]):n[je[a]]?s.push(n[je[a]]):n[yn[a]]&&s.push(n[yn[a]]),s),[n[Q.Day]])}function zp(e){return p.createElement("button",{...e})}function Jp(e){return p.createElement("span",{...e})}function Xp(e){const{size:n=24,orientation:t="left",className:r}=e;return p.createElement("svg",{className:r,width:n,height:n,viewBox:"0 0 24 24"},t==="up"&&p.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),t==="down"&&p.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),t==="left"&&p.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),t==="right"&&p.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function Qp(e){const{day:n,modifiers:t,...r}=e;return p.createElement("td",{...r})}function Zp(e){const{day:n,modifiers:t,...r}=e,s=p.useRef(null);return p.useEffect(()=>{t.focused&&s.current?.focus()},[t.focused]),p.createElement("button",{ref:s,...r})}function ev(e){const{options:n,className:t,components:r,classNames:s,...a}=e,i=[s[Q.Dropdown],t].join(" "),o=n?.find(({value:l})=>l===a.value);return p.createElement("span",{"data-disabled":a.disabled,className:s[Q.DropdownRoot]},p.createElement(r.Select,{className:i,...a},n?.map(({value:l,label:u,disabled:d})=>p.createElement(r.Option,{key:l,value:l,disabled:d},u))),p.createElement("span",{className:s[Q.CaptionLabel],"aria-hidden":!0},o?.label,p.createElement(r.Chevron,{orientation:"down",size:18,className:s[Q.Chevron]})))}function nv(e){return p.createElement("div",{...e})}function rv(e){return p.createElement("div",{...e})}function tv(e){const{calendarMonth:n,displayIndex:t,...r}=e;return p.createElement("div",{...r},e.children)}function sv(e){const{calendarMonth:n,displayIndex:t,...r}=e;return p.createElement("div",{...r})}function av(e){return p.createElement("table",{...e})}function iv(e){return p.createElement("div",{...e})}const gd=m.createContext(void 0);function cr(){const e=m.useContext(gd);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function ov(e){const{components:n}=cr();return p.createElement(n.Dropdown,{...e})}function lv(e){const{onPreviousClick:n,onNextClick:t,previousMonth:r,nextMonth:s,...a}=e,{components:i,classNames:o,labels:{labelPrevious:l,labelNext:u}}=cr(),d=m.useCallback(c=>{s&&t?.(c)},[s,t]),g=m.useCallback(c=>{r&&n?.(c)},[r,n]);return p.createElement("nav",{...a},p.createElement(i.PreviousMonthButton,{type:"button",className:o[Q.PreviousMonthButton],tabIndex:r?void 0:-1,"aria-disabled":r?void 0:!0,"aria-label":l(r),onClick:g},p.createElement(i.Chevron,{disabled:r?void 0:!0,className:o[Q.Chevron],orientation:"left"})),p.createElement(i.NextMonthButton,{type:"button",className:o[Q.NextMonthButton],tabIndex:s?void 0:-1,"aria-disabled":s?void 0:!0,"aria-label":u(s),onClick:d},p.createElement(i.Chevron,{disabled:s?void 0:!0,orientation:"right",className:o[Q.Chevron]})))}function dv(e){const{components:n}=cr();return p.createElement(n.Button,{...e})}function uv(e){return p.createElement("option",{...e})}function gv(e){const{components:n}=cr();return p.createElement(n.Button,{...e})}function mv(e){const{rootRef:n,...t}=e;return p.createElement("div",{...t,ref:n})}function cv(e){return p.createElement("select",{...e})}function fv(e){const{week:n,...t}=e;return p.createElement("tr",{...t})}function kv(e){return p.createElement("th",{...e})}function pv(e){return p.createElement("thead",{"aria-hidden":!0},p.createElement("tr",{...e}))}function vv(e){const{week:n,...t}=e;return p.createElement("th",{...t})}function yv(e){return p.createElement("th",{...e})}function bv(e){return p.createElement("tbody",{...e})}function hv(e){const{components:n}=cr();return p.createElement(n.Dropdown,{...e})}const Iv=Object.freeze(Object.defineProperty({__proto__:null,Button:zp,CaptionLabel:Jp,Chevron:Xp,Day:Qp,DayButton:Zp,Dropdown:ev,DropdownNav:nv,Footer:rv,Month:tv,MonthCaption:sv,MonthGrid:av,Months:iv,MonthsDropdown:ov,Nav:lv,NextMonthButton:dv,Option:uv,PreviousMonthButton:gv,Root:mv,Select:cv,Week:fv,WeekNumber:vv,WeekNumberHeader:yv,Weekday:kv,Weekdays:pv,Weeks:bv,YearsDropdown:hv},Symbol.toStringTag,{value:"Module"}));function wv(e){return{...Iv,...e}}function Av(e){const n={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([t,r])=>{t.startsWith("data-")&&(n[t]=r)}),n}function jv(){const e={};for(const n in Q)e[Q[n]]=`rdp-${Q[n]}`;for(const n in je)e[je[n]]=`rdp-${je[n]}`;for(const n in yn)e[yn[n]]=`rdp-${yn[n]}`;for(const n in tn)e[tn[n]]=`rdp-${tn[n]}`;return e}function md(e,n,t){return(t??new Un(n)).format(e,"LLLL y")}const Ev=md;function Tv(e,n,t){return(t??new Un(n)).format(e,"d")}function Ov(e,n=qn){return n.format(e,"LLLL")}function Nv(e,n=qn){return e<10?n.formatNumber(`0${e.toLocaleString()}`):n.formatNumber(`${e.toLocaleString()}`)}function Rv(){return""}function Pv(e,n,t){return(t??new Un(n)).format(e,"cccccc")}function cd(e,n=qn){return n.format(e,"yyyy")}const qv=cd,_v=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:md,formatDay:Tv,formatMonthCaption:Ev,formatMonthDropdown:Ov,formatWeekNumber:Nv,formatWeekNumberHeader:Rv,formatWeekdayName:Pv,formatYearCaption:qv,formatYearDropdown:cd},Symbol.toStringTag,{value:"Module"}));function Mv(e){return e?.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e?.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{..._v,...e}}function Dv(e,n,t,r,s){const{startOfMonth:a,startOfYear:i,endOfYear:o,eachMonthOfInterval:l,getMonth:u}=s;return l({start:i(e),end:o(e)}).map(c=>{const f=r.formatMonthDropdown(c,s),y=u(c),w=n&&c<a(n)||t&&c>a(t)||!1;return{value:y,label:f,disabled:w}})}function Sv(e,n={},t={}){let r={...n?.[Q.Day]};return Object.entries(e).filter(([,s])=>s===!0).forEach(([s])=>{r={...r,...t?.[s]}}),r}function xv(e,n,t){const r=e.today(),s=n?e.startOfISOWeek(r):e.startOfWeek(r),a=[];for(let i=0;i<7;i++){const o=e.addDays(s,i);a.push(o)}return a}function Fv(e,n,t,r){if(!e||!n)return;const{startOfYear:s,endOfYear:a,addYears:i,getYear:o,isBefore:l,isSameYear:u}=r,d=s(e),g=a(n),c=[];let f=d;for(;l(f,g)||u(f,g);)c.push(f),f=i(f,1);return c.map(y=>{const w=t.formatYearDropdown(y,r);return{value:o(y),label:w,disabled:!1}})}function fd(e,n,t){return(t??new Un(n)).format(e,"LLLL y")}const Vv=fd;function Lv(e,n,t,r){let s=(r??new Un(t)).format(e,"PPPP");return n?.today&&(s=`Today, ${s}`),s}function kd(e,n,t,r){let s=(r??new Un(t)).format(e,"PPPP");return n.today&&(s=`Today, ${s}`),n.selected&&(s=`${s}, selected`),s}const Cv=kd;function Bv(){return""}function Kv(e){return"Choose the Month"}function Gv(e){return"Go to the Next Month"}function Uv(e){return"Go to the Previous Month"}function Hv(e,n,t){return(t??new Un(n)).format(e,"cccc")}function Yv(e,n){return`Week ${e}`}function $v(e){return"Week Number"}function Wv(e){return"Choose the Year"}const zv=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:Vv,labelDay:Cv,labelDayButton:kd,labelGrid:fd,labelGridcell:Lv,labelMonthDropdown:Kv,labelNav:Bv,labelNext:Gv,labelPrevious:Uv,labelWeekNumber:Yv,labelWeekNumberHeader:$v,labelWeekday:Hv,labelYearDropdown:Wv},Symbol.toStringTag,{value:"Module"})),vt=e=>e instanceof HTMLElement?e:null,Zs=e=>[...e.querySelectorAll("[data-animated-month]")??[]],Jv=e=>vt(e.querySelector("[data-animated-month]")),ea=e=>vt(e.querySelector("[data-animated-caption]")),na=e=>vt(e.querySelector("[data-animated-weeks]")),Xv=e=>vt(e.querySelector("[data-animated-nav]")),Qv=e=>vt(e.querySelector("[data-animated-weekdays]"));function Zv(e,n,{classNames:t,months:r,focused:s,dateLib:a}){const i=m.useRef(null),o=m.useRef(r),l=m.useRef(!1);m.useLayoutEffect(()=>{const u=o.current;if(o.current=r,!n||!e.current||!(e.current instanceof HTMLElement)||r.length===0||u.length===0||r.length!==u.length)return;const d=a.isSameMonth(r[0].date,u[0].date),g=a.isAfter(r[0].date,u[0].date),c=g?t[tn.caption_after_enter]:t[tn.caption_before_enter],f=g?t[tn.weeks_after_enter]:t[tn.weeks_before_enter],y=i.current,w=e.current.cloneNode(!0);if(w instanceof HTMLElement?(Zs(w).forEach(b=>{if(!(b instanceof HTMLElement))return;const j=Jv(b);j&&b.contains(j)&&b.removeChild(j);const I=ea(b);I&&I.classList.remove(c);const O=na(b);O&&O.classList.remove(f)}),i.current=w):i.current=null,l.current||d||s)return;const v=y instanceof HTMLElement?Zs(y):[],A=Zs(e.current);if(A&&A.every(h=>h instanceof HTMLElement)&&v&&v.every(h=>h instanceof HTMLElement)){l.current=!0,e.current.style.isolation="isolate";const h=Xv(e.current);h&&(h.style.zIndex="1"),A.forEach((b,j)=>{const I=v[j];if(!I)return;b.style.position="relative",b.style.overflow="hidden";const O=ea(b);O&&O.classList.add(c);const N=na(b);N&&N.classList.add(f);const x=()=>{l.current=!1,e.current&&(e.current.style.isolation=""),h&&(h.style.zIndex=""),O&&O.classList.remove(c),N&&N.classList.remove(f),b.style.position="",b.style.overflow="",b.contains(I)&&b.removeChild(I)};I.style.pointerEvents="none",I.style.position="absolute",I.style.overflow="hidden",I.setAttribute("aria-hidden","true");const q=Qv(I);q&&(q.style.opacity="0");const F=ea(I);F&&(F.classList.add(g?t[tn.caption_before_exit]:t[tn.caption_after_exit]),F.addEventListener("animationend",x));const L=na(I);L&&L.classList.add(g?t[tn.weeks_before_exit]:t[tn.weeks_after_exit]),b.insertBefore(I,b.firstChild)})}})}function ey(e,n,t,r){const s=e[0],a=e[e.length-1],{ISOWeek:i,fixedWeeks:o,broadcastCalendar:l}=t??{},{addDays:u,differenceInCalendarDays:d,differenceInCalendarMonths:g,endOfBroadcastWeek:c,endOfISOWeek:f,endOfMonth:y,endOfWeek:w,isAfter:v,startOfBroadcastWeek:A,startOfISOWeek:h,startOfWeek:b}=r,j=l?A(s,r):i?h(s):b(s),I=l?c(a):i?f(y(a)):w(y(a)),O=d(I,j),N=g(a,s)+1,x=[];for(let L=0;L<=O;L++){const _=u(j,L);if(n&&v(_,n))break;x.push(_)}const F=(l?35:42)*N;if(o&&x.length<F){const L=F-x.length;for(let _=0;_<L;_++){const T=u(x[x.length-1],1);x.push(T)}}return x}function ny(e){const n=[];return e.reduce((t,r)=>{const s=r.weeks.reduce((a,i)=>[...a,...i.days],n);return[...t,...s]},n)}function ry(e,n,t,r){const{numberOfMonths:s=1}=t,a=[];for(let i=0;i<s;i++){const o=r.addMonths(e,i);if(n&&o>n)break;a.push(o)}return a}function $i(e,n){const{month:t,defaultMonth:r,today:s=n.today(),numberOfMonths:a=1,endMonth:i,startMonth:o}=e;let l=t||r||s;const{differenceInCalendarMonths:u,addMonths:d,startOfMonth:g}=n;if(i&&u(i,l)<0){const c=-1*(a-1);l=d(i,c)}return o&&u(l,o)<0&&(l=o),g(l)}function ty(e,n,t,r){const{addDays:s,endOfBroadcastWeek:a,endOfISOWeek:i,endOfMonth:o,endOfWeek:l,getISOWeek:u,getWeek:d,startOfBroadcastWeek:g,startOfISOWeek:c,startOfWeek:f}=r,y=e.reduce((w,v)=>{const A=t.broadcastCalendar?g(v,r):t.ISOWeek?c(v):f(v),h=t.broadcastCalendar?a(v):t.ISOWeek?i(o(v)):l(o(v)),b=n.filter(N=>N>=A&&N<=h),j=t.broadcastCalendar?35:42;if(t.fixedWeeks&&b.length<j){const N=n.filter(x=>{const q=j-b.length;return x>h&&x<=s(h,q)});b.push(...N)}const I=b.reduce((N,x)=>{const q=t.ISOWeek?u(x):d(x),F=N.find(_=>_.weekNumber===q),L=new ad(x,v,r);return F?F.days.push(L):N.push(new Yp(q,[L])),N},[]),O=new Hp(v,I);return w.push(O),w},[]);return t.reverseMonths?y.reverse():y}function sy(e,n){let{startMonth:t,endMonth:r}=e;const{startOfYear:s,startOfDay:a,startOfMonth:i,endOfMonth:o,addYears:l,endOfYear:u,newDate:d,today:g}=n,{fromYear:c,toYear:f,fromMonth:y,toMonth:w}=e;!t&&y&&(t=y),!t&&c&&(t=n.newDate(c,0,1)),!r&&w&&(r=w),!r&&f&&(r=d(f,11,31));const v=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return t?t=i(t):c?t=d(c,0,1):!t&&v&&(t=s(l(e.today??g(),-100))),r?r=o(r):f?r=d(f,11,31):!r&&v&&(r=u(e.today??g())),[t&&a(t),r&&a(r)]}function ay(e,n,t,r){if(t.disableNavigation)return;const{pagedNavigation:s,numberOfMonths:a=1}=t,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:l}=r,u=s?a:1,d=i(e);if(!n)return o(d,u);if(!(l(n,e)<a))return o(d,u)}function iy(e,n,t,r){if(t.disableNavigation)return;const{pagedNavigation:s,numberOfMonths:a}=t,{startOfMonth:i,addMonths:o,differenceInCalendarMonths:l}=r,u=s?a??1:1,d=i(e);if(!n)return o(d,-u);if(!(l(d,n)<=0))return o(d,-u)}function oy(e){const n=[];return e.reduce((t,r)=>[...t,...r.weeks],n)}function _s(e,n){const[t,r]=m.useState(e);return[n===void 0?t:n,r]}function ly(e,n){const[t,r]=sy(e,n),{startOfMonth:s,endOfMonth:a}=n,i=$i(e,n),[o,l]=_s(i,e.month?i:void 0);m.useEffect(()=>{const O=$i(e,n);l(O)},[e.timeZone]);const u=ry(o,r,e,n),d=ey(u,e.endMonth?a(e.endMonth):void 0,e,n),g=ty(u,d,e,n),c=oy(g),f=ny(g),y=iy(o,t,e,n),w=ay(o,r,e,n),{disableNavigation:v,onMonthChange:A}=e,h=O=>c.some(N=>N.days.some(x=>x.isEqualTo(O))),b=O=>{if(v)return;let N=s(O);t&&N<s(t)&&(N=s(t)),r&&N>s(r)&&(N=s(r)),l(N),A?.(N)};return{months:g,weeks:c,days:f,navStart:t,navEnd:r,previousMonth:y,nextMonth:w,goToMonth:b,goToDay:O=>{h(O)||b(O.date)}}}var An;(function(e){e[e.Today=0]="Today",e[e.Selected=1]="Selected",e[e.LastFocused=2]="LastFocused",e[e.FocusedModifier=3]="FocusedModifier"})(An||(An={}));function Wi(e){return!e[je.disabled]&&!e[je.hidden]&&!e[je.outside]}function dy(e,n,t,r){let s,a=-1;for(const i of e){const o=n(i);Wi(o)&&(o[je.focused]&&a<An.FocusedModifier?(s=i,a=An.FocusedModifier):r?.isEqualTo(i)&&a<An.LastFocused?(s=i,a=An.LastFocused):t(i.date)&&a<An.Selected?(s=i,a=An.Selected):o[je.today]&&a<An.Today&&(s=i,a=An.Today))}return s||(s=e.find(i=>Wi(n(i)))),s}function uy(e,n,t,r,s,a,i){const{ISOWeek:o,broadcastCalendar:l}=a,{addDays:u,addMonths:d,addWeeks:g,addYears:c,endOfBroadcastWeek:f,endOfISOWeek:y,endOfWeek:w,max:v,min:A,startOfBroadcastWeek:h,startOfISOWeek:b,startOfWeek:j}=i;let O={day:u,week:g,month:d,year:c,startOfWeek:N=>l?h(N,i):o?b(N):j(N),endOfWeek:N=>l?f(N):o?y(N):w(N)}[e](t,n==="after"?1:-1);return n==="before"&&r?O=v([r,O]):n==="after"&&s&&(O=A([s,O])),O}function pd(e,n,t,r,s,a,i,o=0){if(o>365)return;const l=uy(e,n,t.date,r,s,a,i),u=!!(a.disabled&&gn(l,a.disabled,i)),d=!!(a.hidden&&gn(l,a.hidden,i)),g=l,c=new ad(l,g,i);return!u&&!d?c:pd(e,n,c,r,s,a,i,o+1)}function gy(e,n,t,r,s){const{autoFocus:a}=e,[i,o]=m.useState(),l=dy(n.days,t,r||(()=>!1),i),[u,d]=m.useState(a?l:void 0);return{isFocusTarget:w=>!!l?.isEqualTo(w),setFocused:d,focused:u,blur:()=>{o(u),d(void 0)},moveFocus:(w,v)=>{if(!u)return;const A=pd(w,v,u,n.navStart,n.navEnd,e,s);A&&(n.goToDay(A),d(A))}}}function my(e,n){const{selected:t,required:r,onSelect:s}=e,[a,i]=_s(t,s?t:void 0),o=s?t:a,{isSameDay:l}=n,u=f=>o?.some(y=>l(y,f))??!1,{min:d,max:g}=e;return{selected:o,select:(f,y,w)=>{let v=[...o??[]];if(u(f)){if(o?.length===d||r&&o?.length===1)return;v=o?.filter(A=>!l(A,f))}else o?.length===g?v=[f]:v=[...v,f];return s||i(v),s?.(v,f,y,w),v},isSelected:u}}function cy(e,n,t=0,r=0,s=!1,a=qn){const{from:i,to:o}=n||{},{isSameDay:l,isAfter:u,isBefore:d}=a;let g;if(!i&&!o)g={from:e,to:t>0?void 0:e};else if(i&&!o)l(i,e)?s?g={from:i,to:void 0}:g=void 0:d(e,i)?g={from:e,to:i}:g={from:i,to:e};else if(i&&o)if(l(i,e)&&l(o,e))s?g={from:i,to:o}:g=void 0;else if(l(i,e))g={from:i,to:t>0?void 0:e};else if(l(o,e))g={from:e,to:t>0?void 0:e};else if(d(e,i))g={from:e,to:o};else if(u(e,i))g={from:i,to:e};else if(u(e,o))g={from:i,to:e};else throw new Error("Invalid range");if(g?.from&&g?.to){const c=a.differenceInCalendarDays(g.to,g.from);r>0&&c>r?g={from:e,to:void 0}:t>1&&c<t&&(g={from:e,to:void 0})}return g}function fy(e,n,t=qn){const r=Array.isArray(n)?n:[n];let s=e.from;const a=t.differenceInCalendarDays(e.to,e.from),i=Math.min(a,6);for(let o=0;o<=i;o++){if(r.includes(s.getDay()))return!0;s=t.addDays(s,1)}return!1}function zi(e,n,t=qn){return Fn(e,n.from,!1,t)||Fn(e,n.to,!1,t)||Fn(n,e.from,!1,t)||Fn(n,e.to,!1,t)}function ky(e,n,t=qn){const r=Array.isArray(n)?n:[n];if(r.filter(o=>typeof o!="function").some(o=>typeof o=="boolean"?o:t.isDate(o)?Fn(e,o,!1,t):ud(o,t)?o.some(l=>Fn(e,l,!1,t)):$a(o)?o.from&&o.to?zi(e,{from:o.from,to:o.to},t):!1:dd(o)?fy(e,o.dayOfWeek,t):id(o)?t.isAfter(o.before,o.after)?zi(e,{from:t.addDays(o.after,1),to:t.addDays(o.before,-1)},t):gn(e.from,o,t)||gn(e.to,o,t):od(o)||ld(o)?gn(e.from,o,t)||gn(e.to,o,t):!1))return!0;const i=r.filter(o=>typeof o=="function");if(i.length){let o=e.from;const l=t.differenceInCalendarDays(e.to,e.from);for(let u=0;u<=l;u++){if(i.some(d=>d(o)))return!0;o=t.addDays(o,1)}}return!1}function py(e,n){const{disabled:t,excludeDisabled:r,selected:s,required:a,onSelect:i}=e,[o,l]=_s(s,i?s:void 0),u=i?s:o;return{selected:u,select:(c,f,y)=>{const{min:w,max:v}=e,A=c?cy(c,u,w,v,a,n):void 0;return r&&t&&A?.from&&A.to&&ky({from:A.from,to:A.to},t,n)&&(A.from=c,A.to=void 0),i||l(A),i?.(A,c,f,y),A},isSelected:c=>u&&Fn(u,c,!1,n)}}function vy(e,n){const{selected:t,required:r,onSelect:s}=e,[a,i]=_s(t,s?t:void 0),o=s?t:a,{isSameDay:l}=n;return{selected:o,select:(g,c,f)=>{let y=g;return!r&&o&&o&&l(g,o)&&(y=void 0),s||i(y),s?.(y,g,c,f),y},isSelected:g=>o?l(o,g):!1}}function yy(e,n){const t=vy(e,n),r=my(e,n),s=py(e,n);switch(e.mode){case"single":return t;case"multiple":return r;case"range":return s;default:return}}function by(e){let n=e;n.timeZone&&(n={...e},n.today&&(n.today=new Ue(n.today,n.timeZone)),n.month&&(n.month=new Ue(n.month,n.timeZone)),n.defaultMonth&&(n.defaultMonth=new Ue(n.defaultMonth,n.timeZone)),n.startMonth&&(n.startMonth=new Ue(n.startMonth,n.timeZone)),n.endMonth&&(n.endMonth=new Ue(n.endMonth,n.timeZone)),n.mode==="single"&&n.selected?n.selected=new Ue(n.selected,n.timeZone):n.mode==="multiple"&&n.selected?n.selected=n.selected?.map(ae=>new Ue(ae,n.timeZone)):n.mode==="range"&&n.selected&&(n.selected={from:n.selected.from?new Ue(n.selected.from,n.timeZone):void 0,to:n.selected.to?new Ue(n.selected.to,n.timeZone):void 0}));const{components:t,formatters:r,labels:s,dateLib:a,locale:i,classNames:o}=m.useMemo(()=>{const ae={...ws,...n.locale};return{dateLib:new Un({locale:ae,weekStartsOn:n.broadcastCalendar?1:n.weekStartsOn,firstWeekContainsDate:n.firstWeekContainsDate,useAdditionalWeekYearTokens:n.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:n.useAdditionalDayOfYearTokens,timeZone:n.timeZone,numerals:n.numerals},n.dateLib),components:wv(n.components),formatters:Mv(n.formatters),labels:{...zv,...n.labels},locale:ae,classNames:{...jv(),...n.classNames}}},[n.locale,n.broadcastCalendar,n.weekStartsOn,n.firstWeekContainsDate,n.useAdditionalWeekYearTokens,n.useAdditionalDayOfYearTokens,n.timeZone,n.numerals,n.dateLib,n.components,n.formatters,n.labels,n.classNames]),{captionLayout:l,mode:u,navLayout:d,numberOfMonths:g=1,onDayBlur:c,onDayClick:f,onDayFocus:y,onDayKeyDown:w,onDayMouseEnter:v,onDayMouseLeave:A,onNextClick:h,onPrevClick:b,showWeekNumber:j,styles:I}=n,{formatCaption:O,formatDay:N,formatMonthDropdown:x,formatWeekNumber:q,formatWeekNumberHeader:F,formatWeekdayName:L,formatYearDropdown:_}=r,T=ly(n,a),{days:P,months:D,navStart:C,navEnd:B,previousMonth:V,nextMonth:S,goToMonth:H}=T,J=$p(P,n,a),{isSelected:z,select:se,selected:xe}=yy(n,a)??{},{blur:Z,focused:U,isFocusTarget:re,moveFocus:te,setFocused:ue}=gy(n,T,J,z??(()=>!1),a),{labelDayButton:Le,labelGridcell:Ce,labelGrid:Be,labelMonthDropdown:_n,labelNav:on,labelPrevious:fn,labelNext:Zn,labelWeekday:er,labelWeekNumber:fr,labelWeekNumberHeader:Hn,labelYearDropdown:E}=s,R=m.useMemo(()=>xv(a,n.ISOWeek),[a,n.ISOWeek]),M=u!==void 0||f!==void 0,Y=m.useCallback(()=>{V&&(H(V),b?.(V))},[V,H,b]),G=m.useCallback(()=>{S&&(H(S),h?.(S))},[H,S,h]),K=m.useCallback((ae,Ae)=>he=>{he.preventDefault(),he.stopPropagation(),ue(ae),se?.(ae.date,Ae,he),f?.(ae.date,Ae,he)},[se,f,ue]),X=m.useCallback((ae,Ae)=>he=>{ue(ae),y?.(ae.date,Ae,he)},[y,ue]),le=m.useCallback((ae,Ae)=>he=>{Z(),c?.(ae.date,Ae,he)},[Z,c]),pe=m.useCallback((ae,Ae)=>he=>{const Yn={ArrowLeft:["day",n.dir==="rtl"?"after":"before"],ArrowRight:["day",n.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[he.shiftKey?"year":"month","before"],PageDown:[he.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(Yn[he.key]){he.preventDefault(),he.stopPropagation();const[kn,At]=Yn[he.key];te(kn,At)}w?.(ae.date,Ae,he)},[te,w,n.dir]),Ze=m.useCallback((ae,Ae)=>he=>{v?.(ae.date,Ae,he)},[v]),kr=m.useCallback((ae,Ae)=>he=>{A?.(ae.date,Ae,he)},[A]),In=m.useCallback(ae=>Ae=>{const he=Number(Ae.target.value),Yn=a.setMonth(a.startOfMonth(ae),he);H(Yn)},[a,H]),Fs=m.useCallback(ae=>Ae=>{const he=Number(Ae.target.value),Yn=a.setYear(a.startOfMonth(ae),he);H(Yn)},[a,H]),{className:Vr,style:Lr}=m.useMemo(()=>({className:[o[Q.Root],n.className].filter(Boolean).join(" "),style:{...I?.[Q.Root],...n.style}}),[o,n.className,n.style,I]),Vs=Av(n),Cr=m.useRef(null);Zv(Cr,!!n.animate,{classNames:o,months:D,focused:U,dateLib:a});const Ls={dayPickerProps:n,selected:xe,select:se,isSelected:z,months:D,nextMonth:S,previousMonth:V,goToMonth:H,getModifiers:J,components:t,classNames:o,styles:I,labels:s,formatters:r};return p.createElement(gd.Provider,{value:Ls},p.createElement(t.Root,{rootRef:n.animate?Cr:void 0,className:Vr,style:Lr,dir:n.dir,id:n.id,lang:n.lang,nonce:n.nonce,title:n.title,role:n.role,"aria-label":n["aria-label"],...Vs},p.createElement(t.Months,{className:o[Q.Months],style:I?.[Q.Months]},!n.hideNavigation&&!d&&p.createElement(t.Nav,{"data-animated-nav":n.animate?"true":void 0,className:o[Q.Nav],style:I?.[Q.Nav],"aria-label":on(),onPreviousClick:Y,onNextClick:G,previousMonth:V,nextMonth:S}),D.map((ae,Ae)=>{const he=Dv(ae.date,C,B,r,a),Yn=Fv(C,B,r,a);return p.createElement(t.Month,{"data-animated-month":n.animate?"true":void 0,className:o[Q.Month],style:I?.[Q.Month],key:Ae,displayIndex:Ae,calendarMonth:ae},d==="around"&&!n.hideNavigation&&Ae===0&&p.createElement(t.PreviousMonthButton,{type:"button",className:o[Q.PreviousMonthButton],tabIndex:V?void 0:-1,"aria-disabled":V?void 0:!0,"aria-label":fn(V),onClick:Y,"data-animated-button":n.animate?"true":void 0},p.createElement(t.Chevron,{disabled:V?void 0:!0,className:o[Q.Chevron],orientation:n.dir==="rtl"?"right":"left"})),p.createElement(t.MonthCaption,{"data-animated-caption":n.animate?"true":void 0,className:o[Q.MonthCaption],style:I?.[Q.MonthCaption],calendarMonth:ae,displayIndex:Ae},l?.startsWith("dropdown")?p.createElement(t.DropdownNav,{className:o[Q.Dropdowns],style:I?.[Q.Dropdowns]},l==="dropdown"||l==="dropdown-months"?p.createElement(t.MonthsDropdown,{className:o[Q.MonthsDropdown],"aria-label":_n(),classNames:o,components:t,disabled:!!n.disableNavigation,onChange:In(ae.date),options:he,style:I?.[Q.Dropdown],value:a.getMonth(ae.date)}):p.createElement("span",null,x(ae.date,a)),l==="dropdown"||l==="dropdown-years"?p.createElement(t.YearsDropdown,{className:o[Q.YearsDropdown],"aria-label":E(a.options),classNames:o,components:t,disabled:!!n.disableNavigation,onChange:Fs(ae.date),options:Yn,style:I?.[Q.Dropdown],value:a.getYear(ae.date)}):p.createElement("span",null,_(ae.date,a)),p.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},O(ae.date,a.options,a))):p.createElement(t.CaptionLabel,{className:o[Q.CaptionLabel],role:"status","aria-live":"polite"},O(ae.date,a.options,a))),d==="around"&&!n.hideNavigation&&Ae===g-1&&p.createElement(t.NextMonthButton,{type:"button",className:o[Q.NextMonthButton],tabIndex:S?void 0:-1,"aria-disabled":S?void 0:!0,"aria-label":Zn(S),onClick:G,"data-animated-button":n.animate?"true":void 0},p.createElement(t.Chevron,{disabled:S?void 0:!0,className:o[Q.Chevron],orientation:n.dir==="rtl"?"left":"right"})),Ae===g-1&&d==="after"&&!n.hideNavigation&&p.createElement(t.Nav,{"data-animated-nav":n.animate?"true":void 0,className:o[Q.Nav],style:I?.[Q.Nav],"aria-label":on(),onPreviousClick:Y,onNextClick:G,previousMonth:V,nextMonth:S}),p.createElement(t.MonthGrid,{role:"grid","aria-multiselectable":u==="multiple"||u==="range","aria-label":Be(ae.date,a.options,a)||void 0,className:o[Q.MonthGrid],style:I?.[Q.MonthGrid]},!n.hideWeekdays&&p.createElement(t.Weekdays,{"data-animated-weekdays":n.animate?"true":void 0,className:o[Q.Weekdays],style:I?.[Q.Weekdays]},j&&p.createElement(t.WeekNumberHeader,{"aria-label":Hn(a.options),className:o[Q.WeekNumberHeader],style:I?.[Q.WeekNumberHeader],scope:"col"},F()),R.map((kn,At)=>p.createElement(t.Weekday,{"aria-label":er(kn,a.options,a),className:o[Q.Weekday],key:At,style:I?.[Q.Weekday],scope:"col"},L(kn,a.options,a)))),p.createElement(t.Weeks,{"data-animated-weeks":n.animate?"true":void 0,className:o[Q.Weeks],style:I?.[Q.Weeks]},ae.weeks.map((kn,At)=>p.createElement(t.Week,{className:o[Q.Week],key:kn.weekNumber,style:I?.[Q.Week],week:kn},j&&p.createElement(t.WeekNumber,{week:kn,style:I?.[Q.WeekNumber],"aria-label":fr(kn.weekNumber,{locale:i}),className:o[Q.WeekNumber],scope:"row",role:"rowheader"},q(kn.weekNumber,a)),kn.days.map(Ge=>{const{date:wn}=Ge,ce=J(Ge);if(ce[je.focused]=!ce.hidden&&!!U?.isEqualTo(Ge),ce[yn.selected]=z?.(wn)||ce.selected,$a(xe)){const{from:Cs,to:Bs}=xe;ce[yn.range_start]=!!(Cs&&Bs&&a.isSameDay(wn,Cs)),ce[yn.range_end]=!!(Cs&&Bs&&a.isSameDay(wn,Bs)),ce[yn.range_middle]=Fn(xe,wn,!0,a)}const Qd=Sv(ce,I,n.modifiersStyles),Zd=Wp(ce,o,n.modifiersClassNames),eu=!M&&!ce.hidden?Ce(wn,ce,a.options,a):void 0;return p.createElement(t.Day,{key:`${a.format(wn,"yyyy-MM-dd")}_${a.format(Ge.displayMonth,"yyyy-MM")}`,day:Ge,modifiers:ce,className:Zd.join(" "),style:Qd,role:"gridcell","aria-selected":ce.selected||void 0,"aria-label":eu,"data-day":a.format(wn,"yyyy-MM-dd"),"data-month":Ge.outside?a.format(wn,"yyyy-MM"):void 0,"data-selected":ce.selected||void 0,"data-disabled":ce.disabled||void 0,"data-hidden":ce.hidden||void 0,"data-outside":Ge.outside||void 0,"data-focused":ce.focused||void 0,"data-today":ce.today||void 0},!ce.hidden&&M?p.createElement(t.DayButton,{className:o[Q.DayButton],style:I?.[Q.DayButton],type:"button",day:Ge,modifiers:ce,disabled:ce.disabled||void 0,tabIndex:re(Ge)?0:-1,"aria-label":Le(wn,ce,a.options,a),onClick:K(Ge,ce),onBlur:le(Ge,ce),onFocus:X(Ge,ce),onKeyDown:pe(Ge,ce),onMouseEnter:Ze(Ge,ce),onMouseLeave:kr(Ge,ce)},N(wn,a.options,a)):!ce.hidden&&N(Ge.date,a.options,a))}))))))})),n.footer&&p.createElement(t.Footer,{className:o[Q.Footer],style:I?.[Q.Footer],role:"status","aria-live":"polite"},n.footer)))}var hy=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const vd=m.forwardRef((e,n)=>{var{as:t="div",className:r,above:s,below:a,variant:i,asChild:o}=e,l=hy(e,["as","className","above","below","variant","asChild"]);const{cn:u}=ee(),d=i==="show"?s:a,g=i==="show"?a:s,c=o?_r:t;return p.createElement(c,Object.assign({},l,{ref:n,className:u("navds-responsive",r,{[`navds-responsive__above--${d}`]:d,[`navds-responsive__below--${g}`]:g})}))}),Iy=m.forwardRef((e,n)=>p.createElement(vd,Object.assign({},e,{ref:n,variant:"hide"}))),Wa=m.forwardRef((e,n)=>p.createElement(vd,Object.assign({},e,{ref:n,variant:"show"})));function bn(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function wy({day:e,fromDate:n,toDate:t}){const r=t&&Wn(e,Kn(t))>0,s=n&&Wn(Kn(n),e)>0;return r||s||!1}const yd="dd.MM.yyyy",Ay="MMMM yyyy",bd=[yd,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...bd];const ra=(e,n,t,r,s)=>{let a;const i=bd;if(s){for(const o of i)if(a=jr(e,o,n,{locale:t}),bn(a)&&!ta(e,n,t,i))return a;for(const o of[...i.map(l=>l.replace("yyyy","yy"))])if(a=jr(e,o,n,{locale:t}),bn(a)&&ta(e,n,t,i)){const l=jy(e,o,n,t);return bn(new Date(l))?new Date(l):new Date("Invalid date")}return new Date("Invalid date")}for(const o of i)if(a=jr(e,o,n,{locale:t}),bn(a)&&!ta(e,n,t,i))return a;return new Date("Invalid date")};function ta(e,n,t,r){let s;const a=r.map(i=>i.replace("yyyy","yy"));for(const i of a)if(s=jr(e,i,n,{locale:t}),bn(s))return!0;return!1}function jy(e,n,t,r){const s=jr(Ji(e,"19"),n.replace("yy","yyyy"),t,{locale:r}),a=jr(Ji(e,"20"),n.replace("yy","yyyy"),t,{locale:r});return bn(s)&&bn(a)?pt(s,Mk(new Date,{years:80}))?a:s:new Date("Invalid date")}function Ji(e,n){const t=e.slice(-2);return`${e.slice(0,e.length-2)}${n}${t}`}const Br=(e,n,t,r)=>ur(e,r??yd,{locale:n}),Ey=({month:e,start:n,end:t})=>{if(!e)return;let r=e;return n&&pt(r,n)&&(r=n),t&&_l(r,t)&&(r=t),dr(r)};function Ty(e,n,t,r){return Ol({start:kt(e),end:Ns(e)}).map(i=>{const o=ur(i,"LLLL",{locale:r}),l=Ba(i),u=n&&i<dr(n)||t&&i>dr(t)||!1;return{value:l,label:o,disabled:u}})}function Oy(e,n,t){if(!e||!n)return;const r=kt(e),s=Ns(n),a=[];let i=r;for(;pt(i,s)||Fl(i,s);)a.push(i),i=xa(i,1);return a.map(o=>{const l=ur(o,"yyyy",{locale:t});return{value:Ka(o),label:l,disabled:!1}})}function Ny({captionLayout:e,startMonth:n,endMonth:t,today:r}){const s=e==="dropdown",a=r??new Date;return n?n=dr(n):!n&&s&&(n=kt(xa(a,-100))),t?t=Tl(t):!t&&s&&(t=Ns(a)),[n&&Kn(n),t&&Kn(t)]}var Ry=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Py=e=>{var{day:n,modifiers:t,locale:r,children:s}=e,a=Ry(e,["day","modifiers","locale","children"]);const{cn:i}=ee(),o=m.useRef(null);return m.useEffect(()=>{var l;t.focused&&((l=o.current)===null||l===void 0||l.focus())},[t.focused]),t.hidden?p.createElement(p.Fragment,null):p.createElement("button",Object.assign({},a,{ref:o,"aria-hidden":n.outside,"aria-pressed":!!t.selected,"aria-label":ur(n.date,"cccc d",{locale:r}),"data-pressed":t.selected,"data-today":t.today||void 0,className:i(a.className,{"rdp-day_disabled":t.disabled,"rdp-day_selected":t.selected,"rdp-day_range_start":t.range_start,"rdp-day_range_middle":t.range_middle,"rdp-day_range_end":t.range_end,"rdp-day_today":t.today,"rdp-day_outside":t.outside,"rdp-day__weekend":t.weekend})}),s)};var qy=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const pa=m.forwardRef((e,n)=>{const{inputProps:t,errorId:r,showErrorMsg:s,hasError:a,size:i,inputDescriptionId:o,readOnly:l}=Fr(e,"select"),{children:u,label:d,className:g,description:c,htmlSize:f,hideLabel:y=!1,style:w}=e,v=qy(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:A}=ee(),h={onMouseDown:b=>{l&&(b.preventDefault(),b.target.focus())},onKeyDown:b=>{l&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(b.key)&&b.preventDefault()}};return p.createElement("div",{className:A(g,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!t.disabled,"navds-form-field--readonly":l,"navds-select--error":a,"navds-select--readonly":l})},p.createElement(we,{htmlFor:t.id,size:i,className:A("navds-form-field__label",{"navds-sr-only":y})},l&&p.createElement(Gl,null),d),!!c&&p.createElement(ne,{className:A("navds-form-field__description",{"navds-sr-only":y}),id:o,size:i,as:"div"},c),p.createElement("div",{className:A("navds-select__container"),style:w},p.createElement("select",Object.assign({},Xe(v,["error","errorId","size","readOnly"]),t,h,{ref:n,className:A("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:f}),u),p.createElement(Is,{className:A("navds-select__chevron"),"aria-hidden":!0})),p.createElement("div",{className:A("navds-form-field__error"),id:r,"aria-relevant":"additions removals","aria-live":"polite"},s&&p.createElement(lt,{size:i,showIcon:!0},e.error)))}),hd=({week:{weekNumber:e,days:n},onWeekNumberClick:t,className:r,style:s,showOnDesktop:a})=>{const i=qs().translate,{cn:o}=ee(),{getModifiers:l}=cr(),u=m.useMemo(()=>n.filter(g=>{const c=l(g);return!(c.hidden||c.outside||c.disabled)}).length===0,[n,l]),d=a?Wa:Iy;return!t||u?p.createElement(d,{above:"sm",asChild:!0},p.createElement("td",{className:"rdp-cell"},p.createElement(Or,{as:"span",textColor:"subtle",className:r,style:s,"aria-label":i("weekNumber",{week:e})},e))):p.createElement(d,{above:"sm",asChild:!0},p.createElement("td",{className:o("rdp-cell",{"navds-date__week-wrapper":!a})},p.createElement(Ne,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":i("selectWeekNumber",{week:e}),style:s,className:o("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{t(e,n.map(g=>g.date))},icon:p.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},_y=({onWeekNumberClick:e,weeks:n})=>{const t=qs().translate,{cn:r}=ee(),s=hn();return e?p.createElement(Wa,{below:"sm",asChild:!0},p.createElement("table",{className:"rdp-table",role:"grid"},p.createElement("tbody",{className:"rdp-tbody"},p.createElement("tr",{className:r("rdp-row navds-date__week-row")},p.createElement(Or,{as:"th",weight:"semibold",className:r("rdp-cell navds-date__week-cell")},p.createElement("span",{className:r("navds-date__week-wrapper"),id:s},t("week"))),n?.map(a=>p.createElement(hd,{key:a.weekNumber,week:a,onWeekNumberClick:e,showOnDesktop:!1,className:r("navds-date__week-wrapper")})))))):null};var My=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Dy=e=>{var{children:n,calendarMonth:t,locale:r,onWeekNumberClick:s}=e,a=My(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:i,goToMonth:o,previousMonth:l,nextMonth:u}=cr(),{captionLayout:d}=i,{cn:g}=ee(),c=qs().translate,f=m.useCallback((b,j)=>{const I=Number(j.target.value),O=Vl(dr(b),I);o(O)},[o]),y=m.useCallback((b,j)=>{const I=Number(j.target.value),O=Ll(dr(b),I);o(O)},[o]),[w,v]=Ny({captionLayout:d==="dropdown"?"dropdown":"label",startMonth:i.startMonth,endMonth:i.endMonth,today:i.today}),A=Ty(t.date,w,v,r),h=Oy(w,v,r);return p.createElement("div",Object.assign({},Xe(a,["displayIndex"])),p.createElement("div",{className:g("navds-date__caption")},d?.startsWith("dropdown")&&p.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:g("navds-sr-only")},ur(t.date,"LLLL y",{locale:r})),p.createElement(Ne,{variant:"tertiary-neutral",disabled:!l,onClick:()=>l&&o(l),icon:p.createElement(Tu,{title:c("goToPreviousMonth")}),className:g("navds-date__caption-button"),type:"button"}),d?.startsWith("dropdown")?p.createElement("div",{className:g("navds-date__caption")},p.createElement(pa,{label:c("month"),hideLabel:!0,className:g("navds-date__caption__month"),onChange:b=>f(t.date,b),value:Ba(t.date)},A?.map(({value:b,label:j,disabled:I})=>p.createElement("option",{key:b,value:b,disabled:I},j))),p.createElement(pa,{label:c("year"),hideLabel:!0,className:g("navds-date__caption__year"),onChange:b=>y(t.date,b),value:Ka(t.date)},h?.map(({value:b,label:j,disabled:I})=>p.createElement("option",{key:b,value:b,disabled:I},j)))):p.createElement(ne,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:g("navds-date__caption-label")},ur(t.date,"LLLL y",{locale:r})),p.createElement(Ne,{variant:"tertiary-neutral",icon:p.createElement(Nu,{title:c("goToNextMonth")}),onClick:()=>u&&o(u),disabled:!u,className:g("navds-date__caption-button"),type:"button"})),p.createElement(_y,{weeks:t.weeks,onWeekNumberClick:s}),n)};var Sy=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const xy={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},Id=e=>{var{className:n,dropdownCaption:t,disabled:r=[],disableWeekends:s=!1,showWeekNumber:a=!1,selected:i,fixedWeeks:o=!1,onWeekNumberClick:l,fromDate:u,toDate:d,month:g,mode:c,handleSelect:f,locale:y}=e,w=Sy(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:v}=ee(),A=Al(),h=y?Yl(y):A,b=c??"single";return p.createElement(by,Object.assign({captionLayout:t?"dropdown":"label",hideNavigation:!0,locale:h,mode:b,onSelect:(j,I)=>{if(b!=="range"||j||!rd(i)){f(j);return}if(!i.to){f({from:I,to:void 0});return}let O;Fa(i.to,I)?O=void 0:pt(I,i.to)?O={from:I,to:i.to}:O={from:i.to,to:I},f(O)},selected:i,classNames:xy,components:{MonthCaption:()=>p.createElement(p.Fragment,null),DayButton:m.useCallback(j=>p.createElement(Py,Object.assign({},j,{locale:h})),[h]),Month:m.useCallback(j=>p.createElement(Dy,Object.assign({},j,{locale:h,onWeekNumberClick:b==="multiple"?l:void 0})),[h,b,l]),Day:m.useCallback(j=>p.createElement("td",Object.assign({},Xe(j,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:m.useCallback(j=>p.createElement(hd,Object.assign({},j,{showOnDesktop:!0,onWeekNumberClick:b==="multiple"?l:void 0})),[b,l]),WeekNumberHeader:m.useCallback(j=>p.createElement(Wa,{above:"sm",asChild:!0},p.createElement("th",Object.assign({},j))),[]),Weekdays:m.useCallback(j=>p.createElement("thead",Object.assign({},j,{className:"rdp-head","aria-hidden":!0}),p.createElement("tr",{className:"rdp-head_row"},j.children)),[])},className:v("navds-date",n),disabled:j=>s&&ds(j)||gn(j,r)||wy({day:j,fromDate:u,toDate:d}),weekStartsOn:1,modifiers:{weekend:j=>s&&ds(j)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:a,fixedWeeks:o,showOutsideDays:!0,startMonth:u,endMonth:d,month:Ey({month:g,start:u,end:d})},Xe(w,["onSelect","role","id","defaultSelected"])))};var Fy=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Vy=m.forwardRef((e,n)=>{var{className:t,locale:r,translations:s,selected:a,defaultSelected:i,onSelect:o,mode:l}=e,u=Fy(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:d}=ee(),g=Gn("DatePicker",s,$l(r)),[c,f]=nt({defaultValue:i,value:a,onChange:y=>o?.(y)});return p.createElement(Wl,{translate:g},p.createElement("div",{ref:n,className:d("navds-date__standalone-wrapper",t)},p.createElement(Id,Object.assign({},u,{locale:r,handleSelect:f,selected:c,mode:l}))))});var Ly=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const cs=m.forwardRef((e,n)=>{var{children:t,locale:r,translations:s,selected:a,id:i,defaultSelected:o,wrapperClassName:l,open:u,onClose:d,onOpenToggle:g,strategy:c,mode:f}=e,y=Ly(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const w=Gn("DatePicker",s,$l(r)),{cn:v}=ee(),A=hn(i),[h,b]=nt({defaultValue:!1,value:u}),[j,I]=m.useState(null),O=Mr(I,n),[N,x]=nt({defaultValue:o,value:a,onChange:q=>{var F;let L=!1;f==="single"&&q?L=!0:rd(q)&&q.from&&q.to&&(L=!0,Fa(q.from,q.to)&&(L=!1)),L&&(d?.(),b(!1)),(F=y?.onSelect)===null||F===void 0||F.call(y,q)}});return p.createElement(Wl,{translate:w},p.createElement(vp,{open:h,onOpen:()=>{b(q=>!q),g?.()},ariaId:A,defined:!0},p.createElement("div",{ref:O,className:v("navds-date__wrapper",l)},t,p.createElement(Fp,{open:h,anchor:j,onClose:()=>{d?.(),h&&b(!1)},locale:r,translate:w,variant:f??"single",popoverProps:{id:A,strategy:c}},p.createElement(Id,Object.assign({},y,{locale:r,handleSelect:x,selected:N,mode:f}))))))});cs.Standalone=Vy;cs.Input=yp;const Cy=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),By=(e={})=>{var n;const{locale:t,required:r,defaultSelected:s,today:a=new Date,fromDate:i,toDate:o,disabled:l,disableWeekends:u,onDateChange:d,inputFormat:g,onValidate:c,defaultMonth:f,allowTwoDigitYear:y=!0}=e,[w,v]=m.useState(null),A=Al(),h=t?Yl(t):A,[b,j]=m.useState(s),[I,O]=m.useState((n=b??f)!==null&&n!==void 0?n:a),[N,x]=m.useState(b),[q,F]=m.useState(!1),L=b?Br(b,h,"date",g):"",[_,T]=m.useState(L),P=m.useCallback(Z=>{var U,re;F(Z),Z&&O((re=(U=N??b)!==null&&U!==void 0?U:f)!==null&&re!==void 0?re:a)},[f,b,N,a]),D=Z=>{d?.(Z),x(Z)},C=(Z={})=>c?.(Cy(Z));return{datepickerProps:{month:I,onMonthChange:O,onDayClick:(Z,{selected:U})=>{if(!(U&&r)){if(Z&&!U&&(P(!1),w?.focus()),U){D(void 0),T(""),C({isValidDate:!1,isEmpty:!0});return}D(Z),C(),O(Z),T(Z?Br(Z,h,"date",g):"")}},selected:N??new Date("Invalid date"),locale:t,fromDate:i,toDate:o,today:a,open:q,onClose:()=>{P(!1),w?.focus()},onOpenToggle:()=>P(!q),disabled:l,disableWeekends:u},inputProps:{onChange:Z=>{T(Z.target.value);const U=ra(Z.target.value,a,h,"date",y),re=i&&U&&Wn(i,U)>0,te=o&&U&&Wn(U,o)>0;if(!bn(U)||u&&ds(U)||l&&gn(U,l)){D(void 0),C({isInvalid:!bn(U),isWeekend:u&&ds(U),isDisabled:l&&gn(U,l),isValidDate:!1,isEmpty:!Z.target.value,isBefore:re??!1,isAfter:te??!1});return}if(re||te){D(void 0),C({isValidDate:!1,isBefore:re??!1,isAfter:te??!1});return}D(U),C(),O(f??U)},onFocus:Z=>{if(Z.target.readOnly)return;const U=ra(Z.target.value,a,h,"date",y);if(bn(U)){T(Br(U,h,"date",g));const re=i&&U&&Wn(i,U)>0,te=o&&U&&Wn(U,o)>0;!re&&!te&&O(U)}},onBlur:Z=>{const U=ra(Z.target.value,a,h,"date",y);bn(U)&&T(Br(U,h,"date",g))},value:_,setAnchorRef:v},reset:()=>{var Z;D(b),O((Z=b??f)!==null&&Z!==void 0?Z:a),T(L??""),j(s)},selectedDay:N,setSelected:Z=>{var U;D(Z),O((U=Z??f)!==null&&U!==void 0?U:a),T(Z?Br(Z,h,"date",g):"")}}};function Ke(e,n,t,r){return r?typeof r=="string"?{[`--__${e}c-${n}-${t}-xs`]:r}:Object.fromEntries(Object.entries(r).map(([s,a])=>[`--__${e}c-${n}-${t}-${s}`,a])):{}}const Ky={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Xi=(e,n,t,r,s,a)=>n.split(" ").map((i,o,l)=>{var u;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/l.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let d=`var(--${a}-${t}-${i})`;if(r.includes(i))d=i==="px"?"1px":i;else if(i.startsWith("space"))d=`var(--${a}-${i})`;else{const g=`--${a}-spacing-${i}`;d=`var(${(u=Ky[g])!==null&&u!==void 0?u:g})`}return s?i==="0"?"0":`calc(-1 * ${d})`:d}).join(" ");function dn(e,n,t,r,s,a=!1,i=[]){if(!s)return{};if(typeof s=="string")return{[`--__${e}c-${n}-${t}-xs`]:Xi(t,s,r,i,a,e)};const o={};return Object.entries(s).forEach(([l,u])=>{o[`--__${e}c-${n}-${t}-${l}`]=Xi(t,u,r,i,a,e)}),o}const Gy=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Uy=({children:e,className:n,padding:t,paddingInline:r,paddingBlock:s,margin:a,marginInline:i,marginBlock:o,width:l,minWidth:u,maxWidth:d,height:g,minHeight:c,maxHeight:f,position:y,inset:w,top:v,right:A,left:h,bottom:b,overflow:j,overflowX:I,overflowY:O,flexBasis:N,flexGrow:x,flexShrink:q,gridColumn:F})=>{const L=ot(!1),{cn:_}=ee(),T=L?"ax":"a",P=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},dn(T,"r","p","spacing",t)),dn(T,"r","pi","spacing",r)),dn(T,"r","pb","spacing",s)),dn(T,"r","m","spacing",a)),dn(T,"r","mi","spacing",i)),dn(T,"r","mb","spacing",o)),Ke(T,"r","w",l)),Ke(T,"r","minw",u)),Ke(T,"r","maxw",d)),Ke(T,"r","h",g)),Ke(T,"r","minh",c)),Ke(T,"r","maxh",f)),Ke(T,"r","position",y)),dn(T,"r","inset","spacing",w)),dn(T,"r","top","spacing",v)),dn(T,"r","right","spacing",A)),dn(T,"r","bottom","spacing",b)),dn(T,"r","left","spacing",h)),Ke(T,"r","overflow",j)),Ke(T,"r","overflowx",I)),Ke(T,"r","overflowy",O)),Ke(T,"r","flex-basis",N)),Ke(T,"r","flex-grow",x)),Ke(T,"r","flex-shrink",q)),Ke(T,"r","grid-column",F));return p.createElement(_r,{className:_({className:n,"navds-r-p":t,"navds-r-pi":r,"navds-r-pb":s,"navds-r-m":a,"navds-r-mi":i,"navds-r-mb":o,"navds-r-w":l,"navds-r-minw":u,"navds-r-maxw":d,"navds-r-h":g,"navds-r-minh":c,"navds-r-maxh":f,"navds-r-position":y,"navds-r-inset":w,"navds-r-top":v,"navds-r-right":A,"navds-r-bottom":b,"navds-r-left":h,"navds-r-overflow":j,"navds-r-overflowx":I,"navds-r-overflowy":O,"navds-r-flex-basis":N,"navds-r-flex-grow":x,"navds-r-flex-shrink":q,"navds-r-grid-column":F}),style:P},e)};var Hy=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const wd=m.forwardRef((e,n)=>{var{children:t,className:r,as:s="div",align:a,justify:i,wrap:o=!0,gap:l,style:u,direction:d="row",asChild:g}=e,c=Hy(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const y=ot(!1)?"ax":"a",{cn:w}=ee(),v=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},u),dn(y,"stack","gap","spacing",l)),Ke(y,"stack","direction",d)),Ke(y,"stack","align",a)),Ke(y,"stack","justify",i)),A=g?_r:s;return p.createElement(Uy,Object.assign({},c),p.createElement(A,Object.assign({},Xe(c,Gy),{ref:n,style:v,className:w("navds-stack",r,{"navds-vstack":d==="column","navds-hstack":d==="row","navds-stack-gap":l,"navds-stack-align":a,"navds-stack-justify":i,"navds-stack-direction":d,"navds-stack-wrap":o})}),t))});var Yy=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const ye=m.forwardRef((e,n)=>{var{as:t="div"}=e,r=Yy(e,["as"]);return p.createElement(wd,Object.assign({as:t},r,{ref:n,direction:"row"}))});var $y=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Me=m.forwardRef((e,n)=>{var{as:t="div"}=e,r=$y(e,["as"]);return p.createElement(wd,Object.assign({as:t},r,{ref:n,direction:"column",wrap:!1}))}),Er=()=>{const{cn:e}=ee();return p.createElement("span",{className:e("navds-stack__spacer")})};var Wy=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const za=m.forwardRef((e,n)=>{var{as:t="a",className:r,underline:s=!0,variant:a,inlineText:i=!1,"data-color":o}=e,l=Wy(e,["as","className","underline","variant","inlineText","data-color"]);const u=ot(!1),{cn:d}=ee();let g;return u?g=a:g=a??"action",p.createElement(t,Object.assign({"data-color":o??zy(g),"data-variant":g},l,{ref:n,className:d("navds-link",r,{[`navds-link--${g}`]:g,"navds-link--remove-underline":!s,"navds-link--inline-text":i})}))});function zy(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var Jy=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Xy=m.forwardRef((e,n)=>{var{className:t}=e,r=Jy(e,["className"]);const{cn:s}=ee();return p.createElement("tbody",Object.assign({},r,{ref:n,className:s("navds-table__body",t)}))});var Qy=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Ad=m.forwardRef((e,n)=>{var{className:t,children:r,align:s,textSize:a}=e,i=Qy(e,["className","children","align","textSize"]);const{cn:o}=ee();return p.createElement("th",Object.assign({ref:n,className:o("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${s}`]:s,"navds-label--small":a==="small"})},i),r)}),jd=m.createContext(null);var Zy=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const eb=m.forwardRef((e,n)=>{var t,r,s,a,{className:i,children:o,sortable:l=!1,sortKey:u}=e,d=Zy(e,["className","children","sortable","sortKey"]);const g=m.useContext(jd),{cn:c}=ee();return l&&!u&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),p.createElement(Ad,Object.assign({scope:"col",ref:n,className:c(i),"aria-sort":l?((t=g?.sort)===null||t===void 0?void 0:t.orderBy)===u?(r=g?.sort)===null||r===void 0?void 0:r.direction:"none":void 0},d),l?p.createElement("button",{type:"button",className:c("navds-table__sort-button"),onClick:l&&u?()=>{var f;return(f=g?.onSortChange)===null||f===void 0?void 0:f.call(g,u)}:void 0},o,((s=g?.sort)===null||s===void 0?void 0:s.orderBy)===u?((a=g?.sort)===null||a===void 0?void 0:a.direction)==="descending"?p.createElement(tg,{"aria-hidden":!0}):p.createElement(ag,{"aria-hidden":!0}):p.createElement(Pu,{"aria-hidden":!0})):o)});var nb=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Ed=m.forwardRef((e,n)=>{var{className:t,children:r="",align:s,textSize:a}=e,i=nb(e,["className","children","align","textSize"]);const{cn:o}=ee();return p.createElement(ne,Object.assign({as:"td",ref:n,className:o("navds-table__data-cell",t,{[`navds-table__data-cell--align-${s}`]:s}),size:a},i),r)});var rb=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const tb=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function sb(e){const n=parseFloat(e);return!Number.isNaN(n)&&Number.isFinite(n)}function Qi(e){return typeof e=="string"&&e[e.length-1]==="%"&&sb(e.substring(0,e.length-1))}function sa(e,n){n===0&&e?.style&&(e.style.display="none")}function ab(e,n){n===0&&e?.style&&(e.style.display="")}const ib=e=>{var{children:n,className:t,innerClassName:r,duration:s=250,easing:a="ease",height:i}=e,o=rb(e,["children","className","innerClassName","duration","easing","height"]);const{cn:l}=ee(),u=m.useRef(i),d=m.useRef(null),g=m.useRef(),c=m.useRef(),f=m.useRef(i),y=m.useRef("visible"),w=tb?0:s;typeof f.current=="number"?(typeof i!="string"&&(f.current=i<0?0:i),y.current="hidden"):Qi(f.current)&&(f.current=i==="0%"?0:i,y.current="hidden");const[v,A]=m.useState(f.current),[h,b]=m.useState(y.current),[j,I]=m.useState(!1);m.useEffect(()=>{sa(d.current,f.current)},[]),m.useEffect(()=>{if(i!==u.current&&d.current){ab(d.current,u.current),d.current.style.overflow="hidden";const q=d.current.offsetHeight;d.current.style.overflow="";const F=w;let L,_,T="hidden",P;const D=u.current==="auto";typeof i=="number"?(L=i<0?0:i,_=L):Qi(i)?(L=i==="0%"?0:i,_=L):(L=q,_="auto",T=void 0),D&&(_=L,L=q),A(L),b("hidden"),I(!D),clearTimeout(c.current),clearTimeout(g.current),D?(P=!0,c.current=setTimeout(()=>{A(_),b(T),I(P)},50),g.current=setTimeout(()=>{I(!1),sa(d.current,_)},F)):c.current=setTimeout(()=>{A(_),b(T),I(!1),i!=="auto"&&sa(d.current,L)},F)}return u.current=i,()=>{clearTimeout(c.current),clearTimeout(g.current)}},[i]);const O={height:v,overflow:h};j&&(O.transition=`height ${w}ms ${a} 0ms`,O.WebkitTransition=O.transition);const x=typeof o["aria-hidden"]<"u"?o["aria-hidden"]:i===0;return p.createElement("div",Object.assign({},o,{className:l(t),style:O}),p.createElement("div",{"aria-hidden":x,className:l(r),ref:d},n))};var ob=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Td=m.forwardRef((e,n)=>{var{className:t,selected:r=!1,shadeOnHover:s=!0}=e,a=ob(e,["className","selected","shadeOnHover"]);const{cn:i}=ee();return p.createElement("tr",Object.assign({},a,{ref:n,className:i("navds-table__row",t,{"navds-table__row--selected":r,"navds-table__row--shade-on-hover":s})}))});var lb=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const db=m.forwardRef((e,n)=>{var{className:t,children:r,content:s,togglePlacement:a="left",defaultOpen:i=!1,open:o,onOpenChange:l,expansionDisabled:u=!1,expandOnRowClick:d=!1,colSpan:g=999,contentGutter:c,onClick:f}=e,y=lb(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:w}=ee(),[v,A]=nt({defaultValue:i,value:o,onChange:l}),h=Gn("global"),b=hn(),j=O=>{A(N=>!N),O.stopPropagation()},I=O=>{d&&!u&&!Od(O.target)&&j(O)};return p.createElement(p.Fragment,null,p.createElement(Td,Object.assign({},y,{ref:n,className:w("navds-table__expandable-row",t,{"navds-table__expandable-row--open":v,"navds-table__expandable-row--expansion-disabled":u,"navds-table__expandable-row--clickable":d}),onClick:wr(f,I)}),a==="right"&&r,p.createElement(Ed,{className:w("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":v}),onClick:u?()=>null:j},!u&&p.createElement("button",{className:w("navds-table__toggle-expand-button"),type:"button","aria-controls":b,"aria-expanded":v,onClick:j},p.createElement(Is,{className:w("navds-table__expandable-icon"),title:h(v?"showLess":"showMore")}))),a==="left"&&r),p.createElement("tr",{"data-state":v?"open":"closed",className:w("navds-table__expanded-row"),"aria-hidden":!v,id:b},p.createElement("td",{colSpan:g,className:w("navds-table__expanded-row-cell")},p.createElement(ib,{className:w("navds-table__expanded-row-collapse"),innerClassName:w(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${c??a}`),height:v?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},s))))});function Od(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Od(e.parentElement)}var ub=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const gb=m.forwardRef((e,n)=>{var{className:t}=e,r=ub(e,["className"]);const{cn:s}=ee();return p.createElement("thead",Object.assign({},r,{ref:n,className:s("navds-table__header",t)}))});var mb=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Ee=m.forwardRef((e,n)=>{var{className:t,zebraStripes:r=!1,size:s="medium",onSortChange:a,sort:i,stickyHeader:o=!1}=e,l=mb(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:u}=ee();return p.createElement(jd.Provider,{value:{onSortChange:a,sort:i}},p.createElement("table",Object.assign({},l,{ref:n,className:u("navds-table",`navds-table--${s}`,t,{"navds-table--zebra-stripes":r,"navds-table--sticky-header":o})})))});Ee.Header=gb;Ee.Body=Xy;Ee.Row=Td;Ee.ColumnHeader=eb;Ee.HeaderCell=Ad;Ee.DataCell=Ed;Ee.ExpandableRow=db;var cb=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const fb=m.forwardRef((e,n)=>{var{children:t,className:r,variant:s,size:a="medium",icon:i,"data-color":o}=e,l=cb(e,["children","className","variant","size","icon","data-color"]);const{cn:u}=ee(),d=s?.endsWith("-filled")&&"strong",g=s?.endsWith("-moderate")&&"moderate";return p.createElement(ne,Object.assign({"data-color":o??kb(s),"data-variant":d||g||"outline"},l,{ref:n,as:"span",size:a==="medium"?"medium":"small",className:u("navds-tag",r,`navds-tag--${s}`,`navds-tag--${a}`)}),i&&p.createElement("span",{className:u("navds-tag__icon--left")},i),t)});function kb(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var pb=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Nd=m.forwardRef((e,n)=>{var{children:t,className:r,arrow:s=!0,placement:a="top",open:i,defaultOpen:o=!1,onOpenChange:l,offset:u,content:d,delay:g=150,id:c,keys:f,maxChar:y=80,describesChild:w=!1}=e,v=pb(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:A}=ee(),[h,b]=nt({defaultValue:o,value:i,onChange:l}),j=m.useRef(null),I=dt(!1),O=I?I.ref.current:void 0,{x:N,y:x,strategy:q,context:F,placement:L,middlewareData:{arrow:{x:_,y:T}={},hide:{referenceHidden:P}={}},refs:D}=Kl({placement:a,open:h,onOpenChange:J=>b(J),middleware:[bl(u??(s?8:4)),hl(),Il({padding:5,fallbackPlacements:["bottom","top"]}),wl({element:j,padding:5})],whileElementsMounted:I?(J,z,se)=>ga(J,z,se,{animationFrame:!0}):ga,strategy:I?"fixed":void 0}),{getReferenceProps:C,getFloatingProps:B}=gp([np(F,{handleClose:fp(),restMs:g}),up(F),lp(F)]),V=hn(c),S=Mr(n,D.setFloating);if(!t||t?.type===p.Fragment||t===p.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;d?.length>y&&h&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${d.length}
Tooltip-content: ${d}`);const H=w?h?{"aria-describedby":V}:{title:d}:{"aria-label":d};return p.createElement(p.Fragment,null,p.createElement(_r,Object.assign({ref:D.setReference},C(),H,{"aria-keyshortcuts":f?f.join("+"):void 0}),t),p.createElement(rc,{rootElement:O,asChild:!0},h&&p.createElement("div",Object.assign({},B(Object.assign(Object.assign({},v),{ref:S,style:{position:q,top:x??0,left:N??0,visibility:P?"hidden":"visible"},role:"tooltip",id:V,className:A("navds-tooltip","navds-detail navds-detail--small",r)})),{"data-side":L,"data-state":"open"}),d,f&&p.createElement("span",{className:A("navds-tooltip__keys"),"aria-hidden":!0},f.map(J=>p.createElement(Or,{as:"kbd",key:J,className:A("navds-tooltip__key")},J))),s&&p.createElement("div",{ref:J=>{j.current=J},className:A("navds-tooltip__arrow"),style:{left:_!=null?`${_}px`:"",top:T!=null?`${T}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[L]]:"-3.5px"}}))))}),vb=e=>{const n=Fr(e,"fieldset"),{inputProps:t}=n;return Object.assign(Object.assign({},n),{inputProps:{"aria-invalid":t["aria-invalid"],"aria-describedby":t["aria-describedby"]}})};var yb=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const bb=m.forwardRef((e,n)=>{var t,r,s;const{inputProps:a,errorId:i,showErrorMsg:o,hasError:l,size:u,readOnly:d,inputDescriptionId:g}=vb(e),{cn:c}=ee(),f=m.useContext(ms),{children:y,className:w,errorPropagation:v=!0,legend:A,description:h,hideLegend:b,nativeReadOnly:j=!0}=e,I=yb(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return p.createElement(ms.Provider,{value:{error:v?(t=e.error)!==null&&t!==void 0?t:f?.error:void 0,errorId:it({[i]:o,[(r=f?.errorId)!==null&&r!==void 0?r:""]:!!f?.error}),size:u,disabled:(s=e.disabled)!==null&&s!==void 0?s:!1,readOnly:d}},p.createElement("fieldset",Object.assign({},Xe(I,["errorId","error","size","readOnly"]),Xe(a,["aria-describedby","aria-invalid"]),{ref:n,className:c(w,"navds-fieldset",`navds-fieldset--${u}`,{"navds-fieldset--error":l,"navds-fieldset--readonly":d})}),p.createElement(we,{size:u,as:"legend",className:c("navds-fieldset__legend",{"navds-sr-only":!!b})},d&&(j?p.createElement(Ps,null):p.createElement(Gl,null)),A),!!h&&p.createElement(ne,{className:c("navds-fieldset__description",{"navds-sr-only":!!b}),id:g,size:u??"medium",as:"div"},e.description),y,p.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:c("navds-fieldset__error")},o&&p.createElement(lt,{size:u,showIcon:!0},e.error))))});var hb=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Rd=p.createContext(null),Ib=m.forwardRef((e,n)=>{var t,r,{children:s,className:a,name:i,defaultValue:o,value:l,onChange:u=()=>{},required:d,readOnly:g}=e,c=hb(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:f}=ee(),y=m.useContext(ms),w=hn();return p.createElement(bb,Object.assign({},c,{readOnly:g,ref:n,className:f(a,"navds-radio-group",`navds-radio-group--${(r=(t=c.size)!==null&&t!==void 0?t:y?.size)!==null&&r!==void 0?r:"medium"}`),nativeReadOnly:!1}),p.createElement(Rd.Provider,{value:{name:i??`radioGroupName-${w}`,defaultValue:o,value:l,onChange:u,required:d}},p.createElement("div",{className:f("navds-radio-buttons")},s)))});var wb=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Ab=e=>{const n=m.useContext(Rd),t=Fr(Xe(e,["description"]),"radio"),{inputProps:r,readOnly:s}=t,a=wb(t,["inputProps","readOnly"]);return n||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},a),{readOnly:s,inputProps:Object.assign(Object.assign({},r),{name:n?.name,defaultChecked:n?.defaultValue===void 0?void 0:n?.defaultValue===e.value,checked:n?.value===void 0?void 0:n?.value===e.value,onChange:i=>{var o,l;s||((o=e.onChange)===null||o===void 0||o.call(e,i),(l=n?.onChange)===null||l===void 0||l.call(n,e.value))},onClick:i=>{var o;if(s){i.preventDefault();return}(o=e?.onClick)===null||o===void 0||o.call(e,i)},required:n?.required,type:"radio"})})},Zi=m.forwardRef((e,n)=>{const{cn:t}=ee(),{inputProps:r,size:s,hasError:a,readOnly:i}=Ab(e),o=hn(),l=hn();return p.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${s}`,{"navds-radio--error":a,"navds-radio--disabled":r.disabled,"navds-radio--readonly":i}),"data-color":a?"danger":e["data-color"]},p.createElement("input",Object.assign({},Xe(e,["children","size","description","readOnly"]),Xe(r,["aria-invalid"]),{"aria-labelledby":it(o,!!e["aria-labelledby"]&&e["aria-labelledby"],{[l]:e.description}),className:t("navds-radio__input"),ref:n})),p.createElement("label",{htmlFor:r.id,className:t("navds-radio__label")},p.createElement("span",{className:t("navds-radio__content")},p.createElement(ne,{as:"span",id:o,size:s,"aria-hidden":!0},e.children),e.description&&p.createElement(ne,{as:"span",id:l,size:s,className:t("navds-form-field__subdescription navds-radio__description"),"aria-hidden":!0},e.description))))});var jb=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const eo=(e,n,t)=>{const{outerHeightStyle:r,overflow:s}=n;return t.current<20&&(r>0&&Math.abs((e.outerHeightStyle||0)-r)>1||e.overflow!==s)?(t.current+=1,n):e},no=e=>(e?.ownerDocument||document).defaultView||window;function Rt(e){return parseInt(e,10)||0}const Eb=m.forwardRef((e,n)=>{var t,r,{className:s,onChange:a,maxRows:i,minRows:o=1,autoScrollbar:l,style:u,value:d}=e,g=jb(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:c}=m.useRef(d!=null),f=m.useRef(null),y=Mr(f,n),w=m.useRef(null),v=m.useRef(0),[A,h]=m.useState({outerHeightStyle:0}),b=p.useCallback(()=>{const N=f.current,q=no(N).getComputedStyle(N);if(q.width==="0px")return{outerHeightStyle:0};const F=w.current;F.style.width=q.width,F.value=N.value||g.placeholder||"x",F.value.slice(-1)===`
`&&(F.value+=" ");const L=q.boxSizing,_=Rt(q.paddingBottom)+Rt(q.paddingTop),T=Rt(q.borderBottomWidth)+Rt(q.borderTopWidth),P=F.scrollHeight-_;F.value="x";const D=F.scrollHeight-_;let C=P;o&&(C=Math.max(Number(o)*D,C)),i&&(C=Math.min(Number(i)*D,C)),C=Math.max(C,D);const B=C+(L==="border-box"?_+T:0),V=Math.abs(C-P)<=1;return{outerHeightStyle:B,overflow:V}},[i,o,g.placeholder]),j=()=>{const N=b();ro(N)||h(x=>eo(x,N,v))};Nr(()=>{const N=()=>{const _=b();ro(_)||ts.flushSync(()=>{h(T=>eo(T,_,v))})},x=Yo(()=>{var _,T,P;if(v.current=0,!((_=f.current)===null||_===void 0)&&_.style.height||!((T=f.current)===null||T===void 0)&&T.style.width){((P=f.current)===null||P===void 0?void 0:P.style.overflow)==="hidden"&&h(D=>Object.assign(Object.assign({},D),{overflow:!1}));return}N()},166,!0),q=f.current,F=no(q);F.addEventListener("resize",x);let L;return typeof ResizeObserver<"u"&&(L=new ResizeObserver(x),L.observe(q)),()=>{x.clear(),F.removeEventListener("resize",x),L&&L.disconnect()}},[b]),Nr(()=>{j()}),m.useEffect(()=>{v.current=0},[d]);const I=N=>{v.current=0,c||j(),a&&a(N)},O=Object.assign({"--__ac-textarea-height":A.outerHeightStyle+"px","--__axc-textarea-height":A.outerHeightStyle+"px",overflow:A.overflow&&!l&&!(!((t=f.current)===null||t===void 0)&&t.style.height)&&!(!((r=f.current)===null||r===void 0)&&r.style.width)?"hidden":void 0},u);return p.createElement(p.Fragment,null,p.createElement("textarea",Object.assign({value:d,onChange:I,ref:y,rows:o,style:O},g,{className:s})),p.createElement("textarea",{"aria-hidden":!0,className:s,readOnly:!0,ref:w,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},u)}))});function ro(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Tb=({maxLengthId:e,maxLength:n,currentLength:t,size:r,i18n:s})=>{const{cn:a}=ee(),i=Gn("Textarea",{charsLeft:s?.counterLeft?`{chars} ${s.counterLeft}`:void 0,charsTooMany:s?.counterTooMuch?`{chars} ${s.counterTooMuch}`:void 0}),o=n-t,[l,u]=m.useState(o);return m.useEffect(()=>{const d=Yo(()=>{u(o)},2e3);return d(),()=>{d.clear()}},[o]),p.createElement(p.Fragment,null,p.createElement("span",{id:e,className:a("navds-sr-only")},i("maxLength",{maxLength:n})),o<20&&p.createElement("span",{role:"status",className:a("navds-textarea__sr-counter navds-sr-only")},to(l,i)),p.createElement(ne,{className:a("navds-textarea__counter",{"navds-textarea__counter--error":o<0}),size:r},to(o,i)))},to=(e,n)=>e<0?n("charsTooMany",{chars:Math.abs(e)}):n("charsLeft",{chars:e});var Ob=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Nb=m.forwardRef((e,n)=>{var t,r,s;const{inputProps:a,errorId:i,showErrorMsg:o,hasError:l,size:u,inputDescriptionId:d}=Fr(e,"textarea"),{label:g,className:c,description:f,maxLength:y,hideLabel:w=!1,resize:v,UNSAFE_autoScrollbar:A,i18n:h,readOnly:b}=e,j=Ob(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:I}=ee(),O=hn(),N=y!==void 0&&y>0,[x,q]=m.useState((t=e?.defaultValue)!==null&&t!==void 0?t:""),F=()=>{let _=j?.minRows?j?.minRows:3;return u==="small"&&(_=j?.minRows?j?.minRows:2),_},L=it(a["aria-describedby"],{[O??""]:N});return p.createElement("div",{className:I(c,"navds-form-field",`navds-form-field--${u}`,{"navds-form-field--disabled":!!a.disabled,"navds-form-field--readonly":b,"navds-textarea--readonly":b,"navds-textarea--error":l,"navds-textarea--autoscrollbar":A,[`navds-textarea--resize-${v===!0?"both":v}`]:v})},p.createElement(we,{htmlFor:a.id,size:u,className:I("navds-form-field__label",{"navds-sr-only":w})},b&&p.createElement(Ps,null),g),!!f&&p.createElement(ne,{className:I("navds-form-field__description",{"navds-sr-only":w}),id:d,size:u,as:"div"},f),p.createElement(Eb,Object.assign({},Xe(j,["error","errorId","size"]),a,{onChange:wr(e.onChange,e.value===void 0?_=>q(_.target.value):void 0),minRows:F(),autoScrollbar:A,ref:n,readOnly:b,className:I("navds-textarea__input","navds-body-short",`navds-body-short--${u??"medium"}`)},L?{"aria-describedby":L}:{})),N&&!b&&!a.disabled&&p.createElement(Tb,{maxLengthId:O,maxLength:y,currentLength:(s=(r=e.value)===null||r===void 0?void 0:r.length)!==null&&s!==void 0?s:x.length,size:u,i18n:h}),p.createElement("div",{className:I("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},o&&p.createElement(lt,{size:u,showIcon:!0},e.error)))});var Rb=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)n.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(t[r[s]]=e[r[s]]);return t};const Pb=m.forwardRef((e,n)=>{const{cn:t}=ee(),{inputProps:r,errorId:s,showErrorMsg:a,hasError:i,size:o,inputDescriptionId:l}=Fr(e,"textField"),{label:u,className:d,description:g,htmlSize:c,hideLabel:f=!1,type:y="text",readOnly:w}=e,v=Rb(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return p.createElement("div",{className:t(d,"navds-form-field",`navds-form-field--${o}`,{"navds-text-field--error":i,"navds-text-field--disabled":!!r.disabled,"navds-form-field--disabled":!!r.disabled,"navds-form-field--readonly":w,"navds-text-field--readonly":w})},p.createElement(we,{htmlFor:r.id,size:o,className:t("navds-form-field__label",{"navds-sr-only":f})},w&&p.createElement(Ps,null),u),!!g&&p.createElement(ne,{className:t("navds-form-field__description",{"navds-sr-only":f}),id:l,size:o,as:"div"},g),p.createElement("input",Object.assign({},Xe(v,["error","errorId","size"]),r,{ref:n,type:y,readOnly:w,className:t("navds-text-field__input","navds-body-short",`navds-body-short--${o??"medium"}`),size:c})),p.createElement("div",{className:t("navds-form-field__error"),id:s,"aria-relevant":"additions removals","aria-live":"polite"},a&&p.createElement(lt,{size:o,showIcon:!0},e.error)))});var Ve=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Ve||{}),yt=e=>e.type==="checkbox",sr=e=>e instanceof Date,$e=e=>e==null;const Pd=e=>typeof e=="object";var De=e=>!$e(e)&&!Array.isArray(e)&&Pd(e)&&!sr(e),qd=e=>De(e)&&e.target?yt(e.target)?e.target.checked:e.target.value:e,qb=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,_d=(e,n)=>e.has(qb(n)),_b=e=>{const n=e.constructor&&e.constructor.prototype;return De(n)&&n.hasOwnProperty("isPrototypeOf")},Ja=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Fe(e){let n;const t=Array.isArray(e),r=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)n=new Date(e);else if(!(Ja&&(e instanceof Blob||r))&&(t||De(e)))if(n=t?[]:{},!t&&!_b(e))n=e;else for(const s in e)e.hasOwnProperty(s)&&(n[s]=Fe(e[s]));else return e;return n}var Ms=e=>/^\w*$/.test(e),Pe=e=>e===void 0,Xa=e=>Array.isArray(e)?e.filter(Boolean):[],Qa=e=>Xa(e.replace(/["|']|\]/g,"").split(/\.|\[/)),$=(e,n,t)=>{if(!n||!De(e))return t;const r=(Ms(n)?[n]:Qa(n)).reduce((s,a)=>$e(s)?s:s[a],e);return Pe(r)||r===e?Pe(e[n])?t:e[n]:r},sn=e=>typeof e=="boolean",Ie=(e,n,t)=>{let r=-1;const s=Ms(n)?[n]:Qa(n),a=s.length,i=a-1;for(;++r<a;){const o=s[r];let l=t;if(r!==i){const u=e[o];l=De(u)||Array.isArray(u)?u:isNaN(+s[r+1])?{}:[]}if(o==="__proto__"||o==="constructor"||o==="prototype")return;e[o]=l,e=e[o]}};const fs={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},pn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Mn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Za=p.createContext(null);Za.displayName="HookFormContext";const Qn=()=>p.useContext(Za),Mb=e=>{const{children:n,...t}=e;return p.createElement(Za.Provider,{value:t},n)};var Md=(e,n,t,r=!0)=>{const s={defaultValues:n._defaultValues};for(const a in e)Object.defineProperty(s,a,{get:()=>{const i=a;return n._proxyFormState[i]!==pn.all&&(n._proxyFormState[i]=!r||pn.all),t&&(t[i]=!0),e[i]}});return s};const ei=typeof window<"u"?p.useLayoutEffect:p.useEffect;function Db(e){const n=Qn(),{control:t=n.control,disabled:r,name:s,exact:a}=e||{},[i,o]=p.useState(t._formState),l=p.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return ei(()=>t._subscribe({name:s,formState:l.current,exact:a,callback:u=>{!r&&o({...t._formState,...u})}}),[s,r,a]),p.useEffect(()=>{l.current.isValid&&t._setValid(!0)},[t]),p.useMemo(()=>Md(i,t,l.current,!1),[i,t])}var On=e=>typeof e=="string",Dd=(e,n,t,r,s)=>On(e)?(r&&n.watch.add(e),$(t,e,s)):Array.isArray(e)?e.map(a=>(r&&n.watch.add(a),$(t,a))):(r&&(n.watchAll=!0),t),va=e=>$e(e)||!Pd(e);function xn(e,n,t=new WeakSet){if(va(e)||va(n))return e===n;if(sr(e)&&sr(n))return e.getTime()===n.getTime();const r=Object.keys(e),s=Object.keys(n);if(r.length!==s.length)return!1;if(t.has(e)||t.has(n))return!0;t.add(e),t.add(n);for(const a of r){const i=e[a];if(!s.includes(a))return!1;if(a!=="ref"){const o=n[a];if(sr(i)&&sr(o)||De(i)&&De(o)||Array.isArray(i)&&Array.isArray(o)?!xn(i,o,t):i!==o)return!1}}return!0}function Sb(e){const n=Qn(),{control:t=n.control,name:r,defaultValue:s,disabled:a,exact:i,compute:o}=e||{},l=p.useRef(s),u=p.useRef(o),d=p.useRef(void 0);u.current=o;const g=p.useMemo(()=>t._getWatch(r,l.current),[t,r]),[c,f]=p.useState(u.current?u.current(g):g);return ei(()=>t._subscribe({name:r,formState:{values:!0},exact:i,callback:y=>{if(!a){const w=Dd(r,t._names,y.values||t._formValues,!1,l.current);if(u.current){const v=u.current(w);xn(v,d.current)||(f(v),d.current=v)}else f(w)}}}),[t,a,r,i]),p.useEffect(()=>t._removeUnmounted()),c}function bt(e){const n=Qn(),{name:t,disabled:r,control:s=n.control,shouldUnregister:a,defaultValue:i}=e,o=_d(s._names.array,t),l=p.useMemo(()=>$(s._formValues,t,$(s._defaultValues,t,i)),[s,t,i]),u=Sb({control:s,name:t,defaultValue:l,exact:!0}),d=Db({control:s,name:t,exact:!0}),g=p.useRef(e),c=p.useRef(s.register(t,{...e.rules,value:u,...sn(e.disabled)?{disabled:e.disabled}:{}}));g.current=e;const f=p.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!$(d.errors,t)},isDirty:{enumerable:!0,get:()=>!!$(d.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!$(d.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!$(d.validatingFields,t)},error:{enumerable:!0,get:()=>$(d.errors,t)}}),[d,t]),y=p.useCallback(h=>c.current.onChange({target:{value:qd(h),name:t},type:fs.CHANGE}),[t]),w=p.useCallback(()=>c.current.onBlur({target:{value:$(s._formValues,t),name:t},type:fs.BLUR}),[t,s._formValues]),v=p.useCallback(h=>{const b=$(s._fields,t);b&&h&&(b._f.ref={focus:()=>h.focus&&h.focus(),select:()=>h.select&&h.select(),setCustomValidity:j=>h.setCustomValidity(j),reportValidity:()=>h.reportValidity()})},[s._fields,t]),A=p.useMemo(()=>({name:t,value:u,...sn(r)||d.disabled?{disabled:d.disabled||r}:{},onChange:y,onBlur:w,ref:v}),[t,r,d.disabled,y,w,v,u]);return p.useEffect(()=>{const h=s._options.shouldUnregister||a;s.register(t,{...g.current.rules,...sn(g.current.disabled)?{disabled:g.current.disabled}:{}});const b=(j,I)=>{const O=$(s._fields,j);O&&O._f&&(O._f.mount=I)};if(b(t,!0),h){const j=Fe($(s._options.defaultValues,t));Ie(s._defaultValues,t,j),Pe($(s._formValues,t))&&Ie(s._formValues,t,j)}return!o&&s.register(t),()=>{(o?h&&!s._state.action:h)?s.unregister(t):b(t,!1)}},[t,s,o,a]),p.useEffect(()=>{s._setDisabledField({disabled:r,name:t})},[r,t,s]),p.useMemo(()=>({field:A,formState:d,fieldState:f}),[A,d,f])}var xb=(e,n,t,r,s)=>n?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[r]:s||!0}}:{},Jr=e=>Array.isArray(e)?e:[e],so=()=>{let e=[];return{get observers(){return e},next:s=>{for(const a of e)a.next&&a.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(a=>a!==s)}}),unsubscribe:()=>{e=[]}}},en=e=>De(e)&&!Object.keys(e).length,ni=e=>e.type==="file",vn=e=>typeof e=="function",ks=e=>{if(!Ja)return!1;const n=e?e.ownerDocument:0;return e instanceof(n&&n.defaultView?n.defaultView.HTMLElement:HTMLElement)},Sd=e=>e.type==="select-multiple",ri=e=>e.type==="radio",Fb=e=>ri(e)||yt(e),aa=e=>ks(e)&&e.isConnected;function Vb(e,n){const t=n.slice(0,-1).length;let r=0;for(;r<t;)e=Pe(e)?r++:e[n[r++]];return e}function Lb(e){for(const n in e)if(e.hasOwnProperty(n)&&!Pe(e[n]))return!1;return!0}function Se(e,n){const t=Array.isArray(n)?n:Ms(n)?[n]:Qa(n),r=t.length===1?e:Vb(e,t),s=t.length-1,a=t[s];return r&&delete r[a],s!==0&&(De(r)&&en(r)||Array.isArray(r)&&Lb(r))&&Se(e,t.slice(0,-1)),e}var xd=e=>{for(const n in e)if(vn(e[n]))return!0;return!1};function ps(e,n={}){const t=Array.isArray(e);if(De(e)||t)for(const r in e)Array.isArray(e[r])||De(e[r])&&!xd(e[r])?(n[r]=Array.isArray(e[r])?[]:{},ps(e[r],n[r])):$e(e[r])||(n[r]=!0);return n}function Fd(e,n,t){const r=Array.isArray(e);if(De(e)||r)for(const s in e)Array.isArray(e[s])||De(e[s])&&!xd(e[s])?Pe(n)||va(t[s])?t[s]=Array.isArray(e[s])?ps(e[s],[]):{...ps(e[s])}:Fd(e[s],$e(n)?{}:n[s],t[s]):t[s]=!xn(e[s],n[s]);return t}var Kr=(e,n)=>Fd(e,n,ps(n));const ao={value:!1,isValid:!1},io={value:!0,isValid:!0};var Vd=e=>{if(Array.isArray(e)){if(e.length>1){const n=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:n,isValid:!!n.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Pe(e[0].attributes.value)?Pe(e[0].value)||e[0].value===""?io:{value:e[0].value,isValid:!0}:io:ao}return ao},Ld=(e,{valueAsNumber:n,valueAsDate:t,setValueAs:r})=>Pe(e)?e:n?e===""?NaN:e&&+e:t&&On(e)?new Date(e):r?r(e):e;const oo={isValid:!1,value:null};var Cd=e=>Array.isArray(e)?e.reduce((n,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:n,oo):oo;function lo(e){const n=e.ref;return ni(n)?n.files:ri(n)?Cd(e.refs).value:Sd(n)?[...n.selectedOptions].map(({value:t})=>t):yt(n)?Vd(e.refs).value:Ld(Pe(n.value)?e.ref.value:n.value,e)}var Cb=(e,n,t,r)=>{const s={};for(const a of e){const i=$(n,a);i&&Ie(s,a,i._f)}return{criteriaMode:t,names:[...e],fields:s,shouldUseNativeValidation:r}},vs=e=>e instanceof RegExp,Gr=e=>Pe(e)?e:vs(e)?e.source:De(e)?vs(e.value)?e.value.source:e.value:e,uo=e=>({isOnSubmit:!e||e===pn.onSubmit,isOnBlur:e===pn.onBlur,isOnChange:e===pn.onChange,isOnAll:e===pn.all,isOnTouch:e===pn.onTouched});const go="AsyncFunction";var Bb=e=>!!e&&!!e.validate&&!!(vn(e.validate)&&e.validate.constructor.name===go||De(e.validate)&&Object.values(e.validate).find(n=>n.constructor.name===go)),Kb=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),mo=(e,n,t)=>!t&&(n.watchAll||n.watch.has(e)||[...n.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))));const Xr=(e,n,t,r)=>{for(const s of t||Object.keys(e)){const a=$(e,s);if(a){const{_f:i,...o}=a;if(i){if(i.refs&&i.refs[0]&&n(i.refs[0],s)&&!r)return!0;if(i.ref&&n(i.ref,i.name)&&!r)return!0;if(Xr(o,n))break}else if(De(o)&&Xr(o,n))break}}};function co(e,n,t){const r=$(e,t);if(r||Ms(t))return{error:r,name:t};const s=t.split(".");for(;s.length;){const a=s.join("."),i=$(n,a),o=$(e,a);if(i&&!Array.isArray(i)&&t!==a)return{name:t};if(o&&o.type)return{name:a,error:o};if(o&&o.root&&o.root.type)return{name:`${a}.root`,error:o.root};s.pop()}return{name:t}}var Gb=(e,n,t,r)=>{t(e);const{name:s,...a}=e;return en(a)||Object.keys(a).length>=Object.keys(n).length||Object.keys(a).find(i=>n[i]===(!r||pn.all))},Ub=(e,n,t)=>!e||!n||e===n||Jr(e).some(r=>r&&(t?r===n:r.startsWith(n)||n.startsWith(r))),Hb=(e,n,t,r,s)=>s.isOnAll?!1:!t&&s.isOnTouch?!(n||e):(t?r.isOnBlur:s.isOnBlur)?!e:(t?r.isOnChange:s.isOnChange)?e:!0,Yb=(e,n)=>!Xa($(e,n)).length&&Se(e,n),$b=(e,n,t)=>{const r=Jr($(e,t));return Ie(r,"root",n[t]),Ie(e,t,r),e},rs=e=>On(e);function fo(e,n,t="validate"){if(rs(e)||Array.isArray(e)&&e.every(rs)||sn(e)&&!e)return{type:t,message:rs(e)?e:"",ref:n}}var br=e=>De(e)&&!vs(e)?e:{value:e,message:""},ko=async(e,n,t,r,s,a)=>{const{ref:i,refs:o,required:l,maxLength:u,minLength:d,min:g,max:c,pattern:f,validate:y,name:w,valueAsNumber:v,mount:A}=e._f,h=$(t,w);if(!A||n.has(w))return{};const b=o?o[0]:i,j=_=>{s&&b.reportValidity&&(b.setCustomValidity(sn(_)?"":_||""),b.reportValidity())},I={},O=ri(i),N=yt(i),x=O||N,q=(v||ni(i))&&Pe(i.value)&&Pe(h)||ks(i)&&i.value===""||h===""||Array.isArray(h)&&!h.length,F=xb.bind(null,w,r,I),L=(_,T,P,D=Mn.maxLength,C=Mn.minLength)=>{const B=_?T:P;I[w]={type:_?D:C,message:B,ref:i,...F(_?D:C,B)}};if(a?!Array.isArray(h)||!h.length:l&&(!x&&(q||$e(h))||sn(h)&&!h||N&&!Vd(o).isValid||O&&!Cd(o).isValid)){const{value:_,message:T}=rs(l)?{value:!!l,message:l}:br(l);if(_&&(I[w]={type:Mn.required,message:T,ref:b,...F(Mn.required,T)},!r))return j(T),I}if(!q&&(!$e(g)||!$e(c))){let _,T;const P=br(c),D=br(g);if(!$e(h)&&!isNaN(h)){const C=i.valueAsNumber||h&&+h;$e(P.value)||(_=C>P.value),$e(D.value)||(T=C<D.value)}else{const C=i.valueAsDate||new Date(h),B=H=>new Date(new Date().toDateString()+" "+H),V=i.type=="time",S=i.type=="week";On(P.value)&&h&&(_=V?B(h)>B(P.value):S?h>P.value:C>new Date(P.value)),On(D.value)&&h&&(T=V?B(h)<B(D.value):S?h<D.value:C<new Date(D.value))}if((_||T)&&(L(!!_,P.message,D.message,Mn.max,Mn.min),!r))return j(I[w].message),I}if((u||d)&&!q&&(On(h)||a&&Array.isArray(h))){const _=br(u),T=br(d),P=!$e(_.value)&&h.length>+_.value,D=!$e(T.value)&&h.length<+T.value;if((P||D)&&(L(P,_.message,T.message),!r))return j(I[w].message),I}if(f&&!q&&On(h)){const{value:_,message:T}=br(f);if(vs(_)&&!h.match(_)&&(I[w]={type:Mn.pattern,message:T,ref:i,...F(Mn.pattern,T)},!r))return j(T),I}if(y){if(vn(y)){const _=await y(h,t),T=fo(_,b);if(T&&(I[w]={...T,...F(Mn.validate,T.message)},!r))return j(T.message),I}else if(De(y)){let _={};for(const T in y){if(!en(_)&&!r)break;const P=fo(await y[T](h,t),b,T);P&&(_={...P,...F(T,P.message)},j(P.message),r&&(I[w]=_))}if(!en(_)&&(I[w]={ref:b,..._},!r))return I}}return j(!0),I};const Wb={mode:pn.onSubmit,reValidateMode:pn.onChange,shouldFocusError:!0};function zb(e={}){let n={...Wb,...e},t={submitCount:0,isDirty:!1,isReady:!1,isLoading:vn(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:n.errors||{},disabled:n.disabled||!1},r={},s=De(n.defaultValues)||De(n.values)?Fe(n.defaultValues||n.values)||{}:{},a=n.shouldUnregister?{}:Fe(s),i={action:!1,mount:!1,watch:!1},o={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let g={...d};const c={array:so(),state:so()},f=n.criteriaMode===pn.all,y=E=>R=>{clearTimeout(u),u=setTimeout(E,R)},w=async E=>{if(!n.disabled&&(d.isValid||g.isValid||E)){const R=n.resolver?en((await N()).errors):await q(r,!0);R!==t.isValid&&c.state.next({isValid:R})}},v=(E,R)=>{!n.disabled&&(d.isValidating||d.validatingFields||g.isValidating||g.validatingFields)&&((E||Array.from(o.mount)).forEach(M=>{M&&(R?Ie(t.validatingFields,M,R):Se(t.validatingFields,M))}),c.state.next({validatingFields:t.validatingFields,isValidating:!en(t.validatingFields)}))},A=(E,R=[],M,Y,G=!0,K=!0)=>{if(Y&&M&&!n.disabled){if(i.action=!0,K&&Array.isArray($(r,E))){const X=M($(r,E),Y.argA,Y.argB);G&&Ie(r,E,X)}if(K&&Array.isArray($(t.errors,E))){const X=M($(t.errors,E),Y.argA,Y.argB);G&&Ie(t.errors,E,X),Yb(t.errors,E)}if((d.touchedFields||g.touchedFields)&&K&&Array.isArray($(t.touchedFields,E))){const X=M($(t.touchedFields,E),Y.argA,Y.argB);G&&Ie(t.touchedFields,E,X)}(d.dirtyFields||g.dirtyFields)&&(t.dirtyFields=Kr(s,a)),c.state.next({name:E,isDirty:L(E,R),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else Ie(a,E,R)},h=(E,R)=>{Ie(t.errors,E,R),c.state.next({errors:t.errors})},b=E=>{t.errors=E,c.state.next({errors:t.errors,isValid:!1})},j=(E,R,M,Y)=>{const G=$(r,E);if(G){const K=$(a,E,Pe(M)?$(s,E):M);Pe(K)||Y&&Y.defaultChecked||R?Ie(a,E,R?K:lo(G._f)):P(E,K),i.mount&&w()}},I=(E,R,M,Y,G)=>{let K=!1,X=!1;const le={name:E};if(!n.disabled){if(!M||Y){(d.isDirty||g.isDirty)&&(X=t.isDirty,t.isDirty=le.isDirty=L(),K=X!==le.isDirty);const pe=xn($(s,E),R);X=!!$(t.dirtyFields,E),pe?Se(t.dirtyFields,E):Ie(t.dirtyFields,E,!0),le.dirtyFields=t.dirtyFields,K=K||(d.dirtyFields||g.dirtyFields)&&X!==!pe}if(M){const pe=$(t.touchedFields,E);pe||(Ie(t.touchedFields,E,M),le.touchedFields=t.touchedFields,K=K||(d.touchedFields||g.touchedFields)&&pe!==M)}K&&G&&c.state.next(le)}return K?le:{}},O=(E,R,M,Y)=>{const G=$(t.errors,E),K=(d.isValid||g.isValid)&&sn(R)&&t.isValid!==R;if(n.delayError&&M?(l=y(()=>h(E,M)),l(n.delayError)):(clearTimeout(u),l=null,M?Ie(t.errors,E,M):Se(t.errors,E)),(M?!xn(G,M):G)||!en(Y)||K){const X={...Y,...K&&sn(R)?{isValid:R}:{},errors:t.errors,name:E};t={...t,...X},c.state.next(X)}},N=async E=>{v(E,!0);const R=await n.resolver(a,n.context,Cb(E||o.mount,r,n.criteriaMode,n.shouldUseNativeValidation));return v(E),R},x=async E=>{const{errors:R}=await N(E);if(E)for(const M of E){const Y=$(R,M);Y?Ie(t.errors,M,Y):Se(t.errors,M)}else t.errors=R;return R},q=async(E,R,M={valid:!0})=>{for(const Y in E){const G=E[Y];if(G){const{_f:K,...X}=G;if(K){const le=o.array.has(K.name),pe=G._f&&Bb(G._f);pe&&d.validatingFields&&v([Y],!0);const Ze=await ko(G,o.disabled,a,f,n.shouldUseNativeValidation&&!R,le);if(pe&&d.validatingFields&&v([Y]),Ze[K.name]&&(M.valid=!1,R))break;!R&&($(Ze,K.name)?le?$b(t.errors,Ze,K.name):Ie(t.errors,K.name,Ze[K.name]):Se(t.errors,K.name))}!en(X)&&await q(X,R,M)}}return M.valid},F=()=>{for(const E of o.unMount){const R=$(r,E);R&&(R._f.refs?R._f.refs.every(M=>!aa(M)):!aa(R._f.ref))&&re(E)}o.unMount=new Set},L=(E,R)=>!n.disabled&&(E&&R&&Ie(a,E,R),!xn(H(),s)),_=(E,R,M)=>Dd(E,o,{...i.mount?a:Pe(R)?s:On(E)?{[E]:R}:R},M,R),T=E=>Xa($(i.mount?a:s,E,n.shouldUnregister?$(s,E,[]):[])),P=(E,R,M={})=>{const Y=$(r,E);let G=R;if(Y){const K=Y._f;K&&(!K.disabled&&Ie(a,E,Ld(R,K)),G=ks(K.ref)&&$e(R)?"":R,Sd(K.ref)?[...K.ref.options].forEach(X=>X.selected=G.includes(X.value)):K.refs?yt(K.ref)?K.refs.forEach(X=>{(!X.defaultChecked||!X.disabled)&&(Array.isArray(G)?X.checked=!!G.find(le=>le===X.value):X.checked=G===X.value||!!G)}):K.refs.forEach(X=>X.checked=X.value===G):ni(K.ref)?K.ref.value="":(K.ref.value=G,K.ref.type||c.state.next({name:E,values:Fe(a)})))}(M.shouldDirty||M.shouldTouch)&&I(E,G,M.shouldTouch,M.shouldDirty,!0),M.shouldValidate&&S(E)},D=(E,R,M)=>{for(const Y in R){if(!R.hasOwnProperty(Y))return;const G=R[Y],K=E+"."+Y,X=$(r,K);(o.array.has(E)||De(G)||X&&!X._f)&&!sr(G)?D(K,G,M):P(K,G,M)}},C=(E,R,M={})=>{const Y=$(r,E),G=o.array.has(E),K=Fe(R);Ie(a,E,K),G?(c.array.next({name:E,values:Fe(a)}),(d.isDirty||d.dirtyFields||g.isDirty||g.dirtyFields)&&M.shouldDirty&&c.state.next({name:E,dirtyFields:Kr(s,a),isDirty:L(E,K)})):Y&&!Y._f&&!$e(K)?D(E,K,M):P(E,K,M),mo(E,o)&&c.state.next({...t,name:E}),c.state.next({name:i.mount?E:void 0,values:Fe(a)})},B=async E=>{i.mount=!0;const R=E.target;let M=R.name,Y=!0;const G=$(r,M),K=pe=>{Y=Number.isNaN(pe)||sr(pe)&&isNaN(pe.getTime())||xn(pe,$(a,M,pe))},X=uo(n.mode),le=uo(n.reValidateMode);if(G){let pe,Ze;const kr=R.type?lo(G._f):qd(E),In=E.type===fs.BLUR||E.type===fs.FOCUS_OUT,Fs=!Kb(G._f)&&!n.resolver&&!$(t.errors,M)&&!G._f.deps||Hb(In,$(t.touchedFields,M),t.isSubmitted,le,X),Vr=mo(M,o,In);Ie(a,M,kr),In?(G._f.onBlur&&G._f.onBlur(E),l&&l(0)):G._f.onChange&&G._f.onChange(E);const Lr=I(M,kr,In),Vs=!en(Lr)||Vr;if(!In&&c.state.next({name:M,type:E.type,values:Fe(a)}),Fs)return(d.isValid||g.isValid)&&(n.mode==="onBlur"?In&&w():In||w()),Vs&&c.state.next({name:M,...Vr?{}:Lr});if(!In&&Vr&&c.state.next({...t}),n.resolver){const{errors:Cr}=await N([M]);if(K(kr),Y){const Ls=co(t.errors,r,M),ae=co(Cr,r,Ls.name||M);pe=ae.error,M=ae.name,Ze=en(Cr)}}else v([M],!0),pe=(await ko(G,o.disabled,a,f,n.shouldUseNativeValidation))[M],v([M]),K(kr),Y&&(pe?Ze=!1:(d.isValid||g.isValid)&&(Ze=await q(r,!0)));Y&&(G._f.deps&&S(G._f.deps),O(M,Ze,pe,Lr))}},V=(E,R)=>{if($(t.errors,R)&&E.focus)return E.focus(),1},S=async(E,R={})=>{let M,Y;const G=Jr(E);if(n.resolver){const K=await x(Pe(E)?E:G);M=en(K),Y=E?!G.some(X=>$(K,X)):M}else E?(Y=(await Promise.all(G.map(async K=>{const X=$(r,K);return await q(X&&X._f?{[K]:X}:X)}))).every(Boolean),!(!Y&&!t.isValid)&&w()):Y=M=await q(r);return c.state.next({...!On(E)||(d.isValid||g.isValid)&&M!==t.isValid?{}:{name:E},...n.resolver||!E?{isValid:M}:{},errors:t.errors}),R.shouldFocus&&!Y&&Xr(r,V,E?G:o.mount),Y},H=E=>{const R={...i.mount?a:s};return Pe(E)?R:On(E)?$(R,E):E.map(M=>$(R,M))},J=(E,R)=>({invalid:!!$((R||t).errors,E),isDirty:!!$((R||t).dirtyFields,E),error:$((R||t).errors,E),isValidating:!!$(t.validatingFields,E),isTouched:!!$((R||t).touchedFields,E)}),z=E=>{E&&Jr(E).forEach(R=>Se(t.errors,R)),c.state.next({errors:E?t.errors:{}})},se=(E,R,M)=>{const Y=($(r,E,{_f:{}})._f||{}).ref,G=$(t.errors,E)||{},{ref:K,message:X,type:le,...pe}=G;Ie(t.errors,E,{...pe,...R,ref:Y}),c.state.next({name:E,errors:t.errors,isValid:!1}),M&&M.shouldFocus&&Y&&Y.focus&&Y.focus()},xe=(E,R)=>vn(E)?c.state.subscribe({next:M=>"values"in M&&E(_(void 0,R),M)}):_(E,R,!0),Z=E=>c.state.subscribe({next:R=>{Ub(E.name,R.name,E.exact)&&Gb(R,E.formState||d,er,E.reRenderRoot)&&E.callback({values:{...a},...t,...R,defaultValues:s})}}).unsubscribe,U=E=>(i.mount=!0,g={...g,...E.formState},Z({...E,formState:g})),re=(E,R={})=>{for(const M of E?Jr(E):o.mount)o.mount.delete(M),o.array.delete(M),R.keepValue||(Se(r,M),Se(a,M)),!R.keepError&&Se(t.errors,M),!R.keepDirty&&Se(t.dirtyFields,M),!R.keepTouched&&Se(t.touchedFields,M),!R.keepIsValidating&&Se(t.validatingFields,M),!n.shouldUnregister&&!R.keepDefaultValue&&Se(s,M);c.state.next({values:Fe(a)}),c.state.next({...t,...R.keepDirty?{isDirty:L()}:{}}),!R.keepIsValid&&w()},te=({disabled:E,name:R})=>{(sn(E)&&i.mount||E||o.disabled.has(R))&&(E?o.disabled.add(R):o.disabled.delete(R))},ue=(E,R={})=>{let M=$(r,E);const Y=sn(R.disabled)||sn(n.disabled);return Ie(r,E,{...M||{},_f:{...M&&M._f?M._f:{ref:{name:E}},name:E,mount:!0,...R}}),o.mount.add(E),M?te({disabled:sn(R.disabled)?R.disabled:n.disabled,name:E}):j(E,!0,R.value),{...Y?{disabled:R.disabled||n.disabled}:{},...n.progressive?{required:!!R.required,min:Gr(R.min),max:Gr(R.max),minLength:Gr(R.minLength),maxLength:Gr(R.maxLength),pattern:Gr(R.pattern)}:{},name:E,onChange:B,onBlur:B,ref:G=>{if(G){ue(E,R),M=$(r,E);const K=Pe(G.value)&&G.querySelectorAll&&G.querySelectorAll("input,select,textarea")[0]||G,X=Fb(K),le=M._f.refs||[];if(X?le.find(pe=>pe===K):K===M._f.ref)return;Ie(r,E,{_f:{...M._f,...X?{refs:[...le.filter(aa),K,...Array.isArray($(s,E))?[{}]:[]],ref:{type:K.type,name:E}}:{ref:K}}}),j(E,!1,void 0,K)}else M=$(r,E,{}),M._f&&(M._f.mount=!1),(n.shouldUnregister||R.shouldUnregister)&&!(_d(o.array,E)&&i.action)&&o.unMount.add(E)}}},Le=()=>n.shouldFocusError&&Xr(r,V,o.mount),Ce=E=>{sn(E)&&(c.state.next({disabled:E}),Xr(r,(R,M)=>{const Y=$(r,M);Y&&(R.disabled=Y._f.disabled||E,Array.isArray(Y._f.refs)&&Y._f.refs.forEach(G=>{G.disabled=Y._f.disabled||E}))},0,!1))},Be=(E,R)=>async M=>{let Y;M&&(M.preventDefault&&M.preventDefault(),M.persist&&M.persist());let G=Fe(a);if(c.state.next({isSubmitting:!0}),n.resolver){const{errors:K,values:X}=await N();t.errors=K,G=Fe(X)}else await q(r);if(o.disabled.size)for(const K of o.disabled)Se(G,K);if(Se(t.errors,"root"),en(t.errors)){c.state.next({errors:{}});try{await E(G,M)}catch(K){Y=K}}else R&&await R({...t.errors},M),Le(),setTimeout(Le);if(c.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:en(t.errors)&&!Y,submitCount:t.submitCount+1,errors:t.errors}),Y)throw Y},_n=(E,R={})=>{$(r,E)&&(Pe(R.defaultValue)?C(E,Fe($(s,E))):(C(E,R.defaultValue),Ie(s,E,Fe(R.defaultValue))),R.keepTouched||Se(t.touchedFields,E),R.keepDirty||(Se(t.dirtyFields,E),t.isDirty=R.defaultValue?L(E,Fe($(s,E))):L()),R.keepError||(Se(t.errors,E),d.isValid&&w()),c.state.next({...t}))},on=(E,R={})=>{const M=E?Fe(E):s,Y=Fe(M),G=en(E),K=G?s:Y;if(R.keepDefaultValues||(s=M),!R.keepValues){if(R.keepDirtyValues){const X=new Set([...o.mount,...Object.keys(Kr(s,a))]);for(const le of Array.from(X))$(t.dirtyFields,le)?Ie(K,le,$(a,le)):C(le,$(K,le))}else{if(Ja&&Pe(E))for(const X of o.mount){const le=$(r,X);if(le&&le._f){const pe=Array.isArray(le._f.refs)?le._f.refs[0]:le._f.ref;if(ks(pe)){const Ze=pe.closest("form");if(Ze){Ze.reset();break}}}}if(R.keepFieldsRef)for(const X of o.mount)C(X,$(K,X));else r={}}a=n.shouldUnregister?R.keepDefaultValues?Fe(s):{}:Fe(K),c.array.next({values:{...K}}),c.state.next({values:{...K}})}o={mount:R.keepDirtyValues?o.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!d.isValid||!!R.keepIsValid||!!R.keepDirtyValues,i.watch=!!n.shouldUnregister,c.state.next({submitCount:R.keepSubmitCount?t.submitCount:0,isDirty:G?!1:R.keepDirty?t.isDirty:!!(R.keepDefaultValues&&!xn(E,s)),isSubmitted:R.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:G?{}:R.keepDirtyValues?R.keepDefaultValues&&a?Kr(s,a):t.dirtyFields:R.keepDefaultValues&&E?Kr(s,E):R.keepDirty?t.dirtyFields:{},touchedFields:R.keepTouched?t.touchedFields:{},errors:R.keepErrors?t.errors:{},isSubmitSuccessful:R.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},fn=(E,R)=>on(vn(E)?E(a):E,R),Zn=(E,R={})=>{const M=$(r,E),Y=M&&M._f;if(Y){const G=Y.refs?Y.refs[0]:Y.ref;G.focus&&(G.focus(),R.shouldSelect&&vn(G.select)&&G.select())}},er=E=>{t={...t,...E}},Hn={control:{register:ue,unregister:re,getFieldState:J,handleSubmit:Be,setError:se,_subscribe:Z,_runSchema:N,_focusError:Le,_getWatch:_,_getDirty:L,_setValid:w,_setFieldArray:A,_setDisabledField:te,_setErrors:b,_getFieldArray:T,_reset:on,_resetDefaultValues:()=>vn(n.defaultValues)&&n.defaultValues().then(E=>{fn(E,n.resetOptions),c.state.next({isLoading:!1})}),_removeUnmounted:F,_disableForm:Ce,_subjects:c,_proxyFormState:d,get _fields(){return r},get _formValues(){return a},get _state(){return i},set _state(E){i=E},get _defaultValues(){return s},get _names(){return o},set _names(E){o=E},get _formState(){return t},get _options(){return n},set _options(E){n={...n,...E}}},subscribe:U,trigger:S,register:ue,handleSubmit:Be,watch:xe,setValue:C,getValues:H,reset:fn,resetField:_n,clearErrors:z,unregister:re,setError:se,setFocus:Zn,getFieldState:J};return{...Hn,formControl:Hn}}function Ds(e={}){const n=p.useRef(void 0),t=p.useRef(void 0),[r,s]=p.useState({isDirty:!1,isValidating:!1,isLoading:vn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:vn(e.defaultValues)?void 0:e.defaultValues});if(!n.current)if(e.formControl)n.current={...e.formControl,formState:r},e.defaultValues&&!vn(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...o}=zb(e);n.current={...o,formState:r}}const a=n.current.control;return a._options=e,ei(()=>{const i=a._subscribe({formState:a._proxyFormState,callback:()=>s({...a._formState}),reRenderRoot:!0});return s(o=>({...o,isReady:!0})),a._formState.isReady=!0,i},[a]),p.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),p.useEffect(()=>{e.mode&&(a._options.mode=e.mode),e.reValidateMode&&(a._options.reValidateMode=e.reValidateMode)},[a,e.mode,e.reValidateMode]),p.useEffect(()=>{e.errors&&(a._setErrors(e.errors),a._focusError())},[a,e.errors]),p.useEffect(()=>{e.shouldUnregister&&a._subjects.state.next({values:a._getWatch()})},[a,e.shouldUnregister]),p.useEffect(()=>{if(a._proxyFormState.isDirty){const i=a._getDirty();i!==r.isDirty&&a._subjects.state.next({isDirty:i})}},[a,r.isDirty]),p.useEffect(()=>{e.values&&!xn(e.values,t.current)?(a._reset(e.values,{keepFieldsRef:!0,...a._options.resetOptions}),t.current=e.values,s(i=>({...i}))):a._resetDefaultValues()},[a,e.values]),p.useEffect(()=>{a._state.mount||(a._setValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),n.current.formState=Md(r,a),n.current}function Jb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var po={exports:{}},Ur={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vo;function Xb(){if(vo)return Ur;vo=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(r,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var o in s)o!=="key"&&(a[o]=s[o])}else a=s;return s=a.ref,{$$typeof:e,type:r,key:i,ref:s!==void 0?s:null,props:a}}return Ur.Fragment=n,Ur.jsx=t,Ur.jsxs=t,Ur}var yo;function Qb(){return yo||(yo=1,po.exports=Xb()),po.exports}var ve=Qb();const Zb=({children:e})=>!e||Array.isArray(e)&&e.length===0?null:ve.jsx(ct,{variant:"warning",size:"small",children:ve.jsx(Me,{gap:"2",children:p.Children.map(e,n=>ve.jsx(ne,{size:"small",children:n},tu(n)?n.key:n))})}),ht={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"},bo=gr(ht),eh=({onClick:e=()=>{},erOverstyrt:n=!1})=>{const[t,r]=m.useState(n),s=()=>{t||(r(!0),e(!0))};return m.useEffect(()=>{r(n)},[n]),ve.jsx(Ne,{variant:t?"tertiary-neutral":"tertiary","data-testid":"overstyringsknapp",type:"button",size:"small",onClick:s,"aria-disabled":n,disabled:n,icon:t?ve.jsx($u,{"aria-hidden":!0,color:"var(--a-gray-300)",height:25,width:25,title:bo.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):ve.jsx(Hu,{"aria-hidden":!0,color:"var(--a-blue-400)",height:25,width:25,title:bo.formatMessage({id:"OverstyringKnapp.Overstyring"})})})};var ho={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Io;function nh(){return Io||(Io=1,function(e){(function(){var n={}.hasOwnProperty;function t(){for(var a="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(a=s(a,r.call(this,o)))}return a}function r(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return t.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var o in a)n.call(a,o)&&a[o]&&(i=s(i,this&&this[o]||o));return i}function s(a,i){return i?a?a+" "+i:a+i:a}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(ho)),ho.exports}var rh=nh();const ti=Jb(rh),th="_borderbox_1vkvn_1",sh="_error_1vkvn_5",ah="_warning_1vkvn_8",ih={borderbox:th,error:sh,warning:ah};ti.bind(ih);const oh="_aksjonspunkt_kn1hn_1",lh="_erAksjonspunktApent_kn1hn_4",dh="_erIkkeGodkjentAvBeslutter_kn1hn_8",uh={aksjonspunkt:oh,erAksjonspunktApent:lh,erIkkeGodkjentAvBeslutter:dh};ti.bind(uh);const ys=({dateString:e,year:n,month:t,day:r})=>ve.jsx(ve.Fragment,{children:Vo(e,{year:n,month:t,day:r})}),wo=gr(ht),gh=({text:e,okButtonText:n,showModal:t,cancel:r,submit:s})=>ve.jsxs(Rn,{width:"small",open:t,"aria-label":e,onClose:r,children:[ve.jsx(Rn.Body,{children:ve.jsx(hs,{size:"small",children:e})}),ve.jsxs(Rn.Footer,{children:[ve.jsx(Ne,{variant:"primary",size:"small",onClick:s,autoFocus:!0,type:"button",children:n||wo.formatMessage({id:"OkAvbrytModal.Ok"})}),ve.jsx(Ne,{variant:"secondary",size:"small",onClick:r,type:"button",children:wo.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),Qr=({dateStringFom:e,dateStringTom:n,showTodayString:t=!1})=>ve.jsx(ve.Fragment,{children:su(e,n,{showTodayString:t})});gr(ht);const mh="_divider_1t980_1",ch="_dividerParagraf_1t980_8",fh="_leftPanel_1t980_11",kh="_rightPanel_1t980_14",ya={divider:mh,dividerParagraf:ch,leftPanel:fh,rightPanel:kh},ph=ti.bind(ya),Ao=({spaceUnder:e=!1,spaceAbove:n=!1,leftPanel:t=!1,rightPanel:r=!1,dividerParagraf:s=!1,className:a})=>ve.jsxs(ve.Fragment,{children:[n&&ve.jsx("div",{style:{marginBottom:"32px"}}),ve.jsx("div",{className:ph(a,{leftPanel:t,rightPanel:r}),children:ve.jsx("div",{className:s?ya.dividerParagraf:ya.divider})}),e&&ve.jsx("div",{style:{marginBottom:"32px"}})]}),Bd=()=>ve.jsx("span",{"data-testid":"editedIcon",children:ve.jsx(Ju,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--a-icon-warning)"})});gr(ht);const vh=gr(ht),yh=({tekst:e,children:n})=>{const[t,r]=m.useState(!1);if(!e)return n;const s=async()=>{await navigator.clipboard.writeText(e),r(!0),setTimeout(()=>{r(!1)},1e3)};return ve.jsx(Nd,{content:vh.formatMessage({id:t?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:ve.jsx("span",{"aria-hidden":"true",onClick:s,children:n??e})})},jo={default:"_default_1sbt3_1",rød:"_rød_1sbt3_5"},ba=({beløp:e,kr:n=!1,rød:t=!1})=>{const r=e?.toString().replace(/\s/g,"");return ve.jsx(yh,{tekst:r,children:ve.jsxs("span",{className:t?jo.rød:jo.default,children:[r?au(r):"-",r&&n&&" kr"]})})};function bh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Eo={exports:{}},Hr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var To;function hh(){if(To)return Hr;To=1;var e=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function t(r,s,a){var i=null;if(a!==void 0&&(i=""+a),s.key!==void 0&&(i=""+s.key),"key"in s){a={};for(var o in s)o!=="key"&&(a[o]=s[o])}else a=s;return s=a.ref,{$$typeof:e,type:r,key:i,ref:s!==void 0?s:null,props:a}}return Hr.Fragment=n,Hr.jsx=t,Hr.jsxs=t,Hr}var Oo;function Ih(){return Oo||(Oo=1,Eo.exports=hh()),Eo.exports}var ge=Ih();const It=e=>e.reduce((n,t,r)=>({...n,[r]:s=>t(s)||!0}),{}),wt=(e,n)=>n.split(".").reduce((t,r)=>t!==void 0?t[r]:t,e)?.message;var ha={exports:{}},wh=ha.exports,No;function Ah(){return No||(No=1,function(e,n){(function(t,r){e.exports=r()})(wh,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,s=/\d/,a=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,l={},u=function(v){return(v=+v)+(v>68?1900:2e3)},d=function(v){return function(A){this[v]=+A}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(v){(this.zone||(this.zone={})).offset=function(A){if(!A||A==="Z")return 0;var h=A.match(/([+-]|\d\d)/g),b=60*h[1]+(+h[2]||0);return b===0?0:h[0]==="+"?-b:b}(v)}],c=function(v){var A=l[v];return A&&(A.indexOf?A:A.s.concat(A.f))},f=function(v,A){var h,b=l.meridiem;if(b){for(var j=1;j<=24;j+=1)if(v.indexOf(b(j,0,A))>-1){h=j>12;break}}else h=v===(A?"pm":"PM");return h},y={A:[o,function(v){this.afternoon=f(v,!1)}],a:[o,function(v){this.afternoon=f(v,!0)}],Q:[s,function(v){this.month=3*(v-1)+1}],S:[s,function(v){this.milliseconds=100*+v}],SS:[a,function(v){this.milliseconds=10*+v}],SSS:[/\d{3}/,function(v){this.milliseconds=+v}],s:[i,d("seconds")],ss:[i,d("seconds")],m:[i,d("minutes")],mm:[i,d("minutes")],H:[i,d("hours")],h:[i,d("hours")],HH:[i,d("hours")],hh:[i,d("hours")],D:[i,d("day")],DD:[a,d("day")],Do:[o,function(v){var A=l.ordinal,h=v.match(/\d+/);if(this.day=h[0],A)for(var b=1;b<=31;b+=1)A(b).replace(/\[|\]/g,"")===v&&(this.day=b)}],w:[i,d("week")],ww:[a,d("week")],M:[i,d("month")],MM:[a,d("month")],MMM:[o,function(v){var A=c("months"),h=(c("monthsShort")||A.map(function(b){return b.slice(0,3)})).indexOf(v)+1;if(h<1)throw new Error;this.month=h%12||h}],MMMM:[o,function(v){var A=c("months").indexOf(v)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,d("year")],YY:[a,function(v){this.year=u(v)}],YYYY:[/\d{4}/,d("year")],Z:g,ZZ:g};function w(v){var A,h;A=v,h=l&&l.formats;for(var b=(v=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(F,L,_){var T=_&&_.toUpperCase();return L||h[_]||t[_]||h[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(P,D,C){return D||C.slice(1)})})).match(r),j=b.length,I=0;I<j;I+=1){var O=b[I],N=y[O],x=N&&N[0],q=N&&N[1];b[I]=q?{regex:x,parser:q}:O.replace(/^\[|\]$/g,"")}return function(F){for(var L={},_=0,T=0;_<j;_+=1){var P=b[_];if(typeof P=="string")T+=P.length;else{var D=P.regex,C=P.parser,B=F.slice(T),V=D.exec(B)[0];C.call(L,V),F=F.replace(V,"")}}return function(S){var H=S.afternoon;if(H!==void 0){var J=S.hours;H?J<12&&(S.hours+=12):J===12&&(S.hours=0),delete S.afternoon}}(L),L}}return function(v,A,h){h.p.customParseFormat=!0,v&&v.parseTwoDigitYear&&(u=v.parseTwoDigitYear);var b=A.prototype,j=b.parse;b.parse=function(I){var O=I.date,N=I.utc,x=I.args;this.$u=N;var q=x[1];if(typeof q=="string"){var F=x[2]===!0,L=x[3]===!0,_=F||L,T=x[2];L&&(T=x[2]),l=this.$locale(),!F&&T&&(l=h.Ls[T]),this.$d=function(B,V,S,H){try{if(["x","X"].indexOf(V)>-1)return new Date((V==="X"?1e3:1)*B);var J=w(V)(B),z=J.year,se=J.month,xe=J.day,Z=J.hours,U=J.minutes,re=J.seconds,te=J.milliseconds,ue=J.zone,Le=J.week,Ce=new Date,Be=xe||(z||se?1:Ce.getDate()),_n=z||Ce.getFullYear(),on=0;z&&!se||(on=se>0?se-1:Ce.getMonth());var fn,Zn=Z||0,er=U||0,fr=re||0,Hn=te||0;return ue?new Date(Date.UTC(_n,on,Be,Zn,er,fr,Hn+60*ue.offset*1e3)):S?new Date(Date.UTC(_n,on,Be,Zn,er,fr,Hn)):(fn=new Date(_n,on,Be,Zn,er,fr,Hn),Le&&(fn=H(fn).week(Le).toDate()),fn)}catch{return new Date("")}}(O,q,N,h),this.init(),T&&T!==!0&&(this.$L=this.locale(T).$L),_&&O!=this.format(q)&&(this.$d=new Date("")),l={}}else if(q instanceof Array)for(var P=q.length,D=1;D<=P;D+=1){x[1]=q[D-1];var C=h.apply(this,x);if(C.isValid()){this.$d=C.$d,this.$L=C.$L,this.init();break}D===P&&(this.$d=new Date(""))}else j.call(this,I)}}})}(ha)),ha.exports}var jh=Ah();const Eh=bh(jh),Th="_textarea_1snk6_1",Oh="_readOnlyField_1snk6_7",Ro={textarea:Th,readOnlyField:Oh},Nh=e=>e!=null&&e!=="",Ss=({label:e,value:n,isEdited:t=!1,type:r,hideLabel:s,size:a})=>Nh(n)?ge.jsxs(Me,{gap:"1",children:[e&&!s&&ge.jsx(we,{size:a,children:e}),ge.jsxs(ye,{gap:"2",align:"center",wrap:!1,children:[ge.jsx(Ho,{className:r==="textarea"?Ro.textarea:Ro.readOnlyField,size:a,children:n}),t&&ge.jsx(Bd,{})]})]}):null;We.extend(Eh);const tt=({label:e,description:n,validate:t=[],hideLabel:r=!1,isReadOnly:s=!1,onChange:a,disabledDays:i,isEdited:o,defaultMonth:l,fromDate:u,toDate:d,size:g="small",...c})=>{const{name:f,control:y,disabled:w}=c,{formState:{errors:v}}=Qn(),{field:A}=bt({name:f,control:y,rules:{validate:m.useMemo(()=>It(t),[t])}}),h=A.value?We(A.value,Dn,!0).format(jt):"",[b,j]=m.useState(h),{datepickerProps:I,inputProps:O}=By({onDateChange:q=>{if(q!==void 0){const F=We(q).format(Dn);a&&a(F),A.onChange(F),j(We(F,Dn,!0).format(jt))}},defaultSelected:A.value?We(A.value,Dn,!0).toDate():void 0,defaultMonth:l||(!A.value&&d?d:void 0),disabled:i}),N=m.useCallback(q=>{const F=We(q.target.value,jt,!0).format(Dn),L=F!=="Invalid Date";j(q.target.value),a&&a(L?F:q.target.value),A.onChange(L?F:q.target.value)},[j,a,A]);if(s)return ge.jsx(Ss,{label:e,value:A.value?We(A.value,Dn,!0).format(jt):void 0,isEdited:o,hideLabel:r,size:g});const x={...I,fromDate:u,toDate:d,dropdownCaption:u&&d?!0:void 0};return ge.jsx(cs,{...x,children:ge.jsx(cs.Input,{...O,hideLabel:r,onChange:N,value:b,size:g,label:e,description:n,disabled:w,error:wt(v,f)})})},Ia=({name:e,control:n,label:t,validate:r=[],readOnly:s=!1,type:a,shouldValidateOnBlur:i=!1,onBlur:o,onChange:l,description:u,autoFocus:d,parse:g=I=>I,format:c=I=>I,normalizeOnBlur:f,isEdited:y,maxLength:w,autoComplete:v=!1,disabled:A,className:h,hideLabel:b,...j})=>{const{formState:{errors:I},trigger:O}=Qn(),{field:N}=bt({name:e,control:n,rules:{validate:m.useMemo(()=>It(r),[r])}});return s?ge.jsx(Ss,{label:t,value:N.value,isEdited:y,hideLabel:b,size:j.size}):ge.jsx(Pb,{size:"small",hideLabel:b,description:u,label:t,error:wt(I,e),...N,value:N.value?c(N.value):"",autoFocus:d,autoComplete:v?void 0:"off",maxLength:w,disabled:A,type:a,className:h,onChange:x=>{const q=x.currentTarget.value?g(x.currentTarget.value):null;return l&&l(q),N.onChange(q)},onBlur:async x=>{if(N.onBlur(),i){const q=await O();o&&q&&o(x?.target?.value)}else o&&o(x?.target?.value);f&&N.onChange(x?.target?.value?f(g(x?.target?.value)):null)},...j})},Rh="_hideRadioLabels_1u3xf_1",Ph={hideRadioLabels:Rh},Kd=({label:e,description:n,validate:t=[],radios:r,onChange:s,isReadOnly:a=!1,isHorizontal:i=!1,parse:o=y=>y,isTrueOrFalseSelection:l=!1,hideLegend:u=!1,hideRadioLabels:d=!1,isEdited:g=!1,size:c="small",...f})=>{const{name:y,control:w,disabled:v}=f,{formState:{errors:A}}=Qn(),{field:h}=bt({name:y,control:w,rules:{validate:m.useMemo(()=>It(t),[t])}}),b=l?I=>I==="true":o,j=ge.jsxs(ye,{justify:"center",gap:"2",children:[e,a&&g&&ge.jsx(Bd,{})]});return ge.jsxs(Ib,{name:y,value:h.value!==void 0?h.value:null,onChange:I=>{s&&s(I),h.onChange(I)},size:c,legend:j,description:n,error:wt(A,y),className:d?Ph.hideRadioLabels:"",hideLegend:u,children:[!i&&r.map(I=>ge.jsxs(m.Fragment,{children:[ge.jsx(Zi,{size:c,value:b(I.value),disabled:I.disabled||v||a,children:I.label}),h.value===b(I.value)&&I.element]},I.value)),i&&ge.jsxs(ge.Fragment,{children:[ge.jsx(ye,{gap:"4",children:r.map(I=>ge.jsx(Zi,{size:c,value:b(I.value),disabled:I.disabled||v||a,children:I.label},I.value))}),r.filter(I=>h.value===b(I.value)).map(I=>ge.jsx(m.Fragment,{children:I.element},I.value))]})]})},qh=({label:e,selectValues:n,validate:t=[],readOnly:r=!1,description:s,hideValueOnDisable:a=!1,onChange:i,className:o,hideLabel:l,isEdited:u,size:d,...g})=>{const{name:c,control:f,disabled:y}=g,{formState:{errors:w}}=Qn(),{field:v}=bt({name:c,control:f,rules:{validate:m.useMemo(()=>It(t),[t])}});if(r){const b=n.map(I=>I.props).find(I=>I.value===v.value),j=b?b.children:void 0;return ge.jsx(Ss,{value:j,label:e,hideLabel:l,isEdited:u,size:d})}const A=v.value||"",h=!n.map(b=>b.props.value).includes(A)&&A!=="";return h&&console.warn(`No corresponding option found for value '${A}'`),ge.jsxs(pa,{size:"small",className:o,error:wt(w,c),label:e,description:s,value:a&&y||h?"":v.value,disabled:y,onChange:b=>{i&&i(b),v.onChange(b)},hideLabel:l,children:[ge.jsx("option",{style:{display:"none"}}),",",n]})},_h="_textAreaFieldWithBadges_bdz0b_1",Mh="_etikettWrapper_bdz0b_4",Po={textAreaFieldWithBadges:_h,etikettWrapper:Mh},si=({name:e,control:n,label:t,readOnly:r,maxLength:s,badges:a,validate:i=[],parse:o=f=>f,className:l,description:u,isEdited:d,size:g="small",...c})=>{const{formState:{errors:f}}=Qn(),{field:y}=bt({name:e,control:n,rules:{validate:m.useMemo(()=>It(i),[i])}});return r?ge.jsx(Ss,{size:g,label:t,value:y.value,type:"textarea",isEdited:d,hideLabel:c.hideLabel}):ge.jsxs("div",{className:a?Po.textAreaFieldWithBadges:null,children:[a&&ge.jsx("div",{className:Po.etikettWrapper,children:a.map(({type:w,titleText:v})=>ge.jsx(fb,{variant:w,size:"small",children:v},v))}),ge.jsx(Nb,{size:g,label:t,description:u,className:l,autoComplete:"off",...y,onChange:w=>y.onChange(w.currentTarget.value!==""?o(w.currentTarget.value):null),value:y.value?y.value:"",error:wt(f,e),maxLength:s,...c})]})},xs=({formMethods:e,onSubmit:n,children:t,className:r,setDataOnUnmount:s})=>{const{handleSubmit:a,getValues:i}=e;return m.useEffect(()=>()=>{s&&s(i())},[]),ge.jsx(Mb,{...e,children:ge.jsx("form",{className:r,onSubmit:n?a(o=>n(o)):void 0,children:t})})},Gd=({submitCallback:e,cancelEvent:n,showModal:t,ventearsaker:r,erTilbakekreving:s,frist:a,ventearsak:i,visBrevErBestilt:o=!1,hasManualPaVent:l,defaultVenteårsak:u=null})=>{const d=Xn(),g=Ds({defaultValues:Sh(l,a,i??u)}),c=g.watch("frist"),f=g.watch("ventearsak"),y=Ch(i,f),w=Bh(a,c),v=!(a===c&&!y),A=Lh(s,a,c,f);return k.jsx(xs,{formMethods:g,onSubmit:e,children:k.jsxs(Rn,{width:"small",open:t,onClose:n,header:{heading:d.formatMessage({id:i?"SettPaVentModal.ErSettPaVent":"SettPaVentModal.SettesPaVent"})},children:[k.jsx(Rn.Body,{children:k.jsxs(Me,{gap:"4",children:[(l||c)&&k.jsx(tt,{name:"frist",control:g.control,label:k.jsx(W,{id:"SettPaVentModal.Frist"}),validate:[un,Zr,iu]}),k.jsx(qh,{name:"ventearsak",control:g.control,label:k.jsx(W,{id:"SettPaVentModal.Arsak"}),validate:[un],selectValues:r.filter(h=>!l||(s?Vh(h,f):xh.some(b=>b===h.kode))).sort((h,b)=>h.navn.localeCompare(b.navn)).map(h=>k.jsx("option",{value:h.kode,children:h.navn},h.kode)),readOnly:!l}),o&&k.jsx(ne,{size:"small",children:k.jsx(W,{id:"SettPaVentModal.BrevBlirBestilt"})}),l&&k.jsx(ne,{size:"small",children:k.jsx(W,{id:"SettPaVentModal.EndreFrist"})}),!l&&A&&k.jsxs(k.Fragment,{children:[k.jsx(ne,{size:"small",children:k.jsx(W,{id:"SettPaVentModal.UtløptFrist"})}),k.jsx(ne,{size:"small",children:k.jsx(W,{id:"SettPaVentModal.HenleggeSaken"})})]})]})}),k.jsxs(Rn.Footer,{children:[k.jsx(Ne,{size:"small",variant:"primary",style:{paddingInline:"36px"},onClick:v?ou:n,disabled:!y&&!w,children:k.jsx(W,{id:"SettPaVentModal.Ok"})}),(!l||v||!o)&&k.jsx(Ne,{size:"small",variant:"secondary",onClick:n,type:"button",children:k.jsx(W,{id:y||w?"SettPaVentModal.Avbryt":"SettPaVentModal.Lukk"})})]})]})})},Dh=()=>{const e=We().toDate();return e.setDate(e.getDate()+28),We(e).format(Dn)},Sh=(e,n,t)=>({ventearsak:t??void 0,frist:n||e===!1?n??void 0:Dh()}),xh=[Ye.AVV_DOK,Ye.AVV_FODSEL,Ye.VENT_PÅ_BRUKERTILBAKEMELDING,Ye.UTV_FRIST,Ye.FOR_TIDLIG_SOKNAD,Ye.VENT_OPDT_INNTEKTSMELDING,Ye.VENT_UTLAND_TRYGD,Ye.UTVIDET_TILSVAR_FRIST,Ye.ENDRE_TILKJENT_YTELSE,Ye.VENT_PÅ_MULIG_MOTREGNING],Fh=[Ye.VENT_PÅ_BRUKERTILBAKEMELDING,Ye.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG],Vh=(e,n)=>Fh.some(t=>t===e.kode)?e.kode===n:!0,Lh=(e,n,t,r)=>{const s=e&&(!!t&&gi(t)===null||!!n&&gi(n)===null),a=r===Ye.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG;return e&&s&&a},Ch=(e,n)=>!(e===n||!n&&!e),Bh=(e,n)=>!(e===n||!n&&!e);Gd.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModal",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasManualPaVent:{required:!0,tsType:{name:"boolean"},description:""},frist:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},ventearsak:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},defaultVenteårsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const Kh={"SettPaVentModal.ModalDescription":"Behandlingen settes på vent med frist","SettPaVentModal.ModalDescriptionErPaVent":"Behandlingen er satt på vent","SettPaVentModal.PaVent":"På vent","SettPaVentModal.SettesPaVent":"Behandlingen settes på vent","SettPaVentModal.ErSettPaVent":"Behandlingen er satt på vent","SettPaVentModal.Frist":"Frist","SettPaVentModal.Ok":"OK","SettPaVentModal.Avbryt":"Avbryt","SettPaVentModal.Lukk":"Lukk","SettPaVentModal.BrevBlirBestilt":"Brevet blir bestilt","SettPaVentModal.Arsak":"Årsak","SettPaVentModal.EndreFrist":"Du kan endre frist eller årsak før du fortsetter","SettPaVentModal.UtløptFrist":"OBS! Fristen på denne behandlingen er utløpt!","SettPaVentModal.HenleggeSaken":`Kontroller hvorfor Økonomi ikke har dannet et kravgrunnlag.
 Dersom det feilutbetalte beløpet er bortfalt skal saken henlegges.
For mer informasjon, se rutine under tilbakekreving.`},Gh=gr(Kh),Ud=({frist:e=null,ventearsak:n=null,hasManualPaVent:t=!1,...r})=>k.jsx(Lo,{value:Gh,children:k.jsx(Gd,{frist:e,ventearsak:n,hasManualPaVent:t,...r})});Ud.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModalIndex",props:{cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},frist:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},ventearsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:""},hasManualPaVent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},defaultVenteårsak:{required:!1,tsType:{name:"string"},description:""}}};const ai=m.createContext({isDirty:!1,setDirty:()=>{}}),Hd=({children:e})=>{const[n,t]=m.useState(!1),r=m.useMemo(()=>({isDirty:n,setDirty:t}),[n,t]);return k.jsx(ai.Provider,{value:r,children:e})},ii=e=>{const n=m.useContext(ai);m.useEffect(()=>{n.setDirty(e)},[e])},Uh=()=>m.useContext(ai).isDirty;Hd.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const qo=(e,n)=>({arbeidsgiverIdent:e,arbeidsgiverNavn:n.navn,...n.erPrivatPerson?{erPrivatPerson:!0,arbeidsgiverFødselsdato:n.fødselsdato}:{erPrivatPerson:!1}}),Pt=e=>n=>n.arbeidsgiverIdent===e.arbeidsgiverIdent,Hh=(e,n)=>{const{fom:t,tom:r,saksbehandlersVurdering:s,stillingsprosent:a,begrunnelse:i}=e;if(e.saksbehandlersVurdering)return e.saksbehandlersVurdering===me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverNavn:n,fom:t,tom:r,stillingsprosent:a,saksbehandlersVurdering:s??void 0,begrunnelse:i??void 0}:{saksbehandlersVurdering:s??void 0,begrunnelse:i??void 0}},Yh=({saksbehandlersVurdering:e,begrunnelse:n})=>e?{saksbehandlersVurdering:e,begrunnelse:n??void 0}:void 0,$h=(e,n)=>e.filter(t=>t.arbeidsgiverIdent===n),Wh=(e,n)=>n.map(t=>{const r=e.find(s=>zh(t,s));return{arbeidsforhold:t,inntektsmelding:r}}),zh=(e,n)=>n.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!n.internArbeidsforholdId||n.internArbeidsforholdId===e.internArbeidsforholdId),Jh=e=>e.årsak?-1:1,Xh=(e,n)=>{const t=e.årsak,r=n.årsak;return t&&!r?-1:r&&!t?1:e.arbeidsgiverNavn.localeCompare(n.arbeidsgiverNavn)},Qh=(e,n)=>{const{arbeidsforhold:t,inntektsmeldinger:r,inntekter:s}=e,a=[...t.sort(Jh)].reduce((o,l)=>{if(o.find(Pt(l)))return o;const d=t.filter(Pt(l)),g=qo(l.arbeidsgiverIdent,n[l.arbeidsgiverIdent]),c=$h(r,l.arbeidsgiverIdent),f=s.find(Pt(l))?.inntekter??[],y={...g,årsak:l.årsak??c[0]?.årsak??void 0,avklaring:Hh(l,g.arbeidsgiverNavn),arbeidsforholdForRad:d,inntektsmeldingerForRad:c,inntektsposter:f};return o.concat(y)},[]),i=r.filter(o=>!t.some(l=>o.arbeidsgiverIdent===l.arbeidsgiverIdent)).map(o=>{const l=qo(o.arbeidsgiverIdent,n[o.arbeidsgiverIdent]),u=s.find(Pt(o))?.inntekter??[];return{...l,årsak:o.årsak??void 0,avklaring:Yh(o),arbeidsforholdForRad:[],inntektsmeldingerForRad:[o],inntektsposter:u}});return a.concat(i).sort(Xh)},_o=e=>{const n=e.findIndex(t=>t.årsak&&!t.avklaring);return n!==-1?[n]:[]};var ia={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Mo;function Zh(){return Mo||(Mo=1,function(e){(function(){var n={}.hasOwnProperty;function t(){for(var a="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(a=s(a,r.call(this,o)))}return a}function r(a){if(typeof a=="string"||typeof a=="number")return this&&this[a]||a;if(typeof a!="object")return"";if(Array.isArray(a))return t.apply(this,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var i="";for(var o in a)n.call(a,o)&&a[o]&&(i=s(i,this&&this[o]||o));return i}function s(a,i){return i?a?a+" "+i:a+i:a}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(ia)),ia.exports}var e0=Zh();const n0=xo(e0),Yd=({saksnummer:e,journalpostId:n,dokumentId:t,dokumentTittel:r,children:s})=>{const a=`${n}-${t}`,i=fu(e,n,t);return k.jsx(za,{href:i,target:a,rel:"noopener noreferrer",onClick:r0(r),children:s??r})},r0=e=>n=>{e&&(n.preventDefault(),ku(n.currentTarget.href,n.currentTarget.target,e))};Yd.__docgenInfo={description:"",methods:[],displayName:"DokumentLink",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},journalpostId:{required:!0,tsType:{name:"string"},description:""},dokumentId:{required:!0,tsType:{name:"string"},description:""},dokumentTittel:{required:!1,tsType:{name:"string"},description:""}}};const t0="_inline_glms2_1",s0="_docIcon_glms2_9",a0="_phoneIcon_glms2_14",oa={inline:t0,docIcon:s0,phoneIcon:a0},st=({saksnummer:e,arbeidsforhold:n,inntektsmelding:t,skalViseArbeidsforholdId:r,alleKodeverk:s,ikkeVisInfo:a,radData:i})=>k.jsxs(k.Fragment,{children:[k.jsxs(Me,{gap:"4",children:[!a&&k.jsxs(ye,{gap:"4",children:[k.jsx(we,{size:"small",children:k.jsx(W,{id:i.erPrivatPerson?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),k.jsx(ne,{size:"small",children:i.erPrivatPerson?k.jsx(ys,{dateString:i.arbeidsgiverFødselsdato}):i.arbeidsgiverIdent})]}),r&&k.jsxs(ye,{gap:"4",children:[k.jsx(we,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),k.jsx(ne,{size:"small",children:t.eksternArbeidsforholdId})]}),n&&k.jsxs(k.Fragment,{children:[k.jsxs(ye,{gap:"4",children:[k.jsx(we,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),k.jsx(ne,{size:"small",children:`${n.stillingsprosent}%`})]}),n.permisjonOgMangel&&k.jsxs(ye,{gap:"4",children:[k.jsx(we,{size:"small",children:s.PermisjonsbeskrivelseType.find(o=>o.kode===n.permisjonOgMangel?.type)?.navn??""}),k.jsx(ne,{size:"small",children:k.jsx(Qr,{dateStringFom:n.permisjonOgMangel.permisjonFom,dateStringTom:n.permisjonOgMangel.permisjonTom})})]})]}),k.jsxs(ye,{gap:"4",children:[k.jsx(we,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),k.jsx(ne,{size:"small",children:k.jsx(ba,{beløp:t.inntektPrMnd})})]}),k.jsxs(ye,{gap:"4",children:[k.jsx(we,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),k.jsx(ne,{size:"small",children:k.jsx(W,{id:t.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),t.refusjonPrMnd!==void 0&&t.refusjonPrMnd!==null&&k.jsxs(ye,{gap:"4",children:[k.jsx(we,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),k.jsx(ne,{size:"small",children:k.jsx(ba,{beløp:t.refusjonPrMnd})})]}),k.jsxs(Yd,{saksnummer:e,journalpostId:t.journalpostId,dokumentId:t.dokumentId,children:[k.jsx(ne,{size:"small",className:oa.inline,children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})}),k.jsx(Bu,{className:oa.docIcon})]})]}),k.jsxs(ye,{gap:"4",children:[k.jsx(Qu,{className:oa.phoneIcon}),k.jsxs(Me,{gap:"1",children:[k.jsx(we,{size:"small",children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),k.jsx(Or,{children:t.kontaktpersonNavn}),k.jsx(Or,{children:k.jsx(W,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:t.kontaktpersonNummer}})})]})]})]});st.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const i0="_inline_10adz_1",o0="_aksjonpunktImage_10adz_5",l0="_arrow_10adz_12",d0="_ikkeMottatt_10adz_18",u0="_skiller_10adz_30",nr={inline:i0,aksjonpunktImage:o0,arrow:l0,ikkeMottatt:d0,skiller:u0},oi=({saksnummer:e,alleKodeverk:n,radData:t})=>{const r=Xn(),[s,a]=m.useState({}),{arbeidsforholdForRad:i,inntektsmeldingerForRad:o,arbeidsgiverIdent:l,erPrivatPerson:u}=t,d=i.length===1,g=Wh(o,i);return k.jsxs(Me,{gap:"4",children:[k.jsxs(ye,{gap:"4",children:[k.jsx(we,{size:"small",children:k.jsx(W,{id:u?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),k.jsx(ne,{size:"small",children:u?k.jsx(ys,{dateString:t.arbeidsgiverFødselsdato}):l})]}),!d&&k.jsxs(k.Fragment,{children:[k.jsx(Ao,{dividerParagraf:!0,className:nr.skiller}),g.map(({arbeidsforhold:c,inntektsmelding:f})=>k.jsxs(p.Fragment,{children:[k.jsxs(Me,{gap:"2",children:[k.jsxs(ye,{gap:"4",children:[k.jsx(we,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),k.jsxs("div",{children:[c?.eksternArbeidsforholdId&&c.eksternArbeidsforholdId.length<50&&k.jsx("div",{children:k.jsx(ne,{size:"small",children:c.eksternArbeidsforholdId})}),c?.eksternArbeidsforholdId&&c.eksternArbeidsforholdId.length>=50&&k.jsx(Nd,{content:g0(c.eksternArbeidsforholdId),children:k.jsx(ne,{size:"small",children:`${c.eksternArbeidsforholdId.substring(0,50)}...`})}),!c.eksternArbeidsforholdId&&k.jsx(ne,{size:"small",children:"-"})]}),f&&k.jsxs(k.Fragment,{children:[k.jsx(Er,{}),k.jsx(we,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!f&&k.jsxs(k.Fragment,{children:[k.jsx(Er,{}),k.jsxs("div",{children:[k.jsx(Na,{className:nr.aksjonpunktImage,title:r.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),k.jsx("div",{className:nr.ikkeMottatt,children:k.jsx(we,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),k.jsxs(ye,{gap:"4",children:[k.jsx(we,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),k.jsx(ne,{size:"small",children:k.jsx(Qr,{dateStringFom:c.fom,dateStringTom:c.tom})}),f&&k.jsxs(k.Fragment,{children:[k.jsx(Er,{}),k.jsx(ne,{size:"small",children:k.jsx(ys,{dateString:f.motattDato})})]})]}),k.jsxs(ye,{gap:"4",children:[k.jsx(we,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),k.jsx(ne,{size:"small",children:`${c.stillingsprosent}%`})]}),c.permisjonOgMangel&&k.jsxs(ye,{gap:"4",children:[k.jsx(we,{size:"small",children:n.PermisjonsbeskrivelseType.find(y=>y.kode===c.permisjonOgMangel?.type)?.navn??""}),k.jsx(ne,{size:"small",children:k.jsx(Qr,{dateStringFom:c.permisjonOgMangel.permisjonFom,dateStringTom:c.permisjonOgMangel.permisjonTom})})]}),f&&k.jsxs(k.Fragment,{children:[c.internArbeidsforholdId&&s[c.internArbeidsforholdId]&&k.jsx(st,{saksnummer:e,inntektsmelding:f,skalViseArbeidsforholdId:!1,radData:t,alleKodeverk:n}),k.jsxs(za,{onClick:y=>{y.preventDefault(),a(w=>{if(!c.internArbeidsforholdId)return w;const v=w[c.internArbeidsforholdId];return{...w,[c.internArbeidsforholdId]:v===void 0||v===!1}})},href:"",children:[k.jsx("span",{children:k.jsx(ne,{size:"small",className:nr.inline,children:k.jsx(W,{id:!c.internArbeidsforholdId||!s[c.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),c.internArbeidsforholdId&&s[c.internArbeidsforholdId]?k.jsx($o,{className:nr.arrow}):k.jsx(Is,{className:nr.arrow})]})]})]}),k.jsx(Ao,{dividerParagraf:!0,className:nr.skiller})]},`${c.arbeidsgiverIdent}${c.internArbeidsforholdId}`))]}),d&&g.length>0&&g[0].inntektsmelding&&k.jsx(st,{saksnummer:e,radData:t,arbeidsforhold:i[0],inntektsmelding:g[0].inntektsmelding,skalViseArbeidsforholdId:o.length>1,alleKodeverk:n,ikkeVisInfo:!0}),d&&o.length===0&&k.jsxs(k.Fragment,{children:[k.jsxs(ye,{gap:"4",children:[k.jsx(we,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),k.jsx(ne,{size:"small",children:`${i[0].stillingsprosent}%`})]}),i[0].permisjonOgMangel&&k.jsxs(ye,{gap:"4",children:[k.jsx(we,{size:"small",children:n.PermisjonsbeskrivelseType.find(c=>c.kode===i[0].permisjonOgMangel?.type)?.navn??""}),k.jsx(ne,{size:"small",children:k.jsx(Qr,{dateStringFom:i[0].permisjonOgMangel.permisjonFom,dateStringTom:i[0].permisjonOgMangel.permisjonTom})})]})]})]})},g0=e=>{const n=Math.ceil(e.length/25);return Array.from({length:n},(r,s)=>e.slice(s*25,s*25+25)).join("-")};oi.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const m0="_bredde_gb3eb_1",c0="_inline_gb3eb_9",f0="_arrow_gb3eb_13",qt={bredde:m0,inline:c0,arrow:f0},wa=({saksnummer:e,skjæringstidspunkt:n,alleKodeverk:t,radData:r})=>{const[s,a]=m.useState(!1),{inntektsposter:i,arbeidsforholdForRad:o}=r,l=k0(n,i),u=o.length===1,d=i.length>0&&i.some(g=>g.beløp>0);return k.jsxs(Me,{gap:"8",children:[k.jsx(oi,{saksnummer:e,alleKodeverk:t,radData:r}),d&&k.jsxs(Me,{gap:"2",children:[k.jsx(we,{size:"small",children:k.jsx(W,{id:u?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),k.jsx(Me,{gap:"1",children:l.filter((g,c)=>s?!0:c<3).map(g=>k.jsxs(ye,{gap:"2",className:qt.bredde,children:[k.jsx(ne,{size:"small",children:k.jsx(W,{id:`ArbeidsforholdInformasjonPanel.${We(g.fom).month()+1}`})}),k.jsx(ne,{size:"small",children:We(g.fom).year()}),k.jsx(Er,{}),k.jsx(ne,{size:"small",children:k.jsx(ba,{beløp:g.beløp})})]},g.fom))}),k.jsxs(za,{onClick:g=>{g.preventDefault(),a(!s)},href:"",children:[k.jsx("span",{children:k.jsx(ne,{size:"small",className:qt.inline,children:k.jsx(W,{id:s?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),s?k.jsx($o,{className:qt.arrow}):k.jsx(Is,{className:qt.arrow})]})]}),!d&&k.jsx(we,{size:"small",children:k.jsx(W,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})})]})},k0=(e,n)=>{const r=We(e).subtract(1,"month").startOf("month"),s=r.subtract(12,"month"),a=[];for(let i=r;i.isAfter(s);i=i.subtract(1,"month")){const o=i.format(Dn),l=n.find(u=>We(u.fom).startOf("month").format(Dn)===o);a.push({beløp:l?.beløp||0,fom:o})}return a};wa.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const p0="_hjelpetekst_tezw4_1",v0="_alertStripe_tezw4_5",y0="_hjelpetekstInnhold_tezw4_9",b0="_svg_tezw4_14",_t={hjelpetekst:p0,alertStripe:v0,hjelpetekstInnhold:y0,svg:b0},h0=ja(3),I0=Ea(1500),w0=Bo(1),A0=Ko(100),$d=({behandlingUuid:e,behandlingVersjon:n,radData:t,isReadOnly:r,registrerArbeidsforhold:s,lagreVurdering:a,lukkArbeidsforholdRad:i,oppdaterTabell:o})=>{const l=Xn(),u={saksbehandlersVurdering:t.avklaring?.saksbehandlersVurdering,begrunnelse:t.avklaring?.begrunnelse,fom:t.avklaring?.fom,tom:t.avklaring?.tom,stillingsprosent:t.avklaring?.stillingsprosent},d=Ds({defaultValues:u});ii(d.formState.isDirty);const g=d.watch("saksbehandlersVurdering"),c=()=>{i(),d.reset(u)},f=t.inntektsmeldingerForRad[0],y=b=>{const j=E0(o,t,f,b);return b.saksbehandlersVurdering===me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?s({behandlingUuid:e,behandlingVersjon:n,internArbeidsforholdRef:f.internArbeidsforholdId,arbeidsgiverNavn:t.arbeidsgiverNavn,arbeidsgiverIdent:f.arbeidsgiverIdent,vurdering:me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:b.begrunnelse,fom:b.fom,tom:b.tom,stillingsprosent:b.stillingsprosent}).then(j).finally(()=>d.reset(b)):a({behandlingUuid:e,behandlingVersjon:n,vurdering:b.saksbehandlersVurdering,begrunnelse:b.begrunnelse,arbeidsgiverIdent:f.arbeidsgiverIdent,internArbeidsforholdRef:f.internArbeidsforholdId}).then(j).finally(()=>d.reset(b))},w=m.useRef(null),[v,A]=m.useState(!1),h=()=>A(b=>!b);return k.jsxs(Me,{gap:"8",children:[k.jsx("div",{className:_t.alertStripe,children:k.jsx(ct,{variant:"info",children:k.jsx(W,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),k.jsx(xs,{formMethods:d,onSubmit:y,children:k.jsxs(Me,{gap:"4",children:[k.jsx(Kd,{name:"saksbehandlersVurdering",control:d.control,label:k.jsxs(ye,{gap:"2",children:[k.jsx(W,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),k.jsx(zo,{className:_t.svg,ref:w,onClick:h,title:l.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),k.jsx(qr,{open:v,onClose:h,anchorEl:w.current,className:_t.hjelpetekst,children:k.jsx(qr.Content,{className:_t.hjelpetekstInnhold,children:k.jsx(ne,{children:k.jsx(W,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[un],isReadOnly:r,radios:[{label:l.formatMessage({id:"ManglendeOpplysningerForm.TarKontakt"}),value:me.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD},{label:l.formatMessage({id:"ManglendeOpplysningerForm.GåVidere"}),value:me.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING},{label:l.formatMessage({id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"}),value:me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING}]}),g===me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&k.jsxs(ye,{gap:"4",children:[k.jsx(tt,{name:"fom",control:d.control,label:k.jsx(W,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[un,Zr],isReadOnly:r}),k.jsx(tt,{name:"tom",control:d.control,label:k.jsx(W,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[Zr,j0(d.getValues)],isReadOnly:r}),k.jsx(Ia,{name:"stillingsprosent",control:d.control,label:k.jsx(W,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:b=>{const j=parseInt(b.toString(),10);return Number.isNaN(j)?b:j},validate:[un,Co,w0,A0],readOnly:r,maxLength:3})]}),k.jsx(si,{name:"begrunnelse",control:d.control,label:k.jsx(W,{id:"ManglendeOpplysningerForm.Begrunn"}),validate:[un,h0,I0,Ta],maxLength:1500,readOnly:r}),!r&&k.jsxs(ye,{gap:"4",children:[k.jsx(Ne,{size:"small",variant:"secondary",loading:d.formState.isSubmitting,disabled:!d.formState.isDirty||d.formState.isSubmitting,children:k.jsx(W,{id:"ManglendeOpplysningerForm.Lagre"})}),k.jsx(Ne,{size:"small",variant:"tertiary",loading:!1,disabled:d.formState.isSubmitting,onClick:c,type:"button",children:k.jsx(W,{id:"ManglendeOpplysningerForm.Avbryt"})})]})]})})]})},j0=e=>n=>{const t=e("fom");return t&&n?Go(t)(n):null},E0=(e,n,t,r)=>()=>{e(s=>s.map(a=>{if(t.arbeidsgiverIdent===a.arbeidsgiverIdent){const o=r.saksbehandlersVurdering===me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:t.arbeidsgiverIdent,fom:r.fom,tom:r.tom,stillingsprosent:r.stillingsprosent,begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering}:{begrunnelse:r.begrunnelse,saksbehandlersVurdering:r.saksbehandlersVurdering};return{...n,avklaring:o}}return a}))};$d.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const T0="_alertStripe_1jozr_1",O0="_hjelpetekst_1jozr_5",N0="_hjelpetekstInnhold_1jozr_9",R0="_svg_1jozr_14",Mt={alertStripe:T0,hjelpetekst:O0,hjelpetekstInnhold:N0,svg:R0},P0=ja(3),q0=Ea(1500),Wd=({behandlingUuid:e,behandlingVersjon:n,radData:t,isReadOnly:r,lagreVurdering:s,lukkArbeidsforholdRad:a,oppdaterTabell:i})=>{const o=Xn(),{arbeidsforholdForRad:l,inntektsmeldingerForRad:u}=t,d={saksbehandlersVurdering:t.avklaring?.saksbehandlersVurdering,begrunnelse:t.avklaring?.begrunnelse},g=Ds({defaultValues:d});ii(g.formState.isDirty);const c=l.length===1,f=()=>{a(),g.reset(d)},y=j=>{const I={behandlingUuid:e,behandlingVersjon:n,vurdering:j.saksbehandlersVurdering,arbeidsgiverIdent:t.arbeidsgiverIdent,internArbeidsforholdRef:c?l[0].internArbeidsforholdId:void 0,begrunnelse:j.begrunnelse};return s(I).then(_0(i,t,j)).finally(()=>g.reset(j))},w=m.useRef(null),[v,A]=m.useState(!1),h=()=>A(j=>!j),b=[{label:o.formatMessage({id:"InntektsmeldingInnhentesForm.TarKontakt"}),value:me.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING},{label:o.formatMessage({id:"InntektsmeldingInnhentesForm.GåVidere"}),value:me.FORTSETT_UTEN_INNTEKTSMELDING}];return t.erPrivatPerson||b.splice(1,0,{label:o.formatMessage({id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"}),value:me.MELDING_TIL_ARBEIDSGIVER_NAV_NO}),k.jsx(xs,{formMethods:g,onSubmit:y,children:k.jsxs(Me,{gap:"4",children:[!c&&u.length>0&&k.jsx("div",{className:Mt.alertStripe,children:k.jsx(ct,{variant:"info",children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})})}),k.jsx(Kd,{name:"saksbehandlersVurdering",control:g.control,label:k.jsxs(ye,{gap:"2",children:[k.jsx(W,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),k.jsx(zo,{ref:w,onClick:h,className:Mt.svg,title:o.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),k.jsx(qr,{open:v,onClose:h,anchorEl:w.current,className:Mt.hjelpetekst,children:k.jsx(qr.Content,{className:Mt.hjelpetekstInnhold,children:k.jsxs(Me,{gap:"4",children:[k.jsx(ne,{children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),k.jsx(ne,{children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),k.jsx(ne,{children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})})]}),validate:[un],isReadOnly:r,radios:b}),k.jsx(si,{name:"begrunnelse",control:g.control,label:k.jsx(W,{id:c?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),validate:[un,P0,q0,Ta],maxLength:1500,readOnly:r}),!r&&k.jsxs(ye,{gap:"4",children:[k.jsx(Ne,{size:"small",variant:"secondary",loading:g.formState.isSubmitting,disabled:!g.formState.isDirty||g.formState.isSubmitting,children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.Lagre"})}),k.jsx(Ne,{size:"small",variant:"tertiary",loading:!1,disabled:g.formState.isSubmitting,onClick:f,type:"button",children:k.jsx(W,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]})]})})},_0=(e,n,t)=>()=>{e(r=>r.map(s=>s.arbeidsgiverIdent===n.arbeidsgiverIdent?{...n,avklaring:{begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}}:s))};Wd.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const at="342352362",M0=ja(3),D0=Ea(1500),S0=Bo(1),x0=Ko(100),li=({behandlingUuid:e,behandlingVersjon:n,isReadOnly:t,registrerArbeidsforhold:r,radData:s,lukkArbeidsforholdRad:a,erOverstyrt:i,oppdaterTabell:o,erNyttArbeidsforhold:l=!1})=>{const u=Xn(),[d,g]=m.useState(!1),c={fom:s?.avklaring?.fom,tom:s?.avklaring?.tom,stillingsprosent:s?.avklaring?.stillingsprosent,begrunnelse:s?.avklaring?.begrunnelse,arbeidsgiverNavn:s?.avklaring?.arbeidsgiverNavn},f=Ds({defaultValues:c});ii(f.formState.isDirty);const y=()=>{a(),f.reset(c)},w=A=>{const h=Do(me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,e,n,A);return r(h).then(()=>{o(V0(A)),f.reset(A),l&&a()})},v=()=>{const A=f.getValues(),h=Do(me.FJERN_FRA_BEHANDLINGEN,e,n,A);r(h).then(L0(o,a,l))};return k.jsxs(Me,{gap:"4",children:[!s&&k.jsx(hs,{size:"small",children:k.jsx(W,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),k.jsx(xs,{formMethods:f,onSubmit:w,children:k.jsxs(Me,{gap:"6",children:[k.jsxs(ye,{gap:"4",children:[i&&k.jsxs(k.Fragment,{children:[k.jsx(Ia,{name:"arbeidsgiverNavn",control:f.control,label:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[un],readOnly:t||!i}),k.jsx(tt,{name:"fom",control:f.control,label:k.jsx(W,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[un,Zr],isReadOnly:t||!i}),k.jsx(tt,{name:"tom",control:f.control,label:k.jsx(W,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[Zr,F0(f.getValues)],isReadOnly:t||!i})]}),k.jsx(Ia,{name:"stillingsprosent",control:f.control,label:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:A=>{const h=parseInt(A.toString(),10);return Number.isNaN(h)?A:h},validate:[un,Co,S0,x0],readOnly:t||!i,maxLength:3})]}),k.jsx(si,{name:"begrunnelse",control:f.control,label:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Begrunn"}),validate:[un,M0,D0,Ta],maxLength:1500,readOnly:t||!i}),i&&k.jsxs(ye,{gap:"4",children:[k.jsx(Ne,{size:"small",variant:"secondary",loading:f.formState.isSubmitting,disabled:!f.formState.isDirty||f.formState.isSubmitting,children:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Lagre"})}),k.jsx(Ne,{size:"small",variant:"tertiary",loading:!1,disabled:f.formState.isSubmitting,onClick:y,type:"button",children:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),s&&k.jsxs(k.Fragment,{children:[k.jsx(Er,{}),k.jsx(Ne,{size:"small",variant:"tertiary",loading:!1,disabled:f.formState.isSubmitting,onClick:()=>g(!0),type:"button",icon:k.jsx(og,{"aria-hidden":!0}),children:k.jsx(W,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]})]})}),d&&k.jsx(gh,{text:u.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:v,cancel:()=>g(!1),showModal:!0})]})},Do=(e,n,t,r)=>({vurdering:e,behandlingUuid:n,behandlingVersjon:t,arbeidsgiverIdent:at,begrunnelse:r.begrunnelse,arbeidsgiverNavn:r.arbeidsgiverNavn,fom:r.fom,tom:r.tom,stillingsprosent:r.stillingsprosent}),F0=e=>n=>{const t=e("fom");return n&&t?Go(t)(n):null},V0=e=>n=>{const t={erPrivatPerson:!1,arbeidsgiverIdent:at,arbeidsgiverNavn:e.arbeidsgiverNavn,avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER},inntektsmeldingerForRad:[],inntektsposter:[],arbeidsforholdForRad:[]},r=n.findIndex(s=>s.arbeidsgiverIdent===at);return r===-1?n.concat(t):n.map((s,a)=>a===r?t:s)},L0=(e,n,t)=>()=>{e(r=>r.filter(s=>s.arbeidsgiverIdent!==at)),t&&n()};li.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const C0="_exclamationmarkIcon_1a4yb_1",B0="_checkmarkIcon_1a4yb_8",K0="_panelOpen_1a4yb_15",G0="_panelOpenAp_1a4yb_24",U0="_row_1a4yb_34",H0="_isOpen_1a4yb_40",Y0="_isApOpen_1a4yb_44",$r={exclamationmarkIcon:C0,checkmarkIcon:B0,panelOpen:K0,panelOpenAp:G0,row:U0,isOpen:H0,isApOpen:Y0},$0=n0.bind($r),zd=({saksnummer:e,behandlingUuid:n,behandlingVersjon:t,radData:r,isReadOnly:s,erOverstyrt:a,oppdaterTabell:i,registrerArbeidsforhold:o,lagreVurdering:l,toggleÅpenRad:u,erRadÅpen:d,alleKodeverk:g,skjæringstidspunkt:c})=>{const f=Xn(),{inntektsmeldingerForRad:y,arbeidsforholdForRad:w,arbeidsgiverNavn:v,avklaring:A,årsak:h}=r,b=A?.saksbehandlersVurdering===me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,j=w.length>0&&y.length>0&&!h,I=h===Ve.MANGLENDE_INNTEKTSMELDING,O=h===Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,N=!!h&&!A?.saksbehandlersVurdering,x=w.length>0&&y.length===0&&!h&&!b,q=w.length===0&&y.length>0&&!h,F=z0(w,A);return k.jsxs(Ee.ExpandableRow,{open:d,onOpenChange:u,expandOnRowClick:!0,togglePlacement:"right",contentGutter:"none",className:$0("row",{isOpen:d,isApOpen:N}),content:k.jsxs(Me,{gap:"4",className:N?$r.panelOpenAp:$r.panelOpen,children:[b&&k.jsx(li,{behandlingUuid:n,behandlingVersjon:t,isReadOnly:!1,registrerArbeidsforhold:o,radData:r,lukkArbeidsforholdRad:u,erOverstyrt:a,oppdaterTabell:i}),j&&k.jsx(oi,{saksnummer:e,alleKodeverk:g,radData:r}),q&&k.jsx(st,{saksnummer:e,arbeidsforhold:w.length>0?w[0]:void 0,inntektsmelding:y[0],skalViseArbeidsforholdId:!1,alleKodeverk:g,radData:r}),I&&k.jsxs(k.Fragment,{children:[k.jsx(wa,{saksnummer:e,skjæringstidspunkt:c,alleKodeverk:g,radData:r}),k.jsx(Wd,{behandlingUuid:n,behandlingVersjon:t,isReadOnly:s,radData:r,lagreVurdering:l,lukkArbeidsforholdRad:u,oppdaterTabell:i})]}),O&&k.jsxs(k.Fragment,{children:[k.jsx(st,{saksnummer:e,inntektsmelding:y[0],skalViseArbeidsforholdId:y.length>1,radData:r,alleKodeverk:g}),k.jsx($d,{behandlingUuid:n,behandlingVersjon:t,radData:r,isReadOnly:s,registrerArbeidsforhold:o,lagreVurdering:l,lukkArbeidsforholdRad:u,oppdaterTabell:i})]}),x&&k.jsx(wa,{saksnummer:e,skjæringstidspunkt:c,alleKodeverk:g,radData:r})]}),children:[k.jsxs(Ee.DataCell,{children:[!N&&k.jsx(Du,{title:f.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:$r.checkmarkIcon}),N&&k.jsx(Na,{title:f.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:$r.exclamationmarkIcon})]}),k.jsx(Ee.DataCell,{children:k.jsx(ne,{children:v})}),k.jsx(Ee.DataCell,{children:k.jsx(ne,{children:F?.fom?k.jsx(Qr,{dateStringFom:F.fom,dateStringTom:F.tom}):"-"})}),k.jsx(Ee.DataCell,{children:k.jsx(ne,{children:k.jsx(W,{id:W0(b,w.length>0)})})}),k.jsx(Ee.DataCell,{children:k.jsxs(ne,{children:[w.length<2&&y.length===1&&k.jsx(ys,{dateString:y[0].motattDato}),!I&&w.length>1&&y.length===w.length&&k.jsx(W,{id:"ArbeidsforholdRad.Mottatt"}),(b||I&&y.length<w.length)&&k.jsx(W,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})},W0=(e,n)=>e?"ArbeidsforholdRad.Saksbehandler":n?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",z0=(e,n)=>{if(n?.saksbehandlersVurdering===me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||n?.saksbehandlersVurdering===me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:n?.fom,tom:n?.tom};const t=e.reduce((r,s)=>({fom:r.fom&&We(r.fom).isBefore(s.fom)?r.fom:s.fom,tom:r.tom&&We(r.tom).isAfter(s.tom)?r.tom:s.tom}),{fom:void 0,tom:void 0});return t.fom?t:void 0};zd.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const J0="_alertStripe_mucgx_5",X0={alertStripe:J0},Jd=({behandling:e,aksjonspunkt:n,readOnly:t,arbeidOgInntekt:r,registrerArbeidsforhold:s,erOverstyrer:a,tabellData:i,settÅpneRadIndexer:o,setErOverstyrt:l,oppdaterTabell:u})=>{const d=Xn(),{arbeidsforhold:g,inntektsmeldinger:c}=r,[f,y]=m.useState(!1),[w,v]=m.useState(!1),A=()=>{l(!0),y(!0);const I=i.findIndex(O=>O.avklaring?.saksbehandlersVurdering===me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER);I!==-1&&o([I])},h=Q0(i,n),b=i.every(I=>I.arbeidsgiverIdent!==at),j=n?.status===He.OPPRETTET;return k.jsxs(Me,{gap:"8",children:[k.jsxs(ye,{gap:"4",children:[k.jsx(hs,{size:"small",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),a&&j&&!t&&k.jsx(eh,{onClick:A}),k.jsx(Er,{}),k.jsx(ne,{size:"small",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Vo(r.skjæringstidspunkt)}})})]}),k.jsxs(Me,{gap:"4",children:[h.length>0&&k.jsx(Zb,{children:h.map(I=>d.formatMessage({id:I})).join(" ")}),g.length===0&&c.length===0&&a&&k.jsx("div",{className:X0.alertStripe,children:k.jsx(ct,{variant:"info",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),f&&b&&!w&&k.jsx("div",{children:k.jsx(Ne,{size:"small",variant:"tertiary",icon:k.jsx(eg,{"aria-hidden":!0}),onClick:()=>v(!0),children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})})}),w&&k.jsx(li,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:s,lukkArbeidsforholdRad:()=>v(!1),oppdaterTabell:u,erOverstyrt:!0,erNyttArbeidsforhold:!0})]})]})},Q0=(e,n)=>{const t=e.some(i=>i.årsak===Ve.MANGLENDE_INNTEKTSMELDING),r=e.some(i=>i.årsak===Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),s=n?.status===He.OPPRETTET,a=[];return s&&t&&a.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),s&&r&&a.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),a};Jd.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const Z0="_alertStripe_7z8j7_1",eI="_headerRow_7z8j7_5",So={alertStripe:Z0,headerRow:eI},Xd=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:t,lagreVurdering:r,erOverstyrer:s,settBehandlingPåVentCallback:a,åpneForNyVurdering:i})=>{const[o,l]=m.useState(!1),[u,d]=m.useState(!1),[g,c]=m.useState(!1),{alleKodeverk:f,submitCallback:y,aksjonspunkterForPanel:w,behandling:v,fagsak:A,isReadOnly:h}=lu(),b=w.length>0?w[0]:void 0,{mellomlagretFormData:j,setMellomlagretFormData:I}=du(),[O,N]=m.useState(j??Qh(e,n)),[x,q]=m.useState(_o(O)),F=Uh();m.useEffect(()=>()=>{I(O)},[O]);const L=U=>{x.some(re=>re===U)?q(x.filter(re=>re!==U)):q(x.concat(U))},_=m.useRef(null),T=U=>{N(U),q(_o(U(O))),_?.current?.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},P=()=>{l(!0),y({kode:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},D=()=>{l(!0),i()},C=U=>{l(!0),d(!1);const{frist:re,ventearsak:te}=U;te&&a({frist:re,ventearsak:te})},B=O.some(U=>U.avklaring?.saksbehandlersVurdering===me.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||U.avklaring?.saksbehandlersVurdering===me.MELDING_TIL_ARBEIDSGIVER_NAV_NO||U.avklaring?.saksbehandlersVurdering===me.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD),V=O.every(U=>!U.årsak||U.årsak&&U.avklaring),S=b===void 0,H=b?.status===He.UTFORT,J=b?.status===He.OPPRETTET,se=!h&&(H||s&&S),xe=!h&&J&&V&&!F&&B,Z=!h&&J&&V&&!F&&!B;return k.jsxs(Me,{gap:"4",children:[k.jsx(Jd,{behandling:v,aksjonspunkt:b,readOnly:h,arbeidOgInntekt:e,registrerArbeidsforhold:t,erOverstyrer:s,tabellData:O,settÅpneRadIndexer:q,setErOverstyrt:c,oppdaterTabell:T}),k.jsxs(Ee,{ref:_,children:[k.jsx(Ee.Header,{children:k.jsxs(Ee.Row,{className:So.headerRow,children:[k.jsx(Ee.HeaderCell,{scope:"col"}),k.jsx(Ee.HeaderCell,{scope:"col",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Arbeidsforhold"})}),k.jsx(Ee.HeaderCell,{scope:"col",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Periode"})}),k.jsx(Ee.HeaderCell,{scope:"col",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Kilde"})}),k.jsx(Ee.HeaderCell,{scope:"col",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt"})}),k.jsx(Ee.HeaderCell,{scope:"col"})]})}),k.jsx(Ee.Body,{children:O.map((U,re)=>k.jsx(zd,{saksnummer:A.saksnummer,behandlingUuid:v.uuid,behandlingVersjon:v.versjon,radData:U,skjæringstidspunkt:e.skjæringstidspunkt,isReadOnly:h||H||S,registrerArbeidsforhold:t,lagreVurdering:r,toggleÅpenRad:()=>L(re),erOverstyrt:g,oppdaterTabell:T,erRadÅpen:x.includes(re),alleKodeverk:f},`${U.arbeidsgiverNavn}${U.arbeidsgiverIdent}`))})]}),xe&&k.jsxs("div",{children:[k.jsx(Ne,{size:"small",variant:"primary",disabled:o,onClick:()=>d(!0),type:"button",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),k.jsx(Ud,{submitCallback:C,cancelEvent:()=>d(!1),defaultVenteårsak:Ye.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:f.Venteårsak,erTilbakekreving:!1,showModal:u,frist:null})]}),Z&&k.jsx("div",{children:k.jsx(Ne,{size:"small",variant:"primary",disabled:o,loading:o,onClick:P,type:"button",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})})}),se&&k.jsxs(Me,{gap:"4",children:[k.jsx("div",{className:So.alertStripe,children:k.jsx(ct,{variant:"info",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),k.jsx("div",{children:k.jsx(Ne,{size:"small",variant:"secondary",disabled:o,loading:o,onClick:D,type:"button",children:k.jsx(W,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})})]})]})};Xd.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const nI={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?"},rI=gr(nI),Aa=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:t,lagreVurdering:r,erOverstyrer:s,settBehandlingPåVentCallback:a,åpneForNyVurdering:i})=>k.jsx(Lo,{value:rI,children:k.jsx(Hd,{children:k.jsx(Xd,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:n,registrerArbeidsforhold:t,lagreVurdering:r,erOverstyrer:s,settBehandlingPåVentCallback:a,åpneForNyVurdering:i})})});Aa.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:Dt}=__STORYBOOK_MODULE_ACTIONS__,zn="342352362",Qe={innsendingstidspunkt:"2021-12-06T00:00:00",kildeSystem:"Altinn",bortfalteNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",behandlingsIdeer:[],tilknyttedeBehandlingIder:[],aktiveNaturalytelser:[]},aI={title:"fakta/fakta-arbeid-og-inntekter",component:Aa,decorators:[uu,gu],args:{arbeidsgiverOpplysningerPerId:{},lagreVurdering:Dt("onLagreVurdering"),registrerArbeidsforhold:Dt("onRegistrerArbeidsforhold"),åpneForNyVurdering:Dt("onÅpneForNyVurdering"),settBehandlingPåVentCallback:Dt("onSettBehandlingPåVentCallback"),erOverstyrer:!1},render:e=>k.jsx(Aa,{...e})},St={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:He.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ve.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Tr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:41e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},xt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:He.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Ft={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:He.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:me.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,begrunnelse:"Vil innehente inntektsmelding fordi..."}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},Vt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:He.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[{...Qe,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Lt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:He.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},Ct={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:He.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},Bt={args:{aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2"}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},Kt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:He.OPPRETTET}],arbeidsgiverOpplysningerPerId:{},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},Gt={args:{arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Ut={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:He.OPPRETTET}],arbeidsgiverOpplysningerPerId:{[zn]:{erPrivatPerson:!1,identifikator:zn,navn:"Telenor",referanse:zn}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:zn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},Ht={args:{arbeidsgiverOpplysningerPerId:{[zn]:{erPrivatPerson:!1,identifikator:zn,navn:"Telenor",referanse:zn}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:zn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0,isReadOnly:!0}},Yt={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Tr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},$t={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",fom:"2021-12-01",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",stillingsprosent:80,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",inntektPrMnd:1e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"41925090",motattDato:"2021-11-06",journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Wt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:He.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"},910909092:{erPrivatPerson:!1,identifikator:"910909092",navn:"DNB",referanse:"910909092"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Qe,arbeidsgiverIdent:"910909092",eksternArbeidsforholdId:void 0,inntektPrMnd:1e4,internArbeidsforholdId:void 0,kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"55599999",motattDato:"2021-12-06",refusjonPrMnd:5e3,journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:31e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:3e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:3e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:3e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},zt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:He.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"9374546382674846453452720241327384837356378478393893847474783",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Qe,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001sdsfdsdfsdfwer",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8cwds",kontaktpersonNavn:"Espen Solstråle",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"1",motattDato:"2021-12-01",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD},{...Qe,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c8wew",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Jt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:He.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:void 0,permisjonOgMangel:{permisjonFom:"2022-10-01",type:Tr.PERMITTERING},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d3",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Tr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Qe,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:void 0}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Xt={args:{erOverstyrer:!0,isReadOnly:!0,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[{...Qe,inntektPrMnd:4e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"947064649",eksternArbeidsforholdId:void 0,internArbeidsforholdId:void 0,kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975324",dokumentId:"549168225",motattDato:"2022-02-15",årsak:void 0,begrunnelse:void 0,saksbehandlersVurdering:void 0}],arbeidsforhold:[],inntekter:[],skjæringstidspunkt:"2022-02-16"}}},Qt={args:{erOverstyrer:!1,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[],arbeidsforhold:[{arbeidsgiverIdent:"947064649",internArbeidsforholdId:"f98840f3-e74b-4255-ac33-b1cdcdb60311",eksternArbeidsforholdId:"2",fom:"2002-02-16",tom:"9999-12-31",stillingsprosent:20,årsak:void 0,saksbehandlersVurdering:null,begrunnelse:null}],inntekter:[],skjæringstidspunkt:"2022-02-05"}}},Zt={args:{erOverstyrer:!1,aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:He.OPPRETTET}],arbeidsgiverOpplysningerPerId:{342352362:{erPrivatPerson:!1,referanse:"342352362",identifikator:"342352362",navn:"Lagt til av saksbehandler"},947064649:{erPrivatPerson:!1,referanse:"947064649",identifikator:"947064649",navn:"SJOKKERENDE ELEKTRIKER"},972674818:{erPrivatPerson:!1,referanse:"972674818",identifikator:"972674818",navn:"PENGELØS SPAREBANK"}},arbeidOgInntekt:{inntektsmeldinger:[{...Qe,inntektPrMnd:2e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"972674818",eksternArbeidsforholdId:void 0,internArbeidsforholdId:void 0,kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975527",dokumentId:"549168458",motattDato:"2022-02-16",årsak:void 0,begrunnelse:"her vil jeg mase på AG",saksbehandlersVurdering:me.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING}],arbeidsforhold:[{arbeidsgiverIdent:"947064649",internArbeidsforholdId:"6e220db0-5cdf-410f-b8a0-a78ac4ff87a1",eksternArbeidsforholdId:"2",fom:"2018-10-01",tom:"9999-12-31",stillingsprosent:50,årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:me.FORTSETT_UTEN_INNTEKTSMELDING,begrunnelse:"her trenger jeg ikke IM. ja ja"},{arbeidsgiverIdent:"972674818",internArbeidsforholdId:"3aee54db-af17-4b18-8c9c-897be1f4d572",eksternArbeidsforholdId:"1",fom:"2000-05-13",tom:"9999-12-31",stillingsprosent:100,årsak:void 0,saksbehandlersVurdering:null,begrunnelse:null}],inntekter:[{arbeidsgiverIdent:"947064649",inntekter:[{beløp:15e3,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]},{arbeidsgiverIdent:"972674818",inntekter:[{beløp:2e4,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]}],skjæringstidspunkt:"2022-02-15"}}},es={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!0,fødselsdato:"2000-01-01",identifikator:"910909088",navn:"Bettan",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Tr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Qe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}};St.parameters={...St.parameters,docs:{...St.parameters?.docs,source:{originalSource:`{
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
}`,...St.parameters?.docs?.source}}};xt.parameters={...xt.parameters,docs:{...xt.parameters?.docs,source:{originalSource:`{
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
}`,...xt.parameters?.docs?.source}}};Ft.parameters={...Ft.parameters,docs:{...Ft.parameters?.docs,source:{originalSource:`{
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
}`,...Ft.parameters?.docs?.source}}};Vt.parameters={...Vt.parameters,docs:{...Vt.parameters?.docs,source:{originalSource:`{
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
}`,...Vt.parameters?.docs?.source}}};Lt.parameters={...Lt.parameters,docs:{...Lt.parameters?.docs,source:{originalSource:`{
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
}`,...Lt.parameters?.docs?.source}}};Ct.parameters={...Ct.parameters,docs:{...Ct.parameters?.docs,source:{originalSource:`{
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
}`,...Ct.parameters?.docs?.source}}};Bt.parameters={...Bt.parameters,docs:{...Bt.parameters?.docs,source:{originalSource:`{
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
}`,...Bt.parameters?.docs?.source}}};Kt.parameters={...Kt.parameters,docs:{...Kt.parameters?.docs,source:{originalSource:`{
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
}`,...Kt.parameters?.docs?.source}}};Gt.parameters={...Gt.parameters,docs:{...Gt.parameters?.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...Gt.parameters?.docs?.source}}};Ut.parameters={...Ut.parameters,docs:{...Ut.parameters?.docs,source:{originalSource:`{
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
}`,...Ut.parameters?.docs?.source}}};Ht.parameters={...Ht.parameters,docs:{...Ht.parameters?.docs,source:{originalSource:`{
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
}`,...Ht.parameters?.docs?.source}}};Yt.parameters={...Yt.parameters,docs:{...Yt.parameters?.docs,source:{originalSource:`{
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
}`,...Yt.parameters?.docs?.source}}};$t.parameters={...$t.parameters,docs:{...$t.parameters?.docs,source:{originalSource:`{
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
}`,...$t.parameters?.docs?.source}}};Wt.parameters={...Wt.parameters,docs:{...Wt.parameters?.docs,source:{originalSource:`{
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
}`,...Wt.parameters?.docs?.source}}};zt.parameters={...zt.parameters,docs:{...zt.parameters?.docs,source:{originalSource:`{
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
}`,...zt.parameters?.docs?.source}}};Jt.parameters={...Jt.parameters,docs:{...Jt.parameters?.docs,source:{originalSource:`{
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
}`,...Jt.parameters?.docs?.source}}};Xt.parameters={...Xt.parameters,docs:{...Xt.parameters?.docs,source:{originalSource:`{
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
}`,...Xt.parameters?.docs?.source}}};Qt.parameters={...Qt.parameters,docs:{...Qt.parameters?.docs,source:{originalSource:`{
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
}`,...Qt.parameters?.docs?.source}}};Zt.parameters={...Zt.parameters,docs:{...Zt.parameters?.docs,source:{originalSource:`{
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
}`,...Zt.parameters?.docs?.source}}};es.parameters={...es.parameters,docs:{...es.parameters?.docs,source:{originalSource:`{
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
}`,...es.parameters?.docs?.source}}};const iI=["InnhentInntektsmelding","InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret","InnhentInntektsmeldingDerBehandlingErAvsluttet","AvklarManglendeArbeidsforhold","AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet","AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig","IngenAksjonspunktMenTilbakehoppMuligForOverstyrer","SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer","SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer","ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet","ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet","ArbeidsforholdErOK","ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet","FlereArbeidsforholdOgInntekstemeldinger","ArbeidsforholdMedSammeOrgNr","ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre","FoerRegisterinnhenting","AutomatiskIgnorertInntektsmelding","EtterAtEtterspurtInntektsmeldingErKommet","SkalViseFødselsnummerForPrivatperson"];export{Ht as ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet,Ut as ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet,Yt as ArbeidsforholdErOK,$t as ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet,zt as ArbeidsforholdMedSammeOrgNr,Jt as ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre,Qt as AutomatiskIgnorertInntektsmelding,Vt as AvklarManglendeArbeidsforhold,Lt as AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet,Ct as AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig,Zt as EtterAtEtterspurtInntektsmeldingErKommet,Wt as FlereArbeidsforholdOgInntekstemeldinger,Xt as FoerRegisterinnhenting,Bt as IngenAksjonspunktMenTilbakehoppMuligForOverstyrer,St as InnhentInntektsmelding,Ft as InnhentInntektsmeldingDerBehandlingErAvsluttet,xt as InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret,Gt as SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer,Kt as SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer,es as SkalViseFødselsnummerForPrivatperson,iI as __namedExportsOrder,aI as default};
