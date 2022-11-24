import React, {
  useCallback, FunctionComponent, useState,
} from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Table, ExpandableTableRow, TableColumn, TableRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { calcDaysAndWeeks, dateFormat } from '@navikt/ft-utils';
import { Button, Heading } from '@navikt/ds-react';
import { AddCircle } from '@navikt/ds-icons';

import { AlleKodeverk, ArbeidsgiverOpplysningerPerId, FaktaArbeidsforhold } from '@fpsak-frontend/types';
import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';

import UttakFaktaDetailForm from './UttakFaktaDetailForm';
import KontrollerFaktaPeriodeMedApMarkering from '../typer/kontrollerFaktaPeriodeMedApMarkering';

import styles from './uttakFaktaTable.less';

const HEADER_TEXT_CODES = [
  'UttakFaktaTable.Periode',
  'UttakFaktaTable.AntallDager',
  'UttakFaktaTable.Stonadskonto',
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

const getUttakPeriode = (
  alleKodeverk: AlleKodeverk,
  uttakPeriodeType: string,
  oppholdArsak?: string,
): string => (oppholdArsak
  ? alleKodeverk[KodeverkType.OPPHOLD_ARSAK].find((k) => k.kode === KodeverkType.MORS_AKTIVITET)?.navn
  : alleKodeverk[KodeverkType.UTTAK_PERIODE_TYPE].find((k) => k.kode === uttakPeriodeType)?.navn);

interface OwnProps {
  uttakKontrollerFaktaPerioder: KontrollerFaktaPeriodeMedApMarkering[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold: FaktaArbeidsforhold[];
  oppdaterUttakPerioder: (perioder: KontrollerFaktaPeriodeMedApMarkering[]) => void;
  alleKodeverk: AlleKodeverk;
  readOnly: boolean;
  setDirty: (isDirty: boolean) => void;
  erRedigerbart: boolean;
  førsteUttaksdato: string;
}

const UttakFaktaTable: FunctionComponent<OwnProps> = ({
  uttakKontrollerFaktaPerioder,
  arbeidsgiverOpplysningerPerId,
  faktaArbeidsforhold,
  oppdaterUttakPerioder,
  alleKodeverk,
  readOnly,
  setDirty,
  erRedigerbart,
  førsteUttaksdato,
}) => {
  const [valgteFomDatoer, setValgteFomDatoer] = useState<string[]>([]);

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
      .filter((p) => p.fom !== uPeriode.originalFom)
      .concat(uPeriode)
      .sort((a1, a2) => a1.fom.localeCompare(a2.fom));

    oppdaterUttakPerioder(oppdatertePerioder);
    velgPeriodeFomDato(undefined, true);
    setDirty(true);
  }, [uttakKontrollerFaktaPerioder]);

  const slettPeriode = useCallback((fom: string) => {
    const oppdatertePerioder = uttakKontrollerFaktaPerioder.filter((p) => p.originalFom !== fom);
    oppdaterUttakPerioder(oppdatertePerioder);
    setDirty(true);
  }, [uttakKontrollerFaktaPerioder]);

  const [visNyPeriode, settVisNyPeriode] = useState(false);

  return (
    <>
      <Table
        headerTextCodes={erRedigerbart ? HEADER_TEXT_CODES : HEADER_TEXT_CODES.filter((h) => h !== 'EMPTY')}
        noHover
        hasGrayHeader
      >
        {uttakKontrollerFaktaPerioder.map((periode) => {
          const numberOfDaysAndWeeks = calcDaysAndWeeks(periode.fom, periode.tom);

          const kolonner = (
            <>
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
              <TableColumn>{getUttakPeriode(alleKodeverk, periode.uttakPeriodeType, periode.oppholdÅrsak)}</TableColumn>
              <TableColumn>
                <FormattedMessage id={alleKodeverk[KodeverkType.FORDELING_PERIODE_KILDE].find((k) => k.kode === periode.periodeKilde)?.navn} />
              </TableColumn>
            </>
          );

          if (!erRedigerbart) {
            return (
              <TableRow key={periode.fom + periode.tom}>
                {kolonner}
              </TableRow>
            );
          }

          return (
            <ExpandableTableRow
              key={periode.fom + periode.tom}
              isApLeftBorder={!!periode.aksjonspunktType}
              showContent={valgteFomDatoer.includes(periode.fom)}
              toggleContent={() => velgPeriodeFomDato(periode.fom)}
              content={valgteFomDatoer.includes(periode.fom) && (
                <UttakFaktaDetailForm
                  valgtPeriode={periode}
                  readOnly={readOnly}
                  oppdaterPeriode={oppdaterPeriode}
                  slettPeriode={() => slettPeriode(periode.originalFom)}
                  avbrytEditering={() => velgPeriodeFomDato(periode.fom)}
                  alleKodeverk={alleKodeverk}
                  arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                  faktaArbeidsforhold={faktaArbeidsforhold}
                  førsteUttaksdato={førsteUttaksdato}
                />
              )}
            >
              {kolonner}
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
              disabled={readOnly}
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
                avbrytEditering={() => settVisNyPeriode(false)}
                readOnly={false}
                alleKodeverk={alleKodeverk}
                oppdaterPeriode={(uttaksperiode: KontrollerFaktaPeriodeMedApMarkering) => {
                  oppdaterUttakPerioder(uttakKontrollerFaktaPerioder.concat(uttaksperiode));
                  settVisNyPeriode(false);
                }}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                faktaArbeidsforhold={faktaArbeidsforhold}
                førsteUttaksdato={førsteUttaksdato}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default UttakFaktaTable;
