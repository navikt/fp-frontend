import { Heading } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import { usePanelDataContext } from '@navikt/fp-utils';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  visuallyHidden?: boolean;
}

/**
 * Fakta-panelets overskrift (h2). Selve tittelteksten eies av denne komponenten,
 * slik at alle faktapanel-titler lever på ett sted. Panelkoden hentes fra
 * panel-konteksten (satt via {@link StandardFaktaPanelProps}), og blir prefikset
 * med «FaktaPanelTittel.» og brukt som i18n-nøkkel.
 */
export const FaktaPanelTittel = ({ visuallyHidden = false }: Props) => {
  const { panelKode } = usePanelDataContext();
  if (!panelKode) {
    throw new Error('Faktapanel-koden mangler i panel-konteksten. Kan ikke sette tittel på faktapanelet.');
  }

  const meldingId = `FaktaPanelTittel.${panelKode}`;
  if (!(meldingId in messages)) {
    throw new Error(`Mangler i18n-tekst for faktapanel-koden ${panelKode} (nøkkel ${meldingId})`);
  }

  return (
    <Heading level="2" size="small" visuallyHidden={visuallyHidden}>
      {intl.formatMessage({ id: meldingId })}
    </Heading>
  );
};
