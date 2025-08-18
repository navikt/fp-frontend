import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';

import { TrueFalseInput } from '../../felles/TrueFalseInput';
import { ANNEN_FORELDER_NAME_PREFIX } from '../constant';
import type { AnnenForelderFormValues, PermisjonRettigheterFormValues } from '../types';

interface Props {
  readOnly: boolean;
  sokerErMor: boolean;
}

export const PermisjonRettigheterPanel = ({ readOnly, sokerErMor }: Props) => {
  const intl = useIntl();

  const { watch, control } = useFormContext<AnnenForelderFormValues>();
  const sokerHarAleneomsorg = watch(`${ANNEN_FORELDER_NAME_PREFIX}.sokerHarAleneomsorg`);
  const annenForelderHarRett = watch(`${ANNEN_FORELDER_NAME_PREFIX}.denAndreForelderenHarRettPaForeldrepenger`);
  const annenForelderRettEØS = watch(`${ANNEN_FORELDER_NAME_PREFIX}.annenForelderRettEØS`);

  return (
    <VStack gap="space-16">
      <TrueFalseInput
        name={`${ANNEN_FORELDER_NAME_PREFIX}.sokerHarAleneomsorg`}
        control={control}
        label={intl.formatMessage({ id: 'Registrering.Permisjon.SøkerHarAleneomsorg' })}
        readOnly={readOnly}
      />
      {sokerHarAleneomsorg === false && (
        <TrueFalseInput
          name={`${ANNEN_FORELDER_NAME_PREFIX}.denAndreForelderenHarRettPaForeldrepenger`}
          control={control}
          label={intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger' })}
          readOnly={readOnly}
        />
      )}
      {sokerHarAleneomsorg === false && annenForelderHarRett === false && (
        <TrueFalseInput
          name={`${ANNEN_FORELDER_NAME_PREFIX}.annenForelderRettEØS`}
          control={control}
          label={intl.formatMessage({ id: 'Registrering.Permisjon.AnnenForelderRettEØS' })}
          readOnly={readOnly}
        />
      )}
      {!sokerErMor &&
        sokerHarAleneomsorg === false &&
        annenForelderHarRett === false &&
        annenForelderRettEØS === false && (
          <TrueFalseInput
            name={`${ANNEN_FORELDER_NAME_PREFIX}.morMottarUføretrygd`}
            control={control}
            label={intl.formatMessage({ id: 'Registrering.Permisjon.MorUføretrygd' })}
            readOnly={readOnly}
          />
        )}
    </VStack>
  );
};

PermisjonRettigheterPanel.transformValues = ({
  sokerHarAleneomsorg,
  denAndreForelderenHarRettPaForeldrepenger,
  annenForelderRettEØS,
  morMottarUføretrygd,
}: PermisjonRettigheterFormValues): PermisjonRettigheterFormValues => ({
  sokerHarAleneomsorg,
  denAndreForelderenHarRettPaForeldrepenger:
    sokerHarAleneomsorg === false ? denAndreForelderenHarRettPaForeldrepenger : undefined,
  annenForelderRettEØS: denAndreForelderenHarRettPaForeldrepenger === false ? annenForelderRettEØS : undefined,
  morMottarUføretrygd: annenForelderRettEØS === false ? morMottarUføretrygd : undefined,
});
