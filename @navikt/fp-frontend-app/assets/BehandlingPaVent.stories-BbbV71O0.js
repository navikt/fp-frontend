import{w as g,c as k,B as d,d as l}from"./withPanelData-DwrBBCSV.js";import{h as A,H as h}from"./index-DqeTBbD1.js";import{A as u}from"./aksjonspunktCodes-BuBbCIxs.js";import{A as m}from"./aksjonspunktStatus-xM4O_ZUY.js";import"./jsx-runtime-CLpGMVip.js";import{a as E}from"./alleKodeverk-Ck9zwXaq.js";import{B as S}from"./BehandlingPaVent-SSKJ_6Nx.js";import"./index-B8jnc8p3.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dmw-q_WW.js";import"./index-Dv0WEcwZ.js";import"./v4-CtRu48qb.js";import"./react-CZhFSyzV.js";import"./iframe-CbJhPlZl.js";import"./chunk-XP5HYGXS-DH4vAeCa.js";import"./decorators-DIzpaN6C.js";import"./index.es-CAKzYmxM.js";import"./index.es-z2KRwyMl.js";import"./dayjs.min-CJilavqB.js";import"./ExclamationmarkTriangleFill-BA6FvCBM.js";import"./CheckmarkCircleFill-DE_gi2ZR.js";import"./Checkbox-CvuY8bu1.js";import"./useFormField-BZfAcWdB.js";import"./Popover-CR8rUS__.js";import"./Tag-C8vXFVyv.js";import"./SettPaVentModalIndex-pQjGADsd.js";import"./venteArsakType-BJdSFL9e.js";import"./behandlingApi-v-44y4EH.js";const e={href:"/fpsak/api/behandlinger/endre-pa-vent",rel:"endre-pa-vent"},z={title:"app/BehandlingPaVent",component:S,decorators:[g],parameters:{msw:{handlers:[A.post("http://www.test.com"+e.href,()=>new h(null,{status:200}))]}},args:{kodeverk:E,opneSokeside:k("button-click")}},n={args:{behandling:{uuid:"121212",versjon:1,behandlingPaaVent:!0,status:d.BEHANDLING_UTREDES,type:l.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteArsakKode:"AVV_FODSEL",aksjonspunkt:[{status:m.OPPRETTET,definisjon:u.ANNENPART_EØS}],links:[e]}}},t={args:{behandling:{uuid:"121212",versjon:1,behandlingPaaVent:!0,status:d.BEHANDLING_UTREDES,type:l.FORSTEGANGSSOKNAD,behandlingHenlagt:!1,fristBehandlingPåVent:"2030-10-10",venteArsakKode:"AVV_FODSEL",aksjonspunkt:[{status:m.OPPRETTET,definisjon:u.AUTO_MANUELT_SATT_PÅ_VENT}],links:[e]}}};var a,s,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const J=["BehandlingSattPåVent","BehandlingSattManueltPåVent"];export{t as BehandlingSattManueltPåVent,n as BehandlingSattPåVent,J as __namedExportsOrder,z as default};
