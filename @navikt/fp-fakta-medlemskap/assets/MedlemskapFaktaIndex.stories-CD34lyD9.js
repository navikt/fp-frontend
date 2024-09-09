import{j as s}from"./dayjs.min-BzWfLPQJ.js";import{u as G,C as E,G as h,I as de,J as le,N as ue,Q as ge,X as me,v as pe,M as g,_ as B,q as P,K as w,g as O,O as K,V as T,L as R,B as S,d as H,b as z,c as D,z as ke,A as $,i as ye,a as ve,Y as be,j as fe,k as ce,t as qe,P as he,n as je,o as Pe,p as Te,s as Re,w as Se}from"./style-BBZC1--v.js";import{r as o,R as p}from"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./index-D16Yfzz8.js";function F(e,a=[]){const t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useCallback((...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},a)}function we({value:e,defaultValue:a,onChange:t}){const n=F(t),[r,i]=o.useState(a),l=e!==void 0,u=l?e:r,y=F(m=>{const k=typeof m=="function"?m(u):m;l||i(k),n(k)},[l,n,u]);return[u,y]}var Ne=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Ae=o.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=Ne(e,["title","titleId"]);let i=G();return i=t?n||"title-"+i:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},r),t?o.createElement("title",{id:i},t):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M5.97 9.47a.75.75 0 0 1 1.06 0L12 14.44l4.97-4.97a.75.75 0 1 1 1.06 1.06l-5.5 5.5a.75.75 0 0 1-1.06 0l-5.5-5.5a.75.75 0 0 1 0-1.06",clipRule:"evenodd"}))});var Ee=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Oe=o.forwardRef((e,a)=>{var{title:t,titleId:n}=e,r=Ee(e,["title","titleId"]);let i=G();return i=t?n||"title-"+i:void 0,o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:a,"aria-labelledby":i},r),t?o.createElement("title",{id:i},t):null,o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12 17.799 22.5 12 22.5 1.5 17.799 1.5 12",clipRule:"evenodd"}))}),N=o.createContext({open:!1,toggleOpen:()=>{},size:"medium"});var De=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Me=o.forwardRef((e,a)=>{var{children:t,className:n}=e,r=De(e,["children","className"]);const i=o.useContext(N);return i===null?(console.error("<ExpansionCard.Content> has to be used within an <ExpansionCard>"),null):p.createElement(E,Object.assign({},r,{ref:a,as:"div",className:h("navds-expansioncard__content",n,{"navds-expansioncard__content--closed":!i.open}),"aria-hidden":!i.open,size:i.size}),p.createElement("div",{className:"navds-expansioncard__content-inner"},t))});var _e=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const xe=o.forwardRef((e,a)=>{var{className:t}=e,n=_e(e,["className"]);const r=o.useContext(N);return r===null?(console.error("<ExpansionCard.Description> has to be used within an <ExpansionCard>"),null):p.createElement(E,Object.assign({},n,{as:"p",ref:a,className:h("navds-link-panel__description",t),size:r.size}))});var Be=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Fe=o.forwardRef((e,a)=>{var{children:t,className:n}=e,r=Be(e,["children","className"]);const i=o.useContext(N);return i===null?(console.error("<ExpansionCard.Header> has to be used within an <ExpansionCard>"),null):p.createElement("div",Object.assign({ref:a},r,{className:h("navds-expansioncard__header",n)}),p.createElement("div",{className:"navds-expansioncard__header-content"},t),p.createElement("button",{className:"navds-expansioncard__header-button",onClick:()=>i.toggleOpen(),type:"button","aria-expanded":i.open},p.createElement(Ae,{className:"navds-expansioncard__header-chevron",title:"Vis mer"})))});var Ie=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const Le=o.forwardRef((e,a)=>{var{className:t,as:n="h3",size:r="medium"}=e,i=Ie(e,["className","as","size"]);return p.createElement(n,Object.assign({},i,{ref:a,className:h("navds-expansioncard__title",`navds-expansioncard__title--${r}`,"navds-heading",`navds-heading--${r}`,t)}))});var Ue=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const v=o.forwardRef((e,a)=>{var{className:t,onToggle:n,open:r,defaultOpen:i=!1,size:l="medium"}=e,u=Ue(e,["className","onToggle","open","defaultOpen","size"]);const y=o.useRef(!(r||i)),[m,c]=we({value:r,onChange:k=>{n==null||n(k),y.current=!0},defaultValue:i});return p.createElement(N.Provider,{value:{open:r??m,toggleOpen:()=>c(k=>!k),size:l}},p.createElement("section",Object.assign({},u,{className:h("navds-expansioncard",t,`navds-expansioncard--${l}`,{"navds-expansioncard--open":r??m,"navds-expansioncard--no-animation":!y.current}),ref:a})))});v.Header=Fe;v.Content=Me;v.Title=Le;v.Description=xe;var Ve=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]]);return t};const M=o.forwardRef((e,a)=>{var{children:t,className:n,as:r="div",background:i,borderColor:l,borderWidth:u,borderRadius:y,shadow:m,style:c,asChild:k}=e,b=Ve(e,["children","className","as","background","borderColor","borderWidth","borderRadius","shadow","style","asChild"]);const se=Object.assign(Object.assign(Object.assign({},c),{"--__ac-box-background":i?`var(--a-${i})`:void 0,"--__ac-box-shadow":m?`var(--a-shadow-${m})`:void 0,"--__ac-box-border-color":l?`var(--a-${l})`:void 0,"--__ac-box-border-width":u?u.split(" ").map(oe=>`${oe}px`).join(" "):void 0}),de("box","border-radius","border-radius",y,!1,["0"])),ie=k?me:r;return p.createElement(le,Object.assign({},b),p.createElement(ie,Object.assign({},ue(b,ge),{ref:a,style:se,className:h("navds-box",n,{"navds-box-bg":i,"navds-box-border-color":l,"navds-box-border-width":u,"navds-box-border-radius":y,"navds-box-shadow":m})}),t))});var d=(e=>(e.BOSATT_UTENLANDSOPPHOLD="BOSATT_UTENLANDSOPPHOLD",e.BOSATT_MANGLENDE_BOSTEDSADRESSE="BOSATT_MANGLENDE_BOSTEDSADRESSE",e.BOSATT_UTENLANDSADRESSE="BOSATT_UTENLANDSADRESSE",e.BOSATT_UGYLDIG_PERSONSTATUS="BOSATT_UGYLDIG_PERSONSTATUS",e.TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD="TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD",e.EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT="EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT",e.MEDL_PERIODER="MEDL_PERIODER",e))(d||{});const Y=({aksjonspunkter:e})=>e.length>0?s.jsx(pe,{children:s.jsx(g,{id:"AksjonspunktHelpText.HarMedlemskap"})}):s.jsx(s.Fragment,{});Y.__docgenInfo={description:"",methods:[],displayName:"AksjonspunktHelpText",props:{aksjonspunkter:{required:!0,tsType:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}`,signature:{properties:[{key:"definisjon",value:{name:"string",required:!0}},{key:"status",value:{name:"string",required:!0}},{key:"begrunnelse",value:{name:"string",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"toTrinnsBehandling",value:{name:"boolean",required:!1}},{key:"toTrinnsBehandlingGodkjent",value:{name:"boolean",required:!1}},{key:"vurderPaNyttArsaker",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"besluttersBegrunnelse",value:{name:"string",required:!1}},{key:"aksjonspunktType",value:{name:"string",required:!1}},{key:"kanLoses",value:{name:"boolean",required:!0}},{key:"endretAv",value:{name:"string",required:!1}},{key:"endretTidspunkt",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  definisjon: string;
  status: string;
  begrunnelse?: string;
  vilkarType?: string;
  toTrinnsBehandling?: boolean;
  toTrinnsBehandlingGodkjent?: boolean;
  vurderPaNyttArsaker?: string[];
  besluttersBegrunnelse?: string;
  aksjonspunktType?: string;
  kanLoses: boolean;
  endretAv?: string;
  endretTidspunkt?: string;
}>`}],raw:"Aksjonspunkt[]"},description:""}}};const J=e=>e.toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(" "),_=(e,a)=>{const t=e.tom?new Date(e.tom):new Date(B),n=a.tom?new Date(a.tom):new Date(B);if(t>n)return-1;if(t<n)return 1;const r=new Date(e.fom),i=new Date(a.fom);return r>i?-1:r<i?1:0},A=(e,a)=>a.formatMessage({id:"Situasjon.ILand"},{land:J(e)}),Ce=e=>{var n;const a=P[w.REGION],t=e.regioner.sort(_)[0];return((n=a.find(r=>r.kode===t.type))==null?void 0:n.navn)??"-"},Ge=e=>{const a=e.personstatuser.sort(_)[0];if(a){const t=O(P)(a.type,w.PERSONSTATUS_TYPE);if(t)return t}return"-"},Ke=(e,a)=>{var n;const t=(n=e.adresser.filter(r=>r.adresse.adresseType===K.BOSTEDSADRESSE).sort(_)[0])==null?void 0:n.adresse.land;if(t){const r=O(P)(t,w.LANDKODER);if(r)return A(r,a)}return"-"},I=(e,a)=>{if(e.length==1)return A(e[0].landNavn,a);if(e.length>1)return a.formatMessage({id:"Situasjon.FlereLand"});const t=O(P)("NOR",w.LANDKODER);return A(t,a)};function W(e){throw new Error("Uventet enum verdi: alle tilfeller skal må håndteres:",e)}var f=(e=>(e[e.SOKNAD=0]="SOKNAD",e[e.FREG=1]="FREG",e))(f||{});function Q(e){switch(e){case 0:return"FaktaKilde.Soknad";case 1:return"FaktaKilde.FREG";default:return W(e)}}const q=({labelFormatId:e,value:a,kilde:t})=>s.jsx(M,{background:"bg-subtle",minWidth:"200px",paddingBlock:"2",paddingInline:"4",borderRadius:"medium",children:s.jsxs(T,{gap:"6",children:[s.jsxs("div",{children:[s.jsx(R,{size:"small",children:s.jsx(g,{id:e})}),s.jsx(S,{size:"large",children:a})]}),s.jsx(H,{uppercase:!0,children:s.jsx(g,{id:Q(t)})})]})});q.__docgenInfo={description:"",methods:[],displayName:"Situasjon",props:{labelFormatId:{required:!0,tsType:{name:"literal",value:"`SituasjonLabel.${string}`"},description:""},value:{required:!0,tsType:{name:"string"},description:""},kilde:{required:!0,tsType:{name:"FaktaKilde"},description:""}}};const X=({soknad:e,medlemskap:a})=>{const t=z();return s.jsxs(D,{gap:"2",children:[s.jsx(q,{labelFormatId:"SituasjonLabel.HarBodd",value:I(e.oppgittTilknytning.utlandsoppholdFor,t),kilde:f.SOKNAD}),s.jsx(q,{labelFormatId:"SituasjonLabel.SkalBo",value:I(e.oppgittTilknytning.utlandsoppholdEtter,t),kilde:f.SOKNAD}),s.jsx(q,{labelFormatId:"SituasjonLabel.SisteAdresse",value:Ke(a,t),kilde:f.FREG}),s.jsx(q,{labelFormatId:"SituasjonLabel.Statborgerskap",value:Ce(a),kilde:f.FREG}),s.jsx(q,{labelFormatId:"SituasjonLabel.Personstatus",value:Ge(a),kilde:f.FREG})]})};X.__docgenInfo={description:"",methods:[],displayName:"SituasjonOversikt",props:{medlemskap:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  manuellBehandling?: ManuellMedlemskapsBehandling;
  legacyManuellBehandling?: LegacyManuellMedlemskapsBehandling;
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
  utenlandsopphold: UtenlandsoppholdPeriode[];
  adresser: AdressePeriode[];
  oppholdstillatelser: OppholdstillatelsePeriode[];
  medlemskapsperiode: MedlemskapPeriode[];
  annenpart?: Annenpart;
}`,signature:{properties:[{key:"manuellBehandling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avvik: MedlemskapAvvik[];
  resultat?: MedlemskapResultat;
}`,signature:{properties:[{key:"avvik",value:{name:"Array",elements:[{name:"MedlemskapAvvik"}],raw:"MedlemskapAvvik[]",required:!0}},{key:"resultat",value:{name:"MedlemskapResultat",required:!1}}]}}],raw:`Readonly<{
  avvik: MedlemskapAvvik[];
  resultat?: MedlemskapResultat;
}>`,required:!1}},{key:"legacyManuellBehandling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder: MedlemPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!1}},{key:"erEosBorger",value:{name:"boolean",required:!1}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!1}},{key:"bosattVurdering",value:{name:"boolean",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  vurderingsdato: string;
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>`}],raw:"MedlemPeriode[]",required:!0}}]}}],raw:`Readonly<{
  perioder: MedlemPeriode[];
}>`,required:!1}},{key:"regioner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"RegionPeriode[]",required:!0}},{key:"personstatuser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"PersonstatusPeriode[]",required:!0}},{key:"utenlandsopphold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  landkode: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"landkode",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  landkode: string;
}>`}],raw:"UtenlandsoppholdPeriode[]",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresse: Personadresse;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresse: Personadresse;
}>`}],raw:"AdressePeriode[]",required:!0}},{key:"oppholdstillatelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdstillatelseType: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdstillatelseType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdstillatelseType: string;
}>`}],raw:"OppholdstillatelsePeriode[]",required:!0}},{key:"medlemskapsperiode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  beslutningsdato: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"medlemskapType",value:{name:"string",required:!0}},{key:"dekningType",value:{name:"string",required:!0}},{key:"beslutningsdato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  beslutningsdato: string;
}>`}],raw:"MedlemskapPeriode[]",required:!0}},{key:"annenpart",value:{name:"signature",type:"object",raw:`{
  adresser: AdressePeriode[];
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresse: Personadresse;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresse: Personadresse;
}>`}],raw:"AdressePeriode[]",required:!0}},{key:"regioner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"RegionPeriode[]",required:!0}},{key:"personstatuser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"PersonstatusPeriode[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  manuellBehandling?: ManuellMedlemskapsBehandling;
  legacyManuellBehandling?: LegacyManuellMedlemskapsBehandling;
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
  utenlandsopphold: UtenlandsoppholdPeriode[];
  adresser: AdressePeriode[];
  oppholdstillatelser: OppholdstillatelsePeriode[];
  medlemskapsperiode: MedlemskapPeriode[];
  annenpart?: Annenpart;
}>`},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    };
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}>`},description:""}}};const He=[d.BOSATT_UTENLANDSOPPHOLD];d.BOSATT_MANGLENDE_BOSTEDSADRESSE,d.BOSATT_UTENLANDSADRESSE;d.BOSATT_UGYLDIG_PERSONSTATUS;d.MEDL_PERIODER;d.TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD;d.EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT;const x=({harAvvik:e})=>s.jsx(Oe,{fontSize:"24",color:e?"var(--a-orange-400)":"var(--a-gray-200)"});x.__docgenInfo={description:"",methods:[],displayName:"AvvikStatus",props:{harAvvik:{required:!0,tsType:{name:"boolean"},description:""}}};const ze=e=>{switch(e){case d.BOSATT_UTENLANDSOPPHOLD:return"AvvikMerknad.BosattUtenlandsopphold";case d.BOSATT_MANGLENDE_BOSTEDSADRESSE:return"AvvikMerknad.BosattManglendeAdresse";case d.BOSATT_UGYLDIG_PERSONSTATUS:return"AvvikMerknad.BosattUgyldigPersonstatus";case d.BOSATT_UTENLANDSADRESSE:return"AvvikMerknad.BosattUtenlandsadresse";case d.TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD:return"AvvikMerknad.Oppholdsrett";case d.MEDL_PERIODER:return"AvvikMerknad.MedlPerioder";case d.EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT:return"AvvikMerknad.EØSManglendeAnsettelseMedInntekt";default:W(e)}},Z=({avvik:e,values:a})=>s.jsx(M,{borderRadius:"full",paddingInline:"2",paddingBlock:"1",background:"surface-neutral-subtle",children:s.jsxs(D,{gap:"2",children:[s.jsx(x,{harAvvik:!0}),s.jsx(E,{size:"small",children:s.jsx(g,{id:ze(e),values:a})})]})});Z.__docgenInfo={description:"",methods:[],displayName:"AvvikMerknad",props:{avvik:{required:!0,tsType:{name:"MedlemskapAvvik"},description:""},values:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""}}};const ee=({tittel:e,kilde:a,relevanteAvvik:t,children:n})=>s.jsxs(v,{"aria-label":e,size:"small",open:t.length>0,children:[s.jsx(v.Header,{children:s.jsxs(D,{gap:"4",children:[s.jsx("div",{style:{marginTop:4},children:s.jsx(x,{harAvvik:t.length>0})}),s.jsxs("div",{children:[s.jsx(v.Title,{children:e}),s.jsx(v.Description,{children:s.jsx(H,{uppercase:!0,children:s.jsx(g,{id:Q(a)})})})]})]})}),s.jsx(v.Content,{children:s.jsx(M,{padding:"4",background:"surface-subtle",borderRadius:"medium",children:s.jsxs(T,{gap:"4",children:[t.map(r=>s.jsx(Z,{avvik:r},r)),n]})})})]});ee.__docgenInfo={description:"",methods:[],displayName:"EkspansjonsKort",props:{kilde:{required:!0,tsType:{name:"FaktaKilde"},description:""},tittel:{required:!0,tsType:{name:"string"},description:""},relevanteAvvik:{required:!0,tsType:{name:"Array",elements:[{name:"MedlemskapAvvik"}],raw:"MedlemskapAvvik[]"},description:""}}};const L=({utlandsopphold:e,label:a})=>s.jsxs("div",{children:[s.jsx(R,{size:"small",children:a}),s.jsx("ul",{style:{marginBlock:0},children:e.map(t=>s.jsx("li",{children:s.jsxs(S,{size:"small",children:[s.jsx(ke,{size:"small",dateStringFom:t.fom,dateStringTom:t.tom})," ",s.jsx(g,{id:"OpplysningerOmUtenlandsopphold.iLand",values:{land:J(t.landNavn)}})]})},t.fom))})]}),ne=({avvik:e=[],soknad:{oppgittTilknytning:a}})=>{const t=z(),{oppholdSistePeriode:n,oppholdNestePeriode:r,utlandsoppholdFor:i,utlandsoppholdEtter:l}=a;return s.jsxs(ee,{tittel:t.formatMessage({id:"OpplysningerOmUtenlandsopphold.Title"}),kilde:f.SOKNAD,relevanteAvvik:e.filter(u=>He.includes(u)),children:[s.jsxs("div",{children:[s.jsx(R,{size:"small",children:s.jsx(g,{id:"OpplysningerOmUtenlandsopphold.BoddForegaaende12.Sporsmaal"})}),s.jsx(S,{size:"small",children:s.jsx(g,{id:"OpplysningerOmUtenlandsopphold.BoddForegaaende12.Svar",values:{iNorge:n}})})]}),i.length&&s.jsx(L,{label:s.jsx(g,{id:"OpplysningerOmUtenlandsopphold.BoddForegaaende12.HvilkeLand"}),utlandsopphold:i}),s.jsxs("div",{children:[s.jsx(R,{size:"small",children:s.jsx(g,{id:"OpplysningerOmUtenlandsopphold.BoNeste12.Sporsmaal"})}),s.jsx(S,{size:"small",children:s.jsx(g,{id:"OpplysningerOmUtenlandsopphold.BoNeste12.Svar",values:{iNorge:r}})})]}),l.length&&s.jsx(L,{label:s.jsx(g,{id:"OpplysningerOmUtenlandsopphold.BoNeste12.HvilkeLand"}),utlandsopphold:l})]})};ne.__docgenInfo={description:"",methods:[],displayName:"OpplysningerOmUtenlandsopphold",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    };
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}>`},description:""},avvik:{required:!1,tsType:{name:"union",raw:"MedlemskapAvvik[] | undefined",elements:[{name:"Array",elements:[{name:"MedlemskapAvvik"}],raw:"MedlemskapAvvik[]"},{name:"undefined"}]},description:"",defaultValue:{value:"[]",computed:!1}}}};const $e=[$.AVKLAR_OM_BRUKER_ER_BOSATT],Ye=e=>{const a=e.find(t=>$e.some(n=>t.definisjon==n));return{begrunnelse:a==null?void 0:a.begrunnelse,vurdering:void 0}},re=({submittable:e,readOnly:a,submitCallback:t,aksjonspunkter:n,medlemskap:r,soknad:i})=>{var k;const[l,u]=o.useState(!1),y=ye({defaultValues:Ye(n)}),m=y.watch("begrunnelse"),c=o.useCallback(b=>(u(!0),t([])),[]);return s.jsxs(T,{gap:"6",children:[n.some(b=>b.status===ve.OPPRETTET)&&s.jsx(Y,{aksjonspunkter:n}),s.jsx(X,{medlemskap:r,soknad:i}),s.jsx(ne,{soknad:i,avvik:(k=r.manuellBehandling)==null?void 0:k.avvik}),s.jsx(be,{formMethods:y,onSubmit:b=>c(b),children:s.jsxs(T,{gap:"6",children:[s.jsx(fe,{isReadOnly:a,isSubmittable:e,hasBegrunnelse:!!m}),!a&&n.length>0&&s.jsx("div",{children:s.jsx(ce,{size:"small",variant:"primary",disabled:l,loading:l,type:"submit",children:s.jsx(g,{id:"MedlemskapInfoPanel.Submit"})})})]})})]})};re.__docgenInfo={description:`MedlemskapInfoPanel

Har ansvar for å vise faktapanelene for medlemskap.`,methods:[],displayName:"MedlemskapInfoPanel",props:{medlemskap:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  manuellBehandling?: ManuellMedlemskapsBehandling;
  legacyManuellBehandling?: LegacyManuellMedlemskapsBehandling;
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
  utenlandsopphold: UtenlandsoppholdPeriode[];
  adresser: AdressePeriode[];
  oppholdstillatelser: OppholdstillatelsePeriode[];
  medlemskapsperiode: MedlemskapPeriode[];
  annenpart?: Annenpart;
}`,signature:{properties:[{key:"manuellBehandling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avvik: MedlemskapAvvik[];
  resultat?: MedlemskapResultat;
}`,signature:{properties:[{key:"avvik",value:{name:"Array",elements:[{name:"MedlemskapAvvik"}],raw:"MedlemskapAvvik[]",required:!0}},{key:"resultat",value:{name:"MedlemskapResultat",required:!1}}]}}],raw:`Readonly<{
  avvik: MedlemskapAvvik[];
  resultat?: MedlemskapResultat;
}>`,required:!1}},{key:"legacyManuellBehandling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder: MedlemPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!1}},{key:"erEosBorger",value:{name:"boolean",required:!1}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!1}},{key:"bosattVurdering",value:{name:"boolean",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  vurderingsdato: string;
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>`}],raw:"MedlemPeriode[]",required:!0}}]}}],raw:`Readonly<{
  perioder: MedlemPeriode[];
}>`,required:!1}},{key:"regioner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"RegionPeriode[]",required:!0}},{key:"personstatuser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"PersonstatusPeriode[]",required:!0}},{key:"utenlandsopphold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  landkode: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"landkode",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  landkode: string;
}>`}],raw:"UtenlandsoppholdPeriode[]",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresse: Personadresse;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresse: Personadresse;
}>`}],raw:"AdressePeriode[]",required:!0}},{key:"oppholdstillatelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdstillatelseType: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdstillatelseType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdstillatelseType: string;
}>`}],raw:"OppholdstillatelsePeriode[]",required:!0}},{key:"medlemskapsperiode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  beslutningsdato: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"medlemskapType",value:{name:"string",required:!0}},{key:"dekningType",value:{name:"string",required:!0}},{key:"beslutningsdato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  beslutningsdato: string;
}>`}],raw:"MedlemskapPeriode[]",required:!0}},{key:"annenpart",value:{name:"signature",type:"object",raw:`{
  adresser: AdressePeriode[];
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresse: Personadresse;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresse: Personadresse;
}>`}],raw:"AdressePeriode[]",required:!0}},{key:"regioner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"RegionPeriode[]",required:!0}},{key:"personstatuser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"PersonstatusPeriode[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  manuellBehandling?: ManuellMedlemskapsBehandling;
  legacyManuellBehandling?: LegacyManuellMedlemskapsBehandling;
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
  utenlandsopphold: UtenlandsoppholdPeriode[];
  adresser: AdressePeriode[];
  oppholdstillatelser: OppholdstillatelsePeriode[];
  medlemskapsperiode: MedlemskapPeriode[];
  annenpart?: Annenpart;
}>`},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    };
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}>`},description:""}}};const Je=qe(je),te=e=>s.jsx(he,{value:Je,children:s.jsx(re,{...e})}),ae=te;te.__docgenInfo={description:"",methods:[],displayName:"MedlemskapFaktaIndex",props:{medlemskap:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  manuellBehandling?: ManuellMedlemskapsBehandling;
  legacyManuellBehandling?: LegacyManuellMedlemskapsBehandling;
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
  utenlandsopphold: UtenlandsoppholdPeriode[];
  adresser: AdressePeriode[];
  oppholdstillatelser: OppholdstillatelsePeriode[];
  medlemskapsperiode: MedlemskapPeriode[];
  annenpart?: Annenpart;
}`,signature:{properties:[{key:"manuellBehandling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  avvik: MedlemskapAvvik[];
  resultat?: MedlemskapResultat;
}`,signature:{properties:[{key:"avvik",value:{name:"Array",elements:[{name:"MedlemskapAvvik"}],raw:"MedlemskapAvvik[]",required:!0}},{key:"resultat",value:{name:"MedlemskapResultat",required:!1}}]}}],raw:`Readonly<{
  avvik: MedlemskapAvvik[];
  resultat?: MedlemskapResultat;
}>`,required:!1}},{key:"legacyManuellBehandling",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  perioder: MedlemPeriode[];
}`,signature:{properties:[{key:"perioder",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  vurderingsdato: string;
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}`,signature:{properties:[{key:"vurderingsdato",value:{name:"string",required:!0}},{key:"oppholdsrettVurdering",value:{name:"boolean",required:!1}},{key:"erEosBorger",value:{name:"boolean",required:!1}},{key:"lovligOppholdVurdering",value:{name:"boolean",required:!1}},{key:"bosattVurdering",value:{name:"boolean",required:!1}},{key:"medlemskapManuellVurderingType",value:{name:"string",required:!1}},{key:"begrunnelse",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  vurderingsdato: string;
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>`}],raw:"MedlemPeriode[]",required:!0}}]}}],raw:`Readonly<{
  perioder: MedlemPeriode[];
}>`,required:!1}},{key:"regioner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"RegionPeriode[]",required:!0}},{key:"personstatuser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"PersonstatusPeriode[]",required:!0}},{key:"utenlandsopphold",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  landkode: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"landkode",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  landkode: string;
}>`}],raw:"UtenlandsoppholdPeriode[]",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresse: Personadresse;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresse: Personadresse;
}>`}],raw:"AdressePeriode[]",required:!0}},{key:"oppholdstillatelser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  oppholdstillatelseType: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"oppholdstillatelseType",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  oppholdstillatelseType: string;
}>`}],raw:"OppholdstillatelsePeriode[]",required:!0}},{key:"medlemskapsperiode",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  beslutningsdato: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"medlemskapType",value:{name:"string",required:!0}},{key:"dekningType",value:{name:"string",required:!0}},{key:"beslutningsdato",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  beslutningsdato: string;
}>`}],raw:"MedlemskapPeriode[]",required:!0}},{key:"annenpart",value:{name:"signature",type:"object",raw:`{
  adresser: AdressePeriode[];
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresse: Personadresse;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresse",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  adresseType?: string;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  postNummer?: string;
  poststed?: string;
  land?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresse: Personadresse;
}>`}],raw:"AdressePeriode[]",required:!0}},{key:"regioner",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"RegionPeriode[]",required:!0}},{key:"personstatuser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  type: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"type",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  type: string;
}>`}],raw:"PersonstatusPeriode[]",required:!0}}]},required:!1}}]}}],raw:`Readonly<{
  manuellBehandling?: ManuellMedlemskapsBehandling;
  legacyManuellBehandling?: LegacyManuellMedlemskapsBehandling;
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
  utenlandsopphold: UtenlandsoppholdPeriode[];
  adresser: AdressePeriode[];
  oppholdstillatelser: OppholdstillatelsePeriode[];
  medlemskapsperiode: MedlemskapPeriode[];
  annenpart?: Annenpart;
}>`},description:""},soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}`,signature:{properties:[{key:"soknadType",value:{name:"string",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  oppholdNestePeriode: boolean;
  utlandsoppholdFor: UtlandsoppholdPeriode[];
  utlandsoppholdEtter: UtlandsoppholdPeriode[];
}`,signature:{properties:[{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  landNavn: string;
  fom: string;
  tom: string;
}`,signature:{properties:[{key:"landNavn",value:{name:"string",required:!0}},{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  landNavn: string;
  fom: string;
  tom: string;
}>`}],raw:"UtlandsoppholdPeriode[]",required:!0}}]},required:!0}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}`,signature:{properties:[{key:"dokumentType",value:{name:"string",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"arbeidsgiverReferanse",value:{name:"string",required:!0}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}}]}}],raw:`Readonly<{
  dokumentType: string; // Brukes kun som sorteringsnøkkel, ikke kodeverk
  dokumentTittel: string;
  arbeidsgiverReferanse: string;
  brukerHarSagtAtIkkeKommer: boolean;
}>`}],raw:"ManglendeVedleggSoknad[]",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  startDatoForPermisjon?: string;
  dekningsgrader: {
    avklartDekningsgrad?: number;
    søker: {
      søknadsdato: string;
      dekningsgrad: number;
    };
    annenPart: {
      søknadsdato: string;
      dekningsgrad: number;
    };
  };
}`,signature:{properties:[{key:"startDatoForPermisjon",value:{name:"string",required:!1}},{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  avklartDekningsgrad?: number;
  søker: {
    søknadsdato: string;
    dekningsgrad: number;
  };
  annenPart: {
    søknadsdato: string;
    dekningsgrad: number;
  };
}`,signature:{properties:[{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}},{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  søknadsdato: string;
  dekningsgrad: number;
}`,signature:{properties:[{key:"søknadsdato",value:{name:"string",required:!0}},{key:"dekningsgrad",value:{name:"number",required:!0}}]},required:!0}}]},required:!0}}]},required:!0}},{key:"søknadsfrist",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}`,signature:{properties:[{key:"mottattDato",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"dagerOversittetFrist",value:{name:"number",required:!1}}]}}],raw:`Readonly<{
  mottattDato?: string;
  utledetSøknadsfrist?: string;
  søknadsperiodeStart?: string;
  søknadsperiodeSlutt?: string;
  dagerOversittetFrist?: number;
}>`,required:!0}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"fodselsdatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"farSokerType",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  soknadType: string;
  mottattDato: string;
  begrunnelseForSenInnsending: string | undefined;
  antallBarn: number;
  oppgittTilknytning: {
    oppholdNorgeNa: boolean;
    oppholdSistePeriode: boolean;
    oppholdNestePeriode: boolean;
    utlandsoppholdFor: UtlandsoppholdPeriode[];
    utlandsoppholdEtter: UtlandsoppholdPeriode[];
  };
  manglendeVedlegg: ManglendeVedleggSoknad[];
  oppgittFordeling: {
    startDatoForPermisjon?: string;
    dekningsgrader: {
      avklartDekningsgrad?: number;
      søker: {
        søknadsdato: string;
        dekningsgrad: number;
      };
      annenPart: {
        søknadsdato: string;
        dekningsgrad: number;
      };
    };
  };
  søknadsfrist: Søknadsfrist;
  utstedtdato?: string;
  termindato?: string;
  fodselsdatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  barnetsAnkomstTilNorgeDato?: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  farSokerType?: string;
}>`},description:""}}};const We={uuid:"1",versjon:1,type:Re.FORSTEGANGSSOKNAD,behandlingPaaVent:!1,status:Se.BEHANDLING_UTREDES},tn={title:"fakta/fakta-medlemskap-v3",component:ae},Qe=({medlemskap:e,soknad:a,aksjonspunkter:t,submitCallback:n,alleMerknaderFraBeslutter:r})=>s.jsx(ae,{behandling:We,medlemskap:e,soknad:a,aksjonspunkter:t,alleKodeverk:P,alleMerknaderFraBeslutter:r,submitCallback:n,readOnly:!1,harApneAksjonspunkter:!0,submittable:!0,setFormData:()=>{}}),j=Qe.bind({});j.args={soknad:{oppgittFordeling:{startDatoForPermisjon:"2019-01-01"},oppgittTilknytning:{oppholdNorgeNa:!0,oppholdNestePeriode:!0,oppholdSistePeriode:!0,utlandsoppholdFor:[{landNavn:"SVERIGE",fom:"2010-01-01",tom:"2011-01-01"}],utlandsoppholdEtter:[{landNavn:"DANMARK",fom:"2018-01-01",tom:"2019-01-01"}]},termindato:"2018-01-01"},medlemskap:{manuellBehandling:{avvik:[d.BOSATT_UTENLANDSOPPHOLD,d.BOSATT_UTENLANDSADRESSE,d.BOSATT_MANGLENDE_BOSTEDSADRESSE,d.BOSATT_UGYLDIG_PERSONSTATUS,d.MEDL_PERIODER,d.TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD,d.EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT]},oppholdstillatelser:[{fom:"2019-01-01",tom:"2021-10-13",oppholdstillatelseType:"MIDLERTIDIG"},{fom:"2019-01-01",tom:"2021-01-13",oppholdstillatelseType:"MIDLERTIDIG"}],medlemskapsperiode:[{fom:"2019-01-01",tom:"2021-10-13",medlemskapType:"AVKLARES",dekningType:"OPPHOR",beslutningsdato:"2020-02-01"}],utenlandsopphold:[{fom:"2019-01-01",tom:"2021-10-13",landkode:"DNK"}],adresser:[{fom:"2019-01-01",tom:"2021-10-13",adresse:{adresseType:K.BOSTEDSADRESSE,adresselinje1:"Adresse 1",adresselinje2:"Adresse 2",adresselinje3:"Adresse 3",poststed:"poststed",postNummer:"1234",land:"NOR"}}],regioner:[{fom:"2019-01-01",tom:"2021-10-13",type:"NORDEN"}],personstatuser:[{fom:"2019-01-01",tom:"2021-10-13",type:"BOSA"}]},aksjonspunkter:[{definisjon:$.AVKLAR_FORTSATT_MEDLEMSKAP,status:Pe.OPPRETTET,begrunnelse:void 0,kanLoses:!0}],alleMerknaderFraBeslutter:{},submitCallback:Te("button-click")};var U,V,C;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`({
  medlemskap,
  soknad,
  aksjonspunkter,
  submitCallback,
  alleMerknaderFraBeslutter
}) => <MedlemskapFaktaIndex behandling={behandling} medlemskap={medlemskap} soknad={soknad} aksjonspunkter={aksjonspunkter} alleKodeverk={(alleKodeverk as any)} alleMerknaderFraBeslutter={alleMerknaderFraBeslutter} submitCallback={submitCallback} readOnly={false} harApneAksjonspunkter submittable setFormData={() => undefined} />`,...(C=(V=j.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};const an=["Default"];export{j as Default,an as __namedExportsOrder,tn as default};
