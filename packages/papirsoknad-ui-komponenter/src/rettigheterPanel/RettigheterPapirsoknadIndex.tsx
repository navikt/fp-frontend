import { useFormContext } from 'react-hook-form';

import { Heading, Radio, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import type { RettigheterDto } from '@navikt/fp-types';

import { SoknadData } from '../felles/SoknadData';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  soknadData: SoknadData;
}
type RettigheterOptions = RettigheterDto | 'IKKE_RELEVANT';
type RettigheterFormValues = {
  rettigheter?: RettigheterOptions;
};

const baseOptions: { label: string; value: RettigheterOptions }[] = [
  {
    label: intl.formatMessage({ id: 'Registrering.Rettigheter.AnnenForelderDoed' }),
    value: 'ANNEN_FORELDER_DOED',
  },
  {
    label: intl.formatMessage({ id: 'Registrering.Rettigheter.OvertaForeldreansvaretAlene' }),
    value: 'OVERTA_FORELDREANSVARET_ALENE',
  },
  {
    label: intl.formatMessage({ id: 'Registrering.Rettigheter.MannAdoptererAlene' }),
    value: 'MANN_ADOPTERER_ALENE',
  },
  {
    label: intl.formatMessage({ id: 'Registrering.Rettigheter.IkkeRelevant' }),
    value: 'IKKE_RELEVANT',
  },
];

export const RettigheterPapirsoknadIndex = ({ readOnly, soknadData }: Props) => {
  const visMannAdoptererAlene =
    soknadData.getFamilieHendelseType() !== 'FODSL' && soknadData.getForeldreType() === 'FAR';

  const { control } = useFormContext<RettigheterFormValues>();

  return (
    <BorderBox>
      <VStack gap="space-16">
        <Heading size="small" level="3">
          {intl.formatMessage({ id: 'Registrering.Rettigheter.Title' })}
        </Heading>
        <RhfRadioGroup
          name="rettigheter"
          control={control}
          legend=""
          hideLegend
          readOnly={readOnly}
          validate={[required]}
        >
          {baseOptions
            .filter(option => option.value !== 'MANN_ADOPTERER_ALENE' || visMannAdoptererAlene)
            .map(o => (
              <Radio key={o.value} value={o.value} size="small">
                {o.label}
              </Radio>
            ))}
        </RhfRadioGroup>
      </VStack>
    </BorderBox>
  );
};

RettigheterPapirsoknadIndex.initialValues = (): RettigheterFormValues => ({
  rettigheter: undefined,
});

RettigheterPapirsoknadIndex.transformValues = ({ rettigheter }: RettigheterFormValues) => ({
  rettigheter: rettigheter === 'IKKE_RELEVANT' ? undefined : rettigheter,
});
