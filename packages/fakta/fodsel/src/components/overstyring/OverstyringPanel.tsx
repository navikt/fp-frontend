import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, HStack } from '@navikt/ds-react';
import { OverstyringKnapp } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, isAksjonspunktOpen } from '@navikt/fp-kodeverk';
import type { FødselGjeldende } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { usePanelDataContext } from '@navikt/fp-utils';

import { OverstyringForm } from './OverstyringForm';

interface Props {
  kanOverstyre: boolean;
  gjeldende: FødselGjeldende;
  submittable: boolean;
}

export const OverstyringPanel = ({ kanOverstyre, gjeldende, submittable }: Props) => {
  const intl = useIntl();
  if (!kanOverstyre) return undefined;

  const { aksjonspunkterForPanel, isReadOnly, alleMerknaderFraBeslutter } = usePanelDataContext();
  const overstyringsAP = aksjonspunkterForPanel.find(
    a => a.definisjon === AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL,
  );
  const harÅpentAP = aksjonspunkterForPanel.some(ap => isAksjonspunktOpen(ap.definisjon));
  const [erOverstyrt, setErOverstyrt] = useState(!!overstyringsAP);
  return (
    <>
      <HStack gap="4">
        <Heading size="small">
          <FormattedMessage id="OverstyringPanel.Tittel" />
        </Heading>
        {!isReadOnly && !harÅpentAP && (
          <OverstyringKnapp onClick={() => setErOverstyrt(true)} erOverstyrt={erOverstyrt} />
        )}
      </HStack>

      {erOverstyrt && (
        <FaktaKort
          label={intl.formatMessage({ id: 'OverstyringForm.Tittel' })}
          merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL]}
        >
          <OverstyringForm
            isReadOnly={isReadOnly}
            gjeldende={gjeldende}
            submittable={submittable}
            overstyringsAP={overstyringsAP}
            avbrytOverstyring={() => setErOverstyrt(false)}
          />
        </FaktaKort>
      )}
    </>
  );
};
