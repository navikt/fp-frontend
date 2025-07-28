import{r as m,u as I,_ as b,s as N,j as e,t as M,o as T,M as w,P as O,a as F}from"./iframe-MONFA2mm.js";import{u as V,N as D,V as S,O as A,D as z}from"./index.es-ubqEsP7C.js";import{M as v,H as C,B as f,m as $}from"./nb_NO-CNUnp6Gy.js";import"./index-QZ7y05j7.js";function W(n,a){var l=n.values,s=b(n,["values"]),d=a.values,i=b(a,["values"]);return N(d,l)&&N(s,i)}function k(n){var a=I(),l=a.formatMessage,s=a.textComponent,d=s===void 0?m.Fragment:s,i=n.id,h=n.description,t=n.defaultMessage,r=n.values,o=n.children,c=n.tagName,u=c===void 0?d:c,y=n.ignoreTag,q={id:i,description:h,defaultMessage:t},g=l(q,r,{ignoreTag:y});return typeof o=="function"?o(Array.isArray(g)?g:[g]):u?m.createElement(u,null,g):m.createElement(m.Fragment,null,g)}k.displayName="FormattedMessage";var j=m.memo(k,W);j.displayName="MemoizedFormattedMessage";const H="_modal_tyvxs_1",L="_selectWidth_tyvxs_6",E={modal:H,selectWidth:L},K=T(400),B=({handleSubmit:n,lukkModal:a,behandlendeEnheter:l,gjeldendeBehandlendeEnhetId:s,gjeldendeBehandlendeEnhetNavn:d})=>{const i=l.map((u,y)=>e.jsx("option",{value:`${y}`,children:`${u.enhetId} ${u.enhetNavn}`},u.enhetId)),h=[e.jsx("option",{disabled:!0,children:`${s} ${d}`},s)].concat(i),t=I(),r=V(),o=r.watch("nyEnhet"),c=r.watch("begrunnelse");return e.jsx(D,{formMethods:r,onSubmit:n,children:e.jsxs(v,{className:E.modal,open:!0,"aria-label":t.formatMessage({id:"EndreBehandlendeEnhetModal.ModalDescription"}),onClose:a,children:[e.jsx(v.Header,{children:e.jsx(C,{size:"small",children:e.jsx(j,{id:"EndreBehandlendeEnhetModal.EndreEnhet"})})}),e.jsx(v.Body,{children:e.jsxs(S,{gap:"4",children:[e.jsx(A,{name:"nyEnhet",control:r.control,label:t.formatMessage({id:"EndreBehandlendeEnhetModal.NyEnhetField"}),validate:[M],selectValues:h,className:E.selectWidth}),e.jsx(z,{name:"begrunnelse",control:r.control,label:t.formatMessage({id:"EndreBehandlendeEnhetModal.BegrunnelseField"}),validate:[M,K,w],maxLength:400})]})}),e.jsxs(v.Footer,{children:[e.jsx(f,{size:"small",variant:"primary",className:E.button,disabled:!(o&&c),children:t.formatMessage({id:"EndreBehandlendeEnhetModal.Ok"})}),e.jsx(f,{size:"small",variant:"secondary",onClick:a,type:"button",children:t.formatMessage({id:"EndreBehandlendeEnhetModal.Avbryt"})})]})]})})};B.__docgenInfo={description:`EndreBehandlendeEnhetModal

Denne modalen vises når saksbehandler valger 'Bytt behandlende enhet'.
Ved å angi ny enhet og begrunnelse og trykke på 'OK' blir behandlende enhet endret.`,methods:[],displayName:"EndreBehandlendeEnhetModal",props:{lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},behandlendeEnheter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  enhetId: string;
  enhetNavn: string;
}`,signature:{properties:[{key:"enhetId",value:{name:"string",required:!0}},{key:"enhetNavn",value:{name:"string",required:!0}}]}}],raw:`{
  enhetId: string;
  enhetNavn: string;
}[]`},description:""},gjeldendeBehandlendeEnhetId:{required:!0,tsType:{name:"string"},description:""},gjeldendeBehandlendeEnhetNavn:{required:!0,tsType:{name:"string"},description:""},handleSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:"(formValues: FormValues) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  nyEnhet: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"nyEnhet",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"formValues"}],return:{name:"void"}}},description:""}}};const P=F($),_=({behandlendeEnhetId:n,behandlendeEnhetNavn:a,nyBehandlendeEnhet:l,behandlendeEnheter:s,lukkModal:d})=>{const i=s.filter(t=>t.enhetId!==n),h=t=>{const r=i[parseInt(t.nyEnhet,10)],o={enhetNavn:r.enhetNavn,enhetId:r.enhetId,begrunnelse:t.begrunnelse};l(o),d()};return e.jsx(O,{value:P,children:e.jsx(B,{lukkModal:d,behandlendeEnheter:i,gjeldendeBehandlendeEnhetId:n,gjeldendeBehandlendeEnhetNavn:a,handleSubmit:h})})};_.__docgenInfo={description:"",methods:[],displayName:"MenyEndreBehandlendeEnhetIndex",props:{behandlendeEnhetId:{required:!0,tsType:{name:"string"},description:""},behandlendeEnhetNavn:{required:!0,tsType:{name:"string"},description:""},nyBehandlendeEnhet:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { enhetNavn: string; enhetId: string; begrunnelse: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ enhetNavn: string; enhetId: string; begrunnelse: string }",signature:{properties:[{key:"enhetNavn",value:{name:"string",required:!0}},{key:"enhetId",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},behandlendeEnheter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  enhetId: string;
  enhetNavn: string;
}`,signature:{properties:[{key:"enhetId",value:{name:"string",required:!0}},{key:"enhetNavn",value:{name:"string",required:!0}}]}}],raw:`{
  enhetId: string;
  enhetNavn: string;
}[]`},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:x}=__STORYBOOK_MODULE_ACTIONS__,J={title:"sak/sak-meny-endre-enhet",component:_,args:{nyBehandlendeEnhet:x("button-click"),lukkModal:x("button-click")}},p={args:{behandlendeEnhetId:"4292",behandlendeEnhetNavn:"Nav klageinstans Midt-Norge",behandlendeEnheter:[{enhetId:"4292",enhetNavn:"Nav klageinstans Midt-Norge"},{enhetId:"1000",enhetNavn:"Nav Vikafossen"}]}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    behandlendeEnhetId: '4292',
    behandlendeEnhetNavn: 'Nav klageinstans Midt-Norge',
    behandlendeEnheter: [{
      enhetId: '4292',
      enhetNavn: 'Nav klageinstans Midt-Norge'
    }, {
      enhetId: '1000',
      enhetNavn: 'Nav Vikafossen'
    }]
  }
}`,...p.parameters?.docs?.source}}};const Q=["Default"];export{p as Default,Q as __namedExportsOrder,J as default};
