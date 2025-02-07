import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, Verge } from '@navikt/fp-types';

import { RegistrereVergeInfoPanel } from './components/RegistrereVergeInfoPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  verge?: Verge;
  alleKodeverk: AlleKodeverk | AlleKodeverkTilbakekreving;
  submittable: boolean;
}

export const VergeFaktaIndex = ({ verge = {}, alleKodeverk, submittable }: Props) => (
  <RawIntlProvider value={intl}>
    <RegistrereVergeInfoPanel verge={verge} alleKodeverk={alleKodeverk} submittable={submittable} />
  </RawIntlProvider>
);
