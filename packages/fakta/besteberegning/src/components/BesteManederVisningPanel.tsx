import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, Table, VStack } from '@navikt/ds-react';
import { BeløpLabel } from '@navikt/ft-ui-komponenter';
import { formaterArbeidsgiver } from '@navikt/ft-utils';
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
  return formatertString.charAt(0).toUpperCase() + formatertString.slice(1);
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

const InntektRad = ({
  inntekt,
  arbeidsgiverOpplysninger,
  alleKodeverk,
}: {
  inntekt: BesteberegningInntekt;
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
  alleKodeverk: AlleKodeverk;
}): ReactElement => (
  <Table.Row className={styles['månedRad']}>
    <Table.DataCell textSize="small" className={styles['månedAktivitet']}>
      {lagVisningsNavn(inntekt, arbeidsgiverOpplysninger, alleKodeverk)}
    </Table.DataCell>
    <Table.DataCell textSize="small" className={styles['månedInntekt']}>
      <BeløpLabel beløp={inntekt.inntekt} />
    </Table.DataCell>
  </Table.Row>
);
const SummeringsRad = ({ inntekter }: { inntekter: BesteberegningInntekt[] }): ReactElement => (
  <Table.Row key="sum">
    <Table.HeaderCell textSize="small">
      <FormattedMessage id="Inntekttabell.Sum" />
    </Table.HeaderCell>
    <Table.HeaderCell textSize="small">
      <BeløpLabel beløp={inntekter.map(({ inntekt }) => inntekt).reduce((i1, i2) => i1 + i2, 0)} />
    </Table.HeaderCell>
  </Table.Row>
);

interface InntekttabellProps {
  inntekter: BesteberegningInntekt[];
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
  alleKodeverk: AlleKodeverk;
}

const Inntekttabell = ({ inntekter, arbeidsgiverOpplysninger, alleKodeverk }: InntekttabellProps) => {
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
      <Table.Body>
        {inntekter.map(inntekt => (
          <InntektRad
            key={`${inntekt.arbeidsforholdId}-${inntekt.arbeidsgiverId}-${inntekt.inntekt}`}
            inntekt={inntekt}
            arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
            alleKodeverk={alleKodeverk}
          />
        ))}
        {inntekter.length > 0 && <SummeringsRad inntekter={inntekter} />}
      </Table.Body>
    </Table>
  );
};

interface RadMedMånederProps {
  måneder: Månedsgrunnlag[];
  arbeidsgiverOpplysninger: ArbeidsgiverOpplysningerPerId;
  alleKodeverk: AlleKodeverk;
}

const RadMedMåneder = ({ måneder, arbeidsgiverOpplysninger, alleKodeverk }: RadMedMånederProps): ReactElement => (
  <HStack gap="space-8">
    {måneder.map(månedsgrunnlag => {
      return (
        <div className={styles['colWidth']} key={månedsgrunnlag.fom}>
          <BodyShort size="small">{formaterMånedOgÅr(månedsgrunnlag.fom)}</BodyShort>
          <Inntekttabell
            inntekter={månedsgrunnlag.inntekter}
            arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
            alleKodeverk={alleKodeverk}
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
      <Label size="small">
        <FormattedMessage id="Inntekttabell.Tittel" />{' '}
      </Label>
      <RadMedMåneder
        måneder={sorterteMåneder.slice(0, 2)}
        arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
        alleKodeverk={alleKodeverk}
      />
      <RadMedMåneder
        måneder={sorterteMåneder.slice(2, 4)}
        arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
        alleKodeverk={alleKodeverk}
      />
      <RadMedMåneder
        måneder={sorterteMåneder.slice(4, 6)}
        arbeidsgiverOpplysninger={arbeidsgiverOpplysninger}
        alleKodeverk={alleKodeverk}
      />
      <Label size="small">
        <FormattedMessage
          id="Inntekttabell.BeregnetÅrsinntekt"
          values={{ inntekt: <BeløpLabel beløp={finnÅrsinntekt(besteMåneder)} /> }}
        />
      </Label>
    </VStack>
  );
};
