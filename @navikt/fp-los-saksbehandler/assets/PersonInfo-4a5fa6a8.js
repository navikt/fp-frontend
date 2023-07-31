import{j as e}from"./jsx-runtime-9c4ae004.js";import{e as P,V as v,F as a,a as c,n as l,d as x,E as k,o as I,A as d,Z as h,D as E}from"./nb_NO-b3de1938.js";import{A as y}from"./index.es-9080d8e0.js";import{H as D}from"./Heading-859765f8.js";const M=""+new URL("kvinne-c1935c66.svg",import.meta.url).href,F=""+new URL("mann-ee245563.svg",import.meta.url).href,N="_displayInline_1qq68_1",S={displayInline:N},m=({erDod:n,alder:s,dodsdato:r})=>n?e.jsx(P,{size:"small",className:S.displayInline,children:r?e.jsx(v,{dateString:r}):e.jsx(a,{id:"Person.ManglerDodsdato"})}):e.jsx("span",{children:e.jsx(a,{id:"Person.Age",values:{age:s}})});m.defaultProps={dodsdato:""};try{Aldervisning.displayName="Aldervisning",Aldervisning.__docgenInfo={description:`AlderVisning

Presentasjonskomponent. Definerer visning av personens alder. (Søker)`,displayName:"Aldervisning",props:{erDod:{defaultValue:null,description:"",name:"erDod",required:!0,type:{name:"boolean"}},alder:{defaultValue:null,description:"",name:"alder",required:!0,type:{name:"number"}},dodsdato:{defaultValue:{value:""},description:"",name:"dodsdato",required:!1,type:{name:"string"}}}}}catch{}var o=(n=>(n.KODE6="SPSF",n.KODE7="SPFO",n.KLIENT_ADRESSE="KLIE",n.MILITAR="MILI",n.PENDLER="PEND",n.SVALBARD="SVAL",n.UTEN_FAST_BO="UFB",n.UTENRIKS_TJENST="URIK",n.UDEFINERT="UDEF",n))(o||{});const u=({erDod:n,diskresjonskode:s})=>{const r=c();return e.jsxs(e.Fragment,{children:[n&&e.jsx(l,{variant:"info",title:r.formatMessage({id:"MerkePanel.DodTittel"}),children:e.jsx(a,{id:"MerkePanel.Dod"})}),s===o.KODE6&&!n&&e.jsx(l,{variant:"error",title:r.formatMessage({id:"MerkePanel.Diskresjon6Tittel"}),children:e.jsx(a,{id:"MerkePanel.Diskresjon6"})}),s===o.KODE7&&!n&&e.jsx(l,{variant:"warning",title:r.formatMessage({id:"MerkePanel.Diskresjon7Tittel"}),children:e.jsx(a,{id:"MerkePanel.Diskresjon7"})})]})};u.defaultProps={diskresjonskode:"",erDod:!1};try{Merkepanel.displayName="Merkepanel",Merkepanel.__docgenInfo={description:`MerkePanel

Definerer visning av personens merkinger. (Søker)

Eksempel:
\`\`\`html
 <MerkePanel erDod={false} diskresjonskode="SPSF"  />
\`\`\``,displayName:"Merkepanel",props:{erDod:{defaultValue:{value:"false"},description:"",name:"erDod",required:!1,type:{name:"boolean"}},diskresjonskode:{defaultValue:{value:""},description:"",name:"diskresjonskode",required:!1,type:{name:"string"}}}}}catch{}const A="_icon_af53y_1",V="_infoPlaceholder_af53y_7",K={icon:A,infoPlaceholder:V},t=({person:n})=>{const s=c(),{kjønn:r,dødsdato:i,diskresjonskode:f,fødselsdato:p,navn:g,fødselsnummer:_}=n,j=x().diff(p,"years");return e.jsx(k,{children:e.jsxs(I,{children:[e.jsx(d,{children:e.jsx(h,{className:K.icon,src:r===y.KVINNE?M:F,alt:s.formatMessage({id:"Person.ImageText"})})}),e.jsxs(d,{children:[e.jsxs(D,{size:"small",children:[g," ",e.jsx(m,{erDod:!!i,alder:j,dodsdato:i})]}),e.jsx(E,{size:"small",children:_})]}),e.jsx(d,{children:e.jsx(u,{erDod:!!i,diskresjonskode:f})})]})})},O=t;try{t.displayName="PersonInfo",t.__docgenInfo={description:`PersonInfo

Definerer visning av personen relatert til fagsak. (Søker)

Eksempel:
\`\`\`html
<PersonInfo person={navn:"Ola" alder:{40} fødselsnummer:"12345678910" erKvinne:false
erDod:false diskresjonskode:"6" dødsdato:"1990.03.03"} medPanel />
\`\`\``,displayName:"PersonInfo",props:{person:{defaultValue:null,description:"",name:"person",required:!0,type:{name:"Readonly<{ navn: string; kjønn: Kjønnkode; fødselsnummer: string; fødselsdato: string; dødsdato?: string | undefined; diskresjonskode?: string | undefined; }>"}}}}}catch{}export{o as D,O as P};
//# sourceMappingURL=PersonInfo-4a5fa6a8.js.map
