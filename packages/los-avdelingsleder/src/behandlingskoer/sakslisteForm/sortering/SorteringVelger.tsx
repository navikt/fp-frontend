import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { BehandlingType } from '@navikt/fp-kodeverk';

import { lagreSakslisteSortering, LosUrl } from '../../../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../../../data/useLosKodeverk';
import { KøSorteringType } from '../../../typer/koSorteringTsType';
import { BelopSorteringValg } from './BelopSorteringValg';
import { DatoSorteringValg } from './DatoSorteringValg';

const bareTilbakekrevingValgt = (valgteBehandlingtyper?: string[]) =>
  valgteBehandlingtyper &&
  valgteBehandlingtyper.some(
    type => type === BehandlingType.TILBAKEKREVING || type === BehandlingType.TILBAKEKREVING_REVURDERING,
  ) &&
  !valgteBehandlingtyper.some(
    type => type !== BehandlingType.TILBAKEKREVING && type !== BehandlingType.TILBAKEKREVING_REVURDERING,
  );

interface Props {
  valgtSakslisteId: number;
  valgteBehandlingtyper?: string[];
  valgtAvdelingEnhet: string;
  erDynamiskPeriode: boolean;
}

export const SorteringVelger = ({
  valgtSakslisteId,
  valgteBehandlingtyper,
  valgtAvdelingEnhet,
  erDynamiskPeriode,
}: Props) => {
  const queryClient = useQueryClient();
  const { resetField } = useFormContext();

  const { mutate: lagreSortering } = useMutation({
    mutationFn: (valuesToStore: { sorteringType: string }) =>
      lagreSakslisteSortering(valgtSakslisteId, valuesToStore.sorteringType, valgtAvdelingEnhet),
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

  const koSorteringer = useLosKodeverk<KøSorteringType>('KøSortering');

  return (
    <RadioGroupPanel
      name="sortering"
      label={<FormattedMessage id="SorteringVelger.Sortering" />}
      onChange={sorteringType => {
        resetField('fra', { defaultValue: '' });
        resetField('til', { defaultValue: '' });
        resetField('fomDato', { defaultValue: '' });
        resetField('tomDato', { defaultValue: '' });
        resetField('erDynamiskPeriode', { defaultValue: '' });

        return lagreSortering({
          sorteringType,
        });
      }}
      radios={koSorteringer
        .filter(
          koSortering =>
            koSortering.feltkategori !== 'TILBAKEKREVING' || bareTilbakekrevingValgt(valgteBehandlingtyper),
        )
        .map(koSortering => ({
          value: koSortering.kode,
          label: koSortering.navn,
          element: (
            <>
              {koSortering.felttype === 'DATO' && (
                <DatoSorteringValg
                  valgtSakslisteId={valgtSakslisteId}
                  valgtAvdelingEnhet={valgtAvdelingEnhet}
                  erDynamiskPeriode={erDynamiskPeriode}
                />
              )}
              {koSortering.felttype === 'HELTALL' && (
                <BelopSorteringValg valgtSakslisteId={valgtSakslisteId} valgtAvdelingEnhet={valgtAvdelingEnhet} />
              )}
            </>
          ),
        }))}
    />
  );
};