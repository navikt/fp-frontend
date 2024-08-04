var b=Object.defineProperty;var F=(r,e,t)=>e in r?b(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>F(r,typeof e!="symbol"?e+"":e,t);import{j as a}from"./dayjs.min-D0F5fy79.js";import{g as _,S as x,H as L,b as A,a as P,t as S,k as v,m as M,r as m,c as h,d as j,Y as I,B as V}from"./nb_NO-CdUvm0lp.js";import{f as p,z as E}from"./index.es-DhPhd5y7.js";import{f as l}from"./familieHendelseType-D5XfoL_I.js";import"./index-CTjT7uj6.js";import"./v4-CQkTLCs1.js";import"./index-CYM-y3Gt.js";const d={ANNEN_FORELDER_DOED:"ANNEN_FORELDER_DOED",OVERTA_FORELDREANSVARET_ALENE:"OVERTA_FORELDREANSVARET_ALENE",MANN_ADOPTERER_ALENE:"MANN_ADOPTERER_ALENE",IKKE_RELEVANT:"IKKE_RELEVANT"},D=({readOnly:r=!0,soknadData:e})=>{const t=_(),o=[{label:t.formatMessage({id:"Registrering.Rettigheter.AnnenForelderDoed"}),value:d.ANNEN_FORELDER_DOED},{label:t.formatMessage({id:"Registrering.Rettigheter.OvertaForeldreansvaretAlene"}),value:d.OVERTA_FORELDREANSVARET_ALENE},{label:t.formatMessage({id:"Registrering.Rettigheter.MannAdoptererAlene"}),value:d.MANN_ADOPTERER_ALENE},{label:t.formatMessage({id:"Registrering.Rettigheter.IkkeRelevant"}),value:d.IKKE_RELEVANT}];return e.getFamilieHendelseType()!==l.FODSEL&&e.getForeldreType()===p.FAR||o.splice(2,1),a.jsxs(x,{children:[a.jsx(L,{size:"small",children:t.formatMessage({id:"Registrering.Rettigheter.Title"})}),a.jsx(A,{sixteenPx:!0}),a.jsx(P,{name:"rettigheter",isReadOnly:r,radios:o})]})};D.__docgenInfo={description:`RettigheterPanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad og søker er far.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,methods:[],displayName:"RettigheterPanel",props:{soknadData:{required:!0,tsType:{name:"SoknadData"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const K=S(M),y=({readOnly:r,soknadData:e})=>a.jsx(v,{value:K,children:a.jsx(D,{readOnly:r,soknadData:e})}),N=y;y.__docgenInfo={description:"",methods:[],displayName:"RettigheterPapirsoknadIndex",props:{readOnly:{required:!0,tsType:{name:"boolean"},description:""},soknadData:{required:!0,tsType:{name:"SoknadData"},description:""}}};class T{constructor(e,t,o){i(this,"fagsakYtelseType");i(this,"familieHendelseType");i(this,"foreldreType");this.fagsakYtelseType=m(e),e===E.SVANGERSKAPSPENGER?this.familieHendelseType=l.FODSEL:this.familieHendelseType=m(t),this.foreldreType=m(o)}getFagsakYtelseType(){return this.fagsakYtelseType}getFamilieHendelseType(){return this.familieHendelseType}getForeldreType(){return this.foreldreType}}const $={title:"papirsoknad/ui-komponenter/rettigheter",component:N},O=({submitCallback:r,soknadData:e})=>{const t=j();return a.jsxs(I,{formMethods:t,onSubmit:r,children:[a.jsx(N,{readOnly:!1,soknadData:e}),a.jsx(A,{fourtyPx:!0}),a.jsx(V,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},s=O.bind({});s.args={soknadData:new T(E.FORELDREPENGER,l.FODSEL,p.MOR),submitCallback:h("button-click")};const n=O.bind({});n.args={soknadData:new T(E.FORELDREPENGER,l.ADOPSJON,p.FAR),submitCallback:h("button-click")};var u,c,R;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
}`,...(R=(c=s.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};var g,f,k;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`({
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
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const Q=["Default","FarAdopterer"];export{s as Default,n as FarAdopterer,Q as __namedExportsOrder,$ as default};
