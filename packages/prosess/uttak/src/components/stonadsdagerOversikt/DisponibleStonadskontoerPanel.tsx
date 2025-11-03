import { useMemo, useState } from 'react';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { BodyShort, HStack, Label, Table, VStack } from '@navikt/ds-react';
import { BTag, createWeekAndDay, formaterArbeidsgiver } from '@navikt/ft-utils';

import type {
  AktivitetIdentifikator,
  AktivitetSaldo,
  ArbeidsgiverOpplysningerPerId,
  Stonadskonto,
  StønadskontoType,
} from '@navikt/fp-types';

import { uttakArbeidTypeTekstCodes } from '../../utils/uttakArbeidTypeCodes';
import { finnAntallUkerOgDager, StonadsdagerTab } from './StonadsdagerTab';

import styles from './disponibleStonadskontoerPanel.module.css';

const STØNADSKONTOER_SORTERINGSREKKEFØLGE: Record<StønadskontoType, number> = {
  FORELDREPENGER_FØR_FØDSEL: 0,
  FELLESPERIODE: 1,
  MØDREKVOTE: 2,
  FEDREKVOTE: 3,
  FORELDREPENGER: 4,
  UTEN_AKTIVITETSKRAV: 5,
  MINSTERETT: 6,
  MINSTERETT_NESTE_STØNADSPERIODE: 7,
  FLERBARNSDAGER: 8,
};

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
      type !== 'FLERBARNSDAGER' &&
      type !== 'UTEN_AKTIVITETSKRAV' &&
      type !== 'MINSTERETT' &&
      type !== 'MINSTERETT_NESTE_STØNADSPERIODE'
    ) {
      return sum + konto.maxDager;
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

  if (uttakArbeidType !== 'ORDINÆRT_ARBEID') {
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
  const [valgtKonto, setValgtKonto] = useState<Stonadskonto>();

  const visDagerForKonto = (stonadskonto: Stonadskonto): void => {
    setValgtKonto(forrigeKontoType =>
      forrigeKontoType?.stonadskontotype === stonadskonto.stonadskontotype ? undefined : stonadskonto,
    );
  };

  const stønadskontoerMedNavn = stønadskontoer ? Object.values(stønadskontoer).sort(sorterKontoer) : [];

  const tilgjengeligeUker = finnTilgjengeligeUker(stønadskontoer);

  const sorterteAktiviteter = useMemo(() => {
    if (!valgtKonto) {
      return undefined;
    }

    const aktiviteterMedNavn = valgtKonto.aktivitetSaldoDtoList.map(aktivitet => ({
      ...aktivitet,
      navn: utledNavn(aktivitet.aktivitetIdentifikator, arbeidsgiverOpplysningerPerId, intl),
    }));
    return aktiviteterMedNavn.sort((akt1, akt2) => akt1.navn.localeCompare(akt2.navn));
  }, [valgtKonto, stønadskontoerMedNavn, arbeidsgiverOpplysningerPerId, intl]);

  return (
    <div className={styles['disponibeltUttak']}>
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
      <div className={styles['tabs']}>
        <ul>
          {stønadskontoerMedNavn.map(k => (
            <StonadsdagerTab
              key={k.stonadskontotype}
              aktiv={k.stonadskontotype === valgtKonto?.stonadskontotype}
              stønadskonto={k}
              visDagerForKonto={visDagerForKonto}
            />
          ))}
        </ul>
      </div>
      {valgtKonto && sorterteAktiviteter && sorterteAktiviteter.length > 0 && (
        <div className={styles['visKonto']}>
          <VStack gap="4">
            {valgtKonto.kontoReduksjoner?.annenForelderEøsUttak && (
              <FormattedMessage
                id="TimeLineInfo.KontoReduksjonerEøs"
                values={{
                  dager: createWeekAndDay(
                    Math.floor(valgtKonto.kontoReduksjoner.annenForelderEøsUttak / 5),
                    valgtKonto.kontoReduksjoner.annenForelderEøsUttak % 5,
                  ).formattedString,
                }}
              />
            )}
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
          </VStack>
        </div>
      )}
    </div>
  );
};
