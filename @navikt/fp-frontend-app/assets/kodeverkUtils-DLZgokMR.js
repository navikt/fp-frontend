const v=(o,r,t,n)=>{let e=o[r];if(!e||e.length===0)return"";n&&(e=e[n]);const a=e.find(k=>k.kode===t);return a?a.navn:""},d=o=>(r,t,n)=>v(o,t,r,n);export{v as a,d as g};
