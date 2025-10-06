import { FormattedMessage, useIntl } from 'react-intl';

import { Heading, HStack } from '@navikt/ds-react';
import { OverstyringKnapp } from '@navikt/ft-ui-komponenter';

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
          merknaderFraBeslutter={alleMerknaderFraBeslutter['6019']}
        >
          <OverstyringForm isReadOnly={readOnly} gjeldende={gjeldende} avbrytOverstyring={toggleOverstyring} />
        </FaktaKort>
      )}
    </>
  );
};
