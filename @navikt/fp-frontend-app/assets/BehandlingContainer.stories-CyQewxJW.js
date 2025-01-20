import{j as s}from"./jsx-runtime-BDPtolqC.js";import{r as t}from"./index-B54hSm9S.js";import{a as K}from"./chunk-D5ZWXAHU-DlerbUHg.js";import"./aktivitetStatus-02fOJoqz.js";import{V as F}from"./BehandlingHenlagtPanel-CuHepH1W.js";import"./alleKodeverk-BjSx9BnQ.js";import{g as O}from"./withIntl-nkVkM_1j.js";import{B as P}from"./BehandlingContainer-DN6EtG2k.js";import{m as S}from"./nb_NO-uNUtk1bC.js";import"./index-D1iumpf7.js";import"./v4-CtRu48qb.js";import"./useRestApiRunner-DgEJAvhj.js";import"./index.es-DXLrV0aY.js";import"./dayjs.min-BBSNu57g.js";import"./bind-Di5x0AXu.js";import"./index-BC2UOl6f.js";import"./index-D41M3POg.js";import"./index.es-Bc1HGcRM.js";import"./useFormField-Bg-RJcod.js";import"./Link-BvkKgXRB.js";import"./Popover-BotJpJsz.js";const v=O(S),x=({registrerFaktaPanel:e,valgtFaktaSteg:r})=>(t.useEffect(()=>{e({id:"1",tekst:"Dette er en paneltittel",erAktiv:r==="1",harApneAksjonspunkter:!0})},[]),r!=="1"?null:s.jsx("div",{children:"Dette er et testpanel"})),A=({registrerFaktaPanel:e,valgtFaktaSteg:r})=>(t.useEffect(()=>{e({id:"2",tekst:"Annet panel",erAktiv:r==="2",harApneAksjonspunkter:!1})},[r]),r!=="2"?null:s.jsx("div",{children:"Dette er et annet panel"})),T=({registrerProsessPanel:e,valgtProsessSteg:r})=>(t.useEffect(()=>{e({id:"1",tekst:"Adopsjon",erAktiv:r==="1",harApentAksjonspunkt:!1,status:F.OPPFYLT})},[]),r!=="1"?null:s.jsx("div",{children:"Dette er et testpanel for adopsjon"})),I=({registrerProsessPanel:e,valgtProsessSteg:r})=>(t.useEffect(()=>{e({id:"2",tekst:"Fødsel",erAktiv:r==="2",harApentAksjonspunkt:!0,status:F.IKKE_OPPFYLT})},[]),r!=="2"?null:s.jsx("div",{children:"Dette er et testpanel for fødsel"})),$={title:"behandling/behandling-container",component:P,decorators:[v],args:{behandling:{},oppdaterProsessStegOgFaktaPanelIUrl:K("button-click"),valgtFaktaSteg:"default",valgtProsessSteg:"default"},render:e=>{const[r,E]=t.useState(e),V=(p,l)=>{var i;(i=r.oppdaterProsessStegOgFaktaPanelIUrl)==null||i.call(r,p,l),E(D=>({...D,valgtProsessSteg:p,valgtFaktaSteg:l}))};return s.jsx(P,{...r,oppdaterProsessStegOgFaktaPanelIUrl:V})}},n={args:{hentFaktaPaneler:e=>s.jsxs(s.Fragment,{children:[s.jsx(x,{...e}),s.jsx(A,{...e})]})}},a={args:{hentProsessPaneler:e=>s.jsxs(s.Fragment,{children:[s.jsx(T,{...e}),s.jsx(I,{...e})]})}},o={args:{hentProsessPaneler:e=>s.jsxs(s.Fragment,{children:[s.jsx(T,{...e}),s.jsx(I,{...e})]}),hentFaktaPaneler:e=>s.jsxs(s.Fragment,{children:[s.jsx(x,{...e}),s.jsx(A,{...e})]})}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    hentFaktaPaneler: (props: FaktaPanelInitProps) => <>
        <FaktaPanelTest1 {...props} />
        <FaktaPanelTest2 {...props} />
      </>
  }
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,k,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    hentProsessPaneler: (props: ProsessPanelInitProps) => <>
        <ProsessPanelTest1 {...props} />
        <ProsessPanelTest2 {...props} />
      </>
  }
}`,...(g=(k=a.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var f,h,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    hentProsessPaneler: (props: ProsessPanelInitProps) => <>
        <ProsessPanelTest1 {...props} />
        <ProsessPanelTest2 {...props} />
      </>,
    hentFaktaPaneler: (props: FaktaPanelInitProps) => <>
        <FaktaPanelTest1 {...props} />
        <FaktaPanelTest2 {...props} />
      </>
  }
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const ee=["VisKunFaktaPaneler","VisKunProsessPaneler","VisBeggePaneler"];export{o as VisBeggePaneler,n as VisKunFaktaPaneler,a as VisKunProsessPaneler,ee as __namedExportsOrder,$ as default};
