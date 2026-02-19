import { type ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Box, Button, HStack, Label, Table, VStack } from '@navikt/ds-react';
import { calcDaysAndWeeks, dateFormat, formaterArbeidsgiver } from '@navikt/ft-utils';

import type {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BeregningsresultatPeriode,
  BeregningsresultatPeriodeAndel,
} from '@navikt/fp-types';

// TODO Kva er dette? Kodeverk-navn skal hentast fra databasen!
const UttakPeriodeNavn: Record<string, string> = {
  MØDREKVOTE: 'Mødrekvote',
  FEDREKVOTE: 'Fedrekvote',
  FELLESPERIODE: 'Fellesperiode',
  FORELDREPENGER_FØR_FØDSEL: 'Foreldrepenger før fødsel',
  FORELDREPENGER: 'Foreldrepenger',
  FLERBARNSDAGER: 'Flerbarnsdager',
  '-': '-',
};

interface Props {
  valgtBeregningsresultatPeriode: BeregningsresultatPeriode;
  velgNestePeriode: () => void;
  velgForrigePeriode: () => void;
  alleKodeverk: AlleKodeverk;
  erSøknadSvangerskapspenger: boolean;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  lukkPeriode: () => void;
}

/**
 * TimeLineData
 *
 * Viser data fra valgt periode i tilkjent ytelse-tidslinjen
 */
