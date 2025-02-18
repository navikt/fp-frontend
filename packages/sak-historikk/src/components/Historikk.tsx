import { useCallback, useEffect, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';

import { Box, Checkbox, Heading, HStack, VStack } from '@navikt/ds-react';
import { useStorageToggle } from '@navikt/ft-hooks';
import { type Location } from 'history';

import { getKodeverknavnFn } from '@navikt/fp-kodeverk';
import type { AlleKodeverk, AlleKodeverkTilbakekreving, Historikkinnslag } from '@navikt/fp-types';

import { sortAndTagTilbakekreving } from '../utils/historikkUtils';
import { EnvironmentWrapper } from './EnvironmentWrapper';
import { HistorikkInnslag } from './HistorikkInnslag/HistorikkInnslag';
import { UtvidHistorikkKnapp } from './HistorikkInnslag/UtvidHistorikkKnapp.tsx';

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
}: Props) => {
  const intl = useIntl();
  const isDevMode = useStorageToggle({ key: 'devmode' });

  const [skalSortertePaValgtBehandling, setSkalSortertePaValgtBehandling] = useState(false);

  const alleHistorikkInnslag = useMemo(
    () => sortAndTagTilbakekreving(historikkFpSak, historikkFpTilbake),
    [historikkFpSak, historikkFpTilbake],
  );

  const filtrerteInnslag = useMemo(
    () =>
      valgtBehandlingUuid && skalSortertePaValgtBehandling
        ? alleHistorikkInnslag.filter(i => i.behandlingUuid === valgtBehandlingUuid)
        : alleHistorikkInnslag,
    [alleHistorikkInnslag, valgtBehandlingUuid, skalSortertePaValgtBehandling],
  );

  const getKodeverknavnFpSak = useMemo(() => getKodeverknavnFn(alleKodeverkFpSak), [alleKodeverkFpSak]);
  const getKodeverknavnFpTilbake = useMemo(
    () => (alleKodeverkFpTilbake ? getKodeverknavnFn(alleKodeverkFpTilbake) : undefined),
    [alleKodeverkFpTilbake],
  );
  const [top, setTop] = useState<number>();

  const scrollReset = useCallback(() => setTop(0), []);

  const [utvidHistorikkPanel, setUtvidHistorikkPanel] = useState(true);

  const toggleHistorikkPanel = () => {
    setUtvidHistorikkPanel(!utvidHistorikkPanel);
  };

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
          <Heading size="small">
            {intl.formatMessage({ id: 'History.Historikk' })}
            <UtvidHistorikkKnapp
              toggleHistorikkPanel={toggleHistorikkPanel}
              utvidHistorikkPanel={utvidHistorikkPanel}
            />
          </Heading>
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
        //@ts-expect-error Fix denne
        ref={el => el && setTop(el.getBoundingClientRect().top)}
      >
        <VStack gap="2" padding="4">
          {filtrerteInnslag.map(historikkinnslag => {
            const getKodeverknavn = historikkinnslag.erTilbakekreving ? getKodeverknavnFpTilbake : getKodeverknavnFpSak;

            if (!getKodeverknavn) {
              return null;
            }
            return (
              <EnvironmentWrapper
                shouldRender={isDevMode}
                key={historikkinnslag.opprettetTidspunkt}
                historikkinnslag={historikkinnslag}
              >
                <HistorikkInnslag
                  saksnummer={saksnummer}
                  historikkInnslag={historikkinnslag}
                  createLocationForSkjermlenke={createLocationForSkjermlenke}
                  getKodeverknavn={getKodeverknavn}
                  behandlingLocation={
                    historikkinnslag.behandlingUuid ? getBehandlingLocation(historikkinnslag.behandlingUuid) : undefined
                  }
                />
              </EnvironmentWrapper>
            );
          })}
        </VStack>
      </div>
    </>
  );
};
