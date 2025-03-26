import { type ReactElement, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, Table, VStack } from '@navikt/ds-react';
import { dateFormat, formatCurrencyNoKr } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { KodeverkType } from '@navikt/fp-kodeverk';
import type { ArbeidsgiverOpplysningerPerId, BesteberegningInntekt, Månedsgrunnlag } from '@navikt/fp-types';

import styles from './besteManederVisningPanel.module.css';

const formaterMånedOgÅr = (date: string): string => {
  const formatertString = dayjs(date).format('MMMM - YYYY');
  return formatertString.charAt(0).toUpperCase() + formatertString.slice(1);
};

interface Props {
  besteMåneder: Månedsgrunnlag[];
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType) => string;
}

interface InntekttabellProps {
  inntekter: BesteberegningInntekt[];
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType) => string;
}

const lagVisningsNavn = (
  inntekt: BesteberegningInntekt,
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId,
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType) => string,
): string => {
  const agOpplysning = inntekt.arbeidsgiverId ? arbeidsgiverOpplysninger[inntekt.arbeidsgiverId] : undefined;
  if (!agOpplysning) {
    return getKodeverkNavn(inntekt.opptjeningAktivitetType, KodeverkType.OPPTJENING_AKTIVITET_TYPE);
  }
  if (agOpplysning.erPrivatPerson) {
    return agOpplysning.fødselsdato
      ? `${agOpplysning.navn} (${dateFormat(agOpplysning.fødselsdato)})`
      : agOpplysning.navn;
  }
  return `${agOpplysning.navn} (${agOpplysning.identifikator})`;
};

const lagInntektRader = (
  inntekter: BesteberegningInntekt[],
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId,
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType) => string,
): ReactElement[] =>
  inntekter.map((inntekt: BesteberegningInntekt) => (
    <Table.Row
      key={`${inntekt.arbeidsforholdId}-${inntekt.arbeidsgiverId}-${inntekt.inntekt}`}
      className={styles.månedRad}
    >
      <Table.DataCell className={styles.månedAktivitet}>
        <BodyShort size="small">{lagVisningsNavn(inntekt, arbeidsgiverOpplysninger, getKodeverkNavn)}</BodyShort>
      </Table.DataCell>
      <Table.DataCell className={styles.månedInntekt}>
        <BodyShort size="small">{formatCurrencyNoKr(inntekt.inntekt)}</BodyShort>
      </Table.DataCell>
    </Table.Row>
  ));

const lagSummeringsRad = (inntekter: BesteberegningInntekt[], labelId: string): ReactElement =>
  inntekter.length === 0 ? (
    <div />
  ) : (
    <Table.Row key="sum">
      <Table.DataCell>
        <Label size="small">
          <FormattedMessage id={labelId} />
        </Label>
      </Table.DataCell>
      <Table.DataCell>
        <Label size="small">
          {formatCurrencyNoKr(inntekter.map(({ inntekt }) => inntekt).reduce((i1, i2) => i1 + i2, 0))}
        </Label>
      </Table.DataCell>
    </Table.Row>
  );

const Inntekttabell = ({ inntekter, arbeidsgiverOpplysninger, getKodeverkNavn }: InntekttabellProps) => {
  const rows: ReactElement[] = [];
  lagInntektRader(inntekter, arbeidsgiverOpplysninger, getKodeverkNavn).forEach(rad => rows.push(rad));
  rows.push(lagSummeringsRad(inntekter, 'Inntekttabell.Sum'));
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="BesteberegningProsessPanel.Måned.Inntekt.Aktivitet" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col">
            <FormattedMessage id="BesteberegningProsessPanel.Måned.Inntekt.Inntekt" />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{rows}</Table.Body>
    </Table>
  );
};

const lagRadMedMåneder = (
  måneder: Månedsgrunnlag[],
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId,
  getKodeverkNavn: (kodeverk: string, kodeverkType: KodeverkType) => string,
): ReactElement => (
  <HStack gap="2">
    {måneder.map((månedsgrunnlag: Månedsgrunnlag) => {
      const key = månedsgrunnlag.fom;
      return (
        <div className={styles.colWidth} key={key}>
          <BodyShort size="small">{formaterMånedOgÅr(månedsgrunnlag.fom)}</BodyShort>
          <Inntekttabell
            inntekter={månedsgrunnlag.inntekter}
            arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
            getKodeverkNavn={getKodeverkNavn}
          />
        </div>
      );
    })}
  </HStack>
);

const finnÅrsinntekt = (besteMåneder: Månedsgrunnlag[]): number => {
  const snittPrMnd =
    besteMåneder
      .flatMap(måned => måned.inntekter)
      .map(({ inntekt }) => inntekt)
      .reduce((i1, i2) => i1 + i2, 0) / 6;
  return snittPrMnd * 12;
};

const sorterEtterMåned = (besteMåneder: Månedsgrunnlag[]) =>
  [...besteMåneder].sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom)));

/**
 * BesteManederVisningPanel
 *
 * Presentasjonskomponent. Viser månedene som brukes i beregning etter §14-7, tredje ledd
 */
export const BesteMånederVisningPanel = ({ besteMåneder, arbeidsgiverOpplysninger, getKodeverkNavn }: Props) => {
  const sorterteMåneder = useMemo(() => sorterEtterMåned(besteMåneder), [besteMåneder]);
  return (
    <VStack gap="4">
      <Label size="small">
        <FormattedMessage id="Inntekttabell.Tittel" />{' '}
      </Label>
      {lagRadMedMåneder(sorterteMåneder.slice(0, 2), arbeidsgiverOpplysninger, getKodeverkNavn)}
      {lagRadMedMåneder(sorterteMåneder.slice(2, 4), arbeidsgiverOpplysninger, getKodeverkNavn)}
      {lagRadMedMåneder(sorterteMåneder.slice(4, 6), arbeidsgiverOpplysninger, getKodeverkNavn)}
      <Label size="small">
        <FormattedMessage
          id="Inntekttabell.BeregnetÅrsinntekt"
          values={{ inntekt: formatCurrencyNoKr(finnÅrsinntekt(besteMåneder)) }}
        />
      </Label>
    </VStack>
  );
};
