import{j as c}from"./jsx-runtime-9c4ae004.js";import{r as o}from"./index-1b03fe98.js";import{a as s}from"./chunk-AY7I2SME-c7b6cf8a.js";import{Y as a}from"./index.es-657e045f.js";import{B as T,j,m as A}from"./nb_NO-7fc4d3fe.js";import{R as n}from"./ReservasjonerTabell-33e34c3d.js";import"./index-6fd5a17b.js";import"./index.es-0ce23978.js";import"./index.es-d67466a8.js";import"./index.es-dcafba10.js";import"./Provider-862e7645.js";import"./Detail-95eaaf87.js";import"./Heading-87cc8cdf.js";import"./remove-2f21eb3e.js";import"./fplosRestApi-beda4f04.js";const f=T(A),V={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:n,decorators:[f]},e=()=>c.jsx(n,{reservasjoner:[],opphevReservasjon:s("button-click"),hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:j}),r=()=>{const[m,g]=o.useState([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:122234,behandlingType:a.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:23454,behandlingType:a.KLAGE}]),k=o.useCallback(u=>{g(b=>b.filter(R=>R.oppgaveId!==u))},[]);return c.jsx(n,{reservasjoner:m,opphevReservasjon:k,hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:j})};var t,v,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"() => <ReservasjonerTabell reservasjoner={[]} opphevReservasjon={(action('button-click') as () => Promise<string>)} hentAvdelingensReservasjoner={action('button-click')} alleKodeverk={(alleKodeverkLos as any)} />",...(p=(v=e.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const [reservasjoner, fjernReservasjon] = useState([{
    reservertAvUid: 'wsfwer-sdsfd',
    reservertAvNavn: 'Espen Utvikler',
    reservertTilTidspunkt: '2020-01-10',
    oppgaveId: 1,
    oppgaveSaksNr: 122234,
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD
  }, {
    reservertAvUid: 'gtfbrt-tbrtb',
    reservertAvNavn: 'Eirik Utvikler',
    reservertTilTidspunkt: '2020-01-01',
    oppgaveId: 2,
    oppgaveSaksNr: 23454,
    behandlingType: BehandlingType.KLAGE
  }]);
  const opphevReservasjon = useCallback((oppgaveId: number) => {
    fjernReservasjon(oldState => oldState.filter(s => s.oppgaveId !== oppgaveId));
  }, []);
  return <ReservasjonerTabell reservasjoner={reservasjoner} opphevReservasjon={(opphevReservasjon as () => Promise<string>)} hentAvdelingensReservasjoner={action('button-click')} alleKodeverk={(alleKodeverkLos as any)} />;
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const _=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{r as VisTabellMedReservasjoner,e as ViseAtIngenReservasjonerBleFunnet,_ as __namedExportsOrder,V as default};
//# sourceMappingURL=ReservasjonerTabell.stories-6dda17b5.js.map
