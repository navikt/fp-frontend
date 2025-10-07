import{j as e,bj as q,P as w,b as J,l as S,r as k,bf as Y,aa as Ee,ab as oe,A as ue,t as de,S as M,K as me,bk as Se}from"./iframe-BDTafQCk.js";import{a as ge,V as _e}from"./VergeFaktaInitPanel-DfM2Tvqx.js";import{u as g,P as Te,b as De,a as Ne}from"./useStandardProsessPanelProps-BO09iJKU.js";import{A as pe,F as ke,O as ve,a as Re,V as Ae,b as Ie,c as Oe,d as Ke}from"./OmsorgVilkarProsessIndex-B5rBPB1s.js";import{I as f,O as v,a as G,b as ye,M as Le,s as Pe,c as Fe,d as fe,V as Ge,e as be,Y as je,f as Ve}from"./MedlemskapInngangsvilkarInitPanel-B77SUVR4.js";import{b as ce,Q as he,G as O,B as qe}from"./index.es-BX2L31WV.js";import{u as p}from"./fagsakApi-CpA30By6.js";import{V as d,a as F,H as T,D as m,L as K,B as Me}from"./VStack-CXSNKu_q.js";import{M as i}from"./message-CwGodI8N.js";import{u as b,c as Be}from"./behandlingApi-Uf8gqyp-.js";import{B as j}from"./FagsakIndex-wK3H8UCD.js";import{A as r}from"./index-BVtkNzEP.js";import{e as Ue}from"./aksjonspunktUtils-Bp6ewLMR.js";import{u as xe,C as we,S as Je,R as B}from"./index.es-BNiyb1yS.js";import{P as V,a as Ye}from"./OverstyringPanel-B0ytnW6_.js";import"./preload-helper-PPVm8Dsz.js";import"./BehandlingMenuIndex-DhusWffm.js";import"./bind-DRqG3yXZ.js";import"./index.es-DKwcL2UN.js";import"./index-DYpX_BBl.js";import"./Link-SLrHZznO.js";import"./Checkmark-D02Qzdvo.js";import"./Popover-Bs_FuwCI.js";import"./ExclamationmarkTriangleFill-DODXbRih.js";import"./Kjonnkode-DjBoP8-t.js";import"./Table-C6pG4wMZ.js";import"./FaktaKort-Dakzxyyd.js";import"./eksterneLenker-CZTrovcW.js";import"./Checkbox-Y1qnj96A.js";import"./CheckmarkCircleFill-CoyKOD9b.js";import"./SettPaVentModalIndex-DgUAH3O9.js";import"./FagsakData-B6kNW04I.js";import"./useBehandlingPollingOperasjoner-CVFTzg0G.js";import"./ErrorBoundary-rF9jfbro.js";import"./IngenBehandlingValgtPanel-BdA4AoYx.js";import"./apiPollingStatus-nT-xUZgL.js";import"./useKodeverk-BOu5TcPj.js";import"./paths-DD-UCRU6.js";import"./Dropdown-COvXHC07.js";import"./BehandlingHenlagtPanel-CT524eUM.js";import"./FagsakProfileIndex-CR5xm03k.js";import"./DocPencil-CVCREmTW.js";import"./RisikoklassifiseringIndex-DvkHwMBu.js";import"./useTrackRouteParam-Mt8W8b8D.js";import"./PersonHeadset-W0M4MNZ_.js";import"./Spacer-D_zrEia6.js";import"./StarFill-u02toMKV.js";import"./UkjentAdresseMeldingIndex-wMXoXoPR.js";import"./HGrid-Ctgkic4h.js";import"./validerApKodeOgHentApEnum-N5xTXakj.js";import"./HistorikkIndex-DaaUlSVC.js";import"./ExternalLink-DzImsyue.js";import"./FatterVedtakStatusModal-DBJSW7mk.js";import"./IverksetterVedtakStatusModal-CZ4O9c8-.js";import"./TotrinnskontrollIndex-BM89mQxY.js";import"./SupportHeader-DR0SdV_D.js";import"./index-BD6PrEQC.js";import"./VisittkortSakIndex-BPNtmUYg.js";import"./BehandlingPaVent-zF0irxjJ.js";import"./BehandlingSupportIndex-l2ty-sLF.js";import"./DokumentIndex-EdYr4P-k.js";import"./MeldingIndex-rSbJH5zD.js";import"./SettPaVentReadOnlyModal-GiejH0Qc.js";import"./UtvidEllerMinskKnapp-COKmpfvF.js";const He="_container_528zj_1",$e={container:He},H=({behandlingResultatstruktur:n={beregnetTilkjentYtelse:0,antallBarn:0,satsVerdi:0}})=>e.jsxs(d,{gap:"space-16",className:$e.container,children:[e.jsx(F,{size:"small",level:"2",children:e.jsx(i,{id:"BeregningEngangsstonadForm.Beregning"})}),e.jsxs(d,{gap:"space-8",children:[e.jsxs(T,{justify:"space-between",children:[e.jsx(m,{children:e.jsx(i,{id:"BeregningEngangsstonadForm.Sats"})}),e.jsx(K,{size:"small",children:n.satsVerdi?q(n.satsVerdi):"-"})]}),e.jsxs(T,{justify:"space-between",children:[e.jsx(m,{children:e.jsx(i,{id:"BeregningEngangsstonadForm.AntallBarn"})}),e.jsx(K,{size:"small",children:n.antallBarn})]}),e.jsx(ce,{dividerParagraf:!0}),e.jsxs(T,{justify:"space-between",children:[e.jsx(m,{children:e.jsx(i,{id:"BeregningEngangsstonadForm.BeregnetEngangsstonad"})}),e.jsx(K,{size:"small",children:n.beregnetTilkjentYtelse?q(n.beregnetTilkjentYtelse):"-"})]})]})]});H.__docgenInfo={description:`BeregningsresultatEngangsstonadForm

Viser beregnet engangsstønad.`,methods:[],displayName:"BeregningsresultatEngangsstonadForm",props:{behandlingResultatstruktur:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  antallBarn: number;
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"beregnetTilkjentYtelse",value:{name:"number",required:!0}},{key:"satsVerdi",value:{name:"number",required:!0}}]}},description:"",defaultValue:{value:`{
  beregnetTilkjentYtelse: 0,
  antallBarn: 0,
  satsVerdi: 0,
}`,computed:!1}}}};const Ce={"BeregningEngangsstonadForm.Beregning":"Beregning","BeregningEngangsstonadForm.BeregnetEngangsstonad":"Beregnet engangsstønad","BeregningEngangsstonadForm.AntallBarn":"Antall barn","BeregningEngangsstonadForm.Sats":"Sats","BeregningEngangsstonadForm.Kroner":"kr"},ze=J(Ce),$=({beregningresultatEngangsstonad:n})=>e.jsx(w,{value:ze,children:e.jsx(H,{behandlingResultatstruktur:n})});$.__docgenInfo={description:"",methods:[],displayName:"BeregningsresultatProsessIndex",props:{beregningresultatEngangsstonad:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  antallBarn: number;
  beregnetTilkjentYtelse: number;
  satsVerdi: number;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"beregnetTilkjentYtelse",value:{name:"number",required:!0}},{key:"satsVerdi",value:{name:"number",required:!0}}]}},description:""}}};const C=()=>{const n=S(),a=g(),{behandling:t}=k.use(j),l=b(t),{data:o,isFetching:E}=p(l.es.beregningsresultatEngangsstønadOptions(t));return e.jsx(Te,{standardPanelProps:a,prosessPanelKode:Y.BEREGNING,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.Beregning"}),skalPanelVisesIMeny:!0,overstyrtStatus:Be(t,"BEREGNINGRESULTAT_ENGANGSSTONAD")?"OPPFYLT":"IKKE_VURDERT",children:E?e.jsx(he,{}):e.jsx($,{beregningresultatEngangsstonad:o})})};C.__docgenInfo={description:"",methods:[],displayName:"BeregningEsProsessStegInitPanel"};const Qe=[r.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN],D=["FP_VK_4"],z=()=>{const n=S(),a=g(Qe,D),t=Xe(n,a.aksjonspunkterForPanel);return a.aksjonspunkterForPanel.length===0?e.jsx(f,{standardPanelProps:a,vilkårKoder:D,inngangsvilkårPanelKode:"ADOPSJON",hentInngangsvilkårPanelTekst:t,overstyringApKode:r.OVERSTYR_ADOPSJONSVILKAR,children:e.jsx(v,{vilkår:a.vilkårForPanel,vilkårKoder:D,panelTekstKode:"Inngangsvilkar.Adopsjonsvilkaret"})}):e.jsx(G,{standardPanelProps:a,vilkårKoder:D,inngangsvilkårPanelKode:"ADOPSJON",hentInngangsvilkårPanelTekst:t,children:e.jsx(pe,{status:a.status,vilkår:a.vilkårForPanel})})},We={[r.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]:"SRBVilkarForm.VurderSammeBarn"},Xe=(n,a=[])=>a.length>0?n.formatMessage({id:We[a[0].definisjon]}):"";z.__docgenInfo={description:"",methods:[],displayName:"AdopsjonInngangsvilkarInitPanel"};const Ze=[r.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN],N=["FP_VK_1"],Q=()=>{const n=S(),a=g(Ze,N),t=nn(n,a.aksjonspunkterForPanel);return a.aksjonspunkterForPanel.length===0?e.jsx(f,{standardPanelProps:a,vilkårKoder:N,inngangsvilkårPanelKode:"FODSEL",hentInngangsvilkårPanelTekst:t,overstyringApKode:r.OVERSTYR_FODSELSVILKAR,children:e.jsx(v,{vilkår:a.vilkårForPanel,vilkårKoder:N,panelTekstKode:"Inngangsvilkar.Fodselsvilkaret"})}):e.jsx(G,{standardPanelProps:a,vilkårKoder:N,inngangsvilkårPanelKode:"FODSEL",hentInngangsvilkårPanelTekst:t,children:e.jsx(ke,{ytelseTypeKode:"ES",status:a.status,vilkår:a.vilkårForPanel})})},en={[r.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]:"SRBVilkarForm.VurderSammeBarn"},nn=(n,a=[])=>a.length>0?n.formatMessage({id:en[a[0].definisjon]}):"";Q.__docgenInfo={description:"",methods:[],displayName:"FodselInngangsvilkarInitPanel"};const an=[r.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,r.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE],y=["FP_VK_2_F"],W=()=>{const n=g(an,y),{behandling:a}=k.use(j),t=b(a),{data:l,isFetching:o}=p(t.medlemskapOptions(a)),E=n.aksjonspunkterForPanel.some(s=>s.definisjon===r.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR&&s.status!=="AVBR"),u=n.aksjonspunkterForPanel.some(s=>s.definisjon===r.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR&&Ue(s));return e.jsx(f,{standardPanelProps:n,vilkårKoder:y,inngangsvilkårPanelKode:"MEDLEMSKAP",hentInngangsvilkårPanelTekst:"",overstyringApKode:r.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,overrideReadOnly:E,children:e.jsx(e.Fragment,{children:!u&&!o&&e.jsx(v,{vilkår:n.vilkårForPanel,vilkårKoder:y,panelTekstKode:"Inngangsvilkar.Medlemskapsvilkaret",medlemskap:l})})})};W.__docgenInfo={description:"",methods:[],displayName:"MedlemskapForutgaendeInngangsvilkarInitPanel"};const rn=[r.MANUELL_VURDERING_AV_OMSORGSVILKARET,r.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN],U=["FP_VK_5"],X=()=>{const n=S(),a=g(rn,U);return e.jsx(G,{standardPanelProps:a,vilkårKoder:U,inngangsvilkårPanelKode:"OMSORG",hentInngangsvilkårPanelTekst:ln(n,a.aksjonspunkterForPanel),children:e.jsx(ve,{status:a.status})})},tn={[r.MANUELL_VURDERING_AV_OMSORGSVILKARET]:"ErOmsorgVilkaarOppfyltForm.Paragraf",[r.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN]:"SRBVilkarForm.VurderSammeBarn"},ln=(n,a=[])=>a.length>0?n.formatMessage({id:tn[a[0].definisjon]}):"";X.__docgenInfo={description:"",methods:[],displayName:"OmsorgInngangsvilkarInitPanel"};const Z=({faktaPanelMedÅpentApInfo:n})=>e.jsx(ye,{faktaPanelMedÅpentApInfo:n,children:e.jsxs(d,{gap:"space-32",children:[e.jsx(Q,{}),e.jsx(z,{}),e.jsx(X,{}),e.jsx(Le,{}),e.jsx(W,{}),e.jsx(Re,{})]})});Z.__docgenInfo={description:"",methods:[],displayName:"InngangsvilkarEsProsessStegInitPanel",props:{faktaPanelMedÅpentApInfo:{required:!1,tsType:{name:"signature",type:"object",raw:"{ urlCode: string; text: string }",signature:{properties:[{key:"urlCode",value:{name:"string",required:!0}},{key:"text",value:{name:"string",required:!0}}]}},description:""}}};const sn="_days_kq4ls_1",En="_hyphen_kq4ls_5",on="_panel_kq4ls_15",L={days:sn,hyphen:En,panel:on},x=n=>n?"ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt":"ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt",un=(n,a)=>ue(n).subtract(a,"days").format(me),dn=n=>n.fødselTermin?n.fødselTermin.fødselsdato?"ErSoknadsfristVilkaretOppfyltForm.Fodselsdato":"ErSoknadsfristVilkaretOppfyltForm.Termindato":"ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato",mn=n=>n.adopsjon?.omsorgsovertakelseDato||n.fødselTermin?.fødselsdato||n.fødselTermin?.termindato||void 0,Sn=(n,a)=>({erVilkarOk:n[0]?.status==="OPPR"?void 0:a==="OPPFYLT",...V.buildInitialValues(n)}),gn=n=>({erVilkarOk:n.erVilkarOk||!1,kode:r.SOKNADSFRISTVILKARET,...V.transformValues(n)}),ee=({soknad:n,gjeldendeFamiliehendelse:a,status:t})=>{const l=S(),{isSubmittable:o,aksjonspunkterForPanel:E,behandling:u,isReadOnly:s,submitCallback:R,alleKodeverk:re}=Ee(),te=Sn(E,t),{mellomlagretFormData:le,setMellomlagretFormData:se}=oe(),_=xe({defaultValues:le??te}),c=mn(a),h=dn(a),ie=_.watch("erVilkarOk"),A=n.søknadsfrist.dagerOversittetFrist;return e.jsx(we,{formMethods:_,onSubmit:I=>R(gn(I)),setDataOnUnmount:se,children:e.jsxs(d,{gap:"space-16",children:[e.jsxs(d,{gap:"space-4",children:[e.jsx(F,{size:"small",level:"2",children:l.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist"})}),e.jsxs("span",{className:"typo-normal",children:[e.jsx(i,{id:"ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart1"}),e.jsx("span",{className:L.days,children:e.jsx(i,{id:"ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart2",values:{numberOfDays:A}})}),e.jsx(i,{id:"ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart3"}),n.mottattDato&&A&&e.jsx(O,{dateString:un(n.mottattDato,A)})]})]}),e.jsxs(T,{justify:"space-between",children:[e.jsxs(qe.New,{className:L.panel,children:[e.jsx(F,{size:"small",level:"3",children:l.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.Consider"})}),e.jsxs("ul",{className:L.hyphen,children:[e.jsx("li",{children:e.jsx(i,{id:"ErSoknadsfristVilkaretOppfyltForm.Question1"})}),e.jsx("li",{children:e.jsx(i,{id:"ErSoknadsfristVilkaretOppfyltForm.Question2"})}),e.jsx("li",{children:e.jsx(i,{id:"ErSoknadsfristVilkaretOppfyltForm.Question3"})})]})]}),e.jsxs(d,{gap:"space-24",children:[e.jsxs(d,{gap:"space-4",children:[e.jsx(m,{children:l.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.MottattDato"})}),e.jsx("span",{className:"typo-normal",children:n.mottattDato&&e.jsx(O,{dateString:n.mottattDato})})]}),e.jsxs(d,{gap:"space-4",children:[e.jsx(m,{children:l.formatMessage({id:"ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication"})}),e.jsx("span",{className:"typo-normal",children:n.begrunnelseForSenInnsending??"-"})]})]}),e.jsxs(d,{gap:"space-4",children:[h&&e.jsx(m,{children:l.formatMessage({id:h})}),e.jsx("span",{className:"typo-normal",children:c&&e.jsx(O,{dateString:c})})]})]}),e.jsx(Je,{name:"erVilkarOk",control:_.control,validate:[de],isReadOnly:s,children:e.jsxs(T,{gap:"space-16",children:[e.jsx(B,{value:!0,size:"small",children:e.jsx(i,{id:x(!0),values:{b:M}})}),e.jsx(B,{value:!1,size:"small",children:e.jsx(i,{id:x(!1),values:{b:M}})})]})}),s&&ie===!1&&!!u.behandlingsresultat?.avslagsarsak&&e.jsx(Me,{size:"small",children:re.Avslagsårsak.FP_VK_3.find(I=>I.kode===u.behandlingsresultat?.avslagsarsak)?.navn??""}),e.jsx(V,{readOnly:s}),e.jsx(Ye,{isReadOnly:s,isSubmittable:o,isSubmitting:_.formState.isSubmitting,isDirty:_.formState.isDirty})]})})};ee.__docgenInfo={description:`ErSoknadsfristVilkaretOppfyltForm

Setter opp aksjonspunktet for vurdering av søknadsfristvilkåret.`,methods:[],displayName:"ErSoknadsfristVilkaretOppfyltForm",props:{soknad:{required:!0,tsType:{name:"union",raw:"SøknadAdopsjon | SøknadFødsel",elements:[{name:"intersection",raw:`{
  soknadType: 'ST-002';
} & tjenester_behandling_søknad_SoknadAdopsjonDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-002';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-002'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  adopsjonFodelsedatoer?: {
    [key: string]: string;
  };
  antallBarn: number;
  barnetsAnkomstTilNorgeDato?: string;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  omsorgsovertakelseDato?: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
}`,signature:{properties:[{key:"adopsjonFodelsedatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}}]}}]},{name:"intersection",raw:`{
  soknadType: 'ST-001';
} & tjenester_behandling_søknad_SoknadFodselDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-001';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-001'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  antallBarn: number;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  fodselsdatoer?: {
    [key: string]: string;
  };
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
  termindato?: string;
  utstedtdato?: string;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"fodselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}}]}}]}]},description:""},gjeldendeFamiliehendelse:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  adopsjon?: tjenester_familiehendelse_FamiliehendelseRestTjeneste_AdopsjonFamilieHendelseDto;
  fødselTermin?: tjenester_familiehendelse_FamiliehendelseRestTjeneste_FødselTerminFamilieHendelseDto;
}`,signature:{properties:[{key:"adopsjon",value:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"fødselTermin",value:{name:"signature",type:"object",raw:`{
  fødselsdato?: string;
  termindato?: string;
}`,signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}}]},required:!1}}]}},description:""},status:{required:!0,tsType:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}]},description:""}}};const _n={"ErSoknadsfristVilkaretOppfyltForm.Soknadsfrist":"Søknadsfrist","ErSoknadsfristVilkaretOppfyltForm.Consider":"Vurder følgende","ErSoknadsfristVilkaretOppfyltForm.Question1":"Har det vært fristavbrytende kontakt?","ErSoknadsfristVilkaretOppfyltForm.Question2":"Har Nav gitt misvisende opplysninger?","ErSoknadsfristVilkaretOppfyltForm.Question3":"Har søker åpenbart ikke vært i stand til å sette frem krav?","ErSoknadsfristVilkaretOppfyltForm.MottattDato":"Dato for mottatt søknad","ErSoknadsfristVilkaretOppfyltForm.Omsorgsovertakelsesdato":"Dato for omsorgsovertakelse","ErSoknadsfristVilkaretOppfyltForm.Fodselsdato":"Fødselsdato","ErSoknadsfristVilkaretOppfyltForm.Termindato":"Termindato","ErSoknadsfristVilkaretOppfyltForm.ExplanationFromApplication":"Begrunnelse fra søknaden","ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart1":"Søknaden ble mottatt ","ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart2":"{numberOfDays} dager ","ErSoknadsfristVilkaretOppfyltForm.ApplicationReceivedPart3":"etter søknadsfristen ","ErSoknadsfristVilkaretOppfyltForm.SokersOpplysningsplikt":"Søkers opplysningsplikt","ErSoknadsfristVilkaretOppfyltForm.VilkarOppfylt":"Vilkåret er oppfylt","ErSoknadsfristVilkaretOppfyltForm.VilkarIkkeOppfylt":"Vilkåret er <b>ikke</b> oppfylt","ShowVilkarStatus.Check":"Informasjonen er utfylt"},Tn=J(_n),ne=({soknad:n,familiehendelse:a,status:t})=>e.jsx(w,{value:Tn,children:e.jsx(ee,{soknad:n,gjeldendeFamiliehendelse:a,status:t})});ne.__docgenInfo={description:"",methods:[],displayName:"SoknadsfristVilkarProsessIndex",props:{soknad:{required:!0,tsType:{name:"union",raw:"SøknadAdopsjon | SøknadFødsel",elements:[{name:"intersection",raw:`{
  soknadType: 'ST-002';
} & tjenester_behandling_søknad_SoknadAdopsjonDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-002';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-002'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  adopsjonFodelsedatoer?: {
    [key: string]: string;
  };
  antallBarn: number;
  barnetsAnkomstTilNorgeDato?: string;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  omsorgsovertakelseDato?: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
}`,signature:{properties:[{key:"adopsjonFodelsedatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"barnetsAnkomstTilNorgeDato",value:{name:"string",required:!1}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!1}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}}]}}]},{name:"intersection",raw:`{
  soknadType: 'ST-001';
} & tjenester_behandling_søknad_SoknadFodselDto`,elements:[{name:"signature",type:"object",raw:`{
  soknadType: 'ST-001';
}`,signature:{properties:[{key:"soknadType",value:{name:"literal",value:"'ST-001'",required:!0}}]}},{name:"signature",type:"object",raw:`{
  antallBarn: number;
  begrunnelseForSenInnsending?: string;
  farSokerType?: foreldrepenger_behandlingslager_behandling_søknad_FarSøkerType;
  fodselsdatoer?: {
    [key: string]: string;
  };
  manglendeVedlegg: Array<tjenester_behandling_søknad_ManglendeVedleggDto>;
  mottattDato: string;
  oppgittFordeling?: tjenester_behandling_søknad_OppgittFordelingDto;
  oppgittTilknytning: tjenester_behandling_søknad_OppgittTilknytningDto;
  soknadType: tjenester_behandling_søknad_SøknadType;
  søknadsfrist: tjenester_behandling_søknad_SøknadsfristDto;
  termindato?: string;
  utstedtdato?: string;
}`,signature:{properties:[{key:"antallBarn",value:{name:"number",required:!0}},{key:"begrunnelseForSenInnsending",value:{name:"string",required:!1}},{key:"farSokerType",value:{name:"union",raw:`| 'ADOPTERER_ALENE'
| 'ANDRE_FORELDER_DØD'
| 'OVERTATT_OMSORG'
| 'OVERTATT_OMSORG_F'
| 'ANDRE_FORELD_DØD_F'
| '-'`,elements:[{name:"literal",value:"'ADOPTERER_ALENE'"},{name:"literal",value:"'ANDRE_FORELDER_DØD'"},{name:"literal",value:"'OVERTATT_OMSORG'"},{name:"literal",value:"'OVERTATT_OMSORG_F'"},{name:"literal",value:"'ANDRE_FORELD_DØD_F'"},{name:"literal",value:"'-'"}],required:!1}},{key:"fodselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!1}},{key:"manglendeVedlegg",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  arbeidsgiverReferanse?: string;
  brukerHarSagtAtIkkeKommer: boolean;
  dokumentTittel: string;
  dokumentType: foreldrepenger_behandlingslager_behandling_DokumentTypeId;
}`,signature:{properties:[{key:"arbeidsgiverReferanse",value:{name:"string",required:!1}},{key:"brukerHarSagtAtIkkeKommer",value:{name:"boolean",required:!0}},{key:"dokumentTittel",value:{name:"string",required:!0}},{key:"dokumentType",value:{name:"union",raw:`| 'SØKNAD_SVANGERSKAPSPENGER'
| 'SØKNAD_FORELDREPENGER_ADOPSJON'
| 'SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'SØKNAD_FORELDREPENGER_FØDSEL'
| 'FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'FORELDREPENGER_ENDRING_SØKNAD'
| 'INNTEKTSMELDING'
| 'KLAGE_DOKUMENT'
| 'I500027'
| 'I000114'
| 'I000119'
| 'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'
| 'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'
| 'BEKREFTELSE_VENTET_FØDSELSDATO'
| 'FØDSELSATTEST'
| 'I000141'
| 'LEGEERKLÆRING'
| 'DOK_INNLEGGELSE'
| 'BESKRIVELSE_FUNKSJONSNEDSETTELSE'
| 'I000120'
| 'I000121'
| 'I000122'
| 'I000123'
| 'I000124'
| 'DOK_MORS_UTDANNING_ARBEID_SYKDOM'
| 'DOK_FERIE'
| 'DOK_ARBEIDSFORHOLD'
| 'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'
| 'BEKREFTELSE_FRA_STUDIESTED'
| 'BEKREFTELSE_FRA_ARBEIDSGIVER'
| 'I000112'
| 'DOK_HV'
| 'DOK_NAV_TILTAK'
| 'I000130'
| 'I000131'
| 'I000132'
| 'I000133'
| 'I000109'
| 'I000142'
| 'INNTEKTSOPPLYSNING_SELVSTENDIG'
| 'DOK_INNTEKT'
| 'INNTEKTSOPPLYSNINGER'
| 'RESULTATREGNSKAP'
| 'DOK_MILITÆR_SIVIL_TJENESTE'
| 'DOK_ETTERLØNN'
| 'I000146'
| 'I000052'
| 'KOPI_SKATTEMELDING'
| 'I000140'
| 'BEKREFTELSE_OPPHOLDSTILLATELSE'
| 'I000143'
| 'OPPHOLDSOPPLYSNINGER'
| 'I000110'
| 'I000111'
| 'I000118'
| 'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'
| 'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'
| 'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'
| 'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'
| 'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'
| 'BREV_UTLAND'
| 'ANNET_SKJEMA_UTLAND_IKKE_NAV'
| 'BREV'
| 'I000145'
| 'I000144'
| 'ANNET_SKJEMA_IKKE_NAV'
| 'ANNET'
| '-'`,elements:[{name:"literal",value:"'SØKNAD_SVANGERSKAPSPENGER'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'INNTEKTSMELDING'"},{name:"literal",value:"'KLAGE_DOKUMENT'"},{name:"literal",value:"'I500027'"},{name:"literal",value:"'I000114'"},{name:"literal",value:"'I000119'"},{name:"literal",value:"'DOKUMENTASJON_AV_TERMIN_ELLER_FØDSEL'"},{name:"literal",value:"'DOKUMENTASJON_AV_OMSORGSOVERTAKELSE'"},{name:"literal",value:"'BEKREFTELSE_VENTET_FØDSELSDATO'"},{name:"literal",value:"'FØDSELSATTEST'"},{name:"literal",value:"'I000141'"},{name:"literal",value:"'LEGEERKLÆRING'"},{name:"literal",value:"'DOK_INNLEGGELSE'"},{name:"literal",value:"'BESKRIVELSE_FUNKSJONSNEDSETTELSE'"},{name:"literal",value:"'I000120'"},{name:"literal",value:"'I000121'"},{name:"literal",value:"'I000122'"},{name:"literal",value:"'I000123'"},{name:"literal",value:"'I000124'"},{name:"literal",value:"'DOK_MORS_UTDANNING_ARBEID_SYKDOM'"},{name:"literal",value:"'DOK_FERIE'"},{name:"literal",value:"'DOK_ARBEIDSFORHOLD'"},{name:"literal",value:"'BEKREFTELSE_DELTAR_KVALIFISERINGSPROGRAM'"},{name:"literal",value:"'BEKREFTELSE_FRA_STUDIESTED'"},{name:"literal",value:"'BEKREFTELSE_FRA_ARBEIDSGIVER'"},{name:"literal",value:"'I000112'"},{name:"literal",value:"'DOK_HV'"},{name:"literal",value:"'DOK_NAV_TILTAK'"},{name:"literal",value:"'I000130'"},{name:"literal",value:"'I000131'"},{name:"literal",value:"'I000132'"},{name:"literal",value:"'I000133'"},{name:"literal",value:"'I000109'"},{name:"literal",value:"'I000142'"},{name:"literal",value:"'INNTEKTSOPPLYSNING_SELVSTENDIG'"},{name:"literal",value:"'DOK_INNTEKT'"},{name:"literal",value:"'INNTEKTSOPPLYSNINGER'"},{name:"literal",value:"'RESULTATREGNSKAP'"},{name:"literal",value:"'DOK_MILITÆR_SIVIL_TJENESTE'"},{name:"literal",value:"'DOK_ETTERLØNN'"},{name:"literal",value:"'I000146'"},{name:"literal",value:"'I000052'"},{name:"literal",value:"'KOPI_SKATTEMELDING'"},{name:"literal",value:"'I000140'"},{name:"literal",value:"'BEKREFTELSE_OPPHOLDSTILLATELSE'"},{name:"literal",value:"'I000143'"},{name:"literal",value:"'OPPHOLDSOPPLYSNINGER'"},{name:"literal",value:"'I000110'"},{name:"literal",value:"'I000111'"},{name:"literal",value:"'I000118'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_SVANGERSKAPSPENGER_SELVSTENDIG'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_ENGANGSSTØNAD_ADOPSJON'"},{name:"literal",value:"'ETTERSENDT_SØKNAD_FORELDREPENGER_FØDSEL'"},{name:"literal",value:"'ETTERSENDT_FLEKSIBELT_UTTAK_FORELDREPENGER'"},{name:"literal",value:"'ETTERSENDT_FORELDREPENGER_ENDRING_SØKNAD'"},{name:"literal",value:"'BREV_UTLAND'"},{name:"literal",value:"'ANNET_SKJEMA_UTLAND_IKKE_NAV'"},{name:"literal",value:"'BREV'"},{name:"literal",value:"'I000145'"},{name:"literal",value:"'I000144'"},{name:"literal",value:"'ANNET_SKJEMA_IKKE_NAV'"},{name:"literal",value:"'ANNET'"},{name:"literal",value:"'-'"}],required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_ManglendeVedleggDto>",required:!0}},{key:"mottattDato",value:{name:"string",required:!0}},{key:"oppgittFordeling",value:{name:"signature",type:"object",raw:`{
  dekningsgrader: tjenester_behandling_søknad_OppgittFordelingDto_DekningsgradInfoDto;
  startDatoForPermisjon?: string;
}`,signature:{properties:[{key:"dekningsgrader",value:{name:"signature",type:"object",raw:`{
  annenPart: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
  avklartDekningsgrad?: number;
  søker: tjenester_behandling_søknad_OppgittFordelingDto_OppgittDekningsgradDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}},{key:"avklartDekningsgrad",value:{name:"number",required:!1}},{key:"søker",value:{name:"signature",type:"object",raw:`{
  dekningsgrad?: number;
  søknadsdato: string;
}`,signature:{properties:[{key:"dekningsgrad",value:{name:"number",required:!1}},{key:"søknadsdato",value:{name:"string",required:!0}}]},required:!0}}]},required:!0}},{key:"startDatoForPermisjon",value:{name:"string",required:!1}}]},required:!1}},{key:"oppgittTilknytning",value:{name:"signature",type:"object",raw:`{
  oppholdNestePeriode: boolean;
  oppholdNorgeNa: boolean;
  oppholdSistePeriode: boolean;
  utlandsoppholdEtter: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
  utlandsoppholdFor: Array<tjenester_behandling_søknad_UtlandsoppholdDto>;
}`,signature:{properties:[{key:"oppholdNestePeriode",value:{name:"boolean",required:!0}},{key:"oppholdNorgeNa",value:{name:"boolean",required:!0}},{key:"oppholdSistePeriode",value:{name:"boolean",required:!0}},{key:"utlandsoppholdEtter",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}},{key:"utlandsoppholdFor",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  fom: string;
  landNavn: string;
  tom: string;
}`,signature:{properties:[{key:"fom",value:{name:"string",required:!0}},{key:"landNavn",value:{name:"string",required:!0}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_søknad_UtlandsoppholdDto>",required:!0}}]},required:!0}},{key:"soknadType",value:{name:"union",raw:"'ST-001' | 'ST-002'",elements:[{name:"literal",value:"'ST-001'"},{name:"literal",value:"'ST-002'"}],required:!0}},{key:"søknadsfrist",value:{name:"signature",type:"object",raw:`{
  dagerOversittetFrist?: number;
  mottattDato?: string;
  søknadsperiodeSlutt?: string;
  søknadsperiodeStart?: string;
  utledetSøknadsfrist?: string;
}`,signature:{properties:[{key:"dagerOversittetFrist",value:{name:"number",required:!1}},{key:"mottattDato",value:{name:"string",required:!1}},{key:"søknadsperiodeSlutt",value:{name:"string",required:!1}},{key:"søknadsperiodeStart",value:{name:"string",required:!1}},{key:"utledetSøknadsfrist",value:{name:"string",required:!1}}]},required:!0}},{key:"termindato",value:{name:"string",required:!1}},{key:"utstedtdato",value:{name:"string",required:!1}}]}}]}]},description:""},familiehendelse:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  adopsjon?: tjenester_familiehendelse_FamiliehendelseRestTjeneste_AdopsjonFamilieHendelseDto;
  fødselTermin?: tjenester_familiehendelse_FamiliehendelseRestTjeneste_FødselTerminFamilieHendelseDto;
}`,signature:{properties:[{key:"adopsjon",value:{name:"signature",type:"object",raw:`{
  ankomstNorge?: string;
  antallBarn: number;
  ektefellesBarn: boolean;
  foreldreansvarDato: string;
  fødselsdatoer: {
    [key: string]: string;
  };
  mannAdoptererAlene: boolean;
  omsorgsovertakelseDato: string;
  omsorgsovertakelseVilkårType: foreldrepenger_behandlingslager_behandling_familiehendelse_OmsorgsovertakelseVilkårType;
}`,signature:{properties:[{key:"ankomstNorge",value:{name:"string",required:!1}},{key:"antallBarn",value:{name:"number",required:!0}},{key:"ektefellesBarn",value:{name:"boolean",required:!0}},{key:"foreldreansvarDato",value:{name:"string",required:!0}},{key:"fødselsdatoer",value:{name:"signature",type:"object",raw:`{
  [key: string]: string;
}`,signature:{properties:[{key:{name:"string"},value:{name:"string",required:!0}}]},required:!0}},{key:"mannAdoptererAlene",value:{name:"boolean",required:!0}},{key:"omsorgsovertakelseDato",value:{name:"string",required:!0}},{key:"omsorgsovertakelseVilkårType",value:{name:"union",raw:`| 'FP_VK_5'
| 'FP_VK_8'
| 'FP_VK_33'
| '-'`,elements:[{name:"literal",value:"'FP_VK_5'"},{name:"literal",value:"'FP_VK_8'"},{name:"literal",value:"'FP_VK_33'"},{name:"literal",value:"'-'"}],required:!0}}]},required:!1}},{key:"fødselTermin",value:{name:"signature",type:"object",raw:`{
  fødselsdato?: string;
  termindato?: string;
}`,signature:{properties:[{key:"fødselsdato",value:{name:"string",required:!1}},{key:"termindato",value:{name:"string",required:!1}}]},required:!1}}]}},description:""},status:{required:!0,tsType:{name:"union",raw:`| 'OPPFYLT'
| 'IKKE_OPPFYLT'
| 'IKKE_VURDERT'
| '-'`,elements:[{name:"literal",value:"'OPPFYLT'"},{name:"literal",value:"'IKKE_OPPFYLT'"},{name:"literal",value:"'IKKE_VURDERT'"},{name:"literal",value:"'-'"}]},description:""}}};const Dn=[r.SOKNADSFRISTVILKARET,r.OVERSTYR_SOKNADSFRISTVILKAR],P=["FP_VK_3"],ae=()=>{const n=S(),{behandling:a,rettigheter:t}=k.use(j),l=g(Dn,P),o=b(a),E=l.aksjonspunkterForPanel.some(R=>R.definisjon===r.SOKNADSFRISTVILKARET),{data:u}=p(o.søknadOptions(a)),{data:s}=p(o.familiehendelseOptions(a,E));return e.jsx(Se,{overstyringApKode:r.OVERSTYR_SOKNADSFRISTVILKAR,kanOverstyreAccess:t.kanOverstyreAccess,overrideReadOnly:l.isReadOnly,children:e.jsx(De,{standardPanelProps:l,prosessPanelKode:Y.SOEKNADSFRIST,prosessPanelMenyTekst:n.formatMessage({id:"Behandlingspunkt.Soknadsfristvilkaret"}),skalPanelVisesIMeny:Pe(l.aksjonspunkterForPanel,P,l.vilkårForPanel),children:e.jsxs(e.Fragment,{children:[!E&&e.jsx(v,{vilkår:l.vilkårForPanel,vilkårKoder:P,panelTekstKode:"Behandlingspunkt.Soknadsfristvilkaret"}),E&&u&&s&&e.jsx(ne,{soknad:u,familiehendelse:s,status:l.status})]})})})};ae.__docgenInfo={description:"",methods:[],displayName:"SoknadsfristEsProsessStegInitPanel"};const Nn=({valgtProsessSteg:n,valgtFaktaSteg:a,arbeidsgivere:t,personoversikt:l})=>{const[o,E]=k.useState(),u={};return e.jsxs(e.Fragment,{children:[e.jsxs(Ne,{valgtProsessSteg:n,valgtFaktaSteg:a,children:[e.jsx(Ae,{}),e.jsx(Fe,{arbeidsgiverOpplysningerPerId:t}),e.jsx(Z,{faktaPanelMedÅpentApInfo:o}),e.jsx(ae,{}),e.jsx(C,{}),e.jsx(fe,{arbeidsgiverOpplysningerPerId:u}),e.jsx(Ge,{erEngangsstønad:!0})]}),e.jsxs(ge,{valgtFaktaSteg:a,valgtProsessSteg:n,setFaktaPanelMedÅpentApInfo:E,children:[e.jsx(be,{}),e.jsx(je,{}),e.jsx(_e,{}),e.jsx(Ie,{personoversikt:l}),e.jsx(Oe,{}),e.jsx(Ke,{}),e.jsx(Ve,{})]})]})};Nn.__docgenInfo={description:"",methods:[],displayName:"EngangsstonadPaneler",props:{valgtProsessSteg:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},valgtFaktaSteg:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},arbeidsgivere:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:`| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
| (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false })`,elements:[{name:"unknown"},{name:"unknown"}]}],raw:"Record<string, ArbeidsgiverOpplysninger>"},description:""},personoversikt:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  annenPart?: tjenester_behandling_personopplysning_PersonopplysningBasisDto;
  barn: Array<tjenester_behandling_personopplysning_PersonopplysningBasisDto>;
  bruker: tjenester_behandling_personopplysning_PersonopplysningBasisDto;
}`,signature:{properties:[{key:"annenPart",value:{name:"signature",type:"object",raw:`{
  adresser: Array<tjenester_behandling_personopplysning_PersonadresseDto>;
  aktoerId?: string;
  diskresjonskode?: foreldrepenger_behandlingslager_behandling_personopplysning_Diskresjonskode;
  dødsdato?: string;
  fnr?: string;
  fødselsdato: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn?: string;
  sivilstand: foreldrepenger_behandlingslager_behandling_personopplysning_SivilstandType;
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: foreldrepenger_behandlingslager_aktør_AdresseType;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  fom: string;
  land?: string;
  postNummer?: string;
  poststed?: string;
  tom: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"land",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_personopplysning_PersonadresseDto>",required:!0}},{key:"aktoerId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"union",raw:"'UDEF' | 'SPSF' | 'SPFO'",elements:[{name:"literal",value:"'UDEF'"},{name:"literal",value:"'SPSF'"},{name:"literal",value:"'SPFO'"}],required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"sivilstand",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}}]},required:!0}},{key:"barn",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresser: Array<tjenester_behandling_personopplysning_PersonadresseDto>;
  aktoerId?: string;
  diskresjonskode?: foreldrepenger_behandlingslager_behandling_personopplysning_Diskresjonskode;
  dødsdato?: string;
  fnr?: string;
  fødselsdato: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn?: string;
  sivilstand: foreldrepenger_behandlingslager_behandling_personopplysning_SivilstandType;
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: foreldrepenger_behandlingslager_aktør_AdresseType;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  fom: string;
  land?: string;
  postNummer?: string;
  poststed?: string;
  tom: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"land",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_personopplysning_PersonadresseDto>",required:!0}},{key:"aktoerId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"union",raw:"'UDEF' | 'SPSF' | 'SPFO'",elements:[{name:"literal",value:"'UDEF'"},{name:"literal",value:"'SPSF'"},{name:"literal",value:"'SPFO'"}],required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"sivilstand",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}}]},required:!0}],raw:"Array<tjenester_behandling_personopplysning_PersonopplysningBasisDto>",required:!0}},{key:"bruker",value:{name:"signature",type:"object",raw:`{
  adresser: Array<tjenester_behandling_personopplysning_PersonadresseDto>;
  aktoerId?: string;
  diskresjonskode?: foreldrepenger_behandlingslager_behandling_personopplysning_Diskresjonskode;
  dødsdato?: string;
  fnr?: string;
  fødselsdato: string;
  kjønn: foreldrepenger_behandlingslager_aktør_NavBrukerKjønn;
  navn?: string;
  sivilstand: foreldrepenger_behandlingslager_behandling_personopplysning_SivilstandType;
}`,signature:{properties:[{key:"adresser",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  adresseType?: foreldrepenger_behandlingslager_aktør_AdresseType;
  adresselinje1?: string;
  adresselinje2?: string;
  adresselinje3?: string;
  fom: string;
  land?: string;
  postNummer?: string;
  poststed?: string;
  tom: string;
}`,signature:{properties:[{key:"adresseType",value:{name:"union",raw:`| 'BOSTEDSADRESSE'
| 'BOSTEDSADRESSE_UTLAND'
| 'POSTADRESSE'
| 'POSTADRESSE_UTLAND'
| 'MIDLERTIDIG_POSTADRESSE_NORGE'
| 'MIDLERTIDIG_POSTADRESSE_UTLAND'
| 'UKJENT_ADRESSE'`,elements:[{name:"literal",value:"'BOSTEDSADRESSE'"},{name:"literal",value:"'BOSTEDSADRESSE_UTLAND'"},{name:"literal",value:"'POSTADRESSE'"},{name:"literal",value:"'POSTADRESSE_UTLAND'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_NORGE'"},{name:"literal",value:"'MIDLERTIDIG_POSTADRESSE_UTLAND'"},{name:"literal",value:"'UKJENT_ADRESSE'"}],required:!1}},{key:"adresselinje1",value:{name:"string",required:!1}},{key:"adresselinje2",value:{name:"string",required:!1}},{key:"adresselinje3",value:{name:"string",required:!1}},{key:"fom",value:{name:"string",required:!0}},{key:"land",value:{name:"string",required:!1}},{key:"postNummer",value:{name:"string",required:!1}},{key:"poststed",value:{name:"string",required:!1}},{key:"tom",value:{name:"string",required:!0}}]}}],raw:"Array<tjenester_behandling_personopplysning_PersonadresseDto>",required:!0}},{key:"aktoerId",value:{name:"string",required:!1}},{key:"diskresjonskode",value:{name:"union",raw:"'UDEF' | 'SPSF' | 'SPFO'",elements:[{name:"literal",value:"'UDEF'"},{name:"literal",value:"'SPSF'"},{name:"literal",value:"'SPFO'"}],required:!1}},{key:"dødsdato",value:{name:"string",required:!1}},{key:"fnr",value:{name:"string",required:!1}},{key:"fødselsdato",value:{name:"string",required:!0}},{key:"kjønn",value:{name:"union",raw:"'K' | 'M' | '-'",elements:[{name:"literal",value:"'K'"},{name:"literal",value:"'M'"},{name:"literal",value:"'-'"}],required:!0}},{key:"navn",value:{name:"string",required:!1}},{key:"sivilstand",value:{name:"union",raw:`| 'ENKE'
| 'GIFT'
| 'GJPA'
| 'GLAD'
| 'NULL'
| 'REPA'
| 'SAMB'
| 'SEPA'
| 'SEPR'
| 'SKIL'
| 'SKPA'
| 'UGIF'`,elements:[{name:"literal",value:"'ENKE'"},{name:"literal",value:"'GIFT'"},{name:"literal",value:"'GJPA'"},{name:"literal",value:"'GLAD'"},{name:"literal",value:"'NULL'"},{name:"literal",value:"'REPA'"},{name:"literal",value:"'SAMB'"},{name:"literal",value:"'SEPA'"},{name:"literal",value:"'SEPR'"},{name:"literal",value:"'SKIL'"},{name:"literal",value:"'SKPA'"},{name:"literal",value:"'UGIF'"}],required:!0}}]},required:!0}}]}},description:""}}};export{Nn as default};