export const TilkjentYtelseTimelineData = ({
  valgtBeregningsresultatPeriode,
  velgNestePeriode,
  velgForrigePeriode,
  alleKodeverk,
  erSøknadSvangerskapspenger,
  arbeidsgiverOpplysningerPerId,
  lukkPeriode,
}: Props) => {
  const intl = useIntl();

  const numberOfDaysAndWeeks = calcDaysAndWeeks(valgtBeregningsresultatPeriode.fom, valgtBeregningsresultatPeriode.tom);

  const bold = (...chunks: [parts: React.ReactNode[]]) => <b>{chunks}</b>;

  return (
    <Box borderWidth="1" padding="space-16">
      <VStack gap="space-16">
        <HStack justify="space-between">
          <Label size="small">
            <FormattedMessage id="TilkjentYtelse.PeriodeData.Detaljer" />
          </Label>
          <HStack gap="space-8" align="center">
            <Button
              data-color="neutral"
              size="xsmall"
              icon={<ArrowLeftIcon aria-hidden />}
              onClick={velgForrigePeriode}
              variant="secondary"
              type="button"
              title={intl.formatMessage({ id: 'Timeline.prevPeriod' })}>
              <FormattedMessage id="Timeline.prevPeriodShort" />
            </Button>
            <Button
              data-color="neutral"
              size="xsmall"
              icon={<ArrowRightIcon aria-hidden />}
              onClick={velgNestePeriode}
              variant="secondary"
              type="button"
              title={intl.formatMessage({ id: 'Timeline.nextPeriod' })}
              iconPosition="right">
              <FormattedMessage id="Timeline.nextPeriodShort" />
            </Button>
            <Button
              data-color="neutral"
              size="xsmall"
              icon={<XMarkIcon aria-hidden />}
              onClick={lukkPeriode}
              variant="tertiary"
              type="button"
              title={intl.formatMessage({ id: 'Timeline.lukkPeriode' })} />
          </HStack>
        </HStack>
        <Box background="success-moderate" padding="space-16" width="370px">
          <VStack gap="space-8">
            <HStack justify="space-between">
              <Label size="small">
                <FormattedMessage
                  id="TilkjentYtelse.PeriodeData.Periode"
                  values={{
                    fomVerdi: dateFormat(valgtBeregningsresultatPeriode.fom),
                    tomVerdi: dateFormat(valgtBeregningsresultatPeriode.tom),
                  }}
                />
              </Label>
              <BodyShort size="small">{numberOfDaysAndWeeks.formattedString}</BodyShort>
            </HStack>
            <HStack gap="space-8">
              <FormattedMessage
                id="TilkjentYtelse.PeriodeData.Dagsats"
                values={{ dagsatsVerdi: valgtBeregningsresultatPeriode.dagsats, b: bold }}
              />
            </HStack>
          </VStack>
        </Box>
        {valgtBeregningsresultatPeriode.andeler && valgtBeregningsresultatPeriode.andeler.length !== 0 && (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="TilkjentYtelse.PeriodeData.Andel" />
                </Table.HeaderCell>
                {!erSøknadSvangerskapspenger && (
                  <>
                    <Table.HeaderCell scope="col">
                      <FormattedMessage id="TilkjentYtelse.PeriodeData.KontoType" />
                    </Table.HeaderCell>
                    <Table.HeaderCell scope="col">
                      <FormattedMessage id="TilkjentYtelse.PeriodeData.Gradering" />
                    </Table.HeaderCell>
                  </>
                )}
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="TilkjentYtelse.PeriodeData.Utbetalingsgrad" />
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="TilkjentYtelse.PeriodeData.Refusjon" />
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="TilkjentYtelse.PeriodeData.TilSoker" />
                </Table.HeaderCell>
                <Table.HeaderCell scope="col">
                  <FormattedMessage id="TilkjentYtelse.PeriodeData.SisteUtbDato" />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {valgtBeregningsresultatPeriode.andeler.map((andel, index: number) => (
                <Table.Row key={`index${index + 1}`}>
                  <Table.DataCell>{findAndelsnavn(andel, alleKodeverk, arbeidsgiverOpplysningerPerId)}</Table.DataCell>
                  {!erSøknadSvangerskapspenger && (
                    <Table.DataCell>
                      <BodyShort size="small">{UttakPeriodeNavn[andel.uttak.stonadskontoType]}</BodyShort>
                    </Table.DataCell>
                  )}
                  {!erSøknadSvangerskapspenger && (
                    <Table.DataCell>
                      <BodyShort size="small">{getGradering(andel)}</BodyShort>
                    </Table.DataCell>
                  )}
                  <Table.DataCell>
                    <BodyShort size="small">{andel.utbetalingsgrad ? andel.utbetalingsgrad : ''}</BodyShort>
                  </Table.DataCell>
                  <Table.DataCell>
                    <BodyShort size="small">
                      {andel.aktivitetStatus === 'AT' && andel.refusjon ? andel.refusjon : ''}
                    </BodyShort>
                  </Table.DataCell>
                  <Table.DataCell>
                    <BodyShort size="small">{andel.tilSøker ? andel.tilSøker : ''}</BodyShort>
                  </Table.DataCell>
                  <Table.DataCell>
                    <BodyShort size="small">
                      {andel.sisteUtbetalingsdato ? dateFormat(andel.sisteUtbetalingsdato) : ''}
                    </BodyShort>
                  </Table.DataCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
      </VStack>
    </Box>
  );
};

const createVisningNavnForUttakArbeidstaker = (
  andel: BeregningsresultatPeriodeAndel,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement | string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[andel.arbeidsgiverReferanse];
  if (!arbeidsgiverOpplysninger?.navn) {
    const opptjeningAktiviteter = alleKodeverk['OpptjeningAktivitetType'];
    return opptjeningAktiviteter.find(({ kode }) => kode === andel.arbeidsforholdType)?.navn ?? '';
  }
  return formaterArbeidsgiver(arbeidsgiverOpplysninger, andel.eksternArbeidsforholdId);
};

const findAndelsnavn = (
  andel: BeregningsresultatPeriodeAndel,
  alleKodeverk: AlleKodeverk,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): ReactElement | string => {
  switch (andel.aktivitetStatus) {
    case 'AT':
      return createVisningNavnForUttakArbeidstaker(andel, alleKodeverk, arbeidsgiverOpplysningerPerId);
    case 'FL':
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.Frilans" />;
    case 'SN':
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.SelvstendigNaeringsdrivende" />;
    case 'DP':
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.Dagpenger" />;
    case 'AAP':
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.AAP" />;
    case 'MS':
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.Militaer" />;
    case 'BA':
      return <FormattedMessage id="TilkjentYtelse.PeriodeData.BrukersAndel" />;

    default:
      return '';
  }
};

const getGradering = (andel?: BeregningsresultatPeriodeAndel): ReactElement | null => {
  if (andel === undefined) {
    return null;
  }
  const stringId = andel.uttak.gradering === true ? 'TilkjentYtelse.PeriodeData.Ja' : 'TilkjentYtelse.PeriodeData.Nei';
  return <FormattedMessage id={stringId} />;
};
