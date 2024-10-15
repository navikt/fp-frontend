import React, { FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import { Location } from 'history';
import { useIntl } from 'react-intl';
import moment from 'moment';
import { Checkbox, Heading } from '@navikt/ds-react';

import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import { AlleKodeverk, AlleKodeverkTilbakekreving, Historikkinnslag } from '@navikt/fp-types';
import { getKodeverknavnFn, historikkAktor as HistorikkAktor, KodeverkType } from '@navikt/fp-kodeverk';
import Snakkeboble from './maler/felles/snakkeboble';

import styles from './history.module.css';
import { EnvironmentWrapper } from './EnvironmentWrapper';
import { velgHistorikkMal } from './velgHistorikkMal';

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
const History: FunctionComponent<OwnProps> = ({
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
        <FlexContainer>
          <FlexRow spaceBetween>
            <FlexColumn>
              <Heading size="small">{intl.formatMessage({ id: 'History.Historikk' })}</Heading>
            </FlexColumn>
            <FlexColumn>
              <FlexContainer>
                <FlexRow>
                  {valgtBehandlingUuid && (
                    <FlexColumn className={styles.marginFilter}>
                      <Checkbox
                        size="small"
                        onChange={() => setSkalSortertePaBehandling(!skalSortertePaValgtBehandling)}
                      >
                        {intl.formatMessage({ id: 'History.FiltrerPaBehandling' })}
                      </Checkbox>
                    </FlexColumn>
                  )}
                  <FlexColumn>
                    <div className={styles.circle}>{filtrerteInnslag.length}</div>
                  </FlexColumn>
                </FlexRow>
              </FlexContainer>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
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
        {filtrerteInnslag.map((historikkinnslag, index) => {
          const Mal = velgHistorikkMal(historikkinnslag.type);
          const aktorIsVL = historikkinnslag.aktoer === HistorikkAktor.VEDTAKSLOSNINGEN;
          const aktorIsSOKER = historikkinnslag.aktoer === HistorikkAktor.SOKER;
          const aktorIsArbeidsgiver = historikkinnslag.aktoer === HistorikkAktor.ARBEIDSGIVER;

          const getKodeverknavn = historikkinnslag.erTilbakekreving ? getKodeverknavnFpTilbake : getKodeverknavnFpSak;

          if (!getKodeverknavn) {
            return null;
          }

          return (
            <Snakkeboble
              key={historikkinnslag.opprettetTidspunkt + historikkinnslag.type}
              aktoer={historikkinnslag.aktoer}
              rolleNavn={getKodeverknavn(historikkinnslag.aktoer, KodeverkType.HISTORIKK_AKTOER)}
              dato={historikkinnslag.opprettetTidspunkt}
              kjoenn={kjønn}
              opprettetAv={aktorIsSOKER || aktorIsArbeidsgiver || aktorIsVL ? '' : historikkinnslag.opprettetAv}
              erFørsteBoble={index === 0}
            >
              <EnvironmentWrapper historikkinnslag={historikkinnslag} malType={Mal.displayName}>
                <Mal
                  historikkinnslag={historikkinnslag}
                  behandlingLocation={getBehandlingLocation(historikkinnslag.behandlingUuid)}
                  saksnummer={saksnummer}
                  getKodeverknavn={getKodeverknavn}
                  createLocationForSkjermlenke={createLocationForSkjermlenke}
                  erTilbakekreving={!!historikkinnslag.erTilbakekreving}
                />
              </EnvironmentWrapper>
            </Snakkeboble>
          );
        })}
      </div>
    </>
  );
};

export default History;
