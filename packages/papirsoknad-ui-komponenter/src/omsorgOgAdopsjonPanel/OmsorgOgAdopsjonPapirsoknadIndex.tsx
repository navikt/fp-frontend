import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import OmsorgOgAdopsjonPanel from './components/OmsorgOgAdopsjonPanel';
import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  readOnly: boolean;
  familieHendelseType: string;
  isForeldrepengerFagsak: boolean;
}

const OmsorgOgAdopsjonPapirsoknadIndex: FunctionComponent<OwnProps> = ({
  readOnly,
  familieHendelseType,
  isForeldrepengerFagsak,
}) => (
  <RawIntlProvider value={intl}>
    <OmsorgOgAdopsjonPanel
      readOnly={readOnly}
      familieHendelseType={familieHendelseType}
      isForeldrepengerFagsak={isForeldrepengerFagsak}
    />
  </RawIntlProvider>
);

export default OmsorgOgAdopsjonPapirsoknadIndex;
