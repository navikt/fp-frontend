import{g as Z,r as C,R as e}from"./index-OjgoNOWw.js";import{e as z,f as H,l as ee,r as re,y as ae,g as p,S as ne,F as le,M as te,c as V,d as R,N as q,R as oe,H as se,h as F,T as U,i as T,t as de,P as ie,m as pe,a as L,b as me,O as ue,B as ge}from"./nb_NO-oCapN-Td.js";import"./withRouter-0tVlBzVB.js";import{K as he,a as ce}from"./alleKodeverk-auwb120F.js";import{r as m,b as x,I as A,h as P,c as I,q as fe}from"./index.es-ynu9s7Vi.js";import{l as ye}from"./landkoder-Wz63K8Ht.js";import"./v4-yQnnJER4.js";import"./index-mQqIOHEI.js";var W={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(a){(function(){var n={}.hasOwnProperty;function t(){for(var r="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(r=l(r,d.call(this,s)))}return r}function d(r){if(typeof r=="string"||typeof r=="number")return this&&this[r]||r;if(typeof r!="object")return"";if(Array.isArray(r))return t.apply(this,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var o="";for(var s in r)n.call(r,s)&&r[s]&&(o=l(o,this&&this[s]||s));return o}function l(r,o){return o?r?r+" "+o:r+o:r}a.exports?(t.default=t,a.exports=t):window.classNames=t})()})(W);var Fe=W.exports;const Oe=Z(Fe),ve="_datesRowWithRemoveButton_od5lu_1",be="_selectBredde_od5lu_7",D={datesRowWithRemoveButton:ve,selectBredde:be},ke=Oe.bind(D),Ve={land:"",periodeFom:"",periodeTom:""},v=(a,n)=>a(n),j=(a,n)=>()=>{const d=a(n).filter(({periodeFom:l,periodeTom:r})=>l&&l!==""&&r&&r!=="").map(({periodeFom:l,periodeTom:r})=>[l,r]);return d.length>0?fe(d):void 0},Ue=a=>a.filter(({kode:n})=>n!==ye.NORGE).map(({kode:n,navn:t})=>e.createElement("option",{value:n,key:n},t)),w=(a,n,t,d)=>()=>{const l=v(a,`${n}.${t}.periodeFom`),r=v(a,`${n}.${t}.periodeTom`);return!r||!l?null:d?A(r)(l):I(l)(r)},E=({erTidligereOpphold:a,mottattDato:n,readOnly:t,countryCodes:d})=>{const l=z(),r=a?"tidligereOppholdUtenlands":"fremtidigeOppholdUtenlands",{control:o,getValues:s,trigger:f,formState:{isSubmitted:y}}=H(),{fields:k,remove:G,append:J}=ee({control:o,name:r}),Q=C.useMemo(()=>Ue(d),[d]);return e.createElement(re,{fields:k,titleText:l.formatMessage({id:"Registrering.RegistreringOpphold.AngiOpphold"}),bodyText:l.formatMessage({id:"Registrering.RegistreringOpphold.Add"}),emptyPeriodTemplate:Ve,createAddButtonInsteadOfImageLink:!0,readOnly:t,remove:G,append:J},(X,i,N)=>e.createElement(e.Fragment,{key:X.id},i>0&&e.createElement(e.Fragment,null,e.createElement(ae,null),e.createElement(p,{sixteenPx:!0})),e.createElement(ne,{name:`${r}.${i}.land`,label:l.formatMessage({id:"Registrering.RegistreringOpphold.Country"}),selectValues:Q,className:D.selectBredde,readOnly:t,validate:[m]}),e.createElement(p,{sixteenPx:!0}),e.createElement(le,null,e.createElement(te,{className:ke({datesRowWithRemoveButton:i>0})},e.createElement(V,null,e.createElement(R,{name:`${r}.${i}.periodeFom`,label:l.formatMessage({id:"Registrering.RegistreringOpphold.periodeFom"}),isReadOnly:t,validate:[m,x,w(s,r,i,!0),()=>{const g=v(s,`${r}.${i}.periodeFom`);return a?A(P().format(q))(g):n?I(n)(g):void 0},j(s,r)],onChange:()=>y?f():void 0})),e.createElement(V,null,e.createElement(R,{name:`${r}.${i}.periodeTom`,label:l.formatMessage({id:"Registrering.RegistreringOpphold.periodeTom"}),isReadOnly:t,validate:[m,x,w(s,r,i,!1),()=>{const g=v(s,`${r}.${i}.periodeTom`);return a?A(P().format(q))(g):n?I(n)(g):void 0},j(s,r)],onChange:()=>y?f():void 0})),N&&e.createElement(V,null,N()))),e.createElement(p,{sixteenPx:!0})))};E.__docgenInfo={description:`UtenlandsOppholdField

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
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const u=({readOnly:a=!0,alleKodeverk:n,mottattDato:t,erAdopsjon:d})=>{const{formatMessage:l}=z(),r=C.useMemo(()=>n[he.LANDKODER].slice().sort((y,k)=>y.navn.localeCompare(k.navn)),[n]),{watch:o}=H(),s=o("harTidligereOppholdUtenlands")||!1,f=o("harFremtidigeOppholdUtenlands")||!1;return e.createElement(oe,null,e.createElement(se,{size:"small"},e.createElement(F,{id:"Registrering.Opphold"})),e.createElement(p,{sixteenPx:!0}),e.createElement(U,{name:"oppholdINorge",label:e.createElement(F,{id:d?"Registrering.OppholdVedAdopsjon":"Registrering.OppholdVedFodsel"}),validate:[m],isReadOnly:a,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:l({id:"Registrering.Opphold.Yes"}),value:"true"},{label:l({id:"Registrering.Opphold.No"}),value:"false"}]}),e.createElement(p,{sixteenPx:!0}),e.createElement(U,{name:"harTidligereOppholdUtenlands",label:e.createElement(F,{id:"Registrering.OppholdSisteTolv"}),validate:[m],isReadOnly:a,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:l({id:"Registrering.Opphold.Yes"}),value:"false"},{label:l({id:"Registrering.Opphold.No"}),value:"true"}]}),s?e.createElement(e.Fragment,null,e.createElement(p,{eightPx:!0}),e.createElement(T,{alignOffset:64},e.createElement(E,{erTidligereOpphold:!0,mottattDato:t,countryCodes:r,readOnly:a}))):null,e.createElement(p,{sixteenPx:!0}),e.createElement(U,{name:"harFremtidigeOppholdUtenlands",label:e.createElement(F,{id:"Registrering.OppholdNesteTolv"}),validate:[m],isReadOnly:a,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:l({id:"Registrering.Opphold.Yes"}),value:"false"},{label:l({id:"Registrering.Opphold.No"}),value:"true"}]}),f?e.createElement(e.Fragment,null,e.createElement(p,{eightPx:!0}),e.createElement(T,{alignOffset:64},e.createElement(E,{erTidligereOpphold:!1,mottattDato:t,countryCodes:r,readOnly:a}))):null)};u.buildInitialValues=()=>({tidligereOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}],fremtidigeOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}]});u.transformValues=a=>({...a,fremtidigeOppholdUtenlands:a.harFremtidigeOppholdUtenlands?a.fremtidigeOppholdUtenlands:void 0,tidligereOppholdUtenlands:a.harTidligereOppholdUtenlands?a.tidligereOppholdUtenlands:void 0});u.__docgenInfo={description:`OppholdINorgePanel

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
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePanel",props:{readOnly:{defaultValue:{value:"true",computed:!1},required:!1}}};const Ae=de(pe),b=({readOnly:a,erAdopsjon:n,alleKodeverk:t,mottattDato:d})=>e.createElement(ie,{value:Ae},e.createElement(u,{readOnly:a,erAdopsjon:n,alleKodeverk:t,mottattDato:d}));b.buildInitialValues=u.buildInitialValues;b.transformValues=u.transformValues;const O=b;b.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePapirsoknadIndex"};const je={title:"papirsoknad/ui-komponenter/opphold-i-norge",component:O},Y=({erAdopsjon:a,submitCallback:n})=>{const t=me({defaultValues:O.buildInitialValues()});return e.createElement(ue,{formMethods:t,onSubmit:d=>n(O.transformValues(d))},e.createElement(O,{readOnly:!1,erAdopsjon:a,alleKodeverk:ce,mottattDato:"2022-05-30"}),e.createElement(p,{fourtyPx:!0}),e.createElement(ge,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},h=Y.bind({});h.args={erAdopsjon:!1,submitCallback:L("button-click")};const c=Y.bind({});c.args={erAdopsjon:!0,submitCallback:L("button-click")};var S,M,K;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`({
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
}`,...(K=(M=h.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var B,_,$;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`({
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
}`,...($=(_=c.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};const we=["ForFodsel","ForAdopsjon"];export{c as ForAdopsjon,h as ForFodsel,we as __namedExportsOrder,je as default};
