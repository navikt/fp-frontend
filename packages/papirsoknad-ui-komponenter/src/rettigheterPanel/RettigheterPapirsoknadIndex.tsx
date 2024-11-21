import React from 'react';
import { createIntl } from '@navikt/ft-utils';
import { familieHendelseType, foreldreType } from '@navikt/fp-kodeverk';
import { BorderBox } from '@navikt/ft-ui-komponenter';
import { Heading, VStack } from '@navikt/ds-react';
import { RadioGroupPanel } from '@navikt/ft-form-hooks';

import { SoknadData } from '../felles/SoknadData';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  soknadData: SoknadData;
}

export const rettighet = {
  ANNEN_FORELDER_DOED: 'ANNEN_FORELDER_DOED',
  OVERTA_FORELDREANSVARET_ALENE: 'OVERTA_FORELDREANSVARET_ALENE',
  MANN_ADOPTERER_ALENE: 'MANN_ADOPTERER_ALENE',
  IKKE_RELEVANT: 'IKKE_RELEVANT',
};

export type RettigheterFormValues = {
  rettigheter?: string;
};

const options = [
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
    soknadData.getFamilieHendelseType() !== familieHendelseType.FODSEL &&
    soknadData.getForeldreType() === foreldreType.FAR;
  if (!visMannAdoptererAlene) {
    options.splice(2, 1);
  }

  return (
    <BorderBox>
      <VStack gap="4">
        <Heading size="small">{intl.formatMessage({ id: 'Registrering.Rettigheter.Title' })}</Heading>
        <RadioGroupPanel name="rettigheter" isReadOnly={readOnly} radios={options} />
      </VStack>
    </BorderBox>
  );
};

RettigheterPapirsoknadIndex.transformValues = ({ rettigheter }: RettigheterFormValues) =>
  rettigheter === rettighet.IKKE_RELEVANT ? {} : { rettigheter };
