var O=Object.defineProperty;var T=(r,e,t)=>e in r?O(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(T(r,typeof e!="symbol"?e+"":e,t),t);import{j as a}from"./jsx-runtime-69eee039.js";import{a as y}from"./chunk-AY7I2SME-c7b6cf8a.js";import{b,Q as x,J as _,w as P,t as L,P as S,m as v,r as m,u as M,F as V,B as j}from"./nb_NO-b9935103.js";import{z as E}from"./index.es-5fbb2a09.js";import{E as d,N as c}from"./index.es-fe5c891b.js";import{H as I}from"./Heading-43813b22.js";import"./index-7c191284.js";import"./tslib.es6-45626265.js";import"./index-ecbee218.js";const l={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},p=({readOnly:r=!0,soknadData:e})=>{const t=b(),o=[{label:t.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:l.ANNEN_FORELDER_DOED},{label:t.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:l.OVERTA_FORELDREANSVARET_ALENE},{label:t.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:l.MANN_ADOPTERER_ALENE},{label:t.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:l.IKKE_RELEVANT}];return e.getFamilieHendelseType()!==d.FODSEL&&e.getForeldreType()===c.FAR||o.splice(2,1),a.jsxs(x,{children:[a.jsx(I,{size:"small",children:t.formatMessage({id:"Registrering.Rettigheter.Title"})}),a.jsx(_,{sixteenPx:!0}),a.jsx(P,{name:"rettigheter",isReadOnly:r,radios:o})]})};try{p.displayName="RettigheterPanel",p.__docgenInfo={description:`RettigheterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad og søker er far.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,displayName:"RettigheterPanel",props:{soknadData:{defaultValue:null,description:"",name:"soknadData",required:!0,type:{name:"SoknadData"}},readOnly:{defaultValue:{value:"true"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}}}catch{}const K=L(v),u=({readOnly:r,soknadData:e})=>a.jsx(S,{value:K,children:a.jsx(p,{readOnly:r,soknadData:e})}),D=u;try{u.displayName="RettigheterPapirsoknadIndex",u.__docgenInfo={description:"",displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},soknadData:{defaultValue:null,description:"",name:"soknadData",required:!0,type:{name:"SoknadData"}}}}}catch{}class N{constructor(e,t,o){i(this,"fagsakYtelseType");i(this,"familieHendelseType");i(this,"foreldreType");this.fagsakYtelseType=m(e),e===E.SVANGERSKAPSPENGER?this.familieHendelseType=d.FODSEL:this.familieHendelseType=m(t),this.foreldreType=m(o)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const U={title:"papirsoknad/ui-komponenter/rettigheter",component:D},F=({submitCallback:r,soknadData:e})=>{const t=M();return a.jsxs(V,{formMethods:t,onSubmit:r,children:[a.jsx(D,{readOnly:!1,soknadData:e}),a.jsx(_,{fourtyPx:!0}),a.jsx(j,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},n=F.bind({});n.args={soknadData:new N(E.FORELDREPENGER,d.FODSEL,c.MOR),submitCallback:y("button-click")};const s=F.bind({});s.args={soknadData:new N(E.FORELDREPENGER,d.ADOPSJON,c.FAR),submitCallback:y("button-click")};var g,R,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
}`,...(f=(R=n.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var k,A,h;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`({
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
}`,...(h=(A=s.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};const W=["Default","FarAdopterer"];export{n as Default,s as FarAdopterer,W as __namedExportsOrder,U as default};
//# sourceMappingURL=RettigheterPapirsoknadIndex.stories-052a3dfb.js.map
