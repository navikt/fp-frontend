var b=Object.defineProperty;var P=(a,e,t)=>e in a?b(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var i=(a,e,t)=>(P(a,typeof e!="symbol"?e+"":e,t),t);import{j as h,a as r}from"./jsx-runtime-f8e698f3.js";import{a as _}from"./chunk-AY7I2SME-5eb1ab46.js";import{l as D,R as L,H as S,g as N,T as v,t as M,m as x,s as m,a as V,O as I,c as K}from"./nb_NO-bd1cc92f.js";import{f as c,z as E}from"./index.es-e98ec6f1.js";import{f as d}from"./familieHendelseType-9981d52a.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const l={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},p=({readOnly:a=!0,soknadData:e})=>{const t=D.useIntl(),o=[{label:t.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:l.ANNEN_FORELDER_DOED},{label:t.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:l.OVERTA_FORELDREANSVARET_ALENE},{label:t.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:l.MANN_ADOPTERER_ALENE},{label:t.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:l.IKKE_RELEVANT}];return e.getFamilieHendelseType()!==d.FODSEL&&e.getForeldreType()===c.FAR||o.splice(2,1),h(L,{children:[r(S,{size:"small",children:t.formatMessage({id:"Registrering.Rettigheter.Title"})}),r(N,{sixteenPx:!0}),r(v,{name:"rettigheter",isReadOnly:a,radios:o})]})};try{p.displayName="RettigheterPanel",p.__docgenInfo={description:`RettigheterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad og søker er far.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,displayName:"RettigheterPanel",props:{soknadData:{defaultValue:null,description:"",name:"soknadData",required:!0,type:{name:"SoknadData"}},readOnly:{defaultValue:{value:"true"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}}}catch{}const H=M(x),u=({readOnly:a,soknadData:e})=>r(D.RawIntlProvider,{value:H,children:r(p,{readOnly:a,soknadData:e})}),O=u;try{u.displayName="RettigheterPapirsoknadIndex",u.__docgenInfo={description:"",displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},soknadData:{defaultValue:null,description:"",name:"soknadData",required:!0,type:{name:"SoknadData"}}}}}catch{}class F{constructor(e,t,o){i(this,"fagsakYtelseType");i(this,"familieHendelseType");i(this,"foreldreType");this.fagsakYtelseType=m(e),e===E.SVANGERSKAPSPENGER?this.familieHendelseType=d.FODSEL:this.familieHendelseType=m(t),this.foreldreType=m(o)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const $={title:"papirsoknad/ui-komponenter/rettigheter",component:O},T=({submitCallback:a,soknadData:e})=>{const t=V();return h(I,{formMethods:t,onSubmit:a,children:[r(O,{readOnly:!1,soknadData:e}),r(N,{fourtyPx:!0}),r(K,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},n=T.bind({});n.args={soknadData:new F(E.FORELDREPENGER,d.FODSEL,c.MOR),submitCallback:_("button-click")};const s=T.bind({});s.args={soknadData:new F(E.FORELDREPENGER,d.ADOPSJON,c.FAR),submitCallback:_("button-click")};var g,R,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
}`,...(A=(y=s.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const Q=["Default","FarAdopterer"];export{n as Default,s as FarAdopterer,Q as __namedExportsOrder,$ as default};
//# sourceMappingURL=RettigheterPapirsoknadIndex.stories-39becf76.js.map
