import{h as t,L as r,H as l}from"./fplosAvdelingslederApi-ByBFIqlo.js";import{w as T,m as w}from"./nb_NO-B4p7h2ZR.js";import{g as B}from"./withIntl-CwsmLzvd.js";import{S as K}from"./SaksbehandlereForSakslisteForm-CIf4Vz_s.js";import"./decorators-DIzpaN6C.js";import"./index-B5OHeJSP.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Modal-BQwjsmca.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./jsx-runtime-CLpGMVip.js";import"./BasePrimitive-DJrLZ3qF.js";import"./index.es-D6ktstkZ.js";import"./index.es-1l7GYZKP.js";import"./dayjs.min-CJilavqB.js";import"./useQuery-DFVsKHAH.js";import"./useMutation-DW66zKiQ.js";import"./Box-l8JzpD1y.js";import"./Table-CBNmRfiX.js";const P=B(w),en={title:"los/avdelingsleder/behandlingskoer/SaksbehandlereForSakslisteForm",component:K,decorators:[P,T],args:{valgtAvdelingEnhet:"Nav Vikafossen"}},n={parameters:{msw:{handlers:[t.get(r.HENT_GRUPPER,()=>l.json()),t.post(r.LAGRE_SAKSLISTE_SAKSBEHANDLER,()=>new l(null,{status:200}))]}},args:{valgtSaksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[]}},e={parameters:{msw:{handlers:[t.get(r.HENT_GRUPPER,()=>l.json()),t.post(r.LAGRE_SAKSLISTE_SAKSBEHANDLER,()=>new l(null,{status:200}))]}},args:{valgtSaksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"}]}},s={parameters:{msw:{handlers:[t.get(r.HENT_GRUPPER,()=>l.json()),t.post(r.LAGRE_SAKSLISTE_SAKSBEHANDLER,()=>new l(null,{status:200}))]}},args:{valgtSaksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"},{brukerIdent:"E24353",navn:"Eirik",ansattAvdeling:"Avdeling Å"}]}},a={parameters:{msw:{handlers:[t.get(r.HENT_GRUPPER,()=>l.json({saksbehandlerGrupper:[{gruppeId:1,gruppeNavn:"Gruppe 1",saksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"}]}]})),t.post(r.LAGRE_SAKSLISTE_SAKSBEHANDLER,()=>new l(null,{status:200}))]}},args:{valgtSaksliste:{sakslisteId:1,navn:"Saksliste 1",sistEndret:"2020-01-01",saksbehandlerIdenter:["S34354"],antallBehandlinger:1},avdelingensSaksbehandlere:[{brukerIdent:"E23232",navn:"Espen Utvikler",ansattAvdeling:"Avdeling Å"},{brukerIdent:"S34354",navn:"Steffen",ansattAvdeling:"Avdeling Å"},{brukerIdent:"E24353",navn:"Eirik",ansattAvdeling:"Avdeling Å"}]}};var d,i,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var o,S,v;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(v=(S=e.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var g,k,E;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(E=(k=s.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var A,u,m;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,I,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(I=n.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var R,c,L;e.parameters={...e.parameters,docs:{...(R=e.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(c=e.parameters)==null?void 0:c.docs)==null?void 0:L.source}}};var H,U,_;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(_=(U=s.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var G,f,N;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(N=(f=a.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};const sn=["IngenSaksbehandlere","ToSaksbehandlere","TreSaksbehandlere","SaksbehandlereSomErGruppert"];export{n as IngenSaksbehandlere,a as SaksbehandlereSomErGruppert,e as ToSaksbehandlere,s as TreSaksbehandlere,sn as __namedExportsOrder,en as default};
