import{d as S,j as e}from"./dayjs.min-ZUODdiE-.js";import{u as x,A as I,a as A,Y as B,M as s,H,b as d,P,c as F,y as N,I as Y,B as l,g as _,d as i,m as z}from"./nb_NO-BoomD4k4.js";import{r as g}from"./index-uubelm5h.js";import"./v4-CQkTLCs1.js";import"./index-BdzLX9oW.js";const p=()=>{const r=new Date;return r.setDate(new Date().getDate()+30),r},j=({showModal:r,closeModal:a,reserverTilDefault:o,oppgaveId:h,hentReserverteOppgaver:T,endreReserverasjonState:M,endreOppgavereservasjon:D})=>{const q=x(),O=g.useCallback(u=>D({oppgaveId:h,reserverTil:u}).then(()=>{M(),T({},!0)}),[]),w=g.useMemo(()=>({reserverTil:o?S(o).format(I):""}),[o]),E=A({defaultValues:w});return e.jsx(B,{formMethods:E,onSubmit:u=>O(u.reserverTil),children:e.jsxs(s,{width:"small",open:r,"aria-label":q.formatMessage({id:"OppgaveReservasjonEndringDatoModal.Header"}),onClose:a,children:[e.jsx(s.Header,{children:e.jsx(H,{size:"small",children:e.jsx(d,{id:"OppgaveReservasjonEndringDatoModal.Header"})})}),e.jsx(s.Body,{children:e.jsx(P,{label:"",name:"reserverTil",validate:[F,N(new Date),Y(p())],fromDate:new Date,toDate:p()})}),e.jsxs(s.Footer,{children:[e.jsx(l,{size:"small",children:e.jsx(d,{id:"OppgaveReservasjonEndringDatoModal.Ok"})}),e.jsx(l,{size:"small",variant:"secondary",onClick:a,type:"button",children:e.jsx(d,{id:"OppgaveReservasjonEndringDatoModal.Avbryt"})})]})]})})},f=j;j.__docgenInfo={description:"OppgaveReservasjonEndringDatoModal.",methods:[],displayName:"OppgaveReservasjonEndringDatoModal",props:{showModal:{required:!0,tsType:{name:"boolean"},description:""},closeModal:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:""},reserverTilDefault:{required:!1,tsType:{name:"string"},description:""},oppgaveId:{required:!0,tsType:{name:"number"},description:""},endreReserverasjonState:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hentReserverteOppgaver:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: any, keepData: boolean) => void",signature:{arguments:[{type:{name:"any"},name:"params"},{type:{name:"boolean"},name:"keepData"}],return:{name:"void"}}},description:""},endreOppgavereservasjon:{required:!0,tsType:{name:"signature",type:"function",raw:"(input: { oppgaveId: number; reserverTil: string }) => Promise<Oppgave[] | undefined>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ oppgaveId: number; reserverTil: string }",signature:{properties:[{key:"oppgaveId",value:{name:"number",required:!0}},{key:"reserverTil",value:{name:"string",required:!0}}]}},name:"input"}],return:{name:"Promise",elements:[{name:"union",raw:"Oppgave[] | undefined",elements:[{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`}],raw:"Oppgave[]"},{name:"undefined"}]}],raw:"Promise<Oppgave[] | undefined>"}}},description:""}}};const C=_(z),J={title:"los/avdelingsleder/behandlingskoer/OppgaveReservasjonEndringDatoModal",component:f,decorators:[C]},R=({endreReserverasjonState:r,reserverTilDefault:a})=>e.jsx(f,{showModal:!0,closeModal:i("button-click"),reserverTilDefault:a,oppgaveId:1,endreReserverasjonState:r,hentReserverteOppgaver:i("button-click"),endreOppgavereservasjon:()=>Promise.resolve([])}),n=R.bind({});n.args={endreReserverasjonState:i("button-click")};const t=R.bind({});t.args={endreReserverasjonState:i("button-click"),reserverTilDefault:"2017-08-02T00:54:25.455"};var v,m,c;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`({
  endreReserverasjonState,
  reserverTilDefault
}) => <OppgaveReservasjonEndringDatoModal showModal closeModal={action('button-click')} reserverTilDefault={reserverTilDefault} oppgaveId={1} endreReserverasjonState={endreReserverasjonState} hentReserverteOppgaver={action('button-click')} endreOppgavereservasjon={() => Promise.resolve([])} />`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var y,b,k;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`({
  endreReserverasjonState,
  reserverTilDefault
}) => <OppgaveReservasjonEndringDatoModal showModal closeModal={action('button-click')} reserverTilDefault={reserverTilDefault} oppgaveId={1} endreReserverasjonState={endreReserverasjonState} hentReserverteOppgaver={action('button-click')} endreOppgavereservasjon={() => Promise.resolve([])} />`,...(k=(b=t.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const K=["Default","MedDefaultverdi"];export{n as Default,t as MedDefaultverdi,K as __namedExportsOrder,J as default};
