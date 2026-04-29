import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import type { BrevOverstyring } from '@navikt/fp-types';

import { type ForhandsvisData, VarselOmRevurderingForm } from './components/VarselOmRevurderingForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  previewCallback: (data: ForhandsvisData) => void;
  hentVarselHtml?: () => Promise<BrevOverstyring>;
  mellomlagreBrev?: (html: string | null) => Promise<void>;
}

export const VarselOmRevurderingProsessIndex = ({ hentVarselHtml, ...props }: Props) => (
  <RawIntlProvider value={intl}>
    <VarselOmRevurderingForm hentVarselHtml={hentVarselHtml} {...props} />
  </RawIntlProvider>
);
