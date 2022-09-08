import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Normaltekst } from 'nav-frontend-typografi';
import moment from 'moment';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { required } from '@navikt/ft-form-validators';
import { RadioGroupPanel, formHooks } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { Permisjon } from '@fpsak-frontend/types';

import styles from './tilretteleggingArbeidsforholdSection.less';

export const finnSkalTaHensynTilPermisjon = (
  tilretteleggingBehovFom: string,
  permisjon: Permisjon,
): boolean => !moment(permisjon.permisjonFom)
  .isAfter(tilretteleggingBehovFom) && (permisjon.permisjonTom == null || !moment(permisjon.permisjonTom).isBefore(tilretteleggingBehovFom));

interface OwnProps {
  readOnly: boolean;
  permisjon: Permisjon;
  formSectionName: string;
}

const VelferdspermisjonSection: FunctionComponent<OwnProps> = ({
  readOnly,
  permisjon,
  formSectionName,
}) => {
  const intl = useIntl();

  const {
    watch,
  } = formHooks.useFormContext();

  const tilretteleggingBehovFom = watch(`${formSectionName}.tilretteleggingBehovFom`);
  const skalTaHensynTilPermisjon = finnSkalTaHensynTilPermisjon(tilretteleggingBehovFom, permisjon);

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
      <RadioGroupPanel
        name={`${formSectionName}.permisjon${permisjon.permisjonFom}`}
        hideLegend
        validate={[required]}
        isReadOnly={readOnly}
        isHorizontal
        isTrueOrFalseSelection
        radios={[{
          label: intl.formatMessage({ id: 'VelferdspermisjonSection.ErGyldig' }),
          value: 'true',
        }, {
          label: intl.formatMessage({ id: 'VelferdspermisjonSection.ErIkkeGyldig' }),
          value: 'false',
        }]}
      />
    </>
  );
};

export default VelferdspermisjonSection;
