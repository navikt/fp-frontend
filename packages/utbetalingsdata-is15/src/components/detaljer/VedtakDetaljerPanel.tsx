import { FormattedMessage } from 'react-intl';

import { Tabs } from '@navikt/ds-react';

import type { Vedtak } from '@navikt/fp-types';

import { ArbeidsforholdPanel } from './ArbeidsforholdPanel';
import { UtbetalingerPanel } from './UtbetalingerPanel';

interface Props {
  vedtak: Vedtak;
}

export const VedtakDetaljerPanel = ({ vedtak }: Props) => (
  <Tabs defaultValue="utbetalinger">
    <Tabs.List>
      <Tabs.Tab value="arbeidshforhold" label={<FormattedMessage id="VedtakDetaljerPanel.Arbeidsforhold" />} />
      <Tabs.Tab value="utbetalinger" label={<FormattedMessage id="VedtakDetaljerPanel.Utbetalinger" />} />
    </Tabs.List>
    <Tabs.Panel value="arbeidshforhold">
      <ArbeidsforholdPanel alleArbeidsforhold={vedtak.arbeidsforhold ?? undefined} />
    </Tabs.Panel>
    <Tabs.Panel value="utbetalinger">
      <UtbetalingerPanel utbetalinger={vedtak.utbetalinger ?? undefined} />
    </Tabs.Panel>
  </Tabs>
);
