import{r as o}from"./index-7c191284.js";const l=e=>{const r=window.localStorage.getItem(e);return r!=="undefined"&&r!==null?r:void 0},t=(e,r)=>{window.localStorage.setItem(e,r)},s=e=>{window.localStorage.removeItem(e)},a=({stateKey:e,values:r})=>(o.useEffect(()=>{t(e,JSON.stringify(r))},[r]),null);try{a.displayName="StoreValuesInLocalStorage",a.__docgenInfo={description:`StoreValuesInLocalStorage

Lagrer verdier i localstorage når komponenten blir kastet. Brukt for å mellomlagre form-state
ved navigering fra og til komponenter som har en final-form.`,displayName:"StoreValuesInLocalStorage",props:{stateKey:{defaultValue:null,description:"",name:"stateKey",required:!0,type:{name:"string"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"any"}}}}}catch{}export{a as S,l as g,s as r,t as s};
//# sourceMappingURL=StoreValuesInLocalStorage-2b38d468.js.map
