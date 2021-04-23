import React, { FunctionComponent } from 'react';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';

export const transformValuesForATFLISammeOrg = (inntektVerdier, faktaOmBeregning, fastsatteAndelsnr) => {
  const tilfeller = faktaOmBeregning.faktaOmBeregningTilfeller ? faktaOmBeregning.faktaOmBeregningTilfeller : [];
  if (tilfeller.map(({ kode }) => kode).includes(faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON)
  && inntektVerdier) {
    const andelsliste = inntektVerdier
      .filter((field) => !fastsatteAndelsnr.includes(field.andelsnr))
      .filter((field) => faktaOmBeregning.arbeidstakerOgFrilanserISammeOrganisasjonListe.map(({ andelsnr }) => andelsnr).includes(field.andelsnr))
      .map((field) => ({
        andelsnr: field.andelsnr,
        arbeidsinntekt: field.fastsattBelop,
      }));

    if (faktaOmBeregning.frilansAndel && !fastsatteAndelsnr.includes(faktaOmBeregning.frilansAndel.andelsnr)) {
      const frilansVerdi = inntektVerdier.find((verdi) => verdi.andelsnr === faktaOmBeregning.frilansAndel.andelsnr);
      andelsliste.push({
        andelsnr: faktaOmBeregning.frilansAndel.andelsnr,
        arbeidsinntekt: frilansVerdi.fastsattBelop,
      });
    }
    andelsliste.forEach((andel) => fastsatteAndelsnr.push(andel.andelsnr));
    if (andelsliste.length > 0) {
      return {
        faktaOmBeregningTilfeller: [faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON],
        vurderATogFLiSammeOrganisasjon: { vurderATogFLiSammeOrganisasjonAndelListe: andelsliste },
      };
    }
  }
  return { faktaOmBeregningTilfeller: [] };
};

const harRiktigTilfelle = (beregningsgrunnlag) => (
  beregningsgrunnlag.faktaOmBeregning.faktaOmBeregningTilfeller ? beregningsgrunnlag.faktaOmBeregning.faktaOmBeregningTilfeller
    .map(({ kode }) => kode).includes(faktaOmBeregningTilfelle.VURDER_AT_OG_FL_I_SAMME_ORGANISASJON) : false
);

type OwnProps = {
    beregningsgrunnlag: Beregningsgrunnlag;
    manglerInntektsmelding: boolean;
};

export const ATFLSammeOrgTekst: FunctionComponent<OwnProps> = ({ beregningsgrunnlag, manglerInntektsmelding }) => {
  if (!harRiktigTilfelle(beregningsgrunnlag)) {
    return null;
  }
  if (manglerInntektsmelding) {
    return (
      <Normaltekst>
        <FormattedMessage id="BeregningInfoPanel.VurderOgFastsettATFL.ATFLSammeOrgUtenIM" />
      </Normaltekst>
    );
  }
  return (
    <Normaltekst>
      <FormattedMessage id="BeregningInfoPanel.VurderOgFastsettATFL.ATFLSammeOrg" />
    </Normaltekst>
  );
};
