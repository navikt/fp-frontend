import { useFormContext } from 'react-hook-form';

import { Heading, Radio, VStack } from '@navikt/ds-react';
import { RhfRadioGroupNew } from '@navikt/ft-form-hooks';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';

import { FamilieHendelseType, ForeldreType } from '@navikt/fp-kodeverk';

import { SoknadData } from '../felles/SoknadData';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  soknadData: SoknadData;
}

const rettighet = {
  ANNEN_FORELDER_DOED: 'ANNEN_FORELDER_DOED',
  OVERTA_FORELDREANSVARET_ALENE: 'OVERTA_FORELDREANSVARET_ALENE',
  MANN_ADOPTERER_ALENE: 'MANN_ADOPTERER_ALENE',
  IKKE_RELEVANT: 'IKKE_RELEVANT',
};

type RettigheterFormValues = {
  rettigheter?: string;
};

const baseOptions = [
  {
    label: intl.formatMessage({ id: 'Registrering.Rettigheter.AnnenForelderDoed' }),
    value: rettighet.ANNEN_FORELDER_DOED,
  },
  {
    label: intl.formatMessage({ id: 'Registrering.Rettigheter.OvertaForeldreansvaretAlene' }),
    value: rettighet.OVERTA_FORELDREANSVARET_ALENE,
  },
  {
    label: intl.formatMessage({ id: 'Registrering.Rettigheter.MannAdoptererAlene' }),
    value: rettighet.MANN_ADOPTERER_ALENE,
  },
  {
    label: intl.formatMessage({ id: 'Registrering.Rettigheter.IkkeRelevant' }),
    value: rettighet.IKKE_RELEVANT,
  },
];

export const RettigheterPapirsoknadIndex = ({ readOnly, soknadData }: Props) => {
  const visMannAdoptererAlene =
    soknadData.getFamilieHendelseType() !== FamilieHendelseType.FODSEL &&
    soknadData.getForeldreType() === ForeldreType.FAR;

  const options = visMannAdoptererAlene
    ? baseOptions
    : baseOptions.filter(option => option.value !== rettighet.MANN_ADOPTERER_ALENE);

  const { control } = useFormContext<RettigheterFormValues>();

  return (
    <BorderBox>
      <VStack gap="space-16">
        <Heading size="small" level="3">
          {intl.formatMessage({ id: 'Registrering.Rettigheter.Title' })}
        </Heading>
        <RhfRadioGroupNew name="rettigheter" control={control} isReadOnly={readOnly}>
          {options.map(o => (
            <Radio key={o.value} value={o.value} size="small">
              {o.label}
            </Radio>
          ))}
        </RhfRadioGroupNew>
      </VStack>
    </BorderBox>
  );
};

RettigheterPapirsoknadIndex.initialValues = (): RettigheterFormValues => ({
  rettigheter: undefined,
});

RettigheterPapirsoknadIndex.transformValues = ({ rettigheter }: RettigheterFormValues) =>
  rettigheter === rettighet.IKKE_RELEVANT ? {} : { rettigheter };
