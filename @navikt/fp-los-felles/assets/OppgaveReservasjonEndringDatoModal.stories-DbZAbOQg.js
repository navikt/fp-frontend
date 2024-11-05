import{j as e}from"./jsx-runtime-DR9Q75dM.js";import{u as E,A as S,a as x,$ as I,M as s,H as A,b as d,P as B,q as H,I as P,y as F,B as g,g as N,c as i,m as _}from"./nb_NO-B_HpmK2h.js";import{r as p}from"./index-DRjF_FHU.js";import{d as z}from"./dayjs.min-CnNqAF5I.js";import"./v4-CQkTLCs1.js";import"./index-rX-Bn4lm.js";const v=()=>{const r=new Date;return r.setDate(new Date().getDate()+30),r},l=({showModal:r,closeModal:a,reserverTilDefault:o,oppgaveId:h,hentReserverteOppgaver:R,endreReserverasjonState:T,endreOppgavereservasjon:q})=>{const M=E(),D=p.useCallback(u=>q({oppgaveId:h,reserverTil:u}).then(()=>{T(),R({},!0)}),[]),O=p.useMemo(()=>({reserverTil:o?z(o).format(S):""}),[o]),w=x({defaultValues:O});return e.jsx(I,{formMethods:w,onSubmit:u=>D(u.reserverTil),children:e.jsxs(s,{width:"small",open:r,"aria-label":M.formatMessage({id:"OppgaveReservasjonEndringDatoModal.Header"}),onClose:a,children:[e.jsx(s.Header,{children:e.jsx(A,{size:"small",children:e.jsx(d,{id:"OppgaveReservasjonEndringDatoModal.Header"})})}),e.jsx(s.Body,{children:e.jsx(B,{label:"",name:"reserverTil",validate:[H,P(new Date),F(v())],fromDate:new Date,toDate:v()})}),e.jsxs(s.Footer,{children:[e.jsx(g,{size:"small",children:e.jsx(d,{id:"OppgaveReservasjonEndringDatoModal.Ok"})}),e.jsx(g,{size:"small",variant:"secondary",onClick:a,type:"button",children:e.jsx(d,{id:"OppgaveReservasjonEndringDatoModal.Avbryt"})})]})]})})};l.__docgenInfo={description:"OppgaveReservasjonEndringDatoModal.",methods:[],displayName:"OppgaveReservasjonEndringDatoModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},closeModal:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:""},reserverTilDefault:{required:!1,tsType:{name:"string"},description:""},oppgaveId:{required:!0,tsType:{name:"number"},description:""},endreReserverasjonState:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hentReserverteOppgaver:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: any, keepData: boolean) => void",signature:{arguments:[{type:{name:"any"},name:"params"},{type:{name:"boolean"},name:"keepData"}],return:{name:"void"}}},description:""},endreOppgavereservasjon:{required:!0,tsType:{name:"signature",type:"function",raw:"(input: { oppgaveId: number; reserverTil: string }) => Promise<Oppgave[] | undefined>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ oppgaveId: number; reserverTil: string }",signature:{properties:[{key:"oppgaveId",value:{name:"number",required:!0}},{key:"reserverTil",value:{name:"string",required:!0}}]}},name:"input"}],return:{name:"Promise",elements:[{name:"union",raw:"Oppgave[] | undefined",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Oppgave[]"},{name:"undefined"}]}],raw:"Promise<Oppgave[] | undefined>"}}},description:""}}};const C=N(_),J={title:"los/avdelingsleder/behandlingskoer/OppgaveReservasjonEndringDatoModal",component:l,decorators:[C]},f=({endreReserverasjonState:r,reserverTilDefault:a})=>e.jsx(l,{showModal:!0,closeModal:i("button-click"),reserverTilDefault:a,oppgaveId:1,endreReserverasjonState:r,hentReserverteOppgaver:i("button-click"),endreOppgavereservasjon:()=>Promise.resolve([])}),n=f.bind({});n.args={endreReserverasjonState:i("button-click")};const t=f.bind({});t.args={endreReserverasjonState:i("button-click"),reserverTilDefault:"2017-08-02T00:54:25.455"};var m,c,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`({
  endreReserverasjonState,
  reserverTilDefault
}) => <OppgaveReservasjonEndringDatoModal showModal closeModal={action('button-click')} reserverTilDefault={reserverTilDefault} oppgaveId={1} endreReserverasjonState={endreReserverasjonState} hentReserverteOppgaver={action('button-click')} endreOppgavereservasjon={() => Promise.resolve([])} />`,...(y=(c=n.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var b,k,j;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`({
  endreReserverasjonState,
  reserverTilDefault
}) => <OppgaveReservasjonEndringDatoModal showModal closeModal={action('button-click')} reserverTilDefault={reserverTilDefault} oppgaveId={1} endreReserverasjonState={endreReserverasjonState} hentReserverteOppgaver={action('button-click')} endreOppgavereservasjon={() => Promise.resolve([])} />`,...(j=(k=t.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};const K=["Default","MedDefaultverdi"];export{n as Default,t as MedDefaultverdi,K as __namedExportsOrder,J as default};
