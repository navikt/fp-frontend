import{j as e}from"./dayjs.min-D0F5fy79.js";import{j as je,d as K,e as w,f as A,M as t,y as i,F as q,O as V,p as Re,W as ee,c as re,L as E,P as I,g as C,o as F,w as L,s as he,b as ne,Y as se,q as _,H as ae,B,i as xe,r as fe,l as be,x as Ve,D as we,S as Ne,t as Te,h as Pe,m as Ae,a as Ke}from"./nb_NO-Ck3UbI0K.js";import"./withRouter-DFPnh569.js";import{K as te,a as qe}from"./alleKodeverk-Dzm1yn2L.js";import{r as c,R as z,T as Me,b as S,_ as _e,Y as Fe,Z as ie,o as Ee}from"./index.es-9SLT0vzE.js";import{r as p,R as oe}from"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./index-CYM-y3Gt.js";var Ie=function(r,n){var a={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&n.indexOf(s)<0&&(a[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)n.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(a[s[o]]=r[s[o]]);return a};const H=p.forwardRef((r,n)=>{var{as:a="a",className:s,underline:o=!0,variant:g="action",inlineText:d=!1}=r,l=Ie(r,["as","className","underline","variant","inlineText"]);return oe.createElement(a,Object.assign({},l,{ref:n,className:je("navds-link",s,`navds-link--${g}`,{"navds-link--remove-underline":!o,"navds-link--inline-text":d})}))}),T={FISKE:"FISKE",FRILANSER:"FRILANSER",DAGMAMMA:"DAGMAMMA",JORDBRUK_ELLER_SKOGBRUK:"JORDBRUK_SKOGBRUK",ANNEN:"ANNEN"},Se="_navnBredde_1kwjo_1",Oe="_orgNrBredde_1kwjo_5",Be="_landBredde_1kwjo_9",O={navnBredde:Se,orgNrBredde:Oe,landBredde:Be},Ce=r=>r.map(({kode:n,navn:a})=>e.jsx("option",{value:n,children:a},n)),de=({readOnly:r=!0,alleKodeverk:n})=>{const a=K(),s=n[te.LANDKODER].slice().sort((l,v)=>l.navn.localeCompare(v.navn)),{watch:o,getValues:g}=w(),d=o("virksomhetRegistrertINorge");return e.jsxs(e.Fragment,{children:[e.jsx(A,{name:"navn",validate:[c],label:e.jsx(t,{id:"Registrering.VirksomhetIdentifikasjonPanel.Name"}),className:O.navnBredde,readOnly:r}),e.jsx(i,{sixteenPx:!0}),e.jsx(q,{name:"virksomhetRegistrertINorge",label:e.jsx(t,{id:"Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway"}),validate:[c],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Yes"}),value:"true"},{label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.No"}),value:"false"}]}),d&&e.jsxs(e.Fragment,{children:[e.jsx(i,{eightPx:!0}),e.jsx("div",{className:O.orgNrBredde,children:e.jsx(V,{children:e.jsx(A,{name:"organisasjonsnummer",readOnly:r,validate:[c,z,Me],label:e.jsx(t,{id:"Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber"})})})}),e.jsx(i,{sixteenPx:!0})]}),!d&&d!==void 0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{eightPx:!0}),e.jsxs(V,{alignOffset:57,children:[e.jsx(Re,{name:"landJobberFra",className:O.landBredde,selectValues:Ce(s),validate:[c],label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Country"})}),e.jsx(i,{sixteenPx:!0}),e.jsx(ee,{children:e.jsxs(re,{children:[e.jsx(E,{children:e.jsx(I,{isReadOnly:r,validate:[c,S,_e],name:"fom",label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeFom"})})}),e.jsx(E,{children:e.jsx(I,{isReadOnly:r,validate:[S,l=>{const v=g("fom");return v?Fe(v,l):null}],name:"tom",label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeTom"})})})]})})]})]})]})};de.__docgenInfo={description:`VirksomhetIdentifikasjonPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Le="_tlfBredde_nvz63_1",ze="_navnBredde_nvz63_5",Y={tlfBredde:Le,navnBredde:ze},le=({readOnly:r=!0})=>{const{watch:n}=w(),a=n("harRegnskapsforer")||!1;return e.jsxs(e.Fragment,{children:[e.jsx(q,{name:"harRegnskapsforer",label:e.jsx(t,{id:"Registrering.VirksomhetRegnskapPanel.Accountant"}),isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:e.jsx(t,{id:"Registrering.VirksomhetRegnskapPanel.Yes"}),value:"true"},{label:e.jsx(t,{id:"Registrering.VirksomhetRegnskapPanel.No"}),value:"false"}]}),a&&e.jsxs(e.Fragment,{children:[e.jsx(i,{eightPx:!0}),e.jsxs(V,{children:[e.jsx(A,{name:"navnRegnskapsforer",className:Y.navnBredde,readOnly:r,validate:[c,ie],label:e.jsx(t,{id:"Registrering.VirksomhetRegnskapPanel.AccountantName"})}),e.jsx(i,{sixteenPx:!0}),e.jsx(A,{name:"tlfRegnskapsforer",readOnly:r,validate:[c,z],className:Y.tlfBredde,label:e.jsx(t,{id:"Registrering.VirksomhetRegnskapPanel.AccountantPhone"})})]}),e.jsx(i,{sixteenPx:!0})]})]})};le.__docgenInfo={description:`VirksomhetRegnskapPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom
søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetRegnskapPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const De="_inntektBredde_1xgnj_1",$e={inntektBredde:De},me=({readOnly:r})=>{var R,m,j,b;const n=K(),{watch:a,setError:s,clearErrors:o,formState:g}=w(),d=a("varigEndretEllerStartetSisteFireAr")||!1,l=a("harVarigEndring")||!1,v=a("erNyoppstartet")||!1,k=a("erNyIArbeidslivet")||!1,y=!l&&!v&&!k;return p.useEffect(()=>{y&&d&&s("ingenArsakValgt",{type:"custom",message:n.formatMessage({id:"Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak"})}),(!y||!d)&&o("ingenArsakValgt")},[y,d]),e.jsxs(e.Fragment,{children:[e.jsx(i,{sixteenPx:!0}),e.jsx(q,{name:"varigEndretEllerStartetSisteFireAr",label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged"}),isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.Yes"}),value:"true"},{label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.No"}),value:"false"}]}),d&&e.jsxs("div",{children:[e.jsx(i,{eightPx:!0}),e.jsxs(V,{children:[e.jsx(C,{size:"small",children:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.Reason"})}),e.jsx(i,{fourPx:!0}),e.jsx(F,{name:"harVarigEndring",label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.HarVarigEndring"})}),e.jsx(i,{fourPx:!0}),l&&e.jsxs(e.Fragment,{children:[e.jsx(i,{sixteenPx:!0}),e.jsx(V,{children:e.jsx(I,{name:"varigEndringGjeldendeFom",isReadOnly:r,validate:[S,c],label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]}),e.jsx(F,{name:"erNyoppstartet",label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.ErNyoppstartet"})}),e.jsx(i,{fourPx:!0}),e.jsx(F,{name:"erNyIArbeidslivet",label:e.jsx(t,{id:"Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet"})}),e.jsx(i,{fourPx:!0}),k&&e.jsxs(e.Fragment,{children:[e.jsx(i,{sixteenPx:!0}),e.jsx(V,{children:e.jsx(I,{name:"nyIArbeidslivetFom",isReadOnly:r,validate:[S,c],label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]}),g.isSubmitted&&((m=(R=g.errors)==null?void 0:R.ingenArsakValgt)==null?void 0:m.message)&&e.jsx(L,{children:(b=(j=g.errors)==null?void 0:j.ingenArsakValgt)==null?void 0:b.message}),e.jsx(i,{sixteenPx:!0}),e.jsx(he,{name:"beskrivelseAvEndring",label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse"}),validate:[ie]}),e.jsx(i,{sixteenPx:!0}),e.jsx(A,{name:"inntekt",label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.Inntekt"}),readOnly:r,validate:[z,c],className:$e.inntektBredde,parse:M=>{const N=parseInt(M.toString(),10);return Number.isNaN(N)?M:N}})]})]}),e.jsx(i,{eightPx:!0})]})};me.__docgenInfo={description:`VirksomhetStartetEndretPanel

Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetStartetEndretPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ke=({readOnly:r=!0})=>e.jsx(q,{name:"familieEllerVennerTilknyttetNaringen",label:e.jsx(t,{id:"Registrering.VirksomhetRelasjonPanel.Relation"}),isReadOnly:r,isTrueOrFalseSelection:!0,radios:[{label:e.jsx(t,{id:"Registrering.VirksomhetRelasjonPanel.Yes"}),value:"true"},{label:e.jsx(t,{id:"Registrering.VirksomhetRelasjonPanel.No"}),value:"false"}]});ke.__docgenInfo={description:`VirksomhetRelasjonPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
søker.`,methods:[],displayName:"VirksomhetRelasjonPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const U="typeVirksomhet",J={[T.DAGMAMMA]:1,[T.FISKE]:2,[T.JORDBRUK_ELLER_SKOGBRUK]:3,[T.ANNEN]:4},Ge=(r,n)=>r>n?1:r<n?-1:0,ge=({readOnly:r,alleKodeverk:n})=>{var y,R;const a=n[te.VIRKSOMHET_TYPE],s=p.useMemo(()=>a.filter(m=>m.kode!==T.FRILANSER).sort((m,j)=>Ge(J[m.kode],J[j.kode])),[]),{watch:o,setError:g,formState:d,clearErrors:l}=w(),v=o(U),k=!v||!Object.values(v).some(m=>m===!0);return p.useEffect(()=>{k&&g("notRegisteredInput",{type:"custom",message:Ee()}),k||l("notRegisteredInput")},[k]),e.jsxs(e.Fragment,{children:[e.jsx(i,{eightPx:!0}),e.jsx(C,{size:"small",children:e.jsx(t,{id:"Registrering.VirksomhetNaeringTypePanel.Title"})}),e.jsx(i,{fourPx:!0}),s.map(m=>e.jsxs(p.Fragment,{children:[e.jsx(i,{fourPx:!0}),e.jsx(F,{name:`${U}.${m.kode}`,label:m.navn,readOnly:r},m.kode)]},m.kode)),d.isSubmitted&&((y=d.errors.notRegisteredInput)==null?void 0:y.message)&&e.jsx(L,{children:(R=d.errors.notRegisteredInput)==null?void 0:R.message})]})};ge.__docgenInfo={description:`VirksomhetTypeNaringPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const He="_savebutton_tgfg3_1",Ye="_cancelbutton_tgfg3_1",Ue="_form_tgfg3_5",X={savebutton:He,cancelbutton:Ye,form:Ue},ue=({showModal:r=!1,readOnly:n=!1,closeEvent:a,onSubmit:s,alleKodeverk:o,virksomhet:g})=>{const d=K(),l=ne({defaultValues:g});return e.jsx(se,{formMethods:l,children:e.jsxs(_,{open:r,"aria-label":d.formatMessage({id:"Registrering.RegistrerVirksomhetModalForm.ModalDescription"}),onClose:a,children:[e.jsx(_.Header,{children:e.jsx(ae,{size:"small",children:e.jsx(t,{id:"Registrering.RegistrerVirksomhetModalForm.Title"})})}),e.jsxs(_.Body,{children:[e.jsx(de,{readOnly:n,alleKodeverk:o}),e.jsx(ge,{readOnly:n,alleKodeverk:o}),e.jsx(me,{readOnly:n}),e.jsx(le,{readOnly:n}),e.jsx(i,{sixteenPx:!0}),e.jsx(ke,{readOnly:n}),e.jsx(i,{sixteenPx:!0})]}),e.jsxs(_.Footer,{children:[e.jsx(B,{size:"small",variant:"primary",onClick:l.handleSubmit(s),disabled:n,className:X.savebutton,type:"button",children:e.jsx(t,{id:"Registrering.RegistrerVirksomhetModalForm.Save"})}),e.jsx(B,{size:"small",variant:"secondary",onClick:a,disabled:n,className:X.cancelbutton,type:"button",children:e.jsx(t,{id:"Registrering.RegistrerVirksomhetModalForm.Cancel"})})]})]})})};ue.__docgenInfo={description:`RegistrerVirksomhetModalForm

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
TypeNaringFormValues`,elements:[{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"}]},description:""}}};const Je="_divider_1ed8l_1",Xe="_fieldsList_1ed8l_7",We="_addCircleIcon_1ed8l_11",Ze="_imageText_1ed8l_12",Qe="_customLink_1ed8l_17",er="_removeButton_1ed8l_22",x={divider:Je,fieldsList:Xe,addCircleIcon:We,imageText:Ze,customLink:Qe,removeButton:er},f="egenVirksomhet",ve=({readOnly:r=!1,alleKodeverk:n})=>{var N,D,$,G;const a=K(),[s,o]=p.useState(),{control:g,setError:d,formState:l,clearErrors:v}=w(),{fields:k,remove:y,append:R,update:m}=xe({control:g,name:`${f}.virksomheter`}),j=p.useCallback(u=>{o(u!==void 0?u:-1)},[o]),b=p.useCallback(()=>{o(void 0)},[o]),M=p.useCallback(u=>{const h={...u,landJobberFra:u.virksomhetRegistrertINorge?"NOR":u.landJobberFra,varigEndringGjeldendeFom:u.nyIArbeidslivetFom||u.varigEndringGjeldendeFom};s===-1?R(h):s!==void 0&&m(s,h),b()},[R,m,b,s]);return p.useEffect(()=>{k.length===0&&d(`${f}.notRegisteredInput`,{type:"custom",message:a.formatMessage({id:"Registrering.RegistrerVirksomhetPanel.ArrayMinLength"})}),k.length>0&&v(`${f}.notRegisteredInput`)},[k.length]),e.jsxs("div",{className:x.fieldsList,children:[k.length>0&&e.jsxs(oe.Fragment,{children:[e.jsx(C,{size:"small",children:e.jsx(t,{id:"Registrering.RegistrerVirksomhetPanel.Name"})}),e.jsx("hr",{className:x.divider}),k.map((u,h)=>e.jsxs(ee,{children:[e.jsxs(re,{children:[e.jsx(E,{children:e.jsx(H,{className:x.customLink,onClick:()=>j(h),onKeyDown:()=>j(h),children:e.jsx(fe,{size:"small",children:u.navn})})}),e.jsx(E,{children:e.jsx(be,{className:x.removeButton,onClick:()=>y(h),onKeyDown:()=>y(h)})})]}),e.jsx("hr",{className:x.divider}),e.jsx(i,{eightPx:!0})]},u.id))]},1),e.jsxs(H,{onClick:()=>j(),onKeyDown:u=>u.nativeEvent.code==="Space"?j():!1,children:[e.jsx(Ve,{className:x.addCircleIcon}),e.jsx(we,{className:x.imageText,children:e.jsx(t,{id:"Registrering.RegistrerVirksomhetPanel.Add"})})]}),l.isSubmitted&&((D=(N=l.errors[f])==null?void 0:N.notRegisteredInput)==null?void 0:D.message)&&e.jsx(L,{children:(G=($=l.errors[f])==null?void 0:$.notRegisteredInput)==null?void 0:G.message}),s!==void 0&&e.jsx(ue,{showModal:!0,virksomhet:s!==-1&&k.length>s?k[s]:void 0,onSubmit:M,closeEvent:b,readOnly:r,alleKodeverk:n})]})};ve.__docgenInfo={description:`RegistrererVirksomhetPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const ce=({readOnly:r=!0,alleKodeverk:n})=>{const a=K(),{watch:s}=w(),o=s(`${f}.harArbeidetIEgenVirksomhet`)||null;return e.jsxs(Ne,{children:[e.jsx(ae,{size:"small",children:e.jsx(t,{id:"Registrering.EgenVirksomhet.Title"})}),e.jsx(i,{sixteenPx:!0}),e.jsx(q,{name:`${f}.harArbeidetIEgenVirksomhet`,validate:[c],isReadOnly:r,hideLegend:!0,isTrueOrFalseSelection:!0,radios:[{label:a.formatMessage({id:"Registrering.EgenVirksomhet.No"}),value:"false"},{label:a.formatMessage({id:"Registrering.EgenVirksomhet.Yes"}),value:"true"}]}),o&&e.jsx(ve,{readOnly:r,alleKodeverk:n})]})};ce.__docgenInfo={description:`EgenVirksomhetPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const rr=Te(Ae),pe=({readOnly:r,alleKodeverk:n})=>e.jsx(Pe,{value:rr,children:e.jsx(ce,{readOnly:r,alleKodeverk:n})}),ye=pe;pe.__docgenInfo={description:"",methods:[],displayName:"VirksomhetPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const kr={title:"papirsoknad/ui-komponenter/virksomhet",component:ye},nr=({submitCallback:r})=>{const n=ne();return e.jsxs(se,{formMethods:n,onSubmit:r,children:[e.jsx(ye,{readOnly:!1,alleKodeverk:qe}),e.jsx(i,{fourtyPx:!0}),e.jsx(B,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},P=nr.bind({});P.args={submitCallback:Ke("button-click")};var W,Z,Q;P.parameters={...P.parameters,docs:{...(W=P.parameters)==null?void 0:W.docs,source:{originalSource:`({
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
}`,...(Q=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};const gr=["Default"];export{P as Default,gr as __namedExportsOrder,kr as default};
