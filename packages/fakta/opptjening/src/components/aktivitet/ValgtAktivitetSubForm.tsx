import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, VStack } from '@navikt/ds-react';
import { BeløpLabel, DateLabel } from '@navikt/ft-ui-komponenter';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

import { OpptjeningAktivitetType } from '@navikt/fp-kodeverk';
import type { ArbeidsgiverOpplysningerPerId, FerdiglignetNæring } from '@navikt/fp-types';

const YTELSE_TYPER = [
  OpptjeningAktivitetType.SYKEPENGER,
  OpptjeningAktivitetType.FORELDREPENGER,
  OpptjeningAktivitetType.PLEIEPENGER,
  OpptjeningAktivitetType.SVANGERSKAPSPENGER,
  OpptjeningAktivitetType.UTENLANDSK_ARBEIDSFORHOLD,
];

const erAvType = (valgtAktivitetstype?: string, ...opptjeningAktivitetType: string[]): boolean =>
  !!valgtAktivitetstype && opptjeningAktivitetType.includes(valgtAktivitetstype);

const getOppdragsgiverIntlId = (valgtAktivitetstype?: string): string =>
  erAvType(valgtAktivitetstype, OpptjeningAktivitetType.FRILANS)
    ? 'ActivityPanel.Oppdragsgiver'
    : 'ActivityPanel.Arbeidsgiver';

const finnArbeidsgivertekst = (
  arbeidsgiverReferanse: string | null,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverReferanse
    ? arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse]
    : undefined;

  if (!arbeidsgiverOpplysninger) {
    return '-';
  }

  return formaterArbeidsgiver(arbeidsgiverOpplysninger);
};

const finnNæringLabel = (ferdiglignetNæring: FerdiglignetNæring[]): string =>
  ferdiglignetNæring.length > 0 ? 'ActivityPanel.FerdiglignetNæring' : 'ActivityPanel.IngenFerdiglignetNæring';

interface Props {
  valgtAktivitetstype?: string;
  arbeidsgiverReferanse: string | null;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  stillingsandel: number;
  naringRegistreringsdato: string | null;
  ferdiglignetNæring: FerdiglignetNæring[];
}

/**
 * ValgtAktivitetSubForm
 *
 * Viser informasjon om valgt aktivitet
 */
export const ValgtAktivitetSubForm = ({
  valgtAktivitetstype,
  arbeidsgiverReferanse,
  arbeidsgiverOpplysningerPerId,
  stillingsandel,
  naringRegistreringsdato,
  ferdiglignetNæring,
}: Props) => (
  <VStack gap="4">
    {erAvType(
      valgtAktivitetstype,
      ...[OpptjeningAktivitetType.ARBEID, OpptjeningAktivitetType.NARING, ...YTELSE_TYPER],
    ) && (
      <HStack gap="4">
        <div>
          <Label size="small">
            <FormattedMessage id={getOppdragsgiverIntlId(valgtAktivitetstype)} />
          </Label>
          <BodyShort size="small">
            {finnArbeidsgivertekst(arbeidsgiverReferanse, arbeidsgiverOpplysningerPerId)}
          </BodyShort>
        </div>
        {erAvType(valgtAktivitetstype, OpptjeningAktivitetType.ARBEID) && (
          <div>
            <Label size="small">
              <FormattedMessage id="ActivityPanel.Stillingsandel" />
            </Label>
            <BodyShort size="small">{stillingsandel}</BodyShort>
          </div>
        )}
      </HStack>
    )}
    {erAvType(valgtAktivitetstype, OpptjeningAktivitetType.NARING) && (
      <>
        <div>
          <Label size="small">
            <FormattedMessage id="ActivityPanel.Registreringsdato" />
          </Label>
          <BodyShort size="small">
            {naringRegistreringsdato ? <DateLabel dateString={naringRegistreringsdato} /> : '-'}
          </BodyShort>
        </div>
        <div>
          <Label size="small">
            <FormattedMessage id={finnNæringLabel(ferdiglignetNæring)} />
          </Label>
          {ferdiglignetNæring
            .toSorted((a, b) => {
              if (a.år < b.år) {
                return 1;
              }
              if (a.år > b.år) {
                return -1;
              }
              return 0;
            })
            .map(inntekt => (
              <HStack gap="5" key={inntekt.år}>
                <BodyShort size="small">{inntekt.år}</BodyShort>
                <BodyShort size="small">
                  <BeløpLabel beløp={inntekt.beløp} />
                </BodyShort>
              </HStack>
            ))}
        </div>
      </>
    )}
  </VStack>
);
