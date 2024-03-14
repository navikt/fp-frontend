var F=Object.defineProperty;var _=(r,e,t)=>e in r?F(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(_(r,typeof e!="symbol"?e+"":e,t),t);import{R as a}from"./index-OjgoNOWw.js";import{e as b,R as L,H as P,g as A,T as S,t as v,P as M,m as x,s as m,a as D,b as I,O as V,B as K}from"./nb_NO-H9k11H78.js";import{f as p,z as E}from"./index.es-57-k9NR3.js";import{f as d}from"./familieHendelseType-zW0cyhtN.js";import"./v4-yQnnJER4.js";import"./index-mQqIOHEI.js";const l={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},T=({readOnly:r=!0,soknadData:e})=>{const t=b(),o=[{label:t.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:l.ANNEN_FORELDER_DOED},{label:t.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:l.OVERTA_FORELDREANSVARET_ALENE},{label:t.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:l.MANN_ADOPTERER_ALENE},{label:t.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:l.IKKE_RELEVANT}];return e.getFamilieHendelseType()!==d.FODSEL&&e.getForeldreType()===p.FAR||o.splice(2,1),a.createElement(L,null,a.createElement(P,{size:"small"},t.formatMessage({id:"Registrering.Rettigheter.Title"})),a.createElement(A,{sixteenPx:!0}),a.createElement(S,{name:"rettigheter",isReadOnly:r,radios:o}))};T.__docgenInfo={description:`RettigheterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad og søker er far.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"RettigheterPanel",props:{soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const H=v(x),h=({readOnly:r,soknadData:e})=>a.createElement(M,{value:H},a.createElement(T,{readOnly:r,soknadData:e})),y=h;h.__docgenInfo={description:"",methods:[],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};class N{constructor(e,t,o){i(this,"fagsakYtelseType");i(this,"familieHendelseType");i(this,"foreldreType");this.fagsakYtelseType=m(e),e===E.SVANGERSKAPSPENGER?this.familieHendelseType=d.FODSEL:this.familieHendelseType=m(t),this.foreldreType=m(o)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const J={title:"papirsoknad/ui-komponenter/rettigheter",component:y},O=({submitCallback:r,soknadData:e})=>{const t=I();return a.createElement(V,{formMethods:t,onSubmit:r},a.createElement(y,{readOnly:!1,soknadData:e}),a.createElement(A,{fourtyPx:!0}),a.createElement(K,{size:"small",variant:"primary"},"Lagreknapp (Kun for test)"))},n=O.bind({});n.args={soknadData:new N(E.FORELDREPENGER,d.FODSEL,p.MOR),submitCallback:D("button-click")};const s=O.bind({});s.args={soknadData:new N(E.FORELDREPENGER,d.ADOPSJON,p.FAR),submitCallback:D("button-click")};var c,u,R;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(R=(u=n.parameters)==null?void 0:u.docs)==null?void 0:R.source}}};var g,f,k;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const $=["Default","FarAdopterer"];export{n as Default,s as FarAdopterer,$ as __namedExportsOrder,J as default};
