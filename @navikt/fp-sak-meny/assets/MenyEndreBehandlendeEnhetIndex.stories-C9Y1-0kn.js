import{u as B,M as l,H as q,b as w,d as p,B as y,P as _,n as T,m as V,a as E}from"./nb_NO-Bmp4XxdR.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./index-Dxs5m6lS.js";import{u as F,e as $,Z as P,a as N,K as z,o as D,N as O}from"./index.es-CFiP37gZ.js";/* empty css              */import"./v4-CtRu48qb.js";import"./dayjs.min-Cke173X9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DMeSseuw.js";import"./index-DrFkskS4.js";const S="_modal_tyvxs_1",W="_selectWidth_tyvxs_6",v={modal:S,selectWidth:W},A=D(400),k=({handleSubmit:h,lukkModal:r,behandlendeEnheter:m,gjeldendeBehandlendeEnhetId:a,gjeldendeBehandlendeEnhetNavn:s})=>{const d=m.map((c,f)=>e.jsx("option",{value:`${f}`,children:`${c.enhetId} ${c.enhetNavn}`},c.enhetId)),i=[e.jsx("option",{disabled:!0,children:`${a} ${s}`},a)].concat(d),t=B(),n=F(),o=n.watch("nyEnhet"),g=n.watch("begrunnelse");return e.jsx($,{formMethods:n,onSubmit:h,children:e.jsxs(l,{className:v.modal,open:!0,"aria-label":t.formatMessage({id:"EndreBehandlendeEnhetModal.ModalDescription"}),onClose:r,children:[e.jsx(l.Header,{children:e.jsx(q,{size:"small",children:e.jsx(w,{id:"EndreBehandlendeEnhetModal.EndreEnhet"})})}),e.jsxs(l.Body,{children:[e.jsx(p,{sixteenPx:!0}),e.jsx(P,{name:"nyEnhet",label:t.formatMessage({id:"EndreBehandlendeEnhetModal.NyEnhetField"}),validate:[N],selectValues:i,className:v.selectWidth}),e.jsx(p,{sixteenPx:!0}),e.jsx(z,{name:"begrunnelse",label:t.formatMessage({id:"EndreBehandlendeEnhetModal.BegrunnelseField"}),validate:[N,A,O],maxLength:400}),e.jsx(p,{sixteenPx:!0})]}),e.jsxs(l.Footer,{children:[e.jsx(y,{size:"small",variant:"primary",className:v.button,disabled:!(o&&g),children:t.formatMessage({id:"EndreBehandlendeEnhetModal.Ok"})}),e.jsx(y,{size:"small",variant:"secondary",onClick:r,type:"button",children:t.formatMessage({id:"EndreBehandlendeEnhetModal.Avbryt"})})]})]})})};k.__docgenInfo={description:`EndreBehandlendeEnhetModal

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
}`,signature:{properties:[{key:"nyEnhet",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"formValues"}],return:{name:"void"}}},description:""}}};const C=T(V),I=({behandlingVersjon:h,behandlendeEnhetId:r,behandlendeEnhetNavn:m,nyBehandlendeEnhet:a,behandlendeEnheter:s,lukkModal:d})=>{const i=b.useMemo(()=>s.filter(n=>n.enhetId!==r),[s]),t=b.useCallback(n=>{const o=i[parseInt(n.nyEnhet,10)],g={enhetNavn:o.enhetNavn,enhetId:o.enhetId,begrunnelse:n.begrunnelse};a(g),d()},[h,a]);return e.jsx(_,{value:C,children:e.jsx(k,{lukkModal:d,behandlendeEnheter:i,gjeldendeBehandlendeEnhetId:r,gjeldendeBehandlendeEnhetNavn:m,handleSubmit:t})})};I.__docgenInfo={description:"",methods:[],displayName:"MenyEndreBehandlendeEnhetIndex",props:{behandlingVersjon:{required:!0,tsType:{name:"number"},description:""},behandlendeEnhetId:{required:!0,tsType:{name:"string"},description:""},behandlendeEnhetNavn:{required:!0,tsType:{name:"string"},description:""},nyBehandlendeEnhet:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { enhetNavn: string; enhetId: string; begrunnelse: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ enhetNavn: string; enhetId: string; begrunnelse: string }",signature:{properties:[{key:"enhetNavn",value:{name:"string",required:!0}},{key:"enhetId",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""},behandlendeEnheter:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  enhetId: string;
  enhetNavn: string;
}`,signature:{properties:[{key:"enhetId",value:{name:"string",required:!0}},{key:"enhetNavn",value:{name:"string",required:!0}}]}}],raw:`{
  enhetId: string;
  enhetNavn: string;
}[]`},description:""},lukkModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Y={title:"sak/sak-meny-endre-enhet",component:I,args:{nyBehandlendeEnhet:E("button-click"),lukkModal:E("button-click")}},u={args:{behandlingVersjon:2,behandlendeEnhetId:"4292",behandlendeEnhetNavn:"Nav klageinstans Midt-Norge",behandlendeEnheter:[{enhetId:"4292",enhetNavn:"Nav klageinstans Midt-Norge"},{enhetId:"1000",enhetNavn:"Nav Vikafossen"}]}};var x,j,M;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(M=(j=u.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};const ee=["Default"];export{u as Default,ee as __namedExportsOrder,Y as default};
