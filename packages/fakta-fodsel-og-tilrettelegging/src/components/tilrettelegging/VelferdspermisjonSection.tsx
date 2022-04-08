import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import moment from 'moment';
import { DDMMYYYY_DATE_FORMAT, required } from '@fpsak-frontend/utils';
import { RadioGroupField, RadioOption } from '@fpsak-frontend/form';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Permisjon } from '@fpsak-frontend/types';

import { formValueSelector } from 'redux-form';
import styles from './tilretteleggingArbeidsforholdSection.less';

interface PureOwnProps {
  formName: string;
  readOnly: boolean;
  permisjon: Permisjon;
  formSectionName: string;
}

interface MappedOwnProps {
  skalTaHensynTilPermisjon: boolean;
}

export const finnPermisjonFieldName = (permisjon: Permisjon): string => `permisjon${permisjon.permisjonFom}`;

const VelferdspermisjonSection: FunctionComponent<PureOwnProps & MappedOwnProps> = ({
  readOnly,
  permisjon,
  skalTaHensynTilPermisjon,
}) => {
  if (!skalTaHensynTilPermisjon) {
    return null;
  }
  return (
    <>
      <Normaltekst className={styles.arbeidsforholdTittel}>
        {permisjon.permisjonTom == null && (
          <FormattedMessage
            id="VelferdspermisjonSection.PermisjonDetaljerUendeligPeriode"
            values={{
              fom: moment(permisjon.permisjonFom).format(DDMMYYYY_DATE_FORMAT),
              prosent: permisjon.permisjonsprosent,
            }}
          />
        )}
        {permisjon.permisjonTom != null && (
          <FormattedMessage
            id="VelferdspermisjonSection.PermisjonDetaljer"
            values={{
              fom: moment(permisjon.permisjonFom).format(DDMMYYYY_DATE_FORMAT),
              tom: moment(permisjon.permisjonTom).format(DDMMYYYY_DATE_FORMAT),
              prosent: permisjon.permisjonsprosent,
            }}
          />
        )}
      </Normaltekst>
      <VerticalSpacer sixteenPx />
      <RadioGroupField
        name={finnPermisjonFieldName(permisjon)}
        validate={[required]}
        bredde="XL"
        readOnly={readOnly}
      >
        <RadioOption value label={{ id: 'VelferdspermisjonSection.ErGyldig' }} />
        <RadioOption value={false} label={{ id: 'VelferdspermisjonSection.ErIkkeGyldig' }} />
      </RadioGroupField>
    </>
  );
};

export const finnSkalTaHensynTilPermisjon = (tilretteleggingBehovFom: string, permisjon: Permisjon): boolean => !moment(permisjon.permisjonFom)
  .isAfter(tilretteleggingBehovFom) && (permisjon.permisjonTom == null || !moment(permisjon.permisjonTom).isBefore(tilretteleggingBehovFom));

const mapStateToProps = (state, ownProps: PureOwnProps): MappedOwnProps => ({
  skalTaHensynTilPermisjon: finnSkalTaHensynTilPermisjon(formValueSelector(ownProps.formName)(state,
    `${ownProps.formSectionName}.tilretteleggingBehovFom`), ownProps.permisjon),
});

export default connect(mapStateToProps)(VelferdspermisjonSection);
