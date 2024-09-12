import{j as r}from"./dayjs.min-D0F5fy79.js";import{d as E,e as z,i as Z,A as ee,K as re,y as p,p as ae,W as ne,c as oe,L as x,P as N,E as q,S as le,H as se,M as F,F as j,O as R,t as te,h as de,m as ie,a as L,b as pe,Y as me,B as ue}from"./nb_NO-Ck3UbI0K.js";import"./withRouter-DFPnh569.js";import{K as ge,a as he}from"./alleKodeverk-Dzm1yn2L.js";import{g as fe,r as H,R as ce}from"./index-CTjT7uj6.js";import{r as m,b as T,I as V,h as P,c as U,q as ye}from"./index.es-9SLT0vzE.js";import{l as Fe}from"./landkoder-T-1RG3zx.js";import"./v4-CQkTLCs1.js";import"./index-CYM-y3Gt.js";var W={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(a){(function(){var n={}.hasOwnProperty;function l(){for(var e="",s=0;s<arguments.length;s++){var t=arguments[s];t&&(e=o(e,d.call(this,t)))}return e}function d(e){if(typeof e=="string"||typeof e=="number")return this&&this[e]||e;if(typeof e!="object")return"";if(Array.isArray(e))return l.apply(this,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var s="";for(var t in e)n.call(e,t)&&e[t]&&(s=o(s,this&&this[t]||t));return s}function o(e,s){return s?e?e+" "+s:e+s:e}a.exports?(l.default=l,a.exports=l):window.classNames=l})()})(W);var Oe=W.exports;const ve=fe(Oe),be="_datesRowWithRemoveButton_od5lu_1",ke="_selectBredde_od5lu_7",Y={datesRowWithRemoveButton:be,selectBredde:ke},xe=ve.bind(Y),je={land:"",periodeFom:"",periodeTom:""},v=(a,n)=>a(n),w=(a,n)=>()=>{const d=a(n).filter(({periodeFom:o,periodeTom:e})=>o&&o!==""&&e&&e!=="").map(({periodeFom:o,periodeTom:e})=>[o,e]);return d.length>0?ye(d):void 0},Ve=a=>a.filter(({kode:n})=>n!==Fe.NORGE).map(({kode:n,navn:l})=>r.jsx("option",{value:n,children:l},n)),S=(a,n,l,d)=>()=>{const o=v(a,`${n}.${l}.periodeFom`),e=v(a,`${n}.${l}.periodeTom`);return!e||!o?null:d?V(e)(o):U(o)(e)},A=({erTidligereOpphold:a,mottattDato:n,readOnly:l,countryCodes:d})=>{const o=E(),e=a?"tidligereOppholdUtenlands":"fremtidigeOppholdUtenlands",{control:s,getValues:t,trigger:c,formState:{isSubmitted:y}}=z(),{fields:k,remove:G,append:J}=Z({control:s,name:e}),Q=H.useMemo(()=>Ve(d),[d]);return r.jsx(ee,{fields:k,titleText:o.formatMessage({id:"Registrering.RegistreringOpphold.AngiOpphold"}),bodyText:o.formatMessage({id:"Registrering.RegistreringOpphold.Add"}),emptyPeriodTemplate:je,createAddButtonInsteadOfImageLink:!0,readOnly:l,remove:G,append:J,children:(X,i,I)=>r.jsxs(ce.Fragment,{children:[i>0&&r.jsxs(r.Fragment,{children:[r.jsx(re,{}),r.jsx(p,{sixteenPx:!0})]}),r.jsx(ae,{name:`${e}.${i}.land`,label:o.formatMessage({id:"Registrering.RegistreringOpphold.Country"}),selectValues:Q,className:Y.selectBredde,readOnly:l,validate:[m]}),r.jsx(p,{sixteenPx:!0}),r.jsx(ne,{children:r.jsxs(oe,{className:xe({datesRowWithRemoveButton:i>0}),children:[r.jsx(x,{children:r.jsx(N,{name:`${e}.${i}.periodeFom`,label:o.formatMessage({id:"Registrering.RegistreringOpphold.periodeFom"}),isReadOnly:l,validate:[m,T,S(t,e,i,!0),()=>{const g=v(t,`${e}.${i}.periodeFom`);return a?V(P().format(q))(g):n?U(n)(g):void 0},w(t,e)],onChange:()=>y?c():void 0})}),r.jsx(x,{children:r.jsx(N,{name:`${e}.${i}.periodeTom`,label:o.formatMessage({id:"Registrering.RegistreringOpphold.periodeTom"}),isReadOnly:l,validate:[m,T,S(t,e,i,!1),()=>{const g=v(t,`${e}.${i}.periodeTom`);return a?V(P().format(q))(g):n?U(n)(g):void 0},w(t,e)],onChange:()=>y?c():void 0})}),I&&r.jsx(x,{children:I()})]})}),r.jsx(p,{sixteenPx:!0})]},X.id)})};A.__docgenInfo={description:`UtenlandsOppholdField

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const u=({readOnly:a=!0,alleKodeverk:n,mottattDato:l,erAdopsjon:d})=>{const{formatMessage:o}=E(),e=H.useMemo(()=>n[ge.LANDKODER].slice().sort((y,k)=>y.navn.localeCompare(k.navn)),[n]),{watch:s}=z(),t=s("harTidligereOppholdUtenlands")||!1,c=s("harFremtidigeOppholdUtenlands")||!1;return r.jsxs(le,{children:[r.jsx(se,{size:"small",children:r.jsx(F,{id:"Registrering.Opphold"})}),r.jsx(p,{sixteenPx:!0}),r.jsx(j,{name:"oppholdINorge",label:r.jsx(F,{id:d?"Registrering.OppholdVedAdopsjon":"Registrering.OppholdVedFodsel"}),validate:[m],isReadOnly:a,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:o({id:"Registrering.Opphold.Yes"}),value:"true"},{label:o({id:"Registrering.Opphold.No"}),value:"false"}]}),r.jsx(p,{sixteenPx:!0}),r.jsx(j,{name:"harTidligereOppholdUtenlands",label:r.jsx(F,{id:"Registrering.OppholdSisteTolv"}),validate:[m],isReadOnly:a,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:o({id:"Registrering.Opphold.Yes"}),value:"false"},{label:o({id:"Registrering.Opphold.No"}),value:"true"}]}),t?r.jsxs(r.Fragment,{children:[r.jsx(p,{eightPx:!0}),r.jsx(R,{alignOffset:64,children:r.jsx(A,{erTidligereOpphold:!0,mottattDato:l,countryCodes:e,readOnly:a})})]}):null,r.jsx(p,{sixteenPx:!0}),r.jsx(j,{name:"harFremtidigeOppholdUtenlands",label:r.jsx(F,{id:"Registrering.OppholdNesteTolv"}),validate:[m],isReadOnly:a,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:o({id:"Registrering.Opphold.Yes"}),value:"false"},{label:o({id:"Registrering.Opphold.No"}),value:"true"}]}),c?r.jsxs(r.Fragment,{children:[r.jsx(p,{eightPx:!0}),r.jsx(R,{alignOffset:64,children:r.jsx(A,{erTidligereOpphold:!1,mottattDato:l,countryCodes:e,readOnly:a})})]}):null]})};u.buildInitialValues=()=>({tidligereOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}],fremtidigeOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}]});u.transformValues=a=>({...a,fremtidigeOppholdUtenlands:a.harFremtidigeOppholdUtenlands?a.fremtidigeOppholdUtenlands:void 0,tidligereOppholdUtenlands:a.harTidligereOppholdUtenlands?a.tidligereOppholdUtenlands:void 0});u.__docgenInfo={description:`OppholdINorgePanel

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
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePanel",props:{readOnly:{defaultValue:{value:"true",computed:!1},required:!1}}};const Ue=te(ie),b=({readOnly:a,erAdopsjon:n,alleKodeverk:l,mottattDato:d})=>r.jsx(de,{value:Ue,children:r.jsx(u,{readOnly:a,erAdopsjon:n,alleKodeverk:l,mottattDato:d})});b.buildInitialValues=u.buildInitialValues;b.transformValues=u.transformValues;const O=b;b.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePapirsoknadIndex"};const Me={title:"papirsoknad/ui-komponenter/opphold-i-norge",component:O},D=({erAdopsjon:a,submitCallback:n})=>{const l=pe({defaultValues:O.buildInitialValues()});return r.jsxs(me,{formMethods:l,onSubmit:d=>n(O.transformValues(d)),children:[r.jsx(O,{readOnly:!1,erAdopsjon:a,alleKodeverk:he,mottattDato:"2022-05-30"}),r.jsx(p,{fourtyPx:!0}),r.jsx(ue,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},h=D.bind({});h.args={erAdopsjon:!1,submitCallback:L("button-click")};const f=D.bind({});f.args={erAdopsjon:!0,submitCallback:L("button-click")};var M,K,B;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`({
  erAdopsjon,
  submitCallback
}) => {
  const formMethods = useForm({
    defaultValues: OppholdINorgePapirsoknadIndex.buildInitialValues()
  });
  return <Form formMethods={formMethods} onSubmit={(values: FormValues) => submitCallback(OppholdINorgePapirsoknadIndex.transformValues(values))}>
      <OppholdINorgePapirsoknadIndex readOnly={false} erAdopsjon={erAdopsjon} alleKodeverk={(alleKodeverk as any)} mottattDato="2022-05-30" />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(B=(K=h.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};var _,$,C;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`({
  erAdopsjon,
  submitCallback
}) => {
  const formMethods = useForm({
    defaultValues: OppholdINorgePapirsoknadIndex.buildInitialValues()
  });
  return <Form formMethods={formMethods} onSubmit={(values: FormValues) => submitCallback(OppholdINorgePapirsoknadIndex.transformValues(values))}>
      <OppholdINorgePapirsoknadIndex readOnly={false} erAdopsjon={erAdopsjon} alleKodeverk={(alleKodeverk as any)} mottattDato="2022-05-30" />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(C=($=f.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};const Ke=["ForFodsel","ForAdopsjon"];export{f as ForAdopsjon,h as ForFodsel,Ke as __namedExportsOrder,Me as default};
