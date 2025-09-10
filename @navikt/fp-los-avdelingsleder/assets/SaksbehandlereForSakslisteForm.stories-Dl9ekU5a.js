import{h as e,L as n,b as s}from"./fplosAvdelingslederApi-Dy653Ku3.js";import{g as d}from"./iframe-f-7EvuRD.js";import{g as i}from"./withIntl-BE6cFErS.js";import{S as o}from"./SaksbehandlereForSakslisteForm-Do1nNCNv.js";import{m as S}from"./nb_NO-C4DeeY-a.js";import"./BasePrimitive-FfroG3S2.js";import"./preload-helper-D9Z9MdNV.js";import"./index.es-CS62hXhn.js";import"./index.es-N3Vy7UuC.js";import"./Modal-BiKe3c-S.js";import"./index-BB8_bpzw.js";import"./useQuery-DOlQ8ZbJ.js";import"./FlyttReservasjonModal-BpZayJen.js";import"./useMutation-BapcIXxt.js";import"./Box-DBvm6LHs.js";import"./Table-gwuG9u68.js";const p=i(S),f={title:"los/avdelingsleder/behandlingskoer/SaksbehandlereForSakslisteForm",component:o,decorators:[p,d],args:{valgtAvdelingEnhet:"Nav Vikafossen"}},a={parameters:{msw:{handlers:[e.get(n.HENT_GRUPPER,()=>s.json()),e.post(n.LAGRE_SAKSLISTE_SAKSBEHANDLER,()=>new s(null,{status:200}))]}},args:{valgtSaksliste:{sakslisteId:1,navn:"Saksliste 1",saksbehandlerIdenter:["S34354"]},avdelingensSaksbehandlere:[]}},t={parameters:{msw:{handlers:[e.get(n.HENT_GRUPPER,()=>s.json()),e.post(n.LAGRE_SAKSLISTE_SAKSBEHANDLER,()=>new s(null,{status:200}))]}},args:{valgtSaksliste:{sakslisteId:1,navn:"Saksliste 1",saksbehandlerIdenter:["S34354"]},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"}]}},r={parameters:{msw:{handlers:[e.get(n.HENT_GRUPPER,()=>s.json()),e.post(n.LAGRE_SAKSLISTE_SAKSBEHANDLER,()=>new s(null,{status:200}))]}},args:{valgtSaksliste:{sakslisteId:1,navn:"Saksliste 1",saksbehandlerIdenter:["S34354"]},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"},{brukerIdent:"E24353",navn:"Eirik",ansattAvdeling:"Avdeling Å"}]}},l={parameters:{msw:{handlers:[e.get(n.HENT_GRUPPER,()=>s.json({saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"Gruppe 1",saksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"}]}]})),e.post(n.LAGRE_SAKSLISTE_SAKSBEHANDLER,()=>new s(null,{status:200}))]}},args:{valgtSaksliste:{sakslisteId:1,navn:"Saksliste 1",saksbehandlerIdenter:["S34354"]},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"},{brukerIdent:"E24353",navn:"Eirik",ansattAvdeling:"Avdeling Å"}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.HENT_GRUPPER, () => HttpResponse.json()), http.post(LosUrl.LAGRE_SAKSLISTE_SAKSBEHANDLER, () => new HttpResponse(null, {
        status: 200
      }))]
    }
  },
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: 'Saksliste 1',
      saksbehandlerIdenter: ['S34354']
    },
    avdelingensSaksbehandlere: []
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.HENT_GRUPPER, () => HttpResponse.json()), http.post(LosUrl.LAGRE_SAKSLISTE_SAKSBEHANDLER, () => new HttpResponse(null, {
        status: 200
      }))]
    }
  },
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: 'Saksliste 1',
      saksbehandlerIdenter: ['S34354']
    },
    avdelingensSaksbehandlere: [{
      brukerIdent: 'E23232',
      navn: 'Espen Utvikler',
      ansattAvdeling: 'Avdeling Å'
    }, {
      brukerIdent: 'S34354',
      navn: 'Steffen',
      ansattAvdeling: 'Avdeling Å'
    }]
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.HENT_GRUPPER, () => HttpResponse.json()), http.post(LosUrl.LAGRE_SAKSLISTE_SAKSBEHANDLER, () => new HttpResponse(null, {
        status: 200
      }))]
    }
  },
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: 'Saksliste 1',
      saksbehandlerIdenter: ['S34354']
    },
    avdelingensSaksbehandlere: [{
      brukerIdent: 'E23232',
      navn: 'Espen Utvikler',
      ansattAvdeling: 'Avdeling Å'
    }, {
      brukerIdent: 'S34354',
      navn: 'Steffen',
      ansattAvdeling: 'Avdeling Å'
    }, {
      brukerIdent: 'E24353',
      navn: 'Eirik',
      ansattAvdeling: 'Avdeling Å'
    }]
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.HENT_GRUPPER, () => HttpResponse.json({
        saksbehandlerGrupper: [{
          gruppeId: 1,
          gruppeNavn: 'Gruppe 1',
          saksbehandlere: [{
            brukerIdent: 'E23232',
            navn: 'Espen Utvikler',
            ansattAvdeling: 'Avdeling Å'
          }, {
            brukerIdent: 'S34354',
            navn: 'Steffen',
            ansattAvdeling: 'Avdeling Å'
          }]
        }]
      })), http.post(LosUrl.LAGRE_SAKSLISTE_SAKSBEHANDLER, () => new HttpResponse(null, {
        status: 200
      }))]
    }
  },
  args: {
    valgtSaksliste: {
      sakslisteId: 1,
      navn: 'Saksliste 1',
      saksbehandlerIdenter: ['S34354']
    },
    avdelingensSaksbehandlere: [{
      brukerIdent: 'E23232',
      navn: 'Espen Utvikler',
      ansattAvdeling: 'Avdeling Å'
    }, {
      brukerIdent: 'S34354',
      navn: 'Steffen',
      ansattAvdeling: 'Avdeling Å'
    }, {
      brukerIdent: 'E24353',
      navn: 'Eirik',
      ansattAvdeling: 'Avdeling Å'
    }]
  }
}`,...l.parameters?.docs?.source}}};const G=["IngenSaksbehandlere","ToSaksbehandlere","TreSaksbehandlere","SaksbehandlereSomErGruppert"];export{a as IngenSaksbehandlere,l as SaksbehandlereSomErGruppert,t as ToSaksbehandlere,r as TreSaksbehandlere,G as __namedExportsOrder,f as default};
