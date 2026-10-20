import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { type Location } from 'react-router';

import { Box, Checkbox, VStack } from '@navikt/ds-react';

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
  valgtBehandlingUuid?: string;
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

  const [skalSortertePaValgtBehandling, setSkalSortertePaValgtBehandling] = useState(false);

  const alleHistorikkInnslag = sortAndTagTilbakekreving(historikkFpSak, historikkFpTilbake);

  const filtrerteInnslag =
    valgtBehandlingUuid && skalSortertePaValgtBehandling
      ? alleHistorikkInnslag.filter(i => i.behandlingUuid === valgtBehandlingUuid)
      : alleHistorikkInnslag;

  const [top, setTop] = useState<number>();

  const scrollReset = () => setTop(0);

  useEffect(() => {
    addEventListener('scroll', scrollReset);
    return () => {
      removeEventListener('scroll', scrollReset);
    };
  }, []);

  return (
    <>
      {valgtBehandlingUuid && (
        <Box paddingInline="space-16" paddingBlock="space-16 space-0">
          <Checkbox size="small" onChange={() => setSkalSortertePaValgtBehandling(!skalSortertePaValgtBehandling)}>
            {intl.formatMessage({ id: 'History.FiltrerPaBehandling' })}
          </Checkbox>
        </Box>
      )}
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
