import{j as r}from"./jsx-runtime-9c4ae004.js";import{u as v,a as g,U as m,Y as f,z as i,L as j,F as p,f as h,G as b,b as y}from"./nb_NO-b2e865e9.js";import{r as n}from"./index-1b03fe98.js";import{N as c}from"./Provider-545deae6.js";var M=globalThis&&globalThis.__rest||function(t,o){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&o.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,e=Object.getOwnPropertySymbols(t);l<e.length;l++)o.indexOf(e[l])<0&&Object.prototype.propertyIsEnumerable.call(t,e[l])&&(a[e[l]]=t[e[l]]);return a};const O=n.forwardRef((t,o)=>{var{title:a,titleId:e}=t,l=M(t,["title","titleId"]);let s=v();return s=a?e||"title-"+s:void 0,n.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",focusable:!1,role:"img",ref:o,"aria-labelledby":s},l),a?n.createElement("title",{id:s},a):null,n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75Zm4.954-12.475a.813.813 0 0 0-1.24-1.05l-5.389 6.368L7.7 11.967a.812.812 0 0 0-1.15 1.15l3.25 3.25a.812.812 0 0 0 1.195-.05l5.959-7.042Z",fill:"currentColor"}))}),R=O,x="_button_1309t_1",_="_image_1309t_6",F="_modal_1309t_13",u={button:x,image:_,modal:F},d=({oppgave:t,showModal:o,closeModal:a})=>{const e=g();return r.jsx(c,{width:"small",open:o,"aria-label":e.formatMessage({id:"OppgaveReservasjonForlengetModal.Reservert"}),onClose:a,children:r.jsx(c.Body,{children:r.jsx(m,{children:r.jsxs(f,{children:[r.jsx(i,{children:r.jsx(R,{className:u.image,title:e.formatMessage({id:"OppgaveReservasjonForlengetModal.Reservert"})})}),r.jsxs(i,{children:[r.jsx(j,{size:"small",children:r.jsx(p,{id:"OppgaveReservasjonForlengetModal.Reservert"})}),r.jsx(h,{size:"small",children:r.jsx(p,{id:"OppgaveReservasjonForlengetModal.Til",values:b(t.status.reservertTilTidspunkt)})})]}),r.jsx(i,{className:u.button,children:r.jsx(y,{size:"small",variant:"secondary",onClick:a,autoFocus:!0,type:"button",children:e.formatMessage({id:"OppgaveReservasjonForlengetModal.Ok"})})})]})})})})},T=d;try{d.displayName="OppgaveReservasjonForlengetModal",d.__docgenInfo={description:"OppgaveReservasjonForlengetModal.",displayName:"OppgaveReservasjonForlengetModal",props:{oppgave:{defaultValue:null,description:"",name:"oppgave",required:!0,type:{name:"Readonly<{ id: number; status: Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>; ... 10 more ...; behandlingId: stri..."}},showModal:{defaultValue:null,description:"",name:"showModal",required:!0,type:{name:"boolean"}},closeModal:{defaultValue:null,description:"",name:"closeModal",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}}}}}catch{}export{T as O};
//# sourceMappingURL=OppgaveReservasjonForlengetModal-b3d3c070.js.map
