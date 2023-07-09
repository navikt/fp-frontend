import{j as e}from"./jsx-runtime-5926aa06.js";import{b as c,E as m,o as u,A as n,Z as h,e as S,a as b,g as d}from"./nb_NO-34c6c3ba.js";import{a as g}from"./advarsel-27b41fd8.js";import{M as o}from"./Provider-26ee741a.js";const _="_modal_te3ni_1",p="_submitButton_te3ni_5",k="_cancelButton_te3ni_10",j="_divider_te3ni_14",v="_image_te3ni_25",x="_text_te3ni_31",a={modal:_,submitButton:p,cancelButton:k,divider:j,image:v,text:x},l=({valgtSaksbehandler:s,closeSletteModal:r,fjernSaksbehandler:i})=>{const t=c();return e.jsx(o,{className:a.modal,closeButton:!1,open:!0,"aria-label":t.formatMessage({id:"SletteSaksbehandlerModal.SletteModal"}),onClose:r,children:e.jsx(o.Content,{children:e.jsx(m,{children:e.jsxs(u,{children:[e.jsxs(n,{children:[e.jsx(h,{className:a.image,alt:t.formatMessage({id:"SletteSaksbehandlerModal.SletteModal"}),src:g}),e.jsx("div",{className:a.divider})]}),e.jsx(n,{className:a.text,children:e.jsx(S,{size:"small",children:e.jsx(b,{id:"SletteSaksbehandlerModal.SletteSaksbehandler",values:{saksbehandlerNavn:s.navn}})})}),e.jsx(n,{children:e.jsx(d,{className:a.submitButton,size:"small",variant:"primary",onClick:()=>i(s),autoFocus:!0,type:"button",children:t.formatMessage({id:"SletteSaksbehandlerModal.Ja"})})}),e.jsx(n,{children:e.jsx(d,{className:a.cancelButton,size:"small",variant:"secondary",onClick:r,type:"button",children:t.formatMessage({id:"SletteSaksbehandlerModal.Nei"})})})]})})})})},N=l;try{l.displayName="SletteSaksbehandlerModal",l.__docgenInfo={description:`SletteSaksbehandlerModal

Presentasjonskomponent. Modal som lar en avdelingsleder fjerne tilgjengelige saksbehandlere.`,displayName:"SletteSaksbehandlerModal",props:{valgtSaksbehandler:{defaultValue:null,description:"",name:"valgtSaksbehandler",required:!0,type:{name:"Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>"}},closeSletteModal:{defaultValue:null,description:"",name:"closeSletteModal",required:!0,type:{name:"() => void"}},fjernSaksbehandler:{defaultValue:null,description:"",name:"fjernSaksbehandler",required:!0,type:{name:"(saksbehandler: Readonly<{ brukerIdent: string; navn: string; avdelingsnavn: string[]; }>) => void"}}}}}catch{}export{N as S};
//# sourceMappingURL=SletteSaksbehandlerModal-b33389a0.js.map
