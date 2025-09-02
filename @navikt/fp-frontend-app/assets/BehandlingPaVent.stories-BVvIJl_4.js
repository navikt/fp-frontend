import{h as i,A as s,b as a,H as d}from"./index-CIWA3yCk.js";import{w as p,G as r,$ as o}from"./iframe-L_KgTyg_.js";import{a as l}from"./alleKodeverk-DO07GSZv.js";import{B as u}from"./BehandlingPaVent-XUVZAFG3.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-2qJrse3G.js";import"./index.es-CA41BrA4.js";import"./VStack-CJHqWZyg.js";import"./index-BBnDiHBR.js";import"./CheckmarkCircleFill-DFyQe3F2.js";import"./ExclamationmarkTriangleFill-CG-iL2Ba.js";import"./Tag-S-BQ71eq.js";import"./Popover-C4rKZ801.js";import"./Checkbox-BlSObiSd.js";import"./SettPaVentModalIndex-CnzMswe8.js";import"./venteArsakType-BJdSFL9e.js";import"./message-B69h1KM3.js";import"./behandlingApi-BN7wgr00.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,t={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},b={title:"app/BehandlingPaVent",component:u,decorators:[p],parameters:{msw:{handlers:[i.post("https://www.test.com"+t.href,()=>new d(null,{status:200}))]}},args:{kodeverk:l,opneSokeside:E("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:o.BEHANDLING_UTREDES,type:r.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:a.OPPRETTET,definisjon:s.ANNENPART_EØS}],links:[t]}}},e={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:o.BEHANDLING_UTREDES,type:r.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:a.OPPRETTET,definisjon:s.AUTO_MANUELT_SATT_PÅ_VENT}],links:[t]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '121212',
      versjon: 1,
      behandlingPåVent: true,
      status: BehandlingStatusEnum.BEHANDLING_UTREDES,
      type: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
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
      status: BehandlingStatusEnum.BEHANDLING_UTREDES,
      type: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
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
}`,...e.parameters?.docs?.source}}};const G=["BehandlingSattPåVent","BehandlingSattManueltPåVent"];export{e as BehandlingSattManueltPåVent,n as BehandlingSattPåVent,G as __namedExportsOrder,b as default};
