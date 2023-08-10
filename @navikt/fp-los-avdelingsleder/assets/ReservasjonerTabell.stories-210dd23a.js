import{j as c}from"./jsx-runtime-69eee039.js";import{r as o}from"./index-7c191284.js";import{a as s}from"./chunk-AY7I2SME-c7b6cf8a.js";import{Y as a}from"./index.es-657e045f.js";import{B as T,j as m,m as A}from"./nb_NO-7b970f8e.js";import{R as n}from"./ReservasjonerTabell-82ba1599.js";import"./tslib.es6-45626265.js";import"./index-ecbee218.js";import"./index.es-3716ffc0.js";import"./index.es-d43f158f.js";import"./index.es-6dfc8135.js";import"./Provider-b10fa804.js";import"./index-b3a39e30.js";import"./Panel-d69a7370.js";import"./Heading-7322b494.js";import"./remove-2f21eb3e.js";import"./fplosRestApi-06437043.js";const f=T(A),C={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:n,decorators:[f]},e=()=>c.jsx(n,{reservasjoner:[],opphevReservasjon:s("button-click"),hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:m}),r=()=>{const[j,g]=o.useState([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:122234,behandlingType:a.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:23454,behandlingType:a.KLAGE}]),k=o.useCallback(u=>{g(b=>b.filter(R=>R.oppgaveId!==u))},[]);return c.jsx(n,{reservasjoner:j,opphevReservasjon:k,hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:m})};var t,v,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"() => <ReservasjonerTabell reservasjoner={[]} opphevReservasjon={(action('button-click') as () => Promise<string>)} hentAvdelingensReservasjoner={action('button-click')} alleKodeverk={(alleKodeverkLos as any)} />",...(p=(v=e.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const D=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{r as VisTabellMedReservasjoner,e as ViseAtIngenReservasjonerBleFunnet,D as __namedExportsOrder,C as default};
//# sourceMappingURL=ReservasjonerTabell.stories-210dd23a.js.map
