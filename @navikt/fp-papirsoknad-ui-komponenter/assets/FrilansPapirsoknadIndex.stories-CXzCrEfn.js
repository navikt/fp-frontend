import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{b as _,e as I,j as E,k as L,H as C,U as O,G as K,i as N,p as X,L as U,R as J,V as A,c as Q,D as W,P as Y,f as Z,m as ee,d as re,K as ae,B as ne}from"./nb_NO-Do8e3gZi.js";import{O as w,D as B,H as z,o as oe,e as M,a as ie}from"./index.es-DAlOjUJD.js";import{T as P}from"./TrueFalseInput-BgE7LhiM.js";import{r as te}from"./index-_2TAQcTa.js";import{d as T}from"./dayjs.min-DkLNzaWO.js";import{M as m}from"./message-CxYIsBoI.js";import"./index-0bQSHhiP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CQwh6Daz.js";import"./v4-CtRu48qb.js";const i="frilans",v=(r,a)=>r(a),se=(r=[])=>r.map(a=>a.periodeFom).filter(a=>a&&a!=="").sort((a,o)=>T(a,N).diff(T(o,N))),le=oe(50),de=(r,a,o,n)=>()=>{const d=v(r,`${a}.fomDato`);return o.length>0&&o[0]&&d&&!T(o[0]).isSameOrBefore(T(d))?n.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.BeforeFomValidation"}):null},G=({readOnly:r})=>{const a=_(),{control:o,getValues:n,watch:d,trigger:g,formState:{isSubmitted:c}}=I(),{fields:V,remove:x,append:S}=E({control:o,name:`${i}.oppdragPerioder`}),F=d(`${i}.perioder`),h=te.useMemo(()=>se(F),[F]);return e.jsx(L,{bodyText:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),fields:V,readOnly:r,append:S,remove:x,children:(t,p,s)=>{const l=`${i}.oppdragPerioder.${p}`;return e.jsxs(C,{gap:"4",paddingBlock:"2",align:"end",children:[e.jsx(O,{name:`${l}.fomDato`,label:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeFom"}),validate:[w,de(n,l,h,a),()=>{const f=v(n,`${l}.fomDato`),b=v(n,`${l}.tomDato`);return b&&f?B(b)(f):null}],onChange:()=>c?g():void 0}),e.jsx(O,{name:`${l}.tomDato`,label:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.periodeTom"}),validate:[w,()=>{const f=v(n,`${l}.fomDato`),b=v(n,`${l}.tomDato`);return b&&f?z(f)(b):null}],onChange:()=>c?g():void 0}),e.jsx(K,{name:`${l}.oppdragsgiver`,validate:[le],label:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.Oppdragsgiver"})}),s&&e.jsx("div",{children:s()})]},t.id)}})};G.__docgenInfo={description:`FrilansOppdragForFamilieFieldArray

Viser inputfelter for fra og til dato for frilansperioder.`,methods:[],displayName:"FrilansOppdragForFamilieFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const y=({readOnly:r})=>{const{watch:a}=I(),o=a(`${i}.harHattOppdragForFamilie`);return e.jsxs(e.Fragment,{children:[e.jsx(P,{name:`${i}.harHattOppdragForFamilie`,label:e.jsx(m,{id:"Registrering.FrilansOppdrag.HarHattOppdragForFamilie"}),readOnly:r}),o&&e.jsxs(X,{children:[e.jsx(U,{size:"small",children:e.jsx(m,{id:"Registrering.FrilansOppdrag.OppgiPeriode"})}),e.jsx(G,{readOnly:r})]})]})};y.initialValues=()=>({oppdragPerioder:[{fomDato:"",tomDato:"",oppdragsgiver:""}]});y.transformValues=({harHattOppdragForFamilie:r,oppdragPerioder:a})=>({harHattOppdragForFamilie:r,oppdragPerioder:r?a:void 0});y.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]}}}}],displayName:"FrilansOppdragForFamiliePanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const q=(r,a)=>r(a),D=({readOnly:r})=>{const a=_(),{control:o,getValues:n,formState:{isSubmitted:d},trigger:g}=I(),{fields:c,remove:V,append:x}=E({control:o,name:`${i}.perioder`});return e.jsx(L,{fields:c,bodyText:a.formatMessage({id:"Registrering.FrilansOppdrag.FieldArray.NyPeriode"}),readOnly:r,remove:V,append:x,children:(S,F,h)=>{const t=`${i}.perioder.${F}`;return e.jsxs(C,{gap:"4",paddingBlock:"2",children:[e.jsx(O,{name:`${t}.periodeFom`,label:F===0?a.formatMessage({id:"Registrering.Frilans.periodeFom"}):"",validate:[M,w,()=>{const p=q(n,`${t}.periodeFom`),s=q(n,`${t}.periodeTom`);return s&&p?B(s)(p):null}],onChange:()=>d?g():void 0}),e.jsx(O,{name:`${t}.periodeTom`,label:F===0?a.formatMessage({id:"Registrering.Frilans.periodeTom"}):"",validate:[M,w,()=>{const p=q(n,`${t}.periodeFom`),s=q(n,`${t}.periodeTom`);return s&&p?z(p)(s):null}],onChange:()=>d?g():void 0}),h&&e.jsx("div",{children:h()})]},S.id)}})};D.initialValues=()=>({perioder:[{periodeFom:"",periodeTom:""}]});D.__docgenInfo={description:`FrilansPerioderFieldArray

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
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]}}}}],displayName:"FrilansPerioderFieldArray",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const k=({readOnly:r})=>e.jsx(J,{children:e.jsxs(A,{gap:"4",children:[e.jsx(Q,{size:"small",children:e.jsx(m,{id:"Registrering.Frilans.Title"})}),e.jsx(P,{name:`${i}.harSokerPeriodeMedFrilans`,label:e.jsx(m,{id:"Registrering.Frilans.HarFrilansvirksomhet"}),readOnly:r,trueContent:e.jsx(X,{marginTop:8,children:e.jsxs(A,{gap:"4",children:[e.jsx(W,{children:e.jsx(m,{id:"Registrering.Frilans.OppgiPeriode"})}),e.jsx(D,{readOnly:r}),e.jsx(P,{name:`${i}.erNyoppstartetFrilanser`,label:e.jsx(m,{id:"Registrering.Frilans.ErNyoppstartedFrilanser"}),readOnly:r}),e.jsx(P,{name:`${i}.harInntektFraFosterhjem`,label:e.jsx(m,{id:"Registrering.Frilans.HarInntektFraForsterhjem"}),readOnly:r}),e.jsx(y,{readOnly:r})]})})})]})});k.initialValues=()=>({[i]:{...D.initialValues(),...y.initialValues()}});k.transformValues=({frilans:r})=>({[i]:r.harSokerPeriodeMedFrilans===!1?{harSokerPeriodeMedFrilans:!1}:{harSokerPeriodeMedFrilans:!0,perioder:r.perioder,erNyoppstartetFrilanser:r.erNyoppstartetFrilanser,harInntektFraFosterhjem:r.harInntektFraFosterhjem,...y.transformValues(r)}});k.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}}],displayName:"FrilansPanel",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const pe=Z(ee),u=({readOnly:r})=>e.jsx(Y,{value:pe,children:e.jsx(k,{readOnly:r})});u.initialValues=k.initialValues;u.transformValues=k.transformValues;u.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"fomDato",value:{name:"string",required:!0}},{key:"tomDato",value:{name:"string",required:!0}},{key:"oppdragsgiver",value:{name:"string",required:!0}}]}}],raw:"OppdragPeriode[]",required:!1}}]},required:!0}}]}}}}],displayName:"FrilansPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""}}};const qe={title:"ui-komponenter/frilans",component:u,parameters:{submitCallback:ie("onSubmit")},args:{readOnly:!1},render:(r,{parameters:{submitCallback:a}})=>{const o=re({defaultValues:u.initialValues()});return e.jsx(ae,{formMethods:o,onSubmit:n=>a(u.transformValues(n)),children:e.jsxs(A,{gap:"10",children:[e.jsx(u,{...r}),e.jsx(ne,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},j={};var H,R,$;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:"{}",...($=(R=j.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};const je=["Default"];export{j as Default,je as __namedExportsOrder,qe as default};
