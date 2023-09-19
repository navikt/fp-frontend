import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage } from 'react-intl';
import { BodyShort, HStack, Label, VStack } from '@navikt/ds-react';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT, formatCurrencyNoKr } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { opptjeningAktivitetType as OAType } from '@navikt/fp-kodeverk';
import { ArbeidsgiverOpplysningerPerId, FerdiglignetNæring } from '@navikt/fp-types';

const YTELSE_TYPER = [
  OAType.SYKEPENGER,
  OAType.FORELDREPENGER,
  OAType.PLEIEPENGER,
  OAType.SVANGERSKAPSPENGER,
  OAType.UTENLANDSK_ARBEIDSFORHOLD,
];

const erAvType = (valgtAktivitetstype?: string, ...opptjeningAktivitetType: string[]): boolean =>
  !!valgtAktivitetstype && opptjeningAktivitetType.includes(valgtAktivitetstype);

const formatDato = (dato: string): string => (dato ? dayjs(dato, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const getOppdragsgiverIntlId = (valgtAktivitetstype?: string): string =>
  erAvType(valgtAktivitetstype, OAType.FRILANS) ? 'ActivityPanel.Oppdragsgiver' : 'ActivityPanel.Arbeidsgiver';

const finnArbeidsgivertekst = (
  arbeidsgiverReferanse: string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];

  if (!arbeidsgiverReferanse || !arbeidsgiverOpplysninger) {
    return '-';
  }

  if (arbeidsgiverOpplysninger.erPrivatPerson && arbeidsgiverOpplysninger.fødselsdato) {
    const fodselsdato = formatDato(arbeidsgiverOpplysninger.fødselsdato);
    return `${arbeidsgiverOpplysninger.navn} (${fodselsdato})`;
  }

  return arbeidsgiverOpplysninger.identifikator
    ? `${arbeidsgiverOpplysninger.navn} (${arbeidsgiverOpplysninger.identifikator})`
    : arbeidsgiverOpplysninger.navn;
};

const finnNæringLabel = (ferdiglignetNæring: FerdiglignetNæring[]): string =>
  ferdiglignetNæring.length > 0 ? 'ActivityPanel.FerdiglignetNæring' : 'ActivityPanel.IngenFerdiglignetNæring';

interface OwnProps {
  valgtAktivitetstype?: string;
  arbeidsgiverReferanse: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  stillingsandel: number;
  naringRegistreringsdato: string;
  ferdiglignetNæring: FerdiglignetNæring[];
}

/**
 * ValgtAktivitetSubForm
 *
 * Viser informasjon om valgt aktivitet
 */
const ValgtAktivitetSubForm: FunctionComponent<OwnProps> = ({
  valgtAktivitetstype,
  arbeidsgiverReferanse,
  arbeidsgiverOpplysningerPerId,
  stillingsandel,
  naringRegistreringsdato,
  ferdiglignetNæring,
}) => (
  <VStack gap="4">
    {erAvType(valgtAktivitetstype, ...[OAType.ARBEID, OAType.NARING, ...YTELSE_TYPER]) && (
      <HStack gap="4">
        <div>
          <VerticalSpacer eightPx />
          <Label size="small">
            <FormattedMessage id={getOppdragsgiverIntlId(valgtAktivitetstype)} />
          </Label>
          <BodyShort size="small">
            {finnArbeidsgivertekst(arbeidsgiverReferanse, arbeidsgiverOpplysningerPerId)}
          </BodyShort>
        </div>
        {erAvType(valgtAktivitetstype, OAType.ARBEID) && (
          <div>
            <VerticalSpacer eightPx />
            <Label size="small">
              <FormattedMessage id="ActivityPanel.Stillingsandel" />
            </Label>
            <BodyShort size="small">{stillingsandel}</BodyShort>
          </div>
        )}
      </HStack>
    )}
    {erAvType(valgtAktivitetstype, OAType.NARING) && (
      <>
        <div>
          <Label size="small">
            <FormattedMessage id="ActivityPanel.Registreringsdato" />
          </Label>
          <BodyShort size="small">
            {naringRegistreringsdato ? dayjs(naringRegistreringsdato).format(DDMMYYYY_DATE_FORMAT) : '-'}
          </BodyShort>
        </div>
        <div>
          <Label size="small">
            <FormattedMessage id={finnNæringLabel(ferdiglignetNæring)} />
          </Label>
          {ferdiglignetNæring
            .sort((a, b) => {
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
                <BodyShort size="small">{formatCurrencyNoKr(inntekt.beløp)}</BodyShort>
              </HStack>
            ))}
        </div>
      </>
    )}
  </VStack>
);

export default ValgtAktivitetSubForm;
