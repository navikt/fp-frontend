import{j as m}from"./jsx-runtime-QvZ8i92b.js";import{r as n}from"./index-uubelm5h.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./aktivitetStatus-B1m96ipJ.js";import{B as a}from"./behandlingType-BdbjGMJD.js";import{m as T}from"./nb_NO-Zqge3fS6.js";import{g as A}from"./withIntl-Bv-P8ZIY.js";import{a as c}from"./alleKodeverkLos-BJud6Q-i.js";import{R as o}from"./ReservasjonerTabell-CKajHZMc.js";import"./v4-CQkTLCs1.js";import"./index-C5xsJX-I.js";import"./index.es-DGARnTEE.js";import"./Modal-nRd4VDWO.js";import"./dayjs.min-BsYQKNhR.js";import"./kodeverkTyper-CavWL6Ds.js";import"./FlyttReservasjonModal-CMPV57WJ.js";import"./index.es-C82Zs4UF.js";import"./VStack-C7XzQG3E.js";import"./index.es-BjtZFtlt.js";import"./useRestApiRunner-Dz_KBbnA.js";import"./fplosRestApi-DIvKj8Ld.js";import"./Table-Dp5M2zv1.js";const h=A(T),z={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:o,decorators:[h]},e=()=>m.jsx(o,{reservasjoner:[],opphevReservasjon:s("button-click"),hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:c}),r=()=>{const[g,j]=n.useState([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:122234,behandlingType:a.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:23454,behandlingType:a.KLAGE}]),k=n.useCallback(u=>{j(R=>R.filter(b=>b.oppgaveId!==u))},[]);return m.jsx(o,{reservasjoner:g,opphevReservasjon:k,hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:c})};e.__docgenInfo={description:"",methods:[],displayName:"ViseAtIngenReservasjonerBleFunnet"};r.__docgenInfo={description:"",methods:[],displayName:"VisTabellMedReservasjoner"};var t,i,v;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"() => <ReservasjonerTabell reservasjoner={[]} opphevReservasjon={action('button-click') as () => Promise<string>} hentAvdelingensReservasjoner={action('button-click')} alleKodeverk={alleKodeverkLos as any} />",...(v=(i=e.parameters)==null?void 0:i.docs)==null?void 0:v.source}}};var p,l,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const H=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{r as VisTabellMedReservasjoner,e as ViseAtIngenReservasjonerBleFunnet,H as __namedExportsOrder,z as default};
