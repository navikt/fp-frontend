import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { FamilieHendelseType } from '@navikt/fp-types';

import { OmsorgOgAdopsjonPanel } from './components/OmsorgOgAdopsjonPanel';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  readOnly: boolean;
  familieHendelseType: FamilieHendelseType;
  isForeldrepengerFagsak?: boolean;
  fodselsdato?: string | string[];
}

export const OmsorgOgAdopsjonPapirsoknadIndex = ({
  readOnly,
  familieHendelseType,
  isForeldrepengerFagsak = false,
  fodselsdato,
}: Props) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgAdopsjonPanel
      readOnly={readOnly}
      familieHendelseType={familieHendelseType}
      isForeldrepengerFagsak={isForeldrepengerFagsak}
      fodselsdatoer={fodselsdato}
    />
  </RawIntlProvider>
);

OmsorgOgAdopsjonPapirsoknadIndex.initialValues = OmsorgOgAdopsjonPanel.initialValues;
OmsorgOgAdopsjonPapirsoknadIndex.transformValues = OmsorgOgAdopsjonPanel.transformValues;
