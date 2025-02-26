import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as Be}from"./BehandlingContainer-yuUV_-X2.js";import{A as Ie,F as xe,O as Ke,a as Me,V as we,b as Le,c as Ue,d as Ge}from"./OmsorgVilkarProsessIndex-D51It-gp.js";import{V as D,I as U,O as G,a as Ye,M as Je,S as le,s as Ce,b as He,c as $e,d as ze,e as We,Y as Qe,f as Xe}from"./VedtakProsessIndex-BiGDMmmv.js";import{V as Ze}from"./VergeFaktaInitPanel-DYWJJeCT.js";import{r as p}from"./index-DjhIdADd.js";import{ag as de,ad as ue,A as en,m as Q,$ as h,L as B,P as ge,am as K,k as O,F as me,h as nn,D as rn}from"./withPanelData-DaFTi2uF.js";import{D as I,I as T,b as g,a as v,N as an,d as E,J as ne,e as sn,n as ke,M as pe,R as C,A as tn,Q as on}from"./index.es-D1P62e8P.js";import{u as R}from"./initFetch-CeXH2rIr.js";import{A as t}from"./aksjonspunktCodes-BuBbCIxs.js";import{V as f}from"./BehandlingHenlagtPanel-QeRe8xm5.js";import{P as X}from"./skjermlenkeCodes-1SvLTuBb.js";import{a as ye,e as ve,X as ln,b as fe,m as dn,l as un,i as gn,J as mn,u as kn}from"./index.es-CDlA5bXh.js";import{O as pn,P as Z,a as yn}from"./OverstyringPanel-iw0ZxOjW.js";import{u as Y,h as vn,c as fn}from"./behandlingApi-XB2_QLGU.js";import{u as P,a as ce,P as cn}from"./useStandardProsessPanelProps-6-vXsRy0.js";import{a as F}from"./behandlingDataContext-BnLc3C0Q.js";import{A as x}from"./aksjonspunktStatus-xM4O_ZUY.js";import{h as bn}from"./moment-C5S46NFB.js";import{K as jn}from"./alleKodeverk-BFmIlMu4.js";import{g as Sn}from"./kodeverkUtils-DLZgokMR.js";import{P as re}from"./RisikoklassifiseringIndex-B4eEUjYz.js";import{i as An}from"./behandlingResultatType-DHbqkXMl.js";import{F as Tn}from"./FatterVedtakStatusModal-B0TRp1IC.js";import{I as qn}from"./IverksetterVedtakStatusModal-Bc4_FwlL.js";import"./index.es-o97n1GS1.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Link-JQlw58R7.js";import"./index-B-V1qRBx.js";import"./index-CvPn9kdb.js";import"./Popover-BWSME4SY.js";import"./ExclamationmarkTriangleFill-DFNtm6ow.js";import"./useFormField-BzFuN20j.js";import"./BehandlingMenuIndex-yaKCGDGI.js";import"./bind-oYjWB_aQ.js";import"./Kjonnkode-C-fkzSiP.js";import"./Table-BT6UrtVp.js";import"./CheckmarkCircleFill-DpYExkff.js";import"./dokumentMalType-uHvYWaNM.js";import"./behandlingArsakType-CTXggz2Y.js";import"./SettPaVentModalIndex-D00tkEn9.js";import"./dayjs.min-Cke173X9.js";import"./venteArsakType-BJdSFL9e.js";import"./FagsakData-4_VgJz8T.js";import"./useBehandlingPollingOperasjoner-jOIgrj3x.js";import"./errorType-rskzfovb.js";import"./RestApiErrorContext-D7YnyNzE.js";import"./index-CfpqQiaz.js";import"./decorators-DIzpaN6C.js";import"./useKodeverk-CLTqAIzW.js";import"./useVisForhandsvisningAvMelding-D1wDQIab.js";import"./paths-5loHseN3.js";import"./VisittkortSakIndex-BGUagq81.js";import"./Tag-6Hi1aBv1.js";import"./Spacer-QFOiGlYe.js";import"./landkoder-InipzmWw.js";import"./MeldingIndex-CMetDxuk.js";import"./UkjentAdresseMeldingIndex-C2G4z0vJ.js";import"./SupportHeader-B6TghPv3.js";import"./ErrorBoundary-CI6Hf67O.js";import"./IngenBehandlingValgtPanel-CZV06dlq.js";import"./SettPaVentReadOnlyModal-CPEjsB2S.js";import"./validerApKodeOgHentApEnum-InFuXVP3.js";import"./Pencil-Dh061pwb.js";import"./TotrinnskontrollIndex-CWLC9YBx.js";import"./v4-CtRu48qb.js";import"./entry-preview-D6cu3geV.js";import"./iframe-DRHqXdxf.js";import"./chunk-XP5HYGXS-D5tuasO7.js";import"./Checkbox-CZsvvOZT.js";import"./useTrackRouteParam-B_4oCrmz.js";import"./fagsakStatus-NXwGwLtb.js";const Rn="_divider_5hs62_1",En="_text_5hs62_6",On="_bredde_5hs62_10",Pn="_firstColWidth_5hs62_14",Fn="_dividerWidth_5hs62_18",q={divider:Rn,text:En,bredde:On,firstColWidth:Pn,dividerWidth:Fn},hn=un(1),Dn=gn(5e5),Nn=(r,n)=>{const a=r.find(i=>i.definisjon===t.OVERSTYR_BEREGNING);return{begrunnelse:sn((a==null?void 0:a.begrunnelse)??""),beregnetTilkjentYtelse:n==null?void 0:n.beregnetTilkjentYtelse}},Vn=r=>({kode:t.OVERSTYR_BEREGNING,beregnetTilkjentYtelse:r.beregnetTilkjentYtelse,begrunnelse:r.begrunnelse}),be=({behandlingResultatstruktur:r={beregnetTilkjentYtelse:0,antallBarn:0,satsVerdi:0}})=>{const{aksjonspunkterForPanel:n,submitCallback:a,alleMerknaderFraBeslutter:i}=de(),s=n.some(m=>{var j;return(j=i[m.definisjon])==null?void 0:j.notAccepted}),{formData:l,setFormData:d}=ue(),{toggleOverstyring:o,kanOverstyreAccess:k,overrideReadOnly:u,erOverstyrt:y}=en(),c=ye({defaultValues:l||Nn(n,r)}),N=()=>{o(),c.reset(),o()},b=()=>{o(),o()},S=n.some(m=>m.definisjon===t.OVERSTYR_BEREGNING)||!1;return e.jsxs(ve,{formMethods:c,onSubmit:m=>a(Vn(m)),setDataOnUnmount:d,children:[e.jsx(I,{children:e.jsxs(T,{children:[e.jsx(g,{children:e.jsx(Q,{size:"small",children:e.jsx(v,{id:"BeregningEngangsstonadForm.Beregning"})})}),(k.isEnabled||u)&&e.jsx(g,{children:e.jsx(an,{onClick:b,erOverstyrt:y||!k.isEnabled})})]})}),e.jsx(E,{eightPx:!0}),e.jsxs(I,{children:[e.jsxs(T,{children:[e.jsx(g,{className:q.firstColWidth,children:e.jsx(h,{children:e.jsx(v,{id:"BeregningEngangsstonadForm.Sats"})})}),e.jsx(g,{children:e.jsx(B,{size:"small",children:r!=null&&r.satsVerdi?ne(r.satsVerdi):"-"})})]}),e.jsxs(T,{children:[e.jsx(g,{className:q.firstColWidth,children:e.jsx(h,{children:e.jsx(v,{id:"BeregningEngangsstonadForm.AntallBarn"})})}),e.jsx(g,{children:e.jsx(B,{size:"small",children:r!=null&&r.antallBarn?r.antallBarn:"-"})})]}),!y&&!S&&e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx(g,{className:q.dividerWidth,children:e.jsx("hr",{className:q.divider})})}),e.jsxs(T,{children:[e.jsx(g,{className:q.firstColWidth,children:e.jsx(h,{children:e.jsx(v,{id:"BeregningEngangsstonadForm.BeregnetEngangsstonad"})})}),e.jsx(g,{children:e.jsx(B,{size:"small",children:r!=null&&r.beregnetTilkjentYtelse?ne(r.beregnetTilkjentYtelse):"-"})})]})]})]}),(y||S)&&e.jsxs(e.Fragment,{children:[e.jsx(E,{sixteenPx:!0}),e.jsxs(pn,{erOverstyrt:y,isSolvable:!0,erVilkarOk:!0,hasAksjonspunkt:S,overrideReadOnly:u,isSubmitting:c.formState.isSubmitting,isPristine:!c.formState.isDirty,toggleAv:N,erIkkeGodkjentAvBeslutter:s,children:[e.jsx(I,{children:e.jsxs(T,{children:[e.jsx(g,{children:e.jsx(B,{size:"small",className:!y||u?"":q.text,children:e.jsx(v,{id:"BeregningEngangsstonadForm.BeregnetEngangsstonad"})})}),e.jsx(g,{children:e.jsx(ln,{name:"beregnetTilkjentYtelse",parse:m=>{const j=parseInt(m,10);return Number.isNaN(j)?m:j},className:q.bredde,validate:[fe,dn,hn,Dn],readOnly:!y||u})}),e.jsx(g,{children:e.jsx(B,{size:"small",className:!y||u?"":q.text,children:e.jsx(v,{id:"BeregningEngangsstonadForm.Kroner"})})})]})}),e.jsx(E,{sixteenPx:!0})]})]})]})};be.__docgenInfo={description:`BeregningsresultatEngangsstonadForm

Viser beregnet engangsstønad. Resultatet kan overstyres av Nav-ansatt med overstyr-rettighet.`,methods:[],displayName:"BeregningsresultatEngangsstonadForm",props:{behandlingResultatstruktur:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}`,signature:{properties:[{key:"beregnetTilkjentYtelse",value:{name:"number",required:!0}},{key:"satsVerdi",value:{name:"number",required:!0}},{key:"antallBarn",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}>`},description:"",defaultValue:{value:`{
  beregnetTilkjentYtelse: 0,
  antallBarn: 0,
  satsVerdi: 0,
}`,computed:!1}}}};const _n={"BeregningEngangsstonadForm.Beregning":"Beregning","BeregningEngangsstonadForm.BeregnetEngangsstonad":"Beregnet engangsstønad","BeregningEngangsstonadForm.AntallBarn":"Antall barn","BeregningEngangsstonadForm.Sats":"Sats","BeregningEngangsstonadForm.Kroner":"kr"},Bn=ke(_n),je=({beregningresultatEngangsstonad:r})=>e.jsx(ge,{value:Bn,children:e.jsx(be,{behandlingResultatstruktur:r})});je.__docgenInfo={description:"",methods:[],displayName:"BeregningsresultatProsessIndex",props:{beregningresultatEngangsstonad:{required:!1,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}`,signature:{properties:[{key:"beregnetTilkjentYtelse",value:{name:"number",required:!0}},{key:"satsVerdi",value:{name:"number",required:!0}},{key:"antallBarn",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}>`},description:""}}};const ae=t.OVERSTYR_BEREGNING,Se=r=>{const n=P([ae]),{behandling:a,rettigheter:i}=p.use(F),s=Y(a),{data:l,isFetching:d}=R(s.es.beregningsresultatEngangsstønadOptions(a));return e.jsx(K,{overstyringApKode:ae,kanOverstyreAccess:i.kanOverstyreAccess,overrideReadOnly:n.isReadOnly,children:e.jsx(ce,{...r,standardPanelProps:n,prosessPanelKode:X.BEREGNING,prosessPanelMenyTekst:O().formatMessage({id:"Behandlingspunkt.Beregning"}),skalPanelVisesIMeny:!0,hentOverstyrtStatus:vn(a,"BEREGNINGRESULTAT_ENGANGSSTONAD")?f.OPPFYLT:f.IKKE_VURDERT,children:d?e.jsx(pe,{}):e.jsx(je,{beregningresultatEngangsstonad:l})})})};Se.__docgenInfo={description:"",methods:[],displayName:"BeregningEsProsessStegInitPanel",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const In={[t.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]:"SRBVilkarForm.VurderSammeBarn",[t.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]:"SRBVilkarForm.VurderAnnenForelderSammeBarn"},xn=(r,n=[])=>n.length>0?r.formatMessage({id:In[n[0].definisjon]}):"",Kn=[t.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,t.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN],H=[D.ADOPSJONSVILKARET],Ae=r=>{const n=O(),{behandling:a,rettigheter:i}=p.use(F),s=P(Kn,H);return e.jsx(U,{...r,standardPanelProps:s,behandlingVersjon:a.versjon,vilkarKoder:H,inngangsvilkarPanelKode:"ADOPSJON",hentInngangsvilkarPanelTekst:xn(n,s.aksjonspunkter),renderPanel:({skalVises:l,erOverstyrt:d,toggleOverstyring:o})=>e.jsxs(e.Fragment,{children:[s.aksjonspunkter.length===0&&e.jsx(K,{overstyringApKode:t.OVERSTYR_ADOPSJONSVILKAR,kanOverstyreAccess:i.kanOverstyreAccess,overrideReadOnly:s.isReadOnly||r.harInngangsvilkarApentAksjonspunkt&&!(s.isAksjonspunktOpen||d),toggleOverstyring:o,children:l?e.jsx(G,{vilkar:s.vilkar,vilkarKoder:H,panelTekstKode:"Inngangsvilkar.Adopsjonsvilkaret"}):null}),l&&s.aksjonspunkter.length>0&&e.jsx(Ie,{readOnlySubmitButton:s.readOnlySubmitButton,status:s.status,vilkar:s.vilkar})]})})};Ae.__docgenInfo={description:"",methods:[],displayName:"AdopsjonInngangsvilkarInitPanel",props:{registrerInngangsvilkarPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: InngangsvilkarPanelData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  aksjonspunktTekst?: string;
  harApentAksjonspunkt: boolean;
  status: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"aksjonspunktTekst",value:{name:"string",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},erPanelValgt:{required:!0,tsType:{name:"boolean"},description:""},harInngangsvilkarApentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""}}};const Mn={[t.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]:"SRBVilkarForm.VurderSammeBarn",[t.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]:"SRBVilkarForm.VurderAnnenForelderSammeBarn"},wn=(r,n=[])=>n.length>0?r.formatMessage({id:Mn[n[0].definisjon]}):"",Ln=[t.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,t.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN],$=[D.FODSELSVILKARET_MOR],Te=r=>{const n=O(),{behandling:a,rettigheter:i}=p.use(F),s=P(Ln,$);return e.jsx(U,{...r,standardPanelProps:s,behandlingVersjon:a.versjon,vilkarKoder:$,inngangsvilkarPanelKode:"FODSEL",hentInngangsvilkarPanelTekst:wn(n,s.aksjonspunkter),renderPanel:({skalVises:l,erOverstyrt:d,toggleOverstyring:o})=>e.jsxs(e.Fragment,{children:[s.aksjonspunkter.length===0&&e.jsx(K,{overstyringApKode:t.OVERSTYR_FODSELSVILKAR,kanOverstyreAccess:i.kanOverstyreAccess,overrideReadOnly:s.isReadOnly||r.harInngangsvilkarApentAksjonspunkt&&!(s.isAksjonspunktOpen||d),toggleOverstyring:o,children:l?e.jsx(G,{vilkar:s.vilkar,vilkarKoder:$,panelTekstKode:"Inngangsvilkar.Fodselsvilkaret"}):null}),l&&s.aksjonspunkter.length>0&&e.jsx(xe,{ytelseTypeKode:me.ENGANGSSTONAD,readOnlySubmitButton:s.readOnlySubmitButton,status:s.status,vilkar:s.vilkar})]})})};Te.__docgenInfo={description:"",methods:[],displayName:"FodselInngangsvilkarInitPanel",props:{registrerInngangsvilkarPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: InngangsvilkarPanelData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  aksjonspunktTekst?: string;
  harApentAksjonspunkt: boolean;
  status: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"aksjonspunktTekst",value:{name:"string",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},erPanelValgt:{required:!0,tsType:{name:"boolean"},description:""},harInngangsvilkarApentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""}}};const Un=[t.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,t.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE],z=[D.MEDLEMSKAPSVILKARET_FORUTGAENDE],qe=r=>{const n=P(Un,z),{behandling:a,rettigheter:i}=p.use(F),s=Y(a),{data:l,isFetching:d}=R(s.medlemskapOptions(a)),o=n.aksjonspunkter.some(u=>u.definisjon===t.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR&&u.status!==x.AVBRUTT),k=n.aksjonspunkter.some(u=>u.definisjon===t.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR&&u.status==x.OPPRETTET);return e.jsx(U,{...r,standardPanelProps:n,behandlingVersjon:a.versjon,vilkarKoder:z,inngangsvilkarPanelKode:"MEDLEMSKAP",hentInngangsvilkarPanelTekst:"",renderPanel:({skalVises:u,erOverstyrt:y,toggleOverstyring:c})=>e.jsx(e.Fragment,{children:!k&&!d&&e.jsx(K,{overstyringApKode:t.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,kanOverstyreAccess:i.kanOverstyreAccess,overrideReadOnly:n.isReadOnly||o||r.harInngangsvilkarApentAksjonspunkt&&!(n.isAksjonspunktOpen||y),toggleOverstyring:c,children:u?e.jsx(G,{vilkar:n.vilkar,vilkarKoder:z,panelTekstKode:"Inngangsvilkar.Medlemskapsvilkaret",medlemskap:l}):null})})})};qe.__docgenInfo={description:"",methods:[],displayName:"MedlemskapForutgaendeInngangsvilkarInitPanel",props:{registrerInngangsvilkarPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: InngangsvilkarPanelData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  aksjonspunktTekst?: string;
  harApentAksjonspunkt: boolean;
  status: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"aksjonspunktTekst",value:{name:"string",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},erPanelValgt:{required:!0,tsType:{name:"boolean"},description:""},harInngangsvilkarApentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""}}};const Gn={[t.MANUELL_VURDERING_AV_OMSORGSVILKARET]:"ErOmsorgVilkaarOppfyltForm.Paragraf",[t.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]:"SRBVilkarForm.VurderSammeBarn",[t.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]:"SRBVilkarForm.VurderAnnenForelderSammeBarn"},Yn=(r,n=[])=>n.length>0?r.formatMessage({id:Gn[n[0].definisjon]}):"",Jn=[t.MANUELL_VURDERING_AV_OMSORGSVILKARET,t.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,t.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN],se=[D.OMSORGSVILKARET],Re=r=>{const n=O(),a=P(Jn,se),{behandling:i}=p.use(F);return e.jsx(U,{...r,behandlingVersjon:i.versjon,standardPanelProps:a,vilkarKoder:se,inngangsvilkarPanelKode:"OMSORG",hentInngangsvilkarPanelTekst:Yn(n,a.aksjonspunkter),renderPanel:({skalVises:s})=>e.jsx(e.Fragment,{children:s&&e.jsx(Ke,{readOnlySubmitButton:a.readOnlySubmitButton,status:a.status})})})};Re.__docgenInfo={description:"",methods:[],displayName:"OmsorgInngangsvilkarInitPanel",props:{registrerInngangsvilkarPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: InngangsvilkarPanelData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  aksjonspunktTekst?: string;
  harApentAksjonspunkt: boolean;
  status: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"aksjonspunktTekst",value:{name:"string",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},erPanelValgt:{required:!0,tsType:{name:"boolean"},description:""},harInngangsvilkarApentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""}}};const Ee=({valgtProsessSteg:r,registrerProsessPanel:n,apentFaktaPanelInfo:a})=>{const i=s=>e.jsxs(e.Fragment,{children:[e.jsx(Te,{...s}),e.jsx(Ae,{...s}),e.jsx(Re,{...s}),e.jsx(Je,{...s}),e.jsx(qe,{...s}),e.jsx(Me,{...s})]});return e.jsx(Ye,{valgtProsessSteg:r,registrerProsessPanel:n,apentFaktaPanelInfo:a,leftPanels:i})};Ee.__docgenInfo={description:"",methods:[],displayName:"InngangsvilkarEsProsessStegInitPanel",props:{apentFaktaPanelInfo:{required:!1,tsType:{name:"signature",type:"object",raw:"{ urlCode: string; text: string }",signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},description:""},valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Cn="_days_hiq77_1",Hn="_hyphen_hiq77_5",$n="_panel_hiq77_15",zn="_panelDates_hiq77_25",Wn="_col_hiq77_29",A={days:Cn,hyphen:Hn,panel:$n,panelDates:zn,col:Wn},te=r=>r?"ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt":"ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt",Qn=(r,n)=>bn(r).subtract(n,"days").format(tn),Xn=(r,n)=>{if(r.soknadType===le.FODSEL){const a=r.fodselsdatoer?Object.values(r.fodselsdatoer)[0]:void 0;return(n!=null&&n.avklartBarn&&n.avklartBarn.length>0?n.avklartBarn[0].fodselsdato:a)?"ErSoknadsfristVilkaretOppfyltForm.Fodselsdato":"ErSoknadsfristVilkaretOppfyltForm.Termindato"}return"ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato"},Zn=(r,n)=>{if(r.soknadType===le.FODSEL){const a=r.fodselsdatoer?Object.values(r.fodselsdatoer)[0]:void 0,i=n!=null&&n.avklartBarn&&n.avklartBarn.length>0?n.avklartBarn[0].fodselsdato:a,s=n!=null&&n.termindato?n.termindato:r.termindato;return i||s}return n!=null&&n.omsorgsovertakelseDato?n.omsorgsovertakelseDato:r.omsorgsovertakelseDato},er=(r,n)=>({erVilkarOk:r[0].status===x.OPPRETTET?void 0:f.OPPFYLT===n,...Z.buildInitialValues(r)}),nr=r=>({erVilkarOk:r.erVilkarOk||!1,kode:t.SOKNADSFRISTVILKARET,...Z.transformValues(r)}),Oe=({readOnlySubmitButton:r,soknad:n,gjeldendeFamiliehendelse:a,status:i})=>{var w,L;const s=O(),{aksjonspunkterForPanel:l,behandling:d,isReadOnly:o,submitCallback:k,alleKodeverk:u}=de(),y=p.useMemo(()=>er(l,i),[l,i]),{formData:c,setFormData:N}=ue(),b=ye({defaultValues:c||y}),S=Sn(u),m=p.useMemo(()=>Zn(n,a),[n,a]),j=p.useMemo(()=>Xn(n,a),[n,a]),M=p.useCallback((..._)=>e.jsx("b",{children:_}),[]),J=b.watch("erVilkarOk"),V=(w=n==null?void 0:n.søknadsfrist)==null?void 0:w.dagerOversittetFrist;return e.jsxs(ve,{formMethods:b,onSubmit:_=>k(nr(_)),setDataOnUnmount:N,children:[e.jsx(Q,{size:"small",children:s.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist"})}),e.jsxs("span",{className:"typo-normal",children:[e.jsx(v,{id:"ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart1"}),e.jsx("span",{className:A.days,children:e.jsx(v,{id:"ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart2",values:{numberOfDays:V}})}),e.jsx(v,{id:"ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart3"}),n.mottattDato&&V&&e.jsx(C,{dateString:Qn(n.mottattDato,V)})]}),e.jsxs(I,{children:[e.jsxs(T,{children:[e.jsx(g,{className:A.col,children:e.jsxs(re,{className:A.panel,children:[e.jsx(Q,{size:"small",children:s.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.Consider"})}),e.jsxs("ul",{className:A.hyphen,children:[e.jsx("li",{children:e.jsx(v,{id:"ErSoknadsfristVilkaretOppfyltForm.Question1"})}),e.jsx("li",{children:e.jsx(v,{id:"ErSoknadsfristVilkaretOppfyltForm.Question2"})}),e.jsx("li",{children:e.jsx(v,{id:"ErSoknadsfristVilkaretOppfyltForm.Question3"})})]})]})}),e.jsx(g,{className:A.col,children:e.jsx(re,{className:A.panelDates,children:e.jsxs(I,{children:[e.jsxs(T,{children:[e.jsxs(g,{className:A.col,children:[e.jsx(h,{children:s.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.MottattDato"})}),e.jsx("span",{className:"typo-normal",children:n.mottattDato&&e.jsx(C,{dateString:n.mottattDato})})]}),e.jsxs(g,{className:A.col,children:[j&&e.jsx(h,{children:s.formatMessage({id:j})}),e.jsx("span",{className:"typo-normal",children:m&&e.jsx(C,{dateString:m})})]})]}),e.jsx(E,{twentyPx:!0}),e.jsx(h,{children:s.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication"})}),e.jsx("span",{className:"typo-normal",children:n.begrunnelseForSenInnsending||"-"})]})})})]}),e.jsx(E,{sixteenPx:!0}),e.jsx(T,{children:e.jsx(g,{className:A.col,children:e.jsx(mn,{name:"erVilkarOk",validate:[fe],isReadOnly:o,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:e.jsx(v,{id:te(!0),values:{b:M}})},{value:"false",label:e.jsx(v,{id:te(!1),values:{b:M}})}]})})})]}),o&&J===!1&&!!((L=d.behandlingsresultat)!=null&&L.avslagsarsak)&&e.jsx(nn,{size:"small",children:S(d.behandlingsresultat.avslagsarsak,jn.AVSLAGSARSAK,D.SOKNADFRISTVILKARET)}),e.jsx(E,{sixteenPx:!0}),e.jsx(Z,{readOnly:o}),e.jsx(E,{sixteenPx:!0}),e.jsx(yn,{isReadOnly:o,isSubmittable:!r,isSubmitting:b.formState.isSubmitting,isDirty:b.formState.isDirty})]})};Oe.__docgenInfo={description:`ErSoknadsfristVilkaretOppfyltForm

Setter opp aksjonspunktet for vurdering av søknadsfristvilkåret.`,methods:[],displayName:"ErSoknadsfristVilkaretOppfyltForm",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},gjeldendeFamiliehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`},description:""},status:{required:!0,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const rr={"ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist":"Søknadsfrist","ErSoknadsfristVilkaretOppfyltForm.Consider":"Vurder følgende","ErSoknadsfristVilkaretOppfyltForm.Question1":"Har det vært fristavbrytende kontakt?","ErSoknadsfristVilkaretOppfyltForm.Question2":"Har Nav gitt misvisende opplysninger?","ErSoknadsfristVilkaretOppfyltForm.Question3":"Har søker åpenbart ikke vært i stand til å sette frem krav?","ErSoknadsfristVilkaretOppfyltForm.MottattDato":"Dato for mottatt søknad","ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato":"Dato for omsorgsovertakelse","ErSoknadsfristVilkaretOppfyltForm.Fodselsdato":"Fødselsdato","ErSoknadsfristVilkaretOppfyltForm.Termindato":"Termindato","ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication":"Begrunnelse fra søknaden","ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart1":"Søknaden ble mottatt ","ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart2":"{numberOfDays} dager ","ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart3":"etter søknadsfristen ","ErSoknadsfristVilkaretOppfyltForm.SokersOpplysningsplikt":"Søkers opplysningsplikt","ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt":"Vilkåret er oppfylt","ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt":"Vilkåret er <b>ikke</b> oppfylt","ShowVilkarStatus.Check":"Informasjonen er utfylt"},ar=ke(rr),Pe=({soknad:r,familiehendelse:n,status:a,readOnlySubmitButton:i})=>e.jsx(ge,{value:ar,children:e.jsx(Oe,{soknad:r,gjeldendeFamiliehendelse:n.gjeldende,status:a,readOnlySubmitButton:i})});Pe.__docgenInfo={description:"",methods:[],displayName:"SoknadsfristVilkarProsessIndex",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},familiehendelse:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}`,signature:{properties:[{key:"oppgitt",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"gjeldende",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}},{key:"register",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}`,signature:{properties:[{key:"skjaringstidspunkt",value:{name:"string",required:!0}},{key:"avklartBarn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fodselsdato: string;
  dodsdato?: string;
}`,signature:{properties:[{key:"fodselsdato",value:{name:"string",required:!0}},{key:"dodsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fodselsdato: string;
  dodsdato?: string;
}>`}],raw:"AvklartBarn[]",required:!1}},{key:"brukAntallBarnFraTps",value:{name:"boolean",required:!1}},{key:"dokumentasjonForeligger",value:{name:"boolean",required:!1}},{key:"termindato",value:{name:"string",required:!1}},{key:"antallBarnTermin",value:{name:"number",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}},{key:"morForSykVedFodsel",value:{name:"boolean",required:!1}},{key:"vedtaksDatoSomSvangerskapsuke",value:{name:"number",required:!1}},{key:"soknadType",value:{name:"string",required:!0}},{key:"adopsjonFodelsedatoer",value:{name:"Record",elements:[{name:"number"},{name:"string"}],raw:"Record<number, string>",required:!1}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"antallBarnTilBeregning",value:{name:"number",required:!1}},{key:"ektefellesBarn",value:{name:"boolean",required:!1}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!1}},{key:"vilkarType",value:{name:"string",required:!1}},{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"erOverstyrt",value:{name:"boolean",required:!1}},{key:"foreldreansvarDato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  skjaringstidspunkt: string;
  avklartBarn?: AvklartBarn[];
  brukAntallBarnFraTps?: boolean;
  dokumentasjonForeligger?: boolean;
  termindato?: string;
  antallBarnTermin?: number;
  utstedtdato?: string;
  morForSykVedFodsel?: boolean;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknadType: string;
  adopsjonFodelsedatoer?: Record<number, string>;
  omsorgsovertakelseDato?: string;
  antallBarnTilBeregning?: number;
  ektefellesBarn?: boolean;
  mannAdoptererAlene?: boolean;
  vilkarType?: string;
  ankomstNorge?: string;
  erOverstyrt?: boolean;
  foreldreansvarDato?: string;
}>`,required:!0}}]}}],raw:`Readonly<{
  oppgitt: FamilieHendelse;
  gjeldende: FamilieHendelse;
  register: FamilieHendelse;
}>`},description:""},status:{required:!0,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const sr=[t.SOKNADSFRISTVILKARET,t.OVERSTYR_SOKNADSFRISTVILKAR],W=[D.SOKNADFRISTVILKARET],Fe=r=>{const n=O(),{behandling:a,rettigheter:i}=p.use(F),s=P(sr,W),l=Y(a),{data:d}=R(l.søknadOptions(a)),{data:o}=R(l.familiehendelseOptions(a)),k=s.aksjonspunkter.some(u=>u.definisjon===t.SOKNADSFRISTVILKARET);return e.jsx(K,{overstyringApKode:t.OVERSTYR_SOKNADSFRISTVILKAR,kanOverstyreAccess:i.kanOverstyreAccess,overrideReadOnly:s.isReadOnly,children:e.jsx(ce,{...r,standardPanelProps:s,prosessPanelKode:X.SOEKNADSFRIST,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.Soknadsfristvilkaret"}),skalPanelVisesIMeny:Ce(s.aksjonspunkter,W,s.vilkar),children:e.jsxs(e.Fragment,{children:[!k&&e.jsx(G,{vilkar:s.vilkar,vilkarKoder:W,panelTekstKode:"Behandlingspunkt.Soknadsfristvilkaret"}),k&&d&&o&&e.jsx(Pe,{soknad:d,familiehendelse:o,status:s.status,readOnlySubmitButton:s.readOnlySubmitButton})]})})})};Fe.__docgenInfo={description:"",methods:[],displayName:"SoknadsfristEsProsessStegInitPanel",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const tr=[t.FATTER_VEDTAK,t.FORESLA_VEDTAK_MANUELT,t.VURDERE_ANNEN_YTELSE,t.VURDERE_DOKUMENT,t.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,t.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING],ir=[...tr,t.FORESLA_VEDTAK],he=r=>{const n=O(),{behandling:a,setSkalOppdatereEtterBekreftelseAvAp:i,fagsak:s}=p.use(F),[l,d]=p.useState(!1),[o,k]=p.useState(!1),u=dr(d,k,i),y=rn(),c=p.useCallback(()=>{d(!1),y("/")},[]),N=p.useCallback(()=>{k(!1),y("/")},[]),{vilkår:b}=a,S=P(ir,[],u),m=Y(a),{data:j,isFetching:M}=R(m.beregningDagytelseOriginalBehandlingOptions(a)),{data:J,isFetching:V}=R(m.es.beregningsresultatEngangsstønadOptions(a)),{data:w,isFetching:L}=R(m.simuleringResultatOptions(a)),{data:_,isFetching:De}=R(m.tilbakekrevingValgOptions(a)),Ne=!M&&!V&&!L&&!De,{mutate:Ve}=kn({mutationFn:_e=>fn({..._e,behandlingUuid:a.uuid,fagsakYtelseType:s.fagsakYtelseType}),onSuccess:on}),{aksjonspunkter:ee}=S;return e.jsx(cn,{...r,standardPanelProps:S,prosessPanelKode:X.VEDTAK,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.Vedtak"}),skalPanelVisesIMeny:!0,hentOverstyrtStatus:oe(b||[],a.aksjonspunkt||[],ee,a.behandlingsresultat),hentSkalMarkeresSomAktiv:!a.behandlingHenlagt&&oe(b||[],a.aksjonspunkt||[],ee,a.behandlingsresultat)!==f.IKKE_VURDERT,children:e.jsxs(e.Fragment,{children:[e.jsx(qn,{visModal:l,lukkModal:c,behandlingsresultat:S.behandling.behandlingsresultat}),e.jsx(Tn,{visModal:o,lukkModal:N,tekst:n.formatMessage({id:"FatterVedtakStatusModal.SendtBeslutter"})}),Ne?e.jsx(He,{ytelseTypeKode:me.ENGANGSSTONAD,previewCallback:Ve,beregningsresultatOriginalBehandling:j,beregningresultatEngangsstonad:J,simuleringResultat:w,tilbakekrevingvalg:_,vilkar:b}):e.jsx(pe,{})]})})},ie=(r,n)=>r.filter(a=>!n.some(i=>i.definisjon===a.definisjon)).every(a=>a.status!==x.OPPRETTET),or=r=>r.definisjon===t.OVERSTYR_BEREGNING||r.definisjon===t.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG||r.definisjon===t.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG||r.definisjon===t.VURDER_SOKNADSFRIST_FORELDREPENGER,lr=r=>or(r)&&r.status===x.OPPRETTET,oe=(r,n,a,i)=>r.length===0?f.IKKE_VURDERT:ie(n,a)&&r.some(s=>s.vilkarStatus===f.IKKE_OPPFYLT)?f.IKKE_OPPFYLT:r.some(s=>s.vilkarStatus===f.IKKE_VURDERT)||n.some(lr)?f.IKKE_VURDERT:ie(n,a)?i&&An(i.type)?f.IKKE_OPPFYLT:f.OPPFYLT:f.IKKE_VURDERT,dr=(r,n,a)=>i=>(a(!1),()=>{i.some(l=>l.kode===t.FORESLA_VEDTAK||"skalBrukeOverstyrendeFritekstBrev"in l&&l.skalBrukeOverstyrendeFritekstBrev)?n(!0):r(!0)});he.__docgenInfo={description:"",methods:[],displayName:"VedtakEsProsessStegInitPanel",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const ur=({valgtProsessSteg:r,valgtFaktaSteg:n,arbeidsgivere:a,personoversikt:i})=>{const s={},l=(o,k)=>e.jsxs(e.Fragment,{children:[e.jsx(we,{...o}),e.jsx($e,{...o,arbeidsgiverOpplysningerPerId:a}),e.jsx(Ee,{...o,apentFaktaPanelInfo:k.apentFaktaPanelInfo}),e.jsx(Fe,{...o}),e.jsx(Se,{...o}),e.jsx(ze,{...o,menyData:k.allMenyData,arbeidsgiverOpplysningerPerId:s}),e.jsx(he,{...o})]}),d=o=>e.jsxs(e.Fragment,{children:[e.jsx(We,{...o}),e.jsx(Qe,{...o}),e.jsx(Ze,{...o}),e.jsx(Le,{...o,personoversikt:i}),e.jsx(Ue,{...o}),e.jsx(Ge,{...o}),e.jsx(Xe,{...o})]});return e.jsx(Be,{valgtProsessSteg:r,valgtFaktaSteg:n,hentFaktaPaneler:d,hentProsessPaneler:l})};ur.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadPaneler",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},arbeidsgivere:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}`,signature:{properties:[{key:"erPrivatPerson",value:{name:"boolean",required:!0}},{key:"referanse",value:{name:"string",required:!1}},{key:"identifikator",value:{name:"string",required:!0}},{key:"navn",value:{name:"string",required:!0}},{key:"fødselsdato",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  erPrivatPerson: boolean;
  referanse?: string;
  identifikator: string;
  navn: string;
  fødselsdato?: string;
}>`}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},personoversikt:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}`,signature:{properties:[{key:"bruker",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"annenPart",value:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}},{key:"barn",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}`,signature:{properties:[{key:"navn",value:{name:"string",required:!0}},{key:"aktoerId",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"string",required:!0}},{key:"sivilstand",value:{name:"string",required:!0}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"adresser",value:{name:"Array",elements:[{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}},{key:"adresseType",value:{name:"string",required:!1}},{key:"adresselinje1",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje2",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"adresselinje3",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"postNummer",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"poststed",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}},{key:"land",value:{name:"string",required:!1}}]}}],raw:`Readonly<{
  fom: string;
  tom: string;
  adresseType?: string;
  adresselinje1?: string | null;
  adresselinje2?: string | null;
  adresselinje3?: string | null;
  postNummer?: string | null;
  poststed?: string | null;
  land?: string;
}>`}],raw:"Personadresse[]",required:!0}}]}}],raw:`Readonly<{
  navn: string;
  aktoerId: string;
  kjønn: string;
  sivilstand: string;
  dødsdato?: string;
  fødselsdato: string;
  adresser: Personadresse[];
}>`,required:!1}],raw:"PersonopplysningerBasis[]",required:!0}}]}}],raw:`Readonly<{
  bruker: PersonopplysningerBasis;
  annenPart?: PersonopplysningerBasis;
  barn: PersonopplysningerBasis[];
}>`},description:""}}};export{ur as default};
