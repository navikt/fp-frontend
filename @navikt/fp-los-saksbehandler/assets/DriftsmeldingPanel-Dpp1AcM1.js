import{j as n}from"./dayjs.min-ZUODdiE-.js";import{W as t,H as d,L as s,D as o}from"./nb_NO-B_7A7S6o.js";import{S as l}from"./ExclamationmarkTriangleFill-z3dnEoYM.js";const m="_container_upajp_1",p="_wordWrap_upajp_15",c="_driftsInfo_upajp_19",r={container:m,wordWrap:p,driftsInfo:c},a=({driftsmeldinger:e})=>e===void 0||e.length===0?null:n.jsx("div",{className:r.container,children:e.map(i=>n.jsx(t,{children:n.jsxs(d,{children:[n.jsx(s,{children:n.jsx(l,{className:r.driftsInfo})}),n.jsx(s,{children:n.jsx(o,{className:r.wordWrap,children:`${i.melding}`})})]})},i.id))}),j=a;a.__docgenInfo={description:`DriftsmeldingPanel

Definerer hvordan driftsmeldinger vises.`,methods:[],displayName:"DriftsmeldingPanel",props:{driftsmeldinger:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  melding: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"melding",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  id: string;
  melding: string;
}>`}],raw:"Driftsmelding[]"},description:""}}};export{j as D};
