import{r as o,R as r}from"./index-DVXBtNgz.js";import{u as v,i as M,C as w,e as i,a as E,T as d,d as O,F as _,b,B as m,H as h,D as j}from"./nb_NO-OtGB-zeg.js";import{K as p}from"./Kjonnkode-C-fkzSiP.js";var S=function(e,l){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)l.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const D=o.forwardRef((e,l)=>{var{title:t,titleId:n}=e,a=S(e,["title","titleId"]);let s=v();return s=t?n||"title-"+s:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},a),t?o.createElement("title",{id:s},t):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m-4.58 7.998A1.75 1.75 0 0 1 9.154 8.25h5.694a1.75 1.75 0 0 1 1.733 1.998l-.837 5.858a.75.75 0 0 1-.743.644h-.75V21a.75.75 0 0 1-1.5 0v-4.25h-1.5V21a.75.75 0 0 1-1.5 0v-4.25H9a.75.75 0 0 1-.742-.644z",clipRule:"evenodd"}))});var N=function(e,l){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)l.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};const R=o.forwardRef((e,l)=>{var{title:t,titleId:n}=e,a=N(e,["title","titleId"]);let s=v();return s=t?n||"title-"+s:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:l,"aria-labelledby":s},a),t?o.createElement("title",{id:s},t):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M8.557 9.411a1.75 1.75 0 0 1 1.648-1.161h3.59c.74 0 1.4.465 1.648 1.161l2.263 6.337A.75.75 0 0 1 17 16.75h-2.75V21a.75.75 0 0 1-1.5 0v-4.25h-1.5V21a.75.75 0 0 1-1.5 0v-4.25H7a.75.75 0 0 1-.706-1.002z",clipRule:"evenodd"}))}),K="_displayInline_1qq68_1",F={displayInline:K},c=({erDod:e,alder:l,dodsdato:t})=>e?r.createElement(M,{size:"small",className:F.displayInline},t?r.createElement(w,{dateString:t}):r.createElement(i,{id:"Person.ManglerDodsdato"})):r.createElement("span",null,r.createElement(i,{id:"Person.Age",values:{age:l}}));c.defaultProps={dodsdato:""};c.__docgenInfo={description:`AlderVisning

Presentasjonskomponent. Definerer visning av personens alder. (Søker)`,methods:[],displayName:"AlderVisning",props:{erDod:{required:!0,tsType:{name:"boolean"},description:""},alder:{required:!0,tsType:{name:"number"},description:""},dodsdato:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};var u=(e=>(e.KODE6="SPSF",e.KODE7="SPFO",e.KLIENT_ADRESSE="KLIE",e.MILITAR="MILI",e.PENDLER="PEND",e.SVALBARD="SVAL",e.UTEN_FAST_BO="UFB",e.UTENRIKS_TJENST="URIK",e.UDEFINERT="UDEF",e))(u||{});const f=({erDod:e,diskresjonskode:l})=>{const t=E();return r.createElement(r.Fragment,null,e&&r.createElement(d,{variant:"info",title:t.formatMessage({id:"MerkePanel.DodTittel"})},r.createElement(i,{id:"MerkePanel.Dod"})),l===u.KODE6&&!e&&r.createElement(d,{variant:"error",title:t.formatMessage({id:"MerkePanel.Diskresjon6Tittel"})},r.createElement(i,{id:"MerkePanel.Diskresjon6"})),l===u.KODE7&&!e&&r.createElement(d,{variant:"warning",title:t.formatMessage({id:"MerkePanel.Diskresjon7Tittel"})},r.createElement(i,{id:"MerkePanel.Diskresjon7"})))};f.defaultProps={diskresjonskode:"",erDod:!1};f.__docgenInfo={description:`MerkePanel

Definerer visning av personens merkinger. (Søker)

Eksempel:
\`\`\`html
 <MerkePanel erDod={false} diskresjonskode="SPSF"  />
\`\`\``,methods:[],displayName:"MerkePanel",props:{erDod:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},diskresjonskode:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const q="_kvinneIcon_4m9mx_1",x="_MannIcon_4m9mx_7",g={kvinneIcon:q,MannIcon:x},I=({person:e})=>{const l=E(),{kjønn:t,dødsdato:n,diskresjonskode:a,fødselsdato:s,navn:k,fødselsnummer:y}=e,P=O().diff(s,"years");return r.createElement(_,null,r.createElement(b,null,r.createElement(m,null,t===p.KVINNE&&r.createElement(R,{className:g.kvinneIcon,title:l.formatMessage({id:"Person.ImageText"})}),t===p.MANN&&r.createElement(D,{className:g.MannIcon,title:l.formatMessage({id:"Person.ImageText"})})),r.createElement(m,null,r.createElement(h,{size:"small"},k," ",r.createElement(c,{erDod:!!n,alder:P,dodsdato:n})),r.createElement(j,null,y)),r.createElement(m,null,r.createElement(f,{erDod:!!n,diskresjonskode:a}))))},B=I;I.__docgenInfo={description:`PersonInfo

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
}>`},description:""}}};export{u as D,B as P};
