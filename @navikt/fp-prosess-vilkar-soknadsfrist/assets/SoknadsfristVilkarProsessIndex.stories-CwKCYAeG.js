import{g as xt,r as L,u as Mt,_ as Qa,s as Xa,c as ke,a as J,R as E,b as _a,S as ga,d as Sr,o as Nr,e as me,f as jt,j as P,A as yr,h as Tr,i as Rr,k as pr,N as Or,l as Dr,m as br,n as Ar,t as hr,B as Za,p as Sa,P as Ir,q as Lr,w as kr,v as Fr}from"./iframe-Cg63HYg0.js";import{r as Pr}from"./index-Dh4xOtR2.js";import"./preload-helper-PPVm8Dsz.js";var Kr=Pr();const Vr=xt(Kr);function Gr(e,r){var t=e.values,a=Qa(e,["values"]),n=r.values,l=Qa(r,["values"]);return Xa(n,t)&&Xa(a,l)}function Ut(e){var r=Mt(),t=r.formatMessage,a=r.textComponent,n=a===void 0?L.Fragment:a,l=e.id,i=e.description,s=e.defaultMessage,d=e.values,f=e.children,c=e.tagName,v=c===void 0?n:c,_=e.ignoreTag,N={id:l,description:i,defaultMessage:s},T=t(N,d,{ignoreTag:_});return typeof f=="function"?f(Array.isArray(T)?T:[T]):v?L.createElement(v,null,T):L.createElement(L.Fragment,null,T)}Ut.displayName="FormattedMessage";var _e=L.memo(Ut,Gr);_e.displayName="MemoizedFormattedMessage";var ze=(e=>(e.SJEKK_TERMINBEKREFTELSE="5001",e.AVKLAR_DEKNINGSGRAD="5002",e.ADOPSJONSDOKUMENTAJON="5004",e.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN="5005",e.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE="5006",e.SOKNADSFRISTVILKARET="5007",e.OMSORGSOVERTAKELSE="5008",e.MANUELL_VURDERING_AV_OMSORGSVILKARET="5011",e.REGISTRER_PAPIRSOKNAD_ENGANGSSTONAD="5012",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD="5013",e.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD="5014",e.FORESLA_VEDTAK="5015",e.FATTER_VEDTAK="5016",e.SOKERS_OPPLYSNINGSPLIKT_MANU="5017",e.AVKLAR_LOVLIG_OPPHOLD="5019",e.AVKLAR_OM_BRUKER_ER_BOSATT="5020",e.AVKLAR_OM_BRUKER_HAR_GYLDIG_PERIODE="5021",e.AVKLAR_OPPHOLDSRETT="5023",e.VURDER_MEDLEMSKAPSVILKÅRET="5101",e.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR="5102",e.VARSEL_REVURDERING_ETTERKONTROLL="5025",e.VARSEL_REVURDERING_MANUELL="5026",e.SJEKK_MANGLENDE_FØDSEL="5027",e.OVERSTYRING_AV_FAKTA_OM_FØDSEL="6019",e.FORESLA_VEDTAK_MANUELT="5028",e.KONTROLLER_STOR_ETTERBETALING_SØKER="5029",e.AVKLAR_VERGE="5030",e.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN="5031",e.VURDERE_ANNEN_YTELSE="5033",e.VURDERE_DOKUMENT="5034",e.VURDERE_INNTEKTSMELDING_KLAGE="5003",e.BEHANDLE_KLAGE_NFP="5035",e.BEHANDLE_KLAGE_NK="5036",e.VURDER_INNSYN="5037",e.REGISTRER_PAPIRSOKNAD_FORELDREPENGER="5040",e.VURDER_ARBEIDSFORHOLD_PERMISJON="5041",e.VURDER_SOKNADSFRIST_FORELDREPENGER="5043",e.KONTROLLER_AUTOMATISK_BESTEBEREGNING="5048",e.VURDER_PERIODER_MED_OPPTJENING="5051",e.AVKLAR_FORTSATT_MEDLEMSKAP="5053",e.AVKLAR_VILKAR_FOR_FORELDREANSVAR="5054",e.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST="5055",e.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING="5056",e.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER="5057",e.REGISTRER_PAPIRSOKNAD_SVANGERSKAPSPENGER="5096",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG="5060",e.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG="5061",e.MANUELL_KONTROLL_AV_BESTEBEREGNING="5062",e.FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET_KODE="5063",e.FAKTA_UTTAK_INGEN_PERIODER_KODE="5064",e.FAKTA_UTTAK_MANUELT_SATT_STARTDATO_ULIK_SØKNAD_STARTDATO_KODE="5065",e.FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG_KODE="5066",e.TETTE_SAKER="5067",e.AUTOMATISK_MARKERING_AV_UTENLANDSSAK="5068",e.ANNENPART_EØS="5069",e.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART="5103",e.FASTSETT_UTTAKPERIODER="5071",e.TILKNYTTET_STORTINGET="5072",e.KONTROLLER_REALITETSBEHANDLING_ELLER_KLAGE="5073",e.VURDER_UTTAK_DOKUMENTASJON="5074",e.KONTROLLER_OPPLYSNINGER_OM_FORDELING_AV_STØNADSPERIODEN="5075",e.KONTROLLER_OPPLYSNINGER_OM_DØD="5076",e.KONTROLLER_OPPLYSNINGER_OM_SØKNADSFRIST="5077",e.KONTROLLER_TILSTØTENDE_YTELSER_INNVILGET="5078",e.KONTROLLER_TILSTØTENDE_YTELSER_OPPHØRT="5079",e.VURDERING_AV_FORMKRAV_KLAGE_NFP="5082",e.VURDER_FORMKRAV_NK="5083",e.VURDER_FEILUTBETALING="5084",e.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING="5085",e.AVKLAR_ANNEN_FORELDER_RETT="5086",e.SOKERS_OPPLYSNINGSPLIKT_OVST="6002",e.OVERSTYR_FODSELSVILKAR="6003",e.OVERSTYR_ADOPSJONSVILKAR="6004",e.OVERSTYR_MEDLEMSKAPSVILKAR="6005",e.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE="6017",e.OVERSTYR_SOKNADSFRISTVILKAR="6006",e.OVERSTYRING_AV_UTTAKPERIODER="6008",e.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR="6009",e.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP="6010",e.OVERSTYRING_AV_OPPTJENINGSVILKARET="6011",e.OVERSTYR_DEKNINGSGRAD="6016",e.OVERSTYRING_AV_RETT_OG_OMSORG="6018",e.VURDER_OPPTJENINGSVILKARET="5089",e.OVERSTYR_LØPENDE_MEDLEMSKAPSVILKAR="6012",e.OVERSTYR_AVKLAR_STARTDATO="6045",e.OVERSTYR_FAKTA_UTTAK="6065",e.OVERSTYR_FAKTA_UTTAK_EØS="6103",e.AUTO_MANUELT_SATT_PÅ_VENT="7001",e.AUTO_VENT_PÅ_FODSELREGISTRERING="7002",e.AUTO_VENTER_PÅ_KOMPLETT_SOKNAD="7003",e.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG="7019",e.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN="7033",e.FODSELTILRETTELEGGING="5091",e.SVANGERSKAPSVILKARET="5092",e.VURDER_FARESIGNALER="5095",e.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS="5038",e.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE="5039",e.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE="5042",e.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD="5047",e.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET="5049",e.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG="5050",e.VURDER_FAKTA_FOR_ATFL_SN="5058",e.AVKLAR_AKTIVITETER="5052",e.OVERSTYRING_AV_BEREGNINGSAKTIVITETER="6014",e.OVERSTYRING_AV_BEREGNINGSGRUNNLAG="6015",e.FORDEL_BEREGNINGSGRUNNLAG="5046",e.VURDER_REFUSJON_BERGRUNN="5059",e.AVKLAR_ARBEIDSFORHOLD="5080",e.VURDER_TILBAKETREKK="5090",e))(ze||{}),qt=(e=>(e.INGEN_BEREGNINGSREGLER="1099",e.MANN_ADOPTERER_IKKE_ALENE="1006",e.ÅRSAK_1020="1020",e))(qt||{}),Bt=(e=>(e.FODSEL="ST-001",e.ADOPSJON="ST-002",e))(Bt||{}),We=(e=>(e.FODSELSVILKARET_MOR="FP_VK_1",e.SVANGERSKAPVILKARET="SVP_VK_1",e.MEDLEMSKAPSVILKARET="FP_VK_2",e.MEDLEMSKAPSVILKÅRET_LØPENDE="FP_VK_2_L",e.MEDLEMSKAPSVILKARET_FORUTGAENDE="FP_VK_2_F",e.SOKNADFRISTVILKARET="FP_VK_3",e.ADOPSJONSVILKARET="FP_VK_4",e.OMSORGSVILKARET="FP_VK_5",e.FORELDREANSVARSVILKARET_2_LEDD="FP_VK_8",e.FODSELSVILKARET_FAR="FP_VK_11",e.ADOPSJONSVILKARET_FORELDREPENGER="FP_VK_16",e.OPPTJENINGSPERIODE="FP_VK_21",e.OPPTJENINGSVILKARET="FP_VK_23",e.FORELDREANSVARSVILKARET_4_LEDD="FP_VK_33",e.SOKERSOPPLYSNINGSPLIKT="FP_VK_34",e.BEREGNINGSGRUNNLAGVILKARET="FP_VK_41",e))(We||{}),Qe=(e=>(e.OPPFYLT="OPPFYLT",e.IKKE_OPPFYLT="IKKE_OPPFYLT",e.IKKE_VURDERT="IKKE_VURDERT",e))(Qe||{});const Fe=e=>ke({"navds-typo--spacing":e.spacing,"navds-typo--truncate":e.truncate,"navds-typo--semibold":e.weight==="semibold",[`navds-typo--align-${e.align}`]:e.align,[`navds-typo--color-${e.textColor}`]:e.textColor,"navds-typo--visually-hidden":e.visuallyHidden,"navds-typo--uppercase":e.uppercase});var wr=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Ct=L.forwardRef((e,r)=>{var{className:t,size:a="medium",as:n="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:f,textColor:c}=e,v=wr(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=J();return E.createElement(n,Object.assign({},v,{ref:r,className:_(t,"navds-body-long",`navds-body-long--${a}`,Fe({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:f,textColor:c}))}))});var xr=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Se=L.forwardRef((e,r)=>{var{className:t,size:a="medium",as:n="p",spacing:l,truncate:i,weight:s="regular",align:d,visuallyHidden:f,textColor:c}=e,v=xr(e,["className","size","as","spacing","truncate","weight","align","visuallyHidden","textColor"]);const{cn:_}=J();return E.createElement(n,Object.assign({},v,{ref:r,className:_(t,"navds-body-short",`navds-body-short--${a}`,Fe({spacing:l,truncate:i,weight:s,align:d,visuallyHidden:f,textColor:c}))}))});var Mr=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Da=L.forwardRef((e,r)=>{var{className:t,size:a="medium",spacing:n,uppercase:l,as:i="p",truncate:s,weight:d="regular",align:f,visuallyHidden:c,textColor:v}=e,_=Mr(e,["className","size","spacing","uppercase","as","truncate","weight","align","visuallyHidden","textColor"]);const{cn:N}=J();return E.createElement(i,Object.assign({},_,{ref:r,className:N(t,"navds-detail",Fe({spacing:n,truncate:s,weight:d,align:f,visuallyHidden:c,textColor:v,uppercase:l}),{"navds-detail--small":a==="small"})}))});var jr=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const $t=L.forwardRef((e,r)=>{var{children:t,className:a,size:n,spacing:l,as:i="p",showIcon:s=!1}=e,d=jr(e,["children","className","size","spacing","as","showIcon"]);const{cn:f}=J();return E.createElement(i,Object.assign({},d,{ref:r,className:f("navds-error-message","navds-label",a,Fe({spacing:l}),{"navds-label--small":n==="small","navds-error-message--show-icon":s})}),s&&E.createElement("svg",{viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,"aria-hidden":!0},E.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.49209 11.534L8.11398 2.7594C8.48895 2.04752 9.50833 2.04743 9.88343 2.75924L14.5073 11.5339C14.8582 12.1998 14.3753 13 13.6226 13H4.37685C3.6242 13 3.14132 12.1999 3.49209 11.534ZM9.74855 10.495C9.74855 10.9092 9.41276 11.245 8.99855 11.245C8.58433 11.245 8.24855 10.9092 8.24855 10.495C8.24855 10.0808 8.58433 9.74497 8.99855 9.74497C9.41276 9.74497 9.74855 10.0808 9.74855 10.495ZM9.49988 5.49997C9.49988 5.22383 9.27602 4.99997 8.99988 4.99997C8.72373 4.99997 8.49988 5.22383 8.49988 5.49997V7.99997C8.49988 8.27611 8.72373 8.49997 8.99988 8.49997C9.27602 8.49997 9.49988 8.27611 9.49988 7.99997V5.49997Z",fill:"currentColor"})),t)});var Ur=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const et=L.forwardRef((e,r)=>{var{level:t="1",size:a,className:n,as:l,spacing:i,align:s,visuallyHidden:d,textColor:f}=e,c=Ur(e,["level","size","className","as","spacing","align","visuallyHidden","textColor"]);const{cn:v}=J(),_=l??`h${t}`;return E.createElement(_,Object.assign({},c,{ref:r,className:v(n,"navds-heading",`navds-heading--${a}`,Fe({spacing:i,align:s,visuallyHidden:d,textColor:f}))}))});var qr=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};L.forwardRef((e,r)=>{var{className:t,spacing:a,as:n="p"}=e,l=qr(e,["className","spacing","as"]);const{cn:i}=J();return E.createElement(n,Object.assign({},l,{ref:r,className:i(t,"navds-ingress",{"navds-typo--spacing":!!a})}))});var Br=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Na=L.forwardRef((e,r)=>{var{className:t,size:a="medium",as:n="label",spacing:l,visuallyHidden:i,textColor:s}=e,d=Br(e,["className","size","as","spacing","visuallyHidden","textColor"]);const{cn:f}=J();return E.createElement(n,Object.assign({},d,{ref:r,className:f(t,"navds-label",Fe({spacing:l,visuallyHidden:i,textColor:s}),{"navds-label--small":a==="small"})}))});function Ht(e,r=166,t=!1){let a;function n(...l){const i=()=>{a=void 0,e.apply(this,l)};!a&&t&&i(),clearTimeout(a),a=setTimeout(i,r)}return n.clear=()=>{clearTimeout(a)},n}function de(e,r){const t=Object.entries(e).filter(([a])=>!r.includes(a));return Object.fromEntries(t)}const at=globalThis?.document?L.useLayoutEffect:()=>{};let tt=0;function Cr(e){const[r,t]=L.useState(e),a=e||r;return L.useEffect(()=>{r==null&&(tt+=1,t(`aksel-id-${tt}`))},[r]),a}const rt=E.useId;function Pe(e){var r;return rt!==void 0?rt().replace(/(:)/g,""):(r=Cr(e))!==null&&r!==void 0?r:""}function nt(e,r=[]){const t=L.useRef(e);return L.useEffect(()=>{t.current=e}),L.useCallback(((...a)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...a)}),r)}function $r({value:e,defaultValue:r,onChange:t}){const a=nt(t),[n,l]=L.useState(r),i=e!==void 0,s=i?e:n,d=nt(f=>{const v=typeof f=="function"?f(s):f;i||l(v),a(v)},[i,a,s]);return[s,d]}let lt=0;function Hr(e){const[r,t]=L.useState(e),a=e||r;return L.useEffect(()=>{r==null&&(lt+=1,t(`aksel-icon-${lt}`))},[r]),a}const it=E.useId;function Va(e){var r;return it!==void 0?it().replace(/(:)/g,""):(r=Hr(e))!==null&&r!==void 0?r:""}var Jr=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Yr=L.forwardRef((e,r)=>{var{title:t,titleId:a}=e,n=Jr(e,["title","titleId"]);let l=Va();return l=t?a||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},n),t?E.createElement("title",{id:l},t):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var zr=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Jt=L.forwardRef((e,r)=>{var{title:t,titleId:a}=e,n=zr(e,["title","titleId"]);let l=Va();return l=t?a||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},n),t?E.createElement("title",{id:l},t):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25A4.75 4.75 0 0 0 7.25 7v2.25H7A1.75 1.75 0 0 0 5.25 11v9c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75v-9A1.75 1.75 0 0 0 17 9.25h-.25V7A4.75 4.75 0 0 0 12 2.25m3.25 7V7a3.25 3.25 0 0 0-6.5 0v2.25zM12 13a1.5 1.5 0 0 0-.75 2.8V17a.75.75 0 0 0 1.5 0v-1.2A1.5 1.5 0 0 0 12 13",clipRule:"evenodd"}))});var Wr=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Qr=L.forwardRef((e,r)=>{var{title:t,titleId:a}=e,n=Wr(e,["title","titleId"]);let l=Va();return l=t?a||"title-"+l:void 0,E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:r,"aria-labelledby":l},n),t?E.createElement("title",{id:l},t):null,E.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5m0 12A6.75 6.75 0 0 0 5.25 21a.75.75 0 0 0 .75.75h6.525c.173 0 .294-.172.262-.341a2.3 2.3 0 0 1 .007-.85l.5-2.5a2.25 2.25 0 0 1 .615-1.15l1.423-1.423a.24.24 0 0 0-.048-.384A6.75 6.75 0 0 0 12 14.25m8.53 1.22a2.164 2.164 0 0 0-3.06 0l-2.5 2.5a.75.75 0 0 0-.205.383l-.5 2.5a.75.75 0 0 0 .882.882l2.5-.5a.75.75 0 0 0 .383-.205l2.5-2.5a2.164 2.164 0 0 0 0-3.06",clipRule:"evenodd"}))});function Ga(e,r,{checkForDefaultPrevented:t=!0}={}){return function(n){if(e?.(n),t===!1||!n.defaultPrevented)return r?.(n)}}function ba(e){return(r={})=>{const t=r.width?String(r.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function qe(e){return(r,t)=>{const a=t?.context?String(t.context):"standalone";let n;if(a==="formatting"&&e.formattingValues){const i=e.defaultFormattingWidth||e.defaultWidth,s=t?.width?String(t.width):i;n=e.formattingValues[s]||e.formattingValues[i]}else{const i=e.defaultWidth,s=t?.width?String(t.width):e.defaultWidth;n=e.values[s]||e.values[i]}const l=e.argumentCallback?e.argumentCallback(r):r;return n[l]}}function Be(e){return(r,t={})=>{const a=t.width,n=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],l=r.match(n);if(!l)return null;const i=l[0],s=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?Zr(s,v=>v.test(i)):Xr(s,v=>v.test(i));let f;f=e.valueCallback?e.valueCallback(d):d,f=t.valueCallback?t.valueCallback(f):f;const c=r.slice(i.length);return{value:f,rest:c}}}function Xr(e,r){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&r(e[t]))return t}function Zr(e,r){for(let t=0;t<e.length;t++)if(r(e[t]))return t}function en(e){return(r,t={})=>{const a=r.match(e.matchPattern);if(!a)return null;const n=a[0],l=r.match(e.parsePattern);if(!l)return null;let i=e.valueCallback?e.valueCallback(l[0]):l[0];i=t.valueCallback?t.valueCallback(i):i;const s=r.slice(n.length);return{value:i,rest:s}}}const an={lessThanXSeconds:{one:"mindre enn ett sekund",other:"mindre enn {{count}} sekunder"},xSeconds:{one:"ett sekund",other:"{{count}} sekunder"},halfAMinute:"et halvt minutt",lessThanXMinutes:{one:"mindre enn ett minutt",other:"mindre enn {{count}} minutter"},xMinutes:{one:"ett minutt",other:"{{count}} minutter"},aboutXHours:{one:"omtrent en time",other:"omtrent {{count}} timer"},xHours:{one:"en time",other:"{{count}} timer"},xDays:{one:"en dag",other:"{{count}} dager"},aboutXWeeks:{one:"omtrent en uke",other:"omtrent {{count}} uker"},xWeeks:{one:"en uke",other:"{{count}} uker"},aboutXMonths:{one:"omtrent en måned",other:"omtrent {{count}} måneder"},xMonths:{one:"en måned",other:"{{count}} måneder"},aboutXYears:{one:"omtrent ett år",other:"omtrent {{count}} år"},xYears:{one:"ett år",other:"{{count}} år"},overXYears:{one:"over ett år",other:"over {{count}} år"},almostXYears:{one:"nesten ett år",other:"nesten {{count}} år"}},tn=(e,r,t)=>{let a;const n=an[e];return typeof n=="string"?a=n:r===1?a=n.one:a=n.other.replace("{{count}}",String(r)),t?.addSuffix?t.comparison&&t.comparison>0?"om "+a:a+" siden":a},rn={full:"EEEE d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd.MM.y"},nn={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},ln={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},sn={date:ba({formats:rn,defaultWidth:"full"}),time:ba({formats:nn,defaultWidth:"full"}),dateTime:ba({formats:ln,defaultWidth:"full"})},on={lastWeek:"'forrige' eeee 'kl.' p",yesterday:"'i går kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"EEEE 'kl.' p",other:"P"},un=(e,r,t,a)=>on[e],dn={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["før Kristus","etter Kristus"]},cn={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},En={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","mai","juni","juli","aug.","sep.","okt.","nov.","des."],wide:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},mn={narrow:["S","M","T","O","T","F","L"],short:["sø","ma","ti","on","to","fr","lø"],abbreviated:["søn","man","tir","ons","tor","fre","lør"],wide:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]},fn={narrow:{am:"a",pm:"p",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på etterm.",evening:"på kvelden",night:"på natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnatt",noon:"middag",morning:"på morgenen",afternoon:"på ettermiddagen",evening:"på kvelden",night:"på natten"}},vn=(e,r)=>Number(e)+".",_n={ordinalNumber:vn,era:qe({values:dn,defaultWidth:"wide"}),quarter:qe({values:cn,defaultWidth:"wide",argumentCallback:e=>e-1}),month:qe({values:En,defaultWidth:"wide"}),day:qe({values:mn,defaultWidth:"wide"}),dayPeriod:qe({values:fn,defaultWidth:"wide"})},gn=/^(\d+)\.?/i,Sn=/\d+/i,Nn={narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},yn={any:[/^f/i,/^e/i]},Tn={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},Rn={any:[/1/i,/2/i,/3/i,/4/i]},pn={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},On={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},Dn={narrow:/^[smtofl]/i,short:/^(sø|ma|ti|on|to|fr|lø)/i,abbreviated:/^(søn|man|tir|ons|tor|fre|lør)/i,wide:/^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i},bn={any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},An={narrow:/^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i},hn={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgen/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},In={ordinalNumber:en({matchPattern:gn,parsePattern:Sn,valueCallback:e=>parseInt(e,10)}),era:Be({matchPatterns:Nn,defaultMatchWidth:"wide",parsePatterns:yn,defaultParseWidth:"any"}),quarter:Be({matchPatterns:Tn,defaultMatchWidth:"wide",parsePatterns:Rn,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Be({matchPatterns:pn,defaultMatchWidth:"wide",parsePatterns:On,defaultParseWidth:"any"}),day:Be({matchPatterns:Dn,defaultMatchWidth:"wide",parsePatterns:bn,defaultParseWidth:"any"}),dayPeriod:Be({matchPatterns:An,defaultMatchWidth:"any",parsePatterns:hn,defaultParseWidth:"any"})},Ln={code:"nb",formatDistance:tn,formatLong:sn,formatRelative:un,localize:_n,match:In,options:{weekStartsOn:1,firstWeekContainsDate:4}},kn={global:{dateLocale:Ln,showMore:"Vis mer",showLess:"Vis mindre",readOnly:"Skrivebeskyttet",close:"Lukk"},Alert:{closeAlert:"Lukk varsel",closeMessage:"Lukk melding",error:"Feil",info:"Informasjon",success:"Suksess",warning:"Advarsel"},Chips:{Removable:{labelSuffix:"slett"}},Combobox:{addOption:"Legg til",loading:"Søker…",maxSelected:"{selected} av maks {limit} er valgt."},CopyButton:{title:"Kopier",activeText:"Kopiert!"},DatePicker:{chooseDate:"Velg dato",chooseDates:"Velg datoer",chooseDateRange:"Velg start- og sluttdato",chooseMonth:"Velg måned",week:"Uke",weekNumber:"Uke {week}",selectWeekNumber:"Velg uke {week}",month:"Måned",goToNextMonth:"Gå til neste måned",goToPreviousMonth:"Gå til forrige måned",year:"År",goToNextYear:"Gå til neste år",goToPreviousYear:"Gå til forrige år",openDatePicker:"Åpne datovelger",openMonthPicker:"Åpne månedsvelger",closeDatePicker:"Lukk datovelger",closeMonthPicker:"Lukk månedsvelger"},ErrorSummary:{heading:"Du må rette disse feilene før du kan fortsette:"},FileUpload:{dropzone:{button:"Velg fil",buttonMultiple:"Velg filer",dragAndDrop:"Dra og slipp filen her",dragAndDropMultiple:"Dra og slipp filer her",drop:"Slipp",or:"eller",disabled:"Filopplasting er deaktivert",disabledFilelimit:"Du kan ikke laste opp flere filer"},item:{retryButtonTitle:"Prøv å laste opp filen på nytt",deleteButtonTitle:"Slett filen",uploading:"Laster opp…",downloading:"Laster ned…"}},FormProgress:{step:"Steg {activeStep} av {totalSteps}",showAllSteps:"Vis alle steg",hideAllSteps:"Skjul alle steg"},FormSummary:{editAnswer:"Endre svar"},GuidePanel:{illustrationLabel:"Illustrasjon av veileder"},HelpText:{title:"Mer informasjon"},Loader:{title:"Venter…"},Pagination:{previous:"Forrige",next:"Neste"},Process:{active:"Aktiv"},ProgressBar:{progress:"{current} av {max}",progressUnknown:"Fremdrift kan ikke beregnes, antatt tid er {seconds} sekunder."},Search:{clear:"Tøm feltet",search:"Søk"},Textarea:{maxLength:"Tekstområde med plass til {maxLength} tegn.",charsTooMany:"{chars} tegn for mye",charsLeft:"{chars} tegn igjen"},Timeline:{dateFormat:"dd.MM.yyyy",dayFormat:"dd.MM",monthFormat:"MMM yy",yearFormat:"yyyy",Row:{noPeriods:"Ingen perioder",period:"{start} til {end}"},Period:{success:"Suksess",warning:"Advarsel",danger:"Fare",info:"Info",neutral:"Nøytral",period:"{status} fra {start} til {end}"},Pin:{pin:"Pin: {date}"},Zoom:{zoom:"Zoom tidslinjen {start} til {end}",reset:"Tilbakestill tidsperspektiv"}}},Fn=L.createContext({locale:kn}),Pn=()=>L.useContext(Fn),st=/(\w+)/g;function Kn(e,r){const t=Array.isArray(e)?e:Vn(e);for(const a of r){if(!a)continue;let n=a;for(let l=0;l<t.length;l++){const i=n[t[l]];i!==void 0&&(n=i)}if(typeof n=="string")return n}throw new Error(`Error translating key. Keypath '${e}' does not resolve to a string.`)}function Vn(e){const r=[];let t=st.exec(e);for(;t;){const[,a,n]=t;r.push(a||n),t=st.exec(e)}return r}const Gn=/{[^}]*}/g;function wa(e,...r){const t=Pn(),a=t.translations||[],n=[...r,...Array.isArray(a)?a.map(i=>i[e]):[a[e]],t.locale[e]];return(i,s)=>{const d=Kn(i,n);return s?d.replace(Gn,f=>{const c=f.substring(1,f.length-1);if(s[c]===void 0){const v=JSON.stringify(s);throw new Error(`Error translating key '${i}'. No replacement syntax ({}) found for key '${c}'. The following replacements were passed: '${v}'`)}return s[c]}):d}}var wn=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const xn=L.forwardRef((e,r)=>{var{className:t,size:a="medium",title:n,transparent:l=!1,variant:i="neutral",id:s,"data-color":d}=e,f=wn(e,["className","size","title","transparent","variant","id","data-color"]);const{cn:c}=J(),v=Pe(),_=wa("Loader");return E.createElement("svg",Object.assign({"aria-labelledby":s??`loader-${v}`,ref:r,className:c("navds-loader",t,`navds-loader--${a}`,`navds-loader--${i}`,{"navds-loader--transparent":l}),focusable:"false",viewBox:"0 0 50 50",preserveAspectRatio:"xMidYMid","data-color":d??Mn(i)},de(f,["children"]),{"data-variant":i}),E.createElement("title",{id:s??`loader-${v}`},n||_("title")),E.createElement("circle",{className:c("navds-loader__background"),xmlns:"http://www.w3.org/2000/svg",cx:"25",cy:"25",r:"20",fill:"none"}),E.createElement("circle",{className:c("navds-loader__foreground"),cx:"25",cy:"25",r:"20",fill:"none",strokeDasharray:"50 155"}))});function Mn(e){switch(e){case"neutral":return"neutral";case"inverted":return"neutral";case"interaction":return;default:return"neutral"}}var jn=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Un=L.forwardRef((e,r)=>{var{as:t="button",variant:a="primary",className:n,children:l,size:i="medium",loading:s=!1,disabled:d,icon:f,iconPosition:c="left",onKeyUp:v,"data-color":_}=e,N=jn(e,["as","variant","className","children","size","loading","disabled","icon","iconPosition","onKeyUp","data-color"]);const{cn:T}=J(),D=d||s?de(N,["href"]):N,g=h=>{h.key===" "&&!d&&!s&&h.currentTarget.click()};return E.createElement(t,Object.assign({},t!=="button"?{role:"button"}:{},{"data-color":_??qn(a),"data-variant":Bn(a)},D,{ref:r,onKeyUp:Ga(v,g),className:T(n,"navds-button",`navds-button--${a}`,`navds-button--${i}`,{"navds-button--loading":s,"navds-button--icon-only":!!f&&!l,"navds-button--disabled":d??s}),disabled:d??s?!0:void 0}),f&&c==="left"&&E.createElement("span",{className:T("navds-button__icon")},f),s&&E.createElement(xn,{size:i}),l&&E.createElement(Na,{as:"span",size:i==="medium"?"medium":"small"},l),f&&c==="right"&&E.createElement("span",{className:T("navds-button__icon")},f))});function qn(e){switch(e){case"primary-neutral":case"secondary-neutral":case"tertiary-neutral":return"neutral";case"danger":return"danger";default:return}}function Bn(e){switch(e){case"primary":case"primary-neutral":case"danger":return"primary";case"secondary":case"secondary-neutral":return"secondary";case"tertiary":case"tertiary-neutral":return"tertiary";default:return"primary"}}const Yt=()=>{const{cn:e}=J();return E.createElement(Jt,{"aria-hidden":!0,className:e("navds-form-field__readonly-icon")})},Cn=()=>{const{cn:e}=J();return E.createElement(Jt,{title:wa("global")("readOnly"),className:e("navds-form-field__readonly-icon")})};var $n=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Hn=L.forwardRef((e,r)=>{var{className:t,header:a,children:n,open:l,defaultOpen:i=!1,onClick:s,size:d="medium",onOpenChange:f}=e,c=$n(e,["className","header","children","open","defaultOpen","onClick","size","onOpenChange"]);const{cn:v}=J(),[_,N]=$r({defaultValue:i,value:l,onChange:f}),T=d==="small"?"small":"medium";return E.createElement("div",{className:v("navds-read-more",`navds-read-more--${d}`,t,{"navds-read-more--open":_}),"data-volume":"low"},E.createElement("button",Object.assign({},c,{ref:r,type:"button",className:v("navds-read-more__button","navds-body-short",{"navds-body-short--small":d==="small"}),onClick:Ga(s,()=>N(D=>!D)),"aria-expanded":_,"data-state":_?"open":"closed"}),E.createElement(Yr,{className:v("navds-read-more__expand-icon"),"aria-hidden":!0}),E.createElement("span",null,a)),E.createElement(Ct,{as:"div","aria-hidden":!_,className:v("navds-read-more__content",{"navds-read-more__content--closed":!_}),size:T,"data-state":_?"open":"closed"},n))}),ua=L.createContext(null),xa=(e,r)=>{var t,a,n;const{size:l,error:i,errorId:s}=e,d=L.useContext(ua),f=Pe(),c=(t=e.id)!==null&&t!==void 0?t:`${r}-${f}`,v=s??`${r}-error-${f}`,_=`${r}-description-${f}`,N=d?.disabled||e.disabled,T=(d?.readOnly||e.readOnly)&&!N||void 0,D=!N&&!T&&!!(i||d?.error),g=!N&&!T&&!!i&&typeof i!="boolean",h=Object.assign({},D?{"aria-invalid":!0}:{});return e?.required,{showErrorMsg:g,hasError:D,errorId:v,inputDescriptionId:_,size:(a=l??d?.size)!==null&&a!==void 0?a:"medium",readOnly:T,inputProps:Object.assign(Object.assign({id:c},h),{"aria-describedby":ke(e["aria-describedby"],{[_]:e.description&&!da(e.description),[v]:g,[(n=d?.errorId)!==null&&n!==void 0?n:""]:D&&d?.error})||void 0,disabled:N})}};function da(e,r=!0){if(E.isValidElement(e)){if(e.type===Hn)return!0;if(e.props.children&&r)return da(e.props.children,!1)}else if(Array.isArray(e))return e.some(t=>da(t,r));return!1}function Z(e,r,t,a){return a?typeof a=="string"?{[`--__${e}c-${r}-${t}-xs`]:a}:Object.fromEntries(Object.entries(a).map(([n,l])=>[`--__${e}c-${r}-${t}-${n}`,l])):{}}const Jn={"--ax-spacing-32":"--ax-space-128","--ax-spacing-24":"--ax-space-96","--ax-spacing-20":"--ax-space-80","--ax-spacing-18":"--ax-space-72","--ax-spacing-16":"--ax-space-64","--ax-spacing-14":"--ax-space-56","--ax-spacing-12":"--ax-space-48","--ax-spacing-11":"--ax-space-44","--ax-spacing-10":"--ax-space-40","--ax-spacing-9":"--ax-space-36","--ax-spacing-8":"--ax-space-32","--ax-spacing-7":"--ax-space-28","--ax-spacing-6":"--ax-space-24","--ax-spacing-5":"--ax-space-20","--ax-spacing-4":"--ax-space-16","--ax-spacing-3":"--ax-space-12","--ax-spacing-2":"--ax-space-8","--ax-spacing-1-alt":"--ax-space-6","--ax-spacing-1":"--ax-space-4","--ax-spacing-05":"--ax-space-2","--ax-spacing-0":"--ax-space-0"},Yn={full:"full",xlarge:"12",large:"8",medium:"4",small:"2"},ot=(e,r,t,a,n,l)=>r.split(" ").map((i,s,d)=>{var f,c;if(e==="margin-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/-2)`;if(e==="padding-inline"&&i==="full")return`calc((100vw - ${100/d.length}%)/2)`;if(["mi","mb"].includes(e)&&i==="auto")return"auto";let v=`var(--${l}-${t}-${i})`;if(a.includes(i))v=i==="px"?"1px":i;else if(t==="spacing"&&i.startsWith("space"))v=`var(--${l}-${i})`;else if(t==="spacing"){const _=`--${l}-spacing-${i}`;v=`var(${(f=Jn[_])!==null&&f!==void 0?f:_})`}else if(t==="radius"){const _=(c=Yn[i])!==null&&c!==void 0?c:i;v=`var(--${l}-radius-${_})`}return n?i==="0"?"0":`calc(-1 * ${v})`:v}).join(" ");function le(e,r,t,a,n,l=!1,i=[]){if(!n)return{};if(typeof n=="string")return{[`--__${e}c-${r}-${t}-xs`]:ot(t,n,a,i,l,e)};const s={};return Object.entries(n).forEach(([d,f])=>{s[`--__${e}c-${r}-${t}-${d}`]=ot(t,f,a,i,l,e)}),s}const Ma=["className","padding","paddingInline","paddingBlock","margin","marginInline","marginBlock","width","minWidth","maxWidth","height","minHeight","maxHeight","position","inset","top","right","bottom","left","overflow","overflowX","overflowY","flexBasis","flexGrow","flexShrink","gridColumn"],ja=({children:e,className:r,padding:t,paddingInline:a,paddingBlock:n,margin:l,marginInline:i,marginBlock:s,width:d,minWidth:f,maxWidth:c,height:v,minHeight:_,maxHeight:N,position:T,inset:D,top:g,right:h,left:R,bottom:I,overflow:F,overflowX:K,overflowY:C,flexBasis:w,flexGrow:U,flexShrink:G,gridColumn:M})=>{const x=_a(!1),{cn:A}=J(),p=x?.isDarkside?"ax":"a",V=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},le(p,"r","p","spacing",t)),le(p,"r","pi","spacing",a)),le(p,"r","pb","spacing",n)),le(p,"r","m","spacing",l)),le(p,"r","mi","spacing",i)),le(p,"r","mb","spacing",s)),Z(p,"r","w",d)),Z(p,"r","minw",f)),Z(p,"r","maxw",c)),Z(p,"r","h",v)),Z(p,"r","minh",_)),Z(p,"r","maxh",N)),Z(p,"r","position",T)),le(p,"r","inset","spacing",D)),le(p,"r","top","spacing",g)),le(p,"r","right","spacing",h)),le(p,"r","bottom","spacing",I)),le(p,"r","left","spacing",R)),Z(p,"r","overflow",F)),Z(p,"r","overflowx",K)),Z(p,"r","overflowy",C)),Z(p,"r","flex-basis",w)),Z(p,"r","flex-grow",U)),Z(p,"r","flex-shrink",G)),Z(p,"r","grid-column",M));return E.createElement(ga,{className:A({className:r,"navds-r-p":t,"navds-r-pi":a,"navds-r-pb":n,"navds-r-m":l,"navds-r-mi":i,"navds-r-mb":s,"navds-r-w":d,"navds-r-minw":f,"navds-r-maxw":c,"navds-r-h":v,"navds-r-minh":_,"navds-r-maxh":N,"navds-r-position":T,"navds-r-inset":D,"navds-r-top":g,"navds-r-right":h,"navds-r-bottom":I,"navds-r-left":R,"navds-r-overflow":F,"navds-r-overflowx":K,"navds-r-overflowy":C,"navds-r-flex-basis":w,"navds-r-flex-grow":U,"navds-r-flex-shrink":G,"navds-r-grid-column":M}),style:V},e)};var zn=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Wn=L.forwardRef((e,r)=>{var{children:t,className:a,as:n="div",background:l,borderColor:i,borderWidth:s,borderRadius:d,shadow:f,style:c,asChild:v}=e,_=zn(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const{cn:N}=J(),T=Object.assign(Object.assign(Object.assign({},c),{"--__axc-box-background":l?`var(--ax-bg-${l})`:void 0,"--__axc-box-shadow":f?`var(--ax-shadow-${f})`:void 0,"--__axc-box-border-color":i?`var(--ax-border-${i})`:void 0,"--__axc-box-border-width":s?s.split(" ").map(g=>`${g}px`).join(" "):void 0}),le("ax","box","radius","radius",d,!1,["0"])),D=v?ga:n;return E.createElement(ja,Object.assign({},_),E.createElement(D,Object.assign({},de(_,Ma),{ref:r,style:T,className:N("navds-box",a,{"navds-box-bg":l,"navds-box-border-color":i,"navds-box-border-width":s,"navds-box-radius":d,"navds-box-shadow":f})}),t))});var Qn=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Xn=L.forwardRef((e,r)=>{var{children:t,className:a,as:n="div",background:l,borderColor:i,borderWidth:s,borderRadius:d,shadow:f,style:c,asChild:v}=e,_=Qn(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const N=_a(!1),{cn:T}=J(),D=N?.isDarkside?"ax":"a",g=Object.assign(Object.assign(Object.assign({},c),{[`--__${D}c-box-background`]:l?`var(--a-${l})`:void 0,[`--__${D}c-box-shadow`]:f?`var(--a-shadow-${f})`:void 0,[`--__${D}c-box-border-color`]:i?`var(--a-${i})`:void 0,[`--__${D}c-box-border-width`]:s?s.split(" ").map(R=>`${R}px`).join(" "):void 0}),le(D,"box","radius","radius",d,!1,["0"])),h=v?ga:n;return E.createElement(ja,Object.assign({},_),E.createElement(h,Object.assign({},de(_,Ma),{ref:r,style:g,className:T("navds-box",a,{"navds-box-bg":l,"navds-box-border-color":i,"navds-box-border-width":s,"navds-box-border-radius":d&&!N?.isDarkside,"navds-box-radius":d&&N?.isDarkside,"navds-box-shadow":f})}),t))}),zt=Xn;zt.New=Wn;var Zn=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Wt=L.forwardRef((e,r)=>{var{children:t,className:a,as:n="div",align:l,justify:i,wrap:s=!0,gap:d,style:f,direction:c="row",asChild:v}=e,_=Zn(e,["children","className","as","align","justify","wrap","gap","style","direction","asChild"]);const N=_a(!1),T=N?.isDarkside?"ax":"a",{cn:D}=J(),g=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},f),le(T,"stack","gap","spacing",d)),Z(T,"stack","direction",c)),Z(T,"stack","align",l)),Z(T,"stack","justify",i)),h=v?ga:n;return E.createElement(ja,Object.assign({},_),E.createElement(h,Object.assign({},de(_,Ma),{ref:r,style:g,className:D("navds-stack",a,{"navds-vstack":c==="column","navds-hstack":c==="row","navds-stack-gap":d,"navds-stack-align":l,"navds-stack-justify":i,"navds-stack-direction":c,"navds-stack-wrap":s})}),t))});var el=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const ca=L.forwardRef((e,r)=>{var{as:t="div"}=e,a=el(e,["as"]);return E.createElement(Wt,Object.assign({as:t},a,{ref:r,direction:"row"}))});var al=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const pe=L.forwardRef((e,r)=>{var{as:t="div"}=e,a=al(e,["as"]);return E.createElement(Wt,Object.assign({as:t},a,{ref:r,direction:"column",wrap:!1}))});var tl=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const rl=L.forwardRef((e,r)=>{var{children:t,className:a,variant:n,size:l="medium",icon:i,"data-color":s}=e,d=tl(e,["children","className","variant","size","icon","data-color"]);const{cn:f}=J(),c=n?.endsWith("-filled")&&"strong",v=n?.endsWith("-moderate")&&"moderate";return E.createElement(Se,Object.assign({"data-color":s??nl(n),"data-variant":c||v||"outline"},d,{ref:r,as:"span",size:l==="medium"?"medium":"small",className:f("navds-tag",a,`navds-tag--${n}`,`navds-tag--${l}`)}),i&&E.createElement("span",{className:f("navds-tag__icon--left")},i),t)});function nl(e){switch(e){case"warning":case"warning-filled":case"warning-moderate":return"warning";case"error":case"error-filled":case"error-moderate":return"danger";case"info":case"info-filled":case"info-moderate":case"alt3":case"alt3-filled":case"alt3-moderate":return"info";case"success":case"success-filled":case"success-moderate":return"success";case"neutral":case"neutral-filled":case"neutral-moderate":return"neutral";case"alt1":case"alt1-filled":case"alt1-moderate":return"meta-purple";case"alt2":case"alt2-filled":case"alt2-moderate":return"meta-lime";default:return"neutral"}}const ll=(e,r)=>{const t=xa(e,"fieldset");return Object.assign(Object.assign({},t),{inputProps:{"aria-labelledby":e["aria-labelledby"]||ke(r,{[t.inputDescriptionId]:e.description&&!da(e.description)})}})};var il=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const sl=L.forwardRef((e,r)=>{var t,a,n;const l=Pe(),{inputProps:i,errorId:s,showErrorMsg:d,hasError:f,size:c,readOnly:v,inputDescriptionId:_}=ll(e,l),{cn:N}=J(),T=L.useContext(ua),{children:D,className:g,errorPropagation:h=!0,legend:R,description:I,hideLegend:F,nativeReadOnly:K=!0}=e,C=il(e,["children","className","errorPropagation","legend","description","hideLegend","nativeReadOnly"]);return E.createElement(ua.Provider,{value:{error:h?(t=e.error)!==null&&t!==void 0?t:T?.error:void 0,errorId:ke({[s]:d,[(a=T?.errorId)!==null&&a!==void 0?a:""]:!!T?.error}),size:c,disabled:(n=e.disabled)!==null&&n!==void 0?n:!1,readOnly:v}},E.createElement("fieldset",Object.assign({},de(C,["errorId","error","size","readOnly"]),i,{ref:r,className:N(g,"navds-fieldset",`navds-fieldset--${c}`,{"navds-fieldset--error":f,"navds-fieldset--readonly":v})}),E.createElement(Na,{id:l,size:c,as:"legend",className:N("navds-fieldset__legend",{"navds-sr-only":!!F})},v&&(K?E.createElement(Yt,null):E.createElement(Cn,null)),R),!!I&&E.createElement(Se,{className:N("navds-fieldset__description",{"navds-sr-only":!!F}),id:_,size:c??"medium",as:"div"},e.description),D,E.createElement("div",{id:s,"aria-relevant":"additions removals","aria-live":"polite",className:N("navds-fieldset__error")},d&&E.createElement($t,{size:c,showIcon:!0},e.error))))});var ol=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const Qt=E.createContext(null),ul=L.forwardRef((e,r)=>{var t,a,{children:n,className:l,name:i,defaultValue:s,value:d,onChange:f=()=>{},required:c,readOnly:v}=e,_=ol(e,["children","className","name","defaultValue","value","onChange","required","readOnly"]);const{cn:N}=J(),T=L.useContext(ua),D=Pe();return E.createElement(sl,Object.assign({},_,{readOnly:v,ref:r,className:N(l,"navds-radio-group",`navds-radio-group--${(a=(t=_.size)!==null&&t!==void 0?t:T?.size)!==null&&a!==void 0?a:"medium"}`),nativeReadOnly:!1}),E.createElement(Qt.Provider,{value:{name:i??`radioGroupName-${D}`,defaultValue:s,value:d,onChange:f,required:c}},E.createElement("div",{className:N("navds-radio-buttons")},n)))});var dl=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const cl=e=>{const r=L.useContext(Qt),t=xa(de(e,["description"]),"radio"),{inputProps:a,readOnly:n}=t,l=dl(t,["inputProps","readOnly"]);return r||console.warn("<Radio> must be used inside <RadioGroup>."),e?.required!==void 0&&console.warn("required is only supported on <RadioGroup>."),Object.assign(Object.assign({},l),{readOnly:n,inputProps:Object.assign(Object.assign({},a),{name:r?.name,defaultChecked:r?.defaultValue===void 0?void 0:r?.defaultValue===e.value,checked:r?.value===void 0?void 0:r?.value===e.value,onChange:i=>{var s,d;n||((s=e.onChange)===null||s===void 0||s.call(e,i),(d=r?.onChange)===null||d===void 0||d.call(r,e.value))},onClick:i=>{var s;if(n){i.preventDefault();return}(s=e?.onClick)===null||s===void 0||s.call(e,i)},required:r?.required,type:"radio"})})},ut=L.forwardRef((e,r)=>{const{cn:t}=J(),{inputProps:a,size:n,hasError:l,readOnly:i}=cl(e),s=Pe(),d=_a(!1);return d?.isDarkside?E.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${n}`,{"navds-radio--error":l,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},E.createElement("input",Object.assign({},de(e,["children","size","description","readOnly"]),de(a,["aria-invalid","aria-describedby"]),{"aria-describedby":ke(a["aria-describedby"],{[s]:e.description})||void 0,className:t("navds-radio__input"),ref:r})),E.createElement(Se,{as:"label",htmlFor:a.id,className:t("navds-radio__label"),size:n},e.children),e.description&&E.createElement(Se,{id:s,size:n,className:t("navds-form-field__subdescription navds-radio__description")},e.description)):E.createElement("div",{className:t(e.className,"navds-radio",`navds-radio--${n}`,{"navds-radio--error":l,"navds-radio--disabled":a.disabled,"navds-radio--readonly":i}),"data-color":l?"danger":e["data-color"]},E.createElement("input",Object.assign({},de(e,["children","size","description","readOnly"]),de(a,["aria-invalid"]),{className:t("navds-radio__input"),ref:r})),E.createElement("label",{htmlFor:a.id,className:t("navds-radio__label")},E.createElement("span",{className:t("navds-radio__content")},E.createElement(Se,{as:"span",size:n},e.children),e.description&&E.createElement(Se,{as:"span",size:n,className:t("navds-form-field__subdescription navds-radio__description")},e.description))))});var El=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const dt=(e,r,t)=>{const{outerHeightStyle:a,overflow:n}=r;return t.current<20&&(a>0&&Math.abs((e.outerHeightStyle||0)-a)>1||e.overflow!==n)?(t.current+=1,r):e},ct=e=>(e?.ownerDocument||document).defaultView||window;function la(e){return parseInt(e,10)||0}const ml=L.forwardRef((e,r)=>{var t,a,{className:n,onChange:l,maxRows:i,minRows:s=1,autoScrollbar:d,style:f,value:c}=e,v=El(e,["className","onChange","maxRows","minRows","autoScrollbar","style","value"]);const{current:_}=L.useRef(c!=null),N=L.useRef(null),T=Sr(N,r),D=L.useRef(null),g=L.useRef(0),[h,R]=L.useState({outerHeightStyle:0}),I=E.useCallback(()=>{const w=N.current,G=ct(w).getComputedStyle(w);if(G.width==="0px")return{outerHeightStyle:0};const M=D.current;M.style.width=G.width,M.value=w.value||v.placeholder||"x",M.value.slice(-1)===`
`&&(M.value+=" ");const x=G.boxSizing,A=la(G.paddingBottom)+la(G.paddingTop),p=la(G.borderBottomWidth)+la(G.borderTopWidth),V=M.scrollHeight-A;M.value="x";const q=M.scrollHeight-A;let j=V;s&&(j=Math.max(Number(s)*q,j)),i&&(j=Math.min(Number(i)*q,j)),j=Math.max(j,q);const X=j+(x==="border-box"?A+p:0),re=Math.abs(j-V)<=1;return{outerHeightStyle:X,overflow:re}},[i,s,v.placeholder]),F=()=>{const w=I();Et(w)||R(U=>dt(U,w,g))};at(()=>{const w=()=>{const A=I();Et(A)||Vr.flushSync(()=>{R(p=>dt(p,A,g))})},U=Ht(()=>{var A,p,V;if(g.current=0,!((A=N.current)===null||A===void 0)&&A.style.height||!((p=N.current)===null||p===void 0)&&p.style.width){((V=N.current)===null||V===void 0?void 0:V.style.overflow)==="hidden"&&R(q=>Object.assign(Object.assign({},q),{overflow:!1}));return}w()},166,!0),G=N.current,M=ct(G);M.addEventListener("resize",U);let x;return typeof ResizeObserver<"u"&&(x=new ResizeObserver(U),x.observe(G)),()=>{U.clear(),M.removeEventListener("resize",U),x&&x.disconnect()}},[I]),at(()=>{F()}),L.useEffect(()=>{g.current=0},[c]);const K=w=>{g.current=0,_||F(),l&&l(w)},C=Object.assign({"--__ac-textarea-height":h.outerHeightStyle+"px","--__axc-textarea-height":h.outerHeightStyle+"px",overflow:h.overflow&&!d&&!(!((t=N.current)===null||t===void 0)&&t.style.height)&&!(!((a=N.current)===null||a===void 0)&&a.style.width)?"hidden":void 0},f);return E.createElement(E.Fragment,null,E.createElement("textarea",Object.assign({value:c,onChange:K,ref:T,rows:s,style:C},v,{className:n})),E.createElement("textarea",{"aria-hidden":!0,className:n,readOnly:!0,ref:D,tabIndex:-1,style:Object.assign({visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"},f)}))});function Et(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflow}const fl=({maxLengthId:e,maxLength:r,currentLength:t,size:a,i18n:n})=>{const{cn:l}=J(),i=wa("Textarea",{charsLeft:n?.counterLeft?`{chars} ${n.counterLeft}`:void 0,charsTooMany:n?.counterTooMuch?`{chars} ${n.counterTooMuch}`:void 0}),s=r-t,[d,f]=L.useState(s);return L.useEffect(()=>{const c=Ht(()=>{f(s)},2e3);return c(),()=>{c.clear()}},[s]),E.createElement(E.Fragment,null,E.createElement("span",{id:e,className:l("navds-sr-only")},i("maxLength",{maxLength:r})),s<20&&E.createElement("span",{role:"status",className:l("navds-textarea__sr-counter navds-sr-only")},mt(d,i)),E.createElement(Se,{className:l("navds-textarea__counter",{"navds-textarea__counter--error":s<0}),size:a},mt(s,i)))},mt=(e,r)=>e<0?r("charsTooMany",{chars:Math.abs(e)}):r("charsLeft",{chars:e});var vl=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)r.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(t[a[n]]=e[a[n]]);return t};const _l=L.forwardRef((e,r)=>{var t,a,n;const{inputProps:l,errorId:i,showErrorMsg:s,hasError:d,size:f,inputDescriptionId:c}=xa(e,"textarea"),{label:v,className:_,description:N,maxLength:T,hideLabel:D=!1,resize:g,UNSAFE_autoScrollbar:h,i18n:R,readOnly:I}=e,F=vl(e,["label","className","description","maxLength","hideLabel","resize","UNSAFE_autoScrollbar","i18n","readOnly"]),{cn:K}=J(),C=Pe(),w=T!==void 0&&T>0,[U,G]=L.useState((t=e?.defaultValue)!==null&&t!==void 0?t:""),M=()=>{let A=F?.minRows?F?.minRows:3;return f==="small"&&(A=F?.minRows?F?.minRows:2),A},x=ke(l["aria-describedby"],{[C??""]:w});return E.createElement("div",{className:K(_,"navds-form-field",`navds-form-field--${f}`,{"navds-form-field--disabled":!!l.disabled,"navds-form-field--readonly":I,"navds-textarea--readonly":I,"navds-textarea--error":d,"navds-textarea--autoscrollbar":h,[`navds-textarea--resize-${g===!0?"both":g}`]:g})},E.createElement(Na,{htmlFor:l.id,size:f,className:K("navds-form-field__label",{"navds-sr-only":D})},I&&E.createElement(Yt,null),v),!!N&&E.createElement(Se,{className:K("navds-form-field__description",{"navds-sr-only":D}),id:c,size:f,as:"div"},N),E.createElement(ml,Object.assign({},de(F,["error","errorId","size"]),l,{onChange:Ga(e.onChange,e.value===void 0?A=>G(A.target.value):void 0),minRows:M(),autoScrollbar:h,ref:r,readOnly:I,className:K("navds-textarea__input","navds-body-short",`navds-body-short--${f??"medium"}`)},x?{"aria-describedby":x}:{})),w&&!I&&!l.disabled&&E.createElement(fl,{maxLengthId:C,maxLength:T,currentLength:(n=(a=e.value)===null||a===void 0?void 0:a.length)!==null&&n!==void 0?n:U.length,size:f,i18n:R}),E.createElement("div",{className:K("navds-form-field__error"),id:i,"aria-relevant":"additions removals","aria-live":"polite"},s&&E.createElement($t,{size:f,showIcon:!0},e.error)))});var Xe=e=>e.type==="checkbox",Oe=e=>e instanceof Date,ae=e=>e==null;const Xt=e=>typeof e=="object";var W=e=>!ae(e)&&!Array.isArray(e)&&Xt(e)&&!Oe(e),Zt=e=>W(e)&&e.target?Xe(e.target)?e.target.checked:e.target.value:e,gl=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,er=(e,r)=>e.has(gl(r)),Sl=e=>{const r=e.constructor&&e.constructor.prototype;return W(r)&&r.hasOwnProperty("isPrototypeOf")},Ua=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Q(e){let r;const t=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)r=new Date(e);else if(!(Ua&&(e instanceof Blob||a))&&(t||W(e)))if(r=t?[]:Object.create(Object.getPrototypeOf(e)),!t&&!Sl(e))r=e;else for(const n in e)e.hasOwnProperty(n)&&(r[n]=Q(e[n]));else return e;return r}var ya=e=>/^\w*$/.test(e),Y=e=>e===void 0,qa=e=>Array.isArray(e)?e.filter(Boolean):[],Ba=e=>qa(e.replace(/["|']|\]/g,"").split(/\.|\[/)),O=(e,r,t)=>{if(!r||!W(e))return t;const a=(ya(r)?[r]:Ba(r)).reduce((n,l)=>ae(n)?n:n[l],e);return Y(a)||a===e?Y(e[r])?t:e[r]:a},se=e=>typeof e=="boolean",H=(e,r,t)=>{let a=-1;const n=ya(r)?[r]:Ba(r),l=n.length,i=l-1;for(;++a<l;){const s=n[a];let d=t;if(a!==i){const f=e[s];d=W(f)||Array.isArray(f)?f:isNaN(+n[a+1])?{}:[]}if(s==="__proto__"||s==="constructor"||s==="prototype")return;e[s]=d,e=e[s]}};const Ea={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ce={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ve={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ca=E.createContext(null);Ca.displayName="HookFormContext";const Ke=()=>E.useContext(Ca),Nl=e=>{const{children:r,...t}=e;return E.createElement(Ca.Provider,{value:t},r)};var ar=(e,r,t,a=!0)=>{const n={defaultValues:r._defaultValues};for(const l in e)Object.defineProperty(n,l,{get:()=>{const i=l;return r._proxyFormState[i]!==ce.all&&(r._proxyFormState[i]=!a||ce.all),t&&(t[i]=!0),e[i]}});return n};const $a=typeof window<"u"?E.useLayoutEffect:E.useEffect;function yl(e){const r=Ke(),{control:t=r.control,disabled:a,name:n,exact:l}=e||{},[i,s]=E.useState(t._formState),d=E.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,validatingFields:!1,isValidating:!1,isValid:!1,errors:!1});return $a(()=>t._subscribe({name:n,formState:d.current,exact:l,callback:f=>{!a&&s({...t._formState,...f})}}),[n,a,l]),E.useEffect(()=>{d.current.isValid&&t._setValid(!0)},[t]),E.useMemo(()=>ar(i,t,d.current,!1),[i,t])}var oe=e=>typeof e=="string",tr=(e,r,t,a,n)=>oe(e)?(a&&r.watch.add(e),O(t,e,n)):Array.isArray(e)?e.map(l=>(a&&r.watch.add(l),O(t,l))):(a&&(r.watchAll=!0),t),ka=e=>ae(e)||!Xt(e);function ge(e,r,t=new WeakSet){if(ka(e)||ka(r))return e===r;if(Oe(e)&&Oe(r))return e.getTime()===r.getTime();const a=Object.keys(e),n=Object.keys(r);if(a.length!==n.length)return!1;if(t.has(e)||t.has(r))return!0;t.add(e),t.add(r);for(const l of a){const i=e[l];if(!n.includes(l))return!1;if(l!=="ref"){const s=r[l];if(Oe(i)&&Oe(s)||W(i)&&W(s)||Array.isArray(i)&&Array.isArray(s)?!ge(i,s,t):i!==s)return!1}}return!0}function Tl(e){const r=Ke(),{control:t=r.control,name:a,defaultValue:n,disabled:l,exact:i,compute:s}=e||{},d=E.useRef(n),f=E.useRef(s),c=E.useRef(void 0);f.current=s;const v=E.useMemo(()=>t._getWatch(a,d.current),[t,a]),[_,N]=E.useState(f.current?f.current(v):v);return $a(()=>t._subscribe({name:a,formState:{values:!0},exact:i,callback:T=>{if(!l){const D=tr(a,t._names,T.values||t._formValues,!1,d.current);if(f.current){const g=f.current(D);ge(g,c.current)||(N(g),c.current=g)}else N(D)}}}),[t,l,a,i]),E.useEffect(()=>t._removeUnmounted()),_}function rr(e){const r=Ke(),{name:t,disabled:a,control:n=r.control,shouldUnregister:l,defaultValue:i}=e,s=er(n._names.array,t),d=E.useMemo(()=>O(n._formValues,t,O(n._defaultValues,t,i)),[n,t,i]),f=Tl({control:n,name:t,defaultValue:d,exact:!0}),c=yl({control:n,name:t,exact:!0}),v=E.useRef(e),_=E.useRef(void 0),N=E.useRef(n.register(t,{...e.rules,value:f,...se(e.disabled)?{disabled:e.disabled}:{}}));v.current=e;const T=E.useMemo(()=>Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!O(c.errors,t)},isDirty:{enumerable:!0,get:()=>!!O(c.dirtyFields,t)},isTouched:{enumerable:!0,get:()=>!!O(c.touchedFields,t)},isValidating:{enumerable:!0,get:()=>!!O(c.validatingFields,t)},error:{enumerable:!0,get:()=>O(c.errors,t)}}),[c,t]),D=E.useCallback(I=>N.current.onChange({target:{value:Zt(I),name:t},type:Ea.CHANGE}),[t]),g=E.useCallback(()=>N.current.onBlur({target:{value:O(n._formValues,t),name:t},type:Ea.BLUR}),[t,n._formValues]),h=E.useCallback(I=>{const F=O(n._fields,t);F&&I&&(F._f.ref={focus:()=>I.focus&&I.focus(),select:()=>I.select&&I.select(),setCustomValidity:K=>I.setCustomValidity(K),reportValidity:()=>I.reportValidity()})},[n._fields,t]),R=E.useMemo(()=>({name:t,value:f,...se(a)||c.disabled?{disabled:c.disabled||a}:{},onChange:D,onBlur:g,ref:h}),[t,a,c.disabled,D,g,h,f]);return E.useEffect(()=>{const I=n._options.shouldUnregister||l,F=_.current;F&&F!==t&&!s&&n.unregister(F),n.register(t,{...v.current.rules,...se(v.current.disabled)?{disabled:v.current.disabled}:{}});const K=(C,w)=>{const U=O(n._fields,C);U&&U._f&&(U._f.mount=w)};if(K(t,!0),I){const C=Q(O(n._options.defaultValues,t));H(n._defaultValues,t,C),Y(O(n._formValues,t))&&H(n._formValues,t,C)}return!s&&n.register(t),_.current=t,()=>{(s?I&&!n._state.action:I)?n.unregister(t):K(t,!1)}},[t,n,s,l]),E.useEffect(()=>{n._setDisabledField({disabled:a,name:t})},[a,t,n]),E.useMemo(()=>({field:R,formState:c,fieldState:T}),[R,c,T])}var Rl=(e,r,t,a,n)=>r?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:n||!0}}:{},Je=e=>Array.isArray(e)?e:[e],ft=()=>{let e=[];return{get observers(){return e},next:n=>{for(const l of e)l.next&&l.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(l=>l!==n)}}),unsubscribe:()=>{e=[]}}};function nr(e,r){const t={};for(const a in e)if(e.hasOwnProperty(a)){const n=e[a],l=r[a];if(n&&W(n)&&l){const i=nr(n,l);W(i)&&(t[a]=i)}else e[a]&&(t[a]=l)}return t}var ie=e=>W(e)&&!Object.keys(e).length,Ha=e=>e.type==="file",Ee=e=>typeof e=="function",ma=e=>{if(!Ua)return!1;const r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},lr=e=>e.type==="select-multiple",Ja=e=>e.type==="radio",pl=e=>Ja(e)||Xe(e),Aa=e=>ma(e)&&e.isConnected;function Ol(e,r){const t=r.slice(0,-1).length;let a=0;for(;a<t;)e=Y(e)?a++:e[r[a++]];return e}function Dl(e){for(const r in e)if(e.hasOwnProperty(r)&&!Y(e[r]))return!1;return!0}function z(e,r){const t=Array.isArray(r)?r:ya(r)?[r]:Ba(r),a=t.length===1?e:Ol(e,t),n=t.length-1,l=t[n];return a&&delete a[l],n!==0&&(W(a)&&ie(a)||Array.isArray(a)&&Dl(a))&&z(e,t.slice(0,-1)),e}var bl=e=>{for(const r in e)if(Ee(e[r]))return!0;return!1};function ir(e){return Array.isArray(e)||W(e)&&!bl(e)}function Fa(e,r={}){for(const t in e)ir(e[t])?(r[t]=Array.isArray(e[t])?[]:{},Fa(e[t],r[t])):ae(e[t])||(r[t]=!0);return r}function Le(e,r,t){t||(t=Fa(r));for(const a in e)ir(e[a])?Y(r)||ka(t[a])?t[a]=Fa(e[a],Array.isArray(e[a])?[]:{}):Le(e[a],ae(r)?{}:r[a],t[a]):t[a]=!ge(e[a],r[a]);return t}const vt={value:!1,isValid:!1},_t={value:!0,isValid:!0};var sr=e=>{if(Array.isArray(e)){if(e.length>1){const r=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!Y(e[0].attributes.value)?Y(e[0].value)||e[0].value===""?_t:{value:e[0].value,isValid:!0}:_t:vt}return vt},or=(e,{valueAsNumber:r,valueAsDate:t,setValueAs:a})=>Y(e)?e:r?e===""?NaN:e&&+e:t&&oe(e)?new Date(e):a?a(e):e;const gt={isValid:!1,value:null};var ur=e=>Array.isArray(e)?e.reduce((r,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:r,gt):gt;function St(e){const r=e.ref;return Ha(r)?r.files:Ja(r)?ur(e.refs).value:lr(r)?[...r.selectedOptions].map(({value:t})=>t):Xe(r)?sr(e.refs).value:or(Y(r.value)?e.ref.value:r.value,e)}var Al=(e,r,t,a)=>{const n={};for(const l of e){const i=O(r,l);i&&H(n,l,i._f)}return{criteriaMode:t,names:[...e],fields:n,shouldUseNativeValidation:a}},fa=e=>e instanceof RegExp,Ce=e=>Y(e)?e:fa(e)?e.source:W(e)?fa(e.value)?e.value.source:e.value:e,Nt=e=>({isOnSubmit:!e||e===ce.onSubmit,isOnBlur:e===ce.onBlur,isOnChange:e===ce.onChange,isOnAll:e===ce.all,isOnTouch:e===ce.onTouched});const yt="AsyncFunction";var hl=e=>!!e&&!!e.validate&&!!(Ee(e.validate)&&e.validate.constructor.name===yt||W(e.validate)&&Object.values(e.validate).find(r=>r.constructor.name===yt)),Il=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),Tt=(e,r,t)=>!t&&(r.watchAll||r.watch.has(e)||[...r.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const Ye=(e,r,t,a)=>{for(const n of t||Object.keys(e)){const l=O(e,n);if(l){const{_f:i,...s}=l;if(i){if(i.refs&&i.refs[0]&&r(i.refs[0],n)&&!a)return!0;if(i.ref&&r(i.ref,i.name)&&!a)return!0;if(Ye(s,r))break}else if(W(s)&&Ye(s,r))break}}};function Rt(e,r,t){const a=O(e,t);if(a||ya(t))return{error:a,name:t};const n=t.split(".");for(;n.length;){const l=n.join("."),i=O(r,l),s=O(e,l);if(i&&!Array.isArray(i)&&t!==l)return{name:t};if(s&&s.type)return{name:l,error:s};if(s&&s.root&&s.root.type)return{name:`${l}.root`,error:s.root};n.pop()}return{name:t}}var Ll=(e,r,t,a)=>{t(e);const{name:n,...l}=e;return ie(l)||Object.keys(l).length>=Object.keys(r).length||Object.keys(l).find(i=>r[i]===(!a||ce.all))},kl=(e,r,t)=>!e||!r||e===r||Je(e).some(a=>a&&(t?a===r:a.startsWith(r)||r.startsWith(a))),Fl=(e,r,t,a,n)=>n.isOnAll?!1:!t&&n.isOnTouch?!(r||e):(t?a.isOnBlur:n.isOnBlur)?!e:(t?a.isOnChange:n.isOnChange)?e:!0,Pl=(e,r)=>!qa(O(e,r)).length&&z(e,r),Kl=(e,r,t)=>{const a=Je(O(e,t));return H(a,"root",r[t]),H(e,t,a),e};function pt(e,r,t="validate"){if(oe(e)||Array.isArray(e)&&e.every(oe)||se(e)&&!e)return{type:t,message:oe(e)?e:"",ref:r}}var Ie=e=>W(e)&&!fa(e)?e:{value:e,message:""},Ot=async(e,r,t,a,n,l)=>{const{ref:i,refs:s,required:d,maxLength:f,minLength:c,min:v,max:_,pattern:N,validate:T,name:D,valueAsNumber:g,mount:h}=e._f,R=O(t,D);if(!h||r.has(D))return{};const I=s?s[0]:i,F=A=>{n&&I.reportValidity&&(I.setCustomValidity(se(A)?"":A||""),I.reportValidity())},K={},C=Ja(i),w=Xe(i),U=C||w,G=(g||Ha(i))&&Y(i.value)&&Y(R)||ma(i)&&i.value===""||R===""||Array.isArray(R)&&!R.length,M=Rl.bind(null,D,a,K),x=(A,p,V,q=ve.maxLength,j=ve.minLength)=>{const X=A?p:V;K[D]={type:A?q:j,message:X,ref:i,...M(A?q:j,X)}};if(l?!Array.isArray(R)||!R.length:d&&(!U&&(G||ae(R))||se(R)&&!R||w&&!sr(s).isValid||C&&!ur(s).isValid)){const{value:A,message:p}=oe(d)?{value:!!d,message:d}:Ie(d);if(A&&(K[D]={type:ve.required,message:p,ref:I,...M(ve.required,p)},!a))return F(p),K}if(!G&&(!ae(v)||!ae(_))){let A,p;const V=Ie(_),q=Ie(v);if(!ae(R)&&!isNaN(R)){const j=i.valueAsNumber||R&&+R;ae(V.value)||(A=j>V.value),ae(q.value)||(p=j<q.value)}else{const j=i.valueAsDate||new Date(R),X=fe=>new Date(new Date().toDateString()+" "+fe),re=i.type=="time",ne=i.type=="week";oe(V.value)&&R&&(A=re?X(R)>X(V.value):ne?R>V.value:j>new Date(V.value)),oe(q.value)&&R&&(p=re?X(R)<X(q.value):ne?R<q.value:j<new Date(q.value))}if((A||p)&&(x(!!A,V.message,q.message,ve.max,ve.min),!a))return F(K[D].message),K}if((f||c)&&!G&&(oe(R)||l&&Array.isArray(R))){const A=Ie(f),p=Ie(c),V=!ae(A.value)&&R.length>+A.value,q=!ae(p.value)&&R.length<+p.value;if((V||q)&&(x(V,A.message,p.message),!a))return F(K[D].message),K}if(N&&!G&&oe(R)){const{value:A,message:p}=Ie(N);if(fa(A)&&!R.match(A)&&(K[D]={type:ve.pattern,message:p,ref:i,...M(ve.pattern,p)},!a))return F(p),K}if(T){if(Ee(T)){const A=await T(R,t),p=pt(A,I);if(p&&(K[D]={...p,...M(ve.validate,p.message)},!a))return F(p.message),K}else if(W(T)){let A={};for(const p in T){if(!ie(A)&&!a)break;const V=pt(await T[p](R,t),I,p);V&&(A={...V,...M(p,V.message)},F(V.message),a&&(K[D]=A))}if(!ie(A)&&(K[D]={ref:I,...A},!a))return K}}return F(!0),K};const Vl={mode:ce.onSubmit,reValidateMode:ce.onChange,shouldFocusError:!0};function Gl(e={}){let r={...Vl,...e},t={submitCount:0,isDirty:!1,isReady:!1,isLoading:Ee(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},a={},n=W(r.defaultValues)||W(r.values)?Q(r.defaultValues||r.values)||{}:{},l=r.shouldUnregister?{}:Q(n),i={action:!1,mount:!1,watch:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},d,f=0;const c={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1};let v={...c};const _={array:ft(),state:ft()},N=r.criteriaMode===ce.all,T=o=>u=>{clearTimeout(f),f=setTimeout(o,u)},D=async o=>{if(!r.disabled&&(c.isValid||v.isValid||o)){const u=r.resolver?ie((await w()).errors):await G(a,!0);u!==t.isValid&&_.state.next({isValid:u})}},g=(o,u)=>{!r.disabled&&(c.isValidating||c.validatingFields||v.isValidating||v.validatingFields)&&((o||Array.from(s.mount)).forEach(m=>{m&&(u?H(t.validatingFields,m,u):z(t.validatingFields,m))}),_.state.next({validatingFields:t.validatingFields,isValidating:!ie(t.validatingFields)}))},h=(o,u=[],m,b,y=!0,S=!0)=>{if(b&&m&&!r.disabled){if(i.action=!0,S&&Array.isArray(O(a,o))){const k=m(O(a,o),b.argA,b.argB);y&&H(a,o,k)}if(S&&Array.isArray(O(t.errors,o))){const k=m(O(t.errors,o),b.argA,b.argB);y&&H(t.errors,o,k),Pl(t.errors,o)}if((c.touchedFields||v.touchedFields)&&S&&Array.isArray(O(t.touchedFields,o))){const k=m(O(t.touchedFields,o),b.argA,b.argB);y&&H(t.touchedFields,o,k)}(c.dirtyFields||v.dirtyFields)&&(t.dirtyFields=Le(n,l)),_.state.next({name:o,isDirty:x(o,u),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else H(l,o,u)},R=(o,u)=>{H(t.errors,o,u),_.state.next({errors:t.errors})},I=o=>{t.errors=o,_.state.next({errors:t.errors,isValid:!1})},F=(o,u,m,b)=>{const y=O(a,o);if(y){const S=O(l,o,Y(m)?O(n,o):m);Y(S)||b&&b.defaultChecked||u?H(l,o,u?S:St(y._f)):V(o,S),i.mount&&D()}},K=(o,u,m,b,y)=>{let S=!1,k=!1;const B={name:o};if(!r.disabled){if(!m||b){(c.isDirty||v.isDirty)&&(k=t.isDirty,t.isDirty=B.isDirty=x(),S=k!==B.isDirty);const $=ge(O(n,o),u);k=!!O(t.dirtyFields,o),$?z(t.dirtyFields,o):H(t.dirtyFields,o,!0),B.dirtyFields=t.dirtyFields,S=S||(c.dirtyFields||v.dirtyFields)&&k!==!$}if(m){const $=O(t.touchedFields,o);$||(H(t.touchedFields,o,m),B.touchedFields=t.touchedFields,S=S||(c.touchedFields||v.touchedFields)&&$!==m)}S&&y&&_.state.next(B)}return S?B:{}},C=(o,u,m,b)=>{const y=O(t.errors,o),S=(c.isValid||v.isValid)&&se(u)&&t.isValid!==u;if(r.delayError&&m?(d=T(()=>R(o,m)),d(r.delayError)):(clearTimeout(f),d=null,m?H(t.errors,o,m):z(t.errors,o)),(m?!ge(y,m):y)||!ie(b)||S){const k={...b,...S&&se(u)?{isValid:u}:{},errors:t.errors,name:o};t={...t,...k},_.state.next(k)}},w=async o=>{g(o,!0);const u=await r.resolver(l,r.context,Al(o||s.mount,a,r.criteriaMode,r.shouldUseNativeValidation));return g(o),u},U=async o=>{const{errors:u}=await w(o);if(o)for(const m of o){const b=O(u,m);b?H(t.errors,m,b):z(t.errors,m)}else t.errors=u;return u},G=async(o,u,m={valid:!0})=>{for(const b in o){const y=o[b];if(y){const{_f:S,...k}=y;if(S){const B=s.array.has(S.name),$=y._f&&hl(y._f);$&&c.validatingFields&&g([S.name],!0);const ue=await Ot(y,s.disabled,l,N,r.shouldUseNativeValidation&&!u,B);if($&&c.validatingFields&&g([S.name]),ue[S.name]&&(m.valid=!1,u))break;!u&&(O(ue,S.name)?B?Kl(t.errors,ue,S.name):H(t.errors,S.name,ue[S.name]):z(t.errors,S.name))}!ie(k)&&await G(k,u,m)}}return m.valid},M=()=>{for(const o of s.unMount){const u=O(a,o);u&&(u._f.refs?u._f.refs.every(m=>!Aa(m)):!Aa(u._f.ref))&&we(o)}s.unMount=new Set},x=(o,u)=>!r.disabled&&(o&&u&&H(l,o,u),!ge(fe(),n)),A=(o,u,m)=>tr(o,s,{...i.mount?l:Y(u)?n:oe(o)?{[o]:u}:u},m,u),p=o=>qa(O(i.mount?l:n,o,r.shouldUnregister?O(n,o,[]):[])),V=(o,u,m={})=>{const b=O(a,o);let y=u;if(b){const S=b._f;S&&(!S.disabled&&H(l,o,or(u,S)),y=ma(S.ref)&&ae(u)?"":u,lr(S.ref)?[...S.ref.options].forEach(k=>k.selected=y.includes(k.value)):S.refs?Xe(S.ref)?S.refs.forEach(k=>{(!k.defaultChecked||!k.disabled)&&(Array.isArray(y)?k.checked=!!y.find(B=>B===k.value):k.checked=y===k.value||!!y)}):S.refs.forEach(k=>k.checked=k.value===y):Ha(S.ref)?S.ref.value="":(S.ref.value=y,S.ref.type||_.state.next({name:o,values:Q(l)})))}(m.shouldDirty||m.shouldTouch)&&K(o,y,m.shouldTouch,m.shouldDirty,!0),m.shouldValidate&&ne(o)},q=(o,u,m)=>{for(const b in u){if(!u.hasOwnProperty(b))return;const y=u[b],S=o+"."+b,k=O(a,S);(s.array.has(o)||W(y)||k&&!k._f)&&!Oe(y)?q(S,y,m):V(S,y,m)}},j=(o,u,m={})=>{const b=O(a,o),y=s.array.has(o),S=Q(u);H(l,o,S),y?(_.array.next({name:o,values:Q(l)}),(c.isDirty||c.dirtyFields||v.isDirty||v.dirtyFields)&&m.shouldDirty&&_.state.next({name:o,dirtyFields:Le(n,l),isDirty:x(o,S)})):b&&!b._f&&!ae(S)?q(o,S,m):V(o,S,m),Tt(o,s)&&_.state.next({...t,name:o}),_.state.next({name:i.mount?o:void 0,values:Q(l)})},X=async o=>{i.mount=!0;const u=o.target;let m=u.name,b=!0;const y=O(a,m),S=$=>{b=Number.isNaN($)||Oe($)&&isNaN($.getTime())||ge($,O(l,m,$))},k=Nt(r.mode),B=Nt(r.reValidateMode);if(y){let $,ue;const na=u.type?St(y._f):Zt(o),Ne=o.type===Ea.BLUR||o.type===Ea.FOCUS_OUT,vr=!Il(y._f)&&!r.resolver&&!O(t.errors,m)&&!y._f.deps||Fl(Ne,O(t.touchedFields,m),t.isSubmitted,B,k),pa=Tt(m,s,Ne);H(l,m,na),Ne?(!u||!u.readOnly)&&(y._f.onBlur&&y._f.onBlur(o),d&&d(0)):y._f.onChange&&y._f.onChange(o);const Oa=K(m,na,Ne),_r=!ie(Oa)||pa;if(!Ne&&_.state.next({name:m,type:o.type,values:Q(l)}),vr)return(c.isValid||v.isValid)&&(r.mode==="onBlur"?Ne&&D():Ne||D()),_r&&_.state.next({name:m,...pa?{}:Oa});if(!Ne&&pa&&_.state.next({...t}),r.resolver){const{errors:za}=await w([m]);if(S(na),b){const gr=Rt(t.errors,a,m),Wa=Rt(za,a,gr.name||m);$=Wa.error,m=Wa.name,ue=ie(za)}}else g([m],!0),$=(await Ot(y,s.disabled,l,N,r.shouldUseNativeValidation))[m],g([m]),S(na),b&&($?ue=!1:(c.isValid||v.isValid)&&(ue=await G(a,!0)));b&&(y._f.deps&&(!Array.isArray(y._f.deps)||y._f.deps.length>0)&&ne(y._f.deps),C(m,ue,$,Oa))}},re=(o,u)=>{if(O(t.errors,u)&&o.focus)return o.focus(),1},ne=async(o,u={})=>{let m,b;const y=Je(o);if(r.resolver){const S=await U(Y(o)?o:y);m=ie(S),b=o?!y.some(k=>O(S,k)):m}else o?(b=(await Promise.all(y.map(async S=>{const k=O(a,S);return await G(k&&k._f?{[S]:k}:k)}))).every(Boolean),!(!b&&!t.isValid)&&D()):b=m=await G(a);return _.state.next({...!oe(o)||(c.isValid||v.isValid)&&m!==t.isValid?{}:{name:o},...r.resolver||!o?{isValid:m}:{},errors:t.errors}),u.shouldFocus&&!b&&Ye(a,re,o?y:s.mount),b},fe=(o,u)=>{let m={...i.mount?l:n};return u&&(m=nr(u.dirtyFields?t.dirtyFields:t.touchedFields,m)),Y(o)?m:oe(o)?O(m,o):o.map(b=>O(m,b))},ee=(o,u)=>({invalid:!!O((u||t).errors,o),isDirty:!!O((u||t).dirtyFields,o),error:O((u||t).errors,o),isValidating:!!O(t.validatingFields,o),isTouched:!!O((u||t).touchedFields,o)}),Ge=o=>{o&&Je(o).forEach(u=>z(t.errors,u)),_.state.next({errors:o?t.errors:{}})},ye=(o,u,m)=>{const b=(O(a,o,{_f:{}})._f||{}).ref,y=O(t.errors,o)||{},{ref:S,message:k,type:B,...$}=y;H(t.errors,o,{...$,...u,ref:b}),_.state.next({name:o,errors:t.errors,isValid:!1}),m&&m.shouldFocus&&b&&b.focus&&b.focus()},Ta=(o,u)=>Ee(o)?_.state.subscribe({next:m=>"values"in m&&o(A(void 0,u),m)}):A(o,u,!0),aa=o=>_.state.subscribe({next:u=>{kl(o.name,u.name,o.exact)&&Ll(u,o.formState||c,Ue,o.reRenderRoot)&&o.callback({values:{...l},...t,...u,defaultValues:n})}}).unsubscribe,Ra=o=>(i.mount=!0,v={...v,...o.formState},aa({...o,formState:v})),we=(o,u={})=>{for(const m of o?Je(o):s.mount)s.mount.delete(m),s.array.delete(m),u.keepValue||(z(a,m),z(l,m)),!u.keepError&&z(t.errors,m),!u.keepDirty&&z(t.dirtyFields,m),!u.keepTouched&&z(t.touchedFields,m),!u.keepIsValidating&&z(t.validatingFields,m),!r.shouldUnregister&&!u.keepDefaultValue&&z(n,m);_.state.next({values:Q(l)}),_.state.next({...t,...u.keepDirty?{isDirty:x()}:{}}),!u.keepIsValid&&D()},ta=({disabled:o,name:u})=>{(se(o)&&i.mount||o||s.disabled.has(u))&&(o?s.disabled.add(u):s.disabled.delete(u))},De=(o,u={})=>{let m=O(a,o);const b=se(u.disabled)||se(r.disabled);return H(a,o,{...m||{},_f:{...m&&m._f?m._f:{ref:{name:o}},name:o,mount:!0,...u}}),s.mount.add(o),m?ta({disabled:se(u.disabled)?u.disabled:r.disabled,name:o}):F(o,!0,u.value),{...b?{disabled:u.disabled||r.disabled}:{},...r.progressive?{required:!!u.required,min:Ce(u.min),max:Ce(u.max),minLength:Ce(u.minLength),maxLength:Ce(u.maxLength),pattern:Ce(u.pattern)}:{},name:o,onChange:X,onBlur:X,ref:y=>{if(y){De(o,u),m=O(a,o);const S=Y(y.value)&&y.querySelectorAll&&y.querySelectorAll("input,select,textarea")[0]||y,k=pl(S),B=m._f.refs||[];if(k?B.find($=>$===S):S===m._f.ref)return;H(a,o,{_f:{...m._f,...k?{refs:[...B.filter(Aa),S,...Array.isArray(O(n,o))?[{}]:[]],ref:{type:S.type,name:o}}:{ref:S}}}),F(o,!1,void 0,S)}else m=O(a,o,{}),m._f&&(m._f.mount=!1),(r.shouldUnregister||u.shouldUnregister)&&!(er(s.array,o)&&i.action)&&s.unMount.add(o)}}},be=()=>r.shouldFocusError&&Ye(a,re,s.mount),xe=o=>{se(o)&&(_.state.next({disabled:o}),Ye(a,(u,m)=>{const b=O(a,m);b&&(u.disabled=b._f.disabled||o,Array.isArray(b._f.refs)&&b._f.refs.forEach(y=>{y.disabled=b._f.disabled||o}))},0,!1))},Ae=(o,u)=>async m=>{let b;m&&(m.preventDefault&&m.preventDefault(),m.persist&&m.persist());let y=Q(l);if(_.state.next({isSubmitting:!0}),r.resolver){const{errors:S,values:k}=await w();t.errors=S,y=Q(k)}else await G(a);if(s.disabled.size)for(const S of s.disabled)z(y,S);if(z(t.errors,"root"),ie(t.errors)){_.state.next({errors:{}});try{await o(y,m)}catch(S){b=S}}else u&&await u({...t.errors},m),be(),setTimeout(be);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ie(t.errors)&&!b,submitCount:t.submitCount+1,errors:t.errors}),b)throw b},Me=(o,u={})=>{O(a,o)&&(Y(u.defaultValue)?j(o,Q(O(n,o))):(j(o,u.defaultValue),H(n,o,Q(u.defaultValue))),u.keepTouched||z(t.touchedFields,o),u.keepDirty||(z(t.dirtyFields,o),t.isDirty=u.defaultValue?x(o,Q(O(n,o))):x()),u.keepError||(z(t.errors,o),c.isValid&&D()),_.state.next({...t}))},Te=(o,u={})=>{const m=o?Q(o):n,b=Q(m),y=ie(o),S=y?n:b;if(u.keepDefaultValues||(n=m),!u.keepValues){if(u.keepDirtyValues){const k=new Set([...s.mount,...Object.keys(Le(n,l))]);for(const B of Array.from(k))O(t.dirtyFields,B)?H(S,B,O(l,B)):j(B,O(S,B))}else{if(Ua&&Y(o))for(const k of s.mount){const B=O(a,k);if(B&&B._f){const $=Array.isArray(B._f.refs)?B._f.refs[0]:B._f.ref;if(ma($)){const ue=$.closest("form");if(ue){ue.reset();break}}}}if(u.keepFieldsRef)for(const k of s.mount)j(k,O(S,k));else a={}}l=r.shouldUnregister?u.keepDefaultValues?Q(n):{}:Q(S),_.array.next({values:{...S}}),_.state.next({values:{...S}})}s={mount:u.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},i.mount=!c.isValid||!!u.keepIsValid||!!u.keepDirtyValues,i.watch=!!r.shouldUnregister,_.state.next({submitCount:u.keepSubmitCount?t.submitCount:0,isDirty:y?!1:u.keepDirty?t.isDirty:!!(u.keepDefaultValues&&!ge(o,n)),isSubmitted:u.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:y?{}:u.keepDirtyValues?u.keepDefaultValues&&l?Le(n,l):t.dirtyFields:u.keepDefaultValues&&o?Le(n,o):u.keepDirty?t.dirtyFields:{},touchedFields:u.keepTouched?t.touchedFields:{},errors:u.keepErrors?t.errors:{},isSubmitSuccessful:u.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:n})},Re=(o,u)=>Te(Ee(o)?o(l):o,u),je=(o,u={})=>{const m=O(a,o),b=m&&m._f;if(b){const y=b.refs?b.refs[0]:b.ref;y.focus&&(y.focus(),u.shouldSelect&&Ee(y.select)&&y.select())}},Ue=o=>{t={...t,...o}},he={control:{register:De,unregister:we,getFieldState:ee,handleSubmit:Ae,setError:ye,_subscribe:aa,_runSchema:w,_focusError:be,_getWatch:A,_getDirty:x,_setValid:D,_setFieldArray:h,_setDisabledField:ta,_setErrors:I,_getFieldArray:p,_reset:Te,_resetDefaultValues:()=>Ee(r.defaultValues)&&r.defaultValues().then(o=>{Re(o,r.resetOptions),_.state.next({isLoading:!1})}),_removeUnmounted:M,_disableForm:xe,_subjects:_,_proxyFormState:c,get _fields(){return a},get _formValues(){return l},get _state(){return i},set _state(o){i=o},get _defaultValues(){return n},get _names(){return s},set _names(o){s=o},get _formState(){return t},get _options(){return r},set _options(o){r={...r,...o}}},subscribe:Ra,trigger:ne,register:De,handleSubmit:Ae,watch:Ta,setValue:j,getValues:fe,reset:Re,resetField:Me,clearErrors:Ge,unregister:we,setError:ye,setFocus:je,getFieldState:ee};return{...he,formControl:he}}function wl(e={}){const r=E.useRef(void 0),t=E.useRef(void 0),[a,n]=E.useState({isDirty:!1,isValidating:!1,isLoading:Ee(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:Ee(e.defaultValues)?void 0:e.defaultValues});if(!r.current)if(e.formControl)r.current={...e.formControl,formState:a},e.defaultValues&&!Ee(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{const{formControl:i,...s}=Gl(e);r.current={...s,formState:a}}const l=r.current.control;return l._options=e,$a(()=>{const i=l._subscribe({formState:l._proxyFormState,callback:()=>n({...l._formState}),reRenderRoot:!0});return n(s=>({...s,isReady:!0})),l._formState.isReady=!0,i},[l]),E.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),E.useEffect(()=>{e.mode&&(l._options.mode=e.mode),e.reValidateMode&&(l._options.reValidateMode=e.reValidateMode)},[l,e.mode,e.reValidateMode]),E.useEffect(()=>{e.errors&&(l._setErrors(e.errors),l._focusError())},[l,e.errors]),E.useEffect(()=>{e.shouldUnregister&&l._subjects.state.next({values:l._getWatch()})},[l,e.shouldUnregister]),E.useEffect(()=>{if(l._proxyFormState.isDirty){const i=l._getDirty();i!==a.isDirty&&l._subjects.state.next({isDirty:i})}},[l,a.isDirty]),E.useEffect(()=>{e.values&&!ge(e.values,t.current)?(l._reset(e.values,{keepFieldsRef:!0,...l._options.resetOptions}),t.current=e.values,n(i=>({...i}))):l._resetDefaultValues()},[l,e.values]),E.useEffect(()=>{l._state.mount||(l._setValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),r.current.formState=ar(a,l),r.current}function xl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dt={exports:{}},$e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bt;function Ml(){if(bt)return $e;bt=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(a,n,l){var i=null;if(l!==void 0&&(i=""+l),n.key!==void 0&&(i=""+n.key),"key"in n){l={};for(var s in n)s!=="key"&&(l[s]=n[s])}else l=n;return n=l.ref,{$$typeof:e,type:a,key:i,ref:n!==void 0?n:null,props:l}}return $e.Fragment=r,$e.jsx=t,$e.jsxs=t,$e}var At;function jl(){return At||(At=1,Dt.exports=Ml()),Dt.exports}var va=jl();const Ze={"HelpText.Aksjonspunkt":"Aksjonspunkt","HelpText.Aksjonspunkt.BehandletAksjonspunkt":"Behandlet aksjonspunkt: ","DataFetchPendingModal.LosningenJobberMedBehandlingen":"Løsningen jobber med behandlingen...","Behandling.EditedField":"Saksbehandler har endret feltets verdi","OkAvbrytModal.Ok":"OK","OkAvbrytModal.Avbryt":"Avbryt","OverstyringKnapp.Overstyring":"Overstyr","OverstyringKnapp.HarOverstyrt":"Har overstyrt","PeriodFieldArray.LeggTilPeriode":"Legg til periode","ExpandableTableRow.Apne":"Åpne rad","ExpandableTableRow.Lukke":"Lukk rad","Calendar.Day.0":"søndag","Calendar.Day.1":"mandag","Calendar.Day.2":"tirsdag","Calendar.Day.3":"onsdag","Calendar.Day.4":"torsdag","Calendar.Day.5":"fredag","Calendar.Day.6":"lørdag","Calendar.Day.Short.0":"søn","Calendar.Day.Short.1":"man","Calendar.Day.Short.2":"tir","Calendar.Day.Short.3":"ons","Calendar.Day.Short.4":"tor","Calendar.Day.Short.5":"fre","Calendar.Day.Short.6":"lør","Calendar.Month.0":"Januar","Calendar.Month.1":"Februar","Calendar.Month.2":"Mars","Calendar.Month.3":"April","Calendar.Month.4":"Mai","Calendar.Month.5":"Juni","Calendar.Month.6":"Juli","Calendar.Month.7":"August","Calendar.Month.8":"September","Calendar.Month.9":"Oktober","Calendar.Month.10":"November","Calendar.Month.11":"Desember","UtvidbarTekst.VisMer":"Vis mer","UtvidbarTekst.VisMindre":"Vis mindre","KopierbarTekst.Kopier":"Klikk for å kopiere","KopierbarTekst.Kopiert":"Kopiert!"};me(Ze);var ht={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var It;function Ul(){return It||(It=1,(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=n(l,a.call(this,s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return this&&this[l]||l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(this,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)r.call(l,s)&&l[s]&&(i=n(i,this&&this[s]||s));return i}function n(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(ht)),ht.exports}var ql=Ul();const Ya=xl(ql),Bl="_borderbox_1a0x6_1",Cl="_error_1a0x6_5",$l="_warning_1a0x6_8",Hl={borderbox:Bl,error:Cl,warning:$l};Ya.bind(Hl);const Jl="_aksjonspunkt_11wjs_1",Yl="_erAksjonspunktApent_11wjs_4",zl="_erIkkeGodkjentAvBeslutter_11wjs_8",Wl={aksjonspunkt:Jl,erAksjonspunktApent:Yl,erIkkeGodkjentAvBeslutter:zl};Ya.bind(Wl);const ha=({dateString:e,year:r,month:t,day:a})=>va.jsx(va.Fragment,{children:Nr(e,{year:r,month:t,day:a})});me(Ze);me(Ze);const Ql="_divider_1jpov_1",Xl="_dividerParagraf_1jpov_8",Zl="_leftPanel_1jpov_11",ei="_rightPanel_1jpov_14",ai={divider:Ql,dividerParagraf:Xl,leftPanel:Zl,rightPanel:ei};Ya.bind(ai);const dr=()=>va.jsx("span",{"data-testid":"editedIcon",children:va.jsx(Qr,{title:"Saksbehandler har endret feltets verdi",height:20,width:20,color:"var(--ax-text-neutral)"})});me(Ze);me(Ze);var Ia={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Lt;function ti(){return Lt||(Lt=1,(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var l="",i=0;i<arguments.length;i++){var s=arguments[i];s&&(l=n(l,a(s)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var i="";for(var s in l)r.call(l,s)&&l[s]&&(i=n(i,s));return i}function n(l,i){return i?l?l+" "+i:l+i:l}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(Ia)),Ia.exports}var ri=ti();const ni=xt(ri);function li(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kt={exports:{}},He={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ft;function ii(){if(Ft)return He;Ft=1;var e=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(a,n,l){var i=null;if(l!==void 0&&(i=""+l),n.key!==void 0&&(i=""+n.key),"key"in n){l={};for(var s in n)s!=="key"&&(l[s]=n[s])}else l=n;return n=l.ref,{$$typeof:e,type:a,key:i,ref:n!==void 0?n:null,props:l}}return He.Fragment=r,He.jsx=t,He.jsxs=t,He}var Pt;function si(){return Pt||(Pt=1,kt.exports=ii()),kt.exports}var te=si();const cr=e=>e.reduce((r,t,a)=>({...r,[a]:n=>t(n)||!0}),{}),Er=(e,r)=>r.split(".").reduce((t,a)=>t!==void 0?t[a]:t,e)?.message;var Pa={exports:{}},oi=Pa.exports,Kt;function ui(){return Kt||(Kt=1,(function(e,r){(function(t,a){e.exports=a()})(oi,function(){var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},a=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,l=/\d\d/,i=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,d={},f=function(g){return(g=+g)+(g>68?1900:2e3)},c=function(g){return function(h){this[g]=+h}},v=[/[+-]\d\d:?(\d\d)?|Z/,function(g){(this.zone||(this.zone={})).offset=(function(h){if(!h||h==="Z")return 0;var R=h.match(/([+-]|\d\d)/g),I=60*R[1]+(+R[2]||0);return I===0?0:R[0]==="+"?-I:I})(g)}],_=function(g){var h=d[g];return h&&(h.indexOf?h:h.s.concat(h.f))},N=function(g,h){var R,I=d.meridiem;if(I){for(var F=1;F<=24;F+=1)if(g.indexOf(I(F,0,h))>-1){R=F>12;break}}else R=g===(h?"pm":"PM");return R},T={A:[s,function(g){this.afternoon=N(g,!1)}],a:[s,function(g){this.afternoon=N(g,!0)}],Q:[n,function(g){this.month=3*(g-1)+1}],S:[n,function(g){this.milliseconds=100*+g}],SS:[l,function(g){this.milliseconds=10*+g}],SSS:[/\d{3}/,function(g){this.milliseconds=+g}],s:[i,c("seconds")],ss:[i,c("seconds")],m:[i,c("minutes")],mm:[i,c("minutes")],H:[i,c("hours")],h:[i,c("hours")],HH:[i,c("hours")],hh:[i,c("hours")],D:[i,c("day")],DD:[l,c("day")],Do:[s,function(g){var h=d.ordinal,R=g.match(/\d+/);if(this.day=R[0],h)for(var I=1;I<=31;I+=1)h(I).replace(/\[|\]/g,"")===g&&(this.day=I)}],w:[i,c("week")],ww:[l,c("week")],M:[i,c("month")],MM:[l,c("month")],MMM:[s,function(g){var h=_("months"),R=(_("monthsShort")||h.map(function(I){return I.slice(0,3)})).indexOf(g)+1;if(R<1)throw new Error;this.month=R%12||R}],MMMM:[s,function(g){var h=_("months").indexOf(g)+1;if(h<1)throw new Error;this.month=h%12||h}],Y:[/[+-]?\d+/,c("year")],YY:[l,function(g){this.year=f(g)}],YYYY:[/\d{4}/,c("year")],Z:v,ZZ:v};function D(g){var h,R;h=g,R=d&&d.formats;for(var I=(g=h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(M,x,A){var p=A&&A.toUpperCase();return x||R[A]||t[A]||R[p].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(V,q,j){return q||j.slice(1)})})).match(a),F=I.length,K=0;K<F;K+=1){var C=I[K],w=T[C],U=w&&w[0],G=w&&w[1];I[K]=G?{regex:U,parser:G}:C.replace(/^\[|\]$/g,"")}return function(M){for(var x={},A=0,p=0;A<F;A+=1){var V=I[A];if(typeof V=="string")p+=V.length;else{var q=V.regex,j=V.parser,X=M.slice(p),re=q.exec(X)[0];j.call(x,re),M=M.replace(re,"")}}return(function(ne){var fe=ne.afternoon;if(fe!==void 0){var ee=ne.hours;fe?ee<12&&(ne.hours+=12):ee===12&&(ne.hours=0),delete ne.afternoon}})(x),x}}return function(g,h,R){R.p.customParseFormat=!0,g&&g.parseTwoDigitYear&&(f=g.parseTwoDigitYear);var I=h.prototype,F=I.parse;I.parse=function(K){var C=K.date,w=K.utc,U=K.args;this.$u=w;var G=U[1];if(typeof G=="string"){var M=U[2]===!0,x=U[3]===!0,A=M||x,p=U[2];x&&(p=U[2]),d=this.$locale(),!M&&p&&(d=R.Ls[p]),this.$d=(function(X,re,ne,fe){try{if(["x","X"].indexOf(re)>-1)return new Date((re==="X"?1e3:1)*X);var ee=D(re)(X),Ge=ee.year,ye=ee.month,Ta=ee.day,aa=ee.hours,Ra=ee.minutes,we=ee.seconds,ta=ee.milliseconds,De=ee.zone,be=ee.week,xe=new Date,Ae=Ta||(Ge||ye?1:xe.getDate()),Me=Ge||xe.getFullYear(),Te=0;Ge&&!ye||(Te=ye>0?ye-1:xe.getMonth());var Re,je=aa||0,Ue=Ra||0,ra=we||0,he=ta||0;return De?new Date(Date.UTC(Me,Te,Ae,je,Ue,ra,he+60*De.offset*1e3)):ne?new Date(Date.UTC(Me,Te,Ae,je,Ue,ra,he)):(Re=new Date(Me,Te,Ae,je,Ue,ra,he),be&&(Re=fe(Re).week(be).toDate()),Re)}catch{return new Date("")}})(C,G,w,R),this.init(),p&&p!==!0&&(this.$L=this.locale(p).$L),A&&C!=this.format(G)&&(this.$d=new Date("")),d={}}else if(G instanceof Array)for(var V=G.length,q=1;q<=V;q+=1){U[1]=G[q-1];var j=R.apply(this,U);if(j.isValid()){this.$d=j.$d,this.$L=j.$L,this.init();break}q===V&&(this.$d=new Date(""))}else F.call(this,K)}}})})(Pa)),Pa.exports}var di=ui();const ci=li(di),Ei="_textarea_14c7r_1",mi="_readOnlyField_14c7r_7",Vt={textarea:Ei,readOnlyField:mi},fi=e=>e!=null&&e!=="",vi=({label:e,value:r,isEdited:t=!1,type:a,hideLabel:n,size:l})=>fi(r)?te.jsxs(pe,{gap:"space-4",children:[e&&!n&&te.jsx(Na,{size:l,children:e}),te.jsxs(ca,{gap:"space-8",align:"center",wrap:!1,children:[te.jsx(Ct,{className:a==="textarea"?Vt.textarea:Vt.readOnlyField,size:l,children:r}),t&&te.jsx(dr,{})]})]}):null;jt.extend(ci);const _i="_noReadOnlyIcon_11vhl_2",gi={noReadOnlyIcon:_i},Si=({label:e,description:r,validate:t=[],onChange:a,children:n,className:l,isReadOnly:i=!1,size:s="small",isEdited:d=!1,hideLegend:f=!1,...c})=>{const{name:v,control:_}=c,{formState:{errors:N}}=Ke(),{field:T}=rr({name:v,control:_,rules:{validate:cr(t)}});return te.jsx(ul,{name:v,value:T.value!==void 0?T.value:null,legend:te.jsxs(ca,{justify:"center",gap:"space-8",children:[e,i&&d&&te.jsx(dr,{})]}),hideLegend:f,"aria-readonly":i,readOnly:i,description:r,size:s,error:Er(N,v),onChange:D=>{a&&a(D),T.onChange(D)},className:ni(l,gi.noReadOnlyIcon),children:n})},Ni="_textAreaFieldWithBadges_bdz0b_1",yi="_etikettWrapper_bdz0b_4",Gt={textAreaFieldWithBadges:Ni,etikettWrapper:yi},Ti=({name:e,control:r,label:t,readOnly:a,maxLength:n,badges:l,validate:i=[],parse:s=N=>N,className:d,description:f,isEdited:c,size:v="small",..._})=>{const{formState:{errors:N}}=Ke(),{field:T}=rr({name:e,control:r,rules:{validate:L.useMemo(()=>cr(i),[i])}});return a?te.jsx(vi,{size:v,label:t,value:T.value,type:"textarea",isEdited:c,hideLabel:_.hideLabel}):te.jsxs("div",{className:l?Gt.textAreaFieldWithBadges:null,children:[l&&te.jsx("div",{className:Gt.etikettWrapper,children:l.map(({type:D,titleText:g})=>te.jsx(rl,{variant:D,size:"small",children:g},g))}),te.jsx(_l,{size:v,label:t,description:f,className:d,autoComplete:"off",...T,onChange:D=>T.onChange(D.currentTarget.value!==""?s(D.currentTarget.value):null),value:T.value?T.value:"",error:Er(N,e),maxLength:n,..._})]})},Ri=({formMethods:e,onSubmit:r,children:t,className:a,setDataOnUnmount:n})=>{const{handleSubmit:l,getValues:i}=e;return L.useEffect(()=>()=>{n&&n(i())},[]),te.jsx(Nl,{...e,children:te.jsx("form",{className:a,onSubmit:r?l(s=>r(s)):void 0,children:t})})},pi="_begrunnelseTextField_hw8s7_6",Oi={begrunnelseTextField:pi},ea={"OverstyringPanel.AutomatiskVurdering":"Manuell overstyring av automatisk vurdering","OverstyringPanel.Vilkar":"Begrunnelse","OverstyringPanel.Endret":"Endret av saksbehandler","OverstyringPanel.Unntakstilfeller":"Overstyring skal kun gjøres i unntakstilfeller","OverstyringPanel.ConfirmInformation":"Bekreft overstyring","OverstyringPanel.Avbryt":"Avbryt","ProsessPanelTemplate.ErOppfylt":"Vilkåret er oppfylt","ProsessPanelTemplate.ErIkkeOppfylt":"Vilkåret er avslått","ProsessPanelTemplate.IkkeBehandlet":"Ikke behandlet","VilkarResultPicker.Arsak":"Avslagsårsak","VilkarResultPicker.OpphorFom":"Dato for opphør av medlemskapet","VilkarResultPicker.MedlemFom":"Innflyttingsdato","ProsessStegBegrunnelseTextField.ExplanationRequired":"Vurdering","ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"Begrunnelse","ProsessStegBegrunnelseTextField.BegrunnVurdering":"Begrunn vurderingen din","SubmitButton.ConfirmInformation":"Bekreft og fortsett"},Di=me(ea),bi=Rr(3),Ai=pr(2e3),hi=e=>e?"ProsessStegBegrunnelseTextField.ExplanationRequiredReadOnly":"ProsessStegBegrunnelseTextField.ExplanationRequired",Ii=e=>r=>r!==void 0||e,Ve=({readOnly:e,text:r,useAllWidth:t=!1,notRequired:a=!1})=>{const{formState:{isDirty:n},control:l}=Ke(),i=a?()=>!1:Ii(n);return P.jsx("div",{className:t?"":Oi.begrunnelseTextField,children:P.jsx(Ti,{name:"begrunnelse",control:l,label:r??Di.formatMessage({id:hi(e)}),validate:[Tr(i),bi,Ai,Or],maxLength:2e3,readOnly:e,parse:yr})})},Li=e=>e.at(0)?.begrunnelse??"";Ve.buildInitialValues=e=>({begrunnelse:Dr(Li(e))});Ve.transformValues=e=>({begrunnelse:e.begrunnelse});Ve.__docgenInfo={description:`ProsessStegBegrunnelseTextField

Presentasjonskomponent. Lar den Nav-ansatte skrive inn en begrunnelse før lagring av behandlingspunkter.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[{name:"aksjonspunkter",optional:!1,type:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
| 'FEIL_REGEL'`,elements:[{name:"literal",value:"'FEIL_FAKTA'"},{name:"literal",value:"'FEIL_LOV'"},{name:"literal",value:"'SKJØNN'"},{name:"literal",value:"'UTREDNING'"},{name:"literal",value:"'SAKSFLYT'"},{name:"literal",value:"'BEGRUNNELSE'"},{name:"literal",value:"'-'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'FEIL_REGEL'"}]}],raw:"Array<foreldrepenger_behandlingslager_behandling_aksjonspunkt_VurderÅrsak>",required:!1}}]}}],raw:"Aksjonspunkt[]"}}],returns:{type:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"values",optional:!1,type:{name:"signature",type:"object",raw:`{
  begrunnelse?: string;
}`,signature:{properties:[{key:"begrunnelse",value:{name:"string",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:"{ begrunnelse: string | undefined }",signature:{properties:[{key:"begrunnelse",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}}]}}}}],displayName:"ProsessStegBegrunnelseTextField",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},useAllWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},notRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ki=me(ea),Fi=(e,r,t,a)=>!t&&!r||e?!0:a===void 0?!t:!t&&a||a,mr=({isReadOnly:e,isSubmittable:r,isSubmitting:t,isDirty:a,text:n,onClick:l,hasEmptyRequiredFields:i})=>e?null:P.jsx("div",{children:P.jsx(Un,{size:"small",variant:"primary",loading:t,disabled:Fi(t,r,a,i),onClick:l,type:l?"button":"submit",children:n??ki.formatMessage({id:"SubmitButton.ConfirmInformation"})})});mr.__docgenInfo={description:"",methods:[],displayName:"ProsessStegSubmitButton",props:{isReadOnly:{required:!0,tsType:{name:"boolean"},description:""},isSubmittable:{required:!0,tsType:{name:"boolean"},description:""},isSubmitting:{required:!0,tsType:{name:"boolean"},description:""},isDirty:{required:!1,tsType:{name:"boolean"},description:""},text:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},hasEmptyRequiredFields:{required:!1,tsType:{name:"boolean"},description:""}}};me(ea);me(ea);me(ea);const Pi="_days_kq4ls_1",Ki="_hyphen_kq4ls_5",Vi="_panel_kq4ls_15",La={days:Pi,hyphen:Ki,panel:Vi},wt=e=>e?"ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt":"ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt",Gi=(e,r)=>jt(e).subtract(r,"days").format(Ir),wi=e=>e.fødselTermin?e.fødselTermin.fødselsdato?"ErSoknadsfristVilkaretOppfyltForm.Fodselsdato":"ErSoknadsfristVilkaretOppfyltForm.Termindato":"ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato",xi=e=>e.adopsjon?.omsorgsovertakelseDato||e.fødselTermin?.fødselsdato||e.fødselTermin?.termindato||void 0,Mi=(e,r)=>({erVilkarOk:e[0]?.status===Sa.OPPRETTET?void 0:Qe.OPPFYLT===r,...Ve.buildInitialValues(e)}),ji=e=>({erVilkarOk:e.erVilkarOk||!1,kode:ze.SOKNADSFRISTVILKARET,...Ve.transformValues(e)}),fr=({soknad:e,gjeldendeFamiliehendelse:r,status:t})=>{const a=Mt(),{isSubmittable:n,aksjonspunkterForPanel:l,behandling:i,isReadOnly:s,submitCallback:d,alleKodeverk:f}=br(),c=Mi(l,t),{mellomlagretFormData:v,setMellomlagretFormData:_}=Ar(),N=wl({defaultValues:v??c}),T=xi(r),D=wi(r),g=N.watch("erVilkarOk"),h=e.søknadsfrist.dagerOversittetFrist;return P.jsx(Ri,{formMethods:N,onSubmit:R=>d(ji(R)),setDataOnUnmount:_,children:P.jsxs(pe,{gap:"space-16",children:[P.jsxs(pe,{gap:"space-4",children:[P.jsx(et,{size:"small",level:"2",children:a.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist"})}),P.jsxs("span",{className:"typo-normal",children:[P.jsx(_e,{id:"ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart1"}),P.jsx("span",{className:La.days,children:P.jsx(_e,{id:"ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart2",values:{numberOfDays:h}})}),P.jsx(_e,{id:"ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart3"}),e.mottattDato&&h&&P.jsx(ha,{dateString:Gi(e.mottattDato,h)})]})]}),P.jsxs(ca,{justify:"space-between",children:[P.jsxs(zt.New,{className:La.panel,children:[P.jsx(et,{size:"small",level:"3",children:a.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.Consider"})}),P.jsxs("ul",{className:La.hyphen,children:[P.jsx("li",{children:P.jsx(_e,{id:"ErSoknadsfristVilkaretOppfyltForm.Question1"})}),P.jsx("li",{children:P.jsx(_e,{id:"ErSoknadsfristVilkaretOppfyltForm.Question2"})}),P.jsx("li",{children:P.jsx(_e,{id:"ErSoknadsfristVilkaretOppfyltForm.Question3"})})]})]}),P.jsxs(pe,{gap:"space-24",children:[P.jsxs(pe,{gap:"space-4",children:[P.jsx(Da,{children:a.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.MottattDato"})}),P.jsx("span",{className:"typo-normal",children:e.mottattDato&&P.jsx(ha,{dateString:e.mottattDato})})]}),P.jsxs(pe,{gap:"space-4",children:[P.jsx(Da,{children:a.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication"})}),P.jsx("span",{className:"typo-normal",children:e.begrunnelseForSenInnsending??"-"})]})]}),P.jsxs(pe,{gap:"space-4",children:[D&&P.jsx(Da,{children:a.formatMessage({id:D})}),P.jsx("span",{className:"typo-normal",children:T&&P.jsx(ha,{dateString:T})})]})]}),P.jsx(Si,{name:"erVilkarOk",control:N.control,validate:[hr],isReadOnly:s,children:P.jsxs(ca,{gap:"space-16",children:[P.jsx(ut,{value:!0,size:"small",children:P.jsx(_e,{id:wt(!0),values:{b:Za}})}),P.jsx(ut,{value:!1,size:"small",children:P.jsx(_e,{id:wt(!1),values:{b:Za}})})]})}),s&&g===!1&&!!i.behandlingsresultat?.avslagsarsak&&P.jsx(Se,{size:"small",children:f.Avslagsårsak[We.SOKNADFRISTVILKARET].find(R=>R.kode===i.behandlingsresultat?.avslagsarsak)?.navn??""}),P.jsx(Ve,{readOnly:s}),P.jsx(mr,{isReadOnly:s,isSubmittable:n,isSubmitting:N.formState.isSubmitting,isDirty:N.formState.isDirty})]})})};fr.__docgenInfo={description:`ErSoknadsfristVilkaretOppfyltForm

Setter opp aksjonspunktet for vurdering av søknadsfristvilkåret.`,methods:[],displayName:"ErSoknadsfristVilkaretOppfyltForm",props:{soknad:{required:!0,tsType:{name:"union",raw:"SøknadAdopsjon | SøknadFødsel",elements:[{name:"intersection",raw:`{
  soknadType: 'ST-002';
} & tjenester_behandling_søknad_SoknadAdopsjonDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-002';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-002'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  adopsjonFodelsedatoer?: {
    [key: string]: string;
  };
  antallBarn: number;
  barnetsAnkomstTilNorgeDato?: string;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  omsorgsovertakelseDato?: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
}`,signature:{properties:[{key:"adopsjonFodelsedatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}}]}}]},{name:"intersection",raw:`{
  soknadType: 'ST-001';
} & tjenester_behandling_søknad_SoknadFodselDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-001';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-001'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  antallBarn: number;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  fodselsdatoer?: {
    [key: string]: string;
  };
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
  termindato?: string;
  utstedtdato?: string;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"fodselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}}]}}]}]},description:""},gjeldendeFamiliehendelse:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  adopsjon?: tjenester_familiehendelse_FamiliehendelseRestTjeneste_AdopsjonFamilieHendelseDto;
  fødselTermin?: tjenester_familiehendelse_FamiliehendelseRestTjeneste_FødselTerminFamilieHendelseDto;
}`,signature:{properties:[{key:"adopsjon",value:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"fødselTermin",value:{name:"signature",type:"object",raw:`{
  fødselsdato?: string;
  termindato?: string;
}`,signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}}]},required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""}}};const Ui={"ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist":"Søknadsfrist","ErSoknadsfristVilkaretOppfyltForm.Consider":"Vurder følgende","ErSoknadsfristVilkaretOppfyltForm.Question1":"Har det vært fristavbrytende kontakt?","ErSoknadsfristVilkaretOppfyltForm.Question2":"Har Nav gitt misvisende opplysninger?","ErSoknadsfristVilkaretOppfyltForm.Question3":"Har søker åpenbart ikke vært i stand til å sette frem krav?","ErSoknadsfristVilkaretOppfyltForm.MottattDato":"Dato for mottatt søknad","ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato":"Dato for omsorgsovertakelse","ErSoknadsfristVilkaretOppfyltForm.Fodselsdato":"Fødselsdato","ErSoknadsfristVilkaretOppfyltForm.Termindato":"Termindato","ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication":"Begrunnelse fra søknaden","ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart1":"Søknaden ble mottatt ","ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart2":"{numberOfDays} dager ","ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart3":"etter søknadsfristen ","ErSoknadsfristVilkaretOppfyltForm.SokersOpplysningsplikt":"Søkers opplysningsplikt","ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt":"Vilkåret er oppfylt","ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt":"Vilkåret er <b>ikke</b> oppfylt","ShowVilkarStatus.Check":"Informasjonen er utfylt"},qi=me(Ui),Ka=({soknad:e,familiehendelse:r,status:t})=>P.jsx(Lr,{value:qi,children:P.jsx(fr,{soknad:e,gjeldendeFamiliehendelse:r,status:t})});Ka.__docgenInfo={description:"",methods:[],displayName:"SoknadsfristVilkarProsessIndex",props:{soknad:{required:!0,tsType:{name:"union",raw:"SøknadAdopsjon | SøknadFødsel",elements:[{name:"intersection",raw:`{
  soknadType: 'ST-002';
} & tjenester_behandling_søknad_SoknadAdopsjonDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-002';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-002'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  adopsjonFodelsedatoer?: {
    [key: string]: string;
  };
  antallBarn: number;
  barnetsAnkomstTilNorgeDato?: string;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  omsorgsovertakelseDato?: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
}`,signature:{properties:[{key:"adopsjonFodelsedatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}}]}}]},{name:"intersection",raw:`{
  soknadType: 'ST-001';
} & tjenester_behandling_søknad_SoknadFodselDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-001';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-001'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  antallBarn: number;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  fodselsdatoer?: {
    [key: string]: string;
  };
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
  termindato?: string;
  utstedtdato?: string;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"fodselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}}]}}]}]},description:""},familiehendelse:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  adopsjon?: tjenester_familiehendelse_FamiliehendelseRestTjeneste_AdopsjonFamilieHendelseDto;
  fødselTermin?: tjenester_familiehendelse_FamiliehendelseRestTjeneste_FødselTerminFamilieHendelseDto;
}`,signature:{properties:[{key:"adopsjon",value:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"fødselTermin",value:{name:"signature",type:"object",raw:`{
  fødselsdato?: string;
  termindato?: string;
}`,signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}}]},required:!1}}]}},description:""},status:{required:!0,tsType:{name:"string"},description:""}}};const Bi={soknadType:Bt.FODSEL,mottattDato:"2019-01-01",begrunnelseForSenInnsending:"Dette er en begrunnelse",søknadsfrist:{mottattDato:"2019-01-01",utledetSøknadsfrist:"2019-07-01",dagerOversittetFrist:2}},Ci={fødselTermin:{fødselsdato:"2019-01-02"}},Yi={title:"prosess/prosess-vilkar-soknadsfrist",component:Ka,decorators:[kr,Fr],args:{soknad:Bi,familiehendelse:Ci},render:e=>P.jsx(Ka,{...e})},ia={args:{aksjonspunkterForPanel:[{definisjon:ze.SOKNADSFRISTVILKARET,status:Sa.OPPRETTET,vilkarType:We.SOKNADFRISTVILKARET}],isReadOnly:!1,status:Qe.IKKE_VURDERT}},sa={args:{aksjonspunkterForPanel:[{definisjon:ze.SOKNADSFRISTVILKARET,status:Sa.UTFORT,begrunnelse:"Dette vilkåret er godkjent",vilkarType:We.SOKNADFRISTVILKARET}],isReadOnly:!0,isSubmittable:!1,status:Qe.OPPFYLT}},oa={args:{behandling:{uuid:"1",versjon:1,behandlingsresultat:{avslagsarsak:qt.INGEN_BEREGNINGSREGLER}},aksjonspunkterForPanel:[{definisjon:ze.SOKNADSFRISTVILKARET,status:Sa.UTFORT,begrunnelse:"Dette vilkåret er avslått",vilkarType:We.SOKNADFRISTVILKARET}],isReadOnly:!0,isSubmittable:!1,status:Qe.IKKE_OPPFYLT}};ia.parameters={...ia.parameters,docs:{...ia.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.SOKNADSFRISTVILKARET,
      status: AksjonspunktStatus.OPPRETTET,
      vilkarType: VilkarType.SOKNADFRISTVILKARET
    }] as Aksjonspunkt[],
    isReadOnly: false,
    status: VilkarUtfallType.IKKE_VURDERT
  }
}`,...ia.parameters?.docs?.source}}};sa.parameters={...sa.parameters,docs:{...sa.parameters?.docs,source:{originalSource:`{
  args: {
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.SOKNADSFRISTVILKARET,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette vilkåret er godkjent',
      vilkarType: VilkarType.SOKNADFRISTVILKARET
    }] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: VilkarUtfallType.OPPFYLT
  }
}`,...sa.parameters?.docs?.source}}};oa.parameters={...oa.parameters,docs:{...oa.parameters?.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '1',
      versjon: 1,
      behandlingsresultat: {
        avslagsarsak: Avslagsarsak.INGEN_BEREGNINGSREGLER
      }
    } as Behandling,
    aksjonspunkterForPanel: [{
      definisjon: AksjonspunktKode.SOKNADSFRISTVILKARET,
      status: AksjonspunktStatus.UTFORT,
      begrunnelse: 'Dette vilkåret er avslått',
      vilkarType: VilkarType.SOKNADFRISTVILKARET
    }] as Aksjonspunkt[],
    isReadOnly: true,
    isSubmittable: false,
    status: VilkarUtfallType.IKKE_OPPFYLT
  }
}`,...oa.parameters?.docs?.source}}};const zi=["ÅpentAksjonspunkt","OppfyltVilkår","AvslåttVilkår"];export{oa as AvslåttVilkår,sa as OppfyltVilkår,zi as __namedExportsOrder,Yi as default,ia as ÅpentAksjonspunkt};
