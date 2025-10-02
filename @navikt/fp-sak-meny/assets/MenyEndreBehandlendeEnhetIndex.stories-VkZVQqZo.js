import{j as e,u as I,t as p,o as k,N as x,P as j,r as f}from"./iframe-Dpt-svtW.js";import{u as B,C as q,M as _,V as w,w as T,O}from"./index.es-Foozn_tf.js";import{M as o,H as V,B as v,m as S}from"./nb_NO-9EXIRfwQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BquFJzOe.js";const F="_modal_tyvxs_1",C="_selectWidth_tyvxs_6",c={modal:F,selectWidth:C},D=k(400),E=({handleSubmit:r,lukkModal:a,behandlendeEnheter:h,gjeldendeBehandlendeEnhetId:s,gjeldendeBehandlendeEnhetNavn:d})=>{const i=h.map((m,M)=>e.jsx("option",{value:`${M}`,children:`${m.enhetId} ${m.enhetNavn}`},m.enhetId)),u=[e.jsx("option",{disabled:!0,children:`${s} ${d}`},s)].concat(i),n=I(),t=B(),g=t.watch("nyEnhet"),N=t.watch("begrunnelse");return e.jsx(q,{formMethods:t,onSubmit:r,children:e.jsxs(o,{className:c.modal,open:!0,"aria-label":n.formatMessage({id:"EndreBehandlendeEnhetModal.ModalDescription"}),onClose:a,children:[e.jsx(o.Header,{children:e.jsx(V,{size:"small",level:"2",children:e.jsx(_,{id:"EndreBehandlendeEnhetModal.EndreEnhet"})})}),e.jsx(o.Body,{children:e.jsxs(w,{gap:"space-16",children:[e.jsx(T,{name:"nyEnhet",control:t.control,label:n.formatMessage({id:"EndreBehandlendeEnhetModal.NyEnhetField"}),validate:[p],selectValues:u,className:c.selectWidth}),e.jsx(O,{name:"begrunnelse",control:t.control,label:n.formatMessage({id:"EndreBehandlendeEnhetModal.BegrunnelseField"}),validate:[p,D,x],maxLength:400})]})}),e.jsxs(o.Footer,{children:[e.jsx(v,{size:"small",variant:"primary",className:c.button,disabled:!(g&&N),children:n.formatMessage({id:"EndreBehandlendeEnhetModal.Ok"})}),e.jsx(v,{size:"small",variant:"secondary",onClick:a,type:"button",children:n.formatMessage({id:"EndreBehandlendeEnhetModal.Avbryt"})})]})]})})};E.__docgenInfo={description:`EndreBehandlendeEnhetModal

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
}`,signature:{properties:[{key:"nyEnhet",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"formValues"}],return:{name:"void"}}},description:""}}};const $=f(S),b=({behandlendeEnhetId:r,behandlendeEnhetNavn:a,nyBehandlendeEnhet:h,behandlendeEnheter:s,lukkModal:d})=>{const i=s.filter(n=>n.enhetId!==r),u=n=>{const t=i[Number.parseInt(n.nyEnhet,10)],g={enhetNavn:t.enhetNavn,enhetId:t.enhetId,begrunnelse:n.begrunnelse};h(g),d()};return e.jsx(j,{value:$,children:e.jsx(E,{lukkModal:d,behandlendeEnheter:i,gjeldendeBehandlendeEnhetId:r,gjeldendeBehandlendeEnhetNavn:a,handleSubmit:u})})};b.__docgenInfo={description:"",methods:[],displayName:"MenyEndreBehandlendeEnhetIndex",props:{behandlendeEnhetId:{required:!0,tsType:{name:"string"},description:""},behandlendeEnhetNavn:{required:!0,tsType:{name:"string"},description:""},nyBehandlendeEnhet:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { enhetNavn: string; enhetId: string; begrunnelse: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ enhetNavn: string; enhetId: string; begrunnelse: string }",signature:{properties:[{key:"enhetNavn",value:{name:"string",required:!0}},{key:"enhetId",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},behandlendeEnheter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  enhetId: string;
  enhetNavn: string;
}`,signature:{properties:[{key:"enhetId",value:{name:"string",required:!0}},{key:"enhetNavn",value:{name:"string",required:!0}}]}}],raw:`{
  enhetId: string;
  enhetNavn: string;
}[]`},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{action:y}=__STORYBOOK_MODULE_ACTIONS__,K={title:"sak/sak-meny-endre-enhet",component:b,args:{nyBehandlendeEnhet:y("button-click"),lukkModal:y("button-click")}},l={args:{behandlendeEnhetId:"4292",behandlendeEnhetNavn:"Nav klageinstans Midt-Norge",behandlendeEnheter:[{enhetId:"4292",enhetNavn:"Nav klageinstans Midt-Norge"},{enhetId:"1000",enhetNavn:"Nav Vikafossen"}]}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const P=["Default"];export{l as Default,P as __namedExportsOrder,K as default};
