import{j as e}from"./dayjs.min-DKYhEbg2.js";import{r as v}from"./index-BBkUAzwr.js";import{a as m,M as l,W as c,H as p,L as n,b as A,d as x,Z as u,B as g}from"./nb_NO-DY6WQH50.js";import{S as j}from"./ExclamationmarkTriangleFill-D_H37nIb.js";const k="_image_6qduj_1",M="_modal_6qduj_8",_="_text_6qduj_12",h="_okButton_6qduj_16",s={image:k,modal:M,text:_,okButton:h},d=({lukkErReservertModalOgOpneOppgave:i,oppgave:t,oppgaveStatus:a})=>{const r=m(),o=v.useCallback(()=>i(t),[t.id]);return e.jsx(l,{className:s.modal,open:!0,"aria-label":r.formatMessage({id:"OppgaveErReservertAvAnnenModal.ReservertAvEnkel"}),onClose:o,children:e.jsx(l.Body,{children:e.jsx(c,{children:e.jsxs(p,{children:[e.jsx(n,{children:e.jsx(j,{className:s.image,title:r.formatMessage({id:"OppgaveErReservertAvAnnenModal.ReservertAvEnkel"})})}),e.jsx(n,{className:s.text,children:e.jsx(A,{size:"small",children:e.jsx(x,{id:"OppgaveErReservertAvAnnenModal.ReservertAv",values:{saksbehandlernavn:a.reservertAvNavn,saksbehandlerid:a.reservertAvUid,...u(a.reservertTilTidspunkt)}})})}),e.jsx(n,{children:e.jsx(g,{className:s.okButton,size:"small",variant:"primary",onClick:o,autoFocus:!0,type:"button",children:r.formatMessage({id:"OppgaveErReservertAvAnnenModal.Ok"})})})]})})})})},f=d;d.__docgenInfo={description:`OppgaveErReservertAvAnnenModal

Modal som vises når en åpner oppgave som er reservert av en annen saksbehandler`,methods:[],displayName:"OppgaveErReservertAvAnnenModal"};export{f as O};
