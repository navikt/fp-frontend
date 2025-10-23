import{r as N,u as Ze,_ as he,s as pe,c as Qe,a as D,R as f,b as Re,S as je,e as I,H as ea,j as T,d as He,f as aa,P as ra,w as na}from"./iframe-BBCPMKgm.js";import"./preload-helper-PPVm8Dsz.js";function ta(e,t){var n=e.values,a=he(e,["values"]),r=t.values,l=he(t,["values"]);return pe(r,n)&&pe(a,l)}function Be(e){var t=Ze(),n=t.formatMessage,a=t.textComponent,r=a===void 0?N.Fragment:a,l=e.id,i=e.description,s=e.defaultMessage,u=e.values,d=e.children,o=e.tagName,g=o===void 0?r:o,c=e.ignoreTag,S={id:l,description:i,defaultMessage:s},K=n(S,u,{ignoreTag:c});return typeof d=="function"?d(Array.isArray(K)?K:[K]):g?N.createElement(g,null,K):N.createElement(N.Fragment,null,K)}Be.displayName="FormattedMessage";var F=N.memo(Be,ta);F.displayName="MemoizedFormattedMessage";var ie=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.AVKLAR_ADOPSJONSDOKUMENTAJON="5004",e.AVKLAR_OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.AVKLAR_OM_SØKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.MANUELL_VURDERING_AV_SØKNADSFRISTVILKÅRET="5007",e.AVKLAR_VILKÅR_FOR_OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKÅRET="5011",e.REGISTRER_PAPIRSØKNAD_ENGANGSSTØNAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD="5014",e.FORESLÅ_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SØKERS_OPPLYSNINGSPLIKT_MANU="5017",e.VURDER_OMSORGSOVERTAKELSEVILKÅRET="5018",e.UTGÅTT_5019="5019",e.UTGÅTT_5020="5020",e.UTGÅTT_5021="5021",e.UTGÅTT_5023="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.UTGÅTT_5025="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.OVERSTYRING_AV_FAKTA_OM_FØDSEL="6019",e.FORESLÅ_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE="5031",e.VURDERE_ANNEN_YTELSE_FØR_VEDTAK="5033",e.VURDERE_DOKUMENT_FØR_VEDTAK="5034",e.VURDERE_INNTEKTSMELDING_FØR_VEDTAK="5003",e.MANUELL_VURDERING_AV_KLAGE_NFP="5035",e.UTGÅTT_5036="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSØKNAD_FORELDREPENGER="5040",e.VURDER_PERMISJON_UTEN_SLUTTDATO="5041",e.MANUELL_VURDERING_AV_SØKNADSFRIST="5043",e.UTGÅTT_5048="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.UTGÅTT_5053="5053",e.AVKLAR_VILKÅR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.UTGÅTT_5056="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.AVKLAR_LØPENDE_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET="5063",e.FAKTA_UTTAK_INGEN_PERIODER="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG="5066",e.UTGÅTT_5067="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.UTGÅTT_5069="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.FASTSETT_UTTAK_STORTINGSREPRESENTANT="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.UTGÅTT_5075="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.UTGÅTT_5078="5078",e.UTGÅTT_5079="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.UTGÅTT_5083="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_FAKTA_ANNEN_FORELDER_HAR_RETT="5086",e.SØKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYRING_AV_FØDSELSVILKÅRET="6003",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET="6004",e.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET="6005",e.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="6017",e.OVERSTYRING_AV_SØKNADSFRISTVILKÅRET="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYRING_AV_FØDSELSVILKÅRET_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKÅRET="6011",e.OVERSTYRING_AV_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKÅRET="5089",e.UTGÅTT_6012="6012",e.OVERSTYRING_AV_AVKLART_STARTDATO="6045",e.OVERSTYRING_FAKTA_UTTAK="6065",e.OVERSTYRING_AV_UTTAK_I_EØS_FOR_ANNENPART="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FØDSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SØKNAD="7003",e.UTGÅTT_7019="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.VURDER_SVP_TILRETTELEGGING="5091",e.MANUELL_VURDERING_AV_SVANGERSKAPSPENGERVILKÅRET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NÆRING_SELVSTENDIG_NÆRINGSDRIVENDE="5039",e.UTGÅTT_5042="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_FOR_SN_NY_I_ARBEIDSLIVET="5049",e.UTGÅTT_5050="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.UTGÅTT_5080="5080",e.UTGÅTT_5090="5090",e))(ie||{});const Y=e=>Qe({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var la=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};N.forwardRef((e,t)=>{var{className:n,size:a="medium",as:r="p",spacing:l,truncate:i,weight:s="regular",align:u,visuallyHidden:d,textColor:o}=e,g=la(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:c}=D();return f.createElement(r,Object.assign({},g,{ref:t,className:c(n,"navds-body-long",`navds-body-long--${a}`,Y({spacing:l,truncate:i,weight:s,align:u,visuallyHidden:d,textColor:o}))}))});var ia=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const be=N.forwardRef((e,t)=>{var{className:n,size:a="medium",as:r="p",spacing:l,truncate:i,weight:s="regular",align:u,visuallyHidden:d,textColor:o}=e,g=ia(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:c}=D();return f.createElement(r,Object.assign({},g,{ref:t,className:c(n,"navds-body-short",`navds-body-short--${a}`,Y({spacing:l,truncate:i,weight:s,align:u,visuallyHidden:d,textColor:o}))}))});var sa=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};N.forwardRef((e,t)=>{var{className:n,size:a="medium",spacing:r,uppercase:l,as:i="p",truncate:s,weight:u="regular",align:d,visuallyHidden:o,textColor:g}=e,c=sa(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:S}=D();return f.createElement(i,Object.assign({},c,{ref:t,className:S(n,"navds-detail",Y({spacing:r,truncate:s,weight:u,align:d,visuallyHidden:o,textColor:g,uppercase:l}),{"navds-detail--small":a==="small"})}))});var oa=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};N.forwardRef((e,t)=>{var{children:n,className:a,size:r,spacing:l,as:i="p",showIcon:s=!1}=e,u=oa(e,["children","className","size","spacing","as","showIcon"]);const{cn:d}=D();return f.createElement(i,Object.assign({},u,{ref:t,className:d("navds-error-message","navds-label",a,Y({spacing:l}),{"navds-label--small":r==="small","navds-error-message--show-icon":s})}),s&&f.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},f.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),n)});var ua=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const da=N.forwardRef((e,t)=>{var{level:n="1",size:a,className:r,as:l,spacing:i,align:s,visuallyHidden:u,textColor:d}=e,o=ua(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:g}=D(),c=l??`h${n}`;return f.createElement(c,Object.assign({},o,{ref:t,className:g(r,"navds-heading",`navds-heading--${a}`,Y({spacing:i,align:s,visuallyHidden:u,textColor:d}))}))});var ma=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};N.forwardRef((e,t)=>{var{className:n,spacing:a,as:r="p"}=e,l=ma(e,["className","spacing","as"]);const{cn:i}=D();return f.createElement(r,Object.assign({},l,{ref:t,className:i(n,"navds-ingress",{"navds-typo--spacing":!!a})}))});var ga=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const W=N.forwardRef((e,t)=>{var{className:n,size:a="medium",as:r="label",spacing:l,visuallyHidden:i,textColor:s}=e,u=ga(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:d}=D();return f.createElement(r,Object.assign({},u,{ref:t,className:d(n,"navds-label",Y({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":a==="small"})}))});function Ne(e,t){const n=Object.entries(e).filter(([a])=>!t.includes(a));return Object.fromEntries(n)}let Oe=0;function Ea(e){const[t,n]=N.useState(e),a=e||t;return N.useEffect(()=>{t==null&&(Oe+=1,n(`aksel-id-${Oe}`))},[t]),a}const ye=f.useId;function va(e){var t;return ye!==void 0?ye().replace(/(:)/g,""):(t=Ea(e))!==null&&t!==void 0?t:""}function _a(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),n===!1||!r.defaultPrevented)return t?.(r)}}function _e(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}function q(e){return(t,n)=>{const a=n?.context?String(n.context):"standalone";let r;if(a==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=n?.width?String(n.width):i;r=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=n?.width?String(n.width):e.defaultWidth;r=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(t):t;return r[l]}}function C(e){return(t,n={})=>{const a=n.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],l=t.match(r);if(!l)return null;const i=l[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(s)?Ta(s,g=>g.test(i)):ca(s,g=>g.test(i));let d;d=e.valueCallback?e.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d;const o=t.slice(i.length);return{value:d,rest:o}}}function ca(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function Ta(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function fa(e){return(t,n={})=>{const a=t.match(e.matchPattern);if(!a)return null;const r=a[0],l=t.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=n.valueCallback?n.valueCallback(i):i;const s=t.slice(r.length);return{value:i,rest:s}}}const Ra={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},Na=(e,t,n)=>{let a;const r=Ra[e];return typeof r=="string"?a=r:t===1?a=r.one:a=r.other.replace("{{count}}",String(t)),n?.addSuffix?n.comparison&&n.comparison>0?"om "+a:a+" siden":a},Ka={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},Sa={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},Aa={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},ha={date:_e({formats:Ka,defaultWidth:"full"}),time:_e({formats:Sa,defaultWidth:"full"}),dateTime:_e({formats:Aa,defaultWidth:"full"})},pa={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},ba=(e,t,n,a)=>pa[e],Oa={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},ya={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},La={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},ka={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},Va={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},Da=(e,t)=>Number(e)+".",Ia={ordinalNumber:Da,era:q({values:Oa,defaultWidth:"wide"}),quarter:q({values:ya,defaultWidth:"wide",argumentCallback:e=>e-1}),month:q({values:La,defaultWidth:"wide"}),day:q({values:ka,defaultWidth:"wide"}),dayPeriod:q({values:Va,defaultWidth:"wide"})},Ga=/^(\d+)\.?/i,Pa=/\d+/i,Ma={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},wa={any:[/^f/i,/^e/i]},Fa={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Ua={any:[/1/i,/2/i,/3/i,/4/i]},xa={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},ja={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Ha={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},Ba={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},Ya={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},qa={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},Ca={ordinalNumber:fa({matchPattern:Ga,parsePattern:Pa,valueCallback:e=>parseInt(e,10)}),era:C({matchPatterns:Ma,defaultMatchWidth:"wide",parsePatterns:wa,defaultParseWidth:"any"}),quarter:C({matchPatterns:Fa,defaultMatchWidth:"wide",parsePatterns:Ua,defaultParseWidth:"any",valueCallback:e=>e+1}),month:C({matchPatterns:xa,defaultMatchWidth:"wide",parsePatterns:ja,defaultParseWidth:"any"}),day:C({matchPatterns:Ha,defaultMatchWidth:"wide",parsePatterns:Ba,defaultParseWidth:"any"}),dayPeriod:C({matchPatterns:Ya,defaultMatchWidth:"any",parsePatterns:qa,defaultParseWidth:"any"})},$a={code:"nb",formatDistance:Na,formatLong:ha,formatRelative:ba,localize:Ia,match:Ca,options:{weekStartsOn:1,firstWeekContainsDate:4}},Ja={global:{dateLocale:$a,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},za=N.createContext({locale:Ja}),Wa=()=>N.useContext(za),Le=/(\w+)/g;function Xa(e,t){const n=Array.isArray(e)?e:Za(e);for(const a of t){if(!a)continue;let r=a;for(let l=0;l<n.length;l++){const i=r[n[l]];i!==void 0&&(r=i)}if(typeof r=="string")return r}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Za(e){const t=[];let n=Le.exec(e);for(;n;){const[,a,r]=n;t.push(a||r),n=Le.exec(e)}return t}const Qa=/{[^}]*}/g;function er(e,...t){const n=Wa(),a=n.translations||[],r=[...t,...Array.isArray(a)?a.map(i=>i[e]):[a[e]],n.locale[e]];return(i,s)=>{const u=Xa(i,r);return s?u.replace(Qa,d=>{const o=d.substring(1,d.length-1);if(s[o]===void 0){const g=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${o}'. The following replacements were passed: '${g}'`)}return s[o]}):u}}var ar=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const rr=N.forwardRef((e,t)=>{var{className:n,size:a="medium",title:r,transparent:l=!1,variant:i="neutral",id:s,"data-color":u}=e,d=ar(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:o}=D(),g=va(),c=er("Loader");return f.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${g}`,ref:t,className:o("navds-loader",n,`navds-loader--${a}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":u??nr(i)},Ne(d,["children"]),{"data-variant":i}),f.createElement("title",{id:s??`loader-${g}`},r||c("title")),f.createElement("circle",{className:o("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),f.createElement("circle",{className:o("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function nr(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var tr=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const lr=N.forwardRef((e,t)=>{var{as:n="button",variant:a="primary",className:r,children:l,size:i="medium",loading:s=!1,disabled:u,icon:d,iconPosition:o="left",onKeyUp:g,"data-color":c}=e,S=tr(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:K}=D(),G=u||s?Ne(S,["href"]):S,m=E=>{E.key===" "&&!u&&!s&&E.currentTarget.click()};return f.createElement(n,Object.assign({},n!=="button"?{role:"button"}:{},{"data-color":c??ir(a),"data-variant":sr(a)},G,{ref:t,onKeyUp:_a(g,m),className:K(r,"navds-button",`navds-button--${a}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!d&&!l,"navds-button--disabled":u??s}),disabled:u??s?!0:void 0}),d&&o==="left"&&f.createElement("span",{className:K("navds-button__icon")},d),s&&f.createElement(rr,{size:i}),l&&f.createElement(W,{as:"span",size:i==="medium"?"medium":"small"},l),d&&o==="right"&&f.createElement("span",{className:K("navds-button__icon")},d))});function ir(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function sr(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}function A(e,t,n,a){return a?typeof a=="string"?{[`--__${e}c-${t}-${n}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([r,l])=>[`--__${e}c-${t}-${n}-${r}`,l])):{}}const or={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},ke=(e,t,n,a,r,l)=>t.split(" ").map((i,s,u)=>{var d;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/u.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/u.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let o=`var(--${l}-${n}-${i})`;if(a.includes(i))o=i==="px"?"1px":i;else if(i.startsWith("space"))o=`var(--${l}-${i})`;else{const g=`--${l}-spacing-${i}`;o=`var(${(d=or[g])!==null&&d!==void 0?d:g})`}return r?i==="0"?"0":`calc(-1 * ${o})`:o}).join(" ");function V(e,t,n,a,r,l=!1,i=[]){if(!r)return{};if(typeof r=="string")return{[`--__${e}c-${t}-${n}-xs`]:ke(n,r,a,i,l,e)};const s={};return Object.entries(r).forEach(([u,d])=>{s[`--__${e}c-${t}-${n}-${u}`]=ke(n,d,a,i,l,e)}),s}const ur=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],dr=({children:e,className:t,padding:n,paddingInline:a,paddingBlock:r,margin:l,marginInline:i,marginBlock:s,width:u,minWidth:d,maxWidth:o,height:g,minHeight:c,maxHeight:S,position:K,inset:G,top:m,right:E,left:_,bottom:R,overflow:h,overflowX:p,overflowY:U,flexBasis:P,flexGrow:b,flexShrink:O,gridColumn:M})=>{const y=Re(!1),{cn:L}=D(),v=y?.isDarkside?"ax":"a",w=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},V(v,"r","p","spacing",n)),V(v,"r","pi","spacing",a)),V(v,"r","pb","spacing",r)),V(v,"r","m","spacing",l)),V(v,"r","mi","spacing",i)),V(v,"r","mb","spacing",s)),A(v,"r","w",u)),A(v,"r","minw",d)),A(v,"r","maxw",o)),A(v,"r","h",g)),A(v,"r","minh",c)),A(v,"r","maxh",S)),A(v,"r","position",K)),V(v,"r","inset","spacing",G)),V(v,"r","top","spacing",m)),V(v,"r","right","spacing",E)),V(v,"r","bottom","spacing",R)),V(v,"r","left","spacing",_)),A(v,"r","overflow",h)),A(v,"r","overflowx",p)),A(v,"r","overflowy",U)),A(v,"r","flex-basis",P)),A(v,"r","flex-grow",b)),A(v,"r","flex-shrink",O)),A(v,"r","grid-column",M));return f.createElement(je,{className:L({className:t,"navds-r-p":n,"navds-r-pi":a,"navds-r-pb":r,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":u,"navds-r-minw":d,"navds-r-maxw":o,"navds-r-h":g,"navds-r-minh":c,"navds-r-maxh":S,"navds-r-position":K,"navds-r-inset":G,"navds-r-top":m,"navds-r-right":E,"navds-r-bottom":R,"navds-r-left":_,"navds-r-overflow":h,"navds-r-overflowx":p,"navds-r-overflowy":U,"navds-r-flex-basis":P,"navds-r-flex-grow":b,"navds-r-flex-shrink":O,"navds-r-grid-column":M}),style:w},e)};var mr=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const Ye=N.forwardRef((e,t)=>{var{children:n,className:a,as:r="div",align:l,justify:i,wrap:s=!0,gap:u,style:d,direction:o="row",asChild:g}=e,c=mr(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const S=Re(!1),K=S?.isDarkside?"ax":"a",{cn:G}=D(),m=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},d),V(K,"stack","gap","spacing",u)),A(K,"stack","direction",o)),A(K,"stack","align",l)),A(K,"stack","justify",i)),E=g?je:r;return f.createElement(dr,Object.assign({},c),f.createElement(E,Object.assign({},Ne(c,ur),{ref:t,style:m,className:G("navds-stack",a,{"navds-vstack":o==="column","navds-hstack":o==="row","navds-stack-gap":u,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":o,"navds-stack-wrap":s})}),n))});var gr=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const Er=N.forwardRef((e,t)=>{var{as:n="div"}=e,a=gr(e,["as"]);return f.createElement(Ye,Object.assign({as:n},a,{ref:t,direction:"row"}))});var vr=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const $=N.forwardRef((e,t)=>{var{as:n="div"}=e,a=vr(e,["as"]);return f.createElement(Ye,Object.assign({as:n},a,{ref:t,direction:"column",wrap:!1}))});var _r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n};const cr=N.forwardRef((e,t)=>{var{as:n="a",className:a,underline:r=!0,variant:l,inlineText:i=!1,"data-color":s}=e,u=_r(e,["as","className","underline","variant","inlineText","data-color"]);const d=Re(!1),{cn:o}=D();let g;return d?.isDarkside?g=l:g=l??"action",f.createElement(n,Object.assign({"data-color":s??Tr(g),"data-variant":g},u,{ref:t,className:o("navds-link",a,{[`navds-link--${g}`]:g,"navds-link--remove-underline":!r,"navds-link--inline-text":i})}))});function Tr(e){switch(e){case"action":return"accent";case"neutral":return"neutral";case"subtle":return"neutral";default:return}}function fr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ve={exports:{}},J={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var De;function Rr(){if(De)return J;De=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,l){var i=null;if(l!==void 0&&(i=""+l),r.key!==void 0&&(i=""+r.key),"key"in r){l={};for(var s in r)s!=="key"&&(l[s]=r[s])}else l=r;return r=l.ref,{$$typeof:e,type:a,key:i,ref:r!==void 0?r:null,props:l}}return J.Fragment=t,J.jsx=n,J.jsxs=n,J}var Ie;function Nr(){return Ie||(Ie=1,Ve.exports=Rr()),Ve.exports}Nr();const X={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};I(X);var Ge={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Pe;function Kr(){return Pe||(Pe=1,(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=r(l,a.call(this,s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return n.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)t.call(l,s)&&l[s]&&(i=r(i,this&&this[s]||s));return i}function r(l,i){return i?l?l+" "+i:l+i:l}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(Ge)),Ge.exports}var Sr=Kr();const Ke=fr(Sr),Ar="_borderbox_1a0x6_1",hr="_error_1a0x6_5",pr="_warning_1a0x6_8",br={borderbox:Ar,error:hr,warning:pr};Ke.bind(br);const Or="_aksjonspunkt_11wjs_1",yr="_erAksjonspunktApent_11wjs_4",Lr="_erIkkeGodkjentAvBeslutter_11wjs_8",kr={aksjonspunkt:Or,erAksjonspunktApent:yr,erIkkeGodkjentAvBeslutter:Lr};Ke.bind(kr);I(X);I(X);const Vr="_divider_1jpov_1",Dr="_dividerParagraf_1jpov_8",Ir="_leftPanel_1jpov_11",Gr="_rightPanel_1jpov_14",Pr={divider:Vr,dividerParagraf:Dr,leftPanel:Ir,rightPanel:Gr};Ke.bind(Pr);I(X);I(X);var ce={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Me;function Mr(){return Me||(Me=1,(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=r(l,a(s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return n.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)t.call(l,s)&&l[s]&&(i=r(i,s));return i}function r(l,i){return i?l?l+" "+i:l+i:l}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(ce)),ce.exports}Mr();function wr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var we={exports:{}},z={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe;function Fr(){if(Fe)return z;Fe=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,l){var i=null;if(l!==void 0&&(i=""+l),r.key!==void 0&&(i=""+r.key),"key"in r){l={};for(var s in r)s!=="key"&&(l[s]=r[s])}else l=r;return r=l.ref,{$$typeof:e,type:a,key:i,ref:r!==void 0?r:null,props:l}}return z.Fragment=t,z.jsx=n,z.jsxs=n,z}var Ue;function Ur(){return Ue||(Ue=1,we.exports=Fr()),we.exports}Ur();var Te={exports:{}},xr=Te.exports,xe;function jr(){return xe||(xe=1,(function(e,t){(function(n,a){e.exports=a()})(xr,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,r=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,u={},d=function(m){return(m=+m)+(m>68?1900:2e3)},o=function(m){return function(E){this[m]=+E}},g=[/[+-]\d\d:?(\d\d)?|Z/,function(m){(this.zone||(this.zone={})).offset=(function(E){if(!E||E==="Z")return 0;var _=E.match(/([+-]|\d\d)/g),R=60*_[1]+(+_[2]||0);return R===0?0:_[0]==="+"?-R:R})(m)}],c=function(m){var E=u[m];return E&&(E.indexOf?E:E.s.concat(E.f))},S=function(m,E){var _,R=u.meridiem;if(R){for(var h=1;h<=24;h+=1)if(m.indexOf(R(h,0,E))>-1){_=h>12;break}}else _=m===(E?"pm":"PM");return _},K={A:[s,function(m){this.afternoon=S(m,!1)}],a:[s,function(m){this.afternoon=S(m,!0)}],Q:[r,function(m){this.month=3*(m-1)+1}],S:[r,function(m){this.milliseconds=100*+m}],SS:[l,function(m){this.milliseconds=10*+m}],SSS:[/\d{3}/,function(m){this.milliseconds=+m}],s:[i,o("seconds")],ss:[i,o("seconds")],m:[i,o("minutes")],mm:[i,o("minutes")],H:[i,o("hours")],h:[i,o("hours")],HH:[i,o("hours")],hh:[i,o("hours")],D:[i,o("day")],DD:[l,o("day")],Do:[s,function(m){var E=u.ordinal,_=m.match(/\d+/);if(this.day=_[0],E)for(var R=1;R<=31;R+=1)E(R).replace(/\[|\]/g,"")===m&&(this.day=R)}],w:[i,o("week")],ww:[l,o("week")],M:[i,o("month")],MM:[l,o("month")],MMM:[s,function(m){var E=c("months"),_=(c("monthsShort")||E.map(function(R){return R.slice(0,3)})).indexOf(m)+1;if(_<1)throw new Error;this.month=_%12||_}],MMMM:[s,function(m){var E=c("months").indexOf(m)+1;if(E<1)throw new Error;this.month=E%12||E}],Y:[/[+-]?\d+/,o("year")],YY:[l,function(m){this.year=d(m)}],YYYY:[/\d{4}/,o("year")],Z:g,ZZ:g};function G(m){var E,_;E=m,_=u&&u.formats;for(var R=(m=E.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(M,y,L){var v=L&&L.toUpperCase();return y||_[L]||n[L]||_[v].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(w,x,j){return x||j.slice(1)})})).match(a),h=R.length,p=0;p<h;p+=1){var U=R[p],P=K[U],b=P&&P[0],O=P&&P[1];R[p]=O?{regex:b,parser:O}:U.replace(/^\[|\]$/g,"")}return function(M){for(var y={},L=0,v=0;L<h;L+=1){var w=R[L];if(typeof w=="string")v+=w.length;else{var x=w.regex,j=w.parser,Q=M.slice(v),B=x.exec(Q)[0];j.call(y,B),M=M.replace(B,"")}}return(function(H){var ee=H.afternoon;if(ee!==void 0){var k=H.hours;ee?k<12&&(H.hours+=12):k===12&&(H.hours=0),delete H.afternoon}})(y),y}}return function(m,E,_){_.p.customParseFormat=!0,m&&m.parseTwoDigitYear&&(d=m.parseTwoDigitYear);var R=E.prototype,h=R.parse;R.parse=function(p){var U=p.date,P=p.utc,b=p.args;this.$u=P;var O=b[1];if(typeof O=="string"){var M=b[2]===!0,y=b[3]===!0,L=M||y,v=b[2];y&&(v=b[2]),u=this.$locale(),!M&&v&&(u=_.Ls[v]),this.$d=(function(Q,B,H,ee){try{if(["x","X"].indexOf(B)>-1)return new Date((B==="X"?1e3:1)*Q);var k=G(B)(Q),se=k.year,ae=k.month,$e=k.day,Je=k.hours,ze=k.minutes,We=k.seconds,Xe=k.milliseconds,Se=k.zone,Ae=k.week,oe=new Date,ue=$e||(se||ae?1:oe.getDate()),de=se||oe.getFullYear(),re=0;se&&!ae||(re=ae>0?ae-1:oe.getMonth());var ne,me=Je||0,ge=ze||0,Ee=We||0,ve=Xe||0;return Se?new Date(Date.UTC(de,re,ue,me,ge,Ee,ve+60*Se.offset*1e3)):H?new Date(Date.UTC(de,re,ue,me,ge,Ee,ve)):(ne=new Date(de,re,ue,me,ge,Ee,ve),Ae&&(ne=ee(ne).week(Ae).toDate()),ne)}catch{return new Date("")}})(U,O,P,_),this.init(),v&&v!==!0&&(this.$L=this.locale(v).$L),L&&U!=this.format(O)&&(this.$d=new Date("")),u={}}else if(O instanceof Array)for(var w=O.length,x=1;x<=w;x+=1){b[1]=O[x-1];var j=_.apply(this,b);if(j.isValid()){this.$d=j.$d,this.$L=j.$L,this.init();break}x===w&&(this.$d=new Date(""))}else h.call(this,p)}}})})(Te)),Te.exports}var Hr=jr();const Br=wr(Hr);ea.extend(Br);const Z={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"};I(Z);I(Z);I(Z);I(Z);I(Z);const Yr=(e,...t)=>{const n=t.find(a=>a===e);if(!n)throw new Error(`Det finnes ikke enum for kode ${e}`);return n},qr=new Set(["KLAGE_MEDHOLD","KLAGE_DELVIS_MEDHOLD","KLAGE_OMGJORT_UGUNST"]),Cr=e=>qr.has(e),qe=({behandlingPåVent:e,previewVedtakCallback:t,readOnly:n,lagreVedtak:a,isSubmitting:r})=>{const l=i=>{i.preventDefault(),t({gjelderVedtak:!0})};return T.jsxs(Er,{gap:"space-8",align:"center",children:[!n&&T.jsx(lr,{variant:"primary",size:"small",onClick:a,disabled:e||r,loading:r,type:"button",children:T.jsx(F,{id:"VedtakKlageForm.TilGodkjenning"})}),T.jsx(cr,{href:"#",onClick:l,onKeyDown:i=>i.key==="Enter"?l(i):null,children:T.jsx(F,{id:"VedtakKlageForm.ForhandvisBrev"})})]})};qe.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageSubmitPanel",props:{previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingPåVent:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""},lagreVedtak:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""}}};const $r={GUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortGunst",UGUNST_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortUgunst",DELVIS_MEDHOLD_I_KLAGE:"VedtakKlageForm.KlageOmgjortDelvis","-":""},Ce=({klageVurdering:e,previewVedtakCallback:t,behandlingsresultat:n})=>{const{behandling:a,isReadOnly:r,alleKodeverk:l,aksjonspunkterForPanel:i,submitCallback:s}=He(),u=Jr(e),d=zr(e,l),o=Wr(e),g=e.klageVurderingResultatNK??e.klageVurderingResultatNFP,c=Cr(n.type),[S,K]=N.useState(!1),G=()=>{K(!0);const E=i.filter(aa).map(_=>_.definisjon).map(_=>({kode:Yr(_,ie.FORESLÅ_VEDTAK,ie.FORESLÅ_VEDTAK_MANUELT)}));s(E).then(()=>K(!1))};return T.jsxs($,{gap:"space-16",children:[T.jsx(da,{size:"small",level:"2",children:T.jsx(F,{id:"VedtakKlageForm.Header"})}),T.jsxs($,{gap:"space-4",children:[T.jsx(W,{size:"small",children:T.jsx(F,{id:"VedtakKlageForm.Resultat"})}),o&&T.jsx(be,{size:"small",children:T.jsx(F,{id:o})})]}),n.type==="KLAGE_AVVIST"&&T.jsxs($,{gap:"space-4",children:[T.jsx(W,{size:"small",children:T.jsx(F,{id:"VedtakKlageForm.ArsakTilAvvisning"})}),u.map(m=>T.jsx(be,{size:"small",children:l.KlageAvvistÅrsak.find(({kode:E})=>E===m)?.navn??""},m))]}),c&&T.jsxs($,{gap:"space-4",children:[T.jsx(W,{size:"small",children:T.jsx(F,{id:"VedtakKlageForm.ArsakTilOmgjoring"})}),d]}),n.type==="KLAGE_YTELSESVEDTAK_OPPHEVET"&&T.jsxs($,{gap:"space-4",children:[T.jsx(W,{size:"small",children:T.jsx(F,{id:"VedtakKlageForm.ArsakTilOppheving"})}),d]}),g?.klageVurdertAv==="NFP"&&T.jsx(qe,{previewVedtakCallback:t,readOnly:r,behandlingPåVent:a.behandlingPåVent,lagreVedtak:G,isSubmitting:S})]})},Jr=e=>e.klageFormkravResultatKA&&e.klageVurderingResultatNK?e.klageFormkravResultatKA.avvistArsaker:e.klageFormkravResultatNFP?e.klageFormkravResultatNFP.avvistArsaker:[],zr=(e,t)=>e.klageVurderingResultatNK?.klageMedholdArsak?t.KlageMedholdÅrsak.find(({kode:n})=>n===e.klageVurderingResultatNK?.klageMedholdArsak)?.navn??"":e.klageVurderingResultatNFP?.klageMedholdArsak?t.KlageMedholdÅrsak.find(({kode:n})=>n===e.klageVurderingResultatNFP?.klageMedholdArsak)?.navn??"":null,Wr=e=>{const t=e.klageVurderingResultatNK??e.klageVurderingResultatNFP;switch(t?.klageVurdering){case"AVVIS_KLAGE":return"VedtakKlageForm.KlageAvvist";case"STADFESTE_YTELSESVEDTAK":return"VedtakKlageForm.KlageStadfestet";case"OPPHEVE_YTELSESVEDTAK":return"VedtakKlageForm.YtelsesvedtakOpphevet";case"HJEMSENDE_UTEN_Å_OPPHEVE":return"VedtakKlageForm.HjemmsendUtenOpphev";case"MEDHOLD_I_KLAGE":return t.klageVurderingOmgjoer?$r[t.klageVurderingOmgjoer]:void 0;default:return"VedtakKlageForm.IkkeFastsatt"}};Ce.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageForm",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktuelleHjemler?: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>;
  behandletAvKabal?: boolean;
  klageFormkravResultatKA?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageFormkravResultatNFP?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageVurderingResultatNFP?: tjenester_behandling_klage_KlageVurderingResultatDto;
  klageVurderingResultatNK?: tjenester_behandling_klage_KlageVurderingResultatDto;
  mottattDato?: string;
  underBehandlingKabal?: boolean;
}`,signature:{properties:[{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
  begrunnelse: string;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erKlagerPart: boolean;
  erSignert: boolean;
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
  begrunnelse: string;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erKlagerPart: boolean;
  erSignert: boolean;
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"klageVurderingResultatNFP",value:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
  fritekstTilBrev?: string;
  godkjentAvMedunderskriver?: boolean;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageVurdertAv: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"klageHjemmel",value:{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdertAv",value:{name:"string",required:!0}}]},required:!1}},{key:"klageVurderingResultatNK",value:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
  fritekstTilBrev?: string;
  godkjentAvMedunderskriver?: boolean;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageVurdertAv: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"klageHjemmel",value:{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdertAv",value:{name:"string",required:!0}}]},required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}}]}},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},behandlingsresultat:{required:!0,tsType:{name:"signature",type:"object",raw:`{
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
| '-'`,elements:[{name:"literal",value:"'1001'"},{name:"literal",value:"'1002'"},{name:"literal",value:"'1003'"},{name:"literal",value:"'1004'"},{name:"literal",value:"'1005'"},{name:"literal",value:"'1006'"},{name:"literal",value:"'1007'"},{name:"literal",value:"'1008'"},{name:"literal",value:"'1009'"},{name:"literal",value:"'1010'"},{name:"literal",value:"'1011'"},{name:"literal",value:"'1012'"},{name:"literal",value:"'1014'"},{name:"literal",value:"'1015'"},{name:"literal",value:"'1016'"},{name:"literal",value:"'1017'"},{name:"literal",value:"'1018'"},{name:"literal",value:"'1019'"},{name:"literal",value:"'1020'"},{name:"literal",value:"'1021'"},{name:"literal",value:"'1023'"},{name:"literal",value:"'1024'"},{name:"literal",value:"'1025'"},{name:"literal",value:"'1026'"},{name:"literal",value:"'1027'"},{name:"literal",value:"'1028'"},{name:"literal",value:"'1029'"},{name:"literal",value:"'1031'"},{name:"literal",value:"'1032'"},{name:"literal",value:"'1033'"},{name:"literal",value:"'1034'"},{name:"literal",value:"'1035'"},{name:"literal",value:"'1041'"},{name:"literal",value:"'1051'"},{name:"literal",value:"'1052'"},{name:"literal",value:"'1060'"},{name:"literal",value:"'1061'"},{name:"literal",value:"'1062'"},{name:"literal",value:"'1063'"},{name:"literal",value:"'1064'"},{name:"literal",value:"'1065'"},{name:"literal",value:"'1066'"},{name:"literal",value:"'1099'"},{name:"literal",value:"'-'"}],required:!1}},{key:"avslagsarsakFritekst",value:{name:"string",required:!1}},{key:"endretDekningsgrad",value:{name:"boolean",required:!1}},{key:"erRevurderingMedUendretUtfall",value:{name:"boolean",required:!1}},{key:"fritekstbrev",value:{name:"string",required:!1}},{key:"harRedigertVedtaksbrev",value:{name:"boolean",required:!0}},{key:"id",value:{name:"number",required:!0}},{key:"konsekvenserForYtelsen",value:{name:"Array",elements:[{name:"union",raw:`| 'FORELDREPENGER_OPPHØRER'
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
| 'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'`,elements:[{name:"literal",value:"'VEDTAKSBREV_PRODUSERES'"},{name:"literal",value:"'INGEN_VEDTAKSBREV'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_ANKE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_KLAGEBEHANDLING'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_BEHANDLING_ETTER_KLAGE'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_JUSTERING_AV_FERIEPENGER'"},{name:"literal",value:"'INGEN_VEDTAKSBREV_INGEN_KONSEKVENS_FOR_YTELSE'"}],required:!0}}]}},description:""}}};const Xr={"VedtakKlageForm.ArsakTilAvslag":"Årsak til avslag","VedtakKlageForm.ResultatOpprettholdVedtak":"Vedtaket er stadfestet","VedtakKlageForm.ResultatKlageMedhold":"Vedtaket er omgjort","VedtakKlageForm.Resultat":"Resultat av klage","VedtakKlageForm.ArsakTilAvvisning":"Årsak til avvisning","VedtakKlageForm.ArsakTilOmgjoring":"Årsak til omgjøring","VedtakKlageForm.ArsakTilOppheving":"Årsak til oppheving","VedtakKlageForm.EngangsstonadIkkeInnvilget":"Engangsstønad er avslått","VedtakKlageForm.ResultatKlageAvvist":"Klagen er avvist","VedtakKlageForm.ResultatKlageYtelsesvedtakOpphevet":"Vedtaket er opphevet","VedtakKlageForm.TilGodkjenning":"Til godkjenning","VedtakKlageForm.ForhandvisBrev":"Forhåndsvis vedtaksbrev","VedtakKlageForm.ArsakTilMedhold":"Årsak","VedtakKlageForm.KlageOmgjortGunst":"Vedtaket er omgjort til gunst","VedtakKlageForm.KlageOmgjortUgunst":"Vedtaket er omgjort til ugunst","VedtakKlageForm.KlageOmgjortDelvis":"Vedtaket er delvis omgjort til gunst","VedtakKlageForm.HjemmsendUtenOpphev":"Vedtaket er hjemsendt","VedtakKlageForm.IkkeFastsatt":"Ikke fastsatt","VedtakKlageForm.Header":"Resultat","VedtakKlageForm.KlageAvvist":"Avvist fordi klagen ikke oppfyller formkravene","VedtakKlageForm.KlageStadfestet":"Vedtaket er stadfestet","VedtakKlageForm.YtelsesvedtakOpphevet":"Vedtak er opphevet og hjemsendt"},Zr=I(Xr),fe=({klageVurdering:e,previewVedtakCallback:t})=>{const{behandling:n}=He();if(!n.behandlingsresultat)throw new Error(`behandlingsresultat finnes ikke for behandling ${n.uuid}`);return T.jsx(ra,{value:Zr,children:T.jsx(Ce,{klageVurdering:e,previewVedtakCallback:t,behandlingsresultat:n.behandlingsresultat})})};fe.__docgenInfo={description:"",methods:[],displayName:"VedtakKlageProsessIndex",props:{klageVurdering:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  aktuelleHjemler?: Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>;
  behandletAvKabal?: boolean;
  klageFormkravResultatKA?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageFormkravResultatNFP?: tjenester_behandling_klage_KlageFormkravResultatDto;
  klageVurderingResultatNFP?: tjenester_behandling_klage_KlageVurderingResultatDto;
  klageVurderingResultatNK?: tjenester_behandling_klage_KlageVurderingResultatDto;
  mottattDato?: string;
  underBehandlingKabal?: boolean;
}`,signature:{properties:[{key:"aktuelleHjemler",value:{name:"Array",elements:[{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel>",required:!1}},{key:"behandletAvKabal",value:{name:"boolean",required:!1}},{key:"klageFormkravResultatKA",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
  begrunnelse: string;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erKlagerPart: boolean;
  erSignert: boolean;
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"klageFormkravResultatNFP",value:{name:"signature",type:"object",raw:`{
  avvistArsaker: Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>;
  begrunnelse: string;
  erKlageKonkret: boolean;
  erKlagefirstOverholdt: boolean;
  erKlagerPart: boolean;
  erSignert: boolean;
  paKlagdBehandlingId: number;
  paKlagdBehandlingUuid: string;
  paklagdBehandlingType: foreldrepenger_behandlingslager_behandling_BehandlingType;
}`,signature:{properties:[{key:"avvistArsaker",value:{name:"Array",elements:[{name:"union",raw:`| 'KLAGET_FOR_SENT'
| 'KLAGE_UGYLDIG'
| 'IKKE_PAKLAGD_VEDTAK'
| 'KLAGER_IKKE_PART'
| 'IKKE_KONKRET'
| 'IKKE_SIGNERT'
| '-'`,elements:[{name:"literal",value:"'KLAGET_FOR_SENT'"},{name:"literal",value:"'KLAGE_UGYLDIG'"},{name:"literal",value:"'IKKE_PAKLAGD_VEDTAK'"},{name:"literal",value:"'KLAGER_IKKE_PART'"},{name:"literal",value:"'IKKE_KONKRET'"},{name:"literal",value:"'IKKE_SIGNERT'"},{name:"literal",value:"'-'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_klage_KlageAvvistÅrsak>",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}},{key:"erKlageKonkret",value:{name:"boolean",required:!0}},{key:"erKlagefirstOverholdt",value:{name:"boolean",required:!0}},{key:"erKlagerPart",value:{name:"boolean",required:!0}},{key:"erSignert",value:{name:"boolean",required:!0}},{key:"paKlagdBehandlingId",value:{name:"number",required:!0}},{key:"paKlagdBehandlingUuid",value:{name:"string",required:!0}},{key:"paklagdBehandlingType",value:{name:"union",raw:`| 'BT-002'
| 'BT-003'
| 'BT-004'
| 'BT-008'
| 'BT-006'
| 'BT-007'
| 'BT-009'
| '-'`,elements:[{name:"literal",value:"'BT-002'"},{name:"literal",value:"'BT-003'"},{name:"literal",value:"'BT-004'"},{name:"literal",value:"'BT-008'"},{name:"literal",value:"'BT-006'"},{name:"literal",value:"'BT-007'"},{name:"literal",value:"'BT-009'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"klageVurderingResultatNFP",value:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
  fritekstTilBrev?: string;
  godkjentAvMedunderskriver?: boolean;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageVurdertAv: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"klageHjemmel",value:{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdertAv",value:{name:"string",required:!0}}]},required:!1}},{key:"klageVurderingResultatNK",value:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
  fritekstTilBrev?: string;
  godkjentAvMedunderskriver?: boolean;
  klageHjemmel?: foreldrepenger_behandlingslager_behandling_klage_KlageHjemmel;
  klageMedholdArsak?: foreldrepenger_behandlingslager_behandling_klage_KlageMedholdÅrsak;
  klageVurdering?: foreldrepenger_behandlingslager_behandling_klage_KlageVurdering;
  klageVurderingOmgjoer?: foreldrepenger_behandlingslager_behandling_klage_KlageVurderingOmgjør;
  klageVurdertAv: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}},{key:"fritekstTilBrev",value:{name:"string",required:!1}},{key:"godkjentAvMedunderskriver",value:{name:"boolean",required:!1}},{key:"klageHjemmel",value:{name:"union",raw:`| '14-02'
| '14-04'
| '14-05'
| '14-06'
| '14-07'
| '14-09'
| '14-10'
| '14-11'
| '14-12'
| '14-13'
| '14-14'
| '14-15'
| '14-16'
| '14-17'
| '8-2'
| '21-3'
| '22-13'
| '22-15'
| '883-5'
| '883-6'
| '-'`,elements:[{name:"literal",value:"'14-02'"},{name:"literal",value:"'14-04'"},{name:"literal",value:"'14-05'"},{name:"literal",value:"'14-06'"},{name:"literal",value:"'14-07'"},{name:"literal",value:"'14-09'"},{name:"literal",value:"'14-10'"},{name:"literal",value:"'14-11'"},{name:"literal",value:"'14-12'"},{name:"literal",value:"'14-13'"},{name:"literal",value:"'14-14'"},{name:"literal",value:"'14-15'"},{name:"literal",value:"'14-16'"},{name:"literal",value:"'14-17'"},{name:"literal",value:"'8-2'"},{name:"literal",value:"'21-3'"},{name:"literal",value:"'22-13'"},{name:"literal",value:"'22-15'"},{name:"literal",value:"'883-5'"},{name:"literal",value:"'883-6'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageMedholdArsak",value:{name:"union",raw:`| 'NYE_OPPLYSNINGER'
| 'ULIK_REGELVERKSTOLKNING'
| 'ULIK_VURDERING'
| 'PROSESSUELL_FEIL'
| '-'`,elements:[{name:"literal",value:"'NYE_OPPLYSNINGER'"},{name:"literal",value:"'ULIK_REGELVERKSTOLKNING'"},{name:"literal",value:"'ULIK_VURDERING'"},{name:"literal",value:"'PROSESSUELL_FEIL'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdering",value:{name:"union",raw:`| 'OPPHEVE_YTELSESVEDTAK'
| 'STADFESTE_YTELSESVEDTAK'
| 'MEDHOLD_I_KLAGE'
| 'AVVIS_KLAGE'
| 'HJEMSENDE_UTEN_Å_OPPHEVE'
| '-'`,elements:[{name:"literal",value:"'OPPHEVE_YTELSESVEDTAK'"},{name:"literal",value:"'STADFESTE_YTELSESVEDTAK'"},{name:"literal",value:"'MEDHOLD_I_KLAGE'"},{name:"literal",value:"'AVVIS_KLAGE'"},{name:"literal",value:"'HJEMSENDE_UTEN_Å_OPPHEVE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurderingOmgjoer",value:{name:"union",raw:`| 'GUNST_MEDHOLD_I_KLAGE'
| 'DELVIS_MEDHOLD_I_KLAGE'
| 'UGUNST_MEDHOLD_I_KLAGE'
| '-'`,elements:[{name:"literal",value:"'GUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'DELVIS_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'UGUNST_MEDHOLD_I_KLAGE'"},{name:"literal",value:"'-'"}],required:!1}},{key:"klageVurdertAv",value:{name:"string",required:!0}}]},required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"underBehandlingKabal",value:{name:"boolean",required:!1}}]}},description:""},previewVedtakCallback:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: VedtakKlageForhandsvisData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  gjelderVedtak: boolean;
}`,signature:{properties:[{key:"gjelderVedtak",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const{action:Qr}=__STORYBOOK_MODULE_ACTIONS__,en={uuid:"1",versjon:1,behandlingsresultat:{type:"KLAGE_AVVIST"},behandlingPåVent:!1},an=[{definisjon:ie.FORESLÅ_VEDTAK,status:"OPPR",kanLoses:!0,toTrinnsBehandling:!1,aksjonspunktType:"AUTO",vilkarType:"FP_VK_5",erAktivt:!0}],tn={title:"prosess/klage/prosess-vedtak-klage",component:fe,decorators:[na],args:{previewVedtakCallback:Qr("button-click"),behandling:en,aksjonspunkterForPanel:an},render:e=>T.jsx(fe,{...e})},te={args:{klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NK",klageVurdering:"AVVIS_KLAGE",klageMedholdArsak:"PROSESSUELL_FEIL",fritekstTilBrev:"test"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]}}}},le={args:{klageVurdering:{klageVurderingResultatNK:{klageVurdertAv:"NFP",klageVurdering:"AVVIS_KLAGE",klageMedholdArsak:"PROSESSUELL_FEIL",fritekstTilBrev:"test"},klageFormkravResultatKA:{avvistArsaker:["IKKE_KONKRET"]}}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  args: {
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NK',
        klageVurdering: 'AVVIS_KLAGE',
        klageMedholdArsak: 'PROSESSUELL_FEIL',
        fritekstTilBrev: 'test'
      },
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET']
      }
    } as KlageVurdering
  }
}`,...te.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  args: {
    klageVurdering: {
      klageVurderingResultatNK: {
        klageVurdertAv: 'NFP',
        klageVurdering: 'AVVIS_KLAGE',
        klageMedholdArsak: 'PROSESSUELL_FEIL',
        fritekstTilBrev: 'test'
      },
      klageFormkravResultatKA: {
        avvistArsaker: ['IKKE_KONKRET']
      }
    } as KlageVurdering
  }
}`,...le.parameters?.docs?.source}}};const ln=["VedtakspanelDerKlageErVurdertAvNk","VedtakspanelDerKlageErVurdertAvNfp"];export{le as VedtakspanelDerKlageErVurdertAvNfp,te as VedtakspanelDerKlageErVurdertAvNk,ln as __namedExportsOrder,tn as default};
