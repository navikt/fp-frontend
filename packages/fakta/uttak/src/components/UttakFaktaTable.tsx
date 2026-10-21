import type { Dispatch, SetStateAction } from 'react';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, Button, Heading, Table, VStack } from '@navikt/ds-react';
import { LabeledValue, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { calcDaysAndWeeks, sortPeriodsByFom } from '@navikt/ft-utils';

import type { AlleKodeverk, ArbeidsgiverOpplysningerPerId, Fagsak, FaktaArbeidsforhold } from '@navikt/fp-types';

import type { KontrollerFaktaPeriodeMedApMarkering } from '../typer/kontrollerFaktaPeriodeMedApMarkering';
import { Årsakstype, utledÅrsakstype, UttakFaktaDetailForm } from './UttakFaktaDetailForm';

import styles from './uttakFaktaTable.module.css';

const getTypeTekst = (
  alleKodeverk: AlleKodeverk,
  periode: KontrollerFaktaPeriodeMedApMarkering,
  intl: IntlShape,
): string | undefined => {
  const årsaktype = utledÅrsakstype(periode);
  if (årsaktype === Årsakstype.UTTAK || årsaktype === Årsakstype.OVERFØRING) {
    const tekst = alleKodeverk['UttakPeriodeType'].find(k => k.kode === periode.uttakPeriodeType)?.navn;
    return periode.arbeidstidsprosent && periode.arbeidstidsprosent > 0
      ? `${tekst} - Gradert ${periode.arbeidstidsprosent}%`
      : tekst;
  }
  if (årsaktype === Årsakstype.OPPHOLD) {
    const navn = alleKodeverk['OppholdÅrsak'].find(k => k.kode === periode.oppholdÅrsak)?.navn;
    return intl.formatMessage({ id: 'UttakFaktaTabel.Opphold' }, { arsak: navn?.replace('har uttak av', '') });
  }

  const navn = alleKodeverk['UtsettelseÅrsak'].find(k => k.kode === periode.utsettelseÅrsak)?.navn;
  return intl.formatMessage({ id: 'UttakFaktaTabel.Utsettelse' }, { arsak: navn });
};

interface Props {
  fagsak: Fagsak;
  valgteFomDatoer: string[];
  setValgteFomDatoer: Dispatch<SetStateAction<string[]>>;
  uttakKontrollerFaktaPerioder: KontrollerFaktaPeriodeMedApMarkering[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  faktaArbeidsforhold?: FaktaArbeidsforhold[];
  oppdaterUttakPerioder: (perioder: KontrollerFaktaPeriodeMedApMarkering[]) => void;
  alleKodeverk: AlleKodeverk;
  readOnly: boolean;
  setDirty: (isDirty: boolean) => void;
  erRedigerbart: boolean;
  visNyPeriode: boolean;
  settVisNyPeriode: (vis: boolean) => void;
}

export const UttakFaktaTable = ({
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
}: Props) => {
  const intl = useIntl();

  const velgPeriodeFomDato = (fom?: string, lukkAlleAndre = false) => {
    if (fom && valgteFomDatoer.includes(fom)) {
      setValgteFomDatoer(foms => foms.filter(f => f !== fom));
    } else if (lukkAlleAndre) {
      const nye = fom ? [fom] : [];
      setValgteFomDatoer(() => nye);
    } else if (fom) {
      setValgteFomDatoer(foms => foms.concat(fom));
    }
  };

  const oppdaterPeriode = (uPeriode: KontrollerFaktaPeriodeMedApMarkering) => {
    const oppdatertePerioder = uttakKontrollerFaktaPerioder
      .filter(p => p.originalFom !== uPeriode.originalFom)
      .concat(uPeriode)
      .sort(sortPeriodsByFom);

    setDirty(true);
    oppdaterUttakPerioder(oppdatertePerioder);
    velgPeriodeFomDato(undefined, true);
  };

  const slettPeriode = (fom: string) => {
    const oppdatertePerioder = uttakKontrollerFaktaPerioder.filter(p => p.originalFom !== fom);
    oppdaterUttakPerioder(oppdatertePerioder);
    velgPeriodeFomDato(fom);
    setDirty(true);
  };

  const sisteMåned =
    uttakKontrollerFaktaPerioder.length > 0 ? new Date(uttakKontrollerFaktaPerioder.at(-1)!.tom) : undefined;

  return (
    <VStack gap="space-24">
      {uttakKontrollerFaktaPerioder.length === 0 && (
        <LabeledValue
          label={<FormattedMessage id="UttakFaktaTable.Perioder" />}
          value={
            <BodyShort as="span" textColor="subtle">
              <FormattedMessage id="UttakFaktaTable.IngenPerioderRegistrert" />
            </BodyShort>
          }
        />
      )}
      {uttakKontrollerFaktaPerioder.length > 0 && (
        <Table className={styles['table']}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="UttakFaktaTable.Periode" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="UttakFaktaTable.AntallDager" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="UttakFaktaTable.Type" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="UttakFaktaTable.Kilde" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col" />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {uttakKontrollerFaktaPerioder.map(periode => (
              <Table.ExpandableRow
                key={periode.fom + periode.tom}
                expandOnRowClick
                data-til-vurdering={!!periode.aksjonspunktType}
                togglePlacement="right"
                open={valgteFomDatoer.includes(periode.fom)}
                onOpenChange={() => velgPeriodeFomDato(periode.fom)}
                contentGutter="none"
                content={
                  valgteFomDatoer.includes(periode.fom) && (
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
                  )
                }
              >
                <Table.DataCell>
                  <PeriodLabel dateStringFom={periode.fom} dateStringTom={periode.tom} />
                </Table.DataCell>
                <Table.DataCell>{calcDaysAndWeeks(periode.fom, periode.tom).formattedString}</Table.DataCell>
                <Table.DataCell>{getTypeTekst(alleKodeverk, periode, intl)}</Table.DataCell>
                <Table.DataCell>
                  {alleKodeverk['FordelingPeriodeKilde'].find(k => k.kode === periode.periodeKilde)?.navn}
                </Table.DataCell>
              </Table.ExpandableRow>
            ))}
          </Table.Body>
        </Table>
      )}
      {erRedigerbart && (
        <>
          {!visNyPeriode && (
            <Button
              size="small"
              variant="tertiary"
              type="button"
              className="self-start"
              icon={<PlusCircleIcon />}
              onClick={() => {
                velgPeriodeFomDato(undefined, true);
                settVisNyPeriode(true);
              }}
            >
              <FormattedMessage id="UttakFaktaForm.LeggTilPeriode" />
            </Button>
          )}
          {visNyPeriode && (
            <Box background="sunken" padding="space-16">
              <Heading size="small" level="3">
                <FormattedMessage id="UttakFaktaForm.NyPeriode" />
              </Heading>
              <UttakFaktaDetailForm
                fagsak={fagsak}
                avbrytEditering={() => settVisNyPeriode(false)}
                readOnly={false}
                alleKodeverk={alleKodeverk}
                oppdaterPeriode={(uttaksperiode: KontrollerFaktaPeriodeMedApMarkering) => {
                  const nyeSortertePerioder = uttakKontrollerFaktaPerioder.concat(uttaksperiode).sort(sortPeriodsByFom);
                  setDirty(true);
                  oppdaterUttakPerioder(nyeSortertePerioder);
                  settVisNyPeriode(false);
                }}
                arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
                faktaArbeidsforhold={faktaArbeidsforhold}
                defaultMonth={sisteMåned}
              />
            </Box>
          )}
        </>
      )}
    </VStack>
  );
};
