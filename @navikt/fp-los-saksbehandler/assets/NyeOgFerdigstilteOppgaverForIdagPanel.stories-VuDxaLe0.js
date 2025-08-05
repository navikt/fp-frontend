import{w as i,d as e,B as a,j as o,b as t}from"./iframe-Br6Rev2a.js";import{X as d}from"./index.es-C4kZSf0i.js";import{u as p}from"./useQuery-CX0lBhVx.js";import{a as g,L as m,H as y,l as h}from"./fplosSaksbehandlerApi-ybaEhuMn.js";import{g as O}from"./withIntl-iEi7nboL.js";import{a as N}from"./alleKodeverkLos-DeeW-5p1.js";import{N as s}from"./NyeOgFerdigstilteOppgaverForIdagPanel-D_EZHhUO.js";import{m as T}from"./nb_NO-DpJVr73H.js";import"./Loader-CGzdXnlu.js";import"./useLosKodeverk-CaOg4Q6q.js";import"./FlyttReservasjonModal-BjpsjBbY.js";import"./index.es-Cjrwpto7.js";import"./Modal-B73WcImj.js";import"./index-eGax0tLI.js";import"./composeEventHandlers-krbYd5LM.js";import"./ChevronDown-Bj9f8LlW.js";import"./Tag-D_9TlqGi.js";import"./VStack-CH5YDwkv.js";const c=O(T),k={title:"saksstotte/NyeOgFerdigstilteOppgaverForIdagPanel",component:s,decorators:[c,i],parameters:{msw:{handlers:[g.get(m.KODEVERK_LOS,()=>y.json(N))]}},render:l=>p(h()).data?o.jsx(s,{...l}):o.jsx(d,{})},r={args:{height:300,nyeOgFerdigstilteOppgaver:[{behandlingType:a.FORSTEGANGSSOKNAD,antallNye:10,antallFerdigstilte:20,dato:e().format(t)},{behandlingType:a.KLAGE,antallNye:23,antallFerdigstilte:2,dato:e().format(t)},{behandlingType:a.REVURDERING,antallNye:3,antallFerdigstilte:24,dato:e().format(t)},{behandlingType:a.DOKUMENTINNSYN,antallNye:23,antallFerdigstilte:12,dato:e().format(t)}]}},n={args:{height:300}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
