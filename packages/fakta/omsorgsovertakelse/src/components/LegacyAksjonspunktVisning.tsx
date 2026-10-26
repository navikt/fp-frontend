import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { FaktaBoks, LabeledValue } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { AksjonspunktDefinisjon } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import type messages from '../../i18n/nb_NO.json';

const TEKST_PER_AKSJONSPUNKT: Partial<Record<AksjonspunktDefinisjon, keyof typeof messages>> = {
  [AksjonspunktKode.UTGÅTT_5008]: 'LegacyAksjonspunktVisning.Aksjonspunkt.5008',
  [AksjonspunktKode.UTGÅTT_5054]: 'LegacyAksjonspunktVisning.Aksjonspunkt.5054',
  [AksjonspunktKode.UTGÅTT_5006]: 'LegacyAksjonspunktVisning.Aksjonspunkt.5006',
  [AksjonspunktKode.UTGÅTT_5004]: 'LegacyAksjonspunktVisning.Aksjonspunkt.5004',
  [AksjonspunktKode.UTGÅTT_5005]: 'LegacyAksjonspunktVisning.Aksjonspunkt.5005',
  [AksjonspunktKode.UTGÅTT_5013]: 'LegacyAksjonspunktVisning.Aksjonspunkt.5013',
  [AksjonspunktKode.UTGÅTT_5014]: 'LegacyAksjonspunktVisning.Aksjonspunkt.5014',
  [AksjonspunktKode.UTGÅTT_5011]: 'LegacyAksjonspunktVisning.Aksjonspunkt.5011',
  [AksjonspunktKode.UTGÅTT_6004]: 'LegacyAksjonspunktVisning.Aksjonspunkt.6004',
  [AksjonspunktKode.UTGÅTT_6010]: 'LegacyAksjonspunktVisning.Aksjonspunkt.6010',
};

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
        {filteredAksjonspunkter.map(ap => {
          const tekstId = TEKST_PER_AKSJONSPUNKT[ap.definisjon];
          return (
            <LabeledValue
              key={ap.definisjon}
              size="medium"
              label={tekstId ? <FormattedMessage id={tekstId} /> : ap.definisjon}
              value={ap.begrunnelse ?? ''}
            />
          );
        })}
      </VStack>
    </FaktaBoks>
  );
};
