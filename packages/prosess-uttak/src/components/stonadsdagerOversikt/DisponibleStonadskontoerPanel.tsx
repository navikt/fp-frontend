import React, {
  FunctionComponent, useMemo, useState, useCallback,
} from 'react';
import { FormattedMessage, useIntl, IntlShape } from 'react-intl';
import { Label, BodyShort } from '@navikt/ds-react';

import {
  FlexColumn, FlexContainer, FlexRow, Table, TableColumn, TableRow,
} from '@navikt/ft-ui-komponenter';
import uttakArbeidTypeKodeverk from '@fpsak-frontend/kodeverk/src/uttakArbeidType';
import stonadskontoType from '@fpsak-frontend/kodeverk/src/stonadskontoType';
import {
  AktivitetIdentifikator, AktivitetSaldo, ArbeidsgiverOpplysningerPerId, Stonadskonto,
} from '@fpsak-frontend/types';

import uttakArbeidTypeTekstCodes from '../../utils/uttakArbeidTypeCodes';
import lagVisningsNavn from '../../utils/lagVisningsNavn';
import StonadsdagerTab, { finnAntallUkerOgDager } from './StonadsdagerTab';

import styles from './disponibleStonadskontoerPanel.less';

const HEADER_TEXT_CODES = [
  'TimeLineInfo.Aktivitet',
  'TimeLineInfo.Disponibelt',
];

const STØNADSKONTOER_SORTERINGSREKKEFØLGE = {
  [stonadskontoType.FORELDREPENGER_FØR_FØDSEL]: 0,
  [stonadskontoType.FELLESPERIODE]: 1,
  [stonadskontoType.MØDREKVOTE]: 2,
  [stonadskontoType.FEDREKVOTE]: 3,
  [stonadskontoType.FORELDREPENGER]: 4,
  [stonadskontoType.UTEN_AKTIVITETSKRAV]: 5,
  [stonadskontoType.MINSTERETT]: 6,
  [stonadskontoType.MINSTERETT_NESTE_STØNADSPERIODE]: 7,
  [stonadskontoType.FLERBARNSDAGER]: 8,
};

const sorterKontoer = (
  s1: Stonadskonto,
  s2: Stonadskonto,
): number => STØNADSKONTOER_SORTERINGSREKKEFØLGE[s1.stonadskontotype] - STØNADSKONTOER_SORTERINGSREKKEFØLGE[s2.stonadskontotype];

const lagTabellRadKey = (
  arbeidsforhold: AktivitetSaldo,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
) => {
  const { uttakArbeidType, arbeidsgiverReferanse, arbeidsforholdId } = arbeidsforhold.aktivitetIdentifikator;
  const arbeidsgiverOpplysninger = arbeidsgiverReferanse ? arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse] : undefined;

  let arbKey = uttakArbeidType;
  arbKey = arbeidsgiverOpplysninger ? `${arbKey} ${arbeidsgiverOpplysninger.navn}` : arbKey;
  arbKey = arbeidsforholdId ? `${arbKey} ${arbeidsforholdId}` : arbKey;
  arbKey = arbeidsgiverOpplysninger ? `${arbKey} ${arbeidsgiverOpplysninger.identifikator}` : arbKey;

  return `${arbKey} ${arbeidsforhold.saldo}`;
};

const finnTilgjengeligeUker = (
  stønadskontoer: Stonadskonto[],
): number => {
  const sumDager = stønadskontoer.reduce((sum, konto) => {
    const type = konto.stonadskontotype;
    if (type !== stonadskontoType.FLERBARNSDAGER
      && type !== stonadskontoType.UTEN_AKTIVITETSKRAV
      && type !== stonadskontoType.MINSTERETT
      && type !== stonadskontoType.MINSTERETT_NESTE_STØNADSPERIODE
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
  const {
    arbeidsgiverReferanse, uttakArbeidType,
  } = arbforhold;

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
  const [valgtKonto, setValgtKonto] = useState<Stonadskonto>();

  const visDagerForKonto = useCallback((konto: Stonadskonto): void => {
    setValgtKonto((forrigeKonto) => (forrigeKonto?.stonadskontotype === konto.stonadskontotype ? undefined : konto));
  }, []);

  const stønadskontoerMedNavn = useMemo(() => Object.values(stønadskontoer).sort(sorterKontoer), [stønadskontoer]);

  const tilgjengeligeUker = useMemo(() => finnTilgjengeligeUker(stønadskontoer), [stønadskontoer]);

  const sorterteAktiviteter = useMemo(() => {
    if (!valgtKonto) {
      return undefined;
    }
    const aktiviteterMedNavn = valgtKonto.aktivitetSaldoDtoList
      .map((aktivitet) => ({
        ...aktivitet,
        navn: utledNavn(aktivitet.aktivitetIdentifikator, arbeidsgiverOpplysningerPerId, intl),
      }));
    return aktiviteterMedNavn.sort((akt1, akt2) => akt1.navn.localeCompare(akt2.navn));
  }, [valgtKonto?.aktivitetSaldoDtoList]);

  return (
    <div className={styles.disponibeltUttak}>
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Label size="small">
              <FormattedMessage id="TimeLineInfo.Stonadinfo.DisponibleStonadsdager" />
            </Label>
          </FlexColumn>
          <FlexColumn>
            <BodyShort size="small">
              <FormattedMessage
                id="TimeLineInfo.Stonadinfo.Total"
                values={{ ukerVerdi: tilgjengeligeUker, b: (chunks: any) => <b>{chunks}</b> }}
              />
            </BodyShort>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <div className={styles.tabs}>
        <ul role="tablist">
          {stønadskontoerMedNavn.map((konto) => (
            <StonadsdagerTab
              key={konto.stonadskontotype}
              aktiv={konto.stonadskontotype === valgtKonto?.stonadskontotype}
              stønadskonto={konto}
              visDagerForKonto={visDagerForKonto}
            />
          ))}
        </ul>
      </div>
      {valgtKonto && sorterteAktiviteter.length > 0 && (
        <div className={styles.visKonto}>
          <Table headerTextCodes={HEADER_TEXT_CODES}>
            {sorterteAktiviteter.map((arbforhold) => {
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
                            b: (chunks: any) => <b>{chunks}</b>,
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
