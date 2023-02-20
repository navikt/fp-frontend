import React, { FunctionComponent } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage } from 'react-intl';
import { BodyShort, Label } from '@navikt/ds-react';

import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { opptjeningAktivitetType as OAType } from '@navikt/fp-kodeverk';
import { ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import styles from './valgtAktivitetSubForm.less';

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
  <FlexContainer>
    {erAvType(valgtAktivitetstype, ...[OAType.ARBEID, OAType.NARING, ...YTELSE_TYPER]) && (
      <FlexRow>
        <FlexColumn className={styles.colMargin}>
          <VerticalSpacer eightPx />
          <Label size="small">
            <FormattedMessage id={getOppdragsgiverIntlId(valgtAktivitetstype)} />
          </Label>
          <BodyShort size="small">{finnArbeidsgivertekst(arbeidsgiverReferanse, arbeidsgiverOpplysningerPerId)}</BodyShort>
        </FlexColumn>
        {erAvType(valgtAktivitetstype, OAType.ARBEID) && (
          <FlexColumn>
            <VerticalSpacer eightPx />
            <Label size="small">
              <FormattedMessage id="ActivityPanel.Stillingsandel" />
            </Label>
            <BodyShort size="small">{stillingsandel}</BodyShort>
          </FlexColumn>
        )}
      </FlexRow>
    )}
    <VerticalSpacer eightPx />
    {erAvType(valgtAktivitetstype, OAType.NARING) && (
      <FlexRow>
        <FlexColumn>
          <Label size="small">
            <FormattedMessage id="ActivityPanel.Registreringsdato" />
          </Label>
          <BodyShort size="small">{dayjs(naringRegistreringsdato).format(DDMMYYYY_DATE_FORMAT)}</BodyShort>
        </FlexColumn>
      </FlexRow>
    )}
  </FlexContainer>
);

export default ValgtAktivitetSubForm;
