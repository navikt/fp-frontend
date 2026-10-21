import { useEffect, useState } from 'react';
import { type Location } from 'react-router';

import { VStack } from '@navikt/ds-react';

import type {
  AlleKodeverk,
  AlleKodeverkTilbakekreving,
  Historikkinnslag,
  HistorikkinnslagDtoFpTilbake,
  SkjermlenkeType,
  SkjermlenkeTypeFpTilbake,
} from '@navikt/fp-types';

import { sortAndTagTilbakekreving } from '../utils/historikkUtils';
import { HistorikkInnslag } from './HistorikkInnslag/HistorikkInnslag';

import styles from './historikk.module.css';

interface Props {
  historikkFpSak: Historikkinnslag[];
  historikkFpTilbake: HistorikkinnslagDtoFpTilbake[];
  alleKodeverkFpTilbake?: AlleKodeverkTilbakekreving;
  alleKodeverkFpSak: AlleKodeverk;
  saksnummer: string;
  getBehandlingLocation: (behandlingUuid: string) => Location;
  createLocationForSkjermlenke: (
    behandlingLocation: Location,
    skjermlenkeCode: SkjermlenkeType | SkjermlenkeTypeFpTilbake,
  ) => Location | undefined;
}

/**
 * Historikk
 *
 * Historikken for en behandling
 */
export const Historikk = ({
  historikkFpSak,
  historikkFpTilbake,
  alleKodeverkFpSak, // TODO: Kodeverk brukes bare får å hente navn på aktør
  alleKodeverkFpTilbake, // TODO: Kodeverk brukes bare får å hente navn på aktør
  saksnummer,
  getBehandlingLocation,
  createLocationForSkjermlenke,
}: Props) => {
  const alleHistorikkInnslag = sortAndTagTilbakekreving(historikkFpSak, historikkFpTilbake);

  const [top, setTop] = useState<number>();

  const scrollReset = () => setTop(0);

  useEffect(() => {
    addEventListener('scroll', scrollReset);
    return () => {
      removeEventListener('scroll', scrollReset);
    };
  }, []);

  return (
    <div
      style={{ height: `calc(100vh - ${top}px)` }}
      className={styles['overflow']}
      ref={el => {
        if (el) {
          setTop(el.getBoundingClientRect().top);
        }
      }}
    >
      <VStack gap="space-8" padding="space-16">
        {alleHistorikkInnslag.map(historikkinnslag => {
          const alleKodeverk = historikkinnslag.erTilbakekreving ? alleKodeverkFpTilbake : alleKodeverkFpSak;

          if (!alleKodeverk) {
            return null;
          }
          return (
            <HistorikkInnslag
              key={historikkinnslag.opprettetTidspunkt}
              saksnummer={saksnummer}
              historikkInnslag={historikkinnslag}
              createLocationForSkjermlenke={createLocationForSkjermlenke}
              alleKodeverk={alleKodeverk}
              behandlingLocation={
                historikkinnslag.behandlingUuid ? getBehandlingLocation(historikkinnslag.behandlingUuid) : undefined
              }
            />
          );
        })}
      </VStack>
    </div>
  );
};
