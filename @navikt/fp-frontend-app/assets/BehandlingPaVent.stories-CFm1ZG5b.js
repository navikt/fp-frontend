import{h as k,A as p,b as l,H as S}from"./index-CGLa1oUP.js";import{w as h,G as u,a0 as g}from"./iframe-ChI6N3ik.js";import{a as E}from"./alleKodeverk-DO07GSZv.js";import{B as T}from"./BehandlingPaVent-CMK_1mbv.js";import"./index.es-BR17xS1L.js";import"./index.es-DEhQhvTe.js";import"./VStack-TQqSnfYV.js";import"./index-gbI6FPvb.js";import"./CheckmarkCircleFill-BK99gH2O.js";import"./ExclamationmarkTriangleFill-CVA5kZks.js";import"./ChevronDown-Yb-L2MAG.js";import"./Tag-DDh_Hn0h.js";import"./Popover-BJ9zMi1c.js";import"./Checkbox-Dy5TX6YM.js";import"./SettPaVentModalIndex-CotIGbYe.js";import"./venteArsakType-BJdSFL9e.js";import"./message-a_P0KCru.js";import"./behandlingApi-BCdz6PRD.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,t={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},U={title:"app/BehandlingPaVent",component:T,decorators:[h],parameters:{msw:{handlers:[k.post("https://www.test.com"+t.href,()=>new S(null,{status:200}))]}},args:{kodeverk:E,opneSokeside:m("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:g.BEHANDLING_UTREDES,type:u.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:l.OPPRETTET,definisjon:p.ANNENPART_EØS}],links:[t]}}},e={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:g.BEHANDLING_UTREDES,type:u.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:l.OPPRETTET,definisjon:p.AUTO_MANUELT_SATT_PÅ_VENT}],links:[t]}}};var s,a,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
