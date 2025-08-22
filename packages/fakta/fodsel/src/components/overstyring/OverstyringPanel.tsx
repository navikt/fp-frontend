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
  submittable: boolean;
}

export const OverstyringPanel = ({ gjeldende, submittable }: Props) => {
  const intl = useIntl();

  const { erOverstyrt, toggleOverstyring, kanOverstyreAccess } = usePanelOverstyring();
  const { alleMerknaderFraBeslutter, isReadOnly } = usePanelDataContext();

  return (
    <>
      {kanOverstyreAccess.isEnabled && (
        <HStack gap="4">
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
          <OverstyringForm
            isReadOnly={isReadOnly}
            gjeldende={gjeldende}
            submittable={submittable}
            avbrytOverstyring={toggleOverstyring}
          />
        </FaktaKort>
      )}
    </>
  );
};
