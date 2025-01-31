import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { FamilieHendelse, FamilieHendelseSamling, Soknad } from '@navikt/fp-types';

import { ForhandsvisData, VarselOmRevurderingForm } from './components/VarselOmRevurderingForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  soknadOriginalBehandling: Soknad;
  familiehendelseOriginalBehandling: FamilieHendelse;
  previewCallback: (data: ForhandsvisData) => void;
}

export const VarselOmRevurderingProsessIndex = (props: Props) => (
  <RawIntlProvider value={intl}>
    <VarselOmRevurderingForm {...props} />
  </RawIntlProvider>
);
