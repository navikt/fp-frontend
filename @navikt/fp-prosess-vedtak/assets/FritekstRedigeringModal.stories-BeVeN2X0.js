import{x as k,j as g,l as R,y as v,p as O,q as u,t as l,F as E}from"./iframe-ByDFFNS8.js";import{F as o,s,t as m,v as H,r as M}from"./nb_NO-z7SMYFVS.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DkuTmjzB.js";const S=a=>{const p=k({locale:"nb-NO",messages:a},v());return c=>g.jsx(R,{value:p,children:c()})},{action:i}=__STORYBOOK_MODULE_ACTIONS__,d={saksnummer:"1234567",fagsakYtelseType:E.FORELDREPENGER,bruker:{navn:"Kari Nordmann"},annenPart:{navn:"Ola Nordmann"},relasjonsRolleType:l.MOR,annenpartBehandling:{relasjonsRolleType:l.FAR},fagsakMarkeringer:[{fagsakMarkering:H.PRAKSIS_UTSETTELSE,kortNavn:"Utsettelse"}]},_=S(M),b={title:"prosess/prosess-vedtak-editor",component:o,decorators:[_,O,u],args:{mellomlagreOgHentPåNytt:i("button-click"),setVisFritekstRedigeringModal:i("button-click"),forhåndsvisBrev:i("button-click")},render:a=>g.jsx(o,{...a})},e={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:null}}},r={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:m}}},t={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:null},fagsak:d}},n={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:m},fagsak:d}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const K=["MedOpprinneligHtml","MedRedigertHtml","MedOpprinneligHtmlOgMarkeringPraksisUtsettelse","MedRedigertHtmlOgMarkeringPraksisUtsettelse"];export{e as MedOpprinneligHtml,t as MedOpprinneligHtmlOgMarkeringPraksisUtsettelse,r as MedRedigertHtml,n as MedRedigertHtmlOgMarkeringPraksisUtsettelse,K as __namedExportsOrder,b as default};
