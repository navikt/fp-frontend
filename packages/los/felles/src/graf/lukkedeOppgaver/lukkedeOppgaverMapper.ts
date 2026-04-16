import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs, { Dayjs } from 'dayjs';

import type { KøStatistikkDto } from '@navikt/fp-types';

import { startAvIsoUke } from './ukeUtils';

export type DataPunkt = number | undefined;

export type LukkedeOppgaverData = Readonly<{
  antallPerDag: DataPunkt[];
  forrigeUkeTotal: DataPunkt;
  onsdagForrigeUke: DataPunkt;
  mandagDato: string;
  erInneværendeUke: boolean;
}>;

type LukkedeOppgaverUker = Readonly<{
  denneUken: LukkedeOppgaverData;
  forrigeUke: LukkedeOppgaverData;
}>;

const summerLukkedePerDato = (statistikk: KøStatistikkDto[]): Map<string, number> => {
  const lukkedePerDato = new Map<string, number>();
  for (const s of statistikk) {
    const dato = dayjs(s.tidspunkt).format(ISO_DATE_FORMAT);
    lukkedePerDato.set(dato, (lukkedePerDato.get(dato) ?? 0) + s.avsluttet);
  }
  return lukkedePerDato;
};

const hentUkeverdier = (avsluttetPerDato: Map<string, number>, mandagDato: dayjs.Dayjs): DataPunkt[] =>
  Array.from({ length: 7 }, (_, i) => {
    const dato = mandagDato.add(i, 'day').format(ISO_DATE_FORMAT);
    return avsluttetPerDato.get(dato);
  });

export const summer = (dager: DataPunkt[]): DataPunkt => {
  const filtrerteDager = dager.filter(v => v !== undefined);
  if (filtrerteDager.length === 0) {
    return undefined;
  }
  return filtrerteDager.reduce((sum, v) => sum + v, 0);
};

const lagUkeData = (
  ukeDager: DataPunkt[],
  referanseUkeDager: DataPunkt[],
  mandagDato: Dayjs,
  erInneværendeUke = false,
): LukkedeOppgaverData => ({
  antallPerDag: ukeDager,
  forrigeUkeTotal: summer(referanseUkeDager),
  onsdagForrigeUke: summer(referanseUkeDager.slice(0, 3)),
  mandagDato: mandagDato.format(ISO_DATE_FORMAT),
  erInneværendeUke,
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
    denneUken: lagUkeData(dagerDenneUken, dagerForrigeUke, mandagDenneUken, true),
    forrigeUke: lagUkeData(dagerForrigeUke, dagerToUkerTilbake, mandagForrigeUke),
  };
};
