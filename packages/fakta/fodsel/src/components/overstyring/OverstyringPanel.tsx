import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, HStack } from '@navikt/ds-react';
import { OverstyringKnapp } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { FødselGjeldende } from '@navikt/fp-types';
import { FaktaKort } from '@navikt/fp-ui-komponenter';
import { usePanelDataContext, usePanelOverstyring } from '@navikt/fp-utils';

import { OverstyringForm } from './OverstyringForm';

interface Props {
  gjeldende: FødselGjeldende;
}

export const OverstyringPanel = ({ gjeldende }: Props) => {
  const intl = useIntl();

  const { erOverstyrt, toggleOverstyring, kanOverstyreAccess, overrideReadOnly } = usePanelOverstyring();
  const { alleMerknaderFraBeslutter } = usePanelDataContext();

  const readOnly = !erOverstyrt || overrideReadOnly || !kanOverstyreAccess.isEnabled;

  return (
    <>
      {kanOverstyreAccess.isEnabled && (
        <HStack gap="space-16">
          <Heading size="small">
            <FormattedMessage id="OverstyringPanel.Tittel" />
          </Heading>
          <OverstyringKnapp onClick={toggleOverstyring} erOverstyrt={erOverstyrt} />
        </HStack>
      )}

      {erOverstyrt && (
        <FaktaKort
          label={intl.formatMessage({ id: 'OverstyringForm.Tittel' })}
          merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL]}
        >
          <OverstyringForm isReadOnly={readOnly} gjeldende={gjeldende} avbrytOverstyring={toggleOverstyring} />
        </FaktaKort>
      )}
    </>
  );
};
