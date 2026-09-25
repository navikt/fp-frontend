import { Heading } from '@navikt/ds-react';

import { usePanelDataContext } from '@navikt/fp-utils';

interface Props {
  visuallyHidden?: boolean;
}

/**
 * Fakta-panelets overskrift (h2). Tittelteksten kommer allerede ferdig
 * lokalisert fra {@link BehandlingPanelDataProvider} via panel-konteksten,
 * så panelet trenger ikke eget i18n for dette.
 */
export const FaktaPanelTittel = ({ visuallyHidden = true }: Props) => {
  const { panelTittel } = usePanelDataContext();

  return (
    <Heading level="2" size="small" visuallyHidden={visuallyHidden}>
      {panelTittel}
    </Heading>
  );
};
