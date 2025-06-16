import{h as k,A as p,b as l,H as S}from"./index-CW7vuJ2T.js";import{w as h,B as u,G as g}from"./iframe-lfDIuZnd.js";import{a as E}from"./alleKodeverk-DO07GSZv.js";import{B as T}from"./BehandlingPaVent-CrruWphC.js";import"./index.es-CMpJRk1M.js";import"./index.es-CdaMSA98.js";import"./VStack-CXZ-xuB-.js";import"./index-Ck0MhVia.js";import"./CheckmarkCircleFill-Bu6YmzF6.js";import"./ExclamationmarkTriangleFill-BmEV_uHl.js";import"./ChevronDown-CrzwDjuo.js";import"./Tag-CyXCI2BH.js";import"./Popover-C4Pvu8ho.js";import"./Checkbox-BQmOQQCV.js";import"./SettPaVentModalIndex-C3dUJYHx.js";import"./venteArsakType-BJdSFL9e.js";import"./message-9gnytQ3y.js";import"./behandlingApi-c5tgc7VI.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,t={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},U={title:"app/BehandlingPaVent",component:T,decorators:[h],parameters:{msw:{handlers:[k.post("https://www.test.com"+t.href,()=>new S(null,{status:200}))]}},args:{kodeverk:E,opneSokeside:m("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:g.BEHANDLING_UTREDES,type:u.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:l.OPPRETTET,definisjon:p.ANNENPART_EØS}],links:[t]}}},e={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:g.BEHANDLING_UTREDES,type:u.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:l.OPPRETTET,definisjon:p.AUTO_MANUELT_SATT_PÅ_VENT}],links:[t]}}};var s,a,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
