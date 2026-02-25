import dayjs from 'dayjs';

import type { LosBehandlingType, OppgaverForAvdelingPerDato } from '@navikt/fp-types';

export type OppgaverForDato = Omit<OppgaverForAvdelingPerDato, 'fagsakYtelseType'>;
type DataPunkt = [Date, number | undefined];

export const lagGrafDataForBehandlingsType = (
  oppgaverPerDato: OppgaverForDato[],
  mapFunc: (o: OppgaverForDato) => number,
  periodeStart: dayjs.Dayjs,
  periodeSlutt: dayjs.Dayjs,
): [LosBehandlingType, DataPunkt[]][] => {
  const koordinaterPerBehandlingsType = konverterTilKoordinaterGruppertPaBehandlingstype(oppgaverPerDato, mapFunc);
  return fyllInnManglendeDatoerOgSorterEtterDato(koordinaterPerBehandlingsType, periodeStart, periodeSlutt);
};

const konverterTilKoordinaterGruppertPaBehandlingstype = (
  oppgaverForAvdeling: OppgaverForDato[],
  mapFunc: (o: OppgaverForDato) => number,
): Map<LosBehandlingType, DataPunkt[]> =>
  oppgaverForAvdeling.reduce((acc, o) => {
    const nyDataPunkt: DataPunkt = [dayjs(o.statistikkDato).startOf('day').toDate(), mapFunc(o)];

    const eksisterendeDataPunkter = acc.get(o.behandlingType);
    acc.set(o.behandlingType, eksisterendeDataPunkter ? [...eksisterendeDataPunkter, nyDataPunkt] : [nyDataPunkt]);
    return acc;
  }, new Map<LosBehandlingType, DataPunkt[]>());

const fyllInnManglendeDatoerOgSorterEtterDato = (
  data: Map<LosBehandlingType, DataPunkt[]>,
  periodeStart: dayjs.Dayjs,
  periodeSlutt: dayjs.Dayjs,
): [LosBehandlingType, DataPunkt[]][] =>
  Array.from(data.entries())
    .reduce((acc, [behandlingstype, behandlingstypeData]) => {
      const koordinater: DataPunkt[] = [];
      for (let dato = periodeStart; dato.isSameOrBefore(periodeSlutt); dato = dato.add(1, 'day').startOf('day')) {
        const funnetDato = behandlingstypeData.find(d => dayjs(d[0]).isSame(dato));
        koordinater.push(funnetDato ?? [dato.toDate(), undefined]);
      }
      acc.set(behandlingstype, koordinater);
      return acc;
    }, new Map<LosBehandlingType, DataPunkt[]>())
    .entries()
    .toArray();

export const slaSammenLikeBehandlingstyperOgDatoer = (
  oppgaverForAvdeling: OppgaverForAvdelingPerDato[],
): OppgaverForDato[] => {
  const sammenslatte: OppgaverForDato[] = [];

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
        antall: sammenslatte[index]!.antall + o.antall,
      };
    }
  }

  return sammenslatte;
};
