import{h as a,A as s,H as r}from"./index-QQVU0Fus.js";import{w as o}from"./iframe-MaBMuCwf.js";import{a as i}from"./alleKodeverk-DO07GSZv.js";import{B as d}from"./BehandlingPaVent-DpO-ymsG.js";import"./preload-helper-PPVm8Dsz.js";import"./index.es-DFKHAP4K.js";import"./index.es-DkmZy4wJ.js";import"./VStack-DM1id9RI.js";import"./index-D2sHIO1I.js";import"./CheckmarkCircleFill-BYFqo1l2.js";import"./ExclamationmarkTriangleFill-CKE6YLjb.js";import"./index-ChJxtaBu.js";import"./Popover-CD4lPGn6.js";import"./Checkbox-Bkb_vxSt.js";import"./SettPaVentModalIndex-DKFg4ECx.js";import"./venteArsakType-BJdSFL9e.js";import"./message-Cp8kE35n.js";import"./aksjonspunktUtils-Bp6ewLMR.js";import"./behandlingApi-CAre6Byb.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,t={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},v={title:"app/BehandlingPaVent",component:d,decorators:[o],parameters:{msw:{handlers:[a.post("https://www.test.com"+t.href,()=>new r(null,{status:200}))]}},args:{kodeverk:i,opneSokeside:p("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:"UTRED",type:"BT-002",behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:"OPPR",definisjon:s.ANNENPART_EØS}],links:[t]}}},e={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:"UTRED",type:"BT-002",behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:"OPPR",definisjon:s.AUTO_MANUELT_SATT_PÅ_VENT}],links:[t]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        definisjon: AksjonspunktKode.ANNENPART_EØS
      } as Aksjonspunkt],
      links: [link]
    } as Behandling
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
    } as Behandling
  }
}`,...e.parameters?.docs?.source}}};const R=["BehandlingSattPåVent","BehandlingSattManueltPåVent"];export{e as BehandlingSattManueltPåVent,n as BehandlingSattPåVent,R as __namedExportsOrder,v as default};
