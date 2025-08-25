import{w as i,d as e,B as a,j as s,b as t}from"./iframe-B9KoQGM0.js";import{X as d}from"./index.es-CLSw_-eh.js";import{u as p}from"./useLosKodeverk-BE3hg7Pt.js";import{a as g,L as m,H as y,l as h}from"./fplosSaksbehandlerApi-CWuH3MKX.js";import{g as O}from"./withIntl-DeQxf50B.js";import{a as N}from"./alleKodeverkLos-JR0SOFbV.js";import{N as o}from"./NyeOgFerdigstilteOppgaverForIdagPanel-CWmjazKS.js";import{m as T}from"./nb_NO-C3IQ5_sL.js";import"./preload-helper-D9Z9MdNV.js";import"./Loader-C2bZBRPU.js";import"./FlyttReservasjonModal-B35tj6vq.js";import"./index.es-Bp8LbBj1.js";import"./Modal-CHSHW0HN.js";import"./index-TZAab7S3.js";import"./composeEventHandlers-C20DeXlO.js";import"./Tag-BQHGL7Xh.js";import"./VStack-C4xViOeb.js";const c=O(T),M={title:"saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel",component:o,decorators:[c,i],parameters:{msw:{handlers:[g.get(m.KODEVERK_LOS,()=>y.json(N))]}},render:l=>p(h()).data?s.jsx(o,{...l}):s.jsx(d,{})},r={args:{height:300,nyeOgFerdigstilteOppgaver:[{behandlingType:a.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:e().format(t)},{behandlingType:a.KLAGE,antallNye:23,antallFerdigstilte:2,dato:e().format(t)},{behandlingType:a.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:e().format(t)},{behandlingType:a.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:e().format(t)}]}},n={args:{height:300}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const k=["Default","IngenBehandlinger"];export{r as Default,n as IngenBehandlinger,k as __namedExportsOrder,M as default};
