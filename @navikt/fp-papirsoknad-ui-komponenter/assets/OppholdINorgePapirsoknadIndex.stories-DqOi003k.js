import{j as r}from"./jsx-runtime-DR9Q75dM.js";import{H as u,g as q,D as A,U as V,f as J,a as Q}from"./index.es-8Fll0b49.js";import{d as C,e as E,f as X,I as Z,K as ee,y as p,n as re,W as ne,b as ae,L as b,P as x,A as w,S as se,H as te,M as y,k as j,l as T,t as oe,c as le,m as ie,a as de,$ as pe,V as me,B as ue}from"./nb_NO-gSijKUYs.js";import"./withRouter-DhSU4y_G.js";import{K as ge,a as ve}from"./alleKodeverk-D-QME5s7.js";import{g as ke,r as H,R as he}from"./index-DRjF_FHU.js";import"./aktivitetStatus-B1m96ipJ.js";import{L as ye}from"./landkoder-tJDPMx5C.js";import{h as N}from"./moment-C5S46NFB.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-CnNqAF5I.js";import"./index-rX-Bn4lm.js";var L={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var s={}.hasOwnProperty;function t(){for(var e="",o=0;o<arguments.length;o++){var l=arguments[o];l&&(e=a(e,i.call(this,l)))}return e}function i(e){if(typeof e=="string"||typeof e=="number")return this&&this[e]||e;if(typeof e!="object")return"";if(Array.isArray(e))return t.apply(this,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var o="";for(var l in e)s.call(e,l)&&e[l]&&(o=a(o,this&&this[l]||l));return o}function a(e,o){return o?e?e+" "+o:e+o:e}n.exports?(t.default=t,n.exports=t):window.classNames=t})()})(L);var ce=L.exports;const fe=ke(ce),Oe="_datesRowWithRemoveButton_od5lu_1",Fe="_selectBredde_od5lu_7",z={datesRowWithRemoveButton:Oe,selectBredde:Fe},be=fe.bind(z),je={land:"",periodeFom:"",periodeTom:""},O=(n,s)=>n(s),I=(n,s)=>()=>{const i=n(s).filter(({periodeFom:a,periodeTom:e})=>a&&a!==""&&e&&e!=="").map(({periodeFom:a,periodeTom:e})=>[a,e]);return i.length>0?J(i):void 0},Ae=n=>n.filter(({kode:s})=>s!==ye.NORGE).map(({kode:s,navn:t})=>r.jsx("option",{value:s,children:t},s)),K=(n,s,t,i)=>()=>{const a=O(n,`${s}.${t}.periodeFom`),e=O(n,`${s}.${t}.periodeTom`);return!e||!a?null:i?A(e)(a):V(a)(e)},R=({erTidligereOpphold:n=!1,mottattDato:s,readOnly:t,countryCodes:i})=>{const a=C(),e=n?"tidligereOppholdUtenlands":"fremtidigeOppholdUtenlands",{control:o,getValues:l,trigger:k,formState:{isSubmitted:h}}=E(),{fields:F,remove:W,append:D}=X({control:o,name:e}),Y=H.useMemo(()=>Ae(i),[i]);return r.jsx(Z,{fields:F,titleText:a.formatMessage({id:"Registrering.RegistreringOpphold.AngiOpphold"}),bodyText:a.formatMessage({id:"Registrering.RegistreringOpphold.Add"}),emptyPeriodTemplate:je,createAddButtonInsteadOfImageLink:!0,readOnly:t,remove:W,append:D,children:(G,d,U)=>r.jsxs(he.Fragment,{children:[d>0&&r.jsxs(r.Fragment,{children:[r.jsx(ee,{}),r.jsx(p,{sixteenPx:!0})]}),r.jsx(re,{name:`${e}.${d}.land`,label:a.formatMessage({id:"Registrering.RegistreringOpphold.Country"}),selectValues:Y,className:z.selectBredde,readOnly:t,validate:[u]}),r.jsx(p,{sixteenPx:!0}),r.jsx(ne,{children:r.jsxs(ae,{className:be({datesRowWithRemoveButton:d>0}),children:[r.jsx(b,{children:r.jsx(x,{name:`${e}.${d}.periodeFom`,label:a.formatMessage({id:"Registrering.RegistreringOpphold.periodeFom"}),isReadOnly:t,validate:[u,q,K(l,e,d,!0),()=>{const v=O(l,`${e}.${d}.periodeFom`);return n?A(N().format(w))(v):s?V(s)(v):void 0},I(l,e)],onChange:()=>h?k():void 0})}),r.jsx(b,{children:r.jsx(x,{name:`${e}.${d}.periodeTom`,label:a.formatMessage({id:"Registrering.RegistreringOpphold.periodeTom"}),isReadOnly:t,validate:[u,q,K(l,e,d,!1),()=>{const v=O(l,`${e}.${d}.periodeTom`);return n?A(N().format(w))(v):s?V(s)(v):void 0},I(l,e)],onChange:()=>h?k():void 0})}),U&&r.jsx(b,{children:U()})]})}),r.jsx(p,{sixteenPx:!0})]},G.id)})};R.__docgenInfo={description:`UtenlandsOppholdField

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
Komponenten lar saksbehandler legge inn informasjon om ett eller flere utenlandsopphold fra søknaden. Komponenten eksponerer valideringsregler
som lar seg tilpasse om opphold skal være fram eller tilbake i tid.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"UtenlandsOppholdField",props:{erTidligereOpphold:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},mottattDato:{required:!1,tsType:{name:"string"},description:""},countryCodes:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  kode: string;
  navn: string;
  kodeverk: string;
}`,signature:{properties:[{key:"kode",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"kodeverk",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  kode: string;
  navn: string;
  kodeverk: string;
}>`}],raw:"KodeverkMedNavn[]"},description:""},readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const g=({readOnly:n=!0,alleKodeverk:s,mottattDato:t,erAdopsjon:i})=>{const{formatMessage:a}=C(),e=H.useMemo(()=>s[ge.LANDKODER].slice().sort((h,F)=>h.navn.localeCompare(F.navn)),[s]),{watch:o}=E(),l=o("harTidligereOppholdUtenlands")||!1,k=o("harFremtidigeOppholdUtenlands")||!1;return r.jsxs(se,{children:[r.jsx(te,{size:"small",children:r.jsx(y,{id:"Registrering.Opphold"})}),r.jsx(p,{sixteenPx:!0}),r.jsx(j,{name:"oppholdINorge",label:r.jsx(y,{id:i?"Registrering.OppholdVedAdopsjon":"Registrering.OppholdVedFodsel"}),validate:[u],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a({id:"Registrering.Opphold.Yes"}),value:"true"},{label:a({id:"Registrering.Opphold.No"}),value:"false"}]}),r.jsx(p,{sixteenPx:!0}),r.jsx(j,{name:"harTidligereOppholdUtenlands",label:r.jsx(y,{id:"Registrering.OppholdSisteTolv"}),validate:[u],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a({id:"Registrering.Opphold.Yes"}),value:"false"},{label:a({id:"Registrering.Opphold.No"}),value:"true"}]}),l?r.jsxs(r.Fragment,{children:[r.jsx(p,{eightPx:!0}),r.jsx(T,{alignOffset:64,children:r.jsx(R,{erTidligereOpphold:!0,mottattDato:t,countryCodes:e,readOnly:n})})]}):null,r.jsx(p,{sixteenPx:!0}),r.jsx(j,{name:"harFremtidigeOppholdUtenlands",label:r.jsx(y,{id:"Registrering.OppholdNesteTolv"}),validate:[u],isReadOnly:n,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:a({id:"Registrering.Opphold.Yes"}),value:"false"},{label:a({id:"Registrering.Opphold.No"}),value:"true"}]}),k?r.jsxs(r.Fragment,{children:[r.jsx(p,{eightPx:!0}),r.jsx(T,{alignOffset:64,children:r.jsx(R,{mottattDato:t,countryCodes:e,readOnly:n})})]}):null]})};g.buildInitialValues=()=>({tidligereOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}],fremtidigeOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}]});g.transformValues=n=>({...n,fremtidigeOppholdUtenlands:n.harFremtidigeOppholdUtenlands?n.fremtidigeOppholdUtenlands:void 0,tidligereOppholdUtenlands:n.harTidligereOppholdUtenlands?n.tidligereOppholdUtenlands:void 0});g.__docgenInfo={description:`OppholdINorgePanel

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
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePanel",props:{erAdopsjon:{required:!0,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""}}};const Ve=oe(ie),m=({readOnly:n,erAdopsjon:s,alleKodeverk:t,mottattDato:i})=>r.jsx(le,{value:Ve,children:r.jsx(g,{readOnly:n,erAdopsjon:s,alleKodeverk:t,mottattDato:i})});m.buildInitialValues=g.buildInitialValues;m.transformValues=g.transformValues;m.__docgenInfo={description:"",methods:[{name:"buildInitialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"oppholdINorge",value:{name:"boolean",required:!1}},{key:"harTidligereOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"harFremtidigeOppholdUtenlands",value:{name:"boolean",required:!1}},{key:"tidligereOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}},{key:"fremtidigeOppholdUtenlands",value:{name:"Array",elements:[{name:"FormValues"}],raw:"FormValuesFieldArray[]",required:!1}}]}}}}],displayName:"OppholdINorgePapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},erAdopsjon:{required:!0,tsType:{name:"boolean"},description:""},alleKodeverk:{required:!0,tsType:{name:"intersection",raw:"Omit<T, keyof R> & R",elements:[{name:"Omit",elements:[{name:"Record",elements:[{name:"KodeverkType"},{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"KodeverkMedNavn[]"}],raw:"Record<VilkarType, KodeverkMedNavn[]>",required:!0}}]}}]},description:""},mottattDato:{required:!1,tsType:{name:"string"},description:""}}};const $e={title:"papirsoknad/ui-komponenter/opphold-i-norge",component:m,parameters:{submitCallback:Q("onSubmit")},args:{readOnly:!1,alleKodeverk:ve,mottattDato:"2022-05-30"},render:function(s,{parameters:{submitCallback:t}}){const i=de({defaultValues:m.buildInitialValues()});return r.jsx(pe,{formMethods:i,onSubmit:a=>t(m.transformValues(a)),children:r.jsxs(me,{gap:"10",children:[r.jsx(m,{...s}),r.jsx(ue,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},c={args:{erAdopsjon:!1}},f={args:{erAdopsjon:!0}};var M,S,P;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    erAdopsjon: false
  }
}`,...(P=(S=c.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var $,_,B;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    erAdopsjon: true
  }
}`,...(B=(_=f.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const _e=["ForFodsel","ForAdopsjon"];export{f as ForAdopsjon,c as ForFodsel,_e as __namedExportsOrder,$e as default};
