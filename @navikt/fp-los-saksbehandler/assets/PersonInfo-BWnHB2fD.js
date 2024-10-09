import{j as t}from"./jsx-runtime-QvZ8i92b.js";import{d as h}from"./dayjs.min-BsYQKNhR.js";import{u as v,j as x,n as P,f as o,d as j,T as d,W as E,H as w,L as f,h as M,D as O}from"./nb_NO-xkhVygkw.js";import{K as p}from"./Kjonnkode-C-fkzSiP.js";import{r as i}from"./index-uubelm5h.js";var _=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)a.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const b=i.forwardRef((e,a)=>{var{title:r,titleId:n}=e,s=_(e,["title","titleId"]);let l=v();return l=r?n||"title-"+l:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":l},s),r?i.createElement("title",{id:l},r):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-4.58 7.998A1.75 1.75 0 0 1 9.154 8.25h5.694a1.75 1.75 0 0 1 1.733 1.998l-.837 5.858a.75.75 0 0 1-.743.644h-.75V21a.75.75 0 0 1-1.5 0v-4.25h-1.5V21a.75.75 0 0 1-1.5 0v-4.25H9a.75.75 0 0 1-.742-.644z",clipRule:"evenodd"}))});var S=function(e,a){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)a.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};const D=i.forwardRef((e,a)=>{var{title:r,titleId:n}=e,s=S(e,["title","titleId"]);let l=v();return l=r?n||"title-"+l:void 0,i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":l},s),r?i.createElement("title",{id:l},r):null,i.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.557 9.411a1.75 1.75 0 0 1 1.648-1.161h3.59c.74 0 1.4.465 1.648 1.161l2.263 6.337A.75.75 0 0 1 17 16.75h-2.75V21a.75.75 0 0 1-1.5 0v-4.25h-1.5V21a.75.75 0 0 1-1.5 0v-4.25H7a.75.75 0 0 1-.706-1.002z",clipRule:"evenodd"}))}),N="_displayInline_1qq68_1",K={displayInline:N},u=({erDod:e,alder:a,dodsdato:r})=>e?t.jsx(x,{size:"small",className:K.displayInline,children:r?t.jsx(P,{dateString:r}):t.jsx(o,{id:"Person.ManglerDodsdato"})}):t.jsx("span",{children:t.jsx(o,{id:"Person.Age",values:{age:a}})});u.defaultProps={dodsdato:""};u.__docgenInfo={description:`AlderVisning

Presentasjonskomponent. Definerer visning av personens alder. (Søker)`,methods:[],displayName:"AlderVisning",props:{erDod:{required:!0,tsType:{name:"boolean"},description:""},alder:{required:!0,tsType:{name:"number"},description:""},dodsdato:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};var m=(e=>(e.KODE6="SPSF",e.KODE7="SPFO",e.KLIENT_ADRESSE="KLIE",e.MILITAR="MILI",e.PENDLER="PEND",e.SVALBARD="SVAL",e.UTEN_FAST_BO="UFB",e.UTENRIKS_TJENST="URIK",e.UDEFINERT="UDEF",e))(m||{});const c=({erDod:e,diskresjonskode:a})=>{const r=j();return t.jsxs(t.Fragment,{children:[e&&t.jsx(d,{variant:"info",title:r.formatMessage({id:"MerkePanel.DodTittel"}),children:t.jsx(o,{id:"MerkePanel.Dod"})}),a===m.KODE6&&!e&&t.jsx(d,{variant:"error",title:r.formatMessage({id:"MerkePanel.Diskresjon6Tittel"}),children:t.jsx(o,{id:"MerkePanel.Diskresjon6"})}),a===m.KODE7&&!e&&t.jsx(d,{variant:"warning",title:r.formatMessage({id:"MerkePanel.Diskresjon7Tittel"}),children:t.jsx(o,{id:"MerkePanel.Diskresjon7"})})]})};c.defaultProps={diskresjonskode:"",erDod:!1};c.__docgenInfo={description:`MerkePanel

Definerer visning av personens merkinger. (Søker)

Eksempel:
\`\`\`html
 <MerkePanel erDod={false} diskresjonskode="SPSF"  />
\`\`\``,methods:[],displayName:"MerkePanel",props:{erDod:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},diskresjonskode:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const R="_kvinneIcon_4m9mx_1",q="_MannIcon_4m9mx_7",g={kvinneIcon:R,MannIcon:q},A=({person:e})=>{const a=j(),{kjønn:r,dødsdato:n,diskresjonskode:s,fødselsdato:l,navn:I,fødselsnummer:k}=e,y=h().diff(l,"years");return t.jsx(E,{children:t.jsxs(w,{children:[t.jsxs(f,{children:[r===p.KVINNE&&t.jsx(D,{className:g.kvinneIcon,title:a.formatMessage({id:"Person.ImageText"})}),r===p.MANN&&t.jsx(b,{className:g.MannIcon,title:a.formatMessage({id:"Person.ImageText"})})]}),t.jsxs(f,{children:[t.jsxs(M,{size:"small",children:[I," ",t.jsx(u,{erDod:!!n,alder:y,dodsdato:n})]}),t.jsx(O,{children:k})]}),t.jsx(f,{children:t.jsx(c,{erDod:!!n,diskresjonskode:s})})]})})};A.__docgenInfo={description:`PersonInfo

Definerer visning av personen relatert til fagsak. (Søker)

Eksempel:
\`\`\`html
<PersonInfo person={navn:"Ola" alder:{40} fødselsnummer:"12345678910" erKvinne:false
erDod:false diskresjonskode:"6" dødsdato:"1990.03.03"} medPanel />
\`\`\``,methods:[],displayName:"PersonInfo",props:{person:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  kjønn: Kjønnkode;
  fødselsnummer: string;
  fødselsdato: string;
  dødsdato?: string;
  diskresjonskode?: string;
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"unknown[unknown]",raw:"(typeof KjønnkodeEnum)[keyof typeof KjønnkodeEnum]",required:!0}},{key:"fødselsnummer",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  navn: string;
  kjønn: Kjønnkode;
  fødselsnummer: string;
  fødselsdato: string;
  dødsdato?: string;
  diskresjonskode?: string;
}>`},description:""}}};export{m as D,A as P};
