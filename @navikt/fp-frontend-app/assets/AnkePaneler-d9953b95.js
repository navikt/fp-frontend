import{t as F,P as B,v as P,w as l,G as k,_ as A,$ as v,N as ee,A as ne,b as z,j as _,a as b}from"./index.es-916dda9a.js";import{R as D,r as S}from"./index-6d8bab86.js";import{V as se}from"./VergeFaktaInitPanel-01f8aaef.js";import{B as le}from"./BehandlingContainer-4c3b65e8.js";import{x as H}from"./index.es-bf42e136.js";import{t as T,ae as h,af as E,l as re,a9 as L,a2 as U,ag as ae,$ as K}from"./AppIndex.stories-f248f61e.js";import{P as G}from"./ProsessDefaultInitPanel-df1fc66f.js";import"./index.es-672d9717.js";import"./BehandlingHenlagtPanel-ef54734d.js";import"./index.es-4cf1df75.js";import"./extends-98964cd2.js";import"./iframe-ae838356.js";import"../sb-preview/runtime.js";import"./SettPaVentReadOnlyModal-b7470305.js";import"./nb_NO-e803aba2.js";var C={exports:{}},V={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J;function ie(){if(J)return V;J=1;var e=D,d=Symbol.for("react.element"),u=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,t=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function m(o,a,x){var g,p={},c=null,R=null;x!==void 0&&(c=""+x),a.key!==void 0&&(c=""+a.key),a.ref!==void 0&&(R=a.ref);for(g in a)j.call(a,g)&&!r.hasOwnProperty(g)&&(p[g]=a[g]);if(o&&o.defaultProps)for(g in a=o.defaultProps,a)p[g]===void 0&&(p[g]=a[g]);return{$$typeof:d,type:o,key:c,ref:R,props:p,_owner:t.current}}return V.Fragment=u,V.jsx=m,V.jsxs=m,V}C.exports=ie();var s=C.exports;const te=e=>e?re(e,ee).format(ne):"-",f="0",de=e=>e==null||e==="-"?f:e,ge=(e,d,u)=>{var j,t;const r=e.find(a=>a.uuid===u),m=d[T.BEHANDLING_TYPE],o=d[T.BEHANDLING_STATUS];return r?`${te(r.opprettet)} - ${(j=m.find(a=>a.kode===r.type))==null?void 0:j.navn} - ${(t=o.find(a=>a.kode===r.status))==null?void 0:t.navn}`:""},ke=({ankeVurdering:e,behandlinger:d,alleKodeverk:u})=>{var j,t;const r=e.ankeVurderingResultat,m=r?de(r.påAnketKlageBehandlingUuid):void 0,o=u[T.ANKE_OMGJOER_AARSAK],a=(e==null?void 0:e.underBehandlingKabal)||!1,x=(e==null?void 0:e.behandletAvKabal)||!1;return s.jsxs(s.Fragment,{children:[s.jsx(P,{size:"small",children:s.jsx(l,{id:"Ankebehandling.Title"})}),s.jsx(k,{sixteenPx:!0}),a&&s.jsxs(s.Fragment,{children:[s.jsx(P,{size:"small",children:s.jsx(l,{id:"Ankebehandling.SeKabalText"})}),s.jsx(k,{sixteenPx:!0})]}),x&&s.jsxs(s.Fragment,{children:[s.jsx(P,{size:"small",children:s.jsx(l,{id:"Ankebehandling.BehandletKabal"})}),s.jsx(k,{sixteenPx:!0})]}),!a&&s.jsxs(s.Fragment,{children:[s.jsx(A,{size:"small",children:s.jsx(l,{id:"Ankebehandling.Resultat.Vedtak"})}),s.jsxs(v,{size:"small",children:[m===f&&s.jsx(l,{id:"Ankebehandling.Resultat.IkkePaaAnketVedtak"}),m!==f&&ge(d,u,m)]}),s.jsx(k,{sixteenPx:!0}),s.jsx(A,{size:"small",children:s.jsx(l,{id:"Ankebehandling.Resultat"})}),s.jsxs(v,{size:"small",children:[(r==null?void 0:r.ankeVurdering)===h.ANKE_OMGJOER&&s.jsx(l,{id:"Ankebehandling.Resultat.Omgjør"}),(r==null?void 0:r.ankeVurdering)===h.ANKE_OPPHEVE_OG_HJEMSENDE&&s.jsx(l,{id:"Ankebehandling.Resultat.OpphevHjemsend"}),(r==null?void 0:r.ankeVurdering)===h.ANKE_HJEMSENDE_UTEN_OPPHEV&&s.jsx(l,{id:"Ankebehandling.Resultat.Hjemsend"}),(r==null?void 0:r.ankeVurdering)===h.ANKE_AVVIS&&s.jsx(l,{id:"Ankebehandling.Resultat.Avvis"}),(r==null?void 0:r.ankeVurdering)===h.ANKE_STADFESTE_YTELSESVEDTAK&&s.jsx(l,{id:"Ankebehandling.Resultat.Stadfest"})]}),h.ANKE_AVVIS===(r==null?void 0:r.ankeVurdering)&&!x&&s.jsxs(s.Fragment,{children:[s.jsx(k,{sixteenPx:!0}),s.jsx(A,{size:"small",children:s.jsx(l,{id:"Ankebehandling.Avvisning"})}),(r==null?void 0:r.erAnkerIkkePart)&&s.jsx(v,{size:"small",children:s.jsx(l,{id:"Ankebehandling.Avvisning.IkkePart"})}),(r==null?void 0:r.erIkkeKonkret)&&s.jsx(v,{size:"small",children:s.jsx(l,{id:"Ankebehandling.Avvisning.IkkeKonkret"})}),(r==null?void 0:r.erFristIkkeOverholdt)&&s.jsx(v,{size:"small",children:s.jsx(l,{id:"Ankebehandling.Avvisning.IkkeFrist"})}),(r==null?void 0:r.erIkkeSignert)&&s.jsx(v,{size:"small",children:s.jsx(l,{id:"Ankebehandling.Avvisning.IkkeSignert"})}),s.jsx(k,{sixteenPx:!0}),s.jsx(A,{size:"small",children:s.jsx(l,{id:"Ankebehandling.Realitetsbehandles"})}),s.jsx(v,{size:"small",children:r!=null&&r.erSubsidiartRealitetsbehandles?s.jsx(l,{id:"Ankebehandling.Realitetsbehandles.Ja"}):s.jsx(l,{id:"Ankebehandling.Realitetsbehandles.Nei"})})]}),h.ANKE_OMGJOER===(r==null?void 0:r.ankeVurdering)&&s.jsxs(s.Fragment,{children:[s.jsx(k,{sixteenPx:!0}),s.jsx(A,{size:"small",children:s.jsx(l,{id:"Ankebehandling.Avvisning"})}),s.jsx(v,{size:"small",children:(j=o.find(g=>g.kode===(r==null?void 0:r.ankeOmgjoerArsak)))==null?void 0:j.navn}),s.jsx(k,{sixteenPx:!0}),s.jsxs(v,{size:"small",children:[(r==null?void 0:r.ankeVurderingOmgjoer)===E.ANKE_TIL_GUNST&&s.jsx(l,{id:"Ankebehandling.VurderingOmgjoer.Gunst"}),(r==null?void 0:r.ankeVurderingOmgjoer)===E.ANKE_TIL_UGUNST&&s.jsx(l,{id:"Ankebehandling.VurderingOmgjoer.Ugunst"}),(r==null?void 0:r.ankeVurderingOmgjoer)===E.ANKE_DELVIS_OMGJOERING_TIL_GUNST&&s.jsx(l,{id:"Ankebehandling.VurderingOmgjoer.Delvis"})]})]}),(h.ANKE_OPPHEVE_OG_HJEMSENDE===(r==null?void 0:r.ankeVurdering)||h.ANKE_HJEMSENDE_UTEN_OPPHEV===(r==null?void 0:r.ankeVurdering))&&!x&&s.jsxs(s.Fragment,{children:[s.jsx(k,{sixteenPx:!0}),s.jsx(A,{size:"small",children:s.jsx(l,{id:"Ankebehandling.OmgjoeringArsak"})}),s.jsx(v,{size:"small",children:(t=o.find(g=>g.kode===r.ankeOmgjoerArsak))==null?void 0:t.navn})]}),s.jsx(k,{sixteenPx:!0}),s.jsx(A,{size:"small",children:s.jsx(l,{id:"Ankebehandling.Begrunnelse"})}),s.jsx(v,{size:"small",children:r==null?void 0:r.begrunnelse}),s.jsx(k,{sixteenPx:!0}),s.jsx(A,{size:"small",children:s.jsx(l,{id:"FritekstAnkeBrevTextField.Fritekst"})}),s.jsx(v,{size:"small",children:r==null?void 0:r.fritekstTilBrev}),s.jsx(k,{sixteenPx:!0})]})]})},ue={"Ankebehandling.Title":"Ankebehandling","Ankebehandling.HelpText":"Fastsett resultatet av ankebehandlingen","Ankebehandling.KabalText":"Fortsett ankebehandlingen i KABAL: Kryss av, velg hjemmel og klagebehandling, trykk deretter send","Ankebehandling.SeKabalText":"Anken behandles i KABAL","Ankebehandling.SendTilKabal":"Send til KABAL","Ankebehandling.BehandletKabal":"Anken er behandlet i KABAL","Ankebehandling.Hjemmel":"Hjemmel","Ankebehandling.Resultat":"Resultat","Ankebehandling.Resultat.Stadfest":"Stadfest","Ankebehandling.Resultat.Omgjør":"Omgjør","Ankebehandling.Resultat.Avvis":"Avvis","Ankebehandling.Resultat.OpphevHjemsend":"Opphev","Ankebehandling.Resultat.Hjemsend":"Hjemsend","Ankebehandling.Resultat.Vedtak":"Vedtaket som er anket","Ankebehandling.Avvisning":"Avvisningsårsaker","Ankebehandling.OmgjoeringArsak":"Årsak","Ankebehandling.TempSaveButton":"Lagre","Ankebehandling.VurderingOmgjoer.Delvis":"Delvis omgjøring, til gunst","Ankebehandling.VurderingOmgjoer.Gunst":"Til gunst","Ankebehandling.VurderingOmgjoer.Ugunst":"Til ugunst","Ankebehandling.Avvisning.IkkePart":"Den som anker er ikke part i saken","Ankebehandling.Avvisning.IkkeKonkret":"Det ankes ikke på konkrete elementer i vedtaket","Ankebehandling.Avvisning.IkkeFrist":"Ankefristen er ikke overholdt","Ankebehandling.Avvisning.IkkeSignert":"Anken er ikke signert","Ankebehandling.Realitetsbehandles":"Skal anken subsidiært realitetsbehandles?","Ankebehandling.Realitetsbehandles.Ja":"Ja","Ankebehandling.Realitetsbehandles.Nei":"Nei","Ankebehandling.Resultat.IkkePaaAnketVedtak":"Ikke påanket vedtak","Ankebehandling.Begrunnelse":"Begrunnelse","FritekstAnkeBrevTextField.Fritekst":"Fritekst til brev","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev","Malform.Beskrivelse":"Foretrukket språk"},oe=F(ue),Y=({ankeVurdering:e,behandlinger:d,alleKodeverk:u})=>s.jsx(B,{value:oe,children:s.jsx(ke,{ankeVurdering:e,behandlinger:d,alleKodeverk:u})});Y.__docgenInfo={description:"",methods:[],displayName:"Vn"};const he=[U.ANKE_VURDERING],y=({alleBehandlinger:e,...d})=>{const u=z(),{behandling:j}=d;return _.jsx(G,{...d,panelEndepunkter:he,prosessPanelKode:L.ANKEBEHANDLING,prosessPanelMenyTekst:u.formatMessage({id:"Behandlingspunkt.Ankebehandling"}),skalPanelVisesIMeny:()=>!0,hentOverstyrtStatus:()=>{var t;return(t=j.behandlingsresultat)!=null&&t.type?H.OPPFYLT:H.IKKE_VURDERT},renderPanel:t=>_.jsx(Y,{behandlinger:e,...t})})};try{y.displayName="AnkeBehandlingProsessStegInitPanel",y.__docgenInfo={description:"",displayName:"AnkeBehandlingProsessStegInitPanel",props:{alleBehandlinger:{defaultValue:null,description:"",name:"alleBehandlinger",required:!0,type:{name:"{ uuid: string; type: string; avsluttet?: string | undefined; opprettet: string; status: string; }[]"}},behandling:{defaultValue:null,description:"",name:"behandling",required:!0,type:{name:"Behandling"}},valgtProsessSteg:{defaultValue:null,description:"",name:"valgtProsessSteg",required:!1,type:{name:"string"}},registrerProsessPanel:{defaultValue:null,description:"",name:"registrerProsessPanel",required:!0,type:{name:"(data: ProsessPanelMenyData) => void"}}}}}catch{}var W={exports:{}},O={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $;function Ae(){if($)return O;$=1;var e=D,d=Symbol.for("react.element"),u=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,t=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function m(o,a,x){var g,p={},c=null,R=null;x!==void 0&&(c=""+x),a.key!==void 0&&(c=""+a.key),a.ref!==void 0&&(R=a.ref);for(g in a)j.call(a,g)&&!r.hasOwnProperty(g)&&(p[g]=a[g]);if(o&&o.defaultProps)for(g in a=o.defaultProps,a)p[g]===void 0&&(p[g]=a[g]);return{$$typeof:d,type:o,key:c,ref:R,props:p,_owner:t.current}}return O.Fragment=u,O.jsx=m,O.jsxs=m,O}W.exports=Ae();var n=W.exports;const xe=({ankeVurderingResultat:e})=>n.jsxs(n.Fragment,{children:[n.jsx(b,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Resultat.Innstilling.Stadfest"})}),n.jsx(k,{sixteenPx:!0}),n.jsx(A,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),n.jsx(b,{size:"small",children:e==null?void 0:e.begrunnelse})]}),je=({ankeVurderingResultat:e})=>n.jsxs(n.Fragment,{children:[n.jsx(b,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Resultat.Innstilling.Oppheves"})}),n.jsx(k,{sixteenPx:!0}),n.jsx(A,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),n.jsx(b,{size:"small",children:e==null?void 0:e.begrunnelse})]}),me=({ankeVurderingResultat:e})=>n.jsxs(n.Fragment,{children:[n.jsx(b,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Resultat.Innstilling.Hjemsendes"})}),n.jsx(k,{sixteenPx:!0}),n.jsx(A,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),n.jsx(b,{size:"small",children:e==null?void 0:e.begrunnelse})]}),ve=({ankeVurderingResultat:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(b,{size:"small",children:[(e==null?void 0:e.påAnketKlageBehandlingUuid)&&n.jsx(l,{id:"Ankebehandling.Resultat.Innstilling.Avvises"}),!(e!=null&&e.påAnketKlageBehandlingUuid)&&n.jsx(l,{id:"Ankebehandling.Resultat.Innstilling.AvvisesUten"})]}),n.jsx(k,{sixteenPx:!0}),n.jsx(A,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Resultat.Innstilling.Arsak"})}),n.jsxs("ul",{children:[(e==null?void 0:e.erAnkerIkkePart)&&n.jsx("li",{children:n.jsx(b,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Avvisning.IkkePart"})})}),(e==null?void 0:e.erIkkeKonkret)&&n.jsx("li",{children:n.jsx(b,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Avvisning.IkkeKonkret"})})}),(e==null?void 0:e.erFristIkkeOverholdt)&&n.jsx("li",{children:n.jsx(b,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Avvisning.IkkeFrist"})})}),(e==null?void 0:e.erIkkeSignert)&&n.jsx("li",{children:n.jsx(b,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Avvisning.IkkeSignert"})})})]}),n.jsx(A,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Realitetsbehandles"})}),n.jsx(b,{size:"small",children:n.jsx(l,{id:e!=null&&e.erSubsidiartRealitetsbehandles?"Ankebehandling.Realitetsbehandles.Ja":"Ankebehandling.Realitetsbehandles.Nei"})}),n.jsx(k,{sixteenPx:!0}),n.jsx(A,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),n.jsx(b,{size:"small",children:e==null?void 0:e.begrunnelse})]}),be=e=>{switch(e){case E.ANKE_TIL_UGUNST:return"Ankebehandling.Resultat.Innstilling.Omgjores.TilUgunst";case E.ANKE_TIL_GUNST:return"Ankebehandling.Resultat.Innstilling.Omgjores.TilGunst";case E.ANKE_DELVIS_OMGJOERING_TIL_GUNST:return"Ankebehandling.Resultat.Innstilling.Omgjores.Delvis";default:return""}},pe=({ankeVurderingResultat:e,alleKodeverk:d})=>n.jsxs(n.Fragment,{children:[n.jsx(b,{size:"small",children:n.jsx(l,{id:be(e==null?void 0:e.ankeVurderingOmgjoer)})}),n.jsx(k,{sixteenPx:!0}),(e==null?void 0:e.ankeOmgjoerArsak)&&n.jsxs(n.Fragment,{children:[n.jsx(b,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Resultat.Innstilling.Arsak"})}),n.jsx(b,{size:"small",children:ae(d)(e.ankeOmgjoerArsak,T.ANKE_OMGJOER_AARSAK)}),n.jsx(k,{sixteenPx:!0})]}),n.jsx(A,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Resultat.Innstilling.Begrunnelse"})}),n.jsx(b,{size:"small",children:e==null?void 0:e.begrunnelse})]}),_e=({ankeVurderingResultat:e,alleKodeverk:d})=>{if(!e)return null;switch(e.ankeVurdering){case h.ANKE_STADFESTE_YTELSESVEDTAK:return n.jsx(xe,{ankeVurderingResultat:e});case h.ANKE_OPPHEVE_OG_HJEMSENDE:return n.jsx(je,{ankeVurderingResultat:e});case h.ANKE_HJEMSENDE_UTEN_OPPHEV:return n.jsx(me,{ankeVurderingResultat:e});case h.ANKE_OMGJOER:return n.jsx(pe,{ankeVurderingResultat:e,alleKodeverk:d});case h.ANKE_AVVIS:return n.jsx(ve,{ankeVurderingResultat:e});default:return n.jsx("div",{children:"???"})}},ce=({ankeVurderingResultat:e,alleKodeverk:d})=>n.jsxs(n.Fragment,{children:[n.jsx(P,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Resultat.Title"})}),n.jsx(k,{fourPx:!0}),n.jsx(A,{size:"small",children:n.jsx(l,{id:"Ankebehandling.Resultat.Innstilling"})}),n.jsx(_e,{ankeVurderingResultat:e,alleKodeverk:d})]}),Ee={"Ankebehandling.Resultat.Title":"Resultat","Ankebehandling.Resultat.Innstilling":"Innstilling på resultat av anke","Ankebehandling.Resultat.Innstilling.Stadfest":"Vedtaket stadfestes","Ankebehandling.Resultat.Innstilling.Omgjores.TilGunst":"Vedtaket omgjøres til gunst","Ankebehandling.Resultat.Innstilling.Omgjores.TilUgunst":"Vedtaket omgjøres til ugunst","Ankebehandling.Resultat.Innstilling.Omgjores.Delvis":"Vedtaket omgjøres delvis til gunst","Ankebehandling.Resultat.Innstilling.Oppheves":"Vedtaket oppheves","Ankebehandling.Resultat.Innstilling.Hjemsendes":"Vedtaket hjemsendes","Ankebehandling.Resultat.Innstilling.Avvises":"Vedtaket avvises","Ankebehandling.Resultat.Innstilling.AvvisesUten":"Vedtaket avvises. Ikke påanket vedtak","Ankebehandling.Resultat.Innstilling.Begrunnelse":"Begrunnelse","Ankebehandling.Resultat.Innstilling.Arsak":"Årsak","Ankebehandling.Avvisning.IkkePart":"Den som anker er ikke part i saken","Ankebehandling.Avvisning.IkkeKonkret":"Det ankes ikke på konkrete elementer i vedtaket","Ankebehandling.Avvisning.IkkeFrist":"Ankefristen er ikke overholdt","Ankebehandling.Avvisning.IkkeSignert":"Anken er ikke signert","Ankebehandling.Realitetsbehandles":"Skal anken subsidiært realitetsbehandles?","Ankebehandling.Realitetsbehandles.Ja":"Ja","Ankebehandling.Realitetsbehandles.Nei":"Nei","Malform.Beskrivelse":"Foretrukket språk","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev"},Re=F(Ee),Q=({ankeVurdering:e,alleKodeverk:d})=>n.jsx(B,{value:Re,children:n.jsx(ce,{ankeVurderingResultat:e.ankeVurderingResultat,alleKodeverk:d})});Q.__docgenInfo={description:"",methods:[],displayName:"Nr"};const Pe=[K.FORESLA_VEDTAK,K.FATTER_VEDTAK,K.FORESLA_VEDTAK_MANUELT,K.VEDTAK_UTEN_TOTRINNSKONTROLL],Ve=[U.ANKE_VURDERING],I=({...e})=>{const d=z();return _.jsx(G,{...e,panelEndepunkter:Ve,aksjonspunktKoder:Pe,prosessPanelKode:L.ANKE_RESULTAT,prosessPanelMenyTekst:d.formatMessage({id:"Behandlingspunkt.AnkeResultat"}),skalPanelVisesIMeny:()=>!0,renderPanel:u=>_.jsx(Q,{ankeVurdering:u.ankeVurdering,alleKodeverk:u.alleKodeverk})})};try{I.displayName="AnkeResultatProsessStegInitPanel",I.__docgenInfo={description:"",displayName:"AnkeResultatProsessStegInitPanel",props:{behandling:{defaultValue:null,description:"",name:"behandling",required:!0,type:{name:"Behandling"}},valgtProsessSteg:{defaultValue:null,description:"",name:"valgtProsessSteg",required:!1,type:{name:"string"}},registrerProsessPanel:{defaultValue:null,description:"",name:"registrerProsessPanel",required:!0,type:{name:"(data: ProsessPanelMenyData) => void"}}}}}catch{}var X={exports:{}},N={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w;function Oe(){if(w)return N;w=1;var e=D,d=Symbol.for("react.element"),u=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,t=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function m(o,a,x){var g,p={},c=null,R=null;x!==void 0&&(c=""+x),a.key!==void 0&&(c=""+a.key),a.ref!==void 0&&(R=a.ref);for(g in a)j.call(a,g)&&!r.hasOwnProperty(g)&&(p[g]=a[g]);if(o&&o.defaultProps)for(g in a=o.defaultProps,a)p[g]===void 0&&(p[g]=a[g]);return{$$typeof:d,type:o,key:c,ref:R,props:p,_owner:t.current}}return N.Fragment=u,N.jsx=m,N.jsxs=m,N}X.exports=Oe();var i=X.exports;const Ne=({ankeVurdering:e,alleKodeverk:d})=>{var u,j;const t=e==null?void 0:e.ankeVurderingResultat,r=(e==null?void 0:e.underBehandlingKabal)||!1,m=(e==null?void 0:e.underBehandlingKabalTrygderett)||!1,o=(e==null?void 0:e.behandletAvKabal)||!1,a=d[T.ANKE_OMGJOER_AARSAK];return i.jsxs(i.Fragment,{children:[i.jsx(P,{size:"small",children:i.jsx(l,{id:"Ankebehandling.Merknad.Title"})}),i.jsx(k,{sixteenPx:!0}),r&&i.jsxs(i.Fragment,{children:[i.jsx(P,{size:"small",children:i.jsx(l,{id:"Ankebehandling.Merknad.SeKabalText"})}),i.jsx(k,{sixteenPx:!0})]}),o&&i.jsxs(i.Fragment,{children:[i.jsx(P,{size:"small",children:i.jsx(l,{id:"Ankebehandling.Merknad.BehandletKabal"})}),i.jsx(k,{sixteenPx:!0})]}),!r&&!m&&i.jsxs(i.Fragment,{children:[i.jsx(A,{size:"small",children:i.jsx(l,{id:"Ankebehandling.Merknad.Merknader"})}),i.jsx(v,{size:"small",children:t!=null&&t.erMerknaderMottatt?i.jsx(l,{id:"Ankebehandling.Merknad.Merknader.Ja"}):i.jsx(l,{id:"Ankebehandling.Merknad.Merknader.Nei"})}),i.jsx(k,{sixteenPx:!0}),i.jsx(A,{size:"small",children:i.jsx(l,{id:"Ankebehandling.Fritekst"})}),i.jsx(v,{size:"small",children:t==null?void 0:t.merknadKommentar}),i.jsx(k,{sixteenPx:!0}),i.jsx(A,{size:"small",children:i.jsx(l,{id:"Ankebehandling.Resultat"})}),i.jsxs(v,{size:"small",children:[(t==null?void 0:t.trygderettVurdering)===h.ANKE_OMGJOER&&i.jsx(l,{id:"Ankebehandling.Resultat.Omgjør"}),(t==null?void 0:t.trygderettVurdering)===h.ANKE_OPPHEVE_OG_HJEMSENDE&&i.jsx(l,{id:"Ankebehandling.Resultat.Opphev"}),(t==null?void 0:t.trygderettVurdering)===h.ANKE_HJEMSENDE_UTEN_OPPHEV&&i.jsx(l,{id:"Ankebehandling.Resultat.Hjemsend"}),(t==null?void 0:t.trygderettVurdering)===h.ANKE_AVVIS&&i.jsx(l,{id:"Ankebehandling.Resultat.Avvis"}),(t==null?void 0:t.trygderettVurdering)===h.ANKE_STADFESTE_YTELSESVEDTAK&&i.jsx(l,{id:"Ankebehandling.Resultat.Stadfest"})]})]}),h.ANKE_OMGJOER===(t==null?void 0:t.trygderettVurdering)&&i.jsxs(i.Fragment,{children:[i.jsx(k,{sixteenPx:!0}),i.jsx(A,{size:"small",children:i.jsx(l,{id:"Ankebehandling.OmgjoeringArsak"})}),i.jsx(v,{size:"small",children:(u=a.find(x=>x.kode===(t==null?void 0:t.trygderettOmgjoerArsak)))==null?void 0:u.navn}),i.jsx(k,{sixteenPx:!0}),i.jsxs(v,{size:"small",children:[t.trygderettVurderingOmgjoer===E.ANKE_TIL_GUNST&&i.jsx(l,{id:"Ankebehandling.VurderingOmgjoer.Gunst"}),t.trygderettVurderingOmgjoer===E.ANKE_TIL_UGUNST&&i.jsx(l,{id:"Ankebehandling.VurderingOmgjoer.Ugunst"}),t.trygderettVurderingOmgjoer===E.ANKE_DELVIS_OMGJOERING_TIL_GUNST&&i.jsx(l,{id:"Ankebehandling.VurderingOmgjoer.Delvis"})]})]}),(h.ANKE_OPPHEVE_OG_HJEMSENDE===(t==null?void 0:t.trygderettVurdering)||h.ANKE_HJEMSENDE_UTEN_OPPHEV===(t==null?void 0:t.trygderettVurdering))&&!o&&i.jsxs(i.Fragment,{children:[i.jsx(k,{sixteenPx:!0}),i.jsx(A,{size:"small",children:i.jsx(l,{id:"Ankebehandling.OmgjoeringArsak"})}),i.jsx(v,{size:"small",children:(j=a.find(x=>x.kode===t.trygderettOmgjoerArsak))==null?void 0:j.navn})]})]})},Ke={"Ankebehandling.Merknad.Title":"Trygderettsbehandling","Ankebehandling.Merknad.HelpText":"Kommentarer til Trygderettsbehandlingen og videre oppfølging","Ankebehandling.Merknad.AvsluttBehandling":"Avslutt behandlingen","Ankebehandling.Merknad.Merknader":"Har det kommet merknader?","Ankebehandling.Merknad.Merknader.Ja":"Ja","Ankebehandling.Merknad.Merknader.Nei":"Nei","Ankebehandling.Merknad.Merknader.Kommentarer":"Kommentarer til Trygderettsbehandlingen","Ankebehandling.Merknad.Merknader.LagreKommentarer":"Lagre kommentarer","Ankebehandling.Merknad.SendTilKabal":"Send til KABAL","Ankebehandling.Merknad.KabalText":"Fortsett ankebehandlingen i KABAL: Kryss av, velg hjemmel og klagebehandling, trykk deretter send","Ankebehandling.Merknad.SeKabalText":"Anken behandles i KABAL","Ankebehandling.Merknad.BehandletKabal":"Anken er behandlet i KABAL","Ankebehandling.Merknad.Hjemmel":"Hjemmel","Ankebehandling.Fritekst":"Fritekst for Trygderettsbehandling","Ankebehandling.Resultat":"Resultat fra Trygdretten","Ankebehandling.Resultat.Stadfest":"Stadfestet","Ankebehandling.Resultat.Omgjør":"Omgjort","Ankebehandling.Resultat.Opphev":"Opphevet","Ankebehandling.Resultat.Hjemsend":"Hjemsendt","Ankebehandling.Resultat.Avvis":"Avvist","Ankebehandling.Resultat.Vedtak":"Vedtaket som er anket","Ankebehandling.Resultat.SendtTrygderett":"Dato sendt Trygderetten","Ankebehandling.Resultat.IkkePaaAnketVedtak":"Ikke påanket vedtak","Ankebehandling.VurderingOmgjoer.Delvis":"Delvis omgjøring, til gunst","Ankebehandling.VurderingOmgjoer.Gunst":"Til gunst","Ankebehandling.VurderingOmgjoer.Ugunst":"Til ugunst","Ankebehandling.OmgjoeringArsak":"Årsak","Malform.Beskrivelse":"Foretrukket språk","PreviewAnkeLink.ForhandvisBrev":"Forhåndsvis brev"},Te=F(Ke),Z=({ankeVurdering:e,alleKodeverk:d})=>i.jsx(B,{value:Te,children:i.jsx(Ne,{ankeVurdering:e,alleKodeverk:d})});Z.__docgenInfo={description:"",methods:[],displayName:"Or"};const Se=[K.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN],fe=[U.ANKE_VURDERING],M=({...e})=>{const d=z();return _.jsx(G,{...e,aksjonspunktKoder:Se,panelEndepunkter:fe,prosessPanelKode:L.ANKE_MERKNADER,prosessPanelMenyTekst:d.formatMessage({id:"Behandlingspunkt.AnkeMerknader"}),skalPanelVisesIMeny:()=>!0,renderPanel:u=>_.jsx(Z,{...u})})};try{M.displayName="AnkeTrygderettsbehandlingProsessStegInitPanel",M.__docgenInfo={description:"",displayName:"AnkeTrygderettsbehandlingProsessStegInitPanel",props:{behandling:{defaultValue:null,description:"",name:"behandling",required:!0,type:{name:"Behandling"}},valgtProsessSteg:{defaultValue:null,description:"",name:"valgtProsessSteg",required:!1,type:{name:"string"}},registrerProsessPanel:{defaultValue:null,description:"",name:"registrerProsessPanel",required:!0,type:{name:"(data: ProsessPanelMenyData) => void"}}}}}catch{}const q=({behandling:e,valgtProsessSteg:d,valgtFaktaSteg:u,oppdaterProsessStegOgFaktaPanelIUrl:j,alleBehandlinger:t})=>{const r=S.useMemo(()=>t.filter(a=>!a.behandlingHenlagt).map(a=>{var x;return{uuid:a.uuid,type:a.type,status:a.status,opprettet:a.opprettet,avsluttet:a.avsluttet,resultatType:(x=a.behandlingsresultat)==null?void 0:x.type}}),[t]),m=S.useCallback(a=>_.jsx(se,{...a}),[]),o=S.useCallback(a=>_.jsxs(_.Fragment,{children:[_.jsx(y,{...a,alleBehandlinger:r}),_.jsx(I,{...a}),_.jsx(M,{...a})]}),[]);return _.jsx(le,{behandling:e,valgtProsessSteg:d,valgtFaktaSteg:u,oppdaterProsessStegOgFaktaPanelIUrl:j,hentFaktaPaneler:m,hentProsessPaneler:o})};try{q.displayName="AnkePaneler",q.__docgenInfo={description:"",displayName:"AnkePaneler",props:{behandling:{defaultValue:null,description:"",name:"behandling",required:!0,type:{name:"Behandling"}},valgtProsessSteg:{defaultValue:null,description:"",name:"valgtProsessSteg",required:!1,type:{name:"string"}},valgtFaktaSteg:{defaultValue:null,description:"",name:"valgtFaktaSteg",required:!1,type:{name:"string"}},oppdaterProsessStegOgFaktaPanelIUrl:{defaultValue:null,description:"",name:"oppdaterProsessStegOgFaktaPanelIUrl",required:!0,type:{name:"(punktnavn?: string | undefined, faktanavn?: string | undefined) => void"}},alleBehandlinger:{defaultValue:null,description:"",name:"alleBehandlinger",required:!0,type:{name:"BehandlingAppKontekst[]"}}}}}catch{}export{q as default};
//# sourceMappingURL=AnkePaneler-d9953b95.js.map
