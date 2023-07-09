import{t as F,P as z,v as P,w as r,J as k,_ as A,U as b,N as ee,L as ne,d as B,j as c,a as v}from"./index.es-53b354a9.js";import{R as D,r as T}from"./index-2ef1385a.js";import{V as se}from"./VergeFaktaInitPanel-6dd46eb3.js";import{B as re}from"./BehandlingContainer-33af4596.js";import{x as H}from"./index.es-74e3f685.js";import{t as f,ae as h,af as E,l as le,a9 as L,a2 as U,ag as ae,$ as K}from"./AppIndex.stories-2c5f8da4.js";import{P as G}from"./ProsessDefaultInitPanel-c3080da4.js";import"./index-fcaef652.js";import"./index.es-23b6a505.js";import"./BehandlingHenlagtPanel-3604a27a.js";import"./index.es-e68eea64.js";import"./extends-98964cd2.js";import"./iframe-e5c5ad17.js";import"../sb-preview/runtime.js";import"./nb_NO-e803aba2.js";var C={exports:{}},V={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J;function te(){if(J)return V;J=1;var n=D,g=Symbol.for("react.element"),u=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function m(o,l,x){var d,_={},p=null,R=null;x!==void 0&&(p=""+x),l.key!==void 0&&(p=""+l.key),l.ref!==void 0&&(R=l.ref);for(d in l)j.call(l,d)&&!t.hasOwnProperty(d)&&(_[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)_[d]===void 0&&(_[d]=l[d]);return{$$typeof:g,type:o,key:p,ref:R,props:_,_owner:i.current}}return V.Fragment=u,V.jsx=m,V.jsxs=m,V}C.exports=te();var s=C.exports;const ie=n=>n?le(n,ee).format(ne):"-",y="0",de=n=>n==null||n==="-"?y:n,ge=(n,g,u)=>{var j,i;const t=g.find(l=>l.uuid===n),m=u[f.BEHANDLING_TYPE],o=u[f.BEHANDLING_STATUS];return t?`${ie(t.opprettet)} - ${(j=m.find(l=>l.kode===t.type))==null?void 0:j.navn} - ${(i=o.find(l=>l.kode===t.status))==null?void 0:i.navn}`:""},ke=({ankeVurdering:n,behandlinger:g,alleKodeverk:u})=>{var j,i;const t=n.ankeVurderingResultat,m=t?de(t.påAnketKlageBehandlingUuid):null,o=u[f.ANKE_OMGJOER_AARSAK],l=(n==null?void 0:n.underBehandlingKabal)||!1,x=(n==null?void 0:n.behandletAvKabal)||!1;return s.jsxs(s.Fragment,{children:[s.jsx(P,{size:"small",children:s.jsx(r,{id:"Ankebehandling.Title"})}),s.jsx(k,{sixteenPx:!0}),l&&s.jsxs(s.Fragment,{children:[s.jsx(P,{size:"small",children:s.jsx(r,{id:"Ankebehandling.SeKabalText"})}),s.jsx(k,{sixteenPx:!0})]}),x&&s.jsxs(s.Fragment,{children:[s.jsx(P,{size:"small",children:s.jsx(r,{id:"Ankebehandling.BehandletKabal"})}),s.jsx(k,{sixteenPx:!0})]}),!l&&s.jsxs(s.Fragment,{children:[s.jsx(A,{size:"small",children:s.jsx(r,{id:"Ankebehandling.Resultat.Vedtak"})}),s.jsxs(b,{size:"small",children:[m===y&&s.jsx(r,{id:"Ankebehandling.Resultat.IkkePaaAnketVedtak"}),m!==y&&ge(m,g,u)]}),s.jsx(k,{sixteenPx:!0}),s.jsx(A,{size:"small",children:s.jsx(r,{id:"Ankebehandling.Resultat"})}),s.jsxs(b,{size:"small",children:[t.ankeVurdering===h.ANKE_OMGJOER&&s.jsx(r,{id:"Ankebehandling.Resultat.Omgjør"}),t.ankeVurdering===h.ANKE_OPPHEVE_OG_HJEMSENDE&&s.jsx(r,{id:"Ankebehandling.Resultat.OpphevHjemsend"}),t.ankeVurdering===h.ANKE_HJEMSENDE_UTEN_OPPHEV&&s.jsx(r,{id:"Ankebehandling.Resultat.Hjemsend"}),t.ankeVurdering===h.ANKE_AVVIS&&s.jsx(r,{id:"Ankebehandling.Resultat.Avvis"}),t.ankeVurdering===h.ANKE_STADFESTE_YTELSESVEDTAK&&s.jsx(r,{id:"Ankebehandling.Resultat.Stadfest"})]}),h.ANKE_AVVIS===t.ankeVurdering&&!x&&s.jsxs(s.Fragment,{children:[s.jsx(k,{sixteenPx:!0}),s.jsx(A,{size:"small",children:s.jsx(r,{id:"Ankebehandling.Avvisning"})}),t.erAnkerIkkePart&&s.jsx(b,{size:"small",children:s.jsx(r,{id:"Ankebehandling.Avvisning.IkkePart"})}),t.erIkkeKonkret&&s.jsx(b,{size:"small",children:s.jsx(r,{id:"Ankebehandling.Avvisning.IkkeKonkret"})}),t.erFristIkkeOverholdt&&s.jsx(b,{size:"small",children:s.jsx(r,{id:"Ankebehandling.Avvisning.IkkeFrist"})}),t.erIkkeSignert&&s.jsx(b,{size:"small",children:s.jsx(r,{id:"Ankebehandling.Avvisning.IkkeSignert"})}),s.jsx(k,{sixteenPx:!0}),s.jsx(A,{size:"small",children:s.jsx(r,{id:"Ankebehandling.Realitetsbehandles"})}),s.jsx(b,{size:"small",children:t.erSubsidiartRealitetsbehandles?s.jsx(r,{id:"Ankebehandling.Realitetsbehandles.Ja"}):s.jsx(r,{id:"Ankebehandling.Realitetsbehandles.Nei"})})]}),h.ANKE_OMGJOER===t.ankeVurdering&&s.jsxs(s.Fragment,{children:[s.jsx(k,{sixteenPx:!0}),s.jsx(A,{size:"small",children:s.jsx(r,{id:"Ankebehandling.Avvisning"})}),s.jsx(b,{size:"small",children:(j=o.find(d=>d.kode===t.ankeOmgjoerArsak))==null?void 0:j.navn}),s.jsx(k,{sixteenPx:!0}),s.jsxs(b,{size:"small",children:[t.ankeVurderingOmgjoer===E.ANKE_TIL_GUNST&&s.jsx(r,{id:"Ankebehandling.VurderingOmgjoer.Gunst"}),t.ankeVurderingOmgjoer===E.ANKE_TIL_UGUNST&&s.jsx(r,{id:"Ankebehandling.VurderingOmgjoer.Ugunst"}),t.ankeVurderingOmgjoer===E.ANKE_DELVIS_OMGJOERING_TIL_GUNST&&s.jsx(r,{id:"Ankebehandling.VurderingOmgjoer.Delvis"})]})]}),(h.ANKE_OPPHEVE_OG_HJEMSENDE===t.ankeVurdering||h.ANKE_HJEMSENDE_UTEN_OPPHEV===t.ankeVurdering)&&!x&&s.jsxs(s.Fragment,{children:[s.jsx(k,{sixteenPx:!0}),s.jsx(A,{size:"small",children:s.jsx(r,{id:"Ankebehandling.OmgjoeringArsak"})}),s.jsx(b,{size:"small",children:(i=o.find(d=>d.kode===t.ankeOmgjoerArsak))==null?void 0:i.navn})]}),s.jsx(k,{sixteenPx:!0}),s.jsx(A,{size:"small",children:s.jsx(r,{id:"Ankebehandling.Begrunnelse"})}),s.jsx(b,{size:"small",children:t.begrunnelse}),s.jsx(k,{sixteenPx:!0}),s.jsx(A,{size:"small",children:s.jsx(r,{id:"FritekstAnkeBrevTextField.Fritekst"})}),s.jsx(b,{size:"small",children:t.fritekstTilBrev}),s.jsx(k,{sixteenPx:!0})]})]})},ue={"Ankebehandling.Title":"Ankebehandling","Ankebehandling.HelpText":"Fastsett resultatet av ankebehandlingen","Ankebehandling.KabalText":"Fortsett ankebehandlingen i KABAL: Kryss av, velg hjemmel og klagebehandling, trykk deretter send","Ankebehandling.SeKabalText":"Anken behandles i KABAL","Ankebehandling.SendTilKabal":"Send til KABAL","Ankebehandling.BehandletKabal":"Anken er behandlet i KABAL","Ankebehandling.Hjemmel":"Hjemmel","Ankebehandling.Resultat":"Resultat","Ankebehandling.Resultat.Stadfest":"Stadfest","Ankebehandling.Resultat.Omgjør":"Omgjør","Ankebehandling.Resultat.Avvis":"Avvis","Ankebehandling.Resultat.OpphevHjemsend":"Opphev","Ankebehandling.Resultat.Hjemsend":"Hjemsend","Ankebehandling.Resultat.Vedtak":"Vedtaket som er anket","Ankebehandling.Avvisning":"Avvisningsårsaker","Ankebehandling.OmgjoeringArsak":"Årsak","Ankebehandling.TempSaveButton":"Lagre","Ankebehandling.VurderingOmgjoer.Delvis":"Delvis omgjøring, til gunst","Ankebehandling.VurderingOmgjoer.Gunst":"Til gunst","Ankebehandling.VurderingOmgjoer.Ugunst":"Til ugunst","Ankebehandling.Avvisning.IkkePart":"Den som anker er ikke part i saken","Ankebehandling.Avvisning.IkkeKonkret":"Det ankes ikke på konkrete elementer i vedtaket","Ankebehandling.Avvisning.IkkeFrist":"Ankefristen er ikke overholdt","Ankebehandling.Avvisning.IkkeSignert":"Anken er ikke signert","Ankebehandling.Realitetsbehandles":"Skal anken subsidiært realitetsbehandles?","Ankebehandling.Realitetsbehandles.Ja":"Ja","Ankebehandling.Realitetsbehandles.Nei":"Nei","Ankebehandling.Resultat.IkkePaaAnketVedtak":"Ikke påanket vedtak","Ankebehandling.Begrunnelse":"Begrunnelse","FritekstAnkeBrevTextField.Fritekst":"Fritekst til brev","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev","Malform.Beskrivelse":"Foretrukket språk"},oe=F(ue),Y=({ankeVurdering:n,behandlinger:g,alleKodeverk:u})=>s.jsx(z,{value:oe,children:s.jsx(ke,{ankeVurdering:n,behandlinger:g,alleKodeverk:u})});Y.__docgenInfo={description:"",methods:[],displayName:"Nr"};const he=[U.ANKE_VURDERING],I=({alleBehandlinger:n,...g})=>{const u=B(),{behandling:j}=g;return c.jsx(G,{...g,panelEndepunkter:he,prosessPanelKode:L.ANKEBEHANDLING,prosessPanelMenyTekst:u.formatMessage({id:"Behandlingspunkt.Ankebehandling"}),skalPanelVisesIMeny:()=>!0,hentOverstyrtStatus:()=>{var i;return(i=j.behandlingsresultat)!=null&&i.type?H.OPPFYLT:H.IKKE_VURDERT},renderPanel:i=>c.jsx(Y,{behandlinger:n,...i})})};try{I.displayName="AnkeBehandlingProsessStegInitPanel",I.__docgenInfo={description:"",displayName:"AnkeBehandlingProsessStegInitPanel",props:{alleBehandlinger:{defaultValue:null,description:"",name:"alleBehandlinger",required:!0,type:{name:"{ uuid: string; type: string; avsluttet?: string | undefined; }[]"}},behandling:{defaultValue:null,description:"",name:"behandling",required:!0,type:{name:"Behandling"}},valgtProsessSteg:{defaultValue:null,description:"",name:"valgtProsessSteg",required:!1,type:{name:"string"}},registrerProsessPanel:{defaultValue:null,description:"",name:"registrerProsessPanel",required:!0,type:{name:"(data: ProsessPanelMenyData) => void"}}}}}catch{}var W={exports:{}},O={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w;function Ae(){if(w)return O;w=1;var n=D,g=Symbol.for("react.element"),u=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function m(o,l,x){var d,_={},p=null,R=null;x!==void 0&&(p=""+x),l.key!==void 0&&(p=""+l.key),l.ref!==void 0&&(R=l.ref);for(d in l)j.call(l,d)&&!t.hasOwnProperty(d)&&(_[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)_[d]===void 0&&(_[d]=l[d]);return{$$typeof:g,type:o,key:p,ref:R,props:_,_owner:i.current}}return O.Fragment=u,O.jsx=m,O.jsxs=m,O}W.exports=Ae();var e=W.exports;const xe=({ankeVurderingResultat:n})=>e.jsxs(e.Fragment,{children:[e.jsx(v,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Stadfest"})}),e.jsx(k,{sixteenPx:!0}),e.jsx(A,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),e.jsx(v,{size:"small",children:n.begrunnelse})]}),je=({ankeVurderingResultat:n})=>e.jsxs(e.Fragment,{children:[e.jsx(v,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Oppheves"})}),e.jsx(k,{sixteenPx:!0}),e.jsx(A,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),e.jsx(v,{size:"small",children:n.begrunnelse})]}),me=({ankeVurderingResultat:n})=>e.jsxs(e.Fragment,{children:[e.jsx(v,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Hjemsendes"})}),e.jsx(k,{sixteenPx:!0}),e.jsx(A,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),e.jsx(v,{size:"small",children:n.begrunnelse})]}),be=({ankeVurderingResultat:n})=>e.jsxs(e.Fragment,{children:[e.jsxs(v,{size:"small",children:[n.påAnketKlageBehandlingUuid!=null&&e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Avvises"}),n.påAnketKlageBehandlingUuid==null&&e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.AvvisesUten"})]}),e.jsx(k,{sixteenPx:!0}),e.jsx(A,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Arsak"})}),e.jsxs("ul",{children:[n.erAnkerIkkePart&&e.jsx("li",{children:e.jsx(v,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Avvisning.IkkePart"})})}),n.erIkkeKonkret&&e.jsx("li",{children:e.jsx(v,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Avvisning.IkkeKonkret"})})}),n.erFristIkkeOverholdt&&e.jsx("li",{children:e.jsx(v,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Avvisning.IkkeFrist"})})}),n.erIkkeSignert&&e.jsx("li",{children:e.jsx(v,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Avvisning.IkkeSignert"})})})]}),e.jsx(A,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Realitetsbehandles"})}),e.jsx(v,{size:"small",children:e.jsx(r,{id:n.erSubsidiartRealitetsbehandles?"Ankebehandling.Realitetsbehandles.Ja":"Ankebehandling.Realitetsbehandles.Nei"})}),e.jsx(k,{sixteenPx:!0}),e.jsx(A,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),e.jsx(v,{size:"small",children:n.begrunnelse})]}),ve=n=>{switch(n){case E.ANKE_TIL_UGUNST:return"Ankebehandling.Resultat.Innstilling.Omgjores.TilUgunst";case E.ANKE_TIL_GUNST:return"Ankebehandling.Resultat.Innstilling.Omgjores.TilGunst";case E.ANKE_DELVIS_OMGJOERING_TIL_GUNST:return"Ankebehandling.Resultat.Innstilling.Omgjores.Delvis";default:return""}},_e=({ankeVurderingResultat:n,alleKodeverk:g})=>e.jsxs(e.Fragment,{children:[e.jsx(v,{size:"small",children:e.jsx(r,{id:ve(n.ankeVurderingOmgjoer)})}),e.jsx(k,{sixteenPx:!0}),n.ankeOmgjoerArsak&&e.jsxs(e.Fragment,{children:[e.jsx(v,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Arsak"})}),e.jsx(v,{size:"small",children:ae(g)(n.ankeOmgjoerArsak,f.ANKE_OMGJOER_AARSAK)}),e.jsx(k,{sixteenPx:!0})]}),e.jsx(A,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),e.jsx(v,{size:"small",children:n.begrunnelse})]}),ce=({ankeVurderingResultat:n,alleKodeverk:g})=>{if(!n)return null;switch(n.ankeVurdering){case h.ANKE_STADFESTE_YTELSESVEDTAK:return e.jsx(xe,{ankeVurderingResultat:n});case h.ANKE_OPPHEVE_OG_HJEMSENDE:return e.jsx(je,{ankeVurderingResultat:n});case h.ANKE_HJEMSENDE_UTEN_OPPHEV:return e.jsx(me,{ankeVurderingResultat:n});case h.ANKE_OMGJOER:return e.jsx(_e,{ankeVurderingResultat:n,alleKodeverk:g});case h.ANKE_AVVIS:return e.jsx(be,{ankeVurderingResultat:n});default:return e.jsx("div",{children:"???"})}},pe=({ankeVurderingResultat:n,alleKodeverk:g})=>e.jsxs(e.Fragment,{children:[e.jsx(P,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Title"})}),e.jsx(k,{fourPx:!0}),e.jsx(A,{size:"small",children:e.jsx(r,{id:"Ankebehandling.Resultat.Innstilling"})}),e.jsx(ce,{ankeVurderingResultat:n,alleKodeverk:g})]}),Ee={"Ankebehandling.Resultat.Title":"Resultat","Ankebehandling.Resultat.Innstilling":"Innstilling på resultat av anke","Ankebehandling.Resultat.Innstilling.Stadfest":"Vedtaket stadfestes","Ankebehandling.Resultat.Innstilling.Omgjores.TilGunst":"Vedtaket omgjøres til gunst","Ankebehandling.Resultat.Innstilling.Omgjores.TilUgunst":"Vedtaket omgjøres til ugunst","Ankebehandling.Resultat.Innstilling.Omgjores.Delvis":"Vedtaket omgjøres delvis til gunst","Ankebehandling.Resultat.Innstilling.Oppheves":"Vedtaket oppheves","Ankebehandling.Resultat.Innstilling.Hjemsendes":"Vedtaket hjemsendes","Ankebehandling.Resultat.Innstilling.Avvises":"Vedtaket avvises","Ankebehandling.Resultat.Innstilling.AvvisesUten":"Vedtaket avvises. Ikke påanket vedtak","Ankebehandling.Resultat.Innstilling.Begrunnelse":"Begrunnelse","Ankebehandling.Resultat.Innstilling.Arsak":"Årsak","Ankebehandling.Avvisning.IkkePart":"Den som anker er ikke part i saken","Ankebehandling.Avvisning.IkkeKonkret":"Det ankes ikke på konkrete elementer i vedtaket","Ankebehandling.Avvisning.IkkeFrist":"Ankefristen er ikke overholdt","Ankebehandling.Avvisning.IkkeSignert":"Anken er ikke signert","Ankebehandling.Realitetsbehandles":"Skal anken subsidiært realitetsbehandles?","Ankebehandling.Realitetsbehandles.Ja":"Ja","Ankebehandling.Realitetsbehandles.Nei":"Nei","Malform.Beskrivelse":"Foretrukket språk","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev"},Re=F(Ee),Q=({ankeVurdering:n,alleKodeverk:g})=>e.jsx(z,{value:Re,children:e.jsx(pe,{ankeVurderingResultat:n.ankeVurderingResultat,alleKodeverk:g})});Q.__docgenInfo={description:"",methods:[],displayName:"zn"};const Pe=[K.FORESLA_VEDTAK,K.FATTER_VEDTAK,K.FORESLA_VEDTAK_MANUELT,K.VEDTAK_UTEN_TOTRINNSKONTROLL],Ve=[U.ANKE_VURDERING],S=({...n})=>{const g=B();return c.jsx(G,{...n,panelEndepunkter:Ve,aksjonspunktKoder:Pe,prosessPanelKode:L.ANKE_RESULTAT,prosessPanelMenyTekst:g.formatMessage({id:"Behandlingspunkt.AnkeResultat"}),skalPanelVisesIMeny:()=>!0,renderPanel:u=>c.jsx(Q,{ankeVurdering:u.ankeVurdering,alleKodeverk:u.alleKodeverk})})};try{S.displayName="AnkeResultatProsessStegInitPanel",S.__docgenInfo={description:"",displayName:"AnkeResultatProsessStegInitPanel",props:{behandling:{defaultValue:null,description:"",name:"behandling",required:!0,type:{name:"Behandling"}},valgtProsessSteg:{defaultValue:null,description:"",name:"valgtProsessSteg",required:!1,type:{name:"string"}},registrerProsessPanel:{defaultValue:null,description:"",name:"registrerProsessPanel",required:!0,type:{name:"(data: ProsessPanelMenyData) => void"}}}}}catch{}var X={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $;function Oe(){if($)return N;$=1;var n=D,g=Symbol.for("react.element"),u=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function m(o,l,x){var d,_={},p=null,R=null;x!==void 0&&(p=""+x),l.key!==void 0&&(p=""+l.key),l.ref!==void 0&&(R=l.ref);for(d in l)j.call(l,d)&&!t.hasOwnProperty(d)&&(_[d]=l[d]);if(o&&o.defaultProps)for(d in l=o.defaultProps,l)_[d]===void 0&&(_[d]=l[d]);return{$$typeof:g,type:o,key:p,ref:R,props:_,_owner:i.current}}return N.Fragment=u,N.jsx=m,N.jsxs=m,N}X.exports=Oe();var a=X.exports;const Ne=({ankeVurdering:n,alleKodeverk:g})=>{var u,j;const i=n==null?void 0:n.ankeVurderingResultat,t=(n==null?void 0:n.underBehandlingKabal)||!1,m=(n==null?void 0:n.underBehandlingKabalTrygderett)||!1,o=(n==null?void 0:n.behandletAvKabal)||!1,l=g[f.ANKE_OMGJOER_AARSAK];return a.jsxs(a.Fragment,{children:[a.jsx(P,{size:"small",children:a.jsx(r,{id:"Ankebehandling.Merknad.Title"})}),a.jsx(k,{sixteenPx:!0}),t&&a.jsxs(a.Fragment,{children:[a.jsx(P,{size:"small",children:a.jsx(r,{id:"Ankebehandling.Merknad.SeKabalText"})}),a.jsx(k,{sixteenPx:!0})]}),o&&a.jsxs(a.Fragment,{children:[a.jsx(P,{size:"small",children:a.jsx(r,{id:"Ankebehandling.Merknad.BehandletKabal"})}),a.jsx(k,{sixteenPx:!0})]}),!t&&!m&&a.jsxs(a.Fragment,{children:[a.jsx(A,{size:"small",children:a.jsx(r,{id:"Ankebehandling.Merknad.Merknader"})}),a.jsx(b,{size:"small",children:i.erMerknaderMottatt?a.jsx(r,{id:"Ankebehandling.Merknad.Merknader.Ja"}):a.jsx(r,{id:"Ankebehandling.Merknad.Merknader.Nei"})}),a.jsx(k,{sixteenPx:!0}),a.jsx(A,{size:"small",children:a.jsx(r,{id:"Ankebehandling.Fritekst"})}),a.jsx(b,{size:"small",children:i.merknadKommentar}),a.jsx(k,{sixteenPx:!0}),a.jsx(A,{size:"small",children:a.jsx(r,{id:"Ankebehandling.Resultat"})}),a.jsxs(b,{size:"small",children:[i.trygderettVurdering===h.ANKE_OMGJOER&&a.jsx(r,{id:"Ankebehandling.Resultat.Omgjør"}),i.trygderettVurdering===h.ANKE_OPPHEVE_OG_HJEMSENDE&&a.jsx(r,{id:"Ankebehandling.Resultat.Opphev"}),i.trygderettVurdering===h.ANKE_HJEMSENDE_UTEN_OPPHEV&&a.jsx(r,{id:"Ankebehandling.Resultat.Hjemsend"}),i.trygderettVurdering===h.ANKE_AVVIS&&a.jsx(r,{id:"Ankebehandling.Resultat.Avvis"}),i.trygderettVurdering===h.ANKE_STADFESTE_YTELSESVEDTAK&&a.jsx(r,{id:"Ankebehandling.Resultat.Stadfest"})]})]}),h.ANKE_OMGJOER===i.trygderettVurdering&&a.jsxs(a.Fragment,{children:[a.jsx(k,{sixteenPx:!0}),a.jsx(A,{size:"small",children:a.jsx(r,{id:"Ankebehandling.OmgjoeringArsak"})}),a.jsx(b,{size:"small",children:(u=l.find(x=>x.kode===i.trygderettOmgjoerArsak))==null?void 0:u.navn}),a.jsx(k,{sixteenPx:!0}),a.jsxs(b,{size:"small",children:[i.trygderettVurderingOmgjoer===E.ANKE_TIL_GUNST&&a.jsx(r,{id:"Ankebehandling.VurderingOmgjoer.Gunst"}),i.trygderettVurderingOmgjoer===E.ANKE_TIL_UGUNST&&a.jsx(r,{id:"Ankebehandling.VurderingOmgjoer.Ugunst"}),i.trygderettVurderingOmgjoer===E.ANKE_DELVIS_OMGJOERING_TIL_GUNST&&a.jsx(r,{id:"Ankebehandling.VurderingOmgjoer.Delvis"})]})]}),(h.ANKE_OPPHEVE_OG_HJEMSENDE===i.trygderettVurdering||h.ANKE_HJEMSENDE_UTEN_OPPHEV===i.trygderettVurdering)&&!o&&a.jsxs(a.Fragment,{children:[a.jsx(k,{sixteenPx:!0}),a.jsx(A,{size:"small",children:a.jsx(r,{id:"Ankebehandling.OmgjoeringArsak"})}),a.jsx(b,{size:"small",children:(j=l.find(x=>x.kode===i.trygderettOmgjoerArsak))==null?void 0:j.navn})]})]})},Ke={"Ankebehandling.Merknad.Title":"Trygderettsbehandling","Ankebehandling.Merknad.HelpText":"Kommentarer til Trygderettsbehandlingen og videre oppfølging","Ankebehandling.Merknad.AvsluttBehandling":"Avslutt behandlingen","Ankebehandling.Merknad.Merknader":"Har det kommet merknader?","Ankebehandling.Merknad.Merknader.Ja":"Ja","Ankebehandling.Merknad.Merknader.Nei":"Nei","Ankebehandling.Merknad.Merknader.Kommentarer":"Kommentarer til Trygderettsbehandlingen","Ankebehandling.Merknad.Merknader.LagreKommentarer":"Lagre kommentarer","Ankebehandling.Merknad.SendTilKabal":"Send til KABAL","Ankebehandling.Merknad.KabalText":"Fortsett ankebehandlingen i KABAL: Kryss av, velg hjemmel og klagebehandling, trykk deretter send","Ankebehandling.Merknad.SeKabalText":"Anken behandles i KABAL","Ankebehandling.Merknad.BehandletKabal":"Anken er behandlet i KABAL","Ankebehandling.Merknad.Hjemmel":"Hjemmel","Ankebehandling.Fritekst":"Fritekst for Trygderettsbehandling","Ankebehandling.Resultat":"Resultat fra Trygdretten","Ankebehandling.Resultat.Stadfest":"Stadfestet","Ankebehandling.Resultat.Omgjør":"Omgjort","Ankebehandling.Resultat.Opphev":"Opphevet","Ankebehandling.Resultat.Hjemsend":"Hjemsendt","Ankebehandling.Resultat.Avvis":"Avvist","Ankebehandling.Resultat.Vedtak":"Vedtaket som er anket","Ankebehandling.Resultat.SendtTrygderett":"Dato sendt Trygderetten","Ankebehandling.Resultat.IkkePaaAnketVedtak":"Ikke påanket vedtak","Ankebehandling.VurderingOmgjoer.Delvis":"Delvis omgjøring, til gunst","Ankebehandling.VurderingOmgjoer.Gunst":"Til gunst","Ankebehandling.VurderingOmgjoer.Ugunst":"Til ugunst","Ankebehandling.OmgjoeringArsak":"Årsak","Malform.Beskrivelse":"Foretrukket språk","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev"},fe=F(Ke),Z=({ankeVurdering:n,alleKodeverk:g})=>a.jsx(z,{value:fe,children:a.jsx(Ne,{ankeVurdering:n,alleKodeverk:g})});Z.__docgenInfo={description:"",methods:[],displayName:"Or"};const Te=[K.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN],ye=[U.ANKE_VURDERING],M=({...n})=>{const g=B();return c.jsx(G,{...n,aksjonspunktKoder:Te,panelEndepunkter:ye,prosessPanelKode:L.ANKE_MERKNADER,prosessPanelMenyTekst:g.formatMessage({id:"Behandlingspunkt.AnkeMerknader"}),skalPanelVisesIMeny:()=>!0,renderPanel:u=>c.jsx(Z,{...u})})};try{M.displayName="AnkeTrygderettsbehandlingProsessStegInitPanel",M.__docgenInfo={description:"",displayName:"AnkeTrygderettsbehandlingProsessStegInitPanel",props:{behandling:{defaultValue:null,description:"",name:"behandling",required:!0,type:{name:"Behandling"}},valgtProsessSteg:{defaultValue:null,description:"",name:"valgtProsessSteg",required:!1,type:{name:"string"}},registrerProsessPanel:{defaultValue:null,description:"",name:"registrerProsessPanel",required:!0,type:{name:"(data: ProsessPanelMenyData) => void"}}}}}catch{}const q=({behandling:n,valgtProsessSteg:g,valgtFaktaSteg:u,oppdaterProsessStegOgFaktaPanelIUrl:j,alleBehandlinger:i})=>{const t=T.useMemo(()=>i.filter(l=>!l.behandlingHenlagt).map(l=>{var x;return{uuid:l.uuid,type:l.type,status:l.status,opprettet:l.opprettet,avsluttet:l.avsluttet,resultatType:(x=l.behandlingsresultat)==null?void 0:x.type}}),[i]),m=T.useCallback(l=>c.jsx(se,{...l}),[]),o=T.useCallback(l=>c.jsxs(c.Fragment,{children:[c.jsx(I,{...l,alleBehandlinger:t}),c.jsx(S,{...l}),c.jsx(M,{...l})]}),[]);return c.jsx(re,{behandling:n,valgtProsessSteg:g,valgtFaktaSteg:u,oppdaterProsessStegOgFaktaPanelIUrl:j,hentFaktaPaneler:m,hentProsessPaneler:o})};try{q.displayName="AnkePaneler",q.__docgenInfo={description:"",displayName:"AnkePaneler",props:{behandling:{defaultValue:null,description:"",name:"behandling",required:!0,type:{name:"Behandling"}},valgtProsessSteg:{defaultValue:null,description:"",name:"valgtProsessSteg",required:!1,type:{name:"string"}},valgtFaktaSteg:{defaultValue:null,description:"",name:"valgtFaktaSteg",required:!1,type:{name:"string"}},oppdaterProsessStegOgFaktaPanelIUrl:{defaultValue:null,description:"",name:"oppdaterProsessStegOgFaktaPanelIUrl",required:!0,type:{name:"(punktnavn?: string | undefined, faktanavn?: string | undefined) => void"}},alleBehandlinger:{defaultValue:null,description:"",name:"alleBehandlinger",required:!0,type:{name:"BehandlingAppKontekst[]"}}}}}catch{}export{q as default};
//# sourceMappingURL=AnkePaneler-05088439.js.map
