import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as v}from"./index-1b03fe98.js";import{a as u,U as p,Y as m,z as t,L as g,F as c,G as A,b as f}from"./nb_NO-b2e865e9.js";import{E as R}from"./ExclamationmarkTriangleFill-a9e0e6bd.js";import{N as i}from"./Provider-545deae6.js";const k="_image_6qduj_1",j="_modal_6qduj_8",x="_text_6qduj_12",_="_okButton_6qduj_16",r={image:k,modal:j,text:x,okButton:_},a=({lukkErReservertModalOgOpneOppgave:d,oppgave:o,oppgaveStatus:n})=>{const s=u(),l=v.useCallback(()=>d(o),[o.id]);return e.jsx(i,{className:r.modal,open:!0,"aria-label":s.formatMessage({id:"OppgaveErReservertAvAnnenModal.ReservertAvEnkel"}),onClose:l,children:e.jsx(i.Body,{children:e.jsx(p,{children:e.jsxs(m,{children:[e.jsx(t,{children:e.jsx(R,{className:r.image,title:s.formatMessage({id:"OppgaveErReservertAvAnnenModal.ReservertAvEnkel"})})}),e.jsx(t,{className:r.text,children:e.jsx(g,{size:"small",children:e.jsx(c,{id:"OppgaveErReservertAvAnnenModal.ReservertAv",values:{saksbehandlernavn:n.reservertAvNavn,saksbehandlerid:n.reservertAvUid,...A(n.reservertTilTidspunkt)}})})}),e.jsx(t,{children:e.jsx(f,{className:r.okButton,size:"small",variant:"primary",onClick:l,autoFocus:!0,type:"button",children:s.formatMessage({id:"OppgaveErReservertAvAnnenModal.Ok"})})})]})})})})},h=a;try{a.displayName="OppgaveErReservertAvAnnenModal",a.__docgenInfo={description:`OppgaveErReservertAvAnnenModal

Modal som vises når en åpner oppgave som er reservert av en annen saksbehandler`,displayName:"OppgaveErReservertAvAnnenModal",props:{lukkErReservertModalOgOpneOppgave:{defaultValue:null,description:"",name:"lukkErReservertModalOgOpneOppgave",required:!0,type:{name:"(oppgave: Readonly<{ id: number; status: Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>; ... 10 more ...; behandli..."}},oppgave:{defaultValue:null,description:"",name:"oppgave",required:!0,type:{name:"Readonly<{ id: number; status: Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>; ... 10 more ...; behandlingId: stri..."}},oppgaveStatus:{defaultValue:null,description:"",name:"oppgaveStatus",required:!0,type:{name:"Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>"}}}}}catch{}export{h as O};
//# sourceMappingURL=OppgaveErReservertAvAnnenModal-8ded2fa6.js.map
