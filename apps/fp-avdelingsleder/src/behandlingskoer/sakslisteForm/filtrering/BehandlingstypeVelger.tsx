import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfCheckbox } from '@navikt/ft-form-hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { type BehandlingType } from '@navikt/fp-kodeverk';

import { lagreSakslisteBehandlingstype, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../../../data/useLosKodeverk';

export type FormValues = { [key in BehandlingType]?: boolean };

const behandlingstypeOrder = [
  'BT-002',
  'BT-003',
  'BT-004',
  'BT-006',
  'BT-007',
  'BT-008',
  'BT-009',
] satisfies BehandlingType[];

interface Props {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
}

export const BehandlingstypeVelger = ({ valgtSakslisteId, valgtAvdelingEnhet }: Props) => {
  const queryClient = useQueryClient();

  const { control } = useFormContext<FormValues>();

  const { mutate: lagreBehandlingstype } = useMutation({
    mutationFn: (valuesToStore: { behandlingType: string; checked: boolean }) =>
      lagreSakslisteBehandlingstype(
        valgtSakslisteId,
        valgtAvdelingEnhet,
        valuesToStore.behandlingType,
        valuesToStore.checked,
      ),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_ANTALL, valgtSakslisteId, valgtAvdelingEnhet],
      });
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVE_AVDELING_ANTALL],
      });
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING],
      });
    },
  });

  const alleBehandlingTyper = useLosKodeverk('BehandlingType');

  const behandlingTyper = behandlingstypeOrder.map(kode => alleBehandlingTyper.find(bt => bt.kode === kode));

  return (
    <VStack gap="space-8">
      <Label size="small">
        <FormattedMessage id="BehandlingstypeVelger.Behandlingstype" />
      </Label>
      {behandlingTyper
        .map(bt => {
          if (!bt) {
            return null;
          }
          return (
            <RhfCheckbox
              key={bt.kode}
              name={bt.kode}
              control={control}
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
