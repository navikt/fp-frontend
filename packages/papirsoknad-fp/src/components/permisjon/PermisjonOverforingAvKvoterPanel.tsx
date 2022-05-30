import React, { FunctionComponent, ReactElement } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import { formValueSelector, FieldArray } from 'redux-form';
import { Element } from 'nav-frontend-typografi';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { CheckboxField } from '@fpsak-frontend/form';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import foreldreType from '@fpsak-frontend/kodeverk/src/foreldreType';
import overforingArsak from '@fpsak-frontend/kodeverk/src/overforingArsak';
import { SoknadData } from '@fpsak-frontend/papirsoknad-felles';
import { AlleKodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import { hasValidPeriodIncludingOtherErrors } from './validator';
import RenderOverforingAvKvoterFieldArray from './RenderOverforingAvKvoterFieldArray';

import styles from './permisjonPanel.less';

const getText = (intl: IntlShape, kode: string, navn: string): string => {
  if (kode === overforingArsak.INSTITUSJONSOPPHOLD_ANNEN_FORELDER) {
    return intl.formatMessage({ id: 'Registrering.Permisjon.OverforingAvKvote.Arsak.MorErInnlagt' });
  }
  if (kode === overforingArsak.SYKDOM_ANNEN_FORELDER) {
    return intl.formatMessage({ id: 'Registrering.Permisjon.OverforingAvKvote.Arsak.MorErSyk' });
  }
  return navn;
};

const mapArsaker = (arsaker: KodeverkMedNavn[], sokerErMor: boolean, intl: IntlShape): ReactElement[] => arsaker.map(({
  kode,
  navn,
}) => (!sokerErMor
  ? <option value={kode} key={kode}>{getText(intl, kode, navn)}</option>
  : <option value={kode} key={kode}>{navn}</option>));

export const OVERFORING_PERIODE_FIELD_ARRAY_NAME = 'overforingsperioder';

interface PureOwnProps {
  soknadData: SoknadData;
  readOnly: boolean;
  visFeilMelding: boolean;
  alleKodeverk: AlleKodeverk;
  form: string;
  namePrefix: string;
}

interface MappedOwnProps {
  overtaKvoteReasons: KodeverkMedNavn[];
  skalOvertaKvote: boolean;
}

export type FormValues = {
  skalOvertaKvote: boolean;
  periodeFom: string;
  periodeTom: string;
}

interface StaticFunctions {
  buildInitialValues?: () => any;
  validate?: (values: FormValues[]) => any;
}

/**
 * PermisjonOverforingAvKvoterPanel
 *
 * Presentasjonskomponent. Komponenten vises som del av skjermbildet for registrering av papirsøknad dersom søknad gjelder foreldrepenger.
 * Komponenten har inputfelter og må derfor rendres som etterkommer av komponent dekorert med reduxForm.
 */
export const PermisjonOverforingAvKvoterPanelImpl: FunctionComponent<PureOwnProps & MappedOwnProps> & StaticFunctions = ({
  overtaKvoteReasons,
  soknadData,
  skalOvertaKvote,
  readOnly,
  visFeilMelding,
}) => {
  const intl = useIntl();
  const selectValues = mapArsaker(overtaKvoteReasons, soknadData.getForeldreType() === foreldreType.MOR, intl);

  return (
    <>
      <Element><FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.OvertaKvoten" /></Element>
      <VerticalSpacer sixteenPx />
      <CheckboxField
        className={visFeilMelding ? styles.showErrorBackground : ''}
        readOnly={readOnly}
        name="skalOvertaKvote"
        label={<FormattedMessage id="Registrering.Permisjon.OverforingAvKvote.OvertaKvote" />}
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

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  overtaKvoteReasons: ownProps.alleKodeverk[kodeverkTyper.OVERFOERING_AARSAK_TYPE],
  skalOvertaKvote: formValueSelector(ownProps.form)(state, ownProps.namePrefix).skalOvertaKvote,
});

const PermisjonOverforingAvKvoterPanel = connect(mapStateToProps)(PermisjonOverforingAvKvoterPanelImpl);

PermisjonOverforingAvKvoterPanel.buildInitialValues = () => ({
  skalOvertaKvote: false,
  overforingsperioder: [{}],
});

PermisjonOverforingAvKvoterPanel.validate = (values: FormValues[]) => hasValidPeriodIncludingOtherErrors(values);

export default PermisjonOverforingAvKvoterPanel;
