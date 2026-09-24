import { Heading } from '@navikt/ds-react';
import { usePanelDataContext } from '@navikt/fp-utils';

interface Props {
  visuallyHidden?: boolean;
}

/**
 * Fakta-panelets overskrift (h2). Tittelteksten kjem allereie ferdig
 * lokalisert frå {@link BehandlingPanelDataProvider} via panel-konteksten,
 * så panelet treng ikkje eige i18n for dette.
 */
export const FaktaPanelTittel = ({ visuallyHidden = true }: Props) => {
  const { panelTittel } = usePanelDataContext();

  return (
    <Heading level="2" size="small" visuallyHidden={visuallyHidden}>
      {panelTittel}
    </Heading>
  );
};
