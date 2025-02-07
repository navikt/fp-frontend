var z=Object.defineProperty;var B=(e,r,a)=>r in e?z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a;var c=(e,r,a)=>B(e,typeof r!="symbol"?r+"":r,a);import{j as s}from"./jsx-runtime-CLpGMVip.js";import{s as F,n as Z,Y as C,a as q,b as Q,Z as U,m as W,c as X,r as $,B as ee}from"./nb_NO-BWG5UGPU.js";import"./aktivitetStatus-B1m96ipJ.js";import{F as p}from"./familieHendelseType-CLnpSBng.js";import{F as g}from"./foreldreType-BrQrvOqY.js";import"./index-CYQpqK1Q.js";import"./dayjs.min-DPY8FYmS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-4Uuc9FQs.js";import"./index-CjktTq3Q.js";var E=(e=>(e.ENGANGSSTONAD="ES",e.FORELDREPENGER="FP",e.SVANGERSKAPSPENGER="SVP",e))(E||{});class u{constructor(r,a,m){c(this,"fagsakYtelseType");c(this,"familieHendelseType");c(this,"foreldreType");this.fagsakYtelseType=F(r),r===E.SVANGERSKAPSPENGER?this.familieHendelseType=p.FODSEL:this.familieHendelseType=F(a),this.foreldreType=F(m)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const R=Z(W),d={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},D=[{label:R.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:d.ANNEN_FORELDER_DOED},{label:R.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:d.OVERTA_FORELDREANSVARET_ALENE},{label:R.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:d.MANN_ADOPTERER_ALENE},{label:R.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:d.IKKE_RELEVANT}],l=({readOnly:e,soknadData:r})=>{const m=r.getFamilieHendelseType()!==p.FODSEL&&r.getForeldreType()===g.FAR?D:D.filter(J=>J.value!==d.MANN_ADOPTERER_ALENE);return s.jsx(C,{children:s.jsxs(q,{gap:"4",children:[s.jsx(Q,{size:"small",children:R.formatMessage({id:"Registrering.Rettigheter.Title"})}),s.jsx(U,{name:"rettigheter",isReadOnly:e,radios:m})]})})};l.initialValues=()=>({rettigheter:void 0});l.transformValues=({rettigheter:e})=>e===d.IKKE_RELEVANT?{}:{rettigheter:e};l.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ rettigheter }: RettigheterFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]},alias:"RettigheterFormValues"}}],returns:null}],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};l.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ rettigheter }: RettigheterFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]},alias:"RettigheterFormValues"}}],returns:null}],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};const me={title:"ui-komponenter/rettigheter",component:l,args:{readOnly:!1},render:(e,{parameters:{submitCallback:r}})=>{const a=X();return s.jsx($,{formMethods:a,onSubmit:m=>r(l.transformValues(m)),children:s.jsxs(q,{gap:"10",children:[s.jsx(l,{...e}),s.jsx(ee,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},t={args:{soknadData:new u(E.FORELDREPENGER,p.FODSEL,g.MOR)}},n={args:{soknadData:new u(E.FORELDREPENGER,p.FODSEL,g.FAR)}},o={args:{soknadData:new u(E.FORELDREPENGER,p.ADOPSJON,g.MOR)}},i={args:{soknadData:new u(E.FORELDREPENGER,p.ADOPSJON,g.FAR)}};var O,A,y;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...(y=(A=t.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var N,T,k;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var S,f,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.ADOPSJON, ForeldreType.MOR)
  }
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var L,P,_;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.ADOPSJON, ForeldreType.FAR)
  }
}`,...(_=(P=i.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var V,M,G;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...(G=(M=t.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var b,v,w;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var H,x,j;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.ADOPSJON, ForeldreType.MOR)
  }
}`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var K,Y,I;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.ADOPSJON, ForeldreType.FAR)
  }
}`,...(I=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:I.source}}};const Re=["MorFødsel","FarFodsel","MorAdopterer","FarAdopterer"];export{i as FarAdopterer,n as FarFodsel,o as MorAdopterer,t as MorFødsel,Re as __namedExportsOrder,me as default};
