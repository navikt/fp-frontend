import{j as r,g as I,r as T}from"./iframe--vOKNX8W.js";import{Q as _}from"./index.es-DAOaPrXD.js";import{u as f}from"./useQuery-DS_kSKw0.js";import{h as o,L as i,b as d,l as N}from"./fplosAvdelingslederApi-BG5Uiiia.js";import{g as O}from"./withIntl-AW3Sx-SP.js";import{a as j}from"./useLosKodeverk-DfbS9OVv.js";import{G as k}from"./GjeldendeSakslisterTabell-DPIeVVV-.js";import{m as x}from"./nb_NO-DX-Byl_6.js";import"./Modal-C4Imirkn.js";import"./index-oZsAXA3K.js";import"./BasePrimitive-CkrbCjHy.js";import"./useMutation-Br5kCffE.js";import"./SletteSakslisteModal-NEZvX2fv.js";import"./Table-Ddytag78.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,B=O(x),M={title:"los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell",component:k,decorators:[B,I],parameters:{msw:{handlers:[o.get(i.KODEVERK_LOS,()=>d.json(j)),o.post(i.SLETT_SAKSLISTE,()=>new d(null,{status:200}))]}},args:{setValgtSakslisteId:n("button-click"),resetValgtSakslisteId:n("button-click"),lagNySaksliste:n("button-click"),valgtAvdelingEnhet:"1",children:r.jsx("div",{children:"test"})},render:S=>{const[e,b]=T.useState(S),{data:v}=f(N()),E=()=>{var l;(l=e.lagNySaksliste)==null||l.call(e),b(a=>({...a,sakslister:a.sakslister.concat({sakslisteId:a.sakslister.length===1?1:2,navn:"Ny liste",sistEndret:"2020-01-01",saksbehandlerIdenter:[],antallBehandlinger:1})}))};return v?r.jsx(k,{...e,lagNySaksliste:E}):r.jsx(_,{})}},s={args:{sakslister:[]}},t={args:{sakslister:[{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["R23233"],antallBehandlinger:1}],oppgaverForAvdelingAntall:1}};var m,p,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    sakslister: []
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,h,u;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    sakslister: [{
      sakslisteId: 1,
      navn: 'Saksliste 1',
      sistEndret: '2020-01-01',
      saksbehandlerIdenter: ['R23233'],
      antallBehandlinger: 1
    }],
    oppgaverForAvdelingAntall: 1
  }
}`,...(u=(h=t.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const Y=["TabellNårDetIkkeFinnesBehandlingskøer","TabellNårDetFinnesEnBehandlingskø"];export{t as TabellNårDetFinnesEnBehandlingskø,s as TabellNårDetIkkeFinnesBehandlingskøer,Y as __namedExportsOrder,M as default};
