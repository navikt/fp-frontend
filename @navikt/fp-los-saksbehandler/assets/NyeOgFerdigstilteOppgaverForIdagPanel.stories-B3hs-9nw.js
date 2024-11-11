import{j as o}from"./jsx-runtime-QvZ8i92b.js";import{d as e}from"./dayjs.min-BsYQKNhR.js";import{A as a,m as N}from"./nb_NO-3Rkd6eZ_.js";import{Y as t}from"./index.es-BkMxg3KK.js";import{R as O,b as T,r as c}from"./fplosSaksbehandlerRestApi-DzOe4zkL.js";import"./index-uubelm5h.js";import"./useRestApiRunner-BRG0l7Io.js";import{g as F}from"./withIntl-BuEyDIEb.js";import{a as f}from"./alleKodeverkLos-BJud6Q-i.js";import{N as l}from"./NyeOgFerdigstilteOppgaverForIdagPanel-BpZUOGlE.js";import"./index-C5xsJX-I.js";import"./useLosKodeverk-CyolKziq.js";import"./FlyttReservasjonModal-NhzVJZuc.js";import"./index.es-BNbbWCfQ.js";import"./VStack-XUoC8Lli.js";const A=F(N),k={title:"saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel",component:l,decorators:[A],render:y=>{const h=[{key:O.KODEVERK_LOS.name,data:f,global:!0}];return o.jsx(T,{data:h,requestApi:c,children:o.jsx(l,{...y})})}},n={args:{height:300,nyeOgFerdigstilteOppgaver:[{behandlingType:t.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:e().format(a)},{behandlingType:t.KLAGE,antallNye:23,antallFerdigstilte:2,dato:e().format(a)},{behandlingType:t.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:e().format(a)},{behandlingType:t.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:e().format(a)}]}},r={args:{height:300}};var s,i,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    height: 300,
    nyeOgFerdigstilteOppgaver: [{
      behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
      antallNye: 10,
      antallFerdigstilte: 20,
      dato: dayjs().format(ISO_DATE_FORMAT)
    }, {
      behandlingType: BehandlingType.KLAGE,
      antallNye: 23,
      antallFerdigstilte: 2,
      dato: dayjs().format(ISO_DATE_FORMAT)
    }, {
      behandlingType: BehandlingType.REVURDERING,
      antallNye: 3,
      antallFerdigstilte: 24,
      dato: dayjs().format(ISO_DATE_FORMAT)
    }, {
      behandlingType: BehandlingType.DOKUMENTINNSYN,
      antallNye: 23,
      antallFerdigstilte: 12,
      dato: dayjs().format(ISO_DATE_FORMAT)
    }]
  }
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var g,p,m;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    height: 300
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const L=["Default","IngenBehandlinger"];export{n as Default,r as IngenBehandlinger,L as __namedExportsOrder,k as default};
