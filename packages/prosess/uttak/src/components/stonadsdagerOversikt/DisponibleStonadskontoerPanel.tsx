import { useMemo, useState } from 'react';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { BodyShort, HStack, Label, Table } from '@navikt/ds-react';
import { BTag, formaterArbeidsgiver } from '@navikt/ft-utils';

import { StonadskontoType, UttakArbeidType as uttakArbeidTypeKodeverk } from '@navikt/fp-kodeverk';
import type {
  AktivitetIdentifikator,
  AktivitetSaldo,
  ArbeidsgiverOpplysningerPerId,
  Stonadskonto,
} from '@navikt/fp-types';

import { uttakArbeidTypeTekstCodes } from '../../utils/uttakArbeidTypeCodes';
import { finnAntallUkerOgDager, StonadsdagerTab } from './StonadsdagerTab';

import styles from './disponibleStonadskontoerPanel.module.css';

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

  let arbKey = uttakArbeidType as string;
  arbKey = arbeidsgiverOpplysninger ? `${arbKey} ${arbeidsgiverOpplysninger.navn}` : arbKey;
  arbKey = arbeidsforholdId ? `${arbKey} ${arbeidsforholdId}` : arbKey;
  arbKey = arbeidsgiverOpplysninger ? `${arbKey} ${arbeidsgiverOpplysninger.identifikator}` : arbKey;

  return `${arbKey} ${arbeidsforhold.saldo}`;
};

const finnTilgjengeligeUker = (stønadskontoer?: Stonadskonto[]): { uker: number; dager: number } => {
  if (!stønadskontoer) {
    return { uker: 0, dager: 0 };
  }

  const sumDager = stønadskontoer.reduce((sum, konto) => {
    const type = konto.stonadskontotype;
    if (
      type !== StonadskontoType.FLERBARNSDAGER &&
      type !== StonadskontoType.UTEN_AKTIVITETSKRAV &&
      type !== StonadskontoType.MINSTERETT &&
      type !== StonadskontoType.MINSTERETT_NESTE_STØNADSPERIODE
    ) {
      return sum + (konto.maxDager ?? 0);
    }
    return sum;
  }, 0);

  const uker = Math.floor(sumDager / 5);
  return {
    uker,
    dager: sumDager - uker * 5,
  };
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
    return arbeidsgiverOpplysninger ? formaterArbeidsgiver(arbeidsgiverOpplysninger) : arbeidsgiverReferanse;
  }

  return intl.formatMessage({ id: 'RenderUttakTable.ArbeidType.ANNET' });
};

interface Props {
  stønadskontoer?: Stonadskonto[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const DisponibleStonadskontoerPanel = ({ stønadskontoer, arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();
  const [valgtKontoType, setValgtKontoType] = useState<string>();

  const visDagerForKonto = (stonadskontotype: string): void => {
    setValgtKontoType(forrigeKontoType => (forrigeKontoType === stonadskontotype ? undefined : stonadskontotype));
  };

  const stønadskontoerMedNavn = stønadskontoer ? Object.values(stønadskontoer).sort(sorterKontoer) : [];

  const tilgjengeligeUker = finnTilgjengeligeUker(stønadskontoer);

  const sorterteAktiviteter = useMemo(() => {
    if (!valgtKontoType) {
      return undefined;
    }

    const konto = stønadskontoerMedNavn.find(s => s.stonadskontotype === valgtKontoType);

    const aktiviteterMedNavn = (konto?.aktivitetSaldoDtoList ?? []).map(aktivitet => ({
      ...aktivitet,
      navn: utledNavn(aktivitet.aktivitetIdentifikator, arbeidsgiverOpplysningerPerId, intl),
    }));
    return aktiviteterMedNavn.sort((akt1, akt2) => akt1.navn.localeCompare(akt2.navn));
  }, [valgtKontoType, stønadskontoerMedNavn]);

  return (
    <div className={styles.disponibeltUttak}>
      <HStack gap="space-16">
        <Label size="small">
          <FormattedMessage id="TimeLineInfo.Stonadinfo.DisponibleStonadsdager" />
        </Label>
        <BodyShort size="small">
          <FormattedMessage
            id="TimeLineInfo.Stonadinfo.Total"
            values={{ uker: tilgjengeligeUker.uker, dager: tilgjengeligeUker.dager, b: BTag }}
          />
        </BodyShort>
      </HStack>
      <div className={styles.tabs}>
        <ul>
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
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="TimeLineInfo.Aktivitet" />
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="TimeLineInfo.Disponibelt" />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {sorterteAktiviteter.map(arbforhold => {
                const ukerOgDager = finnAntallUkerOgDager(arbforhold.saldo);
                return (
                  <Table.Row key={lagTabellRadKey(arbforhold, arbeidsgiverOpplysningerPerId)}>
                    <Table.DataCell textSize="small">{arbforhold.navn}</Table.DataCell>
                    <Table.DataCell textSize="small">
                      {arbforhold.saldo && (
                        <FormattedMessage
                          id="TimeLineInfo.Stonadinfo.UkerDager"
                          values={{
                            ukerVerdi: ukerOgDager.uker,
                            dagerVerdi: ukerOgDager.dager,
                            b: BTag,
                          }}
                        />
                      )}
                    </Table.DataCell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      )}
    </div>
  );
};
