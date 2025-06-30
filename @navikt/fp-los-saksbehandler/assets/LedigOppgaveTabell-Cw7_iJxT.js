import{u as x,r as g,j as e}from"./iframe-BGRsIo3P.js";import"./FlyttReservasjonModal-DLOaK9D6.js";import{B as w}from"./BehandlingPollingTimoutModal-Rmb0D2kF.js";import{H as B}from"./index.es-Cngvyuii.js";import{T as N,C as I,S as L,a as S,O as E}from"./OppgaveLabels-nY-wAYI4.js";import{T as i}from"./Table-DJx7eA3r.js";import{H as f,V as b}from"./VStack-C2U-6IUP.js";import{B as h,L as O}from"./nb_NO-DYLtSdYq.js";import{u as _}from"./useMutation-DV3KsNnq.js";import{b as K,c as D}from"./fplosSaksbehandlerApi-Br0saMg4.js";import{M as o}from"./message-D4wBDHqB.js";var C=(n=>(n.PENDING="PENDING",n.COMPLETE="COMPLETE",n.DELAYED="DELAYED",n.CANCELLED="CANCELLED",n.HALTED="HALTED",n))(C||{});const M="_image_1ni5b_1",H="_fadeIn_1ni5b_9",c={image:M,fadeIn:H},q=({oppgave:n,reserverOppgave:t,erNyBehandling:l})=>{const r=x(),s=g.useRef(null),u=(a,d)=>{var p;(p=s.current)!=null&&p.contains(a.target)||d&&t(d)};return e.jsxs(i.Row,{onMouseDown:a=>u(a,n),onKeyDown:a=>u(a,n),className:l?c.fadeIn:void 0,children:[e.jsx(i.DataCell,{children:n.navn??"<navn>"}),e.jsx(i.DataCell,{children:e.jsxs(f,{align:"center",ref:s,wrap:!1,children:[e.jsx(h,{children:n.saksnummer}),e.jsx(N,{content:r.formatMessage({id:"LedigOppgaveRad.Saksnr"}),children:e.jsx(I,{activeIcon:e.jsx(S,{className:c.image,"aria-hidden":!0}),copyText:n.saksnummer,icon:e.jsx(L,{"aria-hidden":!0,className:c.image})})})]})}),e.jsx(i.DataCell,{children:e.jsx(E,{oppgave:n})}),e.jsx(i.DataCell,{children:n.opprettetTidspunkt&&e.jsx(B,{dateString:n.opprettetTidspunkt})})]},n.id)};q.__docgenInfo={description:"",methods:[],displayName:"LedigOppgaveRad",props:{oppgave:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  reservasjonStatus: ReservasjonStatus;
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"reservasjonStatus",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  reservasjonStatus: ReservasjonStatus;
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
  reservasjonStatus: ReservasjonStatus;
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"reservasjonStatus",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  reservasjonStatus: ReservasjonStatus;
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
}>`},name:"oppgave"}],return:{name:"void"}}},description:""},erNyBehandling:{required:!0,tsType:{name:"boolean"},description:""}}};const T=new Array,P=202,Y=1800,j="MAX_POLLING",U=n=>new Promise(t=>{setTimeout(t,n)}),G=n=>n.status!==void 0,R=async(n,t,l,r=0)=>{const s=await D(t);if(l()!==n)return[];if(G(s)){if(r===Y)throw new Error(j);const{pollIntervalMillis:u}=s,a=r<30?u:u+(r-30)*u;return await U(a),await R(n,t,l,r+1)}return s},z=async(n,t,l)=>{const r=await K(n,l);if(r.status===P){const s=r.headers.get("location");if(s===null)throw new Error("Location i response er ikke angitt");return await R(n,s,t)}throw new Error("Responderte ikke med 202 - Accepted")},F=n=>{const[t,l]=g.useState(T),[r,s]=g.useState(T),u=g.useRef(n),a=()=>u.current,{mutateAsync:d,data:m=T,isSuccess:p,error:k}=_({mutationFn:v=>z(n,a,v.oppgaveIder)});return g.useEffect(()=>{d({oppgaveIder:void 0})},[]),g.useEffect(()=>{p&&(l(m),t.length>0&&s(m.filter(v=>!t.some(A=>A.id===v.id))),d({oppgaveIder:m.map(v=>v.id).join(",")}))},[p]),g.useEffect(()=>(u.current=n,()=>{u.current=0}),[n]),{oppgaverTilBehandling:t,nyeBehandlinger:r,isMaxPollingAttemptsReached:(k==null?void 0:k.message)===j}},V="_grayout_15ljo_1",X="_padding_15ljo_5",$="_tabell_15ljo_9",y={grayout:V,padding:X,tabell:$},J=({reserverOppgave:n,antallOppgaver:t=0,valgtSakslisteId:l})=>{const{oppgaverTilBehandling:r,nyeBehandlinger:s,isMaxPollingAttemptsReached:u}=F(l);return e.jsxs(b,{gap:"4",className:y.tabell,children:[u&&e.jsx(w,{}),e.jsx(b,{gap:"2",className:y.padding,children:e.jsxs(f,{gap:"2",children:[e.jsx(O,{size:"small",children:e.jsx(o,{id:"LedigOppgaveTabell.DineNesteSaker"})}),e.jsx(h,{size:"small",className:y.grayout,children:e.jsx(o,{id:"LedigOppgaveTabell.DineNesteSakerAntall",values:{totaltAntall:t}})})]})}),r.length===0&&e.jsx(h,{size:"small",className:y.padding,children:e.jsx(o,{id:"LedigOppgaveTabell.IngenOppgaver",tagName:"i"})}),r.length>0&&e.jsx(b,{gap:"4",children:e.jsxs(i,{size:"small",children:[e.jsx(i.Header,{children:e.jsxs(i.Row,{children:[e.jsx(i.ColumnHeader,{children:e.jsx(o,{id:"LedigOppgaveTabell.Soker"})}),e.jsx(i.ColumnHeader,{children:e.jsx(o,{id:"LedigOppgaveTabell.Sak"})}),e.jsx(i.ColumnHeader,{}),e.jsx(i.ColumnHeader,{children:e.jsx(o,{id:"LedigOppgaveTabell.BehandlingOpprettet"})})]})}),e.jsx(i.Body,{children:r.map(a=>e.jsx(q,{oppgave:a,reserverOppgave:n,erNyBehandling:s.some(d=>d.id===a.id)},a.id))})]})})]})};J.__docgenInfo={description:"",methods:[],displayName:"LedigOppgaveTabell",props:{reserverOppgave:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: number;
  reservasjonStatus: ReservasjonStatus;
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
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"reservasjonStatus",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  reservasjonStatus: ReservasjonStatus;
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
