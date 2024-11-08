import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{e as C,f as E,g as X,I as Z,K as ee,y as p,p as re,W as ae,c as ne,L as k,P as I,A as N,S as oe,H as le,M as F,k as x,O as R,t as se,d as te,m as de,a as z,b as ie,$ as pe,B as me}from"./nb_NO-5CofAXXD.js";import"./withRouter-DhSU4y_G.js";import{K as ue,a as ge}from"./alleKodeverk-D-QME5s7.js";import{g as he,r as H,R as fe}from"./index-DRjF_FHU.js";import{H as u,g as q,D as j,U as V,f as ce}from"./index.es-CP-sLi8l.js";import{l as ye}from"./landkoder-T-1RG3zx.js";import{h as T}from"./moment-C5S46NFB.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";var L={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(a){(function(){var n={}.hasOwnProperty;function l(){for(var e="",s=0;s<arguments.length;s++){var t=arguments[s];t&&(e=o(e,d.call(this,t)))}return e}function d(e){if(typeof e=="string"||typeof e=="number")return this&&this[e]||e;if(typeof e!="object")return"";if(Array.isArray(e))return l.apply(this,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var s="";for(var t in e)n.call(e,t)&&e[t]&&(s=o(s,this&&this[t]||t));return s}function o(e,s){return s?e?e+" "+s:e+s:e}a.exports?(l.default=l,a.exports=l):window.classNames=l})()})(L);var Oe=L.exports;const Fe=he(Oe),ve="_datesRowWithRemoveButton_od5lu_1",be="_selectBredde_od5lu_7",W={datesRowWithRemoveButton:ve,selectBredde:be},ke=Fe.bind(W),xe={land:"",periodeFom:"",periodeTom:""},v=(a,n)=>a(n),w=(a,n)=>()=>{const d=a(n).filter(({periodeFom:o,periodeTom:e})=>o&&o!==""&&e&&e!=="").map(({periodeFom:o,periodeTom:e})=>[o,e]);return d.length>0?ce(d):void 0},je=a=>a.filter(({kode:n})=>n!==ye.NORGE).map(({kode:n,navn:l})=>r.jsx("option",{value:n,children:l},n)),P=(a,n,l,d)=>()=>{const o=v(a,`${n}.${l}.periodeFom`),e=v(a,`${n}.${l}.periodeTom`);return!e||!o?null:d?j(e)(o):V(o)(e)},U=({erTidligereOpphold:a,mottattDato:n,readOnly:l,countryCodes:d})=>{const o=C(),e=a?"tidligereOppholdUtenlands":"fremtidigeOppholdUtenlands",{control:s,getValues:t,trigger:y,formState:{isSubmitted:O}}=E(),{fields:b,remove:Y,append:G}=X({control:s,name:e}),J=H.useMemo(()=>je(d),[d]);return r.jsx(Z,{fields:b,titleText:o.formatMessage({id:"Registrering.RegistreringOpphold.AngiOpphold"}),bodyText:o.formatMessage({id:"Registrering.RegistreringOpphold.Add"}),emptyPeriodTemplate:xe,createAddButtonInsteadOfImageLink:!0,readOnly:l,remove:Y,append:G,children:(Q,i,A)=>r.jsxs(fe.Fragment,{children:[i>0&&r.jsxs(r.Fragment,{children:[r.jsx(ee,{}),r.jsx(p,{sixteenPx:!0})]}),r.jsx(re,{name:`${e}.${i}.land`,label:o.formatMessage({id:"Registrering.RegistreringOpphold.Country"}),selectValues:J,className:W.selectBredde,readOnly:l,validate:[u]}),r.jsx(p,{sixteenPx:!0}),r.jsx(ae,{children:r.jsxs(ne,{className:ke({datesRowWithRemoveButton:i>0}),children:[r.jsx(k,{children:r.jsx(I,{name:`${e}.${i}.periodeFom`,label:o.formatMessage({id:"Registrering.RegistreringOpphold.periodeFom"}),isReadOnly:l,validate:[u,q,P(t,e,i,!0),()=>{const h=v(t,`${e}.${i}.periodeFom`);return a?j(T().format(N))(h):n?V(n)(h):void 0},w(t,e)],onChange:()=>O?y():void 0})}),r.jsx(k,{children:r.jsx(I,{name:`${e}.${i}.periodeTom`,label:o.formatMessage({id:"Registrering.RegistreringOpphold.periodeTom"}),isReadOnly:l,validate:[u,q,P(t,e,i,!1),()=>{const h=v(t,`${e}.${i}.periodeTom`);return a?j(T().format(N))(h):n?V(n)(h):void 0},w(t,e)],onChange:()=>O?y():void 0})}),A&&r.jsx(k,{children:A()})]})}),r.jsx(p,{sixteenPx:!0})]},Q.id)})};U.__docgenInfo={description:`UtenlandsOppholdField

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
Komponenten lar saksbehandler legge inn informasjon om ett eller flere utenlandsopphold fra søknaden. Komponenten eksponerer valideringsregler
som lar seg tilpasse om opphold skal være fram eller tilbake i tid.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"UtenlandsOppholdField",props:{erTidligereOpphold:{required:!0,tsType:{name:"boolean"},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""},countryCodes:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const g=({readOnly:a=!0,alleKodeverk:n,mottattDato:l,erAdopsjon:d})=>{const{formatMessage:o}=C(),e=H.useMemo(()=>n[ue.LANDKODER].slice().sort((O,b)=>O.navn.localeCompare(b.navn)),[n]),{watch:s}=E(),t=s("harTidligereOppholdUtenlands")||!1,y=s("harFremtidigeOppholdUtenlands")||!1;return r.jsxs(oe,{children:[r.jsx(le,{size:"small",children:r.jsx(F,{id:"Registrering.Opphold"})}),r.jsx(p,{sixteenPx:!0}),r.jsx(x,{name:"oppholdINorge",label:r.jsx(F,{id:d?"Registrering.OppholdVedAdopsjon":"Registrering.OppholdVedFodsel"}),validate:[u],isReadOnly:a,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:o({id:"Registrering.Opphold.Yes"}),value:"true"},{label:o({id:"Registrering.Opphold.No"}),value:"false"}]}),r.jsx(p,{sixteenPx:!0}),r.jsx(x,{name:"harTidligereOppholdUtenlands",label:r.jsx(F,{id:"Registrering.OppholdSisteTolv"}),validate:[u],isReadOnly:a,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:o({id:"Registrering.Opphold.Yes"}),value:"false"},{label:o({id:"Registrering.Opphold.No"}),value:"true"}]}),t?r.jsxs(r.Fragment,{children:[r.jsx(p,{eightPx:!0}),r.jsx(R,{alignOffset:64,children:r.jsx(U,{erTidligereOpphold:!0,mottattDato:l,countryCodes:e,readOnly:a})})]}):null,r.jsx(p,{sixteenPx:!0}),r.jsx(x,{name:"harFremtidigeOppholdUtenlands",label:r.jsx(F,{id:"Registrering.OppholdNesteTolv"}),validate:[u],isReadOnly:a,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:o({id:"Registrering.Opphold.Yes"}),value:"false"},{label:o({id:"Registrering.Opphold.No"}),value:"true"}]}),y?r.jsxs(r.Fragment,{children:[r.jsx(p,{eightPx:!0}),r.jsx(R,{alignOffset:64,children:r.jsx(U,{erTidligereOpphold:!1,mottattDato:l,countryCodes:e,readOnly:a})})]}):null]})};g.buildInitialValues=()=>({tidligereOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}],fremtidigeOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}]});g.transformValues=a=>({...a,fremtidigeOppholdUtenlands:a.harFremtidigeOppholdUtenlands?a.fremtidigeOppholdUtenlands:void 0,tidligereOppholdUtenlands:a.harTidligereOppholdUtenlands?a.tidligereOppholdUtenlands:void 0});g.__docgenInfo={description:`OppholdINorgePanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
Inneholder delen av skjemaet som omhandler informasjon om utenlandsopphold.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePanel",props:{readOnly:{defaultValue:{value:"true",computed:!1},required:!1}}};const Ve=se(de),m=({readOnly:a,erAdopsjon:n,alleKodeverk:l,mottattDato:d})=>r.jsx(te,{value:Ve,children:r.jsx(g,{readOnly:a,erAdopsjon:n,alleKodeverk:l,mottattDato:d})});m.buildInitialValues=g.buildInitialValues;m.transformValues=g.transformValues;m.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"formValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]},alias:"FormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  oppholdINorge?: boolean;
  harTidligereOppholdUtenlands?: boolean;
  harFremtidigeOppholdUtenlands?: boolean;
  tidligereOppholdUtenlands?: FormValuesFieldArray[];
  fremtidigeOppholdUtenlands?: FormValuesFieldArray[];
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePapirsoknadIndex"};const Ke={title:"papirsoknad/ui-komponenter/opphold-i-norge",component:m},D=({erAdopsjon:a,submitCallback:n})=>{const l=ie({defaultValues:m.buildInitialValues()});return r.jsxs(pe,{formMethods:l,onSubmit:d=>n(m.transformValues(d)),children:[r.jsx(m,{readOnly:!1,erAdopsjon:a,alleKodeverk:ge,mottattDato:"2022-05-30"}),r.jsx(p,{fourtyPx:!0}),r.jsx(me,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},f=D.bind({});f.args={erAdopsjon:!1,submitCallback:z("button-click")};const c=D.bind({});c.args={erAdopsjon:!0,submitCallback:z("button-click")};var M,S,K;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`({
  erAdopsjon,
  submitCallback
}) => {
  const formMethods = useForm({
    defaultValues: OppholdINorgePapirsoknadIndex.buildInitialValues()
  });
  return <Form formMethods={formMethods} onSubmit={(values: FormValues) => submitCallback(OppholdINorgePapirsoknadIndex.transformValues(values))}>
      <OppholdINorgePapirsoknadIndex readOnly={false} erAdopsjon={erAdopsjon} alleKodeverk={alleKodeverk as any} mottattDato="2022-05-30" />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(K=(S=f.parameters)==null?void 0:S.docs)==null?void 0:K.source}}};var $,B,_;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`({
  erAdopsjon,
  submitCallback
}) => {
  const formMethods = useForm({
    defaultValues: OppholdINorgePapirsoknadIndex.buildInitialValues()
  });
  return <Form formMethods={formMethods} onSubmit={(values: FormValues) => submitCallback(OppholdINorgePapirsoknadIndex.transformValues(values))}>
      <OppholdINorgePapirsoknadIndex readOnly={false} erAdopsjon={erAdopsjon} alleKodeverk={alleKodeverk as any} mottattDato="2022-05-30" />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(_=(B=c.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};const $e=["ForFodsel","ForAdopsjon"];export{c as ForAdopsjon,f as ForFodsel,$e as __namedExportsOrder,Ke as default};
