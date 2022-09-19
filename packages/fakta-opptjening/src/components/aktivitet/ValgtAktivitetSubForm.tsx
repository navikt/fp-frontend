import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { BodyShort, Label } from '@navikt/ds-react';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import OAType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';
import { ArbeidsgiverOpplysningerPerId } from '@fpsak-frontend/types';

const YTELSE_TYPER = [OAType.SYKEPENGER, OAType.FORELDREPENGER, OAType.PLEIEPENGER, OAType.SVANGERSKAPSPENGER, OAType.UTENLANDSK_ARBEIDSFORHOLD];

const erAvType = (valgtAktivitetstype?: string, ...opptjeningAktivitetType: string[]): boolean => valgtAktivitetstype
  && opptjeningAktivitetType.includes(valgtAktivitetstype);

const formatDato = (dato: string): string => (dato ? dayjs(dato, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const getOppdragsgiverIntlId = (valgtAktivitetstype?: string): string => (erAvType(valgtAktivitetstype, OAType.FRILANS)
  ? 'ActivityPanel.Oppdragsgiver' : 'ActivityPanel.Arbeidsgiver');

const finnArbeidsgivertekst = (
  arbeidsgiverReferanse: string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];

  if (!arbeidsgiverReferanse || !arbeidsgiverOpplysninger) {
    return '-';
  }

  if (arbeidsgiverOpplysninger.erPrivatPerson) {
    const fodselsdato = formatDato(arbeidsgiverOpplysninger.fødselsdato);
    return `${arbeidsgiverOpplysninger.navn} (${fodselsdato})`;
  }

  return arbeidsgiverOpplysninger.identifikator
    ? `${arbeidsgiverOpplysninger.navn} (${arbeidsgiverOpplysninger.identifikator})`
    : arbeidsgiverOpplysninger.navn;
};

interface OwnProps {
  valgtAktivitetstype?: string;
  arbeidsgiverReferanse: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  stillingsandel: number;
  naringRegistreringsdato: string;
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
}) => (
  <>
    {erAvType(valgtAktivitetstype, ...[OAType.ARBEID, OAType.NARING, ...YTELSE_TYPER]) && (
      <Row>
        <Column xs="7">
          <VerticalSpacer eightPx />
          <Label size="small">
            <FormattedMessage id={getOppdragsgiverIntlId(valgtAktivitetstype)} />
          </Label>
          <BodyShort size="small">{finnArbeidsgivertekst(arbeidsgiverReferanse, arbeidsgiverOpplysningerPerId)}</BodyShort>
        </Column>
        {erAvType(valgtAktivitetstype, OAType.ARBEID) && (
          <Column xs="5">
            <VerticalSpacer eightPx />
            <Label size="small">
              <FormattedMessage id="ActivityPanel.Stillingsandel" />
            </Label>
            <BodyShort size="small">{stillingsandel}</BodyShort>
          </Column>
        )}
      </Row>
    )}
    <VerticalSpacer eightPx />
    {erAvType(valgtAktivitetstype, OAType.NARING) && (
      <Row>
        <Column xs="8">
          <Label size="small">
            <FormattedMessage id="ActivityPanel.Registreringsdato" />
          </Label>
          <BodyShort size="small">{dayjs(naringRegistreringsdato).format(DDMMYYYY_DATE_FORMAT)}</BodyShort>
        </Column>
      </Row>
    )}
  </>
);

export default ValgtAktivitetSubForm;
