import{u as $,r as U,j as e,d as O,b as N,P as Y,a as G}from"./iframe-Cm0JmO_C.js";import{u as I,a as E,$ as L,H as C,P as T,A as J,c as B,L as Q,d as W,V as x,b as Z,D as ee,m as re,e as ae,N as ne,B as ie}from"./nb_NO-VNyzhOy5.js";import{T as P}from"./TrueFalseInput-C_vW5n_R.js";import{p as w,D as X,H as z,a as oe,e as M}from"./index.es-huFxRk9k.js";import{M as m}from"./message-DzccQiQe.js";import"./index-fBLuJmba.js";const o="frilans",v=(r,a)=>r(a),te=(r=[])=>r.map(a=>a.periodeFom).filter(a=>a&&a!=="").sort((a,i)=>O(a,N).diff(O(i,N))),se=oe(50),le=(r,a,i,n)=>()=>{const d=v(r,`${a}.fomDato`);return i.length>0&&i[0]&&d&&!O(i[0]).isSameOrBefore(O(d))?n.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation"}):null},K=({readOnly:r})=>{const a=$(),{control:i,getValues:n,watch:d,trigger:g,formState:{isSubmitted:c}}=I(),{fields:V,remove:A,append:S}=E({control:i,name:`${o}.oppdragPerioder`}),F=d(`${o}.perioder`),h=U.useMemo(()=>te(F),[F]);return e.jsx(L,{bodyText:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),fields:V,readOnly:r,append:S,remove:A,children:(t,p,s)=>{const l=`${o}.oppdragPerioder.${p}`;return e.jsxs(C,{gap:"4",paddingBlock:"2",align:"end",children:[e.jsx(T,{name:`${l}.fomDato`,label:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeFom"}),validate:[w,le(n,l,h,a),()=>{const f=v(n,`${l}.fomDato`),b=v(n,`${l}.tomDato`);return b&&f?X(b)(f):null}],onChange:()=>c?g():void 0}),e.jsx(T,{name:`${l}.tomDato`,label:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeTom"}),validate:[w,()=>{const f=v(n,`${l}.fomDato`),b=v(n,`${l}.tomDato`);return b&&f?z(f)(b):null}],onChange:()=>c?g():void 0}),e.jsx(J,{name:`${l}.oppdragsgiver`,validate:[se],label:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver"})}),s&&e.jsx("div",{children:s()})]},t.id)}})};K.__docgenInfo={description:`FrilansOppdragForFamilieFieldArray

Viser inputfelter for fra og til dato for frilansperioder.`,methods:[],displayName:"FrilansOppdragForFamilieFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const y=({readOnly:r})=>{const{watch:a}=I(),i=a(`${o}.harHattOppdragForFamilie`);return e.jsxs(e.Fragment,{children:[e.jsx(P,{name:`${o}.harHattOppdragForFamilie`,label:e.jsx(m,{id:"Registrering.FrilansOppdrag.HarHattOppdragForFamilie"}),readOnly:r}),i&&e.jsxs(B,{children:[e.jsx(Q,{size:"small",children:e.jsx(m,{id:"Registrering.FrilansOppdrag.OppgiPeriode"})}),e.jsx(K,{readOnly:r})]})]})};y.initialValues=()=>({oppdragPerioder:[{fomDato:"",tomDato:"",oppdragsgiver:""}]});y.transformValues=({harHattOppdragForFamilie:r,oppdragPerioder:a})=>({harHattOppdragForFamilie:r,oppdragPerioder:r?a:void 0});y.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:`{
  harHattOppdragForFamilie,
  oppdragPerioder,
}: FrilansSubFormValues`,optional:!1,type:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},alias:"FrilansSubFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]}}}}],displayName:"FrilansOppdragForFamiliePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const q=(r,a)=>r(a),D=({readOnly:r})=>{const a=$(),{control:i,getValues:n,formState:{isSubmitted:d},trigger:g}=I(),{fields:c,remove:V,append:A}=E({control:i,name:`${o}.perioder`});return e.jsx(L,{fields:c,bodyText:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:r,remove:V,append:A,children:(S,F,h)=>{const t=`${o}.perioder.${F}`;return e.jsxs(C,{gap:"4",paddingBlock:"2",children:[e.jsx(T,{name:`${t}.periodeFom`,label:F===0?a.formatMessage({id:"Registrering.Frilans.periodeFom"}):"",validate:[M,w,()=>{const p=q(n,`${t}.periodeFom`),s=q(n,`${t}.periodeTom`);return s&&p?X(s)(p):null}],onChange:()=>d?g():void 0}),e.jsx(T,{name:`${t}.periodeTom`,label:F===0?a.formatMessage({id:"Registrering.Frilans.periodeTom"}):"",validate:[M,w,()=>{const p=q(n,`${t}.periodeFom`),s=q(n,`${t}.periodeTom`);return s&&p?z(p)(s):null}],onChange:()=>d?g():void 0}),h&&e.jsx("div",{children:h()})]},S.id)}})};D.initialValues=()=>({perioder:[{periodeFom:"",periodeTom:""}]});D.__docgenInfo={description:`FrilansPerioderFieldArray

