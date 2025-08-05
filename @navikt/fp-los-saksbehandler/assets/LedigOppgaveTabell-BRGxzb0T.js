import{u as x,r as g,j as e}from"./iframe-BwsLYjPf.js";import"./FlyttReservasjonModal-DORp-JXe.js";import{B as w}from"./BehandlingPollingTimoutModal-pB_H8vJm.js";import{H as B}from"./index.es-TpN-Pz0d.js";import{T as N,C as E,S as I,a as L,O as S}from"./OppgaveLabels-CqAEjY3t.js";import{T as i}from"./Table-DvLcK_q3.js";import{H as h,V as y}from"./VStack-BUJevhxp.js";import{B as b,L as O}from"./nb_NO-pbSJoPLE.js";import{u as _}from"./useMutation-CyzMhBIn.js";import{b as K,c as D}from"./fplosSaksbehandlerApi-D9NUVVUH.js";import{M as o}from"./Loader-B04EuSy-.js";var C=(n=>(n.PENDING="PENDING",n.COMPLETE="COMPLETE",n.DELAYED="DELAYED",n.CANCELLED="CANCELLED",n.HALTED="HALTED",n))(C||{});const M="_image_1ni5b_1",H="_fadeIn_1ni5b_9",k={image:M,fadeIn:H},f=({oppgave:n,reserverOppgave:t,erNyBehandling:l})=>{const r=x(),s=g.useRef(null),u=(a,d)=>{s.current?.contains(a.target)||d&&t(d)};return e.jsxs(i.Row,{onMouseDown:a=>u(a,n),onKeyDown:a=>u(a,n),className:l?k.fadeIn:void 0,children:[e.jsx(i.DataCell,{children:n.navn??"<navn>"}),e.jsx(i.DataCell,{children:e.jsxs(h,{align:"center",ref:s,wrap:!1,children:[e.jsx(b,{children:n.saksnummer}),e.jsx(N,{content:r.formatMessage({id:"LedigOppgaveRad.Saksnr"}),children:e.jsx(E,{activeIcon:e.jsx(L,{className:k.image,"aria-hidden":!0}),copyText:n.saksnummer,icon:e.jsx(I,{"aria-hidden":!0,className:k.image})})})]})}),e.jsx(i.DataCell,{children:e.jsx(S,{oppgave:n})}),e.jsx(i.DataCell,{children:n.opprettetTidspunkt&&e.jsx(B,{dateString:n.opprettetTidspunkt})})]},n.id)};f.__docgenInfo={description:"",methods:[],displayName:"LedigOppgaveRad",props:{oppgave:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},name:"oppgave"}],return:{name:"void"}}},description:""},erNyBehandling:{required:!0,tsType:{name:"boolean"},description:""}}};const c=new Array,P=202,Y=1800,q="MAX_POLLING",U=n=>new Promise(t=>{setTimeout(t,n)}),G=n=>n.status!==void 0,j=async(n,t,l,r=0)=>{const s=await D(t);if(l()!==n)return[];if(G(s)){if(r===Y)throw new Error(q);const{pollIntervalMillis:u}=s,a=r<30?u:u+(r-30)*u;return await U(a),await j(n,t,l,r+1)}return s},z=async(n,t,l)=>{const r=await K(n,l);if(r.status===P){const s=r.headers.get("location");if(s===null)throw new Error("Location i response er ikke angitt");return await j(n,s,t)}throw new Error("Responderte ikke med 202 - Accepted")},F=n=>{const[t,l]=g.useState(c),[r,s]=g.useState(c),u=g.useRef(n),a=()=>u.current,{mutateAsync:d,data:v=c,isSuccess:T,error:R}=_({mutationFn:p=>z(n,a,p.oppgaveIder)});return g.useEffect(()=>{d({oppgaveIder:void 0})},[]),g.useEffect(()=>{T&&(l(v),t.length>0&&s(v.filter(p=>!t.some(A=>A.id===p.id))),d({oppgaveIder:v.map(p=>p.id).join(",")}))},[T]),g.useEffect(()=>(u.current=n,()=>{u.current=0}),[n]),{oppgaverTilBehandling:t,nyeBehandlinger:r,isMaxPollingAttemptsReached:R?.message===q}},V="_grayout_15ljo_1",X="_padding_15ljo_5",$="_tabell_15ljo_9",m={grayout:V,padding:X,tabell:$},J=({reserverOppgave:n,antallOppgaver:t=0,valgtSakslisteId:l})=>{const{oppgaverTilBehandling:r,nyeBehandlinger:s,isMaxPollingAttemptsReached:u}=F(l);return e.jsxs(y,{gap:"space-16",className:m.tabell,children:[u&&e.jsx(w,{}),e.jsx(y,{gap:"space-8",className:m.padding,children:e.jsxs(h,{gap:"space-8",children:[e.jsx(O,{size:"small",children:e.jsx(o,{id:"LedigOppgaveTabell.DineNesteSaker"})}),e.jsx(b,{size:"small",className:m.grayout,children:e.jsx(o,{id:"LedigOppgaveTabell.DineNesteSakerAntall",values:{totaltAntall:t}})})]})}),r.length===0&&e.jsx(b,{size:"small",className:m.padding,children:e.jsx(o,{id:"LedigOppgaveTabell.IngenOppgaver",tagName:"i"})}),r.length>0&&e.jsx(y,{gap:"space-16",children:e.jsxs(i,{size:"small",children:[e.jsx(i.Header,{children:e.jsxs(i.Row,{children:[e.jsx(i.ColumnHeader,{children:e.jsx(o,{id:"LedigOppgaveTabell.Soker"})}),e.jsx(i.ColumnHeader,{children:e.jsx(o,{id:"LedigOppgaveTabell.Sak"})}),e.jsx(i.ColumnHeader,{}),e.jsx(i.ColumnHeader,{children:e.jsx(o,{id:"LedigOppgaveTabell.BehandlingOpprettet"})})]})}),e.jsx(i.Body,{children:r.map(a=>e.jsx(f,{oppgave:a,reserverOppgave:n,erNyBehandling:s.some(d=>d.id===a.id)},a.id))})]})})]})};J.__docgenInfo={description:"",methods:[],displayName:"LedigOppgaveTabell",props:{reserverOppgave:{required:!0,tsType:{name:"signature",type:"function",raw:"(oppgave: Oppgave) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
