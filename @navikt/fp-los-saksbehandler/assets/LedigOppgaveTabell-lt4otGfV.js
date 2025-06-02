import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as x}from"./withThemeDecorator-z4QW1Ff7.js";import"./FlyttReservasjonModal-CAo0DYe1.js";import{B as w}from"./BehandlingPollingTimoutModal-D0kFWjnl.js";import{r as g}from"./index-C4XKfyRp.js";import{e as B}from"./index.es-CkC-ADA8.js";import{T as O,C as N,S as I,a as L,O as E}from"./OppgaveLabels-B2easYMl.js";import{T as i}from"./Table-BUYqCHT5.js";import{H as f,V as c}from"./VStack-CMLmUAd_.js";import{B as h,L as _}from"./nb_NO-C3_hJm02.js";import{u as K}from"./useMutation-D0WUzOL0.js";import{d as S,e as D}from"./fplosSaksbehandlerApi-4oezgadX.js";import{M as o}from"./message-BKRiN860.js";var C=(n=>(n.PENDING="PENDING",n.COMPLETE="COMPLETE",n.DELAYED="DELAYED",n.CANCELLED="CANCELLED",n.HALTED="HALTED",n))(C||{});const M="_image_1ni5b_1",P="_fadeIn_1ni5b_9",b={image:M,fadeIn:P},q=({oppgave:n,reserverOppgave:t,erNyBehandling:l})=>{const r=x(),s=g.useRef(null),u=(a,d)=>{var p;(p=s.current)!=null&&p.contains(a.target)||d&&t(d)};return e.jsxs(i.Row,{onMouseDown:a=>u(a,n),onKeyDown:a=>u(a,n),className:l?b.fadeIn:void 0,children:[e.jsx(i.DataCell,{children:n.navn??"<navn>"}),e.jsx(i.DataCell,{children:e.jsxs(f,{align:"center",ref:s,wrap:!1,children:[e.jsx(h,{children:n.saksnummer}),e.jsx(O,{content:r.formatMessage({id:"LedigOppgaveRad.Saksnr"}),children:e.jsx(N,{activeIcon:e.jsx(L,{className:b.image,"aria-hidden":!0}),copyText:n.saksnummer,icon:e.jsx(I,{"aria-hidden":!0,className:b.image})})})]})}),e.jsx(i.DataCell,{children:e.jsx(E,{oppgave:n})}),e.jsx(i.DataCell,{children:n.opprettetTidspunkt&&e.jsx(B,{dateString:n.opprettetTidspunkt})})]},n.id)};q.__docgenInfo={description:"",methods:[],displayName:"LedigOppgaveRad",props:{oppgave:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  status: OppgaveStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
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
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"BehandlingType",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"AndreKriterierType"}],raw:"AndreKriterierType[]",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
}>`},description:""},reserverOppgave:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  status: OppgaveStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
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
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"BehandlingType",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"AndreKriterierType"}],raw:"AndreKriterierType[]",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
}>`},name:"oppgave"}],return:{name:"void"}}},description:""},erNyBehandling:{required:!0,tsType:{name:"boolean"},description:""}}};const T=new Array,Y=202,H=1800,j="MAX_POLLING",U=n=>new Promise(t=>{setTimeout(t,n)}),G=n=>n.status!==void 0,A=async(n,t,l,r=0)=>{const s=await D(t);if(l()!==n)return[];if(G(s)){if(r===H)throw new Error(j);const{pollIntervalMillis:u}=s,a=r<30?u:u+(r-30)*u;return await U(a),await A(n,t,l,r+1)}return s},z=async(n,t,l)=>{const r=await S(n,l);if(r.status===Y){const s=r.headers.get("location");if(s===null)throw new Error("Location i response er ikke angitt");return await A(n,s,t)}throw new Error("Responderte ikke med 202 - Accepted")},F=n=>{const[t,l]=g.useState(T),[r,s]=g.useState(T),u=g.useRef(n),a=()=>u.current,{mutateAsync:d,data:v=T,isSuccess:p,error:k}=K({mutationFn:m=>z(n,a,m.oppgaveIder)});return g.useEffect(()=>{d({oppgaveIder:void 0})},[]),g.useEffect(()=>{p&&(l(v),t.length>0&&s(v.filter(m=>!t.some(R=>R.id===m.id))),d({oppgaveIder:v.map(m=>m.id).join(",")}))},[p]),g.useEffect(()=>(u.current=n,()=>{u.current=0}),[n]),{oppgaverTilBehandling:t,nyeBehandlinger:r,isMaxPollingAttemptsReached:(k==null?void 0:k.message)===j}},V="_grayout_15ljo_1",X="_padding_15ljo_5",$="_tabell_15ljo_9",y={grayout:V,padding:X,tabell:$},J=({reserverOppgave:n,antallOppgaver:t=0,valgtSakslisteId:l})=>{const{oppgaverTilBehandling:r,nyeBehandlinger:s,isMaxPollingAttemptsReached:u}=F(l);return e.jsxs(c,{gap:"4",className:y.tabell,children:[u&&e.jsx(w,{}),e.jsx(c,{gap:"2",className:y.padding,children:e.jsxs(f,{gap:"2",children:[e.jsx(_,{size:"small",children:e.jsx(o,{id:"LedigOppgaveTabell.DineNesteSaker"})}),e.jsx(h,{size:"small",className:y.grayout,children:e.jsx(o,{id:"LedigOppgaveTabell.DineNesteSakerAntall",values:{totaltAntall:t}})})]})}),r.length===0&&e.jsx(h,{size:"small",className:y.padding,children:e.jsx(o,{id:"LedigOppgaveTabell.IngenOppgaver",tagName:"i"})}),r.length>0&&e.jsx(c,{gap:"4",children:e.jsxs(i,{size:"small",children:[e.jsx(i.Header,{children:e.jsxs(i.Row,{children:[e.jsx(i.ColumnHeader,{children:e.jsx(o,{id:"LedigOppgaveTabell.Soker"})}),e.jsx(i.ColumnHeader,{children:e.jsx(o,{id:"LedigOppgaveTabell.Sak"})}),e.jsx(i.ColumnHeader,{}),e.jsx(i.ColumnHeader,{children:e.jsx(o,{id:"LedigOppgaveTabell.BehandlingOpprettet"})})]})}),e.jsx(i.Body,{children:r.map(a=>e.jsx(q,{oppgave:a,reserverOppgave:n,erNyBehandling:s.some(d=>d.id===a.id)},a.id))})]})})]})};J.__docgenInfo={description:"",methods:[],displayName:"LedigOppgaveTabell",props:{reserverOppgave:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  status: OppgaveStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
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
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"BehandlingType",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"AndreKriterierType"}],raw:"AndreKriterierType[]",required:!0}}]}}],raw:`Readonly<{
  id: number;
  status: OppgaveStatus;
  saksnummer: string;
  personnummer: string;
  navn: string;
  system: string;
  behandlingstype: BehandlingType;
  opprettetTidspunkt: string;
  behandlingsfrist: string;
  fagsakYtelseType: string;
  erTilSaksbehandling: boolean;
  behandlingId: string;
  andreKriterier: AndreKriterierType[];
}>`},name:"oppgave"}],return:{name:"void"}}},description:""},antallOppgaver:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};export{C as A,J as L};
