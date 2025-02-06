import{j as e}from"./jsx-runtime-CLpGMVip.js";import{B as Be}from"./BehandlingContainer-B-7DgW04.js";import{A as Ie,F as xe,O as Ke,a as Me,V as we,b as Le,c as Ue,d as Ge}from"./OmsorgVilkarProsessIndex-K3M3UB4j.js";import{V,I as U,O as G,a as Ye,M as Je,S as le,s as Ce,b as He,c as $e,d as ze,e as We,Y as Qe,f as Ze}from"./VedtakProsessIndex-vCJuYw5k.js";import{V as Xe}from"./VergeFaktaInitPanel-Cfg6eWcT.js";import{r as m}from"./index-B5OHeJSP.js";import{ao as de,am as ue,X as en,m as Q,J as D,L as I,P as ge,av as M,k as P,F as me,h as nn,a0 as rn}from"./withPanelData-BD6kgoz0.js";import{W as x,z as T,Y as g,M as p,L as an,f as O,N as ne,e as sn,n as ke,H as pe,a as C,r as re,A as tn,Q as on}from"./index.es-BJ5ePes3.js";import{u as R}from"./initFetch-CULiu9VR.js";import{A as t}from"./aksjonspunktCodes-BuBbCIxs.js";import{V as v}from"./BehandlingHenlagtPanel-DP91amuS.js";import{P as Z}from"./skjermlenkeCodes-1SvLTuBb.js";import{a as ye,r as ve,H as ln,e as fe,s as dn,o as un,m as gn,Z as mn,u as kn}from"./index.es-D807ybPP.js";import{O as pn,P as X,a as yn}from"./OverstyringPanel-BeMSAkuD.js";import{h as vn,u as Y,a as fn}from"./behandlingApi-v-44y4EH.js";import{u as F,a as ce,P as cn}from"./useStandardProsessPanelProps-DF7rEMKk.js";import{B as h}from"./behandlingDataContext-BMbp9e-c.js";import{A as K}from"./aksjonspunktStatus-xM4O_ZUY.js";import{h as bn}from"./moment-C5S46NFB.js";import{K as jn}from"./alleKodeverk-Ck9zwXaq.js";import{g as Sn}from"./kodeverkUtils-DLZgokMR.js";import{i as An}from"./behandlingResultatType-DHbqkXMl.js";import{F as Tn}from"./FatterVedtakStatusModal-CMiKPhU6.js";import{I as qn}from"./IverksetterVedtakStatusModal-BZsmLkye.js";import"./index.es-758GeVNB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFormField-DxSG1hRL.js";import"./Link-BgL3YgA-.js";import"./Tooltip-CMJ3erQV.js";import"./index-sT6466e8.js";import"./index-DYwZEShM.js";import"./Popover-DcNCAbik.js";import"./ExclamationmarkTriangleFill-BaHUn2cM.js";import"./VisittkortSakIndex-XlZNqnE3.js";import"./dayjs.min-CJilavqB.js";import"./Tag-CzS4vEx9.js";import"./Spacer-CXEI7Xul.js";import"./landkoder-ICQJ9Wbn.js";import"./dokumentMalType-uHvYWaNM.js";import"./MeldingIndex-AvQCKqS-.js";import"./venteArsakType-BJdSFL9e.js";import"./UkjentAdresseMeldingIndex-C7yzkdVu.js";import"./CheckmarkCircleFill-DKFIcv_a.js";import"./useKodeverk-my-TNnbV.js";import"./useVisForhandsvisningAvMelding-D831nD0h.js";import"./SupportHeader-C02vJB7a.js";import"./ErrorBoundary-B7am3jx0.js";import"./IngenBehandlingValgtPanel-BjRN6abd.js";import"./RestApiErrorContext-CYa6iUCd.js";import"./SettPaVentReadOnlyModal-BBSLW0f3.js";import"./SettPaVentModalIndex-FJ5Aw0r5.js";import"./validerApKodeOgHentApEnum-BJOxEDqe.js";import"./Box-ixyZ_ErH.js";import"./Pencil-BLsJ8gFf.js";import"./bind-oYjWB_aQ.js";import"./TotrinnskontrollIndex-CbyoILJr.js";import"./behandlingArsakType-CTXggz2Y.js";import"./paths-BG-6LyE8.js";import"./RisikoklassifiseringIndex-Bboq4BsF.js";import"./useTrackRouteParam-CFfsK9bW.js";import"./fagsakStatus-NXwGwLtb.js";import"./useBehandlingPollingOperasjoner-CwYY2GFL.js";import"./errorType-DvWwZWq3.js";import"./index-DqeTBbD1.js";import"./decorators-DIzpaN6C.js";import"./Table-B2UwEoki.js";import"./Kjonnkode-C-fkzSiP.js";import"./v4-CtRu48qb.js";import"./Checkbox-BiRUn7i8.js";const Rn="_divider_5hs62_1",En="_text_5hs62_6",On="_bredde_5hs62_10",Pn="_firstColWidth_5hs62_14",Fn="_dividerWidth_5hs62_18",q={divider:Rn,text:En,bredde:On,firstColWidth:Pn,dividerWidth:Fn},hn=un(1),Nn=gn(5e5),Dn=(r,n)=>{const a=r.find(i=>i.definisjon===t.OVERSTYR_BEREGNING);return{begrunnelse:sn(a&&a.begrunnelse?a.begrunnelse:""),beregnetTilkjentYtelse:n==null?void 0:n.beregnetTilkjentYtelse}},Vn=r=>({kode:t.OVERSTYR_BEREGNING,beregnetTilkjentYtelse:r.beregnetTilkjentYtelse,begrunnelse:r.begrunnelse}),be=({behandlingResultatstruktur:r={beregnetTilkjentYtelse:0,antallBarn:0,satsVerdi:0}})=>{const{aksjonspunkterForPanel:n,submitCallback:a,alleMerknaderFraBeslutter:i}=de(),s=n.some(y=>{var S;return(S=i[y.definisjon])==null?void 0:S.notAccepted}),{formData:l,setFormData:u}=ue(),{toggleOverstyring:o,kanOverstyreAccess:k,overrideReadOnly:d}=en(),f=ye({defaultValues:l||Dn(n,r)}),[c,N]=m.useState(!1),j=()=>{N(!1),f.reset(),o()},E=()=>{N(!0),o()},b=n.some(y=>y.definisjon===t.OVERSTYR_BEREGNING)||!1;return e.jsxs(ve,{formMethods:f,onSubmit:y=>a(Vn(y)),setDataOnUnmount:u,children:[e.jsx(x,{children:e.jsxs(T,{children:[e.jsx(g,{children:e.jsx(Q,{size:"small",children:e.jsx(p,{id:"BeregningEngangsstonadForm.Beregning"})})}),(k.isEnabled||d)&&e.jsx(g,{children:e.jsx(an,{onClick:E,erOverstyrt:c||!k.isEnabled})})]})}),e.jsx(O,{eightPx:!0}),e.jsxs(x,{children:[e.jsxs(T,{children:[e.jsx(g,{className:q.firstColWidth,children:e.jsx(D,{children:e.jsx(p,{id:"BeregningEngangsstonadForm.Sats"})})}),e.jsx(g,{children:e.jsx(I,{size:"small",children:r!=null&&r.satsVerdi?ne(r.satsVerdi):"-"})})]}),e.jsxs(T,{children:[e.jsx(g,{className:q.firstColWidth,children:e.jsx(D,{children:e.jsx(p,{id:"BeregningEngangsstonadForm.AntallBarn"})})}),e.jsx(g,{children:e.jsx(I,{size:"small",children:r!=null&&r.antallBarn?r.antallBarn:"-"})})]}),!c&&!b&&e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx(g,{className:q.dividerWidth,children:e.jsx("hr",{className:q.divider})})}),e.jsxs(T,{children:[e.jsx(g,{className:q.firstColWidth,children:e.jsx(D,{children:e.jsx(p,{id:"BeregningEngangsstonadForm.BeregnetEngangsstonad"})})}),e.jsx(g,{children:e.jsx(I,{size:"small",children:r!=null&&r.beregnetTilkjentYtelse?ne(r.beregnetTilkjentYtelse):"-"})})]})]})]}),(c||b)&&e.jsxs(e.Fragment,{children:[e.jsx(O,{sixteenPx:!0}),e.jsxs(pn,{erOverstyrt:c,isSolvable:!0,erVilkarOk:!0,hasAksjonspunkt:b,overrideReadOnly:d,isSubmitting:f.formState.isSubmitting,isPristine:!f.formState.isDirty,toggleAv:j,erIkkeGodkjentAvBeslutter:s,children:[e.jsx(x,{children:e.jsxs(T,{children:[e.jsx(g,{children:e.jsx(I,{size:"small",className:!c||d?"":q.text,children:e.jsx(p,{id:"BeregningEngangsstonadForm.BeregnetEngangsstonad"})})}),e.jsx(g,{children:e.jsx(ln,{name:"beregnetTilkjentYtelse",parse:y=>{const S=parseInt(y,10);return Number.isNaN(S)?y:S},className:q.bredde,validate:[fe,dn,hn,Nn],readOnly:!c||d})}),e.jsx(g,{children:e.jsx(I,{size:"small",className:!c||d?"":q.text,children:e.jsx(p,{id:"BeregningEngangsstonadForm.Kroner"})})})]})}),e.jsx(O,{sixteenPx:!0})]})]})]})};be.__docgenInfo={description:`BeregningsresultatEngangsstonadForm

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
}`,computed:!1}}}};const _n={"BeregningEngangsstonadForm.Beregning":"Beregning","BeregningEngangsstonadForm.BeregnetEngangsstonad":"Beregnet engangsstønad","BeregningEngangsstonadForm.AntallBarn":"Antall barn","BeregningEngangsstonadForm.Sats":"Sats","BeregningEngangsstonadForm.Kroner":"kr"},Bn=ke(_n),je=({beregningresultatEngangsstonad:r})=>e.jsx(ge,{value:Bn,children:e.jsx(be,{behandlingResultatstruktur:r})});je.__docgenInfo={description:"",methods:[],displayName:"BeregningsresultatProsessIndex",props:{beregningresultatEngangsstonad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}`,signature:{properties:[{key:"beregnetTilkjentYtelse",value:{name:"number",required:!0}},{key:"satsVerdi",value:{name:"number",required:!0}},{key:"antallBarn",value:{name:"number",required:!0}}]}}],raw:`Readonly<{
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
  antallBarn: number;
}>`},description:""}}};const ae=t.OVERSTYR_BEREGNING,Se=r=>{const n=F([ae]),{behandling:a,rettigheter:i}=m.use(h),s=Y(a),{data:l}=R(s.es.beregningsresultatEngangsstønadOptions(a));return e.jsx(M,{overstyringApKode:ae,kanOverstyreAccess:i.kanOverstyreAccess,overrideReadOnly:n.isReadOnly,children:e.jsx(ce,{...r,standardPanelProps:n,prosessPanelKode:Z.BEREGNING,prosessPanelMenyTekst:P().formatMessage({id:"Behandlingspunkt.Beregning"}),skalPanelVisesIMeny:!0,hentOverstyrtStatus:vn(a,"BEREGNINGRESULTAT_ENGANGSSTONAD")?v.OPPFYLT:v.IKKE_VURDERT,children:l?e.jsx(je,{beregningresultatEngangsstonad:l}):e.jsx(pe,{})})})};Se.__docgenInfo={description:"",methods:[],displayName:"BeregningEsProsessStegInitPanel",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const In={[t.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]:"SRBVilkarForm.VurderSammeBarn",[t.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]:"SRBVilkarForm.VurderAnnenForelderSammeBarn"},xn=(r,n=[])=>n.length>0?r.formatMessage({id:In[n[0].definisjon]}):"",Kn=[t.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,t.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN],H=[V.ADOPSJONSVILKARET],Ae=r=>{const n=P(),{behandling:a,rettigheter:i}=m.use(h),s=F(Kn,H);return e.jsx(U,{...r,standardPanelProps:s,behandlingVersjon:a.versjon,vilkarKoder:H,inngangsvilkarPanelKode:"ADOPSJON",hentInngangsvilkarPanelTekst:xn(n,s.aksjonspunkter),renderPanel:({erOverstyrt:l,toggleOverstyring:u})=>e.jsxs(e.Fragment,{children:[s.aksjonspunkter.length===0&&e.jsx(M,{overstyringApKode:t.OVERSTYR_ADOPSJONSVILKAR,kanOverstyreAccess:i.kanOverstyreAccess,overrideReadOnly:s.isReadOnly||r.harInngangsvilkarApentAksjonspunkt&&!(s.isAksjonspunktOpen||l),toggleOverstyring:u,children:e.jsx(G,{vilkar:s.vilkar,vilkarKoder:H,panelTekstKode:"Inngangsvilkar.Adopsjonsvilkaret"})}),s.aksjonspunkter.length>0&&e.jsx(Ie,{readOnlySubmitButton:s.readOnlySubmitButton,status:s.status,vilkar:s.vilkar})]})})};Ae.__docgenInfo={description:"",methods:[],displayName:"AdopsjonInngangsvilkarInitPanel",props:{registrerInngangsvilkarPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: InngangsvilkarPanelData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  aksjonspunktTekst?: string;
  harApentAksjonspunkt: boolean;
  status: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"aksjonspunktTekst",value:{name:"string",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},erPanelValgt:{required:!0,tsType:{name:"boolean"},description:""},harInngangsvilkarApentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""}}};const Mn={[t.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]:"SRBVilkarForm.VurderSammeBarn",[t.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]:"SRBVilkarForm.VurderAnnenForelderSammeBarn"},wn=(r,n=[])=>n.length>0?r.formatMessage({id:Mn[n[0].definisjon]}):"",Ln=[t.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,t.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN],$=[V.FODSELSVILKARET_MOR],Te=r=>{const n=P(),{behandling:a,rettigheter:i}=m.use(h),s=F(Ln,$);return e.jsx(U,{...r,standardPanelProps:s,behandlingVersjon:a.versjon,vilkarKoder:$,inngangsvilkarPanelKode:"FODSEL",hentInngangsvilkarPanelTekst:wn(n,s.aksjonspunkter),renderPanel:({erOverstyrt:l,toggleOverstyring:u})=>e.jsxs(e.Fragment,{children:[s.aksjonspunkter.length===0&&e.jsx(M,{overstyringApKode:t.OVERSTYR_FODSELSVILKAR,kanOverstyreAccess:i.kanOverstyreAccess,overrideReadOnly:s.isReadOnly||r.harInngangsvilkarApentAksjonspunkt&&!(s.isAksjonspunktOpen||l),toggleOverstyring:u,children:e.jsx(G,{vilkar:s.vilkar,vilkarKoder:$,panelTekstKode:"Inngangsvilkar.Fodselsvilkaret"})}),s.aksjonspunkter.length>0&&e.jsx(xe,{ytelseTypeKode:me.ENGANGSSTONAD,readOnlySubmitButton:s.readOnlySubmitButton,status:s.status,vilkar:s.vilkar})]})})};Te.__docgenInfo={description:"",methods:[],displayName:"FodselInngangsvilkarInitPanel",props:{registrerInngangsvilkarPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: InngangsvilkarPanelData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  aksjonspunktTekst?: string;
  harApentAksjonspunkt: boolean;
  status: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"aksjonspunktTekst",value:{name:"string",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},erPanelValgt:{required:!0,tsType:{name:"boolean"},description:""},harInngangsvilkarApentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""}}};const Un=[t.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,t.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE],z=[V.MEDLEMSKAPSVILKARET_FORUTGAENDE],qe=r=>{const n=F(Un,z),{behandling:a,rettigheter:i}=m.use(h),s=Y(a),{data:l,isFetching:u}=R(s.medlemskapOptions(a)),o=n.aksjonspunkter.some(d=>d.definisjon===t.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR&&d.status!==K.AVBRUTT),k=n.aksjonspunkter.some(d=>d.definisjon===t.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR&&d.status==K.OPPRETTET);return e.jsx(U,{...r,standardPanelProps:n,behandlingVersjon:a.versjon,vilkarKoder:z,inngangsvilkarPanelKode:"MEDLEMSKAP",hentInngangsvilkarPanelTekst:"",renderPanel:({erOverstyrt:d,toggleOverstyring:f})=>e.jsx(e.Fragment,{children:!k&&!u&&e.jsx(M,{overstyringApKode:t.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,kanOverstyreAccess:i.kanOverstyreAccess,overrideReadOnly:n.isReadOnly||o||r.harInngangsvilkarApentAksjonspunkt&&!(n.isAksjonspunktOpen||d),toggleOverstyring:f,children:e.jsx(G,{vilkar:n.vilkar,vilkarKoder:z,panelTekstKode:"Inngangsvilkar.Medlemskapsvilkaret",medlemskap:l})})})})};qe.__docgenInfo={description:"",methods:[],displayName:"MedlemskapForutgaendeInngangsvilkarInitPanel",props:{registrerInngangsvilkarPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: InngangsvilkarPanelData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  aksjonspunktTekst?: string;
  harApentAksjonspunkt: boolean;
  status: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"aksjonspunktTekst",value:{name:"string",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!0}},{key:"status",value:{name:"string",required:!0}}]}},name:"data"}],return:{name:"void"}}},description:""},erPanelValgt:{required:!0,tsType:{name:"boolean"},description:""},harInngangsvilkarApentAksjonspunkt:{required:!0,tsType:{name:"boolean"},description:""}}};const Gn={[t.MANUELL_VURDERING_AV_OMSORGSVILKARET]:"ErOmsorgVilkaarOppfyltForm.Paragraf",[t.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]:"SRBVilkarForm.VurderSammeBarn",[t.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN]:"SRBVilkarForm.VurderAnnenForelderSammeBarn"},Yn=(r,n=[])=>n.length>0?r.formatMessage({id:Gn[n[0].definisjon]}):"",Jn=[t.MANUELL_VURDERING_AV_OMSORGSVILKARET,t.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,t.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN],se=[V.OMSORGSVILKARET],Re=r=>{const n=P(),a=F(Jn,se),{behandling:i}=m.use(h);return e.jsx(U,{...r,behandlingVersjon:i.versjon,standardPanelProps:a,vilkarKoder:se,inngangsvilkarPanelKode:"OMSORG",hentInngangsvilkarPanelTekst:Yn(n,a.aksjonspunkter),renderPanel:()=>e.jsx(Ke,{readOnlySubmitButton:a.readOnlySubmitButton,status:a.status})})};Re.__docgenInfo={description:"",methods:[],displayName:"OmsorgInngangsvilkarInitPanel",props:{registrerInngangsvilkarPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: InngangsvilkarPanelData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const Cn="_days_hiq77_1",Hn="_hyphen_hiq77_5",$n="_panel_hiq77_15",zn="_radioGroup_hiq77_21",Wn="_panelDates_hiq77_25",Qn="_col_hiq77_29",A={days:Cn,hyphen:Hn,panel:$n,radioGroup:zn,panelDates:Wn,col:Qn},te=r=>r?"ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt":"ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt",Zn=(r,n)=>bn(r).subtract(n,"days").format(tn),Xn=(r,n)=>{if(r.soknadType===le.FODSEL){const a=r.fodselsdatoer?Object.values(r.fodselsdatoer)[0]:void 0;return(n!=null&&n.avklartBarn&&n.avklartBarn.length>0?n.avklartBarn[0].fodselsdato:a)?"ErSoknadsfristVilkaretOppfyltForm.Fodselsdato":"ErSoknadsfristVilkaretOppfyltForm.Termindato"}return"ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato"},er=(r,n)=>{if(r.soknadType===le.FODSEL){const a=r.fodselsdatoer?Object.values(r.fodselsdatoer)[0]:void 0,i=n!=null&&n.avklartBarn&&n.avklartBarn.length>0?n.avklartBarn[0].fodselsdato:a,s=n!=null&&n.termindato?n.termindato:r.termindato;return i||s}return n!=null&&n.omsorgsovertakelseDato?n.omsorgsovertakelseDato:r.omsorgsovertakelseDato},nr=(r,n)=>({erVilkarOk:r[0].status===K.OPPRETTET?void 0:v.OPPFYLT===n,...X.buildInitialValues(r)}),rr=r=>({erVilkarOk:r.erVilkarOk||!1,kode:t.SOKNADSFRISTVILKARET,...X.transformValues(r)}),Oe=({readOnlySubmitButton:r,soknad:n,gjeldendeFamiliehendelse:a,status:i})=>{var w,L;const s=P(),{aksjonspunkterForPanel:l,behandling:u,isReadOnly:o,submitCallback:k,alleKodeverk:d}=de(),f=m.useMemo(()=>nr(l,i),[l,i]),{formData:c,setFormData:N}=ue(),j=ye({defaultValues:c||f}),E=Sn(d),b=m.useMemo(()=>er(n,a),[n,a]),y=m.useMemo(()=>Xn(n,a),[n,a]),S=m.useCallback((...B)=>e.jsx("b",{children:B}),[]),J=j.watch("erVilkarOk"),_=(w=n==null?void 0:n.søknadsfrist)==null?void 0:w.dagerOversittetFrist;return e.jsxs(ve,{formMethods:j,onSubmit:B=>k(rr(B)),setDataOnUnmount:N,children:[e.jsx(Q,{size:"small",children:s.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist"})}),e.jsxs("span",{className:"typo-normal",children:[e.jsx(p,{id:"ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart1"}),e.jsx("span",{className:A.days,children:e.jsx(p,{id:"ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart2",values:{numberOfDays:_}})}),e.jsx(p,{id:"ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart3"}),n.mottattDato&&_&&e.jsx(C,{dateString:Zn(n.mottattDato,_)})]}),e.jsxs(x,{children:[e.jsxs(T,{children:[e.jsx(g,{className:A.col,children:e.jsxs(re,{className:A.panel,children:[e.jsx(Q,{size:"small",children:s.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.Consider"})}),e.jsxs("ul",{className:A.hyphen,children:[e.jsx("li",{children:e.jsx(p,{id:"ErSoknadsfristVilkaretOppfyltForm.Question1"})}),e.jsx("li",{children:e.jsx(p,{id:"ErSoknadsfristVilkaretOppfyltForm.Question2"})}),e.jsx("li",{children:e.jsx(p,{id:"ErSoknadsfristVilkaretOppfyltForm.Question3"})})]})]})}),e.jsx(g,{className:A.col,children:e.jsx(re,{className:A.panelDates,children:e.jsxs(x,{children:[e.jsxs(T,{children:[e.jsxs(g,{className:A.col,children:[e.jsx(D,{children:s.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.MottattDato"})}),e.jsx("span",{className:"typo-normal",children:n.mottattDato&&e.jsx(C,{dateString:n.mottattDato})})]}),e.jsxs(g,{className:A.col,children:[y&&e.jsx(D,{children:s.formatMessage({id:y})}),e.jsx("span",{className:"typo-normal",children:b&&e.jsx(C,{dateString:b})})]})]}),e.jsx(O,{twentyPx:!0}),e.jsx(D,{children:s.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication"})}),e.jsx("span",{className:"typo-normal",children:n.begrunnelseForSenInnsending||"-"})]})})})]}),e.jsx(O,{sixteenPx:!0}),e.jsx(T,{children:e.jsx(g,{className:A.col,children:e.jsx(mn,{name:"erVilkarOk",validate:[fe],isReadOnly:o,isHorizontal:!0,isTrueOrFalseSelection:!0,radios:[{value:"true",label:e.jsx(p,{id:te(!0),values:{b:S}})},{value:"false",label:e.jsx(p,{id:te(!1),values:{b:S}})}]})})})]}),o&&J===!1&&!!((L=u.behandlingsresultat)!=null&&L.avslagsarsak)&&e.jsx(nn,{size:"small",children:E(u.behandlingsresultat.avslagsarsak,jn.AVSLAGSARSAK,V.SOKNADFRISTVILKARET)}),e.jsx(O,{sixteenPx:!0}),e.jsx(X,{readOnly:o}),e.jsx(O,{sixteenPx:!0}),e.jsx(yn,{isReadOnly:o,isSubmittable:!r,isSubmitting:j.formState.isSubmitting,isDirty:j.formState.isDirty})]})};Oe.__docgenInfo={description:`ErSoknadsfristVilkaretOppfyltForm

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
}>`},description:""},status:{required:!0,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const ar={"ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist":"Søknadsfrist","ErSoknadsfristVilkaretOppfyltForm.Consider":"Vurder følgende","ErSoknadsfristVilkaretOppfyltForm.Question1":"Har det vært fristavbrytende kontakt?","ErSoknadsfristVilkaretOppfyltForm.Question2":"Har Nav gitt misvisende opplysninger?","ErSoknadsfristVilkaretOppfyltForm.Question3":"Har søker åpenbart ikke vært i stand til å sette frem krav?","ErSoknadsfristVilkaretOppfyltForm.MottattDato":"Dato for mottatt søknad","ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato":"Dato for omsorgsovertakelse","ErSoknadsfristVilkaretOppfyltForm.Fodselsdato":"Fødselsdato","ErSoknadsfristVilkaretOppfyltForm.Termindato":"Termindato","ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication":"Begrunnelse fra søknaden","ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart1":"Søknaden ble mottatt ","ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart2":"{numberOfDays} dager ","ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart3":"etter søknadsfristen ","ErSoknadsfristVilkaretOppfyltForm.SokersOpplysningsplikt":"Søkers opplysningsplikt","ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt":"Vilkåret er oppfylt","ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt":"Vilkåret er <b>ikke</b> oppfylt","ShowVilkarStatus.Check":"Informasjonen er utfylt"},sr=ke(ar),Pe=({soknad:r,familiehendelse:n,status:a,readOnlySubmitButton:i})=>e.jsx(ge,{value:sr,children:e.jsx(Oe,{soknad:r,gjeldendeFamiliehendelse:n.gjeldende,status:a,readOnlySubmitButton:i})});Pe.__docgenInfo={description:"",methods:[],displayName:"SoknadsfristVilkarProsessIndex",props:{soknad:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""},status:{required:!0,tsType:{name:"string"},description:""},readOnlySubmitButton:{required:!0,tsType:{name:"boolean"},description:""}}};const tr=[t.SOKNADSFRISTVILKARET,t.OVERSTYR_SOKNADSFRISTVILKAR],W=[V.SOKNADFRISTVILKARET],Fe=r=>{const n=P(),{behandling:a,rettigheter:i}=m.use(h),s=F(tr,W),l=Y(a),{data:u}=R(l.søknadOptions(a)),{data:o}=R(l.familiehendelseOptions(a)),k=s.aksjonspunkter.some(d=>d.definisjon===t.SOKNADSFRISTVILKARET);return e.jsx(M,{overstyringApKode:t.OVERSTYR_SOKNADSFRISTVILKAR,kanOverstyreAccess:i.kanOverstyreAccess,overrideReadOnly:s.isReadOnly,children:e.jsx(ce,{...r,standardPanelProps:s,prosessPanelKode:Z.SOEKNADSFRIST,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.Soknadsfristvilkaret"}),skalPanelVisesIMeny:Ce(s.aksjonspunkter,W,s.vilkar),children:e.jsxs(e.Fragment,{children:[!k&&e.jsx(G,{vilkar:s.vilkar,vilkarKoder:W,panelTekstKode:"Behandlingspunkt.Soknadsfristvilkaret"}),k&&u&&o&&e.jsx(Pe,{soknad:u,familiehendelse:o,status:s.status,readOnlySubmitButton:s.readOnlySubmitButton})]})})})};Fe.__docgenInfo={description:"",methods:[],displayName:"SoknadsfristEsProsessStegInitPanel",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const ir=[t.FATTER_VEDTAK,t.FORESLA_VEDTAK_MANUELT,t.VURDERE_ANNEN_YTELSE,t.VURDERE_DOKUMENT,t.KONTROLLER_REVURDERINGSBEHANDLING_VARSEL_VED_UGUNST,t.KONTROLL_AV_MAUNELT_OPPRETTET_REVURDERINGSBEHANDLING],or=[...ir,t.FORESLA_VEDTAK],he=r=>{const n=P(),{behandling:a,setSkalOppdatereEtterBekreftelseAvAp:i,fagsak:s}=m.use(h),[l,u]=m.useState(!1),[o,k]=m.useState(!1),d=ur(u,k,i),f=rn(),c=m.useCallback(()=>{u(!1),f("/")},[]),N=m.useCallback(()=>{k(!1),f("/")},[]),{vilkår:j}=a,E=F(or,[],d),b=Y(a),{data:y,isFetching:S}=R(b.beregningDagytelseOriginalBehandlingOptions(a)),{data:J,isFetching:_}=R(b.es.beregningsresultatEngangsstønadOptions(a)),{data:w,isFetching:L}=R(b.simuleringResultatOptions(a)),{data:B,isFetching:Ne}=R(b.tilbakekrevingValgOptions(a)),De=!S&&!_&&!L&&!Ne,{mutate:Ve}=kn({mutationFn:_e=>fn({..._e,behandlingUuid:a.uuid,fagsakYtelseType:s.fagsakYtelseType}),onSuccess:on}),{aksjonspunkter:ee}=E;return e.jsx(cn,{...r,standardPanelProps:E,prosessPanelKode:Z.VEDTAK,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.Vedtak"}),skalPanelVisesIMeny:!0,hentOverstyrtStatus:oe(j||[],a.aksjonspunkt||[],ee,a.behandlingsresultat),hentSkalMarkeresSomAktiv:!a.behandlingHenlagt&&oe(j||[],a.aksjonspunkt||[],ee,a.behandlingsresultat)!==v.IKKE_VURDERT,children:e.jsxs(e.Fragment,{children:[e.jsx(qn,{visModal:l,lukkModal:c,behandlingsresultat:E.behandling.behandlingsresultat}),e.jsx(Tn,{visModal:o,lukkModal:N,tekst:n.formatMessage({id:"FatterVedtakStatusModal.SendtBeslutter"})}),De?e.jsx(He,{ytelseTypeKode:me.ENGANGSSTONAD,previewCallback:Ve,beregningsresultatOriginalBehandling:y,beregningresultatEngangsstonad:J,simuleringResultat:w,tilbakekrevingvalg:B,vilkar:j}):e.jsx(pe,{})]})})},ie=(r,n)=>r.filter(a=>!n.some(i=>i.definisjon===a.definisjon)).every(a=>a.status!==K.OPPRETTET),lr=r=>r.definisjon===t.OVERSTYR_BEREGNING||r.definisjon===t.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG||r.definisjon===t.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG||r.definisjon===t.VURDER_SOKNADSFRIST_FORELDREPENGER,dr=r=>lr(r)&&r.status===K.OPPRETTET,oe=(r,n,a,i)=>r.length===0?v.IKKE_VURDERT:ie(n,a)&&r.some(s=>s.vilkarStatus===v.IKKE_OPPFYLT)?v.IKKE_OPPFYLT:r.some(s=>s.vilkarStatus===v.IKKE_VURDERT)||n.some(dr)?v.IKKE_VURDERT:ie(n,a)?i&&An(i.type)?v.IKKE_OPPFYLT:v.OPPFYLT:v.IKKE_VURDERT,ur=(r,n,a)=>i=>(a(!1),()=>{i.some(l=>l.kode===t.FORESLA_VEDTAK||l.skalBrukeOverstyrendeFritekstBrev)?n(!0):r(!0)});he.__docgenInfo={description:"",methods:[],displayName:"VedtakEsProsessStegInitPanel",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},registrerProsessPanel:{required:!0,tsType:{name:"signature",type:"function",raw:"(data: ProsessPanelMenyData) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string;
  tekst?: string;
  erAktiv?: boolean;
  harApentAksjonspunkt?: boolean;
  status?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"tekst",value:{name:"string",required:!1}},{key:"erAktiv",value:{name:"boolean",required:!1}},{key:"harApentAksjonspunkt",value:{name:"boolean",required:!1}},{key:"status",value:{name:"string",required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""}}};const gr=({valgtProsessSteg:r,valgtFaktaSteg:n,arbeidsgivere:a,personoversikt:i})=>{const s={},l=(o,k)=>e.jsxs(e.Fragment,{children:[e.jsx(we,{...o}),e.jsx($e,{...o,arbeidsgiverOpplysningerPerId:a}),e.jsx(Ee,{...o,apentFaktaPanelInfo:k.apentFaktaPanelInfo}),e.jsx(Fe,{...o}),e.jsx(Se,{...o}),e.jsx(ze,{...o,menyData:k.allMenyData,arbeidsgiverOpplysningerPerId:s}),e.jsx(he,{...o})]}),u=o=>e.jsxs(e.Fragment,{children:[e.jsx(We,{...o}),e.jsx(Qe,{...o}),e.jsx(Xe,{...o}),e.jsx(Le,{...o,personoversikt:i}),e.jsx(Ue,{...o}),e.jsx(Ge,{...o}),e.jsx(Ze,{...o})]});return e.jsx(Be,{valgtProsessSteg:r,valgtFaktaSteg:n,hentFaktaPaneler:u,hentProsessPaneler:l})};gr.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadPaneler",props:{valgtProsessSteg:{required:!1,tsType:{name:"string"},description:""},valgtFaktaSteg:{required:!1,tsType:{name:"string"},description:""},arbeidsgivere:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
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
}>`},description:""}}};export{gr as default};
