import { type ReactElement, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { Box, Checkbox, Heading, HStack, VStack } from '@navikt/ds-react';
import { type Location } from 'history';

import type { AlleKodeverk, AlleKodeverkTilbakekreving, Historikkinnslag } from '@navikt/fp-types';

import { sortAndTagTilbakekreving } from '../utils/historikkUtils';
import { HistorikkInnslag } from './HistorikkInnslag/HistorikkInnslag';

import styles from './historikk.module.css';

interface Props {
  valgtBehandlingUuid?: string;
  historikkFpSak: Historikkinnslag[];
  historikkFpTilbake: Historikkinnslag[];
  alleKodeverkFpTilbake?: AlleKodeverkTilbakekreving;
  alleKodeverkFpSak: AlleKodeverk;
  saksnummer: string;
  getBehandlingLocation: (behandlingUuid: string) => Location;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location | undefined;
  utvidEllerMinskBehandlingDetaljerKnapp: ReactElement;
}

/**
 * Historikk
 *
 * Historikken for en behandling
 */
export const Historikk = ({
  valgtBehandlingUuid,
  historikkFpSak,
  historikkFpTilbake,
  alleKodeverkFpSak, // TODO: Kodeverk brukes bare får å hente navn på aktør
  alleKodeverkFpTilbake, // TODO: Kodeverk brukes bare får å hente navn på aktør
  saksnummer,
  getBehandlingLocation,
  createLocationForSkjermlenke,
  utvidEllerMinskBehandlingDetaljerKnapp,
}: Props) => {
  const intl = useIntl();

  const [skalSortertePaValgtBehandling, setSkalSortertePaValgtBehandling] = useState(false);

  const alleHistorikkInnslag = sortAndTagTilbakekreving(historikkFpSak, historikkFpTilbake);

  const filtrerteInnslag =
    valgtBehandlingUuid && skalSortertePaValgtBehandling
      ? alleHistorikkInnslag.filter(i => i.behandlingUuid === valgtBehandlingUuid)
      : alleHistorikkInnslag;

  const [top, setTop] = useState<number>();

  const scrollReset = () => setTop(0);

  useEffect(() => {
    window.addEventListener('scroll', scrollReset);
    return () => {
      window.removeEventListener('scroll', scrollReset);
    };
  }, []);

  return (
    <>
      <Box background="bg-subtle" borderColor="border-divider" borderWidth="0 0 2 0" padding="5">
        <HStack justify="space-between">
          <HStack gap="1" align="center">
            <Heading size="small">{intl.formatMessage({ id: 'History.Historikk' })}</Heading>
            {utvidEllerMinskBehandlingDetaljerKnapp}
          </HStack>
          <HStack gap="8">
            {valgtBehandlingUuid && (
              <Checkbox size="small" onChange={() => setSkalSortertePaValgtBehandling(!skalSortertePaValgtBehandling)}>
                {intl.formatMessage({ id: 'History.FiltrerPaBehandling' })}
              </Checkbox>
            )}
            <div className={styles.circle}>{filtrerteInnslag.length}</div>
          </HStack>
        </HStack>
      </Box>
      <div
        style={{ height: `calc(100vh - ${top}px)` }}
        className={styles.overflow}
        ref={el => {
          if (el) {
            setTop(el.getBoundingClientRect().top);
          }
        }}
      >
        <VStack gap="2" padding="4">
          {filtrerteInnslag.map(historikkinnslag => {
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
    </>
  );
};
