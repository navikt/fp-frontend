import{j as e}from"./jsx-runtime-d079401a.js";import{a as D}from"./chunk-AY7I2SME-c7b6cf8a.js";import{f as w,g as z,j as Z,n as ee,p as re,b as d,S as oe,U as te,Y as se,z as F,a as _,N as P,D as ne,H as ae,F as x,T as I,h as A,t as le,P as ie,m as de,c as pe,O as ue,B as me}from"./nb_NO-e8a3fb59.js";import{b as ce}from"./index.es-6b9e5a77.js";import{g as ge,r as H,R as he}from"./index-f1f2c4b1.js";import{V as fe,J as Oe}from"./index.es-d4601d30.js";import{r as m,b as U,I as V,h as S,c as R,q as ve}from"./index.es-40a199ab.js";import"./index-c74c9f7f.js";var L={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(o){(function(){var t={}.hasOwnProperty;function n(){for(var a=[],s=0;s<arguments.length;s++){var r=arguments[s];if(r){var p=typeof r;if(p==="string"||p==="number")a.push(this&&this[r]||r);else if(Array.isArray(r))a.push(n.apply(this,r));else if(p==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){a.push(r.toString());continue}for(var l in r)t.call(r,l)&&r[l]&&a.push(this&&this[l]||l)}}}return a.join(" ")}o.exports?(n.default=n,o.exports=n):window.classNames=n})()})(L);var xe=L.exports;const je=ge(xe),be="_datesRowWithRemoveButton_od5lu_1",ye="_selectBredde_od5lu_7",Y={datesRowWithRemoveButton:be,selectBredde:ye},ke=je.bind(Y),Fe={land:"",periodeFom:"",periodeTom:""},b=(o,t)=>o(t),T=(o,t)=>()=>{const a=o(t).filter(({periodeFom:s,periodeTom:r})=>s&&s!==""&&r&&r!=="").map(({periodeFom:s,periodeTom:r})=>[s,r]);return a.length>0?ve(a):void 0},Ie=o=>o.filter(({kode:t})=>t!==fe.NORGE).map(({kode:t,navn:n})=>e.jsx("option",{value:t,children:n},t)),K=(o,t,n,a)=>()=>{const s=b(o,`${t}.${n}.periodeFom`),r=b(o,`${t}.${n}.periodeTom`);return!r||!s?null:a?V(r)(s):R(s)(r)},y=({erTidligereOpphold:o,mottattDato:t,readOnly:n,countryCodes:a})=>{const s=w(),r=o?"tidligereOppholdUtenlands":"fremtidigeOppholdUtenlands",{control:p,getValues:l,trigger:O,formState:{isSubmitted:v}}=z(),{fields:k,remove:G,append:J}=Z({control:p,name:r}),Q=H.useMemo(()=>Ie(a),[a]);return e.jsx(ee,{fields:k,titleText:s.formatMessage({id:"Registrering.RegistreringOpphold.AngiOpphold"}),bodyText:s.formatMessage({id:"Registrering.RegistreringOpphold.Add"}),emptyPeriodTemplate:Fe,createAddButtonInsteadOfImageLink:!0,readOnly:n,remove:G,append:J,children:(X,i,N)=>e.jsxs(he.Fragment,{children:[i>0&&e.jsxs(e.Fragment,{children:[e.jsx(re,{}),e.jsx(d,{sixteenPx:!0})]}),e.jsx(oe,{name:`${r}.${i}.land`,label:s.formatMessage({id:"Registrering.RegistreringOpphold.Country"}),selectValues:Q,className:Y.selectBredde,readOnly:n,validate:[m]}),e.jsx(d,{sixteenPx:!0}),e.jsx(te,{children:e.jsxs(se,{className:ke({datesRowWithRemoveButton:i>0}),children:[e.jsx(F,{children:e.jsx(_,{name:`${r}.${i}.periodeFom`,label:s.formatMessage({id:"Registrering.RegistreringOpphold.periodeFom"}),isReadOnly:n,validate:[m,U,K(l,r,i,!0),()=>{const c=b(l,`${r}.${i}.periodeFom`);return o?V(S().format(P))(c):t?R(t)(c):void 0},T(l,r)],onChange:()=>v?O():void 0})}),e.jsx(F,{children:e.jsx(_,{name:`${r}.${i}.periodeTom`,label:s.formatMessage({id:"Registrering.RegistreringOpphold.periodeTom"}),isReadOnly:n,validate:[m,U,K(l,r,i,!1),()=>{const c=b(l,`${r}.${i}.periodeTom`);return o?V(S().format(P))(c):t?R(t)(c):void 0},T(l,r)],onChange:()=>v?O():void 0})}),N&&e.jsx(F,{children:N()})]})}),e.jsx(d,{sixteenPx:!0})]},X.id)})};try{y.displayName="UtenlandsOppholdField",y.__docgenInfo={description:`UtenlandsOppholdField

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
Komponenten lar saksbehandler legge inn informasjon om ett eller flere utenlandsopphold fra søknaden. Komponenten eksponerer valideringsregler
som lar seg tilpasse om opphold skal være fram eller tilbake i tid.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,displayName:"UtenlandsOppholdField",props:{erTidligereOpphold:{defaultValue:null,description:"",name:"erTidligereOpphold",required:!0,type:{name:"boolean"}},mottattDato:{defaultValue:null,description:"",name:"mottattDato",required:!1,type:{name:"string"}},countryCodes:{defaultValue:null,description:"",name:"countryCodes",required:!0,type:{name:"Readonly<{ kode: string; navn: string; kodeverk: string; }>[]"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}}}}}catch{}const u=({readOnly:o=!0,alleKodeverk:t,mottattDato:n,erAdopsjon:a})=>{const{formatMessage:s}=w(),r=H.useMemo(()=>t[Oe.LANDKODER].slice().sort((v,k)=>v.navn.localeCompare(k.navn)),[t]),{watch:p}=z(),l=p("harTidligereOppholdUtenlands")||!1,O=p("harFremtidigeOppholdUtenlands")||!1;return e.jsxs(ne,{children:[e.jsx(ae,{size:"small",children:e.jsx(x,{id:"Registrering.Opphold"})}),e.jsx(d,{sixteenPx:!0}),e.jsx(I,{name:"oppholdINorge",label:e.jsx(x,{id:a?"Registrering.OppholdVedAdopsjon":"Registrering.OppholdVedFodsel"}),validate:[m],isReadOnly:o,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:s({id:"Registrering.Opphold.Yes"}),value:"true"},{label:s({id:"Registrering.Opphold.No"}),value:"false"}]}),e.jsx(d,{sixteenPx:!0}),e.jsx(I,{name:"harTidligereOppholdUtenlands",label:e.jsx(x,{id:"Registrering.OppholdSisteTolv"}),validate:[m],isReadOnly:o,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:s({id:"Registrering.Opphold.Yes"}),value:"false"},{label:s({id:"Registrering.Opphold.No"}),value:"true"}]}),l?e.jsxs(e.Fragment,{children:[e.jsx(d,{eightPx:!0}),e.jsx(A,{alignOffset:64,children:e.jsx(y,{erTidligereOpphold:!0,mottattDato:n,countryCodes:r,readOnly:o})})]}):null,e.jsx(d,{sixteenPx:!0}),e.jsx(I,{name:"harFremtidigeOppholdUtenlands",label:e.jsx(x,{id:"Registrering.OppholdNesteTolv"}),validate:[m],isReadOnly:o,isTrueOrFalseSelection:!0,isHorizontal:!0,radios:[{label:s({id:"Registrering.Opphold.Yes"}),value:"false"},{label:s({id:"Registrering.Opphold.No"}),value:"true"}]}),O?e.jsxs(e.Fragment,{children:[e.jsx(d,{eightPx:!0}),e.jsx(A,{alignOffset:64,children:e.jsx(y,{erTidligereOpphold:!1,mottattDato:n,countryCodes:r,readOnly:o})})]}):null]})};u.buildInitialValues=()=>({tidligereOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}],fremtidigeOppholdUtenlands:[{periodeFom:void 0,periodeTom:void 0}]});u.transformValues=o=>({...o,fremtidigeOppholdUtenlands:o.harFremtidigeOppholdUtenlands?o.fremtidigeOppholdUtenlands:void 0,tidligereOppholdUtenlands:o.harTidligereOppholdUtenlands?o.tidligereOppholdUtenlands:void 0});try{u.displayName="OppholdINorgePanel",u.__docgenInfo={description:`OppholdINorgePanel

Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder engangsstønad.
Inneholder delen av skjemaet som omhandler informasjon om utenlandsopphold.
Komponenten har inputfelter og må derfor rendres som etterkommer av form-komponent.`,displayName:"OppholdINorgePanel",props:{erAdopsjon:{defaultValue:null,description:"",name:"erAdopsjon",required:!0,type:{name:"boolean"}},readOnly:{defaultValue:{value:"true"},description:"",name:"readOnly",required:!1,type:{name:"boolean"}},alleKodeverk:{defaultValue:null,description:"",name:"alleKodeverk",required:!0,type:{name:"AlleKodeverk"}},mottattDato:{defaultValue:null,description:"",name:"mottattDato",required:!1,type:{name:"string"}}}}}catch{}const Ve=le(de),f=({readOnly:o,erAdopsjon:t,alleKodeverk:n,mottattDato:a})=>e.jsx(ie,{value:Ve,children:e.jsx(u,{readOnly:o,erAdopsjon:t,alleKodeverk:n,mottattDato:a})});f.buildInitialValues=u.buildInitialValues;f.transformValues=u.transformValues;const j=f;try{f.displayName="OppholdINorgePapirsoknadIndex",f.__docgenInfo={description:"",displayName:"OppholdINorgePapirsoknadIndex",props:{readOnly:{defaultValue:null,description:"",name:"readOnly",required:!0,type:{name:"boolean"}},erAdopsjon:{defaultValue:null,description:"",name:"erAdopsjon",required:!0,type:{name:"boolean"}},alleKodeverk:{defaultValue:null,description:"",name:"alleKodeverk",required:!0,type:{name:"AlleKodeverk"}},mottattDato:{defaultValue:null,description:"",name:"mottattDato",required:!1,type:{name:"string"}}}}}catch{}const Ke={title:"papirsoknad/ui-komponenter/opphold-i-norge",component:j},W=({erAdopsjon:o,submitCallback:t})=>{const n=pe({defaultValues:j.buildInitialValues()});return e.jsxs(ue,{formMethods:n,onSubmit:a=>t(j.transformValues(a)),children:[e.jsx(j,{readOnly:!1,erAdopsjon:o,alleKodeverk:ce,mottattDato:"2022-05-30"}),e.jsx(d,{fourtyPx:!0}),e.jsx(me,{size:"small",variant:"primary",children:"Lagreknapp (Kun for test)"})]})},g=W.bind({});g.args={erAdopsjon:!1,submitCallback:D("button-click")};const h=W.bind({});h.args={erAdopsjon:!0,submitCallback:D("button-click")};var M,C,$;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`({
  erAdopsjon,
  submitCallback
}) => {
  const formMethods = useForm({
    defaultValues: OppholdINorgePapirsoknadIndex.buildInitialValues()
  });
  return <Form formMethods={formMethods} onSubmit={(values: FormValues) => submitCallback(OppholdINorgePapirsoknadIndex.transformValues(values))}>
      <OppholdINorgePapirsoknadIndex readOnly={false} erAdopsjon={erAdopsjon} alleKodeverk={(alleKodeverk as any)} mottattDato="2022-05-30" />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...($=(C=g.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var B,q,E;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`({
  erAdopsjon,
  submitCallback
}) => {
  const formMethods = useForm({
    defaultValues: OppholdINorgePapirsoknadIndex.buildInitialValues()
  });
  return <Form formMethods={formMethods} onSubmit={(values: FormValues) => submitCallback(OppholdINorgePapirsoknadIndex.transformValues(values))}>
      <OppholdINorgePapirsoknadIndex readOnly={false} erAdopsjon={erAdopsjon} alleKodeverk={(alleKodeverk as any)} mottattDato="2022-05-30" />
      <VerticalSpacer fourtyPx />
      <Button size="small" variant="primary">
        Lagreknapp (Kun for test)
      </Button>
    </Form>;
}`,...(E=(q=h.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};const Me=["ForFodsel","ForAdopsjon"];export{h as ForAdopsjon,g as ForFodsel,Me as __namedExportsOrder,Ke as default};
//# sourceMappingURL=OppholdINorgePapirsoknadIndex.stories-6b44ca1a.js.map
