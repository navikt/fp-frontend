import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { RadioGroupPanel } from '@navikt/ft-form-hooks';
import { useMutation } from '@tanstack/react-query';

import { BehandlingType } from '@navikt/fp-kodeverk';

import { lagreSakslisteSortering } from '../../../data/fplosAvdelingslederApi';
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
  hentAvdelingensSakslister: () => void;
  hentAntallOppgaver: () => void;
}

export const SorteringVelger = ({
  valgtSakslisteId,
  valgteBehandlingtyper,
  valgtAvdelingEnhet,
  erDynamiskPeriode,
  hentAvdelingensSakslister,
  hentAntallOppgaver,
}: Props) => {
  const { resetField } = useFormContext();

  const { mutate: lagreSortering } = useMutation({
    mutationFn: (valuesToStore: { sorteringType: string }) =>
      lagreSakslisteSortering(valgtSakslisteId, valuesToStore.sorteringType, valgtAvdelingEnhet),
    onSuccess: () => {
      hentAntallOppgaver();
      hentAvdelingensSakslister();
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
                  hentAvdelingensSakslister={hentAvdelingensSakslister}
                  hentAntallOppgaver={hentAntallOppgaver}
                />
              )}
              {koSortering.felttype === 'HELTALL' && (
                <BelopSorteringValg
                  valgtSakslisteId={valgtSakslisteId}
                  valgtAvdelingEnhet={valgtAvdelingEnhet}
                  hentAvdelingensSakslister={hentAvdelingensSakslister}
                  hentAntallOppgaver={hentAntallOppgaver}
                />
              )}
            </>
          ),
        }))}
    />
  );
};
