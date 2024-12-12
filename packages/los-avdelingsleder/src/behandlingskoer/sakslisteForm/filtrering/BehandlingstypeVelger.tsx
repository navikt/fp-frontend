import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';
import { useMutation } from '@tanstack/react-query';

import { BehandlingType, KodeverkType } from '@navikt/fp-kodeverk';

import { lagreSakslisteBehandlingstype } from '../../../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../../../data/useLosKodeverk';

const behandlingstypeOrder = Object.values(BehandlingType);

interface Props {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
  hentAvdelingensSakslister: () => void;
  hentAntallOppgaver: () => void;
}

export const BehandlingstypeVelger = ({
  valgtSakslisteId,
  valgtAvdelingEnhet,
  hentAvdelingensSakslister,
  hentAntallOppgaver,
}: Props) => {
  const { mutate: lagreBehandlingstype } = useMutation({
    mutationFn: (valuesToStore: { behandlingType: string; checked: boolean }) =>
      lagreSakslisteBehandlingstype(
        valgtSakslisteId,
        valgtAvdelingEnhet,
        valuesToStore.behandlingType,
        valuesToStore.checked,
      ),
    onSuccess: () => {
      hentAntallOppgaver();
      hentAvdelingensSakslister();
    },
  });

  const alleBehandlingTyper = useLosKodeverk(KodeverkType.BEHANDLING_TYPE);

  const behandlingTyper = behandlingstypeOrder.map(kode => alleBehandlingTyper.find(bt => bt.kode === kode));

  return (
    <VStack gap="2">
      <Label size="small">
        <FormattedMessage id="BehandlingstypeVelger.Behandlingstype" />
      </Label>
      {behandlingTyper
        .map(bt => {
          if (!bt) {
            return null;
          }
          return (
            <CheckboxField
              key={bt.kode}
              name={bt.kode}
              label={bt.navn}
              onChange={isChecked =>
                lagreBehandlingstype({
                  behandlingType: bt.kode,
                  checked: isChecked,
                })
              }
            />
          );
        })
        .filter(bt => !!bt)}
    </VStack>
  );
};
