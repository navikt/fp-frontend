import{r as u,u as _,_ as b,s as N,j as e,P as F,a as O}from"./iframe-C6WYWtGi.js";import{u as D,N as S,V as A,Y as C,e as M,D as z,a as $,y as W}from"./index.es-DBDikYqu.js";import{M as v,H,B as f,m as L}from"./nb_NO-DPDsd7iZ.js";import"./index-CLxCgPoh.js";function Y(n,t){var l=n.values,a=b(n,["values"]),d=t.values,i=b(t,["values"]);return N(d,l)&&N(a,i)}function q(n){var t=_(),l=t.formatMessage,a=t.textComponent,d=a===void 0?u.Fragment:a,i=n.id,h=n.description,s=n.defaultMessage,r=n.values,o=n.children,g=n.tagName,m=g===void 0?d:g,y=n.ignoreTag,V={id:i,description:h,defaultMessage:s},c=l(V,r,{ignoreTag:y});return typeof o=="function"?o(Array.isArray(c)?c:[c]):m?u.createElement(m,null,c):u.createElement(u.Fragment,null,c)}q.displayName="FormattedMessage";var B=u.memo(q,Y);B.displayName="MemoizedFormattedMessage";const K="_modal_tyvxs_1",P="_selectWidth_tyvxs_6",E={modal:K,selectWidth:P},R=$(400),T=({handleSubmit:n,lukkModal:t,behandlendeEnheter:l,gjeldendeBehandlendeEnhetId:a,gjeldendeBehandlendeEnhetNavn:d})=>{const i=l.map((m,y)=>e.jsx("option",{value:`${y}`,children:`${m.enhetId} ${m.enhetNavn}`},m.enhetId)),h=[e.jsx("option",{disabled:!0,children:`${a} ${d}`},a)].concat(i),s=_(),r=D(),o=r.watch("nyEnhet"),g=r.watch("begrunnelse");return e.jsx(S,{formMethods:r,onSubmit:n,children:e.jsxs(v,{className:E.modal,open:!0,"aria-label":s.formatMessage({id:"EndreBehandlendeEnhetModal.ModalDescription"}),onClose:t,children:[e.jsx(v.Header,{children:e.jsx(H,{size:"small",children:e.jsx(B,{id:"EndreBehandlendeEnhetModal.EndreEnhet"})})}),e.jsx(v.Body,{children:e.jsxs(A,{gap:"4",children:[e.jsx(C,{name:"nyEnhet",label:s.formatMessage({id:"EndreBehandlendeEnhetModal.NyEnhetField"}),validate:[M],selectValues:h,className:E.selectWidth}),e.jsx(z,{name:"begrunnelse",label:s.formatMessage({id:"EndreBehandlendeEnhetModal.BegrunnelseField"}),validate:[M,R,W],maxLength:400})]})}),e.jsxs(v.Footer,{children:[e.jsx(f,{size:"small",variant:"primary",className:E.button,disabled:!(o&&g),children:s.formatMessage({id:"EndreBehandlendeEnhetModal.Ok"})}),e.jsx(f,{size:"small",variant:"secondary",onClick:t,type:"button",children:s.formatMessage({id:"EndreBehandlendeEnhetModal.Avbryt"})})]})]})})};T.__docgenInfo={description:`EndreBehandlendeEnhetModal

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
}`,signature:{properties:[{key:"nyEnhet",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"formValues"}],return:{name:"void"}}},description:""}}};const U=O(L),w=({behandlingVersjon:n,behandlendeEnhetId:t,behandlendeEnhetNavn:l,nyBehandlendeEnhet:a,behandlendeEnheter:d,lukkModal:i})=>{const h=u.useMemo(()=>d.filter(r=>r.enhetId!==t),[d]),s=u.useCallback(r=>{const o=h[parseInt(r.nyEnhet,10)],g={enhetNavn:o.enhetNavn,enhetId:o.enhetId,begrunnelse:r.begrunnelse};a(g),i()},[n,a]);return e.jsx(F,{value:U,children:e.jsx(T,{lukkModal:i,behandlendeEnheter:h,gjeldendeBehandlendeEnhetId:t,gjeldendeBehandlendeEnhetNavn:l,handleSubmit:s})})};w.__docgenInfo={description:"",methods:[],displayName:"MenyEndreBehandlendeEnhetIndex",props:{behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},behandlendeEnhetId:{required:!0,tsType:{name:"string"},description:""},behandlendeEnhetNavn:{required:!0,tsType:{name:"string"},description:""},nyBehandlendeEnhet:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { enhetNavn: string; enhetId: string; begrunnelse: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ enhetNavn: string; enhetId: string; begrunnelse: string }",signature:{properties:[{key:"enhetNavn",value:{name:"string",required:!0}},{key:"enhetId",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},behandlendeEnheter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  enhetId: string;
  enhetNavn: string;
}`,signature:{properties:[{key:"enhetId",value:{name:"string",required:!0}},{key:"enhetNavn",value:{name:"string",required:!0}}]}}],raw:`{
  enhetId: string;
  enhetNavn: string;
}[]`},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"sak/sak-meny-endre-enhet",component:w,args:{nyBehandlendeEnhet:x("button-click"),lukkModal:x("button-click")}},p={args:{behandlingVersjon:2,behandlendeEnhetId:"4292",behandlendeEnhetNavn:"Nav klageinstans Midt-Norge",behandlendeEnheter:[{enhetId:"4292",enhetNavn:"Nav klageinstans Midt-Norge"},{enhetId:"1000",enhetNavn:"Nav Vikafossen"}]}};var j,k,I;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    behandlingVersjon: 2,
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
}`,...(I=(k=p.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const ee=["Default"];export{p as Default,ee as __namedExportsOrder,Z as default};
