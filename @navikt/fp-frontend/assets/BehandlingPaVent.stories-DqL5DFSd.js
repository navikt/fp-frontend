import{h as a,A as s,H as r}from"./index-PgzdEw57.js";import{w as o}from"./iframe-Bi6mcpW9.js";import{a as i}from"./alleKodeverk-DO07GSZv.js";import{B as d}from"./BehandlingPaVent-DiLO0v9A.js";import"./preload-helper-PPVm8Dsz.js";import"./index.es-CrVP4_UL.js";import"./index.es-BEu-da46.js";import"./VStack-BAxRV9hT.js";import"./index-vot4iPvv.js";import"./CheckmarkCircleFill-CnGG0ji5.js";import"./ExclamationmarkTriangleFill-DNO7kqE6.js";import"./index-CDzQigev.js";import"./Popover-BzelVTnb.js";import"./Checkbox-CJtvu_AA.js";import"./SettPaVentModalIndex-Dfcfm_Hv.js";import"./venteArsakType-BJdSFL9e.js";import"./message-kKNzudLU.js";import"./aksjonspunktUtils-Bp6ewLMR.js";import"./behandlingApi-D-BAjjYw.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,t={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},v={title:"app/BehandlingPaVent",component:d,decorators:[o],parameters:{msw:{handlers:[a.post("https://www.test.com"+t.href,()=>new r(null,{status:200}))]}},args:{kodeverk:i,opneSokeside:p("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:"UTRED",type:"BT-002",behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:"OPPR",definisjon:s.ANNENPART_EØS}],links:[t]}}},e={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:"UTRED",type:"BT-002",behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:"OPPR",definisjon:s.AUTO_MANUELT_SATT_PÅ_VENT}],links:[t]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
