import{c as g,w as k,B as d,d as l}from"./withPanelData-DDO9GM3C.js";import{h,A as u,a as m,H as E}from"./index-Dyi8laJ0.js";import"./index-nufLo1NJ.js";import{a as S}from"./alleKodeverk-DO07GSZv.js";import{B as A}from"./BehandlingPaVent-B2Fa2yFD.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./entry-preview-Dmw5udtt.js";import"./iframe-ET9an2JE.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./decorators-Bnaor6Ku.js";import"./index-0CCRSEf1.js";import"./index.es-Qc5rsNX5.js";import"./index.es-D76Emi2H.js";import"./CheckmarkCircleFill-8fAahKc9.js";import"./ExclamationmarkTriangleFill-DEQjdBSq.js";import"./ChevronDown-AYRINwUK.js";import"./Tag-DaTzX58X.js";import"./Popover-DBZ4_Qnl.js";import"./Checkbox-D9NlhgvT.js";import"./SettPaVentModalIndex-Dydbcbk_.js";import"./venteArsakType-BJdSFL9e.js";import"./message-BGD2cnPZ.js";import"./behandlingApi-CLFTsbD6.js";const e={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},z={title:"app/BehandlingPaVent",component:A,decorators:[k],parameters:{msw:{handlers:[h.post("https://www.test.com"+e.href,()=>new E(null,{status:200}))]}},args:{kodeverk:S,opneSokeside:g("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:l.BEHANDLING_UTREDES,type:d.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:m.OPPRETTET,definisjon:u.ANNENPART_EØS}],links:[e]}}},t={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:l.BEHANDLING_UTREDES,type:d.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:m.OPPRETTET,definisjon:u.AUTO_MANUELT_SATT_PÅ_VENT}],links:[e]}}};var s,a,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(r=(a=n.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var i,o,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(o=t.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const J=["BehandlingSattPåVent","BehandlingSattManueltPåVent"];export{t as BehandlingSattManueltPåVent,n as BehandlingSattPåVent,J as __namedExportsOrder,z as default};
