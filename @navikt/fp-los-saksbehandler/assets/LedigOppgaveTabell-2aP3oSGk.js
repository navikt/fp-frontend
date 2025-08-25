import{u as B,r as d,j as e}from"./iframe-B9KoQGM0.js";import"./FlyttReservasjonModal-B35tj6vq.js";import{B as S}from"./BehandlingPollingTimoutModal-Cxwe6Gpx.js";import{H as x}from"./index.es-CLSw_-eh.js";import{T as w,C as O,S as N,O as E}from"./OppgaveLabels-Bg9Dm6C3.js";import{T as i}from"./Table-C1cOsVXS.js";import{H as T,V as y}from"./VStack-C4xViOeb.js";import{B as h,L as I}from"./nb_NO-C3IQ5_sL.js";import{S as L}from"./Checkmark-DtkYrHG8.js";import{u as _}from"./useMutation-N_FPDICk.js";import{b as K,c as D}from"./fplosSaksbehandlerApi-CWuH3MKX.js";import{M as o}from"./Loader-C2bZBRPU.js";var C=(n=>(n.PENDING="PENDING",n.COMPLETE="COMPLETE",n.DELAYED="DELAYED",n.CANCELLED="CANCELLED",n.HALTED="HALTED",n))(C||{});const M="_image_lxw0f_1",H="_fadeIn_lxw0f_9",k={image:M,fadeIn:H},f=({oppgave:n,reserverOppgave:t,erNyBehandling:l})=>{const r=B(),a=d.useRef(null),u=(s,g)=>{a.current?.contains(s.target)||g&&t(g)};return e.jsxs(i.Row,{onMouseDown:s=>u(s,n),onKeyDown:s=>u(s,n),className:l?k.fadeIn:void 0,children:[e.jsx(i.DataCell,{children:n.navn??"<navn>"}),e.jsx(i.DataCell,{children:e.jsxs(T,{align:"center",ref:a,wrap:!1,children:[e.jsx(h,{children:n.saksnummer}),e.jsx(w,{content:r.formatMessage({id:"LedigOppgaveRad.Saksnr"}),children:e.jsx(O,{activeIcon:e.jsx(L,{className:k.image,"aria-hidden":!0}),copyText:n.saksnummer,icon:e.jsx(N,{"aria-hidden":!0,className:k.image})})})]})}),e.jsx(i.DataCell,{children:e.jsx(E,{oppgave:n})}),e.jsx(i.DataCell,{children:n.opprettetTidspunkt&&e.jsx(x,{dateString:n.opprettetTidspunkt})})]},n.id)};f.__docgenInfo={description:"",methods:[],displayName:"LedigOppgaveRad",props:{oppgave:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
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
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"BehandlingType",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"AndreKriterierType"}],raw:"AndreKriterierType[]",required:!0}},{key:"oppgaveBehandlingStatus",value:{name:"OppgaveBehandlingStatus",required:!0}}]}}],raw:`Readonly<{
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
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
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
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
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
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"BehandlingType",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"AndreKriterierType"}],raw:"AndreKriterierType[]",required:!0}},{key:"oppgaveBehandlingStatus",value:{name:"OppgaveBehandlingStatus",required:!0}}]}}],raw:`Readonly<{
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
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}>`},name:"oppgave"}],return:{name:"void"}}},description:""},erNyBehandling:{required:!0,tsType:{name:"boolean"},description:""}}};const c=new Array,P=202,Y=1800,q="MAX_POLLING",U=n=>new Promise(t=>{setTimeout(t,n)}),G=n=>n.status!==void 0,j=async(n,t,l,r=0)=>{const a=await D(t);if(l()!==n)return[];if(G(a)){if(r===Y)throw new Error(q);const{pollIntervalMillis:u}=a,s=r<30?u:u+(r-30)*u;return await U(s),await j(n,t,l,r+1)}return a},z=async(n,t,l)=>{const r=await K(n,l);if(r.status===P){const a=r.headers.get("location");if(a===null)throw new Error("Location i response er ikke angitt");return await j(n,a,t)}throw new Error("Responderte ikke med 202 - Accepted")},F=n=>{const[t,l]=d.useState(c),[r,a]=d.useState(c),u=d.useRef(n),s=()=>u.current,{mutateAsync:g,data:v=c,isSuccess:b,error:R}=_({mutationFn:p=>z(n,s,p.oppgaveIder)});return d.useEffect(()=>{g({oppgaveIder:void 0})},[]),d.useEffect(()=>{b&&(l(v),t.length>0&&a(v.filter(p=>!t.some(A=>A.id===p.id))),g({oppgaveIder:v.map(p=>p.id).join(",")}))},[b]),d.useEffect(()=>(u.current=n,()=>{u.current=0}),[n]),{oppgaverTilBehandling:t,nyeBehandlinger:r,isMaxPollingAttemptsReached:R?.message===q}},V="_grayout_jkv01_1",X="_padding_jkv01_5",$="_tabell_jkv01_9",m={grayout:V,padding:X,tabell:$},J=({reserverOppgave:n,antallOppgaver:t=0,valgtSakslisteId:l})=>{const{oppgaverTilBehandling:r,nyeBehandlinger:a,isMaxPollingAttemptsReached:u}=F(l);return e.jsxs(y,{gap:"space-16",className:m.tabell,children:[u&&e.jsx(S,{}),e.jsx(y,{gap:"space-8",className:m.padding,children:e.jsxs(T,{gap:"space-8",children:[e.jsx(I,{size:"small",children:e.jsx(o,{id:"LedigOppgaveTabell.DineNesteSaker"})}),e.jsx(h,{size:"small",className:m.grayout,children:e.jsx(o,{id:"LedigOppgaveTabell.DineNesteSakerAntall",values:{totaltAntall:t}})})]})}),r.length===0&&e.jsx(h,{size:"small",className:m.padding,children:e.jsx(o,{id:"LedigOppgaveTabell.IngenOppgaver",tagName:"i"})}),r.length>0&&e.jsx(y,{gap:"space-16",children:e.jsxs(i,{size:"small",children:[e.jsx(i.Header,{children:e.jsxs(i.Row,{children:[e.jsx(i.ColumnHeader,{children:e.jsx(o,{id:"LedigOppgaveTabell.Soker"})}),e.jsx(i.ColumnHeader,{children:e.jsx(o,{id:"LedigOppgaveTabell.Sak"})}),e.jsx(i.ColumnHeader,{}),e.jsx(i.ColumnHeader,{children:e.jsx(o,{id:"LedigOppgaveTabell.BehandlingOpprettet"})})]})}),e.jsx(i.Body,{children:r.map(s=>e.jsx(f,{oppgave:s,reserverOppgave:n,erNyBehandling:a.some(g=>g.id===s.id)},s.id))})]})})]})};J.__docgenInfo={description:"",methods:[],displayName:"LedigOppgaveTabell",props:{reserverOppgave:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
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
}>`,required:!0}},{key:"saksnummer",value:{name:"string",required:!0}},{key:"personnummer",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"system",value:{name:"string",required:!0}},{key:"behandlingstype",value:{name:"BehandlingType",required:!0}},{key:"opprettetTidspunkt",value:{name:"string",required:!0}},{key:"behandlingsfrist",value:{name:"string",required:!0}},{key:"fagsakYtelseType",value:{name:"string",required:!0}},{key:"erTilSaksbehandling",value:{name:"boolean",required:!0}},{key:"behandlingId",value:{name:"string",required:!0}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"AndreKriterierType"}],raw:"AndreKriterierType[]",required:!0}},{key:"oppgaveBehandlingStatus",value:{name:"OppgaveBehandlingStatus",required:!0}}]}}],raw:`Readonly<{
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
  oppgaveBehandlingStatus: OppgaveBehandlingStatus;
}>`},name:"oppgave"}],return:{name:"void"}}},description:""},antallOppgaver:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},valgtSakslisteId:{required:!0,tsType:{name:"number"},description:""}}};export{C as A,J as L};
