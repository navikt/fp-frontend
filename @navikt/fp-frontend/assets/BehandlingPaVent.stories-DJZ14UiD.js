import{h as r,A as s,b as a,H as o}from"./index-BSz0lxou.js";import{w as i}from"./iframe-DxBGhe85.js";import{a as p}from"./alleKodeverk-DO07GSZv.js";import{B as d}from"./BehandlingPaVent-BQzZw8cQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index.es-DVY-DUkI.js";import"./index.es-YIde8VmG.js";import"./VStack-CgP3hDag.js";import"./index-hzDmciyS.js";import"./CheckmarkCircleFill-jDrr5SGv.js";import"./ExclamationmarkTriangleFill-DhGA7rwZ.js";import"./index-CMBgkY4m.js";import"./Popover-DiT05_YL.js";import"./Checkbox-BedYdOnW.js";import"./SettPaVentModalIndex-Cu6SZgbG.js";import"./venteArsakType-BJdSFL9e.js";import"./message-CMqikXS5.js";import"./behandlingApi-pKQPx4dR.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,t={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},v={title:"app/BehandlingPaVent",component:d,decorators:[i],parameters:{msw:{handlers:[r.post("https://www.test.com"+t.href,()=>new o(null,{status:200}))]}},args:{kodeverk:p,opneSokeside:l("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:"UTRED",type:"BT-002",behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:a.OPPRETTET,definisjon:s.ANNENPART_EØS}],links:[t]}}},e={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:"UTRED",type:"BT-002",behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:a.OPPRETTET,definisjon:s.AUTO_MANUELT_SATT_PÅ_VENT}],links:[t]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
