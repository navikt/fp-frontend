import{j as c}from"./jsx-runtime-QvZ8i92b.js";import{r as o}from"./index-uubelm5h.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{Y as a}from"./index.es-Cl_yxThX.js";import{m as T}from"./nb_NO-C3qr7Zu2.js";import{g as f}from"./withIntl-hgZvmSKC.js";import{a as m}from"./alleKodeverkLos-BJud6Q-i.js";import{R as n}from"./ReservasjonerTabell-nlvitRqS.js";import"./v4-CQkTLCs1.js";import"./index-C5xsJX-I.js";import"./dayjs.min-BsYQKNhR.js";import"./FlyttReservasjonModal-DrPHQBju.js";import"./index.es-B356lO2T.js";import"./useRestApiRunner-c-Q2a7zB.js";import"./fplosRestApi-1yojVYCb.js";const A=f(T),L={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:n,decorators:[A]},e=()=>c.jsx(n,{reservasjoner:[],opphevReservasjon:s("button-click"),hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:m}),r=()=>{const[j,g]=o.useState([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:122234,behandlingType:a.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:23454,behandlingType:a.KLAGE}]),k=o.useCallback(u=>{g(R=>R.filter(b=>b.oppgaveId!==u))},[]);return c.jsx(n,{reservasjoner:j,opphevReservasjon:k,hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:m})};e.__docgenInfo={description:"",methods:[],displayName:"ViseAtIngenReservasjonerBleFunnet"};r.__docgenInfo={description:"",methods:[],displayName:"VisTabellMedReservasjoner"};var t,v,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"() => <ReservasjonerTabell reservasjoner={[]} opphevReservasjon={action('button-click') as () => Promise<string>} hentAvdelingensReservasjoner={action('button-click')} alleKodeverk={alleKodeverkLos as any} />",...(i=(v=e.parameters)==null?void 0:v.docs)==null?void 0:i.source}}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
  return <ReservasjonerTabell reservasjoner={reservasjoner} opphevReservasjon={opphevReservasjon as () => Promise<string>} hentAvdelingensReservasjoner={action('button-click')} alleKodeverk={alleKodeverkLos as any} />;
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const O=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{r as VisTabellMedReservasjoner,e as ViseAtIngenReservasjonerBleFunnet,O as __namedExportsOrder,L as default};
