import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{u as M,a as S,A as w,$ as x,M as s,H as I,b as u,P as A,g as E,O as P,D as Y,B as g,c as B,d as i,m as F}from"./nb_NO-o4lflg9r.js";import{d}from"./dayjs.min-CnNqAF5I.js";import"./index-DRjF_FHU.js";import"./v4-CQkTLCs1.js";import"./index-rX-Bn4lm.js";const p=()=>d().startOf("day").add(30,"days"),l=({closeModal:r,reserverTilDefault:a,oppgaveId:f,hentReserverteOppgaver:R,endreReserverasjonState:T,endreOppgavereservasjon:h})=>{const D=M(),q=o=>h({oppgaveId:f,reserverTil:o}).then(()=>{T(),R({},!0),r()}),O=S({defaultValues:{reserverTil:a?d(a).format(w):""}});return e.jsx(x,{formMethods:O,onSubmit:o=>q(o.reserverTil),children:e.jsxs(s,{width:"small",open:!0,"aria-label":D.formatMessage({id:"OppgaveReservasjonEndringDatoModal.Header"}),onClose:r,children:[e.jsx(s.Header,{children:e.jsx(I,{size:"small",children:e.jsx(u,{id:"OppgaveReservasjonEndringDatoModal.Header"})})}),e.jsx(s.Body,{children:e.jsx(A,{label:"",name:"reserverTil",validate:[E,P,Y(p())],fromDate:new Date,toDate:p().toDate()})}),e.jsxs(s.Footer,{children:[e.jsx(g,{size:"small",children:e.jsx(u,{id:"OppgaveReservasjonEndringDatoModal.Ok"})}),e.jsx(g,{size:"small",variant:"secondary",onClick:r,type:"button",children:e.jsx(u,{id:"OppgaveReservasjonEndringDatoModal.Avbryt"})})]})]})})};l.__docgenInfo={description:"",methods:[],displayName:"OppgaveReservasjonEndringDatoModal",props:{closeModal:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},reserverTilDefault:{required:!1,tsType:{name:"string"},description:""},oppgaveId:{required:!0,tsType:{name:"number"},description:""},endreReserverasjonState:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hentReserverteOppgaver:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: any, keepData: boolean) => void",signature:{arguments:[{type:{name:"any"},name:"params"},{type:{name:"boolean"},name:"keepData"}],return:{name:"void"}}},description:""},endreOppgavereservasjon:{required:!0,tsType:{name:"signature",type:"function",raw:"(input: { oppgaveId: number; reserverTil: string }) => Promise<Oppgave[] | undefined>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ oppgaveId: number; reserverTil: string }",signature:{properties:[{key:"oppgaveId",value:{name:"number",required:!0}},{key:"reserverTil",value:{name:"string",required:!0}}]}},name:"input"}],return:{name:"Promise",elements:[{name:"union",raw:"Oppgave[] | undefined",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"status",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}`,signature:{properties:[{key:"erReservert",value:{name:"boolean",required:!0}},{key:"reservertTilTidspunkt",value:{name:"string",required:!1}},{key:"erReservertAvInnloggetBruker",value:{name:"boolean",required:!1}},{key:"reservertAvUid",value:{name:"string",required:!1}},{key:"reservertAvNavn",value:{name:"string",required:!1}},{key:"flyttetReservasjon",value:{name:"signature",type:"object",raw:`{
  tidspunkt: string;
  uid: string;
  navn: string;
  begrunnelse: string;
}`,signature:{properties:[{key:"tidspunkt",value:{name:"string",required:!0}},{key:"uid",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  erReservert: boolean;
  reservertTilTidspunkt?: string;
  erReservertAvInnloggetBruker?: boolean;
  reservertAvUid?: string;
  reservertAvNavn?: string;
  flyttetReservasjon?: {
    tidspunkt: string;
    uid: string;
    navn: string;
    begrunnelse: string;
  };
}>`,required:!0}},{key:"saksnummer",value:{name:"number",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"string",required:!0}},{key:"behandlingStatus",value:{name:"string",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
  saksnummer: number;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: string;
  behandlingStatus: string;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
}>`}],raw:"Oppgave[]"},{name:"undefined"}]}],raw:"Promise<Oppgave[] | undefined>"}}},description:""}}};const H=B(F),V={title:"los/OppgaveReservasjonEndringDatoModal",component:l,decorators:[H]},j=({endreReserverasjonState:r,reserverTilDefault:a})=>e.jsx(l,{closeModal:i("button-click"),reserverTilDefault:a,oppgaveId:1,endreReserverasjonState:r,hentReserverteOppgaver:i("button-click"),endreOppgavereservasjon:()=>Promise.resolve([])}),n=j.bind({});n.args={endreReserverasjonState:i("button-click")};const t=j.bind({});t.args={endreReserverasjonState:i("button-click"),reserverTilDefault:d().add(1,"week").format("YYYY-MM-DD")};var v,m,c;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`({
  endreReserverasjonState,
  reserverTilDefault
}) => <OppgaveReservasjonEndringDatoModal closeModal={action('button-click')} reserverTilDefault={reserverTilDefault} oppgaveId={1} endreReserverasjonState={endreReserverasjonState} hentReserverteOppgaver={action('button-click')} endreOppgavereservasjon={() => Promise.resolve([])} />`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var y,k,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`({
  endreReserverasjonState,
  reserverTilDefault
}) => <OppgaveReservasjonEndringDatoModal closeModal={action('button-click')} reserverTilDefault={reserverTilDefault} oppgaveId={1} endreReserverasjonState={endreReserverasjonState} hentReserverteOppgaver={action('button-click')} endreOppgavereservasjon={() => Promise.resolve([])} />`,...(b=(k=t.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const G=["Default","MedDefaultverdi"];export{n as Default,t as MedDefaultverdi,G as __namedExportsOrder,V as default};
