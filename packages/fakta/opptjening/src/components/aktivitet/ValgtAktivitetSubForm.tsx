import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label } from '@navikt/ds-react';
import { BeløpLabel, DateLabel, LabeledValue } from '@navikt/ft-ui-komponenter';
import { formaterArbeidsgiver } from '@navikt/ft-utils';

import type { ArbeidsgiverOpplysningerPerId, FerdiglignetNæring, OpptjeningAktivitetType } from '@navikt/fp-types';

const YTELSE_TYPER = new Set<OpptjeningAktivitetType>([
  'SYKEPENGER',
  'FORELDREPENGER',
  'PLEIEPENGER',
  'SVANGERSKAPSPENGER',
  'UTENLANDSK_ARBEIDSFORHOLD',
]);

const erAvType = (
  valgtAktivitetstype?: OpptjeningAktivitetType,
  ...opptjeningAktivitetType: OpptjeningAktivitetType[]
): boolean => !!valgtAktivitetstype && opptjeningAktivitetType.includes(valgtAktivitetstype);

const getOppdragsgiverIntlId = (valgtAktivitetstype?: OpptjeningAktivitetType): string =>
  erAvType(valgtAktivitetstype, 'FRILANS') ? 'ActivityPanel.Oppdragsgiver' : 'ActivityPanel.Arbeidsgiver';

const finnArbeidsgivertekst = (
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
  arbeidsgiverReferanse?: string,
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
  valgtAktivitetstype?: OpptjeningAktivitetType;
  arbeidsgiverReferanse?: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  stillingsandel: number;
  naringRegistreringsdato?: string;
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
  <>
    {erAvType(valgtAktivitetstype, 'ARBEID', 'NÆRING', ...YTELSE_TYPER) && (
      <HStack gap="space-16">
        <LabeledValue
          size="small"
          label={<FormattedMessage id={getOppdragsgiverIntlId(valgtAktivitetstype)} />}
          value={finnArbeidsgivertekst(arbeidsgiverOpplysningerPerId, arbeidsgiverReferanse)}
        />
        {erAvType(valgtAktivitetstype, 'ARBEID') && (
          <LabeledValue
            size="small"
            label={<FormattedMessage id="ActivityPanel.Stillingsandel" />}
            value={stillingsandel}
          />
        )}
      </HStack>
    )}
    {erAvType(valgtAktivitetstype, 'NÆRING') && (
      <>
        <LabeledValue
          size="small"
          label={<FormattedMessage id="ActivityPanel.Registreringsdato" />}
          value={naringRegistreringsdato ? <DateLabel dateString={naringRegistreringsdato} /> : '-'}
        />
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
              <HStack gap="space-20" key={inntekt.år}>
                <BodyShort size="small">{inntekt.år}</BodyShort>
                <BodyShort size="small">
                  <BeløpLabel beløp={inntekt.beløp} kr />
                </BodyShort>
              </HStack>
            ))}
        </div>
      </>
    )}
  </>
);
