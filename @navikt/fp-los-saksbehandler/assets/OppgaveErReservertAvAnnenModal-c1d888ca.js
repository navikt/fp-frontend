import{j as e}from"./jsx-runtime-9c4ae004.js";import{r as v}from"./index-1b03fe98.js";import{a as u,o as p,s as m,D as t,K as g,L as c,F as A,G as f,b as R}from"./nb_NO-f3f50ba4.js";import{a as k}from"./advarsel-27b41fd8.js";import{N as i}from"./Provider-983842f2.js";const y="_image_zy0tr_1",_="_modal_zy0tr_7",x="_text_zy0tr_11",b="_okButton_zy0tr_15",r={image:y,modal:_,text:x,okButton:b},a=({lukkErReservertModalOgOpneOppgave:o,oppgave:d,oppgaveStatus:n})=>{const s=u(),l=v.useCallback(()=>o(d),[d.id]);return e.jsx(i,{className:r.modal,open:!0,"aria-label":s.formatMessage({id:"OppgaveErReservertAvAnnenModal.ReservertAvEnkel"}),onClose:l,children:e.jsx(i.Body,{children:e.jsx(p,{children:e.jsxs(m,{children:[e.jsx(t,{children:e.jsx(g,{className:r.image,alt:s.formatMessage({id:"OppgaveErReservertAvAnnenModal.ReservertAvEnkel"}),src:k})}),e.jsx(t,{className:r.text,children:e.jsx(c,{size:"small",children:e.jsx(A,{id:"OppgaveErReservertAvAnnenModal.ReservertAv",values:{saksbehandlernavn:n.reservertAvNavn,saksbehandlerid:n.reservertAvUid,...f(n.reservertTilTidspunkt)}})})}),e.jsx(t,{children:e.jsx(R,{className:r.okButton,size:"small",variant:"primary",onClick:l,autoFocus:!0,type:"button",children:s.formatMessage({id:"OppgaveErReservertAvAnnenModal.Ok"})})})]})})})})},N=a;try{a.displayName="OppgaveErReservertAvAnnenModal",a.__docgenInfo={description:`OppgaveErReservertAvAnnenModal

Modal som vises når en åpner oppgave som er reservert av en annen saksbehandler`,displayName:"OppgaveErReservertAvAnnenModal",props:{lukkErReservertModalOgOpneOppgave:{defaultValue:null,description:"",name:"lukkErReservertModalOgOpneOppgave",required:!0,type:{name:"(oppgave: Readonly<{ id: number; status: Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>; ... 10 more ...; behandli..."}},oppgave:{defaultValue:null,description:"",name:"oppgave",required:!0,type:{name:"Readonly<{ id: number; status: Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>; ... 10 more ...; behandlingId: stri..."}},oppgaveStatus:{defaultValue:null,description:"",name:"oppgaveStatus",required:!0,type:{name:"Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>"}}}}}catch{}export{N as O};
//# sourceMappingURL=OppgaveErReservertAvAnnenModal-c1d888ca.js.map
