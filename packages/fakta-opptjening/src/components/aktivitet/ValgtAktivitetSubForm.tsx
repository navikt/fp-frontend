import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import OAType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';
import { ArbeidsgiverOpplysningerPerId, Kodeverk } from '@fpsak-frontend/types';

const YTELSE_TYPER = [OAType.SYKEPENGER, OAType.FORELDREPENGER, OAType.PLEIEPENGER, OAType.SVANGERSKAPSPENGER, OAType.UTENLANDSK_ARBEIDSFORHOLD];

const erAvType = (valgtAktivitetstype?: Kodeverk, ...opptjeningAktivitetType: string[]): boolean => valgtAktivitetstype
  && opptjeningAktivitetType.includes(valgtAktivitetstype.kode);

const formatDato = (dato: string): string => (dato ? dayjs(dato, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const getOppdragsgiverIntlId = (valgtAktivitetstype?: Kodeverk): string => (erAvType(valgtAktivitetstype, OAType.FRILANS)
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
  valgtAktivitetstype?: Kodeverk;
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
          <Undertekst>
            <FormattedMessage id={getOppdragsgiverIntlId(valgtAktivitetstype)} />
          </Undertekst>
          <Normaltekst>{finnArbeidsgivertekst(arbeidsgiverReferanse, arbeidsgiverOpplysningerPerId)}</Normaltekst>
        </Column>
        {erAvType(valgtAktivitetstype, OAType.ARBEID) && (
          <Column xs="5">
            <VerticalSpacer eightPx />
            <Undertekst>
              <FormattedMessage id="ActivityPanel.Stillingsandel" />
            </Undertekst>
            <Normaltekst>{stillingsandel}</Normaltekst>
          </Column>
        )}
      </Row>
    )}
    <VerticalSpacer eightPx />
    {erAvType(valgtAktivitetstype, OAType.NARING) && (
      <Row>
        <Column xs="8">
          <Undertekst>
            <FormattedMessage id="ActivityPanel.Registreringsdato" />
          </Undertekst>
          <Normaltekst>{dayjs(naringRegistreringsdato).format(DDMMYYYY_DATE_FORMAT)}</Normaltekst>
        </Column>
      </Row>
    )}
  </>
);

export default ValgtAktivitetSubForm;
