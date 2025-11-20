import { useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';

import { TrueFalseInput } from '../../felles/TrueFalseInput';
import { ANNEN_FORELDER_NAME_PREFIX } from '../constant';
import type { AnnenForelderFormValues, PermisjonRettigheterFormValues } from '../types';

interface Props {
  readOnly: boolean;
  søkerErMor: boolean;
}

export const PermisjonRettigheterPanel = ({ readOnly, søkerErMor }: Props) => {
  const intl = useIntl();

  const { watch, control } = useFormContext<AnnenForelderFormValues>();
  const søkerHarAleneomsorg = watch(`${ANNEN_FORELDER_NAME_PREFIX}.søkerHarAleneomsorg`);
  const annenForelderHarRett = watch(`${ANNEN_FORELDER_NAME_PREFIX}.denAndreForelderenHarRettPåForeldrepenger`);
  const annenForelderRettEØS = watch(`${ANNEN_FORELDER_NAME_PREFIX}.annenForelderRettEØS`);

  return (
    <VStack gap="space-16">
      <TrueFalseInput
        name={`${ANNEN_FORELDER_NAME_PREFIX}.søkerHarAleneomsorg`}
        control={control}
        label={intl.formatMessage({ id: 'Registrering.Permisjon.SøkerHarAleneomsorg' })}
        readOnly={readOnly}
      />
      {søkerHarAleneomsorg === false && (
        <TrueFalseInput
          name={`${ANNEN_FORELDER_NAME_PREFIX}.denAndreForelderenHarRettPåForeldrepenger`}
          control={control}
          label={intl.formatMessage({ id: 'Registrering.Permisjon.HarRettPaForeldrepenger' })}
          readOnly={readOnly}
        />
      )}
      {søkerHarAleneomsorg === false && annenForelderHarRett === false && (
        <TrueFalseInput
          name={`${ANNEN_FORELDER_NAME_PREFIX}.annenForelderRettEØS`}
          control={control}
          label={intl.formatMessage({ id: 'Registrering.Permisjon.AnnenForelderRettEØS' })}
          readOnly={readOnly}
        />
      )}
      {!søkerErMor &&
        søkerHarAleneomsorg === false &&
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
  søkerHarAleneomsorg,
  denAndreForelderenHarRettPåForeldrepenger,
  annenForelderRettEØS,
  morMottarUføretrygd,
}: PermisjonRettigheterFormValues): PermisjonRettigheterFormValues => ({
  søkerHarAleneomsorg,
  denAndreForelderenHarRettPåForeldrepenger:
    søkerHarAleneomsorg === false ? denAndreForelderenHarRettPåForeldrepenger : undefined,
  annenForelderRettEØS: denAndreForelderenHarRettPåForeldrepenger === false ? annenForelderRettEØS : undefined,
  morMottarUføretrygd: annenForelderRettEØS === false ? morMottarUføretrygd : undefined,
});
