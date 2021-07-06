import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import faktaOmBeregningTilfelle from '@fpsak-frontend/kodeverk/src/faktaOmBeregningTilfelle';
import { formatCurrencyNoKr, removeSpacesFromNumber } from '@fpsak-frontend/utils';
import {
  AndelForFaktaOmBeregning,
  ArbeidsgiverOpplysningerPerId,
  AlleKodeverk,
  KunYtelse,
} from '@fpsak-frontend/types';
import { FaktaBeregningTransformedValues } from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/BeregningFaktaAP';
import { IntlShape } from 'react-intl';
import { BrukersAndelFieldArrayImpl } from './BrukersAndelFieldArray';
import KunYtelseBesteberegningPanel from './KunYtelseBesteberegningPanel';
import KunYtelseUtenBesteberegningPanel from './KunYtelseUtenBesteberegningPanel';
import { setGenerellAndelsinfo } from '../BgFaktaUtils';
import { FaktaOmBeregningAksjonspunktValues, KunYtelseValues } from '../../../typer/FaktaBeregningTypes';

export const brukersAndelFieldArrayName = 'brukersAndelBG';

type OwnProps = {
    readOnly: boolean;
    isAksjonspunktClosed: boolean;
    skalSjekkeBesteberegning: boolean;
    skalViseInntektstabell?: boolean;
    alleKodeverk: AlleKodeverk;
};

interface StaticFunctions {
  buildInitialValues: (kunYtelse: KunYtelse,
                       faktaOmBeregningAndeler: AndelForFaktaOmBeregning[],
                       arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
                       alleKodeverk: AlleKodeverk) => KunYtelseValues;
  summerFordeling: (values: any) => number;
  transformValues: (values: FaktaOmBeregningAksjonspunktValues, kunYtelse: KunYtelse) => FaktaBeregningTransformedValues;
  validate: (values: FaktaOmBeregningAksjonspunktValues, aktivertePaneler: string[], kunYtelse: KunYtelse, intl: IntlShape) => any;
}

/**
 * KunYtelsePanel
 *
 * Presentasjonskomponent. Behandling av aksjonspunktet for fastsetting av bg for kun ytelse.
 */

const KunYtelsePanel: FunctionComponent<OwnProps> & StaticFunctions = ({
  readOnly,
  skalSjekkeBesteberegning,
  isAksjonspunktClosed,
  skalViseInntektstabell,
  alleKodeverk,
}) => (
  <div>
    {skalSjekkeBesteberegning
    && (
      <KunYtelseBesteberegningPanel
        readOnly={readOnly}
        isAksjonspunktClosed={isAksjonspunktClosed}
        brukersAndelFieldArrayName={brukersAndelFieldArrayName}
        skalViseInntektstabell={skalViseInntektstabell}
        alleKodeverk={alleKodeverk}
      />
    )}
    {!skalSjekkeBesteberegning && skalViseInntektstabell
    && (
      <KunYtelseUtenBesteberegningPanel
        readOnly={readOnly}
        brukersAndelFieldArrayName={brukersAndelFieldArrayName}
        isAksjonspunktClosed={isAksjonspunktClosed}
        alleKodeverk={alleKodeverk}
      />
    )}
  </div>
);

KunYtelsePanel.defaultProps = {
  skalViseInntektstabell: true,
};

KunYtelsePanel.buildInitialValues = (kunYtelse,
  faktaOmBeregningAndeler,
  arbeidsgiverOpplysningerPerId,
  alleKodeverk): KunYtelseValues => {
  if (!kunYtelse || !kunYtelse.andeler || kunYtelse.andeler.length === 0) {
    return {};
  }
  const kunYtelseValues = kunYtelse.andeler.map((andel) => {
    const andelMedInfo = faktaOmBeregningAndeler.find((faktaAndel) => faktaAndel.andelsnr === andel.andelsnr);
    return ({
      ...setGenerellAndelsinfo(andelMedInfo, arbeidsgiverOpplysningerPerId, alleKodeverk),
      fastsattBelop: andel.fastsattBelopPrMnd || andel.fastsattBelopPrMnd === 0
        ? formatCurrencyNoKr(andel.fastsattBelopPrMnd) : '',
    });
  });
  const initialValues = {
    [brukersAndelFieldArrayName]: kunYtelseValues,
  };
  if (kunYtelse.fodendeKvinneMedDP) {
    return {
      ...KunYtelseBesteberegningPanel.buildInitialValues(kunYtelse),
      ...initialValues,
    };
  }
  return initialValues;
};

KunYtelsePanel.summerFordeling = (values) => (values[brukersAndelFieldArrayName]
  .map(({ fastsattBelop }) => (fastsattBelop ? removeSpacesFromNumber(fastsattBelop) : 0))
  .reduce((sum, fastsattBelop) => sum + fastsattBelop, 0));

KunYtelsePanel.transformValues = (values: FaktaOmBeregningAksjonspunktValues, kunYtelse: KunYtelse): FaktaBeregningTransformedValues => ({
  kunYtelseFordeling: {
    andeler: values[brukersAndelFieldArrayName].map((fieldValue) => ({
      andelsnr: fieldValue.andelsnr,
      fastsattBeløp: removeSpacesFromNumber(fieldValue.fastsattBelop),
      inntektskategori: fieldValue.inntektskategori,
      nyAndel: fieldValue.nyAndel,
      lagtTilAvSaksbehandler: fieldValue.lagtTilAvSaksbehandler,
    })),
    skalBrukeBesteberegning: kunYtelse.fodendeKvinneMedDP
      ? KunYtelseBesteberegningPanel.transformValues(values) : null,
  },
});

KunYtelsePanel.validate = (values: FaktaOmBeregningAksjonspunktValues, aktivertePaneler: string[], kunYtelse: KunYtelse, intl: IntlShape): any => {
  if (!values || !aktivertePaneler.includes(faktaOmBeregningTilfelle.FASTSETT_BG_KUN_YTELSE)) {
    return {};
  }
  const errors = {};
  errors[brukersAndelFieldArrayName] = BrukersAndelFieldArrayImpl.validate(values[brukersAndelFieldArrayName], intl);
  if (kunYtelse.fodendeKvinneMedDP) {
    return {
      ...errors,
      ...KunYtelseBesteberegningPanel.validate(values),
    };
  }
  return errors;
};

const mapStateToProps = (state, ownProps) => {
  const { kunYtelse } = ownProps.faktaOmBeregning;
  return {
    skalSjekkeBesteberegning: kunYtelse.fodendeKvinneMedDP,
  };
};

export default connect(mapStateToProps)(KunYtelsePanel);
