import{r as g,R as n}from"./index-DogsOklH.js";import{u as f,O as S,L as q,F as k,a as I,H as E,V as y,R as p}from"./nb_NO-Tp50aoLI.js";import{b as T,a as A}from"./fplosRestApi-7cfjsQHL.js";import{P as R}from"./Panel-YruKRthN.js";const w="_panel_1j8jg_1",F="_colLeft_1j8jg_6",b={panel:w,colLeft:F},D=r=>r&&r instanceof Array?[...r].sort((a,t)=>a.navn.localeCompare(t.navn)):r,c=({avdelingensSaksbehandlere:r=[],valgtSaksliste:a,valgtAvdelingEnhet:t,hentAvdelingensSakslister:l})=>{const s=g.useMemo(()=>D(r),[r]),o=Math.ceil(s.length/2),v=s.slice(0,o),h=s.slice(o),{startRequest:d}=T.useRestApiRunner(A.LAGRE_SAKSLISTE_SAKSBEHANDLER),u=a.saksbehandlerIdenter.reduce((e,i)=>({...e,[i]:!0}),{}),m=f({defaultValues:u});return g.useEffect(()=>{m.reset(u)},[a.sakslisteId]),n.createElement(S,{formMethods:m},n.createElement(R,{className:b.panel},n.createElement(q,{size:"small"},n.createElement(k,{id:"SaksbehandlereForSakslisteForm.Saksbehandlere"})),n.createElement(I,{sixteenPx:!0}),s.length===0&&n.createElement(k,{id:"SaksbehandlereForSakslisteForm.IngenSaksbehandlere"}),s.length>0&&n.createElement(E,null,n.createElement(y,{gap:"2",className:b.colLeft},v.map(e=>n.createElement(p,{key:e.brukerIdent,name:e.brukerIdent,label:e.navn,onChange:i=>d({sakslisteId:a.sakslisteId,brukerIdent:e.brukerIdent,checked:i,avdelingEnhet:t}).then(()=>l({avdelingEnhet:t}))}))),n.createElement(y,{gap:"2"},h.map(e=>n.createElement(p,{key:e.brukerIdent,name:e.brukerIdent,label:e.navn,onChange:i=>d({sakslisteId:a.sakslisteId,brukerIdent:e.brukerIdent,checked:i,avdelingEnhet:t}).then(()=>l({avdelingEnhet:t}))}))))))},P=c;c.__docgenInfo={description:"SaksbehandlereForSakslisteForm",methods:[],displayName:"SaksbehandlereForSakslisteForm",props:{valgtSaksliste:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
  sistEndret: string;
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
  antallBehandlinger: number;
}`,signature:{properties:[{key:"sakslisteId",value:{name:"number",required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"behandlingTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"fagsakYtelseTyper",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sistEndret",value:{name:"string",required:!0}},{key:"sortering",value:{name:"signature",type:"object",raw:`{
  sorteringType: string;
  fra?: number;
  til?: number;
  fomDato?: string;
  tomDato?: string;
  erDynamiskPeriode: boolean;
}`,signature:{properties:[{key:"sorteringType",value:{name:"string",required:!0}},{key:"fra",value:{name:"number",required:!1}},{key:"til",value:{name:"number",required:!1}},{key:"fomDato",value:{name:"string",required:!1}},{key:"tomDato",value:{name:"string",required:!1}},{key:"erDynamiskPeriode",value:{name:"boolean",required:!0}}]},required:!1}},{key:"andreKriterier",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  andreKriterierType: string;
  inkluder: boolean;
}`,signature:{properties:[{key:"andreKriterierType",value:{name:"string",required:!0}},{key:"inkluder",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  andreKriterierType: string;
  inkluder: boolean;
}>`}],raw:"AnnetKriterie[]",required:!1}},{key:"saksbehandlerIdenter",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"antallBehandlinger",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  sakslisteId: number;
  navn?: string;
  behandlingTyper?: string[];
  fagsakYtelseTyper?: string[];
  sistEndret: string;
  sortering?: {
    sorteringType: string;
    fra?: number;
    til?: number;
    fomDato?: string;
    tomDato?: string;
    erDynamiskPeriode: boolean;
  };
  andreKriterier?: AnnetKriterie[];
  saksbehandlerIdenter: string[];
  antallBehandlinger: number;
}>`},description:""},avdelingensSaksbehandlere:{required:!1,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  brukerIdent: string;
  navn: string;
  avdelingsnavn: string[];
}`,signature:{properties:[{key:"brukerIdent",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"avdelingsnavn",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`Readonly<{
  brukerIdent: string;
  navn: string;
  avdelingsnavn: string[];
}>`}],raw:"Saksbehandler[]"},description:"",defaultValue:{value:"[]",computed:!1}},valgtAvdelingEnhet:{required:!0,tsType:{name:"string"},description:""},hentAvdelingensSakslister:{required:!0,tsType:{name:"signature",type:"function",raw:"(params: { avdelingEnhet: string }) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ avdelingEnhet: string }",signature:{properties:[{key:"avdelingEnhet",value:{name:"string",required:!0}}]}},name:"params"}],return:{name:"void"}}},description:""}}};export{P as S};
