import{j as e}from"./jsx-runtime-CLpGMVip.js";import{r as o}from"./index-B8jnc8p3.js";import"./withPanelData-0-G3gUT2.js";import{V as f}from"./BehandlingHenlagtPanel-D3J5EKvy.js";import{g}from"./withIntl-DNexp6Ir.js";import{B as T}from"./BehandlingContainer-BneyXQ5e.js";import{m as A}from"./nb_NO-l8jqaU6D.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Dmw-q_WW.js";import"./index-Dv0WEcwZ.js";import"./v4-CtRu48qb.js";import"./react-CnmYimJM.js";import"./iframe-BKuuSDrZ.js";import"./chunk-XP5HYGXS-DH4vAeCa.js";import"./index.es-Ba7Faqdq.js";import"./dayjs.min-CJilavqB.js";import"./ExclamationmarkTriangleFill-C6_fgdaK.js";import"./CheckmarkCircleFill-CSmfiWlp.js";import"./bind-oYjWB_aQ.js";import"./behandlingDataContext-BdfTXpp6.js";import"./index.es-C9Rz4liC.js";import"./useFormField-CjFsRywK.js";import"./Link-qmT9b3Cr.js";import"./Tooltip-BRo080lP.js";import"./Popover-CS-v8-Ax.js";const E=g(A),h=({registrerFaktaPanel:s,valgtFaktaSteg:r})=>(o.useEffect(()=>{s({id:"1",tekst:"Dette er en paneltittel",erAktiv:r==="1",harApneAksjonspunkter:!0})},[]),r!=="1"?null:e.jsx("div",{children:"Dette er et testpanel"})),j=({registrerFaktaPanel:s,valgtFaktaSteg:r})=>(o.useEffect(()=>{s({id:"2",tekst:"Annet panel",erAktiv:r==="2",harApneAksjonspunkter:!1})},[r]),r!=="2"?null:e.jsx("div",{children:"Dette er et annet panel"})),x=({registrerProsessPanel:s,valgtProsessSteg:r})=>(o.useEffect(()=>{s({id:"1",tekst:"Adopsjon",erAktiv:r==="1",harApentAksjonspunkt:!1,status:f.OPPFYLT})},[]),r!=="1"?null:e.jsx("div",{children:"Dette er et testpanel for adopsjon"})),F=({registrerProsessPanel:s,valgtProsessSteg:r})=>(o.useEffect(()=>{s({id:"2",tekst:"Fødsel",erAktiv:r==="2",harApentAksjonspunkt:!0,status:f.IKKE_OPPFYLT})},[]),r!=="2"?null:e.jsx("div",{children:"Dette er et testpanel for fødsel"})),W={title:"behandling/behandling-container",component:T,decorators:[E],args:{valgtFaktaSteg:"default",valgtProsessSteg:"default"}},t={args:{hentFaktaPaneler:s=>e.jsxs(e.Fragment,{children:[e.jsx(h,{...s}),e.jsx(j,{...s})]})}},n={args:{hentProsessPaneler:s=>e.jsxs(e.Fragment,{children:[e.jsx(x,{...s}),e.jsx(F,{...s})]})}},a={args:{hentProsessPaneler:s=>e.jsxs(e.Fragment,{children:[e.jsx(x,{...s}),e.jsx(F,{...s})]}),hentFaktaPaneler:s=>e.jsxs(e.Fragment,{children:[e.jsx(h,{...s}),e.jsx(j,{...s})]})}};var p,i,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    hentFaktaPaneler: (props: FaktaPanelInitProps) => <>
        <FaktaPanelTest1 {...props} />
        <FaktaPanelTest2 {...props} />
      </>
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,P,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    hentProsessPaneler: (props: ProsessPanelInitProps) => <>
        <ProsessPanelTest1 {...props} />
        <ProsessPanelTest2 {...props} />
      </>
  }
}`,...(c=(P=n.parameters)==null?void 0:P.docs)==null?void 0:c.source}}};var u,d,k;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(d=a.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};const X=["VisKunFaktaPaneler","VisKunProsessPaneler","VisBeggePaneler"];export{a as VisBeggePaneler,t as VisKunFaktaPaneler,n as VisKunProsessPaneler,X as __namedExportsOrder,W as default};
