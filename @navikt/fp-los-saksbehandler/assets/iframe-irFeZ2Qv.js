import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function _(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=_(t);fetch(t.href,r)}})();const O="modulepreload",E=function(s,i){return new URL(s,i).href},u={},e=function(i,_,a){let t=Promise.resolve();if(_&&_.length>0){const r=document.getElementsByTagName("link");t=Promise.all(_.map(o=>{if(o=E(o,a),o in u)return;u[o]=!0;const c=o.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!a)for(let l=r.length-1;l>=0;l--){const m=r[l];if(m.href===o&&(!c||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${d}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":O,c||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),c)return new Promise((l,m)=>{n.addEventListener("load",l),n.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})}))}return t.then(()=>i()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,p=R({page:"preview"});P.setChannel(p);window.__STORYBOOK_ADDONS_CHANNEL__=p;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=p);const g={"./src/SaksbehandlerIndex.stories.tsx":async()=>e(()=>import("./SaksbehandlerIndex.stories-x1xxIs8M.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]),import.meta.url),"./src/behandlingskoer/components/BehandlingPollingTimoutModal.stories.tsx":async()=>e(()=>import("./BehandlingPollingTimoutModal.stories-4W0zRyIf.js"),__vite__mapDeps([48,1,2,3,4,30,20,31]),import.meta.url),"./src/behandlingskoer/components/OppgaverTabell.stories.tsx":async()=>e(()=>import("./OppgaverTabell.stories-bCPFon5L.js"),__vite__mapDeps([49,1,2,50,51,52,5,6,7,3,4,8,29,10,11,30,20,31,32,33,19,34,35,36,37,38,39,24,40]),import.meta.url),"./src/behandlingskoer/components/SakslisteVelgerForm.stories.tsx":async()=>e(()=>import("./SakslisteVelgerForm.stories-x-PTXcZq.js"),__vite__mapDeps([53,1,2,50,51,52,5,6,7,3,4,8,9,10,11,12]),import.meta.url),"./src/behandlingskoer/components/menu/OppgaveHandlingerMenu.stories.tsx":async()=>e(()=>import("./OppgaveHandlingerMenu.stories-XavRC1gG.js"),__vite__mapDeps([54,1,2,50,51,52,5,6,7,3,4,32,33,19,34,35,36,37,38,39]),import.meta.url),"./src/behandlingskoer/components/menu/OpphevReservasjonModal.stories.tsx":async()=>e(()=>import("./OpphevReservasjonModal.stories-p5_rbQ9N.js"),__vite__mapDeps([55,1,2,50,51,52,5,6,7,3,4,35,19,36]),import.meta.url),"./src/behandlingskoer/components/menu/forleng/OppgaveReservasjonForlengetModal.stories.tsx":async()=>e(()=>import("./OppgaveReservasjonForlengetModal.stories-UQeE9SfE.js"),__vite__mapDeps([56,1,2,50,51,52,5,3,4,37,38]),import.meta.url),"./src/components/DriftsmeldingPanel.stories.tsx":async()=>e(()=>import("./DriftsmeldingPanel.stories-OCnOkviW.js"),__vite__mapDeps([57,1,2,3,4,45,20,46]),import.meta.url),"./src/components/OppgaveErReservertAvAnnenModal.stories.tsx":async()=>e(()=>import("./OppgaveErReservertAvAnnenModal.stories-hCqcu5T2.js"),__vite__mapDeps([58,1,2,50,51,52,5,3,4,27,20,28]),import.meta.url),"./src/fagsakSearch/FagsakSearchIndex.stories.tsx":async()=>e(()=>import("./FagsakSearchIndex.stories-uT41TsNT.js"),__vite__mapDeps([59,1,2,6,7,3,4,13,14,15,16,17,18,19,20,21,22,5,11,23,24,25,26,27,28]),import.meta.url),"./src/fagsakSearch/components/FagsakList.stories.tsx":async()=>e(()=>import("./FagsakList.stories-v8qbGP_u.js"),__vite__mapDeps([60,1,2,50,51,52,5,6,7,3,4,8,16,22,11,23,24,25]),import.meta.url),"./src/fagsakSearch/components/FagsakSearch.stories.tsx":async()=>e(()=>import("./FagsakSearch.stories-cZMsDQSA.js"),__vite__mapDeps([61,1,2,50,51,52,5,16,6,7,3,4,8,14,15,17,18,19,20,21,22,11,23,24,25,26]),import.meta.url),"./src/fagsakSearch/components/SearchForm.stories.tsx":async()=>e(()=>import("./SearchForm.stories-JdsSDiKu.js"),__vite__mapDeps([62,1,2,50,51,52,3,4,18,19,20,21]),import.meta.url),"./src/fagsakSearch/components/person/PersonInfo.stories.tsx":async()=>e(()=>import("./PersonInfo.stories-dDvlx5Mu.js"),__vite__mapDeps([63,1,2,3,4,16,15,17]),import.meta.url),"./src/saksstotte/components/SistBehandledeSaker.stories.tsx":async()=>e(()=>import("./SistBehandledeSaker.stories-MfSqwt_2.js"),__vite__mapDeps([64,1,2,6,7,3,4,41]),import.meta.url),"./src/saksstotte/nokkeltall/components/nyeOgFerdigstilteOppgaverForIdag/NyeOgFerdigstilteOppgaverForIdagPanel.stories.tsx":async()=>e(()=>import("./NyeOgFerdigstilteOppgaverForIdagPanel.stories-SRpvaBHV.js"),__vite__mapDeps([65,1,2,3,4,5,6,7,8,42,23,33,19,34,43]),import.meta.url),"./src/saksstotte/nokkeltall/components/nyeOgFerdigstilteOppgaverForSisteSyv/NyeOgFerdigstilteOppgaverForSisteSyvPanel.stories.tsx":async()=>e(()=>import("./NyeOgFerdigstilteOppgaverForSisteSyvPanel.stories-sm9QZ5G8.js"),__vite__mapDeps([66,1,2,3,4,5,44,33,19,7,34,43]),import.meta.url)};async function v(s){return g[s]()}const{composeConfigs:f,PreviewWeb:T,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,L=async()=>{const s=await Promise.all([e(()=>import("./entry-preview-2FNvS3aK.js"),__vite__mapDeps([67,2,68,4]),import.meta.url),e(()=>import("./entry-preview-docs-D8aCJcK0.js"),__vite__mapDeps([69,70,2,52]),import.meta.url),e(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([71,72]),import.meta.url),e(()=>import("./preview-DdwO37tm.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-98732p1V.js"),__vite__mapDeps([73,51,52]),import.meta.url),e(()=>import("./preview-wm7zCcxo.js"),__vite__mapDeps([74,52]),import.meta.url),e(()=>import("./preview-MdQXpms2.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([75,52]),import.meta.url),e(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),e(()=>import("./preview-GAmcaReJ.js"),__vite__mapDeps([76,1,2,77]),import.meta.url)]);return f(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:v,getProjectAnnotations:L});export{e as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./SaksbehandlerIndex.stories-x1xxIs8M.js","./jsx-runtime-CUEGZZF9.js","./index-DogsOklH.js","./nb_NO-ifoLtffX.js","./index-MroJ3egt.js","./index.es-V78UKnai.js","./fplosSaksbehandlerRestApi-9dkwlRoo.js","./useGlobalStateRestApiData-n3nAw5-C.js","./alleKodeverkLos-Qz5F4oTQ.js","./SakslisteVelgerForm-NvJ6cl9Q.js","./kodeverkTyper-IFcYcay-.js","./kodeverkUtils-d7epiQ_o.js","./SakslisteVelgerForm-SrxPUqfG.css","./FagsakSearchIndex-DoTVEVTA.js","./FagsakSearch-bMSrv8z5.js","./PersonInfo-TGcvFFkW.js","./Kjonnkode-oeRnvMGc.js","./PersonInfo-mp4nE1BJ.css","./SearchForm-F-2NB4tW.js","./index.es-6jszBJub.js","./ExclamationmarkTriangleFill-QKQZkfSk.js","./SearchForm-jKp4Tnvy.css","./FagsakList-m6jPFUYZ.js","./useLosKodeverk-LxhvBA04.js","./ChevronRight-VRmgnOTv.js","./FagsakList-Vc51xsO4.css","./FagsakSearch-p2BLsEOs.css","./OppgaveErReservertAvAnnenModal-OB4eL7zW.js","./OppgaveErReservertAvAnnenModal-4xkBshMh.css","./OppgaverTabell-cjnnE-ap.js","./BehandlingPollingTimoutModal-9YWco9mq.js","./BehandlingPollingTimoutModal-GEEdkZBh.css","./OppgaveHandlingerMenu-6cOb4Zrt.js","./FlyttReservasjonModal-kaPJ9b-9.js","./FlyttReservasjonModal-8KQkl7Op.css","./OpphevReservasjonModal-aKP-Wao8.js","./OpphevReservasjonModal-5_fqNYI-.css","./OppgaveReservasjonForlengetModal-MRSJ10-S.js","./OppgaveReservasjonForlengetModal-nNicXJHH.css","./OppgaveHandlingerMenu-q2DJlz2X.css","./OppgaverTabell-sZBsjfI-.css","./SistBehandledeSaker-X6kyW71R.js","./NyeOgFerdigstilteOppgaverForIdagPanel-c-m07cGE.js","./Panel-mUo8-ngF.js","./NyeOgFerdigstilteOppgaverForSisteSyvPanel-2RTeCmBg.js","./DriftsmeldingPanel-7Te90j6p.js","./DriftsmeldingPanel-5klGpKX3.css","./SaksbehandlerIndex-71CIx5wN.css","./BehandlingPollingTimoutModal.stories-4W0zRyIf.js","./OppgaverTabell.stories-bCPFon5L.js","./chunk-WFFRPTHA-zlNDxfrq.js","./preview-errors-7FWlPnjy.js","./index-PPLHz8o0.js","./SakslisteVelgerForm.stories-x-PTXcZq.js","./OppgaveHandlingerMenu.stories-XavRC1gG.js","./OpphevReservasjonModal.stories-p5_rbQ9N.js","./OppgaveReservasjonForlengetModal.stories-UQeE9SfE.js","./DriftsmeldingPanel.stories-OCnOkviW.js","./OppgaveErReservertAvAnnenModal.stories-hCqcu5T2.js","./FagsakSearchIndex.stories-uT41TsNT.js","./FagsakList.stories-v8qbGP_u.js","./FagsakSearch.stories-cZMsDQSA.js","./SearchForm.stories-JdsSDiKu.js","./PersonInfo.stories-dDvlx5Mu.js","./SistBehandledeSaker.stories-MfSqwt_2.js","./NyeOgFerdigstilteOppgaverForIdagPanel.stories-SRpvaBHV.js","./NyeOgFerdigstilteOppgaverForSisteSyvPanel.stories-sm9QZ5G8.js","./entry-preview-2FNvS3aK.js","./react-18-Zjprz-m4.js","./entry-preview-docs-D8aCJcK0.js","./_getPrototype-KztV_HEV.js","./preview-VI2eoWmp.js","./index-ogXoivrg.js","./preview-98732p1V.js","./preview-wm7zCcxo.js","./preview-u8M_OEO2.js","./preview-GAmcaReJ.js","./preview-rvsNoP4e.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}