import { type ReactElement, type ReactNode } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { BodyShort } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import type { Aktor, KodeverkMedNavn } from '@navikt/fp-types';

import { AktørGrid } from './AktørGrid';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  valgtAktorId: string;
  aktorInfo?: Aktor;
  fagsakStatuser: KodeverkMedNavn[];
  fagsakYtelseTyper: KodeverkMedNavn[];
  renderSomLenke: (className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement;
}

export const AktørSakIndex = ({ valgtAktorId, aktorInfo, ...rest }: Props) => (
  <RawIntlProvider value={intl}>
    {aktorInfo && <AktørGrid aktorInfo={aktorInfo} {...rest} />}
    {!aktorInfo && (
      <BodyShort size="small">
        <FormattedMessage id="AktorSakIndex.UgyldigAktorId" values={{ id: valgtAktorId }} />
      </BodyShort>
    )}
  </RawIntlProvider>
);
