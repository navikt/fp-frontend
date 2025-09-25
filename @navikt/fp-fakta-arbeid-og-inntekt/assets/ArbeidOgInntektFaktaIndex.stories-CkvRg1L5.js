import{g as Ol,r as g,u as er,_ as Ni,s as Ti,c as Br,a as ee,R as m,b as pa,d as Fr,T as sd,S as wr,m as od,e as Vr,f as xs,h as Nr,Q as ud,o as Hs,w as dd,i as ze,P as Gn,n as Ot,j as T,t as mn,O as at,I as Ed,k as gi,l as Js,p as Ys,q as Cs,v as $s,x as bl,y as hl,N as Ml,J as Ws,A as Ce,z as md,B as _d,C as Nd,D as Td}from"./iframe-ChgIb-FR.js";import{r as gd}from"./index-D0iBQxVI.js";import"./preload-helper-PPVm8Dsz.js";var Ll=gd();const ia=Ol(Ll);function vd(e,r){var t=e.values,n=Ni(e,["values"]),a=r.values,l=Ni(r,["values"]);return Ti(a,t)&&Ti(n,l)}function zs(e){var r=er(),t=r.formatMessage,n=r.textComponent,a=n===void 0?g.Fragment:n,l=e.id,i=e.description,s=e.defaultMessage,o=e.values,d=e.children,u=e.tagName,E=u===void 0?a:u,_=e.ignoreTag,N={id:l,description:i,defaultMessage:s},v=t(N,o,{ignoreTag:_});return typeof d=="function"?d(Array.isArray(v)?v:[v]):E?g.createElement(E,null,v):g.createElement(g.Fragment,null,v)}zs.displayName="FormattedMessage";var J=g.memo(zs,vd);J.displayName="MemoizedFormattedMessage";var tn=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.OVERSTYRING_AV_FAKTA_OM_FØDSEL="6019",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(tn||{}),Ee=(e=>(e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING",e.MELDING_TIL_ARBEIDSGIVER_NAV_NO="MELDING_TIL_ARBEIDSGIVER_NAV_NO",e.FORTSETT_UTEN_INNTEKTSMELDING="FORTSETT_UTEN_INNTEKTSMELDING",e.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD="KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD",e.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING="IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.OPPRETT_BASERT_PÅ_INNTEKTSMELDING="OPPRETT_BASERT_PÅ_INNTEKTSMELDING",e.MANUELT_OPPRETTET_AV_SAKSBEHANDLER="MANUELT_OPPRETTET_AV_SAKSBEHANDLER",e.FJERN_FRA_BEHANDLINGEN="FJERN_FRA_BEHANDLINGEN",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e))(Ee||{}),$e=(e=>(e.AVV_DOK="AVV_DOK",e.AVV_FODSEL="AVV_FODSEL",e.UTV_FRIST="UTV_FRIST",e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG="VENT_PÅ_TILBAKEKREVINGSGRUNNLAG",e.VENT_PÅ_BRUKERTILBAKEMELDING="VENT_PÅ_BRUKERTILBAKEMELDING",e.VENT_UTLAND_TRYGD="VENT_UTLAND_TRYGD",e.UTVIDET_TILSVAR_FRIST="UTV_TIL_FRIST",e.ENDRE_TILKJENT_YTELSE="ENDRE_TILKJENT_YTELSE",e.VENT_PÅ_MULIG_MOTREGNING="VENT_PÅ_MULIG_MOTREGNING",e.AVV_RESPONS_REVURDERING="AVV_RESPONS_REVURDERING",e.FOR_TIDLIG_SOKNAD="FOR_TIDLIG_SOKNAD",e.VENT_PÅ_SISTE_AAP_ELLER_DP_MELDEKORT="VENT_PÅ_SISTE_AAP_MELDEKORT",e.ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER="ANKE_VENTER_PAA_MERKNADER_FRA_BRUKER",e.ANKE_OVERSENDT_TIL_TRYGDERETTEN="ANKE_OVERSENDT_TIL_TRYGDERETTEN",e.VENT_PÅ_KORRIGERT_BESTEBEREGNING="VENT_PÅ_KORRIGERT_BESTEBEREGNING",e.VENT_OPDT_INNTEKTSMELDING="VENT_OPDT_INNTEKTSMELDING",e.VENT_OPPTJENING_OPPLYSNINGER="VENT_OPPTJENING_OPPLYSNINGER",e.VENT_INNTEKT_RAPPORTERINGSFRIST="VENT_INNTEKT_RAPPORTERINGSFRIST",e.VENT_MANGLENDE_SYKEMELDING="VENT_MANGLENDE_SYKEMELDING",e.VENT_SØKNAD_SENDT_INFORMASJONSBREV="VENT_SØKNAD_SENDT_INFORMASJONSBREV",e.VENT_ÅPEN_BEHANDLING="VENT_ÅPEN_BEHANDLING",e.VENT_KABAL="VENT_KABAL",e))($e||{}),hr=(e=>(e.PERMISJON="PERMISJON",e.PERMITTERING="PERMITTERING",e.PERMISJON_VED_MILITÆRTJENESTE="PERMISJON_VED_MILITÆRTJENESTE",e.UTDANNINGSPERMISJON_LOVFESTET="UTDANNINGSPERMISJON_LOVFESTET",e.UTDANNINGSPERMISJON="UTDANNINGSPERMISJON",e.UTDANNINGSPERMISJON_IKKE_LOVFESTET="UTDANNINGSPERMISJON_IKKE_LOVFESTET",e.VELFERDSPERMISJON="VELFERDSPERMISJON",e.ANNEN_PERMISJON_LOVFESTET="ANNEN_PERMISJON_LOVFESTET",e.PERMISJON_MED_FORELDREPENGER="PERMISJON_MED_FORELDREPENGER",e.ANNEN_PERMISJON_IKKE_LOVFESTET="ANNEN_PERMISJON_IKKE_LOVFESTET",e))(hr||{});const Id=(e,r,t)=>`/fpsak/api/dokument/hent-dokument?saksnummer=${e}&journalpostId=${r}&dokumentId=${t}`,fd=(e,r,t)=>{const n=globalThis.open(e,r);n&&setTimeout(()=>{n.document.title=t},1e3)},jr=e=>Br({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var cd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Kl=g.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:l,truncate:i,weight:s="regular",align:o,visuallyHidden:d,textColor:u}=e,E=cd(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=ee();return m.createElement(a,Object.assign({},E,{ref:r,className:_(t,"navds-body-long",`navds-body-long--${n}`,jr({spacing:l,truncate:i,weight:s,align:o,visuallyHidden:d,textColor:u}))}))});var Rd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ne=g.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:l,truncate:i,weight:s="regular",align:o,visuallyHidden:d,textColor:u}=e,E=Rd(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=ee();return m.createElement(a,Object.assign({},E,{ref:r,className:_(t,"navds-body-short",`navds-body-short--${n}`,jr({spacing:l,truncate:i,weight:s,align:o,visuallyHidden:d,textColor:u}))}))});var pd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Mr=g.forwardRef((e,r)=>{var{className:t,size:n="medium",spacing:a,uppercase:l,as:i="p",truncate:s,weight:o="regular",align:d,visuallyHidden:u,textColor:E}=e,_=pd(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:N}=ee();return m.createElement(i,Object.assign({},_,{ref:r,className:N(t,"navds-detail",jr({spacing:a,truncate:s,weight:o,align:d,visuallyHidden:u,textColor:E,uppercase:l}),{"navds-detail--small":n==="small"})}))});var Sd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const dt=g.forwardRef((e,r)=>{var{children:t,className:n,size:a,spacing:l,as:i="p",showIcon:s=!1}=e,o=Sd(e,["children","className","size","spacing","as","showIcon"]);const{cn:d}=ee();return m.createElement(i,Object.assign({},o,{ref:r,className:d("navds-error-message","navds-label",n,jr({spacing:l}),{"navds-label--small":a==="small","navds-error-message--show-icon":s})}),s&&m.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},m.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var kd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Et=g.forwardRef((e,r)=>{var{level:t="1",size:n,className:a,as:l,spacing:i,align:s,visuallyHidden:o,textColor:d}=e,u=kd(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:E}=ee(),_=l??`h${t}`;return m.createElement(_,Object.assign({},u,{ref:r,className:E(a,"navds-heading",`navds-heading--${n}`,jr({spacing:i,align:s,visuallyHidden:o,textColor:d}))}))});var Dd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};g.forwardRef((e,r)=>{var{className:t,spacing:n,as:a="p"}=e,l=Dd(e,["className","spacing","as"]);const{cn:i}=ee();return m.createElement(a,Object.assign({},l,{ref:r,className:i(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var Ad=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ce=g.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="label",spacing:l,visuallyHidden:i,textColor:s}=e,o=Ad(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:d}=ee();return m.createElement(a,Object.assign({},o,{ref:r,className:d(t,"navds-label",jr({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":n==="small"})}))});function Xs(e,r=166,t=!1){let n;function a(...l){const i=()=>{n=void 0,e.apply(this,l)};!n&&t&&i(),clearTimeout(n),n=setTimeout(i,r)}return a.clear=()=>{clearTimeout(n)},a}function Ye(e,r){const t=Object.entries(e).filter(([n])=>!r.includes(n));return Object.fromEntries(t)}const Lr=globalThis?.document?g.useLayoutEffect:()=>{};let vi=0;function yd(e){const[r,t]=g.useState(e),n=e||r;return g.useEffect(()=>{r==null&&(vi+=1,t(`aksel-id-${vi}`))},[r]),n}const Ii=m.useId;function Sn(e){var r;if(Ii!==void 0){const t=Ii();return e??t.replace(/(:)/g,"")}return(r=yd(e))!==null&&r!==void 0?r:""}function lt(e,r=[]){const t=g.useRef(e);return g.useEffect(()=>{t.current=e}),g.useCallback(((...n)=>{var a;return(a=t.current)===null||a===void 0?void 0:a.call(t,...n)}),r)}function Kr({value:e,defaultValue:r,onChange:t}){const n=lt(t),[a,l]=g.useState(r),i=e!==void 0,s=i?e:a,o=lt(d=>{const E=typeof d=="function"?d(s):d;i||l(E),n(E)},[i,n,s]);return[s,o]}let fi=0;function Od(e){const[r,t]=g.useState(e),n=e||r;return g.useEffect(()=>{r==null&&(fi+=1,t(`aksel-icon-${fi}`))},[r]),n}const ci=m.useId;function ye(e){var r;return ci!==void 0?ci().replace(/(:)/g,""):(r=Od(e))!==null&&r!==void 0?r:""}var bd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const hd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=bd(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",d:"M8.97 6.97a.75.75 0 1 1 1.06 1.06l-3.22 3.22H19a.75.75 0 0 1 0 1.5H6.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06z"}))});var Md=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ld=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Md(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",d:"M14.087 6.873a.75.75 0 0 1 .943.097l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H5a.75.75 0 0 1-.75-.74V12a.75.75 0 0 1 .75-.75h12.19l-3.22-3.22a.75.75 0 0 1 .117-1.157"}))});var Kd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Pd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Kd(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var Gd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Bd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Gd(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.25h4.5V3a.75.75 0 0 1 1.5 0v1.25h3.75c.69 0 1.25.56 1.25 1.25v13c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25v-13c0-.69.56-1.25 1.25-1.25h3.75V3A.75.75 0 0 1 9 2.25M15.75 7a.75.75 0 0 1-1.5 0V5.75h-4.5V7a.75.75 0 0 1-1.5 0V5.75h-3.5v3.5h14.5v-3.5h-3.5zm-11 11.25v-7.5h14.5v7.5zm2-5.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM10.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4.75-.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM6.75 16a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Fd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const wd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Fd(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.998 6.94a.75.75 0 0 1 .063 1.058l-8 9a.75.75 0 0 1-1.091.032l-5-5a.75.75 0 1 1 1.06-1.06l4.438 4.437 7.471-8.405A.75.75 0 0 1 19 6.939",clipRule:"evenodd"}))});var Vd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const jd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Vd(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75m4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.81.81 0 0 0 1.195-.05z",clipRule:"evenodd"}))});var qd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const mt=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=qd(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Ud=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Qs=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ud(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.47 7.97a.75.75 0 0 1 1.06 0l5.5 5.5a.75.75 0 1 1-1.06 1.06L12 9.56l-4.97 4.97a.75.75 0 0 1-1.06-1.06z",clipRule:"evenodd"}))});var xd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Pl=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=xd(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a.75.75 0 0 1 .656.387l9.527 17.25A.75.75 0 0 1 21.526 21H2.474a.75.75 0 0 1-.657-1.113l9.526-17.25A.75.75 0 0 1 12 2.25M12 8.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m-1 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0",clipRule:"evenodd"}))});var Hd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Jd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Hd(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M13 3.25a.25.25 0 0 1 .25.25v4c0 .69.56 1.25 1.25 1.25h4a.25.25 0 0 1 .25.25v10.5c0 .69-.56 1.25-1.25 1.25h-11c-.69 0-1.25-.56-1.25-1.25v-15c0-.69.56-1.25 1.25-1.25zm2.177.866a.25.25 0 0 0-.427.177V7c0 .138.112.25.25.25h2.707a.25.25 0 0 0 .177-.427z",clipRule:"evenodd"}))});var Yd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Cd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Yd(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.25 4A.75.75 0 0 1 4 3.25h16a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zM11 7.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-1.25 3a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 .75.75v4.75h.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5h.75v-4h-.75a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var $d=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Wd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=$d(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.6 3.068c-1.28-.487-2.1-1.686-2.1-3.068a3.257 3.257 0 0 1 3.276-3.264 3.26 3.26 0 0 1 3.271 3.264c0 1.353-.83 2.554-2.559 3.242a.75.75 0 0 0-.472.697v1.235a.75.75 0 0 0 .212.523l1.482 1.522-1.215 1.991a.75.75 0 0 0 .123.934l.592.564-1.982 2.214-.145-.132v-9.021a.75.75 0 0 0-.483-.701m-.327-3.13a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var zd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Xd=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=zd(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.227 7.014c0 1.818.992 3.443 2.583 4.255v8.866c0 .21.09.412.245.554l.949.865a.75.75 0 0 0 1.064-.054l2.972-3.32a.75.75 0 0 0-.042-1.043l-.68-.648 1.203-1.971a.75.75 0 0 0-.103-.914l-1.675-1.721v-.44c1.886-.909 3.031-2.486 3.031-4.429a4.76 4.76 0 0 0-4.77-4.764 4.757 4.757 0 0 0-4.777 4.764m3.273-.063a1.501 1.501 0 1 0 2.998.003A1.501 1.501 0 0 0 10.5 6.95",clipRule:"evenodd"}))});var Qd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Zs=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Qd(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Zd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const eE=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Zd(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var nE=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const rE=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=nE(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M6.116 2.823a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768L10.06 10 14 13.94l1.616-1.617a1.25 1.25 0 0 1 1.768 0l3.793 3.793a1.25 1.25 0 0 1 0 1.768l-2.781 2.78a2.61 2.61 0 0 1-2.811.578A23.03 23.03 0 0 1 2.758 8.415a2.61 2.61 0 0 1 .577-2.81z",clipRule:"evenodd"}))});var tE=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const aE=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=tE(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 4.5a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75v3.75a.75.75 0 0 1-1.5 0v-3.75H7.5a.75.75 0 0 1 0-1.5h3.75V7.5a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var lE=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const eo=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=lE(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12.53 1.57a.75.75 0 0 0-1.06 0l-9.9 9.9a.75.75 0 0 0 0 1.06l9.9 9.9a.75.75 0 0 0 1.06 0l9.9-9.9a.75.75 0 0 0 0-1.06zM12 20.84 3.161 12l8.84-8.839 8.838 8.84zm-.92-11.86c-.19.19-.33.49-.33.92a.75.75 0 0 1-1.5 0c0-.77.26-1.471.77-1.98.51-.51 1.21-.77 1.98-.77s1.47.26 1.98.77c.51.509.77 1.21.77 1.98 0 .517-.217.944-.452 1.273-.224.314-.512.601-.748.837l-.02.02c-.26.26-.463.466-.607.668-.14.196-.173.319-.173.402v.4a.75.75 0 0 1-1.5 0v-.4c0-.518.217-.945.452-1.274.224-.313.512-.6.748-.837l.02-.02c.26-.26.463-.465.607-.668.14-.196.173-.319.173-.401 0-.43-.14-.73-.33-.92s-.49-.33-.92-.33-.73.14-.92.33m-.03 6.923a.95.95 0 1 1 1.9 0 .95.95 0 0 1-1.9 0",clipRule:"evenodd"}))});var iE=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const sE=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=iE(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var oE=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const uE=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=oE(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var dE=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const EE=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=dE(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10 4.75c-.69 0-1.25.56-1.25 1.25v.25h6.5V6c0-.69-.56-1.25-1.25-1.25zm6.75 1.5V6A2.75 2.75 0 0 0 14 3.25h-4A2.75 2.75 0 0 0 7.25 6v.25H4.5a.75.75 0 0 0 0 1.5h.805l.876 11.384a1.75 1.75 0 0 0 1.745 1.616h8.148a1.75 1.75 0 0 0 1.745-1.616l.875-11.384h.806a.75.75 0 0 0 0-1.5h-2.75m-6 4.25a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zM14 9.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 1 .75-.75",clipRule:"evenodd"}))});var mE=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const no=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=mE(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});var _E=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const NE=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=_E(e,["title","titleId"]);let l=ye();return l=t?n||"title-"+l:void 0,m.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},a),t?m.createElement("title",{id:l},t):null,m.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.742 2.47a.75.75 0 0 1 .53-.22h7.456a.75.75 0 0 1 .53.22l5.272 5.272c.141.14.22.331.22.53v7.456a.75.75 0 0 1-.22.53l-5.272 5.272a.75.75 0 0 1-.53.22H8.272a.75.75 0 0 1-.53-.22L2.47 16.258a.75.75 0 0 1-.22-.53V8.272a.75.75 0 0 1 .22-.53zm1.288 5.5a.75.75 0 0 0-1.06 1.06L10.94 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06L12 13.06l2.97 2.97a.75.75 0 1 0 1.06-1.06L13.06 12l2.97-2.97a.75.75 0 0 0-1.06-1.06L12 10.94z",clipRule:"evenodd"}))});function Qn(e,r,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e?.(a),t===!1||!a.defaultPrevented)return r?.(a)}}const[TE,_t]=pa({name:"ModalContext",errorMessage:"<Modal.Header> must be used within a <Modal>"}),gE=typeof window<"u"&&window.matchMedia===void 0,vE=(e,r)=>{const[t,n]=g.useState(r);return g.useEffect(()=>{if(gE)return;const a=window.matchMedia(e);n(a.matches);const l=i=>{n(i.matches)};return a.addEventListener("change",l),()=>{a.removeEventListener("change",l)}},[e]),t};function Nn(e){return(r={})=>{const t=r.width?String(r.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function Xe(e){return(r,t)=>{const n=t?.context?String(t.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=t?.width?String(t.width):i;a=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=t?.width?String(t.width):e.defaultWidth;a=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(r):r;return a[l]}}function Qe(e){return(r,t={})=>{const n=t.width,a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],l=r.match(a);if(!l)return null;const i=l[0],s=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],o=Array.isArray(s)?fE(s,E=>E.test(i)):IE(s,E=>E.test(i));let d;d=e.valueCallback?e.valueCallback(o):o,d=t.valueCallback?t.valueCallback(d):d;const u=r.slice(i.length);return{value:d,rest:u}}}function IE(e,r){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&r(e[t]))return t}function fE(e,r){for(let t=0;t<e.length;t++)if(r(e[t]))return t}function Gl(e){return(r,t={})=>{const n=r.match(e.matchPattern);if(!n)return null;const a=n[0],l=r.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=t.valueCallback?t.valueCallback(i):i;const s=r.slice(a.length);return{value:i,rest:s}}}const ro=6048e5,cE=864e5,RE=6e4,pE=36e5,SE=1e3,Ri=Symbol.for("constructDateFrom");function Ne(e,r){return typeof e=="function"?e(r):e&&typeof e=="object"&&Ri in e?e[Ri](r):e instanceof Date?new e.constructor(r):new Date(r)}function qr(e,...r){const t=Ne.bind(null,r.find(n=>typeof n=="object"));return r.map(t)}let kE={};function Tr(){return kE}function ie(e,r){return Ne(r||e,e)}function Un(e,r){const t=Tr(),n=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=ie(e,r?.in),l=a.getDay(),i=(l<n?7:0)+l-n;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}const DE={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},to=(e,r,t)=>{let n;const a=DE[e];return typeof a=="string"?n=a:r===1?n=a.one:n=a.other.replace("{{count}}",r.toString()),t?.addSuffix?t.comparison&&t.comparison>0?"in "+n:n+" ago":n},AE={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},ao=(e,r,t,n)=>AE[e],yE={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},OE={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},bE={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},hE={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ME={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},LE={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},KE=(e,r)=>{const t=Number(e),n=t%100;if(n>20||n<10)switch(n%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},lo={ordinalNumber:KE,era:Xe({values:yE,defaultWidth:"wide"}),quarter:Xe({values:OE,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Xe({values:bE,defaultWidth:"wide"}),day:Xe({values:hE,defaultWidth:"wide"}),dayPeriod:Xe({values:ME,defaultWidth:"wide",formattingValues:LE,defaultFormattingWidth:"wide"})},PE=/^(\d+)(th|st|nd|rd)?/i,GE=/\d+/i,BE={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},FE={any:[/^b/i,/^(a|c)/i]},wE={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},VE={any:[/1/i,/2/i,/3/i,/4/i]},jE={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},qE={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},UE={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},xE={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},HE={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},JE={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},io={ordinalNumber:Gl({matchPattern:PE,parsePattern:GE,valueCallback:e=>parseInt(e,10)}),era:Qe({matchPatterns:BE,defaultMatchWidth:"wide",parsePatterns:FE,defaultParseWidth:"any"}),quarter:Qe({matchPatterns:wE,defaultMatchWidth:"wide",parsePatterns:VE,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Qe({matchPatterns:jE,defaultMatchWidth:"wide",parsePatterns:qE,defaultParseWidth:"any"}),day:Qe({matchPatterns:UE,defaultMatchWidth:"wide",parsePatterns:xE,defaultParseWidth:"any"}),dayPeriod:Qe({matchPatterns:HE,defaultMatchWidth:"any",parsePatterns:JE,defaultParseWidth:"any"})},YE={full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},CE={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},$E={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},WE={date:Nn({formats:YE,defaultWidth:"full"}),time:Nn({formats:CE,defaultWidth:"full"}),dateTime:Nn({formats:$E,defaultWidth:"full"})},so={code:"en-GB",formatDistance:to,formatLong:WE,formatRelative:ao,localize:lo,match:io,options:{weekStartsOn:1,firstWeekContainsDate:4}},zE={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},XE={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},QE={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ZE={date:Nn({formats:zE,defaultWidth:"full"}),time:Nn({formats:XE,defaultWidth:"full"}),dateTime:Nn({formats:QE,defaultWidth:"full"})},Sa={code:"en-US",formatDistance:to,formatLong:ZE,formatRelative:ao,localize:lo,match:io,options:{weekStartsOn:0,firstWeekContainsDate:1}},em={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},nm=(e,r,t)=>{let n;const a=em[e];return typeof a=="string"?n=a:r===1?n=a.one:n=a.other.replace("{{count}}",String(r)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" siden":n},rm={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},tm={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},am={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},lm={date:Nn({formats:rm,defaultWidth:"full"}),time:Nn({formats:tm,defaultWidth:"full"}),dateTime:Nn({formats:am,defaultWidth:"full"})},im={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},sm=(e,r,t,n)=>im[e],om={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},um={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},dm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},Em={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},mm={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},_m=(e,r)=>Number(e)+".",Nm={ordinalNumber:_m,era:Xe({values:om,defaultWidth:"wide"}),quarter:Xe({values:um,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Xe({values:dm,defaultWidth:"wide"}),day:Xe({values:Em,defaultWidth:"wide"}),dayPeriod:Xe({values:mm,defaultWidth:"wide"})},Tm=/^(\d+)\.?/i,gm=/\d+/i,vm={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Im={any:[/^f/i,/^e/i]},fm={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},cm={any:[/1/i,/2/i,/3/i,/4/i]},Rm={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},pm={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Sm={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},km={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Dm={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Am={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},ym={ordinalNumber:Gl({matchPattern:Tm,parsePattern:gm,valueCallback:e=>parseInt(e,10)}),era:Qe({matchPatterns:vm,defaultMatchWidth:"wide",parsePatterns:Im,defaultParseWidth:"any"}),quarter:Qe({matchPatterns:fm,defaultMatchWidth:"wide",parsePatterns:cm,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Qe({matchPatterns:Rm,defaultMatchWidth:"wide",parsePatterns:pm,defaultParseWidth:"any"}),day:Qe({matchPatterns:Sm,defaultMatchWidth:"wide",parsePatterns:km,defaultParseWidth:"any"}),dayPeriod:Qe({matchPatterns:Dm,defaultMatchWidth:"any",parsePatterns:Am,defaultParseWidth:"any"})},oo={code:"nb",formatDistance:nm,formatLong:lm,formatRelative:sm,localize:Nm,match:ym,options:{weekStartsOn:1,firstWeekContainsDate:4}},Om={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},bm=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"],hm=(e,r,t)=>{let n;const a=Om[e];return typeof a=="string"?n=a:r===1?n=a.one:n=a.other.replace("{{count}}",r<13?bm[r]:String(r)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" sidan":n},Mm={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Lm={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Km={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Pm={date:Nn({formats:Mm,defaultWidth:"full"}),time:Nn({formats:Lm,defaultWidth:"full"}),dateTime:Nn({formats:Km,defaultWidth:"full"})},Gm={lastWeek:"'førre' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgon kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},Bm=(e,r,t,n)=>Gm[e],Fm={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},wm={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},Vm={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},jm={narrow:["S","M","T","O","T","F","L"],short:["su","må","ty","on","to","fr","lau"],abbreviated:["sun","mån","tys","ons","tor","fre","laur"],wide:["sundag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"]},qm={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natta"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natta"}},Um=(e,r)=>Number(e)+".",xm={ordinalNumber:Um,era:Xe({values:Fm,defaultWidth:"wide"}),quarter:Xe({values:wm,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Xe({values:Vm,defaultWidth:"wide"}),day:Xe({values:jm,defaultWidth:"wide"}),dayPeriod:Xe({values:qm,defaultWidth:"wide"})},Hm=/^(\d+)\.?/i,Jm=/\d+/i,Ym={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},Cm={any:[/^f/i,/^e/i]},$m={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Wm={any:[/1/i,/2/i,/3/i,/4/i]},zm={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},Xm={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Qm={narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},Zm={any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},e_={narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},n_={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},r_={ordinalNumber:Gl({matchPattern:Hm,parsePattern:Jm,valueCallback:e=>parseInt(e,10)}),era:Qe({matchPatterns:Ym,defaultMatchWidth:"wide",parsePatterns:Cm,defaultParseWidth:"any"}),quarter:Qe({matchPatterns:$m,defaultMatchWidth:"wide",parsePatterns:Wm,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Qe({matchPatterns:zm,defaultMatchWidth:"wide",parsePatterns:Xm,defaultParseWidth:"any"}),day:Qe({matchPatterns:Qm,defaultMatchWidth:"wide",parsePatterns:Zm,defaultParseWidth:"any"}),dayPeriod:Qe({matchPatterns:e_,defaultMatchWidth:"any",parsePatterns:n_,defaultParseWidth:"any"})},uo={code:"nn",formatDistance:hm,formatLong:Pm,formatRelative:Bm,localize:xm,match:r_,options:{weekStartsOn:1,firstWeekContainsDate:4}},t_={global:{dateLocale:oo,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},a_=g.createContext({locale:t_}),ka=()=>g.useContext(a_);var l_=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const i_=g.forwardRef((e,r)=>{var t,n,a,{rootElement:l,asChild:i}=e,s=l_(e,["rootElement","asChild"]);const o=Fr(!1),d=(t=ka())===null||t===void 0?void 0:t.rootElement,u=(n=l??d)!==null&&n!==void 0?n:(a=globalThis?.document)===null||a===void 0?void 0:a.body,E=i?wr:"div";return o?.isDarkside?u?ia.createPortal(m.createElement(sd,{theme:o.theme,asChild:!0,hasBackground:!1,"data-color":o.color},m.createElement(E,Object.assign({ref:r,"data-aksel-portal":""},s))),u):null:u?ia.createPortal(m.createElement(E,Object.assign({ref:r,"data-aksel-portal":""},s)),u):null});function pi(e){return e.sort((r,t)=>{const n=r.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}const s_=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function Si(e,r,t){let n=e+1;return t&&n>=r&&(n=0),n}function ki(e,r,t){let n=e-1;return t&&n<0&&(n=r),n}const Ha=e=>e;class o_{constructor(){this.descendants=new Map,this.register=r=>{if(r!=null)return s_(r)?this.registerNode(r):t=>{this.registerNode(t,r)}},this.unregister=r=>{this.descendants.delete(r);const t=pi(Array.from(this.descendants.keys()));this.assignIndex(t)},this.destroy=()=>{this.descendants.clear()},this.assignIndex=r=>{this.descendants.forEach(t=>{const n=r.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})},this.count=()=>this.descendants.size,this.enabledCount=()=>this.enabledValues().length,this.values=()=>Array.from(this.descendants.values()).sort((t,n)=>t.index-n.index),this.enabledValues=()=>this.values().filter(r=>!r.disabled),this.item=r=>{if(this.count()!==0)return this.values()[r]},this.enabledItem=r=>{if(this.enabledCount()!==0)return this.enabledValues()[r]},this.first=()=>this.item(0),this.firstEnabled=()=>this.enabledItem(0),this.last=()=>this.item(this.descendants.size-1),this.lastEnabled=()=>{const r=this.enabledValues().length-1;return this.enabledItem(r)},this.indexOf=r=>{var t,n;return r&&(n=(t=this.descendants.get(r))===null||t===void 0?void 0:t.index)!==null&&n!==void 0?n:-1},this.enabledIndexOf=r=>r==null?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(r)),this.next=(r,t=!0)=>{const n=Si(r,this.count(),t);return this.item(n)},this.nextEnabled=(r,t=!0)=>{const n=this.item(r);if(!n)return;const a=this.enabledIndexOf(n.node),l=Si(a,this.enabledCount(),t);return this.enabledItem(l)},this.prev=(r,t=!0)=>{const n=ki(r,this.count()-1,t);return this.item(n)},this.prevEnabled=(r,t=!0)=>{const n=this.item(r);if(!n)return;const a=this.enabledIndexOf(n.node),l=ki(a,this.enabledCount()-1,t);return this.enabledItem(l)},this.registerNode=(r,t)=>{if(!r)return;const n=this.descendants.get(r);if(n){this.descendants.set(r,Object.assign({index:n.index,node:r},t));return}const a=Array.from(this.descendants.keys()).concat(r),l=pi(a);t?.disabled&&(t.disabled=!!t.disabled);const i=Object.assign({node:r,index:-1},t);this.descendants.set(r,i),this.assignIndex(l)}}}function u_(){const[e,r]=pa({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),t=Ha(l=>m.createElement(e,Object.assign({},l.value),l.children));function n(l){const i=r(),[s,o]=g.useState(-1),d=g.useRef(null);Lr(()=>()=>{d.current&&i.unregister(d.current)},[]),Lr(()=>{if(!d.current)return;const E=Number(d.current.dataset.index);s!==E&&!Number.isNaN(E)&&o(E)});const u=Ha(l?i.register(l):i.register);return{descendants:i,index:s,enabledIndex:i.enabledIndexOf(d.current),register:od([u,d])}}function a(){return g.useRef(new o_).current}return[t,r,a,n]}function d_(e,r=globalThis?.document){const t=lt(e);g.useEffect(()=>{const n=a=>{a.key==="Escape"&&t(a)};return r.addEventListener("keydown",n,!0),()=>r.removeEventListener("keydown",n,!0)},[t,r])}const Eo={FOCUS_OUTSIDE:"AKSEL_FOCUS_OUTSIDE",POINTER_DOWN_OUTSIDE:"AKSEL_POINTER_DOWN_OUTSIDE"};function mo(e,r,t,{discrete:n}={discrete:!1}){if(!r)return;const a=t.originalEvent.target,l=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});a.addEventListener(e,r,{once:!0}),n&&a?ia.flushSync(()=>a.dispatchEvent(l)):a.dispatchEvent(l)}function E_(e,r=globalThis?.document){const t=lt(e),n=g.useRef(!1);return g.useEffect(()=>{const a=l=>{if(l.target&&!n.current){const i={originalEvent:l};mo(Eo.FOCUS_OUTSIDE,t,i)}};return r.addEventListener("focusin",a),()=>r.removeEventListener("focusin",a)},[r,t]),{onFocusCapture:()=>{n.current=!0},onBlurCapture:()=>{n.current=!1}}}function m_(e,r=globalThis?.document){const t=lt(e),n=g.useRef(!1),a=g.useRef(()=>{});return g.useEffect(()=>{const l=s=>{function o(){mo(Eo.POINTER_DOWN_OUTSIDE,t,{originalEvent:s},{discrete:!0})}s.target&&!n.current?s.pointerType==="touch"?(r.removeEventListener("click",a.current),a.current=o,r.addEventListener("click",a.current,{once:!0})):o():r.removeEventListener("click",a.current),n.current=!1},i=window.setTimeout(()=>{r.addEventListener("pointerdown",l)},0);return()=>{window.clearTimeout(i),r.removeEventListener("pointerdown",l),r.removeEventListener("click",a.current)}},[r,t]),{onPointerDownCapture:()=>{n.current=!0}}}var __=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const[N_,T_,g_,v_]=u_();let fr=0,Di;const I_=g.forwardRef((e,r)=>T_(!1)?m.createElement(Ai,Object.assign({ref:r},e)):m.createElement(f_,null,m.createElement(Ai,Object.assign({ref:r},e)))),f_=({children:e})=>{const r=g_();return m.createElement(N_,{value:r},e)},Ai=g.forwardRef((e,r)=>{var t,{children:n,asChild:a,onEscapeKeyDown:l,onPointerDownOutside:i,onFocusOutside:s,onInteractOutside:o,onDismiss:d,safeZone:u,disableOutsidePointerEvents:E=!1,enabled:_=!0}=e,N=__(e,["children","asChild","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","safeZone","disableOutsidePointerEvents","enabled"]);const[,v]=g.useState({}),{register:c,index:f,descendants:p}=v_({disableOutsidePointerEvents:E,disabled:!_,forceUpdate:()=>v({})}),[R,I]=g.useState(null),k=Vr(I,c,r),S=(t=R?.ownerDocument)!==null&&t!==void 0?t:globalThis?.document,y=g.useRef(!1),b=g.useRef(!1),B=(()=>{let A=-1;return p.enabledValues().forEach((P,j)=>{P.disableOutsidePointerEvents&&(A=j)}),{isPointerEventsEnabled:f>=A,isBodyPointerEventsDisabled:fr>0,pointerStyle:f>=A&&fr>0?"auto":void 0}})();function M(A){var h,P;if(!u?.anchor&&!u?.dismissable||!_)return;A.defaultPrevented||(y.current=!0,A.detail.originalEvent.type==="pointerdown"&&(b.current=!0));const j=A.target;A.detail.originalEvent.type==="pointerdown"?(!((h=u?.anchor)===null||h===void 0)&&h.contains(j)||j===u?.anchor)&&A.preventDefault():!(j instanceof HTMLElement&&![u?.anchor,u?.dismissable].some(w=>w?.contains(j))&&!j.contains((P=u?.dismissable)!==null&&P!==void 0?P:null))&&A.preventDefault(),A.detail.originalEvent.type==="focusin"&&b.current&&A.preventDefault(),b.current=!1,y.current=!1}const G=m_(A=>{!B.isPointerEventsEnabled||!_||(i?.(A),o?.(A),u&&M(A),!A.defaultPrevented&&d&&d())},S),V=E_(A=>{_&&(s?.(A),o?.(A),u&&M(A),!A.defaultPrevented&&d&&d())},S);d_(A=>{!_||!(f===p.enabledCount()-1)||(l?.(A),!A.defaultPrevented&&d&&(A.preventDefault(),d()))},S),g.useEffect(()=>{if(!(!R||!_||!E))return fr===0&&(Di=S.body.style.pointerEvents,S.body.style.pointerEvents="none"),fr++,()=>{fr===1&&(S.body.style.pointerEvents=Di),fr--}},[R,S,E,p,_]),g.useEffect(()=>()=>p.values().forEach(A=>A.forceUpdate()),[p,R]);const K=a?wr:"div";return m.createElement(K,Object.assign({ref:k},N,{onFocusCapture:V.onFocusCapture,onBlurCapture:V.onBlurCapture,onPointerDownCapture:G.onPointerDownCapture,style:Object.assign({pointerEvents:B.pointerStyle},N.style)}),n)}),Pr=Math.min,or=Math.max,sa=Math.round,bt=Math.floor,hn=e=>({x:e,y:e}),c_={left:"right",right:"left",bottom:"top",top:"bottom"},R_={start:"end",end:"start"};function El(e,r,t){return or(e,Pr(r,t))}function Nt(e,r){return typeof e=="function"?e(r):e}function ur(e){return e.split("-")[0]}function Tt(e){return e.split("-")[1]}function _o(e){return e==="x"?"y":"x"}function Bl(e){return e==="y"?"height":"width"}const p_=new Set(["top","bottom"]);function zn(e){return p_.has(ur(e))?"y":"x"}function Fl(e){return _o(zn(e))}function S_(e,r,t){t===void 0&&(t=!1);const n=Tt(e),a=Fl(e),l=Bl(a);let i=a==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return r.reference[l]>r.floating[l]&&(i=oa(i)),[i,oa(i)]}function k_(e){const r=oa(e);return[ml(e),r,ml(r)]}function ml(e){return e.replace(/start|end/g,r=>R_[r])}const yi=["left","right"],Oi=["right","left"],D_=["top","bottom"],A_=["bottom","top"];function y_(e,r,t){switch(e){case"top":case"bottom":return t?r?Oi:yi:r?yi:Oi;case"left":case"right":return r?D_:A_;default:return[]}}function O_(e,r,t,n){const a=Tt(e);let l=y_(ur(e),t==="start",n);return a&&(l=l.map(i=>i+"-"+a),r&&(l=l.concat(l.map(ml)))),l}function oa(e){return e.replace(/left|right|bottom|top/g,r=>c_[r])}function b_(e){return{top:0,right:0,bottom:0,left:0,...e}}function No(e){return typeof e!="number"?b_(e):{top:e,right:e,bottom:e,left:e}}function ua(e){const{x:r,y:t,width:n,height:a}=e;return{width:n,height:a,top:t,left:r,right:r+n,bottom:t+a,x:r,y:t}}function bi(e,r,t){let{reference:n,floating:a}=e;const l=zn(r),i=Fl(r),s=Bl(i),o=ur(r),d=l==="y",u=n.x+n.width/2-a.width/2,E=n.y+n.height/2-a.height/2,_=n[s]/2-a[s]/2;let N;switch(o){case"top":N={x:u,y:n.y-a.height};break;case"bottom":N={x:u,y:n.y+n.height};break;case"right":N={x:n.x+n.width,y:E};break;case"left":N={x:n.x-a.width,y:E};break;default:N={x:n.x,y:n.y}}switch(Tt(r)){case"start":N[i]-=_*(t&&d?-1:1);break;case"end":N[i]+=_*(t&&d?-1:1);break}return N}const h_=async(e,r,t)=>{const{placement:n="bottom",strategy:a="absolute",middleware:l=[],platform:i}=t,s=l.filter(Boolean),o=await(i.isRTL==null?void 0:i.isRTL(r));let d=await i.getElementRects({reference:e,floating:r,strategy:a}),{x:u,y:E}=bi(d,n,o),_=n,N={},v=0;for(let c=0;c<s.length;c++){const{name:f,fn:p}=s[c],{x:R,y:I,data:k,reset:S}=await p({x:u,y:E,initialPlacement:n,placement:_,strategy:a,middlewareData:N,rects:d,platform:i,elements:{reference:e,floating:r}});u=R??u,E=I??E,N={...N,[f]:{...N[f],...k}},S&&v<=50&&(v++,typeof S=="object"&&(S.placement&&(_=S.placement),S.rects&&(d=S.rects===!0?await i.getElementRects({reference:e,floating:r,strategy:a}):S.rects),{x:u,y:E}=bi(d,_,o)),c=-1)}return{x:u,y:E,placement:_,strategy:a,middlewareData:N}};async function To(e,r){var t;r===void 0&&(r={});const{x:n,y:a,platform:l,rects:i,elements:s,strategy:o}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:E="floating",altBoundary:_=!1,padding:N=0}=Nt(r,e),v=No(N),f=s[_?E==="floating"?"reference":"floating":E],p=ua(await l.getClippingRect({element:(t=await(l.isElement==null?void 0:l.isElement(f)))==null||t?f:f.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(s.floating)),boundary:d,rootBoundary:u,strategy:o})),R=E==="floating"?{x:n,y:a,width:i.floating.width,height:i.floating.height}:i.reference,I=await(l.getOffsetParent==null?void 0:l.getOffsetParent(s.floating)),k=await(l.isElement==null?void 0:l.isElement(I))?await(l.getScale==null?void 0:l.getScale(I))||{x:1,y:1}:{x:1,y:1},S=ua(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:R,offsetParent:I,strategy:o}):R);return{top:(p.top-S.top+v.top)/k.y,bottom:(S.bottom-p.bottom+v.bottom)/k.y,left:(p.left-S.left+v.left)/k.x,right:(S.right-p.right+v.right)/k.x}}const M_=e=>({name:"arrow",options:e,async fn(r){const{x:t,y:n,placement:a,rects:l,platform:i,elements:s,middlewareData:o}=r,{element:d,padding:u=0}=Nt(e,r)||{};if(d==null)return{};const E=No(u),_={x:t,y:n},N=Fl(a),v=Bl(N),c=await i.getDimensions(d),f=N==="y",p=f?"top":"left",R=f?"bottom":"right",I=f?"clientHeight":"clientWidth",k=l.reference[v]+l.reference[N]-_[N]-l.floating[v],S=_[N]-l.reference[N],y=await(i.getOffsetParent==null?void 0:i.getOffsetParent(d));let b=y?y[I]:0;(!b||!await(i.isElement==null?void 0:i.isElement(y)))&&(b=s.floating[I]||l.floating[v]);const B=k/2-S/2,M=b/2-c[v]/2-1,G=Pr(E[p],M),V=Pr(E[R],M),K=G,A=b-c[v]-V,h=b/2-c[v]/2+B,P=El(K,h,A),j=!o.arrow&&Tt(a)!=null&&h!==P&&l.reference[v]/2-(h<K?G:V)-c[v]/2<0,q=j?h<K?h-K:h-A:0;return{[N]:_[N]+q,data:{[N]:P,centerOffset:h-P-q,...j&&{alignmentOffset:q}},reset:j}}}),L_=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(r){var t,n;const{placement:a,middlewareData:l,rects:i,initialPlacement:s,platform:o,elements:d}=r,{mainAxis:u=!0,crossAxis:E=!0,fallbackPlacements:_,fallbackStrategy:N="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:c=!0,...f}=Nt(e,r);if((t=l.arrow)!=null&&t.alignmentOffset)return{};const p=ur(a),R=zn(s),I=ur(s)===s,k=await(o.isRTL==null?void 0:o.isRTL(d.floating)),S=_||(I||!c?[oa(s)]:k_(s)),y=v!=="none";!_&&y&&S.push(...O_(s,c,v,k));const b=[s,...S],B=await To(r,f),M=[];let G=((n=l.flip)==null?void 0:n.overflows)||[];if(u&&M.push(B[p]),E){const h=S_(a,i,k);M.push(B[h[0]],B[h[1]])}if(G=[...G,{placement:a,overflows:M}],!M.every(h=>h<=0)){var V,K;const h=(((V=l.flip)==null?void 0:V.index)||0)+1,P=b[h];if(P&&(!(E==="alignment"?R!==zn(P):!1)||G.every(w=>zn(w.placement)===R?w.overflows[0]>0:!0)))return{data:{index:h,overflows:G},reset:{placement:P}};let j=(K=G.filter(q=>q.overflows[0]<=0).sort((q,w)=>q.overflows[1]-w.overflows[1])[0])==null?void 0:K.placement;if(!j)switch(N){case"bestFit":{var A;const q=(A=G.filter(w=>{if(y){const F=zn(w.placement);return F===R||F==="y"}return!0}).map(w=>[w.placement,w.overflows.filter(F=>F>0).reduce((F,Y)=>F+Y,0)]).sort((w,F)=>w[1]-F[1])[0])==null?void 0:A[0];q&&(j=q);break}case"initialPlacement":j=s;break}if(a!==j)return{reset:{placement:j}}}return{}}}},K_=new Set(["left","top"]);async function P_(e,r){const{placement:t,platform:n,elements:a}=e,l=await(n.isRTL==null?void 0:n.isRTL(a.floating)),i=ur(t),s=Tt(t),o=zn(t)==="y",d=K_.has(i)?-1:1,u=l&&o?-1:1,E=Nt(r,e);let{mainAxis:_,crossAxis:N,alignmentAxis:v}=typeof E=="number"?{mainAxis:E,crossAxis:0,alignmentAxis:null}:{mainAxis:E.mainAxis||0,crossAxis:E.crossAxis||0,alignmentAxis:E.alignmentAxis};return s&&typeof v=="number"&&(N=s==="end"?v*-1:v),o?{x:N*u,y:_*d}:{x:_*d,y:N*u}}const G_=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(r){var t,n;const{x:a,y:l,placement:i,middlewareData:s}=r,o=await P_(r,e);return i===((t=s.offset)==null?void 0:t.placement)&&(n=s.arrow)!=null&&n.alignmentOffset?{}:{x:a+o.x,y:l+o.y,data:{...o,placement:i}}}}},B_=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(r){const{x:t,y:n,placement:a}=r,{mainAxis:l=!0,crossAxis:i=!1,limiter:s={fn:f=>{let{x:p,y:R}=f;return{x:p,y:R}}},...o}=Nt(e,r),d={x:t,y:n},u=await To(r,o),E=zn(ur(a)),_=_o(E);let N=d[_],v=d[E];if(l){const f=_==="y"?"top":"left",p=_==="y"?"bottom":"right",R=N+u[f],I=N-u[p];N=El(R,N,I)}if(i){const f=E==="y"?"top":"left",p=E==="y"?"bottom":"right",R=v+u[f],I=v-u[p];v=El(R,v,I)}const c=s.fn({...r,[_]:N,[E]:v});return{...c,data:{x:c.x-t,y:c.y-n,enabled:{[_]:l,[E]:i}}}}}};function Da(){return typeof window<"u"}function Ur(e){return go(e)?(e.nodeName||"").toLowerCase():"#document"}function rn(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function Mn(e){var r;return(r=(go(e)?e.ownerDocument:e.document)||window.document)==null?void 0:r.documentElement}function go(e){return Da()?e instanceof Node||e instanceof rn(e).Node:!1}function ve(e){return Da()?e instanceof Element||e instanceof rn(e).Element:!1}function on(e){return Da()?e instanceof HTMLElement||e instanceof rn(e).HTMLElement:!1}function da(e){return!Da()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof rn(e).ShadowRoot}const F_=new Set(["inline","contents"]);function gt(e){const{overflow:r,overflowX:t,overflowY:n,display:a}=Tn(e);return/auto|scroll|overlay|hidden|clip/.test(r+n+t)&&!F_.has(a)}const w_=new Set(["table","td","th"]);function V_(e){return w_.has(Ur(e))}const j_=[":popover-open",":modal"];function Aa(e){return j_.some(r=>{try{return e.matches(r)}catch{return!1}})}const q_=["transform","translate","scale","rotate","perspective"],U_=["transform","translate","scale","rotate","perspective","filter"],x_=["paint","layout","strict","content"];function wl(e){const r=ya(),t=ve(e)?Tn(e):e;return q_.some(n=>t[n]?t[n]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!r&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!r&&(t.filter?t.filter!=="none":!1)||U_.some(n=>(t.willChange||"").includes(n))||x_.some(n=>(t.contain||"").includes(n))}function H_(e){let r=xn(e);for(;on(r)&&!jn(r);){if(wl(r))return r;if(Aa(r))return null;r=xn(r)}return null}function ya(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const J_=new Set(["html","body","#document"]);function jn(e){return J_.has(Ur(e))}function Tn(e){return rn(e).getComputedStyle(e)}function Oa(e){return ve(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function xn(e){if(Ur(e)==="html")return e;const r=e.assignedSlot||e.parentNode||da(e)&&e.host||Mn(e);return da(r)?r.host:r}function vo(e){const r=xn(e);return jn(r)?e.ownerDocument?e.ownerDocument.body:e.body:on(r)&&gt(r)?r:vo(r)}function Zn(e,r,t){var n;r===void 0&&(r=[]),t===void 0&&(t=!0);const a=vo(e),l=a===((n=e.ownerDocument)==null?void 0:n.body),i=rn(a);if(l){const s=_l(i);return r.concat(i,i.visualViewport||[],gt(a)?a:[],s&&t?Zn(s):[])}return r.concat(a,Zn(a,[],t))}function _l(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Io(e){const r=Tn(e);let t=parseFloat(r.width)||0,n=parseFloat(r.height)||0;const a=on(e),l=a?e.offsetWidth:t,i=a?e.offsetHeight:n,s=sa(t)!==l||sa(n)!==i;return s&&(t=l,n=i),{width:t,height:n,$:s}}function Vl(e){return ve(e)?e:e.contextElement}function Ar(e){const r=Vl(e);if(!on(r))return hn(1);const t=r.getBoundingClientRect(),{width:n,height:a,$:l}=Io(r);let i=(l?sa(t.width):t.width)/n,s=(l?sa(t.height):t.height)/a;return(!i||!Number.isFinite(i))&&(i=1),(!s||!Number.isFinite(s))&&(s=1),{x:i,y:s}}const Y_=hn(0);function fo(e){const r=rn(e);return!ya()||!r.visualViewport?Y_:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function C_(e,r,t){return r===void 0&&(r=!1),!t||r&&t!==rn(e)?!1:r}function dr(e,r,t,n){r===void 0&&(r=!1),t===void 0&&(t=!1);const a=e.getBoundingClientRect(),l=Vl(e);let i=hn(1);r&&(n?ve(n)&&(i=Ar(n)):i=Ar(e));const s=C_(l,t,n)?fo(l):hn(0);let o=(a.left+s.x)/i.x,d=(a.top+s.y)/i.y,u=a.width/i.x,E=a.height/i.y;if(l){const _=rn(l),N=n&&ve(n)?rn(n):n;let v=_,c=_l(v);for(;c&&n&&N!==v;){const f=Ar(c),p=c.getBoundingClientRect(),R=Tn(c),I=p.left+(c.clientLeft+parseFloat(R.paddingLeft))*f.x,k=p.top+(c.clientTop+parseFloat(R.paddingTop))*f.y;o*=f.x,d*=f.y,u*=f.x,E*=f.y,o+=I,d+=k,v=rn(c),c=_l(v)}}return ua({width:u,height:E,x:o,y:d})}function ba(e,r){const t=Oa(e).scrollLeft;return r?r.left+t:dr(Mn(e)).left+t}function co(e,r){const t=e.getBoundingClientRect(),n=t.left+r.scrollLeft-ba(e,t),a=t.top+r.scrollTop;return{x:n,y:a}}function $_(e){let{elements:r,rect:t,offsetParent:n,strategy:a}=e;const l=a==="fixed",i=Mn(n),s=r?Aa(r.floating):!1;if(n===i||s&&l)return t;let o={scrollLeft:0,scrollTop:0},d=hn(1);const u=hn(0),E=on(n);if((E||!E&&!l)&&((Ur(n)!=="body"||gt(i))&&(o=Oa(n)),on(n))){const N=dr(n);d=Ar(n),u.x=N.x+n.clientLeft,u.y=N.y+n.clientTop}const _=i&&!E&&!l?co(i,o):hn(0);return{width:t.width*d.x,height:t.height*d.y,x:t.x*d.x-o.scrollLeft*d.x+u.x+_.x,y:t.y*d.y-o.scrollTop*d.y+u.y+_.y}}function W_(e){return Array.from(e.getClientRects())}function z_(e){const r=Mn(e),t=Oa(e),n=e.ownerDocument.body,a=or(r.scrollWidth,r.clientWidth,n.scrollWidth,n.clientWidth),l=or(r.scrollHeight,r.clientHeight,n.scrollHeight,n.clientHeight);let i=-t.scrollLeft+ba(e);const s=-t.scrollTop;return Tn(n).direction==="rtl"&&(i+=or(r.clientWidth,n.clientWidth)-a),{width:a,height:l,x:i,y:s}}const hi=25;function X_(e,r){const t=rn(e),n=Mn(e),a=t.visualViewport;let l=n.clientWidth,i=n.clientHeight,s=0,o=0;if(a){l=a.width,i=a.height;const u=ya();(!u||u&&r==="fixed")&&(s=a.offsetLeft,o=a.offsetTop)}const d=ba(n);if(d<=0){const u=n.ownerDocument,E=u.body,_=getComputedStyle(E),N=u.compatMode==="CSS1Compat"&&parseFloat(_.marginLeft)+parseFloat(_.marginRight)||0,v=Math.abs(n.clientWidth-E.clientWidth-N);v<=hi&&(l-=v)}else d<=hi&&(l+=d);return{width:l,height:i,x:s,y:o}}const Q_=new Set(["absolute","fixed"]);function Z_(e,r){const t=dr(e,!0,r==="fixed"),n=t.top+e.clientTop,a=t.left+e.clientLeft,l=on(e)?Ar(e):hn(1),i=e.clientWidth*l.x,s=e.clientHeight*l.y,o=a*l.x,d=n*l.y;return{width:i,height:s,x:o,y:d}}function Mi(e,r,t){let n;if(r==="viewport")n=X_(e,t);else if(r==="document")n=z_(Mn(e));else if(ve(r))n=Z_(r,t);else{const a=fo(e);n={x:r.x-a.x,y:r.y-a.y,width:r.width,height:r.height}}return ua(n)}function Ro(e,r){const t=xn(e);return t===r||!ve(t)||jn(t)?!1:Tn(t).position==="fixed"||Ro(t,r)}function eN(e,r){const t=r.get(e);if(t)return t;let n=Zn(e,[],!1).filter(s=>ve(s)&&Ur(s)!=="body"),a=null;const l=Tn(e).position==="fixed";let i=l?xn(e):e;for(;ve(i)&&!jn(i);){const s=Tn(i),o=wl(i);!o&&s.position==="fixed"&&(a=null),(l?!o&&!a:!o&&s.position==="static"&&!!a&&Q_.has(a.position)||gt(i)&&!o&&Ro(e,i))?n=n.filter(u=>u!==i):a=s,i=xn(i)}return r.set(e,n),n}function nN(e){let{element:r,boundary:t,rootBoundary:n,strategy:a}=e;const i=[...t==="clippingAncestors"?Aa(r)?[]:eN(r,this._c):[].concat(t),n],s=i[0],o=i.reduce((d,u)=>{const E=Mi(r,u,a);return d.top=or(E.top,d.top),d.right=Pr(E.right,d.right),d.bottom=Pr(E.bottom,d.bottom),d.left=or(E.left,d.left),d},Mi(r,s,a));return{width:o.right-o.left,height:o.bottom-o.top,x:o.left,y:o.top}}function rN(e){const{width:r,height:t}=Io(e);return{width:r,height:t}}function tN(e,r,t){const n=on(r),a=Mn(r),l=t==="fixed",i=dr(e,!0,l,r);let s={scrollLeft:0,scrollTop:0};const o=hn(0);function d(){o.x=ba(a)}if(n||!n&&!l)if((Ur(r)!=="body"||gt(a))&&(s=Oa(r)),n){const N=dr(r,!0,l,r);o.x=N.x+r.clientLeft,o.y=N.y+r.clientTop}else a&&d();l&&!n&&a&&d();const u=a&&!n&&!l?co(a,s):hn(0),E=i.left+s.scrollLeft-o.x-u.x,_=i.top+s.scrollTop-o.y-u.y;return{x:E,y:_,width:i.width,height:i.height}}function Ja(e){return Tn(e).position==="static"}function Li(e,r){if(!on(e)||Tn(e).position==="fixed")return null;if(r)return r(e);let t=e.offsetParent;return Mn(e)===t&&(t=t.ownerDocument.body),t}function po(e,r){const t=rn(e);if(Aa(e))return t;if(!on(e)){let a=xn(e);for(;a&&!jn(a);){if(ve(a)&&!Ja(a))return a;a=xn(a)}return t}let n=Li(e,r);for(;n&&V_(n)&&Ja(n);)n=Li(n,r);return n&&jn(n)&&Ja(n)&&!wl(n)?t:n||H_(e)||t}const aN=async function(e){const r=this.getOffsetParent||po,t=this.getDimensions,n=await t(e.floating);return{reference:tN(e.reference,await r(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function lN(e){return Tn(e).direction==="rtl"}const iN={convertOffsetParentRelativeRectToViewportRelativeRect:$_,getDocumentElement:Mn,getClippingRect:nN,getOffsetParent:po,getElementRects:aN,getClientRects:W_,getDimensions:rN,getScale:Ar,isElement:ve,isRTL:lN};function So(e,r){return e.x===r.x&&e.y===r.y&&e.width===r.width&&e.height===r.height}function sN(e,r){let t=null,n;const a=Mn(e);function l(){var s;clearTimeout(n),(s=t)==null||s.disconnect(),t=null}function i(s,o){s===void 0&&(s=!1),o===void 0&&(o=1),l();const d=e.getBoundingClientRect(),{left:u,top:E,width:_,height:N}=d;if(s||r(),!_||!N)return;const v=bt(E),c=bt(a.clientWidth-(u+_)),f=bt(a.clientHeight-(E+N)),p=bt(u),I={rootMargin:-v+"px "+-c+"px "+-f+"px "+-p+"px",threshold:or(0,Pr(1,o))||1};let k=!0;function S(y){const b=y[0].intersectionRatio;if(b!==o){if(!k)return i();b?i(!1,b):n=setTimeout(()=>{i(!1,1e-7)},1e3)}b===1&&!So(d,e.getBoundingClientRect())&&i(),k=!1}try{t=new IntersectionObserver(S,{...I,root:a.ownerDocument})}catch{t=new IntersectionObserver(S,I)}t.observe(e)}return i(!0),l}function Nl(e,r,t,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:l=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:o=!1}=n,d=Vl(e),u=a||l?[...d?Zn(d):[],...Zn(r)]:[];u.forEach(p=>{a&&p.addEventListener("scroll",t,{passive:!0}),l&&p.addEventListener("resize",t)});const E=d&&s?sN(d,t):null;let _=-1,N=null;i&&(N=new ResizeObserver(p=>{let[R]=p;R&&R.target===d&&N&&(N.unobserve(r),cancelAnimationFrame(_),_=requestAnimationFrame(()=>{var I;(I=N)==null||I.observe(r)})),t()}),d&&!o&&N.observe(d),N.observe(r));let v,c=o?dr(e):null;o&&f();function f(){const p=dr(e);c&&!So(c,p)&&t(),c=p,v=requestAnimationFrame(f)}return t(),()=>{var p;u.forEach(R=>{a&&R.removeEventListener("scroll",t),l&&R.removeEventListener("resize",t)}),E?.(),(p=N)==null||p.disconnect(),N=null,o&&cancelAnimationFrame(v)}}const oN=G_,uN=B_,dN=L_,Ki=M_,EN=(e,r,t)=>{const n=new Map,a={platform:iN,...t},l={...a.platform,_c:n};return h_(e,r,{...a,platform:l})};var mN=typeof document<"u",_N=function(){},la=mN?g.useLayoutEffect:_N;function Ea(e,r){if(e===r)return!0;if(typeof e!=typeof r)return!1;if(typeof e=="function"&&e.toString()===r.toString())return!0;let t,n,a;if(e&&r&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==r.length)return!1;for(n=t;n--!==0;)if(!Ea(e[n],r[n]))return!1;return!0}if(a=Object.keys(e),t=a.length,t!==Object.keys(r).length)return!1;for(n=t;n--!==0;)if(!{}.hasOwnProperty.call(r,a[n]))return!1;for(n=t;n--!==0;){const l=a[n];if(!(l==="_owner"&&e.$$typeof)&&!Ea(e[l],r[l]))return!1}return!0}return e!==e&&r!==r}function ko(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Pi(e,r){const t=ko(e);return Math.round(r*t)/t}function Ya(e){const r=g.useRef(e);return la(()=>{r.current=e}),r}function NN(e){e===void 0&&(e={});const{placement:r="bottom",strategy:t="absolute",middleware:n=[],platform:a,elements:{reference:l,floating:i}={},transform:s=!0,whileElementsMounted:o,open:d}=e,[u,E]=g.useState({x:0,y:0,strategy:t,placement:r,middlewareData:{},isPositioned:!1}),[_,N]=g.useState(n);Ea(_,n)||N(n);const[v,c]=g.useState(null),[f,p]=g.useState(null),R=g.useCallback(w=>{w!==y.current&&(y.current=w,c(w))},[]),I=g.useCallback(w=>{w!==b.current&&(b.current=w,p(w))},[]),k=l||v,S=i||f,y=g.useRef(null),b=g.useRef(null),B=g.useRef(u),M=o!=null,G=Ya(o),V=Ya(a),K=Ya(d),A=g.useCallback(()=>{if(!y.current||!b.current)return;const w={placement:r,strategy:t,middleware:_};V.current&&(w.platform=V.current),EN(y.current,b.current,w).then(F=>{const Y={...F,isPositioned:K.current!==!1};h.current&&!Ea(B.current,Y)&&(B.current=Y,Ll.flushSync(()=>{E(Y)}))})},[_,r,t,V,K]);la(()=>{d===!1&&B.current.isPositioned&&(B.current.isPositioned=!1,E(w=>({...w,isPositioned:!1})))},[d]);const h=g.useRef(!1);la(()=>(h.current=!0,()=>{h.current=!1}),[]),la(()=>{if(k&&(y.current=k),S&&(b.current=S),k&&S){if(G.current)return G.current(k,S,A);A()}},[k,S,A,G,M]);const P=g.useMemo(()=>({reference:y,floating:b,setReference:R,setFloating:I}),[R,I]),j=g.useMemo(()=>({reference:k,floating:S}),[k,S]),q=g.useMemo(()=>{const w={position:t,left:0,top:0};if(!j.floating)return w;const F=Pi(j.floating,u.x),Y=Pi(j.floating,u.y);return s?{...w,transform:"translate("+F+"px, "+Y+"px)",...ko(j.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:F,top:Y}},[t,s,j.floating,u.x,u.y]);return g.useMemo(()=>({...u,update:A,refs:P,elements:j,floatingStyles:q}),[u,A,P,j,q])}const TN=e=>{function r(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:n,padding:a}=typeof e=="function"?e(t):e;return n&&r(n)?n.current!=null?Ki({element:n.current,padding:a}).fn(t):{}:n?Ki({element:n,padding:a}).fn(t):{}}}},Do=(e,r)=>({...oN(e),options:[e,r]}),Ao=(e,r)=>({...uN(e),options:[e,r]}),yo=(e,r)=>({...dN(e),options:[e,r]}),Oo=(e,r)=>({...TN(e),options:[e,r]}),Gi=/(\w+)/g;function gN(e,r){const t=Array.isArray(e)?e:vN(e);for(const n of r){if(!n)continue;let a=n;for(let l=0;l<t.length;l++){const i=a[t[l]];i!==void 0&&(a=i)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function vN(e){const r=[];let t=Gi.exec(e);for(;t;){const[,n,a]=t;r.push(n||a),t=Gi.exec(e)}return r}const IN=/{[^}]*}/g;function Jn(e,...r){const t=ka(),n=t.translations||[],a=[...r,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],t.locale[e]];return(i,s)=>{const o=gN(i,a);return s?o.replace(IN,d=>{const u=d.substring(1,d.length-1);if(s[u]===void 0){const E=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${u}'. The following replacements were passed: '${E}'`)}return s[u]}):o}}function bo(){const e=ka(),r=e.translations||[],t=Array.isArray(r)?r.map(n=>n.global):[r.global];t.push(e.locale.global);for(const n of t)if(n?.dateLocale)return n.dateLocale;throw new Error("dateLocale not found.")}var fN=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const cN=g.forwardRef((e,r)=>{var{className:t,size:n="medium",title:a,transparent:l=!1,variant:i="neutral",id:s,"data-color":o}=e,d=fN(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:u}=ee(),E=Sn(),_=Jn("Loader");return m.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${E}`,ref:r,className:u("navds-loader",t,`navds-loader--${n}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":o??RN(i)},Ye(d,["children"]),{"data-variant":i}),m.createElement("title",{id:s??`loader-${E}`},a||_("title")),m.createElement("circle",{className:u("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),m.createElement("circle",{className:u("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function RN(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var pN=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Oe=g.forwardRef((e,r)=>{var{as:t="button",variant:n="primary",className:a,children:l,size:i="medium",loading:s=!1,disabled:o,icon:d,iconPosition:u="left",onKeyUp:E,"data-color":_}=e,N=pN(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:v}=ee(),c=o||s?Ye(N,["href"]):N,f=p=>{p.key===" "&&!o&&!s&&p.currentTarget.click()};return m.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},{"data-color":_??SN(n),"data-variant":kN(n)},c,{ref:r,onKeyUp:Qn(E,f),className:v(a,"navds-button",`navds-button--${n}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!d&&!l,"navds-button--disabled":o??s}),disabled:o??s?!0:void 0}),d&&u==="left"&&m.createElement("span",{className:v("navds-button__icon")},d),s&&m.createElement(cN,{size:i}),l&&m.createElement(ce,{as:"span",size:i==="medium"?"medium":"small"},l),d&&u==="right"&&m.createElement("span",{className:v("navds-button__icon")},d))});function SN(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function kN(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}var DN=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const AN={error:NE,warning:Pl,info:Cd,success:jd},vt=g.forwardRef((e,r)=>{var{children:t,className:n,variant:a,size:l="medium",fullWidth:i=!1,contentMaxWidth:s=!0,inline:o=!1,closeButton:d=!1,onClose:u}=e,E=DN(e,["children","className","variant","size","fullWidth","contentMaxWidth","inline","closeButton","onClose"]);const{cn:_}=ee(),N=Jn("Alert"),v=AN[a];return m.createElement("div",Object.assign({},E,{"data-color":yN(a),"data-variant":a,ref:r,className:_(n,"navds-alert",`navds-alert--${a}`,`navds-alert--${l}`,{"navds-alert--full-width":i,"navds-alert--inline":o,"navds-alert--close-button":d})}),m.createElement(v,{title:N(a),className:_("navds-alert__icon")}),m.createElement(Kl,{as:"div",size:l,className:_("navds-alert__wrapper",s&&"navds-alert__wrapper--maxwidth")},t),d&&!o&&m.createElement("div",{className:_("navds-alert__button-wrapper")},m.createElement(Oe,{className:_("navds-alert__button"),size:"small",variant:"tertiary-neutral",onClick:u,type:"button",icon:m.createElement(no,{title:["error","warning"].includes(a)?N("closeAlert"):N("closeMessage")})})))});function yN(e){switch(e){case"warning":return"warning";case"error":return"danger";case"info":return"info";case"success":return"success";default:return"info"}}function It(e,r,t){const n=ie(e,t?.in);return isNaN(r)?Ne(t?.in||e,NaN):(r&&n.setDate(n.getDate()+r),n)}function jl(e,r,t){const n=ie(e,t?.in);if(isNaN(r))return Ne(e,NaN);if(!r)return n;const a=n.getDate(),l=Ne(e,n.getTime());l.setMonth(n.getMonth()+r+1,0);const i=l.getDate();return a>=i?l:(n.setFullYear(l.getFullYear(),l.getMonth(),a),n)}function ma(e,r){const t=ie(e,r?.in).getDay();return t===0||t===6}function Er(e,r){return Un(e,{...r,weekStartsOn:1})}function ho(e,r){const t=ie(e,r?.in),n=t.getFullYear(),a=Ne(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const l=Er(a),i=Ne(t,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const s=Er(i);return t.getTime()>=l.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function _a(e){const r=ie(e),t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),+e-+t}function Hn(e,r){const t=ie(e,r?.in);return t.setHours(0,0,0,0),t}function Xn(e,r,t){const[n,a]=qr(t?.in,e,r),l=Hn(n),i=Hn(a),s=+l-_a(l),o=+i-_a(i);return Math.round((s-o)/cE)}function ON(e,r){const t=ho(e,r),n=Ne(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Er(n)}function bN(e,r,t){return It(e,r*7,t)}function ql(e,r,t){return jl(e,r*12,t)}function hN(e,r){let t,n=r?.in;return e.forEach(a=>{!n&&typeof a=="object"&&(n=Ne.bind(null,a));const l=ie(a,n);(!t||t<l||isNaN(+l))&&(t=l)}),Ne(n,t||NaN)}function MN(e,r){let t,n=r?.in;return e.forEach(a=>{!n&&typeof a=="object"&&(n=Ne.bind(null,a));const l=ie(a,n);(!t||t>l||isNaN(+l))&&(t=l)}),Ne(n,t||NaN)}function Ul(e,r,t){const[n,a]=qr(t?.in,e,r);return+Hn(n)==+Hn(a)}function Mo(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function LN(e){return!(!Mo(e)&&typeof e!="number"||isNaN(+ie(e)))}function KN(e,r,t){const[n,a]=qr(t?.in,e,r),l=n.getFullYear()-a.getFullYear(),i=n.getMonth()-a.getMonth();return l*12+i}function Lo(e,r){const t=ie(e,r?.in),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function PN(e,r){const[t,n]=qr(e,r.start,r.end);return{start:t,end:n}}function Ko(e,r){const{start:t,end:n}=PN(r?.in,e);let a=+t>+n;const l=a?+t:+n,i=a?n:t;i.setHours(0,0,0,0),i.setDate(1);let s=1;const o=[];for(;+i<=l;)o.push(Ne(t,i)),i.setMonth(i.getMonth()+s);return a?o.reverse():o}function mr(e,r){const t=ie(e,r?.in);return t.setDate(1),t.setHours(0,0,0,0),t}function ha(e,r){const t=ie(e,r?.in),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(23,59,59,999),t}function ft(e,r){const t=ie(e,r?.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function Po(e,r){const t=Tr(),n=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=ie(e,r?.in),l=a.getDay(),i=(l<n?-7:0)+6-(l-n);return a.setDate(a.getDate()+i),a.setHours(23,59,59,999),a}function GN(e,r){return Po(e,{...r,weekStartsOn:1})}function BN(e,r){const t=ie(e,r?.in);return Xn(t,ft(t))+1}function xl(e,r){const t=ie(e,r?.in),n=+Er(t)-+ON(t);return Math.round(n/ro)+1}function Hl(e,r){const t=ie(e,r?.in),n=t.getFullYear(),a=Tr(),l=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=Ne(r?.in||e,0);i.setFullYear(n+1,0,l),i.setHours(0,0,0,0);const s=Un(i,r),o=Ne(r?.in||e,0);o.setFullYear(n,0,l),o.setHours(0,0,0,0);const d=Un(o,r);return+t>=+s?n+1:+t>=+d?n:n-1}function FN(e,r){const t=Tr(),n=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??t.firstWeekContainsDate??t.locale?.options?.firstWeekContainsDate??1,a=Hl(e,r),l=Ne(r?.in||e,0);return l.setFullYear(a,0,n),l.setHours(0,0,0,0),Un(l,r)}function Jl(e,r){const t=ie(e,r?.in),n=+Un(t,r)-+FN(t,r);return Math.round(n/ro)+1}function _e(e,r){const t=e<0?"-":"",n=Math.abs(e).toString().padStart(r,"0");return t+n}const Wn={y(e,r){const t=e.getFullYear(),n=t>0?t:1-t;return _e(r==="yy"?n%100:n,r.length)},M(e,r){const t=e.getMonth();return r==="M"?String(t+1):_e(t+1,2)},d(e,r){return _e(e.getDate(),r.length)},a(e,r){const t=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,r){return _e(e.getHours()%12||12,r.length)},H(e,r){return _e(e.getHours(),r.length)},m(e,r){return _e(e.getMinutes(),r.length)},s(e,r){return _e(e.getSeconds(),r.length)},S(e,r){const t=r.length,n=e.getMilliseconds(),a=Math.trunc(n*Math.pow(10,t-3));return _e(a,r.length)}},cr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Bi={G:function(e,r,t){const n=e.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return t.era(n,{width:"abbreviated"});case"GGGGG":return t.era(n,{width:"narrow"});case"GGGG":default:return t.era(n,{width:"wide"})}},y:function(e,r,t){if(r==="yo"){const n=e.getFullYear(),a=n>0?n:1-n;return t.ordinalNumber(a,{unit:"year"})}return Wn.y(e,r)},Y:function(e,r,t,n){const a=Hl(e,n),l=a>0?a:1-a;if(r==="YY"){const i=l%100;return _e(i,2)}return r==="Yo"?t.ordinalNumber(l,{unit:"year"}):_e(l,r.length)},R:function(e,r){const t=ho(e);return _e(t,r.length)},u:function(e,r){const t=e.getFullYear();return _e(t,r.length)},Q:function(e,r,t){const n=Math.ceil((e.getMonth()+1)/3);switch(r){case"Q":return String(n);case"QQ":return _e(n,2);case"Qo":return t.ordinalNumber(n,{unit:"quarter"});case"QQQ":return t.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,r,t){const n=Math.ceil((e.getMonth()+1)/3);switch(r){case"q":return String(n);case"qq":return _e(n,2);case"qo":return t.ordinalNumber(n,{unit:"quarter"});case"qqq":return t.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,r,t){const n=e.getMonth();switch(r){case"M":case"MM":return Wn.M(e,r);case"Mo":return t.ordinalNumber(n+1,{unit:"month"});case"MMM":return t.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(n,{width:"wide",context:"formatting"})}},L:function(e,r,t){const n=e.getMonth();switch(r){case"L":return String(n+1);case"LL":return _e(n+1,2);case"Lo":return t.ordinalNumber(n+1,{unit:"month"});case"LLL":return t.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(n,{width:"wide",context:"standalone"})}},w:function(e,r,t,n){const a=Jl(e,n);return r==="wo"?t.ordinalNumber(a,{unit:"week"}):_e(a,r.length)},I:function(e,r,t){const n=xl(e);return r==="Io"?t.ordinalNumber(n,{unit:"week"}):_e(n,r.length)},d:function(e,r,t){return r==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):Wn.d(e,r)},D:function(e,r,t){const n=BN(e);return r==="Do"?t.ordinalNumber(n,{unit:"dayOfYear"}):_e(n,r.length)},E:function(e,r,t){const n=e.getDay();switch(r){case"E":case"EE":case"EEE":return t.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(n,{width:"short",context:"formatting"});case"EEEE":default:return t.day(n,{width:"wide",context:"formatting"})}},e:function(e,r,t,n){const a=e.getDay(),l=(a-n.weekStartsOn+8)%7||7;switch(r){case"e":return String(l);case"ee":return _e(l,2);case"eo":return t.ordinalNumber(l,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});case"eeee":default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(e,r,t,n){const a=e.getDay(),l=(a-n.weekStartsOn+8)%7||7;switch(r){case"c":return String(l);case"cc":return _e(l,r.length);case"co":return t.ordinalNumber(l,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});case"cccc":default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(e,r,t){const n=e.getDay(),a=n===0?7:n;switch(r){case"i":return String(a);case"ii":return _e(a,r.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(n,{width:"short",context:"formatting"});case"iiii":default:return t.day(n,{width:"wide",context:"formatting"})}},a:function(e,r,t){const a=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,r,t){const n=e.getHours();let a;switch(n===12?a=cr.noon:n===0?a=cr.midnight:a=n/12>=1?"pm":"am",r){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,r,t){const n=e.getHours();let a;switch(n>=17?a=cr.evening:n>=12?a=cr.afternoon:n>=4?a=cr.morning:a=cr.night,r){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,r,t){if(r==="ho"){let n=e.getHours()%12;return n===0&&(n=12),t.ordinalNumber(n,{unit:"hour"})}return Wn.h(e,r)},H:function(e,r,t){return r==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):Wn.H(e,r)},K:function(e,r,t){const n=e.getHours()%12;return r==="Ko"?t.ordinalNumber(n,{unit:"hour"}):_e(n,r.length)},k:function(e,r,t){let n=e.getHours();return n===0&&(n=24),r==="ko"?t.ordinalNumber(n,{unit:"hour"}):_e(n,r.length)},m:function(e,r,t){return r==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):Wn.m(e,r)},s:function(e,r,t){return r==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):Wn.s(e,r)},S:function(e,r){return Wn.S(e,r)},X:function(e,r,t){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(r){case"X":return wi(n);case"XXXX":case"XX":return lr(n);case"XXXXX":case"XXX":default:return lr(n,":")}},x:function(e,r,t){const n=e.getTimezoneOffset();switch(r){case"x":return wi(n);case"xxxx":case"xx":return lr(n);case"xxxxx":case"xxx":default:return lr(n,":")}},O:function(e,r,t){const n=e.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+Fi(n,":");case"OOOO":default:return"GMT"+lr(n,":")}},z:function(e,r,t){const n=e.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+Fi(n,":");case"zzzz":default:return"GMT"+lr(n,":")}},t:function(e,r,t){const n=Math.trunc(+e/1e3);return _e(n,r.length)},T:function(e,r,t){return _e(+e,r.length)}};function Fi(e,r=""){const t=e>0?"-":"+",n=Math.abs(e),a=Math.trunc(n/60),l=n%60;return l===0?t+String(a):t+String(a)+r+_e(l,2)}function wi(e,r){return e%60===0?(e>0?"-":"+")+_e(Math.abs(e)/60,2):lr(e,r)}function lr(e,r=""){const t=e>0?"-":"+",n=Math.abs(e),a=_e(Math.trunc(n/60),2),l=_e(n%60,2);return t+a+r+l}const Vi=(e,r)=>{switch(e){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},Go=(e,r)=>{switch(e){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},wN=(e,r)=>{const t=e.match(/(P+)(p+)?/)||[],n=t[1],a=t[2];if(!a)return Vi(e,r);let l;switch(n){case"P":l=r.dateTime({width:"short"});break;case"PP":l=r.dateTime({width:"medium"});break;case"PPP":l=r.dateTime({width:"long"});break;case"PPPP":default:l=r.dateTime({width:"full"});break}return l.replace("{{date}}",Vi(n,r)).replace("{{time}}",Go(a,r))},Tl={p:Go,P:wN},VN=/^D+$/,jN=/^Y+$/,qN=["D","DD","YY","YYYY"];function Bo(e){return VN.test(e)}function Fo(e){return jN.test(e)}function gl(e,r,t){const n=UN(e,r,t);if(console.warn(n),qN.includes(e))throw new RangeError(n)}function UN(e,r,t){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const xN=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,HN=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,JN=/^'([^]*?)'?$/,YN=/''/g,CN=/[a-zA-Z]/;function _r(e,r,t){const n=Tr(),a=t?.locale??n.locale??Sa,l=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,s=ie(e,t?.in);if(!LN(s))throw new RangeError("Invalid time value");let o=r.match(HN).map(u=>{const E=u[0];if(E==="p"||E==="P"){const _=Tl[E];return _(u,a.formatLong)}return u}).join("").match(xN).map(u=>{if(u==="''")return{isToken:!1,value:"'"};const E=u[0];if(E==="'")return{isToken:!1,value:$N(u)};if(Bi[E])return{isToken:!0,value:u};if(E.match(CN))throw new RangeError("Format string contains an unescaped latin alphabet character `"+E+"`");return{isToken:!1,value:u}});a.localize.preprocessor&&(o=a.localize.preprocessor(s,o));const d={firstWeekContainsDate:l,weekStartsOn:i,locale:a};return o.map(u=>{if(!u.isToken)return u.value;const E=u.value;(!t?.useAdditionalWeekYearTokens&&Fo(E)||!t?.useAdditionalDayOfYearTokens&&Bo(E))&&gl(E,r,String(e));const _=Bi[E[0]];return _(s,E,a.localize,d)}).join("")}function $N(e){const r=e.match(JN);return r?r[1].replace(YN,"'"):e}function WN(e,r){const t=ie(e,r?.in),n=t.getFullYear(),a=t.getMonth(),l=Ne(t,0);return l.setFullYear(n,a+1,0),l.setHours(0,0,0,0),l.getDate()}function zN(){return Object.assign({},Tr())}function XN(e,r){const t=ie(e,r?.in).getDay();return t===0?7:t}function Yl(e,r){return ie(e,r?.in).getMonth()}function Cl(e,r){return ie(e,r?.in).getFullYear()}function wo(e,r){return+ie(e)>+ie(r)}function ct(e,r){return+ie(e)<+ie(r)}function QN(e,r){const t=ZN(r)?new r(0):Ne(r,0);return t.setFullYear(e.getFullYear(),e.getMonth(),e.getDate()),t.setHours(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()),t}function ZN(e){return typeof e=="function"&&e.prototype?.constructor===e}const eT=10;class Vo{subPriority=0;validate(r,t){return!0}}class nT extends Vo{constructor(r,t,n,a,l){super(),this.value=r,this.validateValue=t,this.setValue=n,this.priority=a,l&&(this.subPriority=l)}validate(r,t){return this.validateValue(r,this.value,t)}set(r,t,n){return this.setValue(r,t,this.value,n)}}class rT extends Vo{priority=eT;subPriority=-1;constructor(r,t){super(),this.context=r||(n=>Ne(t,n))}set(r,t){return t.timestampIsSet?r:Ne(r,QN(r,this.context))}}class ue{run(r,t,n,a){const l=this.parse(r,t,n,a);return l?{setter:new nT(l.value,this.validate,this.set,this.priority,this.subPriority),rest:l.rest}:null}validate(r,t,n){return!0}}class tT extends ue{priority=140;parse(r,t,n){switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"})||n.era(r,{width:"narrow"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})||n.era(r,{width:"abbreviated"})||n.era(r,{width:"narrow"})}}set(r,t,n){return t.era=n,r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}incompatibleTokens=["R","u","t","T"]}const Le={month:/^(1[0-2]|0?\d)/,date:/^(3[0-1]|[0-2]?\d)/,dayOfYear:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,week:/^(5[0-3]|[0-4]?\d)/,hour23h:/^(2[0-3]|[0-1]?\d)/,hour24h:/^(2[0-4]|[0-1]?\d)/,hour11h:/^(1[0-1]|0?\d)/,hour12h:/^(1[0-2]|0?\d)/,minute:/^[0-5]?\d/,second:/^[0-5]?\d/,singleDigit:/^\d/,twoDigits:/^\d{1,2}/,threeDigits:/^\d{1,3}/,fourDigits:/^\d{1,4}/,anyDigitsSigned:/^-?\d+/,singleDigitSigned:/^-?\d/,twoDigitsSigned:/^-?\d{1,2}/,threeDigitsSigned:/^-?\d{1,3}/,fourDigitsSigned:/^-?\d{1,4}/},yn={basicOptionalMinutes:/^([+-])(\d{2})(\d{2})?|Z/,basic:/^([+-])(\d{2})(\d{2})|Z/,basicOptionalSeconds:/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,extended:/^([+-])(\d{2}):(\d{2})|Z/,extendedOptionalSeconds:/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/};function Ke(e,r){return e&&{value:r(e.value),rest:e.rest}}function De(e,r){const t=r.match(e);return t?{value:parseInt(t[0],10),rest:r.slice(t[0].length)}:null}function On(e,r){const t=r.match(e);if(!t)return null;if(t[0]==="Z")return{value:0,rest:r.slice(1)};const n=t[1]==="+"?1:-1,a=t[2]?parseInt(t[2],10):0,l=t[3]?parseInt(t[3],10):0,i=t[5]?parseInt(t[5],10):0;return{value:n*(a*pE+l*RE+i*SE),rest:r.slice(t[0].length)}}function jo(e){return De(Le.anyDigitsSigned,e)}function he(e,r){switch(e){case 1:return De(Le.singleDigit,r);case 2:return De(Le.twoDigits,r);case 3:return De(Le.threeDigits,r);case 4:return De(Le.fourDigits,r);default:return De(new RegExp("^\\d{1,"+e+"}"),r)}}function Na(e,r){switch(e){case 1:return De(Le.singleDigitSigned,r);case 2:return De(Le.twoDigitsSigned,r);case 3:return De(Le.threeDigitsSigned,r);case 4:return De(Le.fourDigitsSigned,r);default:return De(new RegExp("^-?\\d{1,"+e+"}"),r)}}function $l(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function qo(e,r){const t=r>0,n=t?r:1-r;let a;if(n<=50)a=e||100;else{const l=n+50,i=Math.trunc(l/100)*100,s=e>=l%100;a=e+i-(s?100:0)}return t?a:1-a}function Uo(e){return e%400===0||e%4===0&&e%100!==0}class aT extends ue{priority=130;incompatibleTokens=["Y","R","u","w","I","i","e","c","t","T"];parse(r,t,n){const a=l=>({year:l,isTwoDigitYear:t==="yy"});switch(t){case"y":return Ke(he(4,r),a);case"yo":return Ke(n.ordinalNumber(r,{unit:"year"}),a);default:return Ke(he(t.length,r),a)}}validate(r,t){return t.isTwoDigitYear||t.year>0}set(r,t,n){const a=r.getFullYear();if(n.isTwoDigitYear){const i=qo(n.year,a);return r.setFullYear(i,0,1),r.setHours(0,0,0,0),r}const l=!("era"in t)||t.era===1?n.year:1-n.year;return r.setFullYear(l,0,1),r.setHours(0,0,0,0),r}}class lT extends ue{priority=130;parse(r,t,n){const a=l=>({year:l,isTwoDigitYear:t==="YY"});switch(t){case"Y":return Ke(he(4,r),a);case"Yo":return Ke(n.ordinalNumber(r,{unit:"year"}),a);default:return Ke(he(t.length,r),a)}}validate(r,t){return t.isTwoDigitYear||t.year>0}set(r,t,n,a){const l=Hl(r,a);if(n.isTwoDigitYear){const s=qo(n.year,l);return r.setFullYear(s,0,a.firstWeekContainsDate),r.setHours(0,0,0,0),Un(r,a)}const i=!("era"in t)||t.era===1?n.year:1-n.year;return r.setFullYear(i,0,a.firstWeekContainsDate),r.setHours(0,0,0,0),Un(r,a)}incompatibleTokens=["y","R","u","Q","q","M","L","I","d","D","i","t","T"]}class iT extends ue{priority=130;parse(r,t){return Na(t==="R"?4:t.length,r)}set(r,t,n){const a=Ne(r,0);return a.setFullYear(n,0,4),a.setHours(0,0,0,0),Er(a)}incompatibleTokens=["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]}class sT extends ue{priority=130;parse(r,t){return Na(t==="u"?4:t.length,r)}set(r,t,n){return r.setFullYear(n,0,1),r.setHours(0,0,0,0),r}incompatibleTokens=["G","y","Y","R","w","I","i","e","c","t","T"]}class oT extends ue{priority=120;parse(r,t,n){switch(t){case"Q":case"QQ":return he(t.length,r);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"})||n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})||n.quarter(r,{width:"abbreviated",context:"formatting"})||n.quarter(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=1&&t<=4}set(r,t,n){return r.setMonth((n-1)*3,1),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]}class uT extends ue{priority=120;parse(r,t,n){switch(t){case"q":case"qq":return he(t.length,r);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"})||n.quarter(r,{width:"narrow",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})||n.quarter(r,{width:"abbreviated",context:"standalone"})||n.quarter(r,{width:"narrow",context:"standalone"})}}validate(r,t){return t>=1&&t<=4}set(r,t,n){return r.setMonth((n-1)*3,1),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]}class dT extends ue{incompatibleTokens=["Y","R","q","Q","L","w","I","D","i","e","c","t","T"];priority=110;parse(r,t,n){const a=l=>l-1;switch(t){case"M":return Ke(De(Le.month,r),a);case"MM":return Ke(he(2,r),a);case"Mo":return Ke(n.ordinalNumber(r,{unit:"month"}),a);case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"})||n.month(r,{width:"narrow",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})||n.month(r,{width:"abbreviated",context:"formatting"})||n.month(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=0&&t<=11}set(r,t,n){return r.setMonth(n,1),r.setHours(0,0,0,0),r}}class ET extends ue{priority=110;parse(r,t,n){const a=l=>l-1;switch(t){case"L":return Ke(De(Le.month,r),a);case"LL":return Ke(he(2,r),a);case"Lo":return Ke(n.ordinalNumber(r,{unit:"month"}),a);case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"})||n.month(r,{width:"narrow",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})||n.month(r,{width:"abbreviated",context:"standalone"})||n.month(r,{width:"narrow",context:"standalone"})}}validate(r,t){return t>=0&&t<=11}set(r,t,n){return r.setMonth(n,1),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]}function mT(e,r,t){const n=ie(e,t?.in),a=Jl(n,t)-r;return n.setDate(n.getDate()-a*7),ie(n,t?.in)}class _T extends ue{priority=100;parse(r,t,n){switch(t){case"w":return De(Le.week,r);case"wo":return n.ordinalNumber(r,{unit:"week"});default:return he(t.length,r)}}validate(r,t){return t>=1&&t<=53}set(r,t,n,a){return Un(mT(r,n,a),a)}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","i","t","T"]}function NT(e,r,t){const n=ie(e,t?.in),a=xl(n,t)-r;return n.setDate(n.getDate()-a*7),n}class TT extends ue{priority=100;parse(r,t,n){switch(t){case"I":return De(Le.week,r);case"Io":return n.ordinalNumber(r,{unit:"week"});default:return he(t.length,r)}}validate(r,t){return t>=1&&t<=53}set(r,t,n){return Er(NT(r,n))}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]}const gT=[31,28,31,30,31,30,31,31,30,31,30,31],vT=[31,29,31,30,31,30,31,31,30,31,30,31];class IT extends ue{priority=90;subPriority=1;parse(r,t,n){switch(t){case"d":return De(Le.date,r);case"do":return n.ordinalNumber(r,{unit:"date"});default:return he(t.length,r)}}validate(r,t){const n=r.getFullYear(),a=Uo(n),l=r.getMonth();return a?t>=1&&t<=vT[l]:t>=1&&t<=gT[l]}set(r,t,n){return r.setDate(n),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","Q","w","I","D","i","e","c","t","T"]}class fT extends ue{priority=90;subpriority=1;parse(r,t,n){switch(t){case"D":case"DD":return De(Le.dayOfYear,r);case"Do":return n.ordinalNumber(r,{unit:"date"});default:return he(t.length,r)}}validate(r,t){const n=r.getFullYear();return Uo(n)?t>=1&&t<=366:t>=1&&t<=365}set(r,t,n){return r.setMonth(0,n),r.setHours(0,0,0,0),r}incompatibleTokens=["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]}function Wl(e,r,t){const n=Tr(),a=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,l=ie(e,t?.in),i=l.getDay(),o=(r%7+7)%7,d=7-a,u=r<0||r>6?r-(i+d)%7:(o+d)%7-(i+d)%7;return It(l,u,t)}class cT extends ue{priority=90;parse(r,t,n){switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"})||n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})||n.day(r,{width:"abbreviated",context:"formatting"})||n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=0&&t<=6}set(r,t,n,a){return r=Wl(r,n,a),r.setHours(0,0,0,0),r}incompatibleTokens=["D","i","e","c","t","T"]}class RT extends ue{priority=90;parse(r,t,n,a){const l=i=>{const s=Math.floor((i-1)/7)*7;return(i+a.weekStartsOn+6)%7+s};switch(t){case"e":case"ee":return Ke(he(t.length,r),l);case"eo":return Ke(n.ordinalNumber(r,{unit:"day"}),l);case"eee":return n.day(r,{width:"abbreviated",context:"formatting"})||n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})||n.day(r,{width:"abbreviated",context:"formatting"})||n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"})}}validate(r,t){return t>=0&&t<=6}set(r,t,n,a){return r=Wl(r,n,a),r.setHours(0,0,0,0),r}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]}class pT extends ue{priority=90;parse(r,t,n,a){const l=i=>{const s=Math.floor((i-1)/7)*7;return(i+a.weekStartsOn+6)%7+s};switch(t){case"c":case"cc":return Ke(he(t.length,r),l);case"co":return Ke(n.ordinalNumber(r,{unit:"day"}),l);case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"})||n.day(r,{width:"short",context:"standalone"})||n.day(r,{width:"narrow",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"})||n.day(r,{width:"narrow",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})||n.day(r,{width:"abbreviated",context:"standalone"})||n.day(r,{width:"short",context:"standalone"})||n.day(r,{width:"narrow",context:"standalone"})}}validate(r,t){return t>=0&&t<=6}set(r,t,n,a){return r=Wl(r,n,a),r.setHours(0,0,0,0),r}incompatibleTokens=["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]}function ST(e,r,t){const n=ie(e,t?.in),a=XN(n,t),l=r-a;return It(n,l,t)}class kT extends ue{priority=90;parse(r,t,n){const a=l=>l===0?7:l;switch(t){case"i":case"ii":return he(t.length,r);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return Ke(n.day(r,{width:"abbreviated",context:"formatting"})||n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"}),a);case"iiiii":return Ke(n.day(r,{width:"narrow",context:"formatting"}),a);case"iiiiii":return Ke(n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"}),a);case"iiii":default:return Ke(n.day(r,{width:"wide",context:"formatting"})||n.day(r,{width:"abbreviated",context:"formatting"})||n.day(r,{width:"short",context:"formatting"})||n.day(r,{width:"narrow",context:"formatting"}),a)}}validate(r,t){return t>=1&&t<=7}set(r,t,n){return r=ST(r,n),r.setHours(0,0,0,0),r}incompatibleTokens=["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]}class DT extends ue{priority=80;parse(r,t,n){switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"})||n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})||n.dayPeriod(r,{width:"abbreviated",context:"formatting"})||n.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,t,n){return r.setHours($l(n),0,0,0),r}incompatibleTokens=["b","B","H","k","t","T"]}class AT extends ue{priority=80;parse(r,t,n){switch(t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"})||n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})||n.dayPeriod(r,{width:"abbreviated",context:"formatting"})||n.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,t,n){return r.setHours($l(n),0,0,0),r}incompatibleTokens=["a","B","H","k","t","T"]}class yT extends ue{priority=80;parse(r,t,n){switch(t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"})||n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})||n.dayPeriod(r,{width:"abbreviated",context:"formatting"})||n.dayPeriod(r,{width:"narrow",context:"formatting"})}}set(r,t,n){return r.setHours($l(n),0,0,0),r}incompatibleTokens=["a","b","t","T"]}class OT extends ue{priority=70;parse(r,t,n){switch(t){case"h":return De(Le.hour12h,r);case"ho":return n.ordinalNumber(r,{unit:"hour"});default:return he(t.length,r)}}validate(r,t){return t>=1&&t<=12}set(r,t,n){const a=r.getHours()>=12;return a&&n<12?r.setHours(n+12,0,0,0):!a&&n===12?r.setHours(0,0,0,0):r.setHours(n,0,0,0),r}incompatibleTokens=["H","K","k","t","T"]}class bT extends ue{priority=70;parse(r,t,n){switch(t){case"H":return De(Le.hour23h,r);case"Ho":return n.ordinalNumber(r,{unit:"hour"});default:return he(t.length,r)}}validate(r,t){return t>=0&&t<=23}set(r,t,n){return r.setHours(n,0,0,0),r}incompatibleTokens=["a","b","h","K","k","t","T"]}class hT extends ue{priority=70;parse(r,t,n){switch(t){case"K":return De(Le.hour11h,r);case"Ko":return n.ordinalNumber(r,{unit:"hour"});default:return he(t.length,r)}}validate(r,t){return t>=0&&t<=11}set(r,t,n){return r.getHours()>=12&&n<12?r.setHours(n+12,0,0,0):r.setHours(n,0,0,0),r}incompatibleTokens=["h","H","k","t","T"]}class MT extends ue{priority=70;parse(r,t,n){switch(t){case"k":return De(Le.hour24h,r);case"ko":return n.ordinalNumber(r,{unit:"hour"});default:return he(t.length,r)}}validate(r,t){return t>=1&&t<=24}set(r,t,n){const a=n<=24?n%24:n;return r.setHours(a,0,0,0),r}incompatibleTokens=["a","b","h","H","K","t","T"]}class LT extends ue{priority=60;parse(r,t,n){switch(t){case"m":return De(Le.minute,r);case"mo":return n.ordinalNumber(r,{unit:"minute"});default:return he(t.length,r)}}validate(r,t){return t>=0&&t<=59}set(r,t,n){return r.setMinutes(n,0,0),r}incompatibleTokens=["t","T"]}class KT extends ue{priority=50;parse(r,t,n){switch(t){case"s":return De(Le.second,r);case"so":return n.ordinalNumber(r,{unit:"second"});default:return he(t.length,r)}}validate(r,t){return t>=0&&t<=59}set(r,t,n){return r.setSeconds(n,0),r}incompatibleTokens=["t","T"]}class PT extends ue{priority=30;parse(r,t){const n=a=>Math.trunc(a*Math.pow(10,-t.length+3));return Ke(he(t.length,r),n)}set(r,t,n){return r.setMilliseconds(n),r}incompatibleTokens=["t","T"]}class GT extends ue{priority=10;parse(r,t){switch(t){case"X":return On(yn.basicOptionalMinutes,r);case"XX":return On(yn.basic,r);case"XXXX":return On(yn.basicOptionalSeconds,r);case"XXXXX":return On(yn.extendedOptionalSeconds,r);case"XXX":default:return On(yn.extended,r)}}set(r,t,n){return t.timestampIsSet?r:Ne(r,r.getTime()-_a(r)-n)}incompatibleTokens=["t","T","x"]}class BT extends ue{priority=10;parse(r,t){switch(t){case"x":return On(yn.basicOptionalMinutes,r);case"xx":return On(yn.basic,r);case"xxxx":return On(yn.basicOptionalSeconds,r);case"xxxxx":return On(yn.extendedOptionalSeconds,r);case"xxx":default:return On(yn.extended,r)}}set(r,t,n){return t.timestampIsSet?r:Ne(r,r.getTime()-_a(r)-n)}incompatibleTokens=["t","T","X"]}class FT extends ue{priority=40;parse(r){return jo(r)}set(r,t,n){return[Ne(r,n*1e3),{timestampIsSet:!0}]}incompatibleTokens="*"}class wT extends ue{priority=20;parse(r){return jo(r)}set(r,t,n){return[Ne(r,n),{timestampIsSet:!0}]}incompatibleTokens="*"}const VT={G:new tT,y:new aT,Y:new lT,R:new iT,u:new sT,Q:new oT,q:new uT,M:new dT,L:new ET,w:new _T,I:new TT,d:new IT,D:new fT,E:new cT,e:new RT,c:new pT,i:new kT,a:new DT,b:new AT,B:new yT,h:new OT,H:new bT,K:new hT,k:new MT,m:new LT,s:new KT,S:new PT,X:new GT,x:new BT,t:new FT,T:new wT},jT=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,qT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,UT=/^'([^]*?)'?$/,xT=/''/g,HT=/\S/,JT=/[a-zA-Z]/;function yr(e,r,t,n){const a=()=>Ne(n?.in||t,NaN),l=zN(),i=n?.locale??l.locale??Sa,s=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??l.firstWeekContainsDate??l.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??l.weekStartsOn??l.locale?.options?.weekStartsOn??0;if(!r)return e?a():ie(t,n?.in);const d={firstWeekContainsDate:s,weekStartsOn:o,locale:i},u=[new rT(n?.in,t)],E=r.match(qT).map(f=>{const p=f[0];if(p in Tl){const R=Tl[p];return R(f,i.formatLong)}return f}).join("").match(jT),_=[];for(let f of E){!n?.useAdditionalWeekYearTokens&&Fo(f)&&gl(f,r,e),!n?.useAdditionalDayOfYearTokens&&Bo(f)&&gl(f,r,e);const p=f[0],R=VT[p];if(R){const{incompatibleTokens:I}=R;if(Array.isArray(I)){const S=_.find(y=>I.includes(y.token)||y.token===p);if(S)throw new RangeError(`The format string mustn't contain \`${S.fullToken}\` and \`${f}\` at the same time`)}else if(R.incompatibleTokens==="*"&&_.length>0)throw new RangeError(`The format string mustn't contain \`${f}\` and any other token at the same time`);_.push({token:p,fullToken:f});const k=R.run(e,f,i.match,d);if(!k)return a();u.push(k.setter),e=k.rest}else{if(p.match(JT))throw new RangeError("Format string contains an unescaped latin alphabet character `"+p+"`");if(f==="''"?f="'":p==="'"&&(f=YT(f)),e.indexOf(f)===0)e=e.slice(f.length);else return a()}}if(e.length>0&&HT.test(e))return a();const N=u.map(f=>f.priority).sort((f,p)=>p-f).filter((f,p,R)=>R.indexOf(f)===p).map(f=>u.filter(p=>p.priority===f).sort((p,R)=>R.subPriority-p.subPriority)).map(f=>f[0]);let v=ie(t,n?.in);if(isNaN(+v))return a();const c={};for(const f of N){if(!f.validate(v,d))return a();const p=f.set(v,c,d);Array.isArray(p)?(v=p[0],Object.assign(c,p[1])):v=p}return v}function YT(e){return e.match(UT)[1].replace(xT,"'")}function CT(e,r,t){const[n,a]=qr(t?.in,e,r);return n.getFullYear()===a.getFullYear()&&n.getMonth()===a.getMonth()}function xo(e,r,t){const[n,a]=qr(t?.in,e,r);return n.getFullYear()===a.getFullYear()}function $T(e,r,t){return It(e,-r,t)}function Ho(e,r,t){const n=ie(e,t?.in),a=n.getFullYear(),l=n.getDate(),i=Ne(e,0);i.setFullYear(a,r,15),i.setHours(0,0,0,0);const s=WN(i);return n.setMonth(r,Math.min(l,s)),n}function Jo(e,r,t){const n=ie(e,t?.in);return isNaN(+n)?Ne(e,NaN):(n.setFullYear(r),n)}function WT(e,r,t){return jl(e,-r,t)}function zT(e,r,t){const{years:n=0,months:a=0,weeks:l=0,days:i=0,hours:s=0,minutes:o=0,seconds:d=0}=r,u=WT(e,a+n*12,t),E=$T(u,i+l*7,t),_=o+s*60,v=(d+_*60)*1e3;return Ne(e,+E-v)}function XT(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function QT(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(r=>{let{brand:t,version:n}=r;return t+"/"+n}).join(" "):navigator.userAgent}function ZT(){return/apple/i.test(navigator.vendor)}function eg(){return XT().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function ng(){return QT().includes("jsdom/")}const rg="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function ji(e){let r=e.activeElement;for(;((t=r)==null||(t=t.shadowRoot)==null?void 0:t.activeElement)!=null;){var t;r=r.shadowRoot.activeElement}return r}function it(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&da(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Sr(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Ca(e,r){if(r==null)return!1;if("composedPath"in e)return e.composedPath().includes(r);const t=e;return t.target!=null&&r.contains(t.target)}function tg(e){return e.matches("html,body")}function ir(e){return e?.ownerDocument||document}function ag(e){return on(e)&&e.matches(rg)}function lg(e){if(!e||ng())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function $a(e,r,t){t===void 0&&(t=!0);let n=e.filter(l=>{var i;return l.parentId===r&&((i=l.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=t?e.filter(l=>{var i;return(i=a)==null?void 0:i.some(s=>{var o;return l.parentId===s.id&&((o=l.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function ig(e){return"nativeEvent"in e}function vl(e,r){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}var qn=typeof document<"u"?g.useLayoutEffect:g.useEffect;const sg={...xs};function ht(e){const r=g.useRef(e);return qn(()=>{r.current=e}),r}const og=sg.useInsertionEffect,ug=og||(e=>e());function Bn(e){const r=g.useRef(()=>{});return ug(()=>{r.current=e}),g.useCallback(function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r.current==null?void 0:r.current(...n)},[])}const dg="data-floating-ui-focusable",qi="active",Ui="selected",Eg={...xs};let xi=!1,mg=0;const Hi=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+mg++;function _g(){const[e,r]=g.useState(()=>xi?Hi():void 0);return qn(()=>{e==null&&r(Hi())},[]),g.useEffect(()=>{xi=!0},[]),e}const Ng=Eg.useId,Yo=Ng||_g;function Tg(){const e=new Map;return{emit(r,t){var n;(n=e.get(r))==null||n.forEach(a=>a(t))},on(r,t){e.has(r)||e.set(r,new Set),e.get(r).add(t)},off(r,t){var n;(n=e.get(r))==null||n.delete(t)}}}const gg=g.createContext(null),vg=g.createContext(null),Co=()=>{var e;return((e=g.useContext(gg))==null?void 0:e.id)||null},zl=()=>g.useContext(vg);function Ma(e){return"data-floating-ui-"+e}function dn(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const Ji=Ma("safe-polygon");function Wa(e,r,t){if(t&&!vl(t))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n?.[r]}return e?.[r]}function za(e){return typeof e=="function"?e():e}function Ig(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,dataRef:a,events:l,elements:i}=e,{enabled:s=!0,delay:o=0,handleClose:d=null,mouseOnly:u=!1,restMs:E=0,move:_=!0}=r,N=zl(),v=Co(),c=ht(d),f=ht(o),p=ht(t),R=ht(E),I=g.useRef(),k=g.useRef(-1),S=g.useRef(),y=g.useRef(-1),b=g.useRef(!0),B=g.useRef(!1),M=g.useRef(()=>{}),G=g.useRef(!1),V=g.useCallback(()=>{var q;const w=(q=a.current.openEvent)==null?void 0:q.type;return w?.includes("mouse")&&w!=="mousedown"},[a]);g.useEffect(()=>{if(!s)return;function q(w){let{open:F}=w;F||(dn(k),dn(y),b.current=!0,G.current=!1)}return l.on("openchange",q),()=>{l.off("openchange",q)}},[s,l]),g.useEffect(()=>{if(!s||!c.current||!t)return;function q(F){V()&&n(!1,F,"hover")}const w=ir(i.floating).documentElement;return w.addEventListener("mouseleave",q),()=>{w.removeEventListener("mouseleave",q)}},[i.floating,t,n,s,c,V]);const K=g.useCallback(function(q,w,F){w===void 0&&(w=!0),F===void 0&&(F="hover");const Y=Wa(f.current,"close",I.current);Y&&!S.current?(dn(k),k.current=window.setTimeout(()=>n(!1,q,F),Y)):w&&(dn(k),n(!1,q,F))},[f,n]),A=Bn(()=>{M.current(),S.current=void 0}),h=Bn(()=>{if(B.current){const q=ir(i.floating).body;q.style.pointerEvents="",q.removeAttribute(Ji),B.current=!1}}),P=Bn(()=>a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1);g.useEffect(()=>{if(!s)return;function q(W){if(dn(k),b.current=!1,u&&!vl(I.current)||za(R.current)>0&&!Wa(f.current,"open"))return;const ae=Wa(f.current,"open",I.current);ae?k.current=window.setTimeout(()=>{p.current||n(!0,W,"hover")},ae):t||n(!0,W,"hover")}function w(W){if(P()){h();return}M.current();const ae=ir(i.floating);if(dn(y),G.current=!1,c.current&&a.current.floatingContext){t||dn(k),S.current=c.current({...a.current.floatingContext,tree:N,x:W.clientX,y:W.clientY,onClose(){h(),A(),P()||K(W,!0,"safe-polygon")}});const Z=S.current;ae.addEventListener("mousemove",Z),M.current=()=>{ae.removeEventListener("mousemove",Z)};return}(I.current==="touch"?!it(i.floating,W.relatedTarget):!0)&&K(W)}function F(W){P()||a.current.floatingContext&&(c.current==null||c.current({...a.current.floatingContext,tree:N,x:W.clientX,y:W.clientY,onClose(){h(),A(),P()||K(W)}})(W))}function Y(){dn(k)}function z(W){P()||K(W,!1)}if(ve(i.domReference)){const W=i.domReference,ae=i.floating;return t&&W.addEventListener("mouseleave",F),_&&W.addEventListener("mousemove",q,{once:!0}),W.addEventListener("mouseenter",q),W.addEventListener("mouseleave",w),ae&&(ae.addEventListener("mouseleave",F),ae.addEventListener("mouseenter",Y),ae.addEventListener("mouseleave",z)),()=>{t&&W.removeEventListener("mouseleave",F),_&&W.removeEventListener("mousemove",q),W.removeEventListener("mouseenter",q),W.removeEventListener("mouseleave",w),ae&&(ae.removeEventListener("mouseleave",F),ae.removeEventListener("mouseenter",Y),ae.removeEventListener("mouseleave",z))}}},[i,s,e,u,_,K,A,h,n,t,p,N,f,c,a,P,R]),qn(()=>{var q;if(s&&t&&(q=c.current)!=null&&q.__options.blockPointerEvents&&V()){B.current=!0;const F=i.floating;if(ve(i.domReference)&&F){var w;const Y=ir(i.floating).body;Y.setAttribute(Ji,"");const z=i.domReference,W=N==null||(w=N.nodesRef.current.find(ae=>ae.id===v))==null||(w=w.context)==null?void 0:w.elements.floating;return W&&(W.style.pointerEvents=""),Y.style.pointerEvents="none",z.style.pointerEvents="auto",F.style.pointerEvents="auto",()=>{Y.style.pointerEvents="",z.style.pointerEvents="",F.style.pointerEvents=""}}}},[s,t,v,i,N,c,V]),qn(()=>{t||(I.current=void 0,G.current=!1,A(),h())},[t,A,h]),g.useEffect(()=>()=>{A(),dn(k),dn(y),h()},[s,i.domReference,A,h]);const j=g.useMemo(()=>{function q(w){I.current=w.pointerType}return{onPointerDown:q,onPointerEnter:q,onMouseMove(w){const{nativeEvent:F}=w;function Y(){!b.current&&!p.current&&n(!0,F,"hover")}u&&!vl(I.current)||t||za(R.current)===0||G.current&&w.movementX**2+w.movementY**2<2||(dn(y),I.current==="touch"?Y():(G.current=!0,y.current=window.setTimeout(Y,za(R.current))))}}},[u,n,t,p,R]);return g.useMemo(()=>s?{reference:j}:{},[s,j])}function Xa(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&da(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function fg(e){return"composedPath"in e?e.composedPath()[0]:e.target}const cg=g.createContext(null),Yi=Ma("portal");function Rg(e){e===void 0&&(e={});const{id:r,root:t}=e,n=Yo(),a=pg(),[l,i]=g.useState(null),s=g.useRef(null);return qn(()=>()=>{l?.remove(),queueMicrotask(()=>{s.current=null})},[l]),qn(()=>{if(!n||s.current)return;const o=r?document.getElementById(r):null;if(!o)return;const d=document.createElement("div");d.id=n,d.setAttribute(Yi,""),o.appendChild(d),s.current=d,i(d)},[r,n]),qn(()=>{if(t===null||!n||s.current)return;let o=t||a?.portalNode;o&&!ve(o)&&(o=o.current),o=o||document.body;let d=null;r&&(d=document.createElement("div"),d.id=r,o.appendChild(d));const u=document.createElement("div");u.id=n,u.setAttribute(Yi,""),o=d||o,o.appendChild(u),s.current=u,i(u)},[r,t,n,a]),l}const pg=()=>g.useContext(cg),Sg={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},kg={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},Ci=e=>{var r,t;return{escapeKey:typeof e=="boolean"?e:(r=e?.escapeKey)!=null?r:!1,outsidePress:typeof e=="boolean"?e:(t=e?.outsidePress)!=null?t:!0}};function Dg(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,elements:a,dataRef:l}=e,{enabled:i=!0,escapeKey:s=!0,outsidePress:o=!0,outsidePressEvent:d="pointerdown",referencePress:u=!1,referencePressEvent:E="pointerdown",ancestorScroll:_=!1,bubbles:N,capture:v}=r,c=zl(),f=Bn(typeof o=="function"?o:()=>!1),p=typeof o=="function"?f:o,R=g.useRef(!1),I=g.useRef(!1),{escapeKey:k,outsidePress:S}=Ci(N),{escapeKey:y,outsidePress:b}=Ci(v),B=g.useRef(!1),M=Bn(P=>{var j;if(!t||!i||!s||P.key!=="Escape"||B.current)return;const q=(j=l.current.floatingContext)==null?void 0:j.nodeId,w=c?$a(c.nodesRef.current,q):[];if(!k&&(P.stopPropagation(),w.length>0)){let F=!0;if(w.forEach(Y=>{var z;if((z=Y.context)!=null&&z.open&&!Y.context.dataRef.current.__escapeKeyBubbles){F=!1;return}}),!F)return}n(!1,ig(P)?P.nativeEvent:P,"escape-key")}),G=Bn(P=>{var j;const q=()=>{var w;M(P),(w=Sr(P))==null||w.removeEventListener("keydown",q)};(j=Sr(P))==null||j.addEventListener("keydown",q)}),V=Bn(P=>{var j;const q=R.current;R.current=!1;const w=I.current;if(I.current=!1,d==="click"&&w||q||typeof p=="function"&&!p(P))return;const F=Sr(P),Y="["+Ma("inert")+"]",z=ir(a.floating).querySelectorAll(Y);let W=ve(F)?F:null;for(;W&&!jn(W);){const H=xn(W);if(jn(H)||!ve(H))break;W=H}if(z.length&&ve(F)&&!tg(F)&&!it(F,a.floating)&&Array.from(z).every(H=>!it(W,H)))return;if(on(F)&&h){const H=jn(F),re=Tn(F),te=/auto|scroll/,de=H||te.test(re.overflowX),je=H||te.test(re.overflowY),qe=de&&F.clientWidth>0&&F.scrollWidth>F.clientWidth,Ue=je&&F.clientHeight>0&&F.scrollHeight>F.clientHeight,Kn=re.direction==="rtl",un=Ue&&(Kn?P.offsetX<=F.offsetWidth-F.clientWidth:P.offsetX>F.clientWidth),gn=qe&&P.offsetY>F.clientHeight;if(un||gn)return}const ae=(j=l.current.floatingContext)==null?void 0:j.nodeId,Fe=c&&$a(c.nodesRef.current,ae).some(H=>{var re;return Ca(P,(re=H.context)==null?void 0:re.elements.floating)});if(Ca(P,a.floating)||Ca(P,a.domReference)||Fe)return;const Z=c?$a(c.nodesRef.current,ae):[];if(Z.length>0){let H=!0;if(Z.forEach(re=>{var te;if((te=re.context)!=null&&te.open&&!re.context.dataRef.current.__outsidePressBubbles){H=!1;return}}),!H)return}n(!1,P,"outside-press")}),K=Bn(P=>{var j;const q=()=>{var w;V(P),(w=Sr(P))==null||w.removeEventListener(d,q)};(j=Sr(P))==null||j.addEventListener(d,q)});g.useEffect(()=>{if(!t||!i)return;l.current.__escapeKeyBubbles=k,l.current.__outsidePressBubbles=S;let P=-1;function j(z){n(!1,z,"ancestor-scroll")}function q(){window.clearTimeout(P),B.current=!0}function w(){P=window.setTimeout(()=>{B.current=!1},ya()?5:0)}const F=ir(a.floating);s&&(F.addEventListener("keydown",y?G:M,y),F.addEventListener("compositionstart",q),F.addEventListener("compositionend",w)),p&&F.addEventListener(d,b?K:V,b);let Y=[];return _&&(ve(a.domReference)&&(Y=Zn(a.domReference)),ve(a.floating)&&(Y=Y.concat(Zn(a.floating))),!ve(a.reference)&&a.reference&&a.reference.contextElement&&(Y=Y.concat(Zn(a.reference.contextElement)))),Y=Y.filter(z=>{var W;return z!==((W=F.defaultView)==null?void 0:W.visualViewport)}),Y.forEach(z=>{z.addEventListener("scroll",j,{passive:!0})}),()=>{s&&(F.removeEventListener("keydown",y?G:M,y),F.removeEventListener("compositionstart",q),F.removeEventListener("compositionend",w)),p&&F.removeEventListener(d,b?K:V,b),Y.forEach(z=>{z.removeEventListener("scroll",j)}),window.clearTimeout(P)}},[l,a,s,p,d,t,n,_,i,k,S,M,y,G,V,b,K]),g.useEffect(()=>{R.current=!1},[p,d]);const A=g.useMemo(()=>({onKeyDown:M,...u&&{[Sg[E]]:P=>{n(!1,P.nativeEvent,"reference-press")},...E!=="click"&&{onClick(P){n(!1,P.nativeEvent,"reference-press")}}}}),[M,n,u,E]),h=g.useMemo(()=>({onKeyDown:M,onMouseDown(){I.current=!0},onMouseUp(){I.current=!0},[kg[d]]:()=>{R.current=!0}}),[M,d]);return g.useMemo(()=>i?{reference:A,floating:h}:{},[i,A,h])}function Ag(e){const{open:r=!1,onOpenChange:t,elements:n}=e,a=Yo(),l=g.useRef({}),[i]=g.useState(()=>Tg()),s=Co()!=null,[o,d]=g.useState(n.reference),u=Bn((N,v,c)=>{l.current.openEvent=N?v:void 0,i.emit("openchange",{open:N,event:v,reason:c,nested:s}),t?.(N,v,c)}),E=g.useMemo(()=>({setPositionReference:d}),[]),_=g.useMemo(()=>({reference:o||n.reference||null,floating:n.floating||null,domReference:n.reference}),[o,n.reference,n.floating]);return g.useMemo(()=>({dataRef:l,open:r,onOpenChange:u,elements:_,events:i,floatingId:a,refs:E}),[r,u,_,i,a,E])}function $o(e){e===void 0&&(e={});const{nodeId:r}=e,t=Ag({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||t,a=n.elements,[l,i]=g.useState(null),[s,o]=g.useState(null),u=a?.domReference||l,E=g.useRef(null),_=zl();qn(()=>{u&&(E.current=u)},[u]);const N=NN({...e,elements:{...a,...s&&{reference:s}}}),v=g.useCallback(I=>{const k=ve(I)?{getBoundingClientRect:()=>I.getBoundingClientRect(),getClientRects:()=>I.getClientRects(),contextElement:I}:I;o(k),N.refs.setReference(k)},[N.refs]),c=g.useCallback(I=>{(ve(I)||I===null)&&(E.current=I,i(I)),(ve(N.refs.reference.current)||N.refs.reference.current===null||I!==null&&!ve(I))&&N.refs.setReference(I)},[N.refs]),f=g.useMemo(()=>({...N.refs,setReference:c,setPositionReference:v,domReference:E}),[N.refs,c,v]),p=g.useMemo(()=>({...N.elements,domReference:u}),[N.elements,u]),R=g.useMemo(()=>({...N,...n,refs:f,elements:p,nodeId:r}),[N,f,p,r,n]);return qn(()=>{n.dataRef.current.floatingContext=R;const I=_?.nodesRef.current.find(k=>k.id===r);I&&(I.context=R)}),g.useMemo(()=>({...N,context:R,refs:f,elements:p}),[N,f,p,R])}function Qa(){return eg()&&ZT()}function yg(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,events:a,dataRef:l,elements:i}=e,{enabled:s=!0,visibleOnly:o=!0}=r,d=g.useRef(!1),u=g.useRef(-1),E=g.useRef(!0);g.useEffect(()=>{if(!s)return;const N=rn(i.domReference);function v(){!t&&on(i.domReference)&&i.domReference===ji(ir(i.domReference))&&(d.current=!0)}function c(){E.current=!0}function f(){E.current=!1}return N.addEventListener("blur",v),Qa()&&(N.addEventListener("keydown",c,!0),N.addEventListener("pointerdown",f,!0)),()=>{N.removeEventListener("blur",v),Qa()&&(N.removeEventListener("keydown",c,!0),N.removeEventListener("pointerdown",f,!0))}},[i.domReference,t,s]),g.useEffect(()=>{if(!s)return;function N(v){let{reason:c}=v;(c==="reference-press"||c==="escape-key")&&(d.current=!0)}return a.on("openchange",N),()=>{a.off("openchange",N)}},[a,s]),g.useEffect(()=>()=>{dn(u)},[]);const _=g.useMemo(()=>({onMouseLeave(){d.current=!1},onFocus(N){if(d.current)return;const v=Sr(N.nativeEvent);if(o&&ve(v)){if(Qa()&&!N.relatedTarget){if(!E.current&&!ag(v))return}else if(!lg(v))return}n(!0,N.nativeEvent,"focus")},onBlur(N){d.current=!1;const v=N.relatedTarget,c=N.nativeEvent,f=ve(v)&&v.hasAttribute(Ma("focus-guard"))&&v.getAttribute("data-type")==="outside";u.current=window.setTimeout(()=>{var p;const R=ji(i.domReference?i.domReference.ownerDocument:document);!v&&R===i.domReference||it((p=l.current.floatingContext)==null?void 0:p.refs.floating.current,R)||it(i.domReference,R)||f||n(!1,c,"focus")})}}),[l,i.domReference,n,o]);return g.useMemo(()=>s?{reference:_}:{},[s,_])}function Za(e,r,t){const n=new Map,a=t==="item";let l=e;if(a&&e){const{[qi]:i,[Ui]:s,...o}=e;l=o}return{...t==="floating"&&{tabIndex:-1,[dg]:""},...l,...r.map(i=>{const s=i?i[t]:null;return typeof s=="function"?e?s(e):null:s}).concat(e).reduce((i,s)=>(s&&Object.entries(s).forEach(o=>{let[d,u]=o;if(!(a&&[qi,Ui].includes(d)))if(d.indexOf("on")===0){if(n.has(d)||n.set(d,[]),typeof u=="function"){var E;(E=n.get(d))==null||E.push(u),i[d]=function(){for(var _,N=arguments.length,v=new Array(N),c=0;c<N;c++)v[c]=arguments[c];return(_=n.get(d))==null?void 0:_.map(f=>f(...v)).find(f=>f!==void 0)}}}else i[d]=u}),i),{})}}function Og(e){e===void 0&&(e=[]);const r=e.map(s=>s?.reference),t=e.map(s=>s?.floating),n=e.map(s=>s?.item),a=g.useCallback(s=>Za(s,e,"reference"),r),l=g.useCallback(s=>Za(s,e,"floating"),t),i=g.useCallback(s=>Za(s,e,"item"),n);return g.useMemo(()=>({getReferenceProps:a,getFloatingProps:l,getItemProps:i}),[a,l,i])}function bg(e,r,t){t===void 0&&(t=!0);let n=e.filter(l=>{var i;return l.parentId===r&&((i=l.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=t?e.filter(l=>{var i;return(i=a)==null?void 0:i.some(s=>{var o;return l.parentId===s.id&&((o=l.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function $i(e,r){const[t,n]=e;let a=!1;const l=r.length;for(let i=0,s=l-1;i<l;s=i++){const[o,d]=r[i]||[0,0],[u,E]=r[s]||[0,0];d>=n!=E>=n&&t<=(u-o)*(n-d)/(E-d)+o&&(a=!a)}return a}function hg(e,r){return e[0]>=r.x&&e[0]<=r.x+r.width&&e[1]>=r.y&&e[1]<=r.y+r.height}function Mg(e){e===void 0&&(e={});const{buffer:r=.5,blockPointerEvents:t=!1,requireIntent:n=!0}=e;let a,l=!1,i=null,s=null,o=performance.now();function d(E,_){const N=performance.now(),v=N-o;if(i===null||s===null||v===0)return i=E,s=_,o=N,null;const c=E-i,f=_-s,R=Math.sqrt(c*c+f*f)/v;return i=E,s=_,o=N,R}const u=E=>{let{x:_,y:N,placement:v,elements:c,onClose:f,nodeId:p,tree:R}=E;return function(k){function S(){clearTimeout(a),f()}if(clearTimeout(a),!c.domReference||!c.floating||v==null||_==null||N==null)return;const{clientX:y,clientY:b}=k,B=[y,b],M=fg(k),G=k.type==="mouseleave",V=Xa(c.floating,M),K=Xa(c.domReference,M),A=c.domReference.getBoundingClientRect(),h=c.floating.getBoundingClientRect(),P=v.split("-")[0],j=_>h.right-h.width/2,q=N>h.bottom-h.height/2,w=hg(B,A),F=h.width>A.width,Y=h.height>A.height,z=(F?A:h).left,W=(F?A:h).right,ae=(Y?A:h).top,Fe=(Y?A:h).bottom;if(V&&(l=!0,!G))return;if(K&&(l=!1),K&&!G){l=!0;return}if(G&&ve(k.relatedTarget)&&Xa(c.floating,k.relatedTarget)||R&&bg(R.nodesRef.current,p).some(re=>{let{context:te}=re;return te?.open}))return;if(P==="top"&&N>=A.bottom-1||P==="bottom"&&N<=A.top+1||P==="left"&&_>=A.right-1||P==="right"&&_<=A.left+1)return S();let Z=[];switch(P){case"top":Z=[[z,A.top+1],[z,h.bottom-1],[W,h.bottom-1],[W,A.top+1]];break;case"bottom":Z=[[z,h.top+1],[z,A.bottom-1],[W,A.bottom-1],[W,h.top+1]];break;case"left":Z=[[h.right-1,Fe],[h.right-1,ae],[A.left+1,ae],[A.left+1,Fe]];break;case"right":Z=[[A.right-1,Fe],[A.right-1,ae],[h.left+1,ae],[h.left+1,Fe]];break}function H(re){let[te,de]=re;switch(P){case"top":{const je=[F?te+r/2:j?te+r*4:te-r*4,de+r+1],qe=[F?te-r/2:j?te+r*4:te-r*4,de+r+1],Ue=[[h.left,j||F?h.bottom-r:h.top],[h.right,j?F?h.bottom-r:h.top:h.bottom-r]];return[je,qe,...Ue]}case"bottom":{const je=[F?te+r/2:j?te+r*4:te-r*4,de-r],qe=[F?te-r/2:j?te+r*4:te-r*4,de-r],Ue=[[h.left,j||F?h.top+r:h.bottom],[h.right,j?F?h.top+r:h.bottom:h.top+r]];return[je,qe,...Ue]}case"left":{const je=[te+r+1,Y?de+r/2:q?de+r*4:de-r*4],qe=[te+r+1,Y?de-r/2:q?de+r*4:de-r*4];return[...[[q||Y?h.right-r:h.left,h.top],[q?Y?h.right-r:h.left:h.right-r,h.bottom]],je,qe]}case"right":{const je=[te-r,Y?de+r/2:q?de+r*4:de-r*4],qe=[te-r,Y?de-r/2:q?de+r*4:de-r*4],Ue=[[q||Y?h.left+r:h.right,h.top],[q?Y?h.left+r:h.right:h.left+r,h.bottom]];return[je,qe,...Ue]}}}if(!$i([y,b],Z)){if(l&&!w)return S();if(!G&&n){const re=d(k.clientX,k.clientY);if(re!==null&&re<.1)return S()}$i([y,b],H([_,N]))?!l&&n&&(a=window.setTimeout(S,40)):S()}}};return u.__options={blockPointerEvents:t},u}const La=()=>{const{cn:e}=ee();return m.createElement(Zs,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Wo=()=>{const{cn:e}=ee();return m.createElement(Zs,{title:Jn("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var Lg=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Kg=g.forwardRef((e,r)=>{var{className:t,header:n,children:a,open:l,defaultOpen:i=!1,onClick:s,size:o="medium",onOpenChange:d}=e,u=Lg(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:E}=ee(),[_,N]=Kr({defaultValue:i,value:l,onChange:d}),v=o==="small"?"small":"medium";return m.createElement("div",{className:E("navds-read-more",`navds-read-more--${o}`,t,{"navds-read-more--open":_}),"data-volume":"low"},m.createElement("button",Object.assign({},u,{ref:r,type:"button",className:E("navds-read-more__button","navds-body-short",{"navds-body-short--small":o==="small"}),onClick:Qn(s,()=>N(c=>!c)),"aria-expanded":_,"data-state":_?"open":"closed"}),m.createElement(mt,{className:E("navds-read-more__expand-icon"),"aria-hidden":!0}),m.createElement("span",null,n)),m.createElement(Kl,{as:"div","aria-hidden":!_,className:E("navds-read-more__content",{"navds-read-more__content--closed":!_}),size:v,"data-state":_?"open":"closed"},a))}),Ta=g.createContext(null),xr=(e,r)=>{var t,n,a;const{size:l,error:i,errorId:s}=e,o=g.useContext(Ta),d=Sn(),u=(t=e.id)!==null&&t!==void 0?t:`${r}-${d}`,E=s??`${r}-error-${d}`,_=`${r}-description-${d}`,N=o?.disabled||e.disabled,v=(o?.readOnly||e.readOnly)&&!N||void 0,c=!N&&!v&&!!(i||o?.error),f=!N&&!v&&!!i&&typeof i!="boolean",p=Object.assign({},c?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:f,hasError:c,errorId:E,inputDescriptionId:_,size:(n=l??o?.size)!==null&&n!==void 0?n:"medium",readOnly:v,inputProps:Object.assign(Object.assign({id:u},p),{"aria-describedby":Br(e["aria-describedby"],{[_]:e.description&&!ga(e.description),[E]:f,[(a=o?.errorId)!==null&&a!==void 0?a:""]:c&&o?.error})||void 0,disabled:N})}};function ga(e,r=!0){if(m.isValidElement(e)){if(e.type===Kg)return!0;if(e.props.children&&r)return ga(e.props.children,!1)}else if(Array.isArray(e))return e.some(t=>ga(t,r));return!1}const zo={global:{dateLocale:so,showMore:"Show more",showLess:"Show less",readOnly:"Read-only",close:"Close"},DatePicker:{chooseDate:"Choose date",chooseDates:"Choose dates",chooseDateRange:"Choose start and end date",chooseMonth:"Choose month",week:"Week",weekNumber:"Week {week}",selectWeekNumber:"Select week {week}",month:"Month",goToNextMonth:"Go to next month",goToPreviousMonth:"Go to previous month",year:"Year",goToNextYear:"Go to next year",goToPreviousYear:"Go to previous year",openDatePicker:"Open date picker",openMonthPicker:"Open month picker",closeDatePicker:"Close date picker",closeMonthPicker:"Close month picker"}},Xo={global:{dateLocale:uo,showMore:"Vis meir",showLess:"Vis mindre",readOnly:"Skrivebeskytta",close:"Lukk"},DatePicker:{chooseDate:"Vel dato",chooseDates:"Vel datoar",chooseDateRange:"Vel start- og sluttdato",chooseMonth:"Vel månad",week:"Veke",weekNumber:"Veke {week}",selectWeekNumber:"Vel veke {week}",month:"Månad",goToNextMonth:"Gå til neste månad",goToPreviousMonth:"Gå til førre månad",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til førre år",openDatePicker:"Opne datoveljar",openMonthPicker:"Opne månadsveljar",closeDatePicker:"Lukk datoveljar",closeMonthPicker:"Lukk månadsveljar"}},Qo=(e="nb")=>{switch(e){case"nn":return uo;case"en":return so;default:return oo}},Zo=e=>{switch(e){case"nn":return Xo.DatePicker;case"en":case"en-GB":return zo.DatePicker;default:return}},Pg=e=>{switch(e){case"nn":return Xo.global;case"en":case"en-GB":return zo.global;default:return}},[eu,Ka]=pa();var Gg=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const[Bg,Xl]=pa({errorMessage:"useDateInputContext must be used with DateInputContext"}),nu=g.forwardRef((e,r)=>{const{className:t,hideLabel:n=!1,label:a,description:l,variant:i="datepicker",setAnchorRef:s}=e,o=Gg(e,["className","hideLabel","label","description","variant","setAnchorRef"]),d=g.useRef(null),u=Ka().translate,{cn:E}=ee(),_=i==="datepicker",N={prefix:_?"datepicker-input":"monthpicker-input",iconTitle:{open:_?"openDatePicker":"openMonthPicker",close:_?"closeDatePicker":"closeMonthPicker"}},v=Xl(),{inputProps:c,size:f="medium",inputDescriptionId:p,errorId:R,showErrorMsg:I,hasError:k,readOnly:S}=xr(e,N.prefix);return m.createElement("div",{className:E(t,"navds-form-field",`navds-form-field--${f}`,"navds-date__field",{"navds-text-field--error":k,"navds-date__field--error":k,"navds-form-field--disabled":!!c.disabled,"navds-text-field--disabled":!!c.disabled,"navds-form-field--readonly":S,"navds-text-field--readonly":S,"navds-date__field--readonly":S})},m.createElement(ce,{htmlFor:c.id,size:f,className:E("navds-form-field__label",{"navds-sr-only":n})},S&&m.createElement(La,null),a),!!l&&m.createElement(ne,{as:"div",className:E("navds-form-field__description",{"navds-sr-only":n}),id:p,size:f},l),m.createElement("div",{className:E("navds-date__field-wrapper")},m.createElement("input",Object.assign({ref:r},Ye(o,["error","errorId","size"]),c,{autoComplete:"off","aria-controls":v?.open?v.ariaId:void 0,readOnly:S,className:E("navds-date__field-input","navds-text-field__input","navds-body-short",`navds-body-short--${f}`),size:_?11:14})),m.createElement("button",{disabled:c.disabled||S,tabIndex:S||v?.open?-1:0,onClick:()=>{v?.onOpen(),s?.(d.current)},type:"button",className:E("navds-date__field-button"),ref:d},m.createElement(Bd,{title:u(N.iconTitle[v?.open?"close":"open"])}))),m.createElement("div",{className:E("navds-form-field__error"),id:R,"aria-relevant":"additions removals","aria-live":"polite"},I&&m.createElement(dt,{size:f,showIcon:!0},e.error)))}),Fg=g.forwardRef((e,r)=>m.createElement(nu,Object.assign({},e,{ref:r})));g.forwardRef((e,r)=>m.createElement(nu,Object.assign({},e,{variant:"monthpicker",ref:r})));var wg=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Vg=g.forwardRef((e,r)=>{var{className:t}=e,n=wg(e,["className"]);const{cn:a}=ee();return m.createElement("div",Object.assign({},n,{ref:r,className:a("navds-modal__body",t)}))});var jg=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const qg=g.forwardRef((e,r)=>{var{className:t}=e,n=jg(e,["className"]);const{cn:a}=ee();return m.createElement("div",Object.assign({},n,{ref:r,className:a("navds-modal__footer",t)}))});var Ug=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ru=g.forwardRef((e,r)=>{var{children:t,className:n,closeButton:a=!0}=e,l=Ug(e,["children","className","closeButton"]);const{cn:i}=ee(),s=_t(),o=Jn("global");return m.createElement("div",Object.assign({},l,{ref:r,className:i("navds-modal__header",n)}),s.closeHandler&&a&&m.createElement(Oe,{type:"button",className:i("navds-modal__button"),size:"small",variant:"tertiary-neutral",onKeyDown:d=>{["Enter"," "].includes(d.key)&&d.repeat&&d.preventDefault()},onClick:s.closeHandler,icon:m.createElement(no,{title:o("close")})}),t)}),Wi=({clientX:e,clientY:r},{left:t,top:n,right:a,bottom:l})=>!(e<t||r<n||e>a||r>l);function xg(e,r,t){if(!(r&&r.closeButton===!1))return t?()=>{var n;return t()!==!1&&((n=e.current)===null||n===void 0?void 0:n.close())}:()=>{var n;return(n=e.current)===null||n===void 0?void 0:n.close()}}const Mt="navds-modal__document-body",Lt="aksel-modal__document-body";function Hg(e,r,t){m.useEffect(()=>{if(t||!e.current||!r)return;e.current.open&&document.body.classList.add(Lt,Mt);const n=new MutationObserver(()=>{var a;!((a=e.current)===null||a===void 0)&&a.open?document.body.classList.add(Lt,Mt):document.body.classList.remove(Lt,Mt)});return n.observe(e.current,{attributes:!0,attributeFilter:["open"]}),()=>{n.disconnect(),document.body.classList.remove(Lt,Mt)}},[e,r,t])}const Dr=typeof window<"u"&&(window.HTMLDialogElement===void 0||navigator.userAgent.includes("jsdom"));function tu(e,r){var t="on"+r.type.toLowerCase();return typeof e[t]=="function"&&e[t](r),e.dispatchEvent(r)}function Zr(e){for(;e;){if(e.localName==="dialog")return e;e.parentElement?e=e.parentElement:e.parentNode?e=e.parentNode.host:e=null}return null}function au(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Jg(e,r){for(var t=0;t<e.length;++t)if(e[t]===r)return!0;return!1}function el(e){return!e||!e.hasAttribute("method")?!1:e.getAttribute("method").toLowerCase()==="dialog"}function lu(e){var r=["button","input","keygen","select","textarea"],t=r.map(function(i){return i+":not([disabled])"});t.push('[tabindex]:not([disabled]):not([tabindex=""])');var n=e.querySelector(t.join(", "));if(!n&&"attachShadow"in Element.prototype)for(var a=e.querySelectorAll("*"),l=0;l<a.length&&!(a[l].tagName&&a[l].shadowRoot&&(n=lu(a[l].shadowRoot),n));l++);return n}function zi(e){return e.isConnected||document.body.contains(e)}function iu(e){if(e.submitter)return e.submitter;var r=e.target;if(!(r instanceof HTMLFormElement))return null;var t=se.formSubmitter;if(!t){var n=e.target,a="getRootNode"in n&&n.getRootNode()||document;t=a.activeElement}return!t||t.form!==r?null:t}function Yg(e){if(!e.defaultPrevented){var r=e.target,t=se.imagemapUseValue,n=iu(e);t===null&&n&&(t=n.value);var a=Zr(r);if(a){var l=n&&n.getAttribute("formmethod")||r.getAttribute("method");l==="dialog"&&(e.preventDefault(),t!=null?a.close(t):a.close())}}}function su(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",Yg,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){var r=new MutationObserver(this.maybeHideModal.bind(this));r.observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t=!1,n=(function(){t?this.downgradeModal():this.maybeHideModal(),t=!1}).bind(this),a,l=function(i){if(i.target===e){var s="DOMNodeRemoved";t|=i.type.substr(0,s.length)===s,window.clearTimeout(a),a=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(i){e.addEventListener(i,l)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}su.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&zi(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),se.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var r=document.createElement("div");this.dialog_.insertBefore(r,this.dialog_.firstChild),r.tabIndex=-1,r.focus(),this.dialog_.removeChild(r)}var t=document.createEvent("MouseEvents");t.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(t),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=lu(this.dialog_)),au(document.activeElement),e&&e.focus()},updateZIndex:function(e,r){if(e<r)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=r},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!zi(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!se.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");this.setOpen(!0),this.openAsModal_=!0,se.needsCentering(this.dialog_)?(se.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),e!==void 0&&(this.dialog_.returnValue=e);var r=new window.CustomEvent("close",{bubbles:!1,cancelable:!1});tu(this.dialog_,r)}};var se={};se.reposition=function(e){var r=document.body.scrollTop||document.documentElement.scrollTop,t=r+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(r,t)+"px"};se.isInlinePositionSetByStylesheet=function(e){for(var r=0;r<document.styleSheets.length;++r){var t=document.styleSheets[r],n=null;try{n=t.cssRules}catch{}if(n)for(var a=0;a<n.length;++a){var l=n[a],i=null;try{i=document.querySelectorAll(l.selectorText)}catch{}if(!(!i||!Jg(i,e))){var s=l.style.getPropertyValue("top"),o=l.style.getPropertyValue("bottom");if(s&&s!=="auto"||o&&o!=="auto")return!0}}}return!1};se.needsCentering=function(e){var r=window.getComputedStyle(e);return r.position!=="absolute"||e.style.top!=="auto"&&e.style.top!==""||e.style.bottom!=="auto"&&e.style.bottom!==""?!1:!se.isInlinePositionSetByStylesheet(e)};se.forceRegisterDialog=function(e){if(e.showModal&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),e.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new su(e)};se.registerDialog=function(e){e.showModal||se.forceRegisterDialog(e)};se.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(r){this.forwardTab_=void 0,r.stopPropagation(),e([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(r){var t=[];r.forEach(function(n){for(var a=0,l;l=n.removedNodes[a];++a)l instanceof Element&&(l.localName==="dialog"&&t.push(l),t=t.concat(l.querySelectorAll("dialog")))}),t.length&&e(t)}))};se.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};se.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};se.DialogManager.prototype.updateStacking=function(){for(var e=this.zIndexHigh_,r=0,t;t=this.pendingDialogStack[r];++r)t.updateZIndex(--e,--e),r===0&&(this.overlay.style.zIndex=--e);var n=this.pendingDialogStack[0];if(n){var a=n.dialog.parentNode||document.body;a.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};se.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=Zr(e);){for(var r=0,t;t=this.pendingDialogStack[r];++r)if(t.dialog===e)return r===0;e=e.parentElement}return!1};se.DialogManager.prototype.handleFocus_=function(e){var r=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(r)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),au(r),this.forwardTab_!==void 0)){var t=this.pendingDialogStack[0],n=t.dialog,a=n.compareDocumentPosition(r);return a&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():r!==document.documentElement&&document.documentElement.focus()),!1}};se.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,e.keyCode===27){e.preventDefault(),e.stopPropagation();var r=new window.CustomEvent("cancel",{bubbles:!1,cancelable:!0}),t=this.pendingDialogStack[0];t&&tu(t.dialog,r)&&t.dialog.close()}else e.keyCode===9&&(this.forwardTab_=!e.shiftKey)};se.DialogManager.prototype.checkDOM_=function(e){var r=this.pendingDialogStack.slice();r.forEach(function(t){e.indexOf(t.dialog)!==-1?t.downgradeModal():t.maybeHideModal()})};se.DialogManager.prototype.pushDialog=function(e){var r=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=r?!1:(this.pendingDialogStack.unshift(e)===1&&this.blockDocument(),this.updateStacking(),!0)};se.DialogManager.prototype.removeDialog=function(e){var r=this.pendingDialogStack.indexOf(e);r!==-1&&(this.pendingDialogStack.splice(r,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};Dr&&(se.dm=new se.DialogManager,se.formSubmitter=null,se.imagemapUseValue=null);if(Dr){var Xi=document.createElement("form");if(Xi.setAttribute("method","dialog"),Xi.method!=="dialog"){var Rr=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(Rr){var Cg=Rr.get;Rr.get=function(){return el(this)?"dialog":Cg.call(this)};var $g=Rr.set;Rr.set=function(e){return typeof e=="string"&&e.toLowerCase()==="dialog"?this.setAttribute("method",e):$g.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",Rr)}}document.addEventListener("click",function(e){if(se.formSubmitter=null,se.imagemapUseValue=null,!e.defaultPrevented){var r=e.target;if("composedPath"in e){var t=e.composedPath();r=t.shift()||r}if(!(!r||!el(r.form))){var n=r.type==="submit"&&["button","input"].indexOf(r.localName)>-1;if(!n){if(!(r.localName==="input"&&r.type==="image"))return;se.imagemapUseValue=e.offsetX+","+e.offsetY}var a=Zr(r);a&&(se.formSubmitter=r)}}},!1),document.addEventListener("submit",function(e){var r=e.target,t=Zr(r);if(!t){var n=iu(e),a=n&&n.getAttribute("formmethod")||r.getAttribute("method");a==="dialog"&&e.preventDefault()}});var Wg=HTMLFormElement.prototype.submit,zg=function(){if(!el(this))return Wg.call(this);var e=Zr(this);e&&e.close()};HTMLFormElement.prototype.submit=zg}var Xg=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const cn=g.forwardRef((e,r)=>{var t,n,{header:a,children:l,open:i,onBeforeClose:s,onCancel:o,closeOnBackdropClick:d,width:u,placement:E,portal:_,className:N,"aria-labelledby":v,style:c,onClick:f,onMouseDown:p}=e,R=Xg(e,["header","children","open","onBeforeClose","onCancel","closeOnBackdropClick","width","placement","portal","className","aria-labelledby","style","onClick","onMouseDown"]);const{cn:I}=ee(),k=g.useRef(I("navds-modal--polyfilled")),S=g.useRef(null),y=Vr(S,r),b=Sn(),B=(t=ka())===null||t===void 0?void 0:t.rootElement,M=Rg({root:B}),G=Xl(!1),V=_t(!1)!==void 0;V&&!G&&console.error("Modals should not be nested"),g.useEffect(()=>{Dr&&S.current&&M&&(se.registerDialog(S.current),S.current.classList.add(k.current)),S.current&&M&&(S.current.autofocus=!0)},[M]),g.useEffect(()=>{S.current&&M&&i!==void 0&&(i&&!S.current.open?S.current.showModal():!i&&S.current.open&&S.current.close())},[M,i]),Hg(S,M,V);const K=typeof u=="string"&&["small","medium"].includes(u),A=I("navds-modal",N,{[k.current]:Dr,"navds-modal--autowidth":!u,[`navds-modal--${u}`]:K,"navds-modal--top":E==="top"&&!Dr}),h=Object.assign(Object.assign({},c),K?{}:{width:u}),P=g.useRef({clientX:0,clientY:0}),j=W=>{P.current=W},q=d&&!Dr,w=W=>{if(W.target!==S.current)return;const ae=S.current.getBoundingClientRect();Wi(P.current,ae)||Wi(W,ae)||s!==void 0&&s()===!1||S.current.close()},F=W=>{s&&s()===!1&&W.preventDefault()},Y=!v&&!R["aria-label"]&&a?b:v,z=m.createElement("dialog",Object.assign({},R,{ref:y,className:A,style:h,onCancel:Qn(o,F),onClick:q?Qn(f,w):f,onMouseDown:q?Qn(p,j):p,"aria-labelledby":Y}),m.createElement(TE,{closeHandler:xg(S,a,s),ref:S},a&&m.createElement(ru,null,a.label&&m.createElement(Mr,{className:I("navds-modal__label")},a.label),m.createElement(Et,{size:(n=a.size)!==null&&n!==void 0?n:"medium",level:"1",id:b},a.icon&&m.createElement("span",{className:I("navds-modal__header-icon")},a.icon),a.heading)),l));return _?M?Ll.createPortal(z,M):null:z});cn.Header=ru;cn.Body=Vg;cn.Footer=qg;var Qg=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Zg=g.forwardRef((e,r)=>{var{className:t}=e,n=Qg(e,["className"]);const{cn:a}=ee();return m.createElement("div",Object.assign({},n,{ref:r,className:a("navds-popover__content",t)}))});var ev=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Gr=g.forwardRef((e,r)=>{var{className:t,children:n,anchorEl:a,arrow:l=!0,open:i,onClose:s,placement:o="top",offset:d,strategy:u,flip:E=!0}=e,_=ev(e,["className","children","anchorEl","arrow","open","onClose","placement","offset","strategy","flip"]);const{cn:N}=ee(),v=g.useRef(null),c=_t(!1)!==void 0,f=Xl(!1),p=u??(c?"fixed":"absolute"),R=f?!1:E,I=Fr(!1),{update:k,refs:S,placement:y,middlewareData:{arrow:{x:b,y:B}={}},floatingStyles:M}=$o({strategy:p,placement:o,open:i,middleware:[Do(d??(I?.isDarkside?8:l?16:4)),R&&yo({padding:5,fallbackPlacements:["bottom","top"]}),Ao({padding:12}),Oo({element:v,padding:8})]});Lr(()=>{S.setReference(a)},[a]);const G=Vr(S.setFloating,r);Lr(()=>{if(!S.reference.current||!S.floating.current||!i)return;const K=Nl(S.reference.current,S.floating.current,k);return()=>K()},[S.floating,S.reference,k,i,a]);const V={top:"bottom",right:"left",bottom:"top",left:"right"}[y.split("-")[0]];return m.createElement(I_,{asChild:!0,safeZone:{anchor:a,dismissable:S.floating.current},onDismiss:()=>i&&s?.(),enabled:i},m.createElement("div",Object.assign({ref:G},_,{className:N("navds-popover",t,{"navds-popover--hidden":!i||!a}),style:Object.assign(Object.assign({},_.style),M),"data-placement":y,"aria-hidden":!i||!a}),n,l&&!I?.isDarkside&&m.createElement("div",{ref:K=>{v.current=K},style:Object.assign(Object.assign(Object.assign({},b!=null?{left:b}:{}),B!=null?{top:B}:{}),V?{[V]:"-0.5rem"}:{}),className:N("navds-popover__arrow")})))});Gr.Content=Zg;const nv={single:"chooseDate",multiple:"chooseDates",range:"chooseDateRange",month:"chooseMonth"},rv=({open:e,children:r,onClose:t,anchor:n,locale:a,translate:l,variant:i,popoverProps:s})=>{const o=Jn("global",Pg(a)),{cn:d}=ee(),u=g.useRef(null),E=_t(!1)!==void 0;return vE("screen and (min-width: 768px)",!0)&&!E?m.createElement(Gr,Object.assign({arrow:!1,anchorEl:n,open:e,onClose:t,placement:"bottom-start",role:"dialog",className:d("navds-date__popover",{"navds-date":i==="month"}),flip:!1},s),r):m.createElement(cn,{ref:u,open:e,onClose:N=>{N.stopPropagation(),t()},"aria-label":l(nv[i]),className:d("navds-date__modal",{"navds-date__nested-modal":E,"navds-date":i==="month"}),closeOnBackdropClick:!0,placement:"top"},m.createElement("div",{className:d("navds-date__modal-body")},r,m.createElement(Oe,{variant:"tertiary",onClick:()=>{var N;return(N=u?.current)===null||N===void 0?void 0:N.close()},size:"small",type:"button"},o("close"))))};function ou(e){return!!(e&&typeof e=="object"&&"from"in e)}const tv={},Xr={};function et(e,r){try{const n=(tv[e]||=new Intl.DateTimeFormat("en-GB",{timeZone:e,hour:"numeric",timeZoneName:"longOffset"}).format)(r).split("GMT")[1]||"";return n in Xr?Xr[n]:Qi(n,n.split(":"))}catch{if(e in Xr)return Xr[e];const t=e?.match(av);return t?Qi(e,t.slice(1)):NaN}}const av=/([+-]\d\d):?(\d\d)?/;function Qi(e,r){const t=+r[0],n=+(r[1]||0);return Xr[e]=t>0?t*60+n:t*60-n}class bn extends Date{constructor(...r){super(),r.length>1&&typeof r[r.length-1]=="string"&&(this.timeZone=r.pop()),this.internal=new Date,isNaN(et(this.timeZone,this))?this.setTime(NaN):r.length?typeof r[0]=="number"&&(r.length===1||r.length===2&&typeof r[1]!="number")?this.setTime(r[0]):typeof r[0]=="string"?this.setTime(+new Date(r[0])):r[0]instanceof Date?this.setTime(+r[0]):(this.setTime(+new Date(...r)),uu(this),Il(this)):this.setTime(Date.now())}static tz(r,...t){return t.length?new bn(...t,r):new bn(Date.now(),r)}withTimeZone(r){return new bn(+this,r)}getTimezoneOffset(){return-et(this.timeZone,this)}setTime(r){return Date.prototype.setTime.apply(this,arguments),Il(this),+this}[Symbol.for("constructDateFrom")](r){return new bn(+new Date(r),this.timeZone)}}const Zi=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!Zi.test(e))return;const r=e.replace(Zi,"$1UTC");bn.prototype[r]&&(e.startsWith("get")?bn.prototype[e]=function(){return this.internal[r]()}:(bn.prototype[e]=function(){return Date.prototype[r].apply(this.internal,arguments),lv(this),+this},bn.prototype[r]=function(){return Date.prototype[r].apply(this,arguments),Il(this),+this}))});function Il(e){e.internal.setTime(+e),e.internal.setUTCMinutes(e.internal.getUTCMinutes()-e.getTimezoneOffset())}function lv(e){Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate()),Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds()),uu(e)}function uu(e){const r=et(e.timeZone,e),t=new Date(+e);t.setUTCHours(t.getUTCHours()-1);const n=-new Date(+e).getTimezoneOffset(),a=-new Date(+t).getTimezoneOffset(),l=n-a,i=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();l&&i&&e.internal.setUTCMinutes(e.internal.getUTCMinutes()+l);const s=n-r;s&&Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+s);const o=et(e.timeZone,e),u=-new Date(+e).getTimezoneOffset()-o,E=o!==r,_=u-s;if(E&&_){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+_);const N=et(e.timeZone,e),v=o-N;v&&(e.internal.setUTCMinutes(e.internal.getUTCMinutes()+v),Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+v))}}class Je extends bn{static tz(r,...t){return t.length?new Je(...t,r):new Je(Date.now(),r)}toISOString(){const[r,t,n]=this.tzComponents(),a=`${r}${t}:${n}`;return this.internal.toISOString().slice(0,-1)+a}toString(){return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){const[r,t,n,a]=this.internal.toUTCString().split(" ");return`${r?.slice(0,-1)} ${n} ${t} ${a}`}toTimeString(){const r=this.internal.toUTCString().split(" ")[4],[t,n,a]=this.tzComponents();return`${r} GMT${t}${n}${a} (${iv(this.timeZone,this)})`}toLocaleString(r,t){return Date.prototype.toLocaleString.call(this,r,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(r,t){return Date.prototype.toLocaleDateString.call(this,r,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(r,t){return Date.prototype.toLocaleTimeString.call(this,r,{...t,timeZone:t?.timeZone||this.timeZone})}tzComponents(){const r=this.getTimezoneOffset(),t=r>0?"-":"+",n=String(Math.floor(Math.abs(r)/60)).padStart(2,"0"),a=String(Math.abs(r)%60).padStart(2,"0");return[t,n,a]}withTimeZone(r){return new Je(+this,r)}[Symbol.for("constructDateFrom")](r){return new Je(+new Date(r),this.timeZone)}}function iv(e,r){return new Intl.DateTimeFormat("en-GB",{timeZone:e,timeZoneName:"long"}).format(r).slice(12)}var Q;(function(e){e.Root="root",e.Chevron="chevron",e.Day="day",e.DayButton="day_button",e.CaptionLabel="caption_label",e.Dropdowns="dropdowns",e.Dropdown="dropdown",e.DropdownRoot="dropdown_root",e.Footer="footer",e.MonthGrid="month_grid",e.MonthCaption="month_caption",e.MonthsDropdown="months_dropdown",e.Month="month",e.Months="months",e.Nav="nav",e.NextMonthButton="button_next",e.PreviousMonthButton="button_previous",e.Week="week",e.Weeks="weeks",e.Weekday="weekday",e.Weekdays="weekdays",e.WeekNumber="week_number",e.WeekNumberHeader="week_number_header",e.YearsDropdown="years_dropdown"})(Q||(Q={}));var Se;(function(e){e.disabled="disabled",e.hidden="hidden",e.outside="outside",e.focused="focused",e.today="today"})(Se||(Se={}));var Rn;(function(e){e.range_end="range_end",e.range_middle="range_middle",e.range_start="range_start",e.selected="selected"})(Rn||(Rn={}));var an;(function(e){e.weeks_before_enter="weeks_before_enter",e.weeks_before_exit="weeks_before_exit",e.weeks_after_enter="weeks_after_enter",e.weeks_after_exit="weeks_after_exit",e.caption_after_enter="caption_after_enter",e.caption_after_exit="caption_after_exit",e.caption_before_enter="caption_before_enter",e.caption_before_exit="caption_before_exit"})(an||(an={}));const es=5,sv=4;function ov(e,r){const t=r.startOfMonth(e),n=t.getDay()>0?t.getDay():7,a=r.addDays(e,-n+1),l=r.addDays(a,es*7-1);return r.getMonth(e)===r.getMonth(l)?es:sv}function du(e,r){const t=r.startOfMonth(e),n=t.getDay();return n===1?t:n===0?r.addDays(t,-6):r.addDays(t,-1*(n-1))}function uv(e,r){const t=du(e,r),n=ov(e,r);return r.addDays(t,n*7-1)}class Yn{constructor(r,t){this.Date=Date,this.today=()=>this.overrides?.today?this.overrides.today():this.options.timeZone?Je.tz(this.options.timeZone):new this.Date,this.newDate=(n,a,l)=>this.overrides?.newDate?this.overrides.newDate(n,a,l):this.options.timeZone?new Je(n,a,l,this.options.timeZone):new Date(n,a,l),this.addDays=(n,a)=>this.overrides?.addDays?this.overrides.addDays(n,a):It(n,a),this.addMonths=(n,a)=>this.overrides?.addMonths?this.overrides.addMonths(n,a):jl(n,a),this.addWeeks=(n,a)=>this.overrides?.addWeeks?this.overrides.addWeeks(n,a):bN(n,a),this.addYears=(n,a)=>this.overrides?.addYears?this.overrides.addYears(n,a):ql(n,a),this.differenceInCalendarDays=(n,a)=>this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(n,a):Xn(n,a),this.differenceInCalendarMonths=(n,a)=>this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(n,a):KN(n,a),this.eachMonthOfInterval=n=>this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(n):Ko(n),this.endOfBroadcastWeek=n=>this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(n):uv(n,this),this.endOfISOWeek=n=>this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(n):GN(n),this.endOfMonth=n=>this.overrides?.endOfMonth?this.overrides.endOfMonth(n):Lo(n),this.endOfWeek=(n,a)=>this.overrides?.endOfWeek?this.overrides.endOfWeek(n,a):Po(n,this.options),this.endOfYear=n=>this.overrides?.endOfYear?this.overrides.endOfYear(n):ha(n),this.format=(n,a,l)=>{const i=this.overrides?.format?this.overrides.format(n,a,this.options):_r(n,a,this.options);return this.options.numerals&&this.options.numerals!=="latn"?this.replaceDigits(i):i},this.getISOWeek=n=>this.overrides?.getISOWeek?this.overrides.getISOWeek(n):xl(n),this.getMonth=(n,a)=>this.overrides?.getMonth?this.overrides.getMonth(n,this.options):Yl(n,this.options),this.getYear=(n,a)=>this.overrides?.getYear?this.overrides.getYear(n,this.options):Cl(n,this.options),this.getWeek=(n,a)=>this.overrides?.getWeek?this.overrides.getWeek(n,this.options):Jl(n,this.options),this.isAfter=(n,a)=>this.overrides?.isAfter?this.overrides.isAfter(n,a):wo(n,a),this.isBefore=(n,a)=>this.overrides?.isBefore?this.overrides.isBefore(n,a):ct(n,a),this.isDate=n=>this.overrides?.isDate?this.overrides.isDate(n):Mo(n),this.isSameDay=(n,a)=>this.overrides?.isSameDay?this.overrides.isSameDay(n,a):Ul(n,a),this.isSameMonth=(n,a)=>this.overrides?.isSameMonth?this.overrides.isSameMonth(n,a):CT(n,a),this.isSameYear=(n,a)=>this.overrides?.isSameYear?this.overrides.isSameYear(n,a):xo(n,a),this.max=n=>this.overrides?.max?this.overrides.max(n):hN(n),this.min=n=>this.overrides?.min?this.overrides.min(n):MN(n),this.setMonth=(n,a)=>this.overrides?.setMonth?this.overrides.setMonth(n,a):Ho(n,a),this.setYear=(n,a)=>this.overrides?.setYear?this.overrides.setYear(n,a):Jo(n,a),this.startOfBroadcastWeek=(n,a)=>this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(n,this):du(n,this),this.startOfDay=n=>this.overrides?.startOfDay?this.overrides.startOfDay(n):Hn(n),this.startOfISOWeek=n=>this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(n):Er(n),this.startOfMonth=n=>this.overrides?.startOfMonth?this.overrides.startOfMonth(n):mr(n),this.startOfWeek=(n,a)=>this.overrides?.startOfWeek?this.overrides.startOfWeek(n,this.options):Un(n,this.options),this.startOfYear=n=>this.overrides?.startOfYear?this.overrides.startOfYear(n):ft(n),this.options={locale:Sa,...r},this.overrides=t}getDigitMap(){const{numerals:r="latn"}=this.options,t=new Intl.NumberFormat("en-US",{numberingSystem:r}),n={};for(let a=0;a<10;a++)n[a.toString()]=t.format(a);return n}replaceDigits(r){const t=this.getDigitMap();return r.replace(/\d/g,n=>t[n]||n)}formatNumber(r){return this.replaceDigits(r.toString())}}const Ln=new Yn;class Eu{constructor(r,t,n=Ln){this.date=r,this.displayMonth=t,this.outside=!!(t&&!n.isSameMonth(r,t)),this.dateLib=n}isEqualTo(r){return this.dateLib.isSameDay(r.date,this.date)&&this.dateLib.isSameMonth(r.displayMonth,this.displayMonth)}}class dv{constructor(r,t){this.date=r,this.weeks=t}}class Ev{constructor(r,t){this.days=t,this.weekNumber=r}}function wn(e,r,t=!1,n=Ln){let{from:a,to:l}=e;const{differenceInCalendarDays:i,isSameDay:s}=n;return a&&l?(i(l,a)<0&&([a,l]=[l,a]),i(r,a)>=(t?1:0)&&i(l,r)>=(t?1:0)):!t&&l?s(l,r):!t&&a?s(a,r):!1}function mu(e){return!!(e&&typeof e=="object"&&"before"in e&&"after"in e)}function Ql(e){return!!(e&&typeof e=="object"&&"from"in e)}function _u(e){return!!(e&&typeof e=="object"&&"after"in e)}function Nu(e){return!!(e&&typeof e=="object"&&"before"in e)}function Tu(e){return!!(e&&typeof e=="object"&&"dayOfWeek"in e)}function gu(e,r){return Array.isArray(e)&&e.every(r.isDate)}function _n(e,r,t=Ln){const n=Array.isArray(r)?r:[r],{isSameDay:a,differenceInCalendarDays:l,isAfter:i}=t;return n.some(s=>{if(typeof s=="boolean")return s;if(t.isDate(s))return a(e,s);if(gu(s,t))return s.includes(e);if(Ql(s))return wn(s,e,!1,t);if(Tu(s))return Array.isArray(s.dayOfWeek)?s.dayOfWeek.includes(e.getDay()):s.dayOfWeek===e.getDay();if(mu(s)){const o=l(s.before,e),d=l(s.after,e),u=o>0,E=d<0;return i(s.before,s.after)?E&&u:u||E}return _u(s)?l(e,s.after)>0:Nu(s)?l(s.before,e)>0:typeof s=="function"?s(e):!1})}function mv(e,r,t){const{disabled:n,hidden:a,modifiers:l,showOutsideDays:i,broadcastCalendar:s,today:o}=r,{isSameDay:d,isSameMonth:u,startOfMonth:E,isBefore:_,endOfMonth:N,isAfter:v}=t,c=r.startMonth&&E(r.startMonth),f=r.endMonth&&N(r.endMonth),p={[Se.focused]:[],[Se.outside]:[],[Se.disabled]:[],[Se.hidden]:[],[Se.today]:[]},R={};for(const I of e){const{date:k,displayMonth:S}=I,y=!!(S&&!u(k,S)),b=!!(c&&_(k,c)),B=!!(f&&v(k,f)),M=!!(n&&_n(k,n,t)),G=!!(a&&_n(k,a,t))||b||B||!s&&!i&&y||s&&i===!1&&y,V=d(k,o??t.today());y&&p.outside.push(I),M&&p.disabled.push(I),G&&p.hidden.push(I),V&&p.today.push(I),l&&Object.keys(l).forEach(K=>{const A=l?.[K];A&&_n(k,A,t)&&(R[K]?R[K].push(I):R[K]=[I])})}return I=>{const k={[Se.focused]:!1,[Se.disabled]:!1,[Se.hidden]:!1,[Se.outside]:!1,[Se.today]:!1},S={};for(const y in p){const b=p[y];k[y]=b.some(B=>B===I)}for(const y in R)S[y]=R[y].some(b=>b===I);return{...k,...S}}}function _v(e,r,t={}){return Object.entries(e).filter(([,a])=>a===!0).reduce((a,[l])=>(t[l]?a.push(t[l]):r[Se[l]]?a.push(r[Se[l]]):r[Rn[l]]&&a.push(r[Rn[l]]),a),[r[Q.Day]])}function Nv(e){return m.createElement("button",{...e})}function Tv(e){return m.createElement("span",{...e})}function gv(e){const{size:r=24,orientation:t="left",className:n}=e;return m.createElement("svg",{className:n,width:r,height:r,viewBox:"0 0 24 24"},t==="up"&&m.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),t==="down"&&m.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),t==="left"&&m.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),t==="right"&&m.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"}))}function vv(e){const{day:r,modifiers:t,...n}=e;return m.createElement("td",{...n})}function Iv(e){const{day:r,modifiers:t,...n}=e,a=m.useRef(null);return m.useEffect(()=>{t.focused&&a.current?.focus()},[t.focused]),m.createElement("button",{ref:a,...n})}function fv(e){const{options:r,className:t,components:n,classNames:a,...l}=e,i=[a[Q.Dropdown],t].join(" "),s=r?.find(({value:o})=>o===l.value);return m.createElement("span",{"data-disabled":l.disabled,className:a[Q.DropdownRoot]},m.createElement(n.Select,{className:i,...l},r?.map(({value:o,label:d,disabled:u})=>m.createElement(n.Option,{key:o,value:o,disabled:u},d))),m.createElement("span",{className:a[Q.CaptionLabel],"aria-hidden":!0},s?.label,m.createElement(n.Chevron,{orientation:"down",size:18,className:a[Q.Chevron]})))}function cv(e){return m.createElement("div",{...e})}function Rv(e){return m.createElement("div",{...e})}function pv(e){const{calendarMonth:r,displayIndex:t,...n}=e;return m.createElement("div",{...n},e.children)}function Sv(e){const{calendarMonth:r,displayIndex:t,...n}=e;return m.createElement("div",{...n})}function kv(e){return m.createElement("table",{...e})}function Dv(e){return m.createElement("div",{...e})}const vu=g.createContext(void 0);function gr(){const e=g.useContext(vu);if(e===void 0)throw new Error("useDayPicker() must be used within a custom component.");return e}function Av(e){const{components:r}=gr();return m.createElement(r.Dropdown,{...e})}function yv(e){const{onPreviousClick:r,onNextClick:t,previousMonth:n,nextMonth:a,...l}=e,{components:i,classNames:s,labels:{labelPrevious:o,labelNext:d}}=gr(),u=g.useCallback(_=>{a&&t?.(_)},[a,t]),E=g.useCallback(_=>{n&&r?.(_)},[n,r]);return m.createElement("nav",{...l},m.createElement(i.PreviousMonthButton,{type:"button",className:s[Q.PreviousMonthButton],tabIndex:n?void 0:-1,"aria-disabled":n?void 0:!0,"aria-label":o(n),onClick:E},m.createElement(i.Chevron,{disabled:n?void 0:!0,className:s[Q.Chevron],orientation:"left"})),m.createElement(i.NextMonthButton,{type:"button",className:s[Q.NextMonthButton],tabIndex:a?void 0:-1,"aria-disabled":a?void 0:!0,"aria-label":d(a),onClick:u},m.createElement(i.Chevron,{disabled:a?void 0:!0,orientation:"right",className:s[Q.Chevron]})))}function Ov(e){const{components:r}=gr();return m.createElement(r.Button,{...e})}function bv(e){return m.createElement("option",{...e})}function hv(e){const{components:r}=gr();return m.createElement(r.Button,{...e})}function Mv(e){const{rootRef:r,...t}=e;return m.createElement("div",{...t,ref:r})}function Lv(e){return m.createElement("select",{...e})}function Kv(e){const{week:r,...t}=e;return m.createElement("tr",{...t})}function Pv(e){return m.createElement("th",{...e})}function Gv(e){return m.createElement("thead",{"aria-hidden":!0},m.createElement("tr",{...e}))}function Bv(e){const{week:r,...t}=e;return m.createElement("th",{...t})}function Fv(e){return m.createElement("th",{...e})}function wv(e){return m.createElement("tbody",{...e})}function Vv(e){const{components:r}=gr();return m.createElement(r.Dropdown,{...e})}const jv=Object.freeze(Object.defineProperty({__proto__:null,Button:Nv,CaptionLabel:Tv,Chevron:gv,Day:vv,DayButton:Iv,Dropdown:fv,DropdownNav:cv,Footer:Rv,Month:pv,MonthCaption:Sv,MonthGrid:kv,Months:Dv,MonthsDropdown:Av,Nav:yv,NextMonthButton:Ov,Option:bv,PreviousMonthButton:hv,Root:Mv,Select:Lv,Week:Kv,WeekNumber:Bv,WeekNumberHeader:Fv,Weekday:Pv,Weekdays:Gv,Weeks:wv,YearsDropdown:Vv},Symbol.toStringTag,{value:"Module"}));function qv(e){return{...jv,...e}}function Uv(e){const r={"data-mode":e.mode??void 0,"data-required":"required"in e?e.required:void 0,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||void 0,"data-week-numbers":e.showWeekNumber||void 0,"data-broadcast-calendar":e.broadcastCalendar||void 0,"data-nav-layout":e.navLayout||void 0};return Object.entries(e).forEach(([t,n])=>{t.startsWith("data-")&&(r[t]=n)}),r}function xv(){const e={};for(const r in Q)e[Q[r]]=`rdp-${Q[r]}`;for(const r in Se)e[Se[r]]=`rdp-${Se[r]}`;for(const r in Rn)e[Rn[r]]=`rdp-${Rn[r]}`;for(const r in an)e[an[r]]=`rdp-${an[r]}`;return e}function Iu(e,r,t){return(t??new Yn(r)).format(e,"LLLL y")}const Hv=Iu;function Jv(e,r,t){return(t??new Yn(r)).format(e,"d")}function Yv(e,r=Ln){return r.format(e,"LLLL")}function Cv(e,r=Ln){return e<10?r.formatNumber(`0${e.toLocaleString()}`):r.formatNumber(`${e.toLocaleString()}`)}function $v(){return""}function Wv(e,r,t){return(t??new Yn(r)).format(e,"cccccc")}function fu(e,r=Ln){return r.format(e,"yyyy")}const zv=fu,Xv=Object.freeze(Object.defineProperty({__proto__:null,formatCaption:Iu,formatDay:Jv,formatMonthCaption:Hv,formatMonthDropdown:Yv,formatWeekNumber:Cv,formatWeekNumberHeader:$v,formatWeekdayName:Wv,formatYearCaption:zv,formatYearDropdown:fu},Symbol.toStringTag,{value:"Module"}));function Qv(e){return e?.formatMonthCaption&&!e.formatCaption&&(e.formatCaption=e.formatMonthCaption),e?.formatYearCaption&&!e.formatYearDropdown&&(e.formatYearDropdown=e.formatYearCaption),{...Xv,...e}}function Zv(e,r,t,n,a){const{startOfMonth:l,startOfYear:i,endOfYear:s,eachMonthOfInterval:o,getMonth:d}=a;return o({start:i(e),end:s(e)}).map(_=>{const N=n.formatMonthDropdown(_,a),v=d(_),c=r&&_<l(r)||t&&_>l(t)||!1;return{value:v,label:N,disabled:c}})}function eI(e,r={},t={}){let n={...r?.[Q.Day]};return Object.entries(e).filter(([,a])=>a===!0).forEach(([a])=>{n={...n,...t?.[a]}}),n}function nI(e,r,t){const n=e.today(),a=r?e.startOfISOWeek(n):e.startOfWeek(n),l=[];for(let i=0;i<7;i++){const s=e.addDays(a,i);l.push(s)}return l}function rI(e,r,t,n){if(!e||!r)return;const{startOfYear:a,endOfYear:l,addYears:i,getYear:s,isBefore:o,isSameYear:d}=n,u=a(e),E=l(r),_=[];let N=u;for(;o(N,E)||d(N,E);)_.push(N),N=i(N,1);return _.map(v=>{const c=t.formatYearDropdown(v,n);return{value:s(v),label:c,disabled:!1}})}function cu(e,r,t){return(t??new Yn(r)).format(e,"LLLL y")}const tI=cu;function aI(e,r,t,n){let a=(n??new Yn(t)).format(e,"PPPP");return r?.today&&(a=`Today, ${a}`),a}function Ru(e,r,t,n){let a=(n??new Yn(t)).format(e,"PPPP");return r.today&&(a=`Today, ${a}`),r.selected&&(a=`${a}, selected`),a}const lI=Ru;function iI(){return""}function sI(e){return"Choose the Month"}function oI(e){return"Go to the Next Month"}function uI(e){return"Go to the Previous Month"}function dI(e,r,t){return(t??new Yn(r)).format(e,"cccc")}function EI(e,r){return`Week ${e}`}function mI(e){return"Week Number"}function _I(e){return"Choose the Year"}const NI=Object.freeze(Object.defineProperty({__proto__:null,labelCaption:tI,labelDay:lI,labelDayButton:Ru,labelGrid:cu,labelGridcell:aI,labelMonthDropdown:sI,labelNav:iI,labelNext:oI,labelPrevious:uI,labelWeekNumber:EI,labelWeekNumberHeader:mI,labelWeekday:dI,labelYearDropdown:_I},Symbol.toStringTag,{value:"Module"})),Rt=e=>e instanceof HTMLElement?e:null,nl=e=>[...e.querySelectorAll("[data-animated-month]")??[]],TI=e=>Rt(e.querySelector("[data-animated-month]")),rl=e=>Rt(e.querySelector("[data-animated-caption]")),tl=e=>Rt(e.querySelector("[data-animated-weeks]")),gI=e=>Rt(e.querySelector("[data-animated-nav]")),vI=e=>Rt(e.querySelector("[data-animated-weekdays]"));function II(e,r,{classNames:t,months:n,focused:a,dateLib:l}){const i=g.useRef(null),s=g.useRef(n),o=g.useRef(!1);g.useLayoutEffect(()=>{const d=s.current;if(s.current=n,!r||!e.current||!(e.current instanceof HTMLElement)||n.length===0||d.length===0||n.length!==d.length)return;const u=l.isSameMonth(n[0].date,d[0].date),E=l.isAfter(n[0].date,d[0].date),_=E?t[an.caption_after_enter]:t[an.caption_before_enter],N=E?t[an.weeks_after_enter]:t[an.weeks_before_enter],v=i.current,c=e.current.cloneNode(!0);if(c instanceof HTMLElement?(nl(c).forEach(I=>{if(!(I instanceof HTMLElement))return;const k=TI(I);k&&I.contains(k)&&I.removeChild(k);const S=rl(I);S&&S.classList.remove(_);const y=tl(I);y&&y.classList.remove(N)}),i.current=c):i.current=null,o.current||u||a)return;const f=v instanceof HTMLElement?nl(v):[],p=nl(e.current);if(p&&p.every(R=>R instanceof HTMLElement)&&f&&f.every(R=>R instanceof HTMLElement)){o.current=!0,e.current.style.isolation="isolate";const R=gI(e.current);R&&(R.style.zIndex="1"),p.forEach((I,k)=>{const S=f[k];if(!S)return;I.style.position="relative",I.style.overflow="hidden";const y=rl(I);y&&y.classList.add(_);const b=tl(I);b&&b.classList.add(N);const B=()=>{o.current=!1,e.current&&(e.current.style.isolation=""),R&&(R.style.zIndex=""),y&&y.classList.remove(_),b&&b.classList.remove(N),I.style.position="",I.style.overflow="",I.contains(S)&&I.removeChild(S)};S.style.pointerEvents="none",S.style.position="absolute",S.style.overflow="hidden",S.setAttribute("aria-hidden","true");const M=vI(S);M&&(M.style.opacity="0");const G=rl(S);G&&(G.classList.add(E?t[an.caption_before_exit]:t[an.caption_after_exit]),G.addEventListener("animationend",B));const V=tl(S);V&&V.classList.add(E?t[an.weeks_before_exit]:t[an.weeks_after_exit]),I.insertBefore(S,I.firstChild)})}})}function fI(e,r,t,n){const a=e[0],l=e[e.length-1],{ISOWeek:i,fixedWeeks:s,broadcastCalendar:o}=t??{},{addDays:d,differenceInCalendarDays:u,differenceInCalendarMonths:E,endOfBroadcastWeek:_,endOfISOWeek:N,endOfMonth:v,endOfWeek:c,isAfter:f,startOfBroadcastWeek:p,startOfISOWeek:R,startOfWeek:I}=n,k=o?p(a,n):i?R(a):I(a),S=o?_(l):i?N(v(l)):c(v(l)),y=u(S,k),b=E(l,a)+1,B=[];for(let V=0;V<=y;V++){const K=d(k,V);if(r&&f(K,r))break;B.push(K)}const G=(o?35:42)*b;if(s&&B.length<G){const V=G-B.length;for(let K=0;K<V;K++){const A=d(B[B.length-1],1);B.push(A)}}return B}function cI(e){const r=[];return e.reduce((t,n)=>{const a=n.weeks.reduce((l,i)=>[...l,...i.days],r);return[...t,...a]},r)}function RI(e,r,t,n){const{numberOfMonths:a=1}=t,l=[];for(let i=0;i<a;i++){const s=n.addMonths(e,i);if(r&&s>r)break;l.push(s)}return l}function ns(e,r){const{month:t,defaultMonth:n,today:a=r.today(),numberOfMonths:l=1,endMonth:i,startMonth:s}=e;let o=t||n||a;const{differenceInCalendarMonths:d,addMonths:u,startOfMonth:E}=r;if(i&&d(i,o)<0){const _=-1*(l-1);o=u(i,_)}return s&&d(o,s)<0&&(o=s),E(o)}function pI(e,r,t,n){const{addDays:a,endOfBroadcastWeek:l,endOfISOWeek:i,endOfMonth:s,endOfWeek:o,getISOWeek:d,getWeek:u,startOfBroadcastWeek:E,startOfISOWeek:_,startOfWeek:N}=n,v=e.reduce((c,f)=>{const p=t.broadcastCalendar?E(f,n):t.ISOWeek?_(f):N(f),R=t.broadcastCalendar?l(f):t.ISOWeek?i(s(f)):o(s(f)),I=r.filter(b=>b>=p&&b<=R),k=t.broadcastCalendar?35:42;if(t.fixedWeeks&&I.length<k){const b=r.filter(B=>{const M=k-I.length;return B>R&&B<=a(R,M)});I.push(...b)}const S=I.reduce((b,B)=>{const M=t.ISOWeek?d(B):u(B),G=b.find(K=>K.weekNumber===M),V=new Eu(B,f,n);return G?G.days.push(V):b.push(new Ev(M,[V])),b},[]),y=new dv(f,S);return c.push(y),c},[]);return t.reverseMonths?v.reverse():v}function SI(e,r){let{startMonth:t,endMonth:n}=e;const{startOfYear:a,startOfDay:l,startOfMonth:i,endOfMonth:s,addYears:o,endOfYear:d,newDate:u,today:E}=r,{fromYear:_,toYear:N,fromMonth:v,toMonth:c}=e;!t&&v&&(t=v),!t&&_&&(t=r.newDate(_,0,1)),!n&&c&&(n=c),!n&&N&&(n=u(N,11,31));const f=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";return t?t=i(t):_?t=u(_,0,1):!t&&f&&(t=a(o(e.today??E(),-100))),n?n=s(n):N?n=u(N,11,31):!n&&f&&(n=d(e.today??E())),[t&&l(t),n&&l(n)]}function kI(e,r,t,n){if(t.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l=1}=t,{startOfMonth:i,addMonths:s,differenceInCalendarMonths:o}=n,d=a?l:1,u=i(e);if(!r)return s(u,d);if(!(o(r,e)<l))return s(u,d)}function DI(e,r,t,n){if(t.disableNavigation)return;const{pagedNavigation:a,numberOfMonths:l}=t,{startOfMonth:i,addMonths:s,differenceInCalendarMonths:o}=n,d=a?l??1:1,u=i(e);if(!r)return s(u,-d);if(!(o(u,r)<=0))return s(u,-d)}function AI(e){const r=[];return e.reduce((t,n)=>[...t,...n.weeks],r)}function Pa(e,r){const[t,n]=g.useState(e);return[r===void 0?t:r,n]}function yI(e,r){const[t,n]=SI(e,r),{startOfMonth:a,endOfMonth:l}=r,i=ns(e,r),[s,o]=Pa(i,e.month?i:void 0);g.useEffect(()=>{const y=ns(e,r);o(y)},[e.timeZone]);const d=RI(s,n,e,r),u=fI(d,e.endMonth?l(e.endMonth):void 0,e,r),E=pI(d,u,e,r),_=AI(E),N=cI(E),v=DI(s,t,e,r),c=kI(s,n,e,r),{disableNavigation:f,onMonthChange:p}=e,R=y=>_.some(b=>b.days.some(B=>B.isEqualTo(y))),I=y=>{if(f)return;let b=a(y);t&&b<a(t)&&(b=a(t)),n&&b>a(n)&&(b=a(n)),o(b),p?.(b)};return{months:E,weeks:_,days:N,navStart:t,navEnd:n,previousMonth:v,nextMonth:c,goToMonth:I,goToDay:y=>{R(y)||I(y.date)}}}var An;(function(e){e[e.Today=0]="Today",e[e.Selected=1]="Selected",e[e.LastFocused=2]="LastFocused",e[e.FocusedModifier=3]="FocusedModifier"})(An||(An={}));function rs(e){return!e[Se.disabled]&&!e[Se.hidden]&&!e[Se.outside]}function OI(e,r,t,n){let a,l=-1;for(const i of e){const s=r(i);rs(s)&&(s[Se.focused]&&l<An.FocusedModifier?(a=i,l=An.FocusedModifier):n?.isEqualTo(i)&&l<An.LastFocused?(a=i,l=An.LastFocused):t(i.date)&&l<An.Selected?(a=i,l=An.Selected):s[Se.today]&&l<An.Today&&(a=i,l=An.Today))}return a||(a=e.find(i=>rs(r(i)))),a}function bI(e,r,t,n,a,l,i){const{ISOWeek:s,broadcastCalendar:o}=l,{addDays:d,addMonths:u,addWeeks:E,addYears:_,endOfBroadcastWeek:N,endOfISOWeek:v,endOfWeek:c,max:f,min:p,startOfBroadcastWeek:R,startOfISOWeek:I,startOfWeek:k}=i;let y={day:d,week:E,month:u,year:_,startOfWeek:b=>o?R(b,i):s?I(b):k(b),endOfWeek:b=>o?N(b):s?v(b):c(b)}[e](t,r==="after"?1:-1);return r==="before"&&n?y=f([n,y]):r==="after"&&a&&(y=p([a,y])),y}function pu(e,r,t,n,a,l,i,s=0){if(s>365)return;const o=bI(e,r,t.date,n,a,l,i),d=!!(l.disabled&&_n(o,l.disabled,i)),u=!!(l.hidden&&_n(o,l.hidden,i)),E=o,_=new Eu(o,E,i);return!d&&!u?_:pu(e,r,_,n,a,l,i,s+1)}function hI(e,r,t,n,a){const{autoFocus:l}=e,[i,s]=g.useState(),o=OI(r.days,t,n||(()=>!1),i),[d,u]=g.useState(l?o:void 0);return{isFocusTarget:c=>!!o?.isEqualTo(c),setFocused:u,focused:d,blur:()=>{s(d),u(void 0)},moveFocus:(c,f)=>{if(!d)return;const p=pu(c,f,d,r.navStart,r.navEnd,e,a);p&&(r.goToDay(p),u(p))}}}function MI(e,r){const{selected:t,required:n,onSelect:a}=e,[l,i]=Pa(t,a?t:void 0),s=a?t:l,{isSameDay:o}=r,d=N=>s?.some(v=>o(v,N))??!1,{min:u,max:E}=e;return{selected:s,select:(N,v,c)=>{let f=[...s??[]];if(d(N)){if(s?.length===u||n&&s?.length===1)return;f=s?.filter(p=>!o(p,N))}else s?.length===E?f=[N]:f=[...f,N];return a||i(f),a?.(f,N,v,c),f},isSelected:d}}function LI(e,r,t=0,n=0,a=!1,l=Ln){const{from:i,to:s}=r||{},{isSameDay:o,isAfter:d,isBefore:u}=l;let E;if(!i&&!s)E={from:e,to:t>0?void 0:e};else if(i&&!s)o(i,e)?a?E={from:i,to:void 0}:E=void 0:u(e,i)?E={from:e,to:i}:E={from:i,to:e};else if(i&&s)if(o(i,e)&&o(s,e))a?E={from:i,to:s}:E=void 0;else if(o(i,e))E={from:i,to:t>0?void 0:e};else if(o(s,e))E={from:e,to:t>0?void 0:e};else if(u(e,i))E={from:e,to:s};else if(d(e,i))E={from:i,to:e};else if(d(e,s))E={from:i,to:e};else throw new Error("Invalid range");if(E?.from&&E?.to){const _=l.differenceInCalendarDays(E.to,E.from);n>0&&_>n?E={from:e,to:void 0}:t>1&&_<t&&(E={from:e,to:void 0})}return E}function KI(e,r,t=Ln){const n=Array.isArray(r)?r:[r];let a=e.from;const l=t.differenceInCalendarDays(e.to,e.from),i=Math.min(l,6);for(let s=0;s<=i;s++){if(n.includes(a.getDay()))return!0;a=t.addDays(a,1)}return!1}function ts(e,r,t=Ln){return wn(e,r.from,!1,t)||wn(e,r.to,!1,t)||wn(r,e.from,!1,t)||wn(r,e.to,!1,t)}function PI(e,r,t=Ln){const n=Array.isArray(r)?r:[r];if(n.filter(s=>typeof s!="function").some(s=>typeof s=="boolean"?s:t.isDate(s)?wn(e,s,!1,t):gu(s,t)?s.some(o=>wn(e,o,!1,t)):Ql(s)?s.from&&s.to?ts(e,{from:s.from,to:s.to},t):!1:Tu(s)?KI(e,s.dayOfWeek,t):mu(s)?t.isAfter(s.before,s.after)?ts(e,{from:t.addDays(s.after,1),to:t.addDays(s.before,-1)},t):_n(e.from,s,t)||_n(e.to,s,t):_u(s)||Nu(s)?_n(e.from,s,t)||_n(e.to,s,t):!1))return!0;const i=n.filter(s=>typeof s=="function");if(i.length){let s=e.from;const o=t.differenceInCalendarDays(e.to,e.from);for(let d=0;d<=o;d++){if(i.some(u=>u(s)))return!0;s=t.addDays(s,1)}}return!1}function GI(e,r){const{disabled:t,excludeDisabled:n,selected:a,required:l,onSelect:i}=e,[s,o]=Pa(a,i?a:void 0),d=i?a:s;return{selected:d,select:(_,N,v)=>{const{min:c,max:f}=e,p=_?LI(_,d,c,f,l,r):void 0;return n&&t&&p?.from&&p.to&&PI({from:p.from,to:p.to},t,r)&&(p.from=_,p.to=void 0),i||o(p),i?.(p,_,N,v),p},isSelected:_=>d&&wn(d,_,!1,r)}}function BI(e,r){const{selected:t,required:n,onSelect:a}=e,[l,i]=Pa(t,a?t:void 0),s=a?t:l,{isSameDay:o}=r;return{selected:s,select:(E,_,N)=>{let v=E;return!n&&s&&s&&o(E,s)&&(v=void 0),a||i(v),a?.(v,E,_,N),v},isSelected:E=>s?o(s,E):!1}}function FI(e,r){const t=BI(e,r),n=MI(e,r),a=GI(e,r);switch(e.mode){case"single":return t;case"multiple":return n;case"range":return a;default:return}}function wI(e){let r=e;r.timeZone&&(r={...e},r.today&&(r.today=new Je(r.today,r.timeZone)),r.month&&(r.month=new Je(r.month,r.timeZone)),r.defaultMonth&&(r.defaultMonth=new Je(r.defaultMonth,r.timeZone)),r.startMonth&&(r.startMonth=new Je(r.startMonth,r.timeZone)),r.endMonth&&(r.endMonth=new Je(r.endMonth,r.timeZone)),r.mode==="single"&&r.selected?r.selected=new Je(r.selected,r.timeZone):r.mode==="multiple"&&r.selected?r.selected=r.selected?.map(le=>new Je(le,r.timeZone)):r.mode==="range"&&r.selected&&(r.selected={from:r.selected.from?new Je(r.selected.from,r.timeZone):void 0,to:r.selected.to?new Je(r.selected.to,r.timeZone):void 0}));const{components:t,formatters:n,labels:a,dateLib:l,locale:i,classNames:s}=g.useMemo(()=>{const le={...Sa,...r.locale};return{dateLib:new Yn({locale:le,weekStartsOn:r.broadcastCalendar?1:r.weekStartsOn,firstWeekContainsDate:r.firstWeekContainsDate,useAdditionalWeekYearTokens:r.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:r.useAdditionalDayOfYearTokens,timeZone:r.timeZone,numerals:r.numerals},r.dateLib),components:qv(r.components),formatters:Qv(r.formatters),labels:{...NI,...r.labels},locale:le,classNames:{...xv(),...r.classNames}}},[r.locale,r.broadcastCalendar,r.weekStartsOn,r.firstWeekContainsDate,r.useAdditionalWeekYearTokens,r.useAdditionalDayOfYearTokens,r.timeZone,r.numerals,r.dateLib,r.components,r.formatters,r.labels,r.classNames]),{captionLayout:o,mode:d,navLayout:u,numberOfMonths:E=1,onDayBlur:_,onDayClick:N,onDayFocus:v,onDayKeyDown:c,onDayMouseEnter:f,onDayMouseLeave:p,onNextClick:R,onPrevClick:I,showWeekNumber:k,styles:S}=r,{formatCaption:y,formatDay:b,formatMonthDropdown:B,formatWeekNumber:M,formatWeekNumberHeader:G,formatWeekdayName:V,formatYearDropdown:K}=n,A=yI(r,l),{days:h,months:P,navStart:j,navEnd:q,previousMonth:w,nextMonth:F,goToMonth:Y}=A,z=mv(h,r,l),{isSelected:W,select:ae,selected:Fe}=FI(r,l)??{},{blur:Z,focused:H,isFocusTarget:re,moveFocus:te,setFocused:de}=hI(r,A,z,W??(()=>!1),l),{labelDayButton:je,labelGridcell:qe,labelGrid:Ue,labelMonthDropdown:Kn,labelNav:un,labelPrevious:gn,labelNext:rr,labelWeekday:tr,labelWeekNumber:vr,labelWeekNumberHeader:Cn,labelYearDropdown:D}=a,O=g.useMemo(()=>nI(l,r.ISOWeek),[l,r.ISOWeek]),L=d!==void 0||N!==void 0,C=g.useCallback(()=>{w&&(Y(w),I?.(w))},[w,Y,I]),x=g.useCallback(()=>{F&&(Y(F),R?.(F))},[Y,F,R]),U=g.useCallback((le,pe)=>Ie=>{Ie.preventDefault(),Ie.stopPropagation(),de(le),ae?.(le.date,pe,Ie),N?.(le.date,pe,Ie)},[ae,N,de]),X=g.useCallback((le,pe)=>Ie=>{de(le),v?.(le.date,pe,Ie)},[v,de]),oe=g.useCallback((le,pe)=>Ie=>{Z(),_?.(le.date,pe,Ie)},[Z,_]),Te=g.useCallback((le,pe)=>Ie=>{const $n={ArrowLeft:["day",r.dir==="rtl"?"after":"before"],ArrowRight:["day",r.dir==="rtl"?"before":"after"],ArrowDown:["week","after"],ArrowUp:["week","before"],PageUp:[Ie.shiftKey?"year":"month","before"],PageDown:[Ie.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if($n[Ie.key]){Ie.preventDefault(),Ie.stopPropagation();const[vn,yt]=$n[Ie.key];te(vn,yt)}c?.(le.date,pe,Ie)},[te,c,r.dir]),en=g.useCallback((le,pe)=>Ie=>{f?.(le.date,pe,Ie)},[f]),Ir=g.useCallback((le,pe)=>Ie=>{p?.(le.date,pe,Ie)},[p]),kn=g.useCallback(le=>pe=>{const Ie=Number(pe.target.value),$n=l.setMonth(l.startOfMonth(le),Ie);Y($n)},[l,Y]),Va=g.useCallback(le=>pe=>{const Ie=Number(pe.target.value),$n=l.setYear(l.startOfMonth(le),Ie);Y($n)},[l,Y]),{className:Hr,style:Jr}=g.useMemo(()=>({className:[s[Q.Root],r.className].filter(Boolean).join(" "),style:{...S?.[Q.Root],...r.style}}),[s,r.className,r.style,S]),ja=Uv(r),Yr=g.useRef(null);II(Yr,!!r.animate,{classNames:s,months:P,focused:H,dateLib:l});const qa={dayPickerProps:r,selected:Fe,select:ae,isSelected:W,months:P,nextMonth:F,previousMonth:w,goToMonth:Y,getModifiers:z,components:t,classNames:s,styles:S,labels:a,formatters:n};return m.createElement(vu.Provider,{value:qa},m.createElement(t.Root,{rootRef:r.animate?Yr:void 0,className:Hr,style:Jr,dir:r.dir,id:r.id,lang:r.lang,nonce:r.nonce,title:r.title,role:r.role,"aria-label":r["aria-label"],...ja},m.createElement(t.Months,{className:s[Q.Months],style:S?.[Q.Months]},!r.hideNavigation&&!u&&m.createElement(t.Nav,{"data-animated-nav":r.animate?"true":void 0,className:s[Q.Nav],style:S?.[Q.Nav],"aria-label":un(),onPreviousClick:C,onNextClick:x,previousMonth:w,nextMonth:F}),P.map((le,pe)=>{const Ie=Zv(le.date,j,q,n,l),$n=rI(j,q,n,l);return m.createElement(t.Month,{"data-animated-month":r.animate?"true":void 0,className:s[Q.Month],style:S?.[Q.Month],key:pe,displayIndex:pe,calendarMonth:le},u==="around"&&!r.hideNavigation&&pe===0&&m.createElement(t.PreviousMonthButton,{type:"button",className:s[Q.PreviousMonthButton],tabIndex:w?void 0:-1,"aria-disabled":w?void 0:!0,"aria-label":gn(w),onClick:C,"data-animated-button":r.animate?"true":void 0},m.createElement(t.Chevron,{disabled:w?void 0:!0,className:s[Q.Chevron],orientation:r.dir==="rtl"?"right":"left"})),m.createElement(t.MonthCaption,{"data-animated-caption":r.animate?"true":void 0,className:s[Q.MonthCaption],style:S?.[Q.MonthCaption],calendarMonth:le,displayIndex:pe},o?.startsWith("dropdown")?m.createElement(t.DropdownNav,{className:s[Q.Dropdowns],style:S?.[Q.Dropdowns]},o==="dropdown"||o==="dropdown-months"?m.createElement(t.MonthsDropdown,{className:s[Q.MonthsDropdown],"aria-label":Kn(),classNames:s,components:t,disabled:!!r.disableNavigation,onChange:kn(le.date),options:Ie,style:S?.[Q.Dropdown],value:l.getMonth(le.date)}):m.createElement("span",null,B(le.date,l)),o==="dropdown"||o==="dropdown-years"?m.createElement(t.YearsDropdown,{className:s[Q.YearsDropdown],"aria-label":D(l.options),classNames:s,components:t,disabled:!!r.disableNavigation,onChange:Va(le.date),options:$n,style:S?.[Q.Dropdown],value:l.getYear(le.date)}):m.createElement("span",null,K(le.date,l)),m.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},y(le.date,l.options,l))):m.createElement(t.CaptionLabel,{className:s[Q.CaptionLabel],role:"status","aria-live":"polite"},y(le.date,l.options,l))),u==="around"&&!r.hideNavigation&&pe===E-1&&m.createElement(t.NextMonthButton,{type:"button",className:s[Q.NextMonthButton],tabIndex:F?void 0:-1,"aria-disabled":F?void 0:!0,"aria-label":rr(F),onClick:x,"data-animated-button":r.animate?"true":void 0},m.createElement(t.Chevron,{disabled:F?void 0:!0,className:s[Q.Chevron],orientation:r.dir==="rtl"?"left":"right"})),pe===E-1&&u==="after"&&!r.hideNavigation&&m.createElement(t.Nav,{"data-animated-nav":r.animate?"true":void 0,className:s[Q.Nav],style:S?.[Q.Nav],"aria-label":un(),onPreviousClick:C,onNextClick:x,previousMonth:w,nextMonth:F}),m.createElement(t.MonthGrid,{role:"grid","aria-multiselectable":d==="multiple"||d==="range","aria-label":Ue(le.date,l.options,l)||void 0,className:s[Q.MonthGrid],style:S?.[Q.MonthGrid]},!r.hideWeekdays&&m.createElement(t.Weekdays,{"data-animated-weekdays":r.animate?"true":void 0,className:s[Q.Weekdays],style:S?.[Q.Weekdays]},k&&m.createElement(t.WeekNumberHeader,{"aria-label":Cn(l.options),className:s[Q.WeekNumberHeader],style:S?.[Q.WeekNumberHeader],scope:"col"},G()),O.map((vn,yt)=>m.createElement(t.Weekday,{"aria-label":tr(vn,l.options,l),className:s[Q.Weekday],key:yt,style:S?.[Q.Weekday],scope:"col"},V(vn,l.options,l)))),m.createElement(t.Weeks,{"data-animated-weeks":r.animate?"true":void 0,className:s[Q.Weeks],style:S?.[Q.Weeks]},le.weeks.map((vn,yt)=>m.createElement(t.Week,{className:s[Q.Week],key:vn.weekNumber,style:S?.[Q.Week],week:vn},k&&m.createElement(t.WeekNumber,{week:vn,style:S?.[Q.WeekNumber],"aria-label":vr(vn.weekNumber,{locale:i}),className:s[Q.WeekNumber],scope:"row",role:"rowheader"},M(vn.weekNumber,l)),vn.days.map(He=>{const{date:Dn}=He,me=z(He);if(me[Se.focused]=!me.hidden&&!!H?.isEqualTo(He),me[Rn.selected]=W?.(Dn)||me.selected,Ql(Fe)){const{from:Ua,to:xa}=Fe;me[Rn.range_start]=!!(Ua&&xa&&l.isSameDay(Dn,Ua)),me[Rn.range_end]=!!(Ua&&xa&&l.isSameDay(Dn,xa)),me[Rn.range_middle]=wn(Fe,Dn,!0,l)}const ad=eI(me,S,r.modifiersStyles),ld=_v(me,s,r.modifiersClassNames),id=!L&&!me.hidden?qe(Dn,me,l.options,l):void 0;return m.createElement(t.Day,{key:`${l.format(Dn,"yyyy-MM-dd")}_${l.format(He.displayMonth,"yyyy-MM")}`,day:He,modifiers:me,className:ld.join(" "),style:ad,role:"gridcell","aria-selected":me.selected||void 0,"aria-label":id,"data-day":l.format(Dn,"yyyy-MM-dd"),"data-month":He.outside?l.format(Dn,"yyyy-MM"):void 0,"data-selected":me.selected||void 0,"data-disabled":me.disabled||void 0,"data-hidden":me.hidden||void 0,"data-outside":He.outside||void 0,"data-focused":me.focused||void 0,"data-today":me.today||void 0},!me.hidden&&L?m.createElement(t.DayButton,{className:s[Q.DayButton],style:S?.[Q.DayButton],type:"button",day:He,modifiers:me,disabled:me.disabled||void 0,tabIndex:re(He)?0:-1,"aria-label":je(Dn,me,l.options,l),onClick:U(He,me),onBlur:oe(He,me),onFocus:X(He,me),onKeyDown:Te(He,me),onMouseEnter:en(He,me),onMouseLeave:Ir(He,me)},b(Dn,l.options,l)):!me.hidden&&b(He.date,l.options,l))}))))))})),r.footer&&m.createElement(t.Footer,{className:s[Q.Footer],style:S?.[Q.Footer],role:"status","aria-live":"polite"},r.footer)))}var VI=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Su=g.forwardRef((e,r)=>{var{as:t="div",className:n,above:a,below:l,variant:i,asChild:s}=e,o=VI(e,["as","className","above","below","variant","asChild"]);const{cn:d}=ee(),u=i==="show"?a:l,E=i==="show"?l:a,_=s?wr:t;return m.createElement(_,Object.assign({},o,{ref:r,className:d("navds-responsive",n,{[`navds-responsive__above--${u}`]:u,[`navds-responsive__below--${E}`]:E})}))}),jI=g.forwardRef((e,r)=>m.createElement(Su,Object.assign({},e,{ref:r,variant:"hide"}))),Zl=g.forwardRef((e,r)=>m.createElement(Su,Object.assign({},e,{ref:r,variant:"show"})));function pn(e){return!!(e&&!Number.isNaN(e.getTime())&&e.getFullYear()>999)}function qI({day:e,fromDate:r,toDate:t}){const n=t&&Xn(e,Hn(t))>0,a=r&&Xn(Hn(r),e)>0;return n||a||!1}const ku="dd.MM.yyyy",UI="MMMM yyyy",Du=[ku,"ddMMyyyy","dd/MM/yyyy","dd-MM-yyyy"];[...Du];const al=(e,r,t,n,a)=>{let l;const i=Du;if(a){for(const s of i)if(l=yr(e,s,r,{locale:t}),pn(l)&&!ll(e,r,t,i))return l;for(const s of[...i.map(o=>o.replace("yyyy","yy"))])if(l=yr(e,s,r,{locale:t}),pn(l)&&ll(e,r,t,i)){const o=xI(e,s,r,t);return pn(new Date(o))?new Date(o):new Date("Invalid date")}return new Date("Invalid date")}for(const s of i)if(l=yr(e,s,r,{locale:t}),pn(l)&&!ll(e,r,t,i))return l;return new Date("Invalid date")};function ll(e,r,t,n){let a;const l=n.map(i=>i.replace("yyyy","yy"));for(const i of l)if(a=yr(e,i,r,{locale:t}),pn(a))return!0;return!1}function xI(e,r,t,n){const a=yr(as(e,"19"),r.replace("yy","yyyy"),t,{locale:n}),l=yr(as(e,"20"),r.replace("yy","yyyy"),t,{locale:n});return pn(a)&&pn(l)?ct(a,zT(new Date,{years:80}))?l:a:new Date("Invalid date")}function as(e,r){const t=e.slice(-2);return`${e.slice(0,e.length-2)}${r}${t}`}const Cr=(e,r,t,n)=>_r(e,n??ku,{locale:r}),HI=({month:e,start:r,end:t})=>{if(!e)return;let n=e;return r&&ct(n,r)&&(n=r),t&&wo(n,t)&&(n=t),mr(n)};function JI(e,r,t,n){return Ko({start:ft(e),end:ha(e)}).map(i=>{const s=_r(i,"LLLL",{locale:n}),o=Yl(i),d=r&&i<mr(r)||t&&i>mr(t)||!1;return{value:o,label:s,disabled:d}})}function YI(e,r,t){if(!e||!r)return;const n=ft(e),a=ha(r),l=[];let i=n;for(;ct(i,a)||xo(i,a);)l.push(i),i=ql(i,1);return l.map(s=>{const o=_r(s,"yyyy",{locale:t});return{value:Cl(s),label:o,disabled:!1}})}function CI({captionLayout:e,startMonth:r,endMonth:t,today:n}){const a=e==="dropdown",l=n??new Date;return r?r=mr(r):!r&&a&&(r=ft(ql(l,-100))),t?t=Lo(t):!t&&a&&(t=ha(l)),[r&&Hn(r),t&&Hn(t)]}var $I=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const WI=e=>{var{day:r,modifiers:t,locale:n,children:a}=e,l=$I(e,["day","modifiers","locale","children"]);const{cn:i}=ee(),s=g.useRef(null);return g.useEffect(()=>{var o;t.focused&&((o=s.current)===null||o===void 0||o.focus())},[t.focused]),t.hidden?m.createElement(m.Fragment,null):m.createElement("button",Object.assign({},l,{ref:s,"aria-hidden":r.outside,"aria-pressed":!!t.selected,"aria-label":_r(r.date,"cccc d",{locale:n}),"data-pressed":t.selected,"data-today":t.today||void 0,className:i(l.className,{"rdp-day_disabled":t.disabled,"rdp-day_selected":t.selected,"rdp-day_range_start":t.range_start,"rdp-day_range_middle":t.range_middle,"rdp-day_range_end":t.range_end,"rdp-day_today":t.today,"rdp-day_outside":t.outside,"rdp-day__weekend":t.weekend})}),a)};var zI=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const fl=g.forwardRef((e,r)=>{const{inputProps:t,errorId:n,showErrorMsg:a,hasError:l,size:i,inputDescriptionId:s,readOnly:o}=xr(e,"select"),{children:d,label:u,className:E,description:_,htmlSize:N,hideLabel:v=!1,style:c}=e,f=zI(e,["children","label","className","description","htmlSize","hideLabel","style"]),{cn:p}=ee(),R={onMouseDown:I=>{o&&(I.preventDefault(),I.target.focus())},onKeyDown:I=>{o&&["ArrowDown","ArrowUp","ArrowRight","ArrowLeft"," "].includes(I.key)&&I.preventDefault()}};return m.createElement("div",{className:p(E,"navds-form-field",`navds-form-field--${i}`,{"navds-form-field--disabled":!!t.disabled,"navds-form-field--readonly":o,"navds-select--error":l,"navds-select--readonly":o})},m.createElement(ce,{htmlFor:t.id,size:i,className:p("navds-form-field__label",{"navds-sr-only":v})},o&&m.createElement(Wo,null),u),!!_&&m.createElement(ne,{className:p("navds-form-field__description",{"navds-sr-only":v}),id:s,size:i,as:"div"},_),m.createElement("div",{className:p("navds-select__container"),style:c},m.createElement("select",Object.assign({},Ye(f,["error","errorId","size","readOnly"]),t,R,{ref:r,className:p("navds-select__input","navds-body-short",`navds-body-short--${i??"medium"}`),size:N}),d),m.createElement(mt,{className:p("navds-select__chevron"),"aria-hidden":!0})),m.createElement("div",{className:p("navds-form-field__error"),id:n,"aria-relevant":"additions removals","aria-live":"polite"},a&&m.createElement(dt,{size:i,showIcon:!0},e.error)))}),Au=({week:{weekNumber:e,days:r},onWeekNumberClick:t,className:n,style:a,showOnDesktop:l})=>{const i=Ka().translate,{cn:s}=ee(),{getModifiers:o}=gr(),d=g.useMemo(()=>r.filter(E=>{const _=o(E);return!(_.hidden||_.outside||_.disabled)}).length===0,[r,o]),u=l?Zl:jI;return!t||d?m.createElement(u,{above:"sm",asChild:!0},m.createElement("td",{className:"rdp-cell"},m.createElement(Mr,{as:"span",textColor:"subtle",className:n,style:a,"aria-label":i("weekNumber",{week:e})},e))):m.createElement(u,{above:"sm",asChild:!0},m.createElement("td",{className:s("rdp-cell",{"navds-date__week-wrapper":!l})},m.createElement(Oe,{variant:"secondary-neutral",size:"small",name:"week-number","aria-label":i("selectWeekNumber",{week:e}),style:a,className:s("navds-date__weeknumber","rdp-weeknumber"),onClick:()=>{t(e,r.map(E=>E.date))},icon:m.createElement("span",{className:s("navds-date__weeknumber-number")},e)})))},XI=({onWeekNumberClick:e,weeks:r})=>{const t=Ka().translate,{cn:n}=ee(),a=Sn();return e?m.createElement(Zl,{below:"sm",asChild:!0},m.createElement("table",{className:"rdp-table",role:"grid"},m.createElement("tbody",{className:"rdp-tbody"},m.createElement("tr",{className:n("rdp-row navds-date__week-row")},m.createElement(Mr,{as:"th",weight:"semibold",className:n("rdp-cell navds-date__week-cell")},m.createElement("span",{className:n("navds-date__week-wrapper"),id:a},t("week"))),r?.map(l=>m.createElement(Au,{key:l.weekNumber,week:l,onWeekNumberClick:e,showOnDesktop:!1,className:n("navds-date__week-wrapper")})))))):null};var QI=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ZI=e=>{var{children:r,calendarMonth:t,locale:n,onWeekNumberClick:a}=e,l=QI(e,["children","calendarMonth","locale","onWeekNumberClick"]);const{dayPickerProps:i,goToMonth:s,previousMonth:o,nextMonth:d}=gr(),{captionLayout:u}=i,{cn:E}=ee(),_=Ka().translate,N=g.useCallback((I,k)=>{const S=Number(k.target.value),y=Ho(mr(I),S);s(y)},[s]),v=g.useCallback((I,k)=>{const S=Number(k.target.value),y=Jo(mr(I),S);s(y)},[s]),[c,f]=CI({captionLayout:u==="dropdown"?"dropdown":"label",startMonth:i.startMonth,endMonth:i.endMonth,today:i.today}),p=JI(t.date,c,f,n),R=YI(c,f,n);return m.createElement("div",Object.assign({},Ye(l,["displayIndex"])),m.createElement("div",{className:E("navds-date__caption")},u?.startsWith("dropdown")&&m.createElement("span",{"aria-live":"polite","aria-atomic":"true",className:E("navds-sr-only")},_r(t.date,"LLLL y",{locale:n})),m.createElement(Oe,{variant:"tertiary-neutral",disabled:!o,onClick:()=>o&&s(o),icon:m.createElement(hd,{title:_("goToPreviousMonth")}),className:E("navds-date__caption-button"),type:"button"}),u?.startsWith("dropdown")?m.createElement("div",{className:E("navds-date__caption")},m.createElement(fl,{label:_("month"),hideLabel:!0,className:E("navds-date__caption__month"),onChange:I=>N(t.date,I),value:Yl(t.date)},p?.map(({value:I,label:k,disabled:S})=>m.createElement("option",{key:I,value:I,disabled:S},k))),m.createElement(fl,{label:_("year"),hideLabel:!0,className:E("navds-date__caption__year"),onChange:I=>v(t.date,I),value:Cl(t.date)},R?.map(({value:I,label:k,disabled:S})=>m.createElement("option",{key:I,value:I,disabled:S},k)))):m.createElement(ne,{weight:"semibold",as:"span","aria-live":"polite",role:"status",className:E("navds-date__caption-label")},_r(t.date,"LLLL y",{locale:n})),m.createElement(Oe,{variant:"tertiary-neutral",icon:m.createElement(Ld,{title:_("goToNextMonth")}),onClick:()=>d&&s(d),disabled:!d,className:E("navds-date__caption-button"),type:"button"})),m.createElement(XI,{weeks:t.weeks,onWeekNumberClick:a}),r)};var ef=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const nf={root:"rdp",button_next:"button",day:"rdp-cell",day_button:"rdp-day rdp-button",disabled:"",hidden:"rdp-day_hidden",outside:"rdp-day_outside",selected:"rdp-day_selected",weekday:"rdp-head_cell",weekdays:"rdp-head_row",week:"rdp-row",weeks:"rdp-tbody",month_grid:"rdp-table",week_number:"rdp-weeknumber"},yu=e=>{var{className:r,dropdownCaption:t,disabled:n=[],disableWeekends:a=!1,showWeekNumber:l=!1,selected:i,fixedWeeks:s=!1,onWeekNumberClick:o,fromDate:d,toDate:u,month:E,mode:_,handleSelect:N,locale:v}=e,c=ef(e,["className","dropdownCaption","disabled","disableWeekends","showWeekNumber","selected","fixedWeeks","onWeekNumberClick","fromDate","toDate","month","mode","handleSelect","locale"]);const{cn:f}=ee(),p=bo(),R=v?Qo(v):p,I=_??"single";return m.createElement(wI,Object.assign({captionLayout:t?"dropdown":"label",hideNavigation:!0,locale:R,mode:I,onSelect:(k,S)=>{if(I!=="range"||k||!ou(i)){N(k);return}if(!i.to){N({from:S,to:void 0});return}let y;Ul(i.to,S)?y=void 0:ct(S,i.to)?y={from:S,to:i.to}:y={from:i.to,to:S},N(y)},selected:i,classNames:nf,components:{MonthCaption:()=>m.createElement(m.Fragment,null),DayButton:g.useCallback(k=>m.createElement(WI,Object.assign({},k,{locale:R})),[R]),Month:g.useCallback(k=>m.createElement(ZI,Object.assign({},k,{locale:R,onWeekNumberClick:I==="multiple"?o:void 0})),[R,I,o]),Day:g.useCallback(k=>m.createElement("td",Object.assign({},Ye(k,["day","modifiers"]),{className:"rdp-cell",role:void 0})),[]),WeekNumber:g.useCallback(k=>m.createElement(Au,Object.assign({},k,{showOnDesktop:!0,onWeekNumberClick:I==="multiple"?o:void 0})),[I,o]),WeekNumberHeader:g.useCallback(k=>m.createElement(Zl,{above:"sm",asChild:!0},m.createElement("th",Object.assign({},k))),[]),Weekdays:g.useCallback(k=>m.createElement("thead",Object.assign({},k,{className:"rdp-head","aria-hidden":!0}),m.createElement("tr",{className:"rdp-head_row"},k.children)),[])},className:f("navds-date",r),disabled:k=>a&&ma(k)||_n(k,n)||qI({day:k,fromDate:d,toDate:u}),weekStartsOn:1,modifiers:{weekend:k=>a&&ma(k)},modifiersClassNames:{weekend:"rdp-day__weekend"},autoFocus:!1,showWeekNumber:l,fixedWeeks:s,showOutsideDays:!0,startMonth:d,endMonth:u,month:HI({month:E,start:d,end:u})},Ye(c,["onSelect","role","id","defaultSelected"])))};var rf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const tf=g.forwardRef((e,r)=>{var{className:t,locale:n,translations:a,selected:l,defaultSelected:i,onSelect:s,mode:o}=e,d=rf(e,["className","locale","translations","selected","defaultSelected","onSelect","mode"]);const{cn:u}=ee(),E=Jn("DatePicker",a,Zo(n)),[_,N]=Kr({defaultValue:i,value:l,onChange:v=>s?.(v)});return m.createElement(eu,{translate:E},m.createElement("div",{ref:r,className:u("navds-date__standalone-wrapper",t)},m.createElement(yu,Object.assign({},d,{locale:n,handleSelect:N,selected:_,mode:o}))))});var af=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const va=g.forwardRef((e,r)=>{var{children:t,locale:n,translations:a,selected:l,id:i,defaultSelected:s,wrapperClassName:o,open:d,onClose:u,onOpenToggle:E,strategy:_,mode:N}=e,v=af(e,["children","locale","translations","selected","id","defaultSelected","wrapperClassName","open","onClose","onOpenToggle","strategy","mode"]);const c=Jn("DatePicker",a,Zo(n)),{cn:f}=ee(),p=Sn(i),[R,I]=Kr({defaultValue:!1,value:d}),[k,S]=g.useState(null),y=Vr(S,r),[b,B]=Kr({defaultValue:s,value:l,onChange:M=>{var G;let V=!1;N==="single"&&M?V=!0:ou(M)&&M.from&&M.to&&(V=!0,Ul(M.from,M.to)&&(V=!1)),V&&(u?.(),I(!1)),(G=v?.onSelect)===null||G===void 0||G.call(v,M)}});return m.createElement(eu,{translate:c},m.createElement(Bg,{open:R,onOpen:()=>{I(M=>!M),E?.()},ariaId:p,defined:!0},m.createElement("div",{ref:y,className:f("navds-date__wrapper",o)},t,m.createElement(rv,{open:R,anchor:k,onClose:()=>{u?.(),R&&I(!1)},locale:n,translate:c,variant:N??"single",popoverProps:{id:p,strategy:_}},m.createElement(yu,Object.assign({},v,{locale:n,handleSelect:B,selected:b,mode:N}))))))});va.Standalone=tf;va.Input=Fg;const lf=(e={})=>Object.assign({isDisabled:!1,isWeekend:!1,isEmpty:!1,isInvalid:!1,isBefore:!1,isAfter:!1,isValidDate:!0},e),sf=(e={})=>{var r;const{locale:t,required:n,defaultSelected:a,today:l=new Date,fromDate:i,toDate:s,disabled:o,disableWeekends:d,onDateChange:u,inputFormat:E,onValidate:_,defaultMonth:N,allowTwoDigitYear:v=!0}=e,[c,f]=g.useState(null),p=bo(),R=t?Qo(t):p,[I,k]=g.useState(a),[S,y]=g.useState((r=I??N)!==null&&r!==void 0?r:l),[b,B]=g.useState(I),[M,G]=g.useState(!1),V=I?Cr(I,R,"date",E):"",[K,A]=g.useState(V),h=g.useCallback(Z=>{var H,re;G(Z),Z&&y((re=(H=b??I)!==null&&H!==void 0?H:N)!==null&&re!==void 0?re:l)},[N,I,b,l]),P=Z=>{u?.(Z),B(Z)},j=(Z={})=>_?.(lf(Z));return{datepickerProps:{month:S,onMonthChange:y,onDayClick:(Z,{selected:H})=>{if(!(H&&n)){if(Z&&!H&&(h(!1),c?.focus()),H){P(void 0),A(""),j({isValidDate:!1,isEmpty:!0});return}P(Z),j(),y(Z),A(Z?Cr(Z,R,"date",E):"")}},selected:b??new Date("Invalid date"),locale:t,fromDate:i,toDate:s,today:l,open:M,onClose:()=>{h(!1),c?.focus()},onOpenToggle:()=>h(!M),disabled:o,disableWeekends:d},inputProps:{onChange:Z=>{A(Z.target.value);const H=al(Z.target.value,l,R,"date",v),re=i&&H&&Xn(i,H)>0,te=s&&H&&Xn(H,s)>0;if(!pn(H)||d&&ma(H)||o&&_n(H,o)){P(void 0),j({isInvalid:!pn(H),isWeekend:d&&ma(H),isDisabled:o&&_n(H,o),isValidDate:!1,isEmpty:!Z.target.value,isBefore:re??!1,isAfter:te??!1});return}if(re||te){P(void 0),j({isValidDate:!1,isBefore:re??!1,isAfter:te??!1});return}P(H),j(),y(N??H)},onFocus:Z=>{if(Z.target.readOnly)return;const H=al(Z.target.value,l,R,"date",v);if(pn(H)){A(Cr(H,R,"date",E));const re=i&&H&&Xn(i,H)>0,te=s&&H&&Xn(H,s)>0;!re&&!te&&y(H)}},onBlur:Z=>{const H=al(Z.target.value,l,R,"date",v);pn(H)&&A(Cr(H,R,"date",E))},value:K,setAnchorRef:f},reset:()=>{var Z;P(I),y((Z=I??N)!==null&&Z!==void 0?Z:l),A(V??""),k(a)},selectedDay:b,setSelected:Z=>{var H;P(Z),y((H=Z??N)!==null&&H!==void 0?H:l),A(Z?Cr(Z,R,"date",E):"")}}};function xe(e,r,t,n){return n?typeof n=="string"?{[`--__${e}c-${r}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([a,l])=>[`--__${e}c-${r}-${t}-${a}`,l])):{}}const of={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},ls=(e,r,t,n,a,l)=>r.split(" ").map((i,s,o)=>{var d;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let u=`var(--${l}-${t}-${i})`;if(n.includes(i))u=i==="px"?"1px":i;else if(i.startsWith("space"))u=`var(--${l}-${i})`;else{const E=`--${l}-spacing-${i}`;u=`var(${(d=of[E])!==null&&d!==void 0?d:E})`}return a?i==="0"?"0":`calc(-1 * ${u})`:u}).join(" ");function En(e,r,t,n,a,l=!1,i=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${r}-${t}-xs`]:ls(t,a,n,i,l,e)};const s={};return Object.entries(a).forEach(([o,d])=>{s[`--__${e}c-${r}-${t}-${o}`]=ls(t,d,n,i,l,e)}),s}const uf=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],df=({children:e,className:r,padding:t,paddingInline:n,paddingBlock:a,margin:l,marginInline:i,marginBlock:s,width:o,minWidth:d,maxWidth:u,height:E,minHeight:_,maxHeight:N,position:v,inset:c,top:f,right:p,left:R,bottom:I,overflow:k,overflowX:S,overflowY:y,flexBasis:b,flexGrow:B,flexShrink:M,gridColumn:G})=>{const V=Fr(!1),{cn:K}=ee(),A=V?.isDarkside?"ax":"a",h=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},En(A,"r","p","spacing",t)),En(A,"r","pi","spacing",n)),En(A,"r","pb","spacing",a)),En(A,"r","m","spacing",l)),En(A,"r","mi","spacing",i)),En(A,"r","mb","spacing",s)),xe(A,"r","w",o)),xe(A,"r","minw",d)),xe(A,"r","maxw",u)),xe(A,"r","h",E)),xe(A,"r","minh",_)),xe(A,"r","maxh",N)),xe(A,"r","position",v)),En(A,"r","inset","spacing",c)),En(A,"r","top","spacing",f)),En(A,"r","right","spacing",p)),En(A,"r","bottom","spacing",I)),En(A,"r","left","spacing",R)),xe(A,"r","overflow",k)),xe(A,"r","overflowx",S)),xe(A,"r","overflowy",y)),xe(A,"r","flex-basis",b)),xe(A,"r","flex-grow",B)),xe(A,"r","flex-shrink",M)),xe(A,"r","grid-column",G));return m.createElement(wr,{className:K({className:r,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":a,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":o,"navds-r-minw":d,"navds-r-maxw":u,"navds-r-h":E,"navds-r-minh":_,"navds-r-maxh":N,"navds-r-position":v,"navds-r-inset":c,"navds-r-top":f,"navds-r-right":p,"navds-r-bottom":I,"navds-r-left":R,"navds-r-overflow":k,"navds-r-overflowx":S,"navds-r-overflowy":y,"navds-r-flex-basis":b,"navds-r-flex-grow":B,"navds-r-flex-shrink":M,"navds-r-grid-column":G}),style:h},e)};var Ef=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ou=g.forwardRef((e,r)=>{var{children:t,className:n,as:a="div",align:l,justify:i,wrap:s=!0,gap:o,style:d,direction:u="row",asChild:E}=e,_=Ef(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const N=Fr(!1),v=N?.isDarkside?"ax":"a",{cn:c}=ee(),f=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),En(v,"stack","gap","spacing",o)),xe(v,"stack","direction",u)),xe(v,"stack","align",l)),xe(v,"stack","justify",i)),p=E?wr:a;return m.createElement(df,Object.assign({},_),m.createElement(p,Object.assign({},Ye(_,uf),{ref:r,style:f,className:c("navds-stack",n,{"navds-vstack":u==="column","navds-hstack":u==="row","navds-stack-gap":o,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":u,"navds-stack-wrap":s})}),t))});var mf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Re=g.forwardRef((e,r)=>{var{as:t="div"}=e,n=mf(e,["as"]);return m.createElement(Ou,Object.assign({as:t},n,{ref:r,direction:"row"}))});var _f=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const be=g.forwardRef((e,r)=>{var{as:t="div"}=e,n=_f(e,["as"]);return m.createElement(Ou,Object.assign({as:t},n,{ref:r,direction:"column",wrap:!1}))}),Or=()=>{const{cn:e}=ee();return m.createElement("span",{className:e("navds-stack__spacer")})};var Nf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ei=g.forwardRef((e,r)=>{var{as:t="a",className:n,underline:a=!0,variant:l,inlineText:i=!1,"data-color":s}=e,o=Nf(e,["as","className","underline","variant","inlineText","data-color"]);const d=Fr(!1),{cn:u}=ee();let E;return d?.isDarkside?E=l:E=l??"action",m.createElement(t,Object.assign({"data-color":s??Tf(E),"data-variant":E},o,{ref:r,className:u("navds-link",n,{[`navds-link--${E}`]:E,"navds-link--remove-underline":!a,"navds-link--inline-text":i})}))});function Tf(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}var gf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const vf=g.forwardRef((e,r)=>{var{className:t}=e,n=gf(e,["className"]);const{cn:a}=ee();return m.createElement("tbody",Object.assign({},n,{ref:r,className:a("navds-table__body",t)}))});var If=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const bu=g.forwardRef((e,r)=>{var{className:t,children:n,align:a,textSize:l}=e,i=If(e,["className","children","align","textSize"]);const{cn:s}=ee();return m.createElement("th",Object.assign({ref:r,className:s("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":l==="small"})},i),n)}),hu=g.createContext(null);var ff=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const cf=g.forwardRef((e,r)=>{var t,n,a,l,{className:i,children:s,sortable:o=!1,sortKey:d}=e,u=ff(e,["className","children","sortable","sortKey"]);const E=g.useContext(hu),{cn:_}=ee();return o&&!d&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),m.createElement(bu,Object.assign({scope:"col",ref:r,className:_(i),"aria-sort":o?((t=E?.sort)===null||t===void 0?void 0:t.orderBy)===d?(n=E?.sort)===null||n===void 0?void 0:n.direction:"none":void 0},u),o?m.createElement("button",{type:"button",className:_("navds-table__sort-button"),onClick:o&&d?()=>{var N;return(N=E?.onSortChange)===null||N===void 0?void 0:N.call(E,d)}:void 0},s,((a=E?.sort)===null||a===void 0?void 0:a.orderBy)===d?((l=E?.sort)===null||l===void 0?void 0:l.direction)==="descending"?m.createElement(sE,{"aria-hidden":!0}):m.createElement(uE,{"aria-hidden":!0}):m.createElement(Pd,{"aria-hidden":!0})):s)});var Rf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Mu=g.forwardRef((e,r)=>{var{className:t,children:n="",align:a,textSize:l}=e,i=Rf(e,["className","children","align","textSize"]);const{cn:s}=ee();return m.createElement(ne,Object.assign({as:"td",ref:r,className:s("navds-table__data-cell",t,{[`navds-table__data-cell--align-${a}`]:a}),size:l},i),n)});var pf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Sf=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function kf(e){const r=parseFloat(e);return!Number.isNaN(r)&&Number.isFinite(r)}function is(e){return typeof e=="string"&&e[e.length-1]==="%"&&kf(e.substring(0,e.length-1))}function il(e,r){r===0&&e?.style&&(e.style.display="none")}function Df(e,r){r===0&&e?.style&&(e.style.display="")}const Af=e=>{var{children:r,className:t,innerClassName:n,duration:a=250,easing:l="ease",height:i}=e,s=pf(e,["children","className","innerClassName","duration","easing","height"]);const{cn:o}=ee(),d=g.useRef(i),u=g.useRef(null),E=g.useRef(),_=g.useRef(),N=g.useRef(i),v=g.useRef("visible"),c=Sf?0:a;typeof N.current=="number"?(typeof i!="string"&&(N.current=i<0?0:i),v.current="hidden"):is(N.current)&&(N.current=i==="0%"?0:i,v.current="hidden");const[f,p]=g.useState(N.current),[R,I]=g.useState(v.current),[k,S]=g.useState(!1);g.useEffect(()=>{il(u.current,N.current)},[]),g.useEffect(()=>{if(i!==d.current&&u.current){Df(u.current,d.current),u.current.style.overflow="hidden";const M=u.current.offsetHeight;u.current.style.overflow="";const G=c;let V,K,A="hidden",h;const P=d.current==="auto";typeof i=="number"?(V=i<0?0:i,K=V):is(i)?(V=i==="0%"?0:i,K=V):(V=M,K="auto",A=void 0),P&&(K=V,V=M),p(V),I("hidden"),S(!P),clearTimeout(_.current),clearTimeout(E.current),P?(h=!0,_.current=setTimeout(()=>{p(K),I(A),S(h)},50),E.current=setTimeout(()=>{S(!1),il(u.current,K)},G)):_.current=setTimeout(()=>{p(K),I(A),S(!1),i!=="auto"&&il(u.current,V)},G)}return d.current=i,()=>{clearTimeout(_.current),clearTimeout(E.current)}},[i]);const y={height:f,overflow:R};k&&(y.transition=`height ${c}ms ${l} 0ms`,y.WebkitTransition=y.transition);const B=typeof s["aria-hidden"]<"u"?s["aria-hidden"]:i===0;return m.createElement("div",Object.assign({},s,{className:o(t),style:y}),m.createElement("div",{"aria-hidden":B,className:o(n),ref:u},r))},yf=new Set(["BUTTON","A","INPUT","SELECT","TEXTAREA","DETAILS","SUMMARY","LABEL"]),Of=new Set(["button","link","checkbox","radio","switch","menuitem","option","tab","textbox","combobox","spinbutton","slider"]);function Lu(e){for(let r=e;r&&r.nodeName!=="TR"&&r.nodeName!=="TH";r=r.parentElement){const t=r.nodeName;if(yf.has(t))return!0;const n=r.getAttribute("role");if(n&&Of.has(n)||r.hasAttribute("tabindex")&&r.getAttribute("tabindex")!=="-1")return!0}return!1}var bf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ku=g.forwardRef((e,r)=>{var{className:t,selected:n=!1,shadeOnHover:a=!0,onClick:l,onRowClick:i}=e,s=bf(e,["className","selected","shadeOnHover","onClick","onRowClick"]);const{cn:o}=ee(),d=u=>{i&&(Lu(u.target)||i(u))};return m.createElement("tr",Object.assign({},s,{ref:r,className:o("navds-table__row",t,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":a}),onClick:Qn(l,d),"data-interactive":!!i}))});var hf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Mf=g.forwardRef((e,r)=>{var{className:t,children:n,content:a,togglePlacement:l="left",defaultOpen:i=!1,open:s,onOpenChange:o,expansionDisabled:d=!1,expandOnRowClick:u=!1,colSpan:E=999,contentGutter:_,onClick:N}=e,v=hf(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:c}=ee(),[f,p]=Kr({defaultValue:i,value:s,onChange:o}),R=Jn("global"),I=Sn(),k=y=>{p(b=>!b),y.stopPropagation()},S=y=>{u&&!d&&!Lu(y.target)&&k(y)};return m.createElement(m.Fragment,null,m.createElement(Ku,Object.assign({},v,{ref:r,className:c("navds-table__expandable-row",t,{"navds-table__expandable-row--open":f,"navds-table__expandable-row--expansion-disabled":d,"navds-table__expandable-row--clickable":u}),onClick:Qn(N,S)}),l==="right"&&n,m.createElement(Mu,{className:c("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":f}),onClick:d?()=>null:k},!d&&m.createElement("button",{className:c("navds-table__toggle-expand-button"),type:"button","aria-controls":I,"aria-expanded":f,onClick:k},m.createElement(mt,{className:c("navds-table__expandable-icon"),title:R(f?"showLess":"showMore")}))),l==="left"&&n),m.createElement("tr",{"data-state":f?"open":"closed",className:c("navds-table__expanded-row"),"aria-hidden":!f,id:I},m.createElement("td",{colSpan:E,className:c("navds-table__expanded-row-cell")},m.createElement(Af,{className:c("navds-table__expanded-row-collapse"),innerClassName:c(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${_??l}`),height:f?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});var Lf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Kf=g.forwardRef((e,r)=>{var{className:t}=e,n=Lf(e,["className"]);const{cn:a}=ee();return m.createElement("thead",Object.assign({},n,{ref:r,className:a("navds-table__header",t)}))});var Pf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ke=g.forwardRef((e,r)=>{var{className:t,zebraStripes:n=!1,size:a="medium",onSortChange:l,sort:i,stickyHeader:s=!1}=e,o=Pf(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:d}=ee();return m.createElement(hu.Provider,{value:{onSortChange:l,sort:i}},m.createElement("table",Object.assign({},o,{ref:r,className:d("navds-table",`navds-table--${a}`,t,{"navds-table--zebra-stripes":n,"navds-table--sticky-header":s})})))});ke.Header=Kf;ke.Body=vf;ke.Row=Ku;ke.ColumnHeader=cf;ke.HeaderCell=bu;ke.DataCell=Mu;ke.ExpandableRow=Mf;var Gf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Bf=g.forwardRef((e,r)=>{var{children:t,className:n,variant:a,size:l="medium",icon:i,"data-color":s}=e,o=Gf(e,["children","className","variant","size","icon","data-color"]);const{cn:d}=ee(),u=a?.endsWith("-filled")&&"strong",E=a?.endsWith("-moderate")&&"moderate";return m.createElement(ne,Object.assign({"data-color":s??Ff(a),"data-variant":u||E||"outline"},o,{ref:r,as:"span",size:l==="medium"?"medium":"small",className:d("navds-tag",n,`navds-tag--${a}`,`navds-tag--${l}`)}),i&&m.createElement("span",{className:d("navds-tag__icon--left")},i),t)});function Ff(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}var wf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Pu=g.forwardRef((e,r)=>{var{children:t,className:n,arrow:a=!0,placement:l="top",open:i,defaultOpen:s=!1,onOpenChange:o,offset:d,content:u,delay:E=150,id:_,keys:N,maxChar:v=80,describesChild:c=!1}=e,f=wf(e,["children","className","arrow","placement","open","defaultOpen","onOpenChange","offset","content","delay","id","keys","maxChar","describesChild"]);const{cn:p}=ee(),[R,I]=Kr({defaultValue:s,value:i,onChange:o}),k=g.useRef(null),S=_t(!1),y=S?S.ref.current:void 0,{x:b,y:B,strategy:M,context:G,placement:V,middlewareData:{arrow:{x:K,y:A}={},hide:{referenceHidden:h}={}},refs:P}=$o({placement:l,open:R,onOpenChange:z=>I(z),middleware:[Do(d??(a?8:4)),Ao(),yo({padding:5,fallbackPlacements:["bottom","top"]}),Oo({element:k,padding:5})],whileElementsMounted:S?(z,W,ae)=>Nl(z,W,ae,{animationFrame:!0}):Nl,strategy:S?"fixed":void 0}),{getReferenceProps:j,getFloatingProps:q}=Og([Ig(G,{handleClose:Mg(),restMs:E}),yg(G),Dg(G)]),w=Sn(_),F=Vr(r,P.setFloating);if(!t||t?.type===m.Fragment||t===m.Fragment)return console.error("<Tooltip> children needs to be a single ReactElement and not: <React.Fragment/> | <></>"),null;u?.length>v&&R&&console.warn(`Because of strict accessibility concers we encourage all Tooltips to have less than 80 characters. Can be overwritten with the maxChar-prop

Length:${u.length}
Tooltip-content: ${u}`);const Y=c?R?{"aria-describedby":w}:{title:u}:{"aria-label":u};return m.createElement(m.Fragment,null,m.createElement(wr,Object.assign({ref:P.setReference},j(),Y,{"aria-keyshortcuts":N?N.join("+"):void 0}),t),m.createElement(i_,{rootElement:y,asChild:!0},R&&m.createElement("div",Object.assign({},q(Object.assign(Object.assign({},f),{ref:F,style:{position:M,top:B??0,left:b??0,visibility:h?"hidden":"visible"},role:"tooltip",id:w,className:p("navds-tooltip","navds-detail navds-detail--small",n)})),{"data-side":V,"data-state":"open"}),u,N&&m.createElement("span",{className:p("navds-tooltip__keys"),"aria-hidden":!0},N.map(z=>m.createElement(Mr,{as:"kbd",key:z,className:p("navds-tooltip__key")},z))),a&&m.createElement("div",{ref:z=>{k.current=z},className:p("navds-tooltip__arrow"),style:{left:K!=null?`${K}px`:"",top:A!=null?`${A}px`:"",right:"",bottom:"",[{top:"bottom",right:"left",bottom:"top",left:"right"}[V]]:"-3.5px"}}))))}),Vf=(e,r)=>{const t=xr(e,"fieldset");return Object.assign(Object.assign({},t),{inputProps:{"aria-labelledby":e["aria-labelledby"]||Br(r,{[t.inputDescriptionId]:e.description&&!ga(e.description)})}})};var jf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const qf=g.forwardRef((e,r)=>{var t,n,a;const l=Sn(),{inputProps:i,errorId:s,showErrorMsg:o,hasError:d,size:u,readOnly:E,inputDescriptionId:_}=Vf(e,l),{cn:N}=ee(),v=g.useContext(Ta),{children:c,className:f,errorPropagation:p=!0,legend:R,description:I,hideLegend:k,nativeReadOnly:S=!0}=e,y=jf(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return m.createElement(Ta.Provider,{value:{error:p?(t=e.error)!==null&&t!==void 0?t:v?.error:void 0,errorId:Br({[s]:o,[(n=v?.errorId)!==null&&n!==void 0?n:""]:!!v?.error}),size:u,disabled:(a=e.disabled)!==null&&a!==void 0?a:!1,readOnly:E}},m.createElement("fieldset",Object.assign({},Ye(y,["errorId","error","size","readOnly"]),i,{ref:r,className:N(f,"navds-fieldset",`navds-fieldset--${u}`,{"navds-fieldset--error":d,"navds-fieldset--readonly":E})}),m.createElement(ce,{id:l,size:u,as:"legend",className:N("navds-fieldset__legend",{"navds-sr-only":!!k})},E&&(S?m.createElement(La,null):m.createElement(Wo,null)),R),!!I&&m.createElement(ne,{className:N("navds-fieldset__description",{"navds-sr-only":!!k}),id:_,size:u??"medium",as:"div"},e.description),c,m.createElement("div",{id:s,"aria-relevant":"additions removals","aria-live":"polite",className:N("navds-fieldset__error")},o&&m.createElement(dt,{size:u,showIcon:!0},e.error))))});var Uf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Gu=m.createContext(null),xf=g.forwardRef((e,r)=>{var t,n,{children:a,className:l,name:i,defaultValue:s,value:o,onChange:d=()=>{},required:u,readOnly:E}=e,_=Uf(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:N}=ee(),v=g.useContext(Ta),c=Sn();return m.createElement(qf,Object.assign({},_,{readOnly:E,ref:r,className:N(l,"navds-radio-group",`navds-radio-group--${(n=(t=_.size)!==null&&t!==void 0?t:v?.size)!==null&&n!==void 0?n:"medium"}`),nativeReadOnly:!1}),m.createElement(Gu.Provider,{value:{name:i??`radioGroupName-${c}`,defaultValue:s,value:o,onChange:d,required:u}},m.createElement("div",{className:N("navds-radio-buttons")},a)))});var Hf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Jf=e=>{const r=g.useContext(Gu),t=xr(Ye(e,["description"]),"radio"),{inputProps:n,readOnly:a}=t,l=Hf(t,["inputProps","readOnly"]);return r||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:a,inputProps:Object.assign(Object.assign({},n),{name:r?.name,defaultChecked:r?.defaultValue===void 0?void 0:r?.defaultValue===e.value,checked:r?.value===void 0?void 0:r?.value===e.value,onChange:i=>{var s,o;a||((s=e.onChange)===null||s===void 0||s.call(e,i),(o=r?.onChange)===null||o===void 0||o.call(r,e.value))},onClick:i=>{var s;if(a){i.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,i)},required:r?.required,type:"radio"})})},br=g.forwardRef((e,r)=>{const{cn:t}=ee(),{inputProps:n,size:a,hasError:l,readOnly:i}=Jf(e),s=Sn(),o=Fr(!1);return o?.isDarkside?m.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":l,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},m.createElement("input",Object.assign({},Ye(e,["children","size","description","readOnly"]),Ye(n,["aria-invalid","aria-describedby"]),{"aria-describedby":Br(n["aria-describedby"],{[s]:e.description})||void 0,className:t("navds-radio__input"),ref:r})),m.createElement(ne,{as:"label",htmlFor:n.id,className:t("navds-radio__label"),size:a},e.children),e.description&&m.createElement(ne,{id:s,size:a,className:t("navds-form-field__subdescription navds-radio__description")},e.description)):m.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${a}`,{"navds-radio--error":l,"navds-radio--disabled":n.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},m.createElement("input",Object.assign({},Ye(e,["children","size","description","readOnly"]),Ye(n,["aria-invalid"]),{className:t("navds-radio__input"),ref:r})),m.createElement("label",{htmlFor:n.id,className:t("navds-radio__label")},m.createElement("span",{className:t("navds-radio__content")},m.createElement(ne,{as:"span",size:a},e.children),e.description&&m.createElement(ne,{as:"span",size:a,className:t("navds-form-field__subdescription navds-radio__description")},e.description))))});var Yf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ss=(e,r,t)=>{const{outerHeightStyle:n,overflow:a}=r;return t.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==a)?(t.current+=1,r):e},os=e=>(e?.ownerDocument||document).defaultView||window;function Kt(e){return parseInt(e,10)||0}const Cf=g.forwardRef((e,r)=>{var t,n,{className:a,onChange:l,maxRows:i,minRows:s=1,autoScrollbar:o,style:d,value:u}=e,E=Yf(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:_}=g.useRef(u!=null),N=g.useRef(null),v=Vr(N,r),c=g.useRef(null),f=g.useRef(0),[p,R]=g.useState({outerHeightStyle:0}),I=m.useCallback(()=>{const b=N.current,M=os(b).getComputedStyle(b);if(M.width==="0px")return{outerHeightStyle:0};const G=c.current;G.style.width=M.width,G.value=b.value||E.placeholder||"x",G.value.slice(-1)===`
`&&(G.value+=" ");const V=M.boxSizing,K=Kt(M.paddingBottom)+Kt(M.paddingTop),A=Kt(M.borderBottomWidth)+Kt(M.borderTopWidth),h=G.scrollHeight-K;G.value="x";const P=G.scrollHeight-K;let j=h;s&&(j=Math.max(Number(s)*P,j)),i&&(j=Math.min(Number(i)*P,j)),j=Math.max(j,P);const q=j+(V==="border-box"?K+A:0),w=Math.abs(j-h)<=1;return{outerHeightStyle:q,overflow:w}},[i,s,E.placeholder]),k=()=>{const b=I();us(b)||R(B=>ss(B,b,f))};Lr(()=>{const b=()=>{const K=I();us(K)||ia.flushSync(()=>{R(A=>ss(A,K,f))})},B=Xs(()=>{var K,A,h;if(f.current=0,!((K=N.current)===null||K===void 0)&&K.style.height||!((A=N.current)===null||A===void 0)&&A.style.width){((h=N.current)===null||h===void 0?void 0:h.style.overflow)==="hidden"&&R(P=>Object.assign(Object.assign({},P),{overflow:!1}));return}b()},166,!0),M=N.current,G=os(M);G.addEventListener("resize",B);let V;return typeof ResizeObserver<"u"&&(V=new ResizeObserver(B),V.observe(M)),()=>{B.clear(),G.removeEventListener("resize",B),V&&V.disconnect()}},[I]),Lr(()=>{k()}),g.useEffect(()=>{f.current=0},[u]);const S=b=>{f.current=0,_||k(),l&&l(b)},y=Object.assign({"--__ac-textarea-height":p.outerHeightStyle+"px","--__axc-textarea-height":p.outerHeightStyle+"px",overflow:p.overflow&&!o&&!(!((t=N.current)===null||t===void 0)&&t.style.height)&&!(!((n=N.current)===null||n===void 0)&&n.style.width)?"hidden":void 0},d);return m.createElement(m.Fragment,null,m.createElement("textarea",Object.assign({value:u,onChange:S,ref:v,rows:s,style:y},E,{className:a})),m.createElement("textarea",{"aria-hidden":!0,className:a,readOnly:!0,ref:c,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},d)}))});function us(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const $f=({maxLengthId:e,maxLength:r,currentLength:t,size:n,i18n:a})=>{const{cn:l}=ee(),i=Jn("Textarea",{charsLeft:a?.counterLeft?`{chars} ${a.counterLeft}`:void 0,charsTooMany:a?.counterTooMuch?`{chars} ${a.counterTooMuch}`:void 0}),s=r-t,[o,d]=g.useState(s);return g.useEffect(()=>{const u=Xs(()=>{d(s)},2e3);return u(),()=>{u.clear()}},[s]),m.createElement(m.Fragment,null,m.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:r})),s<20&&m.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},ds(o,i)),m.createElement(ne,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:n},ds(s,i)))},ds=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var Wf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const zf=g.forwardRef((e,r)=>{var t,n,a;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:o,size:d,inputDescriptionId:u}=xr(e,"textarea"),{label:E,className:_,description:N,maxLength:v,hideLabel:c=!1,resize:f,UNSAFE_autoScrollbar:p,i18n:R,readOnly:I}=e,k=Wf(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:S}=ee(),y=Sn(),b=v!==void 0&&v>0,[B,M]=g.useState((t=e?.defaultValue)!==null&&t!==void 0?t:""),G=()=>{let K=k?.minRows?k?.minRows:3;return d==="small"&&(K=k?.minRows?k?.minRows:2),K},V=Br(l["aria-describedby"],{[y??""]:b});return m.createElement("div",{className:S(_,"navds-form-field",`navds-form-field--${d}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":I,"navds-textarea--readonly":I,"navds-textarea--error":o,"navds-textarea--autoscrollbar":p,[`navds-textarea--resize-${f===!0?"both":f}`]:f})},m.createElement(ce,{htmlFor:l.id,size:d,className:S("navds-form-field__label",{"navds-sr-only":c})},I&&m.createElement(La,null),E),!!N&&m.createElement(ne,{className:S("navds-form-field__description",{"navds-sr-only":c}),id:u,size:d,as:"div"},N),m.createElement(Cf,Object.assign({},Ye(k,["error","errorId","size"]),l,{onChange:Qn(e.onChange,e.value===void 0?K=>M(K.target.value):void 0),minRows:G(),autoScrollbar:p,ref:r,readOnly:I,className:S("navds-textarea__input","navds-body-short",`navds-body-short--${d??"medium"}`)},V?{"aria-describedby":V}:{})),b&&!I&&!l.disabled&&m.createElement($f,{maxLengthId:y,maxLength:v,currentLength:(a=(n=e.value)===null||n===void 0?void 0:n.length)!==null&&a!==void 0?a:B.length,size:d,i18n:R}),m.createElement("div",{className:S("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},s&&m.createElement(dt,{size:d,showIcon:!0},e.error)))});var Xf=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Qf=g.forwardRef((e,r)=>{const{cn:t}=ee(),{inputProps:n,errorId:a,showErrorMsg:l,hasError:i,size:s,inputDescriptionId:o}=xr(e,"textField"),{label:d,className:u,description:E,htmlSize:_,hideLabel:N=!1,type:v="text",readOnly:c}=e,f=Xf(e,["label","className","description","htmlSize","hideLabel","type","readOnly"]);return m.createElement("div",{className:t(u,"navds-form-field",`navds-form-field--${s}`,{"navds-text-field--error":i,"navds-text-field--disabled":!!n.disabled,"navds-form-field--disabled":!!n.disabled,"navds-form-field--readonly":c,"navds-text-field--readonly":c})},m.createElement(ce,{htmlFor:n.id,size:s,className:t("navds-form-field__label",{"navds-sr-only":N})},c&&m.createElement(La,null),d),!!E&&m.createElement(ne,{className:t("navds-form-field__description",{"navds-sr-only":N}),id:o,size:s,as:"div"},E),m.createElement("input",Object.assign({},Ye(f,["error","errorId","size"]),n,{ref:r,type:v,readOnly:c,className:t("navds-text-field__input","navds-body-short",`navds-body-short--${s??"medium"}`),size:_})),m.createElement("div",{className:t("navds-form-field__error"),id:a,"aria-relevant":"additions removals","aria-live":"polite"},l&&m.createElement(dt,{size:s,showIcon:!0},e.error)))});var Ve=(e=>(e.MANGLENDE_INNTEKTSMELDING="MANGLENDE_INNTEKTSMELDING",e.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD="INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD",e.PERMISJON_UTEN_SLUTTDATO="PERMISJON_UTEN_SLUTTDATO",e))(Ve||{}),pt=e=>e.type==="checkbox",sr=e=>e instanceof Date,We=e=>e==null;const Bu=e=>typeof e=="object";var Be=e=>!We(e)&&!Array.isArray(e)&&Bu(e)&&!sr(e),Fu=e=>Be(e)&&e.target?pt(e.target)?e.target.checked:e.target.value:e,Zf=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,wu=(e,r)=>e.has(Zf(r)),ec=e=>{const r=e.constructor&&e.constructor.prototype;return Be(r)&&r.hasOwnProperty("isPrototypeOf")},ni=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function we(e){let r;const t=Array.isArray(e),n=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(!(ni&&(e instanceof Blob||n))&&(t||Be(e)))if(r=t?[]:Object.create(Object.getPrototypeOf(e)),!t&&!ec(e))r=e;else for(const a in e)e.hasOwnProperty(a)&&(r[a]=we(e[a]));else return e;return r}var Ga=e=>/^\w*$/.test(e),Me=e=>e===void 0,ri=e=>Array.isArray(e)?e.filter(Boolean):[],ti=e=>ri(e.replace(/["|']|\]/g,"").split(/\.|\[/)),$=(e,r,t)=>{if(!r||!Be(e))return t;const n=(Ga(r)?[r]:ti(r)).reduce((a,l)=>We(a)?a:a[l],e);return Me(n)||n===e?Me(e[r])?t:e[r]:n},ln=e=>typeof e=="boolean",fe=(e,r,t)=>{let n=-1;const a=Ga(r)?[r]:ti(r),l=a.length,i=l-1;for(;++n<l;){const s=a[n];let o=t;if(n!==i){const d=e[s];o=Be(d)||Array.isArray(d)?d:isNaN(+a[n+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=o,e=e[s]}};const Ia={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},In={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Pn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},ai=m.createContext(null);ai.displayName="HookFormContext";const nr=()=>m.useContext(ai),nc=e=>{const{children:r,...t}=e;return m.createElement(ai.Provider,{value:t},r)};var Vu=(e,r,t,n=!0)=>{const a={defaultValues:r._defaultValues};for(const l in e)Object.defineProperty(a,l,{get:()=>{const i=l;return r._proxyFormState[i]!==In.all&&(r._proxyFormState[i]=!n||In.all),t&&(t[i]=!0),e[i]}});return a};const li=typeof window<"u"?m.useLayoutEffect:m.useEffect;function rc(e){const r=nr(),{control:t=r.control,disabled:n,name:a,exact:l}=e||{},[i,s]=m.useState(t._formState),o=m.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return li(()=>t._subscribe({name:a,formState:o.current,exact:l,callback:d=>{!n&&s({...t._formState,...d})}}),[a,n,l]),m.useEffect(()=>{o.current.isValid&&t._setValid(!0)},[t]),m.useMemo(()=>Vu(i,t,o.current,!1),[i,t])}var sn=e=>typeof e=="string",ju=(e,r,t,n,a)=>sn(e)?(n&&r.watch.add(e),$(t,e,a)):Array.isArray(e)?e.map(l=>(n&&r.watch.add(l),$(t,l))):(n&&(r.watchAll=!0),t),cl=e=>We(e)||!Bu(e);function Fn(e,r,t=new WeakSet){if(cl(e)||cl(r))return e===r;if(sr(e)&&sr(r))return e.getTime()===r.getTime();const n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;if(t.has(e)||t.has(r))return!0;t.add(e),t.add(r);for(const l of n){const i=e[l];if(!a.includes(l))return!1;if(l!=="ref"){const s=r[l];if(sr(i)&&sr(s)||Be(i)&&Be(s)||Array.isArray(i)&&Array.isArray(s)?!Fn(i,s,t):i!==s)return!1}}return!0}function tc(e){const r=nr(),{control:t=r.control,name:n,defaultValue:a,disabled:l,exact:i,compute:s}=e||{},o=m.useRef(a),d=m.useRef(s),u=m.useRef(void 0);d.current=s;const E=m.useMemo(()=>t._getWatch(n,o.current),[t,n]),[_,N]=m.useState(d.current?d.current(E):E);return li(()=>t._subscribe({name:n,formState:{values:!0},exact:i,callback:v=>{if(!l){const c=ju(n,t._names,v.values||t._formValues,!1,o.current);if(d.current){const f=d.current(c);Fn(f,u.current)||(N(f),u.current=f)}else N(c)}}}),[t,l,n,i]),m.useEffect(()=>t._removeUnmounted()),_}function St(e){const r=nr(),{name:t,disabled:n,control:a=r.control,shouldUnregister:l,defaultValue:i}=e,s=wu(a._names.array,t),o=m.useMemo(()=>$(a._formValues,t,$(a._defaultValues,t,i)),[a,t,i]),d=tc({control:a,name:t,defaultValue:o,exact:!0}),u=rc({control:a,name:t,exact:!0}),E=m.useRef(e),_=m.useRef(void 0),N=m.useRef(a.register(t,{...e.rules,value:d,...ln(e.disabled)?{disabled:e.disabled}:{}}));E.current=e;const v=m.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!$(u.errors,t)},isDirty:{enumerable:!0,get:()=>!!$(u.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!$(u.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!$(u.validatingFields,t)},error:{enumerable:!0,get:()=>$(u.errors,t)}}),[u,t]),c=m.useCallback(I=>N.current.onChange({target:{value:Fu(I),name:t},type:Ia.CHANGE}),[t]),f=m.useCallback(()=>N.current.onBlur({target:{value:$(a._formValues,t),name:t},type:Ia.BLUR}),[t,a._formValues]),p=m.useCallback(I=>{const k=$(a._fields,t);k&&I&&(k._f.ref={focus:()=>I.focus&&I.focus(),select:()=>I.select&&I.select(),setCustomValidity:S=>I.setCustomValidity(S),reportValidity:()=>I.reportValidity()})},[a._fields,t]),R=m.useMemo(()=>({name:t,value:d,...ln(n)||u.disabled?{disabled:u.disabled||n}:{},onChange:c,onBlur:f,ref:p}),[t,n,u.disabled,c,f,p,d]);return m.useEffect(()=>{const I=a._options.shouldUnregister||l,k=_.current;k&&k!==t&&!s&&a.unregister(k),a.register(t,{...E.current.rules,...ln(E.current.disabled)?{disabled:E.current.disabled}:{}});const S=(y,b)=>{const B=$(a._fields,y);B&&B._f&&(B._f.mount=b)};if(S(t,!0),I){const y=we($(a._options.defaultValues,t));fe(a._defaultValues,t,y),Me($(a._formValues,t))&&fe(a._formValues,t,y)}return!s&&a.register(t),_.current=t,()=>{(s?I&&!a._state.action:I)?a.unregister(t):S(t,!1)}},[t,a,s,l]),m.useEffect(()=>{a._setDisabledField({disabled:n,name:t})},[n,t,a]),m.useMemo(()=>({field:R,formState:u,fieldState:v}),[R,u,v])}var ac=(e,r,t,n,a)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[n]:a||!0}}:{},nt=e=>Array.isArray(e)?e:[e],Es=()=>{let e=[];return{get observers(){return e},next:a=>{for(const l of e)l.next&&l.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(l=>l!==a)}}),unsubscribe:()=>{e=[]}}};function qu(e,r){const t={};for(const n in e)if(e.hasOwnProperty(n)){const a=e[n],l=r[n];if(a&&Be(a)&&l){const i=qu(a,l);Be(i)&&(t[n]=i)}else e[n]&&(t[n]=l)}return t}var nn=e=>Be(e)&&!Object.keys(e).length,ii=e=>e.type==="file",fn=e=>typeof e=="function",fa=e=>{if(!ni)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Uu=e=>e.type==="select-multiple",si=e=>e.type==="radio",lc=e=>si(e)||pt(e),sl=e=>fa(e)&&e.isConnected;function ic(e,r){const t=r.slice(0,-1).length;let n=0;for(;n<t;)e=Me(e)?n++:e[r[n++]];return e}function sc(e){for(const r in e)if(e.hasOwnProperty(r)&&!Me(e[r]))return!1;return!0}function Ge(e,r){const t=Array.isArray(r)?r:Ga(r)?[r]:ti(r),n=t.length===1?e:ic(e,t),a=t.length-1,l=t[a];return n&&delete n[l],a!==0&&(Be(n)&&nn(n)||Array.isArray(n)&&sc(n))&&Ge(e,t.slice(0,-1)),e}var oc=e=>{for(const r in e)if(fn(e[r]))return!0;return!1};function xu(e){return Array.isArray(e)||Be(e)&&!oc(e)}function Rl(e,r={}){for(const t in e)xu(e[t])?(r[t]=Array.isArray(e[t])?[]:{},Rl(e[t],r[t])):We(e[t])||(r[t]=!0);return r}function kr(e,r,t){t||(t=Rl(r));for(const n in e)xu(e[n])?Me(r)||cl(t[n])?t[n]=Rl(e[n],Array.isArray(e[n])?[]:{}):kr(e[n],We(r)?{}:r[n],t[n]):t[n]=!Fn(e[n],r[n]);return t}const ms={value:!1,isValid:!1},_s={value:!0,isValid:!0};var Hu=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Me(e[0].attributes.value)?Me(e[0].value)||e[0].value===""?_s:{value:e[0].value,isValid:!0}:_s:ms}return ms},Ju=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:n})=>Me(e)?e:r?e===""?NaN:e&&+e:t&&sn(e)?new Date(e):n?n(e):e;const Ns={isValid:!1,value:null};var Yu=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,Ns):Ns;function Ts(e){const r=e.ref;return ii(r)?r.files:si(r)?Yu(e.refs).value:Uu(r)?[...r.selectedOptions].map(({value:t})=>t):pt(r)?Hu(e.refs).value:Ju(Me(r.value)?e.ref.value:r.value,e)}var uc=(e,r,t,n)=>{const a={};for(const l of e){const i=$(r,l);i&&fe(a,l,i._f)}return{criteriaMode:t,names:[...e],fields:a,shouldUseNativeValidation:n}},ca=e=>e instanceof RegExp,$r=e=>Me(e)?e:ca(e)?e.source:Be(e)?ca(e.value)?e.value.source:e.value:e,gs=e=>({isOnSubmit:!e||e===In.onSubmit,isOnBlur:e===In.onBlur,isOnChange:e===In.onChange,isOnAll:e===In.all,isOnTouch:e===In.onTouched});const vs="AsyncFunction";var dc=e=>!!e&&!!e.validate&&!!(fn(e.validate)&&e.validate.constructor.name===vs||Be(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===vs)),Ec=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Is=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length))));const rt=(e,r,t,n)=>{for(const a of t||Object.keys(e)){const l=$(e,a);if(l){const{_f:i,...s}=l;if(i){if(i.refs&&i.refs[0]&&r(i.refs[0],a)&&!n)return!0;if(i.ref&&r(i.ref,i.name)&&!n)return!0;if(rt(s,r))break}else if(Be(s)&&rt(s,r))break}}};function fs(e,r,t){const n=$(e,t);if(n||Ga(t))return{error:n,name:t};const a=t.split(".");for(;a.length;){const l=a.join("."),i=$(r,l),s=$(e,l);if(i&&!Array.isArray(i)&&t!==l)return{name:t};if(s&&s.type)return{name:l,error:s};if(s&&s.root&&s.root.type)return{name:`${l}.root`,error:s.root};a.pop()}return{name:t}}var mc=(e,r,t,n)=>{t(e);const{name:a,...l}=e;return nn(l)||Object.keys(l).length>=Object.keys(r).length||Object.keys(l).find(i=>r[i]===(!n||In.all))},_c=(e,r,t)=>!e||!r||e===r||nt(e).some(n=>n&&(t?n===r:n.startsWith(r)||r.startsWith(n))),Nc=(e,r,t,n,a)=>a.isOnAll?!1:!t&&a.isOnTouch?!(r||e):(t?n.isOnBlur:a.isOnBlur)?!e:(t?n.isOnChange:a.isOnChange)?e:!0,Tc=(e,r)=>!ri($(e,r)).length&&Ge(e,r),gc=(e,r,t)=>{const n=nt($(e,t));return fe(n,"root",r[t]),fe(e,t,n),e};function cs(e,r,t="validate"){if(sn(e)||Array.isArray(e)&&e.every(sn)||ln(e)&&!e)return{type:t,message:sn(e)?e:"",ref:r}}var pr=e=>Be(e)&&!ca(e)?e:{value:e,message:""},Rs=async(e,r,t,n,a,l)=>{const{ref:i,refs:s,required:o,maxLength:d,minLength:u,min:E,max:_,pattern:N,validate:v,name:c,valueAsNumber:f,mount:p}=e._f,R=$(t,c);if(!p||r.has(c))return{};const I=s?s[0]:i,k=K=>{a&&I.reportValidity&&(I.setCustomValidity(ln(K)?"":K||""),I.reportValidity())},S={},y=si(i),b=pt(i),B=y||b,M=(f||ii(i))&&Me(i.value)&&Me(R)||fa(i)&&i.value===""||R===""||Array.isArray(R)&&!R.length,G=ac.bind(null,c,n,S),V=(K,A,h,P=Pn.maxLength,j=Pn.minLength)=>{const q=K?A:h;S[c]={type:K?P:j,message:q,ref:i,...G(K?P:j,q)}};if(l?!Array.isArray(R)||!R.length:o&&(!B&&(M||We(R))||ln(R)&&!R||b&&!Hu(s).isValid||y&&!Yu(s).isValid)){const{value:K,message:A}=sn(o)?{value:!!o,message:o}:pr(o);if(K&&(S[c]={type:Pn.required,message:A,ref:I,...G(Pn.required,A)},!n))return k(A),S}if(!M&&(!We(E)||!We(_))){let K,A;const h=pr(_),P=pr(E);if(!We(R)&&!isNaN(R)){const j=i.valueAsNumber||R&&+R;We(h.value)||(K=j>h.value),We(P.value)||(A=j<P.value)}else{const j=i.valueAsDate||new Date(R),q=Y=>new Date(new Date().toDateString()+" "+Y),w=i.type=="time",F=i.type=="week";sn(h.value)&&R&&(K=w?q(R)>q(h.value):F?R>h.value:j>new Date(h.value)),sn(P.value)&&R&&(A=w?q(R)<q(P.value):F?R<P.value:j<new Date(P.value))}if((K||A)&&(V(!!K,h.message,P.message,Pn.max,Pn.min),!n))return k(S[c].message),S}if((d||u)&&!M&&(sn(R)||l&&Array.isArray(R))){const K=pr(d),A=pr(u),h=!We(K.value)&&R.length>+K.value,P=!We(A.value)&&R.length<+A.value;if((h||P)&&(V(h,K.message,A.message),!n))return k(S[c].message),S}if(N&&!M&&sn(R)){const{value:K,message:A}=pr(N);if(ca(K)&&!R.match(K)&&(S[c]={type:Pn.pattern,message:A,ref:i,...G(Pn.pattern,A)},!n))return k(A),S}if(v){if(fn(v)){const K=await v(R,t),A=cs(K,I);if(A&&(S[c]={...A,...G(Pn.validate,A.message)},!n))return k(A.message),S}else if(Be(v)){let K={};for(const A in v){if(!nn(K)&&!n)break;const h=cs(await v[A](R,t),I,A);h&&(K={...h,...G(A,h.message)},k(h.message),n&&(S[c]=K))}if(!nn(K)&&(S[c]={ref:I,...K},!n))return S}}return k(!0),S};const vc={mode:In.onSubmit,reValidateMode:In.onChange,shouldFocusError:!0};function Ic(e={}){let r={...vc,...e},t={submitCount:0,isDirty:!1,isReady:!1,isLoading:fn(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},n={},a=Be(r.defaultValues)||Be(r.values)?we(r.defaultValues||r.values)||{}:{},l=r.shouldUnregister?{}:we(a),i={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},o,d=0;const u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let E={...u};const _={array:Es(),state:Es()},N=r.criteriaMode===In.all,v=D=>O=>{clearTimeout(d),d=setTimeout(D,O)},c=async D=>{if(!r.disabled&&(u.isValid||E.isValid||D)){const O=r.resolver?nn((await b()).errors):await M(n,!0);O!==t.isValid&&_.state.next({isValid:O})}},f=(D,O)=>{!r.disabled&&(u.isValidating||u.validatingFields||E.isValidating||E.validatingFields)&&((D||Array.from(s.mount)).forEach(L=>{L&&(O?fe(t.validatingFields,L,O):Ge(t.validatingFields,L))}),_.state.next({validatingFields:t.validatingFields,isValidating:!nn(t.validatingFields)}))},p=(D,O=[],L,C,x=!0,U=!0)=>{if(C&&L&&!r.disabled){if(i.action=!0,U&&Array.isArray($(n,D))){const X=L($(n,D),C.argA,C.argB);x&&fe(n,D,X)}if(U&&Array.isArray($(t.errors,D))){const X=L($(t.errors,D),C.argA,C.argB);x&&fe(t.errors,D,X),Tc(t.errors,D)}if((u.touchedFields||E.touchedFields)&&U&&Array.isArray($(t.touchedFields,D))){const X=L($(t.touchedFields,D),C.argA,C.argB);x&&fe(t.touchedFields,D,X)}(u.dirtyFields||E.dirtyFields)&&(t.dirtyFields=kr(a,l)),_.state.next({name:D,isDirty:V(D,O),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else fe(l,D,O)},R=(D,O)=>{fe(t.errors,D,O),_.state.next({errors:t.errors})},I=D=>{t.errors=D,_.state.next({errors:t.errors,isValid:!1})},k=(D,O,L,C)=>{const x=$(n,D);if(x){const U=$(l,D,Me(L)?$(a,D):L);Me(U)||C&&C.defaultChecked||O?fe(l,D,O?U:Ts(x._f)):h(D,U),i.mount&&c()}},S=(D,O,L,C,x)=>{let U=!1,X=!1;const oe={name:D};if(!r.disabled){if(!L||C){(u.isDirty||E.isDirty)&&(X=t.isDirty,t.isDirty=oe.isDirty=V(),U=X!==oe.isDirty);const Te=Fn($(a,D),O);X=!!$(t.dirtyFields,D),Te?Ge(t.dirtyFields,D):fe(t.dirtyFields,D,!0),oe.dirtyFields=t.dirtyFields,U=U||(u.dirtyFields||E.dirtyFields)&&X!==!Te}if(L){const Te=$(t.touchedFields,D);Te||(fe(t.touchedFields,D,L),oe.touchedFields=t.touchedFields,U=U||(u.touchedFields||E.touchedFields)&&Te!==L)}U&&x&&_.state.next(oe)}return U?oe:{}},y=(D,O,L,C)=>{const x=$(t.errors,D),U=(u.isValid||E.isValid)&&ln(O)&&t.isValid!==O;if(r.delayError&&L?(o=v(()=>R(D,L)),o(r.delayError)):(clearTimeout(d),o=null,L?fe(t.errors,D,L):Ge(t.errors,D)),(L?!Fn(x,L):x)||!nn(C)||U){const X={...C,...U&&ln(O)?{isValid:O}:{},errors:t.errors,name:D};t={...t,...X},_.state.next(X)}},b=async D=>{f(D,!0);const O=await r.resolver(l,r.context,uc(D||s.mount,n,r.criteriaMode,r.shouldUseNativeValidation));return f(D),O},B=async D=>{const{errors:O}=await b(D);if(D)for(const L of D){const C=$(O,L);C?fe(t.errors,L,C):Ge(t.errors,L)}else t.errors=O;return O},M=async(D,O,L={valid:!0})=>{for(const C in D){const x=D[C];if(x){const{_f:U,...X}=x;if(U){const oe=s.array.has(U.name),Te=x._f&&dc(x._f);Te&&u.validatingFields&&f([U.name],!0);const en=await Rs(x,s.disabled,l,N,r.shouldUseNativeValidation&&!O,oe);if(Te&&u.validatingFields&&f([U.name]),en[U.name]&&(L.valid=!1,O))break;!O&&($(en,U.name)?oe?gc(t.errors,en,U.name):fe(t.errors,U.name,en[U.name]):Ge(t.errors,U.name))}!nn(X)&&await M(X,O,L)}}return L.valid},G=()=>{for(const D of s.unMount){const O=$(n,D);O&&(O._f.refs?O._f.refs.every(L=>!sl(L)):!sl(O._f.ref))&&re(D)}s.unMount=new Set},V=(D,O)=>!r.disabled&&(D&&O&&fe(l,D,O),!Fn(Y(),a)),K=(D,O,L)=>ju(D,s,{...i.mount?l:Me(O)?a:sn(D)?{[D]:O}:O},L,O),A=D=>ri($(i.mount?l:a,D,r.shouldUnregister?$(a,D,[]):[])),h=(D,O,L={})=>{const C=$(n,D);let x=O;if(C){const U=C._f;U&&(!U.disabled&&fe(l,D,Ju(O,U)),x=fa(U.ref)&&We(O)?"":O,Uu(U.ref)?[...U.ref.options].forEach(X=>X.selected=x.includes(X.value)):U.refs?pt(U.ref)?U.refs.forEach(X=>{(!X.defaultChecked||!X.disabled)&&(Array.isArray(x)?X.checked=!!x.find(oe=>oe===X.value):X.checked=x===X.value||!!x)}):U.refs.forEach(X=>X.checked=X.value===x):ii(U.ref)?U.ref.value="":(U.ref.value=x,U.ref.type||_.state.next({name:D,values:we(l)})))}(L.shouldDirty||L.shouldTouch)&&S(D,x,L.shouldTouch,L.shouldDirty,!0),L.shouldValidate&&F(D)},P=(D,O,L)=>{for(const C in O){if(!O.hasOwnProperty(C))return;const x=O[C],U=D+"."+C,X=$(n,U);(s.array.has(D)||Be(x)||X&&!X._f)&&!sr(x)?P(U,x,L):h(U,x,L)}},j=(D,O,L={})=>{const C=$(n,D),x=s.array.has(D),U=we(O);fe(l,D,U),x?(_.array.next({name:D,values:we(l)}),(u.isDirty||u.dirtyFields||E.isDirty||E.dirtyFields)&&L.shouldDirty&&_.state.next({name:D,dirtyFields:kr(a,l),isDirty:V(D,U)})):C&&!C._f&&!We(U)?P(D,U,L):h(D,U,L),Is(D,s)&&_.state.next({...t,name:D}),_.state.next({name:i.mount?D:void 0,values:we(l)})},q=async D=>{i.mount=!0;const O=D.target;let L=O.name,C=!0;const x=$(n,L),U=Te=>{C=Number.isNaN(Te)||sr(Te)&&isNaN(Te.getTime())||Fn(Te,$(l,L,Te))},X=gs(r.mode),oe=gs(r.reValidateMode);if(x){let Te,en;const Ir=O.type?Ts(x._f):Fu(D),kn=D.type===Ia.BLUR||D.type===Ia.FOCUS_OUT,Va=!Ec(x._f)&&!r.resolver&&!$(t.errors,L)&&!x._f.deps||Nc(kn,$(t.touchedFields,L),t.isSubmitted,oe,X),Hr=Is(L,s,kn);fe(l,L,Ir),kn?(!O||!O.readOnly)&&(x._f.onBlur&&x._f.onBlur(D),o&&o(0)):x._f.onChange&&x._f.onChange(D);const Jr=S(L,Ir,kn),ja=!nn(Jr)||Hr;if(!kn&&_.state.next({name:L,type:D.type,values:we(l)}),Va)return(u.isValid||E.isValid)&&(r.mode==="onBlur"?kn&&c():kn||c()),ja&&_.state.next({name:L,...Hr?{}:Jr});if(!kn&&Hr&&_.state.next({...t}),r.resolver){const{errors:Yr}=await b([L]);if(U(Ir),C){const qa=fs(t.errors,n,L),le=fs(Yr,n,qa.name||L);Te=le.error,L=le.name,en=nn(Yr)}}else f([L],!0),Te=(await Rs(x,s.disabled,l,N,r.shouldUseNativeValidation))[L],f([L]),U(Ir),C&&(Te?en=!1:(u.isValid||E.isValid)&&(en=await M(n,!0)));C&&(x._f.deps&&(!Array.isArray(x._f.deps)||x._f.deps.length>0)&&F(x._f.deps),y(L,en,Te,Jr))}},w=(D,O)=>{if($(t.errors,O)&&D.focus)return D.focus(),1},F=async(D,O={})=>{let L,C;const x=nt(D);if(r.resolver){const U=await B(Me(D)?D:x);L=nn(U),C=D?!x.some(X=>$(U,X)):L}else D?(C=(await Promise.all(x.map(async U=>{const X=$(n,U);return await M(X&&X._f?{[U]:X}:X)}))).every(Boolean),!(!C&&!t.isValid)&&c()):C=L=await M(n);return _.state.next({...!sn(D)||(u.isValid||E.isValid)&&L!==t.isValid?{}:{name:D},...r.resolver||!D?{isValid:L}:{},errors:t.errors}),O.shouldFocus&&!C&&rt(n,w,D?x:s.mount),C},Y=(D,O)=>{let L={...i.mount?l:a};return O&&(L=qu(O.dirtyFields?t.dirtyFields:t.touchedFields,L)),Me(D)?L:sn(D)?$(L,D):D.map(C=>$(L,C))},z=(D,O)=>({invalid:!!$((O||t).errors,D),isDirty:!!$((O||t).dirtyFields,D),error:$((O||t).errors,D),isValidating:!!$(t.validatingFields,D),isTouched:!!$((O||t).touchedFields,D)}),W=D=>{D&&nt(D).forEach(O=>Ge(t.errors,O)),_.state.next({errors:D?t.errors:{}})},ae=(D,O,L)=>{const C=($(n,D,{_f:{}})._f||{}).ref,x=$(t.errors,D)||{},{ref:U,message:X,type:oe,...Te}=x;fe(t.errors,D,{...Te,...O,ref:C}),_.state.next({name:D,errors:t.errors,isValid:!1}),L&&L.shouldFocus&&C&&C.focus&&C.focus()},Fe=(D,O)=>fn(D)?_.state.subscribe({next:L=>"values"in L&&D(K(void 0,O),L)}):K(D,O,!0),Z=D=>_.state.subscribe({next:O=>{_c(D.name,O.name,D.exact)&&mc(O,D.formState||u,tr,D.reRenderRoot)&&D.callback({values:{...l},...t,...O,defaultValues:a})}}).unsubscribe,H=D=>(i.mount=!0,E={...E,...D.formState},Z({...D,formState:E})),re=(D,O={})=>{for(const L of D?nt(D):s.mount)s.mount.delete(L),s.array.delete(L),O.keepValue||(Ge(n,L),Ge(l,L)),!O.keepError&&Ge(t.errors,L),!O.keepDirty&&Ge(t.dirtyFields,L),!O.keepTouched&&Ge(t.touchedFields,L),!O.keepIsValidating&&Ge(t.validatingFields,L),!r.shouldUnregister&&!O.keepDefaultValue&&Ge(a,L);_.state.next({values:we(l)}),_.state.next({...t,...O.keepDirty?{isDirty:V()}:{}}),!O.keepIsValid&&c()},te=({disabled:D,name:O})=>{(ln(D)&&i.mount||D||s.disabled.has(O))&&(D?s.disabled.add(O):s.disabled.delete(O))},de=(D,O={})=>{let L=$(n,D);const C=ln(O.disabled)||ln(r.disabled);return fe(n,D,{...L||{},_f:{...L&&L._f?L._f:{ref:{name:D}},name:D,mount:!0,...O}}),s.mount.add(D),L?te({disabled:ln(O.disabled)?O.disabled:r.disabled,name:D}):k(D,!0,O.value),{...C?{disabled:O.disabled||r.disabled}:{},...r.progressive?{required:!!O.required,min:$r(O.min),max:$r(O.max),minLength:$r(O.minLength),maxLength:$r(O.maxLength),pattern:$r(O.pattern)}:{},name:D,onChange:q,onBlur:q,ref:x=>{if(x){de(D,O),L=$(n,D);const U=Me(x.value)&&x.querySelectorAll&&x.querySelectorAll("input,select,textarea")[0]||x,X=lc(U),oe=L._f.refs||[];if(X?oe.find(Te=>Te===U):U===L._f.ref)return;fe(n,D,{_f:{...L._f,...X?{refs:[...oe.filter(sl),U,...Array.isArray($(a,D))?[{}]:[]],ref:{type:U.type,name:D}}:{ref:U}}}),k(D,!1,void 0,U)}else L=$(n,D,{}),L._f&&(L._f.mount=!1),(r.shouldUnregister||O.shouldUnregister)&&!(wu(s.array,D)&&i.action)&&s.unMount.add(D)}}},je=()=>r.shouldFocusError&&rt(n,w,s.mount),qe=D=>{ln(D)&&(_.state.next({disabled:D}),rt(n,(O,L)=>{const C=$(n,L);C&&(O.disabled=C._f.disabled||D,Array.isArray(C._f.refs)&&C._f.refs.forEach(x=>{x.disabled=C._f.disabled||D}))},0,!1))},Ue=(D,O)=>async L=>{let C;L&&(L.preventDefault&&L.preventDefault(),L.persist&&L.persist());let x=we(l);if(_.state.next({isSubmitting:!0}),r.resolver){const{errors:U,values:X}=await b();t.errors=U,x=we(X)}else await M(n);if(s.disabled.size)for(const U of s.disabled)Ge(x,U);if(Ge(t.errors,"root"),nn(t.errors)){_.state.next({errors:{}});try{await D(x,L)}catch(U){C=U}}else O&&await O({...t.errors},L),je(),setTimeout(je);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:nn(t.errors)&&!C,submitCount:t.submitCount+1,errors:t.errors}),C)throw C},Kn=(D,O={})=>{$(n,D)&&(Me(O.defaultValue)?j(D,we($(a,D))):(j(D,O.defaultValue),fe(a,D,we(O.defaultValue))),O.keepTouched||Ge(t.touchedFields,D),O.keepDirty||(Ge(t.dirtyFields,D),t.isDirty=O.defaultValue?V(D,we($(a,D))):V()),O.keepError||(Ge(t.errors,D),u.isValid&&c()),_.state.next({...t}))},un=(D,O={})=>{const L=D?we(D):a,C=we(L),x=nn(D),U=x?a:C;if(O.keepDefaultValues||(a=L),!O.keepValues){if(O.keepDirtyValues){const X=new Set([...s.mount,...Object.keys(kr(a,l))]);for(const oe of Array.from(X))$(t.dirtyFields,oe)?fe(U,oe,$(l,oe)):j(oe,$(U,oe))}else{if(ni&&Me(D))for(const X of s.mount){const oe=$(n,X);if(oe&&oe._f){const Te=Array.isArray(oe._f.refs)?oe._f.refs[0]:oe._f.ref;if(fa(Te)){const en=Te.closest("form");if(en){en.reset();break}}}}if(O.keepFieldsRef)for(const X of s.mount)j(X,$(U,X));else n={}}l=r.shouldUnregister?O.keepDefaultValues?we(a):{}:we(U),_.array.next({values:{...U}}),_.state.next({values:{...U}})}s={mount:O.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!u.isValid||!!O.keepIsValid||!!O.keepDirtyValues,i.watch=!!r.shouldUnregister,_.state.next({submitCount:O.keepSubmitCount?t.submitCount:0,isDirty:x?!1:O.keepDirty?t.isDirty:!!(O.keepDefaultValues&&!Fn(D,a)),isSubmitted:O.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:x?{}:O.keepDirtyValues?O.keepDefaultValues&&l?kr(a,l):t.dirtyFields:O.keepDefaultValues&&D?kr(a,D):O.keepDirty?t.dirtyFields:{},touchedFields:O.keepTouched?t.touchedFields:{},errors:O.keepErrors?t.errors:{},isSubmitSuccessful:O.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:a})},gn=(D,O)=>un(fn(D)?D(l):D,O),rr=(D,O={})=>{const L=$(n,D),C=L&&L._f;if(C){const x=C.refs?C.refs[0]:C.ref;x.focus&&(x.focus(),O.shouldSelect&&fn(x.select)&&x.select())}},tr=D=>{t={...t,...D}},Cn={control:{register:de,unregister:re,getFieldState:z,handleSubmit:Ue,setError:ae,_subscribe:Z,_runSchema:b,_focusError:je,_getWatch:K,_getDirty:V,_setValid:c,_setFieldArray:p,_setDisabledField:te,_setErrors:I,_getFieldArray:A,_reset:un,_resetDefaultValues:()=>fn(r.defaultValues)&&r.defaultValues().then(D=>{gn(D,r.resetOptions),_.state.next({isLoading:!1})}),_removeUnmounted:G,_disableForm:qe,_subjects:_,_proxyFormState:u,get _fields(){return n},get _formValues(){return l},get _state(){return i},set _state(D){i=D},get _defaultValues(){return a},get _names(){return s},set _names(D){s=D},get _formState(){return t},get _options(){return r},set _options(D){r={...r,...D}}},subscribe:H,trigger:F,register:de,handleSubmit:Ue,watch:Fe,setValue:j,getValues:Y,reset:gn,resetField:Kn,clearErrors:W,unregister:re,setError:ae,setFocus:rr,getFieldState:z};return{...Cn,formControl:Cn}}function Ba(e={}){const r=m.useRef(void 0),t=m.useRef(void 0),[n,a]=m.useState({isDirty:!1,isValidating:!1,isLoading:fn(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:fn(e.defaultValues)?void 0:e.defaultValues});if(!r.current)if(e.formControl)r.current={...e.formControl,formState:n},e.defaultValues&&!fn(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...s}=Ic(e);r.current={...s,formState:n}}const l=r.current.control;return l._options=e,li(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>a({...l._formState}),reRenderRoot:!0});return a(s=>({...s,isReady:!0})),l._formState.isReady=!0,i},[l]),m.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),m.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),m.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),m.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),m.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==n.isDirty&&l._subjects.state.next({isDirty:i})}},[l,n.isDirty]),m.useEffect(()=>{e.values&&!Fn(e.values,t.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),t.current=e.values,a(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),m.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),r.current.formState=Vu(n,l),r.current}function fc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ps={exports:{}},Wr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ss;function cc(){if(Ss)return Wr;Ss=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,a,l){var i=null;if(l!==void 0&&(i=""+l),a.key!==void 0&&(i=""+a.key),"key"in a){l={};for(var s in a)s!=="key"&&(l[s]=a[s])}else l=a;return a=l.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:l}}return Wr.Fragment=r,Wr.jsx=t,Wr.jsxs=t,Wr}var ks;function Rc(){return ks||(ks=1,ps.exports=cc()),ps.exports}var ge=Rc();const pc=({children:e})=>{const r=g.Children.toArray(e);return r.length===0?null:ge.jsx(vt,{variant:"warning",size:"small",children:ge.jsx(be,{gap:"space-8","data-testid":"aksjonspunkt-text-container",children:r.map(t=>ge.jsx(ne,{size:"small",children:t},Sc(t)))})})},Sc=e=>{if(g.isValidElement(e))return e.key;if(typeof e=="string"||typeof e=="number")return`tekst-${e}`},kt={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"},Ds=Nr(kt),kc=({onClick:e=()=>{},erOverstyrt:r=!1})=>{const[t,n]=g.useState(r),a=()=>{t||(n(!0),e(!0))};return g.useEffect(()=>{n(r)},[r]),ge.jsx(Oe,{variant:t?"tertiary-neutral":"tertiary","data-testid":"overstyringsknapp",type:"button",size:"small",onClick:a,"aria-disabled":r,disabled:r,icon:t?ge.jsx(Xd,{"aria-hidden":!0,color:"var(--ax-neutral-400)",height:25,width:25,title:Ds.formatMessage({id:"OverstyringKnapp.HarOverstyrt"})}):ge.jsx(Wd,{"aria-hidden":!0,color:"var(--ax-accent-500)",height:25,width:25,title:Ds.formatMessage({id:"OverstyringKnapp.Overstyring"})})})};var As={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var ys;function Dc(){return ys||(ys=1,(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=a(l,n.call(this,s)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)r.call(l,s)&&l[s]&&(i=a(i,this&&this[s]||s));return i}function a(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(As)),As.exports}var Ac=Dc();const oi=fc(Ac),yc="_borderbox_1a0x6_1",Oc="_error_1a0x6_5",bc="_warning_1a0x6_8",hc={borderbox:yc,error:Oc,warning:bc};oi.bind(hc);const Mc="_aksjonspunkt_11wjs_1",Lc="_erAksjonspunktApent_11wjs_4",Kc="_erIkkeGodkjentAvBeslutter_11wjs_8",Pc={aksjonspunkt:Mc,erAksjonspunktApent:Lc,erIkkeGodkjentAvBeslutter:Kc};oi.bind(Pc);const Ra=({dateString:e,year:r,month:t,day:n})=>ge.jsx(ge.Fragment,{children:Hs(e,{year:r,month:t,day:n})}),Os=Nr(kt),Gc=({text:e,okButtonText:r,showModal:t,cancel:n,submit:a})=>ge.jsxs(cn,{width:"small",open:t,"aria-label":e,onClose:n,children:[ge.jsx(cn.Body,{children:ge.jsx(Et,{size:"small",level:"2",children:e})}),ge.jsxs(cn.Footer,{children:[ge.jsx(Oe,{variant:"primary",size:"small",onClick:a,autoFocus:!0,type:"button",children:r||Os.formatMessage({id:"OkAvbrytModal.Ok"})}),ge.jsx(Oe,{variant:"secondary",size:"small",onClick:n,type:"button",children:Os.formatMessage({id:"OkAvbrytModal.Avbryt"})})]})]}),tt=({dateStringFom:e,dateStringTom:r,showTodayString:t=!1})=>ge.jsx(ge.Fragment,{children:ud(e,r,{showTodayString:t})});Nr(kt);const Bc="_divider_1jpov_1",Fc="_dividerParagraf_1jpov_8",wc="_leftPanel_1jpov_11",Vc="_rightPanel_1jpov_14",pl={divider:Bc,dividerParagraf:Fc,leftPanel:wc,rightPanel:Vc},jc=oi.bind(pl),bs=({spaceUnder:e=!1,spaceAbove:r=!1,leftPanel:t=!1,rightPanel:n=!1,dividerParagraf:a=!1,className:l})=>ge.jsxs(ge.Fragment,{children:[r&&ge.jsx("div",{style:{marginBottom:"32px"}}),ge.jsx("div",{className:jc(l,{leftPanel:t,rightPanel:n}),children:ge.jsx("div",{className:a?pl.dividerParagraf:pl.divider})}),e&&ge.jsx("div",{style:{marginBottom:"32px"}})]}),Cu=()=>ge.jsx("span",{"data-testid":"editedIcon",children:ge.jsx(eE,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});Nr(kt);const qc=Nr(kt),Uc=({tekst:e,children:r})=>{const[t,n]=g.useState(!1);if(!e)return r;const a=async()=>{await navigator.clipboard.writeText(e),n(!0),setTimeout(()=>{n(!1)},1e3)};return ge.jsx(Pu,{content:qc.formatMessage({id:t?"KopierbarTekst.Kopiert":"KopierbarTekst.Kopier"}),children:ge.jsx("span",{"aria-hidden":"true",onClick:a,children:r??e})})},hs={default:"_default_af3od_1",rød:"_rød_af3od_5"},Sl=({beløp:e,kr:r=!1,rød:t=!1})=>{const n=e?.toString().replace(/\s/g,"");return ge.jsx(Uc,{tekst:n,children:ge.jsxs("span",{className:t?hs.rød:hs.default,children:[n?dd(n):"-",n&&r&&" kr"]})})};var ol={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Ms;function xc(){return Ms||(Ms=1,(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=a(l,n(s)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)r.call(l,s)&&l[s]&&(i=a(i,s));return i}function a(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(ol)),ol.exports}var Hc=xc();const Jc=Ol(Hc);function Yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ls={exports:{}},zr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks;function Cc(){if(Ks)return zr;Ks=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,a,l){var i=null;if(l!==void 0&&(i=""+l),a.key!==void 0&&(i=""+a.key),"key"in a){l={};for(var s in a)s!=="key"&&(l[s]=a[s])}else l=a;return a=l.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:l}}return zr.Fragment=r,zr.jsx=t,zr.jsxs=t,zr}var Ps;function $c(){return Ps||(Ps=1,Ls.exports=Cc()),Ls.exports}var Ae=$c();const Dt=e=>e.reduce((r,t,n)=>({...r,[n]:a=>t(a)||!0}),{}),At=(e,r)=>r.split(".").reduce((t,n)=>t!==void 0?t[n]:t,e)?.message;var kl={exports:{}},Wc=kl.exports,Gs;function zc(){return Gs||(Gs=1,(function(e,r){(function(t,n){e.exports=n()})(Wc,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},n=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,o={},d=function(f){return(f=+f)+(f>68?1900:2e3)},u=function(f){return function(p){this[f]=+p}},E=[/[+-]\d\d:?(\d\d)?|Z/,function(f){(this.zone||(this.zone={})).offset=(function(p){if(!p||p==="Z")return 0;var R=p.match(/([+-]|\d\d)/g),I=60*R[1]+(+R[2]||0);return I===0?0:R[0]==="+"?-I:I})(f)}],_=function(f){var p=o[f];return p&&(p.indexOf?p:p.s.concat(p.f))},N=function(f,p){var R,I=o.meridiem;if(I){for(var k=1;k<=24;k+=1)if(f.indexOf(I(k,0,p))>-1){R=k>12;break}}else R=f===(p?"pm":"PM");return R},v={A:[s,function(f){this.afternoon=N(f,!1)}],a:[s,function(f){this.afternoon=N(f,!0)}],Q:[a,function(f){this.month=3*(f-1)+1}],S:[a,function(f){this.milliseconds=100*+f}],SS:[l,function(f){this.milliseconds=10*+f}],SSS:[/\d{3}/,function(f){this.milliseconds=+f}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[l,u("day")],Do:[s,function(f){var p=o.ordinal,R=f.match(/\d+/);if(this.day=R[0],p)for(var I=1;I<=31;I+=1)p(I).replace(/\[|\]/g,"")===f&&(this.day=I)}],w:[i,u("week")],ww:[l,u("week")],M:[i,u("month")],MM:[l,u("month")],MMM:[s,function(f){var p=_("months"),R=(_("monthsShort")||p.map(function(I){return I.slice(0,3)})).indexOf(f)+1;if(R<1)throw new Error;this.month=R%12||R}],MMMM:[s,function(f){var p=_("months").indexOf(f)+1;if(p<1)throw new Error;this.month=p%12||p}],Y:[/[+-]?\d+/,u("year")],YY:[l,function(f){this.year=d(f)}],YYYY:[/\d{4}/,u("year")],Z:E,ZZ:E};function c(f){var p,R;p=f,R=o&&o.formats;for(var I=(f=p.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(G,V,K){var A=K&&K.toUpperCase();return V||R[K]||t[K]||R[A].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(h,P,j){return P||j.slice(1)})})).match(n),k=I.length,S=0;S<k;S+=1){var y=I[S],b=v[y],B=b&&b[0],M=b&&b[1];I[S]=M?{regex:B,parser:M}:y.replace(/^\[|\]$/g,"")}return function(G){for(var V={},K=0,A=0;K<k;K+=1){var h=I[K];if(typeof h=="string")A+=h.length;else{var P=h.regex,j=h.parser,q=G.slice(A),w=P.exec(q)[0];j.call(V,w),G=G.replace(w,"")}}return(function(F){var Y=F.afternoon;if(Y!==void 0){var z=F.hours;Y?z<12&&(F.hours+=12):z===12&&(F.hours=0),delete F.afternoon}})(V),V}}return function(f,p,R){R.p.customParseFormat=!0,f&&f.parseTwoDigitYear&&(d=f.parseTwoDigitYear);var I=p.prototype,k=I.parse;I.parse=function(S){var y=S.date,b=S.utc,B=S.args;this.$u=b;var M=B[1];if(typeof M=="string"){var G=B[2]===!0,V=B[3]===!0,K=G||V,A=B[2];V&&(A=B[2]),o=this.$locale(),!G&&A&&(o=R.Ls[A]),this.$d=(function(q,w,F,Y){try{if(["x","X"].indexOf(w)>-1)return new Date((w==="X"?1e3:1)*q);var z=c(w)(q),W=z.year,ae=z.month,Fe=z.day,Z=z.hours,H=z.minutes,re=z.seconds,te=z.milliseconds,de=z.zone,je=z.week,qe=new Date,Ue=Fe||(W||ae?1:qe.getDate()),Kn=W||qe.getFullYear(),un=0;W&&!ae||(un=ae>0?ae-1:qe.getMonth());var gn,rr=Z||0,tr=H||0,vr=re||0,Cn=te||0;return de?new Date(Date.UTC(Kn,un,Ue,rr,tr,vr,Cn+60*de.offset*1e3)):F?new Date(Date.UTC(Kn,un,Ue,rr,tr,vr,Cn)):(gn=new Date(Kn,un,Ue,rr,tr,vr,Cn),je&&(gn=Y(gn).week(je).toDate()),gn)}catch{return new Date("")}})(y,M,b,R),this.init(),A&&A!==!0&&(this.$L=this.locale(A).$L),K&&y!=this.format(M)&&(this.$d=new Date("")),o={}}else if(M instanceof Array)for(var h=M.length,P=1;P<=h;P+=1){B[1]=M[P-1];var j=R.apply(this,B);if(j.isValid()){this.$d=j.$d,this.$L=j.$L,this.init();break}P===h&&(this.$d=new Date(""))}else k.call(this,S)}}})})(kl)),kl.exports}var Xc=zc();const Qc=Yc(Xc),Zc="_textarea_14c7r_1",eR="_readOnlyField_14c7r_7",Bs={textarea:Zc,readOnlyField:eR},nR=e=>e!=null&&e!=="",Fa=({label:e,value:r,isEdited:t=!1,type:n,hideLabel:a,size:l})=>nR(r)?Ae.jsxs(be,{gap:"space-4",children:[e&&!a&&Ae.jsx(ce,{size:l,children:e}),Ae.jsxs(Re,{gap:"space-8",align:"center",wrap:!1,children:[Ae.jsx(Kl,{className:n==="textarea"?Bs.textarea:Bs.readOnlyField,size:l,children:r}),t&&Ae.jsx(Cu,{})]})]}):null;ze.extend(Qc);const st=({label:e,description:r,validate:t=[],hideLabel:n=!1,isReadOnly:a=!1,size:l="small",onChange:i,disabledDays:s,isEdited:o,defaultMonth:d,fromDate:u,toDate:E,..._})=>{const{name:N,control:v,disabled:c}=_,{formState:{errors:f}}=nr(),{field:p}=St({name:N,control:v,rules:{validate:g.useMemo(()=>Dt(t),[t])}}),R=p.value?ze(p.value,Gn,!0).format(Ot):"",[I,k]=g.useState(R),{datepickerProps:S,inputProps:y}=sf({onDateChange:M=>{if(M!==void 0){const G=ze(M).format(Gn);i&&i(G),p.onChange(G),k(ze(G,Gn,!0).format(Ot))}},defaultSelected:p.value?ze(p.value,Gn,!0).toDate():void 0,defaultMonth:d||(!p.value&&E?E:void 0),disabled:s}),b=g.useCallback(M=>{const G=ze(M.target.value,Ot,!0).format(Gn),V=G!=="Invalid Date";k(M.target.value),i&&i(V?G:M.target.value),p.onChange(V?G:M.target.value)},[k,i,p]);if(a)return Ae.jsx(Fa,{label:e,value:p.value?ze(p.value,Gn,!0).format(Ot):void 0,isEdited:o,hideLabel:n,size:l});const B={...S,fromDate:u,toDate:E,dropdownCaption:u&&E?!0:void 0};return Ae.jsx(va,{...B,children:Ae.jsx(va.Input,{...y,hideLabel:n,onChange:b,value:I,size:l,label:e,description:r,disabled:c,error:At(f,N)})})},Dl=({name:e,control:r,label:t,validate:n=[],readOnly:a=!1,type:l,shouldValidateOnBlur:i=!1,onBlur:s,onChange:o,description:d,autoFocus:u,parse:E=y=>y,format:_=y=>y,normalizeOnBlur:N,isEdited:v,maxLength:c,autoComplete:f=!1,disabled:p,className:R,hideLabel:I,size:k="small",...S})=>{const{formState:{errors:y},trigger:b}=nr(),{field:B}=St({name:e,control:r,rules:{validate:g.useMemo(()=>Dt(n),[n])}});return a?Ae.jsx(Fa,{label:t,value:B.value,isEdited:v,hideLabel:I,size:k}):Ae.jsx(Qf,{size:k,hideLabel:I,description:d,label:t,error:At(y,e),...B,value:B.value?_(B.value):"",autoFocus:u,autoComplete:f?void 0:"off",maxLength:c,disabled:p,type:l,className:R,onChange:M=>{const G=M.currentTarget.value?E(M.currentTarget.value):null;return o&&o(G),B.onChange(G)},onBlur:async M=>{if(B.onBlur(),i){const G=await b();s&&G&&s(M?.target?.value)}else s&&s(M?.target?.value);N&&B.onChange(M?.target?.value?N(E(M?.target?.value)):null)},...S})},rR="_noReadOnlyIcon_11vhl_2",tR={noReadOnlyIcon:rR},$u=({label:e,description:r,validate:t=[],onChange:n,children:a,className:l,isReadOnly:i=!1,size:s="small",isEdited:o=!1,hideLegend:d=!1,...u})=>{const{name:E,control:_}=u,{formState:{errors:N}}=nr(),{field:v}=St({name:E,control:_,rules:{validate:Dt(t)}});return Ae.jsx(xf,{name:E,value:v.value!==void 0?v.value:null,legend:Ae.jsxs(Re,{justify:"center",gap:"space-8",children:[e,i&&o&&Ae.jsx(Cu,{})]}),hideLegend:d,"aria-readonly":i,readOnly:i,description:r,size:s,error:At(N,E),onChange:c=>{n&&n(c),v.onChange(c)},className:Jc(l,tR.noReadOnlyIcon),children:a})},aR=({label:e,selectValues:r,validate:t=[],readOnly:n=!1,description:a,hideValueOnDisable:l=!1,onChange:i,className:s,hideLabel:o,isEdited:d,size:u="small",...E})=>{const{name:_,control:N,disabled:v}=E,{formState:{errors:c}}=nr(),{field:f}=St({name:_,control:N,rules:{validate:g.useMemo(()=>Dt(t),[t])}});if(n){const I=r.map(S=>S.props).find(S=>S.value===f.value),k=I?I.children:void 0;return Ae.jsx(Fa,{value:k,label:e,hideLabel:o,isEdited:d,size:u})}const p=f.value||"",R=!r.map(I=>I.props.value).includes(p)&&p!=="";return R&&console.warn(`No corresponding option found for value '${p}'`),Ae.jsxs(fl,{size:u,className:s,error:At(c,_),label:e,description:a,value:l&&v||R?"":f.value,disabled:v,onChange:I=>{i&&i(I),f.onChange(I)},hideLabel:o,children:[Ae.jsx("option",{style:{display:"none"}}),",",r]})},lR="_textAreaFieldWithBadges_bdz0b_1",iR="_etikettWrapper_bdz0b_4",Fs={textAreaFieldWithBadges:lR,etikettWrapper:iR},ui=({name:e,control:r,label:t,readOnly:n,maxLength:a,badges:l,validate:i=[],parse:s=N=>N,className:o,description:d,isEdited:u,size:E="small",..._})=>{const{formState:{errors:N}}=nr(),{field:v}=St({name:e,control:r,rules:{validate:g.useMemo(()=>Dt(i),[i])}});return n?Ae.jsx(Fa,{size:E,label:t,value:v.value,type:"textarea",isEdited:u,hideLabel:_.hideLabel}):Ae.jsxs("div",{className:l?Fs.textAreaFieldWithBadges:null,children:[l&&Ae.jsx("div",{className:Fs.etikettWrapper,children:l.map(({type:c,titleText:f})=>Ae.jsx(Bf,{variant:c,size:"small",children:f},f))}),Ae.jsx(zf,{size:E,label:t,description:d,className:o,autoComplete:"off",...v,onChange:c=>v.onChange(c.currentTarget.value!==""?s(c.currentTarget.value):null),value:v.value?v.value:"",error:At(N,e),maxLength:a,..._})]})},wa=({formMethods:e,onSubmit:r,children:t,className:n,setDataOnUnmount:a})=>{const{handleSubmit:l,getValues:i}=e;return g.useEffect(()=>()=>{a&&a(i())},[]),Ae.jsx(nc,{...e,children:Ae.jsx("form",{className:n,onSubmit:r?l(s=>r(s)):void 0,children:t})})},Wu=({submitCallback:e,cancelEvent:r,showModal:t,ventearsaker:n,erTilbakekreving:a,frist:l,ventearsak:i,visBrevErBestilt:s=!1,hasManualPaVent:o,defaultVenteårsak:d=null})=>{const u=er(),E=Ba({defaultValues:oR(o,l,i??d)}),_=E.watch("frist"),N=E.watch("ventearsak"),v=_R(i,N),c=NR(l,_),f=!(l===_&&!v),p=mR(a,l,_,N);return T.jsx(wa,{formMethods:E,onSubmit:e,children:T.jsxs(cn,{width:"small",open:t,onClose:r,"aria-label":u.formatMessage({id:i?"SettPaVentModal.ErSettPaVent":"SettPaVentModal.SettesPaVent"}),children:[T.jsx(cn.Header,{children:T.jsx(Et,{size:"small",level:"2",children:T.jsx(J,{id:i?"SettPaVentModal.ErSettPaVent":"SettPaVentModal.SettesPaVent"})})}),T.jsx(cn.Body,{children:T.jsxs(be,{gap:"space-16",children:[(o||_)&&T.jsx(st,{name:"frist",control:E.control,label:T.jsx(J,{id:"SettPaVentModal.Frist"}),validate:[mn,at,Ed]}),T.jsx(aR,{name:"ventearsak",control:E.control,label:T.jsx(J,{id:"SettPaVentModal.Arsak"}),validate:[mn],selectValues:n.filter(R=>!o||(a?ER(R,N):uR.has(R.kode))).sort((R,I)=>R.navn.localeCompare(I.navn)).map(R=>T.jsx("option",{value:R.kode,children:R.navn},R.kode)),readOnly:!o}),s&&T.jsx(ne,{size:"small",children:T.jsx(J,{id:"SettPaVentModal.BrevBlirBestilt"})}),o&&T.jsx(ne,{size:"small",children:T.jsx(J,{id:"SettPaVentModal.EndreFrist"})}),!o&&p&&T.jsxs(T.Fragment,{children:[T.jsx(ne,{size:"small",children:T.jsx(J,{id:"SettPaVentModal.UtløptFrist"})}),T.jsx(ne,{size:"small",children:T.jsx(J,{id:"SettPaVentModal.HenleggeSaken"})})]})]})}),T.jsxs(cn.Footer,{children:[T.jsx(Oe,{size:"small",variant:"primary",style:{paddingInline:"36px"},onClick:f?void 0:r,disabled:!v&&!c,children:T.jsx(J,{id:"SettPaVentModal.Ok"})}),(!o||f||!s)&&T.jsx(Oe,{size:"small",variant:"secondary",onClick:r,type:"button",children:T.jsx(J,{id:v||c?"SettPaVentModal.Avbryt":"SettPaVentModal.Lukk"})})]})]})})},sR=()=>{const e=ze().toDate();return e.setDate(e.getDate()+28),ze(e).format(Gn)},oR=(e,r,t)=>({ventearsak:t??void 0,frist:r||e===!1?r??void 0:sR()}),uR=new Set([$e.AVV_DOK,$e.AVV_FODSEL,$e.VENT_PÅ_BRUKERTILBAKEMELDING,$e.UTV_FRIST,$e.FOR_TIDLIG_SOKNAD,$e.VENT_OPDT_INNTEKTSMELDING,$e.VENT_UTLAND_TRYGD,$e.UTVIDET_TILSVAR_FRIST,$e.ENDRE_TILKJENT_YTELSE,$e.VENT_PÅ_MULIG_MOTREGNING]),dR=new Set([$e.VENT_PÅ_BRUKERTILBAKEMELDING,$e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG]),ER=(e,r)=>dR.has(e.kode)?e.kode===r:!0,mR=(e,r,t,n)=>{const a=e&&(!!t&&gi(t)===null||!!r&&gi(r)===null),l=n===$e.VENT_PÅ_TILBAKEKREVINGSGRUNNLAG;return e&&a&&l},_R=(e,r)=>!(e===r||!r&&!e),NR=(e,r)=>!(e===r||!r&&!e);Wu.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModal",props:{submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasManualPaVent:{required:!0,tsType:{name:"boolean"},description:""},frist:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},ventearsak:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},defaultVenteårsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}}}};const TR={"SettPaVentModal.ModalDescription":"Behandlingen settes på vent med frist","SettPaVentModal.ModalDescriptionErPaVent":"Behandlingen er satt på vent","SettPaVentModal.PaVent":"På vent","SettPaVentModal.SettesPaVent":"Behandlingen settes på vent","SettPaVentModal.ErSettPaVent":"Behandlingen er satt på vent","SettPaVentModal.Frist":"Frist","SettPaVentModal.Ok":"OK","SettPaVentModal.Avbryt":"Avbryt","SettPaVentModal.Lukk":"Lukk","SettPaVentModal.BrevBlirBestilt":"Brevet blir bestilt","SettPaVentModal.Arsak":"Årsak","SettPaVentModal.EndreFrist":"Du kan endre frist eller årsak før du fortsetter","SettPaVentModal.UtløptFrist":"OBS! Fristen på denne behandlingen er utløpt!","SettPaVentModal.HenleggeSaken":`Kontroller hvorfor Økonomi ikke har dannet et kravgrunnlag.
 Dersom det feilutbetalte beløpet er bortfalt skal saken henlegges.
For mer informasjon, se rutine under tilbakekreving.`},gR=Nr(TR),zu=({frist:e=null,ventearsak:r=null,hasManualPaVent:t=!1,...n})=>T.jsx(Js,{value:gR,children:T.jsx(Wu,{frist:e,ventearsak:r,hasManualPaVent:t,...n})});zu.__docgenInfo={description:"",methods:[],displayName:"SettPaVentModalIndex",props:{cancelEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},submitCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(formData: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavnTilbakekreving<'Venteårsak'>[]"}]},description:""},frist:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},ventearsak:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},visBrevErBestilt:{required:!1,tsType:{name:"boolean"},description:""},hasManualPaVent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},erTilbakekreving:{required:!0,tsType:{name:"boolean"},description:""},defaultVenteårsak:{required:!1,tsType:{name:"string"},description:""}}};const di=g.createContext({isDirty:!1,setDirty:()=>{}}),Xu=({children:e})=>{const[r,t]=g.useState(!1),n=g.useMemo(()=>({isDirty:r,setDirty:t}),[r,t]);return T.jsx(di.Provider,{value:n,children:e})},Ei=e=>{const r=g.useContext(di);g.useEffect(()=>{r.setDirty(e)},[e])},vR=()=>g.useContext(di).isDirty;Xu.__docgenInfo={description:`Håndterer state for data som skal hentes fra backend kun en gang og som en trenger aksess til
mange steder i applikasjonen.`,methods:[],displayName:"DirtyFormProvider"};const ws=(e,r)=>({arbeidsgiverIdent:e,arbeidsgiverNavn:r.navn,...r.erPrivatPerson?{erPrivatPerson:!0,arbeidsgiverFødselsdato:r.fødselsdato}:{erPrivatPerson:!1}}),Pt=e=>r=>r.arbeidsgiverIdent===e.arbeidsgiverIdent,IR=(e,r)=>{const{fom:t,tom:n,saksbehandlersVurdering:a,stillingsprosent:l,begrunnelse:i}=e;if(e.saksbehandlersVurdering)return e.saksbehandlersVurdering===Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||e.saksbehandlersVurdering===Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverNavn:r,fom:t,tom:n,stillingsprosent:l,saksbehandlersVurdering:a??void 0,begrunnelse:i??void 0}:{saksbehandlersVurdering:a??void 0,begrunnelse:i??void 0}},fR=({saksbehandlersVurdering:e,begrunnelse:r})=>e?{saksbehandlersVurdering:e,begrunnelse:r??void 0}:void 0,cR=(e,r)=>e.filter(t=>t.arbeidsgiverIdent===r),RR=(e,r)=>r.map(t=>{const n=e.find(a=>pR(t,a));return{arbeidsforhold:t,inntektsmelding:n}}),pR=(e,r)=>r.arbeidsgiverIdent===e.arbeidsgiverIdent&&(!r.internArbeidsforholdId||r.internArbeidsforholdId===e.internArbeidsforholdId),SR=e=>e.årsak?-1:1,kR=(e,r)=>{const t=e.årsak,n=r.årsak;return t&&!n?-1:n&&!t?1:e.arbeidsgiverNavn.localeCompare(r.arbeidsgiverNavn)},DR=(e,r)=>{const{arbeidsforhold:t,inntektsmeldinger:n,inntekter:a}=e,l=[...t.sort(SR)].reduce((s,o)=>{if(s.find(Pt(o)))return s;const u=t.filter(Pt(o)),E=ws(o.arbeidsgiverIdent,r[o.arbeidsgiverIdent]),_=cR(n,o.arbeidsgiverIdent),N=a.find(Pt(o))?.inntekter??[],v={...E,årsak:o.årsak??_[0]?.årsak??void 0,avklaring:IR(o,E.arbeidsgiverNavn),arbeidsforholdForRad:u,inntektsmeldingerForRad:_,inntektsposter:N};return s.concat(v)},[]),i=n.filter(s=>!t.some(o=>s.arbeidsgiverIdent===o.arbeidsgiverIdent)).map(s=>{const o=ws(s.arbeidsgiverIdent,r[s.arbeidsgiverIdent]),d=a.find(Pt(s))?.inntekter??[];return{...o,årsak:s.årsak??void 0,avklaring:fR(s),arbeidsforholdForRad:[],inntektsmeldingerForRad:[s],inntektsposter:d}});return l.concat(i).sort(kR)},Vs=e=>{const r=e.findIndex(t=>t.årsak&&!t.avklaring);return r===-1?[]:[r]};var ul={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var js;function AR(){return js||(js=1,(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=a(l,n.call(this,s)))}return l}function n(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)r.call(l,s)&&l[s]&&(i=a(i,this&&this[s]||s));return i}function a(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(ul)),ul.exports}var yR=AR();const OR=Ol(yR),Qu=({saksnummer:e,journalpostId:r,dokumentId:t,dokumentTittel:n,children:a})=>{const l=`${r}-${t}`,i=Id(e,r,t);return T.jsx(ei,{href:i,target:l,rel:"noopener noreferrer",onClick:bR(n),children:a??n})},bR=e=>r=>{e&&(r.preventDefault(),fd(r.currentTarget.href,r.currentTarget.target,e))};Qu.__docgenInfo={description:"",methods:[],displayName:"DokumentLink",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},journalpostId:{required:!0,tsType:{name:"string"},description:""},dokumentId:{required:!0,tsType:{name:"string"},description:""},dokumentTittel:{required:!1,tsType:{name:"string"},description:""}}};const hR="_inline_glms2_1",MR="_docIcon_glms2_9",LR="_phoneIcon_glms2_14",dl={inline:hR,docIcon:MR,phoneIcon:LR},ot=({saksnummer:e,arbeidsforhold:r,inntektsmelding:t,skalViseArbeidsforholdId:n,alleKodeverk:a,ikkeVisInfo:l,radData:i})=>T.jsxs(T.Fragment,{children:[T.jsxs(be,{gap:"space-16",children:[!l&&T.jsxs(Re,{gap:"space-16",children:[T.jsx(ce,{size:"small",children:T.jsx(J,{id:i.erPrivatPerson?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),T.jsx(ne,{size:"small",children:i.erPrivatPerson?T.jsx(Ra,{dateString:i.arbeidsgiverFødselsdato}):i.arbeidsgiverIdent})]}),n&&T.jsxs(Re,{gap:"space-16",children:[T.jsx(ce,{size:"small",children:T.jsx(J,{id:"InntektsmeldingOpplysningerPanel.ArbeidsforholdId"})}),T.jsx(ne,{size:"small",children:t.eksternArbeidsforholdId})]}),r&&T.jsxs(T.Fragment,{children:[T.jsxs(Re,{gap:"space-16",children:[T.jsx(ce,{size:"small",children:T.jsx(J,{id:"InntektsmeldingOpplysningerPanel.Stillingsprosent"})}),T.jsx(ne,{size:"small",children:`${r.stillingsprosent}%`})]}),r.permisjonOgMangel&&T.jsxs(Re,{gap:"space-16",children:[T.jsx(ce,{size:"small",children:a.PermisjonsbeskrivelseType.find(s=>s.kode===r.permisjonOgMangel?.type)?.navn??""}),T.jsx(ne,{size:"small",children:T.jsx(tt,{dateStringFom:r.permisjonOgMangel.permisjonFom,dateStringTom:r.permisjonOgMangel.permisjonTom})})]})]}),T.jsxs(Re,{gap:"space-16",children:[T.jsx(ce,{size:"small",children:T.jsx(J,{id:"InntektsmeldingOpplysningerPanel.Inntektsmelding"})}),T.jsx(ne,{size:"small",children:T.jsx(Sl,{beløp:t.inntektPrMnd})})]}),T.jsxs(Re,{gap:"space-16",children:[T.jsx(ce,{size:"small",children:T.jsx(J,{id:"InntektsmeldingOpplysningerPanel.Refusjon"})}),T.jsx(ne,{size:"small",children:T.jsx(J,{id:t.refusjonPrMnd?"InntektsmeldingOpplysningerPanel.Ja":"InntektsmeldingOpplysningerPanel.Nei"})})]}),t.refusjonPrMnd!==void 0&&T.jsxs(Re,{gap:"space-16",children:[T.jsx(ce,{size:"small",children:T.jsx(J,{id:"InntektsmeldingOpplysningerPanel.Refusjonsbeløp"})}),T.jsx(ne,{size:"small",children:T.jsx(Sl,{beløp:t.refusjonPrMnd})})]}),T.jsxs(Qu,{saksnummer:e,journalpostId:t.journalpostId,dokumentId:t.dokumentId,children:[T.jsx(ne,{size:"small",className:dl.inline,children:T.jsx(J,{id:"InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding"})}),T.jsx(Jd,{className:dl.docIcon})]})]}),T.jsxs(Re,{gap:"space-16",children:[T.jsx(rE,{className:dl.phoneIcon}),T.jsxs(be,{gap:"space-4",children:[T.jsx(ce,{size:"small",children:T.jsx(J,{id:"InntektsmeldingOpplysningerPanel.Kontaktinfo"})}),T.jsx(Mr,{children:t.kontaktpersonNavn}),T.jsx(Mr,{children:T.jsx(J,{id:"InntektsmeldingOpplysningerPanel.Tlf",values:{nr:t.kontaktpersonNummer}})})]})]})]});ot.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingOpplysningerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},arbeidsforhold:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}},description:""},inntektsmelding:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}},description:""},skalViseArbeidsforholdId:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
  BehandlingStatus: BehandlingStatusEnum;
  BehandlingType: BehandlingTypeEnum;
  BehandlingÅrsakType: BehandlingArsakTypeEnum;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatusEnum;
  FagsakYtelseType: FagsakYtelseTypeEnum;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktorEnum;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsenEnum;
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatusEnum",required:!0}},{key:"BehandlingType",value:{name:"BehandlingTypeEnum",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakTypeEnum",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatusEnum",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseTypeEnum",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktorEnum",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsenEnum",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""},ikkeVisInfo:{required:!1,tsType:{name:"boolean"},description:""}}};const KR="_inline_p47ci_1",PR="_aksjonpunktImage_p47ci_5",GR="_arrow_p47ci_12",BR="_ikkeMottatt_p47ci_18",FR="_skiller_p47ci_30",ar={inline:KR,aksjonpunktImage:PR,arrow:GR,ikkeMottatt:BR,skiller:FR},mi=({saksnummer:e,alleKodeverk:r,radData:t})=>{const n=er(),[a,l]=g.useState({}),{arbeidsforholdForRad:i,inntektsmeldingerForRad:s,arbeidsgiverIdent:o,erPrivatPerson:d}=t,u=i.length===1,E=RR(s,i);return T.jsxs(be,{gap:"space-16",children:[T.jsxs(Re,{gap:"space-16",children:[T.jsx(ce,{size:"small",children:T.jsx(J,{id:d?"ArbeidsforholdInformasjonPanel.Fodselsdato":"ArbeidsforholdInformasjonPanel.Orgnr"})}),T.jsx(ne,{size:"small",children:d?T.jsx(Ra,{dateString:t.arbeidsgiverFødselsdato}):o})]}),!u&&T.jsxs(T.Fragment,{children:[T.jsx(bs,{dividerParagraf:!0,className:ar.skiller}),E.map(({arbeidsforhold:_,inntektsmelding:N})=>T.jsxs(m.Fragment,{children:[T.jsxs(be,{gap:"space-8",children:[T.jsxs(Re,{gap:"space-16",children:[T.jsx(ce,{size:"small",children:T.jsx(J,{id:"ArbeidsforholdInformasjonPanel.ArbeidsforholdId"})}),T.jsxs("div",{children:[_.eksternArbeidsforholdId&&_.eksternArbeidsforholdId.length<50&&T.jsx("div",{children:T.jsx(ne,{size:"small",children:_.eksternArbeidsforholdId})}),_.eksternArbeidsforholdId&&_.eksternArbeidsforholdId.length>=50&&T.jsx(Pu,{content:wR(_.eksternArbeidsforholdId),children:T.jsx(ne,{size:"small",children:`${_.eksternArbeidsforholdId.substring(0,50)}...`})}),!_.eksternArbeidsforholdId&&T.jsx(ne,{size:"small",children:"-"})]}),N&&T.jsxs(T.Fragment,{children:[T.jsx(Or,{}),T.jsx(ce,{size:"small",children:T.jsx(J,{id:"ArbeidsforholdInformasjonPanel.ImMottatt"})})]}),!N&&T.jsxs(T.Fragment,{children:[T.jsx(Or,{}),T.jsxs("div",{children:[T.jsx(Pl,{className:ar.aksjonpunktImage,title:n.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"})}),T.jsx("div",{className:ar.ikkeMottatt,children:T.jsx(ce,{size:"small",children:T.jsx(J,{id:"ArbeidsforholdInformasjonPanel.ImIkkeMottatt"})})})]})]})]}),T.jsxs(Re,{gap:"space-16",children:[T.jsx(ce,{size:"small",children:T.jsx(J,{id:"ArbeidsforholdInformasjonPanel.Periode"})}),T.jsx(ne,{size:"small",children:T.jsx(tt,{dateStringFom:_.fom,dateStringTom:_.tom})}),N&&T.jsxs(T.Fragment,{children:[T.jsx(Or,{}),T.jsx(ne,{size:"small",children:T.jsx(Ra,{dateString:N.motattDato})})]})]}),T.jsxs(Re,{gap:"space-16",children:[T.jsx(ce,{size:"small",children:T.jsx(J,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),T.jsx(ne,{size:"small",children:`${_.stillingsprosent}%`})]}),_.permisjonOgMangel&&T.jsxs(Re,{gap:"space-16",children:[T.jsx(ce,{size:"small",children:r.PermisjonsbeskrivelseType.find(v=>v.kode===_.permisjonOgMangel?.type)?.navn??""}),T.jsx(ne,{size:"small",children:T.jsx(tt,{dateStringFom:_.permisjonOgMangel.permisjonFom,dateStringTom:_.permisjonOgMangel.permisjonTom})})]}),N&&T.jsxs(T.Fragment,{children:[_.internArbeidsforholdId&&a[_.internArbeidsforholdId]&&T.jsx(ot,{saksnummer:e,inntektsmelding:N,skalViseArbeidsforholdId:!1,radData:t,alleKodeverk:r}),T.jsxs(ei,{onClick:v=>{v.preventDefault(),l(c=>{if(!_.internArbeidsforholdId)return c;const f=c[_.internArbeidsforholdId];return{...c,[_.internArbeidsforholdId]:f===void 0||f===!1}})},href:"",children:[T.jsx("span",{children:T.jsx(ne,{size:"small",className:ar.inline,children:T.jsx(J,{id:!_.internArbeidsforholdId||!a[_.internArbeidsforholdId]?"ArbeidsforholdInformasjonPanel.ApneImInfo":"ArbeidsforholdInformasjonPanel.LukkeImInfo"})})}),_.internArbeidsforholdId&&a[_.internArbeidsforholdId]?T.jsx(Qs,{className:ar.arrow}):T.jsx(mt,{className:ar.arrow})]})]})]}),T.jsx(bs,{dividerParagraf:!0,className:ar.skiller})]},`${_.arbeidsgiverIdent}${_.internArbeidsforholdId}`))]}),u&&E.length>0&&E[0].inntektsmelding&&T.jsx(ot,{saksnummer:e,radData:t,arbeidsforhold:i[0],inntektsmelding:E[0].inntektsmelding,skalViseArbeidsforholdId:s.length>1,alleKodeverk:r,ikkeVisInfo:!0}),u&&s.length===0&&T.jsxs(T.Fragment,{children:[T.jsxs(Re,{gap:"space-16",children:[T.jsx(ce,{size:"small",children:T.jsx(J,{id:"ArbeidsforholdInformasjonPanel.Stillingsprosent"})}),T.jsx(ne,{size:"small",children:`${i[0].stillingsprosent}%`})]}),i[0].permisjonOgMangel&&T.jsxs(Re,{gap:"space-16",children:[T.jsx(ce,{size:"small",children:r.PermisjonsbeskrivelseType.find(_=>_.kode===i[0].permisjonOgMangel?.type)?.navn??""}),T.jsx(ne,{size:"small",children:T.jsx(tt,{dateStringFom:i[0].permisjonOgMangel.permisjonFom,dateStringTom:i[0].permisjonOgMangel.permisjonTom})})]})]})]})},wR=e=>{const r=Math.ceil(e.length/25);return Array.from({length:r},(n,a)=>e.slice(a*25,a*25+25)).join("-")};mi.__docgenInfo={description:"",methods:[],displayName:"InntektsmeldingerPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
  BehandlingStatus: BehandlingStatusEnum;
  BehandlingType: BehandlingTypeEnum;
  BehandlingÅrsakType: BehandlingArsakTypeEnum;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatusEnum;
  FagsakYtelseType: FagsakYtelseTypeEnum;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktorEnum;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsenEnum;
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatusEnum",required:!0}},{key:"BehandlingType",value:{name:"BehandlingTypeEnum",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakTypeEnum",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatusEnum",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseTypeEnum",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktorEnum",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsenEnum",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const VR="_bredde_gb3eb_1",jR="_inline_gb3eb_9",qR="_arrow_gb3eb_13",Gt={bredde:VR,inline:jR,arrow:qR},Al=({saksnummer:e,skjæringstidspunkt:r,alleKodeverk:t,radData:n})=>{const[a,l]=g.useState(!1),{inntektsposter:i,arbeidsforholdForRad:s}=n,o=UR(r,i),d=s.length===1,u=i.length>0&&i.some(E=>E.beløp>0);return T.jsxs(be,{gap:"space-32",children:[T.jsx(mi,{saksnummer:e,alleKodeverk:t,radData:n}),u&&T.jsxs(be,{gap:"space-8",children:[T.jsx(ce,{size:"small",children:T.jsx(J,{id:d?"ArbeidsforholdInformasjonPanel.Inntekter":"ArbeidsforholdInformasjonPanel.TotaltInntekter"})}),T.jsx(be,{gap:"space-4",children:o.filter((E,_)=>a?!0:_<3).map(E=>T.jsxs(Re,{gap:"space-8",className:Gt.bredde,children:[T.jsx(ne,{size:"small",children:T.jsx(J,{id:`ArbeidsforholdInformasjonPanel.${ze(E.fom).month()+1}`})}),T.jsx(ne,{size:"small",children:ze(E.fom).year()}),T.jsx(Or,{}),T.jsx(ne,{size:"small",children:T.jsx(Sl,{beløp:E.beløp})})]},E.fom))}),T.jsxs(ei,{onClick:E=>{E.preventDefault(),l(!a)},href:"",children:[T.jsx("span",{children:T.jsx(ne,{size:"small",className:Gt.inline,children:T.jsx(J,{id:a?"ArbeidsforholdInformasjonPanel.FaerreManeder":"ArbeidsforholdInformasjonPanel.TidligereManeder"})})}),a?T.jsx(Qs,{className:Gt.arrow}):T.jsx(mt,{className:Gt.arrow})]})]}),!u&&T.jsx(ce,{size:"small",children:T.jsx(J,{id:"ArbeidsforholdInformasjonPanel.IngenInntekt"})})]})},UR=(e,r)=>{const n=ze(e).subtract(1,"month").startOf("month"),a=n.subtract(12,"month"),l=[];for(let i=n;i.isAfter(a);i=i.subtract(1,"month")){const s=i.format(Gn),o=r.find(d=>ze(d.fom).startOf("month").format(Gn)===s);l.push({beløp:o?.beløp||0,fom:s})}return l};Al.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdInformasjonPanel",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
  BehandlingStatus: BehandlingStatusEnum;
  BehandlingType: BehandlingTypeEnum;
  BehandlingÅrsakType: BehandlingArsakTypeEnum;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatusEnum;
  FagsakYtelseType: FagsakYtelseTypeEnum;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktorEnum;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsenEnum;
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatusEnum",required:!0}},{key:"BehandlingType",value:{name:"BehandlingTypeEnum",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakTypeEnum",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatusEnum",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseTypeEnum",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktorEnum",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsenEnum",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]},description:""}}};const xR="_hjelpetekst_6zosx_1",HR="_alertStripe_6zosx_5",JR="_hjelpetekstInnhold_6zosx_9",YR="_svg_6zosx_14",Bt={hjelpetekst:xR,alertStripe:HR,hjelpetekstInnhold:JR,svg:YR},CR=bl(3),$R=hl(1500),WR=Cs(1),zR=$s(100),Zu=({behandlingUuid:e,behandlingVersjon:r,radData:t,isReadOnly:n,registrerArbeidsforhold:a,lagreVurdering:l,lukkArbeidsforholdRad:i,oppdaterTabell:s})=>{const o=er(),d={saksbehandlersVurdering:t.avklaring?.saksbehandlersVurdering,begrunnelse:t.avklaring?.begrunnelse,fom:t.avklaring?.fom,tom:t.avklaring?.tom,stillingsprosent:t.avklaring?.stillingsprosent},u=Ba({defaultValues:d});Ei(u.formState.isDirty);const E=u.watch("saksbehandlersVurdering"),_=()=>{i(),u.reset(d)},N=t.inntektsmeldingerForRad[0],v=I=>{const k=QR(s,t,N,I);return I.saksbehandlersVurdering===Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?a({behandlingUuid:e,behandlingVersjon:r,internArbeidsforholdRef:N.internArbeidsforholdId??void 0,arbeidsgiverNavn:t.arbeidsgiverNavn,arbeidsgiverIdent:N.arbeidsgiverIdent,vurdering:Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:I.begrunnelse,fom:I.fom,tom:I.tom,stillingsprosent:I.stillingsprosent}).then(k).finally(()=>u.reset(I)):l({behandlingUuid:e,behandlingVersjon:r,vurdering:I.saksbehandlersVurdering,begrunnelse:I.begrunnelse,arbeidsgiverIdent:N.arbeidsgiverIdent,internArbeidsforholdRef:N.internArbeidsforholdId??void 0}).then(k).finally(()=>u.reset(I))},c=g.useRef(null),[f,p]=g.useState(!1),R=()=>p(I=>!I);return T.jsxs(be,{gap:"space-32",children:[T.jsx("div",{className:Bt.alertStripe,children:T.jsx(vt,{variant:"info",children:T.jsx(J,{id:"ManglendeOpplysningerForm.ErMottattMenIkkeReg"})})}),T.jsx(wa,{formMethods:u,onSubmit:v,children:T.jsxs(be,{gap:"space-16",children:[T.jsxs($u,{name:"saksbehandlersVurdering",control:u.control,label:T.jsxs(Re,{gap:"space-8",children:[T.jsx(J,{id:"ManglendeOpplysningerForm.SkalBrukeInntekstmelding"}),T.jsx(eo,{className:Bt.svg,ref:c,onClick:R,title:o.formatMessage({id:"ManglendeOpplysningerForm.AltHjelpetekst"})}),T.jsx(Gr,{open:f,onClose:R,anchorEl:c.current,className:Bt.hjelpetekst,children:T.jsx(Gr.Content,{className:Bt.hjelpetekstInnhold,children:T.jsx(ne,{children:T.jsx(J,{id:"ManglendeOpplysningerForm.Hjelpetekst"})})})})]}),validate:[mn],isReadOnly:n,children:[T.jsx(br,{value:Ee.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD,size:"small",children:T.jsx(J,{id:"ManglendeOpplysningerForm.TarKontakt"})}),T.jsx(br,{value:Ee.IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING,size:"small",children:T.jsx(J,{id:"ManglendeOpplysningerForm.GåVidere"})}),T.jsx(br,{value:Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,size:"small",children:T.jsx(J,{id:"ManglendeOpplysningerForm.OpprettArbeidsforhold"})})]}),E===Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING&&T.jsxs(Re,{gap:"space-16",children:[T.jsx(st,{name:"fom",control:u.control,label:T.jsx(J,{id:"ManglendeOpplysningerForm.PeriodeFra"}),validate:[mn,at],isReadOnly:n}),T.jsx(st,{name:"tom",control:u.control,label:T.jsx(J,{id:"ManglendeOpplysningerForm.PeriodeTil"}),validate:[at,XR(u.getValues)],isReadOnly:n}),T.jsx(Dl,{name:"stillingsprosent",control:u.control,label:T.jsx(J,{id:"ManglendeOpplysningerForm.Stillingsprosent"}),parse:I=>{const k=Number.parseInt(I.toString(),10);return Number.isNaN(k)?I:k},validate:[mn,Ys,WR,zR],readOnly:n,maxLength:3})]}),T.jsx(ui,{name:"begrunnelse",control:u.control,label:T.jsx(J,{id:"ManglendeOpplysningerForm.Begrunn"}),validate:[mn,CR,$R,Ml],maxLength:1500,readOnly:n}),!n&&T.jsxs(Re,{gap:"space-16",children:[T.jsx(Oe,{size:"small",variant:"secondary",loading:u.formState.isSubmitting,disabled:!u.formState.isDirty||u.formState.isSubmitting,children:T.jsx(J,{id:"ManglendeOpplysningerForm.Lagre"})}),T.jsx(Oe,{size:"small",variant:"tertiary",loading:!1,disabled:u.formState.isSubmitting,onClick:_,type:"button",children:T.jsx(J,{id:"ManglendeOpplysningerForm.Avbryt"})})]})]})})]})},XR=e=>r=>{const t=e("fom");return t&&r?Ws(t)(r):null},QR=(e,r,t,n)=>()=>{e(a=>a.map(l=>{if(t.arbeidsgiverIdent===l.arbeidsgiverIdent){const s=n.saksbehandlersVurdering===Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING?{arbeidsgiverIdent:t.arbeidsgiverIdent,fom:n.fom,tom:n.tom,stillingsprosent:n.stillingsprosent,begrunnelse:n.begrunnelse,saksbehandlersVurdering:n.saksbehandlersVurdering}:{begrunnelse:n.begrunnelse,saksbehandlersVurdering:n.saksbehandlersVurdering};return{...r,avklaring:s}}return l}))};Zu.__docgenInfo={description:"",methods:[],displayName:"ManglendeArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  behandlingUuid: string;
  begrunnelse?: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn?: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  behandlingVersjon: number;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  vurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  behandlingVersjon: number;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"behandlingVersjon",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lukkArbeidsforholdRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const ZR="_alertStripe_i1zil_1",ep="_hjelpetekst_i1zil_5",np="_hjelpetekstInnhold_i1zil_9",rp="_svg_i1zil_14",Ft={alertStripe:ZR,hjelpetekst:ep,hjelpetekstInnhold:np,svg:rp},tp=bl(3),ap=hl(1500),ed=({behandlingUuid:e,behandlingVersjon:r,radData:t,isReadOnly:n,lagreVurdering:a,lukkArbeidsforholdRad:l,oppdaterTabell:i})=>{const s=er(),{arbeidsforholdForRad:o,inntektsmeldingerForRad:d}=t,u={saksbehandlersVurdering:t.avklaring?.saksbehandlersVurdering,begrunnelse:t.avklaring?.begrunnelse},E=Ba({defaultValues:u});Ei(E.formState.isDirty);const _=o.length===1,N=()=>{l(),E.reset(u)},v=I=>{const k={behandlingUuid:e,behandlingVersjon:r,vurdering:I.saksbehandlersVurdering,arbeidsgiverIdent:t.arbeidsgiverIdent,internArbeidsforholdRef:_?o[0].internArbeidsforholdId??void 0:void 0,begrunnelse:I.begrunnelse};return a(k).then(lp(i,t,I)).finally(()=>E.reset(I))},c=g.useRef(null),[f,p]=g.useState(!1),R=()=>p(I=>!I);return T.jsx(wa,{formMethods:E,onSubmit:v,children:T.jsxs(be,{gap:"space-16",children:[!_&&d.length>0&&T.jsx("div",{className:Ft.alertStripe,children:T.jsx(vt,{variant:"info",children:T.jsx(J,{id:"InntektsmeldingInnhentesForm.InnehentAlle"})})}),T.jsx($u,{name:"saksbehandlersVurdering",control:E.control,label:T.jsxs(Re,{gap:"space-8",children:[T.jsx(J,{id:"InntektsmeldingInnhentesForm.MåInnhentes"}),T.jsx(eo,{ref:c,onClick:R,className:Ft.svg,title:s.formatMessage({id:"InntektsmeldingInnhentesForm.AltHjelpetekst"})}),T.jsx(Gr,{open:f,onClose:R,anchorEl:c.current,className:Ft.hjelpetekst,children:T.jsx(Gr.Content,{className:Ft.hjelpetekstInnhold,children:T.jsxs(be,{gap:"space-16",children:[T.jsx(ne,{children:T.jsx(J,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel1"})}),T.jsx(ne,{children:T.jsx(J,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel2"})}),T.jsx(ne,{children:T.jsx(J,{id:"InntektsmeldingInnhentesForm.HjelpetekstDel3"})})]})})})]}),validate:[mn],isReadOnly:n,children:T.jsxs(be,{gap:"space-2",children:[T.jsx(br,{value:Ee.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,size:"small",children:T.jsx(J,{id:"InntektsmeldingInnhentesForm.TarKontakt"})}),!t.erPrivatPerson&&T.jsx(br,{value:Ee.MELDING_TIL_ARBEIDSGIVER_NAV_NO,size:"small",children:T.jsx(J,{id:"InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo"})}),T.jsx(br,{value:Ee.FORTSETT_UTEN_INNTEKTSMELDING,size:"small",children:T.jsx(J,{id:"InntektsmeldingInnhentesForm.GåVidere"})})]})}),T.jsx(ui,{name:"begrunnelse",control:E.control,label:T.jsx(J,{id:_?"InntektsmeldingInnhentesForm.Begrunn":"InntektsmeldingInnhentesForm.Kommentar"}),validate:[mn,tp,ap,Ml],maxLength:1500,readOnly:n}),!n&&T.jsxs(Re,{gap:"space-16",children:[T.jsx(Oe,{size:"small",variant:"secondary",loading:E.formState.isSubmitting,disabled:!E.formState.isDirty||E.formState.isSubmitting,children:T.jsx(J,{id:"InntektsmeldingInnhentesForm.Lagre"})}),T.jsx(Oe,{size:"small",variant:"tertiary",loading:!1,disabled:E.formState.isSubmitting,onClick:N,type:"button",children:T.jsx(J,{id:"InntektsmeldingInnhentesForm.Avbryt"})})]})]})})},lp=(e,r,t)=>()=>{e(n=>n.map(a=>a.arbeidsgiverIdent===r.arbeidsgiverIdent?{...r,avklaring:{begrunnelse:t.begrunnelse,saksbehandlersVurdering:t.saksbehandlersVurdering}}:a))};ed.__docgenInfo={description:"",methods:[],displayName:"ManglendeInntektsmeldingForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  behandlingUuid: string;
  vurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  behandlingVersjon: number;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"behandlingVersjon",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lukkArbeidsforholdRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},oppdaterTabell:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: (rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]) => void",signature:{arguments:[{type:{name:"signature",type:"function",raw:"(rader: ArbeidsforholdOgInntektRadData[]) => ArbeidsforholdOgInntektRadData[]",signature:{arguments:[{type:{name:"Array",elements:[{name:"intersection",raw:`{
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const ut="342352362",ip=bl(3),sp=hl(1500),op=Cs(1),up=$s(100),_i=({behandlingUuid:e,behandlingVersjon:r,isReadOnly:t,registrerArbeidsforhold:n,radData:a,lukkArbeidsforholdRad:l,erOverstyrt:i,oppdaterTabell:s,erNyttArbeidsforhold:o=!1})=>{const d=er(),[u,E]=g.useState(!1),_={fom:a?.avklaring?.fom,tom:a?.avklaring?.tom,stillingsprosent:a?.avklaring?.stillingsprosent,begrunnelse:a?.avklaring?.begrunnelse,arbeidsgiverNavn:a?.avklaring?.arbeidsgiverNavn},N=Ba({defaultValues:_});Ei(N.formState.isDirty);const v=()=>{l(),N.reset(_)},c=p=>{const R=qs(Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,e,r,p);return n(R).then(()=>{s(Ep(p)),N.reset(p),o&&l()})},f=()=>{const p=N.getValues(),R=qs(Ee.FJERN_FRA_BEHANDLINGEN,e,r,p);n(R).then(mp(s,l,o))};return T.jsxs(be,{gap:"space-16",children:[!a&&T.jsx(Et,{size:"small",level:"3",children:T.jsx(J,{id:"LeggTilArbeidsforholdForm.LeggTilArbeidsforhold"})}),T.jsx(wa,{formMethods:N,onSubmit:c,children:T.jsxs(be,{gap:"space-24",children:[T.jsxs(Re,{gap:"space-16",children:[i&&T.jsxs(T.Fragment,{children:[T.jsx(Dl,{name:"arbeidsgiverNavn",control:N.control,label:T.jsx(J,{id:"LeggTilArbeidsforholdForm.Arbeidsgiver"}),validate:[mn],readOnly:t||!i}),T.jsx(st,{name:"fom",control:N.control,label:T.jsx(J,{id:"LeggTilArbeidsforholdForm.PeriodeFra"}),validate:[mn,at],isReadOnly:t||!i}),T.jsx(st,{name:"tom",control:N.control,label:T.jsx(J,{id:"LeggTilArbeidsforholdForm.PeriodeTil"}),validate:[at,dp(N.getValues)],isReadOnly:t||!i})]}),T.jsx(Dl,{name:"stillingsprosent",control:N.control,label:T.jsx(J,{id:"LeggTilArbeidsforholdForm.Stillingsprosent"}),parse:p=>{const R=Number.parseInt(p.toString(),10);return Number.isNaN(R)?p:R},validate:[mn,Ys,op,up],readOnly:t||!i,maxLength:3})]}),T.jsx(ui,{name:"begrunnelse",control:N.control,label:T.jsx(J,{id:"LeggTilArbeidsforholdForm.Begrunn"}),validate:[mn,ip,sp,Ml],maxLength:1500,readOnly:t||!i}),i&&T.jsxs(Re,{gap:"space-16",children:[T.jsx(Oe,{size:"small",variant:"secondary",loading:N.formState.isSubmitting,disabled:!N.formState.isDirty||N.formState.isSubmitting,children:T.jsx(J,{id:"LeggTilArbeidsforholdForm.Lagre"})}),T.jsx(Oe,{size:"small",variant:"tertiary",loading:!1,disabled:N.formState.isSubmitting,onClick:v,type:"button",children:T.jsx(J,{id:"LeggTilArbeidsforholdForm.Avbryt"})}),a&&T.jsxs(T.Fragment,{children:[T.jsx(Or,{}),T.jsx(Oe,{size:"small",variant:"tertiary",loading:!1,disabled:N.formState.isSubmitting,onClick:()=>E(!0),type:"button",icon:T.jsx(EE,{"aria-hidden":!0}),children:T.jsx(J,{id:"LeggTilArbeidsforholdForm.Slett"})})]})]})]})}),u&&T.jsx(Gc,{text:d.formatMessage({id:"NyttArbeidsforholdForm.VilDuSlette"}),submit:f,cancel:()=>E(!1),showModal:!0})]})},qs=(e,r,t,n)=>({vurdering:e,behandlingUuid:r,behandlingVersjon:t,arbeidsgiverIdent:ut,begrunnelse:n.begrunnelse,arbeidsgiverNavn:n.arbeidsgiverNavn,fom:n.fom,tom:n.tom,stillingsprosent:n.stillingsprosent}),dp=e=>r=>{const t=e("fom");return r&&t?Ws(t)(r):null},Ep=e=>r=>{const t={erPrivatPerson:!1,arbeidsgiverIdent:ut,arbeidsgiverNavn:e.arbeidsgiverNavn,avklaring:{fom:e.fom,tom:e.tom,stillingsprosent:e.stillingsprosent,arbeidsgiverNavn:e.arbeidsgiverNavn,begrunnelse:e.begrunnelse,saksbehandlersVurdering:Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER},inntektsmeldingerForRad:[],inntektsposter:[],arbeidsforholdForRad:[]},n=r.findIndex(a=>a.arbeidsgiverIdent===ut);return n===-1?r.concat(t):r.map((a,l)=>l===n?t:a)},mp=(e,r,t)=>()=>{e(n=>n.filter(a=>a.arbeidsgiverIdent!==ut)),t&&r()};_i.__docgenInfo={description:"",methods:[],displayName:"ManueltLagtTilArbeidsforholdForm",props:{behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  begrunnelse?: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn?: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  behandlingVersjon: number;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},radData:{required:!1,tsType:{name:"intersection",raw:`{
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""},erNyttArbeidsforhold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const _p="_exclamationmarkIcon_5sygz_1",Np="_checkmarkIcon_5sygz_8",Tp="_panelOpen_5sygz_15",gp="_panelOpenAp_5sygz_24",vp="_row_5sygz_34",Ip="_isOpen_5sygz_38",fp="_isApOpen_5sygz_42",Qr={exclamationmarkIcon:_p,checkmarkIcon:Np,panelOpen:Tp,panelOpenAp:gp,row:vp,isOpen:Ip,isApOpen:fp},cp=OR.bind(Qr),nd=({saksnummer:e,behandlingUuid:r,behandlingVersjon:t,radData:n,isReadOnly:a,erOverstyrt:l,oppdaterTabell:i,registrerArbeidsforhold:s,lagreVurdering:o,toggleÅpenRad:d,erRadÅpen:u,alleKodeverk:E,skjæringstidspunkt:_})=>{const N=er(),{inntektsmeldingerForRad:v,arbeidsforholdForRad:c,arbeidsgiverNavn:f,avklaring:p,årsak:R}=n,I=p?.saksbehandlersVurdering===Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER,k=c.length>0&&v.length>0&&!R,S=R===Ve.MANGLENDE_INNTEKTSMELDING,y=R===Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD,b=!!R&&!p?.saksbehandlersVurdering,B=c.length>0&&v.length===0&&!R&&!I,M=c.length===0&&v.length>0&&!R,G=pp(c,p);return T.jsxs(ke.ExpandableRow,{open:u,onOpenChange:d,expandOnRowClick:!0,togglePlacement:"right",contentGutter:"none",className:cp("row",{isOpen:u,isApOpen:b}),content:T.jsxs(be,{gap:"space-16",className:b?Qr.panelOpenAp:Qr.panelOpen,children:[I&&T.jsx(_i,{behandlingUuid:r,behandlingVersjon:t,isReadOnly:!1,registrerArbeidsforhold:s,radData:n,lukkArbeidsforholdRad:d,erOverstyrt:l,oppdaterTabell:i}),k&&T.jsx(mi,{saksnummer:e,alleKodeverk:E,radData:n}),M&&T.jsx(ot,{saksnummer:e,arbeidsforhold:c.length>0?c[0]:void 0,inntektsmelding:v[0],skalViseArbeidsforholdId:!1,alleKodeverk:E,radData:n}),S&&T.jsxs(T.Fragment,{children:[T.jsx(Al,{saksnummer:e,skjæringstidspunkt:_,alleKodeverk:E,radData:n}),T.jsx(ed,{behandlingUuid:r,behandlingVersjon:t,isReadOnly:a,radData:n,lagreVurdering:o,lukkArbeidsforholdRad:d,oppdaterTabell:i})]}),y&&T.jsxs(T.Fragment,{children:[T.jsx(ot,{saksnummer:e,inntektsmelding:v[0],skalViseArbeidsforholdId:v.length>1,radData:n,alleKodeverk:E}),T.jsx(Zu,{behandlingUuid:r,behandlingVersjon:t,radData:n,isReadOnly:a,registrerArbeidsforhold:s,lagreVurdering:o,lukkArbeidsforholdRad:d,oppdaterTabell:i})]}),B&&T.jsx(Al,{saksnummer:e,skjæringstidspunkt:_,alleKodeverk:E,radData:n})]}),children:[T.jsxs(ke.DataCell,{children:[!b&&T.jsx(wd,{title:N.formatMessage({id:"ArbeidsforholdRad.Ok"}),className:Qr.checkmarkIcon}),b&&T.jsx(Pl,{title:N.formatMessage({id:"ArbeidsforholdRad.Aksjonspunkt"}),className:Qr.exclamationmarkIcon})]}),T.jsx(ke.DataCell,{children:T.jsx(ne,{children:f})}),T.jsx(ke.DataCell,{children:T.jsx(ne,{children:G?.fom?T.jsx(tt,{dateStringFom:G.fom,dateStringTom:G.tom}):"-"})}),T.jsx(ke.DataCell,{children:T.jsx(ne,{children:T.jsx(J,{id:Rp(I,c.length>0)})})}),T.jsx(ke.DataCell,{children:T.jsxs(ne,{children:[c.length<2&&v.length===1&&T.jsx(Ra,{dateString:v[0].motattDato}),!S&&c.length>1&&v.length===c.length&&T.jsx(J,{id:"ArbeidsforholdRad.Mottatt"}),(I||S&&v.length<c.length)&&T.jsx(J,{id:"ArbeidsforholdRad.IkkeMottatt"})]})})]})},Rp=(e,r)=>e?"ArbeidsforholdRad.Saksbehandler":r?"ArbeidsforholdRad.AaRegisteret":"ArbeidsforholdRad.Inntektsmelding",pp=(e,r)=>{if(r?.saksbehandlersVurdering===Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER||r?.saksbehandlersVurdering===Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING)return{fom:r.fom,tom:r.tom};const t=e.reduce((n,a)=>({fom:n.fom&&ze(n.fom).isBefore(a.fom)?n.fom:a.fom,tom:n.tom&&ze(n.tom).isAfter(a.tom)?n.tom:a.tom}),{fom:void 0,tom:void 0});return t.fom?t:void 0};nd.__docgenInfo={description:"",methods:[],displayName:"ArbeidsforholdRad",props:{saksnummer:{required:!0,tsType:{name:"string"},description:""},behandlingUuid:{required:!0,tsType:{name:"string"},description:""},behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},radData:{required:!0,tsType:{name:"intersection",raw:`{
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  behandlingUuid: string;
  begrunnelse?: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn?: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  behandlingVersjon: number;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  vurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  behandlingVersjon: number;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"behandlingVersjon",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},toggleÅpenRad:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},erRadÅpen:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
  BehandlingStatus: BehandlingStatusEnum;
  BehandlingType: BehandlingTypeEnum;
  BehandlingÅrsakType: BehandlingArsakTypeEnum;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatusEnum;
  FagsakYtelseType: FagsakYtelseTypeEnum;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktorEnum;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsenEnum;
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
}`,signature:{properties:[{key:"AdresseType",value:{name:"AdresseType",required:!0}},{key:"AktivitetskravPermisjonType",value:{name:"AktivitetskravPermisjonType",required:!0}},{key:"AktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"AnkeOmgjørÅrsak",value:{name:"AnkeOmgjorArsak",required:!0}},{key:"Arbeidskategori",value:{name:"Arbeidskategori",required:!0}},{key:"ArbeidType",value:{name:"ArbeidType",required:!0}},{key:"Avslagsårsak",value:{name:"Avslagsarsak",required:!0}},{key:"BehandlingResultatType",value:{name:"BehandlingResultatType",required:!0}},{key:"BehandlingStatus",value:{name:"BehandlingStatusEnum",required:!0}},{key:"BehandlingType",value:{name:"BehandlingTypeEnum",required:!0}},{key:"BehandlingÅrsakType",value:{name:"BehandlingArsakTypeEnum",required:!0}},{key:"FamilieHendelseType",value:{name:"FamilieHendelseType",required:!0}},{key:"FaresignalVurdering",value:{name:"FaresignalVurdering",required:!0}},{key:"FagsakStatus",value:{name:"FagsakStatusEnum",required:!0}},{key:"FagsakYtelseType",value:{name:"FagsakYtelseTypeEnum",required:!0}},{key:"FagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"FaktaOmBeregningTilfelle",value:{name:"FaktaOmBeregningTilfelle",required:!0}},{key:"FarSøkerType",value:{name:"FarSøkerType",required:!0}},{key:"FordelingPeriodeKilde",value:{name:"FordelingPeriodeKilde",required:!0}},{key:"ForeldreType",value:{name:"ForeldreType",required:!0}},{key:"HistorikkAktør",value:{name:"HistorikkAktorEnum",required:!0}},{key:"GraderingAvslagÅrsak",value:{name:"GraderingAvslagÅrsak",required:!0}},{key:"KlageHjemmel",value:{name:"KlageHjemmel",required:!0}},{key:"KlageAvvistÅrsak",value:{name:"KlageAvvistÅrsak",required:!0}},{key:"KlageMedholdÅrsak",value:{name:"KlageMedholdÅrsak",required:!0}},{key:"KonsekvensForYtelsen",value:{name:"KonsekvensForYtelsenEnum",required:!0}},{key:"Landkoder",value:{name:"Landkode",required:!0}},{key:"ManuellBehandlingÅrsak",value:{name:"ManuellBehandlingÅrsak",required:!0}},{key:"MedlemskapDekningType",value:{name:"MedlemskapDekningType",required:!0}},{key:"MedlemskapManuellVurderingType",value:{name:"MedlemskapManuellVurderingType",required:!0}},{key:"MedlemskapType",value:{name:"MedlemskapType",required:!0}},{key:"MorsAktivitet",value:{name:"MorsAktivitet",required:!0}},{key:"NaturalYtelseType",value:{name:"NaturalYtelseType",required:!0}},{key:"InnsynResultatType",value:{name:"InnsynResultatType",required:!0}},{key:"OmsorgsovertakelseVilkårType",value:{name:"OmsorgsovertakelseVilkårType",required:!0}},{key:"OppholdÅrsak",value:{name:"OppholdArsakType",required:!0}},{key:"OppgaveType",value:{name:"OppgaveType",required:!0}},{key:"OppholdstillatelseType",value:{name:"OppholdstillatelseType",required:!0}},{key:"OpptjeningAktivitetType",value:{name:"OpptjeningAktivitetType",required:!0}},{key:"OverføringÅrsak",value:{name:"OverforingArsak",required:!0}},{key:"PermisjonsbeskrivelseType",value:{name:"PermisjonsbeskrivelseType",required:!0}},{key:"PeriodeResultatÅrsak",value:{name:"PeriodeResultatÅrsak",required:!0}},{key:"PersonstatusType",value:{name:"PersonstatusType",required:!0}},{key:"Region",value:{name:"Region",required:!0}},{key:"RelasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"RevurderingVarslingÅrsak",value:{name:"RevurderingVarslingÅrsak",required:!0}},{key:"SivilstandType",value:{name:"SivilstandType",required:!0}},{key:"SkjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"StønadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"UtsettelseÅrsak",value:{name:"UtsettelseÅrsak",required:!0}},{key:"UttakArbeidType",value:{name:"UttakArbeidType",required:!0}},{key:"UttakPeriodeType",value:{name:"UttakPeriodeType",required:!0}},{key:"UttakUtsettelseType",value:{name:"UttakUtsettelseType",required:!0}},{key:"Venteårsak",value:{name:"VenteArsakType",required:!0}},{key:"VergeType",value:{name:"union",raw:`| 'BARN'
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},skjæringstidspunkt:{required:!0,tsType:{name:"string"},description:""}}};const Sp="_alertStripe_mucgx_5",kp={alertStripe:Sp},rd=({behandling:e,aksjonspunkt:r,readOnly:t,arbeidOgInntekt:n,registrerArbeidsforhold:a,erOverstyrer:l,tabellData:i,settÅpneRadIndexer:s,setErOverstyrt:o,oppdaterTabell:d})=>{const u=er(),{arbeidsforhold:E,inntektsmeldinger:_}=n,[N,v]=g.useState(!1),[c,f]=g.useState(!1),p=()=>{o(!0),v(!0);const S=i.findIndex(y=>y.avklaring?.saksbehandlersVurdering===Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER);S!==-1&&s([S])},R=Dp(i,r),I=i.every(S=>S.arbeidsgiverIdent!==ut),k=r?.status===Ce.OPPRETTET;return T.jsxs(be,{gap:"space-32",children:[T.jsxs(Re,{gap:"space-16",children:[T.jsx(Et,{size:"small",level:"3",children:T.jsx(J,{id:"ArbeidOgInntektFaktaPanel.Overskrift"})}),l&&k&&!t&&T.jsx(kc,{onClick:p}),T.jsx(Or,{}),T.jsx(ne,{size:"small",children:T.jsx(J,{id:"ArbeidOgInntektFaktaPanel.Skjaringstidspunkt",values:{skjæringspunktDato:Hs(n.skjæringstidspunkt)}})})]}),T.jsxs(be,{gap:"space-16",children:[R.length>0&&T.jsx(pc,{children:R.map(S=>u.formatMessage({id:S})).join(" ")}),E.length===0&&_.length===0&&l&&T.jsx("div",{className:kp.alertStripe,children:T.jsx(vt,{variant:"info",children:T.jsx(J,{id:"ArbeidOgInntektFaktaPanel.IngenArbeidsforhold"})})}),N&&I&&!c&&T.jsx("div",{children:T.jsx(Oe,{size:"small",variant:"tertiary",icon:T.jsx(aE,{"aria-hidden":!0}),onClick:()=>f(!0),children:T.jsx(J,{id:"ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold"})})}),c&&T.jsx(_i,{behandlingUuid:e.uuid,behandlingVersjon:e.versjon,isReadOnly:!1,registrerArbeidsforhold:a,lukkArbeidsforholdRad:()=>f(!1),oppdaterTabell:d,erOverstyrt:!0,erNyttArbeidsforhold:!0})]})]})},Dp=(e,r)=>{const t=e.some(i=>i.årsak===Ve.MANGLENDE_INNTEKTSMELDING),n=e.some(i=>i.årsak===Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD),a=r?.status===Ce.OPPRETTET,l=[];return a&&t&&l.push("ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding"),a&&n&&l.push("ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger"),l};rd.__docgenInfo={description:"",methods:[],displayName:"ArbeidsOgInntektOverstyrPanel",props:{behandling:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id?: number;
  uuid: string;
  versjon: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingType;
  status: foreldrepenger_behandlingslager_behandling_BehandlingStatus;
  fagsakId?: number;
  opprettet: string;
  avsluttet?: string;
  endret?: string;
  endretAvBrukernavn?: string;
  behandlendeEnhetId: string;
  behandlendeEnhetNavn: string;
  erAktivPapirsoknad: boolean;
  førsteÅrsak?: tjenester_behandling_dto_behandling_BehandlingÅrsakDto;
  behandlingsfristTid?: string;
  gjeldendeVedtak: boolean;
  erPaaVent?: boolean;
  originalVedtaksDato?: string;
  behandlingHenlagt: boolean;
  behandlingPaaVent?: boolean;
  behandlingPåVent: boolean;
  fristBehandlingPåVent?: string;
  fristBehandlingPaaVent?: string;
  venteArsakKode?: string;
  venteÅrsakKode?: string;
  sprakkode?: foreldrepenger_behandlingslager_geografisk_Språkkode;
  språkkode: foreldrepenger_behandlingslager_geografisk_Språkkode;
  behandlingKøet: boolean;
  ansvarligSaksbehandler?: string;
  toTrinnsBehandling: boolean;
  behandlingsresultat?: tjenester_behandling_dto_behandling_BehandlingsresultatDto;
  behandlingÅrsaker: Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>;
  vilkår: Array<tjenester_behandling_vilkår_VilkårDto>;
  links: Array<rest_ResourceLink>;
  ansvarligBeslutter?: string;
  aksjonspunkt: Array<tjenester_behandling_aksjonspunkt_AksjonspunktDto>;
  harSøknad: boolean;
  harRegisterdata?: boolean;
  harSattEndringsdato: boolean;
  alleUttaksperioderAvslått?: boolean;
  sjekkSimuleringResultat?: boolean;
  taskStatus?: tjenester_behandling_dto_AsyncPollingStatus;
  behandlingKoet?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!1}},{key:"uuid",value:{name:"string",required:!0}},{key:"versjon",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVSLU' | 'FVED' | 'IVED' | 'OPPRE' | 'UTRED'",elements:[{name:"literal",value:"'AVSLU'"},{name:"literal",value:"'FVED'"},{name:"literal",value:"'IVED'"},{name:"literal",value:"'OPPRE'"},{name:"literal",value:"'UTRED'"}],required:!0}},{key:"fagsakId",value:{name:"number",required:!1}},{key:"opprettet",value:{name:"string",required:!0}},{key:"avsluttet",value:{name:"string",required:!1}},{key:"endret",value:{name:"string",required:!1}},{key:"endretAvBrukernavn",value:{name:"string",required:!1}},{key:"behandlendeEnhetId",value:{name:"string",required:!0}},{key:"behandlendeEnhetNavn",value:{name:"string",required:!0}},{key:"erAktivPapirsoknad",value:{name:"boolean",required:!0}},{key:"førsteÅrsak",value:{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| 'RE-LOV'
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
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]},required:!1}},{key:"behandlingsfristTid",value:{name:"string",required:!1}},{key:"gjeldendeVedtak",value:{name:"boolean",required:!0}},{key:"erPaaVent",value:{name:"boolean",required:!1}},{key:"originalVedtaksDato",value:{name:"string",required:!1}},{key:"behandlingHenlagt",value:{name:"boolean",required:!0}},{key:"behandlingPaaVent",value:{name:"boolean",required:!1}},{key:"behandlingPåVent",value:{name:"boolean",required:!0}},{key:"fristBehandlingPåVent",value:{name:"string",required:!1}},{key:"fristBehandlingPaaVent",value:{name:"string",required:!1}},{key:"venteArsakKode",value:{name:"string",required:!1}},{key:"venteÅrsakKode",value:{name:"string",required:!1}},{key:"sprakkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"språkkode",value:{name:"union",raw:"'NB' | 'NN' | 'EN' | '-'",elements:[{name:"literal",value:"'NB'"},{name:"literal",value:"'NN'"},{name:"literal",value:"'EN'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingKøet",value:{name:"boolean",required:!0}},{key:"ansvarligSaksbehandler",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"behandlingsresultat",value:{name:"signature",type:"object",raw:`{
  id: number;
  type: foreldrepenger_behandlingslager_behandling_BehandlingResultatType;
  avslagsarsak?: foreldrepenger_behandlingslager_behandling_vilkår_Avslagsårsak;
  avslagsarsakFritekst?: string;
  rettenTil?: foreldrepenger_behandlingslager_behandling_RettenTil;
  konsekvenserForYtelsen?: Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>;
  vedtaksbrev?: foreldrepenger_behandlingslager_behandling_vedtak_Vedtaksbrev;
  vedtaksbrevStatus: foreldrepenger_domene_vedtak_intern_VedtaksbrevStatus;
  overskrift?: string;
  fritekstbrev?: string;
  harRedigertVedtaksbrev: boolean;
  erRevurderingMedUendretUtfall?: boolean;
  skjæringstidspunkt?: tjenester_behandling_dto_behandling_SkjæringstidspunktDto;
  endretDekningsgrad?: boolean;
  opphørsdato?: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"type",value:{name:"union",raw:`| 'IKKE_FASTSATT'
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
| 'HENLAGT_INNSYN_TRUKKET'`,elements:[{name:"literal",value:"'IKKE_FASTSATT'"},{name:"literal",value:"'INNVILGET'"},{name:"literal",value:"'AVSLÅTT'"},{name:"literal",value:"'OPPHØR'"},{name:"literal",value:"'HENLAGT_SØKNAD_TRUKKET'"},{name:"literal",value:"'HENLAGT_FEILOPPRETTET'"},{name:"literal",value:"'HENLAGT_BRUKER_DØD'"},{name:"literal",value:"'MERGET_OG_HENLAGT'"},{name:"literal",value:"'HENLAGT_SØKNAD_MANGLER'"},{name:"literal",value:"'FORELDREPENGER_ENDRET'"},{name:"literal",value:"'FORELDREPENGER_SENERE'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'MANGLER_BEREGNINGSREGLER'"},{name:"literal",value:"'KLAGE_AVVIST'"},{name:"literal",value:"'KLAGE_MEDHOLD'"},{name:"literal",value:"'KLAGE_DELVIS_MEDHOLD'"},{name:"literal",value:"'KLAGE_OMGJORT_UGUNST'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_OPPHEVET'"},{name:"literal",value:"'KLAGE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'KLAGE_TILBAKEKREVING_VEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_KLAGE_TRUKKET'"},{name:"literal",value:"'HJEMSENDE_UTEN_OPPHEVE'"},{name:"literal",value:"'ANKE_AVVIST'"},{name:"literal",value:"'ANKE_MEDHOLD'"},{name:"literal",value:"'ANKE_DELVIS_MEDHOLD'"},{name:"literal",value:"'ANKE_OMGJORT_UGUNST'"},{name:"literal",value:"'ANKE_OPPHEVE_OG_HJEMSENDE'"},{name:"literal",value:"'ANKE_HJEMSENDE_UTEN_OPPHEV'"},{name:"literal",value:"'ANKE_YTELSESVEDTAK_STADFESTET'"},{name:"literal",value:"'HENLAGT_ANKE_TRUKKET'"},{name:"literal",value:"'INNSYN_INNVILGET'"},{name:"literal",value:"'INNSYN_DELVIS_INNVILGET'"},{name:"literal",value:"'INNSYN_AVVIST'"},{name:"literal",value:"'HENLAGT_INNSYN_TRUKKET'"}],required:!0}},{key:"avslagsarsak",value:{name:"union",raw:`| '1001'
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
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1013'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"rettenTil",value:{name:"union",raw:"'HAR_RETT_TIL_FP' | 'HAR_IKKE_RETT_TIL_FP' | '-'",elements:[{name:"literal",value:"'HAR_RETT_TIL_FP'"},{name:"literal",value:"'HAR_IKKE_RETT_TIL_FP'"},{name:"literal",value:"'-'"}],required:!1}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
| 'ENDRING_I_BEREGNING'
| 'ENDRING_I_UTTAK'
| 'ENDRING_I_FORDELING_AV_YTELSEN'
| 'INGEN_ENDRING'
| '-'`,elements:[{name:"literal",value:"'FORELDREPENGER_OPPHØRER'"},{name:"literal",value:"'ENDRING_I_BEREGNING'"},{name:"literal",value:"'ENDRING_I_UTTAK'"},{name:"literal",value:"'ENDRING_I_FORDELING_AV_YTELSEN'"},{name:"literal",value:"'INGEN_ENDRING'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen>",required:!1}},{key:"vedtaksbrev",value:{name:"union",raw:"'AUTOMATISK' | 'FRITEKST' | 'INGEN' | '-'",elements:[{name:"literal",value:"'AUTOMATISK'"},{name:"literal",value:"'FRITEKST'"},{name:"literal",value:"'INGEN'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vedtaksbrevStatus",value:{name:"union",raw:`| 'VEDTAKSBREV_PRODUSERES'
| 'INGEN_VEDTAKSBREV'
| 'INGEN_VEDTAKSBREV_ANKE'
| 'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'
| 'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'
| 'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}},{key:"overskrift",value:{name:"string",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"skjæringstidspunkt",value:{name:"signature",type:"object",raw:`{
  dato?: string;
  utenMinsterett?: boolean;
}`,signature:{properties:[{key:"dato",value:{name:"string",required:!1}},{key:"utenMinsterett",value:{name:"boolean",required:!1}}]},required:!1}},{key:"endretDekningsgrad",value:{name:"boolean",required:!1}},{key:"opphørsdato",value:{name:"string",required:!1}}]},required:!1}},{key:"behandlingÅrsaker",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  erAutomatiskRevurdering: boolean;
  behandlingArsakType: foreldrepenger_behandlingslager_behandling_BehandlingÅrsakType;
  manueltOpprettet: boolean;
}`,signature:{properties:[{key:"erAutomatiskRevurdering",value:{name:"boolean",required:!0}},{key:"behandlingArsakType",value:{name:"union",raw:`| 'RE-LOV'
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
| '-'`,elements:[{name:"literal",value:"'RE-LOV'"},{name:"literal",value:"'RE-RGLF'"},{name:"literal",value:"'RE-FEFAKTA'"},{name:"literal",value:"'RE-PRSSL'"},{name:"literal",value:"'RE-ANNET'"},{name:"literal",value:"'RE-MDL'"},{name:"literal",value:"'RE-OPTJ'"},{name:"literal",value:"'RE-FRDLING'"},{name:"literal",value:"'RE-INNTK'"},{name:"literal",value:"'RE-FØDSEL'"},{name:"literal",value:"'RE-DØD'"},{name:"literal",value:"'RE-SRTB'"},{name:"literal",value:"'RE-FRIST'"},{name:"literal",value:"'RE-BER-GRUN'"},{name:"literal",value:"'RE-KLAG-U-INNTK'"},{name:"literal",value:"'RE-KLAG-M-INNTK'"},{name:"literal",value:"'ETTER_KLAGE'"},{name:"literal",value:"'RE-MF'"},{name:"literal",value:"'RE-MFIP'"},{name:"literal",value:"'RE-AVAB'"},{name:"literal",value:"'RE-END-FRA-BRUKER'"},{name:"literal",value:"'RE-END-INNTEKTSMELD'"},{name:"literal",value:"'BERØRT-BEHANDLING'"},{name:"literal",value:"'REBEREGN-FERIEPENGER'"},{name:"literal",value:"'RE-UTSATT-START'"},{name:"literal",value:"'RE-SATS-REGULERING'"},{name:"literal",value:"'ENDRE-DEKNINGSGRAD'"},{name:"literal",value:"'INFOBREV_BEHANDLING'"},{name:"literal",value:"'INFOBREV_OPPHOLD'"},{name:"literal",value:"'INFOBREV_PÅMINNELSE'"},{name:"literal",value:"'OPPHØR-NYTT-BARN'"},{name:"literal",value:"'RE-HENDELSE-FØDSEL'"},{name:"literal",value:"'RE-HENDELSE-DØD-F'"},{name:"literal",value:"'RE-HENDELSE-DØD-B'"},{name:"literal",value:"'RE-HENDELSE-DØDFØD'"},{name:"literal",value:"'RE-HENDELSE-UTFLYTTING'"},{name:"literal",value:"'RE-VEDTAK-PSB'"},{name:"literal",value:"'FEIL_PRAKSIS_UTSETTELSE'"},{name:"literal",value:"'FEIL_PRAKSIS_IVERKS_UTSET'"},{name:"literal",value:"'FEIL_PRAKSIS_BG_AAP_KOMBI'"},{name:"literal",value:"'KLAGE_TILBAKE'"},{name:"literal",value:"'RE-YTELSE'"},{name:"literal",value:"'RE-REGISTEROPPL'"},{name:"literal",value:"'KØET-BEHANDLING'"},{name:"literal",value:"'RE-TILST-YT-INNVIL'"},{name:"literal",value:"'RE-TILST-YT-OPPH'"},{name:"literal",value:"'-'"}],required:!0}},{key:"manueltOpprettet",value:{name:"boolean",required:!0}}]},required:!1}],raw:"Array<tjenester_behandling_dto_behandling_BehandlingÅrsakDto>",required:!0}},{key:"vilkår",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  vilkarType: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  vilkarStatus: foreldrepenger_behandlingslager_behandling_vilkår_VilkårUtfallType;
  avslagKode?: string;
  lovReferanse?: string;
  overstyrbar: boolean;
  evaluering?: string;
  input?: string;
}`,signature:{properties:[{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"vilkarStatus",value:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}],required:!0}},{key:"avslagKode",value:{name:"string",required:!1}},{key:"lovReferanse",value:{name:"string",required:!1}},{key:"overstyrbar",value:{name:"boolean",required:!0}},{key:"evaluering",value:{name:"string",required:!1}},{key:"input",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_behandling_vilkår_VilkårDto>",required:!0}},{key:"links",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  href: string;
  rel: string;
  requestPayload?: {
    [key: string]: unknown;
  };
  type: rest_ResourceLink_HttpMethod;
}`,signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"rel",value:{name:"string",required:!0}},{key:"requestPayload",value:{name:"signature",type:"object",raw:`{
  [key: string]: unknown;
}`,signature:{properties:[{key:{name:"string"},value:{name:"unknown",required:!0}}]},required:!1}},{key:"type",value:{name:"union",raw:"'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT'",elements:[{name:"literal",value:"'DELETE'"},{name:"literal",value:"'GET'"},{name:"literal",value:"'PATCH'"},{name:"literal",value:"'POST'"},{name:"literal",value:"'PUT'"}],required:!0}}]}}],raw:"Array<rest_ResourceLink>",required:!0}},{key:"ansvarligBeslutter",value:{name:"string",required:!1}},{key:"aksjonspunkt",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse?: string;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  besluttersBegrunnelse?: string;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid?: string;
  endretTidspunkt?: string;
  endretAv?: string;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"endretAv",value:{name:"string",required:!1}}]}}],raw:"Array<tjenester_behandling_aksjonspunkt_AksjonspunktDto>",required:!0}},{key:"harSøknad",value:{name:"boolean",required:!0}},{key:"harRegisterdata",value:{name:"boolean",required:!1}},{key:"harSattEndringsdato",value:{name:"boolean",required:!0}},{key:"alleUttaksperioderAvslått",value:{name:"boolean",required:!1}},{key:"sjekkSimuleringResultat",value:{name:"boolean",required:!1}},{key:"taskStatus",value:{name:"signature",type:"object",raw:`{
  status?: tjenester_behandling_dto_AsyncPollingStatus_Status;
  eta?: string;
  message: string;
  pollIntervalMillis?: number;
  location?: string;
  cancelUri?: string;
  readOnly?: boolean;
  pending?: boolean;
}`,signature:{properties:[{key:"status",value:{name:"union",raw:`| 'PENDING'
| 'COMPLETE'
| 'DELAYED'
| 'CANCELLED'
| 'HALTED'`,elements:[{name:"literal",value:"'PENDING'"},{name:"literal",value:"'COMPLETE'"},{name:"literal",value:"'DELAYED'"},{name:"literal",value:"'CANCELLED'"},{name:"literal",value:"'HALTED'"}],required:!1}},{key:"eta",value:{name:"string",required:!1}},{key:"message",value:{name:"string",required:!0}},{key:"pollIntervalMillis",value:{name:"number",required:!1}},{key:"location",value:{name:"string",required:!1}},{key:"cancelUri",value:{name:"string",required:!1}},{key:"readOnly",value:{name:"boolean",required:!1}},{key:"pending",value:{name:"boolean",required:!1}}]},required:!1}},{key:"behandlingKoet",value:{name:"boolean",required:!1}}]}},description:""},aksjonspunkt:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  definisjon: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;
  status: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktStatus;
  begrunnelse?: string;
  vilkarType?: foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>;
  besluttersBegrunnelse?: string;
  aksjonspunktType: foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktType;
  kanLoses: boolean;
  erAktivt: boolean;
  fristTid?: string;
  endretTidspunkt?: string;
  endretAv?: string;
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6019'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'FEIL_FAKTA'
| 'FEIL_LOV'
| 'SKJØNN'
| 'UTREDNING'
| 'SAKSFLYT'
| 'BEGRUNNELSE'
| '-'
| 'ANNET'
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"union",raw:`| 'AUTO'
| 'MANU'
| 'OVST'
| 'SAOV'
| '-'`,elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}},{key:"endretAv",value:{name:"string",required:!1}}]}},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},arbeidOgInntekt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>;
  arbeidsforhold: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>;
  inntekter: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>;
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektspostDto>",required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  begrunnelse?: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn?: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  behandlingVersjon: number;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},tabellData:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Inntektsmelding[]",required:!0}},{key:"arbeidsforholdForRad",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"AoIArbeidsforhold[]",required:!0}},{key:"inntektsposter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"literal",value:"false",required:!0}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"arbeidsgiverNavn",value:{name:"string",required:!0}}]}}]}]}],raw:"ArbeidsforholdOgInntektRadData[]"}}},name:"data"}],return:{name:"void"}}},description:""}}};const Ap="_alertStripe_x50kg_1",yp="_headerRow_x50kg_5",Us={alertStripe:Ap,headerRow:yp},td=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:r,registrerArbeidsforhold:t,lagreVurdering:n,erOverstyrer:a,settBehandlingPåVentCallback:l,åpneForNyVurdering:i})=>{const[s,o]=g.useState(!1),[d,u]=g.useState(!1),[E,_]=g.useState(!1),{alleKodeverk:N,submitCallback:v,aksjonspunkterForPanel:c,behandling:f,fagsak:p,isReadOnly:R}=md(),I=c.length>0?c[0]:void 0,{mellomlagretFormData:k,setMellomlagretFormData:S}=_d(),[y,b]=g.useState(k??DR(e,r)),[B,M]=g.useState(Vs(y)),G=vR();g.useEffect(()=>()=>{S(y)},[y]);const V=H=>{B.some(re=>re===H)?M(B.filter(re=>re!==H)):M(B.concat(H))},K=g.useRef(null),A=H=>{b(H),M(Vs(H(y))),K.current?.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},h=()=>{o(!0),v({kode:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING})},P=()=>{o(!0),i()},j=H=>{o(!0),u(!1);const{frist:re,ventearsak:te}=H;te&&l({frist:re,ventearsak:te})},q=y.some(H=>H.avklaring?.saksbehandlersVurdering===Ee.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING||H.avklaring?.saksbehandlersVurdering===Ee.MELDING_TIL_ARBEIDSGIVER_NAV_NO||H.avklaring?.saksbehandlersVurdering===Ee.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD),w=y.every(H=>!H.årsak||H.årsak&&H.avklaring),F=I===void 0,Y=I?.status===Ce.UTFORT,z=I?.status===Ce.OPPRETTET,ae=!R&&(Y||a&&F),Fe=!R&&z&&w&&!G&&q,Z=!R&&z&&w&&!G&&!q;return T.jsxs(be,{gap:"space-16",children:[T.jsx(rd,{behandling:f,aksjonspunkt:I,readOnly:R,arbeidOgInntekt:e,registrerArbeidsforhold:t,erOverstyrer:a,tabellData:y,settÅpneRadIndexer:M,setErOverstyrt:_,oppdaterTabell:A}),T.jsxs(ke,{ref:K,children:[T.jsx(ke.Header,{children:T.jsxs(ke.Row,{className:Us.headerRow,children:[T.jsx(ke.HeaderCell,{scope:"col"}),T.jsx(ke.HeaderCell,{scope:"col",children:T.jsx(J,{id:"ArbeidOgInntektFaktaPanel.Arbeidsforhold"})}),T.jsx(ke.HeaderCell,{scope:"col",children:T.jsx(J,{id:"ArbeidOgInntektFaktaPanel.Periode"})}),T.jsx(ke.HeaderCell,{scope:"col",children:T.jsx(J,{id:"ArbeidOgInntektFaktaPanel.Kilde"})}),T.jsx(ke.HeaderCell,{scope:"col",children:T.jsx(J,{id:"ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt"})}),T.jsx(ke.HeaderCell,{scope:"col"})]})}),T.jsx(ke.Body,{children:y.map((H,re)=>T.jsx(nd,{saksnummer:p.saksnummer,behandlingUuid:f.uuid,behandlingVersjon:f.versjon,radData:H,skjæringstidspunkt:e.skjæringstidspunkt,isReadOnly:R||Y||F,registrerArbeidsforhold:t,lagreVurdering:n,toggleÅpenRad:()=>V(re),erOverstyrt:E,oppdaterTabell:A,erRadÅpen:B.includes(re),alleKodeverk:N},`${H.arbeidsgiverNavn}${H.arbeidsgiverIdent}`))})]}),Fe&&T.jsxs("div",{children:[T.jsx(Oe,{size:"small",variant:"primary",disabled:s,onClick:()=>u(!0),type:"button",children:T.jsx(J,{id:"ArbeidOgInntektFaktaPanel.SettPaVent"})}),T.jsx(zu,{submitCallback:j,cancelEvent:()=>u(!1),defaultVenteårsak:$e.VENT_OPDT_INNTEKTSMELDING,hasManualPaVent:!0,ventearsaker:N.Venteårsak,erTilbakekreving:!1,showModal:d,frist:null})]}),Z&&T.jsx("div",{children:T.jsx(Oe,{size:"small",variant:"primary",disabled:s,loading:s,onClick:h,type:"button",children:T.jsx(J,{id:"ArbeidOgInntektFaktaPanel.Bekreft"})})}),ae&&T.jsxs(be,{gap:"space-16",children:[T.jsx("div",{className:Us.alertStripe,children:T.jsx(vt,{variant:"info",children:T.jsx(J,{id:"ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring"})})}),T.jsx("div",{children:T.jsx(Oe,{size:"small",variant:"secondary",disabled:s,loading:s,onClick:P,type:"button",children:T.jsx(J,{id:"ArbeidOgInntektFaktaPanel.ApneForNyVurdering"})})})]})]})};td.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaPanel",props:{arbeidOgInntekt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>;
  arbeidsforhold: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>;
  inntekter: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>;
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektspostDto>",required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  begrunnelse?: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn?: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  behandlingVersjon: number;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  vurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  behandlingVersjon: number;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"behandlingVersjon",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Op={"ArbeidOgInntektFaktaPanel.Overskrift":"Fakta om arbeid og inntekt","ArbeidOgInntektFaktaPanel.Arbeidsforhold":"Arbeidsforhold","ArbeidOgInntektFaktaPanel.Periode":"Periode","ArbeidOgInntektFaktaPanel.Kilde":"Kilde","ArbeidOgInntektFaktaPanel.InntektsmeldingMottatt":"Inntektsmelding","ArbeidOgInntektFaktaPanel.InnhentManglendeInntektsmelding":"Innhent manglende inntektsmeldinger.","ArbeidOgInntektFaktaPanel.AvklarManglendeOpplysninger":"Avklar manglende opplysninger.","ArbeidOgInntektFaktaPanel.IngenArbeidsforhold":"Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidOgInntektFaktaPanel.Skjaringstidspunkt":"Skjæringstidspunkt for opptjening: {skjæringspunktDato}","ArbeidOgInntektFaktaPanel.SettPaVent":"Sett på vent","ArbeidOgInntektFaktaPanel.Bekreft":"Bekreft og fortsett","ArbeidOgInntektFaktaPanel.LeggTilArbeidsforhold":" Legg til arbeidsforhold","ArbeidOgInntektFaktaPanel.ApneForNyVurdering":"Åpne for ny vurdering","ArbeidOgInntektFaktaPanel.ApneForNyRevurderingForklaring":'Ved å bruke "Åpne for ny vurdering" kan du endre valg som er gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.',"ArbeidsforholdRad.Saksbehandler":"Saksbehandler","ArbeidsforholdRad.AaRegisteret":"A-ordningen","ArbeidsforholdRad.Inntektsmelding":"Inntektsmelding","ArbeidsforholdRad.Aksjonspunkt":"Åpent aksjonspunkt","ArbeidsforholdRad.Ok":"Arbeidsforhold er OK","ArbeidsforholdRad.Mottatt":"Mottatt","ArbeidsforholdRad.IkkeMottatt":"Ikke mottatt","InntektsmeldingInnhentesForm.MåInnhentes":"Må inntektsmelding innhentes?","InntektsmeldingInnhentesForm.TarKontakt":"Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding","InntektsmeldingInnhentesForm.GåVidere":"Gå videre uten inntektsmelding","InntektsmeldingInnhentesForm.MeldingArbeidsgiverNavNo":"Send påminnelse via Min side - arbeidsgiver på nav.no","InntektsmeldingInnhentesForm.Begrunn":"Begrunn valget","InntektsmeldingInnhentesForm.Kommentar":"Kommentar","InntektsmeldingInnhentesForm.Lagre":"Lagre","InntektsmeldingInnhentesForm.Avbryt":"Avbryt","InntektsmeldingInnhentesForm.AltHjelpetekst":"Hjelpetekst","InntektsmeldingInnhentesForm.HjelpetekstDel1":"Vi trenger inntektsmelding for å behandle saken. Kontakt arbeidsgiveren per telefon. Hvis kontaktinformasjonen til arbeidsgiver er vanskelig å finne, kontakt bruker først.","InntektsmeldingInnhentesForm.HjelpetekstDel2":"Det er kun unntaksvis at en sak skal behandles uten inntektsmelding, f.eks. at man etter gjentatte ganger ikke oppnår kontakt. Refusjon til arbeidsgiver er ikke mulig uten en inntektsmelding.","InntektsmeldingInnhentesForm.HjelpetekstDel3":"Dersom det er flere arbeidsforhold i samme virksomhet må det sendes en inntektsmelding som gjelder samlet for alle, eller én per arbeidsforhold med arbeidsforholdsID.","InntektsmeldingInnhentesForm.InnehentAlle":"Ved flere arbeidsforhold i samme virksomhet, skal alle inntektsmeldinger innhentes. Mottas ikke alle, må du vurdere om du skal gå videre uten alle inntektsmeldingene. Gjør du det, fjernes arbeidsforholdet (ene) fra beregningen.","InntektsmeldingOpplysningerPanel.Stillingsprosent":"Stillingsprosent","InntektsmeldingOpplysningerPanel.Inntektsmelding":"Inntektsmelding","InntektsmeldingOpplysningerPanel.Refusjon":"Refusjon","InntektsmeldingOpplysningerPanel.Ja":"Ja","InntektsmeldingOpplysningerPanel.Nei":"Nei","InntektsmeldingOpplysningerPanel.Refusjonsbeløp":"Refusjonsbeløp","InntektsmeldingOpplysningerPanel.Kontaktinfo":"Kontaktinfo","InntektsmeldingOpplysningerPanel.Tlf":"Tlf. {nr}","InntektsmeldingOpplysningerPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","InntektsmeldingOpplysningerPanel.ArbeidsforholdId":"ID","ManglendeOpplysningerForm.ErMottattMenIkkeReg":"Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen","ManglendeOpplysningerForm.SkalBrukeInntekstmelding":"Skal vi bruke denne inntektsmeldingen?","ManglendeOpplysningerForm.TarKontakt":"Jeg kontakter arbeidsgiver","ManglendeOpplysningerForm.GåVidere":"Se bort fra inntektsmeldingen","ManglendeOpplysningerForm.OpprettArbeidsforhold":"Opprett arbeidsforhold basert på inntektsmeldingen","ManglendeOpplysningerForm.Begrunn":"Begrunn valget","ManglendeOpplysningerForm.PeriodeFra":"Periode fra","ManglendeOpplysningerForm.PeriodeTil":"Periode til","ManglendeOpplysningerForm.Stillingsprosent":"Stillingsprosent","ManglendeOpplysningerForm.Lagre":"Lagre","ManglendeOpplysningerForm.Avbryt":"Avbryt","ManglendeOpplysningerForm.AltHjelpetekst":"Hjelpetekst","ManglendeOpplysningerForm.Hjelpetekst":"Det er kun unntaksvis at det skal opprettes manuelle arbeidsforhold basert på en inntektsmelding. Det kan være i saker hvor søker er ambassadepersonell, utenlandske ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i Aa-reg.","ArbeidsforholdInformasjonPanel.ArbeidsforholdId":"ID","ArbeidsforholdInformasjonPanel.Stillingsprosent":"Stillingsprosent","ArbeidsforholdInformasjonPanel.Periode":"Periode","ArbeidsforholdInformasjonPanel.ImMottatt":"Inntektsmelding mottatt","ArbeidsforholdInformasjonPanel.ImIkkeMottatt":"Ikke mottatt inntektsmelding","ArbeidsforholdInformasjonPanel.Inntekter":"Inntekter (fra A-ordningen)","ArbeidsforholdInformasjonPanel.TotaltInntekter":"Inntekter totalt fra virksomheten (fra A-ordningen)","ArbeidsforholdInformasjonPanel.1":"Jan","ArbeidsforholdInformasjonPanel.2":"Feb","ArbeidsforholdInformasjonPanel.3":"Mars","ArbeidsforholdInformasjonPanel.4":"Apr","ArbeidsforholdInformasjonPanel.5":"Mai","ArbeidsforholdInformasjonPanel.6":"Jun","ArbeidsforholdInformasjonPanel.7":"Jul","ArbeidsforholdInformasjonPanel.8":"Aug","ArbeidsforholdInformasjonPanel.9":"Sep","ArbeidsforholdInformasjonPanel.10":"Okt","ArbeidsforholdInformasjonPanel.11":"Nov","ArbeidsforholdInformasjonPanel.12":"Des","ArbeidsforholdInformasjonPanel.TidligereManeder":"Tidligere måneder ","ArbeidsforholdInformasjonPanel.FaerreManeder":"Siste måneder ","ArbeidsforholdInformasjonPanel.IngenInntekt":"Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.","ArbeidsforholdInformasjonPanel.ÅpneInntektsmelding":"Åpne inntektsmelding (PDF)","ArbeidsforholdInformasjonPanel.ApneImInfo":"Vis mer","ArbeidsforholdInformasjonPanel.LukkeImInfo":"Vis mindre","ArbeidsforholdInformasjonPanel.Orgnr":"Org.nr.","ArbeidsforholdInformasjonPanel.Fodselsdato":"Fødselsdato","LeggTilArbeidsforholdForm.LeggTilArbeidsforhold":"Legg til arbeidsforhold","LeggTilArbeidsforholdForm.Arbeidsgiver":"Navn på arbeidsgiver","LeggTilArbeidsforholdForm.PeriodeFra":"Periode fra","LeggTilArbeidsforholdForm.PeriodeTil":"Periode til","LeggTilArbeidsforholdForm.Stillingsprosent":"Stillingsprosent","LeggTilArbeidsforholdForm.Begrunn":"Begrunn endringene","LeggTilArbeidsforholdForm.Lagre":"Lagre","LeggTilArbeidsforholdForm.Avbryt":"Avbryt","LeggTilArbeidsforholdForm.Slett":"Slett","NyttArbeidsforholdForm.VilDuSlette":"Vil du slette arbeidsforholdet?"},bp=Nr(Op),yl=({arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:r,registrerArbeidsforhold:t,lagreVurdering:n,erOverstyrer:a,settBehandlingPåVentCallback:l,åpneForNyVurdering:i})=>T.jsx(Js,{value:bp,children:T.jsx(Xu,{children:T.jsx(td,{arbeidOgInntekt:e,arbeidsgiverOpplysningerPerId:r,registrerArbeidsforhold:t,lagreVurdering:n,erOverstyrer:a,settBehandlingPåVentCallback:l,åpneForNyVurdering:i})})});yl.__docgenInfo={description:"",methods:[],displayName:"ArbeidOgInntektFaktaIndex",props:{arbeidOgInntekt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  inntektsmeldinger: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>;
  arbeidsforhold: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>;
  inntekter: Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>;
  skjæringstidspunkt: string;
}`,signature:{properties:[{key:"inntektsmeldinger",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  inntektPrMnd: number;
  refusjonPrMnd?: number;
  arbeidsgiverIdent: string;
  eksternArbeidsforholdId?: string;
  internArbeidsforholdId?: string;
  kontaktpersonNavn: string;
  kontaktpersonNummer: string;
  journalpostId: string;
  dokumentId: string;
  motattDato: string;
  innsendingstidspunkt: string;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  begrunnelse?: string;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  kildeSystem: string;
  startDatoPermisjon?: string;
  aktiveNaturalytelser: Array<foreldrepenger_domene_iay_modell_NaturalYtelse>;
  refusjonsperioder: Array<foreldrepenger_domene_iay_modell_Refusjon>;
  innsendingsårsak: foreldrepenger_domene_iay_modell_kodeverk_InntektsmeldingInnsendingsårsak;
  tilknyttedeBehandlingIder: Array<string>;
}`,signature:{properties:[{key:"inntektPrMnd",value:{name:"number",required:!0}},{key:"refusjonPrMnd",value:{name:"number",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"kontaktpersonNavn",value:{name:"string",required:!0}},{key:"kontaktpersonNummer",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"dokumentId",value:{name:"string",required:!0}},{key:"motattDato",value:{name:"string",required:!0}},{key:"innsendingstidspunkt",value:{name:"string",required:!0}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"kildeSystem",value:{name:"string",required:!0}},{key:"startDatoPermisjon",value:{name:"string",required:!1}},{key:"aktiveNaturalytelser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periode: foreldrepenger_domene_tid_DatoIntervallEntitet;
  beloepPerMnd: foreldrepenger_domene_typer_Beløp;
  type: foreldrepenger_domene_iay_modell_kodeverk_NaturalYtelseType;
  indexKey?: string;
}`,signature:{properties:[{key:"periode",value:{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}}]},required:!0}},{key:"beloepPerMnd",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}},{key:"type",value:{name:"union",raw:`| 'ELEKTRISK_KOMMUNIKASJON'
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
| '-'`,elements:[{name:"literal",value:"'ELEKTRISK_KOMMUNIKASJON'"},{name:"literal",value:"'AKSJER_UNDERKURS'"},{name:"literal",value:"'LOSJI'"},{name:"literal",value:"'KOST_DOEGN'"},{name:"literal",value:"'BESOEKSREISER_HJEM'"},{name:"literal",value:"'KOSTBESPARELSE_HJEM'"},{name:"literal",value:"'RENTEFORDEL_LAAN'"},{name:"literal",value:"'BIL'"},{name:"literal",value:"'KOST_DAGER'"},{name:"literal",value:"'BOLIG'"},{name:"literal",value:"'FORSIKRINGER'"},{name:"literal",value:"'FRI_TRANSPORT'"},{name:"literal",value:"'OPSJONER'"},{name:"literal",value:"'TILSKUDD_BARNEHAGE'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'BEDRIFTSBARNEHAGE'"},{name:"literal",value:"'YRKESBIL_KILOMETER'"},{name:"literal",value:"'YRKESBIL_LISTEPRIS'"},{name:"literal",value:"'UTENLANDSK_PENSJONSORDNING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"indexKey",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_NaturalYtelse>",required:!0}},{key:"refusjonsperioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  indexKey?: string;
  refusjonsbeløp?: foreldrepenger_domene_typer_Beløp;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"indexKey",value:{name:"string",required:!1}},{key:"refusjonsbeløp",value:{name:"signature",type:"object",raw:`{
  verdi?: number;
  indexKey?: string;
}`,signature:{properties:[{key:"verdi",value:{name:"number",required:!1}},{key:"indexKey",value:{name:"string",required:!1}}]},required:!1}}]}}],raw:"Array<foreldrepenger_domene_iay_modell_Refusjon>",required:!0}},{key:"innsendingsårsak",value:{name:"union",raw:"'NY' | 'ENDRING' | '-'",elements:[{name:"literal",value:"'NY'"},{name:"literal",value:"'ENDRING'"},{name:"literal",value:"'-'"}],required:!0}},{key:"tilknyttedeBehandlingIder",value:{name:"Array",elements:[{name:"string"}],raw:"Array<string>",required:!0}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektsmeldingDto>",required:!0}},{key:"arbeidsforhold",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverIdent: string;
  internArbeidsforholdId?: string;
  eksternArbeidsforholdId?: string;
  fom: string;
  tom: string;
  stillingsprosent?: number;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  saksbehandlersVurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  permisjonOgMangel?: foreldrepenger_domene_arbeidInntektsmelding_dto_PermisjonOgMangelDto;
  begrunnelse?: string;
}`,signature:{properties:[{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdId",value:{name:"string",required:!1}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"stillingsprosent",value:{name:"number",required:!1}},{key:"årsak",value:{name:"union",raw:`| 'PERMISJON'
| 'MANGLENDE_INNTEKTSMELDING'
| 'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'
| 'ENDRING_I_ARBEIDSFORHOLDS_ID'
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"saksbehandlersVurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"permisjonOgMangel",value:{name:"signature",type:"object",raw:`{
  permisjonFom: string;
  permisjonTom?: string;
  type: foreldrepenger_domene_iay_modell_kodeverk_PermisjonsbeskrivelseType;
  årsak?: foreldrepenger_domene_arbeidsforhold_impl_AksjonspunktÅrsak;
  permisjonStatus?: foreldrepenger_domene_iay_modell_kodeverk_BekreftetPermisjonStatus;
}`,signature:{properties:[{key:"permisjonFom",value:{name:"string",required:!0}},{key:"permisjonTom",value:{name:"string",required:!1}},{key:"type",value:{name:"union",raw:`| '-'
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
| 'PERMISJON_UTEN_SLUTTDATO'`,elements:[{name:"literal",value:"'PERMISJON'"},{name:"literal",value:"'MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD'"},{name:"literal",value:"'ENDRING_I_ARBEIDSFORHOLDS_ID'"},{name:"literal",value:"'PERMISJON_UTEN_SLUTTDATO'"}],required:!1}},{key:"permisjonStatus",value:{name:"union",raw:`| '-'
| 'BRUK_PERMISJON'
| 'IKKE_BRUK_PERMISJON'
| 'UGYLDIGE_PERIODER'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'BRUK_PERMISJON'"},{name:"literal",value:"'IKKE_BRUK_PERMISJON'"},{name:"literal",value:"'UGYLDIGE_PERIODER'"}],required:!1}}]},required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_ArbeidsforholdDto>",required:!0}},{key:"inntekter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| 'NÆRING_FISKE_FANGST_FAMBARNEHAGE'`,elements:[{name:"literal",value:"'-'"},{name:"literal",value:"'LØNN'"},{name:"literal",value:"'YTELSE'"},{name:"literal",value:"'VANLIG'"},{name:"literal",value:"'SELVSTENDIG_NÆRINGSDRIVENDE'"},{name:"literal",value:"'NÆRING_FISKE_FANGST_FAMBARNEHAGE'"}],required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektspostDto>",required:!1}}]}}],raw:"Array<foreldrepenger_domene_arbeidInntektsmelding_dto_InntektDto>",required:!0}},{key:"skjæringstidspunkt",value:{name:"string",required:!0}}]}},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},registrerArbeidsforhold:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManueltArbeidsforhold) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  begrunnelse?: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  arbeidsgiverNavn?: string;
  fom: string;
  tom?: string;
  stillingsprosent: number;
  vurdering: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  behandlingVersjon: number;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"arbeidsgiverNavn",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!1}},{key:"stillingsprosent",value:{name:"number",required:!0}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!0}},{key:"behandlingVersjon",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},lagreVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: ManglendeInntektsmeldingVurdering) => Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  behandlingUuid: string;
  vurdering?: foreldrepenger_behandlingslager_behandling_arbeidsforhold_ArbeidsforholdKomplettVurderingType;
  begrunnelse?: string;
  arbeidsgiverIdent: string;
  internArbeidsforholdRef?: string;
  behandlingVersjon: number;
}`,signature:{properties:[{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"vurdering",value:{name:"union",raw:`| 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'
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
| '-'`,elements:[{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING'"},{name:"literal",value:"'FORTSETT_UTEN_INNTEKTSMELDING'"},{name:"literal",value:"'MELDING_TIL_ARBEIDSGIVER_NAV_NO'"},{name:"literal",value:"'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD'"},{name:"literal",value:"'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'OPPRETT_BASERT_PÅ_INNTEKTSMELDING'"},{name:"literal",value:"'MANUELT_OPPRETTET_AV_SAKSBEHANDLER'"},{name:"literal",value:"'FJERN_FRA_BEHANDLINGEN'"},{name:"literal",value:"'SLÅTT_SAMMEN_MED_ANNET'"},{name:"literal",value:"'BRUK_MED_OVERSTYRT_PERIODE'"},{name:"literal",value:"'INNTEKT_IKKE_MED_I_BG'"},{name:"literal",value:"'BRUK'"},{name:"literal",value:"'NYTT_ARBEIDSFORHOLD'"},{name:"literal",value:"'-'"}],required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"arbeidsgiverIdent",value:{name:"string",required:!0}},{key:"internArbeidsforholdRef",value:{name:"string",required:!1}},{key:"behandlingVersjon",value:{name:"number",required:!0}}]}},name:"params"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:""},erOverstyrer:{required:!0,tsType:{name:"boolean"},description:""},settBehandlingPåVentCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { frist?: string; ventearsak: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ frist?: string; ventearsak: string }",signature:{properties:[{key:"frist",value:{name:"string",required:!1}},{key:"ventearsak",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},åpneForNyVurdering:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:wt}=__STORYBOOK_MODULE_ACTIONS__,Vn="342352362",Ze={innsendingstidspunkt:"2021-12-06T00:00:00",kildeSystem:"Altinn",bortfalteNaturalytelser:[],refusjonsperioder:[],innsendingsårsak:"NY",behandlingsIdeer:[],tilknyttedeBehandlingIder:[],aktiveNaturalytelser:[]},Pe={arbeidsgiverIdent:Vn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31"},Kp={title:"fakta/fakta-arbeid-og-inntekter",component:yl,decorators:[Nd,Td],args:{arbeidsgiverOpplysningerPerId:{},lagreVurdering:wt("onLagreVurdering"),registrerArbeidsforhold:wt("onRegistrerArbeidsforhold"),åpneForNyVurdering:wt("onÅpneForNyVurdering"),settBehandlingPåVentCallback:wt("onSettBehandlingPåVentCallback"),erOverstyrer:!1},render:e=>T.jsx(yl,{...e})},Vt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Pe,arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ve.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:hr.VELFERDSPERMISJON}}],inntektsmeldinger:[],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:41e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},jt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Pe,arbeidsgiverIdent:"910909088",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",tom:"9999-12-31",stillingsprosent:100,årsak:Ve.MANGLENDE_INNTEKTSMELDING}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},qt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Pe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:Ee.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING,begrunnelse:"Vil innehente inntektsmelding fordi..."}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},Ut={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[{...Ze,inntektPrMnd:3e4,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},xt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Pe,arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!0}},Ht={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.UTFORT}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Pe,arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:Ee.OPPRETT_BASERT_PÅ_INNTEKTSMELDING,begrunnelse:"Jeg opprettet arbeidsforhold fordi..."}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},Jt={args:{aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Pe,arbeidsgiverIdent:"910909088",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",eksternArbeidsforholdId:"ARB001-001",fom:"2021-10-06",tom:"2021-12-12",stillingsprosent:100,saksbehandlersVurdering:"KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING"}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",journalpostId:"1",dokumentId:"2"}],inntekter:[],skjæringstidspunkt:"2021-11-10"},isReadOnly:!1,erOverstyrer:!0}},Yt={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{},arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},Ct={args:{arbeidOgInntekt:{arbeidsforhold:[],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"}}},$t={args:{aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{[Vn]:{erPrivatPerson:!1,identifikator:Vn,navn:"Telenor",referanse:Vn}},arbeidOgInntekt:{arbeidsforhold:[{...Pe,arbeidsgiverIdent:Vn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0}},Wt={args:{arbeidsgiverOpplysningerPerId:{[Vn]:{erPrivatPerson:!1,identifikator:Vn,navn:"Telenor",referanse:Vn}},arbeidOgInntekt:{arbeidsforhold:[{...Pe,...Pe,arbeidsgiverIdent:Vn,fom:"2019-12-06",stillingsprosent:100,tom:"2022-12-31",begrunnelse:"Dette er en begrunnelse",saksbehandlersVurdering:Ee.MANUELT_OPPRETTET_AV_SAKSBEHANDLER}],inntektsmeldinger:[],inntekter:[],skjæringstidspunkt:"2021-11-10"},erOverstyrer:!0,isReadOnly:!0}},zt={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Pe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:hr.VELFERDSPERMISJON}}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Xt={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Pe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31"},{...Pe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",fom:"2021-12-01",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",stillingsprosent:80,tom:"9999-12-31"}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-002",inntektPrMnd:1e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa85",kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"41925090",motattDato:"2021-11-06",journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Qt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"},910909092:{erPrivatPerson:!1,identifikator:"910909092",navn:"DNB",referanse:"910909092"}},arbeidOgInntekt:{arbeidsforhold:[{...Pe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31"},{...Pe,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-002",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"},{...Ze,arbeidsgiverIdent:"910909092",inntektPrMnd:1e4,kontaktpersonNavn:"Espen Utvikler",kontaktpersonNummer:"55599999",motattDato:"2021-12-06",refusjonPrMnd:5e3,journalpostId:"1",dokumentId:"2",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]},{arbeidsgiverIdent:"910909090",inntekter:[{beløp:3e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:31e3,fom:"2021-07-01",tom:"2021-07-31",type:"LØNN"},{beløp:3e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:3e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:3e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},Zt={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{...Pe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"9374546382674846453452720241327384837356378478393893847474783",fom:"2019-12-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75c",stillingsprosent:100,tom:"9999-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING},{...Pe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING}],inntektsmeldinger:[{...Ze,inntektPrMnd:3e4,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001sdsfdsdfsdfwer",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8cwds",kontaktpersonNavn:"Espen Solstråle",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"1",motattDato:"2021-12-01",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD},{...Ze,inntektPrMnd:3e4,arbeidsgiverIdent:"910909090",eksternArbeidsforholdId:"ARB001-001",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c8wew",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06",årsak:Ve.INNTEKTSMELDING_UTEN_ARBEIDSFORHOLD}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},ea={args:{erOverstyrer:!0,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!1,identifikator:"910909088",navn:"BEDRIFT AS",referanse:"910909088"},910909090:{erPrivatPerson:!1,identifikator:"910909090",navn:"Autoservice AS",referanse:"910909090"}},arbeidOgInntekt:{arbeidsforhold:[{...Pe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",stillingsprosent:80,tom:"2021-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",type:hr.PERMITTERING}},{arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"937454638267484645345272024132738483735636363535424253y4847478465423hdydt36378478393893847474783",fom:"2019-06-06",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d3",stillingsprosent:80,tom:"2021-12-31",årsak:Ve.MANGLENDE_INNTEKTSMELDING,permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:hr.VELFERDSPERMISJON},saksbehandlersVurdering:"-"}],inntektsmeldinger:[{...Ze,inntektPrMnd:3e4,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"2433453225",internArbeidsforholdId:"bc9a409c-a15f-4416-856b-5b1ee42eb75d",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",journalpostId:"1",dokumentId:"2",motattDato:"2021-12-06"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"},{beløp:4e4,fom:"2020-07-01",tom:"2020-07-31",type:"LØNN"},{beløp:4e4,fom:"2020-08-01",tom:"2020-08-31",type:"LØNN"},{beløp:4e4,fom:"2020-09-01",tom:"2020-09-30",type:"LØNN"},{beløp:4e4,fom:"2021-11-01",tom:"2021-11-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}},na={args:{erOverstyrer:!0,isReadOnly:!0,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[{...Ze,inntektPrMnd:4e4,arbeidsgiverIdent:"947064649",kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975324",dokumentId:"549168225",motattDato:"2022-02-15"}],arbeidsforhold:[],inntekter:[],skjæringstidspunkt:"2022-02-16"}}},ra={args:{erOverstyrer:!1,aksjonspunkterForPanel:[],arbeidsgiverOpplysningerPerId:{947064649:{erPrivatPerson:!1,identifikator:"947064649",navn:"BEDRIFT AS",referanse:"947064649"}},arbeidOgInntekt:{inntektsmeldinger:[],arbeidsforhold:[{...Pe,arbeidsgiverIdent:"947064649",internArbeidsforholdId:"f98840f3-e74b-4255-ac33-b1cdcdb60311",eksternArbeidsforholdId:"2",fom:"2002-02-16",tom:"9999-12-31",stillingsprosent:20}],inntekter:[],skjæringstidspunkt:"2022-02-05"}}},ta={args:{erOverstyrer:!1,aksjonspunkterForPanel:[{definisjon:tn.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING,status:Ce.OPPRETTET}],arbeidsgiverOpplysningerPerId:{342352362:{erPrivatPerson:!1,referanse:"342352362",identifikator:"342352362",navn:"Lagt til av saksbehandler"},947064649:{erPrivatPerson:!1,referanse:"947064649",identifikator:"947064649",navn:"SJOKKERENDE ELEKTRIKER"},972674818:{erPrivatPerson:!1,referanse:"972674818",identifikator:"972674818",navn:"PENGELØS SPAREBANK"}},arbeidOgInntekt:{inntektsmeldinger:[{...Ze,inntektPrMnd:2e4,arbeidsgiverIdent:"972674818",kontaktpersonNavn:"Dolly Dollesen",kontaktpersonNummer:"99999999",journalpostId:"524975527",dokumentId:"549168458",motattDato:"2022-02-16",begrunnelse:"her vil jeg mase på AG",saksbehandlersVurdering:Ee.KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING}],arbeidsforhold:[{...Pe,arbeidsgiverIdent:"947064649",internArbeidsforholdId:"6e220db0-5cdf-410f-b8a0-a78ac4ff87a1",eksternArbeidsforholdId:"2",fom:"2018-10-01",tom:"9999-12-31",stillingsprosent:50,årsak:Ve.MANGLENDE_INNTEKTSMELDING,saksbehandlersVurdering:Ee.FORTSETT_UTEN_INNTEKTSMELDING,begrunnelse:"her trenger jeg ikke IM. ja ja"},{...Pe,arbeidsgiverIdent:"972674818",internArbeidsforholdId:"3aee54db-af17-4b18-8c9c-897be1f4d572",eksternArbeidsforholdId:"1",fom:"2000-05-13",tom:"9999-12-31"}],inntekter:[{arbeidsgiverIdent:"947064649",inntekter:[{beløp:15e3,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]},{arbeidsgiverIdent:"972674818",inntekter:[{beløp:2e4,fom:"2021-10-01",tom:"2021-02-28",type:"LØNN"}]}],skjæringstidspunkt:"2022-02-15"}}},aa={args:{arbeidsgiverOpplysningerPerId:{910909088:{erPrivatPerson:!0,fødselsdato:"2000-01-01",identifikator:"910909088",navn:"Bettan",referanse:"910909088"}},arbeidOgInntekt:{arbeidsforhold:[{...Pe,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",fom:"2019-12-06",internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",stillingsprosent:100,tom:"9999-12-31",permisjonOgMangel:{permisjonFom:"2022-10-01",permisjonTom:"2022-12-01",type:hr.VELFERDSPERMISJON}}],inntektsmeldinger:[{...Ze,arbeidsgiverIdent:"910909088",eksternArbeidsforholdId:"ARB001-001",inntektPrMnd:3e4,internArbeidsforholdId:"8ff2c608-6bab-4f83-9732-d26f8c89aa84",kontaktpersonNavn:"Corpolarsen",kontaktpersonNummer:"41925090",motattDato:"2021-12-06",refusjonPrMnd:2e4,journalpostId:"1",dokumentId:"2"}],inntekter:[{arbeidsgiverIdent:"910909088",inntekter:[{beløp:4e4,fom:"2020-06-01",tom:"2020-06-30",type:"LØNN"}]}],skjæringstidspunkt:"2021-11-10"}}};Vt.parameters={...Vt.parameters,docs:{...Vt.parameters?.docs,source:{originalSource:`{
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
}`,...Vt.parameters?.docs?.source}}};jt.parameters={...jt.parameters,docs:{...jt.parameters?.docs,source:{originalSource:`{
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
}`,...jt.parameters?.docs?.source}}};qt.parameters={...qt.parameters,docs:{...qt.parameters?.docs,source:{originalSource:`{
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
}`,...qt.parameters?.docs?.source}}};Ut.parameters={...Ut.parameters,docs:{...Ut.parameters?.docs,source:{originalSource:`{
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
}`,...Ut.parameters?.docs?.source}}};xt.parameters={...xt.parameters,docs:{...xt.parameters?.docs,source:{originalSource:`{
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
}`,...xt.parameters?.docs?.source}}};Ht.parameters={...Ht.parameters,docs:{...Ht.parameters?.docs,source:{originalSource:`{
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
}`,...Ht.parameters?.docs?.source}}};Jt.parameters={...Jt.parameters,docs:{...Jt.parameters?.docs,source:{originalSource:`{
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
}`,...Jt.parameters?.docs?.source}}};Yt.parameters={...Yt.parameters,docs:{...Yt.parameters?.docs,source:{originalSource:`{
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
}`,...Yt.parameters?.docs?.source}}};Ct.parameters={...Ct.parameters,docs:{...Ct.parameters?.docs,source:{originalSource:`{
  args: {
    arbeidOgInntekt: {
      arbeidsforhold: [],
      inntektsmeldinger: [],
      inntekter: [],
      skjæringstidspunkt: '2021-11-10'
    }
  }
}`,...Ct.parameters?.docs?.source}}};$t.parameters={...$t.parameters,docs:{...$t.parameters?.docs,source:{originalSource:`{
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
}`,...zt.parameters?.docs?.source}}};Xt.parameters={...Xt.parameters,docs:{...Xt.parameters?.docs,source:{originalSource:`{
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
}`,...Zt.parameters?.docs?.source}}};ea.parameters={...ea.parameters,docs:{...ea.parameters?.docs,source:{originalSource:`{
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
}`,...ea.parameters?.docs?.source}}};na.parameters={...na.parameters,docs:{...na.parameters?.docs,source:{originalSource:`{
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
}`,...na.parameters?.docs?.source}}};ra.parameters={...ra.parameters,docs:{...ra.parameters?.docs,source:{originalSource:`{
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
}`,...ra.parameters?.docs?.source}}};ta.parameters={...ta.parameters,docs:{...ta.parameters?.docs,source:{originalSource:`{
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
}`,...ta.parameters?.docs?.source}}};aa.parameters={...aa.parameters,docs:{...aa.parameters?.docs,source:{originalSource:`{
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
}`,...aa.parameters?.docs?.source}}};const Pp=["InnhentInntektsmelding","InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret","InnhentInntektsmeldingDerBehandlingErAvsluttet","AvklarManglendeArbeidsforhold","AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet","AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig","IngenAksjonspunktMenTilbakehoppMuligForOverstyrer","SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer","SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer","ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet","ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet","ArbeidsforholdErOK","ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet","FlereArbeidsforholdOgInntekstemeldinger","ArbeidsforholdMedSammeOrgNr","ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre","FoerRegisterinnhenting","AutomatiskIgnorertInntektsmelding","EtterAtEtterspurtInntektsmeldingErKommet","SkalViseFødselsnummerForPrivatperson"];export{Wt as ArbeidsforholdErManueltLagtTilOgBehandlingErAvsluttet,$t as ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet,zt as ArbeidsforholdErOK,Xt as ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet,Zt as ArbeidsforholdMedSammeOrgNr,ea as ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre,ra as AutomatiskIgnorertInntektsmelding,Ut as AvklarManglendeArbeidsforhold,xt as AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet,Ht as AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig,ta as EtterAtEtterspurtInntektsmeldingErKommet,Qt as FlereArbeidsforholdOgInntekstemeldinger,na as FoerRegisterinnhenting,Jt as IngenAksjonspunktMenTilbakehoppMuligForOverstyrer,Vt as InnhentInntektsmelding,qt as InnhentInntektsmeldingDerBehandlingErAvsluttet,jt as InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret,Ct as SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer,Yt as SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer,aa as SkalViseFødselsnummerForPrivatperson,Pp as __namedExportsOrder,Kp as default};
