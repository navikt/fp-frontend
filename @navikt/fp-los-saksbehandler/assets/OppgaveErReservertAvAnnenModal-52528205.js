import{j as e,a as u}from"./jsx-runtime-86dfebf6.js";import{r as p}from"./index-1b03fe98.js";import{l as i,a as v,F as g,M as m,B as t,L as c,Z as A,b as f}from"./nb_NO-31758bbb.js";import{E as R}from"./ExclamationmarkTriangleFill-7f9177aa.js";const k="_image_6qduj_1",_="_modal_6qduj_8",b="_text_6qduj_12",y="_okButton_6qduj_16",r={image:k,modal:_,text:b,okButton:y},s=({lukkErReservertModalOgOpneOppgave:d,oppgave:o,oppgaveStatus:n})=>{const a=i.useIntl(),l=p.useCallback(()=>d(o),[o.id]);return e(v,{className:r.modal,open:!0,"aria-label":a.formatMessage({id:"OppgaveErReservertAvAnnenModal.ReservertAvEnkel"}),onClose:l,children:e(v.Body,{children:e(g,{children:u(m,{children:[e(t,{children:e(R,{className:r.image,title:a.formatMessage({id:"OppgaveErReservertAvAnnenModal.ReservertAvEnkel"})})}),e(t,{className:r.text,children:e(c,{size:"small",children:e(i.FormattedMessage,{id:"OppgaveErReservertAvAnnenModal.ReservertAv",values:{saksbehandlernavn:n.reservertAvNavn,saksbehandlerid:n.reservertAvUid,...A(n.reservertTilTidspunkt)}})})}),e(t,{children:e(f,{className:r.okButton,size:"small",variant:"primary",onClick:l,autoFocus:!0,type:"button",children:a.formatMessage({id:"OppgaveErReservertAvAnnenModal.Ok"})})})]})})})})},B=s;try{s.displayName="OppgaveErReservertAvAnnenModal",s.__docgenInfo={description:`OppgaveErReservertAvAnnenModal

Modal som vises når en åpner oppgave som er reservert av en annen saksbehandler`,displayName:"OppgaveErReservertAvAnnenModal",props:{lukkErReservertModalOgOpneOppgave:{defaultValue:null,description:"",name:"lukkErReservertModalOgOpneOppgave",required:!0,type:{name:"(oppgave: Readonly<{ id: number; status: Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>; ... 10 more ...; behandli..."}},oppgave:{defaultValue:null,description:"",name:"oppgave",required:!0,type:{name:"Readonly<{ id: number; status: Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>; ... 10 more ...; behandlingId: stri..."}},oppgaveStatus:{defaultValue:null,description:"",name:"oppgaveStatus",required:!0,type:{name:"Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>"}}}}}catch{}export{B as O};
//# sourceMappingURL=OppgaveErReservertAvAnnenModal-52528205.js.map
