import{q as c,j as o,m as k,s as u,n as v,p as O}from"./iframe-2_2M4BNu.js";import{F as i,r as s,s as g,q as S}from"./nb_NO-DxWNucVM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dgXYccso.js";const H=a=>{const m=c({locale:"nb-NO",messages:a},u());return p=>o.jsx(k,{value:m,children:p()})},{action:l}=__STORYBOOK_MODULE_ACTIONS__,d={saksnummer:"1234567",fagsakYtelseType:"FP",bruker:{navn:"Kari Nordmann",fødselsnummer:"",kjønn:"-",fødselsdato:"",språkkode:"-"},annenPart:{navn:"Ola Nordmann",fødselsnummer:"",kjønn:"-",fødselsdato:"",språkkode:"-"},relasjonsRolleType:"MORA",annenpartBehandling:{relasjonsRolleType:"FARA",saksnummer:"",behandlingUuid:""},fagsakMarkeringer:[{fagsakMarkering:"PRAKSIS_UTSETTELSE",kortNavn:"Utsettelse"}],status:"OPPR",aktørId:"",sakSkalTilInfotrygd:!1,dekningsgrad:0,brukerManglerAdresse:!1,behandlingTypeKanOpprettes:[],behandlinger:[],historikkinnslag:[],notater:[],kontrollResultat:{kontrollresultat:"-",iayFaresignaler:void 0,medlFaresignaler:void 0,faresignalVurdering:void 0},harVergeIÅpenBehandling:!1},M=H(S),T={title:"prosess/prosess-vedtak-editor",component:i,decorators:[M,v,O],args:{mellomlagreOgHentPåNytt:l("button-click"),setVisFritekstRedigeringModal:l("button-click"),forhåndsvisBrev:l("button-click")},render:a=>o.jsx(i,{...a})},e={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:null}}},r={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:g}}},n={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:null},fagsak:d}},t={args:{brevOverstyring:{opprinneligHtml:s,redigertHtml:g},fagsak:d}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    brevOverstyring: {
      opprinneligHtml: mal,
      redigertHtml: null
    },
    fagsak: FAGSAK_MED_MARKERING_PRAKSIS_UTSETTELSE
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    brevOverstyring: {
      opprinneligHtml: mal,
      redigertHtml: redigertInnhold
    },
    fagsak: FAGSAK_MED_MARKERING_PRAKSIS_UTSETTELSE
  }
}`,...t.parameters?.docs?.source}}};const h=["MedOpprinneligHtml","MedRedigertHtml","MedOpprinneligHtmlOgMarkeringPraksisUtsettelse","MedRedigertHtmlOgMarkeringPraksisUtsettelse"];export{e as MedOpprinneligHtml,n as MedOpprinneligHtmlOgMarkeringPraksisUtsettelse,r as MedRedigertHtml,t as MedRedigertHtmlOgMarkeringPraksisUtsettelse,h as __namedExportsOrder,T as default};
