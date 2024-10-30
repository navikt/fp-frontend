var O=Object.defineProperty;var F=(r,e,t)=>e in r?O(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>F(r,typeof e!="symbol"?e+"":e,t);import{j as a}from"./jsx-runtime-Cw0GR0a5.js";import{d as _,S as b,H as x,y as h,k as L,t as P,P as S,m as v,o as m,a as y,b as M,$ as j,B as V}from"./nb_NO-eDexvpdT.js";import{f as p,z as E}from"./index.es-DhPhd5y7.js";import{f as d}from"./familieHendelseType-D5XfoL_I.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./dayjs.min-DQZRloWl.js";import"./index-BbmHap-z.js";const l={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},D=({readOnly:r=!0,soknadData:e})=>{const t=_(),o=[{label:t.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:l.ANNEN_FORELDER_DOED},{label:t.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:l.OVERTA_FORELDREANSVARET_ALENE},{label:t.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:l.MANN_ADOPTERER_ALENE},{label:t.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:l.IKKE_RELEVANT}];return e.getFamilieHendelseType()!==d.FODSEL&&e.getForeldreType()===p.FAR||o.splice(2,1),a.jsxs(b,{children:[a.jsx(x,{size:"small",children:t.formatMessage({id:"Registrering.Rettigheter.Title"})}),a.jsx(h,{sixteenPx:!0}),a.jsx(L,{name:"rettigheter",isReadOnly:r,radios:o})]})};D.__docgenInfo={description:`RettigheterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad og søker er far.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"RettigheterPanel",props:{soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const I=P(v),u=({readOnly:r,soknadData:e})=>a.jsx(S,{value:I,children:a.jsx(D,{readOnly:r,soknadData:e})});u.__docgenInfo={description:"",methods:[],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};class N{constructor(e,t,o){i(this,"fagsakYtelseType");i(this,"familieHendelseType");i(this,"foreldreType");this.fagsakYtelseType=m(e),e===E.SVANGERSKAPSPENGER?this.familieHendelseType=d.FODSEL:this.familieHendelseType=m(t),this.foreldreType=m(o)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const J={title:"papirsoknad/ui-komponenter/rettigheter",component:u},T=({submitCallback:r,soknadData:e})=>{const t=M();return a.jsxs(j,{formMethods:t,onSubmit:r,children:[a.jsx(u,{readOnly:!1,soknadData:e}),a.jsx(h,{fourtyPx:!0}),a.jsx(V,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},s=T.bind({});s.args={soknadData:new N(E.FORELDREPENGER,d.FODSEL,p.MOR),submitCallback:y("button-click")};const n=T.bind({});n.args={soknadData:new N(E.FORELDREPENGER,d.ADOPSJON,p.FAR),submitCallback:y("button-click")};var c,R,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(g=(R=s.parameters)==null?void 0:R.docs)==null?void 0:g.source}}};var f,k,A;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`({
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
}`,...(A=(k=n.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const Q=["Default","FarAdopterer"];export{s as Default,n as FarAdopterer,Q as __namedExportsOrder,J as default};
