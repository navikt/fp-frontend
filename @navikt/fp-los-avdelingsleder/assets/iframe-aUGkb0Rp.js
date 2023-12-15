import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function _(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=_(t);fetch(t.href,r)}})();const E="modulepreload",O=function(s,n){return new URL(s,n).href},p={},e=function(n,_,l){let t=Promise.resolve();if(_&&_.length>0){const r=document.getElementsByTagName("link");t=Promise.all(_.map(o=>{if(o=O(o,l),o in p)return;p[o]=!0;const a=o.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(!!l)for(let m=r.length-1;m>=0;m--){const c=r[m];if(c.href===o&&(!a||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${u}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":E,a||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),a)return new Promise((m,c)=>{i.addEventListener("load",m),i.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${o}`)))})}))}return t.then(()=>n()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:P}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,d=P({page:"preview"});R.setChannel(d);window.__STORYBOOK_ADDONS_CHANNEL__=d;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=d);const T={"./src/AvdelingslederIndex.stories.tsx":async()=>e(()=>import("./AvdelingslederIndex.stories-9XN5w1nb.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]),import.meta.url),"./src/behandlingskoer/components/EndreSakslisterPanel.stories.tsx":async()=>e(()=>import("./EndreSakslisterPanel.stories-zxMQY2Dv.js"),__vite__mapDeps([51,1,2,52,53,54,14,3,4,5,6,7,8,31,32,18,33,29,34,35,10,36,37,38,16,39,40,41,42,43,44,45,46,55,56]),import.meta.url),"./src/behandlingskoer/components/GjeldendeSakslisterTabell.stories.tsx":async()=>e(()=>import("./GjeldendeSakslisterTabell.stories-8ggjwOiv.js"),__vite__mapDeps([57,1,2,52,53,54,3,4,5,6,7,8,32,14,18,33,29,34]),import.meta.url),"./src/behandlingskoer/components/SletteSakslisteModal.stories.tsx":async()=>e(()=>import("./SletteSakslisteModal.stories-c6imu14q.js"),__vite__mapDeps([58,1,2,52,53,54,6,7,33,29]),import.meta.url),"./src/behandlingskoer/components/saksbehandlerForm/SaksbehandlereForSakslisteForm.stories.tsx":async()=>e(()=>import("./SaksbehandlereForSakslisteForm.stories-RU50b83o.js"),__vite__mapDeps([59,1,2,52,53,54,3,4,5,6,7,35,10,36,37]),import.meta.url),"./src/behandlingskoer/components/sakslisteForm/UtvalgskriterierForSakslisteForm.stories.tsx":async()=>e(()=>import("./UtvalgskriterierForSakslisteForm.stories-GSrrFUEW.js"),__vite__mapDeps([60,1,2,52,53,54,14,3,4,5,6,7,8,38,16,39,18,40,41,42,43,44,10,36,45,55,56]),import.meta.url),"./src/behandlingskoer/components/sakslisteForm/filtrering/AndreKriterierVelger.stories.tsx":async()=>e(()=>import("./AndreKriterierVelger.stories-StAAo7_p.js"),__vite__mapDeps([61,1,2,52,53,54,6,7,3,4,5,8,56,40,18,41]),import.meta.url),"./src/behandlingskoer/components/sakslisteForm/filtrering/BehandlingstypeVelger.stories.tsx":async()=>e(()=>import("./BehandlingstypeVelger.stories-PJ2xnJqq.js"),__vite__mapDeps([62,1,2,52,53,54,6,7,14,3,4,5,8,39,18]),import.meta.url),"./src/behandlingskoer/components/sakslisteForm/filtrering/FagsakYtelseTypeVelger.stories.tsx":async()=>e(()=>import("./FagsakYtelseTypeVelger.stories-eQEA_ZnO.js"),__vite__mapDeps([63,1,2,52,53,54,6,7,14,3,4,5,8,42,18]),import.meta.url),"./src/behandlingskoer/components/sakslisteForm/sortering/SorteringVelger.stories.tsx":async()=>e(()=>import("./SorteringVelger.stories-pSevEdaX.js"),__vite__mapDeps([64,1,2,52,53,54,6,7,14,3,4,5,8,43,18,16,44,55]),import.meta.url),"./src/components/IkkeTilgangTilAvdelingslederPanel.stories.tsx":async()=>e(()=>import("./IkkeTilgangTilAvdelingslederPanel.stories-6vf2WAwG.js"),__vite__mapDeps([65,1,2,6,7,9,10,11]),import.meta.url),"./src/nokkeltall/components/antallBehandlingerPerForsteStonadsdag/OppgaverPerForsteStonadsdagPanel.stories.tsx":async()=>e(()=>import("./OppgaverPerForsteStonadsdagPanel.stories-NwCObXEO.js"),__vite__mapDeps([66,1,2,6,7,22,21,20,15,16,4,17,10]),import.meta.url),"./src/nokkeltall/components/apneOgPaVentBehandlinger/OppgaverSomErApneEllerPaVentPanel.stories.tsx":async()=>e(()=>import("./OppgaverSomErApneEllerPaVentPanel.stories-Gx282hkl.js"),__vite__mapDeps([67,1,2,6,7,14,3,4,5,8,23,15,16,17,10,12,18]),import.meta.url),"./src/nokkeltall/components/fordelingAvBehandlingstype/FordelingAvBehandlingstypePanel.stories.tsx":async()=>e(()=>import("./FordelingAvBehandlingstypePanel.stories-yX5Gx9HP.js"),__vite__mapDeps([68,1,2,14,3,4,5,6,7,8,13,15,16,17,10,12,18]),import.meta.url),"./src/nokkeltall/components/tilBehandling/TilBehandlingPanel.stories.tsx":async()=>e(()=>import("./TilBehandlingPanel.stories-xNxYOs7X.js"),__vite__mapDeps([69,1,2,6,7,14,3,4,5,8,19,20,21,12,18,15,16,17,10]),import.meta.url),"./src/nokkeltall/components/ventefristUtløper/VentefristUtløperPanel.stories.tsx":async()=>e(()=>import("./VentefristUtløperPanel.stories-skgFeQzV.js"),__vite__mapDeps([70,1,2,6,7,14,3,4,5,8,24,12,18,21,15,16,17,10]),import.meta.url),"./src/reservasjoner/components/ReservasjonerTabell.stories.tsx":async()=>e(()=>import("./ReservasjonerTabell.stories-TZ810Xqr.js"),__vite__mapDeps([71,1,2,52,53,54,14,6,7,8,47,15,16,4,17,5,48]),import.meta.url),"./src/saksbehandlere/components/LeggTilSaksbehandlerForm.stories.tsx":async()=>e(()=>import("./LeggTilSaksbehandlerForm.stories-_10Lrf4-.js"),__vite__mapDeps([72,1,2,52,53,54,3,4,5,6,7,25,16,26]),import.meta.url),"./src/saksbehandlere/components/SaksbehandlereTabell.stories.tsx":async()=>e(()=>import("./SaksbehandlereTabell.stories-lTm5o7G1.js"),__vite__mapDeps([73,1,2,3,4,5,6,7,27,28,29,30]),import.meta.url),"./src/saksbehandlere/components/SletteSaksbehandlerModal.stories.tsx":async()=>e(()=>import("./SletteSaksbehandlerModal.stories-z037V4Ys.js"),__vite__mapDeps([74,1,2,52,53,54,6,7,28,29]),import.meta.url)};async function g(s){return T[s]()}const{composeConfigs:v,PreviewWeb:f,ClientApi:h}=__STORYBOOK_MODULE_PREVIEW_API__,L=async()=>{const s=await Promise.all([e(()=>import("./entry-preview-2FNvS3aK.js"),__vite__mapDeps([75,2,76,7]),import.meta.url),e(()=>import("./entry-preview-docs-D8aCJcK0.js"),__vite__mapDeps([77,78,2,54]),import.meta.url),e(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([79,80]),import.meta.url),e(()=>import("./preview-4K4r4nfy.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-98732p1V.js"),__vite__mapDeps([81,53,54]),import.meta.url),e(()=>import("./preview-wm7zCcxo.js"),__vite__mapDeps([82,54]),import.meta.url),e(()=>import("./preview-MdQXpms2.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([83,54]),import.meta.url),e(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-GAmcaReJ.js"),__vite__mapDeps([84,1,2,85]),import.meta.url)]);return v(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new f;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new h({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:g,getProjectAnnotations:L});export{e as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./AvdelingslederIndex.stories-9XN5w1nb.js","./jsx-runtime-CUEGZZF9.js","./index-DogsOklH.js","./RestApiMock-5-bLJsHZ.js","./useGlobalStateRestApiData-A2OyOdo-.js","./fplosRestApi-9Y9Hxjgv.js","./nb_NO-NyfkuXl2.js","./index-MroJ3egt.js","./alleKodeverkLos-Qz5F4oTQ.js","./IkkeTilgangTilAvdelingslederPanel-46MP1ulA.js","./Panel-tDEXZYZ9.js","./IkkeTilgangTilAvdelingslederPanel-8hWzXmbw.css","./StoreValuesInLocalStorage-A19sIOBb.js","./FordelingAvBehandlingstypePanel-2AcKMEim.js","./index.es-LzEcK_Mh.js","./FlyttReservasjonModal-b4rEdBBH.js","./index.es-q-cFh37F.js","./FlyttReservasjonModal-8KQkl7Op.css","./useLosKodeverk-9ArpyM85.js","./TilBehandlingPanel-LZDsmLuZ.js","./isSameOrAfter-2cARl_z0.js","./isSameOrBefore-cJ9-RUZQ.js","./OppgaverPerForsteStonadsdagPanel-TAJIeYcq.js","./OppgaverSomErApneEllerPaVentPanel-TsMh6Hhw.js","./VentefristUtløperPanel-LheHtbtB.js","./LeggTilSaksbehandlerForm-VRHl8lhy.js","./LeggTilSaksbehandlerForm-540laMNC.css","./SaksbehandlereTabell-cMIFKvhe.js","./SletteSaksbehandlerModal-oJQjzOMw.js","./SletteSakslisteModal-bxufApVF.css","./SaksbehandlereTabell-6ZjlGOzO.css","./EndreSakslisterPanel-AhjtaCHK.js","./GjeldendeSakslisterTabell-bQrbrmyd.js","./SletteSakslisteModal-2CcRf-O3.js","./GjeldendeSakslisterTabell-HNrxWMV6.css","./SaksbehandlereForSakslisteForm-2AWP7H0o.js","./VStack-7mx4PU3T.js","./SaksbehandlereForSakslisteForm-b81qaxn3.css","./UtvalgskriterierForSakslisteForm-qHBNkI5F.js","./BehandlingstypeVelger-XN7fKDOP.js","./AndreKriterierVelger-prGZIday.js","./AndreKriterierVelger-gHAlxZdQ.css","./FagsakYtelseTypeVelger-1WIcof5n.js","./SorteringVelger-SRJBWbqs.js","./SorteringVelger-pP_1pa2q.css","./UtvalgskriterierForSakslisteForm-wtYXNbsG.css","./EndreSakslisterPanel-7sn8CRaE.css","./ReservasjonerTabell-UIq_KNJq.js","./ReservasjonerTabell-hSPVH3cH.css","./extends-dGVwEr9R.js","./AvdelingslederIndex-nnwC64bP.css","./EndreSakslisterPanel.stories-zxMQY2Dv.js","./chunk-WFFRPTHA-zlNDxfrq.js","./preview-errors-7FWlPnjy.js","./index-PPLHz8o0.js","./KoSortering--LJgVfwZ.js","./andreKriterierType-nr5UYWnD.js","./GjeldendeSakslisterTabell.stories-8ggjwOiv.js","./SletteSakslisteModal.stories-c6imu14q.js","./SaksbehandlereForSakslisteForm.stories-RU50b83o.js","./UtvalgskriterierForSakslisteForm.stories-GSrrFUEW.js","./AndreKriterierVelger.stories-StAAo7_p.js","./BehandlingstypeVelger.stories-PJ2xnJqq.js","./FagsakYtelseTypeVelger.stories-eQEA_ZnO.js","./SorteringVelger.stories-pSevEdaX.js","./IkkeTilgangTilAvdelingslederPanel.stories-6vf2WAwG.js","./OppgaverPerForsteStonadsdagPanel.stories-NwCObXEO.js","./OppgaverSomErApneEllerPaVentPanel.stories-Gx282hkl.js","./FordelingAvBehandlingstypePanel.stories-yX5Gx9HP.js","./TilBehandlingPanel.stories-xNxYOs7X.js","./VentefristUtløperPanel.stories-skgFeQzV.js","./ReservasjonerTabell.stories-TZ810Xqr.js","./LeggTilSaksbehandlerForm.stories-_10Lrf4-.js","./SaksbehandlereTabell.stories-lTm5o7G1.js","./SletteSaksbehandlerModal.stories-z037V4Ys.js","./entry-preview-2FNvS3aK.js","./react-18-Zjprz-m4.js","./entry-preview-docs-D8aCJcK0.js","./_getPrototype-KztV_HEV.js","./preview-VI2eoWmp.js","./index-ogXoivrg.js","./preview-98732p1V.js","./preview-wm7zCcxo.js","./preview-u8M_OEO2.js","./preview-GAmcaReJ.js","./preview-rvsNoP4e.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}