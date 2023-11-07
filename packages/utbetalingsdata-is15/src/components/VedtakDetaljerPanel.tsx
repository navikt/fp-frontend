import React, { FunctionComponent } from 'react';

import { Vedtak } from '@navikt/fp-types';
import { Tabs } from '@navikt/ds-react';
import ArbeidsforholdPanel from './ArbeidsforholdPanel';
import UtbetalingerPanel from './UtbetalingerPanel';

interface OwnProps {
  vedtak: Vedtak;
}

const VedtakDetaljerPanel: FunctionComponent<OwnProps> = ({ vedtak }) => (
  <Tabs defaultValue="logg">
    <Tabs.List>
      <Tabs.Tab value="logg" label="Arbeidsforhold" />
      <Tabs.Tab value="inbox" label="Utbetalinger" />
    </Tabs.List>
    <Tabs.Panel value="logg" className="h-24 w-full bg-gray-50 p-4">
      <ArbeidsforholdPanel alleArbeidsforhold={vedtak.arbeidsforhold} />
    </Tabs.Panel>
    <Tabs.Panel value="inbox" className="h-24 w-full bg-gray-50 p-4">
      <UtbetalingerPanel utbetalinger={vedtak.utbetalinger} />
    </Tabs.Panel>
  </Tabs>
);

export default VedtakDetaljerPanel;
