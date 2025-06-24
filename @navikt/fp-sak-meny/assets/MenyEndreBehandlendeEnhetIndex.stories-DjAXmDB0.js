import{r as m,u as B,_ as b,s as N,j as e,P as O,a as V}from"./iframe-DanOUW92.js";import{u as D,N as S,V as A,Y as z,e as M,D as C,a as $,y as W}from"./index.es-CkRCNesA.js";import{M as v,H,B as f,m as L}from"./nb_NO-CoC167bu.js";import"./index-BY4CTi5b.js";function Y(n,a){var l=n.values,r=b(n,["values"]),s=a.values,d=b(a,["values"]);return N(s,l)&&N(r,d)}function _(n){var a=B(),l=a.formatMessage,r=a.textComponent,s=r===void 0?m.Fragment:r,d=n.id,h=n.description,t=n.defaultMessage,i=n.values,o=n.children,c=n.tagName,u=c===void 0?s:c,y=n.ignoreTag,F={id:d,description:h,defaultMessage:t},g=l(F,i,{ignoreTag:y});return typeof o=="function"?o(Array.isArray(g)?g:[g]):u?m.createElement(u,null,g):m.createElement(m.Fragment,null,g)}_.displayName="FormattedMessage";var q=m.memo(_,Y);q.displayName="MemoizedFormattedMessage";const K="_modal_tyvxs_1",P="_selectWidth_tyvxs_6",E={modal:K,selectWidth:P},R=$(400),T=({handleSubmit:n,lukkModal:a,behandlendeEnheter:l,gjeldendeBehandlendeEnhetId:r,gjeldendeBehandlendeEnhetNavn:s})=>{const d=l.map((u,y)=>e.jsx("option",{value:`${y}`,children:`${u.enhetId} ${u.enhetNavn}`},u.enhetId)),h=[e.jsx("option",{disabled:!0,children:`${r} ${s}`},r)].concat(d),t=B(),i=D(),o=i.watch("nyEnhet"),c=i.watch("begrunnelse");return e.jsx(S,{formMethods:i,onSubmit:n,children:e.jsxs(v,{className:E.modal,open:!0,"aria-label":t.formatMessage({id:"EndreBehandlendeEnhetModal.ModalDescription"}),onClose:a,children:[e.jsx(v.Header,{children:e.jsx(H,{size:"small",children:e.jsx(q,{id:"EndreBehandlendeEnhetModal.EndreEnhet"})})}),e.jsx(v.Body,{children:e.jsxs(A,{gap:"4",children:[e.jsx(z,{name:"nyEnhet",label:t.formatMessage({id:"EndreBehandlendeEnhetModal.NyEnhetField"}),validate:[M],selectValues:h,className:E.selectWidth}),e.jsx(C,{name:"begrunnelse",label:t.formatMessage({id:"EndreBehandlendeEnhetModal.BegrunnelseField"}),validate:[M,R,W],maxLength:400})]})}),e.jsxs(v.Footer,{children:[e.jsx(f,{size:"small",variant:"primary",className:E.button,disabled:!(o&&c),children:t.formatMessage({id:"EndreBehandlendeEnhetModal.Ok"})}),e.jsx(f,{size:"small",variant:"secondary",onClick:a,type:"button",children:t.formatMessage({id:"EndreBehandlendeEnhetModal.Avbryt"})})]})]})})};T.__docgenInfo={description:`EndreBehandlendeEnhetModal

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
}`,signature:{properties:[{key:"nyEnhet",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"formValues"}],return:{name:"void"}}},description:""}}};const U=V(L),w=({behandlendeEnhetId:n,behandlendeEnhetNavn:a,nyBehandlendeEnhet:l,behandlendeEnheter:r,lukkModal:s})=>{const d=r.filter(t=>t.enhetId!==n),h=t=>{const i=d[parseInt(t.nyEnhet,10)],o={enhetNavn:i.enhetNavn,enhetId:i.enhetId,begrunnelse:t.begrunnelse};l(o),s()};return e.jsx(O,{value:U,children:e.jsx(T,{lukkModal:s,behandlendeEnheter:d,gjeldendeBehandlendeEnhetId:n,gjeldendeBehandlendeEnhetNavn:a,handleSubmit:h})})};w.__docgenInfo={description:"",methods:[],displayName:"MenyEndreBehandlendeEnhetIndex",props:{behandlendeEnhetId:{required:!0,tsType:{name:"string"},description:""},behandlendeEnhetNavn:{required:!0,tsType:{name:"string"},description:""},nyBehandlendeEnhet:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { enhetNavn: string; enhetId: string; begrunnelse: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ enhetNavn: string; enhetId: string; begrunnelse: string }",signature:{properties:[{key:"enhetNavn",value:{name:"string",required:!0}},{key:"enhetId",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},behandlendeEnheter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
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
