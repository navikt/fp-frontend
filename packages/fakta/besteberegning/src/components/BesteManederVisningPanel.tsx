import { FormattedMessage } from 'react-intl';

import { Heading, HGrid, Label, Table, VStack } from '@navikt/ds-react';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { capitalizeFirstLetter, formaterArbeidsgiver } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import type {
  AlleKodeverk,
  ArbeidsgiverOpplysningerPerId,
  BesteberegningInntekt,
  Månedsgrunnlag,
} from '@navikt/fp-types';

import styles from './besteManederVisningPanel.module.css';

const formaterMånedOgÅr = (date: string): string => {
  const formatertString = dayjs(date).format('MMMM - YYYY');
  return capitalizeFirstLetter(formatertString);
};

const lagVisningsNavn = (
  inntekt: BesteberegningInntekt,
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId,
  alleKodeverk: AlleKodeverk,
): string => {
  const agOpplysning = inntekt.arbeidsgiverId ? arbeidsgiverOpplysninger[inntekt.arbeidsgiverId] : undefined;
  if (!agOpplysning) {
    return (
      alleKodeverk['OpptjeningAktivitetType'].find(type => type.kode === inntekt.opptjeningAktivitetType)?.navn ?? ''
    );
  }
  return formaterArbeidsgiver(agOpplysning);
};

interface InntekttabellProps {
  inntekter: BesteberegningInntekt[];
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
  alleKodeverk: AlleKodeverk;
}

const Inntekttabell = ({ inntekter, arbeidsgiverOpplysninger, alleKodeverk }: InntekttabellProps) => {
  return (
    <Table className={styles['table']}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope="col" textSize="small">
            <FormattedMessage id="BesteberegningProsessPanel.Måned.Inntekt.Aktivitet" />
          </Table.HeaderCell>
          <Table.HeaderCell scope="col" textSize="small" align="right">
            <FormattedMessage id="BesteberegningProsessPanel.Måned.Inntekt.Inntekt" />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {inntekter.map(inntekt => (
          <Table.Row key={`${inntekt.arbeidsforholdId}-${inntekt.arbeidsgiverId}-${inntekt.inntekt}`}>
            <Table.DataCell textSize="small">
              {lagVisningsNavn(inntekt, arbeidsgiverOpplysninger, alleKodeverk)}
            </Table.DataCell>
            <Table.DataCell textSize="small" align="right">
              <BeløpLabel beløp={inntekt.inntekt} kr />
            </Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
      {inntekter.length > 0 && (
        <tfoot>
          <Table.Row key="sum">
            <Table.HeaderCell textSize="small">
              <FormattedMessage id="Inntekttabell.Sum" />
            </Table.HeaderCell>
            <Table.HeaderCell textSize="small" align="right">
              <BeløpLabel beløp={inntekter.map(({ inntekt }) => inntekt).reduce((i1, i2) => i1 + i2, 0)} kr />
            </Table.HeaderCell>
          </Table.Row>
        </tfoot>
      )}
    </Table>
  );
};

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

interface Props {
  besteMåneder: Månedsgrunnlag[];
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
  alleKodeverk: AlleKodeverk;
}

/**
 * BesteManederVisningPanel
 *
 * Presentasjonskomponent. Viser månedene som brukes i beregning etter §14-7, tredje ledd
 */
export const BesteMånederVisningPanel = ({ besteMåneder, arbeidsgiverOpplysninger, alleKodeverk }: Props) => {
  const sorterteMåneder = sorterEtterMåned(besteMåneder);
  return (
    <VStack gap="space-16">
      <Heading size="xsmall" level="3">
        <FormattedMessage id="Inntekttabell.Tittel" />
      </Heading>
      <HGrid columns={2} gap="space-24">
        {sorterteMåneder.map(månedsgrunnlag => (
          <div key={månedsgrunnlag.fom}>
            <Label size="small">{formaterMånedOgÅr(månedsgrunnlag.fom)}</Label>
            <Inntekttabell
              inntekter={månedsgrunnlag.inntekter}
              arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
              alleKodeverk={alleKodeverk}
            />
          </div>
        ))}
      </HGrid>
      <Label size="small">
        <FormattedMessage
          id="Inntekttabell.BeregnetÅrsinntekt"
          values={{ inntekt: <BeløpLabel beløp={finnÅrsinntekt(besteMåneder)} kr /> }}
        />
      </Label>
    </VStack>
  );
};
