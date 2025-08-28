import{g as Fl,r as g,u as Xn,_ as gi,s as ci,c as lt,a as ee,R as v,b as Aa,d as ot,T as rd,S as Mr,m as td,e as Sr,f as Vl,h as gr,Q as ad,o as Ll,A as sd,i as We,P as Dn,n as Tt,j as f,t as dn,O as nt,F as id,E as ld,k as fi,l as Bl,p as Cl,q as Kl,v as Gl,w as Os,x as Ts,M as Ns,J as Ul,y as Ye,z as od,B as ud,C as dd,D as md}from"./iframe-tO9cMa1t.js";import{r as gd}from"./index-CdOabrPQ.js";import"./preload-helper-D9Z9MdNV.js";var Rs=gd();const ia=Fl(Rs);function cd(e,r){var t=e.values,n=gi(e,["values"]),a=r.values,s=gi(r,["values"]);return ci(a,t)&&ci(n,s)}function Yl(e){var r=Xn(),t=r.formatMessage,n=r.textComponent,a=n===void 0?g.Fragment:n,s=e.id,i=e.description,l=e.defaultMessage,o=e.values,d=e.children,u=e.tagName,m=u===void 0?a:u,c=e.ignoreTag,k={id:s,description:i,defaultMessage:l},y=t(k,o,{ignoreTag:c});return typeof d=="function"?d(Array.isArray(y)?y:[y]):m?g.createElement(m,null,y):g.createElement(g.Fragment,null,y)}Yl.displayName="FormattedMessage";var Y=g.memo(Yl,cd);Y.displayName="MemoizedFormattedMessage";var rn=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(rn||{}),me=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(me||{}),He=(e=>(e.AVV_DOK="AVV_DOK",e.AVV_FODSEL="AVV_FODSEL",e.UTV_FRIST="UTV_FRIST",e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG="VENT_PÅ_TILBAKEKREVINGSGRUNNLAG",e.VENT_PÅ_BRUKERTILBAKEMELDING="VENT_PÅ_BRUKERTILBAKEMELDING",e.VENT_UTLAND_TRYGD="VENT_UTLAND_TRYGD",e.UTVIDET_TILSVAR_FRIST="UTV_TIL_FRIST",e.ENDRE_TILKJENT_YTELSE="ENDRE_TILKJENT_YTELSE",e.VENT_PÅ_MULIG_MOTREGNING="VENT_PÅ_MULIG_MOTREGNING",e.AVV_RESPONS_REVURDERING="AVV_RESPONS_REVURDERING",e.FOR_TIDLIG_SOKNAD="FOR_TIDLIG_SOKNAD",e.VENT_PÅ_SISTE_AAP_ELLER_DP_MELDEKORT="VENT_PÅ_SISTE_AAP_MELDEKORT",e.ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER="ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",e.ANKE_OVERSENDT_TIL_TRYGDERETTEN="ANKE_OVERSENDT_TIL_TRYGDERETTEN",e.VENT_PÅ_KORRIGERT_BESTEBEREGNING="VENT_PÅ_KORRIGERT_BESTEBEREGNING",e.VENT_OPDT_INNTEKTSMELDING="VENT_OPDT_INNTEKTSMELDING",e.VENT_OPPTJENING_OPPLYSNINGER="VENT_OPPTJENING_OPPLYSNINGER",e.VENT_INNTEKT_RAPPORTERINGSFRIST="VENT_INNTEKT_RAPPORTERINGSFRIST",e.VENT_MANGLENDE_SYKEMELDING="VENT_MANGLENDE_SYKEMELDING",e.VENT_SØKNAD_SENDT_INFORMASJONSBREV="VENT_SØKNAD_SENDT_INFORMASJONSBREV",e.VENT_ÅPEN_BEHANDLING="VENT_ÅPEN_BEHANDLING",e.VENT_KABAL="VENT_KABAL",e))(He||{}),Tr=(e=>(e.PERMISJON="PERMISJON",e.PERMITTERING="PERMITTERING",e.PERMISJON_VED_MILITÆRTJENESTE="PERMISJON_VED_MILITÆRTJENESTE",e.UTDANNINGSPERMISJON_LOVFESTET="UTDANNINGSPERMISJON_LOVFESTET",e.UTDANNINGSPERMISJON="UTDANNINGSPERMISJON",e.UTDANNINGSPERMISJON_IKKE_LOVFESTET="UTDANNINGSPERMISJON_IKKE_LOVFESTET",e.VELFERDSPERMISJON="VELFERDSPERMISJON",e.ANNEN_PERMISJON_LOVFESTET="ANNEN_PERMISJON_LOVFESTET",e.PERMISJON_MED_FORELDREPENGER="PERMISJON_MED_FORELDREPENGER",e.ANNEN_PERMISJON_IKKE_LOVFESTET="ANNEN_PERMISJON_IKKE_LOVFESTET",e))(Tr||{});const fd=(e,r,t)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${r}&dokumentId=${t}`,kd=(e,r,t)=>{const n=window.open(e,r);n&&setTimeout(()=>{n.document.title=t},1e3)},xr=e=>lt({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var vd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ps=g.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:s,truncate:i,weight:l="regular",align:o,visuallyHidden:d,textColor:u}=e,m=vd(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:c}=ee();return v.createElement(a,Object.assign({},m,{ref:r,className:c(t,"navds-body-long",`navds-body-long--${n}`,xr({spacing:s,truncate:i,weight:l,align:o,visuallyHidden:d,textColor:u}))}))});var pd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ne=g.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:s,truncate:i,weight:l="regular",align:o,visuallyHidden:d,textColor:u}=e,m=pd(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:c}=ee();return v.createElement(a,Object.assign({},m,{ref:r,className:c(t,"navds-body-short",`navds-body-short--${n}`,xr({spacing:s,truncate:i,weight:l,align:o,visuallyHidden:d,textColor:u}))}))});var yd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Nr=g.forwardRef((e,r)=>{var{className:t,size:n="medium",spacing:a,uppercase:s,as:i="p",truncate:l,weight:o="regular",align:d,visuallyHidden:u,textColor:m}=e,c=yd(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:k}=ee();return v.createElement(i,Object.assign({},c,{ref:r,className:k(t,"navds-detail",xr({spacing:a,truncate:l,weight:o,align:d,visuallyHidden:u,textColor:m,uppercase:s}),{"navds-detail--small":n==="small"})}))});var bd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ut=g.forwardRef((e,r)=>{var{children:t,className:n,size:a,spacing:s,as:i="p",showIcon:l=!1}=e,o=bd(e,["children","className","size","spacing","as","showIcon"]);const{cn:d}=ee();return v.createElement(i,Object.assign({},o,{ref:r,className:d("navds-error-message","navds-label",n,xr({spacing:s}),{"navds-label--small":a==="small","navds-error-message--show-icon":l})}),l&&v.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},v.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var hd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const dt=g.forwardRef((e,r)=>{var{level:t="1",size:n,className:a,as:s,spacing:i,align:l,visuallyHidden:o,textColor:d}=e,u=hd(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:m}=ee(),c=s??`h${t}`;return v.createElement(c,Object.assign({},u,{ref:r,className:m(a,"navds-heading",`navds-heading--${n}`,xr({spacing:i,align:l,visuallyHidden:o,textColor:d}))}))});var Id=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};g.forwardRef((e,r)=>{var{className:t,spacing:n,as:a="p"}=e,s=Id(e,["className","spacing","as"]);const{cn:i}=ee();return v.createElement(a,Object.assign({},s,{ref:r,className:i(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var wd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const he=g.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:l}=e,o=wd(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:d}=ee();return v.createElement(a,Object.assign({},o,{ref:r,className:d(t,"navds-label",xr({spacing:s,visuallyHidden:i,textColor:l}),{"navds-label--small":n==="small"})}))});function Hl(e,r=166,t=!1){let n;function a(...s){const i=()=>{n=void 0,e.apply(this,s)};!n&&t&&i(),clearTimeout(n),n=setTimeout(i,r)}return a.clear=()=>{clearTimeout(n)},a}function nn(e,r){const t=Object.entries(e).filter(([n])=>!r.includes(n));return Object.fromEntries(t)}const Rr=globalThis?.document?g.useLayoutEffect:()=>{};let ki=0;function Ad(e){const[r,t]=g.useState(e),n=e||r;return g.useEffect(()=>{r==null&&(ki+=1,t(`aksel-id-${ki}`))},[r]),n}const vi=v.useId;function Kn(e){var r;if(vi!==void 0){const t=vi();return e??t.replace(/(:)/g,"")}return(r=Ad(e))!==null&&r!==void 0?r:""}function rt(e,r=[]){const t=g.useRef(e);return g.useEffect(()=>{t.current=e}),g.useCallback((...n)=>{var a;return(a=t.current)===null||a===void 0?void 0:a.call(t,...n)},r)}function Pr({value:e,defaultValue:r,onChange:t}){const n=rt(t),[a,s]=g.useState(r),i=e!==void 0,l=i?e:a,o=rt(d=>{const m=typeof d=="function"?d(l):d;i||s(m),n(m)},[i,n,l]);return[l,o]}let pi=0;function jd(e){const[r,t]=g.useState(e),n=e||r;return g.useEffect(()=>{r==null&&(pi+=1,t(`aksel-icon-${pi}`))},[r]),n}const yi=v.useId;function Te(e){var r;return yi!==void 0?yi().replace(/(:)/g,""):(r=jd(e))!==null&&r!==void 0?r:""}var Ed=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Od=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ed(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",d:"M8.97 6.97a.75.75 0 1 1 1.06 1.06l-3.22 3.22H19a.75.75 0 0 1 0 1.5H6.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06z"}))});var Td=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Nd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Td(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",d:"M14.087 6.873a.75.75 0 0 1 .943.097l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H5a.75.75 0 0 1-.75-.74V12a.75.75 0 0 1 .75-.75h12.19l-3.22-3.22a.75.75 0 0 1 .117-1.157"}))});var Rd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Pd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Rd(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var _d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const qd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=_d(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Dd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Md=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Dd(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var Sd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const xd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Sd(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var Fd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const mt=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Fd(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Vd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const $l=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Vd(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var Ld=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const _s=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ld(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Bd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Cd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Bd(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var Kd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Gd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Kd(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Ud=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Yd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ud(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.6 3.068c-1.28-.487-2.1-1.686-2.1-3.068a3.257 3.257 0 0 1 3.276-3.264 3.26 3.26 0 0 1 3.271 3.264c0 1.353-.83 2.554-2.559 3.242a.75.75 0 0 0-.472.697v1.235a.75.75 0 0 0 .212.523l1.482 1.522-1.215 1.991a.75.75 0 0 0 .123.934l.592.564-1.982 2.214-.145-.132v-9.021a.75.75 0 0 0-.483-.701m-.327-3.13a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var Hd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const $d=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Hd(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.273-.063a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var Wd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Wl=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Wd(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var zd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Jd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=zd(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var Xd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Qd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Xd(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var Zd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const em=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Zd(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var nm=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const zl=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=nm(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var rm=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const tm=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=rm(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var am=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const sm=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=am(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var im=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const lm=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=im(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var om=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Jl=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=om(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var um=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const dm=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=um(e,["title","titleId"]);let s=Te();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function sr(e,r,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e?.(a),t===!1||!a.defaultPrevented)return r?.(a)}}const[mm,gt]=Aa({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),gm=typeof window<"u"&&window.matchMedia===void 0,cm=(e,r)=>{const[t,n]=g.useState(r);return g.useEffect(()=>{if(gm)return;const a=window.matchMedia(e);n(a.matches);const s=i=>{n(i.matches)};return a.addEventListener("change",s),()=>{a.removeEventListener("change",s)}},[e]),t};function gn(e){return(r={})=>{const t=r.width?String(r.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function ze(e){return(r,t)=>{const n=t?.context?String(t.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,l=t?.width?String(t.width):i;a=e.formattingValues[l]||e.formattingValues[i]}else{const i=e.defaultWidth,l=t?.width?String(t.width):e.defaultWidth;a=e.values[l]||e.values[i]}const s=e.argumentCallback?e.argumentCallback(r):r;return a[s]}}function Je(e){return(r,t={})=>{const n=t.width,a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=r.match(a);if(!s)return null;const i=s[0],l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],o=Array.isArray(l)?km(l,m=>m.test(i)):fm(l,m=>m.test(i));let d;d=e.valueCallback?e.valueCallback(o):o,d=t.valueCallback?t.valueCallback(d):d;const u=r.slice(i.length);return{value:d,rest:u}}}function fm(e,r){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&r(e[t]))return t}function km(e,r){for(let t=0;t<e.length;t++)if(r(e[t]))return t}function qs(e){return(r,t={})=>{const n=r.match(e.matchPattern);if(!n)return null;const a=n[0],s=r.match(e.parsePattern);if(!s)return null;let i=e.valueCallback?e.valueCallback(s[0]):s[0];i=t.valueCallback?t.valueCallback(i):i;const l=r.slice(a.length);return{value:i,rest:l}}}const Xl=6048e5,vm=864e5,pm=6e4,ym=36e5,bm=1e3,bi=Symbol.for("constructDateFrom");function fe(e,r){return typeof e=="function"?e(r):e&&typeof e=="object"&&bi in e?e[bi](r):e instanceof Date?new e.constructor(r):new Date(r)}function Fr(e,...r){const t=fe.bind(null,r.find(n=>typeof n=="object"));return r.map(t)}let hm={};function cr(){return hm}function ie(e,r){return fe(r||e,e)}function Ln(e,r){const t=cr(),n=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=ie(e,r?.in),s=a.getDay(),i=(s<n?7:0)+s-n;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}const Im={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Ql=(e,r,t)=>{let n;const a=Im[e];return typeof a=="string"?n=a:r===1?n=a.one:n=a.other.replace("{{count}}",r.toString()),t?.addSuffix?t.comparison&&t.comparison>0?"in "+n:n+" ago":n},wm={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Zl=(e,r,t,n)=>wm[e],Am={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},jm={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Em={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Om={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Tm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Nm={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Rm=(e,r)=>{const t=Number(e),n=t%100;if(n>20||n<10)switch(n%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},eo={ordinalNumber:Rm,era:ze({values:Am,defaultWidth:"wide"}),quarter:ze({values:jm,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ze({values:Em,defaultWidth:"wide"}),day:ze({values:Om,defaultWidth:"wide"}),dayPeriod:ze({values:Tm,defaultWidth:"wide",formattingValues:Nm,defaultFormattingWidth:"wide"})},Pm=/^(\d+)(th|st|nd|rd)?/i,_m=/\d+/i,qm={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Dm={any:[/^b/i,/^(a|c)/i]},Mm={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Sm={any:[/1/i,/2/i,/3/i,/4/i]},xm={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Fm={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Vm={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Lm={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Bm={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Cm={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},no={ordinalNumber:qs({matchPattern:Pm,parsePattern:_m,valueCallback:e=>parseInt(e,10)}),era:Je({matchPatterns:qm,defaultMatchWidth:"wide",parsePatterns:Dm,defaultParseWidth:"any"}),quarter:Je({matchPatterns:Mm,defaultMatchWidth:"wide",parsePatterns:Sm,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Je({matchPatterns:xm,defaultMatchWidth:"wide",parsePatterns:Fm,defaultParseWidth:"any"}),day:Je({matchPatterns:Vm,defaultMatchWidth:"wide",parsePatterns:Lm,defaultParseWidth:"any"}),dayPeriod:Je({matchPatterns:Bm,defaultMatchWidth:"any",parsePatterns:Cm,defaultParseWidth:"any"})},Km={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},Gm={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Um={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ym={date:gn({formats:Km,defaultWidth:"full"}),time:gn({formats:Gm,defaultWidth:"full"}),dateTime:gn({formats:Um,defaultWidth:"full"})},ro={code:"en-GB",formatDistance:Ql,formatLong:Ym,formatRelative:Zl,localize:eo,match:no,options:{weekStartsOn:1,firstWeekContainsDate:4}},Hm={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},$m={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Wm={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},zm={date:gn({formats:Hm,defaultWidth:"full"}),time:gn({formats:$m,defaultWidth:"full"}),dateTime:gn({formats:Wm,defaultWidth:"full"})},ja={code:"en-US",formatDistance:Ql,formatLong:zm,formatRelative:Zl,localize:eo,match:no,options:{weekStartsOn:0,firstWeekContainsDate:1}},Jm={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Xm=(e,r,t)=>{let n;const a=Jm[e];return typeof a=="string"?n=a:r===1?n=a.one:n=a.other.replace("{{count}}",String(r)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" siden":n},Qm={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Zm={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},eg={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},ng={date:gn({formats:Qm,defaultWidth:"full"}),time:gn({formats:Zm,defaultWidth:"full"}),dateTime:gn({formats:eg,defaultWidth:"full"})},rg={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},tg=(e,r,t,n)=>rg[e],ag={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},sg={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},ig={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},lg={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},og={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},ug=(e,r)=>Number(e)+".",dg={ordinalNumber:ug,era:ze({values:ag,defaultWidth:"wide"}),quarter:ze({values:sg,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ze({values:ig,defaultWidth:"wide"}),day:ze({values:lg,defaultWidth:"wide"}),dayPeriod:ze({values:og,defaultWidth:"wide"})},mg=/^(\d+)\.?/i,gg=/\d+/i,cg={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},fg={any:[/^f/i,/^e/i]},kg={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},vg={any:[/1/i,/2/i,/3/i,/4/i]},pg={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},yg={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},bg={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},hg={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ig={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},wg={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Ag={ordinalNumber:qs({matchPattern:mg,parsePattern:gg,valueCallback:e=>parseInt(e,10)}),era:Je({matchPatterns:cg,defaultMatchWidth:"wide",parsePatterns:fg,defaultParseWidth:"any"}),quarter:Je({matchPatterns:kg,defaultMatchWidth:"wide",parsePatterns:vg,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Je({matchPatterns:pg,defaultMatchWidth:"wide",parsePatterns:yg,defaultParseWidth:"any"}),day:Je({matchPatterns:bg,defaultMatchWidth:"wide",parsePatterns:hg,defaultParseWidth:"any"}),dayPeriod:Je({matchPatterns:Ig,defaultMatchWidth:"any",parsePatterns:wg,defaultParseWidth:"any"})},to={code:"nb",formatDistance:Xm,formatLong:ng,formatRelative:tg,localize:dg,match:Ag,options:{weekStartsOn:1,firstWeekContainsDate:4}},jg={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},Eg=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],Og=(e,r,t)=>{let n;const a=jg[e];return typeof a=="string"?n=a:r===1?n=a.one:n=a.other.replace("{{count}}",r<13?Eg[r]:String(r)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" sidan":n},Tg={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Ng={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Rg={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Pg={date:gn({formats:Tg,defaultWidth:"full"}),time:gn({formats:Ng,defaultWidth:"full"}),dateTime:gn({formats:Rg,defaultWidth:"full"})},_g={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},qg=(e,r,t,n)=>_g[e],Dg={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},Mg={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Sg={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},xg={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},Fg={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},Vg=(e,r)=>Number(e)+".",Lg={ordinalNumber:Vg,era:ze({values:Dg,defaultWidth:"wide"}),quarter:ze({values:Mg,defaultWidth:"wide",argumentCallback:e=>e-1}),month:ze({values:Sg,defaultWidth:"wide"}),day:ze({values:xg,defaultWidth:"wide"}),dayPeriod:ze({values:Fg,defaultWidth:"wide"})},Bg=/^(\d+)\.?/i,Cg=/\d+/i,Kg={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Gg={any:[/^f/i,/^e/i]},Ug={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Yg={any:[/1/i,/2/i,/3/i,/4/i]},Hg={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},$g={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Wg={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},zg={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},Jg={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},Xg={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Qg={ordinalNumber:qs({matchPattern:Bg,parsePattern:Cg,valueCallback:e=>parseInt(e,10)}),era:Je({matchPatterns:Kg,defaultMatchWidth:"wide",parsePatterns:Gg,defaultParseWidth:"any"}),quarter:Je({matchPatterns:Ug,defaultMatchWidth:"wide",parsePatterns:Yg,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Je({matchPatterns:Hg,defaultMatchWidth:"wide",parsePatterns:$g,defaultParseWidth:"any"}),day:Je({matchPatterns:Wg,defaultMatchWidth:"wide",parsePatterns:zg,defaultParseWidth:"any"}),dayPeriod:Je({matchPatterns:Jg,defaultMatchWidth:"any",parsePatterns:Xg,defaultParseWidth:"any"})},ao={code:"nn",formatDistance:Og,formatLong:Pg,formatRelative:qg,localize:Lg,match:Qg,options:{weekStartsOn:1,firstWeekContainsDate:4}},Zg={global:{dateLocale:to,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},ec=g.createContext({locale:Zg}),Ea=()=>g.useContext(ec);var nc=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const rc=g.forwardRef((e,r)=>{var t,n,a,{rootElement:s,asChild:i}=e,l=nc(e,["rootElement","asChild"]);const o=ot(!1),d=(t=Ea())===null||t===void 0?void 0:t.rootElement,u=(n=s??d)!==null&&n!==void 0?n:(a=globalThis?.document)===null||a===void 0?void 0:a.body,m=i?Mr:"div";return o?u?ia.createPortal(v.createElement(rd,{theme:o.theme,asChild:!0,hasBackground:!1,"data-color":o.color},v.createElement(m,Object.assign({ref:r,"data-aksel-portal":""},l))),u):null:u?ia.createPortal(v.createElement(m,Object.assign({ref:r,"data-aksel-portal":""},l)),u):null});function hi(e){return e.sort((r,t)=>{const n=r.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const tc=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Ii(e,r,t){let n=e+1;return t&&n>=r&&(n=0),n}function wi(e,r,t){let n=e-1;return t&&n<0&&(n=r),n}const Ua=e=>e;class ac{constructor(){this.descendants=new Map,this.register=r=>{if(r!=null)return tc(r)?this.registerNode(r):t=>{this.registerNode(t,r)}},this.unregister=r=>{this.descendants.delete(r);const t=hi(Array.from(this.descendants.keys()));this.assignIndex(t)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=r=>{this.descendants.forEach(t=>{const n=r.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((t,n)=>t.index-n.index),this.enabledValues=()=>this.values().filter(r=>!r.disabled),this.item=r=>{if(this.count()!==0)return this.values()[r]},this.enabledItem=r=>{if(this.enabledCount()!==0)return this.enabledValues()[r]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const r=this.enabledValues().length-1;return this.enabledItem(r)},this.indexOf=r=>{var t,n;return r&&(n=(t=this.descendants.get(r))===null||t===void 0?void 0:t.index)!==null&&n!==void 0?n:-1},this.enabledIndexOf=r=>r==null?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(r)),this.next=(r,t=!0)=>{const n=Ii(r,this.count(),t);return this.item(n)},this.nextEnabled=(r,t=!0)=>{const n=this.item(r);if(!n)return;const a=this.enabledIndexOf(n.node),s=Ii(a,this.enabledCount(),t);return this.enabledItem(s)},this.prev=(r,t=!0)=>{const n=wi(r,this.count()-1,t);return this.item(n)},this.prevEnabled=(r,t=!0)=>{const n=this.item(r);if(!n)return;const a=this.enabledIndexOf(n.node),s=wi(a,this.enabledCount()-1,t);return this.enabledItem(s)},this.registerNode=(r,t)=>{if(!r)return;const n=this.descendants.get(r);if(n){this.descendants.set(r,Object.assign({index:n.index,node:r},t));return}const a=Array.from(this.descendants.keys()).concat(r),s=hi(a);t?.disabled&&(t.disabled=!!t.disabled);const i=Object.assign({node:r,index:-1},t);this.descendants.set(r,i),this.assignIndex(s)}}}function sc(){const[e,r]=Aa({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),t=Ua(s=>v.createElement(e,Object.assign({},s.value),s.children));function n(s){const i=r(),[l,o]=g.useState(-1),d=g.useRef(null);Rr(()=>()=>{d.current&&i.unregister(d.current)},[]),Rr(()=>{if(!d.current)return;const m=Number(d.current.dataset.index);l!==m&&!Number.isNaN(m)&&o(m)});const u=Ua(s?i.register(s):i.register);return{descendants:i,index:l,enabledIndex:i.enabledIndexOf(d.current),register:td([u,d])}}function a(){return g.useRef(new ac).current}return[t,r,a,n]}function ic(e,r=globalThis?.document){const t=rt(e);g.useEffect(()=>{const n=a=>{a.key==="Escape"&&t(a)};return r.addEventListener("keydown",n,!0),()=>r.removeEventListener("keydown",n,!0)},[t,r])}const so={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function io(e,r,t,{discrete:n}={discrete:!1}){if(!r)return;const a=t.originalEvent.target,s=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});a.addEventListener(e,r,{once:!0}),n&&a?ia.flushSync(()=>a.dispatchEvent(s)):a.dispatchEvent(s)}function lc(e,r=globalThis?.document){const t=rt(e),n=g.useRef(!1);return g.useEffect(()=>{const a=s=>{if(s.target&&!n.current){const i={originalEvent:s};io(so.FOCUS_OUTSIDE,t,i)}};return r.addEventListener("focusin",a),()=>r.removeEventListener("focusin",a)},[r,t]),{onFocusCapture:()=>{n.current=!0},onBlurCapture:()=>{n.current=!1}}}function oc(e,r=globalThis?.document){const t=rt(e),n=g.useRef(!1),a=g.useRef(()=>{});return g.useEffect(()=>{const s=l=>{function o(){io(so.POINTER_DOWN_OUTSIDE,t,{originalEvent:l},{discrete:!0})}l.target&&!n.current?l.pointerType==="touch"?(r.removeEventListener("click",a.current),a.current=o,r.addEventListener("click",a.current,{once:!0})):o():r.removeEventListener("click",a.current),n.current=!1},i=window.setTimeout(()=>{r.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(i),r.removeEventListener("pointerdown",s),r.removeEventListener("click",a.current)}},[r,t]),{onPointerDownCapture:()=>{n.current=!0}}}var uc=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const[dc,mc,gc,cc]=sc();let pr=0,Ai;const fc=g.forwardRef((e,r)=>mc(!1)?v.createElement(ji,Object.assign({ref:r},e)):v.createElement(kc,null,v.createElement(ji,Object.assign({ref:r},e)))),kc=({children:e})=>{const r=gc();return v.createElement(dc,{value:r},e)},ji=g.forwardRef((e,r)=>{var t,{children:n,asChild:a,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:l,onInteractOutside:o,onDismiss:d,safeZone:u,disableOutsidePointerEvents:m=!1,enabled:c=!0}=e,k=uc(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,y]=g.useState({}),{register:I,index:p,descendants:w}=cc({disableOutsidePointerEvents:m,disabled:!c,forceUpdate:()=>y({})}),[h,b]=g.useState(null),j=Sr(b,I,r),A=(t=h?.ownerDocument)!==null&&t!==void 0?t:globalThis?.document,T=g.useRef(!1),R=g.useRef(!1),F=(()=>{let O=-1;return w.enabledValues().forEach((M,B)=>{M.disableOutsidePointerEvents&&(O=B)}),{isPointerEventsEnabled:p>=O,isBodyPointerEventsDisabled:pr>0,pointerStyle:p>=O&&pr>0?"auto":void 0}})();function _(O){var P,M;if(!u?.anchor&&!u?.dismissable||!c)return;O.defaultPrevented||(T.current=!0,O.detail.originalEvent.type==="pointerdown"&&(R.current=!0));const B=O.target;O.detail.originalEvent.type==="pointerdown"?(!((P=u?.anchor)===null||P===void 0)&&P.contains(B)||B===u?.anchor)&&O.preventDefault():!(B instanceof HTMLElement&&![u?.anchor,u?.dismissable].some(V=>V?.contains(B))&&!B.contains((M=u?.dismissable)!==null&&M!==void 0?M:null))&&O.preventDefault(),O.detail.originalEvent.type==="focusin"&&R.current&&O.preventDefault(),R.current=!1,T.current=!1}const S=oc(O=>{!F.isPointerEventsEnabled||!c||(i?.(O),o?.(O),u&&_(O),!O.defaultPrevented&&d&&d())},A),L=lc(O=>{c&&(l?.(O),o?.(O),u&&_(O),!O.defaultPrevented&&d&&d())},A);ic(O=>{!c||!(p===w.enabledCount()-1)||(s?.(O),!O.defaultPrevented&&d&&(O.preventDefault(),d()))},A),g.useEffect(()=>{if(!(!h||!c||!m))return pr===0&&(Ai=A.body.style.pointerEvents,A.body.style.pointerEvents="none"),pr++,()=>{pr===1&&(A.body.style.pointerEvents=Ai),pr--}},[h,A,m,w,c]),g.useEffect(()=>()=>w.values().forEach(O=>O.forceUpdate()),[w,h]);const q=a?Mr:"div";return v.createElement(q,Object.assign({ref:j},k,{onFocusCapture:L.onFocusCapture,onBlurCapture:L.onBlurCapture,onPointerDownCapture:S.onPointerDownCapture,style:Object.assign({pointerEvents:F.pointerStyle},k.style)}),n)}),_r=Math.min,ir=Math.max,la=Math.round,Nt=Math.floor,Nn=e=>({x:e,y:e}),vc={left:"right",right:"left",bottom:"top",top:"bottom"},pc={start:"end",end:"start"};function ds(e,r,t){return ir(e,_r(r,t))}function ct(e,r){return typeof e=="function"?e(r):e}function lr(e){return e.split("-")[0]}function ft(e){return e.split("-")[1]}function lo(e){return e==="x"?"y":"x"}function Ds(e){return e==="y"?"height":"width"}function qr(e){return["top","bottom"].includes(lr(e))?"y":"x"}function Ms(e){return lo(qr(e))}function yc(e,r,t){t===void 0&&(t=!1);const n=ft(e),a=Ms(e),s=Ds(a);let i=a==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return r.reference[s]>r.floating[s]&&(i=oa(i)),[i,oa(i)]}function bc(e){const r=oa(e);return[ms(e),r,ms(r)]}function ms(e){return e.replace(/start|end/g,r=>pc[r])}function hc(e,r,t){const n=["left","right"],a=["right","left"],s=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return t?r?a:n:r?n:a;case"left":case"right":return r?s:i;default:return[]}}function Ic(e,r,t,n){const a=ft(e);let s=hc(lr(e),t==="start",n);return a&&(s=s.map(i=>i+"-"+a),r&&(s=s.concat(s.map(ms)))),s}function oa(e){return e.replace(/left|right|bottom|top/g,r=>vc[r])}function wc(e){return{top:0,right:0,bottom:0,left:0,...e}}function oo(e){return typeof e!="number"?wc(e):{top:e,right:e,bottom:e,left:e}}function ua(e){const{x:r,y:t,width:n,height:a}=e;return{width:n,height:a,top:t,left:r,right:r+n,bottom:t+a,x:r,y:t}}function Ei(e,r,t){let{reference:n,floating:a}=e;const s=qr(r),i=Ms(r),l=Ds(i),o=lr(r),d=s==="y",u=n.x+n.width/2-a.width/2,m=n.y+n.height/2-a.height/2,c=n[l]/2-a[l]/2;let k;switch(o){case"top":k={x:u,y:n.y-a.height};break;case"bottom":k={x:u,y:n.y+n.height};break;case"right":k={x:n.x+n.width,y:m};break;case"left":k={x:n.x-a.width,y:m};break;default:k={x:n.x,y:n.y}}switch(ft(r)){case"start":k[i]-=c*(t&&d?-1:1);break;case"end":k[i]+=c*(t&&d?-1:1);break}return k}const Ac=async(e,r,t)=>{const{placement:n="bottom",strategy:a="absolute",middleware:s=[],platform:i}=t,l=s.filter(Boolean),o=await(i.isRTL==null?void 0:i.isRTL(r));let d=await i.getElementRects({reference:e,floating:r,strategy:a}),{x:u,y:m}=Ei(d,n,o),c=n,k={},y=0;for(let I=0;I<l.length;I++){const{name:p,fn:w}=l[I],{x:h,y:b,data:j,reset:A}=await w({x:u,y:m,initialPlacement:n,placement:c,strategy:a,middlewareData:k,rects:d,platform:i,elements:{reference:e,floating:r}});u=h??u,m=b??m,k={...k,[p]:{...k[p],...j}},A&&y<=50&&(y++,typeof A=="object"&&(A.placement&&(c=A.placement),A.rects&&(d=A.rects===!0?await i.getElementRects({reference:e,floating:r,strategy:a}):A.rects),{x:u,y:m}=Ei(d,c,o)),I=-1)}return{x:u,y:m,placement:c,strategy:a,middlewareData:k}};async function uo(e,r){var t;r===void 0&&(r={});const{x:n,y:a,platform:s,rects:i,elements:l,strategy:o}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:m="floating",altBoundary:c=!1,padding:k=0}=ct(r,e),y=oo(k),p=l[c?m==="floating"?"reference":"floating":m],w=ua(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(p)))==null||t?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:d,rootBoundary:u,strategy:o})),h=m==="floating"?{x:n,y:a,width:i.floating.width,height:i.floating.height}:i.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),j=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},A=ua(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:h,offsetParent:b,strategy:o}):h);return{top:(w.top-A.top+y.top)/j.y,bottom:(A.bottom-w.bottom+y.bottom)/j.y,left:(w.left-A.left+y.left)/j.x,right:(A.right-w.right+y.right)/j.x}}const jc=e=>({name:"arrow",options:e,async fn(r){const{x:t,y:n,placement:a,rects:s,platform:i,elements:l,middlewareData:o}=r,{element:d,padding:u=0}=ct(e,r)||{};if(d==null)return{};const m=oo(u),c={x:t,y:n},k=Ms(a),y=Ds(k),I=await i.getDimensions(d),p=k==="y",w=p?"top":"left",h=p?"bottom":"right",b=p?"clientHeight":"clientWidth",j=s.reference[y]+s.reference[k]-c[k]-s.floating[y],A=c[k]-s.reference[k],T=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d));let R=T?T[b]:0;(!R||!await(i.isElement==null?void 0:i.isElement(T)))&&(R=l.floating[b]||s.floating[y]);const F=j/2-A/2,_=R/2-I[y]/2-1,S=_r(m[w],_),L=_r(m[h],_),q=S,O=R-I[y]-L,P=R/2-I[y]/2+F,M=ds(q,P,O),B=!o.arrow&&ft(a)!=null&&P!==M&&s.reference[y]/2-(P<q?S:L)-I[y]/2<0,C=B?P<q?P-q:P-O:0;return{[k]:c[k]+C,data:{[k]:M,centerOffset:P-M-C,...B&&{alignmentOffset:C}},reset:B}}}),Ec=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(r){var t,n;const{placement:a,middlewareData:s,rects:i,initialPlacement:l,platform:o,elements:d}=r,{mainAxis:u=!0,crossAxis:m=!0,fallbackPlacements:c,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:I=!0,...p}=ct(e,r);if((t=s.arrow)!=null&&t.alignmentOffset)return{};const w=lr(a),h=qr(l),b=lr(l)===l,j=await(o.isRTL==null?void 0:o.isRTL(d.floating)),A=c||(b||!I?[oa(l)]:bc(l)),T=y!=="none";!c&&T&&A.push(...Ic(l,I,y,j));const R=[l,...A],F=await uo(r,p),_=[];let S=((n=s.flip)==null?void 0:n.overflows)||[];if(u&&_.push(F[w]),m){const P=yc(a,i,j);_.push(F[P[0]],F[P[1]])}if(S=[...S,{placement:a,overflows:_}],!_.every(P=>P<=0)){var L,q;const P=(((L=s.flip)==null?void 0:L.index)||0)+1,M=R[P];if(M)return{data:{index:P,overflows:S},reset:{placement:M}};let B=(q=S.filter(C=>C.overflows[0]<=0).sort((C,V)=>C.overflows[1]-V.overflows[1])[0])==null?void 0:q.placement;if(!B)switch(k){case"bestFit":{var O;const C=(O=S.filter(V=>{if(T){const x=qr(V.placement);return x===h||x==="y"}return!0}).map(V=>[V.placement,V.overflows.filter(x=>x>0).reduce((x,H)=>x+H,0)]).sort((V,x)=>V[1]-x[1])[0])==null?void 0:O[0];C&&(B=C);break}case"initialPlacement":B=l;break}if(a!==B)return{reset:{placement:B}}}return{}}}};async function Oc(e,r){const{placement:t,platform:n,elements:a}=e,s=await(n.isRTL==null?void 0:n.isRTL(a.floating)),i=lr(t),l=ft(t),o=qr(t)==="y",d=["left","top"].includes(i)?-1:1,u=s&&o?-1:1,m=ct(r,e);let{mainAxis:c,crossAxis:k,alignmentAxis:y}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return l&&typeof y=="number"&&(k=l==="end"?y*-1:y),o?{x:k*u,y:c*d}:{x:c*d,y:k*u}}const Tc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(r){var t,n;const{x:a,y:s,placement:i,middlewareData:l}=r,o=await Oc(r,e);return i===((t=l.offset)==null?void 0:t.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:a+o.x,y:s+o.y,data:{...o,placement:i}}}}},Nc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(r){const{x:t,y:n,placement:a}=r,{mainAxis:s=!0,crossAxis:i=!1,limiter:l={fn:p=>{let{x:w,y:h}=p;return{x:w,y:h}}},...o}=ct(e,r),d={x:t,y:n},u=await uo(r,o),m=qr(lr(a)),c=lo(m);let k=d[c],y=d[m];if(s){const p=c==="y"?"top":"left",w=c==="y"?"bottom":"right",h=k+u[p],b=k-u[w];k=ds(h,k,b)}if(i){const p=m==="y"?"top":"left",w=m==="y"?"bottom":"right",h=y+u[p],b=y-u[w];y=ds(h,y,b)}const I=l.fn({...r,[c]:k,[m]:y});return{...I,data:{x:I.x-t,y:I.y-n,enabled:{[c]:s,[m]:i}}}}}};function Oa(){return typeof window<"u"}function Vr(e){return mo(e)?(e.nodeName||"").toLowerCase():"#document"}function en(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function Rn(e){var r;return(r=(mo(e)?e.ownerDocument:e.document)||window.document)==null?void 0:r.documentElement}function mo(e){return Oa()?e instanceof Node||e instanceof en(e).Node:!1}function pe(e){return Oa()?e instanceof Element||e instanceof en(e).Element:!1}function sn(e){return Oa()?e instanceof HTMLElement||e instanceof en(e).HTMLElement:!1}function da(e){return!Oa()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof en(e).ShadowRoot}function kt(e){const{overflow:r,overflowX:t,overflowY:n,display:a}=cn(e);return/auto|scroll|overlay|hidden|clip/.test(r+n+t)&&!["inline","contents"].includes(a)}function Rc(e){return["table","td","th"].includes(Vr(e))}function Ta(e){return[":popover-open",":modal"].some(r=>{try{return e.matches(r)}catch{return!1}})}function Ss(e){const r=Na(),t=pe(e)?cn(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>t[n]?t[n]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!r&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!r&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(t.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(t.contain||"").includes(n))}function Pc(e){let r=Bn(e);for(;sn(r)&&!Fn(r);){if(Ss(r))return r;if(Ta(r))return null;r=Bn(r)}return null}function Na(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Fn(e){return["html","body","#document"].includes(Vr(e))}function cn(e){return en(e).getComputedStyle(e)}function Ra(e){return pe(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Bn(e){if(Vr(e)==="html")return e;const r=e.assignedSlot||e.parentNode||da(e)&&e.host||Rn(e);return da(r)?r.host:r}function go(e){const r=Bn(e);return Fn(r)?e.ownerDocument?e.ownerDocument.body:e.body:sn(r)&&kt(r)?r:go(r)}function Jn(e,r,t){var n;r===void 0&&(r=[]),t===void 0&&(t=!0);const a=go(e),s=a===((n=e.ownerDocument)==null?void 0:n.body),i=en(a);if(s){const l=gs(i);return r.concat(i,i.visualViewport||[],kt(a)?a:[],l&&t?Jn(l):[])}return r.concat(a,Jn(a,[],t))}function gs(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function co(e){const r=cn(e);let t=parseFloat(r.width)||0,n=parseFloat(r.height)||0;const a=sn(e),s=a?e.offsetWidth:t,i=a?e.offsetHeight:n,l=la(t)!==s||la(n)!==i;return l&&(t=s,n=i),{width:t,height:n,$:l}}function xs(e){return pe(e)?e:e.contextElement}function Ar(e){const r=xs(e);if(!sn(r))return Nn(1);const t=r.getBoundingClientRect(),{width:n,height:a,$:s}=co(r);let i=(s?la(t.width):t.width)/n,l=(s?la(t.height):t.height)/a;return(!i||!Number.isFinite(i))&&(i=1),(!l||!Number.isFinite(l))&&(l=1),{x:i,y:l}}const _c=Nn(0);function fo(e){const r=en(e);return!Na()||!r.visualViewport?_c:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function qc(e,r,t){return r===void 0&&(r=!1),!t||r&&t!==en(e)?!1:r}function or(e,r,t,n){r===void 0&&(r=!1),t===void 0&&(t=!1);const a=e.getBoundingClientRect(),s=xs(e);let i=Nn(1);r&&(n?pe(n)&&(i=Ar(n)):i=Ar(e));const l=qc(s,t,n)?fo(s):Nn(0);let o=(a.left+l.x)/i.x,d=(a.top+l.y)/i.y,u=a.width/i.x,m=a.height/i.y;if(s){const c=en(s),k=n&&pe(n)?en(n):n;let y=c,I=gs(y);for(;I&&n&&k!==y;){const p=Ar(I),w=I.getBoundingClientRect(),h=cn(I),b=w.left+(I.clientLeft+parseFloat(h.paddingLeft))*p.x,j=w.top+(I.clientTop+parseFloat(h.paddingTop))*p.y;o*=p.x,d*=p.y,u*=p.x,m*=p.y,o+=b,d+=j,y=en(I),I=gs(y)}}return ua({width:u,height:m,x:o,y:d})}function Fs(e,r){const t=Ra(e).scrollLeft;return r?r.left+t:or(Rn(e)).left+t}function ko(e,r,t){t===void 0&&(t=!1);const n=e.getBoundingClientRect(),a=n.left+r.scrollLeft-(t?0:Fs(e,n)),s=n.top+r.scrollTop;return{x:a,y:s}}function Dc(e){let{elements:r,rect:t,offsetParent:n,strategy:a}=e;const s=a==="fixed",i=Rn(n),l=r?Ta(r.floating):!1;if(n===i||l&&s)return t;let o={scrollLeft:0,scrollTop:0},d=Nn(1);const u=Nn(0),m=sn(n);if((m||!m&&!s)&&((Vr(n)!=="body"||kt(i))&&(o=Ra(n)),sn(n))){const k=or(n);d=Ar(n),u.x=k.x+n.clientLeft,u.y=k.y+n.clientTop}const c=i&&!m&&!s?ko(i,o,!0):Nn(0);return{width:t.width*d.x,height:t.height*d.y,x:t.x*d.x-o.scrollLeft*d.x+u.x+c.x,y:t.y*d.y-o.scrollTop*d.y+u.y+c.y}}function Mc(e){return Array.from(e.getClientRects())}function Sc(e){const r=Rn(e),t=Ra(e),n=e.ownerDocument.body,a=ir(r.scrollWidth,r.clientWidth,n.scrollWidth,n.clientWidth),s=ir(r.scrollHeight,r.clientHeight,n.scrollHeight,n.clientHeight);let i=-t.scrollLeft+Fs(e);const l=-t.scrollTop;return cn(n).direction==="rtl"&&(i+=ir(r.clientWidth,n.clientWidth)-a),{width:a,height:s,x:i,y:l}}function xc(e,r){const t=en(e),n=Rn(e),a=t.visualViewport;let s=n.clientWidth,i=n.clientHeight,l=0,o=0;if(a){s=a.width,i=a.height;const d=Na();(!d||d&&r==="fixed")&&(l=a.offsetLeft,o=a.offsetTop)}return{width:s,height:i,x:l,y:o}}function Fc(e,r){const t=or(e,!0,r==="fixed"),n=t.top+e.clientTop,a=t.left+e.clientLeft,s=sn(e)?Ar(e):Nn(1),i=e.clientWidth*s.x,l=e.clientHeight*s.y,o=a*s.x,d=n*s.y;return{width:i,height:l,x:o,y:d}}function Oi(e,r,t){let n;if(r==="viewport")n=xc(e,t);else if(r==="document")n=Sc(Rn(e));else if(pe(r))n=Fc(r,t);else{const a=fo(e);n={x:r.x-a.x,y:r.y-a.y,width:r.width,height:r.height}}return ua(n)}function vo(e,r){const t=Bn(e);return t===r||!pe(t)||Fn(t)?!1:cn(t).position==="fixed"||vo(t,r)}function Vc(e,r){const t=r.get(e);if(t)return t;let n=Jn(e,[],!1).filter(l=>pe(l)&&Vr(l)!=="body"),a=null;const s=cn(e).position==="fixed";let i=s?Bn(e):e;for(;pe(i)&&!Fn(i);){const l=cn(i),o=Ss(i);!o&&l.position==="fixed"&&(a=null),(s?!o&&!a:!o&&l.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||kt(i)&&!o&&vo(e,i))?n=n.filter(u=>u!==i):a=l,i=Bn(i)}return r.set(e,n),n}function Lc(e){let{element:r,boundary:t,rootBoundary:n,strategy:a}=e;const i=[...t==="clippingAncestors"?Ta(r)?[]:Vc(r,this._c):[].concat(t),n],l=i[0],o=i.reduce((d,u)=>{const m=Oi(r,u,a);return d.top=ir(m.top,d.top),d.right=_r(m.right,d.right),d.bottom=_r(m.bottom,d.bottom),d.left=ir(m.left,d.left),d},Oi(r,l,a));return{width:o.right-o.left,height:o.bottom-o.top,x:o.left,y:o.top}}function Bc(e){const{width:r,height:t}=co(e);return{width:r,height:t}}function Cc(e,r,t){const n=sn(r),a=Rn(r),s=t==="fixed",i=or(e,!0,s,r);let l={scrollLeft:0,scrollTop:0};const o=Nn(0);if(n||!n&&!s)if((Vr(r)!=="body"||kt(a))&&(l=Ra(r)),n){const c=or(r,!0,s,r);o.x=c.x+r.clientLeft,o.y=c.y+r.clientTop}else a&&(o.x=Fs(a));const d=a&&!n&&!s?ko(a,l):Nn(0),u=i.left+l.scrollLeft-o.x-d.x,m=i.top+l.scrollTop-o.y-d.y;return{x:u,y:m,width:i.width,height:i.height}}function Ya(e){return cn(e).position==="static"}function Ti(e,r){if(!sn(e)||cn(e).position==="fixed")return null;if(r)return r(e);let t=e.offsetParent;return Rn(e)===t&&(t=t.ownerDocument.body),t}function po(e,r){const t=en(e);if(Ta(e))return t;if(!sn(e)){let a=Bn(e);for(;a&&!Fn(a);){if(pe(a)&&!Ya(a))return a;a=Bn(a)}return t}let n=Ti(e,r);for(;n&&Rc(n)&&Ya(n);)n=Ti(n,r);return n&&Fn(n)&&Ya(n)&&!Ss(n)?t:n||Pc(e)||t}const Kc=async function(e){const r=this.getOffsetParent||po,t=this.getDimensions,n=await t(e.floating);return{reference:Cc(e.reference,await r(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Gc(e){return cn(e).direction==="rtl"}const Uc={convertOffsetParentRelativeRectToViewportRelativeRect:Dc,getDocumentElement:Rn,getClippingRect:Lc,getOffsetParent:po,getElementRects:Kc,getClientRects:Mc,getDimensions:Bc,getScale:Ar,isElement:pe,isRTL:Gc};function yo(e,r){return e.x===r.x&&e.y===r.y&&e.width===r.width&&e.height===r.height}function Yc(e,r){let t=null,n;const a=Rn(e);function s(){var l;clearTimeout(n),(l=t)==null||l.disconnect(),t=null}function i(l,o){l===void 0&&(l=!1),o===void 0&&(o=1),s();const d=e.getBoundingClientRect(),{left:u,top:m,width:c,height:k}=d;if(l||r(),!c||!k)return;const y=Nt(m),I=Nt(a.clientWidth-(u+c)),p=Nt(a.clientHeight-(m+k)),w=Nt(u),b={rootMargin:-y+"px "+-I+"px "+-p+"px "+-w+"px",threshold:ir(0,_r(1,o))||1};let j=!0;function A(T){const R=T[0].intersectionRatio;if(R!==o){if(!j)return i();R?i(!1,R):n=setTimeout(()=>{i(!1,1e-7)},1e3)}R===1&&!yo(d,e.getBoundingClientRect())&&i(),j=!1}try{t=new IntersectionObserver(A,{...b,root:a.ownerDocument})}catch{t=new IntersectionObserver(A,b)}t.observe(e)}return i(!0),s}function cs(e,r,t,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:o=!1}=n,d=xs(e),u=a||s?[...d?Jn(d):[],...Jn(r)]:[];u.forEach(w=>{a&&w.addEventListener("scroll",t,{passive:!0}),s&&w.addEventListener("resize",t)});const m=d&&l?Yc(d,t):null;let c=-1,k=null;i&&(k=new ResizeObserver(w=>{let[h]=w;h&&h.target===d&&k&&(k.unobserve(r),cancelAnimationFrame(c),c=requestAnimationFrame(()=>{var b;(b=k)==null||b.observe(r)})),t()}),d&&!o&&k.observe(d),k.observe(r));let y,I=o?or(e):null;o&&p();function p(){const w=or(e);I&&!yo(I,w)&&t(),I=w,y=requestAnimationFrame(p)}return t(),()=>{var w;u.forEach(h=>{a&&h.removeEventListener("scroll",t),s&&h.removeEventListener("resize",t)}),m?.(),(w=k)==null||w.disconnect(),k=null,o&&cancelAnimationFrame(y)}}const Hc=Tc,$c=Nc,Wc=Ec,Ni=jc,zc=(e,r,t)=>{const n=new Map,a={platform:Uc,...t},s={...a.platform,_c:n};return Ac(e,r,{...a,platform:s})};var aa=typeof document<"u"?g.useLayoutEffect:g.useEffect;function ma(e,r){if(e===r)return!0;if(typeof e!=typeof r)return!1;if(typeof e=="function"&&e.toString()===r.toString())return!0;let t,n,a;if(e&&r&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==r.length)return!1;for(n=t;n--!==0;)if(!ma(e[n],r[n]))return!1;return!0}if(a=Object.keys(e),t=a.length,t!==Object.keys(r).length)return!1;for(n=t;n--!==0;)if(!{}.hasOwnProperty.call(r,a[n]))return!1;for(n=t;n--!==0;){const s=a[n];if(!(s==="_owner"&&e.$$typeof)&&!ma(e[s],r[s]))return!1}return!0}return e!==e&&r!==r}function bo(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ri(e,r){const t=bo(e);return Math.round(r*t)/t}function Ha(e){const r=g.useRef(e);return aa(()=>{r.current=e}),r}function Jc(e){e===void 0&&(e={});const{placement:r="bottom",strategy:t="absolute",middleware:n=[],platform:a,elements:{reference:s,floating:i}={},transform:l=!0,whileElementsMounted:o,open:d}=e,[u,m]=g.useState({x:0,y:0,strategy:t,placement:r,middlewareData:{},isPositioned:!1}),[c,k]=g.useState(n);ma(c,n)||k(n);const[y,I]=g.useState(null),[p,w]=g.useState(null),h=g.useCallback(V=>{V!==T.current&&(T.current=V,I(V))},[]),b=g.useCallback(V=>{V!==R.current&&(R.current=V,w(V))},[]),j=s||y,A=i||p,T=g.useRef(null),R=g.useRef(null),F=g.useRef(u),_=o!=null,S=Ha(o),L=Ha(a),q=Ha(d),O=g.useCallback(()=>{if(!T.current||!R.current)return;const V={placement:r,strategy:t,middleware:c};L.current&&(V.platform=L.current),zc(T.current,R.current,V).then(x=>{const H={...x,isPositioned:q.current!==!1};P.current&&!ma(F.current,H)&&(F.current=H,Rs.flushSync(()=>{m(H)}))})},[c,r,t,L,q]);aa(()=>{d===!1&&F.current.isPositioned&&(F.current.isPositioned=!1,m(V=>({...V,isPositioned:!1})))},[d]);const P=g.useRef(!1);aa(()=>(P.current=!0,()=>{P.current=!1}),[]),aa(()=>{if(j&&(T.current=j),A&&(R.current=A),j&&A){if(S.current)return S.current(j,A,O);O()}},[j,A,O,S,_]);const M=g.useMemo(()=>({reference:T,floating:R,setReference:h,setFloating:b}),[h,b]),B=g.useMemo(()=>({reference:j,floating:A}),[j,A]),C=g.useMemo(()=>{const V={position:t,left:0,top:0};if(!B.floating)return V;const x=Ri(B.floating,u.x),H=Ri(B.floating,u.y);return l?{...V,transform:"translate("+x+"px, "+H+"px)",...bo(B.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:x,top:H}},[t,l,B.floating,u.x,u.y]);return g.useMemo(()=>({...u,update:O,refs:M,elements:B,floatingStyles:C}),[u,O,M,B,C])}const Xc=e=>{function r(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:n,padding:a}=typeof e=="function"?e(t):e;return n&&r(n)?n.current!=null?Ni({element:n.current,padding:a}).fn(t):{}:n?Ni({element:n,padding:a}).fn(t):{}}}},ho=(e,r)=>({...Hc(e),options:[e,r]}),Io=(e,r)=>({...$c(e),options:[e,r]}),wo=(e,r)=>({...Wc(e),options:[e,r]}),Ao=(e,r)=>({...Xc(e),options:[e,r]}),Pi=/(\w+)/g;function Qc(e,r){const t=Array.isArray(e)?e:Zc(e);for(const n of r){if(!n)continue;let a=n;for(let s=0;s<t.length;s++){const i=a[t[s]];i!==void 0&&(a=i)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Zc(e){const r=[];let t=Pi.exec(e);for(;t;){const[,n,a]=t;r.push(n||a),t=Pi.exec(e)}return r}const ef=/{[^}]*}/g;function Gn(e,...r){const t=Ea(),n=t.translations||[],a=[...r,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],t.locale[e]];return(i,l)=>{const o=Qc(i,a);return l?o.replace(ef,d=>{const u=d.substring(1,d.length-1);if(l[u]===void 0){const m=JSON.stringify(l);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${m}'`)}return l[u]}):o}}function jo(){const e=Ea(),r=e.translations||[],t=Array.isArray(r)?r.map(n=>n.global):[r.global];t.push(e.locale.global);for(const n of t)if(n?.dateLocale)return n.dateLocale;throw new Error("dateLocale not found.")}var nf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const rf=g.forwardRef((e,r)=>{var{className:t,size:n="medium",title:a,transparent:s=!1,variant:i="neutral",id:l,"data-color":o}=e,d=nf(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:u}=ee(),m=Kn(),c=Gn("Loader");return v.createElement("svg",Object.assign({"aria-labelledby":l??`loader-${m}`,ref:r,className:u("navds-loader",t,`navds-loader--${n}`,`navds-loader--${i}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":o??tf(i)},nn(d,["children"]),{"data-variant":i}),v.createElement("title",{id:l??`loader-${m}`},a||c("title")),v.createElement("circle",{className:u("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),v.createElement("circle",{className:u("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function tf(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var af=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ne=g.forwardRef((e,r)=>{var{as:t="button",variant:n="primary",className:a,children:s,size:i="medium",loading:l=!1,disabled:o,icon:d,iconPosition:u="left",onKeyUp:m,"data-color":c}=e,k=af(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:y}=ee(),I=o||l?nn(k,["href"]):k,p=w=>{w.key===" "&&!o&&!l&&w.currentTarget.click()};return v.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},{"data-color":c??sf(n),"data-variant":lf(n)},I,{ref:r,onKeyUp:sr(m,p),className:y(a,"navds-button",`navds-button--${n}`,`navds-button--${i}`,{"navds-button--loading":l,"navds-button--icon-only":!!d&&!s,"navds-button--disabled":o??l}),disabled:o??l?!0:void 0}),d&&u==="left"&&v.createElement("span",{className:y("navds-button__icon")},d),l&&v.createElement(rf,{size:i}),s&&v.createElement(he,{as:"span",size:i==="medium"?"medium":"small"},s),d&&u==="right"&&v.createElement("span",{className:y("navds-button__icon")},d))});function sf(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function lf(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var of=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const uf={error:dm,warning:_s,info:Gd,success:xd},vt=g.forwardRef((e,r)=>{var{children:t,className:n,variant:a,size:s="medium",fullWidth:i=!1,contentMaxWidth:l=!0,inline:o=!1,closeButton:d=!1,onClose:u}=e,m=of(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:c}=ee(),k=Gn("Alert"),y=uf[a];return v.createElement("div",Object.assign({},m,{"data-color":df(a),"data-variant":a,ref:r,className:c(n,"navds-alert",`navds-alert--${a}`,`navds-alert--${s}`,{"navds-alert--full-width":i,"navds-alert--inline":o,"navds-alert--close-button":d})}),v.createElement(y,{title:k(a),className:c("navds-alert__icon")}),v.createElement(Ps,{as:"div",size:s,className:c("navds-alert__wrapper",l&&"navds-alert__wrapper--maxwidth")},t),d&&!o&&v.createElement("div",{className:c("navds-alert__button-wrapper")},v.createElement(Ne,{className:c("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:v.createElement(Jl,{title:["error","warning"].includes(a)?k("closeAlert"):k("closeMessage")})})))});function df(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function pt(e,r,t){const n=ie(e,t?.in);return isNaN(r)?fe(t?.in||e,NaN):(r&&n.setDate(n.getDate()+r),n)}function Vs(e,r,t){const n=ie(e,t?.in);if(isNaN(r))return fe(e,NaN);if(!r)return n;const a=n.getDate(),s=fe(e,n.getTime());s.setMonth(n.getMonth()+r+1,0);const i=s.getDate();return a>=i?s:(n.setFullYear(s.getFullYear(),s.getMonth(),a),n)}function ga(e,r){const t=ie(e,r?.in).getDay();return t===0||t===6}function ur(e,r){return Ln(e,{...r,weekStartsOn:1})}function Eo(e,r){const t=ie(e,r?.in),n=t.getFullYear(),a=fe(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const s=ur(a),i=fe(t,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const l=ur(i);return t.getTime()>=s.getTime()?n+1:t.getTime()>=l.getTime()?n:n-1}function ca(e){const r=ie(e),t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),+e-+t}function Cn(e,r){const t=ie(e,r?.in);return t.setHours(0,0,0,0),t}function Wn(e,r,t){const[n,a]=Fr(t?.in,e,r),s=Cn(n),i=Cn(a),l=+s-ca(s),o=+i-ca(i);return Math.round((l-o)/vm)}function mf(e,r){const t=Eo(e,r),n=fe(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),ur(n)}function gf(e,r,t){return pt(e,r*7,t)}function Ls(e,r,t){return Vs(e,r*12,t)}function cf(e,r){let t,n=r?.in;return e.forEach(a=>{!n&&typeof a=="object"&&(n=fe.bind(null,a));const s=ie(a,n);(!t||t<s||isNaN(+s))&&(t=s)}),fe(n,t||NaN)}function ff(e,r){let t,n=r?.in;return e.forEach(a=>{!n&&typeof a=="object"&&(n=fe.bind(null,a));const s=ie(a,n);(!t||t>s||isNaN(+s))&&(t=s)}),fe(n,t||NaN)}function Bs(e,r,t){const[n,a]=Fr(t?.in,e,r);return+Cn(n)==+Cn(a)}function Oo(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function kf(e){return!(!Oo(e)&&typeof e!="number"||isNaN(+ie(e)))}function vf(e,r,t){const[n,a]=Fr(t?.in,e,r),s=n.getFullYear()-a.getFullYear(),i=n.getMonth()-a.getMonth();return s*12+i}function To(e,r){const t=ie(e,r?.in),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function pf(e,r){const[t,n]=Fr(e,r.start,r.end);return{start:t,end:n}}function No(e,r){const{start:t,end:n}=pf(r?.in,e);let a=+t>+n;const s=a?+t:+n,i=a?n:t;i.setHours(0,0,0,0),i.setDate(1);let l=1;const o=[];for(;+i<=s;)o.push(fe(t,i)),i.setMonth(i.getMonth()+l);return a?o.reverse():o}function dr(e,r){const t=ie(e,r?.in);return t.setDate(1),t.setHours(0,0,0,0),t}function Pa(e,r){const t=ie(e,r?.in),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(23,59,59,999),t}function yt(e,r){const t=ie(e,r?.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function Ro(e,r){const t=cr(),n=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=ie(e,r?.in),s=a.getDay(),i=(s<n?-7:0)+6-(s-n);return a.setDate(a.getDate()+i),a.setHours(23,59,59,999),a}function yf(e,r){return Ro(e,{...r,weekStartsOn:1})}function bf(e,r){const t=ie(e,r?.in);return Wn(t,yt(t))+1}function Cs(e,r){const t=ie(e,r?.in),n=+ur(t)-+mf(t);return Math.round(n/Xl)+1}function Ks(e,r){const t=ie(e,r?.in),n=t.getFullYear(),a=cr(),s=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=fe(r?.in||e,0);i.setFullYear(n+1,0,s),i.setHours(0,0,0,0);const l=Ln(i,r),o=fe(r?.in||e,0);o.setFullYear(n,0,s),o.setHours(0,0,0,0);const d=Ln(o,r);return+t>=+l?n+1:+t>=+d?n:n-1}function hf(e,r){const t=cr(),n=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??t.firstWeekContainsDate??t.locale?.options?.firstWeekContainsDate??1,a=Ks(e,r),s=fe(r?.in||e,0);return s.setFullYear(a,0,n),s.setHours(0,0,0,0),Ln(s,r)}function Gs(e,r){const t=ie(e,r?.in),n=+Ln(t,r)-+hf(t,r);return Math.round(n/Xl)+1}function ce(e,r){const t=e<0?"-":"",n=Math.abs(e).toString().padStart(r,"0");return t+n}const $n={y(e,r){const t=e.getFullYear(),n=t>0?t:1-t;return ce(r==="yy"?n%100:n,r.length)},M(e,r){const t=e.getMonth();return r==="M"?String(t+1):ce(t+1,2)},d(e,r){return ce(e.getDate(),r.length)},a(e,r){const t=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,r){return ce(e.getHours()%12||12,r.length)},H(e,r){return ce(e.getHours(),r.length)},m(e,r){return ce(e.getMinutes(),r.length)},s(e,r){return ce(e.getSeconds(),r.length)},S(e,r){const t=r.length,n=e.getMilliseconds(),a=Math.trunc(n*Math.pow(10,t-3));return ce(a,r.length)}},yr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},_i={G:function(e,r,t){const n=e.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return t.era(n,{width:"abbreviated"});case"GGGGG":return t.era(n,{width:"narrow"});case"GGGG":default:return t.era(n,{width:"wide"})}},y:function(e,r,t){if(r==="yo"){const n=e.getFullYear(),a=n>0?n:1-n;return t.ordinalNumber(a,{unit:"year"})}return $n.y(e,r)},Y:function(e,r,t,n){const a=Ks(e,n),s=a>0?a:1-a;if(r==="YY"){const i=s%100;return ce(i,2)}return r==="Yo"?t.ordinalNumber(s,{unit:"year"}):ce(s,r.length)},R:function(e,r){const t=Eo(e);return ce(t,r.length)},u:function(e,r){const t=e.getFullYear();return ce(t,r.length)},Q:function(e,r,t){const n=Math.ceil((e.getMonth()+1)/3);switch(r){case"Q":return String(n);case"QQ":return ce(n,2);case"Qo":return t.ordinalNumber(n,{unit:"quarter"});case"QQQ":return t.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,r,t){const n=Math.ceil((e.getMonth()+1)/3);switch(r){case"q":return String(n);case"qq":return ce(n,2);case"qo":return t.ordinalNumber(n,{unit:"quarter"});case"qqq":return t.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,r,t){const n=e.getMonth();switch(r){case"M":case"MM":return $n.M(e,r);case"Mo":return t.ordinalNumber(n+1,{unit:"month"});case"MMM":return t.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(n,{width:"wide",context:"formatting"})}},L:function(e,r,t){const n=e.getMonth();switch(r){case"L":return String(n+1);case"LL":return ce(n+1,2);case"Lo":return t.ordinalNumber(n+1,{unit:"month"});case"LLL":return t.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(n,{width:"wide",context:"standalone"})}},w:function(e,r,t,n){const a=Gs(e,n);return r==="wo"?t.ordinalNumber(a,{unit:"week"}):ce(a,r.length)},I:function(e,r,t){const n=Cs(e);return r==="Io"?t.ordinalNumber(n,{unit:"week"}):ce(n,r.length)},d:function(e,r,t){return r==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):$n.d(e,r)},D:function(e,r,t){const n=bf(e);return r==="Do"?t.ordinalNumber(n,{unit:"dayOfYear"}):ce(n,r.length)},E:function(e,r,t){const n=e.getDay();switch(r){case"E":case"EE":case"EEE":return t.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(n,{width:"short",context:"formatting"});case"EEEE":default:return t.day(n,{width:"wide",context:"formatting"})}},e:function(e,r,t,n){const a=e.getDay(),s=(a-n.weekStartsOn+8)%7||7;switch(r){case"e":return String(s);case"ee":return ce(s,2);case"eo":return t.ordinalNumber(s,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});case"eeee":default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(e,r,t,n){const a=e.getDay(),s=(a-n.weekStartsOn+8)%7||7;switch(r){case"c":return String(s);case"cc":return ce(s,r.length);case"co":return t.ordinalNumber(s,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});case"cccc":default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(e,r,t){const n=e.getDay(),a=n===0?7:n;switch(r){case"i":return String(a);case"ii":return ce(a,r.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(n,{width:"short",context:"formatting"});case"iiii":default:return t.day(n,{width:"wide",context:"formatting"})}},a:function(e,r,t){const a=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,r,t){const n=e.getHours();let a;switch(n===12?a=yr.noon:n===0?a=yr.midnight:a=n/12>=1?"pm":"am",r){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,r,t){const n=e.getHours();let a;switch(n>=17?a=yr.evening:n>=12?a=yr.afternoon:n>=4?a=yr.morning:a=yr.night,r){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,r,t){if(r==="ho"){let n=e.getHours()%12;return n===0&&(n=12),t.ordinalNumber(n,{unit:"hour"})}return $n.h(e,r)},H:function(e,r,t){return r==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):$n.H(e,r)},K:function(e,r,t){const n=e.getHours()%12;return r==="Ko"?t.ordinalNumber(n,{unit:"hour"}):ce(n,r.length)},k:function(e,r,t){let n=e.getHours();return n===0&&(n=24),r==="ko"?t.ordinalNumber(n,{unit:"hour"}):ce(n,r.length)},m:function(e,r,t){return r==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):$n.m(e,r)},s:function(e,r,t){return r==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):$n.s(e,r)},S:function(e,r){return $n.S(e,r)},X:function(e,r,t){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(r){case"X":return Di(n);case"XXXX":case"XX":return rr(n);case"XXXXX":case"XXX":default:return rr(n,":")}},x:function(e,r,t){const n=e.getTimezoneOffset();switch(r){case"x":return Di(n);case"xxxx":case"xx":return rr(n);case"xxxxx":case"xxx":default:return rr(n,":")}},O:function(e,r,t){const n=e.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+qi(n,":");case"OOOO":default:return"GMT"+rr(n,":")}},z:function(e,r,t){const n=e.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+qi(n,":");case"zzzz":default:return"GMT"+rr(n,":")}},t:function(e,r,t){const n=Math.trunc(+e/1e3);return ce(n,r.length)},T:function(e,r,t){return ce(+e,r.length)}};function qi(e,r=""){const t=e>0?"-":"+",n=Math.abs(e),a=Math.trunc(n/60),s=n%60;return s===0?t+String(a):t+String(a)+r+ce(s,2)}function Di(e,r){return e%60===0?(e>0?"-":"+")+ce(Math.abs(e)/60,2):rr(e,r)}function rr(e,r=""){const t=e>0?"-":"+",n=Math.abs(e),a=ce(Math.trunc(n/60),2),s=ce(n%60,2);return t+a+r+s}const Mi=(e,r)=>{switch(e){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},Po=(e,r)=>{switch(e){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},If=(e,r)=>{const t=e.match(/(P+)(p+)?/)||[],n=t[1],a=t[2];if(!a)return Mi(e,r);let s;switch(n){case"P":s=r.dateTime({width:"short"});break;case"PP":s=r.dateTime({width:"medium"});break;case"PPP":s=r.dateTime({width:"long"});break;case"PPPP":default:s=r.dateTime({width:"full"});break}return s.replace("{{date}}",Mi(n,r)).replace("{{time}}",Po(a,r))},fs={p:Po,P:If},wf=/^D+$/,Af=/^Y+$/,jf=["D","DD","YY","YYYY"];function _o(e){return wf.test(e)}function qo(e){return Af.test(e)}function ks(e,r,t){const n=Ef(e,r,t);if(console.warn(n),jf.includes(e))throw new RangeError(n)}function Ef(e,r,t){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Of=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Tf=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Nf=/^'([^]*?)'?$/,Rf=/''/g,Pf=/[a-zA-Z]/;function mr(e,r,t){const n=cr(),a=t?.locale??n.locale??ja,s=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,l=ie(e,t?.in);if(!kf(l))throw new RangeError("Invalid time value");let o=r.match(Tf).map(u=>{const m=u[0];if(m==="p"||m==="P"){const c=fs[m];return c(u,a.formatLong)}return u}).join("").match(Of).map(u=>{if(u==="''")return{isToken:!1,value:"'"};const m=u[0];if(m==="'")return{isToken:!1,value:_f(u)};if(_i[m])return{isToken:!0,value:u};if(m.match(Pf))throw new RangeError("Format string contains an unescaped latin alphabet character `"+m+"`");return{isToken:!1,value:u}});a.localize.preprocessor&&(o=a.localize.preprocessor(l,o));const d={firstWeekContainsDate:s,weekStartsOn:i,locale:a};return o.map(u=>{if(!u.isToken)return u.value;const m=u.value;(!t?.useAdditionalWeekYearTokens&&qo(m)||!t?.useAdditionalDayOfYearTokens&&_o(m))&&ks(m,r,String(e));const c=_i[m[0]];return c(l,m,a.localize,d)}).join("")}function _f(e){const r=e.match(Nf);return r?r[1].replace(Rf,"'"):e}function qf(e,r){const t=ie(e,r?.in),n=t.getFullYear(),a=t.getMonth(),s=fe(t,0);return s.setFullYear(n,a+1,0),s.setHours(0,0,0,0),s.getDate()}function Df(){return Object.assign({},cr())}function Mf(e,r){const t=ie(e,r?.in).getDay();return t===0?7:t}function Us(e,r){return ie(e,r?.in).getMonth()}function Ys(e,r){return ie(e,r?.in).getFullYear()}function Do(e,r){return+ie(e)>+ie(r)}function bt(e,r){return+ie(e)<+ie(r)}function Sf(e,r){const t=xf(r)?new r(0):fe(r,0);return t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),t.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),t}function xf(e){return typeof e=="function"&&e.prototype?.constructor===e}const Ff=10;class Mo{subPriority=0;validate(r,t){return!0}}class Vf extends Mo{constructor(r,t,n,a,s){super(),this.value=r,this.validateValue=t,this.setValue=n,this.priority=a,s&&(this.subPriority=s)}validate(r,t){return this.validateValue(r,this.value,t)}set(r,t,n){return this.setValue(r,t,this.value,n)}}class Lf extends Mo{priority=Ff;subPriority=-1;constructor(r,t){super(),this.context=r||(n=>fe(t,n))}set(r,t){return t.timestampIsSet?r:fe(r,Sf(r,this.context))}}class ue{run(r,t,n,a){const s=this.parse(r,t,n,a);return s?{setter:new Vf(s.value,this.validate,this.set,this.priority,this.subPriority),rest:s.rest}:null}validate(r,t,n){return!0}}class Bf extends ue{priority=140;parse(r,t,n){switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"})||n.era(r,{width:"narrow"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})||n.era(r,{width:"abbreviated"})||n.era(r,{width:"narrow"})}}set(r,t,n){return t.era=n,r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}incompatibleTokens=["R","u","t","T"]}const qe={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},jn={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function De(e,r){return e&&{value:r(e.value),rest:e.rest}}function Ee(e,r){const t=r.match(e);return t?{value:parseInt(t[0],10),rest:r.slice(t[0].length)}:null}function En(e,r){const t=r.match(e);if(!t)return null;if(t[0]==="Z")return{value:0,rest:r.slice(1)};const n=t[1]==="+"?1:-1,a=t[2]?parseInt(t[2],10):0,s=t[3]?parseInt(t[3],10):0,i=t[5]?parseInt(t[5],10):0;return{value:n*(a*ym+s*pm+i*bm),rest:r.slice(t[0].length)}}function So(e){return Ee(qe.anyDigitsSigned,e)}function Pe(e,r){switch(e){case 1:return Ee(qe.singleDigit,r);case 2:return Ee(qe.twoDigits,r);case 3:return Ee(qe.threeDigits,r);case 4:return Ee(qe.fourDigits,r);default:return Ee(new RegExp("^\\d{1,"+e+"}"),r)}}function fa(e,r){switch(e){case 1:return Ee(qe.singleDigitSigned,r);case 2:return Ee(qe.twoDigitsSigned,r);case 3:return Ee(qe.threeDigitsSigned,r);case 4:return Ee(qe.fourDigitsSigned,r);default:return Ee(new RegExp("^-?\\d{1,"+e+"}"),r)}}function Hs(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function xo(e,r){const t=r>0,n=t?r:1-r;let a;if(n<=50)a=e||100;else{const s=n+50,i=Math.trunc(s/100)*100,l=e>=s%100;a=e+i-(l?100:0)}return t?a:1-a}function Fo(e){return e%400===0||e%4===0&&e%100!==0}class Cf extends ue{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(r,t,n){const a=s=>({year:s,isTwoDigitYear:t==="yy"});switch(t){case"y":return De(Pe(4,r),a);case"yo":return De(n.ordinalNumber(r,{unit:"year"}),a);default:return De(Pe(t.length,r),a)}}validate(r,t){return t.isTwoDigitYear||t.year>0}set(r,t,n){const a=r.getFullYear();if(n.isTwoDigitYear){const i=xo(n.year,a);return r.setFullYear(i,0,1),r.setHours(0,0,0,0),r}const s=!("era"in t)||t.era===1?n.year:1-n.year;return r.setFullYear(s,0,1),r.setHours(0,0,0,0),r}}class Kf extends ue{priority=130;parse(r,t,n){const a=s=>({year:s,isTwoDigitYear:t==="YY"});switch(t){case"Y":return De(Pe(4,r),a);case"Yo":return De(n.ordinalNumber(r,{unit:"year"}),a);default:return De(Pe(t.length,r),a)}}validate(r,t){return t.isTwoDigitYear||t.year>0}set(r,t,n,a){const s=Ks(r,a);if(n.isTwoDigitYear){const l=xo(n.year,s);return r.setFullYear(l,0,a.firstWeekContainsDate),r.setHours(0,0,0,0),Ln(r,a)}const i=!("era"in t)||t.era===1?n.year:1-n.year;return r.setFullYear(i,0,a.firstWeekContainsDate),r.setHours(0,0,0,0),Ln(r,a)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]}class Gf extends ue{priority=130;parse(r,t){return fa(t==="R"?4:t.length,r)}set(r,t,n){const a=fe(r,0);return a.setFullYear(n,0,4),a.setHours(0,0,0,0),ur(a)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]}class Uf extends ue{priority=130;parse(r,t){return fa(t==="u"?4:t.length,r)}set(r,t,n){return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]}class Yf extends ue{priority=120;parse(r,t,n){switch(t){case"Q":case"QQ":return Pe(t.length,r);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"})||n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})||n.quarter(r,{width:"abbreviated",context:"formatting"})||n.quarter(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=1&&t<=4}set(r,t,n){return r.setMonth((n-1)*3,1),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]}class Hf extends ue{priority=120;parse(r,t,n){switch(t){case"q":case"qq":return Pe(t.length,r);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"})||n.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})||n.quarter(r,{width:"abbreviated",context:"standalone"})||n.quarter(r,{width:"narrow",context:"standalone"})}}validate(r,t){return t>=1&&t<=4}set(r,t,n){return r.setMonth((n-1)*3,1),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]}class $f extends ue{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(r,t,n){const a=s=>s-1;switch(t){case"M":return De(Ee(qe.month,r),a);case"MM":return De(Pe(2,r),a);case"Mo":return De(n.ordinalNumber(r,{unit:"month"}),a);case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"})||n.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})||n.month(r,{width:"abbreviated",context:"formatting"})||n.month(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=0&&t<=11}set(r,t,n){return r.setMonth(n,1),r.setHours(0,0,0,0),r}}class Wf extends ue{priority=110;parse(r,t,n){const a=s=>s-1;switch(t){case"L":return De(Ee(qe.month,r),a);case"LL":return De(Pe(2,r),a);case"Lo":return De(n.ordinalNumber(r,{unit:"month"}),a);case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"})||n.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})||n.month(r,{width:"abbreviated",context:"standalone"})||n.month(r,{width:"narrow",context:"standalone"})}}validate(r,t){return t>=0&&t<=11}set(r,t,n){return r.setMonth(n,1),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]}function zf(e,r,t){const n=ie(e,t?.in),a=Gs(n,t)-r;return n.setDate(n.getDate()-a*7),ie(n,t?.in)}class Jf extends ue{priority=100;parse(r,t,n){switch(t){case"w":return Ee(qe.week,r);case"wo":return n.ordinalNumber(r,{unit:"week"});default:return Pe(t.length,r)}}validate(r,t){return t>=1&&t<=53}set(r,t,n,a){return Ln(zf(r,n,a),a)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]}function Xf(e,r,t){const n=ie(e,t?.in),a=Cs(n,t)-r;return n.setDate(n.getDate()-a*7),n}class Qf extends ue{priority=100;parse(r,t,n){switch(t){case"I":return Ee(qe.week,r);case"Io":return n.ordinalNumber(r,{unit:"week"});default:return Pe(t.length,r)}}validate(r,t){return t>=1&&t<=53}set(r,t,n){return ur(Xf(r,n))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]}const Zf=[31,28,31,30,31,30,31,31,30,31,30,31],ek=[31,29,31,30,31,30,31,31,30,31,30,31];class nk extends ue{priority=90;subPriority=1;parse(r,t,n){switch(t){case"d":return Ee(qe.date,r);case"do":return n.ordinalNumber(r,{unit:"date"});default:return Pe(t.length,r)}}validate(r,t){const n=r.getFullYear(),a=Fo(n),s=r.getMonth();return a?t>=1&&t<=ek[s]:t>=1&&t<=Zf[s]}set(r,t,n){return r.setDate(n),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]}class rk extends ue{priority=90;subpriority=1;parse(r,t,n){switch(t){case"D":case"DD":return Ee(qe.dayOfYear,r);case"Do":return n.ordinalNumber(r,{unit:"date"});default:return Pe(t.length,r)}}validate(r,t){const n=r.getFullYear();return Fo(n)?t>=1&&t<=366:t>=1&&t<=365}set(r,t,n){return r.setMonth(0,n),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]}function $s(e,r,t){const n=cr(),a=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,s=ie(e,t?.in),i=s.getDay(),o=(r%7+7)%7,d=7-a,u=r<0||r>6?r-(i+d)%7:(o+d)%7-(i+d)%7;return pt(s,u,t)}class tk extends ue{priority=90;parse(r,t,n){switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"})||n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})||n.day(r,{width:"abbreviated",context:"formatting"})||n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=0&&t<=6}set(r,t,n,a){return r=$s(r,n,a),r.setHours(0,0,0,0),r}incompatibleTokens=["D","i","e","c","t","T"]}class ak extends ue{priority=90;parse(r,t,n,a){const s=i=>{const l=Math.floor((i-1)/7)*7;return(i+a.weekStartsOn+6)%7+l};switch(t){case"e":case"ee":return De(Pe(t.length,r),s);case"eo":return De(n.ordinalNumber(r,{unit:"day"}),s);case"eee":return n.day(r,{width:"abbreviated",context:"formatting"})||n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})||n.day(r,{width:"abbreviated",context:"formatting"})||n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=0&&t<=6}set(r,t,n,a){return r=$s(r,n,a),r.setHours(0,0,0,0),r}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]}class sk extends ue{priority=90;parse(r,t,n,a){const s=i=>{const l=Math.floor((i-1)/7)*7;return(i+a.weekStartsOn+6)%7+l};switch(t){case"c":case"cc":return De(Pe(t.length,r),s);case"co":return De(n.ordinalNumber(r,{unit:"day"}),s);case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"})||n.day(r,{width:"short",context:"standalone"})||n.day(r,{width:"narrow",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"})||n.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})||n.day(r,{width:"abbreviated",context:"standalone"})||n.day(r,{width:"short",context:"standalone"})||n.day(r,{width:"narrow",context:"standalone"})}}validate(r,t){return t>=0&&t<=6}set(r,t,n,a){return r=$s(r,n,a),r.setHours(0,0,0,0),r}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]}function ik(e,r,t){const n=ie(e,t?.in),a=Mf(n,t),s=r-a;return pt(n,s,t)}class lk extends ue{priority=90;parse(r,t,n){const a=s=>s===0?7:s;switch(t){case"i":case"ii":return Pe(t.length,r);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return De(n.day(r,{width:"abbreviated",context:"formatting"})||n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"}),a);case"iiiii":return De(n.day(r,{width:"narrow",context:"formatting"}),a);case"iiiiii":return De(n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"}),a);case"iiii":default:return De(n.day(r,{width:"wide",context:"formatting"})||n.day(r,{width:"abbreviated",context:"formatting"})||n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"}),a)}}validate(r,t){return t>=1&&t<=7}set(r,t,n){return r=ik(r,n),r.setHours(0,0,0,0),r}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]}class ok extends ue{priority=80;parse(r,t,n){switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"})||n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})||n.dayPeriod(r,{width:"abbreviated",context:"formatting"})||n.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,t,n){return r.setHours(Hs(n),0,0,0),r}incompatibleTokens=["b","B","H","k","t","T"]}class uk extends ue{priority=80;parse(r,t,n){switch(t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"})||n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})||n.dayPeriod(r,{width:"abbreviated",context:"formatting"})||n.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,t,n){return r.setHours(Hs(n),0,0,0),r}incompatibleTokens=["a","B","H","k","t","T"]}class dk extends ue{priority=80;parse(r,t,n){switch(t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"})||n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})||n.dayPeriod(r,{width:"abbreviated",context:"formatting"})||n.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,t,n){return r.setHours(Hs(n),0,0,0),r}incompatibleTokens=["a","b","t","T"]}class mk extends ue{priority=70;parse(r,t,n){switch(t){case"h":return Ee(qe.hour12h,r);case"ho":return n.ordinalNumber(r,{unit:"hour"});default:return Pe(t.length,r)}}validate(r,t){return t>=1&&t<=12}set(r,t,n){const a=r.getHours()>=12;return a&&n<12?r.setHours(n+12,0,0,0):!a&&n===12?r.setHours(0,0,0,0):r.setHours(n,0,0,0),r}incompatibleTokens=["H","K","k","t","T"]}class gk extends ue{priority=70;parse(r,t,n){switch(t){case"H":return Ee(qe.hour23h,r);case"Ho":return n.ordinalNumber(r,{unit:"hour"});default:return Pe(t.length,r)}}validate(r,t){return t>=0&&t<=23}set(r,t,n){return r.setHours(n,0,0,0),r}incompatibleTokens=["a","b","h","K","k","t","T"]}class ck extends ue{priority=70;parse(r,t,n){switch(t){case"K":return Ee(qe.hour11h,r);case"Ko":return n.ordinalNumber(r,{unit:"hour"});default:return Pe(t.length,r)}}validate(r,t){return t>=0&&t<=11}set(r,t,n){return r.getHours()>=12&&n<12?r.setHours(n+12,0,0,0):r.setHours(n,0,0,0),r}incompatibleTokens=["h","H","k","t","T"]}class fk extends ue{priority=70;parse(r,t,n){switch(t){case"k":return Ee(qe.hour24h,r);case"ko":return n.ordinalNumber(r,{unit:"hour"});default:return Pe(t.length,r)}}validate(r,t){return t>=1&&t<=24}set(r,t,n){const a=n<=24?n%24:n;return r.setHours(a,0,0,0),r}incompatibleTokens=["a","b","h","H","K","t","T"]}class kk extends ue{priority=60;parse(r,t,n){switch(t){case"m":return Ee(qe.minute,r);case"mo":return n.ordinalNumber(r,{unit:"minute"});default:return Pe(t.length,r)}}validate(r,t){return t>=0&&t<=59}set(r,t,n){return r.setMinutes(n,0,0),r}incompatibleTokens=["t","T"]}class vk extends ue{priority=50;parse(r,t,n){switch(t){case"s":return Ee(qe.second,r);case"so":return n.ordinalNumber(r,{unit:"second"});default:return Pe(t.length,r)}}validate(r,t){return t>=0&&t<=59}set(r,t,n){return r.setSeconds(n,0),r}incompatibleTokens=["t","T"]}class pk extends ue{priority=30;parse(r,t){const n=a=>Math.trunc(a*Math.pow(10,-t.length+3));return De(Pe(t.length,r),n)}set(r,t,n){return r.setMilliseconds(n),r}incompatibleTokens=["t","T"]}class yk extends ue{priority=10;parse(r,t){switch(t){case"X":return En(jn.basicOptionalMinutes,r);case"XX":return En(jn.basic,r);case"XXXX":return En(jn.basicOptionalSeconds,r);case"XXXXX":return En(jn.extendedOptionalSeconds,r);case"XXX":default:return En(jn.extended,r)}}set(r,t,n){return t.timestampIsSet?r:fe(r,r.getTime()-ca(r)-n)}incompatibleTokens=["t","T","x"]}class bk extends ue{priority=10;parse(r,t){switch(t){case"x":return En(jn.basicOptionalMinutes,r);case"xx":return En(jn.basic,r);case"xxxx":return En(jn.basicOptionalSeconds,r);case"xxxxx":return En(jn.extendedOptionalSeconds,r);case"xxx":default:return En(jn.extended,r)}}set(r,t,n){return t.timestampIsSet?r:fe(r,r.getTime()-ca(r)-n)}incompatibleTokens=["t","T","X"]}class hk extends ue{priority=40;parse(r){return So(r)}set(r,t,n){return[fe(r,n*1e3),{timestampIsSet:!0}]}incompatibleTokens="*"}class Ik extends ue{priority=20;parse(r){return So(r)}set(r,t,n){return[fe(r,n),{timestampIsSet:!0}]}incompatibleTokens="*"}const wk={G:new Bf,y:new Cf,Y:new Kf,R:new Gf,u:new Uf,Q:new Yf,q:new Hf,M:new $f,L:new Wf,w:new Jf,I:new Qf,d:new nk,D:new rk,E:new tk,e:new ak,c:new sk,i:new lk,a:new ok,b:new uk,B:new dk,h:new mk,H:new gk,K:new ck,k:new fk,m:new kk,s:new vk,S:new pk,X:new yk,x:new bk,t:new hk,T:new Ik},Ak=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,jk=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ek=/^'([^]*?)'?$/,Ok=/''/g,Tk=/\S/,Nk=/[a-zA-Z]/;function jr(e,r,t,n){const a=()=>fe(n?.in||t,NaN),s=Df(),i=n?.locale??s.locale??ja,l=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??s.firstWeekContainsDate??s.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??s.weekStartsOn??s.locale?.options?.weekStartsOn??0;if(!r)return e?a():ie(t,n?.in);const d={firstWeekContainsDate:l,weekStartsOn:o,locale:i},u=[new Lf(n?.in,t)],m=r.match(jk).map(p=>{const w=p[0];if(w in fs){const h=fs[w];return h(p,i.formatLong)}return p}).join("").match(Ak),c=[];for(let p of m){!n?.useAdditionalWeekYearTokens&&qo(p)&&ks(p,r,e),!n?.useAdditionalDayOfYearTokens&&_o(p)&&ks(p,r,e);const w=p[0],h=wk[w];if(h){const{incompatibleTokens:b}=h;if(Array.isArray(b)){const A=c.find(T=>b.includes(T.token)||T.token===w);if(A)throw new RangeError(`The format string mustn't contain \`${A.fullToken}\` and \`${p}\` at the same time`)}else if(h.incompatibleTokens==="*"&&c.length>0)throw new RangeError(`The format string mustn't contain \`${p}\` and any other token at the same time`);c.push({token:w,fullToken:p});const j=h.run(e,p,i.match,d);if(!j)return a();u.push(j.setter),e=j.rest}else{if(w.match(Nk))throw new RangeError("Format string contains an unescaped latin alphabet character `"+w+"`");if(p==="''"?p="'":w==="'"&&(p=Rk(p)),e.indexOf(p)===0)e=e.slice(p.length);else return a()}}if(e.length>0&&Tk.test(e))return a();const k=u.map(p=>p.priority).sort((p,w)=>w-p).filter((p,w,h)=>h.indexOf(p)===w).map(p=>u.filter(w=>w.priority===p).sort((w,h)=>h.subPriority-w.subPriority)).map(p=>p[0]);let y=ie(t,n?.in);if(isNaN(+y))return a();const I={};for(const p of k){if(!p.validate(y,d))return a();const w=p.set(y,I,d);Array.isArray(w)?(y=w[0],Object.assign(I,w[1])):y=w}return y}function Rk(e){return e.match(Ek)[1].replace(Ok,"'")}function Pk(e,r,t){const[n,a]=Fr(t?.in,e,r);return n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()}function Vo(e,r,t){const[n,a]=Fr(t?.in,e,r);return n.getFullYear()===a.getFullYear()}function _k(e,r,t){return pt(e,-r,t)}function Lo(e,r,t){const n=ie(e,t?.in),a=n.getFullYear(),s=n.getDate(),i=fe(e,0);i.setFullYear(a,r,15),i.setHours(0,0,0,0);const l=qf(i);return n.setMonth(r,Math.min(s,l)),n}function Bo(e,r,t){const n=ie(e,t?.in);return isNaN(+n)?fe(e,NaN):(n.setFullYear(r),n)}function qk(e,r,t){return Vs(e,-r,t)}function Dk(e,r,t){const{years:n=0,months:a=0,weeks:s=0,days:i=0,hours:l=0,minutes:o=0,seconds:d=0}=r,u=qk(e,a+n*12,t),m=_k(u,i+s*7,t),c=o+l*60,y=(d+c*60)*1e3;return fe(e,+m-y)}function Mk(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Sk(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(r=>{let{brand:t,version:n}=r;return t+"/"+n}).join(" "):navigator.userAgent}function xk(){return/apple/i.test(navigator.vendor)}function Fk(){return Mk().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function Vk(){return Sk().includes("jsdom/")}const Lk="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Si(e){let r=e.activeElement;for(;((t=r)==null||(t=t.shadowRoot)==null?void 0:t.activeElement)!=null;){var t;r=r.shadowRoot.activeElement}return r}function tt(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&da(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Ir(e){return"composedPath"in e?e.composedPath()[0]:e.target}function $a(e,r){if(r==null)return!1;if("composedPath"in e)return e.composedPath().includes(r);const t=e;return t.target!=null&&r.contains(t.target)}function Bk(e){return e.matches("html,body")}function tr(e){return e?.ownerDocument||document}function Ck(e){return sn(e)&&e.matches(Lk)}function Kk(e){if(!e||Vk())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function Wa(e,r,t){t===void 0&&(t=!0);let n=e.filter(s=>{var i;return s.parentId===r&&((i=s.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=t?e.filter(s=>{var i;return(i=a)==null?void 0:i.some(l=>{var o;return s.parentId===l.id&&((o=s.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function Gk(e){return"nativeEvent"in e}function vs(e,r){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}var Vn=typeof document<"u"?g.useLayoutEffect:g.useEffect;const Uk={...Vl};function Rt(e){const r=g.useRef(e);return Vn(()=>{r.current=e}),r}const Yk=Uk.useInsertionEffect,Hk=Yk||(e=>e());function Mn(e){const r=g.useRef(()=>{});return Hk(()=>{r.current=e}),g.useCallback(function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r.current==null?void 0:r.current(...n)},[])}const $k="data-floating-ui-focusable",xi="active",Fi="selected",Wk={...Vl};let Vi=!1,zk=0;const Li=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+zk++;function Jk(){const[e,r]=g.useState(()=>Vi?Li():void 0);return Vn(()=>{e==null&&r(Li())},[]),g.useEffect(()=>{Vi=!0},[]),e}const Xk=Wk.useId,Co=Xk||Jk;function Qk(){const e=new Map;return{emit(r,t){var n;(n=e.get(r))==null||n.forEach(a=>a(t))},on(r,t){e.has(r)||e.set(r,new Set),e.get(r).add(t)},off(r,t){var n;(n=e.get(r))==null||n.delete(t)}}}const Zk=g.createContext(null),ev=g.createContext(null),Ko=()=>{var e;return((e=g.useContext(Zk))==null?void 0:e.id)||null},Ws=()=>g.useContext(ev);function _a(e){return"data-floating-ui-"+e}function on(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Bi=_a("safe-polygon");function za(e,r,t){if(t&&!vs(t))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n?.[r]}return e?.[r]}function Ja(e){return typeof e=="function"?e():e}function nv(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,dataRef:a,events:s,elements:i}=e,{enabled:l=!0,delay:o=0,handleClose:d=null,mouseOnly:u=!1,restMs:m=0,move:c=!0}=r,k=Ws(),y=Ko(),I=Rt(d),p=Rt(o),w=Rt(t),h=Rt(m),b=g.useRef(),j=g.useRef(-1),A=g.useRef(),T=g.useRef(-1),R=g.useRef(!0),F=g.useRef(!1),_=g.useRef(()=>{}),S=g.useRef(!1),L=g.useCallback(()=>{var C;const V=(C=a.current.openEvent)==null?void 0:C.type;return V?.includes("mouse")&&V!=="mousedown"},[a]);g.useEffect(()=>{if(!l)return;function C(V){let{open:x}=V;x||(on(j),on(T),R.current=!0,S.current=!1)}return s.on("openchange",C),()=>{s.off("openchange",C)}},[l,s]),g.useEffect(()=>{if(!l||!I.current||!t)return;function C(x){L()&&n(!1,x,"hover")}const V=tr(i.floating).documentElement;return V.addEventListener("mouseleave",C),()=>{V.removeEventListener("mouseleave",C)}},[i.floating,t,n,l,I,L]);const q=g.useCallback(function(C,V,x){V===void 0&&(V=!0),x===void 0&&(x="hover");const H=za(p.current,"close",b.current);H&&!A.current?(on(j),j.current=window.setTimeout(()=>n(!1,C,x),H)):V&&(on(j),n(!1,C,x))},[p,n]),O=Mn(()=>{_.current(),A.current=void 0}),P=Mn(()=>{if(F.current){const C=tr(i.floating).body;C.style.pointerEvents="",C.removeAttribute(Bi),F.current=!1}}),M=Mn(()=>a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1);g.useEffect(()=>{if(!l)return;function C(z){if(on(j),R.current=!1,u&&!vs(b.current)||Ja(h.current)>0&&!za(p.current,"open"))return;const ae=za(p.current,"open",b.current);ae?j.current=window.setTimeout(()=>{w.current||n(!0,z,"hover")},ae):t||n(!0,z,"hover")}function V(z){if(M()){P();return}_.current();const ae=tr(i.floating);if(on(T),S.current=!1,I.current&&a.current.floatingContext){t||on(j),A.current=I.current({...a.current.floatingContext,tree:k,x:z.clientX,y:z.clientY,onClose(){P(),O(),M()||q(z,!0,"safe-polygon")}});const Z=A.current;ae.addEventListener("mousemove",Z),_.current=()=>{ae.removeEventListener("mousemove",Z)};return}(b.current==="touch"?!tt(i.floating,z.relatedTarget):!0)&&q(z)}function x(z){M()||a.current.floatingContext&&(I.current==null||I.current({...a.current.floatingContext,tree:k,x:z.clientX,y:z.clientY,onClose(){P(),O(),M()||q(z)}})(z))}function H(){on(j)}function J(z){M()||q(z,!1)}if(pe(i.domReference)){const z=i.domReference,ae=i.floating;return t&&z.addEventListener("mouseleave",x),c&&z.addEventListener("mousemove",C,{once:!0}),z.addEventListener("mouseenter",C),z.addEventListener("mouseleave",V),ae&&(ae.addEventListener("mouseleave",x),ae.addEventListener("mouseenter",H),ae.addEventListener("mouseleave",J)),()=>{t&&z.removeEventListener("mouseleave",x),c&&z.removeEventListener("mousemove",C),z.removeEventListener("mouseenter",C),z.removeEventListener("mouseleave",V),ae&&(ae.removeEventListener("mouseleave",x),ae.removeEventListener("mouseenter",H),ae.removeEventListener("mouseleave",J))}}},[i,l,e,u,c,q,O,P,n,t,w,k,p,I,a,M,h]),Vn(()=>{var C;if(l&&t&&(C=I.current)!=null&&C.__options.blockPointerEvents&&L()){F.current=!0;const x=i.floating;if(pe(i.domReference)&&x){var V;const H=tr(i.floating).body;H.setAttribute(Bi,"");const J=i.domReference,z=k==null||(V=k.nodesRef.current.find(ae=>ae.id===y))==null||(V=V.context)==null?void 0:V.elements.floating;return z&&(z.style.pointerEvents=""),H.style.pointerEvents="none",J.style.pointerEvents="auto",x.style.pointerEvents="auto",()=>{H.style.pointerEvents="",J.style.pointerEvents="",x.style.pointerEvents=""}}}},[l,t,y,i,k,I,L]),Vn(()=>{t||(b.current=void 0,S.current=!1,O(),P())},[t,O,P]),g.useEffect(()=>()=>{O(),on(j),on(T),P()},[l,i.domReference,O,P]);const B=g.useMemo(()=>{function C(V){b.current=V.pointerType}return{onPointerDown:C,onPointerEnter:C,onMouseMove(V){const{nativeEvent:x}=V;function H(){!R.current&&!w.current&&n(!0,x,"hover")}u&&!vs(b.current)||t||Ja(h.current)===0||S.current&&V.movementX**2+V.movementY**2<2||(on(T),b.current==="touch"?H():(S.current=!0,T.current=window.setTimeout(H,Ja(h.current))))}}},[u,n,t,w,h]);return g.useMemo(()=>l?{reference:B}:{},[l,B])}function Xa(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&da(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function rv(e){return"composedPath"in e?e.composedPath()[0]:e.target}const tv=g.createContext(null),Ci=_a("portal");function av(e){e===void 0&&(e={});const{id:r,root:t}=e,n=Co(),a=sv(),[s,i]=g.useState(null),l=g.useRef(null);return Vn(()=>()=>{s?.remove(),queueMicrotask(()=>{l.current=null})},[s]),Vn(()=>{if(!n||l.current)return;const o=r?document.getElementById(r):null;if(!o)return;const d=document.createElement("div");d.id=n,d.setAttribute(Ci,""),o.appendChild(d),l.current=d,i(d)},[r,n]),Vn(()=>{if(t===null||!n||l.current)return;let o=t||a?.portalNode;o&&!pe(o)&&(o=o.current),o=o||document.body;let d=null;r&&(d=document.createElement("div"),d.id=r,o.appendChild(d));const u=document.createElement("div");u.id=n,u.setAttribute(Ci,""),o=d||o,o.appendChild(u),l.current=u,i(u)},[r,t,n,a]),s}const sv=()=>g.useContext(tv),iv={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},lv={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Ki=e=>{var r,t;return{escapeKey:typeof e=="boolean"?e:(r=e?.escapeKey)!=null?r:!1,outsidePress:typeof e=="boolean"?e:(t=e?.outsidePress)!=null?t:!0}};function ov(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,elements:a,dataRef:s}=e,{enabled:i=!0,escapeKey:l=!0,outsidePress:o=!0,outsidePressEvent:d="pointerdown",referencePress:u=!1,referencePressEvent:m="pointerdown",ancestorScroll:c=!1,bubbles:k,capture:y}=r,I=Ws(),p=Mn(typeof o=="function"?o:()=>!1),w=typeof o=="function"?p:o,h=g.useRef(!1),b=g.useRef(!1),{escapeKey:j,outsidePress:A}=Ki(k),{escapeKey:T,outsidePress:R}=Ki(y),F=g.useRef(!1),_=Mn(M=>{var B;if(!t||!i||!l||M.key!=="Escape"||F.current)return;const C=(B=s.current.floatingContext)==null?void 0:B.nodeId,V=I?Wa(I.nodesRef.current,C):[];if(!j&&(M.stopPropagation(),V.length>0)){let x=!0;if(V.forEach(H=>{var J;if((J=H.context)!=null&&J.open&&!H.context.dataRef.current.__escapeKeyBubbles){x=!1;return}}),!x)return}n(!1,Gk(M)?M.nativeEvent:M,"escape-key")}),S=Mn(M=>{var B;const C=()=>{var V;_(M),(V=Ir(M))==null||V.removeEventListener("keydown",C)};(B=Ir(M))==null||B.addEventListener("keydown",C)}),L=Mn(M=>{var B;const C=h.current;h.current=!1;const V=b.current;if(b.current=!1,d==="click"&&V||C||typeof w=="function"&&!w(M))return;const x=Ir(M),H="["+_a("inert")+"]",J=tr(a.floating).querySelectorAll(H);let z=pe(x)?x:null;for(;z&&!Fn(z);){const U=Bn(z);if(Fn(U)||!pe(U))break;z=U}if(J.length&&pe(x)&&!Bk(x)&&!tt(x,a.floating)&&Array.from(J).every(U=>!tt(z,U)))return;if(sn(x)&&P){const U=Fn(x),re=cn(x),te=/auto|scroll/,de=U||te.test(re.overflowX),Le=U||te.test(re.overflowY),Be=de&&x.clientWidth>0&&x.scrollWidth>x.clientWidth,Ce=Le&&x.clientHeight>0&&x.scrollHeight>x.clientHeight,_n=re.direction==="rtl",ln=Ce&&(_n?M.offsetX<=x.offsetWidth-x.clientWidth:M.offsetX>x.clientWidth),fn=Be&&M.offsetY>x.clientHeight;if(ln||fn)return}const ae=(B=s.current.floatingContext)==null?void 0:B.nodeId,xe=I&&Wa(I.nodesRef.current,ae).some(U=>{var re;return $a(M,(re=U.context)==null?void 0:re.elements.floating)});if($a(M,a.floating)||$a(M,a.domReference)||xe)return;const Z=I?Wa(I.nodesRef.current,ae):[];if(Z.length>0){let U=!0;if(Z.forEach(re=>{var te;if((te=re.context)!=null&&te.open&&!re.context.dataRef.current.__outsidePressBubbles){U=!1;return}}),!U)return}n(!1,M,"outside-press")}),q=Mn(M=>{var B;const C=()=>{var V;L(M),(V=Ir(M))==null||V.removeEventListener(d,C)};(B=Ir(M))==null||B.addEventListener(d,C)});g.useEffect(()=>{if(!t||!i)return;s.current.__escapeKeyBubbles=j,s.current.__outsidePressBubbles=A;let M=-1;function B(J){n(!1,J,"ancestor-scroll")}function C(){window.clearTimeout(M),F.current=!0}function V(){M=window.setTimeout(()=>{F.current=!1},Na()?5:0)}const x=tr(a.floating);l&&(x.addEventListener("keydown",T?S:_,T),x.addEventListener("compositionstart",C),x.addEventListener("compositionend",V)),w&&x.addEventListener(d,R?q:L,R);let H=[];return c&&(pe(a.domReference)&&(H=Jn(a.domReference)),pe(a.floating)&&(H=H.concat(Jn(a.floating))),!pe(a.reference)&&a.reference&&a.reference.contextElement&&(H=H.concat(Jn(a.reference.contextElement)))),H=H.filter(J=>{var z;return J!==((z=x.defaultView)==null?void 0:z.visualViewport)}),H.forEach(J=>{J.addEventListener("scroll",B,{passive:!0})}),()=>{l&&(x.removeEventListener("keydown",T?S:_,T),x.removeEventListener("compositionstart",C),x.removeEventListener("compositionend",V)),w&&x.removeEventListener(d,R?q:L,R),H.forEach(J=>{J.removeEventListener("scroll",B)}),window.clearTimeout(M)}},[s,a,l,w,d,t,n,c,i,j,A,_,T,S,L,R,q]),g.useEffect(()=>{h.current=!1},[w,d]);const O=g.useMemo(()=>({onKeyDown:_,...u&&{[iv[m]]:M=>{n(!1,M.nativeEvent,"reference-press")},...m!=="click"&&{onClick(M){n(!1,M.nativeEvent,"reference-press")}}}}),[_,n,u,m]),P=g.useMemo(()=>({onKeyDown:_,onMouseDown(){b.current=!0},onMouseUp(){b.current=!0},[lv[d]]:()=>{h.current=!0}}),[_,d]);return g.useMemo(()=>i?{reference:O,floating:P}:{},[i,O,P])}function uv(e){const{open:r=!1,onOpenChange:t,elements:n}=e,a=Co(),s=g.useRef({}),[i]=g.useState(()=>Qk()),l=Ko()!=null,[o,d]=g.useState(n.reference),u=Mn((k,y,I)=>{s.current.openEvent=k?y:void 0,i.emit("openchange",{open:k,event:y,reason:I,nested:l}),t?.(k,y,I)}),m=g.useMemo(()=>({setPositionReference:d}),[]),c=g.useMemo(()=>({reference:o||n.reference||null,floating:n.floating||null,domReference:n.reference}),[o,n.reference,n.floating]);return g.useMemo(()=>({dataRef:s,open:r,onOpenChange:u,elements:c,events:i,floatingId:a,refs:m}),[r,u,c,i,a,m])}function Go(e){e===void 0&&(e={});const{nodeId:r}=e,t=uv({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||t,a=n.elements,[s,i]=g.useState(null),[l,o]=g.useState(null),u=a?.domReference||s,m=g.useRef(null),c=Ws();Vn(()=>{u&&(m.current=u)},[u]);const k=Jc({...e,elements:{...a,...l&&{reference:l}}}),y=g.useCallback(b=>{const j=pe(b)?{getBoundingClientRect:()=>b.getBoundingClientRect(),getClientRects:()=>b.getClientRects(),contextElement:b}:b;o(j),k.refs.setReference(j)},[k.refs]),I=g.useCallback(b=>{(pe(b)||b===null)&&(m.current=b,i(b)),(pe(k.refs.reference.current)||k.refs.reference.current===null||b!==null&&!pe(b))&&k.refs.setReference(b)},[k.refs]),p=g.useMemo(()=>({...k.refs,setReference:I,setPositionReference:y,domReference:m}),[k.refs,I,y]),w=g.useMemo(()=>({...k.elements,domReference:u}),[k.elements,u]),h=g.useMemo(()=>({...k,...n,refs:p,elements:w,nodeId:r}),[k,p,w,r,n]);return Vn(()=>{n.dataRef.current.floatingContext=h;const b=c?.nodesRef.current.find(j=>j.id===r);b&&(b.context=h)}),g.useMemo(()=>({...k,context:h,refs:p,elements:w}),[k,p,w,h])}function Qa(){return Fk()&&xk()}function dv(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,events:a,dataRef:s,elements:i}=e,{enabled:l=!0,visibleOnly:o=!0}=r,d=g.useRef(!1),u=g.useRef(-1),m=g.useRef(!0);g.useEffect(()=>{if(!l)return;const k=en(i.domReference);function y(){!t&&sn(i.domReference)&&i.domReference===Si(tr(i.domReference))&&(d.current=!0)}function I(){m.current=!0}function p(){m.current=!1}return k.addEventListener("blur",y),Qa()&&(k.addEventListener("keydown",I,!0),k.addEventListener("pointerdown",p,!0)),()=>{k.removeEventListener("blur",y),Qa()&&(k.removeEventListener("keydown",I,!0),k.removeEventListener("pointerdown",p,!0))}},[i.domReference,t,l]),g.useEffect(()=>{if(!l)return;function k(y){let{reason:I}=y;(I==="reference-press"||I==="escape-key")&&(d.current=!0)}return a.on("openchange",k),()=>{a.off("openchange",k)}},[a,l]),g.useEffect(()=>()=>{on(u)},[]);const c=g.useMemo(()=>({onMouseLeave(){d.current=!1},onFocus(k){if(d.current)return;const y=Ir(k.nativeEvent);if(o&&pe(y)){if(Qa()&&!k.relatedTarget){if(!m.current&&!Ck(y))return}else if(!Kk(y))return}n(!0,k.nativeEvent,"focus")},onBlur(k){d.current=!1;const y=k.relatedTarget,I=k.nativeEvent,p=pe(y)&&y.hasAttribute(_a("focus-guard"))&&y.getAttribute("data-type")==="outside";u.current=window.setTimeout(()=>{var w;const h=Si(i.domReference?i.domReference.ownerDocument:document);!y&&h===i.domReference||tt((w=s.current.floatingContext)==null?void 0:w.refs.floating.current,h)||tt(i.domReference,h)||p||n(!1,I,"focus")})}}),[s,i.domReference,n,o]);return g.useMemo(()=>l?{reference:c}:{},[l,c])}function Za(e,r,t){const n=new Map,a=t==="item";let s=e;if(a&&e){const{[xi]:i,[Fi]:l,...o}=e;s=o}return{...t==="floating"&&{tabIndex:-1,[$k]:""},...s,...r.map(i=>{const l=i?i[t]:null;return typeof l=="function"?e?l(e):null:l}).concat(e).reduce((i,l)=>(l&&Object.entries(l).forEach(o=>{let[d,u]=o;if(!(a&&[xi,Fi].includes(d)))if(d.indexOf("on")===0){if(n.has(d)||n.set(d,[]),typeof u=="function"){var m;(m=n.get(d))==null||m.push(u),i[d]=function(){for(var c,k=arguments.length,y=new Array(k),I=0;I<k;I++)y[I]=arguments[I];return(c=n.get(d))==null?void 0:c.map(p=>p(...y)).find(p=>p!==void 0)}}}else i[d]=u}),i),{})}}function mv(e){e===void 0&&(e=[]);const r=e.map(l=>l?.reference),t=e.map(l=>l?.floating),n=e.map(l=>l?.item),a=g.useCallback(l=>Za(l,e,"reference"),r),s=g.useCallback(l=>Za(l,e,"floating"),t),i=g.useCallback(l=>Za(l,e,"item"),n);return g.useMemo(()=>({getReferenceProps:a,getFloatingProps:s,getItemProps:i}),[a,s,i])}function gv(e,r,t){t===void 0&&(t=!0);let n=e.filter(s=>{var i;return s.parentId===r&&((i=s.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=t?e.filter(s=>{var i;return(i=a)==null?void 0:i.some(l=>{var o;return s.parentId===l.id&&((o=s.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function Gi(e,r){const[t,n]=e;let a=!1;const s=r.length;for(let i=0,l=s-1;i<s;l=i++){const[o,d]=r[i]||[0,0],[u,m]=r[l]||[0,0];d>=n!=m>=n&&t<=(u-o)*(n-d)/(m-d)+o&&(a=!a)}return a}function cv(e,r){return e[0]>=r.x&&e[0]<=r.x+r.width&&e[1]>=r.y&&e[1]<=r.y+r.height}function fv(e){e===void 0&&(e={});const{buffer:r=.5,blockPointerEvents:t=!1,requireIntent:n=!0}=e;let a,s=!1,i=null,l=null,o=performance.now();function d(m,c){const k=performance.now(),y=k-o;if(i===null||l===null||y===0)return i=m,l=c,o=k,null;const I=m-i,p=c-l,h=Math.sqrt(I*I+p*p)/y;return i=m,l=c,o=k,h}const u=m=>{let{x:c,y:k,placement:y,elements:I,onClose:p,nodeId:w,tree:h}=m;return function(j){function A(){clearTimeout(a),p()}if(clearTimeout(a),!I.domReference||!I.floating||y==null||c==null||k==null)return;const{clientX:T,clientY:R}=j,F=[T,R],_=rv(j),S=j.type==="mouseleave",L=Xa(I.floating,_),q=Xa(I.domReference,_),O=I.domReference.getBoundingClientRect(),P=I.floating.getBoundingClientRect(),M=y.split("-")[0],B=c>P.right-P.width/2,C=k>P.bottom-P.height/2,V=cv(F,O),x=P.width>O.width,H=P.height>O.height,J=(x?O:P).left,z=(x?O:P).right,ae=(H?O:P).top,xe=(H?O:P).bottom;if(L&&(s=!0,!S))return;if(q&&(s=!1),q&&!S){s=!0;return}if(S&&pe(j.relatedTarget)&&Xa(I.floating,j.relatedTarget)||h&&gv(h.nodesRef.current,w).some(re=>{let{context:te}=re;return te?.open}))return;if(M==="top"&&k>=O.bottom-1||M==="bottom"&&k<=O.top+1||M==="left"&&c>=O.right-1||M==="right"&&c<=O.left+1)return A();let Z=[];switch(M){case"top":Z=[[J,O.top+1],[J,P.bottom-1],[z,P.bottom-1],[z,O.top+1]];break;case"bottom":Z=[[J,P.top+1],[J,O.bottom-1],[z,O.bottom-1],[z,P.top+1]];break;case"left":Z=[[P.right-1,xe],[P.right-1,ae],[O.left+1,ae],[O.left+1,xe]];break;case"right":Z=[[O.right-1,xe],[O.right-1,ae],[P.left+1,ae],[P.left+1,xe]];break}function U(re){let[te,de]=re;switch(M){case"top":{const Le=[x?te+r/2:B?te+r*4:te-r*4,de+r+1],Be=[x?te-r/2:B?te+r*4:te-r*4,de+r+1],Ce=[[P.left,B||x?P.bottom-r:P.top],[P.right,B?x?P.bottom-r:P.top:P.bottom-r]];return[Le,Be,...Ce]}case"bottom":{const Le=[x?te+r/2:B?te+r*4:te-r*4,de-r],Be=[x?te-r/2:B?te+r*4:te-r*4,de-r],Ce=[[P.left,B||x?P.top+r:P.bottom],[P.right,B?x?P.top+r:P.bottom:P.top+r]];return[Le,Be,...Ce]}case"left":{const Le=[te+r+1,H?de+r/2:C?de+r*4:de-r*4],Be=[te+r+1,H?de-r/2:C?de+r*4:de-r*4];return[...[[C||H?P.right-r:P.left,P.top],[C?H?P.right-r:P.left:P.right-r,P.bottom]],Le,Be]}case"right":{const Le=[te-r,H?de+r/2:C?de+r*4:de-r*4],Be=[te-r,H?de-r/2:C?de+r*4:de-r*4],Ce=[[C||H?P.left+r:P.right,P.top],[C?H?P.left+r:P.right:P.left+r,P.bottom]];return[Le,Be,...Ce]}}}if(!Gi([T,R],Z)){if(s&&!V)return A();if(!S&&n){const re=d(j.clientX,j.clientY);if(re!==null&&re<.1)return A()}Gi([T,R],U([c,k]))?!s&&n&&(a=window.setTimeout(A,40)):A()}}};return u.__options={blockPointerEvents:t},u}const qa=()=>{const{cn:e}=ee();return v.createElement(Wl,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Uo=()=>{const{cn:e}=ee();return v.createElement(Wl,{title:Gn("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var kv=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const vv=g.forwardRef((e,r)=>{var{className:t,header:n,children:a,open:s,defaultOpen:i=!1,onClick:l,size:o="medium",onOpenChange:d}=e,u=kv(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:m}=ee(),[c,k]=Pr({defaultValue:i,value:s,onChange:d}),y=o==="small"?"small":"medium";return v.createElement("div",{className:m("navds-read-more",`navds-read-more--${o}`,t,{"navds-read-more--open":c}),"data-volume":"low"},v.createElement("button",Object.assign({},u,{ref:r,type:"button",className:m("navds-read-more__button","navds-body-short",{"navds-body-short--small":o==="small"}),onClick:sr(l,()=>k(I=>!I)),"aria-expanded":c,"data-state":c?"open":"closed"}),v.createElement(mt,{className:m("navds-read-more__expand-icon"),"aria-hidden":!0}),v.createElement("span",null,n)),v.createElement(Ps,{as:"div","aria-hidden":!c,className:m("navds-read-more__content",{"navds-read-more__content--closed":!c}),size:y,"data-state":c?"open":"closed"},a))}),ka=g.createContext(null),Lr=(e,r)=>{var t,n,a;const{size:s,error:i,errorId:l}=e,o=g.useContext(ka),d=Kn(),u=(t=e.id)!==null&&t!==void 0?t:`${r}-${d}`,m=l??`${r}-error-${d}`,c=`${r}-description-${d}`,k=o?.disabled||e.disabled,y=(o?.readOnly||e.readOnly)&&!k||void 0,I=!k&&!y&&!!(i||o?.error),p=!k&&!y&&!!i&&typeof i!="boolean",w=Object.assign({},I?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:p,hasError:I,errorId:m,inputDescriptionId:c,size:(n=s??o?.size)!==null&&n!==void 0?n:"medium",readOnly:y,inputProps:Object.assign(Object.assign({id:u},w),{"aria-describedby":lt(e["aria-describedby"],{[c]:e.description&&!va(e.description),[m]:p,[(a=o?.errorId)!==null&&a!==void 0?a:""]:I&&o?.error})||void 0,disabled:k})}};function va(e,r=!0){if(v.isValidElement(e)){if(e.type===vv)return!0;if(e.props.children&&r)return va(e.props.children,!1)}else if(Array.isArray(e))return e.some(t=>va(t,r));return!1}const Yo={global:{dateLocale:ro,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},Ho={global:{dateLocale:ao,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},$o=(e="nb")=>{switch(e){case"nn":return ao;case"en":return ro;default:return to}},Wo=e=>{switch(e){case"nn":return Ho.DatePicker;case"en":case"en-GB":return Yo.DatePicker;default:return}},pv=e=>{switch(e){case"nn":return Ho.global;case"en":case"en-GB":return Yo.global;default:return}},[zo,Da]=Aa();var yv=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const[bv,zs]=Aa({errorMessage:"useDateInputContext must be used with DateInputContext"}),Jo=g.forwardRef((e,r)=>{const{className:t,hideLabel:n=!1,label:a,description:s,variant:i="datepicker",setAnchorRef:l}=e,o=yv(e,["className","hideLabel","label","description","variant","setAnchorRef"]),d=g.useRef(null),u=Da().translate,{cn:m}=ee(),c=i==="datepicker",k={prefix:c?"datepicker-input":"monthpicker-input",iconTitle:{open:c?"openDatePicker":"openMonthPicker",close:c?"closeDatePicker":"closeMonthPicker"}},y=zs(),{inputProps:I,size:p="medium",inputDescriptionId:w,errorId:h,showErrorMsg:b,hasError:j,readOnly:A}=Lr(e,k.prefix);return v.createElement("div",{className:m(t,"navds-form-field",`navds-form-field--${p}`,"navds-date__field",{"navds-text-field--error":j,"navds-date__field--error":j,"navds-form-field--disabled":!!I.disabled,"navds-text-field--disabled":!!I.disabled,"navds-form-field--readonly":A,"navds-text-field--readonly":A,"navds-date__field--readonly":A})},v.createElement(he,{htmlFor:I.id,size:p,className:m("navds-form-field__label",{"navds-sr-only":n})},A&&v.createElement(qa,null),a),!!s&&v.createElement(ne,{as:"div",className:m("navds-form-field__description",{"navds-sr-only":n}),id:w,size:p},s),v.createElement("div",{className:m("navds-date__field-wrapper")},v.createElement("input",Object.assign({ref:r},nn(o,["error","errorId","size"]),I,{autoComplete:"off","aria-controls":y?.open?y.ariaId:void 0,readOnly:A,className:m("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${p}`),size:c?11:14})),v.createElement("button",{disabled:I.disabled||A,tabIndex:A||y?.open?-1:0,onClick:()=>{y?.onOpen(),l?.(d.current)},type:"button",className:m("navds-date__field-button"),ref:d},v.createElement(qd,{title:u(k.iconTitle[y?.open?"close":"open"])}))),v.createElement("div",{className:m("navds-form-field__error"),id:h,"aria-relevant":"additions removals","aria-live":"polite"},b&&v.createElement(ut,{size:p,showIcon:!0},e.error)))}),hv=g.forwardRef((e,r)=>v.createElement(Jo,Object.assign({},e,{ref:r})));g.forwardRef((e,r)=>v.createElement(Jo,Object.assign({},e,{variant:"monthpicker",ref:r})));var Iv=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const wv=g.forwardRef((e,r)=>{var{className:t}=e,n=Iv(e,["className"]);const{cn:a}=ee();return v.createElement("div",Object.assign({},n,{ref:r,className:a("navds-modal__body",t)}))});var Av=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const jv=g.forwardRef((e,r)=>{var{className:t}=e,n=Av(e,["className"]);const{cn:a}=ee();return v.createElement("div",Object.assign({},n,{ref:r,className:a("navds-modal__footer",t)}))});var Ev=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Xo=g.forwardRef((e,r)=>{var{children:t,className:n,closeButton:a=!0}=e,s=Ev(e,["children","className","closeButton"]);const{cn:i}=ee(),l=gt(),o=Gn("global");return v.createElement("div",Object.assign({},s,{ref:r,className:i("navds-modal__header",n)}),l.closeHandler&&a&&v.createElement(Ne,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:d=>{["Enter"," "].includes(d.key)&&d.repeat&&d.preventDefault()},onClick:l.closeHandler,icon:v.createElement(Jl,{title:o("close")})}),t)}),Ui=({clientX:e,clientY:r},{left:t,top:n,right:a,bottom:s})=>!(e<t||r<n||e>a||r>s);function Ov(e,r,t){if(!(r&&r.closeButton===!1))return t?()=>{var n;return t()!==!1&&((n=e.current)===null||n===void 0?void 0:n.close())}:()=>{var n;return(n=e.current)===null||n===void 0?void 0:n.close()}}const Pt="navds-modal__document-body",_t="aksel-modal__document-body";function Tv(e,r,t){v.useEffect(()=>{if(t||!e.current||!r)return;e.current.open&&document.body.classList.add(_t,Pt);const n=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(_t,Pt):document.body.classList.remove(_t,Pt)});return n.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{n.disconnect(),document.body.classList.remove(_t,Pt)}},[e,r,t])}const wr=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function Qo(e,r){var t="on"+r.type.toLowerCase();return typeof e[t]=="function"&&e[t](r),e.dispatchEvent(r)}function Jr(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function Zo(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Nv(e,r){for(var t=0;t<e.length;++t)if(e[t]===r)return!0;return!1}function es(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function eu(e){var r=["button","input","keygen","select","textarea"],t=r.map(function(i){return i+":not([disabled])"});t.push('[tabindex]:not([disabled]):not([tabindex=""])');var n=e.querySelector(t.join(", "));if(!n&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),s=0;s<a.length&&!(a[s].tagName&&a[s].shadowRoot&&(n=eu(a[s].shadowRoot),n));s++);return n}function Yi(e){return e.isConnected||document.body.contains(e)}function nu(e){if(e.submitter)return e.submitter;var r=e.target;if(!(r instanceof HTMLFormElement))return null;var t=le.formSubmitter;if(!t){var n=e.target,a="getRootNode"in n&&n.getRootNode()||document;t=a.activeElement}return!t||t.form!==r?null:t}function Rv(e){if(!e.defaultPrevented){var r=e.target,t=le.imagemapUseValue,n=nu(e);t===null&&n&&(t=n.value);var a=Jr(r);if(a){var s=n&&n.getAttribute("formmethod")||r.getAttribute("method");s==="dialog"&&(e.preventDefault(),t!=null?a.close(t):a.close())}}}function ru(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",Rv,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var r=new MutationObserver(this.maybeHideModal.bind(this));r.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t=!1,n=(function(){t?this.downgradeModal():this.maybeHideModal(),t=!1}).bind(this),a,s=function(i){if(i.target===e){var l="DOMNodeRemoved";t|=i.type.substr(0,l.length)===l,window.clearTimeout(a),a=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,s)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}ru.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Yi(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),le.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var r=document.createElement("div");this.dialog_.insertBefore(r,this.dialog_.firstChild),r.tabIndex=-1,r.focus(),this.dialog_.removeChild(r)}var t=document.createEvent("MouseEvents");t.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(t),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=eu(this.dialog_)),Zo(document.activeElement),e&&e.focus()},updateZIndex:function(e,r){if(e<r)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=r},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Yi(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!le.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,le.needsCentering(this.dialog_)?(le.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var r=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});Qo(this.dialog_,r)}};var le={};le.reposition=function(e){var r=document.body.scrollTop||document.documentElement.scrollTop,t=r+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(r,t)+"px"};le.isInlinePositionSetByStylesheet=function(e){for(var r=0;r<document.styleSheets.length;++r){var t=document.styleSheets[r],n=null;try{n=t.cssRules}catch{}if(n)for(var a=0;a<n.length;++a){var s=n[a],i=null;try{i=document.querySelectorAll(s.selectorText)}catch{}if(!(!i||!Nv(i,e))){var l=s.style.getPropertyValue("top"),o=s.style.getPropertyValue("bottom");if(l&&l!=="auto"||o&&o!=="auto")return!0}}}return!1};le.needsCentering=function(e){var r=window.getComputedStyle(e);return r.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!le.isInlinePositionSetByStylesheet(e)};le.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new ru(e)};le.registerDialog=function(e){e.showModal||le.forceRegisterDialog(e)};le.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(r){this.forwardTab_=void 0,r.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(r){var t=[];r.forEach(function(n){for(var a=0,s;s=n.removedNodes[a];++a)s instanceof Element&&(s.localName==="dialog"&&t.push(s),t=t.concat(s.querySelectorAll("dialog")))}),t.length&&e(t)}))};le.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};le.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};le.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,r=0,t;t=this.pendingDialogStack[r];++r)t.updateZIndex(--e,--e),r===0&&(this.overlay.style.zIndex=--e);var n=this.pendingDialogStack[0];if(n){var a=n.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};le.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=Jr(e);){for(var r=0,t;t=this.pendingDialogStack[r];++r)if(t.dialog===e)return r===0;e=e.parentElement}return!1};le.DialogManager.prototype.handleFocus_=function(e){var r=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(r)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Zo(r),this.forwardTab_!==void 0)){var t=this.pendingDialogStack[0],n=t.dialog,a=n.compareDocumentPosition(r);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():r!==document.documentElement&&document.documentElement.focus()),!1}};le.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var r=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),t=this.pendingDialogStack[0];t&&Qo(t.dialog,r)&&t.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};le.DialogManager.prototype.checkDOM_=function(e){var r=this.pendingDialogStack.slice();r.forEach(function(t){e.indexOf(t.dialog)!==-1?t.downgradeModal():t.maybeHideModal()})};le.DialogManager.prototype.pushDialog=function(e){var r=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=r?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};le.DialogManager.prototype.removeDialog=function(e){var r=this.pendingDialogStack.indexOf(e);r!==-1&&(this.pendingDialogStack.splice(r,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};wr&&(le.dm=new le.DialogManager,le.formSubmitter=null,le.imagemapUseValue=null);if(wr){var Hi=document.createElement("form");if(Hi.setAttribute("method","dialog"),Hi.method!=="dialog"){var br=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(br){var Pv=br.get;br.get=function(){return es(this)?"dialog":Pv.call(this)};var _v=br.set;br.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):_v.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",br)}}document.addEventListener("click",function(e){if(le.formSubmitter=null,le.imagemapUseValue=null,!e.defaultPrevented){var r=e.target;if("composedPath"in e){var t=e.composedPath();r=t.shift()||r}if(!(!r||!es(r.form))){var n=r.type==="submit"&&["button","input"].indexOf(r.localName)>-1;if(!n){if(!(r.localName==="input"&&r.type==="image"))return;le.imagemapUseValue=e.offsetX+","+e.offsetY}var a=Jr(r);a&&(le.formSubmitter=r)}}},!1),document.addEventListener("submit",function(e){var r=e.target,t=Jr(r);if(!t){var n=nu(e),a=n&&n.getAttribute("formmethod")||r.getAttribute("method");a==="dialog"&&e.preventDefault()}});var qv=HTMLFormElement.prototype.submit,Dv=function(){if(!es(this))return qv.call(this);var e=Jr(this);e&&e.close()};HTMLFormElement.prototype.submit=Dv}var Mv=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const yn=g.forwardRef((e,r)=>{var t,n,{header:a,children:s,open:i,onBeforeClose:l,onCancel:o,closeOnBackdropClick:d,width:u,placement:m,portal:c,className:k,"aria-labelledby":y,style:I,onClick:p,onMouseDown:w}=e,h=Mv(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:b}=ee(),j=g.useRef(b("navds-modal--polyfilled")),A=g.useRef(null),T=Sr(A,r),R=Kn(),F=(t=Ea())===null||t===void 0?void 0:t.rootElement,_=av({root:F}),S=zs(!1),L=gt(!1)!==void 0;L&&!S&&console.error("Modals should not be nested"),g.useEffect(()=>{wr&&A.current&&_&&(le.registerDialog(A.current),A.current.classList.add(j.current)),A.current&&_&&(A.current.autofocus=!0)},[_]),g.useEffect(()=>{A.current&&_&&i!==void 0&&(i&&!A.current.open?A.current.showModal():!i&&A.current.open&&A.current.close())},[_,i]),Tv(A,_,L);const q=typeof u=="string"&&["small","medium"].includes(u),O=b("navds-modal",k,{[j.current]:wr,"navds-modal--autowidth":!u,[`navds-modal--${u}`]:q,"navds-modal--top":m==="top"&&!wr}),P=Object.assign(Object.assign({},I),q?{}:{width:u}),M=g.useRef({clientX:0,clientY:0}),B=z=>{M.current=z},C=d&&!wr,V=z=>{if(z.target!==A.current)return;const ae=A.current.getBoundingClientRect();Ui(M.current,ae)||Ui(z,ae)||l!==void 0&&l()===!1||A.current.close()},x=z=>{l&&l()===!1&&z.preventDefault()},H=!y&&!h["aria-label"]&&a?R:y,J=v.createElement("dialog",Object.assign({},h,{ref:T,className:O,style:P,onCancel:sr(o,x),onClick:C?sr(p,V):p,onMouseDown:C?sr(w,B):w,"aria-labelledby":H}),v.createElement(mm,{closeHandler:Ov(A,a,l),ref:A},a&&v.createElement(Xo,null,a.label&&v.createElement(Nr,{className:b("navds-modal__label")},a.label),v.createElement(dt,{size:(n=a.size)!==null&&n!==void 0?n:"medium",level:"1",id:R},a.icon&&v.createElement("span",{className:b("navds-modal__header-icon")},a.icon),a.heading)),s));return c?_?Rs.createPortal(J,_):null:J});yn.Header=Xo;yn.Body=wv;yn.Footer=jv;var Sv=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const xv=g.forwardRef((e,r)=>{var{className:t}=e,n=Sv(e,["className"]);const{cn:a}=ee();return v.createElement("div",Object.assign({},n,{ref:r,className:a("navds-popover__content",t)}))});var Fv=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Dr=g.forwardRef((e,r)=>{var{className:t,children:n,anchorEl:a,arrow:s=!0,open:i,onClose:l,placement:o="top",offset:d,strategy:u,flip:m=!0}=e,c=Fv(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:k}=ee(),y=g.useRef(null),I=gt(!1)!==void 0,p=zs(!1),w=u??(I?"fixed":"absolute"),h=p?!1:m,b=ot(!1),{update:j,refs:A,placement:T,middlewareData:{arrow:{x:R,y:F}={}},floatingStyles:_}=Go({strategy:w,placement:o,open:i,middleware:[ho(d??(b?8:s?16:4)),h&&wo({padding:5,fallbackPlacements:["bottom","top"]}),Io({padding:12}),Ao({element:y,padding:8})]});Rr(()=>{A.setReference(a)},[a]);const S=Sr(A.setFloating,r);Rr(()=>{if(!A.reference.current||!A.floating.current||!i)return;const q=cs(A.reference.current,A.floating.current,j);return()=>q()},[A.floating,A.reference,j,i,a]);const L={top:"bottom",right:"left",bottom:"top",left:"right"}[T.split("-")[0]];return v.createElement(fc,{asChild:!0,safeZone:{anchor:a,dismissable:A.floating.current},onDismiss:()=>i&&l?.(),enabled:i},v.createElement("div",Object.assign({ref:S},c,{className:k("navds-popover",t,{"navds-popover--hidden":!i||!a}),style:Object.assign(Object.assign({},c.style),_),"data-placement":T,"aria-hidden":!i||!a}),n,s&&!b&&v.createElement("div",{ref:q=>{y.current=q},style:Object.assign(Object.assign(Object.assign({},R!=null?{left:R}:{}),F!=null?{top:F}:{}),L?{[L]:"-0.5rem"}:{}),className:k("navds-popover__arrow")})))});Dr.Content=xv;const Vv={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},Lv=({open:e,children:r,onClose:t,anchor:n,locale:a,translate:s,variant:i,popoverProps:l})=>{const o=Gn("global",pv(a)),{cn:d}=ee(),u=g.useRef(null),m=gt(!1)!==void 0;return cm("screen and (min-width: 768px)",!0)&&!m?v.createElement(Dr,Object.assign({arrow:!1,anchorEl:n,open:e,onClose:t,placement:"bottom-start",role:"dialog",className:d("navds-date__popover",{"navds-date":i==="month"}),flip:!1},l),r):v.createElement(yn,{ref:u,open:e,onClose:k=>{k.stopPropagation(),t()},"aria-label":s(Vv[i]),className:d("navds-date__modal",{"navds-date__nested-modal":m,"navds-date":i==="month"}),closeOnBackdropClick:!0,placement:"top"},v.createElement("div",{className:d("navds-date__modal-body")},r,v.createElement(Ne,{variant:"tertiary",onClick:()=>{var k;return(k=u?.current)===null||k===void 0?void 0:k.close()},size:"small",type:"button"},o("close"))))};function tu(e){return!!(e&&typeof e=="object"&&"from"in e)}const Bv={},Wr={};function Xr(e,r){try{const n=(Bv[e]||=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format)(r).split("GMT")[1]||"";return n in Wr?Wr[n]:$i(n,n.split(":"))}catch{if(e in Wr)return Wr[e];const t=e?.match(Cv);return t?$i(e,t.slice(1)):NaN}}const Cv=/([+-]\d\d):?(\d\d)?/;function $i(e,r){const t=+r[0],n=+(r[1]||0);return Wr[e]=t>0?t*60+n:t*60-n}class On extends Date{constructor(...r){super(),r.length>1&&typeof r[r.length-1]=="string"&&(this.timeZone=r.pop()),this.internal=new Date,isNaN(Xr(this.timeZone,this))?this.setTime(NaN):r.length?typeof r[0]=="number"&&(r.length===1||r.length===2&&typeof r[1]!="number")?this.setTime(r[0]):typeof r[0]=="string"?this.setTime(+new Date(r[0])):r[0]instanceof Date?this.setTime(+r[0]):(this.setTime(+new Date(...r)),au(this),ps(this)):this.setTime(Date.now())}static tz(r,...t){return t.length?new On(...t,r):new On(Date.now(),r)}withTimeZone(r){return new On(+this,r)}getTimezoneOffset(){return-Xr(this.timeZone,this)}setTime(r){return Date.prototype.setTime.apply(this,arguments),ps(this),+this}[Symbol.for("constructDateFrom")](r){return new On(+new Date(r),this.timeZone)}}const Wi=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!Wi.test(e))return;const r=e.replace(Wi,"$1UTC");On.prototype[r]&&(e.startsWith("get")?On.prototype[e]=function(){return this.internal[r]()}:(On.prototype[e]=function(){return Date.prototype[r].apply(this.internal,arguments),Kv(this),+this},On.prototype[r]=function(){return Date.prototype[r].apply(this,arguments),ps(this),+this}))});function ps(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function Kv(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),au(e)}function au(e){const r=Xr(e.timeZone,e),t=new Date(+e);t.setUTCHours(t.getUTCHours()-1);const n=-new Date(+e).getTimezoneOffset(),a=-new Date(+t).getTimezoneOffset(),s=n-a,i=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();s&&i&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+s);const l=n-r;l&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+l);const o=Xr(e.timeZone,e),u=-new Date(+e).getTimezoneOffset()-o,m=o!==r,c=u-l;if(m&&c){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+c);const k=Xr(e.timeZone,e),y=o-k;y&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+y),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+y))}}class Ue extends On{static tz(r,...t){return t.length?new Ue(...t,r):new Ue(Date.now(),r)}toISOString(){const[r,t,n]=this.tzComponents(),a=`${r}${t}:${n}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[r,t,n,a]=this.internal.toUTCString().split(" ");return`${r?.slice(0,-1)} ${n} ${t} ${a}`}toTimeString(){const r=this.internal.toUTCString().split(" ")[4],[t,n,a]=this.tzComponents();return`${r} GMT${t}${n}${a} (${Gv(this.timeZone,this)})`}toLocaleString(r,t){return Date.prototype.toLocaleString.call(this,r,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(r,t){return Date.prototype.toLocaleDateString.call(this,r,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(r,t){return Date.prototype.toLocaleTimeString.call(this,r,{...t,timeZone:t?.timeZone||this.timeZone})}tzComponents(){const r=this.getTimezoneOffset(),t=r>0?"-":"+",n=String(Math.floor(Math.abs(r)/60)).padStart(2,"0"),a=String(Math.abs(r)%60).padStart(2,"0");return[t,n,a]}withTimeZone(r){return new Ue(+this,r)}[Symbol.for("constructDateFrom")](r){return new Ue(+new Date(r),this.timeZone)}}function Gv(e,r){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(r).slice(12)}var Q;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(Q||(Q={}));var Ae;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(Ae||(Ae={}));var bn;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(bn||(bn={}));var tn;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(tn||(tn={}));const zi=5,Uv=4;function Yv(e,r){const t=r.startOfMonth(e),n=t.getDay()>0?t.getDay():7,a=r.addDays(e,-n+1),s=r.addDays(a,zi*7-1);return r.getMonth(e)===r.getMonth(s)?zi:Uv}function su(e,r){const t=r.startOfMonth(e),n=t.getDay();return n===1?t:n===0?r.addDays(t,-1*6):r.addDays(t,-1*(n-1))}function Hv(e,r){const t=su(e,r),n=Yv(e,r);return r.addDays(t,n*7-1)}class Un{constructor(r,t){this.Date=Date,this.today=()=>this.overrides?.today?this.overrides.today():this.options.timeZone?Ue.tz(this.options.timeZone):new this.Date,this.newDate=(n,a,s)=>this.overrides?.newDate?this.overrides.newDate(n,a,s):this.options.timeZone?new Ue(n,a,s,this.options.timeZone):new Date(n,a,s),this.addDays=(n,a)=>this.overrides?.addDays?this.overrides.addDays(n,a):pt(n,a),this.addMonths=(n,a)=>this.overrides?.addMonths?this.overrides.addMonths(n,a):Vs(n,a),this.addWeeks=(n,a)=>this.overrides?.addWeeks?this.overrides.addWeeks(n,a):gf(n,a),this.addYears=(n,a)=>this.overrides?.addYears?this.overrides.addYears(n,a):Ls(n,a),this.differenceInCalendarDays=(n,a)=>this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(n,a):Wn(n,a),this.differenceInCalendarMonths=(n,a)=>this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(n,a):vf(n,a),this.eachMonthOfInterval=n=>this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(n):No(n),this.endOfBroadcastWeek=n=>this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(n):Hv(n,this),this.endOfISOWeek=n=>this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(n):yf(n),this.endOfMonth=n=>this.overrides?.endOfMonth?this.overrides.endOfMonth(n):To(n),this.endOfWeek=(n,a)=>this.overrides?.endOfWeek?this.overrides.endOfWeek(n,a):Ro(n,this.options),this.endOfYear=n=>this.overrides?.endOfYear?this.overrides.endOfYear(n):Pa(n),this.format=(n,a,s)=>{const i=this.overrides?.format?this.overrides.format(n,a,this.options):mr(n,a,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(i):i},this.getISOWeek=n=>this.overrides?.getISOWeek?this.overrides.getISOWeek(n):Cs(n),this.getMonth=(n,a)=>this.overrides?.getMonth?this.overrides.getMonth(n,this.options):Us(n,this.options),this.getYear=(n,a)=>this.overrides?.getYear?this.overrides.getYear(n,this.options):Ys(n,this.options),this.getWeek=(n,a)=>this.overrides?.getWeek?this.overrides.getWeek(n,this.options):Gs(n,this.options),this.isAfter=(n,a)=>this.overrides?.isAfter?this.overrides.isAfter(n,a):Do(n,a),this.isBefore=(n,a)=>this.overrides?.isBefore?this.overrides.isBefore(n,a):bt(n,a),this.isDate=n=>this.overrides?.isDate?this.overrides.isDate(n):Oo(n),this.isSameDay=(n,a)=>this.overrides?.isSameDay?this.overrides.isSameDay(n,a):Bs(n,a),this.isSameMonth=(n,a)=>this.overrides?.isSameMonth?this.overrides.isSameMonth(n,a):Pk(n,a),this.isSameYear=(n,a)=>this.overrides?.isSameYear?this.overrides.isSameYear(n,a):Vo(n,a),this.max=n=>this.overrides?.max?this.overrides.max(n):cf(n),this.min=n=>this.overrides?.min?this.overrides.min(n):ff(n),this.setMonth=(n,a)=>this.overrides?.setMonth?this.overrides.setMonth(n,a):Lo(n,a),this.setYear=(n,a)=>this.overrides?.setYear?this.overrides.setYear(n,a):Bo(n,a),this.startOfBroadcastWeek=(n,a)=>this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(n,this):su(n,this),this.startOfDay=n=>this.overrides?.startOfDay?this.overrides.startOfDay(n):Cn(n),this.startOfISOWeek=n=>this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(n):ur(n),this.startOfMonth=n=>this.overrides?.startOfMonth?this.overrides.startOfMonth(n):dr(n),this.startOfWeek=(n,a)=>this.overrides?.startOfWeek?this.overrides.startOfWeek(n,this.options):Ln(n,this.options),this.startOfYear=n=>this.overrides?.startOfYear?this.overrides.startOfYear(n):yt(n),this.options={locale:ja,...r},this.overrides=t}getDigitMap(){const{numerals:r="latn"}=this.options,t=new Intl.NumberFormat("en-US",{numberingSystem:r}),n={};for(let a=0;a<10;a++)n[a.toString()]=t.format(a);return n}replaceDigits(r){const t=this.getDigitMap();return r.replace(/\d/g,n=>t[n]||n)}formatNumber(r){return this.replaceDigits(r.toString())}}const Pn=new Un;class iu{constructor(r,t,n=Pn){this.date=r,this.displayMonth=t,this.outside=!!(t&&!n.isSameMonth(r,t)),this.dateLib=n}isEqualTo(r){return this.dateLib.isSameDay(r.date,this.date)&&this.dateLib.isSameMonth(r.displayMonth,this.displayMonth)}}class $v{constructor(r,t){this.date=r,this.weeks=t}}class Wv{constructor(r,t){this.days=t,this.weekNumber=r}}function xn(e,r,t=!1,n=Pn){let{from:a,to:s}=e;const{differenceInCalendarDays:i,isSameDay:l}=n;return a&&s?(i(s,a)<0&&([a,s]=[s,a]),i(r,a)>=(t?1:0)&&i(s,r)>=(t?1:0)):!t&&s?l(s,r):!t&&a?l(a,r):!1}function lu(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function Js(e){return!!(e&&typeof e=="object"&&"from"in e)}function ou(e){return!!(e&&typeof e=="object"&&"after"in e)}function uu(e){return!!(e&&typeof e=="object"&&"before"in e)}function du(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function mu(e,r){return Array.isArray(e)&&e.every(r.isDate)}function mn(e,r,t=Pn){const n=Array.isArray(r)?r:[r],{isSameDay:a,differenceInCalendarDays:s,isAfter:i}=t;return n.some(l=>{if(typeof l=="boolean")return l;if(t.isDate(l))return a(e,l);if(mu(l,t))return l.includes(e);if(Js(l))return xn(l,e,!1,t);if(du(l))return Array.isArray(l.dayOfWeek)?l.dayOfWeek.includes(e.getDay()):l.dayOfWeek===e.getDay();if(lu(l)){const o=s(l.before,e),d=s(l.after,e),u=o>0,m=d<0;return i(l.before,l.after)?m&&u:u||m}return ou(l)?s(e,l.after)>0:uu(l)?s(l.before,e)>0:typeof l=="function"?l(e):!1})}function zv(e,r,t){const{disabled:n,hidden:a,modifiers:s,showOutsideDays:i,broadcastCalendar:l,today:o}=r,{isSameDay:d,isSameMonth:u,startOfMonth:m,isBefore:c,endOfMonth:k,isAfter:y}=t,I=r.startMonth&&m(r.startMonth),p=r.endMonth&&k(r.endMonth),w={[Ae.focused]:[],[Ae.outside]:[],[Ae.disabled]:[],[Ae.hidden]:[],[Ae.today]:[]},h={};for(const b of e){const{date:j,displayMonth:A}=b,T=!!(A&&!u(j,A)),R=!!(I&&c(j,I)),F=!!(p&&y(j,p)),_=!!(n&&mn(j,n,t)),S=!!(a&&mn(j,a,t))||R||F||!l&&!i&&T||l&&i===!1&&T,L=d(j,o??t.today());T&&w.outside.push(b),_&&w.disabled.push(b),S&&w.hidden.push(b),L&&w.today.push(b),s&&Object.keys(s).forEach(q=>{const O=s?.[q];O&&mn(j,O,t)&&(h[q]?h[q].push(b):h[q]=[b])})}return b=>{const j={[Ae.focused]:!1,[Ae.disabled]:!1,[Ae.hidden]:!1,[Ae.outside]:!1,[Ae.today]:!1},A={};for(const T in w){const R=w[T];j[T]=R.some(F=>F===b)}for(const T in h)A[T]=h[T].some(R=>R===b);return{...j,...A}}}function Jv(e,r,t={}){return Object.entries(e).filter(([,a])=>a===!0).reduce((a,[s])=>(t[s]?a.push(t[s]):r[Ae[s]]?a.push(r[Ae[s]]):r[bn[s]]&&a.push(r[bn[s]]),a),[r[Q.Day]])}function Xv(e){return v.createElement("button",{...e})}function Qv(e){return v.createElement("span",{...e})}function Zv(e){const{size:r=24,orientation:t="left",className:n}=e;return v.createElement("svg",{className:n,width:r,height:r,viewBox:"0 0 24 24"},t==="up"&&v.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),t==="down"&&v.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),t==="left"&&v.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),t==="right"&&v.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function ep(e){const{day:r,modifiers:t,...n}=e;return v.createElement("td",{...n})}function np(e){const{day:r,modifiers:t,...n}=e,a=v.useRef(null);return v.useEffect(()=>{t.focused&&a.current?.focus()},[t.focused]),v.createElement("button",{ref:a,...n})}function rp(e){const{options:r,className:t,components:n,classNames:a,...s}=e,i=[a[Q.Dropdown],t].join(" "),l=r?.find(({value:o})=>o===s.value);return v.createElement("span",{"data-disabled":s.disabled,className:a[Q.DropdownRoot]},v.createElement(n.Select,{className:i,...s},r?.map(({value:o,label:d,disabled:u})=>v.createElement(n.Option,{key:o,value:o,disabled:u},d))),v.createElement("span",{className:a[Q.CaptionLabel],"aria-hidden":!0},l?.label,v.createElement(n.Chevron,{orientation:"down",size:18,className:a[Q.Chevron]})))}function tp(e){return v.createElement("div",{...e})}function ap(e){return v.createElement("div",{...e})}function sp(e){const{calendarMonth:r,displayIndex:t,...n}=e;return v.createElement("div",{...n},e.children)}function ip(e){const{calendarMonth:r,displayIndex:t,...n}=e;return v.createElement("div",{...n})}function lp(e){return v.createElement("table",{...e})}function op(e){return v.createElement("div",{...e})}const gu=g.createContext(void 0);function fr(){const e=g.useContext(gu);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function up(e){const{components:r}=fr();return v.createElement(r.Dropdown,{...e})}function dp(e){const{onPreviousClick:r,onNextClick:t,previousMonth:n,nextMonth:a,...s}=e,{components:i,classNames:l,labels:{labelPrevious:o,labelNext:d}}=fr(),u=g.useCallback(c=>{a&&t?.(c)},[a,t]),m=g.useCallback(c=>{n&&r?.(c)},[n,r]);return v.createElement("nav",{...s},v.createElement(i.PreviousMonthButton,{type:"button",className:l[Q.PreviousMonthButton],tabIndex:n?void 0:-1,"aria-disabled":n?void 0:!0,"aria-label":o(n),onClick:m},v.createElement(i.Chevron,{disabled:n?void 0:!0,className:l[Q.Chevron],orientation:"left"})),v.createElement(i.NextMonthButton,{type:"button",className:l[Q.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":d(a),onClick:u},v.createElement(i.Chevron,{disabled:a?void 0:!0,orientation:"right",className:l[Q.Chevron]})))}function mp(e){const{components:r}=fr();return v.createElement(r.Button,{...e})}function gp(e){return v.createElement("option",{...e})}function cp(e){const{components:r}=fr();return v.createElement(r.Button,{...e})}function fp(e){const{rootRef:r,...t}=e;return v.createElement("div",{...t,ref:r})}function kp(e){return v.createElement("select",{...e})}function vp(e){const{week:r,...t}=e;return v.createElement("tr",{...t})}function pp(e){return v.createElement("th",{...e})}function yp(e){return v.createElement("thead",{"aria-hidden":!0},v.createElement("tr",{...e}))}function bp(e){const{week:r,...t}=e;return v.createElement("th",{...t})}function hp(e){return v.createElement("th",{...e})}function Ip(e){return v.createElement("tbody",{...e})}function wp(e){const{components:r}=fr();return v.createElement(r.Dropdown,{...e})}const Ap=Object.freeze(Object.defineProperty({__proto__:null,Button:Xv,CaptionLabel:Qv,Chevron:Zv,Day:ep,DayButton:np,Dropdown:rp,DropdownNav:tp,Footer:ap,Month:sp,MonthCaption:ip,MonthGrid:lp,Months:op,MonthsDropdown:up,Nav:dp,NextMonthButton:mp,Option:gp,PreviousMonthButton:cp,Root:fp,Select:kp,Week:vp,WeekNumber:bp,WeekNumberHeader:hp,Weekday:pp,Weekdays:yp,Weeks:Ip,YearsDropdown:wp},Symbol.toStringTag,{value:"Module"}));function jp(e){return{...Ap,...e}}function Ep(e){const r={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([t,n])=>{t.startsWith("data-")&&(r[t]=n)}),r}function Op(){const e={};for(const r in Q)e[Q[r]]=`rdp-${Q[r]}`;for(const r in Ae)e[Ae[r]]=`rdp-${Ae[r]}`;for(const r in bn)e[bn[r]]=`rdp-${bn[r]}`;for(const r in tn)e[tn[r]]=`rdp-${tn[r]}`;return e}function cu(e,r,t){return(t??new Un(r)).format(e,"LLLL y")}const Tp=cu;function Np(e,r,t){return(t??new Un(r)).format(e,"d")}function Rp(e,r=Pn){return r.format(e,"LLLL")}function Pp(e,r=Pn){return e<10?r.formatNumber(`0${e.toLocaleString()}`):r.formatNumber(`${e.toLocaleString()}`)}function _p(){return""}function qp(e,r,t){return(t??new Un(r)).format(e,"cccccc")}function fu(e,r=Pn){return r.format(e,"yyyy")}const Dp=fu,Mp=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:cu,formatDay:Np,formatMonthCaption:Tp,formatMonthDropdown:Rp,formatWeekNumber:Pp,formatWeekNumberHeader:_p,formatWeekdayName:qp,formatYearCaption:Dp,formatYearDropdown:fu},Symbol.toStringTag,{value:"Module"}));function Sp(e){return e?.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e?.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...Mp,...e}}function xp(e,r,t,n,a){const{startOfMonth:s,startOfYear:i,endOfYear:l,eachMonthOfInterval:o,getMonth:d}=a;return o({start:i(e),end:l(e)}).map(c=>{const k=n.formatMonthDropdown(c,a),y=d(c),I=r&&c<s(r)||t&&c>s(t)||!1;return{value:y,label:k,disabled:I}})}function Fp(e,r={},t={}){let n={...r?.[Q.Day]};return Object.entries(e).filter(([,a])=>a===!0).forEach(([a])=>{n={...n,...t?.[a]}}),n}function Vp(e,r,t){const n=e.today(),a=r?e.startOfISOWeek(n):e.startOfWeek(n),s=[];for(let i=0;i<7;i++){const l=e.addDays(a,i);s.push(l)}return s}function Lp(e,r,t,n){if(!e||!r)return;const{startOfYear:a,endOfYear:s,addYears:i,getYear:l,isBefore:o,isSameYear:d}=n,u=a(e),m=s(r),c=[];let k=u;for(;o(k,m)||d(k,m);)c.push(k),k=i(k,1);return c.map(y=>{const I=t.formatYearDropdown(y,n);return{value:l(y),label:I,disabled:!1}})}function ku(e,r,t){return(t??new Un(r)).format(e,"LLLL y")}const Bp=ku;function Cp(e,r,t,n){let a=(n??new Un(t)).format(e,"PPPP");return r?.today&&(a=`Today, ${a}`),a}function vu(e,r,t,n){let a=(n??new Un(t)).format(e,"PPPP");return r.today&&(a=`Today, ${a}`),r.selected&&(a=`${a}, selected`),a}const Kp=vu;function Gp(){return""}function Up(e){return"Choose the Month"}function Yp(e){return"Go to the Next Month"}function Hp(e){return"Go to the Previous Month"}function $p(e,r,t){return(t??new Un(r)).format(e,"cccc")}function Wp(e,r){return`Week ${e}`}function zp(e){return"Week Number"}function Jp(e){return"Choose the Year"}const Xp=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:Bp,labelDay:Kp,labelDayButton:vu,labelGrid:ku,labelGridcell:Cp,labelMonthDropdown:Up,labelNav:Gp,labelNext:Yp,labelPrevious:Hp,labelWeekNumber:Wp,labelWeekNumberHeader:zp,labelWeekday:$p,labelYearDropdown:Jp},Symbol.toStringTag,{value:"Module"})),ht=e=>e instanceof HTMLElement?e:null,ns=e=>[...e.querySelectorAll("[data-animated-month]")??[]],Qp=e=>ht(e.querySelector("[data-animated-month]")),rs=e=>ht(e.querySelector("[data-animated-caption]")),ts=e=>ht(e.querySelector("[data-animated-weeks]")),Zp=e=>ht(e.querySelector("[data-animated-nav]")),ey=e=>ht(e.querySelector("[data-animated-weekdays]"));function ny(e,r,{classNames:t,months:n,focused:a,dateLib:s}){const i=g.useRef(null),l=g.useRef(n),o=g.useRef(!1);g.useLayoutEffect(()=>{const d=l.current;if(l.current=n,!r||!e.current||!(e.current instanceof HTMLElement)||n.length===0||d.length===0||n.length!==d.length)return;const u=s.isSameMonth(n[0].date,d[0].date),m=s.isAfter(n[0].date,d[0].date),c=m?t[tn.caption_after_enter]:t[tn.caption_before_enter],k=m?t[tn.weeks_after_enter]:t[tn.weeks_before_enter],y=i.current,I=e.current.cloneNode(!0);if(I instanceof HTMLElement?(ns(I).forEach(b=>{if(!(b instanceof HTMLElement))return;const j=Qp(b);j&&b.contains(j)&&b.removeChild(j);const A=rs(b);A&&A.classList.remove(c);const T=ts(b);T&&T.classList.remove(k)}),i.current=I):i.current=null,o.current||u||a)return;const p=y instanceof HTMLElement?ns(y):[],w=ns(e.current);if(w&&w.every(h=>h instanceof HTMLElement)&&p&&p.every(h=>h instanceof HTMLElement)){o.current=!0,e.current.style.isolation="isolate";const h=Zp(e.current);h&&(h.style.zIndex="1"),w.forEach((b,j)=>{const A=p[j];if(!A)return;b.style.position="relative",b.style.overflow="hidden";const T=rs(b);T&&T.classList.add(c);const R=ts(b);R&&R.classList.add(k);const F=()=>{o.current=!1,e.current&&(e.current.style.isolation=""),h&&(h.style.zIndex=""),T&&T.classList.remove(c),R&&R.classList.remove(k),b.style.position="",b.style.overflow="",b.contains(A)&&b.removeChild(A)};A.style.pointerEvents="none",A.style.position="absolute",A.style.overflow="hidden",A.setAttribute("aria-hidden","true");const _=ey(A);_&&(_.style.opacity="0");const S=rs(A);S&&(S.classList.add(m?t[tn.caption_before_exit]:t[tn.caption_after_exit]),S.addEventListener("animationend",F));const L=ts(A);L&&L.classList.add(m?t[tn.weeks_before_exit]:t[tn.weeks_after_exit]),b.insertBefore(A,b.firstChild)})}})}function ry(e,r,t,n){const a=e[0],s=e[e.length-1],{ISOWeek:i,fixedWeeks:l,broadcastCalendar:o}=t??{},{addDays:d,differenceInCalendarDays:u,differenceInCalendarMonths:m,endOfBroadcastWeek:c,endOfISOWeek:k,endOfMonth:y,endOfWeek:I,isAfter:p,startOfBroadcastWeek:w,startOfISOWeek:h,startOfWeek:b}=n,j=o?w(a,n):i?h(a):b(a),A=o?c(s):i?k(y(s)):I(y(s)),T=u(A,j),R=m(s,a)+1,F=[];for(let L=0;L<=T;L++){const q=d(j,L);if(r&&p(q,r))break;F.push(q)}const S=(o?35:42)*R;if(l&&F.length<S){const L=S-F.length;for(let q=0;q<L;q++){const O=d(F[F.length-1],1);F.push(O)}}return F}function ty(e){const r=[];return e.reduce((t,n)=>{const a=n.weeks.reduce((s,i)=>[...s,...i.days],r);return[...t,...a]},r)}function ay(e,r,t,n){const{numberOfMonths:a=1}=t,s=[];for(let i=0;i<a;i++){const l=n.addMonths(e,i);if(r&&l>r)break;s.push(l)}return s}function Ji(e,r){const{month:t,defaultMonth:n,today:a=r.today(),numberOfMonths:s=1,endMonth:i,startMonth:l}=e;let o=t||n||a;const{differenceInCalendarMonths:d,addMonths:u,startOfMonth:m}=r;if(i&&d(i,o)<0){const c=-1*(s-1);o=u(i,c)}return l&&d(o,l)<0&&(o=l),m(o)}function sy(e,r,t,n){const{addDays:a,endOfBroadcastWeek:s,endOfISOWeek:i,endOfMonth:l,endOfWeek:o,getISOWeek:d,getWeek:u,startOfBroadcastWeek:m,startOfISOWeek:c,startOfWeek:k}=n,y=e.reduce((I,p)=>{const w=t.broadcastCalendar?m(p,n):t.ISOWeek?c(p):k(p),h=t.broadcastCalendar?s(p):t.ISOWeek?i(l(p)):o(l(p)),b=r.filter(R=>R>=w&&R<=h),j=t.broadcastCalendar?35:42;if(t.fixedWeeks&&b.length<j){const R=r.filter(F=>{const _=j-b.length;return F>h&&F<=a(h,_)});b.push(...R)}const A=b.reduce((R,F)=>{const _=t.ISOWeek?d(F):u(F),S=R.find(q=>q.weekNumber===_),L=new iu(F,p,n);return S?S.days.push(L):R.push(new Wv(_,[L])),R},[]),T=new $v(p,A);return I.push(T),I},[]);return t.reverseMonths?y.reverse():y}function iy(e,r){let{startMonth:t,endMonth:n}=e;const{startOfYear:a,startOfDay:s,startOfMonth:i,endOfMonth:l,addYears:o,endOfYear:d,newDate:u,today:m}=r,{fromYear:c,toYear:k,fromMonth:y,toMonth:I}=e;!t&&y&&(t=y),!t&&c&&(t=r.newDate(c,0,1)),!n&&I&&(n=I),!n&&k&&(n=u(k,11,31));const p=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return t?t=i(t):c?t=u(c,0,1):!t&&p&&(t=a(o(e.today??m(),-100))),n?n=l(n):k?n=u(k,11,31):!n&&p&&(n=d(e.today??m())),[t&&s(t),n&&s(n)]}function ly(e,r,t,n){if(t.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:s=1}=t,{startOfMonth:i,addMonths:l,differenceInCalendarMonths:o}=n,d=a?s:1,u=i(e);if(!r)return l(u,d);if(!(o(r,e)<s))return l(u,d)}function oy(e,r,t,n){if(t.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:s}=t,{startOfMonth:i,addMonths:l,differenceInCalendarMonths:o}=n,d=a?s??1:1,u=i(e);if(!r)return l(u,-d);if(!(o(u,r)<=0))return l(u,-d)}function uy(e){const r=[];return e.reduce((t,n)=>[...t,...n.weeks],r)}function Ma(e,r){const[t,n]=g.useState(e);return[r===void 0?t:r,n]}function dy(e,r){const[t,n]=iy(e,r),{startOfMonth:a,endOfMonth:s}=r,i=Ji(e,r),[l,o]=Ma(i,e.month?i:void 0);g.useEffect(()=>{const T=Ji(e,r);o(T)},[e.timeZone]);const d=ay(l,n,e,r),u=ry(d,e.endMonth?s(e.endMonth):void 0,e,r),m=sy(d,u,e,r),c=uy(m),k=ty(m),y=oy(l,t,e,r),I=ly(l,n,e,r),{disableNavigation:p,onMonthChange:w}=e,h=T=>c.some(R=>R.days.some(F=>F.isEqualTo(T))),b=T=>{if(p)return;let R=a(T);t&&R<a(t)&&(R=a(t)),n&&R>a(n)&&(R=a(n)),o(R),w?.(R)};return{months:m,weeks:c,days:k,navStart:t,navEnd:n,previousMonth:y,nextMonth:I,goToMonth:b,goToDay:T=>{h(T)||b(T.date)}}}var An;(function(e){e[e.Today=0]="Today",e[e.Selected=1]="Selected",e[e.LastFocused=2]="LastFocused",e[e.FocusedModifier=3]="FocusedModifier"})(An||(An={}));function Xi(e){return!e[Ae.disabled]&&!e[Ae.hidden]&&!e[Ae.outside]}function my(e,r,t,n){let a,s=-1;for(const i of e){const l=r(i);Xi(l)&&(l[Ae.focused]&&s<An.FocusedModifier?(a=i,s=An.FocusedModifier):n?.isEqualTo(i)&&s<An.LastFocused?(a=i,s=An.LastFocused):t(i.date)&&s<An.Selected?(a=i,s=An.Selected):l[Ae.today]&&s<An.Today&&(a=i,s=An.Today))}return a||(a=e.find(i=>Xi(r(i)))),a}function gy(e,r,t,n,a,s,i){const{ISOWeek:l,broadcastCalendar:o}=s,{addDays:d,addMonths:u,addWeeks:m,addYears:c,endOfBroadcastWeek:k,endOfISOWeek:y,endOfWeek:I,max:p,min:w,startOfBroadcastWeek:h,startOfISOWeek:b,startOfWeek:j}=i;let T={day:d,week:m,month:u,year:c,startOfWeek:R=>o?h(R,i):l?b(R):j(R),endOfWeek:R=>o?k(R):l?y(R):I(R)}[e](t,r==="after"?1:-1);return r==="before"&&n?T=p([n,T]):r==="after"&&a&&(T=w([a,T])),T}function pu(e,r,t,n,a,s,i,l=0){if(l>365)return;const o=gy(e,r,t.date,n,a,s,i),d=!!(s.disabled&&mn(o,s.disabled,i)),u=!!(s.hidden&&mn(o,s.hidden,i)),m=o,c=new iu(o,m,i);return!d&&!u?c:pu(e,r,c,n,a,s,i,l+1)}function cy(e,r,t,n,a){const{autoFocus:s}=e,[i,l]=g.useState(),o=my(r.days,t,n||(()=>!1),i),[d,u]=g.useState(s?o:void 0);return{isFocusTarget:I=>!!o?.isEqualTo(I),setFocused:u,focused:d,blur:()=>{l(d),u(void 0)},moveFocus:(I,p)=>{if(!d)return;const w=pu(I,p,d,r.navStart,r.navEnd,e,a);w&&(r.goToDay(w),u(w))}}}function fy(e,r){const{selected:t,required:n,onSelect:a}=e,[s,i]=Ma(t,a?t:void 0),l=a?t:s,{isSameDay:o}=r,d=k=>l?.some(y=>o(y,k))??!1,{min:u,max:m}=e;return{selected:l,select:(k,y,I)=>{let p=[...l??[]];if(d(k)){if(l?.length===u||n&&l?.length===1)return;p=l?.filter(w=>!o(w,k))}else l?.length===m?p=[k]:p=[...p,k];return a||i(p),a?.(p,k,y,I),p},isSelected:d}}function ky(e,r,t=0,n=0,a=!1,s=Pn){const{from:i,to:l}=r||{},{isSameDay:o,isAfter:d,isBefore:u}=s;let m;if(!i&&!l)m={from:e,to:t>0?void 0:e};else if(i&&!l)o(i,e)?a?m={from:i,to:void 0}:m=void 0:u(e,i)?m={from:e,to:i}:m={from:i,to:e};else if(i&&l)if(o(i,e)&&o(l,e))a?m={from:i,to:l}:m=void 0;else if(o(i,e))m={from:i,to:t>0?void 0:e};else if(o(l,e))m={from:e,to:t>0?void 0:e};else if(u(e,i))m={from:e,to:l};else if(d(e,i))m={from:i,to:e};else if(d(e,l))m={from:i,to:e};else throw new Error("Invalid range");if(m?.from&&m?.to){const c=s.differenceInCalendarDays(m.to,m.from);n>0&&c>n?m={from:e,to:void 0}:t>1&&c<t&&(m={from:e,to:void 0})}return m}function vy(e,r,t=Pn){const n=Array.isArray(r)?r:[r];let a=e.from;const s=t.differenceInCalendarDays(e.to,e.from),i=Math.min(s,6);for(let l=0;l<=i;l++){if(n.includes(a.getDay()))return!0;a=t.addDays(a,1)}return!1}function Qi(e,r,t=Pn){return xn(e,r.from,!1,t)||xn(e,r.to,!1,t)||xn(r,e.from,!1,t)||xn(r,e.to,!1,t)}function py(e,r,t=Pn){const n=Array.isArray(r)?r:[r];if(n.filter(l=>typeof l!="function").some(l=>typeof l=="boolean"?l:t.isDate(l)?xn(e,l,!1,t):mu(l,t)?l.some(o=>xn(e,o,!1,t)):Js(l)?l.from&&l.to?Qi(e,{from:l.from,to:l.to},t):!1:du(l)?vy(e,l.dayOfWeek,t):lu(l)?t.isAfter(l.before,l.after)?Qi(e,{from:t.addDays(l.after,1),to:t.addDays(l.before,-1)},t):mn(e.from,l,t)||mn(e.to,l,t):ou(l)||uu(l)?mn(e.from,l,t)||mn(e.to,l,t):!1))return!0;const i=n.filter(l=>typeof l=="function");if(i.length){let l=e.from;const o=t.differenceInCalendarDays(e.to,e.from);for(let d=0;d<=o;d++){if(i.some(u=>u(l)))return!0;l=t.addDays(l,1)}}return!1}function yy(e,r){const{disabled:t,excludeDisabled:n,selected:a,required:s,onSelect:i}=e,[l,o]=Ma(a,i?a:void 0),d=i?a:l;return{selected:d,select:(c,k,y)=>{const{min:I,max:p}=e,w=c?ky(c,d,I,p,s,r):void 0;return n&&t&&w?.from&&w.to&&py({from:w.from,to:w.to},t,r)&&(w.from=c,w.to=void 0),i||o(w),i?.(w,c,k,y),w},isSelected:c=>d&&xn(d,c,!1,r)}}function by(e,r){const{selected:t,required:n,onSelect:a}=e,[s,i]=Ma(t,a?t:void 0),l=a?t:s,{isSameDay:o}=r;return{selected:l,select:(m,c,k)=>{let y=m;return!n&&l&&l&&o(m,l)&&(y=void 0),a||i(y),a?.(y,m,c,k),y},isSelected:m=>l?o(l,m):!1}}function hy(e,r){const t=by(e,r),n=fy(e,r),a=yy(e,r);switch(e.mode){case"single":return t;case"multiple":return n;case"range":return a;default:return}}function Iy(e){let r=e;r.timeZone&&(r={...e},r.today&&(r.today=new Ue(r.today,r.timeZone)),r.month&&(r.month=new Ue(r.month,r.timeZone)),r.defaultMonth&&(r.defaultMonth=new Ue(r.defaultMonth,r.timeZone)),r.startMonth&&(r.startMonth=new Ue(r.startMonth,r.timeZone)),r.endMonth&&(r.endMonth=new Ue(r.endMonth,r.timeZone)),r.mode==="single"&&r.selected?r.selected=new Ue(r.selected,r.timeZone):r.mode==="multiple"&&r.selected?r.selected=r.selected?.map(se=>new Ue(se,r.timeZone)):r.mode==="range"&&r.selected&&(r.selected={from:r.selected.from?new Ue(r.selected.from,r.timeZone):void 0,to:r.selected.to?new Ue(r.selected.to,r.timeZone):void 0}));const{components:t,formatters:n,labels:a,dateLib:s,locale:i,classNames:l}=g.useMemo(()=>{const se={...ja,...r.locale};return{dateLib:new Un({locale:se,weekStartsOn:r.broadcastCalendar?1:r.weekStartsOn,firstWeekContainsDate:r.firstWeekContainsDate,useAdditionalWeekYearTokens:r.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:r.useAdditionalDayOfYearTokens,timeZone:r.timeZone,numerals:r.numerals},r.dateLib),components:jp(r.components),formatters:Sp(r.formatters),labels:{...Xp,...r.labels},locale:se,classNames:{...Op(),...r.classNames}}},[r.locale,r.broadcastCalendar,r.weekStartsOn,r.firstWeekContainsDate,r.useAdditionalWeekYearTokens,r.useAdditionalDayOfYearTokens,r.timeZone,r.numerals,r.dateLib,r.components,r.formatters,r.labels,r.classNames]),{captionLayout:o,mode:d,navLayout:u,numberOfMonths:m=1,onDayBlur:c,onDayClick:k,onDayFocus:y,onDayKeyDown:I,onDayMouseEnter:p,onDayMouseLeave:w,onNextClick:h,onPrevClick:b,showWeekNumber:j,styles:A}=r,{formatCaption:T,formatDay:R,formatMonthDropdown:F,formatWeekNumber:_,formatWeekNumberHeader:S,formatWeekdayName:L,formatYearDropdown:q}=n,O=dy(r,s),{days:P,months:M,navStart:B,navEnd:C,previousMonth:V,nextMonth:x,goToMonth:H}=O,J=zv(P,r,s),{isSelected:z,select:ae,selected:xe}=hy(r,s)??{},{blur:Z,focused:U,isFocusTarget:re,moveFocus:te,setFocused:de}=cy(r,O,J,z??(()=>!1),s),{labelDayButton:Le,labelGridcell:Be,labelGrid:Ce,labelMonthDropdown:_n,labelNav:ln,labelPrevious:fn,labelNext:Zn,labelWeekday:er,labelWeekNumber:kr,labelWeekNumberHeader:Yn,labelYearDropdown:E}=a,N=g.useMemo(()=>Vp(s,r.ISOWeek),[s,r.ISOWeek]),D=d!==void 0||k!==void 0,$=g.useCallback(()=>{V&&(H(V),b?.(V))},[V,H,b]),G=g.useCallback(()=>{x&&(H(x),h?.(x))},[H,x,h]),K=g.useCallback((se,we)=>ye=>{ye.preventDefault(),ye.stopPropagation(),de(se),ae?.(se.date,we,ye),k?.(se.date,we,ye)},[ae,k,de]),X=g.useCallback((se,we)=>ye=>{de(se),y?.(se.date,we,ye)},[y,de]),oe=g.useCallback((se,we)=>ye=>{Z(),c?.(se.date,we,ye)},[Z,c]),ke=g.useCallback((se,we)=>ye=>{const Hn={ArrowLeft:["day",r.dir==="rtl"?"after":"before"],ArrowRight:["day",r.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[ye.shiftKey?"year":"month","before"],PageDown:[ye.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(Hn[ye.key]){ye.preventDefault(),ye.stopPropagation();const[kn,Ot]=Hn[ye.key];te(kn,Ot)}I?.(se.date,we,ye)},[te,I,r.dir]),Qe=g.useCallback((se,we)=>ye=>{p?.(se.date,we,ye)},[p]),vr=g.useCallback((se,we)=>ye=>{w?.(se.date,we,ye)},[w]),In=g.useCallback(se=>we=>{const ye=Number(we.target.value),Hn=s.setMonth(s.startOfMonth(se),ye);H(Hn)},[s,H]),La=g.useCallback(se=>we=>{const ye=Number(we.target.value),Hn=s.setYear(s.startOfMonth(se),ye);H(Hn)},[s,H]),{className:Br,style:Cr}=g.useMemo(()=>({className:[l[Q.Root],r.className].filter(Boolean).join(" "),style:{...A?.[Q.Root],...r.style}}),[l,r.className,r.style,A]),Ba=Ep(r),Kr=g.useRef(null);ny(Kr,!!r.animate,{classNames:l,months:M,focused:U,dateLib:s});const Ca={dayPickerProps:r,selected:xe,select:ae,isSelected:z,months:M,nextMonth:x,previousMonth:V,goToMonth:H,getModifiers:J,components:t,classNames:l,styles:A,labels:a,formatters:n};return v.createElement(gu.Provider,{value:Ca},v.createElement(t.Root,{rootRef:r.animate?Kr:void 0,className:Br,style:Cr,dir:r.dir,id:r.id,lang:r.lang,nonce:r.nonce,title:r.title,role:r.role,"aria-label":r["aria-label"],...Ba},v.createElement(t.Months,{className:l[Q.Months],style:A?.[Q.Months]},!r.hideNavigation&&!u&&v.createElement(t.Nav,{"data-animated-nav":r.animate?"true":void 0,className:l[Q.Nav],style:A?.[Q.Nav],"aria-label":ln(),onPreviousClick:$,onNextClick:G,previousMonth:V,nextMonth:x}),M.map((se,we)=>{const ye=xp(se.date,B,C,n,s),Hn=Lp(B,C,n,s);return v.createElement(t.Month,{"data-animated-month":r.animate?"true":void 0,className:l[Q.Month],style:A?.[Q.Month],key:we,displayIndex:we,calendarMonth:se},u==="around"&&!r.hideNavigation&&we===0&&v.createElement(t.PreviousMonthButton,{type:"button",className:l[Q.PreviousMonthButton],tabIndex:V?void 0:-1,"aria-disabled":V?void 0:!0,"aria-label":fn(V),onClick:$,"data-animated-button":r.animate?"true":void 0},v.createElement(t.Chevron,{disabled:V?void 0:!0,className:l[Q.Chevron],orientation:r.dir==="rtl"?"right":"left"})),v.createElement(t.MonthCaption,{"data-animated-caption":r.animate?"true":void 0,className:l[Q.MonthCaption],style:A?.[Q.MonthCaption],calendarMonth:se,displayIndex:we},o?.startsWith("dropdown")?v.createElement(t.DropdownNav,{className:l[Q.Dropdowns],style:A?.[Q.Dropdowns]},o==="dropdown"||o==="dropdown-months"?v.createElement(t.MonthsDropdown,{className:l[Q.MonthsDropdown],"aria-label":_n(),classNames:l,components:t,disabled:!!r.disableNavigation,onChange:In(se.date),options:ye,style:A?.[Q.Dropdown],value:s.getMonth(se.date)}):v.createElement("span",null,F(se.date,s)),o==="dropdown"||o==="dropdown-years"?v.createElement(t.YearsDropdown,{className:l[Q.YearsDropdown],"aria-label":E(s.options),classNames:l,components:t,disabled:!!r.disableNavigation,onChange:La(se.date),options:Hn,style:A?.[Q.Dropdown],value:s.getYear(se.date)}):v.createElement("span",null,q(se.date,s)),v.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},T(se.date,s.options,s))):v.createElement(t.CaptionLabel,{className:l[Q.CaptionLabel],role:"status","aria-live":"polite"},T(se.date,s.options,s))),u==="around"&&!r.hideNavigation&&we===m-1&&v.createElement(t.NextMonthButton,{type:"button",className:l[Q.NextMonthButton],tabIndex:x?void 0:-1,"aria-disabled":x?void 0:!0,"aria-label":Zn(x),onClick:G,"data-animated-button":r.animate?"true":void 0},v.createElement(t.Chevron,{disabled:x?void 0:!0,className:l[Q.Chevron],orientation:r.dir==="rtl"?"left":"right"})),we===m-1&&u==="after"&&!r.hideNavigation&&v.createElement(t.Nav,{"data-animated-nav":r.animate?"true":void 0,className:l[Q.Nav],style:A?.[Q.Nav],"aria-label":ln(),onPreviousClick:$,onNextClick:G,previousMonth:V,nextMonth:x}),v.createElement(t.MonthGrid,{role:"grid","aria-multiselectable":d==="multiple"||d==="range","aria-label":Ce(se.date,s.options,s)||void 0,className:l[Q.MonthGrid],style:A?.[Q.MonthGrid]},!r.hideWeekdays&&v.createElement(t.Weekdays,{"data-animated-weekdays":r.animate?"true":void 0,className:l[Q.Weekdays],style:A?.[Q.Weekdays]},j&&v.createElement(t.WeekNumberHeader,{"aria-label":Yn(s.options),className:l[Q.WeekNumberHeader],style:A?.[Q.WeekNumberHeader],scope:"col"},S()),N.map((kn,Ot)=>v.createElement(t.Weekday,{"aria-label":er(kn,s.options,s),className:l[Q.Weekday],key:Ot,style:A?.[Q.Weekday],scope:"col"},L(kn,s.options,s)))),v.createElement(t.Weeks,{"data-animated-weeks":r.animate?"true":void 0,className:l[Q.Weeks],style:A?.[Q.Weeks]},se.weeks.map((kn,Ot)=>v.createElement(t.Week,{className:l[Q.Week],key:kn.weekNumber,style:A?.[Q.Week],week:kn},j&&v.createElement(t.WeekNumber,{week:kn,style:A?.[Q.WeekNumber],"aria-label":kr(kn.weekNumber,{locale:i}),className:l[Q.WeekNumber],scope:"row",role:"rowheader"},_(kn.weekNumber,s)),kn.days.map(Ge=>{const{date:wn}=Ge,ge=J(Ge);if(ge[Ae.focused]=!ge.hidden&&!!U?.isEqualTo(Ge),ge[bn.selected]=z?.(wn)||ge.selected,Js(xe)){const{from:Ka,to:Ga}=xe;ge[bn.range_start]=!!(Ka&&Ga&&s.isSameDay(wn,Ka)),ge[bn.range_end]=!!(Ka&&Ga&&s.isSameDay(wn,Ga)),ge[bn.range_middle]=xn(xe,wn,!0,s)}const Zu=Fp(ge,A,r.modifiersStyles),ed=Jv(ge,l,r.modifiersClassNames),nd=!D&&!ge.hidden?Be(wn,ge,s.options,s):void 0;return v.createElement(t.Day,{key:`${s.format(wn,"yyyy-MM-dd")}_${s.format(Ge.displayMonth,"yyyy-MM")}`,day:Ge,modifiers:ge,className:ed.join(" "),style:Zu,role:"gridcell","aria-selected":ge.selected||void 0,"aria-label":nd,"data-day":s.format(wn,"yyyy-MM-dd"),"data-month":Ge.outside?s.format(wn,"yyyy-MM"):void 0,"data-selected":ge.selected||void 0,"data-disabled":ge.disabled||void 0,"data-hidden":ge.hidden||void 0,"data-outside":Ge.outside||void 0,"data-focused":ge.focused||void 0,"data-today":ge.today||void 0},!ge.hidden&&D?v.createElement(t.DayButton,{className:l[Q.DayButton],style:A?.[Q.DayButton],type:"button",day:Ge,modifiers:ge,disabled:ge.disabled||void 0,tabIndex:re(Ge)?0:-1,"aria-label":Le(wn,ge,s.options,s),onClick:K(Ge,ge),onBlur:oe(Ge,ge),onFocus:X(Ge,ge),onKeyDown:ke(Ge,ge),onMouseEnter:Qe(Ge,ge),onMouseLeave:vr(Ge,ge)},R(wn,s.options,s)):!ge.hidden&&R(Ge.date,s.options,s))}))))))})),r.footer&&v.createElement(t.Footer,{className:l[Q.Footer],style:A?.[Q.Footer],role:"status","aria-live":"polite"},r.footer)))}var wy=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const yu=g.forwardRef((e,r)=>{var{as:t="div",className:n,above:a,below:s,variant:i,asChild:l}=e,o=wy(e,["as","className","above","below","variant","asChild"]);const{cn:d}=ee(),u=i==="show"?a:s,m=i==="show"?s:a,c=l?Mr:t;return v.createElement(c,Object.assign({},o,{ref:r,className:d("navds-responsive",n,{[`navds-responsive__above--${u}`]:u,[`navds-responsive__below--${m}`]:m})}))}),Ay=g.forwardRef((e,r)=>v.createElement(yu,Object.assign({},e,{ref:r,variant:"hide"}))),Xs=g.forwardRef((e,r)=>v.createElement(yu,Object.assign({},e,{ref:r,variant:"show"})));function hn(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function jy({day:e,fromDate:r,toDate:t}){const n=t&&Wn(e,Cn(t))>0,a=r&&Wn(Cn(r),e)>0;return n||a||!1}const bu="dd.MM.yyyy",Ey="MMMM yyyy",hu=[bu,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...hu];const as=(e,r,t,n,a)=>{let s;const i=hu;if(a){for(const l of i)if(s=jr(e,l,r,{locale:t}),hn(s)&&!ss(e,r,t,i))return s;for(const l of[...i.map(o=>o.replace("yyyy","yy"))])if(s=jr(e,l,r,{locale:t}),hn(s)&&ss(e,r,t,i)){const o=Oy(e,l,r,t);return hn(new Date(o))?new Date(o):new Date("Invalid date")}return new Date("Invalid date")}for(const l of i)if(s=jr(e,l,r,{locale:t}),hn(s)&&!ss(e,r,t,i))return s;return new Date("Invalid date")};function ss(e,r,t,n){let a;const s=n.map(i=>i.replace("yyyy","yy"));for(const i of s)if(a=jr(e,i,r,{locale:t}),hn(a))return!0;return!1}function Oy(e,r,t,n){const a=jr(Zi(e,"19"),r.replace("yy","yyyy"),t,{locale:n}),s=jr(Zi(e,"20"),r.replace("yy","yyyy"),t,{locale:n});return hn(a)&&hn(s)?bt(a,Dk(new Date,{years:80}))?s:a:new Date("Invalid date")}function Zi(e,r){const t=e.slice(-2);return`${e.slice(0,e.length-2)}${r}${t}`}const Gr=(e,r,t,n)=>mr(e,n??bu,{locale:r}),Ty=({month:e,start:r,end:t})=>{if(!e)return;let n=e;return r&&bt(n,r)&&(n=r),t&&Do(n,t)&&(n=t),dr(n)};function Ny(e,r,t,n){return No({start:yt(e),end:Pa(e)}).map(i=>{const l=mr(i,"LLLL",{locale:n}),o=Us(i),d=r&&i<dr(r)||t&&i>dr(t)||!1;return{value:o,label:l,disabled:d}})}function Ry(e,r,t){if(!e||!r)return;const n=yt(e),a=Pa(r),s=[];let i=n;for(;bt(i,a)||Vo(i,a);)s.push(i),i=Ls(i,1);return s.map(l=>{const o=mr(l,"yyyy",{locale:t});return{value:Ys(l),label:o,disabled:!1}})}function Py({captionLayout:e,startMonth:r,endMonth:t,today:n}){const a=e==="dropdown",s=n??new Date;return r?r=dr(r):!r&&a&&(r=yt(Ls(s,-100))),t?t=To(t):!t&&a&&(t=Pa(s)),[r&&Cn(r),t&&Cn(t)]}var _y=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const qy=e=>{var{day:r,modifiers:t,locale:n,children:a}=e,s=_y(e,["day","modifiers","locale","children"]);const{cn:i}=ee(),l=g.useRef(null);return g.useEffect(()=>{var o;t.focused&&((o=l.current)===null||o===void 0||o.focus())},[t.focused]),t.hidden?v.createElement(v.Fragment,null):v.createElement("button",Object.assign({},s,{ref:l,"aria-hidden":r.outside,"aria-pressed":!!t.selected,"aria-label":mr(r.date,"cccc d",{locale:n}),"data-pressed":t.selected,"data-today":t.today||void 0,className:i(s.className,{"rdp-day_disabled":t.disabled,"rdp-day_selected":t.selected,"rdp-day_range_start":t.range_start,"rdp-day_range_middle":t.range_middle,"rdp-day_range_end":t.range_end,"rdp-day_today":t.today,"rdp-day_outside":t.outside,"rdp-day__weekend":t.weekend})}),a)};var Dy=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ys=g.forwardRef((e,r)=>{const{inputProps:t,errorId:n,showErrorMsg:a,hasError:s,size:i,inputDescriptionId:l,readOnly:o}=Lr(e,"select"),{children:d,label:u,className:m,description:c,htmlSize:k,hideLabel:y=!1,style:I}=e,p=Dy(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:w}=ee(),h={onMouseDown:b=>{o&&(b.preventDefault(),b.target.focus())},onKeyDown:b=>{o&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(b.key)&&b.preventDefault()}};return v.createElement("div",{className:w(m,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!t.disabled,"navds-form-field--readonly":o,"navds-select--error":s,"navds-select--readonly":o})},v.createElement(he,{htmlFor:t.id,size:i,className:w("navds-form-field__label",{"navds-sr-only":y})},o&&v.createElement(Uo,null),u),!!c&&v.createElement(ne,{className:w("navds-form-field__description",{"navds-sr-only":y}),id:l,size:i,as:"div"},c),v.createElement("div",{className:w("navds-select__container"),style:I},v.createElement("select",Object.assign({},nn(p,["error","errorId","size","readOnly"]),t,h,{ref:r,className:w("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:k}),d),v.createElement(mt,{className:w("navds-select__chevron"),"aria-hidden":!0})),v.createElement("div",{className:w("navds-form-field__error"),id:n,"aria-relevant":"additions removals","aria-live":"polite"},a&&v.createElement(ut,{size:i,showIcon:!0},e.error)))}),Iu=({week:{weekNumber:e,days:r},onWeekNumberClick:t,className:n,style:a,showOnDesktop:s})=>{const i=Da().translate,{cn:l}=ee(),{getModifiers:o}=fr(),d=g.useMemo(()=>r.filter(m=>{const c=o(m);return!(c.hidden||c.outside||c.disabled)}).length===0,[r,o]),u=s?Xs:Ay;return!t||d?v.createElement(u,{above:"sm",asChild:!0},v.createElement("td",{className:"rdp-cell"},v.createElement(Nr,{as:"span",textColor:"subtle",className:n,style:a,"aria-label":i("weekNumber",{week:e})},e))):v.createElement(u,{above:"sm",asChild:!0},v.createElement("td",{className:l("rdp-cell",{"navds-date__week-wrapper":!s})},v.createElement(Ne,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":i("selectWeekNumber",{week:e}),style:a,className:l("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{t(e,r.map(m=>m.date))},icon:v.createElement("span",{className:"navds-date__weeknumber-number"},e)})))},My=({onWeekNumberClick:e,weeks:r})=>{const t=Da().translate,{cn:n}=ee(),a=Kn();return e?v.createElement(Xs,{below:"sm",asChild:!0},v.createElement("table",{className:"rdp-table",role:"grid"},v.createElement("tbody",{className:"rdp-tbody"},v.createElement("tr",{className:n("rdp-row navds-date__week-row")},v.createElement(Nr,{as:"th",weight:"semibold",className:n("rdp-cell navds-date__week-cell")},v.createElement("span",{className:n("navds-date__week-wrapper"),id:a},t("week"))),r?.map(s=>v.createElement(Iu,{key:s.weekNumber,week:s,onWeekNumberClick:e,showOnDesktop:!1,className:n("navds-date__week-wrapper")})))))):null};var Sy=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const xy=e=>{var{children:r,calendarMonth:t,locale:n,onWeekNumberClick:a}=e,s=Sy(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:i,goToMonth:l,previousMonth:o,nextMonth:d}=fr(),{captionLayout:u}=i,{cn:m}=ee(),c=Da().translate,k=g.useCallback((b,j)=>{const A=Number(j.target.value),T=Lo(dr(b),A);l(T)},[l]),y=g.useCallback((b,j)=>{const A=Number(j.target.value),T=Bo(dr(b),A);l(T)},[l]),[I,p]=Py({captionLayout:u==="dropdown"?"dropdown":"label",startMonth:i.startMonth,endMonth:i.endMonth,today:i.today}),w=Ny(t.date,I,p,n),h=Ry(I,p,n);return v.createElement("div",Object.assign({},nn(s,["displayIndex"])),v.createElement("div",{className:m("navds-date__caption")},u?.startsWith("dropdown")&&v.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:m("navds-sr-only")},mr(t.date,"LLLL y",{locale:n})),v.createElement(Ne,{variant:"tertiary-neutral",disabled:!o,onClick:()=>o&&l(o),icon:v.createElement(Od,{title:c("goToPreviousMonth")}),className:m("navds-date__caption-button"),type:"button"}),u?.startsWith("dropdown")?v.createElement("div",{className:m("navds-date__caption")},v.createElement(ys,{label:c("month"),hideLabel:!0,className:m("navds-date__caption__month"),onChange:b=>k(t.date,b),value:Us(t.date)},w?.map(({value:b,label:j,disabled:A})=>v.createElement("option",{key:b,value:b,disabled:A},j))),v.createElement(ys,{label:c("year"),hideLabel:!0,className:m("navds-date__caption__year"),onChange:b=>y(t.date,b),value:Ys(t.date)},h?.map(({value:b,label:j,disabled:A})=>v.createElement("option",{key:b,value:b,disabled:A},j)))):v.createElement(ne,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:m("navds-date__caption-label")},mr(t.date,"LLLL y",{locale:n})),v.createElement(Ne,{variant:"tertiary-neutral",icon:v.createElement(Nd,{title:c("goToNextMonth")}),onClick:()=>d&&l(d),disabled:!d,className:m("navds-date__caption-button"),type:"button"})),v.createElement(My,{weeks:t.weeks,onWeekNumberClick:a}),r)};var Fy=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Vy={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},wu=e=>{var{className:r,dropdownCaption:t,disabled:n=[],disableWeekends:a=!1,showWeekNumber:s=!1,selected:i,fixedWeeks:l=!1,onWeekNumberClick:o,fromDate:d,toDate:u,month:m,mode:c,handleSelect:k,locale:y}=e,I=Fy(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:p}=ee(),w=jo(),h=y?$o(y):w,b=c??"single";return v.createElement(Iy,Object.assign({captionLayout:t?"dropdown":"label",hideNavigation:!0,locale:h,mode:b,onSelect:(j,A)=>{if(b!=="range"||j||!tu(i)){k(j);return}if(!i.to){k({from:A,to:void 0});return}let T;Bs(i.to,A)?T=void 0:bt(A,i.to)?T={from:A,to:i.to}:T={from:i.to,to:A},k(T)},selected:i,classNames:Vy,components:{MonthCaption:()=>v.createElement(v.Fragment,null),DayButton:g.useCallback(j=>v.createElement(qy,Object.assign({},j,{locale:h})),[h]),Month:g.useCallback(j=>v.createElement(xy,Object.assign({},j,{locale:h,onWeekNumberClick:b==="multiple"?o:void 0})),[h,b,o]),Day:g.useCallback(j=>v.createElement("td",Object.assign({},nn(j,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:g.useCallback(j=>v.createElement(Iu,Object.assign({},j,{showOnDesktop:!0,onWeekNumberClick:b==="multiple"?o:void 0})),[b,o]),WeekNumberHeader:g.useCallback(j=>v.createElement(Xs,{above:"sm",asChild:!0},v.createElement("th",Object.assign({},j))),[]),Weekdays:g.useCallback(j=>v.createElement("thead",Object.assign({},j,{className:"rdp-head","aria-hidden":!0}),v.createElement("tr",{className:"rdp-head_row"},j.children)),[])},className:p("navds-date",r),disabled:j=>a&&ga(j)||mn(j,n)||jy({day:j,fromDate:d,toDate:u}),weekStartsOn:1,modifiers:{weekend:j=>a&&ga(j)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:s,fixedWeeks:l,showOutsideDays:!0,startMonth:d,endMonth:u,month:Ty({month:m,start:d,end:u})},nn(I,["onSelect","role","id","defaultSelected"])))};var Ly=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const By=g.forwardRef((e,r)=>{var{className:t,locale:n,translations:a,selected:s,defaultSelected:i,onSelect:l,mode:o}=e,d=Ly(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:u}=ee(),m=Gn("DatePicker",a,Wo(n)),[c,k]=Pr({defaultValue:i,value:s,onChange:y=>l?.(y)});return v.createElement(zo,{translate:m},v.createElement("div",{ref:r,className:u("navds-date__standalone-wrapper",t)},v.createElement(wu,Object.assign({},d,{locale:n,handleSelect:k,selected:c,mode:o}))))});var Cy=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const pa=g.forwardRef((e,r)=>{var{children:t,locale:n,translations:a,selected:s,id:i,defaultSelected:l,wrapperClassName:o,open:d,onClose:u,onOpenToggle:m,strategy:c,mode:k}=e,y=Cy(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const I=Gn("DatePicker",a,Wo(n)),{cn:p}=ee(),w=Kn(i),[h,b]=Pr({defaultValue:!1,value:d}),[j,A]=g.useState(null),T=Sr(A,r),[R,F]=Pr({defaultValue:l,value:s,onChange:_=>{var S;let L=!1;k==="single"&&_?L=!0:tu(_)&&_.from&&_.to&&(L=!0,Bs(_.from,_.to)&&(L=!1)),L&&(u?.(),b(!1)),(S=y?.onSelect)===null||S===void 0||S.call(y,_)}});return v.createElement(zo,{translate:I},v.createElement(bv,{open:h,onOpen:()=>{b(_=>!_),m?.()},ariaId:w,defined:!0},v.createElement("div",{ref:T,className:p("navds-date__wrapper",o)},t,v.createElement(Lv,{open:h,anchor:j,onClose:()=>{u?.(),h&&b(!1)},locale:n,translate:I,variant:k??"single",popoverProps:{id:w,strategy:c}},v.createElement(wu,Object.assign({},y,{locale:n,handleSelect:F,selected:R,mode:k}))))))});pa.Standalone=By;pa.Input=hv;const Ky=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),Gy=(e={})=>{var r;const{locale:t,required:n,defaultSelected:a,today:s=new Date,fromDate:i,toDate:l,disabled:o,disableWeekends:d,onDateChange:u,inputFormat:m,onValidate:c,defaultMonth:k,allowTwoDigitYear:y=!0}=e,[I,p]=g.useState(null),w=jo(),h=t?$o(t):w,[b,j]=g.useState(a),[A,T]=g.useState((r=b??k)!==null&&r!==void 0?r:s),[R,F]=g.useState(b),[_,S]=g.useState(!1),L=b?Gr(b,h,"date",m):"",[q,O]=g.useState(L),P=g.useCallback(Z=>{var U,re;S(Z),Z&&T((re=(U=R??b)!==null&&U!==void 0?U:k)!==null&&re!==void 0?re:s)},[k,b,R,s]),M=Z=>{u?.(Z),F(Z)},B=(Z={})=>c?.(Ky(Z));return{datepickerProps:{month:A,onMonthChange:T,onDayClick:(Z,{selected:U})=>{if(!(U&&n)){if(Z&&!U&&(P(!1),I?.focus()),U){M(void 0),O(""),B({isValidDate:!1,isEmpty:!0});return}M(Z),B(),T(Z),O(Z?Gr(Z,h,"date",m):"")}},selected:R??new Date("Invalid date"),locale:t,fromDate:i,toDate:l,today:s,open:_,onClose:()=>{P(!1),I?.focus()},onOpenToggle:()=>P(!_),disabled:o,disableWeekends:d},inputProps:{onChange:Z=>{O(Z.target.value);const U=as(Z.target.value,s,h,"date",y),re=i&&U&&Wn(i,U)>0,te=l&&U&&Wn(U,l)>0;if(!hn(U)||d&&ga(U)||o&&mn(U,o)){M(void 0),B({isInvalid:!hn(U),isWeekend:d&&ga(U),isDisabled:o&&mn(U,o),isValidDate:!1,isEmpty:!Z.target.value,isBefore:re??!1,isAfter:te??!1});return}if(re||te){M(void 0),B({isValidDate:!1,isBefore:re??!1,isAfter:te??!1});return}M(U),B(),T(k??U)},onFocus:Z=>{if(Z.target.readOnly)return;const U=as(Z.target.value,s,h,"date",y);if(hn(U)){O(Gr(U,h,"date",m));const re=i&&U&&Wn(i,U)>0,te=l&&U&&Wn(U,l)>0;!re&&!te&&T(U)}},onBlur:Z=>{const U=as(Z.target.value,s,h,"date",y);hn(U)&&O(Gr(U,h,"date",m))},value:q,setAnchorRef:p},reset:()=>{var Z;M(b),T((Z=b??k)!==null&&Z!==void 0?Z:s),O(L??""),j(a)},selectedDay:R,setSelected:Z=>{var U;M(Z),T((U=Z??k)!==null&&U!==void 0?U:s),O(Z?Gr(Z,h,"date",m):"")}}};function Ke(e,r,t,n){return n?typeof n=="string"?{[`--__${e}c-${r}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([a,s])=>[`--__${e}c-${r}-${t}-${a}`,s])):{}}const Uy={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},el=(e,r,t,n,a,s)=>r.split(" ").map((i,l,o)=>{var d;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let u=`var(--${s}-${t}-${i})`;if(n.includes(i))u=i==="px"?"1px":i;else if(i.startsWith("space"))u=`var(--${s}-${i})`;else{const m=`--${s}-spacing-${i}`;u=`var(${(d=Uy[m])!==null&&d!==void 0?d:m})`}return a?i==="0"?"0":`calc(-1 * ${u})`:u}).join(" ");function un(e,r,t,n,a,s=!1,i=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${r}-${t}-xs`]:el(t,a,n,i,s,e)};const l={};return Object.entries(a).forEach(([o,d])=>{l[`--__${e}c-${r}-${t}-${o}`]=el(t,d,n,i,s,e)}),l}const Yy=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Hy=({children:e,className:r,padding:t,paddingInline:n,paddingBlock:a,margin:s,marginInline:i,marginBlock:l,width:o,minWidth:d,maxWidth:u,height:m,minHeight:c,maxHeight:k,position:y,inset:I,top:p,right:w,left:h,bottom:b,overflow:j,overflowX:A,overflowY:T,flexBasis:R,flexGrow:F,flexShrink:_,gridColumn:S})=>{const L=ot(!1),{cn:q}=ee(),O=L?"ax":"a",P=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},un(O,"r","p","spacing",t)),un(O,"r","pi","spacing",n)),un(O,"r","pb","spacing",a)),un(O,"r","m","spacing",s)),un(O,"r","mi","spacing",i)),un(O,"r","mb","spacing",l)),Ke(O,"r","w",o)),Ke(O,"r","minw",d)),Ke(O,"r","maxw",u)),Ke(O,"r","h",m)),Ke(O,"r","minh",c)),Ke(O,"r","maxh",k)),Ke(O,"r","position",y)),un(O,"r","inset","spacing",I)),un(O,"r","top","spacing",p)),un(O,"r","right","spacing",w)),un(O,"r","bottom","spacing",b)),un(O,"r","left","spacing",h)),Ke(O,"r","overflow",j)),Ke(O,"r","overflowx",A)),Ke(O,"r","overflowy",T)),Ke(O,"r","flex-basis",R)),Ke(O,"r","flex-grow",F)),Ke(O,"r","flex-shrink",_)),Ke(O,"r","grid-column",S));return v.createElement(Mr,{className:q({className:r,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":a,"navds-r-m":s,"navds-r-mi":i,"navds-r-mb":l,"navds-r-w":o,"navds-r-minw":d,"navds-r-maxw":u,"navds-r-h":m,"navds-r-minh":c,"navds-r-maxh":k,"navds-r-position":y,"navds-r-inset":I,"navds-r-top":p,"navds-r-right":w,"navds-r-bottom":b,"navds-r-left":h,"navds-r-overflow":j,"navds-r-overflowx":A,"navds-r-overflowy":T,"navds-r-flex-basis":R,"navds-r-flex-grow":F,"navds-r-flex-shrink":_,"navds-r-grid-column":S}),style:P},e)};var $y=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Au=g.forwardRef((e,r)=>{var{children:t,className:n,as:a="div",align:s,justify:i,wrap:l=!0,gap:o,style:d,direction:u="row",asChild:m}=e,c=$y(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const y=ot(!1)?"ax":"a",{cn:I}=ee(),p=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),un(y,"stack","gap","spacing",o)),Ke(y,"stack","direction",u)),Ke(y,"stack","align",s)),Ke(y,"stack","justify",i)),w=m?Mr:a;return v.createElement(Hy,Object.assign({},c),v.createElement(w,Object.assign({},nn(c,Yy),{ref:r,style:p,className:I("navds-stack",n,{"navds-vstack":u==="column","navds-hstack":u==="row","navds-stack-gap":o,"navds-stack-align":s,"navds-stack-justify":i,"navds-stack-direction":u,"navds-stack-wrap":l})}),t))});var Wy=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ie=g.forwardRef((e,r)=>{var{as:t="div"}=e,n=Wy(e,["as"]);return v.createElement(Au,Object.assign({as:t},n,{ref:r,direction:"row"}))});var zy=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Re=g.forwardRef((e,r)=>{var{as:t="div"}=e,n=zy(e,["as"]);return v.createElement(Au,Object.assign({as:t},n,{ref:r,direction:"column",wrap:!1}))}),Er=()=>{const{cn:e}=ee();return v.createElement("span",{className:e("navds-stack__spacer")})};var Jy=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Qs=g.forwardRef((e,r)=>{var{as:t="a",className:n,underline:a=!0,variant:s,inlineText:i=!1,"data-color":l}=e,o=Jy(e,["as","className","underline","variant","inlineText","data-color"]);const d=ot(!1),{cn:u}=ee();let m;return d?m=s:m=s??"action",v.createElement(t,Object.assign({"data-color":l??Xy(m),"data-variant":m},o,{ref:r,className:u("navds-link",n,{[`navds-link--${m}`]:m,"navds-link--remove-underline":!a,"navds-link--inline-text":i})}))});function Xy(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var Qy=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Zy=g.forwardRef((e,r)=>{var{className:t}=e,n=Qy(e,["className"]);const{cn:a}=ee();return v.createElement("tbody",Object.assign({},n,{ref:r,className:a("navds-table__body",t)}))});var eb=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ju=g.forwardRef((e,r)=>{var{className:t,children:n,align:a,textSize:s}=e,i=eb(e,["className","children","align","textSize"]);const{cn:l}=ee();return v.createElement("th",Object.assign({ref:r,className:l("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":s==="small"})},i),n)}),Eu=g.createContext(null);var nb=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const rb=g.forwardRef((e,r)=>{var t,n,a,s,{className:i,children:l,sortable:o=!1,sortKey:d}=e,u=nb(e,["className","children","sortable","sortKey"]);const m=g.useContext(Eu),{cn:c}=ee();return o&&!d&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),v.createElement(ju,Object.assign({scope:"col",ref:r,className:c(i),"aria-sort":o?((t=m?.sort)===null||t===void 0?void 0:t.orderBy)===d?(n=m?.sort)===null||n===void 0?void 0:n.direction:"none":void 0},u),o?v.createElement("button",{type:"button",className:c("navds-table__sort-button"),onClick:o&&d?()=>{var k;return(k=m?.onSortChange)===null||k===void 0?void 0:k.call(m,d)}:void 0},l,((a=m?.sort)===null||a===void 0?void 0:a.orderBy)===d?((s=m?.sort)===null||s===void 0?void 0:s.direction)==="descending"?v.createElement(tm,{"aria-hidden":!0}):v.createElement(sm,{"aria-hidden":!0}):v.createElement(Pd,{"aria-hidden":!0})):l)});var tb=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ou=g.forwardRef((e,r)=>{var{className:t,children:n="",align:a,textSize:s}=e,i=tb(e,["className","children","align","textSize"]);const{cn:l}=ee();return v.createElement(ne,Object.assign({as:"td",ref:r,className:l("navds-table__data-cell",t,{[`navds-table__data-cell--align-${a}`]:a}),size:s},i),n)});var ab=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const sb=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function ib(e){const r=parseFloat(e);return!Number.isNaN(r)&&Number.isFinite(r)}function nl(e){return typeof e=="string"&&e[e.length-1]==="%"&&ib(e.substring(0,e.length-1))}function is(e,r){r===0&&e?.style&&(e.style.display="none")}function lb(e,r){r===0&&e?.style&&(e.style.display="")}const ob=e=>{var{children:r,className:t,innerClassName:n,duration:a=250,easing:s="ease",height:i}=e,l=ab(e,["children","className","innerClassName","duration","easing","height"]);const{cn:o}=ee(),d=g.useRef(i),u=g.useRef(null),m=g.useRef(),c=g.useRef(),k=g.useRef(i),y=g.useRef("visible"),I=sb?0:a;typeof k.current=="number"?(typeof i!="string"&&(k.current=i<0?0:i),y.current="hidden"):nl(k.current)&&(k.current=i==="0%"?0:i,y.current="hidden");const[p,w]=g.useState(k.current),[h,b]=g.useState(y.current),[j,A]=g.useState(!1);g.useEffect(()=>{is(u.current,k.current)},[]),g.useEffect(()=>{if(i!==d.current&&u.current){lb(u.current,d.current),u.current.style.overflow="hidden";const _=u.current.offsetHeight;u.current.style.overflow="";const S=I;let L,q,O="hidden",P;const M=d.current==="auto";typeof i=="number"?(L=i<0?0:i,q=L):nl(i)?(L=i==="0%"?0:i,q=L):(L=_,q="auto",O=void 0),M&&(q=L,L=_),w(L),b("hidden"),A(!M),clearTimeout(c.current),clearTimeout(m.current),M?(P=!0,c.current=setTimeout(()=>{w(q),b(O),A(P)},50),m.current=setTimeout(()=>{A(!1),is(u.current,q)},S)):c.current=setTimeout(()=>{w(q),b(O),A(!1),i!=="auto"&&is(u.current,L)},S)}return d.current=i,()=>{clearTimeout(c.current),clearTimeout(m.current)}},[i]);const T={height:p,overflow:h};j&&(T.transition=`height ${I}ms ${s} 0ms`,T.WebkitTransition=T.transition);const F=typeof l["aria-hidden"]<"u"?l["aria-hidden"]:i===0;return v.createElement("div",Object.assign({},l,{className:o(t),style:T}),v.createElement("div",{"aria-hidden":F,className:o(n),ref:u},r))};var ub=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Tu=g.forwardRef((e,r)=>{var{className:t,selected:n=!1,shadeOnHover:a=!0}=e,s=ub(e,["className","selected","shadeOnHover"]);const{cn:i}=ee();return v.createElement("tr",Object.assign({},s,{ref:r,className:i("navds-table__row",t,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":a})}))});var db=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const mb=g.forwardRef((e,r)=>{var{className:t,children:n,content:a,togglePlacement:s="left",defaultOpen:i=!1,open:l,onOpenChange:o,expansionDisabled:d=!1,expandOnRowClick:u=!1,colSpan:m=999,contentGutter:c,onClick:k}=e,y=db(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:I}=ee(),[p,w]=Pr({defaultValue:i,value:l,onChange:o}),h=Gn("global"),b=Kn(),j=T=>{w(R=>!R),T.stopPropagation()},A=T=>{u&&!d&&!Nu(T.target)&&j(T)};return v.createElement(v.Fragment,null,v.createElement(Tu,Object.assign({},y,{ref:r,className:I("navds-table__expandable-row",t,{"navds-table__expandable-row--open":p,"navds-table__expandable-row--expansion-disabled":d,"navds-table__expandable-row--clickable":u}),onClick:sr(k,A)}),s==="right"&&n,v.createElement(Ou,{className:I("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":p}),onClick:d?()=>null:j},!d&&v.createElement("button",{className:I("navds-table__toggle-expand-button"),type:"button","aria-controls":b,"aria-expanded":p,onClick:j},v.createElement(mt,{className:I("navds-table__expandable-icon"),title:h(p?"showLess":"showMore")}))),s==="left"&&n),v.createElement("tr",{"data-state":p?"open":"closed",className:I("navds-table__expanded-row"),"aria-hidden":!p,id:b},v.createElement("td",{colSpan:m,className:I("navds-table__expanded-row-cell")},v.createElement(ob,{className:I("navds-table__expanded-row-collapse"),innerClassName:I(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${c??s}`),height:p?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});function Nu(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:Nu(e.parentElement)}var gb=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const cb=g.forwardRef((e,r)=>{var{className:t}=e,n=gb(e,["className"]);const{cn:a}=ee();return v.createElement("thead",Object.assign({},n,{ref:r,className:a("navds-table__header",t)}))});var fb=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const je=g.forwardRef((e,r)=>{var{className:t,zebraStripes:n=!1,size:a="medium",onSortChange:s,sort:i,stickyHeader:l=!1}=e,o=fb(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:d}=ee();return v.createElement(Eu.Provider,{value:{onSortChange:s,sort:i}},v.createElement("table",Object.assign({},o,{ref:r,className:d("navds-table",`navds-table--${a}`,t,{"navds-table--zebra-stripes":n,"navds-table--sticky-header":l})})))});je.Header=cb;je.Body=Zy;je.Row=Tu;je.ColumnHeader=rb;je.HeaderCell=ju;je.DataCell=Ou;je.ExpandableRow=mb;var kb=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const vb=g.forwardRef((e,r)=>{var{children:t,className:n,variant:a,size:s="medium",icon:i,"data-color":l}=e,o=kb(e,["children","className","variant","size","icon","data-color"]);const{cn:d}=ee(),u=a?.endsWith("-filled")&&"strong",m=a?.endsWith("-moderate")&&"moderate";return v.createElement(ne,Object.assign({"data-color":l??pb(a),"data-variant":u||m||"outline"},o,{ref:r,as:"span",size:s==="medium"?"medium":"small",className:d("navds-tag",n,`navds-tag--${a}`,`navds-tag--${s}`)}),i&&v.createElement("span",{className:d("navds-tag__icon--left")},i),t)});function pb(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var yb=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ru=g.forwardRef((e,r)=>{var{children:t,className:n,arrow:a=!0,placement:s="top",open:i,defaultOpen:l=!1,onOpenChange:o,offset:d,content:u,delay:m=150,id:c,keys:k,maxChar:y=80,describesChild:I=!1}=e,p=yb(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:w}=ee(),[h,b]=Pr({defaultValue:l,value:i,onChange:o}),j=g.useRef(null),A=gt(!1),T=A?A.ref.current:void 0,{x:R,y:F,strategy:_,context:S,placement:L,middlewareData:{arrow:{x:q,y:O}={},hide:{referenceHidden:P}={}},refs:M}=Go({placement:s,open:h,onOpenChange:J=>b(J),middleware:[ho(d??(a?8:4)),Io(),wo({padding:5,fallbackPlacements:["bottom","top"]}),Ao({element:j,padding:5})],whileElementsMounted:A?(J,z,ae)=>cs(J,z,ae,{animationFrame:!0}):cs,strategy:A?"fixed":void 0}),{getReferenceProps:B,getFloatingProps:C}=mv([nv(S,{handleClose:fv(),restMs:m}),dv(S),ov(S)]),V=Kn(c),x=Sr(r,M.setFloating);if(!t||t?.type===v.Fragment||t===v.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;u?.length>y&&h&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${u.length}
Tooltip-content: ${u}`);const H=I?h?{"aria-describedby":V}:{title:u}:{"aria-label":u};return v.createElement(v.Fragment,null,v.createElement(Mr,Object.assign({ref:M.setReference},B(),H,{"aria-keyshortcuts":k?k.join("+"):void 0}),t),v.createElement(rc,{rootElement:T,asChild:!0},h&&v.createElement("div",Object.assign({},C(Object.assign(Object.assign({},p),{ref:x,style:{position:_,top:F??0,left:R??0,visibility:P?"hidden":"visible"},role:"tooltip",id:V,className:w("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":L,"data-state":"open"}),u,k&&v.createElement("span",{className:w("navds-tooltip__keys"),"aria-hidden":!0},k.map(J=>v.createElement(Nr,{as:"kbd",key:J,className:w("navds-tooltip__key")},J))),a&&v.createElement("div",{ref:J=>{j.current=J},className:w("navds-tooltip__arrow"),style:{left:q!=null?`${q}px`:"",top:O!=null?`${O}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[L]]:"-3.5px"}}))))}),bb=e=>{const r=Lr(e,"fieldset");return Object.assign(Object.assign({},r),{inputProps:{"aria-describedby":lt(e["aria-describedby"],{[r.inputDescriptionId]:e.description&&!va(e.description)})||void 0}})};var hb=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ib=g.forwardRef((e,r)=>{var t,n,a;const{inputProps:s,errorId:i,showErrorMsg:l,hasError:o,size:d,readOnly:u,inputDescriptionId:m}=bb(e),{cn:c}=ee(),k=g.useContext(ka),{children:y,className:I,errorPropagation:p=!0,legend:w,description:h,hideLegend:b,nativeReadOnly:j=!0}=e,A=hb(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return v.createElement(ka.Provider,{value:{error:p?(t=e.error)!==null&&t!==void 0?t:k?.error:void 0,errorId:lt({[i]:l,[(n=k?.errorId)!==null&&n!==void 0?n:""]:!!k?.error}),size:d,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:u}},v.createElement("fieldset",Object.assign({},nn(A,["errorId","error","size","readOnly"]),s,{ref:r,className:c(I,"navds-fieldset",`navds-fieldset--${d}`,{"navds-fieldset--error":o,"navds-fieldset--readonly":u})}),v.createElement(he,{size:d,as:"legend",className:c("navds-fieldset__legend",{"navds-sr-only":!!b})},u&&(j?v.createElement(qa,null):v.createElement(Uo,null)),w),!!h&&v.createElement(ne,{className:c("navds-fieldset__description",{"navds-sr-only":!!b}),id:m,size:d??"medium",as:"div"},e.description),y,v.createElement("div",{id:i,"aria-relevant":"additions removals","aria-live":"polite",className:c("navds-fieldset__error")},l&&v.createElement(ut,{size:d,showIcon:!0},e.error))))});var wb=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Pu=v.createContext(null),Ab=g.forwardRef((e,r)=>{var t,n,{children:a,className:s,name:i,defaultValue:l,value:o,onChange:d=()=>{},required:u,readOnly:m}=e,c=wb(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:k}=ee(),y=g.useContext(ka),I=Kn();return v.createElement(Ib,Object.assign({},c,{readOnly:m,ref:r,className:k(s,"navds-radio-group",`navds-radio-group--${(n=(t=c.size)!==null&&t!==void 0?t:y?.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),v.createElement(Pu.Provider,{value:{name:i??`radioGroupName-${I}`,defaultValue:l,value:o,onChange:d,required:u}},v.createElement("div",{className:k("navds-radio-buttons")},a)))});var jb=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Eb=e=>{const r=g.useContext(Pu),t=Lr(nn(e,["description"]),"radio"),{inputProps:n,readOnly:a}=t,s=jb(t,["inputProps","readOnly"]);return r||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},s),{readOnly:a,inputProps:Object.assign(Object.assign({},n),{name:r?.name,defaultChecked:r?.defaultValue===void 0?void 0:r?.defaultValue===e.value,checked:r?.value===void 0?void 0:r?.value===e.value,onChange:i=>{var l,o;a||((l=e.onChange)===null||l===void 0||l.call(e,i),(o=r?.onChange)===null||o===void 0||o.call(r,e.value))},onClick:i=>{var l;if(a){i.preventDefault();return}(l=e?.onClick)===null||l===void 0||l.call(e,i)},required:r?.required,type:"radio"})})},Or=g.forwardRef((e,r)=>{const{cn:t}=ee(),{inputProps:n,size:a,hasError:s,readOnly:i}=Eb(e);return v.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":s,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i}),"data-color":s?"danger":e["data-color"]},v.createElement("input",Object.assign({},nn(e,["children","size","description","readOnly"]),nn(n,["aria-invalid"]),{className:t("navds-radio__input"),ref:r})),v.createElement("label",{htmlFor:n.id,className:t("navds-radio__label")},v.createElement("span",{className:t("navds-radio__content")},v.createElement(ne,{as:"span",size:a},e.children),e.description&&v.createElement(ne,{as:"span",size:a,className:t("navds-form-field__subdescription navds-radio__description")},e.description))))});var Ob=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const rl=(e,r,t)=>{const{outerHeightStyle:n,overflow:a}=r;return t.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==a)?(t.current+=1,r):e},tl=e=>(e?.ownerDocument||document).defaultView||window;function qt(e){return parseInt(e,10)||0}const Tb=g.forwardRef((e,r)=>{var t,n,{className:a,onChange:s,maxRows:i,minRows:l=1,autoScrollbar:o,style:d,value:u}=e,m=Ob(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:c}=g.useRef(u!=null),k=g.useRef(null),y=Sr(k,r),I=g.useRef(null),p=g.useRef(0),[w,h]=g.useState({outerHeightStyle:0}),b=v.useCallback(()=>{const R=k.current,_=tl(R).getComputedStyle(R);if(_.width==="0px")return{outerHeightStyle:0};const S=I.current;S.style.width=_.width,S.value=R.value||m.placeholder||"x",S.value.slice(-1)===`
`&&(S.value+=" ");const L=_.boxSizing,q=qt(_.paddingBottom)+qt(_.paddingTop),O=qt(_.borderBottomWidth)+qt(_.borderTopWidth),P=S.scrollHeight-q;S.value="x";const M=S.scrollHeight-q;let B=P;l&&(B=Math.max(Number(l)*M,B)),i&&(B=Math.min(Number(i)*M,B)),B=Math.max(B,M);const C=B+(L==="border-box"?q+O:0),V=Math.abs(B-P)<=1;return{outerHeightStyle:C,overflow:V}},[i,l,m.placeholder]),j=()=>{const R=b();al(R)||h(F=>rl(F,R,p))};Rr(()=>{const R=()=>{const q=b();al(q)||ia.flushSync(()=>{h(O=>rl(O,q,p))})},F=Hl(()=>{var q,O,P;if(p.current=0,!((q=k.current)===null||q===void 0)&&q.style.height||!((O=k.current)===null||O===void 0)&&O.style.width){((P=k.current)===null||P===void 0?void 0:P.style.overflow)==="hidden"&&h(M=>Object.assign(Object.assign({},M),{overflow:!1}));return}R()},166,!0),_=k.current,S=tl(_);S.addEventListener("resize",F);let L;return typeof ResizeObserver<"u"&&(L=new ResizeObserver(F),L.observe(_)),()=>{F.clear(),S.removeEventListener("resize",F),L&&L.disconnect()}},[b]),Rr(()=>{j()}),g.useEffect(()=>{p.current=0},[u]);const A=R=>{p.current=0,c||j(),s&&s(R)},T=Object.assign({"--__ac-textarea-height":w.outerHeightStyle+"px","--__axc-textarea-height":w.outerHeightStyle+"px",overflow:w.overflow&&!o&&!(!((t=k.current)===null||t===void 0)&&t.style.height)&&!(!((n=k.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},d);return v.createElement(v.Fragment,null,v.createElement("textarea",Object.assign({value:u,onChange:A,ref:y,rows:l,style:T},m,{className:a})),v.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:I,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d)}))});function al(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const Nb=({maxLengthId:e,maxLength:r,currentLength:t,size:n,i18n:a})=>{const{cn:s}=ee(),i=Gn("Textarea",{charsLeft:a?.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a?.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),l=r-t,[o,d]=g.useState(l);return g.useEffect(()=>{const u=Hl(()=>{d(l)},2e3);return u(),()=>{u.clear()}},[l]),v.createElement(v.Fragment,null,v.createElement("span",{id:e,className:s("navds-sr-only")},i("maxLength",{maxLength:r})),l<20&&v.createElement("span",{role:"status",className:s("navds-textarea__sr-counter navds-sr-only")},sl(o,i)),v.createElement(ne,{className:s("navds-textarea__counter",{"navds-textarea__counter--error":l<0}),size:n},sl(l,i)))},sl=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var Rb=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Pb=g.forwardRef((e,r)=>{var t,n,a;const{inputProps:s,errorId:i,showErrorMsg:l,hasError:o,size:d,inputDescriptionId:u}=Lr(e,"textarea"),{label:m,className:c,description:k,maxLength:y,hideLabel:I=!1,resize:p,UNSAFE_autoScrollbar:w,i18n:h,readOnly:b}=e,j=Rb(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:A}=ee(),T=Kn(),R=y!==void 0&&y>0,[F,_]=g.useState((t=e?.defaultValue)!==null&&t!==void 0?t:""),S=()=>{let q=j?.minRows?j?.minRows:3;return d==="small"&&(q=j?.minRows?j?.minRows:2),q},L=lt(s["aria-describedby"],{[T??""]:R});return v.createElement("div",{className:A(c,"navds-form-field",`navds-form-field--${d}`,{"navds-form-field--disabled":!!s.disabled,"navds-form-field--readonly":b,"navds-textarea--readonly":b,"navds-textarea--error":o,"navds-textarea--autoscrollbar":w,[`navds-textarea--resize-${p===!0?"both":p}`]:p})},v.createElement(he,{htmlFor:s.id,size:d,className:A("navds-form-field__label",{"navds-sr-only":I})},b&&v.createElement(qa,null),m),!!k&&v.createElement(ne,{className:A("navds-form-field__description",{"navds-sr-only":I}),id:u,size:d,as:"div"},k),v.createElement(Tb,Object.assign({},nn(j,["error","errorId","size"]),s,{onChange:sr(e.onChange,e.value===void 0?q=>_(q.target.value):void 0),minRows:S(),autoScrollbar:w,ref:r,readOnly:b,className:A("navds-textarea__input","navds-body-short",`navds-body-short--${d??"medium"}`)},L?{"aria-describedby":L}:{})),R&&!b&&!s.disabled&&v.createElement(Nb,{maxLengthId:T,maxLength:y,currentLength:(a=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&a!==void 0?a:F.length,size:d,i18n:h}),v.createElement("div",{className:A("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},l&&v.createElement(ut,{size:d,showIcon:!0},e.error)))});var _b=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const qb=g.forwardRef((e,r)=>{const{cn:t}=ee(),{inputProps:n,errorId:a,showErrorMsg:s,hasError:i,size:l,inputDescriptionId:o}=Lr(e,"textField"),{label:d,className:u,description:m,htmlSize:c,hideLabel:k=!1,type:y="text",readOnly:I}=e,p=_b(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return v.createElement("div",{className:t(u,"navds-form-field",`navds-form-field--${l}`,{"navds-text-field--error":i,"navds-text-field--disabled":!!n.disabled,"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":I,"navds-text-field--readonly":I})},v.createElement(he,{htmlFor:n.id,size:l,className:t("navds-form-field__label",{"navds-sr-only":k})},I&&v.createElement(qa,null),d),!!m&&v.createElement(ne,{className:t("navds-form-field__description",{"navds-sr-only":k}),id:o,size:l,as:"div"},m),v.createElement("input",Object.assign({},nn(p,["error","errorId","size"]),n,{ref:r,type:y,readOnly:I,className:t("navds-text-field__input","navds-body-short",`navds-body-short--${l??"medium"}`),size:c})),v.createElement("div",{className:t("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},s&&v.createElement(ut,{size:l,showIcon:!0},e.error)))});var Ve=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Ve||{}),It=e=>e.type==="checkbox",ar=e=>e instanceof Date,$e=e=>e==null;const _u=e=>typeof e=="object";var Me=e=>!$e(e)&&!Array.isArray(e)&&_u(e)&&!ar(e),qu=e=>Me(e)&&e.target?It(e.target)?e.target.checked:e.target.value:e,Db=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Du=(e,r)=>e.has(Db(r)),Mb=e=>{const r=e.constructor&&e.constructor.prototype;return Me(r)&&r.hasOwnProperty("isPrototypeOf")},Zs=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Fe(e){let r;const t=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(!(Zs&&(e instanceof Blob||n))&&(t||Me(e)))if(r=t?[]:Object.create(Object.getPrototypeOf(e)),!t&&!Mb(e))r=e;else for(const a in e)e.hasOwnProperty(a)&&(r[a]=Fe(e[a]));else return e;return r}var Sa=e=>/^\w*$/.test(e),_e=e=>e===void 0,ei=e=>Array.isArray(e)?e.filter(Boolean):[],ni=e=>ei(e.replace(/["|']|\]/g,"").split(/\.|\[/)),W=(e,r,t)=>{if(!r||!Me(e))return t;const n=(Sa(r)?[r]:ni(r)).reduce((a,s)=>$e(a)?a:a[s],e);return _e(n)||n===e?_e(e[r])?t:e[r]:n},an=e=>typeof e=="boolean",be=(e,r,t)=>{let n=-1;const a=Sa(r)?[r]:ni(r),s=a.length,i=s-1;for(;++n<s;){const l=a[n];let o=t;if(n!==i){const d=e[l];o=Me(d)||Array.isArray(d)?d:isNaN(+a[n+1])?{}:[]}if(l==="__proto__"||l==="constructor"||l==="prototype")return;e[l]=o,e=e[l]}};const ya={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},vn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},qn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},ri=v.createContext(null);ri.displayName="HookFormContext";const Qn=()=>v.useContext(ri),Sb=e=>{const{children:r,...t}=e;return v.createElement(ri.Provider,{value:t},r)};var Mu=(e,r,t,n=!0)=>{const a={defaultValues:r._defaultValues};for(const s in e)Object.defineProperty(a,s,{get:()=>{const i=s;return r._proxyFormState[i]!==vn.all&&(r._proxyFormState[i]=!n||vn.all),t&&(t[i]=!0),e[i]}});return a};const ti=typeof window<"u"?v.useLayoutEffect:v.useEffect;function xb(e){const r=Qn(),{control:t=r.control,disabled:n,name:a,exact:s}=e||{},[i,l]=v.useState(t._formState),o=v.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return ti(()=>t._subscribe({name:a,formState:o.current,exact:s,callback:d=>{!n&&l({...t._formState,...d})}}),[a,n,s]),v.useEffect(()=>{o.current.isValid&&t._setValid(!0)},[t]),v.useMemo(()=>Mu(i,t,o.current,!1),[i,t])}var Tn=e=>typeof e=="string",Su=(e,r,t,n,a)=>Tn(e)?(n&&r.watch.add(e),W(t,e,a)):Array.isArray(e)?e.map(s=>(n&&r.watch.add(s),W(t,s))):(n&&(r.watchAll=!0),t),bs=e=>$e(e)||!_u(e);function Sn(e,r,t=new WeakSet){if(bs(e)||bs(r))return e===r;if(ar(e)&&ar(r))return e.getTime()===r.getTime();const n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;if(t.has(e)||t.has(r))return!0;t.add(e),t.add(r);for(const s of n){const i=e[s];if(!a.includes(s))return!1;if(s!=="ref"){const l=r[s];if(ar(i)&&ar(l)||Me(i)&&Me(l)||Array.isArray(i)&&Array.isArray(l)?!Sn(i,l,t):i!==l)return!1}}return!0}function Fb(e){const r=Qn(),{control:t=r.control,name:n,defaultValue:a,disabled:s,exact:i,compute:l}=e||{},o=v.useRef(a),d=v.useRef(l),u=v.useRef(void 0);d.current=l;const m=v.useMemo(()=>t._getWatch(n,o.current),[t,n]),[c,k]=v.useState(d.current?d.current(m):m);return ti(()=>t._subscribe({name:n,formState:{values:!0},exact:i,callback:y=>{if(!s){const I=Su(n,t._names,y.values||t._formValues,!1,o.current);if(d.current){const p=d.current(I);Sn(p,u.current)||(k(p),u.current=p)}else k(I)}}}),[t,s,n,i]),v.useEffect(()=>t._removeUnmounted()),c}function wt(e){const r=Qn(),{name:t,disabled:n,control:a=r.control,shouldUnregister:s,defaultValue:i}=e,l=Du(a._names.array,t),o=v.useMemo(()=>W(a._formValues,t,W(a._defaultValues,t,i)),[a,t,i]),d=Fb({control:a,name:t,defaultValue:o,exact:!0}),u=xb({control:a,name:t,exact:!0}),m=v.useRef(e),c=v.useRef(a.register(t,{...e.rules,value:d,...an(e.disabled)?{disabled:e.disabled}:{}}));m.current=e;const k=v.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!W(u.errors,t)},isDirty:{enumerable:!0,get:()=>!!W(u.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!W(u.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!W(u.validatingFields,t)},error:{enumerable:!0,get:()=>W(u.errors,t)}}),[u,t]),y=v.useCallback(h=>c.current.onChange({target:{value:qu(h),name:t},type:ya.CHANGE}),[t]),I=v.useCallback(()=>c.current.onBlur({target:{value:W(a._formValues,t),name:t},type:ya.BLUR}),[t,a._formValues]),p=v.useCallback(h=>{const b=W(a._fields,t);b&&h&&(b._f.ref={focus:()=>h.focus&&h.focus(),select:()=>h.select&&h.select(),setCustomValidity:j=>h.setCustomValidity(j),reportValidity:()=>h.reportValidity()})},[a._fields,t]),w=v.useMemo(()=>({name:t,value:d,...an(n)||u.disabled?{disabled:u.disabled||n}:{},onChange:y,onBlur:I,ref:p}),[t,n,u.disabled,y,I,p,d]);return v.useEffect(()=>{const h=a._options.shouldUnregister||s;a.register(t,{...m.current.rules,...an(m.current.disabled)?{disabled:m.current.disabled}:{}});const b=(j,A)=>{const T=W(a._fields,j);T&&T._f&&(T._f.mount=A)};if(b(t,!0),h){const j=Fe(W(a._options.defaultValues,t));be(a._defaultValues,t,j),_e(W(a._formValues,t))&&be(a._formValues,t,j)}return!l&&a.register(t),()=>{(l?h&&!a._state.action:h)?a.unregister(t):b(t,!1)}},[t,a,l,s]),v.useEffect(()=>{a._setDisabledField({disabled:n,name:t})},[n,t,a]),v.useMemo(()=>({field:w,formState:u,fieldState:k}),[w,u,k])}var Vb=(e,r,t,n,a)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[n]:a||!0}}:{},Qr=e=>Array.isArray(e)?e:[e],il=()=>{let e=[];return{get observers(){return e},next:a=>{for(const s of e)s.next&&s.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(s=>s!==a)}}),unsubscribe:()=>{e=[]}}},Ze=e=>Me(e)&&!Object.keys(e).length,ai=e=>e.type==="file",pn=e=>typeof e=="function",ba=e=>{if(!Zs)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},xu=e=>e.type==="select-multiple",si=e=>e.type==="radio",Lb=e=>si(e)||It(e),ls=e=>ba(e)&&e.isConnected;function Bb(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=_e(e)?n++:e[r[n++]];return e}function Cb(e){for(const r in e)if(e.hasOwnProperty(r)&&!_e(e[r]))return!1;return!0}function Se(e,r){const t=Array.isArray(r)?r:Sa(r)?[r]:ni(r),n=t.length===1?e:Bb(e,t),a=t.length-1,s=t[a];return n&&delete n[s],a!==0&&(Me(n)&&Ze(n)||Array.isArray(n)&&Cb(n))&&Se(e,t.slice(0,-1)),e}var Fu=e=>{for(const r in e)if(pn(e[r]))return!0;return!1};function ha(e,r={}){const t=Array.isArray(e);if(Me(e)||t)for(const n in e)Array.isArray(e[n])||Me(e[n])&&!Fu(e[n])?(r[n]=Array.isArray(e[n])?[]:{},ha(e[n],r[n])):$e(e[n])||(r[n]=!0);return r}function Vu(e,r,t){const n=Array.isArray(e);if(Me(e)||n)for(const a in e)Array.isArray(e[a])||Me(e[a])&&!Fu(e[a])?_e(r)||bs(t[a])?t[a]=Array.isArray(e[a])?ha(e[a],[]):{...ha(e[a])}:Vu(e[a],$e(r)?{}:r[a],t[a]):t[a]=!Sn(e[a],r[a]);return t}var Ur=(e,r)=>Vu(e,r,ha(r));const ll={value:!1,isValid:!1},ol={value:!0,isValid:!0};var Lu=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!_e(e[0].attributes.value)?_e(e[0].value)||e[0].value===""?ol:{value:e[0].value,isValid:!0}:ol:ll}return ll},Bu=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:n})=>_e(e)?e:r?e===""?NaN:e&&+e:t&&Tn(e)?new Date(e):n?n(e):e;const ul={isValid:!1,value:null};var Cu=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,ul):ul;function dl(e){const r=e.ref;return ai(r)?r.files:si(r)?Cu(e.refs).value:xu(r)?[...r.selectedOptions].map(({value:t})=>t):It(r)?Lu(e.refs).value:Bu(_e(r.value)?e.ref.value:r.value,e)}var Kb=(e,r,t,n)=>{const a={};for(const s of e){const i=W(r,s);i&&be(a,s,i._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:n}},Ia=e=>e instanceof RegExp,Yr=e=>_e(e)?e:Ia(e)?e.source:Me(e)?Ia(e.value)?e.value.source:e.value:e,ml=e=>({isOnSubmit:!e||e===vn.onSubmit,isOnBlur:e===vn.onBlur,isOnChange:e===vn.onChange,isOnAll:e===vn.all,isOnTouch:e===vn.onTouched});const gl="AsyncFunction";var Gb=e=>!!e&&!!e.validate&&!!(pn(e.validate)&&e.validate.constructor.name===gl||Me(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===gl)),Ub=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),cl=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const Zr=(e,r,t,n)=>{for(const a of t||Object.keys(e)){const s=W(e,a);if(s){const{_f:i,...l}=s;if(i){if(i.refs&&i.refs[0]&&r(i.refs[0],a)&&!n)return!0;if(i.ref&&r(i.ref,i.name)&&!n)return!0;if(Zr(l,r))break}else if(Me(l)&&Zr(l,r))break}}};function fl(e,r,t){const n=W(e,t);if(n||Sa(t))return{error:n,name:t};const a=t.split(".");for(;a.length;){const s=a.join("."),i=W(r,s),l=W(e,s);if(i&&!Array.isArray(i)&&t!==s)return{name:t};if(l&&l.type)return{name:s,error:l};if(l&&l.root&&l.root.type)return{name:`${s}.root`,error:l.root};a.pop()}return{name:t}}var Yb=(e,r,t,n)=>{t(e);const{name:a,...s}=e;return Ze(s)||Object.keys(s).length>=Object.keys(r).length||Object.keys(s).find(i=>r[i]===(!n||vn.all))},Hb=(e,r,t)=>!e||!r||e===r||Qr(e).some(n=>n&&(t?n===r:n.startsWith(r)||r.startsWith(n))),$b=(e,r,t,n,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(r||e):(t?n.isOnBlur:a.isOnBlur)?!e:(t?n.isOnChange:a.isOnChange)?e:!0,Wb=(e,r)=>!ei(W(e,r)).length&&Se(e,r),zb=(e,r,t)=>{const n=Qr(W(e,t));return be(n,"root",r[t]),be(e,t,n),e},sa=e=>Tn(e);function kl(e,r,t="validate"){if(sa(e)||Array.isArray(e)&&e.every(sa)||an(e)&&!e)return{type:t,message:sa(e)?e:"",ref:r}}var hr=e=>Me(e)&&!Ia(e)?e:{value:e,message:""},vl=async(e,r,t,n,a,s)=>{const{ref:i,refs:l,required:o,maxLength:d,minLength:u,min:m,max:c,pattern:k,validate:y,name:I,valueAsNumber:p,mount:w}=e._f,h=W(t,I);if(!w||r.has(I))return{};const b=l?l[0]:i,j=q=>{a&&b.reportValidity&&(b.setCustomValidity(an(q)?"":q||""),b.reportValidity())},A={},T=si(i),R=It(i),F=T||R,_=(p||ai(i))&&_e(i.value)&&_e(h)||ba(i)&&i.value===""||h===""||Array.isArray(h)&&!h.length,S=Vb.bind(null,I,n,A),L=(q,O,P,M=qn.maxLength,B=qn.minLength)=>{const C=q?O:P;A[I]={type:q?M:B,message:C,ref:i,...S(q?M:B,C)}};if(s?!Array.isArray(h)||!h.length:o&&(!F&&(_||$e(h))||an(h)&&!h||R&&!Lu(l).isValid||T&&!Cu(l).isValid)){const{value:q,message:O}=sa(o)?{value:!!o,message:o}:hr(o);if(q&&(A[I]={type:qn.required,message:O,ref:b,...S(qn.required,O)},!n))return j(O),A}if(!_&&(!$e(m)||!$e(c))){let q,O;const P=hr(c),M=hr(m);if(!$e(h)&&!isNaN(h)){const B=i.valueAsNumber||h&&+h;$e(P.value)||(q=B>P.value),$e(M.value)||(O=B<M.value)}else{const B=i.valueAsDate||new Date(h),C=H=>new Date(new Date().toDateString()+" "+H),V=i.type=="time",x=i.type=="week";Tn(P.value)&&h&&(q=V?C(h)>C(P.value):x?h>P.value:B>new Date(P.value)),Tn(M.value)&&h&&(O=V?C(h)<C(M.value):x?h<M.value:B<new Date(M.value))}if((q||O)&&(L(!!q,P.message,M.message,qn.max,qn.min),!n))return j(A[I].message),A}if((d||u)&&!_&&(Tn(h)||s&&Array.isArray(h))){const q=hr(d),O=hr(u),P=!$e(q.value)&&h.length>+q.value,M=!$e(O.value)&&h.length<+O.value;if((P||M)&&(L(P,q.message,O.message),!n))return j(A[I].message),A}if(k&&!_&&Tn(h)){const{value:q,message:O}=hr(k);if(Ia(q)&&!h.match(q)&&(A[I]={type:qn.pattern,message:O,ref:i,...S(qn.pattern,O)},!n))return j(O),A}if(y){if(pn(y)){const q=await y(h,t),O=kl(q,b);if(O&&(A[I]={...O,...S(qn.validate,O.message)},!n))return j(O.message),A}else if(Me(y)){let q={};for(const O in y){if(!Ze(q)&&!n)break;const P=kl(await y[O](h,t),b,O);P&&(q={...P,...S(O,P.message)},j(P.message),n&&(A[I]=q))}if(!Ze(q)&&(A[I]={ref:b,...q},!n))return A}}return j(!0),A};const Jb={mode:vn.onSubmit,reValidateMode:vn.onChange,shouldFocusError:!0};function Xb(e={}){let r={...Jb,...e},t={submitCount:0,isDirty:!1,isReady:!1,isLoading:pn(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},n={},a=Me(r.defaultValues)||Me(r.values)?Fe(r.defaultValues||r.values)||{}:{},s=r.shouldUnregister?{}:Fe(a),i={action:!1,mount:!1,watch:!1},l={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},o,d=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let m={...u};const c={array:il(),state:il()},k=r.criteriaMode===vn.all,y=E=>N=>{clearTimeout(d),d=setTimeout(E,N)},I=async E=>{if(!r.disabled&&(u.isValid||m.isValid||E)){const N=r.resolver?Ze((await R()).errors):await _(n,!0);N!==t.isValid&&c.state.next({isValid:N})}},p=(E,N)=>{!r.disabled&&(u.isValidating||u.validatingFields||m.isValidating||m.validatingFields)&&((E||Array.from(l.mount)).forEach(D=>{D&&(N?be(t.validatingFields,D,N):Se(t.validatingFields,D))}),c.state.next({validatingFields:t.validatingFields,isValidating:!Ze(t.validatingFields)}))},w=(E,N=[],D,$,G=!0,K=!0)=>{if($&&D&&!r.disabled){if(i.action=!0,K&&Array.isArray(W(n,E))){const X=D(W(n,E),$.argA,$.argB);G&&be(n,E,X)}if(K&&Array.isArray(W(t.errors,E))){const X=D(W(t.errors,E),$.argA,$.argB);G&&be(t.errors,E,X),Wb(t.errors,E)}if((u.touchedFields||m.touchedFields)&&K&&Array.isArray(W(t.touchedFields,E))){const X=D(W(t.touchedFields,E),$.argA,$.argB);G&&be(t.touchedFields,E,X)}(u.dirtyFields||m.dirtyFields)&&(t.dirtyFields=Ur(a,s)),c.state.next({name:E,isDirty:L(E,N),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else be(s,E,N)},h=(E,N)=>{be(t.errors,E,N),c.state.next({errors:t.errors})},b=E=>{t.errors=E,c.state.next({errors:t.errors,isValid:!1})},j=(E,N,D,$)=>{const G=W(n,E);if(G){const K=W(s,E,_e(D)?W(a,E):D);_e(K)||$&&$.defaultChecked||N?be(s,E,N?K:dl(G._f)):P(E,K),i.mount&&I()}},A=(E,N,D,$,G)=>{let K=!1,X=!1;const oe={name:E};if(!r.disabled){if(!D||$){(u.isDirty||m.isDirty)&&(X=t.isDirty,t.isDirty=oe.isDirty=L(),K=X!==oe.isDirty);const ke=Sn(W(a,E),N);X=!!W(t.dirtyFields,E),ke?Se(t.dirtyFields,E):be(t.dirtyFields,E,!0),oe.dirtyFields=t.dirtyFields,K=K||(u.dirtyFields||m.dirtyFields)&&X!==!ke}if(D){const ke=W(t.touchedFields,E);ke||(be(t.touchedFields,E,D),oe.touchedFields=t.touchedFields,K=K||(u.touchedFields||m.touchedFields)&&ke!==D)}K&&G&&c.state.next(oe)}return K?oe:{}},T=(E,N,D,$)=>{const G=W(t.errors,E),K=(u.isValid||m.isValid)&&an(N)&&t.isValid!==N;if(r.delayError&&D?(o=y(()=>h(E,D)),o(r.delayError)):(clearTimeout(d),o=null,D?be(t.errors,E,D):Se(t.errors,E)),(D?!Sn(G,D):G)||!Ze($)||K){const X={...$,...K&&an(N)?{isValid:N}:{},errors:t.errors,name:E};t={...t,...X},c.state.next(X)}},R=async E=>{p(E,!0);const N=await r.resolver(s,r.context,Kb(E||l.mount,n,r.criteriaMode,r.shouldUseNativeValidation));return p(E),N},F=async E=>{const{errors:N}=await R(E);if(E)for(const D of E){const $=W(N,D);$?be(t.errors,D,$):Se(t.errors,D)}else t.errors=N;return N},_=async(E,N,D={valid:!0})=>{for(const $ in E){const G=E[$];if(G){const{_f:K,...X}=G;if(K){const oe=l.array.has(K.name),ke=G._f&&Gb(G._f);ke&&u.validatingFields&&p([$],!0);const Qe=await vl(G,l.disabled,s,k,r.shouldUseNativeValidation&&!N,oe);if(ke&&u.validatingFields&&p([$]),Qe[K.name]&&(D.valid=!1,N))break;!N&&(W(Qe,K.name)?oe?zb(t.errors,Qe,K.name):be(t.errors,K.name,Qe[K.name]):Se(t.errors,K.name))}!Ze(X)&&await _(X,N,D)}}return D.valid},S=()=>{for(const E of l.unMount){const N=W(n,E);N&&(N._f.refs?N._f.refs.every(D=>!ls(D)):!ls(N._f.ref))&&re(E)}l.unMount=new Set},L=(E,N)=>!r.disabled&&(E&&N&&be(s,E,N),!Sn(H(),a)),q=(E,N,D)=>Su(E,l,{...i.mount?s:_e(N)?a:Tn(E)?{[E]:N}:N},D,N),O=E=>ei(W(i.mount?s:a,E,r.shouldUnregister?W(a,E,[]):[])),P=(E,N,D={})=>{const $=W(n,E);let G=N;if($){const K=$._f;K&&(!K.disabled&&be(s,E,Bu(N,K)),G=ba(K.ref)&&$e(N)?"":N,xu(K.ref)?[...K.ref.options].forEach(X=>X.selected=G.includes(X.value)):K.refs?It(K.ref)?K.refs.forEach(X=>{(!X.defaultChecked||!X.disabled)&&(Array.isArray(G)?X.checked=!!G.find(oe=>oe===X.value):X.checked=G===X.value||!!G)}):K.refs.forEach(X=>X.checked=X.value===G):ai(K.ref)?K.ref.value="":(K.ref.value=G,K.ref.type||c.state.next({name:E,values:Fe(s)})))}(D.shouldDirty||D.shouldTouch)&&A(E,G,D.shouldTouch,D.shouldDirty,!0),D.shouldValidate&&x(E)},M=(E,N,D)=>{for(const $ in N){if(!N.hasOwnProperty($))return;const G=N[$],K=E+"."+$,X=W(n,K);(l.array.has(E)||Me(G)||X&&!X._f)&&!ar(G)?M(K,G,D):P(K,G,D)}},B=(E,N,D={})=>{const $=W(n,E),G=l.array.has(E),K=Fe(N);be(s,E,K),G?(c.array.next({name:E,values:Fe(s)}),(u.isDirty||u.dirtyFields||m.isDirty||m.dirtyFields)&&D.shouldDirty&&c.state.next({name:E,dirtyFields:Ur(a,s),isDirty:L(E,K)})):$&&!$._f&&!$e(K)?M(E,K,D):P(E,K,D),cl(E,l)&&c.state.next({...t,name:E}),c.state.next({name:i.mount?E:void 0,values:Fe(s)})},C=async E=>{i.mount=!0;const N=E.target;let D=N.name,$=!0;const G=W(n,D),K=ke=>{$=Number.isNaN(ke)||ar(ke)&&isNaN(ke.getTime())||Sn(ke,W(s,D,ke))},X=ml(r.mode),oe=ml(r.reValidateMode);if(G){let ke,Qe;const vr=N.type?dl(G._f):qu(E),In=E.type===ya.BLUR||E.type===ya.FOCUS_OUT,La=!Ub(G._f)&&!r.resolver&&!W(t.errors,D)&&!G._f.deps||$b(In,W(t.touchedFields,D),t.isSubmitted,oe,X),Br=cl(D,l,In);be(s,D,vr),In?(!N||!N.readOnly)&&(G._f.onBlur&&G._f.onBlur(E),o&&o(0)):G._f.onChange&&G._f.onChange(E);const Cr=A(D,vr,In),Ba=!Ze(Cr)||Br;if(!In&&c.state.next({name:D,type:E.type,values:Fe(s)}),La)return(u.isValid||m.isValid)&&(r.mode==="onBlur"?In&&I():In||I()),Ba&&c.state.next({name:D,...Br?{}:Cr});if(!In&&Br&&c.state.next({...t}),r.resolver){const{errors:Kr}=await R([D]);if(K(vr),$){const Ca=fl(t.errors,n,D),se=fl(Kr,n,Ca.name||D);ke=se.error,D=se.name,Qe=Ze(Kr)}}else p([D],!0),ke=(await vl(G,l.disabled,s,k,r.shouldUseNativeValidation))[D],p([D]),K(vr),$&&(ke?Qe=!1:(u.isValid||m.isValid)&&(Qe=await _(n,!0)));$&&(G._f.deps&&x(G._f.deps),T(D,Qe,ke,Cr))}},V=(E,N)=>{if(W(t.errors,N)&&E.focus)return E.focus(),1},x=async(E,N={})=>{let D,$;const G=Qr(E);if(r.resolver){const K=await F(_e(E)?E:G);D=Ze(K),$=E?!G.some(X=>W(K,X)):D}else E?($=(await Promise.all(G.map(async K=>{const X=W(n,K);return await _(X&&X._f?{[K]:X}:X)}))).every(Boolean),!(!$&&!t.isValid)&&I()):$=D=await _(n);return c.state.next({...!Tn(E)||(u.isValid||m.isValid)&&D!==t.isValid?{}:{name:E},...r.resolver||!E?{isValid:D}:{},errors:t.errors}),N.shouldFocus&&!$&&Zr(n,V,E?G:l.mount),$},H=E=>{const N={...i.mount?s:a};return _e(E)?N:Tn(E)?W(N,E):E.map(D=>W(N,D))},J=(E,N)=>({invalid:!!W((N||t).errors,E),isDirty:!!W((N||t).dirtyFields,E),error:W((N||t).errors,E),isValidating:!!W(t.validatingFields,E),isTouched:!!W((N||t).touchedFields,E)}),z=E=>{E&&Qr(E).forEach(N=>Se(t.errors,N)),c.state.next({errors:E?t.errors:{}})},ae=(E,N,D)=>{const $=(W(n,E,{_f:{}})._f||{}).ref,G=W(t.errors,E)||{},{ref:K,message:X,type:oe,...ke}=G;be(t.errors,E,{...ke,...N,ref:$}),c.state.next({name:E,errors:t.errors,isValid:!1}),D&&D.shouldFocus&&$&&$.focus&&$.focus()},xe=(E,N)=>pn(E)?c.state.subscribe({next:D=>"values"in D&&E(q(void 0,N),D)}):q(E,N,!0),Z=E=>c.state.subscribe({next:N=>{Hb(E.name,N.name,E.exact)&&Yb(N,E.formState||u,er,E.reRenderRoot)&&E.callback({values:{...s},...t,...N,defaultValues:a})}}).unsubscribe,U=E=>(i.mount=!0,m={...m,...E.formState},Z({...E,formState:m})),re=(E,N={})=>{for(const D of E?Qr(E):l.mount)l.mount.delete(D),l.array.delete(D),N.keepValue||(Se(n,D),Se(s,D)),!N.keepError&&Se(t.errors,D),!N.keepDirty&&Se(t.dirtyFields,D),!N.keepTouched&&Se(t.touchedFields,D),!N.keepIsValidating&&Se(t.validatingFields,D),!r.shouldUnregister&&!N.keepDefaultValue&&Se(a,D);c.state.next({values:Fe(s)}),c.state.next({...t,...N.keepDirty?{isDirty:L()}:{}}),!N.keepIsValid&&I()},te=({disabled:E,name:N})=>{(an(E)&&i.mount||E||l.disabled.has(N))&&(E?l.disabled.add(N):l.disabled.delete(N))},de=(E,N={})=>{let D=W(n,E);const $=an(N.disabled)||an(r.disabled);return be(n,E,{...D||{},_f:{...D&&D._f?D._f:{ref:{name:E}},name:E,mount:!0,...N}}),l.mount.add(E),D?te({disabled:an(N.disabled)?N.disabled:r.disabled,name:E}):j(E,!0,N.value),{...$?{disabled:N.disabled||r.disabled}:{},...r.progressive?{required:!!N.required,min:Yr(N.min),max:Yr(N.max),minLength:Yr(N.minLength),maxLength:Yr(N.maxLength),pattern:Yr(N.pattern)}:{},name:E,onChange:C,onBlur:C,ref:G=>{if(G){de(E,N),D=W(n,E);const K=_e(G.value)&&G.querySelectorAll&&G.querySelectorAll("input,select,textarea")[0]||G,X=Lb(K),oe=D._f.refs||[];if(X?oe.find(ke=>ke===K):K===D._f.ref)return;be(n,E,{_f:{...D._f,...X?{refs:[...oe.filter(ls),K,...Array.isArray(W(a,E))?[{}]:[]],ref:{type:K.type,name:E}}:{ref:K}}}),j(E,!1,void 0,K)}else D=W(n,E,{}),D._f&&(D._f.mount=!1),(r.shouldUnregister||N.shouldUnregister)&&!(Du(l.array,E)&&i.action)&&l.unMount.add(E)}}},Le=()=>r.shouldFocusError&&Zr(n,V,l.mount),Be=E=>{an(E)&&(c.state.next({disabled:E}),Zr(n,(N,D)=>{const $=W(n,D);$&&(N.disabled=$._f.disabled||E,Array.isArray($._f.refs)&&$._f.refs.forEach(G=>{G.disabled=$._f.disabled||E}))},0,!1))},Ce=(E,N)=>async D=>{let $;D&&(D.preventDefault&&D.preventDefault(),D.persist&&D.persist());let G=Fe(s);if(c.state.next({isSubmitting:!0}),r.resolver){const{errors:K,values:X}=await R();t.errors=K,G=Fe(X)}else await _(n);if(l.disabled.size)for(const K of l.disabled)Se(G,K);if(Se(t.errors,"root"),Ze(t.errors)){c.state.next({errors:{}});try{await E(G,D)}catch(K){$=K}}else N&&await N({...t.errors},D),Le(),setTimeout(Le);if(c.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ze(t.errors)&&!$,submitCount:t.submitCount+1,errors:t.errors}),$)throw $},_n=(E,N={})=>{W(n,E)&&(_e(N.defaultValue)?B(E,Fe(W(a,E))):(B(E,N.defaultValue),be(a,E,Fe(N.defaultValue))),N.keepTouched||Se(t.touchedFields,E),N.keepDirty||(Se(t.dirtyFields,E),t.isDirty=N.defaultValue?L(E,Fe(W(a,E))):L()),N.keepError||(Se(t.errors,E),u.isValid&&I()),c.state.next({...t}))},ln=(E,N={})=>{const D=E?Fe(E):a,$=Fe(D),G=Ze(E),K=G?a:$;if(N.keepDefaultValues||(a=D),!N.keepValues){if(N.keepDirtyValues){const X=new Set([...l.mount,...Object.keys(Ur(a,s))]);for(const oe of Array.from(X))W(t.dirtyFields,oe)?be(K,oe,W(s,oe)):B(oe,W(K,oe))}else{if(Zs&&_e(E))for(const X of l.mount){const oe=W(n,X);if(oe&&oe._f){const ke=Array.isArray(oe._f.refs)?oe._f.refs[0]:oe._f.ref;if(ba(ke)){const Qe=ke.closest("form");if(Qe){Qe.reset();break}}}}if(N.keepFieldsRef)for(const X of l.mount)B(X,W(K,X));else n={}}s=r.shouldUnregister?N.keepDefaultValues?Fe(a):{}:Fe(K),c.array.next({values:{...K}}),c.state.next({values:{...K}})}l={mount:N.keepDirtyValues?l.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!u.isValid||!!N.keepIsValid||!!N.keepDirtyValues,i.watch=!!r.shouldUnregister,c.state.next({submitCount:N.keepSubmitCount?t.submitCount:0,isDirty:G?!1:N.keepDirty?t.isDirty:!!(N.keepDefaultValues&&!Sn(E,a)),isSubmitted:N.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:G?{}:N.keepDirtyValues?N.keepDefaultValues&&s?Ur(a,s):t.dirtyFields:N.keepDefaultValues&&E?Ur(a,E):N.keepDirty?t.dirtyFields:{},touchedFields:N.keepTouched?t.touchedFields:{},errors:N.keepErrors?t.errors:{},isSubmitSuccessful:N.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:a})},fn=(E,N)=>ln(pn(E)?E(s):E,N),Zn=(E,N={})=>{const D=W(n,E),$=D&&D._f;if($){const G=$.refs?$.refs[0]:$.ref;G.focus&&(G.focus(),N.shouldSelect&&pn(G.select)&&G.select())}},er=E=>{t={...t,...E}},Yn={control:{register:de,unregister:re,getFieldState:J,handleSubmit:Ce,setError:ae,_subscribe:Z,_runSchema:R,_focusError:Le,_getWatch:q,_getDirty:L,_setValid:I,_setFieldArray:w,_setDisabledField:te,_setErrors:b,_getFieldArray:O,_reset:ln,_resetDefaultValues:()=>pn(r.defaultValues)&&r.defaultValues().then(E=>{fn(E,r.resetOptions),c.state.next({isLoading:!1})}),_removeUnmounted:S,_disableForm:Be,_subjects:c,_proxyFormState:u,get _fields(){return n},get _formValues(){return s},get _state(){return i},set _state(E){i=E},get _defaultValues(){return a},get _names(){return l},set _names(E){l=E},get _formState(){return t},get _options(){return r},set _options(E){r={...r,...E}}},subscribe:U,trigger:x,register:de,handleSubmit:Ce,watch:xe,setValue:B,getValues:H,reset:fn,resetField:_n,clearErrors:z,unregister:re,setError:ae,setFocus:Zn,getFieldState:J};return{...Yn,formControl:Yn}}function xa(e={}){const r=v.useRef(void 0),t=v.useRef(void 0),[n,a]=v.useState({isDirty:!1,isValidating:!1,isLoading:pn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:pn(e.defaultValues)?void 0:e.defaultValues});if(!r.current)if(e.formControl)r.current={...e.formControl,formState:n},e.defaultValues&&!pn(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...l}=Xb(e);r.current={...l,formState:n}}const s=r.current.control;return s._options=e,ti(()=>{const i=s._subscribe({formState:s._proxyFormState,callback:()=>a({...s._formState}),reRenderRoot:!0});return a(l=>({...l,isReady:!0})),s._formState.isReady=!0,i},[s]),v.useEffect(()=>s._disableForm(e.disabled),[s,e.disabled]),v.useEffect(()=>{e.mode&&(s._options.mode=e.mode),e.reValidateMode&&(s._options.reValidateMode=e.reValidateMode)},[s,e.mode,e.reValidateMode]),v.useEffect(()=>{e.errors&&(s._setErrors(e.errors),s._focusError())},[s,e.errors]),v.useEffect(()=>{e.shouldUnregister&&s._subjects.state.next({values:s._getWatch()})},[s,e.shouldUnregister]),v.useEffect(()=>{if(s._proxyFormState.isDirty){const i=s._getDirty();i!==n.isDirty&&s._subjects.state.next({isDirty:i})}},[s,n.isDirty]),v.useEffect(()=>{e.values&&!Sn(e.values,t.current)?(s._reset(e.values,{keepFieldsRef:!0,...s._options.resetOptions}),t.current=e.values,a(i=>({...i}))):s._resetDefaultValues()},[s,e.values]),v.useEffect(()=>{s._state.mount||(s._setValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),r.current.formState=Mu(n,s),r.current}function Qb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pl={exports:{}},Hr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl;function Zb(){if(yl)return Hr;yl=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var l in a)l!=="key"&&(s[l]=a[l])}else s=a;return a=s.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:s}}return Hr.Fragment=r,Hr.jsx=t,Hr.jsxs=t,Hr}var bl;function e0(){return bl||(bl=1,pl.exports=Zb()),pl.exports}var ve=e0();const n0=({children:e})=>{const r=g.Children.toArray(e);return r.length===0?null:ve.jsx(vt,{variant:"warning",size:"small",children:ve.jsx(Re,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:r.map(t=>ve.jsx(ne,{size:"small",children:t},r0(t)))})})},r0=e=>{if(g.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},At={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"},hl=gr(At),t0=({onClick:e=()=>{},erOverstyrt:r=!1})=>{const[t,n]=g.useState(r),a=()=>{t||(n(!0),e(!0))};return g.useEffect(()=>{n(r)},[r]),ve.jsx(Ne,{variant:t?"tertiary-neutral":"tertiary","data-testid":"overstyringsknapp",type:"button",size:"small",onClick:a,"aria-disabled":r,disabled:r,icon:t?ve.jsx($d,{"aria-hidden":!0,color:"var(--ax-neutral-400)",height:25,width:25,title:hl.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):ve.jsx(Yd,{"aria-hidden":!0,color:"var(--ax-accent-500)",height:25,width:25,title:hl.formatMessage({id:"OverstyringKnapp.Overstyring"})})})};var Il={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var wl;function a0(){return wl||(wl=1,function(e){(function(){var r={}.hasOwnProperty;function t(){for(var s="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(s=a(s,n.call(this,l)))}return s}function n(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var l in s)r.call(s,l)&&s[l]&&(i=a(i,this&&this[l]||l));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(Il)),Il.exports}var s0=a0();const ii=Qb(s0),i0="_borderbox_1a0x6_1",l0="_error_1a0x6_5",o0="_warning_1a0x6_8",u0={borderbox:i0,error:l0,warning:o0};ii.bind(u0);const d0="_aksjonspunkt_11wjs_1",m0="_erAksjonspunktApent_11wjs_4",g0="_erIkkeGodkjentAvBeslutter_11wjs_8",c0={aksjonspunkt:d0,erAksjonspunktApent:m0,erIkkeGodkjentAvBeslutter:g0};ii.bind(c0);const wa=({dateString:e,year:r,month:t,day:n})=>ve.jsx(ve.Fragment,{children:Ll(e,{year:r,month:t,day:n})}),Al=gr(At),f0=({text:e,okButtonText:r,showModal:t,cancel:n,submit:a})=>ve.jsxs(yn,{width:"small",open:t,"aria-label":e,onClose:n,children:[ve.jsx(yn.Body,{children:ve.jsx(dt,{size:"small",level:"2",children:e})}),ve.jsxs(yn.Footer,{children:[ve.jsx(Ne,{variant:"primary",size:"small",onClick:a,autoFocus:!0,type:"button",children:r||Al.formatMessage({id:"OkAvbrytModal.Ok"})}),ve.jsx(Ne,{variant:"secondary",size:"small",onClick:n,type:"button",children:Al.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),et=({dateStringFom:e,dateStringTom:r,showTodayString:t=!1})=>ve.jsx(ve.Fragment,{children:ad(e,r,{showTodayString:t})});gr(At);const k0="_divider_1jpov_1",v0="_dividerParagraf_1jpov_8",p0="_leftPanel_1jpov_11",y0="_rightPanel_1jpov_14",hs={divider:k0,dividerParagraf:v0,leftPanel:p0,rightPanel:y0},b0=ii.bind(hs),jl=({spaceUnder:e=!1,spaceAbove:r=!1,leftPanel:t=!1,rightPanel:n=!1,dividerParagraf:a=!1,className:s})=>ve.jsxs(ve.Fragment,{children:[r&&ve.jsx("div",{style:{marginBottom:"32px"}}),ve.jsx("div",{className:b0(s,{leftPanel:t,rightPanel:n}),children:ve.jsx("div",{className:a?hs.dividerParagraf:hs.divider})}),e&&ve.jsx("div",{style:{marginBottom:"32px"}})]}),Ku=()=>ve.jsx("span",{"data-testid":"editedIcon",children:ve.jsx(Jd,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});gr(At);const h0=gr(At),I0=({tekst:e,children:r})=>{const[t,n]=g.useState(!1);if(!e)return r;const a=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>{n(!1)},1e3)};return ve.jsx(Ru,{content:h0.formatMessage({id:t?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:ve.jsx("span",{"aria-hidden":"true",onClick:a,children:r??e})})},El={default:"_default_af3od_1",rød:"_rød_af3od_5"},Is=({beløp:e,kr:r=!1,rød:t=!1})=>{const n=e?.toString().replace(/\s/g,"");return ve.jsx(I0,{tekst:n,children:ve.jsxs("span",{className:t?El.rød:El.default,children:[n?sd(n):"-",n&&r&&" kr"]})})};function w0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ol={exports:{}},$r={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tl;function A0(){if(Tl)return $r;Tl=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var l in a)l!=="key"&&(s[l]=a[l])}else s=a;return a=s.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:s}}return $r.Fragment=r,$r.jsx=t,$r.jsxs=t,$r}var Nl;function j0(){return Nl||(Nl=1,Ol.exports=A0()),Ol.exports}var Oe=j0();const jt=e=>e.reduce((r,t,n)=>({...r,[n]:a=>t(a)||!0}),{}),Et=(e,r)=>r.split(".").reduce((t,n)=>t!==void 0?t[n]:t,e)?.message;var ws={exports:{}},E0=ws.exports,Rl;function O0(){return Rl||(Rl=1,function(e,r){(function(t,n){e.exports=n()})(E0,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,s=/\d\d/,i=/\d\d?/,l=/\d*[^-_:/,()\s\d]+/,o={},d=function(p){return(p=+p)+(p>68?1900:2e3)},u=function(p){return function(w){this[p]=+w}},m=[/[+-]\d\d:?(\d\d)?|Z/,function(p){(this.zone||(this.zone={})).offset=function(w){if(!w||w==="Z")return 0;var h=w.match(/([+-]|\d\d)/g),b=60*h[1]+(+h[2]||0);return b===0?0:h[0]==="+"?-b:b}(p)}],c=function(p){var w=o[p];return w&&(w.indexOf?w:w.s.concat(w.f))},k=function(p,w){var h,b=o.meridiem;if(b){for(var j=1;j<=24;j+=1)if(p.indexOf(b(j,0,w))>-1){h=j>12;break}}else h=p===(w?"pm":"PM");return h},y={A:[l,function(p){this.afternoon=k(p,!1)}],a:[l,function(p){this.afternoon=k(p,!0)}],Q:[a,function(p){this.month=3*(p-1)+1}],S:[a,function(p){this.milliseconds=100*+p}],SS:[s,function(p){this.milliseconds=10*+p}],SSS:[/\d{3}/,function(p){this.milliseconds=+p}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[s,u("day")],Do:[l,function(p){var w=o.ordinal,h=p.match(/\d+/);if(this.day=h[0],w)for(var b=1;b<=31;b+=1)w(b).replace(/\[|\]/g,"")===p&&(this.day=b)}],w:[i,u("week")],ww:[s,u("week")],M:[i,u("month")],MM:[s,u("month")],MMM:[l,function(p){var w=c("months"),h=(c("monthsShort")||w.map(function(b){return b.slice(0,3)})).indexOf(p)+1;if(h<1)throw new Error;this.month=h%12||h}],MMMM:[l,function(p){var w=c("months").indexOf(p)+1;if(w<1)throw new Error;this.month=w%12||w}],Y:[/[+-]?\d+/,u("year")],YY:[s,function(p){this.year=d(p)}],YYYY:[/\d{4}/,u("year")],Z:m,ZZ:m};function I(p){var w,h;w=p,h=o&&o.formats;for(var b=(p=w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(S,L,q){var O=q&&q.toUpperCase();return L||h[q]||t[q]||h[O].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(P,M,B){return M||B.slice(1)})})).match(n),j=b.length,A=0;A<j;A+=1){var T=b[A],R=y[T],F=R&&R[0],_=R&&R[1];b[A]=_?{regex:F,parser:_}:T.replace(/^\[|\]$/g,"")}return function(S){for(var L={},q=0,O=0;q<j;q+=1){var P=b[q];if(typeof P=="string")O+=P.length;else{var M=P.regex,B=P.parser,C=S.slice(O),V=M.exec(C)[0];B.call(L,V),S=S.replace(V,"")}}return function(x){var H=x.afternoon;if(H!==void 0){var J=x.hours;H?J<12&&(x.hours+=12):J===12&&(x.hours=0),delete x.afternoon}}(L),L}}return function(p,w,h){h.p.customParseFormat=!0,p&&p.parseTwoDigitYear&&(d=p.parseTwoDigitYear);var b=w.prototype,j=b.parse;b.parse=function(A){var T=A.date,R=A.utc,F=A.args;this.$u=R;var _=F[1];if(typeof _=="string"){var S=F[2]===!0,L=F[3]===!0,q=S||L,O=F[2];L&&(O=F[2]),o=this.$locale(),!S&&O&&(o=h.Ls[O]),this.$d=function(C,V,x,H){try{if(["x","X"].indexOf(V)>-1)return new Date((V==="X"?1e3:1)*C);var J=I(V)(C),z=J.year,ae=J.month,xe=J.day,Z=J.hours,U=J.minutes,re=J.seconds,te=J.milliseconds,de=J.zone,Le=J.week,Be=new Date,Ce=xe||(z||ae?1:Be.getDate()),_n=z||Be.getFullYear(),ln=0;z&&!ae||(ln=ae>0?ae-1:Be.getMonth());var fn,Zn=Z||0,er=U||0,kr=re||0,Yn=te||0;return de?new Date(Date.UTC(_n,ln,Ce,Zn,er,kr,Yn+60*de.offset*1e3)):x?new Date(Date.UTC(_n,ln,Ce,Zn,er,kr,Yn)):(fn=new Date(_n,ln,Ce,Zn,er,kr,Yn),Le&&(fn=H(fn).week(Le).toDate()),fn)}catch{return new Date("")}}(T,_,R,h),this.init(),O&&O!==!0&&(this.$L=this.locale(O).$L),q&&T!=this.format(_)&&(this.$d=new Date("")),o={}}else if(_ instanceof Array)for(var P=_.length,M=1;M<=P;M+=1){F[1]=_[M-1];var B=h.apply(this,F);if(B.isValid()){this.$d=B.$d,this.$L=B.$L,this.init();break}M===P&&(this.$d=new Date(""))}else j.call(this,A)}}})}(ws)),ws.exports}var T0=O0();const N0=w0(T0),R0="_textarea_14c7r_1",P0="_readOnlyField_14c7r_7",Pl={textarea:R0,readOnlyField:P0},_0=e=>e!=null&&e!=="",Fa=({label:e,value:r,isEdited:t=!1,type:n,hideLabel:a,size:s})=>_0(r)?Oe.jsxs(Re,{gap:"space-4",children:[e&&!a&&Oe.jsx(he,{size:s,children:e}),Oe.jsxs(Ie,{gap:"space-8",align:"center",wrap:!1,children:[Oe.jsx(Ps,{className:n==="textarea"?Pl.textarea:Pl.readOnlyField,size:s,children:r}),t&&Oe.jsx(Ku,{})]})]}):null;We.extend(N0);const at=({label:e,description:r,validate:t=[],hideLabel:n=!1,isReadOnly:a=!1,size:s="small",onChange:i,disabledDays:l,isEdited:o,defaultMonth:d,fromDate:u,toDate:m,...c})=>{const{name:k,control:y,disabled:I}=c,{formState:{errors:p}}=Qn(),{field:w}=wt({name:k,control:y,rules:{validate:g.useMemo(()=>jt(t),[t])}}),h=w.value?We(w.value,Dn,!0).format(Tt):"",[b,j]=g.useState(h),{datepickerProps:A,inputProps:T}=Gy({onDateChange:_=>{if(_!==void 0){const S=We(_).format(Dn);i&&i(S),w.onChange(S),j(We(S,Dn,!0).format(Tt))}},defaultSelected:w.value?We(w.value,Dn,!0).toDate():void 0,defaultMonth:d||(!w.value&&m?m:void 0),disabled:l}),R=g.useCallback(_=>{const S=We(_.target.value,Tt,!0).format(Dn),L=S!=="Invalid Date";j(_.target.value),i&&i(L?S:_.target.value),w.onChange(L?S:_.target.value)},[j,i,w]);if(a)return Oe.jsx(Fa,{label:e,value:w.value?We(w.value,Dn,!0).format(Tt):void 0,isEdited:o,hideLabel:n,size:s});const F={...A,fromDate:u,toDate:m,dropdownCaption:u&&m?!0:void 0};return Oe.jsx(pa,{...F,children:Oe.jsx(pa.Input,{...T,hideLabel:n,onChange:R,value:b,size:s,label:e,description:r,disabled:I,error:Et(p,k)})})},As=({name:e,control:r,label:t,validate:n=[],readOnly:a=!1,type:s,shouldValidateOnBlur:i=!1,onBlur:l,onChange:o,description:d,autoFocus:u,parse:m=T=>T,format:c=T=>T,normalizeOnBlur:k,isEdited:y,maxLength:I,autoComplete:p=!1,disabled:w,className:h,hideLabel:b,size:j="small",...A})=>{const{formState:{errors:T},trigger:R}=Qn(),{field:F}=wt({name:e,control:r,rules:{validate:g.useMemo(()=>jt(n),[n])}});return a?Oe.jsx(Fa,{label:t,value:F.value,isEdited:y,hideLabel:b,size:j}):Oe.jsx(qb,{size:j,hideLabel:b,description:d,label:t,error:Et(T,e),...F,value:F.value?c(F.value):"",autoFocus:u,autoComplete:p?void 0:"off",maxLength:I,disabled:w,type:s,className:h,onChange:_=>{const S=_.currentTarget.value?m(_.currentTarget.value):null;return o&&o(S),F.onChange(S)},onBlur:async _=>{if(F.onBlur(),i){const S=await R();l&&S&&l(_?.target?.value)}else l&&l(_?.target?.value);k&&F.onChange(_?.target?.value?k(m(_?.target?.value)):null)},...A})},Gu=({label:e,description:r,validate:t=[],onChange:n,children:a,className:s,isReadOnly:i=!1,size:l="small",isEdited:o=!1,hideLegend:d=!1,...u})=>{const{name:m,control:c}=u,{formState:{errors:k}}=Qn(),{field:y}=wt({name:m,control:c,rules:{validate:jt(t)}});return Oe.jsx(Ab,{name:m,value:y.value!==void 0?y.value:null,legend:Oe.jsxs(Ie,{justify:"center",gap:"space-8",children:[e,i&&o&&Oe.jsx(Ku,{})]}),hideLegend:d,disabled:i,description:r,size:l,error:Et(k,m),onChange:I=>{n&&n(I),y.onChange(I)},className:s,children:a})},q0=({label:e,selectValues:r,validate:t=[],readOnly:n=!1,description:a,hideValueOnDisable:s=!1,onChange:i,className:l,hideLabel:o,isEdited:d,size:u="small",...m})=>{const{name:c,control:k,disabled:y}=m,{formState:{errors:I}}=Qn(),{field:p}=wt({name:c,control:k,rules:{validate:g.useMemo(()=>jt(t),[t])}});if(n){const b=r.map(A=>A.props).find(A=>A.value===p.value),j=b?b.children:void 0;return Oe.jsx(Fa,{value:j,label:e,hideLabel:o,isEdited:d,size:u})}const w=p.value||"",h=!r.map(b=>b.props.value).includes(w)&&w!=="";return h&&console.warn(`No corresponding option found for value '${w}'`),Oe.jsxs(ys,{size:u,className:l,error:Et(I,c),label:e,description:a,value:s&&y||h?"":p.value,disabled:y,onChange:b=>{i&&i(b),p.onChange(b)},hideLabel:o,children:[Oe.jsx("option",{style:{display:"none"}}),",",r]})},D0="_textAreaFieldWithBadges_bdz0b_1",M0="_etikettWrapper_bdz0b_4",_l={textAreaFieldWithBadges:D0,etikettWrapper:M0},li=({name:e,control:r,label:t,readOnly:n,maxLength:a,badges:s,validate:i=[],parse:l=k=>k,className:o,description:d,isEdited:u,size:m="small",...c})=>{const{formState:{errors:k}}=Qn(),{field:y}=wt({name:e,control:r,rules:{validate:g.useMemo(()=>jt(i),[i])}});return n?Oe.jsx(Fa,{size:m,label:t,value:y.value,type:"textarea",isEdited:u,hideLabel:c.hideLabel}):Oe.jsxs("div",{className:s?_l.textAreaFieldWithBadges:null,children:[s&&Oe.jsx("div",{className:_l.etikettWrapper,children:s.map(({type:I,titleText:p})=>Oe.jsx(vb,{variant:I,size:"small",children:p},p))}),Oe.jsx(Pb,{size:m,label:t,description:d,className:o,autoComplete:"off",...y,onChange:I=>y.onChange(I.currentTarget.value!==""?l(I.currentTarget.value):null),value:y.value?y.value:"",error:Et(k,e),maxLength:a,...c})]})},Va=({formMethods:e,onSubmit:r,children:t,className:n,setDataOnUnmount:a})=>{const{handleSubmit:s,getValues:i}=e;return g.useEffect(()=>()=>{a&&a(i())},[]),Oe.jsx(Sb,{...e,children:Oe.jsx("form",{className:n,onSubmit:r?s(l=>r(l)):void 0,children:t})})},Uu=({submitCallback:e,cancelEvent:r,showModal:t,ventearsaker:n,erTilbakekreving:a,frist:s,ventearsak:i,visBrevErBestilt:l=!1,hasManualPaVent:o,defaultVenteårsak:d=null})=>{const u=Xn(),m=xa({defaultValues:x0(o,s,i??d)}),c=m.watch("frist"),k=m.watch("ventearsak"),y=C0(i,k),I=K0(s,c),p=!(s===c&&!y),w=B0(a,s,c,k);return f.jsx(Va,{formMethods:m,onSubmit:e,children:f.jsxs(yn,{width:"small",open:t,onClose:r,"aria-label":u.formatMessage({id:i?"SettPaVentModal.ErSettPaVent":"SettPaVentModal.SettesPaVent"}),children:[f.jsx(yn.Header,{children:f.jsx(dt,{size:"small",level:"2",children:f.jsx(Y,{id:i?"SettPaVentModal.ErSettPaVent":"SettPaVentModal.SettesPaVent"})})}),f.jsx(yn.Body,{children:f.jsxs(Re,{gap:"space-16",children:[(o||c)&&f.jsx(at,{name:"frist",control:m.control,label:f.jsx(Y,{id:"SettPaVentModal.Frist"}),validate:[dn,nt,id]}),f.jsx(q0,{name:"ventearsak",control:m.control,label:f.jsx(Y,{id:"SettPaVentModal.Arsak"}),validate:[dn],selectValues:n.filter(h=>!o||(a?L0(h,k):F0.some(b=>b===h.kode))).sort((h,b)=>h.navn.localeCompare(b.navn)).map(h=>f.jsx("option",{value:h.kode,children:h.navn},h.kode)),readOnly:!o}),l&&f.jsx(ne,{size:"small",children:f.jsx(Y,{id:"SettPaVentModal.BrevBlirBestilt"})}),o&&f.jsx(ne,{size:"small",children:f.jsx(Y,{id:"SettPaVentModal.EndreFrist"})}),!o&&w&&f.jsxs(f.Fragment,{children:[f.jsx(ne,{size:"small",children:f.jsx(Y,{id:"SettPaVentModal.UtløptFrist"})}),f.jsx(ne,{size:"small",children:f.jsx(Y,{id:"SettPaVentModal.HenleggeSaken"})})]})]})}),f.jsxs(yn.Footer,{children:[f.jsx(Ne,{size:"small",variant:"primary",style:{paddingInline:"36px"},onClick:p?ld:r,disabled:!y&&!I,children:f.jsx(Y,{id:"SettPaVentModal.Ok"})}),(!o||p||!l)&&f.jsx(Ne,{size:"small",variant:"secondary",onClick:r,type:"button",children:f.jsx(Y,{id:y||I?"SettPaVentModal.Avbryt":"SettPaVentModal.Lukk"})})]})]})})},S0=()=>{const e=We().toDate();return e.setDate(e.getDate()+28),We(e).format(Dn)},x0=(e,r,t)=>({ventearsak:t??void 0,frist:r||e===!1?r??void 0:S0()}),F0=[He.AVV_DOK,He.AVV_FODSEL,He.VENT_PÅ_BRUKERTILBAKEMELDING,He.UTV_FRIST,He.FOR_TIDLIG_SOKNAD,He.VENT_OPDT_INNTEKTSMELDING,He.VENT_UTLAND_TRYGD,He.UTVIDET_TILSVAR_FRIST,He.ENDRE_TILKJENT_YTELSE,He.VENT_PÅ_MULIG_MOTREGNING],V0=[He.VENT_PÅ_BRUKERTILBAKEMELDING,He.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG],L0=(e,r)=>V0.some(t=>t===e.kode)?e.kode===r:!0,B0=(e,r,t,n)=>{const a=e&&(!!t&&fi(t)===null||!!r&&fi(r)===null),s=n===He.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG;return e&&a&&s},C0=(e,r)=>!(e===r||!r&&!e),K0=(e,r)=>!(e===r||!r&&!e);Uu.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModal",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasManualPaVent:{required:!0,tsType:{name:"boolean"},description:""},frist:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},ventearsak:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},defaultVenteårsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const G0={"SettPaVentModal.ModalDescription":"Behandlingen settes på vent med frist","SettPaVentModal.ModalDescriptionErPaVent":"Behandlingen er satt på vent","SettPaVentModal.PaVent":"På vent","SettPaVentModal.SettesPaVent":"Behandlingen settes på vent","SettPaVentModal.ErSettPaVent":"Behandlingen er satt på vent","SettPaVentModal.Frist":"Frist","SettPaVentModal.Ok":"OK","SettPaVentModal.Avbryt":"Avbryt","SettPaVentModal.Lukk":"Lukk","SettPaVentModal.BrevBlirBestilt":"Brevet blir bestilt","SettPaVentModal.Arsak":"Årsak","SettPaVentModal.EndreFrist":"Du kan endre frist eller årsak før du fortsetter","SettPaVentModal.UtløptFrist":"OBS! Fristen på denne behandlingen er utløpt!","SettPaVentModal.HenleggeSaken":`Kontroller hvorfor Økonomi ikke har dannet et kravgrunnlag.
 Dersom det feilutbetalte beløpet er bortfalt skal saken henlegges.
For mer informasjon, se rutine under tilbakekreving.`},U0=gr(G0),Yu=({frist:e=null,ventearsak:r=null,hasManualPaVent:t=!1,...n})=>f.jsx(Bl,{value:U0,children:f.jsx(Uu,{frist:e,ventearsak:r,hasManualPaVent:t,...n})});Yu.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModalIndex",props:{cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},frist:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},ventearsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:""},hasManualPaVent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},defaultVenteårsak:{required:!1,tsType:{name:"string"},description:""}}};const oi=g.createContext({isDirty:!1,setDirty:()=>{}}),Hu=({children:e})=>{const[r,t]=g.useState(!1),n=g.useMemo(()=>({isDirty:r,setDirty:t}),[r,t]);return f.jsx(oi.Provider,{value:n,children:e})},ui=e=>{const r=g.useContext(oi);g.useEffect(()=>{r.setDirty(e)},[e])},Y0=()=>g.useContext(oi).isDirty;Hu.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const ql=(e,r)=>({arbeidsgiverIdent:e,arbeidsgiverNavn:r.navn,...r.erPrivatPerson?{erPrivatPerson:!0,arbeidsgiverFødselsdato:r.fødselsdato}:{erPrivatPerson:!1}}),Dt=e=>r=>r.arbeidsgiverIdent===e.arbeidsgiverIdent,H0=(e,r)=>{const{fom:t,tom:n,saksbehandlersVurdering:a,stillingsprosent:s,begrunnelse:i}=e;if(e.saksbehandlersVurdering)return e.saksbehandlersVurdering===me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverNavn:r,fom:t,tom:n,stillingsprosent:s,saksbehandlersVurdering:a??void 0,begrunnelse:i??void 0}:{saksbehandlersVurdering:a??void 0,begrunnelse:i??void 0}},$0=({saksbehandlersVurdering:e,begrunnelse:r})=>e?{saksbehandlersVurdering:e,begrunnelse:r??void 0}:void 0,W0=(e,r)=>e.filter(t=>t.arbeidsgiverIdent===r),z0=(e,r)=>r.map(t=>{const n=e.find(a=>J0(t,a));return{arbeidsforhold:t,inntektsmelding:n}}),J0=(e,r)=>r.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!r.internArbeidsforholdId||r.internArbeidsforholdId===e.internArbeidsforholdId),X0=e=>e.årsak?-1:1,Q0=(e,r)=>{const t=e.årsak,n=r.årsak;return t&&!n?-1:n&&!t?1:e.arbeidsgiverNavn.localeCompare(r.arbeidsgiverNavn)},Z0=(e,r)=>{const{arbeidsforhold:t,inntektsmeldinger:n,inntekter:a}=e,s=[...t.sort(X0)].reduce((l,o)=>{if(l.find(Dt(o)))return l;const u=t.filter(Dt(o)),m=ql(o.arbeidsgiverIdent,r[o.arbeidsgiverIdent]),c=W0(n,o.arbeidsgiverIdent),k=a.find(Dt(o))?.inntekter??[],y={...m,årsak:o.årsak??c[0]?.årsak??void 0,avklaring:H0(o,m.arbeidsgiverNavn),arbeidsforholdForRad:u,inntektsmeldingerForRad:c,inntektsposter:k};return l.concat(y)},[]),i=n.filter(l=>!t.some(o=>l.arbeidsgiverIdent===o.arbeidsgiverIdent)).map(l=>{const o=ql(l.arbeidsgiverIdent,r[l.arbeidsgiverIdent]),d=a.find(Dt(l))?.inntekter??[];return{...o,årsak:l.årsak??void 0,avklaring:$0(l),arbeidsforholdForRad:[],inntektsmeldingerForRad:[l],inntektsposter:d}});return s.concat(i).sort(Q0)},Dl=e=>{const r=e.findIndex(t=>t.årsak&&!t.avklaring);return r!==-1?[r]:[]};var os={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ml;function eh(){return Ml||(Ml=1,function(e){(function(){var r={}.hasOwnProperty;function t(){for(var s="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(s=a(s,n.call(this,l)))}return s}function n(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var l in s)r.call(s,l)&&s[l]&&(i=a(i,this&&this[l]||l));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(os)),os.exports}var nh=eh();const rh=Fl(nh),$u=({saksnummer:e,journalpostId:r,dokumentId:t,dokumentTittel:n,children:a})=>{const s=`${r}-${t}`,i=fd(e,r,t);return f.jsx(Qs,{href:i,target:s,rel:"noopener noreferrer",onClick:th(n),children:a??n})},th=e=>r=>{e&&(r.preventDefault(),kd(r.currentTarget.href,r.currentTarget.target,e))};$u.__docgenInfo={description:"",methods:[],displayName:"DokumentLink",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},journalpostId:{required:!0,tsType:{name:"string"},description:""},dokumentId:{required:!0,tsType:{name:"string"},description:""},dokumentTittel:{required:!1,tsType:{name:"string"},description:""}}};const ah="_inline_glms2_1",sh="_docIcon_glms2_9",ih="_phoneIcon_glms2_14",us={inline:ah,docIcon:sh,phoneIcon:ih},st=({saksnummer:e,arbeidsforhold:r,inntektsmelding:t,skalViseArbeidsforholdId:n,alleKodeverk:a,ikkeVisInfo:s,radData:i})=>f.jsxs(f.Fragment,{children:[f.jsxs(Re,{gap:"space-16",children:[!s&&f.jsxs(Ie,{gap:"space-16",children:[f.jsx(he,{size:"small",children:f.jsx(Y,{id:i.erPrivatPerson?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),f.jsx(ne,{size:"small",children:i.erPrivatPerson?f.jsx(wa,{dateString:i.arbeidsgiverFødselsdato}):i.arbeidsgiverIdent})]}),n&&f.jsxs(Ie,{gap:"space-16",children:[f.jsx(he,{size:"small",children:f.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),f.jsx(ne,{size:"small",children:t.eksternArbeidsforholdId})]}),r&&f.jsxs(f.Fragment,{children:[f.jsxs(Ie,{gap:"space-16",children:[f.jsx(he,{size:"small",children:f.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),f.jsx(ne,{size:"small",children:`${r.stillingsprosent}%`})]}),r.permisjonOgMangel&&f.jsxs(Ie,{gap:"space-16",children:[f.jsx(he,{size:"small",children:a.PermisjonsbeskrivelseType.find(l=>l.kode===r.permisjonOgMangel?.type)?.navn??""}),f.jsx(ne,{size:"small",children:f.jsx(et,{dateStringFom:r.permisjonOgMangel.permisjonFom,dateStringTom:r.permisjonOgMangel.permisjonTom})})]})]}),f.jsxs(Ie,{gap:"space-16",children:[f.jsx(he,{size:"small",children:f.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),f.jsx(ne,{size:"small",children:f.jsx(Is,{beløp:t.inntektPrMnd})})]}),f.jsxs(Ie,{gap:"space-16",children:[f.jsx(he,{size:"small",children:f.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),f.jsx(ne,{size:"small",children:f.jsx(Y,{id:t.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),t.refusjonPrMnd!==void 0&&t.refusjonPrMnd!==null&&f.jsxs(Ie,{gap:"space-16",children:[f.jsx(he,{size:"small",children:f.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),f.jsx(ne,{size:"small",children:f.jsx(Is,{beløp:t.refusjonPrMnd})})]}),f.jsxs($u,{saksnummer:e,journalpostId:t.journalpostId,dokumentId:t.dokumentId,children:[f.jsx(ne,{size:"small",className:us.inline,children:f.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})}),f.jsx(Cd,{className:us.docIcon})]})]}),f.jsxs(Ie,{gap:"space-16",children:[f.jsx(Qd,{className:us.phoneIcon}),f.jsxs(Re,{gap:"space-4",children:[f.jsx(he,{size:"small",children:f.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),f.jsx(Nr,{children:t.kontaktpersonNavn}),f.jsx(Nr,{children:f.jsx(Y,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:t.kontaktpersonNummer}})})]})]})]});st.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const lh="_inline_p47ci_1",oh="_aksjonpunktImage_p47ci_5",uh="_arrow_p47ci_12",dh="_ikkeMottatt_p47ci_18",mh="_skiller_p47ci_30",nr={inline:lh,aksjonpunktImage:oh,arrow:uh,ikkeMottatt:dh,skiller:mh},di=({saksnummer:e,alleKodeverk:r,radData:t})=>{const n=Xn(),[a,s]=g.useState({}),{arbeidsforholdForRad:i,inntektsmeldingerForRad:l,arbeidsgiverIdent:o,erPrivatPerson:d}=t,u=i.length===1,m=z0(l,i);return f.jsxs(Re,{gap:"space-16",children:[f.jsxs(Ie,{gap:"space-16",children:[f.jsx(he,{size:"small",children:f.jsx(Y,{id:d?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),f.jsx(ne,{size:"small",children:d?f.jsx(wa,{dateString:t.arbeidsgiverFødselsdato}):o})]}),!u&&f.jsxs(f.Fragment,{children:[f.jsx(jl,{dividerParagraf:!0,className:nr.skiller}),m.map(({arbeidsforhold:c,inntektsmelding:k})=>f.jsxs(v.Fragment,{children:[f.jsxs(Re,{gap:"space-8",children:[f.jsxs(Ie,{gap:"space-16",children:[f.jsx(he,{size:"small",children:f.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),f.jsxs("div",{children:[c?.eksternArbeidsforholdId&&c.eksternArbeidsforholdId.length<50&&f.jsx("div",{children:f.jsx(ne,{size:"small",children:c.eksternArbeidsforholdId})}),c?.eksternArbeidsforholdId&&c.eksternArbeidsforholdId.length>=50&&f.jsx(Ru,{content:gh(c.eksternArbeidsforholdId),children:f.jsx(ne,{size:"small",children:`${c.eksternArbeidsforholdId.substring(0,50)}...`})}),!c.eksternArbeidsforholdId&&f.jsx(ne,{size:"small",children:"-"})]}),k&&f.jsxs(f.Fragment,{children:[f.jsx(Er,{}),f.jsx(he,{size:"small",children:f.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!k&&f.jsxs(f.Fragment,{children:[f.jsx(Er,{}),f.jsxs("div",{children:[f.jsx(_s,{className:nr.aksjonpunktImage,title:n.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),f.jsx("div",{className:nr.ikkeMottatt,children:f.jsx(he,{size:"small",children:f.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),f.jsxs(Ie,{gap:"space-16",children:[f.jsx(he,{size:"small",children:f.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),f.jsx(ne,{size:"small",children:f.jsx(et,{dateStringFom:c.fom,dateStringTom:c.tom})}),k&&f.jsxs(f.Fragment,{children:[f.jsx(Er,{}),f.jsx(ne,{size:"small",children:f.jsx(wa,{dateString:k.motattDato})})]})]}),f.jsxs(Ie,{gap:"space-16",children:[f.jsx(he,{size:"small",children:f.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),f.jsx(ne,{size:"small",children:`${c.stillingsprosent}%`})]}),c.permisjonOgMangel&&f.jsxs(Ie,{gap:"space-16",children:[f.jsx(he,{size:"small",children:r.PermisjonsbeskrivelseType.find(y=>y.kode===c.permisjonOgMangel?.type)?.navn??""}),f.jsx(ne,{size:"small",children:f.jsx(et,{dateStringFom:c.permisjonOgMangel.permisjonFom,dateStringTom:c.permisjonOgMangel.permisjonTom})})]}),k&&f.jsxs(f.Fragment,{children:[c.internArbeidsforholdId&&a[c.internArbeidsforholdId]&&f.jsx(st,{saksnummer:e,inntektsmelding:k,skalViseArbeidsforholdId:!1,radData:t,alleKodeverk:r}),f.jsxs(Qs,{onClick:y=>{y.preventDefault(),s(I=>{if(!c.internArbeidsforholdId)return I;const p=I[c.internArbeidsforholdId];return{...I,[c.internArbeidsforholdId]:p===void 0||p===!1}})},href:"",children:[f.jsx("span",{children:f.jsx(ne,{size:"small",className:nr.inline,children:f.jsx(Y,{id:!c.internArbeidsforholdId||!a[c.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),c.internArbeidsforholdId&&a[c.internArbeidsforholdId]?f.jsx($l,{className:nr.arrow}):f.jsx(mt,{className:nr.arrow})]})]})]}),f.jsx(jl,{dividerParagraf:!0,className:nr.skiller})]},`${c.arbeidsgiverIdent}${c.internArbeidsforholdId}`))]}),u&&m.length>0&&m[0].inntektsmelding&&f.jsx(st,{saksnummer:e,radData:t,arbeidsforhold:i[0],inntektsmelding:m[0].inntektsmelding,skalViseArbeidsforholdId:l.length>1,alleKodeverk:r,ikkeVisInfo:!0}),u&&l.length===0&&f.jsxs(f.Fragment,{children:[f.jsxs(Ie,{gap:"space-16",children:[f.jsx(he,{size:"small",children:f.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),f.jsx(ne,{size:"small",children:`${i[0].stillingsprosent}%`})]}),i[0].permisjonOgMangel&&f.jsxs(Ie,{gap:"space-16",children:[f.jsx(he,{size:"small",children:r.PermisjonsbeskrivelseType.find(c=>c.kode===i[0].permisjonOgMangel?.type)?.navn??""}),f.jsx(ne,{size:"small",children:f.jsx(et,{dateStringFom:i[0].permisjonOgMangel.permisjonFom,dateStringTom:i[0].permisjonOgMangel.permisjonTom})})]})]})]})},gh=e=>{const r=Math.ceil(e.length/25);return Array.from({length:r},(n,a)=>e.slice(a*25,a*25+25)).join("-")};di.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const ch="_bredde_gb3eb_1",fh="_inline_gb3eb_9",kh="_arrow_gb3eb_13",Mt={bredde:ch,inline:fh,arrow:kh},js=({saksnummer:e,skjæringstidspunkt:r,alleKodeverk:t,radData:n})=>{const[a,s]=g.useState(!1),{inntektsposter:i,arbeidsforholdForRad:l}=n,o=vh(r,i),d=l.length===1,u=i.length>0&&i.some(m=>m.beløp>0);return f.jsxs(Re,{gap:"space-32",children:[f.jsx(di,{saksnummer:e,alleKodeverk:t,radData:n}),u&&f.jsxs(Re,{gap:"space-8",children:[f.jsx(he,{size:"small",children:f.jsx(Y,{id:d?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),f.jsx(Re,{gap:"space-4",children:o.filter((m,c)=>a?!0:c<3).map(m=>f.jsxs(Ie,{gap:"space-8",className:Mt.bredde,children:[f.jsx(ne,{size:"small",children:f.jsx(Y,{id:`ArbeidsforholdInformasjonPanel.${We(m.fom).month()+1}`})}),f.jsx(ne,{size:"small",children:We(m.fom).year()}),f.jsx(Er,{}),f.jsx(ne,{size:"small",children:f.jsx(Is,{beløp:m.beløp})})]},m.fom))}),f.jsxs(Qs,{onClick:m=>{m.preventDefault(),s(!a)},href:"",children:[f.jsx("span",{children:f.jsx(ne,{size:"small",className:Mt.inline,children:f.jsx(Y,{id:a?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),a?f.jsx($l,{className:Mt.arrow}):f.jsx(mt,{className:Mt.arrow})]})]}),!u&&f.jsx(he,{size:"small",children:f.jsx(Y,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})})]})},vh=(e,r)=>{const n=We(e).subtract(1,"month").startOf("month"),a=n.subtract(12,"month"),s=[];for(let i=n;i.isAfter(a);i=i.subtract(1,"month")){const l=i.format(Dn),o=r.find(d=>We(d.fom).startOf("month").format(Dn)===l);s.push({beløp:o?.beløp||0,fom:l})}return s};js.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const ph="_hjelpetekst_6zosx_1",yh="_alertStripe_6zosx_5",bh="_hjelpetekstInnhold_6zosx_9",hh="_svg_6zosx_14",St={hjelpetekst:ph,alertStripe:yh,hjelpetekstInnhold:bh,svg:hh},Ih=Os(3),wh=Ts(1500),Ah=Kl(1),jh=Gl(100),Wu=({behandlingUuid:e,behandlingVersjon:r,radData:t,isReadOnly:n,registrerArbeidsforhold:a,lagreVurdering:s,lukkArbeidsforholdRad:i,oppdaterTabell:l})=>{const o=Xn(),d={saksbehandlersVurdering:t.avklaring?.saksbehandlersVurdering,begrunnelse:t.avklaring?.begrunnelse,fom:t.avklaring?.fom,tom:t.avklaring?.tom,stillingsprosent:t.avklaring?.stillingsprosent},u=xa({defaultValues:d});ui(u.formState.isDirty);const m=u.watch("saksbehandlersVurdering"),c=()=>{i(),u.reset(d)},k=t.inntektsmeldingerForRad[0],y=b=>{const j=Oh(l,t,k,b);return b.saksbehandlersVurdering===me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?a({behandlingUuid:e,behandlingVersjon:r,internArbeidsforholdRef:k.internArbeidsforholdId,arbeidsgiverNavn:t.arbeidsgiverNavn,arbeidsgiverIdent:k.arbeidsgiverIdent,vurdering:me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:b.begrunnelse,fom:b.fom,tom:b.tom,stillingsprosent:b.stillingsprosent}).then(j).finally(()=>u.reset(b)):s({behandlingUuid:e,behandlingVersjon:r,vurdering:b.saksbehandlersVurdering,begrunnelse:b.begrunnelse,arbeidsgiverIdent:k.arbeidsgiverIdent,internArbeidsforholdRef:k.internArbeidsforholdId}).then(j).finally(()=>u.reset(b))},I=g.useRef(null),[p,w]=g.useState(!1),h=()=>w(b=>!b);return f.jsxs(Re,{gap:"space-32",children:[f.jsx("div",{className:St.alertStripe,children:f.jsx(vt,{variant:"info",children:f.jsx(Y,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),f.jsx(Va,{formMethods:u,onSubmit:y,children:f.jsxs(Re,{gap:"space-16",children:[f.jsxs(Gu,{name:"saksbehandlersVurdering",control:u.control,label:f.jsxs(Ie,{gap:"space-8",children:[f.jsx(Y,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),f.jsx(zl,{className:St.svg,ref:I,onClick:h,title:o.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),f.jsx(Dr,{open:p,onClose:h,anchorEl:I.current,className:St.hjelpetekst,children:f.jsx(Dr.Content,{className:St.hjelpetekstInnhold,children:f.jsx(ne,{children:f.jsx(Y,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[dn],isReadOnly:n,children:[f.jsx(Or,{value:me.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD,size:"small",children:f.jsx(Y,{id:"ManglendeOpplysningerForm.TarKontakt"})}),f.jsx(Or,{value:me.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,size:"small",children:f.jsx(Y,{id:"ManglendeOpplysningerForm.GåVidere"})}),f.jsx(Or,{value:me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,size:"small",children:f.jsx(Y,{id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"})})]}),m===me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&f.jsxs(Ie,{gap:"space-16",children:[f.jsx(at,{name:"fom",control:u.control,label:f.jsx(Y,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[dn,nt],isReadOnly:n}),f.jsx(at,{name:"tom",control:u.control,label:f.jsx(Y,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[nt,Eh(u.getValues)],isReadOnly:n}),f.jsx(As,{name:"stillingsprosent",control:u.control,label:f.jsx(Y,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:b=>{const j=parseInt(b.toString(),10);return Number.isNaN(j)?b:j},validate:[dn,Cl,Ah,jh],readOnly:n,maxLength:3})]}),f.jsx(li,{name:"begrunnelse",control:u.control,label:f.jsx(Y,{id:"ManglendeOpplysningerForm.Begrunn"}),validate:[dn,Ih,wh,Ns],maxLength:1500,readOnly:n}),!n&&f.jsxs(Ie,{gap:"space-16",children:[f.jsx(Ne,{size:"small",variant:"secondary",loading:u.formState.isSubmitting,disabled:!u.formState.isDirty||u.formState.isSubmitting,children:f.jsx(Y,{id:"ManglendeOpplysningerForm.Lagre"})}),f.jsx(Ne,{size:"small",variant:"tertiary",loading:!1,disabled:u.formState.isSubmitting,onClick:c,type:"button",children:f.jsx(Y,{id:"ManglendeOpplysningerForm.Avbryt"})})]})]})})]})},Eh=e=>r=>{const t=e("fom");return t&&r?Ul(t)(r):null},Oh=(e,r,t,n)=>()=>{e(a=>a.map(s=>{if(t.arbeidsgiverIdent===s.arbeidsgiverIdent){const l=n.saksbehandlersVurdering===me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:t.arbeidsgiverIdent,fom:n.fom,tom:n.tom,stillingsprosent:n.stillingsprosent,begrunnelse:n.begrunnelse,saksbehandlersVurdering:n.saksbehandlersVurdering}:{begrunnelse:n.begrunnelse,saksbehandlersVurdering:n.saksbehandlersVurdering};return{...r,avklaring:l}}return s}))};Wu.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const Th="_alertStripe_i1zil_1",Nh="_hjelpetekst_i1zil_5",Rh="_hjelpetekstInnhold_i1zil_9",Ph="_svg_i1zil_14",xt={alertStripe:Th,hjelpetekst:Nh,hjelpetekstInnhold:Rh,svg:Ph},_h=Os(3),qh=Ts(1500),zu=({behandlingUuid:e,behandlingVersjon:r,radData:t,isReadOnly:n,lagreVurdering:a,lukkArbeidsforholdRad:s,oppdaterTabell:i})=>{const l=Xn(),{arbeidsforholdForRad:o,inntektsmeldingerForRad:d}=t,u={saksbehandlersVurdering:t.avklaring?.saksbehandlersVurdering,begrunnelse:t.avklaring?.begrunnelse},m=xa({defaultValues:u});ui(m.formState.isDirty);const c=o.length===1,k=()=>{s(),m.reset(u)},y=b=>{const j={behandlingUuid:e,behandlingVersjon:r,vurdering:b.saksbehandlersVurdering,arbeidsgiverIdent:t.arbeidsgiverIdent,internArbeidsforholdRef:c?o[0].internArbeidsforholdId:void 0,begrunnelse:b.begrunnelse};return a(j).then(Dh(i,t,b)).finally(()=>m.reset(b))},I=g.useRef(null),[p,w]=g.useState(!1),h=()=>w(b=>!b);return f.jsx(Va,{formMethods:m,onSubmit:y,children:f.jsxs(Re,{gap:"space-16",children:[!c&&d.length>0&&f.jsx("div",{className:xt.alertStripe,children:f.jsx(vt,{variant:"info",children:f.jsx(Y,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})})}),f.jsx(Gu,{name:"saksbehandlersVurdering",control:m.control,label:f.jsxs(Ie,{gap:"space-8",children:[f.jsx(Y,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),f.jsx(zl,{ref:I,onClick:h,className:xt.svg,title:l.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),f.jsx(Dr,{open:p,onClose:h,anchorEl:I.current,className:xt.hjelpetekst,children:f.jsx(Dr.Content,{className:xt.hjelpetekstInnhold,children:f.jsxs(Re,{gap:"space-16",children:[f.jsx(ne,{children:f.jsx(Y,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),f.jsx(ne,{children:f.jsx(Y,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),f.jsx(ne,{children:f.jsx(Y,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})})]}),validate:[dn],isReadOnly:n,children:f.jsxs(Re,{gap:"space-2",children:[f.jsx(Or,{value:me.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,size:"small",children:f.jsx(Y,{id:"InntektsmeldingInnhentesForm.TarKontakt"})}),!t.erPrivatPerson&&f.jsx(Or,{value:me.MELDING_TIL_ARBEIDSGIVER_NAV_NO,size:"small",children:f.jsx(Y,{id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"})}),f.jsx(Or,{value:me.FORTSETT_UTEN_INNTEKTSMELDING,size:"small",children:f.jsx(Y,{id:"InntektsmeldingInnhentesForm.GåVidere"})})]})}),f.jsx(li,{name:"begrunnelse",control:m.control,label:f.jsx(Y,{id:c?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),validate:[dn,_h,qh,Ns],maxLength:1500,readOnly:n}),!n&&f.jsxs(Ie,{gap:"space-16",children:[f.jsx(Ne,{size:"small",variant:"secondary",loading:m.formState.isSubmitting,disabled:!m.formState.isDirty||m.formState.isSubmitting,children:f.jsx(Y,{id:"InntektsmeldingInnhentesForm.Lagre"})}),f.jsx(Ne,{size:"small",variant:"tertiary",loading:!1,disabled:m.formState.isSubmitting,onClick:k,type:"button",children:f.jsx(Y,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]})]})})},Dh=(e,r,t)=>()=>{e(n=>n.map(a=>a.arbeidsgiverIdent===r.arbeidsgiverIdent?{...r,avklaring:{begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}}:a))};zu.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const it="342352362",Mh=Os(3),Sh=Ts(1500),xh=Kl(1),Fh=Gl(100),mi=({behandlingUuid:e,behandlingVersjon:r,isReadOnly:t,registrerArbeidsforhold:n,radData:a,lukkArbeidsforholdRad:s,erOverstyrt:i,oppdaterTabell:l,erNyttArbeidsforhold:o=!1})=>{const d=Xn(),[u,m]=g.useState(!1),c={fom:a?.avklaring?.fom,tom:a?.avklaring?.tom,stillingsprosent:a?.avklaring?.stillingsprosent,begrunnelse:a?.avklaring?.begrunnelse,arbeidsgiverNavn:a?.avklaring?.arbeidsgiverNavn},k=xa({defaultValues:c});ui(k.formState.isDirty);const y=()=>{s(),k.reset(c)},I=w=>{const h=Sl(me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,e,r,w);return n(h).then(()=>{l(Lh(w)),k.reset(w),o&&s()})},p=()=>{const w=k.getValues(),h=Sl(me.FJERN_FRA_BEHANDLINGEN,e,r,w);n(h).then(Bh(l,s,o))};return f.jsxs(Re,{gap:"space-16",children:[!a&&f.jsx(dt,{size:"small",level:"3",children:f.jsx(Y,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),f.jsx(Va,{formMethods:k,onSubmit:I,children:f.jsxs(Re,{gap:"space-24",children:[f.jsxs(Ie,{gap:"space-16",children:[i&&f.jsxs(f.Fragment,{children:[f.jsx(As,{name:"arbeidsgiverNavn",control:k.control,label:f.jsx(Y,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[dn],readOnly:t||!i}),f.jsx(at,{name:"fom",control:k.control,label:f.jsx(Y,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[dn,nt],isReadOnly:t||!i}),f.jsx(at,{name:"tom",control:k.control,label:f.jsx(Y,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[nt,Vh(k.getValues)],isReadOnly:t||!i})]}),f.jsx(As,{name:"stillingsprosent",control:k.control,label:f.jsx(Y,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:w=>{const h=parseInt(w.toString(),10);return Number.isNaN(h)?w:h},validate:[dn,Cl,xh,Fh],readOnly:t||!i,maxLength:3})]}),f.jsx(li,{name:"begrunnelse",control:k.control,label:f.jsx(Y,{id:"LeggTilArbeidsforholdForm.Begrunn"}),validate:[dn,Mh,Sh,Ns],maxLength:1500,readOnly:t||!i}),i&&f.jsxs(Ie,{gap:"space-16",children:[f.jsx(Ne,{size:"small",variant:"secondary",loading:k.formState.isSubmitting,disabled:!k.formState.isDirty||k.formState.isSubmitting,children:f.jsx(Y,{id:"LeggTilArbeidsforholdForm.Lagre"})}),f.jsx(Ne,{size:"small",variant:"tertiary",loading:!1,disabled:k.formState.isSubmitting,onClick:y,type:"button",children:f.jsx(Y,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),a&&f.jsxs(f.Fragment,{children:[f.jsx(Er,{}),f.jsx(Ne,{size:"small",variant:"tertiary",loading:!1,disabled:k.formState.isSubmitting,onClick:()=>m(!0),type:"button",icon:f.jsx(lm,{"aria-hidden":!0}),children:f.jsx(Y,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]})]})}),u&&f.jsx(f0,{text:d.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:p,cancel:()=>m(!1),showModal:!0})]})},Sl=(e,r,t,n)=>({vurdering:e,behandlingUuid:r,behandlingVersjon:t,arbeidsgiverIdent:it,begrunnelse:n.begrunnelse,arbeidsgiverNavn:n.arbeidsgiverNavn,fom:n.fom,tom:n.tom,stillingsprosent:n.stillingsprosent}),Vh=e=>r=>{const t=e("fom");return r&&t?Ul(t)(r):null},Lh=e=>r=>{const t={erPrivatPerson:!1,arbeidsgiverIdent:it,arbeidsgiverNavn:e.arbeidsgiverNavn,avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER},inntektsmeldingerForRad:[],inntektsposter:[],arbeidsforholdForRad:[]},n=r.findIndex(a=>a.arbeidsgiverIdent===it);return n===-1?r.concat(t):r.map((a,s)=>s===n?t:a)},Bh=(e,r,t)=>()=>{e(n=>n.filter(a=>a.arbeidsgiverIdent!==it)),t&&r()};mi.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ch="_exclamationmarkIcon_5sygz_1",Kh="_checkmarkIcon_5sygz_8",Gh="_panelOpen_5sygz_15",Uh="_panelOpenAp_5sygz_24",Yh="_row_5sygz_34",Hh="_isOpen_5sygz_38",$h="_isApOpen_5sygz_42",zr={exclamationmarkIcon:Ch,checkmarkIcon:Kh,panelOpen:Gh,panelOpenAp:Uh,row:Yh,isOpen:Hh,isApOpen:$h},Wh=rh.bind(zr),Ju=({saksnummer:e,behandlingUuid:r,behandlingVersjon:t,radData:n,isReadOnly:a,erOverstyrt:s,oppdaterTabell:i,registrerArbeidsforhold:l,lagreVurdering:o,toggleÅpenRad:d,erRadÅpen:u,alleKodeverk:m,skjæringstidspunkt:c})=>{const k=Xn(),{inntektsmeldingerForRad:y,arbeidsforholdForRad:I,arbeidsgiverNavn:p,avklaring:w,årsak:h}=n,b=w?.saksbehandlersVurdering===me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,j=I.length>0&&y.length>0&&!h,A=h===Ve.MANGLENDE_INNTEKTSMELDING,T=h===Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,R=!!h&&!w?.saksbehandlersVurdering,F=I.length>0&&y.length===0&&!h&&!b,_=I.length===0&&y.length>0&&!h,S=Jh(I,w);return f.jsxs(je.ExpandableRow,{open:u,onOpenChange:d,expandOnRowClick:!0,togglePlacement:"right",contentGutter:"none",className:Wh("row",{isOpen:u,isApOpen:R}),content:f.jsxs(Re,{gap:"space-16",className:R?zr.panelOpenAp:zr.panelOpen,children:[b&&f.jsx(mi,{behandlingUuid:r,behandlingVersjon:t,isReadOnly:!1,registrerArbeidsforhold:l,radData:n,lukkArbeidsforholdRad:d,erOverstyrt:s,oppdaterTabell:i}),j&&f.jsx(di,{saksnummer:e,alleKodeverk:m,radData:n}),_&&f.jsx(st,{saksnummer:e,arbeidsforhold:I.length>0?I[0]:void 0,inntektsmelding:y[0],skalViseArbeidsforholdId:!1,alleKodeverk:m,radData:n}),A&&f.jsxs(f.Fragment,{children:[f.jsx(js,{saksnummer:e,skjæringstidspunkt:c,alleKodeverk:m,radData:n}),f.jsx(zu,{behandlingUuid:r,behandlingVersjon:t,isReadOnly:a,radData:n,lagreVurdering:o,lukkArbeidsforholdRad:d,oppdaterTabell:i})]}),T&&f.jsxs(f.Fragment,{children:[f.jsx(st,{saksnummer:e,inntektsmelding:y[0],skalViseArbeidsforholdId:y.length>1,radData:n,alleKodeverk:m}),f.jsx(Wu,{behandlingUuid:r,behandlingVersjon:t,radData:n,isReadOnly:a,registrerArbeidsforhold:l,lagreVurdering:o,lukkArbeidsforholdRad:d,oppdaterTabell:i})]}),F&&f.jsx(js,{saksnummer:e,skjæringstidspunkt:c,alleKodeverk:m,radData:n})]}),children:[f.jsxs(je.DataCell,{children:[!R&&f.jsx(Md,{title:k.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:zr.checkmarkIcon}),R&&f.jsx(_s,{title:k.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:zr.exclamationmarkIcon})]}),f.jsx(je.DataCell,{children:f.jsx(ne,{children:p})}),f.jsx(je.DataCell,{children:f.jsx(ne,{children:S?.fom?f.jsx(et,{dateStringFom:S.fom,dateStringTom:S.tom}):"-"})}),f.jsx(je.DataCell,{children:f.jsx(ne,{children:f.jsx(Y,{id:zh(b,I.length>0)})})}),f.jsx(je.DataCell,{children:f.jsxs(ne,{children:[I.length<2&&y.length===1&&f.jsx(wa,{dateString:y[0].motattDato}),!A&&I.length>1&&y.length===I.length&&f.jsx(Y,{id:"ArbeidsforholdRad.Mottatt"}),(b||A&&y.length<I.length)&&f.jsx(Y,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})},zh=(e,r)=>e?"ArbeidsforholdRad.Saksbehandler":r?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",Jh=(e,r)=>{if(r?.saksbehandlersVurdering===me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||r?.saksbehandlersVurdering===me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:r?.fom,tom:r?.tom};const t=e.reduce((n,a)=>({fom:n.fom&&We(n.fom).isBefore(a.fom)?n.fom:a.fom,tom:n.tom&&We(n.tom).isAfter(a.tom)?n.tom:a.tom}),{fom:void 0,tom:void 0});return t.fom?t:void 0};Ju.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatus",required:!0}},{key:"BehandlingType",value:{name:"BehandlingType",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakType",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatus",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktor",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsen",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:"'BARN' | 'FBARN' | 'VOKSEN' | 'ADVOKAT' | 'ANNEN_F'",elements:[{name:"literal",value:"'BARN'"},{name:"literal",value:"'FBARN'"},{name:"literal",value:"'VOKSEN'"},{name:"literal",value:"'ADVOKAT'"},{name:"literal",value:"'ANNEN_F'"}],required:!0}},{key:"VilkårType",value:{name:"VilkarType",required:!0}},{key:"VirksomhetType",value:{name:"NaringsvirksomhetType",required:!0}},{key:"VurderÅrsak",value:{name:"VurderÅrsak",required:!0}}]}},{name:"union",raw:"'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'",elements:[{name:"literal",value:"'Avslagsårsak'"},{name:"literal",value:"'PeriodeResultatÅrsak'"},{name:"literal",value:"'GraderingAvslagÅrsak'"}]}],raw:"Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>",required:!0},value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const Xh="_alertStripe_mucgx_5",Qh={alertStripe:Xh},Xu=({behandling:e,aksjonspunkt:r,readOnly:t,arbeidOgInntekt:n,registrerArbeidsforhold:a,erOverstyrer:s,tabellData:i,settÅpneRadIndexer:l,setErOverstyrt:o,oppdaterTabell:d})=>{const u=Xn(),{arbeidsforhold:m,inntektsmeldinger:c}=n,[k,y]=g.useState(!1),[I,p]=g.useState(!1),w=()=>{o(!0),y(!0);const A=i.findIndex(T=>T.avklaring?.saksbehandlersVurdering===me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER);A!==-1&&l([A])},h=Zh(i,r),b=i.every(A=>A.arbeidsgiverIdent!==it),j=r?.status===Ye.OPPRETTET;return f.jsxs(Re,{gap:"space-32",children:[f.jsxs(Ie,{gap:"space-16",children:[f.jsx(dt,{size:"small",level:"3",children:f.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),s&&j&&!t&&f.jsx(t0,{onClick:w}),f.jsx(Er,{}),f.jsx(ne,{size:"small",children:f.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Ll(n.skjæringstidspunkt)}})})]}),f.jsxs(Re,{gap:"space-16",children:[h.length>0&&f.jsx(n0,{children:h.map(A=>u.formatMessage({id:A})).join(" ")}),m.length===0&&c.length===0&&s&&f.jsx("div",{className:Qh.alertStripe,children:f.jsx(vt,{variant:"info",children:f.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),k&&b&&!I&&f.jsx("div",{children:f.jsx(Ne,{size:"small",variant:"tertiary",icon:f.jsx(em,{"aria-hidden":!0}),onClick:()=>p(!0),children:f.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})})}),I&&f.jsx(mi,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:a,lukkArbeidsforholdRad:()=>p(!1),oppdaterTabell:d,erOverstyrt:!0,erNyttArbeidsforhold:!0})]})]})},Zh=(e,r)=>{const t=e.some(i=>i.årsak===Ve.MANGLENDE_INNTEKTSMELDING),n=e.some(i=>i.årsak===Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),a=r?.status===Ye.OPPRETTET,s=[];return a&&t&&s.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),a&&n&&s.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),s};Xu.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"intersection",raw:`BehandlingFellesData &
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
}>`,required:!1}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"ApiLink[]",required:!0}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"språkkode",value:{name:"string",required:!0}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
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
| '5069'
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
| "UNDEFINED('null')"
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:"Aksjonspunkt[]",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!0}},{key:"taskStatus",value:{name:"union",raw:`{
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
}>`}]},description:""},aksjonspunkt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse: string | null;
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid: string | null;
  endretTidspunkt: string | null;
  endretAv: string | null;
}`,signature:{properties:[{key:"definisjon",value:{name:"union",raw:`| '5001'
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
| '5069'
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
| "UNDEFINED('null')"
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:"foreldrepenger_behandlingslager_behandling_vilkår_VilkårType | null",elements:[{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}]},{name:"null"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak> | null",elements:[{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>"},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const eI="_alertStripe_x50kg_1",nI="_headerRow_x50kg_5",xl={alertStripe:eI,headerRow:nI},Qu=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:r,registrerArbeidsforhold:t,lagreVurdering:n,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:i})=>{const[l,o]=g.useState(!1),[d,u]=g.useState(!1),[m,c]=g.useState(!1),{alleKodeverk:k,submitCallback:y,aksjonspunkterForPanel:I,behandling:p,fagsak:w,isReadOnly:h}=od(),b=I.length>0?I[0]:void 0,{mellomlagretFormData:j,setMellomlagretFormData:A}=ud(),[T,R]=g.useState(j??Z0(e,r)),[F,_]=g.useState(Dl(T)),S=Y0();g.useEffect(()=>()=>{A(T)},[T]);const L=U=>{F.some(re=>re===U)?_(F.filter(re=>re!==U)):_(F.concat(U))},q=g.useRef(null),O=U=>{R(U),_(Dl(U(T))),q?.current?.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},P=()=>{o(!0),y({kode:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},M=()=>{o(!0),i()},B=U=>{o(!0),u(!1);const{frist:re,ventearsak:te}=U;te&&s({frist:re,ventearsak:te})},C=T.some(U=>U.avklaring?.saksbehandlersVurdering===me.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||U.avklaring?.saksbehandlersVurdering===me.MELDING_TIL_ARBEIDSGIVER_NAV_NO||U.avklaring?.saksbehandlersVurdering===me.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD),V=T.every(U=>!U.årsak||U.årsak&&U.avklaring),x=b===void 0,H=b?.status===Ye.UTFORT,J=b?.status===Ye.OPPRETTET,ae=!h&&(H||a&&x),xe=!h&&J&&V&&!S&&C,Z=!h&&J&&V&&!S&&!C;return f.jsxs(Re,{gap:"space-16",children:[f.jsx(Xu,{behandling:p,aksjonspunkt:b,readOnly:h,arbeidOgInntekt:e,registrerArbeidsforhold:t,erOverstyrer:a,tabellData:T,settÅpneRadIndexer:_,setErOverstyrt:c,oppdaterTabell:O}),f.jsxs(je,{ref:q,children:[f.jsx(je.Header,{children:f.jsxs(je.Row,{className:xl.headerRow,children:[f.jsx(je.HeaderCell,{scope:"col"}),f.jsx(je.HeaderCell,{scope:"col",children:f.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Arbeidsforhold"})}),f.jsx(je.HeaderCell,{scope:"col",children:f.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Periode"})}),f.jsx(je.HeaderCell,{scope:"col",children:f.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Kilde"})}),f.jsx(je.HeaderCell,{scope:"col",children:f.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt"})}),f.jsx(je.HeaderCell,{scope:"col"})]})}),f.jsx(je.Body,{children:T.map((U,re)=>f.jsx(Ju,{saksnummer:w.saksnummer,behandlingUuid:p.uuid,behandlingVersjon:p.versjon,radData:U,skjæringstidspunkt:e.skjæringstidspunkt,isReadOnly:h||H||x,registrerArbeidsforhold:t,lagreVurdering:n,toggleÅpenRad:()=>L(re),erOverstyrt:m,oppdaterTabell:O,erRadÅpen:F.includes(re),alleKodeverk:k},`${U.arbeidsgiverNavn}${U.arbeidsgiverIdent}`))})]}),xe&&f.jsxs("div",{children:[f.jsx(Ne,{size:"small",variant:"primary",disabled:l,onClick:()=>u(!0),type:"button",children:f.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),f.jsx(Yu,{submitCallback:B,cancelEvent:()=>u(!1),defaultVenteårsak:He.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:k.Venteårsak,erTilbakekreving:!1,showModal:d,frist:null})]}),Z&&f.jsx("div",{children:f.jsx(Ne,{size:"small",variant:"primary",disabled:l,loading:l,onClick:P,type:"button",children:f.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})})}),ae&&f.jsxs(Re,{gap:"space-16",children:[f.jsx("div",{className:xl.alertStripe,children:f.jsx(vt,{variant:"info",children:f.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),f.jsx("div",{children:f.jsx(Ne,{size:"small",variant:"secondary",disabled:l,loading:l,onClick:M,type:"button",children:f.jsx(Y,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})})]})]})};Qu.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const rI={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?"},tI=gr(rI),Es=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:r,registrerArbeidsforhold:t,lagreVurdering:n,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:i})=>f.jsx(Bl,{value:tI,children:f.jsx(Hu,{children:f.jsx(Qu,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:r,registrerArbeidsforhold:t,lagreVurdering:n,erOverstyrer:a,settBehandlingPåVentCallback:s,åpneForNyVurdering:i})})});Es.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:Ft}=__STORYBOOK_MODULE_ACTIONS__,zn="342352362",Xe={innsendingstidspunkt:"2021-12-06T00:00:00",kildeSystem:"Altinn",bortfalteNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",behandlingsIdeer:[],tilknyttedeBehandlingIder:[],aktiveNaturalytelser:[]},lI={title:"fakta/fakta-arbeid-og-inntekter",component:Es,decorators:[dd,md],args:{arbeidsgiverOpplysningerPerId:{},lagreVurdering:Ft("onLagreVurdering"),registrerArbeidsforhold:Ft("onRegistrerArbeidsforhold"),åpneForNyVurdering:Ft("onÅpneForNyVurdering"),settBehandlingPåVentCallback:Ft("onSettBehandlingPåVentCallback"),erOverstyrer:!1},render:e=>f.jsx(Es,{...e})},Vt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ve.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Tr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:41e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Lt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Bt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:me.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,begrunnelse:"Vil innehente inntektsmelding fordi..."}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},Ct={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[{...Xe,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},Kt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},Gt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:me.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},Ut={args:{aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:void 0,journalpostId:"1",dokumentId:"2"}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},Yt={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},Ht={args:{arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},$t={args:{aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{[zn]:{erPrivatPerson:!1,identifikator:zn,navn:"Telenor",referanse:zn}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:zn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},Wt={args:{arbeidsgiverOpplysningerPerId:{[zn]:{erPrivatPerson:!1,identifikator:zn,navn:"Telenor",referanse:zn}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:zn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:me.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0,isReadOnly:!0}},zt={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Tr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Jt={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",fom:"2021-12-01",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",stillingsprosent:80,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",inntektPrMnd:1e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"41925090",motattDato:"2021-11-06",journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Xt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"},910909092:{erPrivatPerson:!1,identifikator:"910909092",navn:"DNB",referanse:"910909092"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Xe,arbeidsgiverIdent:"910909092",eksternArbeidsforholdId:void 0,inntektPrMnd:1e4,internArbeidsforholdId:void 0,kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"55599999",motattDato:"2021-12-06",refusjonPrMnd:5e3,journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:31e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:3e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:3e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:3e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Qt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"9374546382674846453452720241327384837356378478393893847474783",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Xe,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001sdsfdsdfsdfwer",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8cwds",kontaktpersonNavn:"Espen Solstråle",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"1",motattDato:"2021-12-01",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD},{...Xe,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c8wew",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Zt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:void 0,permisjonOgMangel:{permisjonFom:"2022-10-01",type:Tr.PERMITTERING},saksbehandlersVurdering:null,begrunnelse:null},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d3",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Tr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Xe,inntektPrMnd:3e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:void 0}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},ea={args:{erOverstyrer:!0,isReadOnly:!0,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[{...Xe,inntektPrMnd:4e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"947064649",eksternArbeidsforholdId:void 0,internArbeidsforholdId:void 0,kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975324",dokumentId:"549168225",motattDato:"2022-02-15",årsak:void 0,begrunnelse:void 0,saksbehandlersVurdering:void 0}],arbeidsforhold:[],inntekter:[],skjæringstidspunkt:"2022-02-16"}}},na={args:{erOverstyrer:!1,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[],arbeidsforhold:[{arbeidsgiverIdent:"947064649",internArbeidsforholdId:"f98840f3-e74b-4255-ac33-b1cdcdb60311",eksternArbeidsforholdId:"2",fom:"2002-02-16",tom:"9999-12-31",stillingsprosent:20,årsak:void 0,saksbehandlersVurdering:null,begrunnelse:null}],inntekter:[],skjæringstidspunkt:"2022-02-05"}}},ra={args:{erOverstyrer:!1,aksjonspunkterForPanel:[{definisjon:rn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ye.OPPRETTET}],arbeidsgiverOpplysningerPerId:{342352362:{erPrivatPerson:!1,referanse:"342352362",identifikator:"342352362",navn:"Lagt til av saksbehandler"},947064649:{erPrivatPerson:!1,referanse:"947064649",identifikator:"947064649",navn:"SJOKKERENDE ELEKTRIKER"},972674818:{erPrivatPerson:!1,referanse:"972674818",identifikator:"972674818",navn:"PENGELØS SPAREBANK"}},arbeidOgInntekt:{inntektsmeldinger:[{...Xe,inntektPrMnd:2e4,refusjonPrMnd:void 0,arbeidsgiverIdent:"972674818",eksternArbeidsforholdId:void 0,internArbeidsforholdId:void 0,kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975527",dokumentId:"549168458",motattDato:"2022-02-16",årsak:void 0,begrunnelse:"her vil jeg mase på AG",saksbehandlersVurdering:me.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING}],arbeidsforhold:[{arbeidsgiverIdent:"947064649",internArbeidsforholdId:"6e220db0-5cdf-410f-b8a0-a78ac4ff87a1",eksternArbeidsforholdId:"2",fom:"2018-10-01",tom:"9999-12-31",stillingsprosent:50,årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:me.FORTSETT_UTEN_INNTEKTSMELDING,begrunnelse:"her trenger jeg ikke IM. ja ja"},{arbeidsgiverIdent:"972674818",internArbeidsforholdId:"3aee54db-af17-4b18-8c9c-897be1f4d572",eksternArbeidsforholdId:"1",fom:"2000-05-13",tom:"9999-12-31",stillingsprosent:100,årsak:void 0,saksbehandlersVurdering:null,begrunnelse:null}],inntekter:[{arbeidsgiverIdent:"947064649",inntekter:[{beløp:15e3,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]},{arbeidsgiverIdent:"972674818",inntekter:[{beløp:2e4,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]}],skjæringstidspunkt:"2022-02-15"}}},ta={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!0,fødselsdato:"2000-01-01",identifikator:"910909088",navn:"Bettan",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:Tr.VELFERDSPERMISJON},saksbehandlersVurdering:null,begrunnelse:null}],inntektsmeldinger:[{...Xe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}};Vt.parameters={...Vt.parameters,docs:{...Vt.parameters?.docs,source:{originalSource:`{
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
}`,...Vt.parameters?.docs?.source}}};Lt.parameters={...Lt.parameters,docs:{...Lt.parameters?.docs,source:{originalSource:`{
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
}`,...Lt.parameters?.docs?.source}}};Bt.parameters={...Bt.parameters,docs:{...Bt.parameters?.docs,source:{originalSource:`{
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
}`,...Bt.parameters?.docs?.source}}};Ct.parameters={...Ct.parameters,docs:{...Ct.parameters?.docs,source:{originalSource:`{
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
}`,...Ct.parameters?.docs?.source}}};Kt.parameters={...Kt.parameters,docs:{...Kt.parameters?.docs,source:{originalSource:`{
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
}`,...Kt.parameters?.docs?.source}}};Gt.parameters={...Gt.parameters,docs:{...Gt.parameters?.docs,source:{originalSource:`{
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
}`,...Gt.parameters?.docs?.source}}};Ut.parameters={...Ut.parameters,docs:{...Ut.parameters?.docs,source:{originalSource:`{
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
}`,...Ut.parameters?.docs?.source}}};Yt.parameters={...Yt.parameters,docs:{...Yt.parameters?.docs,source:{originalSource:`{
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
}`,...Yt.parameters?.docs?.source}}};Ht.parameters={...Ht.parameters,docs:{...Ht.parameters?.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...Ht.parameters?.docs?.source}}};$t.parameters={...$t.parameters,docs:{...$t.parameters?.docs,source:{originalSource:`{
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
}`,...$t.parameters?.docs?.source}}};Wt.parameters={...Wt.parameters,docs:{...Wt.parameters?.docs,source:{originalSource:`{
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
}`,...Wt.parameters?.docs?.source}}};zt.parameters={...zt.parameters,docs:{...zt.parameters?.docs,source:{originalSource:`{
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
}`,...zt.parameters?.docs?.source}}};Jt.parameters={...Jt.parameters,docs:{...Jt.parameters?.docs,source:{originalSource:`{
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
}`,...Jt.parameters?.docs?.source}}};Xt.parameters={...Xt.parameters,docs:{...Xt.parameters?.docs,source:{originalSource:`{
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
}`,...Xt.parameters?.docs?.source}}};Qt.parameters={...Qt.parameters,docs:{...Qt.parameters?.docs,source:{originalSource:`{
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
}`,...Qt.parameters?.docs?.source}}};Zt.parameters={...Zt.parameters,docs:{...Zt.parameters?.docs,source:{originalSource:`{
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
}`,...Zt.parameters?.docs?.source}}};ea.parameters={...ea.parameters,docs:{...ea.parameters?.docs,source:{originalSource:`{
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
}`,...ea.parameters?.docs?.source}}};na.parameters={...na.parameters,docs:{...na.parameters?.docs,source:{originalSource:`{
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
}`,...na.parameters?.docs?.source}}};ra.parameters={...ra.parameters,docs:{...ra.parameters?.docs,source:{originalSource:`{
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
}`,...ra.parameters?.docs?.source}}};ta.parameters={...ta.parameters,docs:{...ta.parameters?.docs,source:{originalSource:`{
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
}`,...ta.parameters?.docs?.source}}};const oI=["InnhentInntektsmelding","InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret","InnhentInntektsmeldingDerBehandlingErAvsluttet","AvklarManglendeArbeidsforhold","AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet","AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig","IngenAksjonspunktMenTilbakehoppMuligForOverstyrer","SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer","SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer","ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet","ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet","ArbeidsforholdErOK","ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet","FlereArbeidsforholdOgInntekstemeldinger","ArbeidsforholdMedSammeOrgNr","ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre","FoerRegisterinnhenting","AutomatiskIgnorertInntektsmelding","EtterAtEtterspurtInntektsmeldingErKommet","SkalViseFødselsnummerForPrivatperson"];export{Wt as ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet,$t as ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet,zt as ArbeidsforholdErOK,Jt as ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet,Qt as ArbeidsforholdMedSammeOrgNr,Zt as ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre,na as AutomatiskIgnorertInntektsmelding,Ct as AvklarManglendeArbeidsforhold,Kt as AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet,Gt as AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig,ra as EtterAtEtterspurtInntektsmeldingErKommet,Xt as FlereArbeidsforholdOgInntekstemeldinger,ea as FoerRegisterinnhenting,Ut as IngenAksjonspunktMenTilbakehoppMuligForOverstyrer,Vt as InnhentInntektsmelding,Bt as InnhentInntektsmeldingDerBehandlingErAvsluttet,Lt as InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret,Ht as SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer,Yt as SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer,ta as SkalViseFødselsnummerForPrivatperson,oI as __namedExportsOrder,lI as default};
