import{h as i,A as s,b as a,H as d}from"./index-BZ-Nz9PM.js";import{w as p,B as r,X as o}from"./iframe-WfxGlWqG.js";import{a as l}from"./alleKodeverk-DO07GSZv.js";import{B as u}from"./BehandlingPaVent-BJGZcKId.js";import"./preload-helper-PPVm8Dsz.js";import"./index.es-BnYJ4ZPs.js";import"./index.es-BVEzCIom.js";import"./VStack-BZttg7w0.js";import"./index-CeP6nMiI.js";import"./CheckmarkCircleFill-z-1_ijD1.js";import"./ExclamationmarkTriangleFill-D_wtg8Pd.js";import"./index-BudJExYL.js";import"./Popover-BYhZczPm.js";import"./Checkbox-Bqt00-Dn.js";import"./SettPaVentModalIndex-BlSFsVus.js";import"./venteArsakType-BJdSFL9e.js";import"./message-JchhC8i4.js";import"./behandlingApi-C21NN7_L.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,t={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},b={title:"app/BehandlingPaVent",component:u,decorators:[p],parameters:{msw:{handlers:[i.post("https://www.test.com"+t.href,()=>new d(null,{status:200}))]}},args:{kodeverk:l,opneSokeside:E("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:o.BEHANDLING_UTREDES,type:r.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:a.OPPRETTET,definisjon:s.ANNENPART_EØS}],links:[t]}}},e={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:o.BEHANDLING_UTREDES,type:r.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:a.OPPRETTET,definisjon:s.AUTO_MANUELT_SATT_PÅ_VENT}],links:[t]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const K=["BehandlingSattPåVent","BehandlingSattManueltPåVent"];export{e as BehandlingSattManueltPåVent,n as BehandlingSattPåVent,K as __namedExportsOrder,b as default};
