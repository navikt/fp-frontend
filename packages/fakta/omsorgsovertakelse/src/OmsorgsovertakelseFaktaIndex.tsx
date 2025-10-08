import { RawIntlProvider } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import type { OmsorgsovertakelseDto } from '@navikt/fp-types';

import { FaktaSeksjon } from './components/FaktaSeksjon';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  omsorgsovertakelse: OmsorgsovertakelseDto;
}

export const OmsorgsovertakelseFaktaIndex = ({ omsorgsovertakelse }: Props) => {
  return (
    <RawIntlProvider value={intl}>
      <VStack gap="space-16">
        <FaktaSeksjon omsorgsovertakelse={omsorgsovertakelse} />
        {/* TODO: Legg til aksjonspunktkomponent her når den er implementert */}
      </VStack>
    </RawIntlProvider>
  );
};
