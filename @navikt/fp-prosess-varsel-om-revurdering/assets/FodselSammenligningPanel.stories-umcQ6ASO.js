import{z as i,j as l,k as d,C as g,B as r}from"./iframe-Am1yFByV.js";import{F as m,t as c}from"./nb_NO-LSrkSG0O.js";import"./preload-helper-D9Z9MdNV.js";const p=s=>{const t=i({locale:"nb-NO",messages:s},g());return o=>l.jsx(d,{value:t,children:o()})},h=p(c),k=[{fodselsdato:"2019-01-10",dodsdato:"2019-01-10",fnr:"1213200001"}],v={fodselsdatoer:{1:"2019-01-10"},termindato:"2019-01-01",utstedtdato:"2019-01-02",antallBarn:1},B={avklartBarn:[{fodselsdato:"2019-01-10"}],termindato:"2019-01-01",antallBarnTermin:1},T={component:m,args:{avklartBarn:k,termindato:"2019-01-01",soknad:v,familiehendelseOriginalBehandling:B,soknadOriginalBehandling:void 0,vedtaksDatoSomSvangerskapsuke:void 0},decorators:[h]},e={args:{behandlingsType:r.REVURDERING}},a={args:{behandlingsType:r.FORSTEGANGSSOKNAD}},n={args:{behandlingsType:r.REVURDERING,vedtaksDatoSomSvangerskapsuke:43,familiehendelseOriginalBehandling:{avklartBarn:[],termindato:"2019-01-01",antallBarnTermin:1}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    behandlingsType: BehandlingType.REVURDERING
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    behandlingsType: BehandlingType.FORSTEGANGSSOKNAD
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    behandlingsType: BehandlingType.REVURDERING,
    vedtaksDatoSomSvangerskapsuke: 43,
    familiehendelseOriginalBehandling: {
      avklartBarn: [] as AvklartBarn[],
      termindato: '2019-01-01',
      antallBarnTermin: 1
    } as FamilieHendelse
  }
}`,...n.parameters?.docs?.source}}};const y=["PanelForNårBehandlingstypeErRevurdering","PanelForNårBehandlingstypeErFørstegangssoknad","PanelForMedVisningAvSvangerskapsuke"];export{n as PanelForMedVisningAvSvangerskapsuke,a as PanelForNårBehandlingstypeErFørstegangssoknad,e as PanelForNårBehandlingstypeErRevurdering,y as __namedExportsOrder,T as default};
