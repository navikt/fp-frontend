import{e as F,j as e}from"./iframe-CayaqC7Q.js";import{u as D,c as N,V as R,b as h,S as f,R as O,m as T,f as k,P as S,B as _}from"./nb_NO-CGAi3Ezg.js";import{n as E}from"./notEmpty-6aiiHJJi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DJpVPxS0.js";class c{fagsakYtelseType;familieHendelseType;foreldreType;constructor(a,l,n){this.fagsakYtelseType=E(a),a==="SVP"?this.familieHendelseType="FODSL":this.familieHendelseType=E(l),this.foreldreType=E(n)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const i=F(T),t={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},u=[{label:i.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:t.ANNEN_FORELDER_DOED},{label:i.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:t.OVERTA_FORELDREANSVARET_ALENE},{label:i.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:t.MANN_ADOPTERER_ALENE},{label:i.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:t.IKKE_RELEVANT}],s=({readOnly:r,soknadData:a})=>{const n=a.getFamilieHendelseType()!=="FODSL"&&a.getForeldreType()==="FAR"?u:u.filter(o=>o.value!==t.MANN_ADOPTERER_ALENE),{control:A}=D();return e.jsx(N,{children:e.jsxs(R,{gap:"space-16",children:[e.jsx(h,{size:"small",level:"3",children:i.formatMessage({id:"Registrering.Rettigheter.Title"})}),e.jsx(f,{name:"rettigheter",control:A,legend:"",hideLegend:!0,readOnly:r,children:n.map(o=>e.jsx(O,{value:o.value,size:"small",children:o.label},o.value))})]})})};s.initialValues=()=>({rettigheter:void 0});s.transformValues=({rettigheter:r})=>r===t.IKKE_RELEVANT?{}:{rettigheter:r};s.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ rettigheter }: RettigheterFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]},alias:"RettigheterFormValues"}}],returns:null}],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};const v={title:"ui-komponenter/rettigheter",component:s,args:{readOnly:!1},render:(r,{parameters:{submitCallback:a}})=>{const l=k();return e.jsx(S,{formMethods:l,onSubmit:n=>a(s.transformValues(n)),children:e.jsxs(R,{gap:"space-40",children:[e.jsx(s,{...r}),e.jsx(_,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},d={args:{soknadData:new c("FP","FODSL","MOR")}},p={args:{soknadData:new c("FP","FODSL","FAR")}},m={args:{soknadData:new c("FP","ADPSJN","MOR")}},g={args:{soknadData:new c("FP","ADPSJN","FAR")}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('FP', 'FODSL', 'MOR')
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('FP', 'FODSL', 'FAR')
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('FP', 'ADPSJN', 'MOR')
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('FP', 'ADPSJN', 'FAR')
  }
}`,...g.parameters?.docs?.source}}};const x=["MorFødsel","FarFodsel","MorAdopterer","FarAdopterer"];export{g as FarAdopterer,p as FarFodsel,m as MorAdopterer,d as MorFødsel,x as __namedExportsOrder,v as default};
