import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function _(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=_(r);fetch(r.href,t)}})();const E="modulepreload",O=function(n,s){return new URL(n,s).href},d={},e=function(s,_,l){if(!_||_.length===0)return s();const r=document.getElementsByTagName("link");return Promise.all(_.map(t=>{if(t=O(t,l),t in d)return;d[t]=!0;const o=t.endsWith(".css"),u=o?'[rel="stylesheet"]':"";if(!!l)for(let a=r.length-1;a>=0;a--){const m=r[a];if(m.href===t&&(!o||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${u}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":E,o||(i.as="script",i.crossOrigin=""),i.href=t,document.head.appendChild(i),o)return new Promise((a,m)=>{i.addEventListener("load",a),i.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>s()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,c=P({page:"preview"});R.setChannel(c);window.__STORYBOOK_ADDONS_CHANNEL__=c;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=c);const T={"./src/AvdelingslederIndex.stories.tsx":async()=>e(()=>import("./AvdelingslederIndex.stories-75efddac.js"),["./AvdelingslederIndex.stories-75efddac.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./index.es-28aae904.js","./index.es-dcafba10.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./fplosRestApi-beda4f04.js","./IkkeTilgangTilAvdelingslederPanel-a8f73cd2.js","./Panel-b15c2a27.js","./Heading-39bd052b.js","./IkkeTilgangTilAvdelingslederPanel-969151b1.css","./StoreValuesInLocalStorage-6ed602ef.js","./FordelingAvBehandlingstypePanel-39731653.js","./index.es-657e045f.js","./index.es-30e2a5f8.js","./index.es-efd3830f.js","./Provider-c82db7e7.js","./Detail-a958125f.js","./useLosKodeverk-3c749e2b.js","./TilBehandlingPanel-f0eb15a4.js","./isSameOrAfter-48a89950.js","./isSameOrBefore-ea99da6c.js","./ManueltPaVentPanel-3970b5b8.js","./OppgaverPerForsteStonadsdagPanel-5f3a0a77.js","./OppgaverSomErApneEllerPaVentPanel-622a4b1d.js","./LeggTilSaksbehandlerForm-4d026900.js","./LeggTilSaksbehandlerForm-e3a2104e.css","./SaksbehandlereTabell-54041cb9.js","./SletteSaksbehandlerModal-8cf1f195.js","./SletteSaksbehandlerModal-d7a40b9e.css","./SaksbehandlereTabell-e87f1f92.css","./EndreSakslisterPanel-f862c7ab.js","./GjeldendeSakslisterTabell-0492ae5c.js","./SletteSakslisteModal-5aa6a1b1.js","./GjeldendeSakslisterTabell-a73da7fe.css","./SaksbehandlereForSakslisteForm-e6b26036.js","./SaksbehandlereForSakslisteForm-ee9a32b3.css","./UtvalgskriterierForSakslisteForm-23b45589.js","./BehandlingstypeVelger-78a78376.js","./AndreKriterierVelger-7d209f83.js","./AndreKriterierVelger-40f72b2b.css","./FagsakYtelseTypeVelger-75726428.js","./SorteringVelger-d9dd4f1f.js","./SorteringVelger-c4b4c7bc.css","./UtvalgskriterierForSakslisteForm-9fe6e495.css","./EndreSakslisterPanel-3e035a41.css","./ReservasjonerTabell-06dc4c33.js","./ReservasjonerTabell-b1229052.css","./extends-98964cd2.js","./AvdelingslederIndex.stories-86114713.css"],import.meta.url),"./src/components/IkkeTilgangTilAvdelingslederPanel.stories.tsx":async()=>e(()=>import("./IkkeTilgangTilAvdelingslederPanel.stories-3acfedd5.js"),["./IkkeTilgangTilAvdelingslederPanel.stories-3acfedd5.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./IkkeTilgangTilAvdelingslederPanel-a8f73cd2.js","./Panel-b15c2a27.js","./Heading-39bd052b.js","./IkkeTilgangTilAvdelingslederPanel-969151b1.css"],import.meta.url),"./src/saksbehandlere/components/SletteSaksbehandlerModal.stories.tsx":async()=>e(()=>import("./SletteSaksbehandlerModal.stories-47d034ca.js"),["./SletteSaksbehandlerModal.stories-47d034ca.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./SletteSaksbehandlerModal-8cf1f195.js","./Provider-c82db7e7.js","./Detail-a958125f.js","./Heading-39bd052b.js","./SletteSaksbehandlerModal-d7a40b9e.css"],import.meta.url),"./src/saksbehandlere/components/SaksbehandlereTabell.stories.tsx":async()=>e(()=>import("./SaksbehandlereTabell.stories-a6edcb1f.js"),["./SaksbehandlereTabell.stories-a6edcb1f.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./index.es-28aae904.js","./index.es-dcafba10.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./SaksbehandlereTabell-54041cb9.js","./SletteSaksbehandlerModal-8cf1f195.js","./Provider-c82db7e7.js","./Detail-a958125f.js","./Heading-39bd052b.js","./SletteSaksbehandlerModal-d7a40b9e.css","./fplosRestApi-beda4f04.js","./SaksbehandlereTabell-e87f1f92.css"],import.meta.url),"./src/saksbehandlere/components/LeggTilSaksbehandlerForm.stories.tsx":async()=>e(()=>import("./LeggTilSaksbehandlerForm.stories-469e6f5c.js"),["./LeggTilSaksbehandlerForm.stories-469e6f5c.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./index.es-28aae904.js","./index.es-dcafba10.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./LeggTilSaksbehandlerForm-4d026900.js","./index.es-efd3830f.js","./fplosRestApi-beda4f04.js","./LeggTilSaksbehandlerForm-e3a2104e.css"],import.meta.url),"./src/reservasjoner/components/ReservasjonerTabell.stories.tsx":async()=>e(()=>import("./ReservasjonerTabell.stories-c46cae51.js"),["./ReservasjonerTabell.stories-c46cae51.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./index.es-657e045f.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./ReservasjonerTabell-06dc4c33.js","./index.es-30e2a5f8.js","./index.es-efd3830f.js","./index.es-dcafba10.js","./Provider-c82db7e7.js","./Detail-a958125f.js","./Heading-39bd052b.js","./fplosRestApi-beda4f04.js","./ReservasjonerTabell-b1229052.css"],import.meta.url),"./src/behandlingskoer/components/SletteSakslisteModal.stories.tsx":async()=>e(()=>import("./SletteSakslisteModal.stories-94f9c1db.js"),["./SletteSakslisteModal.stories-94f9c1db.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./SletteSakslisteModal-5aa6a1b1.js","./Provider-c82db7e7.js","./Detail-a958125f.js","./Heading-39bd052b.js","./SletteSaksbehandlerModal-d7a40b9e.css"],import.meta.url),"./src/behandlingskoer/components/GjeldendeSakslisterTabell.stories.tsx":async()=>e(()=>import("./GjeldendeSakslisterTabell.stories-74769e97.js"),["./GjeldendeSakslisterTabell.stories-74769e97.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./index.es-28aae904.js","./index.es-dcafba10.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./fplosRestApi-beda4f04.js","./GjeldendeSakslisterTabell-0492ae5c.js","./index.es-657e045f.js","./useLosKodeverk-3c749e2b.js","./SletteSakslisteModal-5aa6a1b1.js","./Provider-c82db7e7.js","./Detail-a958125f.js","./Heading-39bd052b.js","./SletteSaksbehandlerModal-d7a40b9e.css","./GjeldendeSakslisterTabell-a73da7fe.css"],import.meta.url),"./src/behandlingskoer/components/EndreSakslisterPanel.stories.tsx":async()=>e(()=>import("./EndreSakslisterPanel.stories-c153a0bb.js"),["./EndreSakslisterPanel.stories-c153a0bb.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./index.es-657e045f.js","./index.es-28aae904.js","./index.es-dcafba10.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./EndreSakslisterPanel-f862c7ab.js","./fplosRestApi-beda4f04.js","./GjeldendeSakslisterTabell-0492ae5c.js","./useLosKodeverk-3c749e2b.js","./SletteSakslisteModal-5aa6a1b1.js","./Provider-c82db7e7.js","./Detail-a958125f.js","./Heading-39bd052b.js","./SletteSaksbehandlerModal-d7a40b9e.css","./GjeldendeSakslisterTabell-a73da7fe.css","./SaksbehandlereForSakslisteForm-e6b26036.js","./Panel-b15c2a27.js","./SaksbehandlereForSakslisteForm-ee9a32b3.css","./UtvalgskriterierForSakslisteForm-23b45589.js","./index.es-efd3830f.js","./BehandlingstypeVelger-78a78376.js","./AndreKriterierVelger-7d209f83.js","./AndreKriterierVelger-40f72b2b.css","./FagsakYtelseTypeVelger-75726428.js","./SorteringVelger-d9dd4f1f.js","./SorteringVelger-c4b4c7bc.css","./UtvalgskriterierForSakslisteForm-9fe6e495.css","./EndreSakslisterPanel-3e035a41.css","./KoSortering-3d894ebc.js","./andreKriterierType-3d6466df.js"],import.meta.url),"./src/nokkeltall/components/tilBehandling/TilBehandlingPanel.stories.tsx":async()=>e(()=>import("./TilBehandlingPanel.stories-d1ca4904.js"),["./TilBehandlingPanel.stories-d1ca4904.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./index.es-657e045f.js","./index.es-28aae904.js","./index.es-dcafba10.js","./fplosRestApi-beda4f04.js","./TilBehandlingPanel-f0eb15a4.js","./isSameOrAfter-48a89950.js","./isSameOrBefore-ea99da6c.js","./StoreValuesInLocalStorage-6ed602ef.js","./useLosKodeverk-3c749e2b.js","./index.es-30e2a5f8.js","./index.es-efd3830f.js","./Provider-c82db7e7.js","./Detail-a958125f.js","./Heading-39bd052b.js","./Panel-b15c2a27.js"],import.meta.url),"./src/nokkeltall/components/manueltSattPaVent/ManueltPaVentPanel.stories.tsx":async()=>e(()=>import("./ManueltPaVentPanel.stories-549045f5.js"),["./ManueltPaVentPanel.stories-549045f5.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./index.es-657e045f.js","./index.es-28aae904.js","./index.es-dcafba10.js","./fplosRestApi-beda4f04.js","./ManueltPaVentPanel-3970b5b8.js","./isSameOrBefore-ea99da6c.js","./index.es-30e2a5f8.js","./index.es-efd3830f.js","./Provider-c82db7e7.js","./Detail-a958125f.js","./Heading-39bd052b.js","./Panel-b15c2a27.js","./StoreValuesInLocalStorage-6ed602ef.js","./useLosKodeverk-3c749e2b.js"],import.meta.url),"./src/nokkeltall/components/fordelingAvBehandlingstype/FordelingAvBehandlingstypePanel.stories.tsx":async()=>e(()=>import("./FordelingAvBehandlingstypePanel.stories-a4534d37.js"),["./FordelingAvBehandlingstypePanel.stories-a4534d37.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./index.es-657e045f.js","./index.es-28aae904.js","./index.es-dcafba10.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./fplosRestApi-beda4f04.js","./FordelingAvBehandlingstypePanel-39731653.js","./index.es-30e2a5f8.js","./index.es-efd3830f.js","./Provider-c82db7e7.js","./Detail-a958125f.js","./Heading-39bd052b.js","./Panel-b15c2a27.js","./StoreValuesInLocalStorage-6ed602ef.js","./useLosKodeverk-3c749e2b.js"],import.meta.url),"./src/nokkeltall/components/apneOgPaVentBehandlinger/OppgaverSomErApneEllerPaVentPanel.stories.tsx":async()=>e(()=>import("./OppgaverSomErApneEllerPaVentPanel.stories-6e1d253b.js"),["./OppgaverSomErApneEllerPaVentPanel.stories-6e1d253b.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./index.es-657e045f.js","./index.es-28aae904.js","./index.es-dcafba10.js","./OppgaverSomErApneEllerPaVentPanel-622a4b1d.js","./index.es-30e2a5f8.js","./index.es-efd3830f.js","./Provider-c82db7e7.js","./Detail-a958125f.js","./Heading-39bd052b.js","./Panel-b15c2a27.js","./StoreValuesInLocalStorage-6ed602ef.js","./useLosKodeverk-3c749e2b.js","./fplosRestApi-beda4f04.js"],import.meta.url),"./src/nokkeltall/components/antallBehandlingerPerForsteStonadsdag/OppgaverPerForsteStonadsdagPanel.stories.tsx":async()=>e(()=>import("./OppgaverPerForsteStonadsdagPanel.stories-e378cc87.js"),["./OppgaverPerForsteStonadsdagPanel.stories-e378cc87.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./OppgaverPerForsteStonadsdagPanel-5f3a0a77.js","./isSameOrBefore-ea99da6c.js","./isSameOrAfter-48a89950.js","./index.es-30e2a5f8.js","./index.es-efd3830f.js","./index.es-dcafba10.js","./Provider-c82db7e7.js","./Detail-a958125f.js","./Heading-39bd052b.js","./Panel-b15c2a27.js"],import.meta.url),"./src/behandlingskoer/components/sakslisteForm/UtvalgskriterierForSakslisteForm.stories.tsx":async()=>e(()=>import("./UtvalgskriterierForSakslisteForm.stories-1dbd950b.js"),["./UtvalgskriterierForSakslisteForm.stories-1dbd950b.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./index.es-657e045f.js","./index.es-28aae904.js","./index.es-dcafba10.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./UtvalgskriterierForSakslisteForm-23b45589.js","./index.es-efd3830f.js","./fplosRestApi-beda4f04.js","./BehandlingstypeVelger-78a78376.js","./useLosKodeverk-3c749e2b.js","./AndreKriterierVelger-7d209f83.js","./AndreKriterierVelger-40f72b2b.css","./FagsakYtelseTypeVelger-75726428.js","./SorteringVelger-d9dd4f1f.js","./Detail-a958125f.js","./SorteringVelger-c4b4c7bc.css","./Panel-b15c2a27.js","./Heading-39bd052b.js","./UtvalgskriterierForSakslisteForm-9fe6e495.css","./KoSortering-3d894ebc.js","./andreKriterierType-3d6466df.js"],import.meta.url),"./src/behandlingskoer/components/saksbehandlerForm/SaksbehandlereForSakslisteForm.stories.tsx":async()=>e(()=>import("./SaksbehandlereForSakslisteForm.stories-b98e248a.js"),["./SaksbehandlereForSakslisteForm.stories-b98e248a.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./index.es-28aae904.js","./index.es-dcafba10.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./fplosRestApi-beda4f04.js","./SaksbehandlereForSakslisteForm-e6b26036.js","./Panel-b15c2a27.js","./SaksbehandlereForSakslisteForm-ee9a32b3.css"],import.meta.url),"./src/behandlingskoer/components/sakslisteForm/sortering/SorteringVelger.stories.tsx":async()=>e(()=>import("./SorteringVelger.stories-f548fa04.js"),["./SorteringVelger.stories-f548fa04.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./index.es-657e045f.js","./index.es-28aae904.js","./index.es-dcafba10.js","./SorteringVelger-d9dd4f1f.js","./useLosKodeverk-3c749e2b.js","./fplosRestApi-beda4f04.js","./index.es-efd3830f.js","./Detail-a958125f.js","./SorteringVelger-c4b4c7bc.css","./KoSortering-3d894ebc.js"],import.meta.url),"./src/behandlingskoer/components/sakslisteForm/filtrering/FagsakYtelseTypeVelger.stories.tsx":async()=>e(()=>import("./FagsakYtelseTypeVelger.stories-e46a55ba.js"),["./FagsakYtelseTypeVelger.stories-e46a55ba.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./index.es-657e045f.js","./index.es-28aae904.js","./index.es-dcafba10.js","./fplosRestApi-beda4f04.js","./FagsakYtelseTypeVelger-75726428.js","./useLosKodeverk-3c749e2b.js"],import.meta.url),"./src/behandlingskoer/components/sakslisteForm/filtrering/BehandlingstypeVelger.stories.tsx":async()=>e(()=>import("./BehandlingstypeVelger.stories-b3d6e341.js"),["./BehandlingstypeVelger.stories-b3d6e341.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./index.es-657e045f.js","./index.es-28aae904.js","./index.es-dcafba10.js","./fplosRestApi-beda4f04.js","./BehandlingstypeVelger-78a78376.js","./useLosKodeverk-3c749e2b.js"],import.meta.url),"./src/behandlingskoer/components/sakslisteForm/filtrering/AndreKriterierVelger.stories.tsx":async()=>e(()=>import("./AndreKriterierVelger.stories-b95d5d6b.js"),["./AndreKriterierVelger.stories-b95d5d6b.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-AY7I2SME-c7b6cf8a.js","./nb_NO-91e99ecf.js","./index-6fd5a17b.js","./index.es-28aae904.js","./index.es-dcafba10.js","./fplosRestApi-beda4f04.js","./andreKriterierType-3d6466df.js","./AndreKriterierVelger-7d209f83.js","./useLosKodeverk-3c749e2b.js","./AndreKriterierVelger-40f72b2b.css"],import.meta.url)};async function p(n){return T[n]()}p.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:g,PreviewWeb:f,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,v=async()=>{const n=await Promise.all([e(()=>import("./config-22232caf.js"),["./config-22232caf.js","./index-1b03fe98.js","./_getPrototype-fbb216ba.js","./index-6fd5a17b.js","./index-356e4a49.js"],import.meta.url),e(()=>import("./preview-87eac49b.js"),["./preview-87eac49b.js","./index-d37d4223.js"],import.meta.url),e(()=>import("./preview-75bb2096.js"),[],import.meta.url),e(()=>import("./preview-980d6faf.js"),["./preview-980d6faf.js","./chunk-AY7I2SME-c7b6cf8a.js"],import.meta.url),e(()=>import("./preview-15309724.js"),["./preview-15309724.js","./index-356e4a49.js"],import.meta.url),e(()=>import("./preview-2059b184.js"),[],import.meta.url),e(()=>import("./preview-b8d6c68d.js"),["./preview-b8d6c68d.js","./index-356e4a49.js"],import.meta.url),e(()=>import("./preview-b3c37142.js"),[],import.meta.url),e(()=>import("./preview-470b3b4f.js"),["./preview-470b3b4f.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./preview-ef26a2e6.css"],import.meta.url)]);return g(n)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new f;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new h({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:p,getProjectAnnotations:v});export{e as _};
//# sourceMappingURL=iframe-24306f53.js.map
