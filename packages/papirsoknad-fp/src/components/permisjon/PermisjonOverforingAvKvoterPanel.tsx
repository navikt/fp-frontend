import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { formValueSelector, FieldArray } from 'redux-form';
import { Element } from 'nav-frontend-typografi';

// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__prop-types... Remove this comment to see the full error message
import { kodeverkPropType } from '@fpsak-frontend/prop-types';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import { CheckboxField } from '@fpsak-frontend/form';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__kodeverk` ... Remove this comment to see the full error message
import overforingArsak from '@fpsak-frontend/kodeverk/src/overforingArsak';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';

import { hasValidPeriodIncludingOtherErrors } from '@fpsak-frontend/utils';

import RenderOverforingAvKvoterFieldArray from './RenderOverforingAvKvoterFieldArray';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './permisjonPanel.less' or its ... Remove this comment to see the full error message
import styles from './permisjonPanel.less';

const getText = (intl: any, kode: any, navn: any) => {
  if (kode === overforingArsak.INSTITUSJONSOPPHOLD_ANNEN_FORELDER) {
    return intl.formatMessage({ id: 'Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt' });
  }
  if (kode === overforingArsak.SYKDOM_ANNEN_FORELDER) {
    return intl.formatMessage({ id: 'Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk' });
  }
  return navn;
};

const mapArsaker = (arsaker: any, sokerErMor: any, intl: any) => arsaker.map(({
  kode,
  navn,
}: any) => (!sokerErMor
  ? <option value={kode} key={kode}>{getText(intl, kode, navn)}</option>
  : <option value={kode} key={kode}>{navn}</option>));

export const overforingPeriodeFieldArrayName = 'overforingsperioder';

type PermisjonOverforingAvKvoterPanelImplProps = {
    overtaKvoteReasons: any; // TODO: kodeverkPropType
    soknadData: any; // TODO: PropTypes.instanceOf(SoknadData)
    skalOvertaKvote: boolean;
    intl: {};
    readOnly: boolean;
    visFeilMelding: boolean;
};

/**
 * PermisjonOverforingAvKvoterPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av komponent dekorert med reduxForm.
 */
export const PermisjonOverforingAvKvoterPanelImpl = ({
  overtaKvoteReasons, soknadData, skalOvertaKvote, readOnly, intl, visFeilMelding,
}: PermisjonOverforingAvKvoterPanelImplProps) => {
  const selectValues = mapArsaker(overtaKvoteReasons, soknadData.getForeldreType() === foreldreType.MOR, intl);

  return (
    <>
      <Element><FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.OvertaKvoten" /></Element>
      <VerticalSpacer sixteenPx />
      <CheckboxField
        className={visFeilMelding ? styles.showErrorBackground : ''}
        readOnly={readOnly}
        name="skalOvertaKvote"
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message
        label={intl.formatMessage({ id: 'Registrering.Permisjon.OverforingAvKvote.OvertaKvote' })}
      />
      {skalOvertaKvote
        && (
          <FieldArray
            name="overforingsperioder"
            component={RenderOverforingAvKvoterFieldArray}
            selectValues={selectValues}
            readOnly={readOnly}
          />
        )}
    </>
  );
};

const mapStateToProps = (state: any, ownProps: any) => ({
  overtaKvoteReasons: ownProps.alleKodeverk[kodeverkTyper.OVERFOERING_AARSAK_TYPE],
  skalOvertaKvote: formValueSelector(ownProps.form)(state, ownProps.namePrefix).skalOvertaKvote,
});

// @ts-expect-error ts-migrate(2769) FIXME: Type '({ overtaKvoteReasons, soknadData, skalOvert... Remove this comment to see the full error message
const PermisjonOverforingAvKvoterPanel = connect(mapStateToProps)(injectIntl(PermisjonOverforingAvKvoterPanelImpl));

// @ts-expect-error ts-migrate(2339) FIXME: Property 'initialValues' does not exist on type 'C... Remove this comment to see the full error message
PermisjonOverforingAvKvoterPanel.initialValues = {
  skalOvertaKvote: false,
  overforingsperioder: [{}],
};

// @ts-expect-error ts-migrate(2339) FIXME: Property 'validate' does not exist on type 'Connec... Remove this comment to see the full error message
PermisjonOverforingAvKvoterPanel.validate = (values: any) => hasValidPeriodIncludingOtherErrors(values);

export default PermisjonOverforingAvKvoterPanel;
