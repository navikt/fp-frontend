import React, { FunctionComponent, useMemo, useState, useCallback } from 'react';
import { FormattedMessage, useIntl, IntlShape } from 'react-intl';
import { Label, BodyShort, HStack } from '@navikt/ds-react';

import { Table, TableColumn, TableRow } from '@navikt/ft-ui-komponenter';
import { StonadskontoType, uttakArbeidType as uttakArbeidTypeKodeverk } from '@navikt/fp-kodeverk';
import { AktivitetIdentifikator, AktivitetSaldo, ArbeidsgiverOpplysningerPerId, Stonadskonto } from '@navikt/fp-types';

import uttakArbeidTypeTekstCodes from '../../utils/uttakArbeidTypeCodes';
import lagVisningsNavn from '../../utils/lagVisningsNavn';
import StonadsdagerTab, { finnAntallUkerOgDager } from './StonadsdagerTab';

import styles from './disponibleStonadskontoerPanel.module.css';

const HEADER_TEXT_CODES = ['TimeLineInfo.Aktivitet', 'TimeLineInfo.Disponibelt'];

const STØNADSKONTOER_SORTERINGSREKKEFØLGE = {
  [StonadskontoType.FORELDREPENGER_FØR_FØDSEL]: 0,
  [StonadskontoType.FELLESPERIODE]: 1,
  [StonadskontoType.MØDREKVOTE]: 2,
  [StonadskontoType.FEDREKVOTE]: 3,
  [StonadskontoType.FORELDREPENGER]: 4,
  [StonadskontoType.UTEN_AKTIVITETSKRAV]: 5,
  [StonadskontoType.MINSTERETT]: 6,
  [StonadskontoType.MINSTERETT_NESTE_STØNADSPERIODE]: 7,
  [StonadskontoType.FLERBARNSDAGER]: 8,
} as Record<string, number>;

const sorterKontoer = (s1: Stonadskonto, s2: Stonadskonto): number =>
  STØNADSKONTOER_SORTERINGSREKKEFØLGE[s1.stonadskontotype] - STØNADSKONTOER_SORTERINGSREKKEFØLGE[s2.stonadskontotype];

const lagTabellRadKey = (
  arbeidsforhold: AktivitetSaldo,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) => {
  const { uttakArbeidType, arbeidsgiverReferanse, arbeidsforholdId } = arbeidsforhold.aktivitetIdentifikator;
  const arbeidsgiverOpplysninger = arbeidsgiverReferanse
    ? arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse]
    : undefined;

  let arbKey = uttakArbeidType;
  arbKey = arbeidsgiverOpplysninger ? `${arbKey} ${arbeidsgiverOpplysninger.navn}` : arbKey;
  arbKey = arbeidsforholdId ? `${arbKey} ${arbeidsforholdId}` : arbKey;
  arbKey = arbeidsgiverOpplysninger ? `${arbKey} ${arbeidsgiverOpplysninger.identifikator}` : arbKey;

  return `${arbKey} ${arbeidsforhold.saldo}`;
};

const finnTilgjengeligeUker = (stønadskontoer?: Stonadskonto[]): number => {
  if (!stønadskontoer) {
    return 0;
  }

  const sumDager = stønadskontoer.reduce((sum, konto) => {
    const type = konto.stonadskontotype;
    if (
      type !== StonadskontoType.FLERBARNSDAGER &&
      type !== StonadskontoType.UTEN_AKTIVITETSKRAV &&
      type !== StonadskontoType.MINSTERETT &&
      type !== StonadskontoType.MINSTERETT_NESTE_STØNADSPERIODE
    ) {
      return sum + (konto.maxDager ? konto.maxDager : 0);
    }
    return sum;
  }, 0);
  return Math.floor(sumDager / 5);
};

