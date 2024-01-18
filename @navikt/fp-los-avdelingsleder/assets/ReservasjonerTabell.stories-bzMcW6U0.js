import{j as c}from"./jsx-runtime-CUEGZZF9.js";import{r as o}from"./index-DogsOklH.js";import{a as s}from"./chunk-WFFRPTHA-zlNDxfrq.js";import{Y as a}from"./index.es-LzEcK_Mh.js";import{g as T,m as A}from"./nb_NO-Lpx64cL7.js";import{a as m}from"./alleKodeverkLos-Qz5F4oTQ.js";import{R as n}from"./ReservasjonerTabell-w7xG0QxX.js";import"./preview-errors-7FWlPnjy.js";import"./index-PPLHz8o0.js";import"./index-MroJ3egt.js";import"./FlyttReservasjonModal-hSRBwS87.js";import"./index.es-54D7gkuX.js";import"./useGlobalStateRestApiData-A2OyOdo-.js";import"./fplosRestApi-rASv3eze.js";const f=T(A),F={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:n,decorators:[f]},e=()=>c(n,{reservasjoner:[],opphevReservasjon:s("button-click"),hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:m}),r=()=>{const[g,j]=o.useState([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:122234,behandlingType:a.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:23454,behandlingType:a.KLAGE}]),k=o.useCallback(b=>{j(u=>u.filter(R=>R.oppgaveId!==b))},[]);return c(n,{reservasjoner:g,opphevReservasjon:k,hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:m})};var t,v,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"() => <ReservasjonerTabell reservasjoner={[]} opphevReservasjon={(action('button-click') as () => Promise<string>)} hentAvdelingensReservasjoner={action('button-click')} alleKodeverk={(alleKodeverkLos as any)} />",...(p=(v=e.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const V=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{r as VisTabellMedReservasjoner,e as ViseAtIngenReservasjonerBleFunnet,V as __namedExportsOrder,F as default};
