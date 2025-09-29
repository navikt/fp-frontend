import{h as o,A as s,b as a,H as i}from"./index-BuAb35cs.js";import{w as d,B as r}from"./iframe-CsBD3T2M.js";import{a as p}from"./alleKodeverk-DO07GSZv.js";import{B as l}from"./BehandlingPaVent-CBV2GB9-.js";import"./preload-helper-PPVm8Dsz.js";import"./index.es-DDM2ueLX.js";import"./index.es-DhJcGz6z.js";import"./VStack-D90Uj1HC.js";import"./index-CmpEquNz.js";import"./CheckmarkCircleFill-CpyCiQqF.js";import"./ExclamationmarkTriangleFill-BcKqijKy.js";import"./index-ytCJHYfH.js";import"./Popover-CmKg7-AU.js";import"./Checkbox-CollbgTs.js";import"./SettPaVentModalIndex-CYLXZKUf.js";import"./venteArsakType-BJdSFL9e.js";import"./message-DllOlMsz.js";import"./behandlingApi-B_EUC-Rk.js";const{action:u}=__STORYBOOK_MODULE_ACTIONS__,e={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},D={title:"app/BehandlingPaVent",component:l,decorators:[d],parameters:{msw:{handlers:[o.post("https://www.test.com"+e.href,()=>new i(null,{status:200}))]}},args:{kodeverk:p,opneSokeside:u("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:r.BEHANDLING_UTREDES,type:"BT-002",behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:a.OPPRETTET,definisjon:s.ANNENPART_EØS}],links:[e]}}},t={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:r.BEHANDLING_UTREDES,type:"BT-002",behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:a.OPPRETTET,definisjon:s.AUTO_MANUELT_SATT_PÅ_VENT}],links:[e]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '121212',
      versjon: 1,
      behandlingPåVent: true,
      status: BehandlingStatusEnum.BEHANDLING_UTREDES,
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '121212',
      versjon: 1,
      behandlingPåVent: true,
      status: BehandlingStatusEnum.BEHANDLING_UTREDES,
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
}`,...t.parameters?.docs?.source}}};const v=["BehandlingSattPåVent","BehandlingSattManueltPåVent"];export{t as BehandlingSattManueltPåVent,n as BehandlingSattPåVent,v as __namedExportsOrder,D as default};
