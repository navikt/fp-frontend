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
import { ALLE_YTELSER } from '../fagsakYtelseTypeUtils';
import { slåSammenLikeBehandlingstyperOgDatoer } from './oppgaveUtils';
import { OpprettetAvsluttetGraf } from './OpprettetAvsluttetGraf';
import { TilBehandlingGraf } from './TilBehandlingGraf';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

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
  const [ytelseTyper, setYtelseTyper] = useState(lagretFilter?.ytelseTyper ? lagretFilter.ytelseTyper : []);

  useStoreValuesInLocalStorage(formName, { ukevalg, ytelseTyper });

  const periodeStart = dayjs()
    .subtract(ukevalg === UKE_2 ? 2 : 4, 'w')
    .startOf('day');
  const periodeSlutt = dayjs().endOf('day');

  const filtrerteOppgaverPerDato = oppgaverPerDato
    .filter(ofa => ytelseTyper.length === 0 || ytelseTyper.includes(ofa.fagsakYtelseType))
    .filter(ofa => erDatoInnenforPeriode(ofa, periodeStart, periodeSlutt));
  const sammenslåtteFiltrerteOppgaverPerDato = slåSammenLikeBehandlingstyperOgDatoer(filtrerteOppgaverPerDato);

  return (
    <VStack gap="space-16">
      <Label>
        <FormattedMessage id="TilBehandlingPanel.TilBehandling" />
      </Label>
      <HStack gap="space-8 space-16" align="center">
        <ToggleGroup size="small" value={ukevalg} onChange={value => setUkevalg(value)}>
          <ToggleGroup.Item value={UKE_2}>
            <FormattedMessage id="TilBehandlingPanel.ToSisteUker" />
          </ToggleGroup.Item>
          <ToggleGroup.Item value="4">
            <FormattedMessage id="TilBehandlingPanel.FireSisteUker" />
          </ToggleGroup.Item>
        </ToggleGroup>

        <Chips size="small">
          {ALLE_YTELSER.map(option => (
            <Chips.Toggle
              key={option}
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
      <VStack gap="space-32">
        <TilBehandlingGraf
          height={height}
          behandlingTyper={behandlingTyper}
          periodeStart={periodeStart}
          periodeSlutt={periodeSlutt}
          oppgaverPerDato={sammenslåtteFiltrerteOppgaverPerDato}
        />
        <OpprettetAvsluttetGraf
          height={height}
          behandlingTyper={behandlingTyper}
          periodeStart={periodeStart}
          periodeSlutt={periodeSlutt.subtract(1, 'day')}
          oppgaverPerDato={sammenslåtteFiltrerteOppgaverPerDato}
        />
      </VStack>
    </VStack>
  );
};

const erDatoInnenforPeriode = (
  oppgaveForAvdeling: OppgaverForAvdelingPerDato,
  periodeStart: dayjs.Dayjs,
  periodeSlutt: dayjs.Dayjs,
): boolean => {
  return (
    dayjs(oppgaveForAvdeling.statistikkDato).isSameOrAfter(periodeStart) &&
    dayjs(oppgaveForAvdeling.statistikkDato).isSameOrBefore(periodeSlutt)
  );
};
