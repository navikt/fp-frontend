import React, { FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import { Location } from 'history';
import { useIntl } from 'react-intl';
import moment from 'moment';
import { Checkbox, Heading } from '@navikt/ds-react';

import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import { AlleKodeverk, AlleKodeverkTilbakekreving, Historikkinnslag } from '@navikt/fp-types';
import { KodeverkType, getKodeverknavnFn, historikkAktor as HistorikkAktor } from '@navikt/fp-kodeverk';

import historikkinnslagType from '../kodeverk/historikkinnslagType';
import Snakkeboble from './maler/felles/snakkeboble';
import HistorikkMalType1 from './maler/historikkMalType1';
import HistorikkMalType2 from './maler/historikkMalType2';
import HistorikkMalType3 from './maler/historikkMalType3';
import HistorikkMalType4 from './maler/historikkMalType4';
import HistorikkMalType5 from './maler/historikkMalType5';
import HistorikkMalType6 from './maler/HistorikkMalType6';
import HistorikkMalType7 from './maler/HistorikkMalType7';
import HistorikkMalType8 from './maler/HistorikkMalType8';
import HistorikkMalType9 from './maler/HistorikkMalType9';
import HistorikkMalType10 from './maler/HistorikkMalType10';
import HistorikkMalTypeFeilutbetaling from './maler/HistorikkMalTypeFeilutbetaling';
import HistorikkMalTypeTilbakekreving from './maler/HistorikkMalTypeTilbakekreving';
import HistorikkMalTypeForeldelse from './maler/HistorikkMalTypeForeldelse';
import PlaceholderHistorikkMal from './maler/placeholderHistorikkMal';
import HistorikkMalTypeAktivitetskrav from './maler/HistorikkMalTypeAktivitetskrav';

import styles from './history.module.css';

/*
 https://confluence.adeo.no/display/MODNAV/OMR-13+SF4+Sakshistorikk+-+UX+og+grafisk+design

 Fem design patterns:

 +----------------------------+
 | Type 1                     |
 | BEH_VENT                   |
 | BEH_GJEN                   |
 | KØET_BEH_GJEN              |
 | BEH_STARTET                |
 | VEDLEGG_MOTTATT            |
 | BREV_SENT                  |
 | BREV_BESTILT               |
 | REGISTRER_PAPIRSØK         |
 | MANGELFULL_SØKNAD          |
 +----------------------------+
 <tidspunkt> // <rolle> <id>
 <hendelse>
 <begrunnelsestekst>
 <dokumentLinker>

 +----------------------------+
 | Type 2                     |
 | FORSLAG_VEDTAK             |
 | FORSLAG_VEDTAK_UTEN_TOTRINN|
 | VEDTAK_FATTET              |
 | VEDTAK_FATTET_AUTOMATISK   |
 | OVERSTYRT (hvis beslutter) |
 | REGISTRER_OM_VERGE         |
 +----------------------------+
 <tidspunkt> // <rolle> <id>
 <hendelse>: <resultat>
 <skjermlinke>

 +----------------------------+
 | Type 3                     |
 | SAK_RETUR                  |
 +----------------------------+
 <tidspunkt> // <rolle> <id>
 <hendelse>
 <begrunnelsestekst>
 <dokumentLinker>

 +----------------------------+
 | Type 4                     |
 | AVBRUTT_BEH                |
 | OVERSTYRT (hvis saksbeh.)  |
 +----------------------------+
 <tidspunkt> // <rolle> <id>
 <hendelse>
 <årsak>
 <begrunnelsestekst>

 +----------------------------+
 | Type 5                     |
 | FAKTA_ENDRET               |
 +----------------------------+
 <tidspunkt> // <rolle> <id>
 <skjermlinke>
 <feltnavn> er endret <fra-verdi> til <til-verdi>
 <radiogruppe> er satt til <verdi>
 <begrunnelsestekst>
 <dokumentLinker>

 +----------------------------+
 | Type 6                     |
 | NY_INFO_FRA_TPS            |
 +----------------------------+
 Ikke definert

 +----------------------------+
 | Type 7                     |
 | OVERSTYRT                  |
 +----------------------------+
 <tidspunkt> // <rolle> <id>
 <skjermlinke>
 Overstyrt <vurdering/beregning>: <Utfallet/beløpet> er endret fra <fra-verdi> til <til-verdi>
 <begrunnelsestekst>

+----------------------------+
 | Type 8                     |
 | ???                        |
 +----------------------------+
 Ikke definiert

 */

const velgHistorikkMal = (histType: string) => {
  // NOSONAR
  switch (
    histType // NOSONAR
  ) {
    case historikkinnslagType.BEH_GJEN:
    case historikkinnslagType.KOET_BEH_GJEN:
    case historikkinnslagType.BEH_MAN_GJEN:
    case historikkinnslagType.BEH_STARTET:
    case historikkinnslagType.BEH_STARTET_PAA_NYTT:
    case historikkinnslagType.BEH_STARTET_FORFRA:
    case historikkinnslagType.VEDLEGG_MOTTATT:
    case historikkinnslagType.BREV_SENT:
    case historikkinnslagType.BREV_BESTILT:
    case historikkinnslagType.REVURD_OPPR:
    case historikkinnslagType.REGISTRER_PAPIRSOK:
    case historikkinnslagType.MANGELFULL_SOKNAD:
    case historikkinnslagType.INNSYN_OPPR:
    case historikkinnslagType.VRS_REV_IKKE_SNDT:
    case historikkinnslagType.NYE_REGOPPLYSNINGER:
    case historikkinnslagType.BEH_AVBRUTT_VUR:
    case historikkinnslagType.BEH_OPPDATERT_NYE_OPPL:
    case historikkinnslagType.SPOLT_TILBAKE:
    case historikkinnslagType.TILBAKEKREVING_OPPR:
    case historikkinnslagType.MIGRERT_FRA_INFOTRYGD:
    case historikkinnslagType.MIGRERT_FRA_INFOTRYGD_FJERNET:
    case historikkinnslagType.ANKEBEH_STARTET:
    case historikkinnslagType.KLAGEBEH_STARTET:
    case historikkinnslagType.ENDRET_DEKNINGSGRAD:
      return HistorikkMalType1;
    case historikkinnslagType.FORSLAG_VEDTAK:
    case historikkinnslagType.FORSLAG_VEDTAK_UTEN_TOTRINN:
    case historikkinnslagType.VEDTAK_FATTET:
    case historikkinnslagType.VEDTAK_FATTET_AUTOMATISK:
    case historikkinnslagType.UENDRET_UTFALL:
    case historikkinnslagType.REGISTRER_OM_VERGE:
      return HistorikkMalType2;
    case historikkinnslagType.SAK_RETUR:
      return HistorikkMalType3;
    case historikkinnslagType.AVBRUTT_BEH:
    case historikkinnslagType.BEH_KØET:
    case historikkinnslagType.BEH_VENT:
    case historikkinnslagType.IVERKSETTELSE_VENT:
    case historikkinnslagType.FJERNET_VERGE:
      return HistorikkMalType4;
    case historikkinnslagType.SAK_GODKJENT:
    case historikkinnslagType.FAKTA_ENDRET:
    case historikkinnslagType.KLAGE_BEH_NK:
    case historikkinnslagType.KLAGE_BEH_NFP:
    case historikkinnslagType.BYTT_ENHET:
    case historikkinnslagType.UTTAK:
    case historikkinnslagType.TERMINBEKREFTELSE_UGYLDIG:
    case historikkinnslagType.ANKE_BEH:
      return HistorikkMalType5;
    case historikkinnslagType.NY_INFO_FRA_TPS:
    case historikkinnslagType.NY_GRUNNLAG_MOTTATT:
      return HistorikkMalType6;
    case historikkinnslagType.OVERSTYRT:
      return HistorikkMalType7;
    case historikkinnslagType.OPPTJENING:
      return HistorikkMalType8;
    case historikkinnslagType.OVST_UTTAK_SPLITT:
    case historikkinnslagType.FASTSATT_UTTAK_SPLITT:
    case historikkinnslagType.TILBAKEKR_VIDEREBEHANDLING:
      return HistorikkMalType9;
    case historikkinnslagType.OVST_UTTAK:
    case historikkinnslagType.FASTSATT_UTTAK:
      return HistorikkMalType10;
    case historikkinnslagType.FAKTA_OM_FEILUTBETALING:
      return HistorikkMalTypeFeilutbetaling;
    case historikkinnslagType.FORELDELSE:
      return HistorikkMalTypeForeldelse;
    case historikkinnslagType.TILBAKEKREVING:
      return HistorikkMalTypeTilbakekreving;
    case historikkinnslagType.AVKLART_AKTIVITETSKRAV:
      return HistorikkMalTypeAktivitetskrav;
    default:
      return PlaceholderHistorikkMal;
  }
};

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
          const HistorikkMal = velgHistorikkMal(historikkinnslag.type);
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
              <HistorikkMal
                historikkinnslag={historikkinnslag}
                behandlingLocation={getBehandlingLocation(historikkinnslag.behandlingUuid)}
                saksnummer={saksnummer}
                getKodeverknavn={getKodeverknavn}
                createLocationForSkjermlenke={createLocationForSkjermlenke}
                erTilbakekreving={!!historikkinnslag.erTilbakekreving}
              />
            </Snakkeboble>
          );
        })}
      </div>
    </>
  );
};

export default History;
