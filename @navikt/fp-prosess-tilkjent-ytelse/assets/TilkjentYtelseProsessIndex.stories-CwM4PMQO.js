import{r as g,u as Or,_ as Hr,s as $r,c as Ct,a as H,b as w,d as Xe,R as Gt,j as p,S as Wn,e as Ut,o as vn,f as mn,k as ys,X as bs,g as sn,F as hs,h as Ts,P as Rs,w as ws,A as Yt}from"./iframe-BzLVUPgZ.js";import{r as Es}from"./index-B_wW57Ix.js";import"./preload-helper-D9Z9MdNV.js";var As=Es();function Os(e,r){var t=e.values,n=Hr(e,["values"]),a=r.values,s=Hr(r,["values"]);return $r(a,t)&&$r(n,s)}function Ht(e){var r=Or(),t=r.formatMessage,n=r.textComponent,a=n===void 0?g.Fragment:n,s=e.id,i=e.description,l=e.defaultMessage,o=e.values,u=e.children,d=e.tagName,m=d===void 0?a:d,f=e.ignoreTag,c={id:s,description:i,defaultMessage:l},v=t(c,o,{ignoreTag:f});return typeof u=="function"?u(Array.isArray(v)?v:[v]):m?g.createElement(m,null,v):g.createElement(g.Fragment,null,v)}Ht.displayName="FormattedMessage";var J=g.memo(Ht,Os);J.displayName="MemoizedFormattedMessage";var zn=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(zn||{}),Te=(e=>(e.MIDLERTIDIG_INAKTIV="MIDL_INAKTIV",e.KUN_YTELSE="KUN_YTELSE",e.ARBEIDSTAKER="AT",e.FRILANSER="FL",e.SELVSTENDIG_NAERINGSDRIVENDE="SN",e.KOMBINERT_AT_FL="AT_FL",e.KOMBINERT_AT_SN="AT_SN",e.KOMBINERT_FL_SN="FL_SN",e.KOMBINERT_AT_FL_SN="AT_FL_SN",e.DAGPENGER="DP",e.ARBEIDSAVKLARINGSPENGER="AAP",e.SYKEPENGER_AV_DAGPENGER="SP_AV_DP",e.PLEIEPENGER_AV_DAGPENGER="PSB_AV_DP",e.MILITAER_ELLER_SIVIL="MS",e.BRUKERS_ANDEL="BA",e.UDEFINERT="-",e))(Te||{}),$t=(e=>(e.UDEFINERT="UDEFINERT",e.BRUK="BRUK",e.NYTT_ARBEIDSFORHOLD="NYTT_ARBEIDSFORHOLD",e.BRUK_UTEN_INNTEKTSMELDING="BRUK_UTEN_INNTEKTSMELDING",e.IKKE_BRUK="IKKE_BRUK",e.SLÅTT_SAMMEN_MED_ANNET="SLÅTT_SAMMEN_MED_ANNET",e.LAGT_TIL_AV_SAKSBEHANDLER="LAGT_TIL_AV_SAKSBEHANDLER",e.BRUK_MED_OVERSTYRT_PERIODE="BRUK_MED_OVERSTYRT_PERIODE",e.INNTEKT_IKKE_MED_I_BG="INNTEKT_IKKE_MED_I_BG",e))($t||{}),Wt=(e=>(e.KVINNE="K",e.MANN="M",e.UDEFINERT="-",e))(Wt||{}),zt=(e=>(e.ARBEID="ARBEID",e.AAP="AAP",e.DAGPENGER="DAGPENGER",e.FORELDREPENGER="FORELDREPENGER",e.FRILANS="FRILANS",e.MILITAR_ELLER_SIVILTJENESTE="MILITÆR_ELLER_SIVILTJENESTE",e.NARING="NÆRING",e.OMSORGSPENGER="OMSORGSPENGER",e.OPPLARINGSPENGER="OPPLÆRINGSPENGER",e.PLEIEPENGER="PLEIEPENGER",e.SVANGERSKAPSPENGER="SVANGERSKAPSPENGER",e.SYKEPENGER="SYKEPENGER",e.VARTPENGER="VARTPENGER",e.VIDERE_ETTERUTDANNING="VIDERE_ETTERUTDANNING",e.UTENLANDSK_ARBEIDSFORHOLD="UTENLANDSK_ARBEIDSFORHOLD",e.VENTELØNN_VARTPENGER="VENTELØNN_VARTPENGER",e.ETTERLONN_SLUTTPAKKE="ETTERLØNN_SLUTTPAKKE",e))(zt||{}),Tn=(e=>(e.FODSEL="ST-001",e.ADOPSJON="ST-002",e))(Tn||{}),vr=(e=>(e.FELLESPERIODE="FELLESPERIODE",e.MØDREKVOTE="MØDREKVOTE",e.FEDREKVOTE="FEDREKVOTE",e.FORELDREPENGER="FORELDREPENGER",e.UTEN_AKTIVITETSKRAV="UTEN_AKTIVITETSKRAV",e.MINSTERETT_NESTE_STØNADSPERIODE="MINSTERETT_NESTE_STØNADSPERIODE",e.MINSTERETT="MINSTERETT",e.FLERBARNSDAGER="FLERBARNSDAGER",e.FORELDREPENGER_FØR_FØDSEL="FORELDREPENGER_FØR_FØDSEL",e.UDEFINERT="-",e))(vr||{});const cn=e=>Ct({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var Ss=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const js=g.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:s,truncate:i,weight:l="regular",align:o,visuallyHidden:u,textColor:d}=e,m=Ss(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:f}=H();return w.createElement(a,Object.assign({},m,{ref:r,className:f(t,"navds-body-long",`navds-body-long--${n}`,cn({spacing:s,truncate:i,weight:l,align:o,visuallyHidden:u,textColor:d}))}))});var Ps=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const de=g.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="p",spacing:s,truncate:i,weight:l="regular",align:o,visuallyHidden:u,textColor:d}=e,m=Ps(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:f}=H();return w.createElement(a,Object.assign({},m,{ref:r,className:f(t,"navds-body-short",`navds-body-short--${n}`,cn({spacing:s,truncate:i,weight:l,align:o,visuallyHidden:u,textColor:d}))}))});var qs=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Jt=g.forwardRef((e,r)=>{var{className:t,size:n="medium",spacing:a,uppercase:s,as:i="p",truncate:l,weight:o="regular",align:u,visuallyHidden:d,textColor:m}=e,f=qs(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:c}=H();return w.createElement(i,Object.assign({},f,{ref:r,className:c(t,"navds-detail",cn({spacing:a,truncate:l,weight:o,align:u,visuallyHidden:d,textColor:m,uppercase:s}),{"navds-detail--small":n==="small"})}))});var _s=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};g.forwardRef((e,r)=>{var{children:t,className:n,size:a,spacing:s,as:i="p",showIcon:l=!1}=e,o=_s(e,["children","className","size","spacing","as","showIcon"]);const{cn:u}=H();return w.createElement(i,Object.assign({},o,{ref:r,className:u("navds-error-message","navds-label",n,cn({spacing:s}),{"navds-label--small":a==="small","navds-error-message--show-icon":l})}),l&&w.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},w.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var Ns=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Sr=g.forwardRef((e,r)=>{var{level:t="1",size:n,className:a,as:s,spacing:i,align:l,visuallyHidden:o,textColor:u}=e,d=Ns(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:m}=H(),f=s??`h${t}`;return w.createElement(f,Object.assign({},d,{ref:r,className:m(a,"navds-heading",`navds-heading--${n}`,cn({spacing:i,align:l,visuallyHidden:o,textColor:u}))}))});var Fs=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};g.forwardRef((e,r)=>{var{className:t,spacing:n,as:a="p"}=e,s=Fs(e,["className","spacing","as"]);const{cn:i}=H();return w.createElement(a,Object.assign({},s,{ref:r,className:i(t,"navds-ingress",{"navds-typo--spacing":!!n})}))});var xs=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const yn=g.forwardRef((e,r)=>{var{className:t,size:n="medium",as:a="label",spacing:s,visuallyHidden:i,textColor:l}=e,o=xs(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:u}=H();return w.createElement(a,Object.assign({},o,{ref:r,className:u(t,"navds-label",cn({spacing:s,visuallyHidden:i,textColor:l}),{"navds-label--small":n==="small"})}))});function _e(e,r){const t=Object.entries(e).filter(([n])=>!r.includes(n));return Object.fromEntries(t)}let Wr=0;function Ds(e){const[r,t]=g.useState(e),n=e||r;return g.useEffect(()=>{r==null&&(Wr+=1,t(`aksel-id-${Wr}`))},[r]),n}const zr=w.useId;function Xt(e){var r;return zr!==void 0?zr().replace(/(:)/g,""):(r=Ds(e))!==null&&r!==void 0?r:""}function Jr(e,r=[]){const t=g.useRef(e);return g.useEffect(()=>{t.current=e}),g.useCallback((...n)=>{var a;return(a=t.current)===null||a===void 0?void 0:a.call(t,...n)},r)}function Qt({value:e,defaultValue:r,onChange:t}){const n=Jr(t),[a,s]=g.useState(r),i=e!==void 0,l=i?e:a,o=Jr(u=>{const m=typeof u=="function"?u(l):u;i||s(m),n(m)},[i,n,l]);return[l,o]}const jr=g.createContext({headingSize:"small",size:"medium",openItems:[],mounted:!1});var Is=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Pr=g.createContext(null),Bs=g.forwardRef((e,r)=>{var{children:t,className:n,open:a,defaultOpen:s=!1,onOpenChange:i}=e,l=Is(e,["children","className","open","defaultOpen","onOpenChange"]);const[o,u]=Qt({defaultValue:s,value:a,onChange:i}),d=g.useContext(jr),{cn:m}=H(),f=g.useRef(!(a||s)),c=()=>{u(v=>!v),f.current=!0};return d?.mounted||console.error("<Accordion.Item> has to be used within an <Accordion>"),w.createElement("div",Object.assign({className:m("navds-accordion__item",n,{"navds-accordion__item--open":o,"navds-accordion__item--neutral":d?.variant==="neutral","navds-accordion__item--no-animation":!f.current}),"data-expanded":o,ref:r},_e(l,["onClick"])),w.createElement(Pr.Provider,{value:{open:o,toggleOpen:c}},t))});var Ms=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Vs=g.forwardRef((e,r)=>{var{children:t,className:n}=e,a=Ms(e,["children","className"]);const s=g.useContext(Pr),i=Xe(!1),{cn:l}=H();return s===null?(console.error("<Accordion.Content> has to be used within an <Accordion.Item>"),null):w.createElement(js,Object.assign({},a,{as:"div",ref:r,className:l("navds-accordion__content",{"navds-accordion__content--closed":!s.open},n),"aria-hidden":!s.open||void 0}),i?w.createElement("div",{className:l("navds-accordion__content-inner")},t):t)});let Xr=0;function Ls(e){const[r,t]=g.useState(e),n=e||r;return g.useEffect(()=>{r==null&&(Xr+=1,t(`aksel-icon-${Xr}`))},[r]),n}const Qr=w.useId;function pe(e){var r;return Qr!==void 0?Qr().replace(/(:)/g,""):(r=Ls(e))!==null&&r!==void 0?r:""}var Ks=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Zt=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ks(e,["title","titleId"]);let s=pe();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",d:"M8.97 6.97a.75.75 0 1 1 1.06 1.06l-3.22 3.22H19a.75.75 0 0 1 0 1.5H6.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06z"}))});var Cs=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ea=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Cs(e,["title","titleId"]);let s=pe();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",d:"M14.087 6.873a.75.75 0 0 1 .943.097l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H5a.75.75 0 0 1-.75-.74V12a.75.75 0 0 1 .75-.75h12.19l-3.22-3.22a.75.75 0 0 1 .117-1.157"}))});var Gs=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Us=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Gs(e,["title","titleId"]);let s=pe();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16.47 21.03a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 1 0-1.06-1.06l-2.22 2.22V9.5a.75.75 0 0 0-1.5 0v9.19l-2.22-2.22a.75.75 0 1 0-1.06 1.06zM4.03 7.53l2.22-2.22v9.19a.75.75 0 0 0 1.5 0V5.31l2.22 2.22a.75.75 0 1 0 1.06-1.06l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06",clipRule:"evenodd"}))});var Ys=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Hs=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ys(e,["title","titleId"]);let s=pe();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m4.573 7.234a.75.75 0 1 0-1.146-.968l-4.973 5.877L8.03 11.97a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.102-.046z",clipRule:"evenodd"}))});var $s=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const na=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=$s(e,["title","titleId"]);let s=pe();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Ws=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const zs=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Ws(e,["title","titleId"]);let s=pe();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.557 9.411a1.75 1.75 0 0 1 1.648-1.161h3.59c.74 0 1.4.465 1.648 1.161l2.263 6.337A.75.75 0 0 1 17 16.75h-2.75V21a.75.75 0 0 1-1.5 0v-4.25h-1.5V21a.75.75 0 0 1-1.5 0v-4.25H7a.75.75 0 0 1-.706-1.002z",clipRule:"evenodd"}))});var Js=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Xs=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Js(e,["title","titleId"]);let s=pe();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.75 12a.75.75 0 0 1 .75-.75h13a.75.75 0 1 1 0 1.5h-13a.75.75 0 0 1-.75-.75",clipRule:"evenodd"}))});var Qs=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Zs=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=Qs(e,["title","titleId"]);let s=pe();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.998 6.75a1.248 1.248 0 1 0 0 2.495 1.248 1.248 0 0 0 0-2.495M5.25 7.998a2.748 2.748 0 1 1 5.495 0 2.748 2.748 0 0 1-5.495 0m.22 10.532a.75.75 0 0 1 0-1.06l12-12a.75.75 0 1 1 1.06 1.06l-12 12a.75.75 0 0 1-1.06 0m9.28-2.532a1.248 1.248 0 1 1 2.495 0 1.248 1.248 0 0 1-2.495 0m1.248-2.748a2.748 2.748 0 1 0 0 5.495 2.748 2.748 0 0 0 0-5.495",clipRule:"evenodd"}))});var ei=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ni=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ei(e,["title","titleId"]);let s=pe();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});var ri=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ti=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ri(e,["title","titleId"]);let s=pe();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",d:"M12.75 5.5a.75.75 0 0 0-1.5 0v5.75H5.5a.75.75 0 0 0 0 1.5h5.75v5.75a.75.75 0 0 0 1.5 0v-5.75h5.75a.75.75 0 0 0 0-1.5h-5.75z"}))});var ai=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const si=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ai(e,["title","titleId"]);let s=pe();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.25 9A.75.75 0 0 1 9 8.25h6a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75h-.75V21a.75.75 0 0 1-1.5 0v-4.25h-1.5V21a.75.75 0 0 1-1.5 0v-4.25H9a.75.75 0 0 1-.75-.75z",clipRule:"evenodd"}))});var ii=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const li=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=ii(e,["title","titleId"]);let s=pe();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 18.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V6a.75.75 0 0 1 1.5 0v10.19l2.22-2.22a.75.75 0 1 1 1.06 1.06zM2.75 6.25a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM2 17a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 17",clipRule:"evenodd"}))});var oi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ui=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=oi(e,["title","titleId"]);let s=pe();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M18.03 5.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06l2.22-2.22V18a.75.75 0 0 0 1.5 0V7.81l2.22 2.22a.75.75 0 1 0 1.06-1.06zM2.75 17.75a.75.75 0 0 1 0-1.5h9.5a.75.75 0 0 1 0 1.5zm0-5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5zM2 7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5A.75.75 0 0 0 2 7",clipRule:"evenodd"}))});var di=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const gi=g.forwardRef((e,r)=>{var{title:t,titleId:n}=e,a=di(e,["title","titleId"]);let s=pe();return s=t?n||"title-"+s:void 0,g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":s},a),t?g.createElement("title",{id:s},t):null,g.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))});function qr(e,r,{checkForDefaultPrevented:t=!0}={}){return function(a){if(e?.(a),t===!1||!a.defaultPrevented)return r?.(a)}}var mi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ci=g.forwardRef((e,r)=>{var t,{children:n,className:a,onClick:s}=e,i=mi(e,["children","className","onClick"]);const l=g.useContext(Pr),o=g.useContext(jr),u=Xe(!1),{cn:d}=H();if(l===null)return console.error("<Accordion.Header> has to be used within an <Accordion.Item>, which in turn must be within an <Accordion>"),null;let m=(t=o?.headingSize)!==null&&t!==void 0?t:"small";return u&&(m=o?.size==="small"?"xsmall":"small"),w.createElement("button",Object.assign({ref:r},i,{className:d("navds-accordion__header",a),onClick:qr(s,l.toggleOpen),"aria-expanded":l.open,type:"button"}),w.createElement("span",{className:d("navds-accordion__icon-wrapper")},w.createElement(na,{className:d("navds-accordion__header-chevron"),"aria-hidden":!0})),w.createElement(Sr,{size:m,as:"span",className:d("navds-accordion__header-content")},n))});var fi=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ye=g.forwardRef((e,r)=>{var{className:t,variant:n="default",headingSize:a="small",size:s="medium",indent:i=!0}=e,l=fi(e,["className","variant","headingSize","size","indent"]);const{cn:o}=H();return w.createElement(jr.Provider,{value:{variant:n,headingSize:a,size:s,mounted:!0}},w.createElement("div",Object.assign({},l,{className:o("navds-accordion",t,`navds-accordion--${s}`,{"navds-accordion--indent":i}),ref:r})))});Ye.Header=ci;Ye.Content=Vs;Ye.Item=Bs;function tn(e){return(r={})=>{const t=r.width?String(r.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function Ae(e){return(r,t)=>{const n=t?.context?String(t.context):"standalone";let a;if(n==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,l=t?.width?String(t.width):i;a=e.formattingValues[l]||e.formattingValues[i]}else{const i=e.defaultWidth,l=t?.width?String(t.width):e.defaultWidth;a=e.values[l]||e.values[i]}const s=e.argumentCallback?e.argumentCallback(r):r;return a[s]}}function Oe(e){return(r,t={})=>{const n=t.width,a=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=r.match(a);if(!s)return null;const i=s[0],l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],o=Array.isArray(l)?ki(l,m=>m.test(i)):vi(l,m=>m.test(i));let u;u=e.valueCallback?e.valueCallback(o):o,u=t.valueCallback?t.valueCallback(u):u;const d=r.slice(i.length);return{value:u,rest:d}}}function vi(e,r){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&r(e[t]))return t}function ki(e,r){for(let t=0;t<e.length;t++)if(r(e[t]))return t}function ra(e){return(r,t={})=>{const n=r.match(e.matchPattern);if(!n)return null;const a=n[0],s=r.match(e.parsePattern);if(!s)return null;let i=e.valueCallback?e.valueCallback(s[0]):s[0];i=t.valueCallback?t.valueCallback(i):i;const l=r.slice(a.length);return{value:i,rest:l}}}const ta=6048e5,pi=864e5,Zr=Symbol.for("constructDateFrom");function Ee(e,r){return typeof e=="function"?e(r):e&&typeof e=="object"&&Zr in e?e[Zr](r):e instanceof Date?new e.constructor(r):new Date(r)}function Qe(e,...r){const t=Ee.bind(null,r.find(n=>typeof n=="object"));return r.map(t)}let yi={};function Jn(){return yi}function ee(e,r){return Ee(r||e,e)}function bn(e,r){const t=Jn(),n=r?.weekStartsOn??r?.locale?.options?.weekStartsOn??t.weekStartsOn??t.locale?.options?.weekStartsOn??0,a=ee(e,r?.in),s=a.getDay(),i=(s<n?7:0)+s-n;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}const bi={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},hi=(e,r,t)=>{let n;const a=bi[e];return typeof a=="string"?n=a:r===1?n=a.one:n=a.other.replace("{{count}}",r.toString()),t?.addSuffix?t.comparison&&t.comparison>0?"in "+n:n+" ago":n},Ti={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ri=(e,r,t,n)=>Ti[e],wi={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Ei={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ai={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Oi={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Si={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ji={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Pi=(e,r)=>{const t=Number(e),n=t%100;if(n>20||n<10)switch(n%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},qi={ordinalNumber:Pi,era:Ae({values:wi,defaultWidth:"wide"}),quarter:Ae({values:Ei,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Ae({values:Ai,defaultWidth:"wide"}),day:Ae({values:Oi,defaultWidth:"wide"}),dayPeriod:Ae({values:Si,defaultWidth:"wide",formattingValues:ji,defaultFormattingWidth:"wide"})},_i=/^(\d+)(th|st|nd|rd)?/i,Ni=/\d+/i,Fi={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},xi={any:[/^b/i,/^(a|c)/i]},Di={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ii={any:[/1/i,/2/i,/3/i,/4/i]},Bi={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Mi={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Vi={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Li={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ki={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ci={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Gi={ordinalNumber:ra({matchPattern:_i,parsePattern:Ni,valueCallback:e=>parseInt(e,10)}),era:Oe({matchPatterns:Fi,defaultMatchWidth:"wide",parsePatterns:xi,defaultParseWidth:"any"}),quarter:Oe({matchPatterns:Di,defaultMatchWidth:"wide",parsePatterns:Ii,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Oe({matchPatterns:Bi,defaultMatchWidth:"wide",parsePatterns:Mi,defaultParseWidth:"any"}),day:Oe({matchPatterns:Vi,defaultMatchWidth:"wide",parsePatterns:Li,defaultParseWidth:"any"}),dayPeriod:Oe({matchPatterns:Ki,defaultMatchWidth:"any",parsePatterns:Ci,defaultParseWidth:"any"})},Ui={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Yi={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Hi={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$i={date:tn({formats:Ui,defaultWidth:"full"}),time:tn({formats:Yi,defaultWidth:"full"}),dateTime:tn({formats:Hi,defaultWidth:"full"})},Wi={code:"en-US",formatDistance:hi,formatLong:$i,formatRelative:Ri,localize:qi,match:Gi,options:{weekStartsOn:0,firstWeekContainsDate:1}},zi={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Ji=(e,r,t)=>{let n;const a=zi[e];return typeof a=="string"?n=a:r===1?n=a.one:n=a.other.replace("{{count}}",String(r)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+n:n+" siden":n},Xi={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Qi={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Zi={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},el={date:tn({formats:Xi,defaultWidth:"full"}),time:tn({formats:Qi,defaultWidth:"full"}),dateTime:tn({formats:Zi,defaultWidth:"full"})},nl={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},rl=(e,r,t,n)=>nl[e],tl={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},al={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},sl={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},il={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},ll={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},ol=(e,r)=>Number(e)+".",ul={ordinalNumber:ol,era:Ae({values:tl,defaultWidth:"wide"}),quarter:Ae({values:al,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Ae({values:sl,defaultWidth:"wide"}),day:Ae({values:il,defaultWidth:"wide"}),dayPeriod:Ae({values:ll,defaultWidth:"wide"})},dl=/^(\d+)\.?/i,gl=/\d+/i,ml={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},cl={any:[/^f/i,/^e/i]},fl={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},vl={any:[/1/i,/2/i,/3/i,/4/i]},kl={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},pl={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},yl={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},bl={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},hl={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},Tl={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Rl={ordinalNumber:ra({matchPattern:dl,parsePattern:gl,valueCallback:e=>parseInt(e,10)}),era:Oe({matchPatterns:ml,defaultMatchWidth:"wide",parsePatterns:cl,defaultParseWidth:"any"}),quarter:Oe({matchPatterns:fl,defaultMatchWidth:"wide",parsePatterns:vl,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Oe({matchPatterns:kl,defaultMatchWidth:"wide",parsePatterns:pl,defaultParseWidth:"any"}),day:Oe({matchPatterns:yl,defaultMatchWidth:"wide",parsePatterns:bl,defaultParseWidth:"any"}),dayPeriod:Oe({matchPatterns:hl,defaultMatchWidth:"any",parsePatterns:Tl,defaultParseWidth:"any"})},wl={code:"nb",formatDistance:Ji,formatLong:el,formatRelative:rl,localize:ul,match:Rl,options:{weekStartsOn:1,firstWeekContainsDate:4}},El={global:{dateLocale:wl,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Al=g.createContext({locale:El}),aa=()=>g.useContext(Al),ln=Math.min,We=Math.max,Dn=Math.round,Sn=Math.floor,Se=e=>({x:e,y:e}),Ol={left:"right",right:"left",bottom:"top",top:"bottom"},Sl={start:"end",end:"start"};function kr(e,r,t){return We(e,ln(r,t))}function Rn(e,r){return typeof e=="function"?e(r):e}function ze(e){return e.split("-")[0]}function wn(e){return e.split("-")[1]}function sa(e){return e==="x"?"y":"x"}function _r(e){return e==="y"?"height":"width"}function on(e){return["top","bottom"].includes(ze(e))?"y":"x"}function Nr(e){return sa(on(e))}function jl(e,r,t){t===void 0&&(t=!1);const n=wn(e),a=Nr(e),s=_r(a);let i=a==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return r.reference[s]>r.floating[s]&&(i=In(i)),[i,In(i)]}function Pl(e){const r=In(e);return[pr(e),r,pr(r)]}function pr(e){return e.replace(/start|end/g,r=>Sl[r])}function ql(e,r,t){const n=["left","right"],a=["right","left"],s=["top","bottom"],i=["bottom","top"];switch(e){case"top":case"bottom":return t?r?a:n:r?n:a;case"left":case"right":return r?s:i;default:return[]}}function _l(e,r,t,n){const a=wn(e);let s=ql(ze(e),t==="start",n);return a&&(s=s.map(i=>i+"-"+a),r&&(s=s.concat(s.map(pr)))),s}function In(e){return e.replace(/left|right|bottom|top/g,r=>Ol[r])}function Nl(e){return{top:0,right:0,bottom:0,left:0,...e}}function ia(e){return typeof e!="number"?Nl(e):{top:e,right:e,bottom:e,left:e}}function Bn(e){const{x:r,y:t,width:n,height:a}=e;return{width:n,height:a,top:t,left:r,right:r+n,bottom:t+a,x:r,y:t}}function et(e,r,t){let{reference:n,floating:a}=e;const s=on(r),i=Nr(r),l=_r(i),o=ze(r),u=s==="y",d=n.x+n.width/2-a.width/2,m=n.y+n.height/2-a.height/2,f=n[l]/2-a[l]/2;let c;switch(o){case"top":c={x:d,y:n.y-a.height};break;case"bottom":c={x:d,y:n.y+n.height};break;case"right":c={x:n.x+n.width,y:m};break;case"left":c={x:n.x-a.width,y:m};break;default:c={x:n.x,y:n.y}}switch(wn(r)){case"start":c[i]-=f*(t&&u?-1:1);break;case"end":c[i]+=f*(t&&u?-1:1);break}return c}const Fl=async(e,r,t)=>{const{placement:n="bottom",strategy:a="absolute",middleware:s=[],platform:i}=t,l=s.filter(Boolean),o=await(i.isRTL==null?void 0:i.isRTL(r));let u=await i.getElementRects({reference:e,floating:r,strategy:a}),{x:d,y:m}=et(u,n,o),f=n,c={},v=0;for(let k=0;k<l.length;k++){const{name:y,fn:b}=l[k],{x:E,y:T,data:P,reset:N}=await b({x:d,y:m,initialPlacement:n,placement:f,strategy:a,middlewareData:c,rects:u,platform:i,elements:{reference:e,floating:r}});d=E??d,m=T??m,c={...c,[y]:{...c[y],...P}},N&&v<=50&&(v++,typeof N=="object"&&(N.placement&&(f=N.placement),N.rects&&(u=N.rects===!0?await i.getElementRects({reference:e,floating:r,strategy:a}):N.rects),{x:d,y:m}=et(u,f,o)),k=-1)}return{x:d,y:m,placement:f,strategy:a,middlewareData:c}};async function la(e,r){var t;r===void 0&&(r={});const{x:n,y:a,platform:s,rects:i,elements:l,strategy:o}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:m="floating",altBoundary:f=!1,padding:c=0}=Rn(r,e),v=ia(c),y=l[f?m==="floating"?"reference":"floating":m],b=Bn(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(y)))==null||t?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:o})),E=m==="floating"?{x:n,y:a,width:i.floating.width,height:i.floating.height}:i.reference,T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),P=await(s.isElement==null?void 0:s.isElement(T))?await(s.getScale==null?void 0:s.getScale(T))||{x:1,y:1}:{x:1,y:1},N=Bn(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:E,offsetParent:T,strategy:o}):E);return{top:(b.top-N.top+v.top)/P.y,bottom:(N.bottom-b.bottom+v.bottom)/P.y,left:(b.left-N.left+v.left)/P.x,right:(N.right-b.right+v.right)/P.x}}const xl=e=>({name:"arrow",options:e,async fn(r){const{x:t,y:n,placement:a,rects:s,platform:i,elements:l,middlewareData:o}=r,{element:u,padding:d=0}=Rn(e,r)||{};if(u==null)return{};const m=ia(d),f={x:t,y:n},c=Nr(a),v=_r(c),k=await i.getDimensions(u),y=c==="y",b=y?"top":"left",E=y?"bottom":"right",T=y?"clientHeight":"clientWidth",P=s.reference[v]+s.reference[c]-f[c]-s.floating[v],N=f[c]-s.reference[c],D=await(i.getOffsetParent==null?void 0:i.getOffsetParent(u));let I=D?D[T]:0;(!I||!await(i.isElement==null?void 0:i.isElement(D)))&&(I=l.floating[T]||s.floating[v]);const C=P/2-N/2,V=I/2-k[v]/2-1,F=ln(m[b],V),x=ln(m[E],V),O=F,R=I-k[v]-x,h=I/2-k[v]/2+C,A=kr(O,h,R),B=!o.arrow&&wn(a)!=null&&h!==A&&s.reference[v]/2-(h<O?F:x)-k[v]/2<0,q=B?h<O?h-O:h-R:0;return{[c]:f[c]+q,data:{[c]:A,centerOffset:h-A-q,...B&&{alignmentOffset:q}},reset:B}}}),Dl=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(r){var t,n;const{placement:a,middlewareData:s,rects:i,initialPlacement:l,platform:o,elements:u}=r,{mainAxis:d=!0,crossAxis:m=!0,fallbackPlacements:f,fallbackStrategy:c="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:k=!0,...y}=Rn(e,r);if((t=s.arrow)!=null&&t.alignmentOffset)return{};const b=ze(a),E=on(l),T=ze(l)===l,P=await(o.isRTL==null?void 0:o.isRTL(u.floating)),N=f||(T||!k?[In(l)]:Pl(l)),D=v!=="none";!f&&D&&N.push(..._l(l,k,v,P));const I=[l,...N],C=await la(r,y),V=[];let F=((n=s.flip)==null?void 0:n.overflows)||[];if(d&&V.push(C[b]),m){const h=jl(a,i,P);V.push(C[h[0]],C[h[1]])}if(F=[...F,{placement:a,overflows:V}],!V.every(h=>h<=0)){var x,O;const h=(((x=s.flip)==null?void 0:x.index)||0)+1,A=I[h];if(A)return{data:{index:h,overflows:F},reset:{placement:A}};let B=(O=F.filter(q=>q.overflows[0]<=0).sort((q,j)=>q.overflows[1]-j.overflows[1])[0])==null?void 0:O.placement;if(!B)switch(c){case"bestFit":{var R;const q=(R=F.filter(j=>{if(D){const S=on(j.placement);return S===E||S==="y"}return!0}).map(j=>[j.placement,j.overflows.filter(S=>S>0).reduce((S,M)=>S+M,0)]).sort((j,S)=>j[1]-S[1])[0])==null?void 0:R[0];q&&(B=q);break}case"initialPlacement":B=l;break}if(a!==B)return{reset:{placement:B}}}return{}}}};async function Il(e,r){const{placement:t,platform:n,elements:a}=e,s=await(n.isRTL==null?void 0:n.isRTL(a.floating)),i=ze(t),l=wn(t),o=on(t)==="y",u=["left","top"].includes(i)?-1:1,d=s&&o?-1:1,m=Rn(r,e);let{mainAxis:f,crossAxis:c,alignmentAxis:v}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return l&&typeof v=="number"&&(c=l==="end"?v*-1:v),o?{x:c*d,y:f*u}:{x:f*u,y:c*d}}const Bl=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(r){var t,n;const{x:a,y:s,placement:i,middlewareData:l}=r,o=await Il(r,e);return i===((t=l.offset)==null?void 0:t.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:a+o.x,y:s+o.y,data:{...o,placement:i}}}}},Ml=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(r){const{x:t,y:n,placement:a}=r,{mainAxis:s=!0,crossAxis:i=!1,limiter:l={fn:y=>{let{x:b,y:E}=y;return{x:b,y:E}}},...o}=Rn(e,r),u={x:t,y:n},d=await la(r,o),m=on(ze(a)),f=sa(m);let c=u[f],v=u[m];if(s){const y=f==="y"?"top":"left",b=f==="y"?"bottom":"right",E=c+d[y],T=c-d[b];c=kr(E,c,T)}if(i){const y=m==="y"?"top":"left",b=m==="y"?"bottom":"right",E=v+d[y],T=v-d[b];v=kr(E,v,T)}const k=l.fn({...r,[f]:c,[m]:v});return{...k,data:{x:k.x-t,y:k.y-n,enabled:{[f]:s,[m]:i}}}}}};function Xn(){return typeof window<"u"}function Ke(e){return oa(e)?(e.nodeName||"").toLowerCase():"#document"}function ke(e){var r;return(e==null||(r=e.ownerDocument)==null?void 0:r.defaultView)||window}function Pe(e){var r;return(r=(oa(e)?e.ownerDocument:e.document)||window.document)==null?void 0:r.documentElement}function oa(e){return Xn()?e instanceof Node||e instanceof ke(e).Node:!1}function Z(e){return Xn()?e instanceof Element||e instanceof ke(e).Element:!1}function oe(e){return Xn()?e instanceof HTMLElement||e instanceof ke(e).HTMLElement:!1}function Mn(e){return!Xn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ke(e).ShadowRoot}function En(e){const{overflow:r,overflowX:t,overflowY:n,display:a}=Re(e);return/auto|scroll|overlay|hidden|clip/.test(r+n+t)&&!["inline","contents"].includes(a)}function Vl(e){return["table","td","th"].includes(Ke(e))}function Qn(e){return[":popover-open",":modal"].some(r=>{try{return e.matches(r)}catch{return!1}})}function Fr(e){const r=Zn(),t=Z(e)?Re(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>t[n]?t[n]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!r&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!r&&(t.filter?t.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(t.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(t.contain||"").includes(n))}function Ll(e){let r=Fe(e);for(;oe(r)&&!Ne(r);){if(Fr(r))return r;if(Qn(r))return null;r=Fe(r)}return null}function Zn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ne(e){return["html","body","#document"].includes(Ke(e))}function Re(e){return ke(e).getComputedStyle(e)}function er(e){return Z(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Fe(e){if(Ke(e)==="html")return e;const r=e.assignedSlot||e.parentNode||Mn(e)&&e.host||Pe(e);return Mn(r)?r.host:r}function ua(e){const r=Fe(e);return Ne(r)?e.ownerDocument?e.ownerDocument.body:e.body:oe(r)&&En(r)?r:ua(r)}function Ve(e,r,t){var n;r===void 0&&(r=[]),t===void 0&&(t=!0);const a=ua(e),s=a===((n=e.ownerDocument)==null?void 0:n.body),i=ke(a);if(s){const l=yr(i);return r.concat(i,i.visualViewport||[],En(a)?a:[],l&&t?Ve(l):[])}return r.concat(a,Ve(a,[],t))}function yr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function da(e){const r=Re(e);let t=parseFloat(r.width)||0,n=parseFloat(r.height)||0;const a=oe(e),s=a?e.offsetWidth:t,i=a?e.offsetHeight:n,l=Dn(t)!==s||Dn(n)!==i;return l&&(t=s,n=i),{width:t,height:n,$:l}}function xr(e){return Z(e)?e:e.contextElement}function an(e){const r=xr(e);if(!oe(r))return Se(1);const t=r.getBoundingClientRect(),{width:n,height:a,$:s}=da(r);let i=(s?Dn(t.width):t.width)/n,l=(s?Dn(t.height):t.height)/a;return(!i||!Number.isFinite(i))&&(i=1),(!l||!Number.isFinite(l))&&(l=1),{x:i,y:l}}const Kl=Se(0);function ga(e){const r=ke(e);return!Zn()||!r.visualViewport?Kl:{x:r.visualViewport.offsetLeft,y:r.visualViewport.offsetTop}}function Cl(e,r,t){return r===void 0&&(r=!1),!t||r&&t!==ke(e)?!1:r}function Je(e,r,t,n){r===void 0&&(r=!1),t===void 0&&(t=!1);const a=e.getBoundingClientRect(),s=xr(e);let i=Se(1);r&&(n?Z(n)&&(i=an(n)):i=an(e));const l=Cl(s,t,n)?ga(s):Se(0);let o=(a.left+l.x)/i.x,u=(a.top+l.y)/i.y,d=a.width/i.x,m=a.height/i.y;if(s){const f=ke(s),c=n&&Z(n)?ke(n):n;let v=f,k=yr(v);for(;k&&n&&c!==v;){const y=an(k),b=k.getBoundingClientRect(),E=Re(k),T=b.left+(k.clientLeft+parseFloat(E.paddingLeft))*y.x,P=b.top+(k.clientTop+parseFloat(E.paddingTop))*y.y;o*=y.x,u*=y.y,d*=y.x,m*=y.y,o+=T,u+=P,v=ke(k),k=yr(v)}}return Bn({width:d,height:m,x:o,y:u})}function Dr(e,r){const t=er(e).scrollLeft;return r?r.left+t:Je(Pe(e)).left+t}function ma(e,r,t){t===void 0&&(t=!1);const n=e.getBoundingClientRect(),a=n.left+r.scrollLeft-(t?0:Dr(e,n)),s=n.top+r.scrollTop;return{x:a,y:s}}function Gl(e){let{elements:r,rect:t,offsetParent:n,strategy:a}=e;const s=a==="fixed",i=Pe(n),l=r?Qn(r.floating):!1;if(n===i||l&&s)return t;let o={scrollLeft:0,scrollTop:0},u=Se(1);const d=Se(0),m=oe(n);if((m||!m&&!s)&&((Ke(n)!=="body"||En(i))&&(o=er(n)),oe(n))){const c=Je(n);u=an(n),d.x=c.x+n.clientLeft,d.y=c.y+n.clientTop}const f=i&&!m&&!s?ma(i,o,!0):Se(0);return{width:t.width*u.x,height:t.height*u.y,x:t.x*u.x-o.scrollLeft*u.x+d.x+f.x,y:t.y*u.y-o.scrollTop*u.y+d.y+f.y}}function Ul(e){return Array.from(e.getClientRects())}function Yl(e){const r=Pe(e),t=er(e),n=e.ownerDocument.body,a=We(r.scrollWidth,r.clientWidth,n.scrollWidth,n.clientWidth),s=We(r.scrollHeight,r.clientHeight,n.scrollHeight,n.clientHeight);let i=-t.scrollLeft+Dr(e);const l=-t.scrollTop;return Re(n).direction==="rtl"&&(i+=We(r.clientWidth,n.clientWidth)-a),{width:a,height:s,x:i,y:l}}function Hl(e,r){const t=ke(e),n=Pe(e),a=t.visualViewport;let s=n.clientWidth,i=n.clientHeight,l=0,o=0;if(a){s=a.width,i=a.height;const u=Zn();(!u||u&&r==="fixed")&&(l=a.offsetLeft,o=a.offsetTop)}return{width:s,height:i,x:l,y:o}}function $l(e,r){const t=Je(e,!0,r==="fixed"),n=t.top+e.clientTop,a=t.left+e.clientLeft,s=oe(e)?an(e):Se(1),i=e.clientWidth*s.x,l=e.clientHeight*s.y,o=a*s.x,u=n*s.y;return{width:i,height:l,x:o,y:u}}function nt(e,r,t){let n;if(r==="viewport")n=Hl(e,t);else if(r==="document")n=Yl(Pe(e));else if(Z(r))n=$l(r,t);else{const a=ga(e);n={x:r.x-a.x,y:r.y-a.y,width:r.width,height:r.height}}return Bn(n)}function ca(e,r){const t=Fe(e);return t===r||!Z(t)||Ne(t)?!1:Re(t).position==="fixed"||ca(t,r)}function Wl(e,r){const t=r.get(e);if(t)return t;let n=Ve(e,[],!1).filter(l=>Z(l)&&Ke(l)!=="body"),a=null;const s=Re(e).position==="fixed";let i=s?Fe(e):e;for(;Z(i)&&!Ne(i);){const l=Re(i),o=Fr(i);!o&&l.position==="fixed"&&(a=null),(s?!o&&!a:!o&&l.position==="static"&&!!a&&["absolute","fixed"].includes(a.position)||En(i)&&!o&&ca(e,i))?n=n.filter(d=>d!==i):a=l,i=Fe(i)}return r.set(e,n),n}function zl(e){let{element:r,boundary:t,rootBoundary:n,strategy:a}=e;const i=[...t==="clippingAncestors"?Qn(r)?[]:Wl(r,this._c):[].concat(t),n],l=i[0],o=i.reduce((u,d)=>{const m=nt(r,d,a);return u.top=We(m.top,u.top),u.right=ln(m.right,u.right),u.bottom=ln(m.bottom,u.bottom),u.left=We(m.left,u.left),u},nt(r,l,a));return{width:o.right-o.left,height:o.bottom-o.top,x:o.left,y:o.top}}function Jl(e){const{width:r,height:t}=da(e);return{width:r,height:t}}function Xl(e,r,t){const n=oe(r),a=Pe(r),s=t==="fixed",i=Je(e,!0,s,r);let l={scrollLeft:0,scrollTop:0};const o=Se(0);if(n||!n&&!s)if((Ke(r)!=="body"||En(a))&&(l=er(r)),n){const f=Je(r,!0,s,r);o.x=f.x+r.clientLeft,o.y=f.y+r.clientTop}else a&&(o.x=Dr(a));const u=a&&!n&&!s?ma(a,l):Se(0),d=i.left+l.scrollLeft-o.x-u.x,m=i.top+l.scrollTop-o.y-u.y;return{x:d,y:m,width:i.width,height:i.height}}function ar(e){return Re(e).position==="static"}function rt(e,r){if(!oe(e)||Re(e).position==="fixed")return null;if(r)return r(e);let t=e.offsetParent;return Pe(e)===t&&(t=t.ownerDocument.body),t}function fa(e,r){const t=ke(e);if(Qn(e))return t;if(!oe(e)){let a=Fe(e);for(;a&&!Ne(a);){if(Z(a)&&!ar(a))return a;a=Fe(a)}return t}let n=rt(e,r);for(;n&&Vl(n)&&ar(n);)n=rt(n,r);return n&&Ne(n)&&ar(n)&&!Fr(n)?t:n||Ll(e)||t}const Ql=async function(e){const r=this.getOffsetParent||fa,t=this.getDimensions,n=await t(e.floating);return{reference:Xl(e.reference,await r(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Zl(e){return Re(e).direction==="rtl"}const eo={convertOffsetParentRelativeRectToViewportRelativeRect:Gl,getDocumentElement:Pe,getClippingRect:zl,getOffsetParent:fa,getElementRects:Ql,getClientRects:Ul,getDimensions:Jl,getScale:an,isElement:Z,isRTL:Zl};function va(e,r){return e.x===r.x&&e.y===r.y&&e.width===r.width&&e.height===r.height}function no(e,r){let t=null,n;const a=Pe(e);function s(){var l;clearTimeout(n),(l=t)==null||l.disconnect(),t=null}function i(l,o){l===void 0&&(l=!1),o===void 0&&(o=1),s();const u=e.getBoundingClientRect(),{left:d,top:m,width:f,height:c}=u;if(l||r(),!f||!c)return;const v=Sn(m),k=Sn(a.clientWidth-(d+f)),y=Sn(a.clientHeight-(m+c)),b=Sn(d),T={rootMargin:-v+"px "+-k+"px "+-y+"px "+-b+"px",threshold:We(0,ln(1,o))||1};let P=!0;function N(D){const I=D[0].intersectionRatio;if(I!==o){if(!P)return i();I?i(!1,I):n=setTimeout(()=>{i(!1,1e-7)},1e3)}I===1&&!va(u,e.getBoundingClientRect())&&i(),P=!1}try{t=new IntersectionObserver(N,{...T,root:a.ownerDocument})}catch{t=new IntersectionObserver(N,T)}t.observe(e)}return i(!0),s}function ka(e,r,t,n){n===void 0&&(n={});const{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:o=!1}=n,u=xr(e),d=a||s?[...u?Ve(u):[],...Ve(r)]:[];d.forEach(b=>{a&&b.addEventListener("scroll",t,{passive:!0}),s&&b.addEventListener("resize",t)});const m=u&&l?no(u,t):null;let f=-1,c=null;i&&(c=new ResizeObserver(b=>{let[E]=b;E&&E.target===u&&c&&(c.unobserve(r),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var T;(T=c)==null||T.observe(r)})),t()}),u&&!o&&c.observe(u),c.observe(r));let v,k=o?Je(e):null;o&&y();function y(){const b=Je(e);k&&!va(k,b)&&t(),k=b,v=requestAnimationFrame(y)}return t(),()=>{var b;d.forEach(E=>{a&&E.removeEventListener("scroll",t),s&&E.removeEventListener("resize",t)}),m?.(),(b=c)==null||b.disconnect(),c=null,o&&cancelAnimationFrame(v)}}const ro=Bl,to=Ml,ao=Dl,tt=xl,so=(e,r,t)=>{const n=new Map,a={platform:eo,...t},s={...a.platform,_c:n};return Fl(e,r,{...a,platform:s})};var xn=typeof document<"u"?g.useLayoutEffect:g.useEffect;function Vn(e,r){if(e===r)return!0;if(typeof e!=typeof r)return!1;if(typeof e=="function"&&e.toString()===r.toString())return!0;let t,n,a;if(e&&r&&typeof e=="object"){if(Array.isArray(e)){if(t=e.length,t!==r.length)return!1;for(n=t;n--!==0;)if(!Vn(e[n],r[n]))return!1;return!0}if(a=Object.keys(e),t=a.length,t!==Object.keys(r).length)return!1;for(n=t;n--!==0;)if(!{}.hasOwnProperty.call(r,a[n]))return!1;for(n=t;n--!==0;){const s=a[n];if(!(s==="_owner"&&e.$$typeof)&&!Vn(e[s],r[s]))return!1}return!0}return e!==e&&r!==r}function pa(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function at(e,r){const t=pa(e);return Math.round(r*t)/t}function sr(e){const r=g.useRef(e);return xn(()=>{r.current=e}),r}function io(e){e===void 0&&(e={});const{placement:r="bottom",strategy:t="absolute",middleware:n=[],platform:a,elements:{reference:s,floating:i}={},transform:l=!0,whileElementsMounted:o,open:u}=e,[d,m]=g.useState({x:0,y:0,strategy:t,placement:r,middlewareData:{},isPositioned:!1}),[f,c]=g.useState(n);Vn(f,n)||c(n);const[v,k]=g.useState(null),[y,b]=g.useState(null),E=g.useCallback(j=>{j!==D.current&&(D.current=j,k(j))},[]),T=g.useCallback(j=>{j!==I.current&&(I.current=j,b(j))},[]),P=s||v,N=i||y,D=g.useRef(null),I=g.useRef(null),C=g.useRef(d),V=o!=null,F=sr(o),x=sr(a),O=sr(u),R=g.useCallback(()=>{if(!D.current||!I.current)return;const j={placement:r,strategy:t,middleware:f};x.current&&(j.platform=x.current),so(D.current,I.current,j).then(S=>{const M={...S,isPositioned:O.current!==!1};h.current&&!Vn(C.current,M)&&(C.current=M,As.flushSync(()=>{m(M)}))})},[f,r,t,x,O]);xn(()=>{u===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,m(j=>({...j,isPositioned:!1})))},[u]);const h=g.useRef(!1);xn(()=>(h.current=!0,()=>{h.current=!1}),[]),xn(()=>{if(P&&(D.current=P),N&&(I.current=N),P&&N){if(F.current)return F.current(P,N,R);R()}},[P,N,R,F,V]);const A=g.useMemo(()=>({reference:D,floating:I,setReference:E,setFloating:T}),[E,T]),B=g.useMemo(()=>({reference:P,floating:N}),[P,N]),q=g.useMemo(()=>{const j={position:t,left:0,top:0};if(!B.floating)return j;const S=at(B.floating,d.x),M=at(B.floating,d.y);return l?{...j,transform:"translate("+S+"px, "+M+"px)",...pa(B.floating)>=1.5&&{willChange:"transform"}}:{position:t,left:S,top:M}},[t,l,B.floating,d.x,d.y]);return g.useMemo(()=>({...d,update:R,refs:A,elements:B,floatingStyles:q}),[d,R,A,B,q])}const lo=e=>{function r(t){return{}.hasOwnProperty.call(t,"current")}return{name:"arrow",options:e,fn(t){const{element:n,padding:a}=typeof e=="function"?e(t):e;return n&&r(n)?n.current!=null?tt({element:n.current,padding:a}).fn(t):{}:n?tt({element:n,padding:a}).fn(t):{}}}},ya=(e,r)=>({...ro(e),options:[e,r]}),ba=(e,r)=>({...to(e),options:[e,r]}),ha=(e,r)=>({...ao(e),options:[e,r]}),Ta=(e,r)=>({...lo(e),options:[e,r]}),st=/(\w+)/g;function oo(e,r){const t=Array.isArray(e)?e:uo(e);for(const n of r){if(!n)continue;let a=n;for(let s=0;s<t.length;s++){const i=a[t[s]];i!==void 0&&(a=i)}if(typeof a=="string")return a}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function uo(e){const r=[];let t=st.exec(e);for(;t;){const[,n,a]=t;r.push(n||a),t=st.exec(e)}return r}const go=/{[^}]*}/g;function Ce(e,...r){const t=aa(),n=t.translations||[],a=[...r,...Array.isArray(n)?n.map(i=>i[e]):[n[e]],t.locale[e]];return(i,l)=>{const o=oo(i,a);return l?o.replace(go,u=>{const d=u.substring(1,u.length-1);if(l[d]===void 0){const m=JSON.stringify(l);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${d}'. The following replacements were passed: '${m}'`)}return l[d]}):o}}function mo(){const e=aa(),r=e.translations||[],t=Array.isArray(r)?r.map(n=>n.global):[r.global];t.push(e.locale.global);for(const n of t)if(n?.dateLocale)return n.dateLocale;throw new Error("dateLocale not found.")}var co=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const fo=g.forwardRef((e,r)=>{var{className:t,size:n="medium",title:a,transparent:s=!1,variant:i="neutral",id:l,"data-color":o}=e,u=co(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:d}=H(),m=Xt(),f=Ce("Loader");return w.createElement("svg",Object.assign({"aria-labelledby":l??`loader-${m}`,ref:r,className:d("navds-loader",t,`navds-loader--${n}`,`navds-loader--${i}`,{"navds-loader--transparent":s}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":o??vo(i)},_e(u,["children"]),{"data-variant":i}),w.createElement("title",{id:l??`loader-${m}`},a||f("title")),w.createElement("circle",{className:d("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),w.createElement("circle",{className:d("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function vo(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var ko=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const He=g.forwardRef((e,r)=>{var{as:t="button",variant:n="primary",className:a,children:s,size:i="medium",loading:l=!1,disabled:o,icon:u,iconPosition:d="left",onKeyUp:m,"data-color":f}=e,c=ko(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:v}=H(),k=o||l?_e(c,["href"]):c,y=b=>{b.key===" "&&!o&&!l&&b.currentTarget.click()};return w.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},{"data-color":f??po(n),"data-variant":yo(n)},k,{ref:r,onKeyUp:qr(m,y),className:v(a,"navds-button",`navds-button--${n}`,`navds-button--${i}`,{"navds-button--loading":l,"navds-button--icon-only":!!u&&!s,"navds-button--disabled":o??l}),disabled:o??l?!0:void 0}),u&&d==="left"&&w.createElement("span",{className:v("navds-button__icon")},u),l&&w.createElement(fo,{size:i}),s&&w.createElement(yn,{as:"span",size:i==="medium"?"medium":"small"},s),u&&d==="right"&&w.createElement("span",{className:v("navds-button__icon")},u))});function po(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function yo(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}function Ir(e,r,t){const n=ee(e,t?.in);return isNaN(r)?Ee(e,NaN):(r&&n.setDate(n.getDate()+r),n)}function hn(e,r,t){const n=ee(e,t?.in);if(isNaN(r))return Ee(e,NaN);if(!r)return n;const a=n.getDate(),s=Ee(e,n.getTime());s.setMonth(n.getMonth()+r+1,0);const i=s.getDate();return a>=i?s:(n.setFullYear(s.getFullYear(),s.getMonth(),a),n)}function Ln(e,r){return bn(e,{...r,weekStartsOn:1})}function Ra(e,r){const t=ee(e,r?.in),n=t.getFullYear(),a=Ee(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const s=Ln(a),i=Ee(t,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const l=Ln(i);return t.getTime()>=s.getTime()?n+1:t.getTime()>=l.getTime()?n:n-1}function it(e){const r=ee(e),t=new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate(),r.getHours(),r.getMinutes(),r.getSeconds(),r.getMilliseconds()));return t.setUTCFullYear(r.getFullYear()),+e-+t}function Le(e,r){const t=ee(e,r?.in);return t.setHours(0,0,0,0),t}function wa(e,r,t){const[n,a]=Qe(t?.in,e,r),s=Le(n),i=Le(a),l=+s-it(s),o=+i-it(i);return Math.round((l-o)/pi)}function bo(e,r){const t=Ra(e,r),n=Ee(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Ln(n)}function Kn(e,r,t){return hn(e,r*12,t)}function kn(e,r){const t=+ee(e)-+ee(r);return t<0?-1:t>0?1:t}function Cn(e,r,t){const[n,a]=Qe(t?.in,e,r);return+Le(n)==+Le(a)}function ho(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function To(e){return!(!ho(e)&&typeof e!="number"||isNaN(+ee(e)))}function Ro(e,r,t){const[n,a]=Qe(t?.in,e,r),s=n.getFullYear()-a.getFullYear(),i=n.getMonth()-a.getMonth();return s*12+i}function wo(e,r,t){const[n,a]=Qe(t?.in,e,r);return n.getFullYear()-a.getFullYear()}function Ea(e,r,t){const[n,a]=Qe(t?.in,e,r),s=lt(n,a),i=Math.abs(wa(n,a));n.setDate(n.getDate()-s*i);const l=+(lt(n,a)===-s),o=s*(i-l);return o===0?0:o}function lt(e,r){const t=e.getFullYear()-r.getFullYear()||e.getMonth()-r.getMonth()||e.getDate()-r.getDate()||e.getHours()-r.getHours()||e.getMinutes()-r.getMinutes()||e.getSeconds()-r.getSeconds()||e.getMilliseconds()-r.getMilliseconds();return t<0?-1:t>0?1:t}function ot(e,r){return+ee(e)-+ee(r)}function Gn(e,r){const t=ee(e,r?.in);return t.setHours(23,59,59,999),t}function Aa(e,r){const t=ee(e,r?.in),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Eo(e,r){const t=ee(e,r?.in);return+Gn(t,r)==+Aa(t,r)}function Ao(e,r,t){const[n,a,s]=Qe(t?.in,e,e,r),i=kn(a,s),l=Math.abs(Ro(a,s));if(l<1)return 0;a.getMonth()===1&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-i*l);let o=kn(a,s)===-i;Eo(n)&&l===1&&kn(n,s)===1&&(o=!1);const u=i*(l-+o);return u===0?0:u}function Oo(e,r,t){const[n,a]=Qe(t?.in,e,r),s=kn(n,a),i=Math.abs(wo(n,a));n.setFullYear(1584),a.setFullYear(1584);const l=kn(n,a)===-s,o=s*(i-+l);return o===0?0:o}function So(e,r){const t=ee(e,r?.in);return t.setDate(1),t.setHours(0,0,0,0),t}function jo(e,r){const t=ee(e,r?.in),n=t.getFullYear();return t.setFullYear(n+1,0,0),t.setHours(23,59,59,999),t}function Oa(e,r){const t=ee(e,r?.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}function Po(e,r){const t=ee(e,r?.in);return wa(t,Oa(t))+1}function qo(e,r){const t=ee(e,r?.in),n=+Ln(t)-+bo(t);return Math.round(n/ta)+1}function Sa(e,r){const t=ee(e,r?.in),n=t.getFullYear(),a=Jn(),s=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=Ee(r?.in||e,0);i.setFullYear(n+1,0,s),i.setHours(0,0,0,0);const l=bn(i,r),o=Ee(r?.in||e,0);o.setFullYear(n,0,s),o.setHours(0,0,0,0);const u=bn(o,r);return+t>=+l?n+1:+t>=+u?n:n-1}function _o(e,r){const t=Jn(),n=r?.firstWeekContainsDate??r?.locale?.options?.firstWeekContainsDate??t.firstWeekContainsDate??t.locale?.options?.firstWeekContainsDate??1,a=Sa(e,r),s=Ee(r?.in||e,0);return s.setFullYear(a,0,n),s.setHours(0,0,0,0),bn(s,r)}function No(e,r){const t=ee(e,r?.in),n=+bn(t,r)-+_o(t,r);return Math.round(n/ta)+1}function z(e,r){const t=e<0?"-":"",n=Math.abs(e).toString().padStart(r,"0");return t+n}const Ie={y(e,r){const t=e.getFullYear(),n=t>0?t:1-t;return z(r==="yy"?n%100:n,r.length)},M(e,r){const t=e.getMonth();return r==="M"?String(t+1):z(t+1,2)},d(e,r){return z(e.getDate(),r.length)},a(e,r){const t=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(e,r){return z(e.getHours()%12||12,r.length)},H(e,r){return z(e.getHours(),r.length)},m(e,r){return z(e.getMinutes(),r.length)},s(e,r){return z(e.getSeconds(),r.length)},S(e,r){const t=r.length,n=e.getMilliseconds(),a=Math.trunc(n*Math.pow(10,t-3));return z(a,r.length)}},Ze={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},ut={G:function(e,r,t){const n=e.getFullYear()>0?1:0;switch(r){case"G":case"GG":case"GGG":return t.era(n,{width:"abbreviated"});case"GGGGG":return t.era(n,{width:"narrow"});case"GGGG":default:return t.era(n,{width:"wide"})}},y:function(e,r,t){if(r==="yo"){const n=e.getFullYear(),a=n>0?n:1-n;return t.ordinalNumber(a,{unit:"year"})}return Ie.y(e,r)},Y:function(e,r,t,n){const a=Sa(e,n),s=a>0?a:1-a;if(r==="YY"){const i=s%100;return z(i,2)}return r==="Yo"?t.ordinalNumber(s,{unit:"year"}):z(s,r.length)},R:function(e,r){const t=Ra(e);return z(t,r.length)},u:function(e,r){const t=e.getFullYear();return z(t,r.length)},Q:function(e,r,t){const n=Math.ceil((e.getMonth()+1)/3);switch(r){case"Q":return String(n);case"QQ":return z(n,2);case"Qo":return t.ordinalNumber(n,{unit:"quarter"});case"QQQ":return t.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(n,{width:"wide",context:"formatting"})}},q:function(e,r,t){const n=Math.ceil((e.getMonth()+1)/3);switch(r){case"q":return String(n);case"qq":return z(n,2);case"qo":return t.ordinalNumber(n,{unit:"quarter"});case"qqq":return t.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(n,{width:"wide",context:"standalone"})}},M:function(e,r,t){const n=e.getMonth();switch(r){case"M":case"MM":return Ie.M(e,r);case"Mo":return t.ordinalNumber(n+1,{unit:"month"});case"MMM":return t.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(n,{width:"wide",context:"formatting"})}},L:function(e,r,t){const n=e.getMonth();switch(r){case"L":return String(n+1);case"LL":return z(n+1,2);case"Lo":return t.ordinalNumber(n+1,{unit:"month"});case"LLL":return t.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(n,{width:"wide",context:"standalone"})}},w:function(e,r,t,n){const a=No(e,n);return r==="wo"?t.ordinalNumber(a,{unit:"week"}):z(a,r.length)},I:function(e,r,t){const n=qo(e);return r==="Io"?t.ordinalNumber(n,{unit:"week"}):z(n,r.length)},d:function(e,r,t){return r==="do"?t.ordinalNumber(e.getDate(),{unit:"date"}):Ie.d(e,r)},D:function(e,r,t){const n=Po(e);return r==="Do"?t.ordinalNumber(n,{unit:"dayOfYear"}):z(n,r.length)},E:function(e,r,t){const n=e.getDay();switch(r){case"E":case"EE":case"EEE":return t.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(n,{width:"short",context:"formatting"});case"EEEE":default:return t.day(n,{width:"wide",context:"formatting"})}},e:function(e,r,t,n){const a=e.getDay(),s=(a-n.weekStartsOn+8)%7||7;switch(r){case"e":return String(s);case"ee":return z(s,2);case"eo":return t.ordinalNumber(s,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});case"eeee":default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(e,r,t,n){const a=e.getDay(),s=(a-n.weekStartsOn+8)%7||7;switch(r){case"c":return String(s);case"cc":return z(s,r.length);case"co":return t.ordinalNumber(s,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});case"cccc":default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(e,r,t){const n=e.getDay(),a=n===0?7:n;switch(r){case"i":return String(a);case"ii":return z(a,r.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(n,{width:"short",context:"formatting"});case"iiii":default:return t.day(n,{width:"wide",context:"formatting"})}},a:function(e,r,t){const a=e.getHours()/12>=1?"pm":"am";switch(r){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,r,t){const n=e.getHours();let a;switch(n===12?a=Ze.noon:n===0?a=Ze.midnight:a=n/12>=1?"pm":"am",r){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,r,t){const n=e.getHours();let a;switch(n>=17?a=Ze.evening:n>=12?a=Ze.afternoon:n>=4?a=Ze.morning:a=Ze.night,r){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,r,t){if(r==="ho"){let n=e.getHours()%12;return n===0&&(n=12),t.ordinalNumber(n,{unit:"hour"})}return Ie.h(e,r)},H:function(e,r,t){return r==="Ho"?t.ordinalNumber(e.getHours(),{unit:"hour"}):Ie.H(e,r)},K:function(e,r,t){const n=e.getHours()%12;return r==="Ko"?t.ordinalNumber(n,{unit:"hour"}):z(n,r.length)},k:function(e,r,t){let n=e.getHours();return n===0&&(n=24),r==="ko"?t.ordinalNumber(n,{unit:"hour"}):z(n,r.length)},m:function(e,r,t){return r==="mo"?t.ordinalNumber(e.getMinutes(),{unit:"minute"}):Ie.m(e,r)},s:function(e,r,t){return r==="so"?t.ordinalNumber(e.getSeconds(),{unit:"second"}):Ie.s(e,r)},S:function(e,r){return Ie.S(e,r)},X:function(e,r,t){const n=e.getTimezoneOffset();if(n===0)return"Z";switch(r){case"X":return gt(n);case"XXXX":case"XX":return Ge(n);case"XXXXX":case"XXX":default:return Ge(n,":")}},x:function(e,r,t){const n=e.getTimezoneOffset();switch(r){case"x":return gt(n);case"xxxx":case"xx":return Ge(n);case"xxxxx":case"xxx":default:return Ge(n,":")}},O:function(e,r,t){const n=e.getTimezoneOffset();switch(r){case"O":case"OO":case"OOO":return"GMT"+dt(n,":");case"OOOO":default:return"GMT"+Ge(n,":")}},z:function(e,r,t){const n=e.getTimezoneOffset();switch(r){case"z":case"zz":case"zzz":return"GMT"+dt(n,":");case"zzzz":default:return"GMT"+Ge(n,":")}},t:function(e,r,t){const n=Math.trunc(+e/1e3);return z(n,r.length)},T:function(e,r,t){return z(+e,r.length)}};function dt(e,r=""){const t=e>0?"-":"+",n=Math.abs(e),a=Math.trunc(n/60),s=n%60;return s===0?t+String(a):t+String(a)+r+z(s,2)}function gt(e,r){return e%60===0?(e>0?"-":"+")+z(Math.abs(e)/60,2):Ge(e,r)}function Ge(e,r=""){const t=e>0?"-":"+",n=Math.abs(e),a=z(Math.trunc(n/60),2),s=z(n%60,2);return t+a+r+s}const mt=(e,r)=>{switch(e){case"P":return r.date({width:"short"});case"PP":return r.date({width:"medium"});case"PPP":return r.date({width:"long"});case"PPPP":default:return r.date({width:"full"})}},ja=(e,r)=>{switch(e){case"p":return r.time({width:"short"});case"pp":return r.time({width:"medium"});case"ppp":return r.time({width:"long"});case"pppp":default:return r.time({width:"full"})}},Fo=(e,r)=>{const t=e.match(/(P+)(p+)?/)||[],n=t[1],a=t[2];if(!a)return mt(e,r);let s;switch(n){case"P":s=r.dateTime({width:"short"});break;case"PP":s=r.dateTime({width:"medium"});break;case"PPP":s=r.dateTime({width:"long"});break;case"PPPP":default:s=r.dateTime({width:"full"});break}return s.replace("{{date}}",mt(n,r)).replace("{{time}}",ja(a,r))},xo={p:ja,P:Fo},Do=/^D+$/,Io=/^Y+$/,Bo=["D","DD","YY","YYYY"];function Mo(e){return Do.test(e)}function Vo(e){return Io.test(e)}function Lo(e,r,t){const n=Ko(e,r,t);if(console.warn(n),Bo.includes(e))throw new RangeError(n)}function Ko(e,r,t){const n=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${r}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Co=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Go=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Uo=/^'([^]*?)'?$/,Yo=/''/g,Ho=/[a-zA-Z]/;function je(e,r,t){const n=Jn(),a=t?.locale??n.locale??Wi,s=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,l=ee(e,t?.in);if(!To(l))throw new RangeError("Invalid time value");let o=r.match(Go).map(d=>{const m=d[0];if(m==="p"||m==="P"){const f=xo[m];return f(d,a.formatLong)}return d}).join("").match(Co).map(d=>{if(d==="''")return{isToken:!1,value:"'"};const m=d[0];if(m==="'")return{isToken:!1,value:$o(d)};if(ut[m])return{isToken:!0,value:d};if(m.match(Ho))throw new RangeError("Format string contains an unescaped latin alphabet character `"+m+"`");return{isToken:!1,value:d}});a.localize.preprocessor&&(o=a.localize.preprocessor(l,o));const u={firstWeekContainsDate:s,weekStartsOn:i,locale:a};return o.map(d=>{if(!d.isToken)return d.value;const m=d.value;(!t?.useAdditionalWeekYearTokens&&Vo(m)||!t?.useAdditionalDayOfYearTokens&&Mo(m))&&Lo(m,r,String(e));const f=ut[m[0]];return f(l,m,a.localize,u)}).join("")}function $o(e){const r=e.match(Uo);return r?r[1].replace(Yo,"'"):e}function Wo(e,r){return+ee(e)>+ee(r)}function Pa(e,r,t){return Ir(e,-r,t)}function zo(e,r,t){return hn(e,-r,t)}function Jo(e,r,t){return Kn(e,-r,t)}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Xo=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],Un=Xo.join(","),qa=typeof Element>"u",un=qa?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Yn=!qa&&Element.prototype.getRootNode?function(e){var r;return e==null||(r=e.getRootNode)===null||r===void 0?void 0:r.call(e)}:function(e){return e?.ownerDocument},Hn=function e(r,t){var n;t===void 0&&(t=!0);var a=r==null||(n=r.getAttribute)===null||n===void 0?void 0:n.call(r,"inert"),s=a===""||a==="true",i=s||t&&r&&e(r.parentNode);return i},Qo=function(r){var t,n=r==null||(t=r.getAttribute)===null||t===void 0?void 0:t.call(r,"contenteditable");return n===""||n==="true"},_a=function(r,t,n){if(Hn(r))return[];var a=Array.prototype.slice.apply(r.querySelectorAll(Un));return t&&un.call(r,Un)&&a.unshift(r),a=a.filter(n),a},Na=function e(r,t,n){for(var a=[],s=Array.from(r);s.length;){var i=s.shift();if(!Hn(i,!1))if(i.tagName==="SLOT"){var l=i.assignedElements(),o=l.length?l:i.children,u=e(o,!0,n);n.flatten?a.push.apply(a,u):a.push({scopeParent:i,candidates:u})}else{var d=un.call(i,Un);d&&n.filter(i)&&(t||!r.includes(i))&&a.push(i);var m=i.shadowRoot||typeof n.getShadowRoot=="function"&&n.getShadowRoot(i),f=!Hn(m,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(i));if(m&&f){var c=e(m===!0?i.children:m.children,!0,n);n.flatten?a.push.apply(a,c):a.push({scopeParent:i,candidates:c})}else s.unshift.apply(s,i.children)}}return a},Fa=function(r){return!isNaN(parseInt(r.getAttribute("tabindex"),10))},xa=function(r){if(!r)throw new Error("No node provided");return r.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(r.tagName)||Qo(r))&&!Fa(r)?0:r.tabIndex},Zo=function(r,t){var n=xa(r);return n<0&&t&&!Fa(r)?0:n},eu=function(r,t){return r.tabIndex===t.tabIndex?r.documentOrder-t.documentOrder:r.tabIndex-t.tabIndex},Da=function(r){return r.tagName==="INPUT"},nu=function(r){return Da(r)&&r.type==="hidden"},ru=function(r){var t=r.tagName==="DETAILS"&&Array.prototype.slice.apply(r.children).some(function(n){return n.tagName==="SUMMARY"});return t},tu=function(r,t){for(var n=0;n<r.length;n++)if(r[n].checked&&r[n].form===t)return r[n]},au=function(r){if(!r.name)return!0;var t=r.form||Yn(r),n=function(l){return t.querySelectorAll('input[type="radio"][name="'+l+'"]')},a;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")a=n(window.CSS.escape(r.name));else try{a=n(r.name)}catch(i){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",i.message),!1}var s=tu(a,r.form);return!s||s===r},su=function(r){return Da(r)&&r.type==="radio"},iu=function(r){return su(r)&&!au(r)},lu=function(r){var t,n=r&&Yn(r),a=(t=n)===null||t===void 0?void 0:t.host,s=!1;if(n&&n!==r){var i,l,o;for(s=!!((i=a)!==null&&i!==void 0&&(l=i.ownerDocument)!==null&&l!==void 0&&l.contains(a)||r!=null&&(o=r.ownerDocument)!==null&&o!==void 0&&o.contains(r));!s&&a;){var u,d,m;n=Yn(a),a=(u=n)===null||u===void 0?void 0:u.host,s=!!((d=a)!==null&&d!==void 0&&(m=d.ownerDocument)!==null&&m!==void 0&&m.contains(a))}}return s},ct=function(r){var t=r.getBoundingClientRect(),n=t.width,a=t.height;return n===0&&a===0},ou=function(r,t){var n=t.displayCheck,a=t.getShadowRoot;if(getComputedStyle(r).visibility==="hidden")return!0;var s=un.call(r,"details>summary:first-of-type"),i=s?r.parentElement:r;if(un.call(i,"details:not([open]) *"))return!0;if(!n||n==="full"||n==="legacy-full"){if(typeof a=="function"){for(var l=r;r;){var o=r.parentElement,u=Yn(r);if(o&&!o.shadowRoot&&a(o)===!0)return ct(r);r.assignedSlot?r=r.assignedSlot:!o&&u!==r.ownerDocument?r=u.host:r=o}r=l}if(lu(r))return!r.getClientRects().length;if(n!=="legacy-full")return!0}else if(n==="non-zero-area")return ct(r);return!1},uu=function(r){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(r.tagName))for(var t=r.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var n=0;n<t.children.length;n++){var a=t.children.item(n);if(a.tagName==="LEGEND")return un.call(t,"fieldset[disabled] *")?!0:!a.contains(r)}return!0}t=t.parentElement}return!1},br=function(r,t){return!(t.disabled||Hn(t)||nu(t)||ou(t,r)||ru(t)||uu(t))},hr=function(r,t){return!(iu(t)||xa(t)<0||!br(r,t))},du=function(r){var t=parseInt(r.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},gu=function e(r){var t=[],n=[];return r.forEach(function(a,s){var i=!!a.scopeParent,l=i?a.scopeParent:a,o=Zo(l,i),u=i?e(a.candidates):l;o===0?i?t.push.apply(t,u):t.push(l):n.push({documentOrder:s,tabIndex:o,item:a,isScope:i,content:u})}),n.sort(eu).reduce(function(a,s){return s.isScope?a.push.apply(a,s.content):a.push(s.content),a},[]).concat(t)},Br=function(r,t){t=t||{};var n;return t.getShadowRoot?n=Na([r],t.includeContainer,{filter:hr.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:du}):n=_a(r,t.includeContainer,hr.bind(null,t)),gu(n)},mu=function(r,t){t=t||{};var n;return t.getShadowRoot?n=Na([r],t.includeContainer,{filter:br.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):n=_a(r,t.includeContainer,br.bind(null,t)),n},Ia=function(r,t){if(t=t||{},!r)throw new Error("No node provided");return un.call(r,Un)===!1?!1:hr(t,r)};function Ba(){const e=navigator.userAgentData;return e!=null&&e.platform?e.platform:navigator.platform}function Ma(){const e=navigator.userAgentData;return e&&Array.isArray(e.brands)?e.brands.map(r=>{let{brand:t,version:n}=r;return t+"/"+n}).join(" "):navigator.userAgent}function Va(){return/apple/i.test(navigator.vendor)}function Tr(){const e=/android/i;return e.test(Ba())||e.test(Ma())}function cu(){return Ba().toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}function La(){return Ma().includes("jsdom/")}const ft="data-floating-ui-focusable",fu="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function Be(e){let r=e.activeElement;for(;((t=r)==null||(t=t.shadowRoot)==null?void 0:t.activeElement)!=null;){var t;r=r.shadowRoot.activeElement}return r}function me(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&Mn(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function Me(e){return"composedPath"in e?e.composedPath()[0]:e.target}function ir(e,r){if(r==null)return!1;if("composedPath"in e)return e.composedPath().includes(r);const t=e;return t.target!=null&&r.contains(t.target)}function vu(e){return e.matches("html,body")}function ce(e){return e?.ownerDocument||document}function Ka(e){return oe(e)&&e.matches(fu)}function vt(e){return e?e.getAttribute("role")==="combobox"&&Ka(e):!1}function ku(e){if(!e||La())return!0;try{return e.matches(":focus-visible")}catch{return!0}}function kt(e){return e?e.hasAttribute(ft)?e:e.querySelector("["+ft+"]")||e:null}function pn(e,r,t){t===void 0&&(t=!0);let n=e.filter(s=>{var i;return s.parentId===r&&((i=s.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=t?e.filter(s=>{var i;return(i=a)==null?void 0:i.some(l=>{var o;return s.parentId===l.id&&((o=s.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function pt(e,r){var t;let n=[],a=(t=e.find(s=>s.id===r))==null?void 0:t.parentId;for(;a;){const s=e.find(i=>i.id===a);a=s?.parentId,s&&(n=n.concat(s))}return n}function lr(e){e.preventDefault(),e.stopPropagation()}function pu(e){return"nativeEvent"in e}function yu(e){return e.mozInputSource===0&&e.isTrusted?!0:Tr()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function bu(e){return La()?!1:!Tr()&&e.width===0&&e.height===0||Tr()&&e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"||e.width<1&&e.height<1&&e.pressure===0&&e.detail===0&&e.pointerType==="touch"}function Rr(e,r){const t=["mouse","pen"];return t.push("",void 0),t.includes(e)}var we=typeof document<"u"?g.useLayoutEffect:g.useEffect;const hu={...Gt};function $e(e){const r=g.useRef(e);return we(()=>{r.current=e}),r}const Tu=hu.useInsertionEffect,Ru=Tu||(e=>e());function ye(e){const r=g.useRef(()=>{});return Ru(()=>{r.current=e}),g.useCallback(function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return r.current==null?void 0:r.current(...n)},[])}const nr=()=>({getShadowRoot:!0,displayCheck:typeof ResizeObserver=="function"&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function Ca(e,r){const t=Br(e,nr()),n=t.length;if(n===0)return;const a=Be(ce(e)),s=t.indexOf(a),i=s===-1?r===1?0:n-1:s+r;return t[i]}function wu(e){return Ca(ce(e).body,1)||e}function Eu(e){return Ca(ce(e).body,-1)||e}function yt(e,r){const t=r||e.currentTarget,n=e.relatedTarget;return!n||!me(t,n)}const Au="data-floating-ui-focusable",bt="active",ht="selected",Ou={...Gt};let Tt=!1,Su=0;const Rt=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Su++;function ju(){const[e,r]=g.useState(()=>Tt?Rt():void 0);return we(()=>{e==null&&r(Rt())},[]),g.useEffect(()=>{Tt=!0},[]),e}const Pu=Ou.useId,qu=Pu||ju;function _u(){const e=new Map;return{emit(r,t){var n;(n=e.get(r))==null||n.forEach(a=>a(t))},on(r,t){e.has(r)||e.set(r,new Set),e.get(r).add(t)},off(r,t){var n;(n=e.get(r))==null||n.delete(t)}}}const Nu=g.createContext(null),Fu=g.createContext(null),Ga=()=>{var e;return((e=g.useContext(Nu))==null?void 0:e.id)||null},rr=()=>g.useContext(Fu);function dn(e){return"data-floating-ui-"+e}function he(e){e.current!==-1&&(clearTimeout(e.current),e.current=-1)}const wt=dn("safe-polygon");function or(e,r,t){if(t&&!Rr(t))return 0;if(typeof e=="number")return e;if(typeof e=="function"){const n=e();return typeof n=="number"?n:n?.[r]}return e?.[r]}function ur(e){return typeof e=="function"?e():e}function Ua(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,dataRef:a,events:s,elements:i}=e,{enabled:l=!0,delay:o=0,handleClose:u=null,mouseOnly:d=!1,restMs:m=0,move:f=!0}=r,c=rr(),v=Ga(),k=$e(u),y=$e(o),b=$e(t),E=$e(m),T=g.useRef(),P=g.useRef(-1),N=g.useRef(),D=g.useRef(-1),I=g.useRef(!0),C=g.useRef(!1),V=g.useRef(()=>{}),F=g.useRef(!1),x=g.useCallback(()=>{var q;const j=(q=a.current.openEvent)==null?void 0:q.type;return j?.includes("mouse")&&j!=="mousedown"},[a]);g.useEffect(()=>{if(!l)return;function q(j){let{open:S}=j;S||(he(P),he(D),I.current=!0,F.current=!1)}return s.on("openchange",q),()=>{s.off("openchange",q)}},[l,s]),g.useEffect(()=>{if(!l||!k.current||!t)return;function q(S){x()&&n(!1,S,"hover")}const j=ce(i.floating).documentElement;return j.addEventListener("mouseleave",q),()=>{j.removeEventListener("mouseleave",q)}},[i.floating,t,n,l,k,x]);const O=g.useCallback(function(q,j,S){j===void 0&&(j=!0),S===void 0&&(S="hover");const M=or(y.current,"close",T.current);M&&!N.current?(he(P),P.current=window.setTimeout(()=>n(!1,q,S),M)):j&&(he(P),n(!1,q,S))},[y,n]),R=ye(()=>{V.current(),N.current=void 0}),h=ye(()=>{if(C.current){const q=ce(i.floating).body;q.style.pointerEvents="",q.removeAttribute(wt),C.current=!1}}),A=ye(()=>a.current.openEvent?["click","mousedown"].includes(a.current.openEvent.type):!1);g.useEffect(()=>{if(!l)return;function q(_){if(he(P),I.current=!1,d&&!Rr(T.current)||ur(E.current)>0&&!or(y.current,"open"))return;const U=or(y.current,"open",T.current);U?P.current=window.setTimeout(()=>{b.current||n(!0,_,"hover")},U):t||n(!0,_,"hover")}function j(_){if(A()){h();return}V.current();const U=ce(i.floating);if(he(D),F.current=!1,k.current&&a.current.floatingContext){t||he(P),N.current=k.current({...a.current.floatingContext,tree:c,x:_.clientX,y:_.clientY,onClose(){h(),R(),A()||O(_,!0,"safe-polygon")}});const ne=N.current;U.addEventListener("mousemove",ne),V.current=()=>{U.removeEventListener("mousemove",ne)};return}(T.current==="touch"?!me(i.floating,_.relatedTarget):!0)&&O(_)}function S(_){A()||a.current.floatingContext&&(k.current==null||k.current({...a.current.floatingContext,tree:c,x:_.clientX,y:_.clientY,onClose(){h(),R(),A()||O(_)}})(_))}function M(){he(P)}function $(_){A()||O(_,!1)}if(Z(i.domReference)){const _=i.domReference,U=i.floating;return t&&_.addEventListener("mouseleave",S),f&&_.addEventListener("mousemove",q,{once:!0}),_.addEventListener("mouseenter",q),_.addEventListener("mouseleave",j),U&&(U.addEventListener("mouseleave",S),U.addEventListener("mouseenter",M),U.addEventListener("mouseleave",$)),()=>{t&&_.removeEventListener("mouseleave",S),f&&_.removeEventListener("mousemove",q),_.removeEventListener("mouseenter",q),_.removeEventListener("mouseleave",j),U&&(U.removeEventListener("mouseleave",S),U.removeEventListener("mouseenter",M),U.removeEventListener("mouseleave",$))}}},[i,l,e,d,f,O,R,h,n,t,b,c,y,k,a,A,E]),we(()=>{var q;if(l&&t&&(q=k.current)!=null&&q.__options.blockPointerEvents&&x()){C.current=!0;const S=i.floating;if(Z(i.domReference)&&S){var j;const M=ce(i.floating).body;M.setAttribute(wt,"");const $=i.domReference,_=c==null||(j=c.nodesRef.current.find(U=>U.id===v))==null||(j=j.context)==null?void 0:j.elements.floating;return _&&(_.style.pointerEvents=""),M.style.pointerEvents="none",$.style.pointerEvents="auto",S.style.pointerEvents="auto",()=>{M.style.pointerEvents="",$.style.pointerEvents="",S.style.pointerEvents=""}}}},[l,t,v,i,c,k,x]),we(()=>{t||(T.current=void 0,F.current=!1,R(),h())},[t,R,h]),g.useEffect(()=>()=>{R(),he(P),he(D),h()},[l,i.domReference,R,h]);const B=g.useMemo(()=>{function q(j){T.current=j.pointerType}return{onPointerDown:q,onPointerEnter:q,onMouseMove(j){const{nativeEvent:S}=j;function M(){!I.current&&!b.current&&n(!0,S,"hover")}d&&!Rr(T.current)||t||ur(E.current)===0||F.current&&j.movementX**2+j.movementY**2<2||(he(D),T.current==="touch"?M():(F.current=!0,D.current=window.setTimeout(M,ur(E.current))))}}},[d,n,t,b,E]);return g.useMemo(()=>l?{reference:B}:{},[l,B])}let Et=0;function en(e,r){r===void 0&&(r={});const{preventScroll:t=!1,cancelPrevious:n=!0,sync:a=!1}=r;n&&cancelAnimationFrame(Et);const s=()=>e?.focus({preventScroll:t});a?s():Et=requestAnimationFrame(s)}function dr(e,r){if(!e||!r)return!1;const t=r.getRootNode==null?void 0:r.getRootNode();if(e.contains(r))return!0;if(t&&Mn(t)){let n=r;for(;n;){if(e===n)return!0;n=n.parentNode||n.host}}return!1}function xu(e){return"composedPath"in e?e.composedPath()[0]:e.target}function Du(e){return e?.ownerDocument||document}let nn=new WeakMap,jn=new WeakSet,Pn={},gr=0;const Iu=()=>typeof HTMLElement<"u"&&"inert"in HTMLElement.prototype,Ya=e=>e&&(e.host||Ya(e.parentNode)),Bu=(e,r)=>r.map(t=>{if(e.contains(t))return t;const n=Ya(t);return e.contains(n)?n:null}).filter(t=>t!=null);function Mu(e,r,t,n){const a="data-floating-ui-inert",s=n?"inert":t?"aria-hidden":null,i=Bu(r,e),l=new Set,o=new Set(i),u=[];Pn[a]||(Pn[a]=new WeakMap);const d=Pn[a];i.forEach(m),f(r),l.clear();function m(c){!c||l.has(c)||(l.add(c),c.parentNode&&m(c.parentNode))}function f(c){!c||o.has(c)||[].forEach.call(c.children,v=>{if(Ke(v)!=="script")if(l.has(v))f(v);else{const k=s?v.getAttribute(s):null,y=k!==null&&k!=="false",b=nn.get(v)||0,E=s?b+1:b,T=(d.get(v)||0)+1;nn.set(v,E),d.set(v,T),u.push(v),E===1&&y&&jn.add(v),T===1&&v.setAttribute(a,""),!y&&s&&v.setAttribute(s,s==="inert"?"":"true")}})}return gr++,()=>{u.forEach(c=>{const v=nn.get(c)||0,k=s?v-1:v,y=(d.get(c)||0)-1;nn.set(c,k),d.set(c,y),k||(!jn.has(c)&&s&&c.removeAttribute(s),jn.delete(c)),y||c.removeAttribute(a)}),gr--,gr||(nn=new WeakMap,nn=new WeakMap,jn=new WeakSet,Pn={})}}function At(e,r,t){r===void 0&&(r=!1),t===void 0&&(t=!1);const n=Du(e[0]).body;return Mu(e.concat(Array.from(n.querySelectorAll("[aria-live]"))),n,r,t)}const Mr={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"fixed",whiteSpace:"nowrap",width:"1px",top:0,left:0},Ot=g.forwardRef(function(r,t){const[n,a]=g.useState();we(()=>{Va()&&a("button")},[]);const s={ref:t,tabIndex:0,role:n,"aria-hidden":n?void 0:!0,[dn("focus-guard")]:"",style:Mr};return p.jsx("span",{...r,...s})}),Vu=g.createContext(null),Lu=()=>g.useContext(Vu);function St(e){return g.useMemo(()=>r=>{e.forEach(t=>{t&&(t.current=r)})},e)}const Ku=20;let Ue=[];function Cu(e){Ue=Ue.filter(r=>r.isConnected),e&&Ke(e)!=="body"&&(Ue.push(e),Ue.length>Ku&&(Ue=Ue.slice(-20)))}function jt(){return Ue.slice().reverse().find(e=>e.isConnected)}function Gu(e){const r=nr();return Ia(e,r)?e:Br(e,r)[0]||e}function Pt(e,r){var t;if(!r.current.includes("floating")&&!((t=e.getAttribute("role"))!=null&&t.includes("dialog")))return;const n=nr(),s=mu(e,n).filter(l=>{const o=l.getAttribute("data-tabindex")||"";return Ia(l,n)||l.hasAttribute("data-tabindex")&&!o.startsWith("-")}),i=e.getAttribute("tabindex");r.current.includes("floating")||s.length===0?i!=="0"&&e.setAttribute("tabindex","0"):(i!=="-1"||e.hasAttribute("data-tabindex")&&e.getAttribute("data-tabindex")!=="-1")&&(e.setAttribute("tabindex","-1"),e.setAttribute("data-tabindex","-1"))}const Uu=g.forwardRef(function(r,t){return p.jsx("button",{...r,type:"button",ref:t,tabIndex:-1,style:Mr})});function Ha(e){const{context:r,children:t,disabled:n=!1,order:a=["content"],guards:s=!0,initialFocus:i=0,returnFocus:l=!0,restoreFocus:o=!1,modal:u=!0,visuallyHiddenDismiss:d=!1,closeOnFocusOut:m=!0,outsideElementsInert:f=!1,getInsideElements:c=()=>[]}=e,{open:v,onOpenChange:k,events:y,dataRef:b,elements:{domReference:E,floating:T}}=r,P=ye(()=>{var L;return(L=b.current.floatingContext)==null?void 0:L.nodeId}),N=ye(c),D=typeof i=="number"&&i<0,I=vt(E)&&D,C=Iu(),V=C?s:!0,F=!V||C&&f,x=$e(a),O=$e(i),R=$e(l),h=rr(),A=Lu(),B=g.useRef(null),q=g.useRef(null),j=g.useRef(!1),S=g.useRef(!1),M=g.useRef(-1),$=A!=null,_=kt(T),U=ye(function(L){return L===void 0&&(L=_),L?Br(L,nr()):[]}),X=ye(L=>{const K=U(L);return x.current.map(Y=>E&&Y==="reference"?E:_&&Y==="floating"?_:K).filter(Boolean).flat()});g.useEffect(()=>{if(n||!u)return;function L(Y){if(Y.key==="Tab"){me(_,Be(ce(_)))&&U().length===0&&!I&&lr(Y);const W=X(),re=Me(Y);x.current[0]==="reference"&&re===E&&(lr(Y),Y.shiftKey?en(W[W.length-1]):en(W[1])),x.current[1]==="floating"&&re===_&&Y.shiftKey&&(lr(Y),en(W[0]))}}const K=ce(_);return K.addEventListener("keydown",L),()=>{K.removeEventListener("keydown",L)}},[n,E,_,u,x,I,U,X]),g.useEffect(()=>{if(n||!T)return;function L(K){const Y=Me(K),re=U().indexOf(Y);re!==-1&&(M.current=re)}return T.addEventListener("focusin",L),()=>{T.removeEventListener("focusin",L)}},[n,T,U]),g.useEffect(()=>{if(n||!m)return;function L(){S.current=!0,setTimeout(()=>{S.current=!1})}function K(Y){const W=Y.relatedTarget,re=Y.currentTarget;queueMicrotask(()=>{const xe=P(),ge=!(me(E,W)||me(T,W)||me(W,T)||me(A?.portalNode,W)||W!=null&&W.hasAttribute(dn("focus-guard"))||h&&(pn(h.nodesRef.current,xe).find(fe=>{var se,te;return me((se=fe.context)==null?void 0:se.elements.floating,W)||me((te=fe.context)==null?void 0:te.elements.domReference,W)})||pt(h.nodesRef.current,xe).find(fe=>{var se,te,De;return[(se=fe.context)==null?void 0:se.elements.floating,kt((te=fe.context)==null?void 0:te.elements.floating)].includes(W)||((De=fe.context)==null?void 0:De.elements.domReference)===W})));if(re===E&&_&&Pt(_,x),o&&ge&&Be(ce(_))===ce(_).body){oe(_)&&_.focus();const fe=M.current,se=U(),te=se[fe]||se[se.length-1]||_;oe(te)&&te.focus()}(I||!u)&&W&&ge&&!S.current&&W!==jt()&&(j.current=!0,k(!1,Y,"focus-out"))})}if(T&&oe(E))return E.addEventListener("focusout",K),E.addEventListener("pointerdown",L),T.addEventListener("focusout",K),()=>{E.removeEventListener("focusout",K),E.removeEventListener("pointerdown",L),T.removeEventListener("focusout",K)}},[n,E,T,_,u,h,A,k,m,o,U,I,P,x]);const ne=g.useRef(null),ie=g.useRef(null),le=St([ne,A?.beforeInsideRef]),Q=St([ie,A?.afterInsideRef]);g.useEffect(()=>{var L,K;if(n||!T)return;const Y=Array.from((A==null||(L=A.portalNode)==null?void 0:L.querySelectorAll("["+dn("portal")+"]"))||[]),W=h?pt(h.nodesRef.current,P()):[],re=h&&!u?W.map(se=>{var te;return(te=se.context)==null?void 0:te.elements.floating}):[],xe=(K=W.find(se=>{var te;return vt(((te=se.context)==null?void 0:te.elements.domReference)||null)}))==null||(K=K.context)==null?void 0:K.elements.domReference,ge=[T,xe,...Y,...re,...N(),B.current,q.current,ne.current,ie.current,A?.beforeOutsideRef.current,A?.afterOutsideRef.current,x.current.includes("reference")||I?E:null].filter(se=>se!=null),fe=u||I?At(ge,!F,F):At(ge);return()=>{fe()}},[n,E,T,u,x,A,I,V,F,h,P,N]),we(()=>{if(n||!oe(_))return;const L=ce(_),K=Be(L);queueMicrotask(()=>{const Y=X(_),W=O.current,re=(typeof W=="number"?Y[W]:W.current)||_,xe=me(_,K);!D&&!xe&&v&&en(re,{preventScroll:re===_})})},[n,v,_,D,X,O]),we(()=>{if(n||!_)return;let L=!1;const K=ce(_),Y=Be(K);Cu(Y);function W(ge){let{reason:fe,event:se,nested:te}=ge;if(["hover","safe-polygon"].includes(fe)&&se.type==="mouseleave"&&(j.current=!0),fe==="outside-press")if(te)j.current=!1,L=!0;else if(yu(se)||bu(se))j.current=!1;else{let De=!1;document.createElement("div").focus({get preventScroll(){return De=!0,!1}}),De?(j.current=!1,L=!0):j.current=!0}}y.on("openchange",W);const re=K.createElement("span");re.setAttribute("tabindex","-1"),re.setAttribute("aria-hidden","true"),Object.assign(re.style,Mr),$&&E&&E.insertAdjacentElement("afterend",re);function xe(){if(typeof R.current=="boolean"){const ge=E||jt();return ge&&ge.isConnected?ge:re}return R.current.current||re}return()=>{y.off("openchange",W);const ge=Be(K),fe=me(T,ge)||h&&pn(h.nodesRef.current,P()).some(te=>{var De;return me((De=te.context)==null?void 0:De.elements.floating,ge)}),se=xe();queueMicrotask(()=>{const te=Gu(se);R.current&&!j.current&&oe(te)&&(!(te!==ge&&ge!==K.body)||fe)&&te.focus({preventScroll:L}),re.remove()})}},[n,T,_,R,b,y,h,$,E,P]),g.useEffect(()=>{queueMicrotask(()=>{j.current=!1})},[n]),we(()=>{if(!n&&A)return A.setFocusManagerState({modal:u,closeOnFocusOut:m,open:v,onOpenChange:k,domReference:E}),()=>{A.setFocusManagerState(null)}},[n,A,u,v,k,m,E]),we(()=>{n||_&&Pt(_,x)},[n,_,x]);function ae(L){return n||!d||!u?null:p.jsx(Uu,{ref:L==="start"?B:q,onClick:K=>k(!1,K.nativeEvent),children:typeof d=="string"?d:"Dismiss"})}const be=!n&&V&&(u?!I:!0)&&($||u);return p.jsxs(p.Fragment,{children:[be&&p.jsx(Ot,{"data-type":"inside",ref:le,onFocus:L=>{if(u){const Y=X();en(a[0]==="reference"?Y[0]:Y[Y.length-1])}else if(A!=null&&A.preserveTabOrder&&A.portalNode)if(j.current=!1,yt(L,A.portalNode)){const Y=wu(E);Y?.focus()}else{var K;(K=A.beforeOutsideRef.current)==null||K.focus()}}}),!I&&ae("start"),t,ae("end"),be&&p.jsx(Ot,{"data-type":"inside",ref:Q,onFocus:L=>{if(u)en(X()[0]);else if(A!=null&&A.preserveTabOrder&&A.portalNode)if(m&&(j.current=!0),yt(L,A.portalNode)){const Y=Eu(E);Y?.focus()}else{var K;(K=A.afterOutsideRef.current)==null||K.focus()}}})]})}const Yu={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},Hu={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},qt=e=>{var r,t;return{escapeKey:typeof e=="boolean"?e:(r=e?.escapeKey)!=null?r:!1,outsidePress:typeof e=="boolean"?e:(t=e?.outsidePress)!=null?t:!0}};function $a(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,elements:a,dataRef:s}=e,{enabled:i=!0,escapeKey:l=!0,outsidePress:o=!0,outsidePressEvent:u="pointerdown",referencePress:d=!1,referencePressEvent:m="pointerdown",ancestorScroll:f=!1,bubbles:c,capture:v}=r,k=rr(),y=ye(typeof o=="function"?o:()=>!1),b=typeof o=="function"?y:o,E=g.useRef(!1),T=g.useRef(!1),{escapeKey:P,outsidePress:N}=qt(c),{escapeKey:D,outsidePress:I}=qt(v),C=g.useRef(!1),V=ye(A=>{var B;if(!t||!i||!l||A.key!=="Escape"||C.current)return;const q=(B=s.current.floatingContext)==null?void 0:B.nodeId,j=k?pn(k.nodesRef.current,q):[];if(!P&&(A.stopPropagation(),j.length>0)){let S=!0;if(j.forEach(M=>{var $;if(($=M.context)!=null&&$.open&&!M.context.dataRef.current.__escapeKeyBubbles){S=!1;return}}),!S)return}n(!1,pu(A)?A.nativeEvent:A,"escape-key")}),F=ye(A=>{var B;const q=()=>{var j;V(A),(j=Me(A))==null||j.removeEventListener("keydown",q)};(B=Me(A))==null||B.addEventListener("keydown",q)}),x=ye(A=>{var B;const q=E.current;E.current=!1;const j=T.current;if(T.current=!1,u==="click"&&j||q||typeof b=="function"&&!b(A))return;const S=Me(A),M="["+dn("inert")+"]",$=ce(a.floating).querySelectorAll(M);let _=Z(S)?S:null;for(;_&&!Ne(_);){const ie=Fe(_);if(Ne(ie)||!Z(ie))break;_=ie}if($.length&&Z(S)&&!vu(S)&&!me(S,a.floating)&&Array.from($).every(ie=>!me(_,ie)))return;if(oe(S)&&h){const ie=Ne(S),le=Re(S),Q=/auto|scroll/,ae=ie||Q.test(le.overflowX),be=ie||Q.test(le.overflowY),L=ae&&S.clientWidth>0&&S.scrollWidth>S.clientWidth,K=be&&S.clientHeight>0&&S.scrollHeight>S.clientHeight,Y=le.direction==="rtl",W=K&&(Y?A.offsetX<=S.offsetWidth-S.clientWidth:A.offsetX>S.clientWidth),re=L&&A.offsetY>S.clientHeight;if(W||re)return}const U=(B=s.current.floatingContext)==null?void 0:B.nodeId,X=k&&pn(k.nodesRef.current,U).some(ie=>{var le;return ir(A,(le=ie.context)==null?void 0:le.elements.floating)});if(ir(A,a.floating)||ir(A,a.domReference)||X)return;const ne=k?pn(k.nodesRef.current,U):[];if(ne.length>0){let ie=!0;if(ne.forEach(le=>{var Q;if((Q=le.context)!=null&&Q.open&&!le.context.dataRef.current.__outsidePressBubbles){ie=!1;return}}),!ie)return}n(!1,A,"outside-press")}),O=ye(A=>{var B;const q=()=>{var j;x(A),(j=Me(A))==null||j.removeEventListener(u,q)};(B=Me(A))==null||B.addEventListener(u,q)});g.useEffect(()=>{if(!t||!i)return;s.current.__escapeKeyBubbles=P,s.current.__outsidePressBubbles=N;let A=-1;function B($){n(!1,$,"ancestor-scroll")}function q(){window.clearTimeout(A),C.current=!0}function j(){A=window.setTimeout(()=>{C.current=!1},Zn()?5:0)}const S=ce(a.floating);l&&(S.addEventListener("keydown",D?F:V,D),S.addEventListener("compositionstart",q),S.addEventListener("compositionend",j)),b&&S.addEventListener(u,I?O:x,I);let M=[];return f&&(Z(a.domReference)&&(M=Ve(a.domReference)),Z(a.floating)&&(M=M.concat(Ve(a.floating))),!Z(a.reference)&&a.reference&&a.reference.contextElement&&(M=M.concat(Ve(a.reference.contextElement)))),M=M.filter($=>{var _;return $!==((_=S.defaultView)==null?void 0:_.visualViewport)}),M.forEach($=>{$.addEventListener("scroll",B,{passive:!0})}),()=>{l&&(S.removeEventListener("keydown",D?F:V,D),S.removeEventListener("compositionstart",q),S.removeEventListener("compositionend",j)),b&&S.removeEventListener(u,I?O:x,I),M.forEach($=>{$.removeEventListener("scroll",B)}),window.clearTimeout(A)}},[s,a,l,b,u,t,n,f,i,P,N,V,D,F,x,I,O]),g.useEffect(()=>{E.current=!1},[b,u]);const R=g.useMemo(()=>({onKeyDown:V,...d&&{[Yu[m]]:A=>{n(!1,A.nativeEvent,"reference-press")},...m!=="click"&&{onClick(A){n(!1,A.nativeEvent,"reference-press")}}}}),[V,n,d,m]),h=g.useMemo(()=>({onKeyDown:V,onMouseDown(){T.current=!0},onMouseUp(){T.current=!0},[Hu[u]]:()=>{E.current=!0}}),[V,u]);return g.useMemo(()=>i?{reference:R,floating:h}:{},[i,R,h])}function $u(e){const{open:r=!1,onOpenChange:t,elements:n}=e,a=qu(),s=g.useRef({}),[i]=g.useState(()=>_u()),l=Ga()!=null,[o,u]=g.useState(n.reference),d=ye((c,v,k)=>{s.current.openEvent=c?v:void 0,i.emit("openchange",{open:c,event:v,reason:k,nested:l}),t?.(c,v,k)}),m=g.useMemo(()=>({setPositionReference:u}),[]),f=g.useMemo(()=>({reference:o||n.reference||null,floating:n.floating||null,domReference:n.reference}),[o,n.reference,n.floating]);return g.useMemo(()=>({dataRef:s,open:r,onOpenChange:d,elements:f,events:i,floatingId:a,refs:m}),[r,d,f,i,a,m])}function Wa(e){e===void 0&&(e={});const{nodeId:r}=e,t=$u({...e,elements:{reference:null,floating:null,...e.elements}}),n=e.rootContext||t,a=n.elements,[s,i]=g.useState(null),[l,o]=g.useState(null),d=a?.domReference||s,m=g.useRef(null),f=rr();we(()=>{d&&(m.current=d)},[d]);const c=io({...e,elements:{...a,...l&&{reference:l}}}),v=g.useCallback(T=>{const P=Z(T)?{getBoundingClientRect:()=>T.getBoundingClientRect(),getClientRects:()=>T.getClientRects(),contextElement:T}:T;o(P),c.refs.setReference(P)},[c.refs]),k=g.useCallback(T=>{(Z(T)||T===null)&&(m.current=T,i(T)),(Z(c.refs.reference.current)||c.refs.reference.current===null||T!==null&&!Z(T))&&c.refs.setReference(T)},[c.refs]),y=g.useMemo(()=>({...c.refs,setReference:k,setPositionReference:v,domReference:m}),[c.refs,k,v]),b=g.useMemo(()=>({...c.elements,domReference:d}),[c.elements,d]),E=g.useMemo(()=>({...c,...n,refs:y,elements:b,nodeId:r}),[c,y,b,r,n]);return we(()=>{n.dataRef.current.floatingContext=E;const T=f?.nodesRef.current.find(P=>P.id===r);T&&(T.context=E)}),g.useMemo(()=>({...c,context:E,refs:y,elements:b}),[c,y,b,E])}function mr(){return cu()&&Va()}function za(e,r){r===void 0&&(r={});const{open:t,onOpenChange:n,events:a,dataRef:s,elements:i}=e,{enabled:l=!0,visibleOnly:o=!0}=r,u=g.useRef(!1),d=g.useRef(-1),m=g.useRef(!0);g.useEffect(()=>{if(!l)return;const c=ke(i.domReference);function v(){!t&&oe(i.domReference)&&i.domReference===Be(ce(i.domReference))&&(u.current=!0)}function k(){m.current=!0}function y(){m.current=!1}return c.addEventListener("blur",v),mr()&&(c.addEventListener("keydown",k,!0),c.addEventListener("pointerdown",y,!0)),()=>{c.removeEventListener("blur",v),mr()&&(c.removeEventListener("keydown",k,!0),c.removeEventListener("pointerdown",y,!0))}},[i.domReference,t,l]),g.useEffect(()=>{if(!l)return;function c(v){let{reason:k}=v;(k==="reference-press"||k==="escape-key")&&(u.current=!0)}return a.on("openchange",c),()=>{a.off("openchange",c)}},[a,l]),g.useEffect(()=>()=>{he(d)},[]);const f=g.useMemo(()=>({onMouseLeave(){u.current=!1},onFocus(c){if(u.current)return;const v=Me(c.nativeEvent);if(o&&Z(v)){if(mr()&&!c.relatedTarget){if(!m.current&&!Ka(v))return}else if(!ku(v))return}n(!0,c.nativeEvent,"focus")},onBlur(c){u.current=!1;const v=c.relatedTarget,k=c.nativeEvent,y=Z(v)&&v.hasAttribute(dn("focus-guard"))&&v.getAttribute("data-type")==="outside";d.current=window.setTimeout(()=>{var b;const E=Be(i.domReference?i.domReference.ownerDocument:document);!v&&E===i.domReference||me((b=s.current.floatingContext)==null?void 0:b.refs.floating.current,E)||me(i.domReference,E)||y||n(!1,k,"focus")})}}),[s,i.domReference,n,o]);return g.useMemo(()=>l?{reference:f}:{},[l,f])}function cr(e,r,t){const n=new Map,a=t==="item";let s=e;if(a&&e){const{[bt]:i,[ht]:l,...o}=e;s=o}return{...t==="floating"&&{tabIndex:-1,[Au]:""},...s,...r.map(i=>{const l=i?i[t]:null;return typeof l=="function"?e?l(e):null:l}).concat(e).reduce((i,l)=>(l&&Object.entries(l).forEach(o=>{let[u,d]=o;if(!(a&&[bt,ht].includes(u)))if(u.indexOf("on")===0){if(n.has(u)||n.set(u,[]),typeof d=="function"){var m;(m=n.get(u))==null||m.push(d),i[u]=function(){for(var f,c=arguments.length,v=new Array(c),k=0;k<c;k++)v[k]=arguments[k];return(f=n.get(u))==null?void 0:f.map(y=>y(...v)).find(y=>y!==void 0)}}}else i[u]=d}),i),{})}}function Ja(e){e===void 0&&(e=[]);const r=e.map(l=>l?.reference),t=e.map(l=>l?.floating),n=e.map(l=>l?.item),a=g.useCallback(l=>cr(l,e,"reference"),r),s=g.useCallback(l=>cr(l,e,"floating"),t),i=g.useCallback(l=>cr(l,e,"item"),n);return g.useMemo(()=>({getReferenceProps:a,getFloatingProps:s,getItemProps:i}),[a,s,i])}function Wu(e,r,t){t===void 0&&(t=!0);let n=e.filter(s=>{var i;return s.parentId===r&&((i=s.context)==null?void 0:i.open)}),a=n;for(;a.length;)a=t?e.filter(s=>{var i;return(i=a)==null?void 0:i.some(l=>{var o;return s.parentId===l.id&&((o=s.context)==null?void 0:o.open)})}):e,n=n.concat(a);return n}function _t(e,r){const[t,n]=e;let a=!1;const s=r.length;for(let i=0,l=s-1;i<s;l=i++){const[o,u]=r[i]||[0,0],[d,m]=r[l]||[0,0];u>=n!=m>=n&&t<=(d-o)*(n-u)/(m-u)+o&&(a=!a)}return a}function zu(e,r){return e[0]>=r.x&&e[0]<=r.x+r.width&&e[1]>=r.y&&e[1]<=r.y+r.height}function Xa(e){e===void 0&&(e={});const{buffer:r=.5,blockPointerEvents:t=!1,requireIntent:n=!0}=e;let a,s=!1,i=null,l=null,o=performance.now();function u(m,f){const c=performance.now(),v=c-o;if(i===null||l===null||v===0)return i=m,l=f,o=c,null;const k=m-i,y=f-l,E=Math.sqrt(k*k+y*y)/v;return i=m,l=f,o=c,E}const d=m=>{let{x:f,y:c,placement:v,elements:k,onClose:y,nodeId:b,tree:E}=m;return function(P){function N(){clearTimeout(a),y()}if(clearTimeout(a),!k.domReference||!k.floating||v==null||f==null||c==null)return;const{clientX:D,clientY:I}=P,C=[D,I],V=xu(P),F=P.type==="mouseleave",x=dr(k.floating,V),O=dr(k.domReference,V),R=k.domReference.getBoundingClientRect(),h=k.floating.getBoundingClientRect(),A=v.split("-")[0],B=f>h.right-h.width/2,q=c>h.bottom-h.height/2,j=zu(C,R),S=h.width>R.width,M=h.height>R.height,$=(S?R:h).left,_=(S?R:h).right,U=(M?R:h).top,X=(M?R:h).bottom;if(x&&(s=!0,!F))return;if(O&&(s=!1),O&&!F){s=!0;return}if(F&&Z(P.relatedTarget)&&dr(k.floating,P.relatedTarget)||E&&Wu(E.nodesRef.current,b).some(le=>{let{context:Q}=le;return Q?.open}))return;if(A==="top"&&c>=R.bottom-1||A==="bottom"&&c<=R.top+1||A==="left"&&f>=R.right-1||A==="right"&&f<=R.left+1)return N();let ne=[];switch(A){case"top":ne=[[$,R.top+1],[$,h.bottom-1],[_,h.bottom-1],[_,R.top+1]];break;case"bottom":ne=[[$,h.top+1],[$,R.bottom-1],[_,R.bottom-1],[_,h.top+1]];break;case"left":ne=[[h.right-1,X],[h.right-1,U],[R.left+1,U],[R.left+1,X]];break;case"right":ne=[[R.right-1,X],[R.right-1,U],[h.left+1,U],[h.left+1,X]];break}function ie(le){let[Q,ae]=le;switch(A){case"top":{const be=[S?Q+r/2:B?Q+r*4:Q-r*4,ae+r+1],L=[S?Q-r/2:B?Q+r*4:Q-r*4,ae+r+1],K=[[h.left,B||S?h.bottom-r:h.top],[h.right,B?S?h.bottom-r:h.top:h.bottom-r]];return[be,L,...K]}case"bottom":{const be=[S?Q+r/2:B?Q+r*4:Q-r*4,ae-r],L=[S?Q-r/2:B?Q+r*4:Q-r*4,ae-r],K=[[h.left,B||S?h.top+r:h.bottom],[h.right,B?S?h.top+r:h.bottom:h.top+r]];return[be,L,...K]}case"left":{const be=[Q+r+1,M?ae+r/2:q?ae+r*4:ae-r*4],L=[Q+r+1,M?ae-r/2:q?ae+r*4:ae-r*4];return[...[[q||M?h.right-r:h.left,h.top],[q?M?h.right-r:h.left:h.right-r,h.bottom]],be,L]}case"right":{const be=[Q-r,M?ae+r/2:q?ae+r*4:ae-r*4],L=[Q-r,M?ae-r/2:q?ae+r*4:ae-r*4],K=[[q||M?h.left+r:h.right,h.top],[q?M?h.left+r:h.right:h.left+r,h.bottom]];return[be,L,...K]}}}if(!_t([D,I],ne)){if(s&&!j)return N();if(!F&&n){const le=u(P.clientX,P.clientY);if(le!==null&&le<.1)return N()}_t([D,I],ie([f,c]))?!s&&n&&(a=window.setTimeout(N,40)):N()}}};return d.__options={blockPointerEvents:t},d}function ue(e,r,t,n){return n?typeof n=="string"?{[`--__${e}c-${r}-${t}-xs`]:n}:Object.fromEntries(Object.entries(n).map(([a,s])=>[`--__${e}c-${r}-${t}-${a}`,s])):{}}const Ju={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Xu={full:"full",xlarge:"12",large:"8",medium:"4",small:"2"},Nt=(e,r,t,n,a,s)=>r.split(" ").map((i,l,o)=>{var u,d;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/o.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let m=`var(--${s}-${t}-${i})`;if(n.includes(i))m=i==="px"?"1px":i;else if(t==="spacing"&&i.startsWith("space"))m=`var(--${s}-${i})`;else if(t==="spacing"){const f=`--${s}-spacing-${i}`;m=`var(${(u=Ju[f])!==null&&u!==void 0?u:f})`}else if(t==="radius"){const f=(d=Xu[i])!==null&&d!==void 0?d:i;m=`var(--${s}-radius-${f})`}return a?i==="0"?"0":`calc(-1 * ${m})`:m}).join(" ");function ve(e,r,t,n,a,s=!1,i=[]){if(!a)return{};if(typeof a=="string")return{[`--__${e}c-${r}-${t}-xs`]:Nt(t,a,n,i,s,e)};const l={};return Object.entries(a).forEach(([o,u])=>{l[`--__${e}c-${r}-${t}-${o}`]=Nt(t,u,n,i,s,e)}),l}const Vr=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],Lr=({children:e,className:r,padding:t,paddingInline:n,paddingBlock:a,margin:s,marginInline:i,marginBlock:l,width:o,minWidth:u,maxWidth:d,height:m,minHeight:f,maxHeight:c,position:v,inset:k,top:y,right:b,left:E,bottom:T,overflow:P,overflowX:N,overflowY:D,flexBasis:I,flexGrow:C,flexShrink:V,gridColumn:F})=>{const x=Xe(!1),{cn:O}=H(),R=x?"ax":"a",h=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ve(R,"r","p","spacing",t)),ve(R,"r","pi","spacing",n)),ve(R,"r","pb","spacing",a)),ve(R,"r","m","spacing",s)),ve(R,"r","mi","spacing",i)),ve(R,"r","mb","spacing",l)),ue(R,"r","w",o)),ue(R,"r","minw",u)),ue(R,"r","maxw",d)),ue(R,"r","h",m)),ue(R,"r","minh",f)),ue(R,"r","maxh",c)),ue(R,"r","position",v)),ve(R,"r","inset","spacing",k)),ve(R,"r","top","spacing",y)),ve(R,"r","right","spacing",b)),ve(R,"r","bottom","spacing",T)),ve(R,"r","left","spacing",E)),ue(R,"r","overflow",P)),ue(R,"r","overflowx",N)),ue(R,"r","overflowy",D)),ue(R,"r","flex-basis",I)),ue(R,"r","flex-grow",C)),ue(R,"r","flex-shrink",V)),ue(R,"r","grid-column",F));return w.createElement(Wn,{className:O({className:r,"navds-r-p":t,"navds-r-pi":n,"navds-r-pb":a,"navds-r-m":s,"navds-r-mi":i,"navds-r-mb":l,"navds-r-w":o,"navds-r-minw":u,"navds-r-maxw":d,"navds-r-h":m,"navds-r-minh":f,"navds-r-maxh":c,"navds-r-position":v,"navds-r-inset":k,"navds-r-top":y,"navds-r-right":b,"navds-r-bottom":T,"navds-r-left":E,"navds-r-overflow":P,"navds-r-overflowx":N,"navds-r-overflowy":D,"navds-r-flex-basis":I,"navds-r-flex-grow":C,"navds-r-flex-shrink":V,"navds-r-grid-column":F}),style:h},e)};var Qu=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Zu=g.forwardRef((e,r)=>{var{children:t,className:n,as:a="div",background:s,borderColor:i,borderWidth:l,borderRadius:o,shadow:u,style:d,asChild:m}=e,f=Qu(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:c}=H(),v=Object.assign(Object.assign(Object.assign({},d),{"--__axc-box-background":s?`var(--ax-bg-${s})`:void 0,"--__axc-box-shadow":u?`var(--ax-shadow-${u})`:void 0,"--__axc-box-border-color":i?`var(--ax-border-${i})`:void 0,"--__axc-box-border-width":l?l.split(" ").map(y=>`${y}px`).join(" "):void 0}),ve("ax","box","radius","radius",o,!1,["0"])),k=m?Wn:a;return w.createElement(Lr,Object.assign({},f),w.createElement(k,Object.assign({},_e(f,Vr),{ref:r,style:v,className:c("navds-box",n,{"navds-box-bg":s,"navds-box-border-color":i,"navds-box-border-width":l,"navds-box-radius":o,"navds-box-shadow":u})}),t))});var ed=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const nd=g.forwardRef((e,r)=>{var{children:t,className:n,as:a="div",background:s,borderColor:i,borderWidth:l,borderRadius:o,shadow:u,style:d,asChild:m}=e,f=ed(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const c=Xe(!1),{cn:v}=H(),k=c?"ax":"a",y=Object.assign(Object.assign(Object.assign({},d),{[`--__${k}c-box-background`]:s?`var(--a-${s})`:void 0,[`--__${k}c-box-shadow`]:u?`var(--a-shadow-${u})`:void 0,[`--__${k}c-box-border-color`]:i?`var(--a-${i})`:void 0,[`--__${k}c-box-border-width`]:l?l.split(" ").map(E=>`${E}px`).join(" "):void 0}),ve(k,"box","radius","radius",o,!1,["0"])),b=m?Wn:a;return w.createElement(Lr,Object.assign({},f),w.createElement(b,Object.assign({},_e(f,Vr),{ref:r,style:y,className:v("navds-box",n,{"navds-box-bg":s,"navds-box-border-color":i,"navds-box-border-width":l,"navds-box-border-radius":o,"navds-box-shadow":u})}),t))}),wr=nd;wr.New=Zu;var rd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Qa=g.forwardRef((e,r)=>{var{children:t,className:n,as:a="div",align:s,justify:i,wrap:l=!0,gap:o,style:u,direction:d="row",asChild:m}=e,f=rd(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const v=Xe(!1)?"ax":"a",{cn:k}=H(),y=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},u),ve(v,"stack","gap","spacing",o)),ue(v,"stack","direction",d)),ue(v,"stack","align",s)),ue(v,"stack","justify",i)),b=m?Wn:a;return w.createElement(Lr,Object.assign({},f),w.createElement(b,Object.assign({},_e(f,Vr),{ref:r,style:y,className:k("navds-stack",n,{"navds-vstack":d==="column","navds-hstack":d==="row","navds-stack-gap":o,"navds-stack-align":s,"navds-stack-justify":i,"navds-stack-direction":d,"navds-stack-wrap":l})}),t))});var td=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const rn=g.forwardRef((e,r)=>{var{as:t="div"}=e,n=td(e,["as"]);return w.createElement(Qa,Object.assign({as:t},n,{ref:r,direction:"row"}))});var ad=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const gn=g.forwardRef((e,r)=>{var{as:t="div"}=e,n=ad(e,["as"]);return w.createElement(Qa,Object.assign({as:t},n,{ref:r,direction:"column",wrap:!1}))});var sd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const id=g.forwardRef((e,r)=>{var{className:t}=e,n=sd(e,["className"]);const{cn:a}=H();return w.createElement("tbody",Object.assign({},n,{ref:r,className:a("navds-table__body",t)}))});var ld=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Za=g.forwardRef((e,r)=>{var{className:t,children:n,align:a,textSize:s}=e,i=ld(e,["className","children","align","textSize"]);const{cn:l}=H();return w.createElement("th",Object.assign({ref:r,className:l("navds-table__header-cell","navds-label",t,{[`navds-table__header-cell--align-${a}`]:a,"navds-label--small":s==="small"})},i),n)}),es=g.createContext(null);var od=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ud=g.forwardRef((e,r)=>{var t,n,a,s,{className:i,children:l,sortable:o=!1,sortKey:u}=e,d=od(e,["className","children","sortable","sortKey"]);const m=g.useContext(es),{cn:f}=H();return o&&!u&&console.warn("ColumnHeader with `sortable=true` must have a sortKey."),w.createElement(Za,Object.assign({scope:"col",ref:r,className:f(i),"aria-sort":o?((t=m?.sort)===null||t===void 0?void 0:t.orderBy)===u?(n=m?.sort)===null||n===void 0?void 0:n.direction:"none":void 0},d),o?w.createElement("button",{type:"button",className:f("navds-table__sort-button"),onClick:o&&u?()=>{var c;return(c=m?.onSortChange)===null||c===void 0?void 0:c.call(m,u)}:void 0},l,((a=m?.sort)===null||a===void 0?void 0:a.orderBy)===u?((s=m?.sort)===null||s===void 0?void 0:s.direction)==="descending"?w.createElement(li,{"aria-hidden":!0}):w.createElement(ui,{"aria-hidden":!0}):w.createElement(Us,{"aria-hidden":!0})):l)});var dd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ns=g.forwardRef((e,r)=>{var{className:t,children:n="",align:a,textSize:s}=e,i=dd(e,["className","children","align","textSize"]);const{cn:l}=H();return w.createElement(de,Object.assign({as:"td",ref:r,className:l("navds-table__data-cell",t,{[`navds-table__data-cell--align-${a}`]:a}),size:s},i),n)});var gd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const md=globalThis?.matchMedia?globalThis.matchMedia("(prefers-reduced-motion: reduce)").matches:!1;function cd(e){const r=parseFloat(e);return!Number.isNaN(r)&&Number.isFinite(r)}function Ft(e){return typeof e=="string"&&e[e.length-1]==="%"&&cd(e.substring(0,e.length-1))}function fr(e,r){r===0&&e?.style&&(e.style.display="none")}function fd(e,r){r===0&&e?.style&&(e.style.display="")}const vd=e=>{var{children:r,className:t,innerClassName:n,duration:a=250,easing:s="ease",height:i}=e,l=gd(e,["children","className","innerClassName","duration","easing","height"]);const{cn:o}=H(),u=g.useRef(i),d=g.useRef(null),m=g.useRef(),f=g.useRef(),c=g.useRef(i),v=g.useRef("visible"),k=md?0:a;typeof c.current=="number"?(typeof i!="string"&&(c.current=i<0?0:i),v.current="hidden"):Ft(c.current)&&(c.current=i==="0%"?0:i,v.current="hidden");const[y,b]=g.useState(c.current),[E,T]=g.useState(v.current),[P,N]=g.useState(!1);g.useEffect(()=>{fr(d.current,c.current)},[]),g.useEffect(()=>{if(i!==u.current&&d.current){fd(d.current,u.current),d.current.style.overflow="hidden";const V=d.current.offsetHeight;d.current.style.overflow="";const F=k;let x,O,R="hidden",h;const A=u.current==="auto";typeof i=="number"?(x=i<0?0:i,O=x):Ft(i)?(x=i==="0%"?0:i,O=x):(x=V,O="auto",R=void 0),A&&(O=x,x=V),b(x),T("hidden"),N(!A),clearTimeout(f.current),clearTimeout(m.current),A?(h=!0,f.current=setTimeout(()=>{b(O),T(R),N(h)},50),m.current=setTimeout(()=>{N(!1),fr(d.current,O)},F)):f.current=setTimeout(()=>{b(O),T(R),N(!1),i!=="auto"&&fr(d.current,x)},F)}return u.current=i,()=>{clearTimeout(f.current),clearTimeout(m.current)}},[i]);const D={height:y,overflow:E};P&&(D.transition=`height ${k}ms ${s} 0ms`,D.WebkitTransition=D.transition);const C=typeof l["aria-hidden"]<"u"?l["aria-hidden"]:i===0;return w.createElement("div",Object.assign({},l,{className:o(t),style:D}),w.createElement("div",{"aria-hidden":C,className:o(n),ref:d},r))};var kd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const rs=g.forwardRef((e,r)=>{var{className:t,selected:n=!1,shadeOnHover:a=!0}=e,s=kd(e,["className","selected","shadeOnHover"]);const{cn:i}=H();return w.createElement("tr",Object.assign({},s,{ref:r,className:i("navds-table__row",t,{"navds-table__row--selected":n,"navds-table__row--shade-on-hover":a})}))});var pd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const yd=g.forwardRef((e,r)=>{var{className:t,children:n,content:a,togglePlacement:s="left",defaultOpen:i=!1,open:l,onOpenChange:o,expansionDisabled:u=!1,expandOnRowClick:d=!1,colSpan:m=999,contentGutter:f,onClick:c}=e,v=pd(e,["className","children","content","togglePlacement","defaultOpen","open","onOpenChange","expansionDisabled","expandOnRowClick","colSpan","contentGutter","onClick"]);const{cn:k}=H(),[y,b]=Qt({defaultValue:i,value:l,onChange:o}),E=Ce("global"),T=Xt(),P=D=>{b(I=>!I),D.stopPropagation()},N=D=>{d&&!u&&!ts(D.target)&&P(D)};return w.createElement(w.Fragment,null,w.createElement(rs,Object.assign({},v,{ref:r,className:k("navds-table__expandable-row",t,{"navds-table__expandable-row--open":y,"navds-table__expandable-row--expansion-disabled":u,"navds-table__expandable-row--clickable":d}),onClick:qr(c,N)}),s==="right"&&n,w.createElement(ns,{className:k("navds-table__toggle-expand-cell",{"navds-table__toggle-expand-cell--open":y}),onClick:u?()=>null:P},!u&&w.createElement("button",{className:k("navds-table__toggle-expand-button"),type:"button","aria-controls":T,"aria-expanded":y,onClick:P},w.createElement(na,{className:k("navds-table__expandable-icon"),title:E(y?"showLess":"showMore")}))),s==="left"&&n),w.createElement("tr",{"data-state":y?"open":"closed",className:k("navds-table__expanded-row"),"aria-hidden":!y,id:T},w.createElement("td",{colSpan:m,className:k("navds-table__expanded-row-cell")},w.createElement(vd,{className:k("navds-table__expanded-row-collapse"),innerClassName:k(`navds-table__expanded-row-content navds-table__expanded-row-content--gutter-${f??s}`),height:y?"auto":0,duration:150,easing:"cubic-bezier(0.39,0.57,0.56,1)"},a))))});function ts(e){return e.nodeName==="TD"||e.nodeName==="TH"||!e.parentElement?!1:["BUTTON","DETAILS","LABEL","SELECT","TEXTAREA","INPUT","A"].includes(e.nodeName)?!0:ts(e.parentElement)}var bd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const hd=g.forwardRef((e,r)=>{var{className:t}=e,n=bd(e,["className"]);const{cn:a}=H();return w.createElement("thead",Object.assign({},n,{ref:r,className:a("navds-table__header",t)}))});var Td=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const G=g.forwardRef((e,r)=>{var{className:t,zebraStripes:n=!1,size:a="medium",onSortChange:s,sort:i,stickyHeader:l=!1}=e,o=Td(e,["className","zebraStripes","size","onSortChange","sort","stickyHeader"]);const{cn:u}=H();return w.createElement(es.Provider,{value:{onSortChange:s,sort:i}},w.createElement("table",Object.assign({},o,{ref:r,className:u("navds-table",`navds-table--${a}`,t,{"navds-table--zebra-stripes":n,"navds-table--sticky-header":l})})))});G.Header=hd;G.Body=id;G.Row=rs;G.ColumnHeader=ud;G.HeaderCell=Za;G.DataCell=ns;G.ExpandableRow=yd;const as=g.createContext({startDate:new Date,endDate:new Date,direction:"left",setStart:()=>null,setEndInclusive:()=>null,activeRow:0,setActiveRow:()=>null,initiate:()=>null,addFocusable:()=>null}),An=()=>{const e=g.useContext(as);return e||console.warn("useTimelineContext must be used with TimelineContext (<Timeline />)"),e},Rd=({horizontalPosition:e})=>e<=98&&e>=0,xt=(e,r)=>Ea(e,r)<=1,wd=({horizontalPosition:e,width:r})=>e>=0&&e<=100&&r>0,Er=(e,r,t)=>{const n=ot(t,r);return ot(e,r)/n*100},tr=(e,r,t,n)=>{const a=Er(e,t,n),s=Er(r,t,n)-a;return{horizontalPosition:a,width:s}},Ed=(e,r,t,n,a,s)=>{const i=Math.ceil(t/10),l=Le(r);return new Array(t).fill(l).map((o,u)=>{if(u%i!==0)return null;const d=Pa(o,u),{horizontalPosition:m,width:f}=tr(d,Ir(d,1),e,r);return{direction:n,horizontalPosition:m,label:je(d,a,{locale:s}),date:d,width:f}}).filter(o=>o!==null)},Ad=(e,r,t,n,a)=>{const s=So(e),i=Aa(r),l=Ao(i,s)+1;return new Array(l).fill(s).map((o,u)=>{const d=hn(o,u),{horizontalPosition:m,width:f}=tr(d,hn(d,1),e,r);return{direction:t,horizontalPosition:m,label:je(d,n,{locale:a}),date:d,width:f}})},Od=(e,r,t,n,a)=>{const s=Oa(e),i=jo(r),l=Oo(i,e)+1;return new Array(l).fill(s).map((o,u)=>{const d=Kn(o,u),{horizontalPosition:m,width:f}=tr(d,Kn(d,1),e,r);return{direction:t,horizontalPosition:m,label:je(d,n,{locale:a}),date:d,width:f}})},Sd=(e,r,t,n,a)=>{const s=Ea(r,e);if(s<40){const l=a("dayFormat");return Ed(e,r,s,t,l,n)}if(s<370){const l=a("monthFormat");return Ad(e,r,t,l,n)}const i=a("yearFormat");return Od(e,r,t,i,n)},jd=({templates:e})=>{const{endDate:r,startDate:t,direction:n}=An(),a=Ce("Timeline",{dayFormat:e?.day,monthFormat:e?.month,yearFormat:e?.year}),s=mo(),i=Sd(t,r,n,s,a),{cn:l}=H();return w.createElement("div",{className:l("navds-timeline__axislabels"),"aria-hidden":"true"},i.filter(Rd).map(o=>w.createElement(Jt,{className:l("navds-timeline__axislabels-label"),as:"div",key:o.label,style:{justifyContent:n==="left"?"flex-start":"flex-end",[n]:`${o.horizontalPosition}%`,width:`${o.width}%`}},o.label)))};var Pd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const ss=g.forwardRef((e,r)=>{var{date:t,children:n}=e,a=Pd(e,["date","children"]);const{cn:s}=H(),{startDate:i,endDate:l,direction:o}=An(),[u,d]=g.useState(!1),m=g.useRef(null),f=Ce("Timeline"),v=!Xe(!1),{context:k,placement:y,middlewareData:{arrow:{x:b,y:E}={}},refs:T,floatingStyles:P}=Wa({placement:"top",open:u,onOpenChange:O=>d(O),whileElementsMounted:ka,middleware:[ya(v?16:8),ba(),ha({padding:5,fallbackPlacements:["bottom","top"]}),Ta({element:m,padding:5})]}),N=Ua(k,{handleClose:Xa(),restMs:25,delay:{open:1e3},move:!1}),D=za(k),I=$a(k),{getFloatingProps:C,getReferenceProps:V}=Ja([N,D,I]),F=Ut(T.setReference,r),x={top:"bottom",right:"left",bottom:"top",left:"right"}[y.split("-")[0]];return w.createElement(w.Fragment,null,w.createElement("div",{className:s("navds-timeline__pin-wrapper"),style:{[o]:`${Er(t,i,l)}%`}},w.createElement("button",Object.assign({},a,{ref:F,className:s("navds-timeline__pin-button"),"aria-label":f("Pin.pin",{date:je(t,f("dateFormat"))}),type:"button","aria-expanded":n?u:void 0},V({onKeyDown:O=>{var R;(R=a?.onKeyDown)===null||R===void 0||R.call(a,O),O.key==="Enter"?d(h=>!h):O.key===" "&&d(!1)}})))),n&&u&&w.createElement(Ha,{context:k,modal:!1,initialFocus:-1,returnFocus:!1},w.createElement("div",Object.assign({className:s("navds-timeline__popover"),"data-placement":y,ref:T.setFloating,role:"dialog"},C(),{style:P}),n,v&&w.createElement("div",{ref:m,style:Object.assign(Object.assign(Object.assign({},b!=null?{left:b}:{}),E!=null?{top:E}:{}),x?{[x]:"-0.5rem"}:{}),className:s("navds-timeline__popover-arrow")}))))});ss.componentType="pin";const is=g.createContext({periodId:"",firstFocus:!1}),ls=()=>{const e=g.useContext(is);return e||console.warn("usePeriodContext must be used with PeriodContext"),e},os=g.createContext({periods:[],id:"",active:!1,index:0}),Kr=()=>{const e=g.useContext(os);return e||console.warn("useRowContext must be used with RowContext"),e},us=(e,r,t)=>Ct(`navds-timeline__period navds-timeline__period--${t}`,{"navds-timeline__period--connected-both":e==="both","navds-timeline__period--connected-right":e==="right"&&r==="left"||e==="left"&&r==="right","navds-timeline__period--connected-left":e==="left"&&r==="left"||e==="right"&&r==="right"}),ds=(e,r,t,n,a)=>{const s=a("dateFormat"),i=je(e,s),l=je(r,s);return a("Period.period",{status:n||a(`Period.${t}`),start:i,end:l})},qd=w.memo(({onSelectPeriod:e,start:r,end:t,status:n,cropped:a,direction:s,left:i,width:l,icon:o,children:u,isActive:d,statusLabel:m,restProps:f,periodRef:c})=>{var v,k;const{cn:y}=H(),[b,E]=g.useState(!1),{index:T}=Kr(),{firstFocus:P}=ls(),{initiate:N,addFocusable:D}=An(),I=g.useRef(null),C=Ce("Timeline"),F=!Xe(!1),{context:x,placement:O,middlewareData:{arrow:{x:R,y:h}={}},refs:A,floatingStyles:B}=Wa({placement:(v=f?.placement)!==null&&v!==void 0?v:"top",open:b,onOpenChange:X=>E(X),whileElementsMounted:ka,middleware:[ya(F?16:8),ba(),ha({padding:5,fallbackPlacements:["bottom","top"]}),Ta({element:I,padding:5})]}),q=Ua(x,{handleClose:Xa(),restMs:25,delay:{open:1e3},move:!1}),j=za(x),S=$a(x),{getFloatingProps:M,getReferenceProps:$}=Ja([q,j,S]),_=Ut(A.setReference,c),U={top:"bottom",right:"left",bottom:"top",left:"right"}[O.split("-")[0]];return w.createElement(w.Fragment,null,w.createElement("button",Object.assign({},f,{"data-color":(k=f?.["data-color"])!==null&&k!==void 0?k:n,type:"button",ref:X=>{P&&D(X,T),_(X)},"aria-label":ds(r,t,n,m,C),className:y("navds-timeline__period--clickable",us(a,s,n),f?.className,{"navds-timeline__period--selected":d}),"aria-expanded":u?b:void 0,"aria-current":d||void 0},$({onFocus:()=>{N(T)},onKeyDown:X=>{var ne;(ne=f?.onKeydown)===null||ne===void 0||ne.call(f,X),X.key==="Enter"&&E(ie=>!ie),X.key===" "&&(e?.(X),E(!1))},style:{width:`${l}%`,[s]:`${i}%`},onClick:X=>{var ne;(ne=f?.onClick)===null||ne===void 0||ne.call(f,X),X.detail!==0&&e?.(X)}})),w.createElement("span",{className:y("navds-timeline__period--inner")},o)),u&&b&&w.createElement(Ha,{context:x,modal:!1,initialFocus:-1,returnFocus:!1},w.createElement("div",Object.assign({className:y("navds-timeline__popover"),"data-placement":O,ref:A.setFloating,role:"dialog"},M(),{style:B}),u,F&&w.createElement("div",{ref:I,style:Object.assign(Object.assign(Object.assign({},R!=null?{left:R}:{}),h!=null?{top:h}:{}),U?{[U]:"-0.5rem"}:{}),className:y("navds-timeline__popover-arrow")}))))}),_d=({start:e,end:r,status:t,cropped:n,direction:a,left:s,width:i,icon:l,statusLabel:o,restProps:u,periodRef:d})=>{var m;const f=Ce("Timeline"),{cn:c}=H();return w.createElement("div",Object.assign({ref:d},u,{"data-color":(m=u?.["data-color"])!==null&&m!==void 0?m:t,className:c(us(n,a,t),u?.className),style:{width:`${i}%`,[a]:`${s}%`}}),w.createElement("span",{className:c("navds-timeline__period--inner")},l,w.createElement("span",{className:c("navds-sr-only")},ds(e,r,t,o,f))))},Cr=g.forwardRef(({icon:e},r)=>{const{periods:t}=Kr(),{periodId:n,restProps:a}=ls(),s=t.find(b=>b.id===n);if(!s)return w.createElement(w.Fragment,null);const{start:i,endInclusive:l,width:o,horizontalPosition:u,status:d="neutral",onSelectPeriod:m,cropped:f,direction:c,children:v,isActive:k,statusLabel:y}=s;return m||v?w.createElement(qd,{periodRef:r,start:i,end:l,status:d,onSelectPeriod:m,cropped:f||"",direction:c,width:o,left:u,icon:e,isActive:k,statusLabel:y,restProps:a},v):w.createElement(_d,{periodRef:r,start:i,end:l,status:d,cropped:f||"",direction:c,width:o,left:u,icon:e,statusLabel:y,restProps:a})});Cr.componentType="period";var Nd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Gr=g.forwardRef((e,r)=>{var{label:t,className:n,headingTag:a="h3",icon:s}=e,i=Nd(e,["label","className","headingTag","icon"]);const{cn:l}=H(),{periods:o,id:u,active:d}=Kr(),{setActiveRow:m}=An(),f=Ce("Timeline"),c=o.reduce((y,b)=>y.end>b.end?y:b,{}),v=o.reduce((y,b)=>y.end<b.end?y:b,{}),k=o.find(y=>!!y.children||!!y.onSelectPeriod);return w.createElement(w.Fragment,null,t&&w.createElement(de,{as:a,id:`timeline-row-${u}`,className:l("navds-timeline__row-label"),size:"small"},s,t),w.createElement("div",{className:l("navds-timeline__row",{"navds-timeline__row--active":d})},w.createElement("ol",Object.assign({},i,{tabIndex:-1,ref:r,"aria-label":o.length===0?f("Row.noPeriods"):f("Row.period",{start:je(v.start,f("dateFormat")),end:je(c.end,f("dateFormat"))}),className:l("navds-timeline__row-periods",n),onKeyDown:y=>{(y.key==="ArrowDown"||y.key==="ArrowUp")&&(y.preventDefault(),m(y.key))}}),o?.map(y=>w.createElement("li",{key:`period-${y.id}`},w.createElement(is.Provider,{value:{periodId:y.id,firstFocus:k?.id===y.id,restProps:y?.restProps}},w.createElement(Cr,{start:y.start,end:y.endInclusive,icon:y.icon,ref:y?.ref})))))))});Gr.componentType="row";const Fd=(e,r)=>e.horizontalPosition-r.horizontalPosition,xd=(e,r,t,n="left",a,s,i)=>{const l=e.start,o=e.end,u=a<s.length-1&&!Wo(s[a+1].start,o),{horizontalPosition:d,width:m}=tr(Le(l),Gn(u?Le(Pa(s[a+1].start,1)):o),r,t);return{id:`r-${i}-p-${a}`,start:l,endInclusive:o,horizontalPosition:d,direction:n,width:m,end:o,status:e.status,onSelectPeriod:e.onSelectPeriod,icon:e.icon,children:e.children,isActive:e.isActive,statusLabel:e.statusLabel}},Dd=(e,r,t)=>{const n=r>0&&xt(e.start,t[r-1].endInclusive),a=r<t.length-1&&xt(t[r+1].start,e.endInclusive);return n&&a?Object.assign(Object.assign({},e),{cropped:"both"}):n?Object.assign(Object.assign({},e),{cropped:"left"}):a?Object.assign(Object.assign({},e),{cropped:"right"}):e},Id=e=>{let{horizontalPosition:r,width:t,cropped:n}=e;return r+t>100&&(t=100-r,n=n==="left"||n==="both"?"both":"right"),r<0&&r+t>0&&(t=r+t,r=0,n=n==="right"||n==="both"?"both":"left"),Object.assign(Object.assign({},e),{width:t,horizontalPosition:r,cropped:n})},Bd=(e,r,t,n)=>g.useMemo(()=>e.map((a,s)=>{const i=a.periods.sort((l,o)=>l.start.valueOf()-o.start.valueOf()).map((l,o)=>Object.assign(Object.assign({},xd(l,r,t,n,o,a.periods,s)),{restProps:l?.restProps,ref:l?.ref})).sort(Fd).map(Dd).map(Id).filter(wd);return{id:`tl-row-${s}`,label:a.label,headingTag:a.headingTag||"h3",icon:a.icon,periods:n==="left"?i:i.reverse(),restProps:a?.restProps,ref:a?.ref}}),[e,r,t,n]),Md=({startDate:e,rows:r})=>g.useMemo(()=>{if(e)return e;const t=r.flat().filter(a=>a.start).map(a=>a.start);return t.length===0?new Date:t.reduce((a,s)=>s<a?s:a)},[e,r]),Vd=(e,r)=>r.end>e?r.end:e,Ld=e=>e.flat().reduce(Vd,new Date(0)),Dt=({endDate:e,rows:r})=>g.useMemo(()=>e||Ir(Ld(r),1),[e,r]),Kd=e=>{const r=[];return e?.forEach(t=>{var n,a,s,i,l,o,u,d,m,f,c,v;const k=[];if(w.isValidElement(t)&&(!((n=t?.props)===null||n===void 0)&&n.children)){if(Array.isArray(t.props.children))for(let y=0;y<t.props.children.length;y++){const b=t.props.children[y];k.push({start:(a=b?.props)===null||a===void 0?void 0:a.start,end:(s=b?.props)===null||s===void 0?void 0:s.end,status:((i=b?.props)===null||i===void 0?void 0:i.status)||"neutral",onSelectPeriod:(l=b.props)===null||l===void 0?void 0:l.onSelectPeriod,label:t.props.label,icon:b.props.icon,children:b.props.children,isActive:b.props.isActive,statusLabel:b.props.statusLabel,restProps:_e(b.props,["start","end","status","onSelectPeriod","label","icon","children","isActive","statusLabel"]),ref:b?.ref})}else k.push({start:t.props.children.props.start,end:t.props.children.props.end,status:((o=t.props.children.props)===null||o===void 0?void 0:o.status)||"neutral",onSelectPeriod:(u=t.props.children.props)===null||u===void 0?void 0:u.onSelectPeriod,label:t.props.label,icon:(d=t.props.children.props)===null||d===void 0?void 0:d.icon,children:(m=t.props.children.props)===null||m===void 0?void 0:m.children,statusLabel:(f=t.props.children.props)===null||f===void 0?void 0:f.statusLabel,restProps:_e(t.props.children.props,["start","end","status","onSelectPeriod","label","icon","children","isActive","statusLabel"]),ref:(v=(c=t.props)===null||c===void 0?void 0:c.children)===null||v===void 0?void 0:v.ref});r.push({label:t.props.label,icon:t.props.icon,headingTag:t.props.headingTag,periods:k,restProps:_e(t.props,["label","icon","headingTag"]),ref:t?.ref})}}),r};var Cd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Gd=g.forwardRef((e,r)=>{var{label:t,interval:n,count:a}=e,s=Cd(e,["label","interval","count"]);const{setStart:i,endDate:l,startDate:o,direction:u}=An(),d=Ce("Timeline"),m=d("dateFormat"),{cn:f}=H();let c;n==="month"?c=u==="left"?zo(l,a):hn(o,a):c=u==="left"?Jo(l,a):Kn(o,a);const v=Cn(u==="left"?o:l,c);return w.createElement(Jt,{as:"li"},w.createElement("button",Object.assign({type:"button","aria-label":v?d("Zoom.reset"):d("Zoom.zoom",{start:je(c,m),end:je(l,m)}),ref:r},s,{className:f("navds-timeline__zoom-button"),onClick:()=>{i(c)},"aria-pressed":v}),t))});var Ud=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const Ur=g.forwardRef((e,r)=>{var{className:t,children:n}=e,a=Ud(e,["className","children"]);const{cn:s}=H();return w.createElement("ul",Object.assign({ref:r,className:s(t,"navds-timeline__zoom")},a),n)});Ur.Button=Gd;Ur.componentType="zoom";var Yd=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const qe=g.forwardRef((e,r)=>{var{children:t,startDate:n,endDate:a,direction:s="left",axisLabelTemplates:i}=e,l=Yd(e,["children","startDate","endDate","direction","axisLabelTemplates"]);const{cn:o}=H(),u=Array.isArray(t),d=g.useRef([]);u||(t=[t]);const m=w.Children.toArray(t).filter(O=>{var R;return((R=O?.type)===null||R===void 0?void 0:R.componentType)==="row"}),f=w.Children.toArray(t).filter(O=>{var R;return((R=O?.type)===null||R===void 0?void 0:R.componentType)==="pin"}).map(O=>()=>O),c=w.Children.toArray(t).find(O=>{var R;return((R=O?.type)===null||R===void 0?void 0:R.componentType)==="zoom"}),v=g.useMemo(()=>Kd(m),[m]),k=v.map(O=>O?.periods?O.periods:[]),y=Le(Md({startDate:n,rows:k})),[b,E]=g.useState(y),[T,P]=g.useState(null),[N,D]=g.useState(Gn(Dt({endDate:a,rows:k}))),I=Gn(Dt({endDate:a,rows:k})),C=Bd(v,n??b,a??N,s),V=O=>{if(!(n||a))if(s==="left"){if(Cn(O,b)){E(y);return}E(O)}else{if(Cn(O,N)){D(I);return}D(O)}},F=O=>{var R,h,A,B;if(T!==null&&O==="ArrowDown"){for(let q=T+1;q<C.length;q++)if(C[q].periods.find(S=>!!S.children||!!S.onSelectPeriod)){P(q),(h=(R=d.current.find(S=>S.id===q))===null||R===void 0?void 0:R.ref)===null||h===void 0||h.focus();break}return}if(T!==null&&O==="ArrowUp"){for(let q=T-1;q>=0;q--)if(C[q].periods.find(S=>!!S.children||!!S.onSelectPeriod)){P(q),(B=(A=d.current.find(S=>S.id===q))===null||A===void 0?void 0:A.ref)===null||B===void 0||B.focus();break}return}},x=(O,R)=>{let h=d.current;h=h.filter(A=>A.id!==R),h.push({ref:O,id:R}),d.current=h};return w.createElement(as.Provider,{value:{startDate:n??b,endDate:a??N,direction:s,setStart:O=>V(O),setEndInclusive:O=>D(O),activeRow:T,setActiveRow:O=>F(O),initiate:O=>P(O),addFocusable:x}},w.createElement("div",Object.assign({},l,{ref:r}),w.createElement("div",{className:o("navds-timeline")},w.createElement(jd,{templates:i}),f.map((O,R)=>w.createElement(O,{key:`pin-${R}`})),C.map((O,R)=>w.createElement(os.Provider,{key:`row-${O.id}`,value:{periods:O.periods,id:O.id,active:T===R,index:R}},w.createElement(Gr,Object.assign({},O?.restProps,{ref:O?.ref,label:O.label,icon:O.icon,headingTag:O.headingTag}))))),c))});qe.Row=Gr;qe.Period=Cr;qe.Pin=ss;qe.Zoom=Ur;function Hd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var It={exports:{}},fn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bt;function $d(){if(Bt)return fn;Bt=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(n,a,s){var i=null;if(s!==void 0&&(i=""+s),a.key!==void 0&&(i=""+a.key),"key"in a){s={};for(var l in a)l!=="key"&&(s[l]=a[l])}else s=a;return a=s.ref,{$$typeof:e,type:n,key:i,ref:a!==void 0?a:null,props:s}}return fn.Fragment=r,fn.jsx=t,fn.jsxs=t,fn}var Mt;function Wd(){return Mt||(Mt=1,It.exports=$d()),It.exports}var $n=Wd();const On={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};mn(On);var Vt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Lt;function zd(){return Lt||(Lt=1,function(e){(function(){var r={}.hasOwnProperty;function t(){for(var s="",i=0;i<arguments.length;i++){var l=arguments[i];l&&(s=a(s,n.call(this,l)))}return s}function n(s){if(typeof s=="string"||typeof s=="number")return this&&this[s]||s;if(typeof s!="object")return"";if(Array.isArray(s))return t.apply(this,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var l in s)r.call(s,l)&&s[l]&&(i=a(i,this&&this[l]||l));return i}function a(s,i){return i?s?s+" "+i:s+i:s}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}(Vt)),Vt.exports}var Jd=zd();const Yr=Hd(Jd),Xd="_borderbox_1a0x6_1",Qd="_error_1a0x6_5",Zd="_warning_1a0x6_8",eg={borderbox:Xd,error:Qd,warning:Zd};Yr.bind(eg);const ng="_aksjonspunkt_11wjs_1",rg="_erAksjonspunktApent_11wjs_4",tg="_erIkkeGodkjentAvBeslutter_11wjs_8",ag={aksjonspunkt:ng,erAksjonspunktApent:rg,erIkkeGodkjentAvBeslutter:tg};Yr.bind(ag);const Kt=({dateString:e,year:r,month:t,day:n})=>$n.jsx($n.Fragment,{children:vn(e,{year:r,month:t,day:n})});mn(On);mn(On);const sg="_divider_1jpov_1",ig="_dividerParagraf_1jpov_8",lg="_leftPanel_1jpov_11",og="_rightPanel_1jpov_14",ug={divider:sg,dividerParagraf:ig,leftPanel:lg,rightPanel:og};Yr.bind(ug);const dg=()=>$n.jsx("span",{"data-testid":"editedIcon",children:$n.jsx(ni,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});mn(On);mn(On);const gs=({alleAndeler:e,opptjeningsår:r,alleKodeverk:t,arbeidsgiverOpplysningerPerId:n})=>{if(!e||e.length<1)return null;const a=gg(e,r),s=a?fg(a,n,t):[];return p.jsxs("div",{children:[p.jsx(yn,{size:"small",children:p.jsx(J,{id:"TilkjentYtelse.Feriepenger.Opptjeningsår",values:{år:r}})}),p.jsxs(G,{children:[p.jsx(G.Header,{children:p.jsxs(G.Row,{children:[p.jsx(G.HeaderCell,{scope:"col",children:p.jsx(J,{id:"TilkjentYtelse.Feriepenger.AndelNavn"})}),p.jsx(G.HeaderCell,{scope:"col",children:p.jsx(J,{id:"TilkjentYtelse.Feriepenger.GrunnlagRefusjon"})}),p.jsx(G.HeaderCell,{scope:"col",children:p.jsx(J,{id:"TilkjentYtelse.Feriepenger.GrunnlagSøker"})})]})}),p.jsx(G.Body,{children:s.map(i=>p.jsxs(G.Row,{children:[p.jsx(G.DataCell,{children:p.jsx(de,{size:"small",children:i.visningsnavn})}),p.jsx(G.DataCell,{children:p.jsx(de,{size:"small",children:i.utbetaltIRefusjon})}),p.jsx(G.DataCell,{children:p.jsx(de,{size:"small",children:i.utbetaltTilSøker})})]},i.identifikator))})]})]})},gg=(e,r)=>e.filter(t=>t.opptjeningsår===r),ms=e=>e.aktivitetStatus+e.arbeidsgiverId,mg=(e,r,t)=>{const n=e.arbeidsgiverId?r[e.arbeidsgiverId]:void 0;return n?n.erPrivatPerson?`${n.navn} (${vn(n.fødselsdato)})`:n.identifikator?`${n.navn} (${n.identifikator})`:n.navn:e.aktivitetStatus?t.AktivitetStatus.find(({kode:a})=>a===e.aktivitetStatus)?.navn??"":""},cg=(e,r,t)=>({identifikator:ms(e),visningsnavn:mg(e,r,t),utbetaltTilSøker:e.erBrukerMottaker?e.årsbeløp:0,utbetaltIRefusjon:e.erBrukerMottaker?0:e.årsbeløp}),fg=(e,r,t)=>{const n=new Array;return e.forEach(a=>{const s=a.erBrukerMottaker?a.årsbeløp:0,i=a.erBrukerMottaker?0:a.årsbeløp,l=ms(a),o=n.find(u=>u.identifikator===l);o?(o.utbetaltTilSøker+=s,o.utbetaltIRefusjon+=i):n.push(cg(a,r,t))}),n};gs.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPrÅr",props:{alleAndeler:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]"},description:""},opptjeningsår:{required:!0,tsType:{name:"number"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const cs=({feriepengegrunnlag:e,alleKodeverk:r,arbeidsgiverOpplysningerPerId:t})=>{const[n,a]=g.useState(!1),{andeler:s}=e;if(!s||s.length<1)return null;const i=vg(s);return p.jsx(Ye,{children:p.jsxs(Ye.Item,{open:n,children:[p.jsx(Ye.Header,{onClick:()=>a(!n),children:p.jsx(Sr,{size:"small",level:"2",children:p.jsx(J,{id:"TilkjentYtelse.Feriepenger.Tittel"})})}),p.jsx(Ye.Content,{children:p.jsx(gn,{gap:"space-16",children:i.map(l=>p.jsx(gs,{alleAndeler:s,opptjeningsår:l,alleKodeverk:r,arbeidsgiverOpplysningerPerId:t},`tabell_${l}`))})})]})})},vg=e=>{const r=e.map(t=>t.opptjeningsår).sort((t,n)=>t-n);return[...new Set(r)]};cs.__docgenInfo={description:"",methods:[],displayName:"FeriepengerPanel",props:{feriepengegrunnlag:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: FeriepengegrunnlagAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>`},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""}}};const kg={KVINNE:"K",MANN:"M",UDEFINERT:"-"},pg={MØDREKVOTE:"Mødrekvote",FEDREKVOTE:"Fedrekvote",FELLESPERIODE:"Fellesperiode",FORELDREPENGER_FØR_FØDSEL:"Foreldrepenger før fødsel",FORELDREPENGER:"Foreldrepenger",FLERBARNSDAGER:"Flerbarnsdager",UDEFINERT:"-"},fs=({valgtBeregningsresultatPeriode:e,velgNestePeriode:r,velgForrigePeriode:t,alleKodeverk:n,erSøknadSvangerskapspenger:a,arbeidsgiverOpplysningerPerId:s,lukkPeriode:i})=>{const l=Or(),o=ys(e.fom,e.tom),u=(...d)=>p.jsx("b",{children:d});return p.jsx(wr.New,{borderWidth:"1",padding:"4",children:p.jsxs(gn,{gap:"space-16",children:[p.jsxs(rn,{justify:"space-between",children:[p.jsx(yn,{size:"small",children:p.jsx(J,{id:"TilkjentYtelse.PeriodeData.Detaljer"})}),p.jsxs(rn,{gap:"space-8",align:"center",children:[p.jsx(He,{size:"xsmall",icon:p.jsx(Zt,{"aria-hidden":!0}),onClick:t,variant:"secondary-neutral",type:"button",title:l.formatMessage({id:"Timeline.prevPeriod"}),children:p.jsx(J,{id:"Timeline.prevPeriodShort"})}),p.jsx(He,{size:"xsmall",icon:p.jsx(ea,{"aria-hidden":!0}),onClick:r,variant:"secondary-neutral",type:"button",title:l.formatMessage({id:"Timeline.nextPeriod"}),iconPosition:"right",children:p.jsx(J,{id:"Timeline.nextPeriodShort"})}),p.jsx(He,{size:"xsmall",icon:p.jsx(gi,{"aria-hidden":!0}),onClick:i,variant:"tertiary-neutral",type:"button",title:l.formatMessage({id:"Timeline.lukkPeriode"})})]})]}),p.jsx(wr.New,{background:"success-moderate",padding:"4",width:"370px",children:p.jsxs(gn,{gap:"space-8",children:[p.jsxs(rn,{justify:"space-between",children:[p.jsx(yn,{size:"small",children:p.jsx(J,{id:"TilkjentYtelse.PeriodeData.Periode",values:{fomVerdi:vn(e.fom),tomVerdi:vn(e.tom)}})}),p.jsx(de,{size:"small",children:o.formattedString})]}),p.jsx(rn,{gap:"space-8",children:p.jsx(J,{id:"TilkjentYtelse.PeriodeData.Dagsats",values:{dagsatsVerdi:e.dagsats,b:u}})})]})}),e.andeler&&e.andeler.length!==0&&p.jsxs(G,{children:[p.jsx(G.Header,{children:p.jsxs(G.Row,{children:[p.jsx(G.HeaderCell,{scope:"col",children:p.jsx(J,{id:"TilkjentYtelse.PeriodeData.Andel"})}),!a&&p.jsxs(p.Fragment,{children:[p.jsx(G.HeaderCell,{scope:"col",children:p.jsx(J,{id:"TilkjentYtelse.PeriodeData.KontoType"})}),p.jsx(G.HeaderCell,{scope:"col",children:p.jsx(J,{id:"TilkjentYtelse.PeriodeData.Gradering"})})]}),p.jsx(G.HeaderCell,{scope:"col",children:p.jsx(J,{id:"TilkjentYtelse.PeriodeData.Utbetalingsgrad"})}),p.jsx(G.HeaderCell,{scope:"col",children:p.jsx(J,{id:"TilkjentYtelse.PeriodeData.Refusjon"})}),p.jsx(G.HeaderCell,{scope:"col",children:p.jsx(J,{id:"TilkjentYtelse.PeriodeData.TilSoker"})}),p.jsx(G.HeaderCell,{scope:"col",children:p.jsx(J,{id:"TilkjentYtelse.PeriodeData.SisteUtbDato"})})]})}),p.jsx(G.Body,{children:e.andeler.map((d,m)=>p.jsxs(G.Row,{children:[p.jsx(G.DataCell,{children:bg(d,n,s)}),!a&&p.jsx(G.DataCell,{children:p.jsx(de,{size:"small",children:pg[d.uttak.stonadskontoType]})}),!a&&p.jsx(G.DataCell,{children:p.jsx(de,{size:"small",children:hg(d)})}),p.jsx(G.DataCell,{children:p.jsx(de,{size:"small",children:d.utbetalingsgrad?d.utbetalingsgrad:""})}),p.jsx(G.DataCell,{children:p.jsx(de,{size:"small",children:d.aktivitetStatus===Te.ARBEIDSTAKER&&d.refusjon?d.refusjon:""})}),p.jsx(G.DataCell,{children:p.jsx(de,{size:"small",children:d.tilSoker?d.tilSoker:""})}),p.jsx(G.DataCell,{children:p.jsx(de,{size:"small",children:d.sisteUtbetalingsdato?vn(d.sisteUtbetalingsdato):""})})]},`index${m+1}`))})]})]})})},yg=(e,r,t)=>{const n=t[e.arbeidsgiverReferanse];return n?.navn?bs(n,e.eksternArbeidsforholdId):r.OpptjeningAktivitetType.find(({kode:s})=>s===e.arbeidsforholdType)?.navn??""},bg=(e,r,t)=>{switch(e.aktivitetStatus){case Te.ARBEIDSTAKER:return yg(e,r,t);case Te.FRILANSER:return p.jsx(J,{id:"TilkjentYtelse.PeriodeData.Frilans"});case Te.SELVSTENDIG_NAERINGSDRIVENDE:return p.jsx(J,{id:"TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende"});case Te.DAGPENGER:return p.jsx(J,{id:"TilkjentYtelse.PeriodeData.Dagpenger"});case Te.ARBEIDSAVKLARINGSPENGER:return p.jsx(J,{id:"TilkjentYtelse.PeriodeData.AAP"});case Te.MILITAER_ELLER_SIVIL:return p.jsx(J,{id:"TilkjentYtelse.PeriodeData.Militaer"});case Te.BRUKERS_ANDEL:return p.jsx(J,{id:"TilkjentYtelse.PeriodeData.BrukersAndel"});default:return""}},hg=e=>{if(e===void 0)return null;const r=e.uttak&&e.uttak.gradering===!0?"TilkjentYtelse.PeriodeData.Ja":"TilkjentYtelse.PeriodeData.Nei";return p.jsx(J,{id:r})};fs.__docgenInfo={description:`TimeLineData

Viser data fra valgt periode i tilkjent ytelse-tidslinjen`,methods:[],displayName:"TilkjentYtelseTimelineData",props:{valgtBeregningsresultatPeriode:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: StonadskontoType;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: AktivitetStatus;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: OpptjeningAktivitetType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: StonadskontoType;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"OpptjeningAktivitetType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: StonadskontoType;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: AktivitetStatus;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: OpptjeningAktivitetType;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`},description:""},velgNestePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},velgForrigePeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},erSøknadSvangerskapspenger:{required:!0,tsType:{name:"boolean"},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},lukkPeriode:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const vs=({beregningsresultatPeriode:e,søknadsdato:r,familiehendelseSamling:t,hovedsøkerKjønnKode:n,alleKodeverk:a,arbeidsgiverOpplysningerPerId:s,fagsak:i})=>{const l=Or(),[o,u]=g.useState(),d=wg(e),m=()=>{u(null)},f=()=>{const F=d.findIndex(x=>x.id===o?.id)+1;F<d.length&&u(d[F])},c=()=>{const F=d.findIndex(x=>x.id===o?.id)-1;F>=0&&u(d[F])},v=F=>{u(d.find(x=>x.id===F))},k=sn(d[0].start),y=sn(d[d.length-1].end),[b,E]=g.useState(k),[T,P]=g.useState(y),N=()=>{b.subtract(1,"month").isBefore(k)||(E(b.subtract(1,"month")),P(T.subtract(1,"month")))},D=()=>{T.add(1,"month").isAfter(y)||(E(b.add(1,"month")),P(T.add(1,"month")))},I=()=>{b.add(3,"month").isAfter(T)||(E(b.add(1,"month")),P(T.subtract(1,"month")))},C=()=>{T.add(1,"month").diff(b.subtract(1,"month"),"months")<36&&(E(b.subtract(1,"month")),P(T.add(1,"month")))},V=Rg(t);return p.jsxs(gn,{gap:"space-16",children:[p.jsxs(qe,{startDate:b.toDate(),endDate:T.add(1,"days").toDate(),children:[p.jsxs(qe.Pin,{date:Og(r,b).toDate(),children:[p.jsx(de,{children:p.jsx(J,{id:"TilkjentYtelse.Soknadsdato"})}),p.jsx(de,{children:p.jsx(Kt,{dateString:r})})]}),V.dato&&p.jsxs(qe.Pin,{date:Ag(V.dato,b).toDate(),children:[p.jsx(de,{children:p.jsx(J,{id:V.textId})}),p.jsx(de,{children:p.jsx(Kt,{dateString:V.dato})})]}),p.jsx(qe.Row,{label:Eg(i,a),icon:n===kg.KVINNE?p.jsx(zs,{width:20,height:20,color:"var(--ax-danger-300)"}):p.jsx(si,{width:20,height:20,color:"var(--ax-accent-700)"}),children:d.map(F=>p.jsx(qe.Period,{start:F.start,end:F.end,status:"success",onSelectPeriod:()=>v(F.id),isActive:o?.id===F.id,icon:F.erGradert?p.jsx(Zs,{"aria-hidden":!0}):p.jsx(Hs,{"aria-hidden":!0}),title:F.erGradert?l.formatMessage({id:"TilkjentYtelse.GradertPeriode"}):""},F.id))})]}),p.jsxs(rn,{gap:"space-8",justify:"end",children:[p.jsx(He,{size:"small",icon:p.jsx(ti,{"aria-hidden":!0}),onClick:I,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilkjentYtelse.ZoomInn"})}),p.jsx(He,{size:"small",icon:p.jsx(Xs,{"aria-hidden":!0}),onClick:C,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilkjentYtelse.ZoomUt"})}),p.jsx(He,{size:"small",icon:p.jsx(Zt,{"aria-hidden":!0}),onClick:N,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilkjentYtelse.ScrollTilVenstre"})}),p.jsx(He,{size:"small",icon:p.jsx(ea,{"aria-hidden":!0}),onClick:D,variant:"primary-neutral",type:"button",title:l.formatMessage({id:"TilkjentYtelse.ScrollTilHogre"})})]}),o&&p.jsx(fs,{alleKodeverk:a,valgtBeregningsresultatPeriode:o.periode,velgNestePeriode:f,velgForrigePeriode:c,erSøknadSvangerskapspenger:i.fagsakYtelseType===hs.SVANGERSKAPSPENGER,arbeidsgiverOpplysningerPerId:s,lukkPeriode:m})]})},Tg=e=>(e.andeler??[]).filter(t=>t.uttak&&t.uttak.gradering===!0).length>0,Rg=e=>{const r=e.gjeldende??e.oppgitt;return r.soknadType===Tn.FODSEL?r.avklartBarn&&r.avklartBarn.length>0?{dato:r.avklartBarn[0].fodselsdato,textId:"TilkjentYtelse.Fodselsdato"}:{dato:r.termindato,textId:"TilkjentYtelse.Termindato"}:r.omsorgsovertakelseDato?{dato:r.omsorgsovertakelseDato,textId:"TilkjentYtelse.Omsorgsovertakelsesdato"}:{dato:r.adopsjonFodelsedatoer?r.adopsjonFodelsedatoer[0]:void 0,textId:"TilkjentYtelse.Fodselsdato"}},wg=(e=[])=>e.filter(r=>r.andeler?.[0]&&r.dagsats).map((r,t)=>({erGradert:Tg(r),start:sn(r.fom).toDate(),end:sn(r.tom).add(1,"days").toDate(),id:t,periode:r})),Eg=(e,r)=>r.RelasjonsRolleType.find(n=>n.kode===e.relasjonsRolleType)?.navn??"",Ag=(e,r)=>{const t=sn(e);return t.isBefore(r)?r.subtract(5,"days"):t},Og=(e,r)=>{const t=sn(e);return t.isBefore(r)?r.subtract(15,"days"):t};vs.__docgenInfo={description:`TilkjentYtelse

Masserer data og populerer felten samt formatterar tidslinjen for tilkjent ytelse`,methods:[],displayName:"TilkjentYtelse",props:{beregningsresultatPeriode:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: StonadskontoType;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: AktivitetStatus;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: OpptjeningAktivitetType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: StonadskontoType;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"OpptjeningAktivitetType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: StonadskontoType;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: AktivitetStatus;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: OpptjeningAktivitetType;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`}],raw:"BeregningsresultatPeriode[]"},description:""},søknadsdato:{required:!0,tsType:{name:"string"},description:""},familiehendelseSamling:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse | null;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"register",value:{name:"union",raw:"FamilieHendelse | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse | null;
}>`},description:""},hovedsøkerKjønnKode:{required:!1,tsType:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:`KodeverkMedSammeVerditype & {
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
}`,signature:{properties:[{key:"lovHjemmel",value:{name:"string",required:!0}},{key:"sortering",value:{name:"string",required:!0}},{key:"utfallType",value:{name:"string",required:!0}},{key:"gyldigForLovendringer",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"uttakTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"valgbarForKonto",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"synligForRolle",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}]}],raw:"PeriodeResultatÅrsakKodeverk[]",required:!0}}]}}]},description:""},arbeidsgiverOpplysningerPerId:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"union",raw:`| {
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},fagsak:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  relasjonsRolleType: RelasjonsRolleType;
  status: FagsakStatus;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"FagsakYtelseType",required:!0}},{key:"relasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}},{key:"status",value:{name:"FagsakStatus",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}},{key:"aktørId",value:{name:"string",required:!0}},{key:"harVergeIÅpenBehandling",value:{name:"boolean",required:!0}},{key:"sakSkalTilInfotrygd",value:{name:"boolean",required:!0}},{key:"behandlingTypeKanOpprettes",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingType: BehandlingType;
  kanOppretteBehandling: boolean;
}`,signature:{properties:[{key:"behandlingType",value:{name:"BehandlingType",required:!0}},{key:"kanOppretteBehandling",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  behandlingType: BehandlingType;
  kanOppretteBehandling: boolean;
}>`}],raw:"BehandlingOppretting[]",required:!0}},{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0}},{key:"annenPart",value:{name:"union",raw:"Person | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"diskresjonskode",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aktørId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>`,required:!0},{name:"null"}],required:!0}},{key:"annenpartBehandling",value:{name:"union",raw:"AnnenPartBehandling | null",elements:[{name:"signature",type:"object",raw:`{
  saksnummer: string;
  behandlingUuid: string;
  relasjonsRolleType: RelasjonsRolleType;
}`,signature:{properties:[{key:"saksnummer",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"string",required:!0}},{key:"relasjonsRolleType",value:{name:"RelasjonsRolleType",required:!0}}]}},{name:"null"}],required:!0}},{key:"fagsakMarkeringer",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fagsakMarkering: FagsakMarkeringKode;
  kortNavn?: string;
}`,signature:{properties:[{key:"fagsakMarkering",value:{name:"FagsakMarkeringKode",required:!0}},{key:"kortNavn",value:{name:"string",required:!1}}]}}],raw:"Saksmarkering[]",required:!1}},{key:"familiehendelse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}`,signature:{properties:[{key:"hendelseType",value:{name:"string",required:!0}},{key:"hendelseDato",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"dødfødsel",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  hendelseType: string;
  hendelseDato?: string;
  antallBarn: number;
  dødfødsel: boolean;
}>`,required:!1}},{key:"behandlinger",value:{name:"Array",elements:[{name:"intersection",raw:`BehandlingFellesData &
Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
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
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}`,signature:{properties:[{key:"behandlingTillatteOperasjoner",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}`,signature:{properties:[{key:"behandlingFraBeslutter",value:{name:"boolean",required:!0}},{key:"behandlingKanSendeMelding",value:{name:"boolean",required:!0}},{key:"behandlingTilGodkjenning",value:{name:"boolean",required:!0}},{key:"behandlingKanBytteEnhet",value:{name:"boolean",required:!0}},{key:"behandlingKanHenlegges",value:{name:"boolean",required:!0}},{key:"behandlingKanGjenopptas",value:{name:"boolean",required:!0}},{key:"behandlingKanOpnesForEndringer",value:{name:"boolean",required:!0}},{key:"behandlingKanSettesPaVent",value:{name:"boolean",required:!0}},{key:"behandlingKanMerkesHaster",value:{name:"boolean",required:!0}},{key:"vergeBehandlingsmeny",value:{name:"VergeBehandlingmenyValg",required:!0}}]}}],raw:`Readonly<{
  behandlingFraBeslutter: boolean;
  behandlingKanSendeMelding: boolean;
  behandlingTilGodkjenning: boolean;
  behandlingKanBytteEnhet: boolean;
  behandlingKanHenlegges: boolean;
  behandlingKanGjenopptas: boolean;
  behandlingKanOpnesForEndringer: boolean;
  behandlingKanSettesPaVent: boolean;
  behandlingKanMerkesHaster: boolean;
  vergeBehandlingsmeny: VergeBehandlingmenyValg;
}>`,required:!0}},{key:"brevmaler",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"tilgjengelig",value:{name:"boolean",required:!0}}]}}],raw:"Brevmal[]",required:!0}},{key:"totrinnskontrollÅrsaker",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}`,signature:{properties:[{key:"skjermlenkeType",value:{name:"SkjermlenkeType",required:!0}},{key:"totrinnskontrollAksjonspunkter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aksjonspunktKode: string;
  opptjeningAktiviteter?: OpptjeningAktiviteter[];
  beregningDto?: {
    fastsattVarigEndringNaering: boolean;
    faktaOmBeregningTilfeller: string[];
  };
  besluttersBegrunnelse?: string;
  totrinnskontrollGodkjent?: boolean;
  vurderPaNyttArsaker?: VurderÅrsak[];
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
}`,signature:{properties:[{key:"fastsattVarigEndringNaering",value:{name:"boolean",required:!0}},{key:"faktaOmBeregningTilfeller",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"totrinnskontrollGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"VurderÅrsak"}],raw:"VurderÅrsak[]",required:!1}},{key:"uttakPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
  vurderPaNyttArsaker?: VurderÅrsak[];
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
  skjermlenkeType: SkjermlenkeType;
  totrinnskontrollAksjonspunkter: TotrinnskontrollAksjonspunkt[];
}>`}],raw:"TotrinnskontrollSkjermlenkeContext[]",required:!0}},{key:"totrinnskontrollReadonly",value:{name:"boolean",required:!0}},{key:"risikoAksjonspunkt",value:{name:"union",raw:"Aksjonspunkt | null",elements:[{name:"signature",type:"object",raw:`{
  definisjon:
    | '5001'
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
    | '7041';
  status: 'AVBR' | 'OPPR' | 'UTFO';
  begrunnelse: string | null;
  vilkarType:
    | 'FP_VK_1'
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
    | '-';
  toTrinnsBehandling: boolean;
  toTrinnsBehandlingGodkjent: boolean | null;
  vurderPaNyttArsaker: Array<
    'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
  > | null;
  besluttersBegrunnelse: string | null;
  aksjonspunktType: 'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-';
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
| '7041'`,elements:[{name:"literal",value:"'5001'"},{name:"literal",value:"'5027'"},{name:"literal",value:"'5004'"},{name:"literal",value:"'5005'"},{name:"literal",value:"'5006'"},{name:"literal",value:"'5007'"},{name:"literal",value:"'5008'"},{name:"literal",value:"'5011'"},{name:"literal",value:"'5012'"},{name:"literal",value:"'5013'"},{name:"literal",value:"'5014'"},{name:"literal",value:"'5015'"},{name:"literal",value:"'5016'"},{name:"literal",value:"'5017'"},{name:"literal",value:"'5002'"},{name:"literal",value:"'5026'"},{name:"literal",value:"'5028'"},{name:"literal",value:"'5030'"},{name:"literal",value:"'5031'"},{name:"literal",value:"'5033'"},{name:"literal",value:"'5034'"},{name:"literal",value:"'5003'"},{name:"literal",value:"'5035'"},{name:"literal",value:"'5037'"},{name:"literal",value:"'5038'"},{name:"literal",value:"'5039'"},{name:"literal",value:"'5040'"},{name:"literal",value:"'5043'"},{name:"literal",value:"'5046'"},{name:"literal",value:"'5047'"},{name:"literal",value:"'5049'"},{name:"literal",value:"'5051'"},{name:"literal",value:"'5052'"},{name:"literal",value:"'5054'"},{name:"literal",value:"'5055'"},{name:"literal",value:"'5057'"},{name:"literal",value:"'5058'"},{name:"literal",value:"'5059'"},{name:"literal",value:"'5060'"},{name:"literal",value:"'5061'"},{name:"literal",value:"'5068'"},{name:"literal",value:"'5064'"},{name:"literal",value:"'5065'"},{name:"literal",value:"'5063'"},{name:"literal",value:"'5066'"},{name:"literal",value:"'5071'"},{name:"literal",value:"'5072'"},{name:"literal",value:"'5069'"},{name:"literal",value:"'5073'"},{name:"literal",value:"'5076'"},{name:"literal",value:"'5077'"},{name:"literal",value:"'5085'"},{name:"literal",value:"'5082'"},{name:"literal",value:"'5084'"},{name:"literal",value:"'5029'"},{name:"literal",value:"'5086'"},{name:"literal",value:"'5089'"},{name:"literal",value:"'5041'"},{name:"literal",value:"'5062'"},{name:"literal",value:"'5091'"},{name:"literal",value:"'5092'"},{name:"literal",value:"'5095'"},{name:"literal",value:"'5096'"},{name:"literal",value:"'5074'"},{name:"literal",value:"'5101'"},{name:"literal",value:"'5102'"},{name:"literal",value:"'5103'"},{name:"literal",value:"'6002'"},{name:"literal",value:"'6003'"},{name:"literal",value:"'6004'"},{name:"literal",value:"'6005'"},{name:"literal",value:"'6006'"},{name:"literal",value:"'6008'"},{name:"literal",value:"'6009'"},{name:"literal",value:"'6010'"},{name:"literal",value:"'6011'"},{name:"literal",value:"'6065'"},{name:"literal",value:"'6014'"},{name:"literal",value:"'6015'"},{name:"literal",value:"'6045'"},{name:"literal",value:"'6016'"},{name:"literal",value:"'6018'"},{name:"literal",value:"'6017'"},{name:"literal",value:"'6103'"},{name:"literal",value:"'7001'"},{name:"literal",value:"'7002'"},{name:"literal",value:"'7003'"},{name:"literal",value:"'7005'"},{name:"literal",value:"'7007'"},{name:"literal",value:"'7008'"},{name:"literal",value:"'7011'"},{name:"literal",value:"'7013'"},{name:"literal",value:"'7014'"},{name:"literal",value:"'7020'"},{name:"literal",value:"'7030'"},{name:"literal",value:"'7033'"},{name:"literal",value:"'7037'"},{name:"literal",value:"'7039'"},{name:"literal",value:"'7040'"},{name:"literal",value:`"UNDEFINED('null')"`},{name:"literal",value:"'5009'"},{name:"literal",value:"'5019'"},{name:"literal",value:"'5020'"},{name:"literal",value:"'5021'"},{name:"literal",value:"'5022'"},{name:"literal",value:"'5023'"},{name:"literal",value:"'5024'"},{name:"literal",value:"'5025'"},{name:"literal",value:"'5032'"},{name:"literal",value:"'5036'"},{name:"literal",value:"'5042'"},{name:"literal",value:"'5044'"},{name:"literal",value:"'5045'"},{name:"literal",value:"'5048'"},{name:"literal",value:"'5050'"},{name:"literal",value:"'5053'"},{name:"literal",value:"'5056'"},{name:"literal",value:"'5067'"},{name:"literal",value:"'5070'"},{name:"literal",value:"'5075'"},{name:"literal",value:"'5078'"},{name:"literal",value:"'5079'"},{name:"literal",value:"'5080'"},{name:"literal",value:"'5081'"},{name:"literal",value:"'5083'"},{name:"literal",value:"'5087'"},{name:"literal",value:"'5088'"},{name:"literal",value:"'5090'"},{name:"literal",value:"'5093'"},{name:"literal",value:"'5094'"},{name:"literal",value:"'5097'"},{name:"literal",value:"'5098'"},{name:"literal",value:"'5099'"},{name:"literal",value:"'6007'"},{name:"literal",value:"'6012'"},{name:"literal",value:"'6013'"},{name:"literal",value:"'6068'"},{name:"literal",value:"'6070'"},{name:"literal",value:"'7004'"},{name:"literal",value:"'7006'"},{name:"literal",value:"'7009'"},{name:"literal",value:"'7015'"},{name:"literal",value:"'7016'"},{name:"literal",value:"'7017'"},{name:"literal",value:"'7018'"},{name:"literal",value:"'7019'"},{name:"literal",value:"'7021'"},{name:"literal",value:"'7022'"},{name:"literal",value:"'7023'"},{name:"literal",value:"'7024'"},{name:"literal",value:"'7025'"},{name:"literal",value:"'7026'"},{name:"literal",value:"'7027'"},{name:"literal",value:"'7028'"},{name:"literal",value:"'7029'"},{name:"literal",value:"'7032'"},{name:"literal",value:"'7034'"},{name:"literal",value:"'7035'"},{name:"literal",value:"'7036'"},{name:"literal",value:"'7038'"},{name:"literal",value:"'7041'"}],required:!0}},{key:"status",value:{name:"union",raw:"'AVBR' | 'OPPR' | 'UTFO'",elements:[{name:"literal",value:"'AVBR'"},{name:"literal",value:"'OPPR'"},{name:"literal",value:"'UTFO'"}],required:!0}},{key:"begrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"vilkarType",value:{name:"union",raw:`| 'FP_VK_1'
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
| '-'`,elements:[{name:"literal",value:"'FP_VK_1'"},{name:"literal",value:"'FP_VK_11'"},{name:"literal",value:"'FP_VK_16'"},{name:"literal",value:"'FP_VK_2'"},{name:"literal",value:"'FP_VK_2_F'"},{name:"literal",value:"'FP_VK_2_L'"},{name:"literal",value:"'FP_VK_3'"},{name:"literal",value:"'FP_VK_4'"},{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'FP_VK_34'"},{name:"literal",value:"'FP_VK_21'"},{name:"literal",value:"'FP_VK_23'"},{name:"literal",value:"'FP_VK_41'"},{name:"literal",value:"'SVP_VK_1'"},{name:"literal",value:"'-'"}],required:!0}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!0}},{key:"toTrinnsBehandlingGodkjent",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}},{key:"vurderPaNyttArsaker",value:{name:"union",raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
> | null`,elements:[{name:"Array",elements:[{name:"union",raw:"'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'",elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:`Array<
  'FEIL_FAKTA' | 'FEIL_LOV' | 'SKJØNN' | 'UTREDNING' | 'SAKSFLYT' | 'BEGRUNNELSE' | '-' | 'ANNET' | 'FEIL_REGEL'
>`},{name:"null"}],required:!0}},{key:"besluttersBegrunnelse",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"aksjonspunktType",value:{name:"union",raw:"'AUTO' | 'MANU' | 'OVST' | 'SAOV' | '-'",elements:[{name:"literal",value:"'AUTO'"},{name:"literal",value:"'MANU'"},{name:"literal",value:"'OVST'"},{name:"literal",value:"'SAOV'"},{name:"literal",value:"'-'"}],required:!0}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"erAktivt",value:{name:"boolean",required:!0}},{key:"fristTid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretTidspunkt",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"endretAv",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}},{name:"null"}],required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"ugunstAksjonspunkt",value:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  behandlingTillatteOperasjoner: BehandlingTillatteOperasjoner;
  brevmaler: Brevmal[];
  totrinnskontrollÅrsaker: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadonly: boolean;
  risikoAksjonspunkt: Aksjonspunkt | null;
  kontrollResultat: Risikoklassifisering;
  ugunstAksjonspunkt: boolean | null;
}>`}]}],raw:"BehandlingAppKontekst[]",required:!0}},{key:"brukerManglerAdresse",value:{name:"boolean",required:!0}},{key:"historikkinnslag",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: SkjermlenkeType | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}`,signature:{properties:[{key:"aktør",value:{name:"signature",type:"object",raw:`{
  type: HistorikkAktor;
  ident: string | null;
}`,signature:{properties:[{key:"type",value:{name:"HistorikkAktor",required:!0}},{key:"ident",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]},required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingUuid",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"skjermlenke",value:{name:"union",raw:"SkjermlenkeType | null",elements:[{name:"SkjermlenkeType"},{name:"null"}],required:!0}},{key:"dokumenter",value:{name:"union",raw:"HistorikkInnslagDokumentLink[] | null",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}`,signature:{properties:[{key:"dokumentId",value:{name:"string",required:!0}},{key:"journalpostId",value:{name:"string",required:!0}},{key:"tag",value:{name:"string",required:!0}},{key:"utgått",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
}>`}],raw:"HistorikkInnslagDokumentLink[]"},{name:"null"}],required:!0}},{key:"tittel",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"linjer",value:{name:"Array",elements:[{name:"union",raw:`| {
    type: 'TEKST';
    tekst: string;
  }
| { type: 'LINJESKIFT' }`,elements:[{name:"signature",type:"object",raw:`{
  type: 'TEKST';
  tekst: string;
}`,signature:{properties:[{key:"type",value:{name:"literal",value:"'TEKST'",required:!0}},{key:"tekst",value:{name:"string",required:!0}}]}},{name:"signature",type:"object",raw:"{ type: 'LINJESKIFT' }",signature:{properties:[{key:"type",value:{name:"literal",value:"'LINJESKIFT'",required:!0}}]}}]}],raw:"Linje[]",required:!0}}]}}],raw:`Readonly<{
  aktør: HistorikkUtfører;
  opprettetTidspunkt: string;
  behandlingUuid: string | null;
  skjermlenke: SkjermlenkeType | null;
  dokumenter: HistorikkInnslagDokumentLink[] | null;
  tittel: string | null;
  linjer: Linje[];
}>`}],raw:"Historikkinnslag[]",required:!0}},{key:"kontrollResultat",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}`,signature:{properties:[{key:"kontrollresultat",value:{name:"string",required:!0}},{key:"faresignalVurdering",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"iayFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}},{key:"medlFaresignaler",value:{name:"union",raw:`{
  faresignaler: string[];
} | null`,elements:[{name:"signature",type:"object",raw:`{
  faresignaler: string[];
}`,signature:{properties:[{key:"faresignaler",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  kontrollresultat: string;
  faresignalVurdering?: string | null;
  iayFaresignaler?: {
    faresignaler: string[];
  } | null;
  medlFaresignaler?: {
    faresignaler: string[];
  } | null;
}>`,required:!0}},{key:"notater",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  opprettetTidspunkt: string;
  opprettetAv: string;
  notat: string;
}`,signature:{properties:[{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"opprettetAv",value:{name:"string",required:!0}},{key:"notat",value:{name:"string",required:!0}}]}}],raw:"Saksnotat[]",required:!0}}]}}],raw:`Readonly<{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  relasjonsRolleType: RelasjonsRolleType;
  status: FagsakStatus;
  dekningsgrad: number;
  aktørId: string;
  harVergeIÅpenBehandling: boolean;
  sakSkalTilInfotrygd: boolean;
  behandlingTypeKanOpprettes: BehandlingOppretting[];
  bruker: Person;
  annenPart: Person | null;
  annenpartBehandling: AnnenPartBehandling | null;
  fagsakMarkeringer?: Saksmarkering[];
  familiehendelse?: FagsakHendelse;
  behandlinger: BehandlingAppKontekst[];
  brukerManglerAdresse: boolean;
  historikkinnslag: Historikkinnslag[];
  kontrollResultat: Risikoklassifisering;
  notater: Saksnotat[];
}>`},description:""}}};const ks=({beregningresultat:e,arbeidsgiverOpplysningerPerId:r,feriepengegrunnlag:t,familiehendelse:n,personoversikt:a,søknad:s})=>{const{alleKodeverk:i,fagsak:l,aksjonspunkterForPanel:o}=Ts(),u=Sg(o),d=s.søknadsfrist?.mottattDato??s.mottattDato;return p.jsxs(gn,{gap:"space-16",children:[p.jsx(Sr,{size:"small",level:"2",children:p.jsx(J,{id:"TilkjentYtelse.Title"})}),e&&p.jsx(vs,{beregningsresultatPeriode:e.perioder,søknadsdato:d,familiehendelseSamling:n,hovedsøkerKjønnKode:a?.bruker?a.bruker.kjønn:void 0,alleKodeverk:i,arbeidsgiverOpplysningerPerId:r,fagsak:l}),t&&p.jsx(cs,{feriepengegrunnlag:t,arbeidsgiverOpplysningerPerId:r,alleKodeverk:i}),u&&p.jsxs(gn,{gap:"space-8",children:[p.jsx(yn,{children:p.jsx(J,{id:"TilkjentYtelse.VurderTilbaketrekk.Beskrivelse"})}),p.jsxs(rn,{gap:"space-8",children:[p.jsx(de,{children:u}),p.jsx(dg,{})]})]})]})},Sg=e=>e.find(r=>r.definisjon===zn.VURDER_TILBAKETREKK)?.begrunnelse??void 0;ks.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelsePanel",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder?: BeregningsresultatPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: StonadskontoType;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: AktivitetStatus;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: OpptjeningAktivitetType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: StonadskontoType;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"OpptjeningAktivitetType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: StonadskontoType;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: AktivitetStatus;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: OpptjeningAktivitetType;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`}],raw:"BeregningsresultatPeriode[]",required:!1}}]}}],raw:`Readonly<{
  perioder?: BeregningsresultatPeriode[];
}>`},description:""},familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse | null;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"register",value:{name:"union",raw:"FamilieHendelse | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse | null;
}>`},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""},søknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    } | null;
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  } | null;
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"union",raw:"FarSøkerType | null",elements:[{name:"FarSøkerType"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},feriepengegrunnlag:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: FeriepengegrunnlagAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>`},description:""}}};const jg={"TilkjentYtelse.Title":"Tilkjent ytelse","TilkjentYtelse.VurderTilbaketrekk.Beskrivelse":"Saksbehandler har vurdert om ytelsen skal endres fra direkte utbetaling til refusjon til arbeidsgiver, og tilbakekreves fra bruker, eller om det er en sak mellom arbeidstaker og arbeidsgiver.","TilkjentYtelse.Stonadinfo.Stonadsdager":"Stønadsdager","TilkjentYtelse.PeriodeData.Detaljer":"Detaljer for valgt periode","TilkjentYtelse.PeriodeData.UkerDager":"{weeks} uker {days} dager","TilkjentYtelse.PeriodeData.Godkjent":"Godkjent","TilkjentYtelse.PeriodeData.Dagsats":"Utbetalt dagsats: <b>{dagsatsVerdi}</b>","TilkjentYtelse.PeriodeData.Andel":"Andel","TilkjentYtelse.PeriodeData.KontoType":"Stønadskonto","TilkjentYtelse.PeriodeData.Gradering":"Gradering","TilkjentYtelse.PeriodeData.Utbetalingsgrad":"Utb.grad","TilkjentYtelse.PeriodeData.Refusjon":"Utbetalt refusjon","TilkjentYtelse.PeriodeData.TilSoker":"Utbetalt til søker","TilkjentYtelse.PeriodeData.SisteUtbDato":"Siste innvilgede utb.dato","TilkjentYtelse.PeriodeData.Periode":"{fomVerdi} - {tomVerdi}","TilkjentYtelse.PeriodeData.Ja":"Ja","TilkjentYtelse.PeriodeData.Nei":"Nei","TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende":"Selvstendig næringsdrivende","TilkjentYtelse.PeriodeData.Frilans":"Frilanser","TilkjentYtelse.PeriodeData.Militaer":"Militær","TilkjentYtelse.PeriodeData.Dagpenger":"Dagpenger","TilkjentYtelse.PeriodeData.AAP":"Arbeidsavklaringspenger","TilkjentYtelse.PeriodeData.BrukersAndel":"Brukers andel","TilkjentYtelse.Feriepenger.Tittel":"Feriepengegrunnlag","TilkjentYtelse.Feriepenger.Opptjeningsår":"Opptjent i {år}","TilkjentYtelse.Feriepenger.AndelNavn":"Andel","TilkjentYtelse.Feriepenger.GrunnlagSøker":"Beløp til søker","TilkjentYtelse.Feriepenger.GrunnlagRefusjon":"Beløp til arbeidsgiver","TilkjentYtelse.Soknadsdato":"Søknadsdato","TilkjentYtelse.Fodselsdato":"Fødselsdato","TilkjentYtelse.Termindato":"Termindato","TilkjentYtelse.GradertPeriode":"Gradert periode","TilkjentYtelse.ZoomInn":"Zoom inn","TilkjentYtelse.ZoomUt":"Zoom ut","TilkjentYtelse.ScrollTilVenstre":"Scroll til venstre","TilkjentYtelse.ScrollTilHogre":"Scroll til høyre","TilkjentYtelse.Omsorgsovertakelsesdato":"Omsorgsovertakelsesdato","Timeline.lukkPeriode":"Lukk periode","Malform.Beskrivelse":"Foretrukket språk","Timeline.closeData":"Lukke info om periode","Timeline.nextPeriod":"Neste periode","Timeline.nextPeriodShort":"Neste","Timeline.prevPeriod":"Forrige periode","Timeline.prevPeriodShort":"Forrige","Timeline.tooltip.dagsats":"Dagsats: {dagsats}kr","Timeline.tooltip.start":"Start","Timeline.tooltip.slutt":"Slutt","Timeline.tooltip.periodetype":"Periodetype","Timeline.tooltip.utsettelsePeriode":"Utsettelse","Timeline.TidspunktFamiliehendelse":"Tidspunkt for familiehendelse","Timeline.OppfyltPeriode":"Oppfylt periode","Timeline.IkkeOppfyltPeriode":"Ikke oppfylt periode","Timeline.TidspunktMotakSoknad":"Tidspunkt for mottatt søknad","Timeline.BelopTilbakereves":"Beløp tilbakekreves","Timeline.IngenTilbakekreving":"Ingen tilbakekreving","Timeline.IkkeAvklartPeriode":"Uavklart periode","Timeline.TidspunktRevurdering":"Startpunkt for revurdering","Timeline.GradertPeriode":"Gradert periode","Timeline.ManueltAvklart":"Manuelt avklart periode"},Pg=mn(jg),Ar=e=>p.jsx(Rs,{value:Pg,children:p.jsx(ks,{...e})});Ar.__docgenInfo={description:"",methods:[],displayName:"TilkjentYtelseProsessIndex",props:{beregningresultat:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder?: BeregningsresultatPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"dagsats",value:{name:"number",required:!0}},{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: StonadskontoType;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: AktivitetStatus;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: OpptjeningAktivitetType;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"refusjon",value:{name:"number",required:!0}},{key:"tilSoker",value:{name:"number",required:!0}},{key:"uttak",value:{name:"signature",type:"object",raw:`{
  stonadskontoType: StonadskontoType;
  gradering: boolean;
}`,signature:{properties:[{key:"stonadskontoType",value:{name:"StonadskontoType",required:!0}},{key:"gradering",value:{name:"boolean",required:!0}}]},required:!0}},{key:"utbetalingsgrad",value:{name:"number",required:!0}},{key:"sisteUtbetalingsdato",value:{name:"string",required:!0}},{key:"aktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"eksternArbeidsforholdId",value:{name:"string",required:!0}},{key:"arbeidsforholdType",value:{name:"OpptjeningAktivitetType",required:!0}}]}}],raw:`Readonly<{
  arbeidsgiverReferanse: string;
  refusjon: number;
  tilSoker: number;
  uttak: {
    stonadskontoType: StonadskontoType;
    gradering: boolean;
  };
  utbetalingsgrad: number;
  sisteUtbetalingsdato: string;
  aktivitetStatus: AktivitetStatus;
  eksternArbeidsforholdId: string;
  arbeidsforholdType: OpptjeningAktivitetType;
}>`}],raw:"BeregningsresultatPeriodeAndel[]",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  dagsats: number;
  andeler?: BeregningsresultatPeriodeAndel[];
}>`}],raw:"BeregningsresultatPeriode[]",required:!1}}]}}],raw:`Readonly<{
  perioder?: BeregningsresultatPeriode[];
}>`},description:""},familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse | null;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"register",value:{name:"union",raw:"FamilieHendelse | null",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato: string | null;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato: string | null;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0},{name:"null"}],required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse | null;
}>`},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"SivilstandType",required:!0}},{key:"dødsdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: SivilstandType;
  dødsdato: string | null;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""},søknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    } | null;
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  } | null;
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"union",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
} | null`,elements:[{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]}},{name:"null"}],required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"union",raw:"FarSøkerType | null",elements:[{name:"FarSøkerType"},{name:"null"}],required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | null;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      } | null;
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato: string | null;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: FarSøkerType | null;
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
>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},feriepengegrunnlag:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andeler: FeriepengegrunnlagAndel[];
}`,signature:{properties:[{key:"andeler",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  aktivitetStatus: AktivitetStatus;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}`,signature:{properties:[{key:"aktivitetStatus",value:{name:"AktivitetStatus",required:!0}},{key:"opptjeningsår",value:{name:"number",required:!0}},{key:"årsbeløp",value:{name:"number",required:!0}},{key:"erBrukerMottaker",value:{name:"boolean",required:!0}},{key:"arbeidsgiverId",value:{name:"string",required:!1}},{key:"arbeidsforholdId",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  aktivitetStatus: AktivitetStatus;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
}>`}],raw:"FeriepengegrunnlagAndel[]",required:!0}}]}}],raw:`Readonly<{
  andeler: FeriepengegrunnlagAndel[];
}>`},description:""}}};const ps={gjeldende:{avklartBarn:[{fodselsdato:"2019-01-01"}],omsorgsovertakelseDato:"2019-01-01",soknadType:Tn.FODSEL}},qg={bruker:{kjønn:Wt.KVINNE}},_g={perioder:[{andeler:[{uttak:{stonadskontoType:vr.FELLESPERIODE},aktivitetStatus:Te.ARBEIDSTAKER,arbeidsforholdType:zt.ARBEID}],fom:"2018-01-01",tom:"2019-01-10",dagsats:1e3},{andeler:[{uttak:{stonadskontoType:vr.FORELDREPENGER},aktivitetStatus:Te.ARBEIDSTAKER,arbeidsforholdType:$t.NYTT_ARBEIDSFORHOLD}],fom:"2019-02-01",tom:"2019-06-10",dagsats:100}]},Ng={mottattDato:"2019-01-10",soknadType:Tn.FODSEL,omsorgsovertakelseDato:"2019-01-10",fodselsdatoer:{1:"2019-01-01"},adopsjonFodelsedatoer:{1:"2019-01-01"},termindato:"2019-02-01"},Fg={1:{erPrivatPerson:!1,identifikator:"973861778",referanse:"973861778",navn:"EQUINOR ASA AVD STATOIL SOKKELVIRKSOMHET"}},Bg={title:"prosess/prosess-tilkjent-ytelse",component:Ar,decorators:[ws],args:{beregningresultat:_g,familiehendelse:ps,personoversikt:qg,søknad:Ng,arbeidsgiverOpplysningerPerId:Fg},render:e=>p.jsx(Ar,{...e})},qn={args:{aksjonspunkterForPanel:[]}},_n={args:{aksjonspunkterForPanel:[{begrunnelse:"Dette er en begrunnelse saksbehandler tidligere har gjort.",definisjon:zn.VURDER_TILBAKETREKK,status:Yt.UTFORT}]}},Nn={args:{aksjonspunkterForPanel:[{definisjon:zn.VURDER_TILBAKETREKK,status:Yt.OPPRETTET}],feriepengegrunnlag:{andeler:[{aktivitetStatus:Te.ARBEIDSTAKER,opptjeningsår:2,årsbeløp:5e5,erBrukerMottaker:!0}]}}},Fn={args:{aksjonspunkterForPanel:[],familiehendelse:{...ps,gjeldende:{avklartBarn:[{fodselsdato:"2017-01-01"}],soknadType:Tn.FODSEL}}}};qn.parameters={...qn.parameters,docs:{...qn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: []
  }
}`,...qn.parameters?.docs?.source}}};_n.parameters={..._n.parameters,docs:{..._n.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      begrunnelse: 'Dette er en begrunnelse saksbehandler tidligere har gjort.',
      definisjon: AksjonspunktKode.VURDER_TILBAKETREKK,
      status: AksjonspunktStatus.UTFORT
    }] as Aksjonspunkt[]
  }
}`,..._n.parameters?.docs?.source}}};Nn.parameters={...Nn.parameters,docs:{...Nn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.VURDER_TILBAKETREKK,
      status: AksjonspunktStatus.OPPRETTET
    }] as Aksjonspunkt[],
    feriepengegrunnlag: {
      andeler: [{
        aktivitetStatus: AktivitetStatus.ARBEIDSTAKER,
        opptjeningsår: 2,
        årsbeløp: 500000,
        erBrukerMottaker: true
      }]
    }
  }
}`,...Nn.parameters?.docs?.source}}};Fn.parameters={...Fn.parameters,docs:{...Fn.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [],
    familiehendelse: {
      ...defaultFamiliehendelse,
      gjeldende: {
        avklartBarn: [{
          fodselsdato: '2017-01-01'
        }],
        soknadType: SoknadType.FODSEL
      } as FamilieHendelse
    }
  }
}`,...Fn.parameters?.docs?.source}}};const Mg=["UtenAksjonspunkt","UtførtAksjonspunkt","MedFeriepengegrunnlag","MedBarnFodtLengeForForstePeriode"];export{Fn as MedBarnFodtLengeForForstePeriode,Nn as MedFeriepengegrunnlag,qn as UtenAksjonspunkt,_n as UtførtAksjonspunkt,Mg as __namedExportsOrder,Bg as default};
