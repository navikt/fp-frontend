import{r as p,R as e}from"./index-Dl6G-zuu.js";import{n as ye,h as j,i as N,w as K,M as s,b as i,P as q,O as w,F as Re,W as ee,e as re,L as I,f as S,j as C,T as F,E as L,y as Ee,c as ne,d as te,s as _,H as ae,B,l as fe,x as he,p as be,z as Ve,D as we,S as Ne,t as Te,k as Pe,m as Ae,a as Ke}from"./nb_NO-FpxXeSMP.js";import"./withRouter-BioXz9vk.js";import{K as se,a as je}from"./alleKodeverk-DbawmvgK.js";import{r as c,R as z,T as qe,b as x,_ as Me,Y as _e,Z as ie,o as Fe}from"./index.es-BOP7ekyo.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-D5dJDnOJ.js";import"./index-Dmr9vlPS.js";var Ie=function(r,n){var a={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&n.indexOf(t)<0&&(a[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(r);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(r,t[o])&&(a[t[o]]=r[t[o]]);return a};const H=p.forwardRef((r,n)=>{var{as:a="a",className:t,underline:o=!0,variant:g="action",inlineText:l=!1}=r,d=Ie(r,["as","className","underline","variant","inlineText"]);return e.createElement(a,Object.assign({},d,{ref:n,className:ye("navds-link",t,`navds-link--${g}`,{"navds-link--remove-underline":!o,"navds-link--inline-text":l})}))}),P={FISKE:"FISKE",FRILANSER:"FRILANSER",DAGMAMMA:"DAGMAMMA",JORDBRUK_ELLER_SKOGBRUK:"JORDBRUK_SKOGBRUK",ANNEN:"ANNEN"},Se="_navnBredde_1kwjo_1",xe="_orgNrBredde_1kwjo_5",Oe="_landBredde_1kwjo_9",O={navnBredde:Se,orgNrBredde:xe,landBredde:Oe},Be=r=>r.map(({kode:n,navn:a})=>e.createElement("option",{value:n,key:n},a)),oe=({readOnly:r=!0,alleKodeverk:n})=>{const a=j(),t=n[se.LANDKODER].slice().sort((d,v)=>d.navn.localeCompare(v.navn)),{watch:o,getValues:g}=N(),l=o("virksomhetRegistrertINorge");return e.createElement(e.Fragment,null,e.createElement(K,{name:"navn",validate:[c],label:e.createElement(s,{id:"Registrering.VirksomhetIdentifikasjonPanel.Name"}),className:O.navnBredde,readOnly:r}),e.createElement(i,{sixteenPx:!0}),e.createElement(q,{name:"virksomhetRegistrertINorge",label:e.createElement(s,{id:"Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway"}),validate:[c],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Yes"}),value:"true"},{label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.No"}),value:"false"}]}),l&&e.createElement(e.Fragment,null,e.createElement(i,{eightPx:!0}),e.createElement("div",{className:O.orgNrBredde},e.createElement(w,null,e.createElement(K,{name:"organisasjonsnummer",readOnly:r,validate:[c,z,qe],label:e.createElement(s,{id:"Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber"})}))),e.createElement(i,{sixteenPx:!0})),!l&&l!==void 0&&e.createElement(e.Fragment,null,e.createElement(i,{eightPx:!0}),e.createElement(w,{alignOffset:57},e.createElement(Re,{name:"landJobberFra",className:O.landBredde,selectValues:Be(t),validate:[c],label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Country"})}),e.createElement(i,{sixteenPx:!0}),e.createElement(ee,null,e.createElement(re,null,e.createElement(I,null,e.createElement(S,{isReadOnly:r,validate:[c,x,Me],name:"fom",label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeFom"})})),e.createElement(I,null,e.createElement(S,{isReadOnly:r,validate:[x,d=>{const v=g("fom");return v?_e(v,d):null}],name:"tom",label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeTom"})})))))))};oe.__docgenInfo={description:`VirksomhetIdentifikasjonPanel

Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetIdentifikasjonPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Ce="_tlfBredde_nvz63_1",Le="_navnBredde_nvz63_5",Y={tlfBredde:Ce,navnBredde:Le},le=({readOnly:r=!0})=>{const{watch:n}=N(),a=n("harRegnskapsforer")||!1;return e.createElement(e.Fragment,null,e.createElement(q,{name:"harRegnskapsforer",label:e.createElement(s,{id:"Registrering.VirksomhetRegnskapPanel.Accountant"}),isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:e.createElement(s,{id:"Registrering.VirksomhetRegnskapPanel.Yes"}),value:"true"},{label:e.createElement(s,{id:"Registrering.VirksomhetRegnskapPanel.No"}),value:"false"}]}),a&&e.createElement(e.Fragment,null,e.createElement(i,{eightPx:!0}),e.createElement(w,null,e.createElement(K,{name:"navnRegnskapsforer",className:Y.navnBredde,readOnly:r,validate:[c,ie],label:e.createElement(s,{id:"Registrering.VirksomhetRegnskapPanel.AccountantName"})}),e.createElement(i,{sixteenPx:!0}),e.createElement(K,{name:"tlfRegnskapsforer",readOnly:r,validate:[c,z],className:Y.tlfBredde,label:e.createElement(s,{id:"Registrering.VirksomhetRegnskapPanel.AccountantPhone"})})),e.createElement(i,{sixteenPx:!0})))};le.__docgenInfo={description:`VirksomhetRegnskapPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom
søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetRegnskapPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const ze="_inntektBredde_1xgnj_1",De={inntektBredde:ze},de=({readOnly:r})=>{var E,m,R,V;const n=j(),{watch:a,setError:t,clearErrors:o,formState:g}=N(),l=a("varigEndretEllerStartetSisteFireAr")||!1,d=a("harVarigEndring")||!1,v=a("erNyoppstartet")||!1,k=a("erNyIArbeidslivet")||!1,y=!d&&!v&&!k;return p.useEffect(()=>{y&&l&&t("ingenArsakValgt",{type:"custom",message:n.formatMessage({id:"Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak"})}),(!y||!l)&&o("ingenArsakValgt")},[y,l]),e.createElement(e.Fragment,null,e.createElement(i,{sixteenPx:!0}),e.createElement(q,{name:"varigEndretEllerStartetSisteFireAr",label:e.createElement(s,{id:"Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged"}),isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:e.createElement(s,{id:"Registrering.VirksomhetStartetPanel.Yes"}),value:"true"},{label:e.createElement(s,{id:"Registrering.VirksomhetStartetPanel.No"}),value:"false"}]}),l&&e.createElement("div",null,e.createElement(i,{eightPx:!0}),e.createElement(w,null,e.createElement(C,{size:"small"},e.createElement(s,{id:"Registrering.VirksomhetStartetPanel.Reason"})),e.createElement(i,{fourPx:!0}),e.createElement(F,{name:"harVarigEndring",label:e.createElement(s,{id:"Registrering.VirksomhetStartetPanel.HarVarigEndring"})}),e.createElement(i,{fourPx:!0}),d&&e.createElement(e.Fragment,null,e.createElement(i,{sixteenPx:!0}),e.createElement(w,null,e.createElement(S,{name:"varigEndringGjeldendeFom",isReadOnly:r,validate:[x,c],label:e.createElement(s,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})}))),e.createElement(F,{name:"erNyoppstartet",label:e.createElement(s,{id:"Registrering.VirksomhetStartetPanel.ErNyoppstartet"})}),e.createElement(i,{fourPx:!0}),e.createElement(F,{name:"erNyIArbeidslivet",label:e.createElement(s,{id:"Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet"})}),e.createElement(i,{fourPx:!0}),k&&e.createElement(e.Fragment,null,e.createElement(i,{sixteenPx:!0}),e.createElement(w,null,e.createElement(S,{name:"nyIArbeidslivetFom",isReadOnly:r,validate:[x,c],label:e.createElement(s,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})}))),g.isSubmitted&&((m=(E=g.errors)==null?void 0:E.ingenArsakValgt)==null?void 0:m.message)&&e.createElement(L,null,(V=(R=g.errors)==null?void 0:R.ingenArsakValgt)==null?void 0:V.message),e.createElement(i,{sixteenPx:!0}),e.createElement(Ee,{name:"beskrivelseAvEndring",label:e.createElement(s,{id:"Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse"}),validate:[ie]}),e.createElement(i,{sixteenPx:!0}),e.createElement(K,{name:"inntekt",label:e.createElement(s,{id:"Registrering.VirksomhetStartetPanel.Inntekt"}),readOnly:r,validate:[z,c],className:De.inntektBredde,parse:M=>{const T=parseInt(M.toString(),10);return Number.isNaN(T)?M:T}}))),e.createElement(i,{eightPx:!0}))};de.__docgenInfo={description:`VirksomhetStartetEndretPanel

Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetStartetEndretPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const me=({readOnly:r=!0})=>e.createElement(q,{name:"familieEllerVennerTilknyttetNaringen",label:e.createElement(s,{id:"Registrering.VirksomhetRelasjonPanel.Relation"}),isReadOnly:r,isTrueOrFalseSelection:!0,radios:[{label:e.createElement(s,{id:"Registrering.VirksomhetRelasjonPanel.Yes"}),value:"true"},{label:e.createElement(s,{id:"Registrering.VirksomhetRelasjonPanel.No"}),value:"false"}]});me.__docgenInfo={description:`VirksomhetRelasjonPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
søker.`,methods:[],displayName:"VirksomhetRelasjonPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const U="typeVirksomhet",J={[P.DAGMAMMA]:1,[P.FISKE]:2,[P.JORDBRUK_ELLER_SKOGBRUK]:3,[P.ANNEN]:4},$e=(r,n)=>r>n?1:r<n?-1:0,ke=({readOnly:r,alleKodeverk:n})=>{var y,E;const a=n[se.VIRKSOMHET_TYPE],t=p.useMemo(()=>a.filter(m=>m.kode!==P.FRILANSER).sort((m,R)=>$e(J[m.kode],J[R.kode])),[]),{watch:o,setError:g,formState:l,clearErrors:d}=N(),v=o(U),k=!v||!Object.values(v).some(m=>m===!0);return p.useEffect(()=>{k&&g("notRegisteredInput",{type:"custom",message:Fe()}),k||d("notRegisteredInput")},[k]),e.createElement(e.Fragment,null,e.createElement(i,{eightPx:!0}),e.createElement(C,{size:"small"},e.createElement(s,{id:"Registrering.VirksomhetNaeringTypePanel.Title"})),e.createElement(i,{fourPx:!0}),t.map(m=>e.createElement(p.Fragment,{key:m.kode},e.createElement(i,{fourPx:!0}),e.createElement(F,{name:`${U}.${m.kode}`,key:m.kode,label:m.navn,readOnly:r}))),l.isSubmitted&&((y=l.errors.notRegisteredInput)==null?void 0:y.message)&&e.createElement(L,null,(E=l.errors.notRegisteredInput)==null?void 0:E.message))};ke.__docgenInfo={description:`VirksomhetTypeNaringPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetTypeNaringPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Ge="_savebutton_tgfg3_1",He="_cancelbutton_tgfg3_1",Ye="_form_tgfg3_5",X={savebutton:Ge,cancelbutton:He,form:Ye},ge=({showModal:r=!1,readOnly:n=!1,closeEvent:a,onSubmit:t,alleKodeverk:o,virksomhet:g})=>{const l=j(),d=ne({defaultValues:g});return e.createElement(te,{formMethods:d},e.createElement(_,{open:r,"aria-label":l.formatMessage({id:"Registrering.RegistrerVirksomhetModalForm.ModalDescription"}),onClose:a},e.createElement(_.Header,null,e.createElement(ae,{size:"small"},e.createElement(s,{id:"Registrering.RegistrerVirksomhetModalForm.Title"}))),e.createElement(_.Body,null,e.createElement(oe,{readOnly:n,alleKodeverk:o}),e.createElement(ke,{readOnly:n,alleKodeverk:o}),e.createElement(de,{readOnly:n}),e.createElement(le,{readOnly:n}),e.createElement(i,{sixteenPx:!0}),e.createElement(me,{readOnly:n}),e.createElement(i,{sixteenPx:!0})),e.createElement(_.Footer,null,e.createElement(B,{size:"small",variant:"primary",onClick:d.handleSubmit(t),disabled:n,className:X.savebutton,type:"button"},e.createElement(s,{id:"Registrering.RegistrerVirksomhetModalForm.Save"})),e.createElement(B,{size:"small",variant:"secondary",onClick:a,disabled:n,className:X.cancelbutton,type:"button"},e.createElement(s,{id:"Registrering.RegistrerVirksomhetModalForm.Cancel"})))))};ge.__docgenInfo={description:`RegistrerVirksomhetModalForm

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder
foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"RegistrerVirksomhetModalForm",props:{showModal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: FormValues) => void",signature:{arguments:[{type:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"}]},name:"value"}],return:{name:"void"}}},description:""},closeEvent:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},virksomhet:{required:!1,tsType:{name:"intersection",raw:`IdFormValues &
RelasjonFormValues &
RegnskapFormValues &
StartedEndretFormValues &
TypeNaringFormValues`,elements:[{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"}]},description:""}}};const Ue="_divider_1ed8l_1",Je="_fieldsList_1ed8l_7",Xe="_addCircleIcon_1ed8l_11",We="_imageText_1ed8l_12",Ze="_customLink_1ed8l_17",Qe="_removeButton_1ed8l_22",h={divider:Ue,fieldsList:Je,addCircleIcon:Xe,imageText:We,customLink:Ze,removeButton:Qe},b="egenVirksomhet",ue=({readOnly:r=!1,alleKodeverk:n})=>{var T,D,$,G;const a=j(),[t,o]=p.useState(),{control:g,setError:l,formState:d,clearErrors:v}=N(),{fields:k,remove:y,append:E,update:m}=fe({control:g,name:`${b}.virksomheter`}),R=p.useCallback(u=>{o(u!==void 0?u:-1)},[o]),V=p.useCallback(()=>{o(void 0)},[o]),M=p.useCallback(u=>{const f={...u,landJobberFra:u.virksomhetRegistrertINorge?"NOR":u.landJobberFra,varigEndringGjeldendeFom:u.nyIArbeidslivetFom||u.varigEndringGjeldendeFom};t===-1?E(f):t!==void 0&&m(t,f),V()},[E,m,V,t]);return p.useEffect(()=>{k.length===0&&l(`${b}.notRegisteredInput`,{type:"custom",message:a.formatMessage({id:"Registrering.RegistrerVirksomhetPanel.ArrayMinLength"})}),k.length>0&&v(`${b}.notRegisteredInput`)},[k.length]),e.createElement("div",{className:h.fieldsList},k.length>0&&e.createElement(e.Fragment,{key:1},e.createElement(C,{size:"small"},e.createElement(s,{id:"Registrering.RegistrerVirksomhetPanel.Name"})),e.createElement("hr",{className:h.divider}),k.map((u,f)=>e.createElement(ee,{key:u.id},e.createElement(re,null,e.createElement(I,null,e.createElement(H,{className:h.customLink,onClick:()=>R(f),onKeyDown:()=>R(f)},e.createElement(he,{size:"small"},u.navn))),e.createElement(I,null,e.createElement(be,{className:h.removeButton,onClick:()=>y(f),onKeyDown:()=>y(f)}))),e.createElement("hr",{className:h.divider}),e.createElement(i,{eightPx:!0})))),e.createElement(H,{onClick:()=>R(),onKeyDown:u=>u.nativeEvent.code==="Space"?R():!1},e.createElement(Ve,{className:h.addCircleIcon}),e.createElement(we,{className:h.imageText},e.createElement(s,{id:"Registrering.RegistrerVirksomhetPanel.Add"}))),d.isSubmitted&&((D=(T=d.errors[b])==null?void 0:T.notRegisteredInput)==null?void 0:D.message)&&e.createElement(L,null,(G=($=d.errors[b])==null?void 0:$.notRegisteredInput)==null?void 0:G.message),t!==void 0&&e.createElement(ge,{showModal:!0,virksomhet:t!==-1&&k.length>t?k[t]:void 0,onSubmit:M,closeEvent:V,readOnly:r,alleKodeverk:n}))};ue.__docgenInfo={description:`RegistrererVirksomhetPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder
foreldrepenger og søker har arbeidet i egen virksomhet.
Viser registrerte virksomheter samt knapp for å legge til nye virksomheter.`,methods:[],displayName:"RegistrerVirksomhetPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const ve=({readOnly:r=!0,alleKodeverk:n})=>{const a=j(),{watch:t}=N(),o=t(`${b}.harArbeidetIEgenVirksomhet`)||null;return e.createElement(Ne,null,e.createElement(ae,{size:"small"},e.createElement(s,{id:"Registrering.EgenVirksomhet.Title"})),e.createElement(i,{sixteenPx:!0}),e.createElement(q,{name:`${b}.harArbeidetIEgenVirksomhet`,validate:[c],isReadOnly:r,hideLegend:!0,isTrueOrFalseSelection:!0,radios:[{label:a.formatMessage({id:"Registrering.EgenVirksomhet.No"}),value:"false"},{label:a.formatMessage({id:"Registrering.EgenVirksomhet.Yes"}),value:"true"}]}),o&&e.createElement(ue,{readOnly:r,alleKodeverk:n}))};ve.__docgenInfo={description:`EgenVirksomhetPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
Søker må oppgi om hen har arbdeidet i egen virksomhet.`,methods:[],displayName:"EgenVirksomhetPanel",props:{alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const er=Te(Ae),ce=({readOnly:r,alleKodeverk:n})=>e.createElement(Pe,{value:er},e.createElement(ve,{readOnly:r,alleKodeverk:n})),pe=ce;ce.__docgenInfo={description:"",methods:[],displayName:"VirksomhetPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<KodeverkType, KodeverkMedNavn[]>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}],raw:"Omit<T, keyof R>"},{name:"signature",type:"object",raw:`{
  Avslagsårsak: Avslagsårsak;
}`,signature:{properties:[{key:"Avslagsårsak",value:{name:"Record",elements:[{name:"VilkarType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const mr={title:"papirsoknad/ui-komponenter/virksomhet",component:pe},rr=({submitCallback:r})=>{const n=ne();return e.createElement(te,{formMethods:n,onSubmit:r},e.createElement(pe,{readOnly:!1,alleKodeverk:je}),e.createElement(i,{fourtyPx:!0}),e.createElement(B,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},A=rr.bind({});A.args={submitCallback:Ke("button-click")};var W,Z,Q;A.parameters={...A.parameters,docs:{...(W=A.parameters)==null?void 0:W.docs,source:{originalSource:`({
  submitCallback
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <VirksomhetPapirsoknadIndex readOnly={false} alleKodeverk={(alleKodeverk as any)} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(Q=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};const kr=["Default"];export{A as Default,kr as __namedExportsOrder,mr as default};
