import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { FaktaBoks, LabeledValue } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { usePanelDataContext } from '@navikt/fp-utils';

import type messages from '../../i18n/nb_NO.json';

export const LegacyAksjonspunktVisning = () => {
  const intl = useIntl();

  const { aksjonspunkterForPanel } = usePanelDataContext();
  const filteredAksjonspunkter = aksjonspunkterForPanel.filter(
    ap => ap.definisjon !== AksjonspunktKode.VURDER_OMSORGSOVERTAKELSEVILKÅRET,
  );
  return (
    <FaktaBoks
      tittel={intl.formatMessage({
        id: 'LegacyAksjonspunktVisning.Tittel',
      })}
    >
      <VStack gap="space-16">
        {filteredAksjonspunkter.map(ap => (
          <LabeledValue
            key={ap.definisjon}
            size="medium"
            label={
              <FormattedMessage
                id={`LegacyAksjonspunktVisning.Aksjonspunkt.${ap.definisjon}` as keyof typeof messages}
              />
            }
            value={ap.begrunnelse ?? ''}
          />
        ))}
      </VStack>
    </FaktaBoks>
  );
};
