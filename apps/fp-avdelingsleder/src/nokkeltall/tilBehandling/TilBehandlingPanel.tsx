import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Chips, HStack, Label, ToggleGroup, VStack } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import { type OppgaverForAvdelingPerDato } from '@navikt/fp-types';

import { oppgaverPerDatoOptions } from '../../data/fplosAvdelingslederApi';
import { getParsedValueFromLocalStorage, useStoreValuesInLocalStorage } from '../../data/localStorageHelper';
import { useLosKodeverk } from '../../data/useLosKodeverk';
import type { OppgaveForDato } from '../../typer/oppgaverForDatoTsType';
import { type EndringForDatoGraf, OpprettetAvsluttetGraf } from './OpprettetAvsluttetGraf.tsx';
import { type OppgaveForDatoGraf, TilBehandlingGraf } from './TilBehandlingGraf';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const ALLE_YTELSETYPER = ['FP', 'SVP', 'ES'];
const UKE_2 = '2';

type FormValues = {
  ukevalg: string;
  ytelseTyper: string[];
};

const formName = 'tilBehandlingForm';

interface Props {
  height: number;
  valgtAvdelingEnhet: string;
}

export const TilBehandlingPanel = ({ height, valgtAvdelingEnhet }: Props) => {
  const { data: oppgaverPerDato } = useQuery(oppgaverPerDatoOptions(valgtAvdelingEnhet));

  const behandlingTyper = useLosKodeverk('BehandlingType');
  const fagsakYtelseTyper = useLosKodeverk('FagsakYtelseType');

  const lagretFilter = getParsedValueFromLocalStorage<FormValues>(formName);

  const [ukevalg, setUkevalg] = useState(lagretFilter?.ukevalg ?? UKE_2);
  const [ytelseTyper, setYtelseTyper] = useState(
    lagretFilter?.ytelseTyper && lagretFilter.ytelseTyper.length > 0 ? lagretFilter.ytelseTyper : [],
  );

  useStoreValuesInLocalStorage(formName, { ukevalg, ytelseTyper });

  return (
    <VStack gap="space-16">
      <Label>
        <FormattedMessage id="TilBehandlingPanel.TilBehandling" />
      </Label>
      <HStack gap="space-8 space-32" align="end" justify="space-between">
        <ToggleGroup size="small" value={ukevalg} onChange={value => setUkevalg(value)}>
          <ToggleGroup.Item value={UKE_2}>
            <FormattedMessage id="TilBehandlingPanel.ToSisteUker" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="4">
            <FormattedMessage id="TilBehandlingPanel.FireSisteUker" />
          </ToggleGroup.Item>
        </ToggleGroup>

        <Chips size="small">
          {ALLE_YTELSETYPER.map(option => (
            <Chips.Toggle
              key={option}
              checkmark={false}
              selected={ytelseTyper.includes(option)}
              onClick={() =>
                setYtelseTyper(
                  ytelseTyper.includes(option) ? ytelseTyper.filter(x => x !== option) : [...ytelseTyper, option],
                )
              }
            >
              {fagsakYtelseTyper.find(b => b.kode === option)?.navn ?? ''}
            </Chips.Toggle>
          ))}
        </Chips>
      </HStack>

      <TilBehandlingGraf
        height={height}
        isToUkerValgt={ukevalg === UKE_2}
        behandlingTyper={behandlingTyper}
        oppgaverPerDato={slaSammenLikeBehandlingstyperOgDatoer(
          oppgaverPerDato
            .filter(ofa => ytelseTyper.length === 0 || ytelseTyper.includes(ofa.fagsakYtelseType))
            .filter(ofa => erDatoInnenforPeriode(ofa, ukevalg)),
        )}
      />
      <div
        /* Ekstra mellomrom pga legends */
      />
      <OpprettetAvsluttetGraf
        height={height}
        isToUkerValgt={ukevalg === UKE_2}
        behandlingTyper={behandlingTyper}
        endringPerDato={slaSammenLikeEndringerOgDatoer(
          oppgaverPerDato
            .filter(ofa => ytelseTyper.length === 0 || ytelseTyper.includes(ofa.fagsakYtelseType))
            .filter(ofa => erDatoInnenforPeriode(ofa, ukevalg)),
        )}
      />
    </VStack>
  );
};

const uker = [
  {
    kode: UKE_2,
    tekstKode: 'TilBehandlingPanel.ToSisteUker',
  },
  {
    kode: '4',
    tekstKode: 'TilBehandlingPanel.FireSisteUker',
  },
];

const erDatoInnenforPeriode = (oppgaveForAvdeling: OppgaverForAvdelingPerDato, ukevalg: string): boolean => {
  if (ukevalg === uker[1]?.kode) {
    return true;
  }
  const toUkerSiden = dayjs().subtract(2, 'w');
  return dayjs(oppgaveForAvdeling.statistikkDato).isSameOrAfter(toUkerSiden);
};

const slaSammenLikeBehandlingstyperOgDatoer = (
  oppgaverForAvdeling: OppgaverForAvdelingPerDato[],
): OppgaveForDatoGraf[] => {
  const sammenslatte: OppgaveForDatoGraf[] = [];

  for (const o of oppgaverForAvdeling) {
    const index = sammenslatte.findIndex(
      s => s.behandlingType === o.behandlingType && s.statistikkDato === o.statistikkDato,
    );
    if (index === -1) {
      sammenslatte.push(o);
    } else {
      sammenslatte[index] = {
        behandlingType: sammenslatte[index]!.behandlingType,
        statistikkDato: sammenslatte[index]!.statistikkDato,
        antall: sammenslatte[index]!.antall + o.antall,
      };
    }
  }

  return sammenslatte;
};

const slaSammenLikeEndringerOgDatoer = (oppgaverForAvdeling: OppgaverForAvdelingPerDato[]): EndringForDatoGraf[] => {
  const sammenslatte: EndringForDatoGraf[] = [];

  for (const o of oppgaverForAvdeling) {
    const index = sammenslatte.findIndex(
      s => s.behandlingType === o.behandlingType && s.statistikkDato === o.statistikkDato,
    );
    if (index === -1) {
      sammenslatte.push(o);
    } else {
      sammenslatte[index] = {
        behandlingType: sammenslatte[index]!.behandlingType,
        statistikkDato: sammenslatte[index]!.statistikkDato,
        opprettet: sammenslatte[index]!.opprettet + o.opprettet,
        avsluttet: sammenslatte[index]!.avsluttet + o.avsluttet,
      };
    }
  }

  return sammenslatte;
};
