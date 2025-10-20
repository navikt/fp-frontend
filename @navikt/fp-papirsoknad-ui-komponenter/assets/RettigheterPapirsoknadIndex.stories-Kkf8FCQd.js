import{e as F,j as e}from"./iframe-C-F1-KFd.js";import{u as D,c as N,V as R,b as h,S as f,R as O,m as T,d as k,e as y,B as S}from"./nb_NO-DCcstzbV.js";import{n as E}from"./notEmpty-6aiiHJJi.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C2Kif7jS.js";class g{fagsakYtelseType;familieHendelseType;foreldreType;constructor(a,l,n){this.fagsakYtelseType=E(a),a==="SVP"?this.familieHendelseType="FODSL":this.familieHendelseType=E(l),this.foreldreType=E(n)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const i=F(T),t={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},u=[{label:i.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:t.ANNEN_FORELDER_DOED},{label:i.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:t.OVERTA_FORELDREANSVARET_ALENE},{label:i.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:t.MANN_ADOPTERER_ALENE},{label:i.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:t.IKKE_RELEVANT}],s=({readOnly:r,soknadData:a})=>{const n=a.getFamilieHendelseType()!=="FODSL"&&a.getForeldreType()==="FAR"?u:u.filter(o=>o.value!==t.MANN_ADOPTERER_ALENE),{control:A}=D();return e.jsx(N,{children:e.jsxs(R,{gap:"space-16",children:[e.jsx(h,{size:"small",level:"3",children:i.formatMessage({id:"Registrering.Rettigheter.Title"})}),e.jsx(f,{name:"rettigheter",control:A,isReadOnly:r,children:n.map(o=>e.jsx(O,{value:o.value,size:"small",children:o.label},o.value))})]})})};s.initialValues=()=>({rettigheter:void 0});s.transformValues=({rettigheter:r})=>r===t.IKKE_RELEVANT?{}:{rettigheter:r};s.__docgenInfo={description:"",methods:[{name:"initialValues",docblock:null,modifiers:["static"],params:[],returns:{type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]}}}},{name:"transformValues",docblock:null,modifiers:["static"],params:[{name:"{ rettigheter }: RettigheterFormValues",optional:!1,type:{name:"signature",type:"object",raw:`{
  rettigheter?: string;
}`,signature:{properties:[{key:"rettigheter",value:{name:"string",required:!1}}]},alias:"RettigheterFormValues"}}],returns:null}],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};const v={title:"ui-komponenter/rettigheter",component:s,args:{readOnly:!1},render:(r,{parameters:{submitCallback:a}})=>{const l=k();return e.jsx(y,{formMethods:l,onSubmit:n=>a(s.transformValues(n)),children:e.jsxs(R,{gap:"space-40",children:[e.jsx(s,{...r}),e.jsx(S,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})})}},d={args:{soknadData:new g("FP","FODSL","MOR")}},p={args:{soknadData:new g("FP","FODSL","FAR")}},m={args:{soknadData:new g("FP","ADPSJN","MOR")}},c={args:{soknadData:new g("FP","ADPSJN","FAR")}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    soknadData: new SoknadData('FP', 'ADPSJN', 'FAR')
  }
}`,...c.parameters?.docs?.source}}};const x=["MorFødsel","FarFodsel","MorAdopterer","FarAdopterer"];export{c as FarAdopterer,p as FarFodsel,m as MorAdopterer,d as MorFødsel,x as __namedExportsOrder,v as default};
