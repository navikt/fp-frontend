import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{H as c,d as C,b as ye,g as F,p as je,c as Re,S as re,e as he,a as xe}from"./index.es-8Fll0b49.js";import{h as fe,d as T,e as N,F as P,M as t,y as i,k as q,l as w,n as Ve,W as ne,b as se,L as I,P as S,o as D,w as E,E as z,s as be,a as ae,$ as te,q as M,H as ie,B,f as we,r as Ne,j as Ae,x as Pe,D as Te,S as qe,t as Ke,c as Me,m as _e,V as Ee}from"./nb_NO-gSijKUYs.js";import"./withRouter-DhSU4y_G.js";import{K as oe,a as Fe}from"./alleKodeverk-D-QME5s7.js";import{r as p,R as de}from"./index-DRjF_FHU.js";import"./aktivitetStatus-B1m96ipJ.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";var Ie=function(r,n){var a={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&n.indexOf(s)<0&&(a[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)n.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(a[s[o]]=r[s[o]]);return a};const U=p.forwardRef((r,n)=>{var{as:a="a",className:s,underline:o=!0,variant:k="action",inlineText:d=!1}=r,l=Ie(r,["as","className","underline","variant","inlineText"]);return de.createElement(a,Object.assign({},l,{ref:n,className:fe("navds-link",s,`navds-link--${k}`,{"navds-link--remove-underline":!o,"navds-link--inline-text":d})}))});var b=(r=>(r.FISKE="FISKE",r.FRILANSER="FRILANSER",r.DAGMAMMA="DAGMAMMA",r.JORDBRUK_ELLER_SKOGBRUK="JORDBRUK_SKOGBRUK",r.ANNEN="ANNEN",r))(b||{});const Se="_navnBredde_1kwjo_1",Oe="_orgNrBredde_1kwjo_5",Be="_landBredde_1kwjo_9",O={navnBredde:Se,orgNrBredde:Oe,landBredde:Be},Le=r=>r.map(({kode:n,navn:a})=>e.jsx("option",{value:n,children:a},n)),le=({readOnly:r=!0,alleKodeverk:n})=>{const a=T(),s=n[oe.LANDKODER].slice().sort((l,v)=>l.navn.localeCompare(v.navn)),{watch:o,getValues:k}=N(),d=o("virksomhetRegistrertINorge");return e.jsxs(e.Fragment,{children:[e.jsx(P,{name:"navn",validate:[c],label:e.jsx(t,{id:"Registrering.VirksomhetIdentifikasjonPanel.Name"}),className:O.navnBredde,readOnly:r}),e.jsx(i,{sixteenPx:!0}),e.jsx(q,{name:"virksomhetRegistrertINorge",label:e.jsx(t,{id:"Registrering.VirksomhetIdentifikasjonPanel.RegisteredInNorway"}),validate:[c],isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Yes"}),value:"true"},{label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.No"}),value:"false"}]}),d&&e.jsxs(e.Fragment,{children:[e.jsx(i,{eightPx:!0}),e.jsx("div",{className:O.orgNrBredde,children:e.jsx(w,{children:e.jsx(P,{name:"organisasjonsnummer",readOnly:r,validate:[c,C,ye],label:e.jsx(t,{id:"Registrering.VirksomhetIdentifikasjonPanel.OrganizationNumber"})})})}),e.jsx(i,{sixteenPx:!0})]}),!d&&d!==void 0&&e.jsxs(e.Fragment,{children:[e.jsx(i,{eightPx:!0}),e.jsxs(w,{alignOffset:57,children:[e.jsx(Ve,{name:"landJobberFra",className:O.landBredde,selectValues:Le(s),validate:[c],label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.Country"})}),e.jsx(i,{sixteenPx:!0}),e.jsx(ne,{children:e.jsxs(se,{children:[e.jsx(I,{children:e.jsx(S,{isReadOnly:r,validate:[c,F,je],name:"fom",label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeFom"})})}),e.jsx(I,{children:e.jsx(S,{isReadOnly:r,validate:[F,l=>{const v=k("fom");return v?Re(v,l):null}],name:"tom",label:a.formatMessage({id:"Registrering.VirksomhetIdentifikasjonPanel.periodeTom"})})})]})})]})]})]})};le.__docgenInfo={description:`VirksomhetIdentifikasjonPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Ce="_tlfBredde_nvz63_1",De="_navnBredde_nvz63_5",Y={tlfBredde:Ce,navnBredde:De},me=({readOnly:r=!0})=>{const{watch:n}=N(),a=n("harRegnskapsforer")||!1;return e.jsxs(e.Fragment,{children:[e.jsx(q,{name:"harRegnskapsforer",label:e.jsx(t,{id:"Registrering.VirksomhetRegnskapPanel.Accountant"}),isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:e.jsx(t,{id:"Registrering.VirksomhetRegnskapPanel.Yes"}),value:"true"},{label:e.jsx(t,{id:"Registrering.VirksomhetRegnskapPanel.No"}),value:"false"}]}),a&&e.jsxs(e.Fragment,{children:[e.jsx(i,{eightPx:!0}),e.jsxs(w,{children:[e.jsx(P,{name:"navnRegnskapsforer",className:Y.navnBredde,readOnly:r,validate:[c,re],label:e.jsx(t,{id:"Registrering.VirksomhetRegnskapPanel.AccountantName"})}),e.jsx(i,{sixteenPx:!0}),e.jsx(P,{name:"tlfRegnskapsforer",readOnly:r,validate:[c,C],className:Y.tlfBredde,label:e.jsx(t,{id:"Registrering.VirksomhetRegnskapPanel.AccountantPhone"})})]}),e.jsx(i,{sixteenPx:!0})]})]})};me.__docgenInfo={description:`VirksomhetRegnskapPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom
søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetRegnskapPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const ze="_inntektBredde_1xgnj_1",$e={inntektBredde:ze},ge=({readOnly:r})=>{var R,m,j,V;const n=T(),{watch:a,setError:s,clearErrors:o,formState:k}=N(),d=a("varigEndretEllerStartetSisteFireAr")||!1,l=a("harVarigEndring")||!1,v=a("erNyoppstartet")||!1,g=a("erNyIArbeidslivet")||!1,y=!l&&!v&&!g;return p.useEffect(()=>{y&&d&&s("ingenArsakValgt",{type:"custom",message:n.formatMessage({id:"Registrering.VirksomhetStartetPanel.MaFylleUtEnArsak"})}),(!y||!d)&&o("ingenArsakValgt")},[y,d]),e.jsxs(e.Fragment,{children:[e.jsx(i,{sixteenPx:!0}),e.jsx(q,{name:"varigEndretEllerStartetSisteFireAr",label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.NewlyStartedOrChanged"}),isReadOnly:r,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.Yes"}),value:"true"},{label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.No"}),value:"false"}]}),d&&e.jsxs("div",{children:[e.jsx(i,{eightPx:!0}),e.jsxs(w,{children:[e.jsx(D,{size:"small",children:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.Reason"})}),e.jsx(i,{fourPx:!0}),e.jsx(E,{name:"harVarigEndring",label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.HarVarigEndring"})}),e.jsx(i,{fourPx:!0}),l&&e.jsxs(e.Fragment,{children:[e.jsx(i,{sixteenPx:!0}),e.jsx(w,{children:e.jsx(S,{name:"varigEndringGjeldendeFom",isReadOnly:r,validate:[F,c],label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]}),e.jsx(E,{name:"erNyoppstartet",label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.ErNyoppstartet"})}),e.jsx(i,{fourPx:!0}),e.jsx(E,{name:"erNyIArbeidslivet",label:e.jsx(t,{id:"Registrering.VirksomhetNyIArbeidslivetPanel.ErNyIArbeidslivet"})}),e.jsx(i,{fourPx:!0}),g&&e.jsxs(e.Fragment,{children:[e.jsx(i,{sixteenPx:!0}),e.jsx(w,{children:e.jsx(S,{name:"nyIArbeidslivetFom",isReadOnly:r,validate:[F,c],label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.GjeldendeFom"})})})]}),k.isSubmitted&&((m=(R=k.errors)==null?void 0:R.ingenArsakValgt)==null?void 0:m.message)&&e.jsx(z,{children:(V=(j=k.errors)==null?void 0:j.ingenArsakValgt)==null?void 0:V.message}),e.jsx(i,{sixteenPx:!0}),e.jsx(be,{name:"beskrivelseAvEndring",label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.VirksomhetEndretBeskrivelse"}),validate:[re]}),e.jsx(i,{sixteenPx:!0}),e.jsx(P,{name:"inntekt",label:e.jsx(t,{id:"Registrering.VirksomhetStartetPanel.Inntekt"}),readOnly:r,validate:[C,c],className:$e.inntektBredde,parse:K=>{const A=parseInt(K.toString(),10);return Number.isNaN(A)?K:A}})]})]}),e.jsx(i,{eightPx:!0})]})};ge.__docgenInfo={description:`VirksomhetStartetEndretPanel

Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for søker.`,methods:[],displayName:"VirksomhetStartetEndretPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const ke=({readOnly:r=!0})=>e.jsx(q,{name:"familieEllerVennerTilknyttetNaringen",label:e.jsx(t,{id:"Registrering.VirksomhetRelasjonPanel.Relation"}),isReadOnly:r,isTrueOrFalseSelection:!0,radios:[{label:e.jsx(t,{id:"Registrering.VirksomhetRelasjonPanel.Yes"}),value:"true"},{label:e.jsx(t,{id:"Registrering.VirksomhetRelasjonPanel.No"}),value:"false"}]});ke.__docgenInfo={description:`VirksomhetRelasjonPanel

Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av
papirsøknad dersom søknad gjelder foreldrepenger og saksbehandler skal legge til ny virksomhet for
søker.`,methods:[],displayName:"VirksomhetRelasjonPanel",props:{readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const J="typeVirksomhet",X={[b.DAGMAMMA]:1,[b.FISKE]:2,[b.JORDBRUK_ELLER_SKOGBRUK]:3,[b.ANNEN]:4},He=(r,n)=>r>n?1:r<n?-1:0,ue=({readOnly:r,alleKodeverk:n})=>{var y,R;const a=n[oe.VIRKSOMHET_TYPE],s=p.useMemo(()=>a.filter(m=>m.kode!==b.FRILANSER).sort((m,j)=>He(X[m.kode],X[j.kode])),[]),{watch:o,setError:k,formState:d,clearErrors:l}=N(),v=o(J),g=!v||!Object.values(v).some(m=>m===!0);return p.useEffect(()=>{g&&k("notRegisteredInput",{type:"custom",message:he()}),g||l("notRegisteredInput")},[g]),e.jsxs(e.Fragment,{children:[e.jsx(i,{eightPx:!0}),e.jsx(D,{size:"small",children:e.jsx(t,{id:"Registrering.VirksomhetNaeringTypePanel.Title"})}),e.jsx(i,{fourPx:!0}),s.map(m=>e.jsxs(p.Fragment,{children:[e.jsx(i,{fourPx:!0}),e.jsx(E,{name:`${J}.${m.kode}`,label:m.navn,readOnly:r},m.kode)]},m.kode)),d.isSubmitted&&((y=d.errors.notRegisteredInput)==null?void 0:y.message)&&e.jsx(z,{children:(R=d.errors.notRegisteredInput)==null?void 0:R.message})]})};ue.__docgenInfo={description:`VirksomhetTypeNaringPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const Ge="_savebutton_tgfg3_1",Ue="_cancelbutton_tgfg3_1",Ye="_form_tgfg3_5",W={savebutton:Ge,cancelbutton:Ue,form:Ye},ve=({showModal:r=!1,readOnly:n=!1,closeEvent:a,onSubmit:s,alleKodeverk:o,virksomhet:k})=>{const d=T(),l=ae({defaultValues:k});return e.jsx(te,{formMethods:l,children:e.jsxs(M,{open:r,"aria-label":d.formatMessage({id:"Registrering.RegistrerVirksomhetModalForm.ModalDescription"}),onClose:a,children:[e.jsx(M.Header,{children:e.jsx(ie,{size:"small",children:e.jsx(t,{id:"Registrering.RegistrerVirksomhetModalForm.Title"})})}),e.jsxs(M.Body,{children:[e.jsx(le,{readOnly:n,alleKodeverk:o}),e.jsx(ue,{readOnly:n,alleKodeverk:o}),e.jsx(ge,{readOnly:n}),e.jsx(me,{readOnly:n}),e.jsx(i,{sixteenPx:!0}),e.jsx(ke,{readOnly:n}),e.jsx(i,{sixteenPx:!0})]}),e.jsxs(M.Footer,{children:[e.jsx(B,{size:"small",variant:"primary",onClick:l.handleSubmit(s),disabled:n,className:W.savebutton,type:"button",children:e.jsx(t,{id:"Registrering.RegistrerVirksomhetModalForm.Save"})}),e.jsx(B,{size:"small",variant:"secondary",onClick:a,disabled:n,className:W.cancelbutton,type:"button",children:e.jsx(t,{id:"Registrering.RegistrerVirksomhetModalForm.Cancel"})})]})]})})};ve.__docgenInfo={description:`RegistrerVirksomhetModalForm

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
TypeNaringFormValues`,elements:[{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"},{name:"FormValues"}]},description:""}}};const Je="_divider_1ed8l_1",Xe="_fieldsList_1ed8l_7",We="_addCircleIcon_1ed8l_11",Qe="_imageText_1ed8l_12",Ze="_customLink_1ed8l_17",er="_removeButton_1ed8l_22",x={divider:Je,fieldsList:Xe,addCircleIcon:We,imageText:Qe,customLink:Ze,removeButton:er},f="egenVirksomhet",ce=({readOnly:r=!1,alleKodeverk:n})=>{var A,$,H,G;const a=T(),[s,o]=p.useState(),{control:k,setError:d,formState:l,clearErrors:v}=N(),{fields:g,remove:y,append:R,update:m}=we({control:k,name:`${f}.virksomheter`}),j=p.useCallback(u=>{o(u!==void 0?u:-1)},[o]),V=p.useCallback(()=>{o(void 0)},[o]),K=p.useCallback(u=>{const h={...u,landJobberFra:u.virksomhetRegistrertINorge?"NOR":u.landJobberFra,varigEndringGjeldendeFom:u.nyIArbeidslivetFom||u.varigEndringGjeldendeFom};s===-1?R(h):s!==void 0&&m(s,h),V()},[R,m,V,s]);return p.useEffect(()=>{g.length===0&&d(`${f}.notRegisteredInput`,{type:"custom",message:a.formatMessage({id:"Registrering.RegistrerVirksomhetPanel.ArrayMinLength"})}),g.length>0&&v(`${f}.notRegisteredInput`)},[g.length]),e.jsxs("div",{className:x.fieldsList,children:[g.length>0&&e.jsxs(de.Fragment,{children:[e.jsx(D,{size:"small",children:e.jsx(t,{id:"Registrering.RegistrerVirksomhetPanel.Name"})}),e.jsx("hr",{className:x.divider}),g.map((u,h)=>e.jsxs(ne,{children:[e.jsxs(se,{children:[e.jsx(I,{children:e.jsx(U,{className:x.customLink,onClick:()=>j(h),onKeyDown:()=>j(h),children:e.jsx(Ne,{size:"small",children:u.navn})})}),e.jsx(I,{children:e.jsx(Ae,{className:x.removeButton,onClick:()=>y(h),onKeyDown:()=>y(h)})})]}),e.jsx("hr",{className:x.divider}),e.jsx(i,{eightPx:!0})]},u.id))]},1),e.jsxs(U,{onClick:()=>j(),onKeyDown:u=>u.nativeEvent.code==="Space"?j():!1,children:[e.jsx(Pe,{className:x.addCircleIcon}),e.jsx(Te,{className:x.imageText,children:e.jsx(t,{id:"Registrering.RegistrerVirksomhetPanel.Add"})})]}),l.isSubmitted&&(($=(A=l.errors[f])==null?void 0:A.notRegisteredInput)==null?void 0:$.message)&&e.jsx(z,{children:(G=(H=l.errors[f])==null?void 0:H.notRegisteredInput)==null?void 0:G.message}),s!==void 0&&e.jsx(ve,{showModal:!0,virksomhet:s!==-1&&g.length>s?g[s]:void 0,onSubmit:K,closeEvent:V,readOnly:r,alleKodeverk:n})]})};ce.__docgenInfo={description:`RegistrererVirksomhetPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const pe=({readOnly:r=!0,alleKodeverk:n})=>{const a=T(),{watch:s}=N(),o=s(`${f}.harArbeidetIEgenVirksomhet`)||null;return e.jsxs(qe,{children:[e.jsx(ie,{size:"small",children:e.jsx(t,{id:"Registrering.EgenVirksomhet.Title"})}),e.jsx(i,{sixteenPx:!0}),e.jsx(q,{name:`${f}.harArbeidetIEgenVirksomhet`,validate:[c],isReadOnly:r,hideLegend:!0,isTrueOrFalseSelection:!0,radios:[{label:a.formatMessage({id:"Registrering.EgenVirksomhet.No"}),value:"false"},{label:a.formatMessage({id:"Registrering.EgenVirksomhet.Yes"}),value:"true"}]}),o&&e.jsx(ce,{readOnly:r,alleKodeverk:n})]})};pe.__docgenInfo={description:`EgenVirksomhetPanel

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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const rr=Ke(_e),L=({readOnly:r,alleKodeverk:n})=>e.jsx(Me,{value:rr,children:e.jsx(pe,{readOnly:r,alleKodeverk:n})});L.__docgenInfo={description:"",methods:[],displayName:"VirksomhetPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""}}};const kr={title:"papirsoknad/ui-komponenter/virksomhet",component:L,parameters:{submitCallback:xe("onSubmit")},args:{readOnly:!1,alleKodeverk:Fe},render:function(n,{parameters:{submitCallback:a}}){const s=ae();return e.jsx(te,{formMethods:s,onSubmit:a,children:e.jsxs(Ee,{gap:"10",children:[e.jsx(L,{...n}),e.jsx(B,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},_={};var Q,Z,ee;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:"{}",...(ee=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ur=["Default"];export{_ as Default,ur as __namedExportsOrder,kr as default};
