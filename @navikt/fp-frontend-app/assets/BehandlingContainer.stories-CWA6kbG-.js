import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-DjhIdADd.js";import"./withPanelData-Hr9GZz6f.js";import{V as f}from"./BehandlingHenlagtPanel-DjYnMZIR.js";import{g as A}from"./withIntl-DRW5qgEC.js";import{B as i}from"./BehandlingContainer-B3d6wtSQ.js";import{B as T}from"./behandlingDataContext-BnLc3C0Q.js";import{m as v}from"./nb_NO-l8jqaU6D.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./v4-CtRu48qb.js";import"./entry-preview-BqG2msK9.js";import"./iframe-CzQLxkFX.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./index.es-hzAUfTdG.js";import"./dayjs.min-Cke173X9.js";import"./CheckmarkCircleFill-DuWHVgPy.js";import"./ExclamationmarkTriangleFill-B0ilA4Q2.js";import"./bind-oYjWB_aQ.js";import"./index.es-BN9QgVQ9.js";import"./Link-Cd3tnVA6.js";import"./Popover-AVzEdzX0.js";import"./useFormField-_wN0ox1i.js";const B=A(v),g=({registrerFaktaPanel:r,valgtFaktaSteg:s})=>(o.useEffect(()=>{r({id:"1",tekst:"Dette er en paneltittel",erAktiv:s==="1",harApneAksjonspunkter:!0})},[]),s!=="1"?null:e.jsx("div",{children:"Dette er et testpanel"})),j=({registrerFaktaPanel:r,valgtFaktaSteg:s})=>(o.useEffect(()=>{r({id:"2",tekst:"Annet panel",erAktiv:s==="2",harApneAksjonspunkter:!1})},[s]),s!=="2"?null:e.jsx("div",{children:"Dette er et annet panel"})),x=({registrerProsessPanel:r,valgtProsessSteg:s})=>(o.useEffect(()=>{r({id:"1",tekst:"Adopsjon",erAktiv:s==="1",harApentAksjonspunkt:!1,status:f.OPPFYLT})},[]),s!=="1"?null:e.jsx("div",{children:"Dette er et testpanel for adopsjon"})),F=({registrerProsessPanel:r,valgtProsessSteg:s})=>(o.useEffect(()=>{r({id:"2",tekst:"Fødsel",erAktiv:s==="2",harApentAksjonspunkt:!0,status:f.IKKE_OPPFYLT})},[]),s!=="2"?null:e.jsx("div",{children:"Dette er et testpanel for fødsel"})),W={title:"behandling/behandling-container",component:i,decorators:[B],args:{valgtFaktaSteg:"default",valgtProsessSteg:"default"},render:r=>e.jsx(T,{behandling:{},alleBehandlinger:[],fagsak:{},rettigheter:{},alleKodeverk:{},lagreAksjonspunkter:()=>Promise.resolve({}),lagreOverstyrteAksjonspunkter:()=>Promise.resolve({}),setSkalOppdatereEtterBekreftelseAvAp:()=>{},hentOgSettBehandling:()=>{},oppdaterProsessStegOgFaktaPanelIUrl:()=>{},children:e.jsx(i,{...r})})},t={args:{hentFaktaPaneler:r=>e.jsxs(e.Fragment,{children:[e.jsx(g,{...r}),e.jsx(j,{...r})]})}},n={args:{hentProsessPaneler:r=>e.jsxs(e.Fragment,{children:[e.jsx(x,{...r}),e.jsx(F,{...r})]})}},a={args:{hentProsessPaneler:r=>e.jsxs(e.Fragment,{children:[e.jsx(x,{...r}),e.jsx(F,{...r})]}),hentFaktaPaneler:r=>e.jsxs(e.Fragment,{children:[e.jsx(g,{...r}),e.jsx(j,{...r})]})}};var l,p,P;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    hentFaktaPaneler: (props: FaktaPanelInitProps) => <>
        <FaktaPanelTest1 {...props} />
        <FaktaPanelTest2 {...props} />
      </>
  }
}`,...(P=(p=t.parameters)==null?void 0:p.docs)==null?void 0:P.source}}};var m,d,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    hentProsessPaneler: (props: ProsessPanelInitProps) => <>
        <ProsessPanelTest1 {...props} />
        <ProsessPanelTest2 {...props} />
      </>
  }
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,k,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(k=a.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const X=["VisKunFaktaPaneler","VisKunProsessPaneler","VisBeggePaneler"];export{a as VisBeggePaneler,t as VisKunFaktaPaneler,n as VisKunProsessPaneler,X as __namedExportsOrder,W as default};
