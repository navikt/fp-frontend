import React from 'react';

import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import BeregningsgrunnlagProsessIndex from '@fpsak-frontend/prosess-beregningsgrunnlag';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegDef, ProsessStegPanelDef } from '@fpsak-frontend/behandling-felles';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';

const aksjonspunktKoder = [
  aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  aksjonspunktCodes.VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  aksjonspunktCodes.FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  aksjonspunktCodes.FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
  aksjonspunktCodes.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
  aksjonspunktCodes.VURDER_DEKNINGSGRAD,
];

const getStatusForBeregningsgrunnlag = (bg, aksjonspunkter, vilkarene) => {
  if (!bg) {
    return vilkarUtfallType.IKKE_VURDERT;
  }
  const bgVilkar = vilkarene && vilkarene.find((vilkar) => vilkar && vilkar.vilkarType.kode === vilkarType.BEREGNINGSGRUNNLAGVILKARET);
  if (bgVilkar && bgVilkar.vilkarStatus.kode !== vilkarUtfallType.IKKE_VURDERT) {
    return bgVilkar.vilkarStatus.kode;
  }
  const førstePeriode = bg.beregningsgrunnlagPeriode ? bg.beregningsgrunnlagPeriode[0] : undefined;
  const andelerIFørstePeriode = førstePeriode && førstePeriode.beregningsgrunnlagPrStatusOgAndel ? førstePeriode.beregningsgrunnlagPrStatusOgAndel : [];
  const finnesAndelMedBeregnet = andelerIFørstePeriode.some((andel) => andel.beregnetPrAar || andel.beregnetPrAar === 0);
  const finnesAksjonspunkt = aksjonspunkter && aksjonspunkter.some((ap) => aksjonspunktKoder.includes(ap.definisjon.kode)
    && (ap.status.kode === aksjonspunktStatus.OPPRETTET || ap.status.kode === aksjonspunktStatus.UTFORT));
  if (finnesAksjonspunkt || finnesAndelMedBeregnet) {
    return vilkarUtfallType.OPPFYLT;
  }
  return vilkarUtfallType.IKKE_VURDERT;
};

class PanelDef extends ProsessStegPanelDef {
  getKomponent = (props) => <BeregningsgrunnlagProsessIndex {...props} />

  getAksjonspunktKoder = () => aksjonspunktKoder

  getVilkarKoder = () => [
    vilkarType.BEREGNINGSGRUNNLAGVILKARET,
  ]

  getOverstyrtStatus = ({ beregningsgrunnlag, aksjonspunkter, vilkar }) => getStatusForBeregningsgrunnlag(beregningsgrunnlag, aksjonspunkter, vilkar)

  getOverstyrVisningAvKomponent = () => true

  getData = ({ fagsak, beregningsgrunnlag }) => ({
    fagsak,
    beregningsgrunnlag,
  })
}

class BeregningsgrunnlagProsessStegPanelDef extends ProsessStegDef {
  getUrlKode = () => prosessStegCodes.BEREGNINGSGRUNNLAG

  getTekstKode = () => 'Behandlingspunkt.Beregning'

  getPanelDefinisjoner = () => [new PanelDef()]
}

export default BeregningsgrunnlagProsessStegPanelDef;
