import{c as g,w as k,B as d,d as l}from"./withPanelData-CYqir7Jj.js";import{h,H as E}from"./index-DzvRTBsC.js";import{A as m}from"./aksjonspunktCodes-CwqG_2qJ.js";import{A as u}from"./aksjonspunktStatus-xM4O_ZUY.js";import"./jsx-runtime-D_zvdyIk.js";import{a as S}from"./alleKodeverk-BGvpDL3l.js";import{B as A}from"./BehandlingPaVent-CSCSCx0V.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./v4-CtRu48qb.js";import"./entry-preview-CceVR6N8.js";import"./iframe-Dk5JtZvg.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./decorators-Bnaor6Ku.js";import"./index.es-CiVoxrg3.js";import"./index.es-Bw4JF1Y2.js";import"./CheckmarkCircleFill-9GXgXpOG.js";import"./ExclamationmarkTriangleFill-EWpaFPkd.js";import"./ChevronDown-CD9_iH8L.js";import"./Tag-CxvnqRLT.js";import"./Popover-CfhvNm6v.js";import"./Checkbox-BS6tk8gW.js";import"./SettPaVentModalIndex-CyZ3I_MP.js";import"./venteArsakType-BJdSFL9e.js";import"./message-Kk2bypEd.js";import"./behandlingApi-DiXqKC7j.js";const e={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},X={title:"app/BehandlingPaVent",component:A,decorators:[k],parameters:{msw:{handlers:[h.post("http://www.test.com"+e.href,()=>new E(null,{status:200}))]}},args:{kodeverk:S,opneSokeside:g("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:l.BEHANDLING_UTREDES,type:d.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:u.OPPRETTET,definisjon:m.ANNENPART_EØS}],links:[e]}}},t={args:{behandling:{uuid:"121212",versjon:1,behandlingPåVent:!0,status:l.BEHANDLING_UTREDES,type:d.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteÅrsakKode:"AVV_FODSEL",aksjonspunkt:[{status:u.OPPRETTET,definisjon:m.AUTO_MANUELT_SATT_PÅ_VENT}],links:[e]}}};var s,a,r;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const Y=["BehandlingSattPåVent","BehandlingSattManueltPåVent"];export{t as BehandlingSattManueltPåVent,n as BehandlingSattPåVent,Y as __namedExportsOrder,X as default};
