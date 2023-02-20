import React, {
  useCallback, FunctionComponent,
} from 'react';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import dayjs from 'dayjs';
import {
  Table, ExpandableTableRow, TableColumn, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { calcDaysAndWeeks, dateFormat } from '@navikt/ft-utils';
import { Button, Heading } from '@navikt/ds-react';
import { AddCircle } from '@navikt/ds-icons';

import {
  AlleKodeverk, ArbeidsgiverOpplysningerPerId, Fagsak, FaktaArbeidsforhold,
} from '@navikt/fp-types';
import { KodeverkType } from '@navikt/fp-kodeverk';

import UttakFaktaDetailForm, { utledÅrsakstype, Årsakstype } from './UttakFaktaDetailForm';
import KontrollerFaktaPeriodeMedApMarkering from '../typer/kontrollerFaktaPeriodeMedApMarkering';

import styles from './uttakFaktaTable.less';

const HEADER_TEXT_CODES = [
  'UttakFaktaTable.Periode',
  'UttakFaktaTable.AntallDager',
  'UttakFaktaTable.Type',
  'UttakFaktaTable.Kilde',
  'EMPTY',
];

const getTextId = (weeks?: number, days?: number): string => {
  let id = 'UttakFaktaTable.AntallFlereDagerOgFlereUker';
  if (weeks === undefined && days === undefined) {
    id = 'UttakFaktaTable.TidenesEnde';
  }
  if (days === 0) {
    id = weeks === 1 ? 'UttakFaktaTable.AntallNullDagerOgEnUke' : 'UttakFaktaTable.AntallNullDagerOgFlereUker';
  }
  if (weeks === 0) {
    id = days === 1 ? 'UttakFaktaTable.AntallEnDagOgNullUker' : 'UttakFaktaTable.AntallFlereDagerOgNullUker';
  }
  if (days === 1) {
    id = weeks === 1 ? 'UttakFaktaTable.AntallEnDagOgEnUke' : 'UttakFaktaTable.AntallEnDagOgFlereUker';
  }
  if (weeks === 1) {
    id = 'UttakFaktaTable.AntallFlereDagerOgEnUke';
  }
  return id;
};

const getTypeTekst = (
  alleKodeverk: AlleKodeverk,
  periode: KontrollerFaktaPeriodeMedApMarkering,
  intl: IntlShape,
): string => {
  const årsaktype = utledÅrsakstype(periode);
  if (årsaktype === Årsakstype.UTTAK || årsaktype === Årsakstype.OVERFØRING) {
    const tekst = alleKodeverk[KodeverkType.UTTAK_PERIODE_TYPE].find((k) => k.kode === periode.uttakPeriodeType)?.navn;
    return periode.arbeidstidsprosent > 0 ? `${tekst} - Gradert ${periode.arbeidstidsprosent}%` : tekst;
  }
  if (årsaktype === Årsakstype.OPPHOLD) {
    const navn = alleKodeverk[KodeverkType.OPPHOLD_ARSAK].find((k) => k.kode === periode.oppholdÅrsak)?.navn;
    return intl.formatMessage({ id: 'UttakFaktaTabel.Opphold' }, { arsak: navn.replace('har uttak av', '') });
  }
  if (årsaktype === Årsakstype.UTSETTELSE) {
    const navn = alleKodeverk[KodeverkType.UTSETTELSE_AARSAK_TYPE].find((k) => k.kode === periode.utsettelseÅrsak)?.navn;
    return intl.formatMessage({ id: 'UttakFaktaTabel.Utsettelse' }, { arsak: navn });
  }
  return '';
};

interface OwnProps {
  fagsak: Fagsak;
  valgteFomDatoer: string[];
  setValgteFomDatoer: React.Dispatch<React.SetStateAction<string[]>>;
  uttakKontrollerFaktaPerioder: KontrollerFaktaPeriodeMedApMarkering[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  oppdaterUttakPerioder: (perioder: KontrollerFaktaPeriodeMedApMarkering[]) => void;
  alleKodeverk: AlleKodeverk;
  readOnly: boolean;
  setDirty: (isDirty: boolean) => void;
  erRedigerbart: boolean;
  visNyPeriode: boolean;
  settVisNyPeriode: (vis: boolean) => void;
}

const UttakFaktaTable: FunctionComponent<OwnProps> = ({
  fagsak,
  valgteFomDatoer,
  setValgteFomDatoer,
  uttakKontrollerFaktaPerioder,
  arbeidsgiverOpplysningerPerId,
  faktaArbeidsforhold,
  oppdaterUttakPerioder,
  alleKodeverk,
  readOnly,
  setDirty,
  erRedigerbart,
  visNyPeriode,
  settVisNyPeriode,
}) => {
  const intl = useIntl();

  const velgPeriodeFomDato = useCallback((fom?: string, lukkAlleAndre = false) => {
    if (valgteFomDatoer.includes(fom)) {
      setValgteFomDatoer((foms) => foms.filter((f) => f !== fom));
    } else {
      const nye = fom ? [fom] : [];
      setValgteFomDatoer((foms) => (lukkAlleAndre ? nye : foms.concat(fom)));
    }
  }, [valgteFomDatoer, setValgteFomDatoer]);

  const oppdaterPeriode = useCallback((uPeriode: KontrollerFaktaPeriodeMedApMarkering) => {
    const oppdatertePerioder = uttakKontrollerFaktaPerioder
      .filter((p) => p.originalFom !== uPeriode.originalFom)
      .concat(uPeriode)
      .sort((a1, a2) => dayjs(a1.fom).diff(dayjs(a2.fom)));

    setDirty(true);
    oppdaterUttakPerioder(oppdatertePerioder);
    velgPeriodeFomDato(undefined, true);
  }, [uttakKontrollerFaktaPerioder]);

  const slettPeriode = useCallback((fom: string) => {
    const oppdatertePerioder = uttakKontrollerFaktaPerioder.filter((p) => p.originalFom !== fom);
    oppdaterUttakPerioder(oppdatertePerioder);
    setDirty(true);
  }, [uttakKontrollerFaktaPerioder]);

  const sisteMåned = uttakKontrollerFaktaPerioder.length > 0
    ? new Date(uttakKontrollerFaktaPerioder[uttakKontrollerFaktaPerioder.length - 1].tom)
    : undefined;

  return (
    <>
      <Table
        headerTextCodes={HEADER_TEXT_CODES}
        noHover
        hasGrayHeader
      >
        {uttakKontrollerFaktaPerioder.map((periode) => {
          const numberOfDaysAndWeeks = calcDaysAndWeeks(periode.fom, periode.tom);
          return (
            <ExpandableTableRow
              key={periode.fom + periode.tom}
              isApLeftBorder={!!periode.aksjonspunktType}
              showContent={valgteFomDatoer.includes(periode.fom)}
              toggleContent={() => velgPeriodeFomDato(periode.fom)}
              content={valgteFomDatoer.includes(periode.fom) && (
                <UttakFaktaDetailForm
                  fagsak={fagsak}
                  valgtPeriode={periode}
                  readOnly={readOnly || !erRedigerbart}
                  oppdaterPeriode={oppdaterPeriode}
                  slettPeriode={() => slettPeriode(periode.originalFom)}
                  avbrytEditering={() => velgPeriodeFomDato(periode.fom)}
                  alleKodeverk={alleKodeverk}
                  arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                  faktaArbeidsforhold={faktaArbeidsforhold}
                />
              )}
            >
              <TableColumn>{`${dateFormat(periode.fom)} - ${dateFormat(periode.tom)}`}</TableColumn>
              <TableColumn>
                <FormattedMessage
                  id={getTextId(numberOfDaysAndWeeks.weeks, numberOfDaysAndWeeks.days)}
                  values={{
                    weeks: numberOfDaysAndWeeks.weeks,
                    days: numberOfDaysAndWeeks.days,
                  }}
                />
              </TableColumn>
              <TableColumn>{getTypeTekst(alleKodeverk, periode, intl)}</TableColumn>
              <TableColumn>
                {alleKodeverk[KodeverkType.FORDELING_PERIODE_KILDE].find((k) => k.kode === periode.periodeKilde)?.navn}
              </TableColumn>
            </ExpandableTableRow>
          );
        })}
      </Table>
      {erRedigerbart && (
        <>
          {!visNyPeriode && (
            <Button
              size="small"
              variant="tertiary"
              type="button"
              icon={<AddCircle />}
              onClick={() => {
                velgPeriodeFomDato(undefined, true);
                settVisNyPeriode(true);
              }}
            >
              <FormattedMessage id="UttakFaktaForm.LeggTilPeriode" />
            </Button>
          )}
          {visNyPeriode && (
            <div className={styles.panel}>
              <Heading size="small">
                <FormattedMessage id="UttakFaktaForm.NyPeriode" />
              </Heading>
              <VerticalSpacer sixteenPx />
              <UttakFaktaDetailForm
                fagsak={fagsak}
                avbrytEditering={() => settVisNyPeriode(false)}
                readOnly={false}
                alleKodeverk={alleKodeverk}
                oppdaterPeriode={(uttaksperiode: KontrollerFaktaPeriodeMedApMarkering) => {
                  const nyeSortertePerioder = uttakKontrollerFaktaPerioder.concat(uttaksperiode).sort((a1, a2) => dayjs(a1.fom).diff(dayjs(a2.fom)));
                  setDirty(true);
                  oppdaterUttakPerioder(nyeSortertePerioder);
                  settVisNyPeriode(false);
                }}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                faktaArbeidsforhold={faktaArbeidsforhold}
                defaultMonth={sisteMåned}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default UttakFaktaTable;
