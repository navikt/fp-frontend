import{d as k,j as g,P as R,f as O,l as u,m as v,R as i,F as E}from"./iframe-C4nd2HZa.js";import{F as o,q as s,r as m,s as H,p as M}from"./nb_NO-9jnVV-FZ.js";import"./index-DuadK1be.js";const S=a=>{const p=k({locale:"nb-NO",messages:a},O());return c=>g.jsx(R,{value:p,children:c()})},{action:l}=__STORYBOOK_MODULE_ACTIONS__,d={saksnummer:"1234567",fagsakYtelseType:E.FORELDREPENGER,bruker:{navn:"Kari Nordmann"},annenPart:{navn:"Ola Nordmann"},relasjonsRolleType:i.MOR,annenpartBehandling:{relasjonsRolleType:i.FAR},fagsakMarkeringer:[{fagsakMarkering:H.PRAKSIS_UTSETTELSE,kortNavn:"Utsettelse"}]},_=S(M),y={title:"prosess/prosess-vedtak-editor",component:o,decorators:[_,u,v],args:{mellomlagreOgHentPåNytt:l("button-click"),setVisFritekstRedigeringModal:l("button-click"),forhåndsvisBrev:l("button-click")},render:a=>g.jsx(o,{...a})},e={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:null}}},r={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:m}}},t={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:null},fagsak:d}},n={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:m},fagsak:d}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    brevOverstyring: {
      opprinneligHtml: mal,
      redigertHtml: null
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    brevOverstyring: {
      opprinneligHtml: mal,
      redigertHtml: redigertInnhold
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    brevOverstyring: {
      opprinneligHtml: mal,
      redigertHtml: null
    },
    fagsak: FAGSAK_MED_MARKERING_PRAKSIS_UTSETTELSE
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    brevOverstyring: {
      opprinneligHtml: mal,
      redigertHtml: redigertInnhold
    },
    fagsak: FAGSAK_MED_MARKERING_PRAKSIS_UTSETTELSE
  }
}`,...n.parameters?.docs?.source}}};const b=["MedOpprinneligHtml","MedRedigertHtml","MedOpprinneligHtmlOgMarkeringPraksisUtsettelse","MedRedigertHtmlOgMarkeringPraksisUtsettelse"];export{e as MedOpprinneligHtml,t as MedOpprinneligHtmlOgMarkeringPraksisUtsettelse,r as MedRedigertHtml,n as MedRedigertHtmlOgMarkeringPraksisUtsettelse,b as __namedExportsOrder,y as default};
