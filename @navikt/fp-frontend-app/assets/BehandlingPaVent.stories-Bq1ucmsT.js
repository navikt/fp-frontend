import{c as g,w as k,B as d,d as l}from"./withPanelData-l2yTiWr2.js";import{h as A,H as h}from"./index-CiTJJs0Y.js";import{A as u}from"./aksjonspunktCodes-BLM-Fgv6.js";import{A as m}from"./aksjonspunktStatus-xM4O_ZUY.js";import"./jsx-runtime-D_zvdyIk.js";import{a as E}from"./alleKodeverk-Dm9joGL5.js";import{B as S}from"./BehandlingPaVent-DsbuPbsm.js";import"./index-DjhIdADd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./v4-CtRu48qb.js";import"./entry-preview-HfP6wKaZ.js";import"./iframe-BCSjRxBr.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-C7LF3qXI.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-kOHTyFzL.js";import"./index.es-B2bUDZ1A.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-VWUBisH1.js";import"./ExclamationmarkTriangleFill-RgigsSLU.js";import"./message-YDChe8A0.js";import"./Tag-1zzj206n.js";import"./Popover-CWBst0op.js";import"./Checkbox-BafFYEOc.js";import"./SettPaVentModalIndex-BYYgzzmJ.js";import"./venteArsakType-BJdSFL9e.js";import"./behandlingApi-CJNVvn1l.js";const e={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},W={title:"app/BehandlingPaVent",component:S,decorators:[k],parameters:{msw:{handlers:[A.post("http://www.test.com"+e.href,()=>new h(null,{status:200}))]}},args:{kodeverk:E,opneSokeside:g("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPaaVent:!0,status:l.BEHANDLING_UTREDES,type:d.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteArsakKode:"AVV_FODSEL",aksjonspunkt:[{status:m.OPPRETTET,definisjon:u.ANNENPART_EØS}],links:[e]}}},t={args:{behandling:{uuid:"121212",versjon:1,behandlingPaaVent:!0,status:l.BEHANDLING_UTREDES,type:d.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteArsakKode:"AVV_FODSEL",aksjonspunkt:[{status:m.OPPRETTET,definisjon:u.AUTO_MANUELT_SATT_PÅ_VENT}],links:[e]}}};var a,s,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
