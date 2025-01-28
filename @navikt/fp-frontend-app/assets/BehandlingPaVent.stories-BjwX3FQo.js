import{a as g}from"./chunk-D5ZWXAHU-DlerbUHg.js";import{h as k,H as A}from"./index-DqeTBbD1.js";import{A as d}from"./aksjonspunktCodes-BuBbCIxs.js";import{A as l}from"./aksjonspunktStatus-xM4O_ZUY.js";import"./aktivitetStatus-02fOJoqz.js";import{B as u}from"./behandlingStatus-CZkrUkra.js";import{B as m}from"./behandlingType-BdbjGMJD.js";import{w as h}from"./withQueryClient-BVC_MkYB.js";import"./jsx-runtime-CLpGMVip.js";import{a as E}from"./alleKodeverk-Ck9zwXaq.js";import{B as S}from"./BehandlingPaVent-DJdhI_aY.js";import"./v4-CtRu48qb.js";import"./decorators-DIzpaN6C.js";import"./index-B5OHeJSP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./index.es-Cy98doCm.js";import"./index.es-CR4HM-Gt.js";import"./dayjs.min-CJilavqB.js";import"./Checkbox-Ce1pUqOO.js";import"./useFormField-B1rtZXFW.js";import"./Popover-itKurSph.js";import"./Tag-CTU_eBFO.js";import"./SettPaVentModalIndex-C72b4ZLw.js";import"./venteArsakType-BJdSFL9e.js";import"./behandlingApi-BSCwwgfH.js";const e={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},q={title:"app/BehandlingPaVent",component:S,decorators:[h],parameters:{msw:{handlers:[k.post("http://www.test.com"+e.href,()=>new A(null,{status:200}))]}},args:{kodeverk:E,opneSokeside:g("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPaaVent:!0,status:u.BEHANDLING_UTREDES,type:m.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteArsakKode:"AVV_FODSEL",aksjonspunkt:[{status:l.OPPRETTET,definisjon:d.ANNENPART_EØS}],links:[e]}}},t={args:{behandling:{uuid:"121212",versjon:1,behandlingPaaVent:!0,status:u.BEHANDLING_UTREDES,type:m.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteArsakKode:"AVV_FODSEL",aksjonspunkt:[{status:l.OPPRETTET,definisjon:d.AUTO_MANUELT_SATT_PÅ_VENT}],links:[e]}}};var a,s,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const z=["BehandlingSattPåVent","BehandlingSattManueltPåVent"];export{t as BehandlingSattManueltPåVent,n as BehandlingSattPåVent,z as __namedExportsOrder,q as default};
