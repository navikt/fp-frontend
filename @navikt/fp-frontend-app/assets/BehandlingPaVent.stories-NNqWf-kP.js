import{h as i,A as s,b as a,H as d}from"./index-CoIGGqyg.js";import{w as p,I as r,a0 as o}from"./iframe-BBDSkZ_h.js";import{a as l}from"./alleKodeverk-DO07GSZv.js";import{B as u}from"./BehandlingPaVent-AlAubpo6.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-BqsLNGza.js";import"./index.es-DsGrfFWK.js";import"./VStack-Cc-tSHU5.js";import"./index-BzeoCWNC.js";import"./CheckmarkCircleFill-BkOEoaFW.js";import"./ExclamationmarkTriangleFill-CAjciOLG.js";import"./ChevronDown-etSKI0N9.js";import"./Tag-c6aQ5Wbu.js";import"./Popover-BoZVjCe7.js";import"./Checkbox-CMTHlPcK.js";import"./SettPaVentModalIndex-Cj2hF15w.js";import"./venteArsakType-BJdSFL9e.js";import"./message-CPNu86qJ.js";import"./behandlingApi-23xNnS3K.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,t={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},K={title:"app/BehandlingPaVent",component:u,decorators:[p],parameters:{msw:{handlers:[i.post("https://www.test.com"+t.href,()=>new d(null,{status:200}))]}},args:{kodeverk:l,opneSokeside:g("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:o.BEHANDLING_UTREDES,type:r.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:a.OPPRETTET,definisjon:s.ANNENPART_EØS}],links:[t]}}},e={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:o.BEHANDLING_UTREDES,type:r.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:a.OPPRETTET,definisjon:s.AUTO_MANUELT_SATT_PÅ_VENT}],links:[t]}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '121212',
      versjon: 1,
      behandlingPåVent: true,
      status: BehandlingStatus.BEHANDLING_UTREDES,
      type: BehandlingType.FORSTEGANGSSOKNAD,
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
      status: BehandlingStatus.BEHANDLING_UTREDES,
      type: BehandlingType.FORSTEGANGSSOKNAD,
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
}`,...e.parameters?.docs?.source}}};const v=["BehandlingSattPåVent","BehandlingSattManueltPåVent"];export{e as BehandlingSattManueltPåVent,n as BehandlingSattPåVent,v as __namedExportsOrder,K as default};
