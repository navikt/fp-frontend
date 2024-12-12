import{j as s}from"./jsx-runtime-DR9Q75dM.js";import{r as t}from"./index-DRjF_FHU.js";import{a as K}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./aktivitetStatus-02fOJoqz.js";import{V as F}from"./BehandlingHenlagtPanel-brQqV5CM.js";import{g as O}from"./withIntl-Bwt-qgA2.js";import{B as P}from"./BehandlingContainer-BFZyqzvr.js";import{m as S}from"./nb_NO-BvZ51WMw.js";import"./v4-CQkTLCs1.js";import"./bind-BuPH0iQG.js";import"./index.es-DgvnPOIp.js";import"./index.es-DO2r2S9Z.js";import"./index-rX-Bn4lm.js";const v=O(S),x=({registrerFaktaPanel:e,valgtFaktaSteg:r})=>(t.useEffect(()=>{e({id:"1",tekst:"Dette er en paneltittel",erAktiv:r==="1",harApneAksjonspunkter:!0})},[]),r!=="1"?null:s.jsx("div",{children:"Dette er et testpanel"})),A=({registrerFaktaPanel:e,valgtFaktaSteg:r})=>(t.useEffect(()=>{e({id:"2",tekst:"Annet panel",erAktiv:r==="2",harApneAksjonspunkter:!1})},[r]),r!=="2"?null:s.jsx("div",{children:"Dette er et annet panel"})),T=({registrerProsessPanel:e,valgtProsessSteg:r})=>(t.useEffect(()=>{e({id:"1",tekst:"Adopsjon",erAktiv:r==="1",harApentAksjonspunkt:!1,status:F.OPPFYLT})},[]),r!=="1"?null:s.jsx("div",{children:"Dette er et testpanel for adopsjon"})),I=({registrerProsessPanel:e,valgtProsessSteg:r})=>(t.useEffect(()=>{e({id:"2",tekst:"Fødsel",erAktiv:r==="2",harApentAksjonspunkt:!0,status:F.IKKE_OPPFYLT})},[]),r!=="2"?null:s.jsx("div",{children:"Dette er et testpanel for fødsel"})),H={title:"app/behandling-container",component:P,decorators:[v],args:{behandling:{},oppdaterProsessStegOgFaktaPanelIUrl:K("button-click"),valgtFaktaSteg:"default",valgtProsessSteg:"default"},render:e=>{const[r,E]=t.useState(e),V=(l,p)=>{var i;(i=r.oppdaterProsessStegOgFaktaPanelIUrl)==null||i.call(r,l,p),E(D=>({...D,valgtProsessSteg:l,valgtFaktaSteg:p}))};return s.jsx(P,{...r,oppdaterProsessStegOgFaktaPanelIUrl:V})}},n={args:{hentFaktaPaneler:e=>s.jsxs(s.Fragment,{children:[s.jsx(x,{...e}),s.jsx(A,{...e})]})}},a={args:{hentProsessPaneler:e=>s.jsxs(s.Fragment,{children:[s.jsx(T,{...e}),s.jsx(I,{...e})]})}},o={args:{hentProsessPaneler:e=>s.jsxs(s.Fragment,{children:[s.jsx(T,{...e}),s.jsx(I,{...e})]}),hentFaktaPaneler:e=>s.jsxs(s.Fragment,{children:[s.jsx(x,{...e}),s.jsx(A,{...e})]})}};var c,u,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    hentFaktaPaneler: (props: FaktaPanelInitProps) => <>
        <FaktaPanelTest1 {...props} />
        <FaktaPanelTest2 {...props} />
      </>
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,k,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    hentProsessPaneler: (props: ProsessPanelInitProps) => <>
        <ProsessPanelTest1 {...props} />
        <ProsessPanelTest2 {...props} />
      </>
  }
}`,...(g=(k=a.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var f,j,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(j=o.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};const J=["VisKunFaktaPaneler","VisKunProsessPaneler","VisBeggePaneler"];export{o as VisBeggePaneler,n as VisKunFaktaPaneler,a as VisKunProsessPaneler,J as __namedExportsOrder,H as default};
