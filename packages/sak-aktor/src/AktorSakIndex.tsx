import React, { ReactElement, ReactNode } from 'react';
import { RawIntlProvider, FormattedMessage } from 'react-intl';
import { BodyShort } from '@navikt/ds-react';
import { Aktor, KodeverkMedNavn } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import { AktoerGrid } from './components/AktoerGrid';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  valgtAktorId: string;
  aktorInfo?: Aktor;
  fagsakStatuser: KodeverkMedNavn[];
  fagsakYtelseTyper: KodeverkMedNavn[];
  renderSomLenke: (className: string | undefined, fagsakKomponent: ReactNode, saksnummer: string) => ReactElement;
}

export const AktorSakIndex = ({ valgtAktorId, aktorInfo, ...rest }: Props) => (
  <RawIntlProvider value={intl}>
    {aktorInfo && <AktoerGrid aktorInfo={aktorInfo} {...rest} />}
    {!aktorInfo && (
      <BodyShort size="small">
        <FormattedMessage id="AktorSakIndex.UgyldigAktorId" values={{ id: valgtAktorId }} />
      </BodyShort>
    )}
  </RawIntlProvider>
);