const utledNavn = (
  arbforhold: AktivitetIdentifikator,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  intl: IntlShape,
): string => {
  const { arbeidsgiverReferanse, uttakArbeidType } = arbforhold;

  if (uttakArbeidType && uttakArbeidType !== uttakArbeidTypeKodeverk.ORDINÆRT_ARBEID) {
    return intl.formatMessage({ id: uttakArbeidTypeTekstCodes[uttakArbeidType] });
  }
  if (arbeidsgiverReferanse) {
    const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];
    return arbeidsgiverOpplysninger ? lagVisningsNavn(arbeidsgiverOpplysninger) : arbeidsgiverReferanse;
  }

  return intl.formatMessage({ id: 'RenderUttakTable.ArbeidType.ANNET' });
};

interface OwnProps {
  stønadskontoer?: Stonadskonto[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const DisponibleStonadskontoerPanel: FunctionComponent<OwnProps> = ({
  stønadskontoer,
  arbeidsgiverOpplysningerPerId,
}) => {
  const intl = useIntl();
  const [valgtKontoType, setValgtKontoType] = useState<string>();

  const visDagerForKonto = useCallback((stonadskontotype: string): void => {
    setValgtKontoType(forrigeKontoType => (forrigeKontoType === stonadskontotype ? undefined : stonadskontotype));
  }, []);

  const stønadskontoerMedNavn = useMemo(
    () => (stønadskontoer ? Object.values(stønadskontoer).sort(sorterKontoer) : []),
    [stønadskontoer],
  );

  const tilgjengeligeUker = useMemo(() => finnTilgjengeligeUker(stønadskontoer), [stønadskontoer]);

  const sorterteAktiviteter = useMemo(() => {
    if (!valgtKontoType) {
      return undefined;
    }

    const konto = stønadskontoerMedNavn.find(s => s.stonadskontotype === valgtKontoType);

    const aktiviteterMedNavn = (konto?.aktivitetSaldoDtoList || []).map(aktivitet => ({
      ...aktivitet,
      navn: utledNavn(aktivitet.aktivitetIdentifikator, arbeidsgiverOpplysningerPerId, intl),
    }));
    return aktiviteterMedNavn.sort((akt1, akt2) => akt1.navn.localeCompare(akt2.navn));
  }, [valgtKontoType, stønadskontoerMedNavn]);

  const bTag = useCallback((chunks: any) => <b>{chunks}</b>, []);

  return (
    <div className={styles.disponibeltUttak}>
      <HStack gap="4">
        <Label size="small">
          <FormattedMessage id="TimeLineInfo.Stonadinfo.DisponibleStonadsdager" />
        </Label>
        <BodyShort size="small">
          <FormattedMessage id="TimeLineInfo.Stonadinfo.Total" values={{ ukerVerdi: tilgjengeligeUker, b: bTag }} />
        </BodyShort>
      </HStack>
      <div className={styles.tabs}>
        <ul role="tablist">
          {stønadskontoerMedNavn.map(konto => (
            <StonadsdagerTab
              key={konto.stonadskontotype}
              aktiv={konto.stonadskontotype === valgtKontoType}
              stønadskonto={konto}
              visDagerForKonto={visDagerForKonto}
            />
          ))}
        </ul>
      </div>
      {valgtKontoType && sorterteAktiviteter && sorterteAktiviteter.length > 0 && (
        <div className={styles.visKonto}>
          <Table headerTextCodes={HEADER_TEXT_CODES}>
            {sorterteAktiviteter.map(arbforhold => {
              const ukerOgDager = finnAntallUkerOgDager(arbforhold.saldo);
              return (
                <TableRow key={lagTabellRadKey(arbforhold, arbeidsgiverOpplysningerPerId)}>
                  <TableColumn>
                    <BodyShort size="small">{arbforhold.navn}</BodyShort>
                  </TableColumn>
                  <TableColumn>
                    <BodyShort size="small">
                      {arbforhold.saldo && (
                        <FormattedMessage
                          id="TimeLineInfo.Stonadinfo.UkerDager"
                          values={{
                            ukerVerdi: ukerOgDager.uker,
                            dagerVerdi: ukerOgDager.dager,
                            b: bTag,
                          }}
                        />
                      )}
                    </BodyShort>
                  </TableColumn>
                </TableRow>
              );
            })}
          </Table>
        </div>
      )}
    </div>
  );
};

export default DisponibleStonadskontoerPanel;
