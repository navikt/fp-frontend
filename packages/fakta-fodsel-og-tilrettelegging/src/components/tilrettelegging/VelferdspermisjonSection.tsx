import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import moment from 'moment';
import { DDMMYYYY_DATE_FORMAT, required } from '@fpsak-frontend/utils';
import { RadioGroupField, RadioOption, behandlingFormValueSelector } from '@fpsak-frontend/form';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';

import Permisjon from '../../types/permisjonTsType';

import styles from './tilretteleggingArbeidsforholdSection.less';

interface OwnProps {
  readOnly: boolean;
  permisjon: Permisjon;
  formSectionName: string;
  skalTaHensynTilPermisjon: boolean;
  tilretteleggingBehovFom: string;
}

export const finnPermisjonFieldName = (permisjon) => `permisjon${permisjon.permisjonFom}`;

const VelferdspermisjonSection: FunctionComponent<OwnProps> = ({
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
        {permisjon.permisjonTom == null
        && (
        <FormattedMessage
          id="VelferdspermisjonSection.PermisjonDetaljerUendeligPeriode"
          values={{
            fom: moment(permisjon.permisjonFom).format(DDMMYYYY_DATE_FORMAT),
            prosent: permisjon.permisjonsprosent,
          }}
        />
        )}
        {permisjon.permisjonTom != null
        && (
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

export const skalTaHensynTilPermisjon = (tilretteleggingBehovFom: string, permisjon: Permisjon) => !moment(permisjon.permisjonFom)
  .isAfter(tilretteleggingBehovFom) && (permisjon.permisjonTom == null || !moment(permisjon.permisjonTom).isBefore(tilretteleggingBehovFom));

const mapStateToProps = (state, ownProps) => ({
  skalTaHensynTilPermisjon: skalTaHensynTilPermisjon(behandlingFormValueSelector(ownProps.formName,
    ownProps.behandlingId, ownProps.behandlingVersjon)(state, `${ownProps.formSectionName}.tilretteleggingBehovFom`), ownProps.permisjon),
});

export default connect(mapStateToProps)(VelferdspermisjonSection);
