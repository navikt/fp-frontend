import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as o}from"./index-B5OHeJSP.js";import"./aktivitetStatus-02fOJoqz.js";import{V as f}from"./BehandlingHenlagtPanel-Dy1MJY7R.js";import"./FormDataContext-B1rdxO_J.js";import{g}from"./withIntl-BwEM0fAv.js";import{B as T}from"./BehandlingContainer-DhKQ9oVz.js";import{m as A}from"./nb_NO-FM-zO8Y1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index.es-BEBRLXnK.js";import"./dayjs.min-CJilavqB.js";import"./ExclamationmarkTriangleFill-D2K_ewMd.js";import"./CheckmarkCircleFill-C7QvFIbn.js";import"./bind-oYjWB_aQ.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./behandlingDataContext-BMbp9e-c.js";import"./index.es-TIZ8fSLE.js";import"./useFormField-BoPO9fdE.js";import"./Link-D-z0hRPI.js";import"./Tooltip-DMJqDey8.js";import"./Popover-g1c6QEmv.js";const E=g(A),h=({registrerFaktaPanel:s,valgtFaktaSteg:r})=>(o.useEffect(()=>{s({id:"1",tekst:"Dette er en paneltittel",erAktiv:r==="1",harApneAksjonspunkter:!0})},[]),r!=="1"?null:e.jsx("div",{children:"Dette er et testpanel"})),j=({registrerFaktaPanel:s,valgtFaktaSteg:r})=>(o.useEffect(()=>{s({id:"2",tekst:"Annet panel",erAktiv:r==="2",harApneAksjonspunkter:!1})},[r]),r!=="2"?null:e.jsx("div",{children:"Dette er et annet panel"})),x=({registrerProsessPanel:s,valgtProsessSteg:r})=>(o.useEffect(()=>{s({id:"1",tekst:"Adopsjon",erAktiv:r==="1",harApentAksjonspunkt:!1,status:f.OPPFYLT})},[]),r!=="1"?null:e.jsx("div",{children:"Dette er et testpanel for adopsjon"})),F=({registrerProsessPanel:s,valgtProsessSteg:r})=>(o.useEffect(()=>{s({id:"2",tekst:"Fødsel",erAktiv:r==="2",harApentAksjonspunkt:!0,status:f.IKKE_OPPFYLT})},[]),r!=="2"?null:e.jsx("div",{children:"Dette er et testpanel for fødsel"})),N={title:"behandling/behandling-container",component:T,decorators:[E],args:{valgtFaktaSteg:"default",valgtProsessSteg:"default"}},t={args:{hentFaktaPaneler:s=>e.jsxs(e.Fragment,{children:[e.jsx(h,{...s}),e.jsx(j,{...s})]})}},n={args:{hentProsessPaneler:s=>e.jsxs(e.Fragment,{children:[e.jsx(x,{...s}),e.jsx(F,{...s})]})}},a={args:{hentProsessPaneler:s=>e.jsxs(e.Fragment,{children:[e.jsx(x,{...s}),e.jsx(F,{...s})]}),hentFaktaPaneler:s=>e.jsxs(e.Fragment,{children:[e.jsx(h,{...s}),e.jsx(j,{...s})]})}};var p,i,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    hentFaktaPaneler: (props: FaktaPanelInitProps) => <>
        <FaktaPanelTest1 {...props} />
        <FaktaPanelTest2 {...props} />
      </>
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var P,m,c;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    hentProsessPaneler: (props: ProsessPanelInitProps) => <>
        <ProsessPanelTest1 {...props} />
        <ProsessPanelTest2 {...props} />
      </>
  }
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,d,k;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(d=a.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};const Q=["VisKunFaktaPaneler","VisKunProsessPaneler","VisBeggePaneler"];export{a as VisBeggePaneler,t as VisKunFaktaPaneler,n as VisKunProsessPaneler,Q as __namedExportsOrder,N as default};
