import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import dayjs from 'dayjs';
import { Location } from 'history';

import { Box, Checkbox, Heading, HStack, VStack } from '@navikt/ds-react';
import { AlleKodeverk, AlleKodeverkTilbakekreving, HistorikkinnslagV2 } from '@navikt/fp-types';
import { getKodeverknavnFn } from '@navikt/fp-kodeverk';

import { Snakkeboble } from './Snakkeboble/Snakkeboble';
import { EnvironmentWrapper } from './EnvironmentWrapper';

import styles from './historikk.module.css';
import { useDevMode } from '@navikt/fp-sak-historikk/src/hooks/useDevMode';

type HistorikkMedTilbakekrevingIndikator = HistorikkinnslagV2 & {
  erTilbakekreving?: boolean;
};

const sortAndTagTilbakekreving = (
  historikkFpsak: HistorikkinnslagV2[] = [],
  historikkFptilbake: HistorikkinnslagV2[] = [],
): HistorikkMedTilbakekrevingIndikator[] => {
  const historikkFraTilbakekrevingMedMarkor = historikkFptilbake.map(ht => ({ ...ht, erTilbakekreving: true }));
  return [...historikkFpsak, ...historikkFraTilbakekrevingMedMarkor].sort((a, b) =>
    dayjs(b.opprettetTidspunkt).diff(dayjs(a.opprettetTidspunkt)),
  );
};

interface Props {
  valgtBehandlingUuid?: string;
  historikkFpSak: HistorikkinnslagV2[];
  historikkFpTilbake: HistorikkinnslagV2[];
  alleKodeverkFpTilbake?: AlleKodeverkTilbakekreving;
  alleKodeverkFpSak: AlleKodeverk;
  kjønn: string;
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
  alleKodeverkFpSak,
  alleKodeverkFpTilbake,
  kjønn,
  saksnummer,
  getBehandlingLocation,
  createLocationForSkjermlenke,
}: Props) => {
  const intl = useIntl();
  const isDevMode = useDevMode();

  const [skalSortertePaValgtBehandling, setSkalSortertePaBehandling] = useState(false);

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
          <Heading size="small">{intl.formatMessage({ id: 'History.Historikk' })}</Heading>
          <HStack gap="8">
            {valgtBehandlingUuid && (
              <Checkbox size="small" onChange={() => setSkalSortertePaBehandling(!skalSortertePaValgtBehandling)}>
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
        ref={el => el && setTop(el.getBoundingClientRect().top)}
      >
        <VStack gap="4" padding="4">
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
                <Snakkeboble
                  saksnummer={saksnummer}
                  historikkInnslag={historikkinnslag}
                  kjønn={kjønn}
                  createLocationForSkjermlenke={createLocationForSkjermlenke}
                  behandlingLocation={getBehandlingLocation(historikkinnslag.behandlingUuid)}
                  getKodeverknavn={getKodeverknavn}
                />
              </EnvironmentWrapper>
            );
          })}
        </VStack>
      </div>
    </>
  );
};
