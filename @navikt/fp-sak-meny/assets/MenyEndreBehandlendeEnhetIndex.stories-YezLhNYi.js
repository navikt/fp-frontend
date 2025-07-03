import{r as m,u as B,_ as N,s as b,j as e,t as M,o as O,N as V,P as D,a as S}from"./iframe-Dc0Vtr-I.js";import{u as A,N as z,V as C,Y as $,D as W}from"./index.es-D52hlL1k.js";import{M as v,H,B as f,m as L}from"./nb_NO-CWePICw7.js";import"./index-B_G0cgD1.js";function Y(n,a){var l=n.values,s=N(n,["values"]),d=a.values,i=N(a,["values"]);return b(d,l)&&b(s,i)}function _(n){var a=B(),l=a.formatMessage,s=a.textComponent,d=s===void 0?m.Fragment:s,i=n.id,h=n.description,t=n.defaultMessage,r=n.values,o=n.children,c=n.tagName,u=c===void 0?d:c,y=n.ignoreTag,F={id:i,description:h,defaultMessage:t},g=l(F,r,{ignoreTag:y});return typeof o=="function"?o(Array.isArray(g)?g:[g]):u?m.createElement(u,null,g):m.createElement(m.Fragment,null,g)}_.displayName="FormattedMessage";var q=m.memo(_,Y);q.displayName="MemoizedFormattedMessage";const K="_modal_tyvxs_1",P="_selectWidth_tyvxs_6",E={modal:K,selectWidth:P},R=O(400),T=({handleSubmit:n,lukkModal:a,behandlendeEnheter:l,gjeldendeBehandlendeEnhetId:s,gjeldendeBehandlendeEnhetNavn:d})=>{const i=l.map((u,y)=>e.jsx("option",{value:`${y}`,children:`${u.enhetId} ${u.enhetNavn}`},u.enhetId)),h=[e.jsx("option",{disabled:!0,children:`${s} ${d}`},s)].concat(i),t=B(),r=A(),o=r.watch("nyEnhet"),c=r.watch("begrunnelse");return e.jsx(z,{formMethods:r,onSubmit:n,children:e.jsxs(v,{className:E.modal,open:!0,"aria-label":t.formatMessage({id:"EndreBehandlendeEnhetModal.ModalDescription"}),onClose:a,children:[e.jsx(v.Header,{children:e.jsx(H,{size:"small",children:e.jsx(q,{id:"EndreBehandlendeEnhetModal.EndreEnhet"})})}),e.jsx(v.Body,{children:e.jsxs(C,{gap:"4",children:[e.jsx($,{name:"nyEnhet",control:r.control,label:t.formatMessage({id:"EndreBehandlendeEnhetModal.NyEnhetField"}),validate:[M],selectValues:h,className:E.selectWidth}),e.jsx(W,{name:"begrunnelse",control:r.control,label:t.formatMessage({id:"EndreBehandlendeEnhetModal.BegrunnelseField"}),validate:[M,R,V],maxLength:400})]})}),e.jsxs(v.Footer,{children:[e.jsx(f,{size:"small",variant:"primary",className:E.button,disabled:!(o&&c),children:t.formatMessage({id:"EndreBehandlendeEnhetModal.Ok"})}),e.jsx(f,{size:"small",variant:"secondary",onClick:a,type:"button",children:t.formatMessage({id:"EndreBehandlendeEnhetModal.Avbryt"})})]})]})})};T.__docgenInfo={description:`EndreBehandlendeEnhetModal

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
}`,signature:{properties:[{key:"nyEnhet",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"formValues"}],return:{name:"void"}}},description:""}}};const U=S(L),w=({behandlendeEnhetId:n,behandlendeEnhetNavn:a,nyBehandlendeEnhet:l,behandlendeEnheter:s,lukkModal:d})=>{const i=s.filter(t=>t.enhetId!==n),h=t=>{const r=i[parseInt(t.nyEnhet,10)],o={enhetNavn:r.enhetNavn,enhetId:r.enhetId,begrunnelse:t.begrunnelse};l(o),d()};return e.jsx(D,{value:U,children:e.jsx(T,{lukkModal:d,behandlendeEnheter:i,gjeldendeBehandlendeEnhetId:n,gjeldendeBehandlendeEnhetNavn:a,handleSubmit:h})})};w.__docgenInfo={description:"",methods:[],displayName:"MenyEndreBehandlendeEnhetIndex",props:{behandlendeEnhetId:{required:!0,tsType:{name:"string"},description:""},behandlendeEnhetNavn:{required:!0,tsType:{name:"string"},description:""},nyBehandlendeEnhet:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { enhetNavn: string; enhetId: string; begrunnelse: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ enhetNavn: string; enhetId: string; begrunnelse: string }",signature:{properties:[{key:"enhetNavn",value:{name:"string",required:!0}},{key:"enhetId",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},behandlendeEnheter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  enhetId: string;
  enhetNavn: string;
}`,signature:{properties:[{key:"enhetId",value:{name:"string",required:!0}},{key:"enhetNavn",value:{name:"string",required:!0}}]}}],raw:`{
  enhetId: string;
  enhetNavn: string;
}[]`},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"sak/sak-meny-endre-enhet",component:w,args:{nyBehandlendeEnhet:x("button-click"),lukkModal:x("button-click")}},p={args:{behandlendeEnhetId:"4292",behandlendeEnhetNavn:"Nav klageinstans Midt-Norge",behandlendeEnheter:[{enhetId:"4292",enhetNavn:"Nav klageinstans Midt-Norge"},{enhetId:"1000",enhetNavn:"Nav Vikafossen"}]}};var I,k,j;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(k=p.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const ee=["Default"];export{p as Default,ee as __namedExportsOrder,Z as default};
