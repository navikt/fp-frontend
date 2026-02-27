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
  Array.from(
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
      .entries(),
  );

export const slåSammenLikeBehandlingstyperOgDatoer = (
  oppgaverForAvdeling: OppgaverForAvdelingPerDato[],
): OppgaverForDato[] => {
  const gruppertPåBehandlingsTypeOgDato = Map.groupBy(
    oppgaverForAvdeling,
    o => `${o.behandlingType}|${o.statistikkDato}`,
  );

  return Array.from(gruppertPåBehandlingsTypeOgDato.entries()).map(summerOppgaverIGruppe);
};
const summerOppgaverIGruppe = ([, oppgaver]: [string, OppgaverForAvdelingPerDato[]]): OppgaverForDato => {
  const [første, ...resten] = oppgaver;
  if (!første) {
    throw new Error('Gruppen må inneholde minst én oppgave');
  }

  return resten.reduce<OppgaverForDato>(
    (acc, o) => ({
      behandlingType: acc.behandlingType,
      statistikkDato: acc.statistikkDato,
      opprettet: acc.opprettet + o.opprettet,
      avsluttet: acc.avsluttet + o.avsluttet,
      antall: acc.antall + o.antall,
    }),
    {
      behandlingType: første.behandlingType,
      statistikkDato: første.statistikkDato,
      antall: første.antall,
      avsluttet: første.avsluttet,
      opprettet: første.opprettet,
    },
  );
};
