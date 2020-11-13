import React, { FunctionComponent } from 'react';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Normaltekst, Undertekst } from 'nav-frontend-typografi';

import {
  DDMMYYYY_DATE_FORMAT, hasValidDecimal, ISO_DATE_FORMAT, maxValue, minValue, required,
} from '@fpsak-frontend/utils';
import { VerticalSpacer } from '@fpsak-frontend/shared-components';
import OAType from '@fpsak-frontend/kodeverk/src/opptjeningAktivitetType';
import { DatepickerField, DecimalField, InputField } from '@fpsak-frontend/form';
import { ArbeidsgiverOpplysningerPerId, Kodeverk } from '@fpsak-frontend/types';

import CustomOpptjeningAktivitet, { NyOpptjeningAktivitet } from '../../CustomOpptjeningAktivitet';

import styles from './activityDataSubPanel.less';

const ytelseTypes = [OAType.SYKEPENGER, OAType.FORELDREPENGER, OAType.PLEIEPENGER, OAType.SVANGERSKAPSPENGER, OAType.UTENLANDSK_ARBEIDSFORHOLD];

const isOfType = (selectedActivityType: Kodeverk, ...opptjeningAktivitetType: string[]): boolean => selectedActivityType
  && opptjeningAktivitetType.includes(selectedActivityType.kode);

const formatDate = (date: string): string => (date ? moment(date, ISO_DATE_FORMAT).format(DDMMYYYY_DATE_FORMAT) : '-');

const minValue0 = minValue(0);
const maxValue200 = maxValue(200);

const getOppdragsgiverMessageId = (selectedActivityType: Kodeverk): string => (isOfType(selectedActivityType, OAType.FRILANS)
  ? 'ActivityPanel.Oppdragsgiver' : 'ActivityPanel.Arbeidsgiver');

const getArbeidsgiverText = (
  initialValues: CustomOpptjeningAktivitet,
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId,
): string => {
  const { arbeidsgiverReferanse } = initialValues;
  const arbeidsgiverOpplysninger = arbeidsgiverOpplysningerPerId[arbeidsgiverReferanse];

  if (!arbeidsgiverReferanse || !arbeidsgiverOpplysninger) {
    return '-';
  }

  if (arbeidsgiverOpplysninger.erPrivatPerson) {
    const fodselsdato = formatDate(arbeidsgiverOpplysninger.fødselsdato);
    return `${arbeidsgiverOpplysninger.navn} (${fodselsdato})`;
  }

  return initialValues.oppdragsgiverOrg ? `${arbeidsgiverOpplysninger.navn} (${initialValues.oppdragsgiverOrg})` : arbeidsgiverOpplysninger.navn;
};

const isManuallyAddedAndNotUtenlandskArbeidsforhold = (
  isManuallyAdded: boolean, selectedActivityType: Kodeverk,
): boolean => isManuallyAdded && !isOfType(selectedActivityType, OAType.UTENLANDSK_ARBEIDSFORHOLD);
const isManuallyAddedAndUtenlandskArbeidsforhold = (
  isManuallyAdded: boolean, selectedActivityType: Kodeverk,
): boolean => isManuallyAdded && isOfType(selectedActivityType, OAType.UTENLANDSK_ARBEIDSFORHOLD);

interface OwnProps {
  initialValues: CustomOpptjeningAktivitet | NyOpptjeningAktivitet;
  readOnly: boolean;
  isManuallyAdded: boolean;
  selectedActivityType?: Kodeverk;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * ActivityDataSubPanel
 *
 * Presentasjonskomponent. Viser informasjon om valgt aktivitet
 */
const ActivityDataSubPanel: FunctionComponent<OwnProps> = ({
  initialValues,
  readOnly,
  isManuallyAdded,
  selectedActivityType = { kode: '', kodeverk: '' },
  arbeidsgiverOpplysningerPerId,
}) => (
  <>
    {isOfType(selectedActivityType, ...[OAType.ARBEID, OAType.NARING, ...ytelseTypes]) && (
      <Row>
        <Column xs="7">
          {!isManuallyAdded && (
            <>
              <VerticalSpacer eightPx />
              <Undertekst>
                <FormattedMessage id={getOppdragsgiverMessageId(selectedActivityType)} />
              </Undertekst>
              <div className={styles.arbeidsgiver}>
                <Normaltekst>{getArbeidsgiverText(initialValues as CustomOpptjeningAktivitet, arbeidsgiverOpplysningerPerId)}</Normaltekst>
              </div>
            </>
          )}
          {isManuallyAddedAndNotUtenlandskArbeidsforhold(isManuallyAdded, selectedActivityType) && (
            <InputField
              name="oppdragsgiverOrg"
              label={{ id: 'ActivityPanel.Organisasjonsnr' }}
              validate={[required]}
              readOnly={readOnly}
              bredde="S"
            />
          )}
          {isManuallyAddedAndUtenlandskArbeidsforhold(isManuallyAdded, selectedActivityType) && (
            <InputField
              name="arbeidsgiver"
              label={{ id: 'ActivityPanel.Arbeidsgiver' }}
              validate={[required]}
              readOnly={readOnly}
              bredde="XL"
            />
          )}
        </Column>
        {isOfType(selectedActivityType, OAType.ARBEID) && (
          <Column xs="5">
            <DecimalField
              name="stillingsandel"
              label={{ id: 'ActivityPanel.Stillingsandel' }}
              validate={[required, minValue0, maxValue200, hasValidDecimal]}
              readOnly={readOnly || !isManuallyAdded}
              bredde="S"
              format={(value: any) => (readOnly || !isManuallyAdded ? `${value} %` : value)}
              // @ts-ignore Fiks
              normalizeOnBlur={(value) => (Number.isNaN(value) ? value : parseFloat(value).toFixed(2))}
            />
          </Column>
        )}
      </Row>
    )}
    <VerticalSpacer eightPx />
    {isOfType(selectedActivityType, OAType.NARING) && (
      <Row>
        <Column xs="8">
          <DatepickerField
            name="naringRegistreringsdato"
            label={{ id: 'ActivityPanel.Registreringsdato' }}
            readOnly
          />
        </Column>
      </Row>
    )}
  </>
);

export default ActivityDataSubPanel;
