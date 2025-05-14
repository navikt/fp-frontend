import{h as n,L as e,H as s}from"./fplosAvdelingslederApi-ChS6E1DC.js";import{w as u,m as b}from"./nb_NO-C7IcSU_g.js";import{g as I}from"./withIntl-N8K9WVK0.js";import"./jsx-runtime-D_zvdyIk.js";import{S as R}from"./SaksbehandlereForSakslisteForm-BOBfykoK.js";import"./decorators-Bnaor6Ku.js";import"./index-mMUbb89k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-B9oXMC6d.js";import"./index-D4MMZV7Z.js";import"./index-0CCRSEf1.js";import"./BasePrimitive-varKJqjy.js";import"./v4-CtRu48qb.js";import"./entry-preview-BaoX69wd.js";import"./iframe-KSMRIGRc.js";import"./chunk-XP5HYGXS-BpfKkqn7.js";import"./entry-preview-docs-DtNjo1hO.js";import"./index-CXQShRbs.js";import"./dayjs.min-Cke173X9.js";import"./index.es-C8sV-UuG.js";import"./index.es-BaAUNyTS.js";import"./useQuery-VAU3On3q.js";import"./FlyttReservasjonModal-CZFhc2ed.js";import"./index.es-DLgMP5Ur.js";import"./useMutation-USTs8hZz.js";import"./Box-CQzqhTbI.js";import"./Table-DpX6LgKp.js";const c=I(b),Y={title:"los/avdelingsleder/behandlingskoer/SaksbehandlereForSakslisteForm",component:R,decorators:[c,u],args:{valgtAvdelingEnhet:"Nav Vikafossen"}},a={parameters:{msw:{handlers:[n.get(e.HENT_GRUPPER,()=>s.json()),n.post(e.LAGRE_SAKSLISTE_SAKSBEHANDLER,()=>new s(null,{status:200}))]}},args:{valgtSaksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[]}},t={parameters:{msw:{handlers:[n.get(e.HENT_GRUPPER,()=>s.json()),n.post(e.LAGRE_SAKSLISTE_SAKSBEHANDLER,()=>new s(null,{status:200}))]}},args:{valgtSaksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"}]}},r={parameters:{msw:{handlers:[n.get(e.HENT_GRUPPER,()=>s.json()),n.post(e.LAGRE_SAKSLISTE_SAKSBEHANDLER,()=>new s(null,{status:200}))]}},args:{valgtSaksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"},{brukerIdent:"E24353",navn:"Eirik",ansattAvdeling:"Avdeling Å"}]}},l={parameters:{msw:{handlers:[n.get(e.HENT_GRUPPER,()=>s.json({saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"Gruppe 1",saksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"}]}]})),n.post(e.LAGRE_SAKSLISTE_SAKSBEHANDLER,()=>new s(null,{status:200}))]}},args:{valgtSaksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"},{brukerIdent:"E24353",navn:"Eirik",ansattAvdeling:"Avdeling Å"}]}};var d,i,o;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      sistEndret: '2020-01-01',
      saksbehandlerIdenter: ['S34354'],
      antallBehandlinger: 1
    },
    avdelingensSaksbehandlere: []
  }
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var p,S,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      sistEndret: '2020-01-01',
      saksbehandlerIdenter: ['S34354'],
      antallBehandlinger: 1
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
}`,...(g=(S=t.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var v,k,E;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
      sistEndret: '2020-01-01',
      saksbehandlerIdenter: ['S34354'],
      antallBehandlinger: 1
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
}`,...(E=(k=r.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var A,m,h;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
      sistEndret: '2020-01-01',
      saksbehandlerIdenter: ['S34354'],
      antallBehandlinger: 1
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
}`,...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const Z=["IngenSaksbehandlere","ToSaksbehandlere","TreSaksbehandlere","SaksbehandlereSomErGruppert"];export{a as IngenSaksbehandlere,l as SaksbehandlereSomErGruppert,t as ToSaksbehandlere,r as TreSaksbehandlere,Z as __namedExportsOrder,Y as default};
