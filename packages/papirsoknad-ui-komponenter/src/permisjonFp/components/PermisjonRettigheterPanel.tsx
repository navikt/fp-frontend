import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { formHooks, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

const ANNEN_FORELDER_NAME_PREFIX = 'annenForelder';

export type FormValues = {
  sokerHarAleneomsorg: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  morMottarUføretrygd?: boolean;
  morHarForeldrepengerEØS?: boolean;
}

interface OwnProps {
  readOnly: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  sokerErMor: boolean;
}

// TODO Kvifor ligg dette panelet her og ikkje under ANNEN_FORELDER?

const PermisjonRettigheterPanel: FunctionComponent<OwnProps> = ({
  readOnly,
  denAndreForelderenHarRettPaForeldrepenger,
  sokerErMor,
}) => {
  const intl = useIntl();

  const { watch } = formHooks.useFormContext<{ [ANNEN_FORELDER_NAME_PREFIX]: FormValues }>();
  const sokerHarAleneomsorg = watch(`${ANNEN_FORELDER_NAME_PREFIX}.sokerHarAleneomsorg`);

  return (
    <>
      <RadioGroupPanel
        name={`${ANNEN_FORELDER_NAME_PREFIX}.sokerHarAleneomsorg`}
        label={intl.formatMessage({ id: 'Registrering.Permisjon.SøkerHarAleneomsorg' })}
        validate={[required]}
        isReadOnly={readOnly}
        isHorizontal
        isTrueOrFalseSelection
        radios={[{
          label: intl.formatMessage({ id: 'Registrering.Permisjon.SøkerHarAleneomsorg.Yes' }),
          value: 'true',
        }, {
          label: intl.formatMessage({ id: 'Registrering.Permisjon.SøkerHarAleneomsorg.No' }),
          value: 'false',
        }]}
      />
      <VerticalSpacer sixteenPx />
      {sokerHarAleneomsorg === false && (
        <RadioGroupPanel
          name={`${ANNEN_FORELDER_NAME_PREFIX}.denAndreForelderenHarRettPaForeldrepenger`}
          label={intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger' })}
          validate={[required]}
          isReadOnly={readOnly}
          isHorizontal
          isTrueOrFalseSelection
          radios={[{
            label: intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger.Yes' }),
            value: 'true',
          }, {
            label: intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger.No' }),
            value: 'false',
          }]}
        />
      )}
      {!sokerErMor && sokerHarAleneomsorg === false && denAndreForelderenHarRettPaForeldrepenger === false && (
        <>
          <RadioGroupPanel
            name={`${ANNEN_FORELDER_NAME_PREFIX}.morMottarUføretrygd`}
            label={intl.formatMessage({ id: 'Registrering.Permisjon.MorUføretrygd' })}
            validate={[required]}
            isReadOnly={readOnly}
            isHorizontal
            isTrueOrFalseSelection
            radios={[{
              label: intl.formatMessage({ id: 'Registrering.Permisjon.MorUføretrygd.Yes' }),
              value: 'true',
            }, {
              label: intl.formatMessage({ id: 'Registrering.Permisjon.MorUføretrygd.No' }),
              value: 'false',
            }]}
          />
          <RadioGroupPanel
            name={`${ANNEN_FORELDER_NAME_PREFIX}.morHarForeldrepengerEØS`}
            label={intl.formatMessage({ id: 'Registrering.Permisjon.MorForeldrepengerEØS' })}
            validate={[required]}
            isReadOnly={readOnly}
            isHorizontal
            isTrueOrFalseSelection
            radios={[{
              label: intl.formatMessage({ id: 'Registrering.Permisjon.MorForeldrepengerEØS.Yes' }),
              value: 'true',
            }, {
              label: intl.formatMessage({ id: 'Registrering.Permisjon.MorForeldrepengerEØS.No' }),
              value: 'false',
            }]}
          />
        </>
      )}
    </>
  );
};

export default PermisjonRettigheterPanel;
