import{s as k,j as g,P as u,t as v,n as O,p as R,q as i}from"./iframe-Ch5KvoGx.js";import{F as o,r as t,s as d,q as S}from"./nb_NO-B5UeYNZk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-XSVtHKh4.js";const H=a=>{const p=k({locale:"nb-NO",messages:a},v());return c=>g.jsx(u,{value:p,children:c()})},{action:l}=__STORYBOOK_MODULE_ACTIONS__,m={saksnummer:"1234567",fagsakYtelseType:"FP",bruker:{navn:"Kari Nordmann",fødselsnummer:"",kjønn:"-",fødselsdato:"",språkkode:"-"},annenPart:{navn:"Ola Nordmann",fødselsnummer:"",kjønn:"-",fødselsdato:"",språkkode:"-"},relasjonsRolleType:i.MOR,annenpartBehandling:{relasjonsRolleType:i.FAR,saksnummer:"",behandlingUuid:""},fagsakMarkeringer:[{fagsakMarkering:"PRAKSIS_UTSETTELSE",kortNavn:"Utsettelse"}],status:"OPPR",aktørId:"",sakSkalTilInfotrygd:!1,dekningsgrad:0,brukerManglerAdresse:!1,behandlingTypeKanOpprettes:[],behandlinger:[],historikkinnslag:[],notater:[],kontrollResultat:{kontrollresultat:"-",iayFaresignaler:void 0,medlFaresignaler:void 0,faresignalVurdering:void 0},harVergeIÅpenBehandling:!1},M=H(S),h={title:"prosess/prosess-vedtak-editor",component:o,decorators:[M,O,R],args:{mellomlagreOgHentPåNytt:l("button-click"),setVisFritekstRedigeringModal:l("button-click"),forhåndsvisBrev:l("button-click")},render:a=>g.jsx(o,{...a})},e={args:{brevOverstyring:{opprinneligHtml:t,redigertHtml:null}}},r={args:{brevOverstyring:{opprinneligHtml:t,redigertHtml:d}}},n={args:{brevOverstyring:{opprinneligHtml:t,redigertHtml:null},fagsak:m}},s={args:{brevOverstyring:{opprinneligHtml:t,redigertHtml:d},fagsak:m}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    brevOverstyring: {
      opprinneligHtml: mal,
      redigertHtml: redigertInnhold
    },
    fagsak: FAGSAK_MED_MARKERING_PRAKSIS_UTSETTELSE
  }
}`,...s.parameters?.docs?.source}}};const P=["MedOpprinneligHtml","MedRedigertHtml","MedOpprinneligHtmlOgMarkeringPraksisUtsettelse","MedRedigertHtmlOgMarkeringPraksisUtsettelse"];export{e as MedOpprinneligHtml,n as MedOpprinneligHtmlOgMarkeringPraksisUtsettelse,r as MedRedigertHtml,s as MedRedigertHtmlOgMarkeringPraksisUtsettelse,P as __namedExportsOrder,h as default};
