import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import OAType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';
import { ArbeidsgiverOpplysningerPerId, Kodeverk } from '@fpsak-frontend/types';

const ytelseTypes = [OAType.SYKEPENGER, OAType.FORELDREPENGER, OAType.PLEIEPENGER, OAType.SVANGERSKAPSPENGER, OAType.UTENLANDSK_ARBEIDSFORHOLD];

const isOfType = (selectedActivityType?: Kodeverk, ...opptjeningAktivitetType: string[]): boolean => selectedActivityType
  && opptjeningAktivitetType.includes(selectedActivityType.kode);

const formatDate = (date: string): string => (date ? dayjs(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const getOppdragsgiverMessageId = (selectedActivityType?: Kodeverk): string => (isOfType(selectedActivityType, OAType.FRILANS)
  ? 'ActivityPanel.Oppdragsgiver' : 'ActivityPanel.Arbeidsgiver');

const getArbeidsgiverText = (
  arbeidsgiverReferanse: string,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];

  if (!arbeidsgiverReferanse || !arbeidsgiverOpplysninger) {
    return '-';
  }

  if (arbeidsgiverOpplysninger.erPrivatPerson) {
    const fodselsdato = formatDate(arbeidsgiverOpplysninger.fødselsdato);
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
 * ActivityDataSubPanel
 *
 * Viser informasjon om valgt aktivitet
 */
const ActivityDataSubPanel: FunctionComponent<OwnProps> = ({
  valgtAktivitetstype,
  arbeidsgiverReferanse,
  arbeidsgiverOpplysningerPerId,
  stillingsandel,
  naringRegistreringsdato,
}) => (
  <>
    {isOfType(valgtAktivitetstype, ...[OAType.ARBEID, OAType.NARING, ...ytelseTypes]) && (
      <Row>
        <Column xs="7">
          <VerticalSpacer eightPx />
          <Undertekst>
            <FormattedMessage id={getOppdragsgiverMessageId(valgtAktivitetstype)} />
          </Undertekst>
          <Normaltekst>{getArbeidsgiverText(arbeidsgiverReferanse, arbeidsgiverOpplysningerPerId)}</Normaltekst>
        </Column>
        {isOfType(valgtAktivitetstype, OAType.ARBEID) && (
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
    {isOfType(valgtAktivitetstype, OAType.NARING) && (
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

export default ActivityDataSubPanel;
