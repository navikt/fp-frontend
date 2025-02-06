import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { CheckboxField } from '@navikt/ft-form-hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { BehandlingType, KodeverkType } from '@navikt/fp-kodeverk';

import { lagreSakslisteBehandlingstype, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../../../data/useLosKodeverk';

const behandlingstypeOrder = Object.values(BehandlingType);

interface Props {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
}

export const BehandlingstypeVelger = ({ valgtSakslisteId, valgtAvdelingEnhet }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: lagreBehandlingstype } = useMutation({
    mutationFn: (valuesToStore: { behandlingType: string; checked: boolean }) =>
      lagreSakslisteBehandlingstype(
        valgtSakslisteId,
        valgtAvdelingEnhet,
        valuesToStore.behandlingType,
        valuesToStore.checked,
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_ANTALL],
      });
      queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_AVDELING_ANTALL],
      });
      queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
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
