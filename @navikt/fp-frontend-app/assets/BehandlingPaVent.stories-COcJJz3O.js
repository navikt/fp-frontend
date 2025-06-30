import{h as k,A as p,b as l,H as E}from"./index-BA7NrTki.js";import{w as S,B as u,E as g}from"./iframe-C9QwebDF.js";import{a as h}from"./alleKodeverk-DO07GSZv.js";import{B as T}from"./BehandlingPaVent-Ck_k7wZJ.js";import"./index.es-CyVCs3Fw.js";import"./index.es-DdjAZTEe.js";import"./VStack-CReCDfuq.js";import"./index-BhKvdLHD.js";import"./CheckmarkCircleFill-CFowuZQp.js";import"./ExclamationmarkTriangleFill-CMjeCd9A.js";import"./ChevronDown-CPkznlYW.js";import"./Tag-D77GF3zg.js";import"./Popover-Dc9SWGsW.js";import"./Checkbox-IZVqmxzH.js";import"./SettPaVentModalIndex-DNOQQgll.js";import"./venteArsakType-BJdSFL9e.js";import"./message-DRdE0WCK.js";import"./behandlingApi-10PurFxO.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,t={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},U={title:"app/BehandlingPaVent",component:T,decorators:[S],parameters:{msw:{handlers:[k.post("https://www.test.com"+t.href,()=>new E(null,{status:200}))]}},args:{kodeverk:h,opneSokeside:m("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:g.BEHANDLING_UTREDES,type:u.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:l.OPPRETTET,definisjon:p.ANNENPART_EØS}],links:[t]}}},e={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:g.BEHANDLING_UTREDES,type:u.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:l.OPPRETTET,definisjon:p.AUTO_MANUELT_SATT_PÅ_VENT}],links:[t]}}};var s,a,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(r=(a=n.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var o,i,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const y=["BehandlingSattPåVent","BehandlingSattManueltPåVent"];export{e as BehandlingSattManueltPåVent,n as BehandlingSattPåVent,y as __namedExportsOrder,U as default};
