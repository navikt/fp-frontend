import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';

const ANNEN_FORELDER_NAME_PREFIX = 'annenForelder';

export type FormValues = {
  sokerHarAleneomsorg: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  annenForelderRettEØS?: boolean;
  morMottarUføretrygd?: boolean;
};

interface Props {
  readOnly: boolean;
  denAndreForelderenHarRettPaForeldrepenger?: boolean;
  sokerErMor: boolean;
}

// TODO Kvifor ligg dette panelet her og ikkje under ANNEN_FORELDER?

export const PermisjonRettigheterPanel = ({ readOnly, sokerErMor }: Props) => {
  const intl = useIntl();

  const { watch } = useFormContext<{ [ANNEN_FORELDER_NAME_PREFIX]: FormValues }>();
  const sokerHarAleneomsorg = watch(`${ANNEN_FORELDER_NAME_PREFIX}.sokerHarAleneomsorg`);
  const annenForelderHarRett = watch(`${ANNEN_FORELDER_NAME_PREFIX}.denAndreForelderenHarRettPaForeldrepenger`);
  const annenForelderRettEØS = watch(`${ANNEN_FORELDER_NAME_PREFIX}.annenForelderRettEØS`);

  return (
    <VStack gap="4">
      <RadioGroupPanel
        name={`${ANNEN_FORELDER_NAME_PREFIX}.sokerHarAleneomsorg`}
        label={intl.formatMessage({ id: 'Registrering.Permisjon.SøkerHarAleneomsorg' })}
        validate={[required]}
        isReadOnly={readOnly}
        isHorizontal
        isTrueOrFalseSelection
        radios={[
          {
            label: intl.formatMessage({ id: 'Registrering.Permisjon.SøkerHarAleneomsorg.Yes' }),
            value: 'true',
          },
          {
            label: intl.formatMessage({ id: 'Registrering.Permisjon.SøkerHarAleneomsorg.No' }),
            value: 'false',
          },
        ]}
      />
      {sokerHarAleneomsorg === false && (
        <RadioGroupPanel
          name={`${ANNEN_FORELDER_NAME_PREFIX}.denAndreForelderenHarRettPaForeldrepenger`}
          label={intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger' })}
          validate={[required]}
          isReadOnly={readOnly}
          isHorizontal
          isTrueOrFalseSelection
          radios={[
            {
              label: intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger.Yes' }),
              value: 'true',
            },
            {
              label: intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger.No' }),
              value: 'false',
            },
          ]}
        />
      )}
      {sokerHarAleneomsorg === false && annenForelderHarRett === false && (
        <RadioGroupPanel
          name={`${ANNEN_FORELDER_NAME_PREFIX}.annenForelderRettEØS`}
          label={intl.formatMessage({ id: 'Registrering.Permisjon.AnnenForelderRettEØS' })}
          validate={[required]}
          isReadOnly={readOnly}
          isHorizontal
          isTrueOrFalseSelection
          radios={[
            {
              label: intl.formatMessage({ id: 'Registrering.Permisjon.AnnenForelderRettEØS.Yes' }),
              value: 'true',
            },
            {
              label: intl.formatMessage({ id: 'Registrering.Permisjon.AnnenForelderRettEØS.No' }),
              value: 'false',
            },
          ]}
        />
      )}
      {!sokerErMor &&
        sokerHarAleneomsorg === false &&
        annenForelderHarRett === false &&
        annenForelderRettEØS === false && (
          <RadioGroupPanel
            name={`${ANNEN_FORELDER_NAME_PREFIX}.morMottarUføretrygd`}
            label={intl.formatMessage({ id: 'Registrering.Permisjon.MorUføretrygd' })}
            validate={[required]}
            isReadOnly={readOnly}
            isHorizontal
            isTrueOrFalseSelection
            radios={[
              {
                label: intl.formatMessage({ id: 'Registrering.Permisjon.MorUføretrygd.Yes' }),
                value: 'true',
              },
              {
                label: intl.formatMessage({ id: 'Registrering.Permisjon.MorUføretrygd.No' }),
                value: 'false',
              },
            ]}
          />
        )}
    </VStack>
  );
};
