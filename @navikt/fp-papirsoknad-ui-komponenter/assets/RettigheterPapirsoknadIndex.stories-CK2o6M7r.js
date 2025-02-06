var z=Object.defineProperty;var B=(r,e,a)=>e in r?z(r,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[e]=a;var c=(r,e,a)=>B(r,typeof e!="symbol"?e+"":e,a);import{j as s}from"./jsx-runtime-CLpGMVip.js";import{i as F,n as Z,Y as C,a as q,b as Q,Z as U,m as W,c as X,r as $,B as ee}from"./nb_NO-BozuW9Q2.js";import"./aktivitetStatus-B1m96ipJ.js";import{F as g}from"./fagsakYtelseType-DI8GXtVr.js";import{F as p}from"./familieHendelseType-CLnpSBng.js";import{F as R}from"./foreldreType-BrQrvOqY.js";import"./index-CYQpqK1Q.js";import"./dayjs.min-DPY8FYmS.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-4Uuc9FQs.js";import"./index-CjktTq3Q.js";class u{constructor(e,a,m){c(this,"fagsakYtelseType");c(this,"familieHendelseType");c(this,"foreldreType");this.fagsakYtelseType=F(e),e===g.SVANGERSKAPSPENGER?this.familieHendelseType=p.FODSEL:this.familieHendelseType=F(a),this.foreldreType=F(m)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const E=Z(W),d={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},D=[{label:E.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:d.ANNEN_FORELDER_DOED},{label:E.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:d.OVERTA_FORELDREANSVARET_ALENE},{label:E.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:d.MANN_ADOPTERER_ALENE},{label:E.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:d.IKKE_RELEVANT}],l=({readOnly:r,soknadData:e})=>{const m=e.getFamilieHendelseType()!==p.FODSEL&&e.getForeldreType()===R.FAR?D:D.filter(J=>J.value!==d.MANN_ADOPTERER_ALENE);return s.jsx(C,{children:s.jsxs(q,{gap:"4",children:[s.jsx(Q,{size:"small",children:E.formatMessage({id:"Registrering.Rettigheter.Title"})}),s.jsx(U,{name:"rettigheter",isReadOnly:r,radios:m})]})})};l.initialValues=()=>({rettigheter:void 0});l.transformValues=({rettigheter:r})=>r===d.IKKE_RELEVANT?{}:{rettigheter:r};l.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ rettigheter }: RettigheterFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]},alias:"RettigheterFormValues"}}],returns:null}],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};l.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ rettigheter }: RettigheterFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]},alias:"RettigheterFormValues"}}],returns:null}],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};const ge={title:"ui-komponenter/rettigheter",component:l,args:{readOnly:!1},render:(r,{parameters:{submitCallback:e}})=>{const a=X();return s.jsx($,{formMethods:a,onSubmit:m=>e(l.transformValues(m)),children:s.jsxs(q,{gap:"10",children:[s.jsx(l,{...r}),s.jsx(ee,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},t={args:{soknadData:new u(g.FORELDREPENGER,p.FODSEL,R.MOR)}},n={args:{soknadData:new u(g.FORELDREPENGER,p.FODSEL,R.FAR)}},o={args:{soknadData:new u(g.FORELDREPENGER,p.ADOPSJON,R.MOR)}},i={args:{soknadData:new u(g.FORELDREPENGER,p.ADOPSJON,R.FAR)}};var y,O,T;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...(T=(O=t.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var A,N,k;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...(k=(N=n.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var f,h,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.ADOPSJON, ForeldreType.MOR)
  }
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var L,_,P;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.ADOPSJON, ForeldreType.FAR)
  }
}`,...(P=(_=i.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var M,V,b;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.MOR)
  }
}`,...(b=(V=t.parameters)==null?void 0:V.docs)==null?void 0:b.source}}};var w,H,v;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.FODSEL, ForeldreType.FAR)
  }
}`,...(v=(H=n.parameters)==null?void 0:H.docs)==null?void 0:v.source}}};var x,j,G;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.ADOPSJON, ForeldreType.MOR)
  }
}`,...(G=(j=o.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var Y,I,K;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData(FagsakYtelseType.FORELDREPENGER, FamilieHendelseType.ADOPSJON, ForeldreType.FAR)
  }
}`,...(K=(I=i.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};const Re=["MorFødsel","FarFodsel","MorAdopterer","FarAdopterer"];export{i as FarAdopterer,n as FarFodsel,o as MorAdopterer,t as MorFødsel,Re as __namedExportsOrder,ge as default};
