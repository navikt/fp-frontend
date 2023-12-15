var T=Object.defineProperty;var b=(a,e,t)=>e in a?T(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var i=(a,e,t)=>(b(a,typeof e!="symbol"?e+"":e,t),t);import{j as h,a as r}from"./jsx-runtime-ESnF-waY.js";import{e as P,R as L,H as S,g as _,T as v,t as M,P as x,m as V,s as m,a as D,b as I,O as K,B as H}from"./nb_NO-6Jm19noK.js";import{f as c,z as E}from"./index.es-57-k9NR3.js";import{f as d}from"./familieHendelseType-zW0cyhtN.js";import"./index-OjgoNOWw.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./index-mQqIOHEI.js";const l={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},p=({readOnly:a=!0,soknadData:e})=>{const t=P(),o=[{label:t.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:l.ANNEN_FORELDER_DOED},{label:t.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:l.OVERTA_FORELDREANSVARET_ALENE},{label:t.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:l.MANN_ADOPTERER_ALENE},{label:t.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:l.IKKE_RELEVANT}];return e.getFamilieHendelseType()!==d.FODSEL&&e.getForeldreType()===c.FAR||o.splice(2,1),h(L,{children:[r(S,{size:"small",children:t.formatMessage({id:"Registrering.Rettigheter.Title"})}),r(_,{sixteenPx:!0}),r(v,{name:"rettigheter",isReadOnly:a,radios:o})]})};try{p.displayName="RettigheterPanel",p.__docgenInfo={description:`RettigheterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad og søker er far.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,displayName:"RettigheterPanel",props:{soknadData:{defaultValue:null,description:"",name:"soknadData",required:!0,type:{name:"SoknadData"}},readOnly:{defaultValue:{value:"true"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}}}catch{}const B=M(V),u=({readOnly:a,soknadData:e})=>r(x,{value:B,children:r(p,{readOnly:a,soknadData:e})}),N=u;try{u.displayName="RettigheterPapirsoknadIndex",u.__docgenInfo={description:"",displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},soknadData:{defaultValue:null,description:"",name:"soknadData",required:!0,type:{name:"SoknadData"}}}}}catch{}class O{constructor(e,t,o){i(this,"fagsakYtelseType");i(this,"familieHendelseType");i(this,"foreldreType");this.fagsakYtelseType=m(e),e===E.SVANGERSKAPSPENGER?this.familieHendelseType=d.FODSEL:this.familieHendelseType=m(t),this.foreldreType=m(o)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const U={title:"papirsoknad/ui-komponenter/rettigheter",component:N},F=({submitCallback:a,soknadData:e})=>{const t=I();return h(K,{formMethods:t,onSubmit:a,children:[r(N,{readOnly:!1,soknadData:e}),r(_,{fourtyPx:!0}),r(H,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},n=F.bind({});n.args={soknadData:new O(E.FORELDREPENGER,d.FODSEL,c.MOR),submitCallback:D("button-click")};const s=F.bind({});s.args={soknadData:new O(E.FORELDREPENGER,d.ADOPSJON,c.FAR),submitCallback:D("button-click")};var g,R,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`({
  submitCallback,
  soknadData
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <RettigheterPapirsoknadIndex readOnly={false} soknadData={soknadData} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(f=(R=n.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var k,y,A;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`({
  submitCallback,
  soknadData
}) => {
  const formMethods = useForm();
  return <Form formMethods={formMethods} onSubmit={submitCallback}>
      <RettigheterPapirsoknadIndex readOnly={false} soknadData={soknadData} />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(A=(y=s.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const W=["Default","FarAdopterer"];export{n as Default,s as FarAdopterer,W as __namedExportsOrder,U as default};
