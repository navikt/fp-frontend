import{h as a,A as s,H as r}from"./index-CtYb45BY.js";import{w as o}from"./iframe-BYsWLr_s.js";import{a as i}from"./alleKodeverk-C9CgZbBn.js";import{B as d}from"./BehandlingPaVent-C7PEh8DV.js";import"./preload-helper-PPVm8Dsz.js";import"./index.es-CAjsXMp1.js";import"./index.es-BgFhHOOl.js";import"./VStack-B-FdCJw0.js";import"./index-Bg9AqU8i.js";import"./CheckmarkCircleFill-B22qy0Xe.js";import"./ExclamationmarkTriangleFill-CN6hSfM_.js";import"./index-DHBcBcK-.js";import"./Popover-BUT48Zmj.js";import"./Checkbox-C-ye5o_B.js";import"./SettPaVentModalIndex-CjrBwm6d.js";import"./message-CrGzTfFJ.js";import"./aksjonspunktUtils-Bp6ewLMR.js";import"./behandlingApi-ux9dIp47.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,t={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},E={title:"app/BehandlingPaVent",component:d,decorators:[o],parameters:{msw:{handlers:[a.post("https://www.test.com"+t.href,()=>new r(null,{status:200}))]}},args:{kodeverk:i,opneSokeside:p("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:"UTRED",type:"BT-002",behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:"OPPR",definisjon:s.UTGÅTT_5069}],links:[t]}}},e={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:"UTRED",type:"BT-002",behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:"OPPR",definisjon:s.AUTO_MANUELT_SATT_PÅ_VENT}],links:[t]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const v=["BehandlingSattPåVent","BehandlingSattManueltPåVent"];export{e as BehandlingSattManueltPåVent,n as BehandlingSattPåVent,v as __namedExportsOrder,E as default};
