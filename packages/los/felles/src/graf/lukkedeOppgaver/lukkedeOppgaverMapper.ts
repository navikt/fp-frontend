import dayjs, { Dayjs } from 'dayjs';

import type { KøStatistikkDto } from '@navikt/fp-types';

import { startAvIsoUke } from './ukeUtils';

export type LukkedeOppgaverData = Readonly<{
  antallPerDag: number[];
  forrigeUkeTotal: number;
  onsdagForrigeUke: number;
  mandagDato: string;
}>;

type LukkedeOppgaverUker = Readonly<{
  denneUken: LukkedeOppgaverData;
  forrigeUke: LukkedeOppgaverData;
}>;

const summerLukkedePerDato = (statistikk: KøStatistikkDto[]): Map<string, number> => {
  const lukkedePerDato = new Map<string, number>();
  for (const s of statistikk) {
    const dato = dayjs(s.tidspunkt).format('YYYY-MM-DD');
    lukkedePerDato.set(dato, (lukkedePerDato.get(dato) ?? 0) + s.avsluttet);
  }
  return lukkedePerDato;
};

const hentUkeverdier = (avsluttetPerDato: Map<string, number>, mandagDato: dayjs.Dayjs): number[] =>
  Array.from({ length: 7 }, (_, i) => {
    const dato = mandagDato.add(i, 'day').format('YYYY-MM-DD');
    return avsluttetPerDato.get(dato) ?? 0;
  });

const summer = (dager: number[], kunTilOgMedOnsdag = false): number => {
  const utsnitt = kunTilOgMedOnsdag ? dager.slice(0, 3) : dager;
  return utsnitt.reduce((sum, v) => sum + v, 0);
};

const lagUkeData = (ukeDager: number[], referanseUkeDager: number[], mandagDato: Dayjs): LukkedeOppgaverData => ({
  antallPerDag: ukeDager,
  forrigeUkeTotal: summer(referanseUkeDager),
  onsdagForrigeUke: summer(referanseUkeDager, true),
  mandagDato: mandagDato.format('YYYY-MM-DD'),
});

export const mapLukkedeOppgaver = (køStatistikk: KøStatistikkDto[]): LukkedeOppgaverUker => {
  const mandagDenneUken = startAvIsoUke(dayjs());
  const mandagForrigeUke = mandagDenneUken.subtract(1, 'week');
  const mandagToUkerTilbake = mandagForrigeUke.subtract(1, 'week');

  const perDag = summerLukkedePerDato(køStatistikk);

  const dagerToUkerTilbake = hentUkeverdier(perDag, mandagToUkerTilbake);
  const dagerForrigeUke = hentUkeverdier(perDag, mandagForrigeUke);
  const dagerDenneUken = hentUkeverdier(perDag, mandagDenneUken);

  return {
    denneUken: lagUkeData(dagerDenneUken, dagerForrigeUke, mandagDenneUken),
    forrigeUke: lagUkeData(dagerForrigeUke, dagerToUkerTilbake, mandagForrigeUke),
  };
};
