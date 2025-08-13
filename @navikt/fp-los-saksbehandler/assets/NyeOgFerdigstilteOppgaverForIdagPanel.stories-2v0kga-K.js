import{w as i,d as e,B as a,j as o,b as t}from"./iframe-Clb27KdX.js";import{X as d}from"./index.es-YB7mErq6.js";import{u as p}from"./useLosKodeverk-DEhLWE0f.js";import{a as g,L as m,H as y,l as h}from"./fplosSaksbehandlerApi-eMHBsBGQ.js";import{g as O}from"./withIntl-BLSqA8yB.js";import{a as N}from"./alleKodeverkLos-JR0SOFbV.js";import{N as s}from"./NyeOgFerdigstilteOppgaverForIdagPanel-BQ7IUakw.js";import{m as T}from"./nb_NO--W7a-9g9.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-Ch4zzPxw.js";import"./FlyttReservasjonModal-CJI4golJ.js";import"./index.es-BvBWvnwP.js";import"./Modal-D5ZdTN-0.js";import"./index-CAZnbBZ-.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-CAv2P8YR.js";import"./Tag-DOgy5-6g.js";import"./VStack-Bo-6G3rc.js";const c=O(T),k={title:"saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel",component:s,decorators:[c,i],parameters:{msw:{handlers:[g.get(m.KODEVERK_LOS,()=>y.json(N))]}},render:l=>p(h()).data?o.jsx(s,{...l}):o.jsx(d,{})},r={args:{height:300,nyeOgFerdigstilteOppgaver:[{behandlingType:a.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:e().format(t)},{behandlingType:a.KLAGE,antallNye:23,antallFerdigstilte:2,dato:e().format(t)},{behandlingType:a.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:e().format(t)},{behandlingType:a.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:e().format(t)}]}},n={args:{height:300}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    height: 300
  }
}`,...n.parameters?.docs?.source}}};const U=["Default","IngenBehandlinger"];export{r as Default,n as IngenBehandlinger,U as __namedExportsOrder,k as default};
