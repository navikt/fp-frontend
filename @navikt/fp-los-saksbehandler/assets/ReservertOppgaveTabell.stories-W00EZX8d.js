import{w as c,j as O,F as R,B as l}from"./iframe-D70Tnhx0.js";import{Q as L}from"./index.es-BVSFFaqq.js";import{u as h}from"./useQuery-D8cK-fqL.js";import{a as t,L as r,H as s,l as k}from"./fplosSaksbehandlerApi-B2AQAuw2.js";import{A as K}from"./andreKriterierType-DyVow8-R.js";import"./FlyttReservasjonModal-KhAK_x0w.js";import{g as N}from"./withIntl-CDsxDtZ7.js";import{a as i}from"./alleKodeverkLos-DjowPRxp.js";import{R as g}from"./ReservertOppgaveTabell-h-4vmwjT.js";import{m as b}from"./nb_NO-Bc_rXWi2.js";import"./Loader-Dy4WN2O0.js";import"./index.es-BFTRVqwT.js";import"./Modal-CNbHlX5O.js";import"./index-CAFejsPJ.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-D13T2JtO.js";import"./Tag-C4X_taQ0.js";import"./VStack-CymHhqNl.js";import"./index.es-CHj6DLSC.js";import"./message-BuvWnYug.js";import"./OppgaveLabels-DZBaDqCW.js";import"./Portal-BVxXpFRI.js";import"./useLosKodeverk-D73Wiyxo.js";import"./OppgaveHandlingerMenu-Cty0vCbf.js";import"./useMutation-BPwQ7agt.js";import"./OppgaveReservasjonForlengetModal-B6q4vAB1.js";import"./NotatModal-BsJKly7Q.js";import"./ChevronRight-BDKEhxoV.js";import"./PersonHeadset-BIyO2G3t.js";import"./Table-DiImHk02.js";import"./ArrowsUpDown-Dr8XHWeS.js";const{action:f}=__STORYBOOK_MODULE_ACTIONS__,j=N(b),e=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-01-01T00:54:25.455",flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Dette er en begrunnelse"}},saksnummer:"1234",personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:l.KLAGE,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[]},{id:3,status:{erReservert:!0,reservertTilTidspunkt:"2023-01-01T00:54:25.455"},saksnummer:"964545",personnummer:"233",navn:"Bjarne Bjærke",system:"SAK",behandlingstype:l.KLAGE,opprettetTidspunkt:"2023-01-01",behandlingsfrist:"2023-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[]},{id:4,status:{erReservert:!0,reservertTilTidspunkt:"2024-01-01T00:54:25.455"},saksnummer:"3454626",personnummer:"233",navn:"Borgil Bø",system:"SAK",behandlingstype:l.REVURDERING,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[K.REVURDERING_INNTEKTSMELDING]}],ie={title:"behandlingskoer/ReservertOppgaveTabell",component:g,decorators:[j,c],args:{reserverOppgave:f("button-click"),brukernavn:"T232332"},render:E=>h(k()).data?O.jsx(g,{...E}):O.jsx(L,{})},a={parameters:{msw:{handlers:[t.get(r.KODEVERK_LOS,()=>s.json(i)),t.get(r.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),t.get(r.RESERVERTE_OPPGAVER,()=>s.json(e))]}},args:{antallOppgaver:4}},p={parameters:{msw:{handlers:[t.get(r.KODEVERK_LOS,()=>s.json(i)),t.get(r.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),t.get(r.RESERVERTE_OPPGAVER,()=>s.json([]))]}}},n=(E,m)=>E.map(d=>({...d,id:d.id+m})),o={parameters:{msw:{handlers:[t.get(r.KODEVERK_LOS,()=>s.json(i)),t.get(r.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),t.get(r.RESERVERTE_OPPGAVER,()=>s.json([...e,...n(e,10),...n(e,20),...n(e,30),...n(e,40),...n(e,50),...n(e,60),...n(e,70)]))]}},args:{antallOppgaver:4}};var u,V,P;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json(RESERVERTE_OPPGAVER))]
    }
  },
  args: {
    antallOppgaver: 4
  }
}`,...(P=(V=a.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var T,S,_;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json([]))]
    }
  }
}`,...(_=(S=p.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var A,G,v;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json([...RESERVERTE_OPPGAVER, ...oppdatertId(RESERVERTE_OPPGAVER, 10), ...oppdatertId(RESERVERTE_OPPGAVER, 20), ...oppdatertId(RESERVERTE_OPPGAVER, 30), ...oppdatertId(RESERVERTE_OPPGAVER, 40), ...oppdatertId(RESERVERTE_OPPGAVER, 50), ...oppdatertId(RESERVERTE_OPPGAVER, 60), ...oppdatertId(RESERVERTE_OPPGAVER, 70)]))]
    }
  },
  args: {
    antallOppgaver: 4
  }
}`,...(v=(G=o.parameters)==null?void 0:G.docs)==null?void 0:v.source}}};const me=["Default","TomOppgaveTabell","VisPagineringNårMerEnn15Oppgaver"];export{a as Default,p as TomOppgaveTabell,o as VisPagineringNårMerEnn15Oppgaver,me as __namedExportsOrder,ie as default};