Viser inputfelter for fra og til dato for frilansperioder`,methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]}}}}],displayName:"FrilansPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const k=({readOnly:r})=>e.jsx(W,{children:e.jsxs(x,{gap:"4",children:[e.jsx(Z,{size:"small",children:e.jsx(m,{id:"Registrering.Frilans.Title"})}),e.jsx(P,{name:`${o}.harSokerPeriodeMedFrilans`,label:e.jsx(m,{id:"Registrering.Frilans.HarFrilansvirksomhet"}),readOnly:r,trueContent:e.jsx(B,{marginTop:8,children:e.jsxs(x,{gap:"4",children:[e.jsx(ee,{children:e.jsx(m,{id:"Registrering.Frilans.OppgiPeriode"})}),e.jsx(D,{readOnly:r}),e.jsx(P,{name:`${o}.erNyoppstartetFrilanser`,label:e.jsx(m,{id:"Registrering.Frilans.ErNyoppstartedFrilanser"}),readOnly:r}),e.jsx(P,{name:`${o}.harInntektFraFosterhjem`,label:e.jsx(m,{id:"Registrering.Frilans.HarInntektFraForsterhjem"}),readOnly:r}),e.jsx(y,{readOnly:r})]})})})]})});k.initialValues=()=>({[o]:{...D.initialValues(),...y.initialValues()}});k.transformValues=({frilans:r})=>({[o]:r.harSokerPeriodeMedFrilans===!1?{harSokerPeriodeMedFrilans:!1}:{harSokerPeriodeMedFrilans:!0,perioder:r.perioder,erNyoppstartetFrilanser:r.erNyoppstartetFrilanser,harInntektFraFosterhjem:r.harInntektFraFosterhjem,...y.transformValues(r)}});k.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ frilans }: FrilansFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]},alias:"FrilansFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}}],displayName:"FrilansPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const de=G(re),u=({readOnly:r})=>e.jsx(Y,{value:de,children:e.jsx(k,{readOnly:r})});u.initialValues=k.initialValues;u.transformValues=k.transformValues;u.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ frilans }: FrilansFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]},alias:"FrilansFormValues"}}],returns:{type:{name:"signature",type:"object",raw:`{
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
}`,signature:{properties:[{key:"frilans",value:{name:"signature",type:"object",raw:`{
  harSokerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
}`,signature:{properties:[{key:"harSokerPeriodeMedFrilans",value:{name:"boolean",required:!1}},{key:"perioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  periodeFom: string;
  periodeTom?: string;
}`,signature:{properties:[{key:"periodeFom",value:{name:"string",required:!0}},{key:"periodeTom",value:{name:"string",required:!1}}]}}],raw:`{
  periodeFom: string;
  periodeTom?: string;
}[]`,required:!1}},{key:"erNyoppstartetFrilanser",value:{name:"boolean",required:!1}},{key:"harInntektFraFosterhjem",value:{name:"boolean",required:!1}},{key:"harHattOppdragForFamilie",value:{name:"boolean",required:!1}},{key:"oppdragPerioder",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}}],displayName:"FrilansPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const{action:pe}=__STORYBOOK_MODULE_ACTIONS__,fe={title:"ui-komponenter/frilans",component:u,parameters:{submitCallback:pe("onSubmit")},args:{readOnly:!1},render:(r,{parameters:{submitCallback:a}})=>{const i=ae({defaultValues:u.initialValues()});return e.jsx(ne,{formMethods:i,onSubmit:n=>a(u.transformValues(n)),children:e.jsxs(x,{gap:"10",children:[e.jsx(u,{...r}),e.jsx(ie,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},j={};var H,_,R;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:"{}",...(R=(_=j.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};const be=["Default"];export{j as Default,be as __namedExportsOrder,fe as default};
