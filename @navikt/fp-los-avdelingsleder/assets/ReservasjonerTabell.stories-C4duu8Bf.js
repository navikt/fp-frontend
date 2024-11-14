import{j as c}from"./jsx-runtime-QvZ8i92b.js";import{r as n}from"./index-uubelm5h.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{Y as a}from"./index.es-Cl_yxThX.js";import{m as T}from"./nb_NO-COD-RJQh.js";import{g as A}from"./withIntl-Dj43w9ql.js";import{a as m}from"./alleKodeverkLos-BJud6Q-i.js";import{R as o}from"./ReservasjonerTabell-BrywfPcS.js";import"./v4-CQkTLCs1.js";import"./index-C5xsJX-I.js";import"./useRestApiRunner-puvCxW7G.js";import"./Modal-AsiqG6ll.js";import"./dayjs.min-BsYQKNhR.js";import"./FlyttReservasjonModal-0I9TiFOd.js";import"./index.es-BEcJ7ulV.js";import"./VStack-CoISPiHd.js";import"./index.es-t6CmvQr4.js";import"./fplosRestApi-CA_rjeFW.js";import"./Table-CW0Y_YHD.js";const f=A(T),C={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:o,decorators:[f]},e=()=>c.jsx(o,{reservasjoner:[],opphevReservasjon:s("button-click"),hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:m}),r=()=>{const[g,j]=n.useState([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:122234,behandlingType:a.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:23454,behandlingType:a.KLAGE}]),k=n.useCallback(u=>{j(R=>R.filter(b=>b.oppgaveId!==u))},[]);return c.jsx(o,{reservasjoner:g,opphevReservasjon:k,hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:m})};e.__docgenInfo={description:"",methods:[],displayName:"ViseAtIngenReservasjonerBleFunnet"};r.__docgenInfo={description:"",methods:[],displayName:"VisTabellMedReservasjoner"};var t,v,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"() => <ReservasjonerTabell reservasjoner={[]} opphevReservasjon={action('button-click') as () => Promise<string>} hentAvdelingensReservasjoner={action('button-click')} alleKodeverk={alleKodeverkLos as any} />",...(i=(v=e.parameters)==null?void 0:v.docs)==null?void 0:i.source}}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [reservasjoner, setReservasjoner] = useState([{
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
    setReservasjoner(oldState => oldState.filter(s => s.oppgaveId !== oppgaveId));
  }, []);
  return <ReservasjonerTabell reservasjoner={reservasjoner} opphevReservasjon={opphevReservasjon as () => Promise<string>} hentAvdelingensReservasjoner={action('button-click')} alleKodeverk={alleKodeverkLos as any} />;
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const P=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{r as VisTabellMedReservasjoner,e as ViseAtIngenReservasjonerBleFunnet,P as __namedExportsOrder,C as default};
