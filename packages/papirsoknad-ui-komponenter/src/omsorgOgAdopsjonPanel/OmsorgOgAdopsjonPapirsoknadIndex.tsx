import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FamilieHendelseType } from '@navikt/fp-types';

import { OmsorgOgAdopsjonPanel } from './components/OmsorgOgAdopsjonPanel';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  familieHendelseType: FamilieHendelseType;
  isForeldrepengerFagsak?: boolean;
  fødselsdato: string | undefined;
}

export const OmsorgOgAdopsjonPapirsoknadIndex = ({
  familieHendelseType,
  isForeldrepengerFagsak = false,
  fødselsdato,
}: Props) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgAdopsjonPanel
      familieHendelseType={familieHendelseType}
      isForeldrepengerFagsak={isForeldrepengerFagsak}
      fødselsdato={fødselsdato}
    />
  </RawIntlProvider>
);

OmsorgOgAdopsjonPapirsoknadIndex.initialValues = OmsorgOgAdopsjonPanel.initialValues;
OmsorgOgAdopsjonPapirsoknadIndex.transformValues = OmsorgOgAdopsjonPanel.transformValues;
