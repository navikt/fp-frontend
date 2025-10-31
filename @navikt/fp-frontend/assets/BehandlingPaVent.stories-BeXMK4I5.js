import{h as a,A as s,H as r}from"./index-q9Ltb7D7.js";import{w as o}from"./iframe-B4DxnBM6.js";import{a as i}from"./alleKodeverk-BnsD7hyO.js";import{B as p}from"./BehandlingPaVent-BIWU5wvZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index.es-tty0uG0n.js";import"./index-BPMU_CJ5.js";import"./VStack-DMjf_s89.js";import"./index-knHBW6IZ.js";import"./index.es-C60ZLeKF.js";import"./CheckmarkCircleFill-DmekZBke.js";import"./ExclamationmarkTriangleFill-BKQ0lCZH.js";import"./Popover-DWn_y8G0.js";import"./Checkbox-C913kAQu.js";import"./SettPaVentModalIndex-T5BG1MuS.js";import"./message-D3aAnOjD.js";import"./aksjonspunktUtils-Bp6ewLMR.js";import"./behandlingApi-BQGIPHdG.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,t={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},E={title:"app/BehandlingPaVent",component:p,decorators:[o],parameters:{msw:{handlers:[a.post("https://www.test.com"+t.href,()=>new r(null,{status:200}))]}},args:{kodeverk:i,opneSokeside:d("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:"UTRED",type:"BT-002",behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:"OPPR",definisjon:s.UTGÅTT_5069}],links:[t]}}},e={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:"UTRED",type:"BT-002",behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:"OPPR",definisjon:s.AUTO_MANUELT_SATT_PÅ_VENT}],links:[t]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '121212',
      versjon: 1,
      behandlingPåVent: true,
      status: 'UTRED',
      type: 'BT-002',
      behandlingHenlagt: false,
      fristBehandlingPåVent: '2030-10-10',
      venteÅrsakKode: 'AVV_FODSEL',
      aksjonspunkt: [{
        status: 'OPPR',
        definisjon: AksjonspunktKode.UTGÅTT_5069
      } as Aksjonspunkt],
      links: [link]
    } as BehandlingFpSak
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '121212',
      versjon: 1,
      behandlingPåVent: true,
      status: 'UTRED',
      type: 'BT-002',
      behandlingHenlagt: false,
      fristBehandlingPåVent: '2030-10-10',
      venteÅrsakKode: 'AVV_FODSEL',
      aksjonspunkt: [{
        status: 'OPPR',
        definisjon: AksjonspunktKode.AUTO_MANUELT_SATT_PÅ_VENT
      } as Aksjonspunkt],
      links: [link]
    } as BehandlingFpSak
  }
}`,...e.parameters?.docs?.source}}};const v=["BehandlingSattPåVent","BehandlingSattManueltPåVent"];export{e as BehandlingSattManueltPåVent,n as BehandlingSattPåVent,v as __namedExportsOrder,E as default};
