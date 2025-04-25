import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FamilieHendelse, Soknad } from '@navikt/fp-types';

import { FodselSammenligningPanel } from './components/FodselSammenligningPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  behandlingsTypeKode: string;
  soknad: Soknad;
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelse;
  gjeldendeFamilieHendelse: FamilieHendelse | undefined;
  registerFamiliehendelse: FamilieHendelse | undefined;
}

export const FodselSammenligningIndex = ({
  behandlingsTypeKode,
  soknad,
  soknadOriginalBehandling,
  familiehendelseOriginalBehandling,
  registerFamiliehendelse,
  gjeldendeFamilieHendelse,
}: Props) => {
  return (
    <RawIntlProvider value={intl}>
      <FodselSammenligningPanel
        behandlingsTypeKode={behandlingsTypeKode}
        soknad={soknad}
        soknadOriginalBehandling={soknadOriginalBehandling}
        familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
        gjeldendeFamilieHendelse={gjeldendeFamilieHendelse}
        registerFamiliehendelse={registerFamiliehendelse}
      />
    </RawIntlProvider>
  );
};
