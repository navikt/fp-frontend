import { useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { ReadOnlyField } from '@navikt/ft-form-hooks';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { usePanelDataContext } from '@navikt/fp-utils';

export const LegacyAksjonspunktVisning = () => {
  const intl = useIntl();

  const { aksjonspunkterForPanel } = usePanelDataContext();
  const filteredAksjonspunkter = aksjonspunkterForPanel.filter(
    ap => ap.definisjon !== AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET,
  );
  return (
    <FaktaKort
      label={intl.formatMessage({
        id: 'LegacyAksjonspunktVisning.Tittel',
      })}
    >
      <VStack gap="space-16">
        {filteredAksjonspunkter.map(ap => (
          <ReadOnlyField
            key={ap.definisjon}
            type="textarea"
            label={intl.formatMessage({ id: `LegacyAksjonspunktVisning.Aksjonspunkt.${ap.definisjon}` })}
            value={ap.begrunnelse}
          />
        ))}
      </VStack>
    </FaktaKort>
  );
};
