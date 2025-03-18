import{c as g,w as k,B as d,d as l}from"./withPanelData-Bpl-xPYD.js";import{h as A,H as h}from"./index-CiTJJs0Y.js";import{A as u}from"./aksjonspunktCodes-BLM-Fgv6.js";import{A as m}from"./aksjonspunktStatus-xM4O_ZUY.js";import"./jsx-runtime-D_zvdyIk.js";import{a as E}from"./alleKodeverk-DQaoBXHm.js";import{B as S}from"./BehandlingPaVent-1rL2qW3J.js";import"./index-DjhIdADd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./v4-CtRu48qb.js";import"./entry-preview-CQ3bfCj9.js";import"./iframe-BTavAvr4.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-C7LF3qXI.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-DA3vzxHQ.js";import"./index.es-Nt5OVup2.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-V0N77BpQ.js";import"./ExclamationmarkTriangleFill-DnTDVWGG.js";import"./message-B9x4YyKn.js";import"./Tag-BmJtf2SH.js";import"./Popover-CyxSGU4U.js";import"./Checkbox-qA4UYXWP.js";import"./SettPaVentModalIndex-C38-9YAu.js";import"./venteArsakType-BJdSFL9e.js";import"./behandlingApi-CJNVvn1l.js";const e={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},W={title:"app/BehandlingPaVent",component:S,decorators:[k],parameters:{msw:{handlers:[A.post("http://www.test.com"+e.href,()=>new h(null,{status:200}))]}},args:{kodeverk:E,opneSokeside:g("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPaaVent:!0,status:l.BEHANDLING_UTREDES,type:d.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteArsakKode:"AVV_FODSEL",aksjonspunkt:[{status:m.OPPRETTET,definisjon:u.ANNENPART_EØS}],links:[e]}}},t={args:{behandling:{uuid:"121212",versjon:1,behandlingPaaVent:!0,status:l.BEHANDLING_UTREDES,type:d.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteArsakKode:"AVV_FODSEL",aksjonspunkt:[{status:m.OPPRETTET,definisjon:u.AUTO_MANUELT_SATT_PÅ_VENT}],links:[e]}}};var a,s,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '121212',
      versjon: 1,
      behandlingPaaVent: true,
      status: BehandlingStatus.BEHANDLING_UTREDES,
      type: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingHenlagt: false,
      fristBehandlingPåVent: '2030-10-10',
      venteArsakKode: 'AVV_FODSEL',
      aksjonspunkt: [{
        status: AksjonspunktStatus.OPPRETTET,
        definisjon: AksjonspunktKode.ANNENPART_EØS
      } as Aksjonspunkt],
      links: [link]
    } as Behandling
  }
}`,...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    behandling: {
      uuid: '121212',
      versjon: 1,
      behandlingPaaVent: true,
      status: BehandlingStatus.BEHANDLING_UTREDES,
      type: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingHenlagt: false,
      fristBehandlingPåVent: '2030-10-10',
      venteArsakKode: 'AVV_FODSEL',
      aksjonspunkt: [{
        status: AksjonspunktStatus.OPPRETTET,
        definisjon: AksjonspunktKode.AUTO_MANUELT_SATT_PÅ_VENT
      } as Aksjonspunkt],
      links: [link]
    } as Behandling
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const X=["BehandlingSattPåVent","BehandlingSattManueltPåVent"];export{t as BehandlingSattManueltPåVent,n as BehandlingSattPåVent,X as __namedExportsOrder,W as default};
