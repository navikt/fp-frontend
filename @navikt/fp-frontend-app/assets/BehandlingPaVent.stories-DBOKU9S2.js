import{c as g,w as k,B as d,d as l}from"./withPanelData-DYx4psig.js";import{h,H as E}from"./index-DcGDEF8s.js";import{A as u}from"./aksjonspunktCodes-Cv9tgqDr.js";import{A as m}from"./aksjonspunktStatus-xM4O_ZUY.js";import"./jsx-runtime-D_zvdyIk.js";import{a as S}from"./alleKodeverk-Dp2FRR0Y.js";import{B as A}from"./BehandlingPaVent-5-TyuqUr.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./v4-CtRu48qb.js";import"./entry-preview-DQssFU6B.js";import"./iframe-Dj4Vq9ki.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-DYkg7sin.js";import"./index.es-DQFWSTEl.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-C6DT4acO.js";import"./ExclamationmarkTriangleFill-AqG4ey_-.js";import"./message-C-XBxORf.js";import"./Tag-BkKNfaVZ.js";import"./Popover-PcwIPLV8.js";import"./Checkbox-BKD7gRPT.js";import"./SettPaVentModalIndex-BWLsa52i.js";import"./venteArsakType-BJdSFL9e.js";import"./behandlingApi-Cj0m2Vs-.js";const e={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},W={title:"app/BehandlingPaVent",component:A,decorators:[k],parameters:{msw:{handlers:[h.post("http://www.test.com"+e.href,()=>new E(null,{status:200}))]}},args:{kodeverk:S,opneSokeside:g("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:l.BEHANDLING_UTREDES,type:d.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:m.OPPRETTET,definisjon:u.ANNENPART_EØS}],links:[e]}}},t={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:l.BEHANDLING_UTREDES,type:d.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:m.OPPRETTET,definisjon:u.AUTO_MANUELT_SATT_PÅ_VENT}],links:[e]}}};var s,a,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(r=(a=n.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const X=["BehandlingSattPåVent","BehandlingSattManueltPåVent"];export{t as BehandlingSattManueltPåVent,n as BehandlingSattPåVent,X as __namedExportsOrder,W as default};
