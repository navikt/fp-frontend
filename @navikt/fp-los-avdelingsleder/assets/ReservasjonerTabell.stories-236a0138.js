import{j as c}from"./jsx-runtime-86dfebf6.js";import{r as o}from"./index-1b03fe98.js";import{a as s}from"./chunk-AY7I2SME-5eb1ab46.js";import{Y as a}from"./index.es-657e045f.js";import{g as T,m as A}from"./nb_NO-7d7a9a16.js";import{a as g}from"./alleKodeverkLos-5ac5bd02.js";import{R as n}from"./ReservasjonerTabell-f91869ae.js";import"./index-6fd5a17b.js";import"./FlyttReservasjonModal-bd269abd.js";import"./index.es-6bc5cfcb.js";import"./useGlobalStateRestApiData-20592075.js";import"./fplosRestApi-e273a6f1.js";const f=T(A),x={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:n,decorators:[f]},e=()=>c(n,{reservasjoner:[],opphevReservasjon:s("button-click"),hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:g}),r=()=>{const[j,m]=o.useState([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:122234,behandlingType:a.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:23454,behandlingType:a.KLAGE}]),k=o.useCallback(b=>{m(u=>u.filter(R=>R.oppgaveId!==b))},[]);return c(n,{reservasjoner:j,opphevReservasjon:k,hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:g})};var t,v,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"() => <ReservasjonerTabell reservasjoner={[]} opphevReservasjon={(action('button-click') as () => Promise<string>)} hentAvdelingensReservasjoner={action('button-click')} alleKodeverk={(alleKodeverkLos as any)} />",...(p=(v=e.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var l,i,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const B=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{r as VisTabellMedReservasjoner,e as ViseAtIngenReservasjonerBleFunnet,B as __namedExportsOrder,x as default};
//# sourceMappingURL=ReservasjonerTabell.stories-236a0138.js.map
