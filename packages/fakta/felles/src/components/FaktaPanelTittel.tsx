import { Heading } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { usePanelDataContext } from '@navikt/fp-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

/**
 * Panel som ikkje skal bruke den generiske «Fakta om ...»-teksten som ligg på
 * faktaPanelKode direkte, kan i staden peike på ein eigen i18n-nøkkel her.
 */
const FAKTA_PANEL_EGEN_TITTEL_ID: Partial<Record<FaktaPanelCode, string>> = {
  [FaktaPanelCode.ARBEIDSFORHOLD]: 'FaktaPanelTittel.Arbeidsforhold',
  [FaktaPanelCode.UTTAK_EØS]: 'FaktaPanelTittel.UttakEøs',
};

interface Props {
  visuallyHidden?: boolean;
}

/**
 * Fakta-panelets overskrift (h2). Selve tittelteksten eies av denne komponenten,
 * slik at alle faktapanel-titler lever på ett sted. Panelkoden hentes fra
 * panel-konteksten (satt via {@link StandardFaktaPanelProps}), og blir brukt
 * direkte som i18n-nøkkel med mindre panelet har ein eigen tittel definert i
 * {@link FAKTA_PANEL_EGEN_TITTEL_ID}.
 */
export const FaktaPanelTittel = ({ visuallyHidden = false }: Props) => {
  const { faktaPanelKode } = usePanelDataContext();
  if (!faktaPanelKode) {
    throw new Error('Faktapanel-koden mangler i panel-konteksten. Kan ikke sette tittel på faktapanelet.');
  }

  const meldingId = FAKTA_PANEL_EGEN_TITTEL_ID[faktaPanelKode] ?? faktaPanelKode;
  if (!(meldingId in messages)) {
    throw new Error(`Mangler i18n-tekst for faktapanel-koden ${faktaPanelKode} (nøkkel ${meldingId})`);
  }

  return (
    <Heading level="2" size="small" visuallyHidden={visuallyHidden}>
      {intl.formatMessage({ id: meldingId })}
    </Heading>
  );
};
