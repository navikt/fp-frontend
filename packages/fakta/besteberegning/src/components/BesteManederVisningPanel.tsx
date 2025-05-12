import { type ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, Table, VStack } from '@navikt/ds-react';
import { dateFormat, formatCurrencyNoKr } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { KodeverkType } from '@navikt/fp-kodeverk';
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
      alleKodeverk[KodeverkType.OPPTJENING_AKTIVITET_TYPE].find(type => type.kode === inntekt.opptjeningAktivitetType)
        ?.navn ?? ''
    );
  }
  if (agOpplysning.erPrivatPerson) {
    return agOpplysning.fødselsdato
      ? `${agOpplysning.navn} (${dateFormat(agOpplysning.fødselsdato)})`
      : agOpplysning.navn;
  }
  return `${agOpplysning.navn} (${agOpplysning.identifikator})`;
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
  <Table.Row className={styles.månedRad}>
    <Table.DataCell className={styles.månedAktivitet}>
      <BodyShort size="small">{lagVisningsNavn(inntekt, arbeidsgiverOpplysninger, alleKodeverk)}</BodyShort>
    </Table.DataCell>
    <Table.DataCell className={styles.månedInntekt}>
      <BodyShort size="small">{formatCurrencyNoKr(inntekt.inntekt)}</BodyShort>
    </Table.DataCell>
  </Table.Row>
);
const SummeringsRad = ({ inntekter }: { inntekter: BesteberegningInntekt[] }): ReactElement => (
  <Table.Row key="sum">
    <Table.DataCell>
      <Label size="small">
        <FormattedMessage id="Inntekttabell.Sum" />
      </Label>
    </Table.DataCell>
    <Table.DataCell>
      <Label size="small">
        {formatCurrencyNoKr(inntekter.map(({ inntekt }) => inntekt).reduce((i1, i2) => i1 + i2, 0))}
      </Label>
    </Table.DataCell>
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
  <HStack gap="2">
    {måneder.map(månedsgrunnlag => {
      return (
        <div className={styles.colWidth} key={månedsgrunnlag.fom}>
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
    <VStack gap="4">
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
          values={{ inntekt: formatCurrencyNoKr(finnÅrsinntekt(besteMåneder)) }}
        />
      </Label>
    </VStack>
  );
};
