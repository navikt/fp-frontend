import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Location } from 'history';
import { useIntl } from 'react-intl';
import moment from 'moment';
import { Checkbox, Detail, Heading, HStack, VStack } from '@navikt/ds-react';

import { AlleKodeverk, AlleKodeverkTilbakekreving, Historikkinnslag } from '@navikt/fp-types';
import { getKodeverknavnFn, historikkAktor as HistorikkAktor, KodeverkType } from '@navikt/fp-kodeverk';
import Snakkeboble from './maler/felles/snakkeboble';

import styles from './history.module.css';
import velgHistorikkMal from './historikkMal';
import { DevModeTooltip } from './DevModeTooltip';

type HistorikkMedTilbakekrevingIndikator = Historikkinnslag & {
  erTilbakekreving?: boolean;
};

const sortAndTagTilbakekreving = (
  historikkFpsak: Historikkinnslag[] = [],
  historikkFptilbake: Historikkinnslag[] = [],
): HistorikkMedTilbakekrevingIndikator[] => {
  const historikkFraTilbakekrevingMedMarkor = historikkFptilbake.map(ht => ({
    ...ht,
    erTilbakekreving: true,
  }));
  return historikkFpsak
    .concat(historikkFraTilbakekrevingMedMarkor)
    .sort((a, b) => moment(b.opprettetTidspunkt).diff(moment(a.opprettetTidspunkt)));
};

interface OwnProps {
  historikkFpSak?: Historikkinnslag[];
  historikkFpTilbake?: Historikkinnslag[];
  alleKodeverkFpTilbake?: AlleKodeverkTilbakekreving;
  alleKodeverkFpSak: AlleKodeverk;
  saksnummer?: string;
  getBehandlingLocation: (behandlingUuid: string) => Location;
  createLocationForSkjermlenke: (behandlingLocation: Location, skjermlenkeCode: string) => Location | undefined;
  valgtBehandlingUuid?: string;
  kjønn: string;
}

/**
 * History
 *
 * Historikken for en behandling
 */
const History: FC<OwnProps> = ({
  historikkFpSak,
  historikkFpTilbake,
  alleKodeverkFpTilbake,
  alleKodeverkFpSak,
  saksnummer = '0',
  getBehandlingLocation,
  createLocationForSkjermlenke,
  valgtBehandlingUuid,
  kjønn,
}) => {
  const intl = useIntl();

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
      <div className={styles.header}>
        <HStack justify="space-between">
          <Heading size="small">{intl.formatMessage({ id: 'History.Historikk' })}</Heading>
          <HStack gap="6">
            {valgtBehandlingUuid && (
              <Checkbox size="small" onChange={() => setSkalSortertePaBehandling(!skalSortertePaValgtBehandling)}>
                {intl.formatMessage({ id: 'History.FiltrerPaBehandling' })}
              </Checkbox>
            )}
            <Detail className={styles.circle}>{filtrerteInnslag.length}</Detail>
          </HStack>
        </HStack>
      </div>
      <div
        style={{ height: `calc(100vh - ${top}px)` }}
        className={styles.overflow}
        ref={el => {
          if (el) {
            setTop(el.getBoundingClientRect().top);
          }
        }}
      >
        <VStack gap="2" paddingBlock="4">
          {filtrerteInnslag.map((historikkinnslag, index) => {
            const { aktoer, behandlingUuid, erTilbakekreving, opprettetAv, opprettetTidspunkt, type } =
              historikkinnslag;

            const HistorikkMal = velgHistorikkMal(type);
            const aktorIsVL = aktoer === HistorikkAktor.VEDTAKSLOSNINGEN;
            const aktorIsSOKER = aktoer === HistorikkAktor.SOKER;
            const aktorIsArbeidsgiver = aktoer === HistorikkAktor.ARBEIDSGIVER;

            const getKodeverknavn = erTilbakekreving ? getKodeverknavnFpTilbake : getKodeverknavnFpSak;

            if (!getKodeverknavn) {
              return null;
            }

            return (
              <DevModeTooltip key={opprettetTidspunkt + type} content={`${HistorikkMal.name} - ${type}`}>
                <Snakkeboble
                  aktoer={aktoer}
                  rolleNavn={getKodeverknavn(aktoer, KodeverkType.HISTORIKK_AKTOER)}
                  dato={opprettetTidspunkt}
                  kjoenn={kjønn}
                  opprettetAv={aktorIsSOKER || aktorIsArbeidsgiver || aktorIsVL ? '' : opprettetAv}
                  erFørsteBoble={index === 0}
                >
                  <HistorikkMal
                    historikkinnslag={historikkinnslag}
                    behandlingLocation={getBehandlingLocation(behandlingUuid)}
                    saksnummer={saksnummer}
                    getKodeverknavn={getKodeverknavn}
                    createLocationForSkjermlenke={createLocationForSkjermlenke}
                    erTilbakekreving={!!erTilbakekreving}
                  />
                </Snakkeboble>
              </DevModeTooltip>
            );
          })}
        </VStack>
      </div>
    </>
  );
};

export default History;
