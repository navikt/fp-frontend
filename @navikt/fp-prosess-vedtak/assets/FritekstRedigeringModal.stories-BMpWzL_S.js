import{q as c,j as o,P as k,t as u,n as S,p as M}from"./iframe-D3YD3EeK.js";import{r as i,F as l,s as d,q as O}from"./nb_NO-DnNEE0As.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ntx2BCWN.js";const R=n=>{const m=c({locale:"nb-NO",messages:n},u());return p=>o.jsx(k,{value:m,children:p()})},{action:a}=__STORYBOOK_MODULE_ACTIONS__,g={saksnummer:"1234567",fagsakYtelseType:"FP",bruker:{navn:"Kari Nordmann",fødselsnummer:"",kjønn:"-",fødselsdato:"",språkkode:"-"},annenPart:{navn:"Ola Nordmann",fødselsnummer:"",kjønn:"-",fødselsdato:"",språkkode:"-"},relasjonsRolleType:"MORA",annenpartBehandling:{relasjonsRolleType:"FARA",saksnummer:"",behandlingUuid:""},fagsakMarkeringer:[{fagsakMarkering:"PRAKSIS_UTSETTELSE",kortNavn:"Utsettelse"}],status:"OPPR",aktørId:"",sakSkalTilInfotrygd:!1,dekningsgrad:0,brukerManglerAdresse:!1,behandlingTypeKanOpprettes:[],behandlinger:[],historikkinnslag:[],notater:[],kontrollResultat:{kontrollresultat:"-",iayFaresignaler:void 0,medlFaresignaler:void 0,faresignalVurdering:void 0},harVergeIÅpenBehandling:!1},v=R(O),T={title:"prosess/prosess-vedtak-editor",component:l,decorators:[v,S,M],args:{mellomlagreOgHentPåNytt:a("button-click"),setVisFritekstRedigeringModal:a("button-click"),forhåndsvisBrev:a("button-click"),brevOverstyring:{opprinneligHtml:i,redigertHtml:null}},render:n=>o.jsx(l,{...n})},e={},r={args:{brevOverstyring:{opprinneligHtml:i,redigertHtml:d}}},s={args:{fagsak:g}},t={args:{brevOverstyring:{opprinneligHtml:i,redigertHtml:d},fagsak:g}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    brevOverstyring: {
      opprinneligHtml: mal,
      redigertHtml: redigertInnhold
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    fagsak: FAGSAK_MED_MARKERING_PRAKSIS_UTSETTELSE
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    brevOverstyring: {
      opprinneligHtml: mal,
      redigertHtml: redigertInnhold
    },
    fagsak: FAGSAK_MED_MARKERING_PRAKSIS_UTSETTELSE
  }
}`,...t.parameters?.docs?.source}}};const h=["MedOpprinneligHtml","MedRedigertHtml","MedOpprinneligHtmlOgMarkeringPraksisUtsettelse","MedRedigertHtmlOgMarkeringPraksisUtsettelse"];export{e as MedOpprinneligHtml,s as MedOpprinneligHtmlOgMarkeringPraksisUtsettelse,r as MedRedigertHtml,t as MedRedigertHtmlOgMarkeringPraksisUtsettelse,h as __namedExportsOrder,T as default};
