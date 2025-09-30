import{h as r,A as s,b as a,H as o}from"./index-CeZmOR9h.js";import{w as i}from"./iframe-99QkHxNs.js";import{a as p}from"./alleKodeverk-DO07GSZv.js";import{B as d}from"./BehandlingPaVent-DA-MDl6B.js";import"./preload-helper-PPVm8Dsz.js";import"./index.es-J4JZl0hn.js";import"./index.es-BKtVa7i8.js";import"./VStack-TV2iDI3H.js";import"./index-eZ1bLO9q.js";import"./CheckmarkCircleFill-BDs9bSwA.js";import"./ExclamationmarkTriangleFill-Cz_Lh6tM.js";import"./index-sbT3ykXl.js";import"./Popover-Bz8GMIIk.js";import"./Checkbox-BBxX5eOU.js";import"./SettPaVentModalIndex-Cz8O9Rlf.js";import"./venteArsakType-BJdSFL9e.js";import"./message-CTefA-ZQ.js";import"./behandlingApi-D0oUD_9c.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,t={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},v={title:"app/BehandlingPaVent",component:d,decorators:[i],parameters:{msw:{handlers:[r.post("https://www.test.com"+t.href,()=>new o(null,{status:200}))]}},args:{kodeverk:p,opneSokeside:l("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:"UTRED",type:"BT-002",behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:a.OPPRETTET,definisjon:s.ANNENPART_EØS}],links:[t]}}},e={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:"UTRED",type:"BT-002",behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:a.OPPRETTET,definisjon:s.AUTO_MANUELT_SATT_PÅ_VENT}],links:[t]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        status: AksjonspunktStatus.OPPRETTET,
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
        status: AksjonspunktStatus.OPPRETTET,
        definisjon: AksjonspunktKode.AUTO_MANUELT_SATT_PÅ_VENT
      } as Aksjonspunkt],
      links: [link]
    } as Behandling
  }
}`,...e.parameters?.docs?.source}}};const R=["BehandlingSattPåVent","BehandlingSattManueltPåVent"];export{e as BehandlingSattManueltPåVent,n as BehandlingSattPåVent,R as __namedExportsOrder,v as default};
