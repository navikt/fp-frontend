import{R as c,r as o}from"./index-DVXBtNgz.js";import{a as s}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{Y as a}from"./index.es-Cl_yxThX.js";import{g as T,m as A}from"./nb_NO-CHG6adMY.js";import{a as m}from"./alleKodeverkLos-BJud6Q-i.js";import{R as n}from"./ReservasjonerTabell-Bsr-veEX.js";import"./v4-CQkTLCs1.js";import"./index-Cbx7Fas8.js";import"./tslib.es6-CMwweBXX.js";import"./FlyttReservasjonModal-BbGeKIhX.js";import"./index.es-CWIpGV0D.js";import"./useRestApiRunner-DMqLTnzH.js";import"./fplosRestApi-Cec8OPf6.js";const f=T(A),F={title:"los/avdelingsleder/reservasjoner/ReservasjonerTabell",component:n,decorators:[f]},e=()=>c.createElement(n,{reservasjoner:[],opphevReservasjon:s("button-click"),hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:m}),r=()=>{const[g,j]=o.useState([{reservertAvUid:"wsfwer-sdsfd",reservertAvNavn:"Espen Utvikler",reservertTilTidspunkt:"2020-01-10",oppgaveId:1,oppgaveSaksNr:122234,behandlingType:a.FORSTEGANGSSOKNAD},{reservertAvUid:"gtfbrt-tbrtb",reservertAvNavn:"Eirik Utvikler",reservertTilTidspunkt:"2020-01-01",oppgaveId:2,oppgaveSaksNr:23454,behandlingType:a.KLAGE}]),k=o.useCallback(R=>{j(b=>b.filter(u=>u.oppgaveId!==R))},[]);return c.createElement(n,{reservasjoner:g,opphevReservasjon:k,hentAvdelingensReservasjoner:s("button-click"),alleKodeverk:m})};e.__docgenInfo={description:"",methods:[],displayName:"ViseAtIngenReservasjonerBleFunnet"};r.__docgenInfo={description:"",methods:[],displayName:"VisTabellMedReservasjoner"};var t,v,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"() => <ReservasjonerTabell reservasjoner={[]} opphevReservasjon={(action('button-click') as () => Promise<string>)} hentAvdelingensReservasjoner={action('button-click')} alleKodeverk={(alleKodeverkLos as any)} />",...(i=(v=e.parameters)==null?void 0:v.docs)==null?void 0:i.source}}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const L=["ViseAtIngenReservasjonerBleFunnet","VisTabellMedReservasjoner"];export{r as VisTabellMedReservasjoner,e as ViseAtIngenReservasjonerBleFunnet,L as __namedExportsOrder,F as default};
