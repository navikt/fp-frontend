import{j as e,a as i}from"./jsx-runtime-86dfebf6.js";import{r as R}from"./index-1b03fe98.js";import{l as a,h as b,O as f,a as n,H as M,w as j,b as p}from"./nb_NO-31758bbb.js";import{r as y,Z as O,k as _,I as k}from"./index.es-23262e77.js";import{b as B,R as A}from"./fplosSaksbehandlerRestApi-84411765.js";const x="_submitButton_1x7ej_1",F="_cancelButton_1x7ej_6",u={submitButton:x,cancelButton:F},V=_(3),I=k(500),t=({showModal:r,cancel:o,oppgave:l,toggleMenu:m,hentReserverteOppgaver:v})=>{const d=a.useIntl(),{startRequest:c}=B.useRestApiRunner(A.OPPHEV_OPPGAVERESERVASJON),h=R.useCallback(s=>c({oppgaveId:l.id,begrunnelse:s}).then(()=>{m(),v({},!0)}),[l.id]),g=b();return e(f,{formMethods:g,onSubmit:s=>h(s.begrunnelse),children:i(n,{width:"small",open:r,"aria-label":d.formatMessage({id:"OpphevReservasjonModal.Begrunnelse"}),onClose:o,children:[e(n.Header,{children:e(M,{size:"small",children:e(a.FormattedMessage,{id:"OpphevReservasjonModal.Begrunnelse"})})}),e(n.Body,{children:e(j,{name:"begrunnelse",label:d.formatMessage({id:"OpphevReservasjonModal.Hjelpetekst"}),validate:[y,I,V,O],maxLength:500})}),i(n.Footer,{children:[e(p,{className:u.submitButton,size:"small",variant:"primary",autoFocus:!0,children:e(a.FormattedMessage,{id:"OpphevReservasjonModal.Ok"})}),e(p,{className:u.cancelButton,size:"small",variant:"secondary",onClick:o,type:"button",children:e(a.FormattedMessage,{id:"OpphevReservasjonModal.Avbryt"})})]})]})})},E=t;try{t.displayName="OpphevReservasjonModal",t.__docgenInfo={description:`OpphevReservasjonModal

Presentasjonskomponent. Modal som lar en begrunne hvorfor en sak skal frigjøres.`,displayName:"OpphevReservasjonModal",props:{showModal:{defaultValue:null,description:"",name:"showModal",required:!0,type:{name:"boolean"}},oppgave:{defaultValue:null,description:"",name:"oppgave",required:!0,type:{name:"Readonly<{ id: number; status: Readonly<{ erReservert: boolean; reservertTilTidspunkt?: string | undefined; erReservertAvInnloggetBruker?: boolean | undefined; reservertAvUid?: string | undefined; reservertAvNavn?: string | undefined; flyttetReservasjon?: { ...; } | undefined; }>; ... 10 more ...; behandlingId: stri..."}},cancel:{defaultValue:null,description:"",name:"cancel",required:!0,type:{name:"() => void"}},toggleMenu:{defaultValue:null,description:"",name:"toggleMenu",required:!0,type:{name:"() => void"}},hentReserverteOppgaver:{defaultValue:null,description:"",name:"hentReserverteOppgaver",required:!0,type:{name:"(params: any, keepData: boolean) => void"}}}}}catch{}export{E as O};
//# sourceMappingURL=OpphevReservasjonModal-55601bf5.js.map
