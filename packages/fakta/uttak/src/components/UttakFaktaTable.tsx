import type { Dispatch, SetStateAction } from 'react';
import { FormattedMessage, type IntlShape, useIntl } from 'react-intl';

import { PlusCircleIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, Button, Heading, Table, VStack } from '@navikt/ds-react';
import { LabeledValue, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { calcDaysAndWeeks, sortPeriodsByFom } from '@navikt/ft-utils';

import type {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  Fagsak,
  FaktaArbeidsforhold,
  FaktaUttakPeriode,
} from '@navikt/fp-types';

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

const lagNyPeriodeId = (perioder: KontrollerFaktaPeriodeMedApMarkering[]): number =>
  Math.max(-1, ...perioder.map(p => p.id)) + 1;

interface Props {
  fagsak: Fagsak;
  valgtePeriodeIder: number[];
  setValgtePeriodeIder: Dispatch<SetStateAction<number[]>>;
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
  valgtePeriodeIder,
  setValgtePeriodeIder,
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

  const togglePeriode = (id: number) => {
    setValgtePeriodeIder(ider => (ider.includes(id) ? ider.filter(i => i !== id) : ider.concat(id)));
  };

  const lukkAllePerioder = () => setValgtePeriodeIder([]);

  const oppdaterPeriode = (id: number, periode: FaktaUttakPeriode) => {
    const oppdatertePerioder = uttakKontrollerFaktaPerioder
      .map(p => (p.id === id ? { ...periode, id } : p))
      .sort(sortPeriodsByFom);

    setDirty(true);
    oppdaterUttakPerioder(oppdatertePerioder);
    lukkAllePerioder();
  };

  const slettPeriode = (id: number) => {
    oppdaterUttakPerioder(uttakKontrollerFaktaPerioder.filter(p => p.id !== id));
    setValgtePeriodeIder(ider => ider.filter(i => i !== id));
    setDirty(true);
  };

  const leggTilPeriode = (periode: FaktaUttakPeriode) => {
    const nyeSortertePerioder = uttakKontrollerFaktaPerioder
      .concat({ ...periode, id: lagNyPeriodeId(uttakKontrollerFaktaPerioder) })
      .sort(sortPeriodsByFom);
    setDirty(true);
    oppdaterUttakPerioder(nyeSortertePerioder);
    settVisNyPeriode(false);
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
                key={periode.id}
                expandOnRowClick
                data-til-vurdering={!!periode.aksjonspunktType}
                togglePlacement="right"
                open={valgtePeriodeIder.includes(periode.id)}
                onOpenChange={() => togglePeriode(periode.id)}
                contentGutter="none"
                content={
                  valgtePeriodeIder.includes(periode.id) && (
                    <UttakFaktaDetailForm
                      fagsak={fagsak}
                      valgtPeriode={periode}
                      readOnly={readOnly || !erRedigerbart}
                      oppdaterPeriode={oppdatertPeriode => oppdaterPeriode(periode.id, oppdatertPeriode)}
                      slettPeriode={() => slettPeriode(periode.id)}
                      avbrytEditering={() => togglePeriode(periode.id)}
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
                lukkAllePerioder();
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
                oppdaterPeriode={leggTilPeriode}
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
