import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Box, Radio, VStack } from '@navikt/ds-react';
import { RhfRadioGroup } from '@navikt/ft-form-hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { lagreSakslisteSortering, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../../../data/useLosKodeverk';
import type { KøSorteringFelt } from '../../../typer/sakslisteAvdelingTsType.ts';
import { BelopSorteringValg, type FormValues as BelopSorteringValgFormValues } from './BelopSorteringValg';
import { DatoSorteringValg, type FormValues as DatoSorteringValgFormValues } from './DatoSorteringValg';

export type FormValues = {
  sortering?: string;
} & (BelopSorteringValgFormValues & DatoSorteringValgFormValues);

const bareTilbakekrevingValgt = (valgteBehandlingtyper?: string[]) =>
  valgteBehandlingtyper &&
  valgteBehandlingtyper.some(type => type === 'BT-007' || type === 'BT-009') &&
  !valgteBehandlingtyper.some(type => type !== 'BT-007' && type !== 'BT-009');

interface Props {
  valgtSakslisteId: number;
  valgteBehandlingtyper?: string[];
  valgtAvdelingEnhet: string;
  erDynamiskPeriode: boolean;
  muligeSorteringer: KøSorteringFelt[];
}

export const SorteringVelger = ({
  valgtSakslisteId,
  valgteBehandlingtyper,
  valgtAvdelingEnhet,
  erDynamiskPeriode,
  muligeSorteringer,
}: Props) => {
  const queryClient = useQueryClient();

  const { resetField, control, watch } = useFormContext<FormValues>();

  const { mutate: lagreSortering } = useMutation({
    mutationFn: (valuesToStore: { sorteringType: string }) =>
      lagreSakslisteSortering(valgtSakslisteId, valuesToStore.sorteringType, valgtAvdelingEnhet),
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

  const koSorteringer = useLosKodeverk('KøSortering');

  const sortering = watch('sortering');

  return (
    <Box.New borderWidth="1" borderColor="neutral-subtle" padding="10">
      <RhfRadioGroup
        name="sortering"
        control={control}
        legend={<FormattedMessage id="SorteringVelger.Sortering" />}
        onChange={sorteringType => {
          resetField('fra', { defaultValue: '' });
          resetField('til', { defaultValue: '' });
          resetField('fomDato', { defaultValue: '' });
          resetField('tomDato', { defaultValue: '' });
          resetField('erDynamiskPeriode', { defaultValue: false });

          return lagreSortering({
            sorteringType: String(sorteringType),
          });
        }}
      >
        {muligeSorteringer
          .filter(
            koSortering =>
              koSortering.feltKategori !== 'TILBAKEKREVING' || bareTilbakekrevingValgt(valgteBehandlingtyper),
          )
          .map(koSortering => (
            <VStack key={koSortering.køSortering} gap="space-2">
              <Radio value={koSortering.køSortering} size="small">
                {koSorteringer.filter(k => k.kode === koSortering.køSortering).map(k => k.navn)}
              </Radio>
              {sortering === koSortering.køSortering && (
                <>
                  {koSortering.feltType === 'DATO' && (
                    <DatoSorteringValg
                      valgtSakslisteId={valgtSakslisteId}
                      valgtAvdelingEnhet={valgtAvdelingEnhet}
                      erDynamiskPeriode={erDynamiskPeriode}
                    />
                  )}
                  {koSortering.feltType === 'HELTALL' && (
                    <BelopSorteringValg valgtSakslisteId={valgtSakslisteId} valgtAvdelingEnhet={valgtAvdelingEnhet} />
                  )}
                </>
              )}
            </VStack>
          ))}
      </RhfRadioGroup>
    </Box.New>
  );
};
