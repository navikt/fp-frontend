import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{u as S,A as x,a as I,$ as A,M as a,H as B,b as d,P as H,g as P,O as Y,D as F,B as p,c as N,d as s,m as _}from"./nb_NO-BMHq4oTR.js";import{r as v}from"./index-DRjF_FHU.js";import{d as l}from"./dayjs.min-CnNqAF5I.js";import"./v4-CQkTLCs1.js";import"./index-rX-Bn4lm.js";const m=()=>l().startOf("day").add(30,"days"),g=({showModal:i,closeModal:t,reserverTilDefault:o,oppgaveId:R,hentReserverteOppgaver:T,endreReserverasjonState:M,endreOppgavereservasjon:q})=>{const D=S(),O=v.useCallback(u=>q({oppgaveId:R,reserverTil:u}).then(()=>{M(),T({},!0)}),[]),w=v.useMemo(()=>({reserverTil:o?l(o).format(x):""}),[o]),E=I({defaultValues:w});return e.jsx(A,{formMethods:E,onSubmit:u=>O(u.reserverTil),children:e.jsxs(a,{width:"small",open:i,"aria-label":D.formatMessage({id:"OppgaveReservasjonEndringDatoModal.Header"}),onClose:t,children:[e.jsx(a.Header,{children:e.jsx(B,{size:"small",children:e.jsx(d,{id:"OppgaveReservasjonEndringDatoModal.Header"})})}),e.jsx(a.Body,{children:e.jsx(H,{label:"",name:"reserverTil",validate:[P,Y,F(m())],fromDate:new Date,toDate:m().toDate()})}),e.jsxs(a.Footer,{children:[e.jsx(p,{size:"small",children:e.jsx(d,{id:"OppgaveReservasjonEndringDatoModal.Ok"})}),e.jsx(p,{size:"small",variant:"secondary",onClick:t,type:"button",children:e.jsx(d,{id:"OppgaveReservasjonEndringDatoModal.Avbryt"})})]})]})})};g.__docgenInfo={description:"OppgaveReservasjonEndringDatoModal.",methods:[],displayName:"OppgaveReservasjonEndringDatoModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},closeModal:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:""},reserverTilDefault:{required:!1,tsType:{name:"string"},description:""},oppgaveId:{required:!0,tsType:{name:"number"},description:""},endreReserverasjonState:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hentReserverteOppgaver:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: any, keepData: boolean) => void",signature:{arguments:[{type:{name:"any"},name:"params"},{type:{name:"boolean"},name:"keepData"}],return:{name:"void"}}},description:""},endreOppgavereservasjon:{required:!0,tsType:{name:"signature",type:"function",raw:"(input: { oppgaveId: number; reserverTil: string }) => Promise<Oppgave[] | undefined>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ oppgaveId: number; reserverTil: string }",signature:{properties:[{key:"oppgaveId",value:{name:"number",required:!0}},{key:"reserverTil",value:{name:"string",required:!0}}]}},name:"input"}],return:{name:"Promise",elements:[{name:"union",raw:"Oppgave[] | undefined",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Oppgave[]"},{name:"undefined"}]}],raw:"Promise<Oppgave[] | undefined>"}}},description:""}}};const z=N(_),J={title:"los/avdelingsleder/behandlingskoer/OppgaveReservasjonEndringDatoModal",component:g,decorators:[z]},h=({endreReserverasjonState:i,reserverTilDefault:t})=>e.jsx(g,{showModal:!0,closeModal:s("button-click"),reserverTilDefault:t,oppgaveId:1,endreReserverasjonState:i,hentReserverteOppgaver:s("button-click"),endreOppgavereservasjon:()=>Promise.resolve([])}),r=h.bind({});r.args={endreReserverasjonState:s("button-click")};const n=h.bind({});n.args={endreReserverasjonState:s("button-click"),reserverTilDefault:l().add(1,"week").format("YYYY-MM-DD")};var c,y,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`({
  endreReserverasjonState,
  reserverTilDefault
}) => <OppgaveReservasjonEndringDatoModal showModal closeModal={action('button-click')} reserverTilDefault={reserverTilDefault} oppgaveId={1} endreReserverasjonState={endreReserverasjonState} hentReserverteOppgaver={action('button-click')} endreOppgavereservasjon={() => Promise.resolve([])} />`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var k,j,f;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`({
  endreReserverasjonState,
  reserverTilDefault
}) => <OppgaveReservasjonEndringDatoModal showModal closeModal={action('button-click')} reserverTilDefault={reserverTilDefault} oppgaveId={1} endreReserverasjonState={endreReserverasjonState} hentReserverteOppgaver={action('button-click')} endreOppgavereservasjon={() => Promise.resolve([])} />`,...(f=(j=n.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};const K=["Default","MedDefaultverdi"];export{r as Default,n as MedDefaultverdi,K as __namedExportsOrder,J as default};
