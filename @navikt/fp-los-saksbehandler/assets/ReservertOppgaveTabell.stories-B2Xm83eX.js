import{j as u}from"./jsx-runtime-D_zvdyIk.js";import"./index-C4XKfyRp.js";import{r as _}from"./index.es-BGS54vZS.js";import{a as c,w as k,F as R,B as i,b as l}from"./withThemeDecorator-CrzbGyhV.js";import{u as K}from"./useQuery-DhS3ELfV.js";import{h as t,L as r,H as s,l as N}from"./fplosSaksbehandlerApi-4oezgadX.js";import{A as b}from"./andreKriterierType-DyVow8-R.js";import"./FlyttReservasjonModal-I6ZOfuwC.js";import{g as D}from"./withIntl-cL00-VIr.js";import{a as m}from"./alleKodeverkLos-DjowPRxp.js";import{R as O}from"./ReservertOppgaveTabell-DC_6hVhS.js";import{m as f}from"./nb_NO-r05kujA4.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Loader-VdSN4xK0.js";import"./v4-CtRu48qb.js";import"./entry-preview-MA36xHhL.js";import"./iframe-5zfR6s38.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-BX9G6PXb.js";import"./index-CXQShRbs.js";import"./decorators-Bnaor6Ku.js";import"./index.es-DcKHrYm4.js";import"./Modal-BEWxRbiu.js";import"./index-PUjTtqh4.js";import"./index-DTjSd7F1.js";import"./composeEventHandlers-DeH74NdU.js";import"./ChevronDown-DwtG_g9I.js";import"./Tag-8YzJ09-Z.js";import"./VStack-DW6j4exo.js";import"./index.es-CPlI8Bdg.js";import"./message-C9zpmPro.js";import"./OppgaveLabels-eFSNUp0_.js";import"./Portal-DVJhEH6w.js";import"./useLosKodeverk-D8kcLlWk.js";import"./OppgaveHandlingerMenu-DkXrqbzj.js";import"./useMutation-Cz9UN-31.js";import"./OppgaveReservasjonForlengetModal-CjIE-EE8.js";import"./NotatModal-Kp39FrKk.js";import"./ChevronRight-CNHuzYe0.js";import"./PersonHeadset-CxNU5d7s.js";import"./Table-DFKwh9Yt.js";import"./ArrowsUpDown-76YesRBz.js";const I=D(f),e=[{id:2,status:{erReservert:!0,reservertTilTidspunkt:"2019-01-01T00:54:25.455",flyttetReservasjon:{tidspunkt:"2019-02-02",uid:"23423",navn:"Espen Utvikler",begrunnelse:"Dette er en begrunnelse"}},saksnummer:"1234",personnummer:"233",navn:"Helge Utvikler",system:"SAK",behandlingstype:l.KLAGE,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2019-01-01",behandlingsfrist:"2019-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[]},{id:3,status:{erReservert:!0,reservertTilTidspunkt:"2023-01-01T00:54:25.455"},saksnummer:"964545",personnummer:"233",navn:"Bjarne Bjærke",system:"SAK",behandlingstype:l.KLAGE,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2023-01-01",behandlingsfrist:"2023-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[]},{id:4,status:{erReservert:!0,reservertTilTidspunkt:"2024-01-01T00:54:25.455"},saksnummer:"3454626",personnummer:"233",navn:"Borgil Bø",system:"SAK",behandlingstype:l.REVURDERING,behandlingStatus:i.BEHANDLING_UTREDES,opprettetTidspunkt:"2024-01-01",behandlingsfrist:"2024-01-01",fagsakYtelseType:R.FORELDREPENGER,erTilSaksbehandling:!0,behandlingId:"2",andreKriterier:[b.REVURDERING_INNTEKTSMELDING]}],he={title:"behandlingskoer/ReservertOppgaveTabell",component:O,decorators:[I,k],args:{reserverOppgave:c("button-click"),brukernavn:"T232332"},render:E=>K(N()).data?u.jsx(O,{...E}):u.jsx(_,{})},a={parameters:{msw:{handlers:[t.get(r.KODEVERK_LOS,()=>s.json(m)),t.get(r.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),t.get(r.RESERVERTE_OPPGAVER,()=>s.json(e))]}},args:{antallOppgaver:4}},p={parameters:{msw:{handlers:[t.get(r.KODEVERK_LOS,()=>s.json(m)),t.get(r.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),t.get(r.RESERVERTE_OPPGAVER,()=>s.json([]))]}}},n=(E,d)=>E.map(g=>({...g,id:g.id+d})),o={parameters:{msw:{handlers:[t.get(r.KODEVERK_LOS,()=>s.json(m)),t.get(r.FORLENG_OPPGAVERESERVASJON,()=>new s(null,{status:200})),t.get(r.RESERVERTE_OPPGAVER,()=>s.json([...e,...n(e,10),...n(e,20),...n(e,30),...n(e,40),...n(e,50),...n(e,60),...n(e,70)]))]}},args:{antallOppgaver:4}};var V,S,P;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(P=(S=a.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var T,G,A;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)), http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, {
        status: 200
      })), http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json([]))]
    }
  }
}`,...(A=(G=p.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var h,L,v;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(L=o.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};const Le=["Default","TomOppgaveTabell","VisPagineringNårMerEnn15Oppgaver"];export{a as Default,p as TomOppgaveTabell,o as VisPagineringNårMerEnn15Oppgaver,Le as __namedExportsOrder,he as default};
