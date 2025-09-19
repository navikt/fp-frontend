import{x as k,j as g,m as v,y as u,q as O,s as H,t as l}from"./iframe-B1z2ifr0.js";import{F as o,s,t as m,v as M,r as R}from"./nb_NO-BVa29fNf.js";import"./preload-helper-PPVm8Dsz.js";import"./index--2GQs4Gc.js";const S=a=>{const p=k({locale:"nb-NO",messages:a},u());return c=>g.jsx(v,{value:p,children:c()})},{action:i}=__STORYBOOK_MODULE_ACTIONS__,d={saksnummer:"1234567",fagsakYtelseType:"FP",bruker:{navn:"Kari Nordmann"},annenPart:{navn:"Ola Nordmann"},relasjonsRolleType:l.MOR,annenpartBehandling:{relasjonsRolleType:l.FAR},fagsakMarkeringer:[{fagsakMarkering:M.PRAKSIS_UTSETTELSE,kortNavn:"Utsettelse"}]},E=S(R),y={title:"prosess/prosess-vedtak-editor",component:o,decorators:[E,O,H],args:{mellomlagreOgHentPåNytt:i("button-click"),setVisFritekstRedigeringModal:i("button-click"),forhåndsvisBrev:i("button-click")},render:a=>g.jsx(o,{...a})},e={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:null}}},r={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:m}}},t={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:null},fagsak:d}},n={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:m},fagsak:d}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
