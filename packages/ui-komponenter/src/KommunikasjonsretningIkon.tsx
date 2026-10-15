import type { PropsWithChildren } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { ChevronLeftCircleIcon, ChevronRightCircleFillIcon, NotePencilIcon } from '@navikt/aksel-icons';
import { HStack } from '@navikt/ds-react';
import { assertUnreachable, createIntl } from '@navikt/ft-utils';

import type { Dokument } from '@navikt/fp-types';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  kommunikasjonsretning: Dokument['kommunikasjonsretning'];
}

export const KommunikasjonsretningIkon = ({ kommunikasjonsretning }: Props) => {
  switch (kommunikasjonsretning) {
    case 'INN':
      return (
        <Wrapper>
          <ChevronRightCircleFillIcon color="var(--ax-text-meta-purple)" fontSize="1.5rem" aria-hidden />
          <FormattedMessage id="KommunikasjonsretningIkon.Inn" />
        </Wrapper>
      );
    case 'UT':
      return (
        <Wrapper>
          <ChevronLeftCircleIcon color="var(--ax-text-meta-purple)" fontSize="1.5rem" aria-hidden />
          <FormattedMessage id="KommunikasjonsretningIkon.Ut" />
        </Wrapper>
      );
    case 'NOTAT':
      return (
        <Wrapper>
          <NotePencilIcon color="var(--ax-text-neutral)" fontSize="1.5rem" aria-hidden />
          <FormattedMessage id="KommunikasjonsretningIkon.Intern" />
        </Wrapper>
      );
    default:
      return assertUnreachable(kommunikasjonsretning);
  }
};

const Wrapper = ({ children }: PropsWithChildren) => (
  <RawIntlProvider value={intl}>
    <HStack as="span" gap="space-4" wrap={false}>
      {children}
    </HStack>
  </RawIntlProvider>
);
