var O=Object.defineProperty;var T=(r,e,t)=>e in r?O(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(T(r,typeof e!="symbol"?e+"":e,t),t);import{j as a}from"./jsx-runtime-d079401a.js";import{a as h}from"./chunk-AY7I2SME-c7b6cf8a.js";import{c as b,Q as x,H as P,G as y,w as L,t as S,P as v,m as M,r as m,u as V,F as j,B as I}from"./nb_NO-8eede04c.js";import{z as c}from"./index.es-5fbb2a09.js";import{N as d,_ as E}from"./index.es-d4601d30.js";import"./index-f1f2c4b1.js";import"./index-c74c9f7f.js";const l={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},p=({readOnly:r=!0,soknadData:e})=>{const t=b(),o=[{label:t.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:l.ANNEN_FORELDER_DOED},{label:t.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:l.OVERTA_FORELDREANSVARET_ALENE},{label:t.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:l.MANN_ADOPTERER_ALENE},{label:t.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:l.IKKE_RELEVANT}];return e.getFamilieHendelseType()!==d.FODSEL&&e.getForeldreType()===E.FAR||o.splice(2,1),a.jsxs(x,{children:[a.jsx(P,{size:"small",children:t.formatMessage({id:"Registrering.Rettigheter.Title"})}),a.jsx(y,{sixteenPx:!0}),a.jsx(L,{name:"rettigheter",isReadOnly:r,radios:o})]})};try{p.displayName="RettigheterPanel",p.__docgenInfo={description:`RettigheterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad og søker er far.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,displayName:"RettigheterPanel",props:{soknadData:{defaultValue:null,description:"",name:"soknadData",required:!0,type:{name:"SoknadData"}},readOnly:{defaultValue:{value:"true"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}}}}}catch{}const K=S(M),u=({readOnly:r,soknadData:e})=>a.jsx(v,{value:K,children:a.jsx(p,{readOnly:r,soknadData:e})}),D=u;try{u.displayName="RettigheterPapirsoknadIndex",u.__docgenInfo={description:"",displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},soknadData:{defaultValue:null,description:"",name:"soknadData",required:!0,type:{name:"SoknadData"}}}}}catch{}class N{constructor(e,t,o){i(this,"fagsakYtelseType");i(this,"familieHendelseType");i(this,"foreldreType");this.fagsakYtelseType=m(e),e===c.SVANGERSKAPSPENGER?this.familieHendelseType=d.FODSEL:this.familieHendelseType=m(t),this.foreldreType=m(o)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const J={title:"papirsoknad/ui-komponenter/rettigheter",component:D},F=({submitCallback:r,soknadData:e})=>{const t=V();return a.jsxs(j,{formMethods:t,onSubmit:r,children:[a.jsx(D,{readOnly:!1,soknadData:e}),a.jsx(y,{fourtyPx:!0}),a.jsx(I,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},n=F.bind({});n.args={soknadData:new N(c.FORELDREPENGER,d.FODSEL,E.MOR),submitCallback:h("button-click")};const s=F.bind({});s.args={soknadData:new N(c.FORELDREPENGER,d.ADOPSJON,E.FAR),submitCallback:h("button-click")};var g,R,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
}`,...(f=(R=n.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var k,A,_;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`({
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
}`,...(_=(A=s.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};const $=["Default","FarAdopterer"];export{n as Default,s as FarAdopterer,$ as __namedExportsOrder,J as default};
//# sourceMappingURL=RettigheterPapirsoknadIndex.stories-3c5ad5bb.js.map
