import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import dayjs from 'dayjs';
import moment from 'moment';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer, FaktaGruppe,
} from '@fpsak-frontend/shared-components';
import {
  findDifferenceInMonthsAndDays,
  hasValidText,
  maxLength,
  minLength,
  required,
  DDMMYYYY_DATE_FORMAT,
  addDaysToDate,
} from '@fpsak-frontend/utils';
import {
  RadioGroupField, RadioOption, TextAreaField, Form,
} from '@fpsak-frontend/form-hooks';
import { TimeLineButton } from '@fpsak-frontend/tidslinje';
import {
  ArbeidsgiverOpplysningerPerId, KodeverkMedNavn, AlleKodeverk, OpptjeningAktivitet,
} from '@fpsak-frontend/types';

import ActivityDataSubPanel from './ActivityDataSubPanelNew';

import styles from './activityPanel.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const addDay = (date: string): string => addDaysToDate(date, 1);
const getOpptjeningsperiodeIfEqual = (
  activityDate: string, opptjeningsperiodeDate: string,
): string => (moment(addDay(activityDate)).isSame(opptjeningsperiodeDate) ? opptjeningsperiodeDate : activityDate);

const finnOpptjeningFom = (
  opptjeningFom: string,
  opptjeningsperiodeFom: string,
  opptjeningsperiodeTom: string,
) => (moment(opptjeningFom).isBefore(opptjeningsperiodeFom)
  ? opptjeningsperiodeFom
  : getOpptjeningsperiodeIfEqual(opptjeningFom, opptjeningsperiodeTom));

const finnOpptjeningTom = (
  opptjeningTom: string,
  opptjeningsperiodeFom: string,
  opptjeningsperiodeTom: string,
) => (moment(opptjeningTom).isAfter(opptjeningsperiodeTom)
  ? opptjeningsperiodeTom
  : getOpptjeningsperiodeIfEqual(opptjeningTom, opptjeningsperiodeFom));

const shouldDisablePeriodpicker = (hasAksjonspunkt: boolean, erGodkjent: boolean, erEndret: boolean): boolean => {
  if (!hasAksjonspunkt) {
    return true;
  }
  return !!erGodkjent && !erEndret;
};

const findInYearsMonthsAndDays = (opptjeningFom: string, opptjeningTom: string): ReactElement => {
  const difference = findDifferenceInMonthsAndDays(opptjeningFom, opptjeningTom);
  if (!difference) {
    return <span />;
  }
  return difference.months >= 1
    ? <FormattedMessage id="ActivityPanel.MonthsAndDays" values={{ months: difference.months, days: difference.days }} />
    : <FormattedMessage id="ActivityPanel.Days" values={{ days: difference.days }} />;
};

const finnBegrunnelseLabel = (erGodkjent: boolean, erEndret: boolean, readOnly: boolean, hasAksjonspunkt: boolean): string => (
  readOnly || shouldDisablePeriodpicker(hasAksjonspunkt, erGodkjent, erEndret)
    ? 'ActivityPanel.Begrunnelse'
    : 'ActivityPanel.BegrunnEndringene'
);

export const activityPanelName = 'ActivityPanel';

export type FormValues = {
  erGodkjent: boolean;
  begrunnelse: string;
}

interface PureOwnProps {
  oppdaterAktivitet: (values: FormValues) => void
  alleKodeverk: AlleKodeverk;
  valgtOpptjeningAktivitet: OpptjeningAktivitet;
  valgtFormData: FormValues;
  readOnly: boolean;
  cancelSelectedOpptjeningActivity: (...args: any[]) => any;
  selectNextPeriod?: (...args: any[]) => any;
  selectPrevPeriod?: (...args: any[]) => any;
  hasAksjonspunkt: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  opptjeningAktivitetTypes: KodeverkMedNavn[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  opptjeningFomDato: string;
  opptjeningTomDato: string;
}

/**
 * ActivityPanel
 *
 * Presentasjonskomponent. Viser informasjon om valgt aktivitet
 */
export const ActivityPanel: FunctionComponent<PureOwnProps> = ({
  readOnly,
  opptjeningAktivitetTypes,
  cancelSelectedOpptjeningActivity,
  selectNextPeriod,
  selectPrevPeriod,
  hasAksjonspunkt,
  alleMerknaderFraBeslutter,
  arbeidsgiverOpplysningerPerId,
  valgtOpptjeningAktivitet,
  oppdaterAktivitet,
  valgtFormData,
  opptjeningFomDato,
  opptjeningTomDato,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: valgtFormData,
  });

  const {
    arbeidsgiverReferanse, erGodkjent, erEndret, aktivitetType, stillingsandel, naringRegistreringsdato,
  } = valgtOpptjeningAktivitet;

  const opptjeningFom = finnOpptjeningFom(valgtOpptjeningAktivitet.opptjeningFom, opptjeningFomDato, opptjeningTomDato);
  const opptjeningTom = finnOpptjeningTom(valgtOpptjeningAktivitet.opptjeningTom, opptjeningFomDato, opptjeningTomDato);

  return (
    <Form formMethods={formMethods} onSubmit={(values: FormValues) => oppdaterAktivitet(values)}>
      <FaktaGruppe
        className={styles.panel}
        merknaderFraBeslutter={alleMerknaderFraBeslutter[aksjonspunktCodes.VURDER_PERIODER_MED_OPPTJENING]}
      >
        <Row>
          <Column xs="10">
            <Element><FormattedMessage id="ActivityPanel.Details" /></Element>
          </Column>
          <Column xs="2">
            <TimeLineButton text={intl.formatMessage({ id: 'Timeline.prevPeriod' })} type="prev" callback={selectPrevPeriod} />
            <TimeLineButton text={intl.formatMessage({ id: 'Timeline.nextPeriod' })} type="next" callback={selectNextPeriod} />
          </Column>
        </Row>
        <Row>
          <Column xs="7">
            <Undertekst>
              <FormattedMessage id="ActivityPanel.Period" />
            </Undertekst>
            <Row>
              <Column xs="5">
                <Normaltekst>
                  {`${dayjs(opptjeningFom).format(DDMMYYYY_DATE_FORMAT)} - ${dayjs(opptjeningTom).format(DDMMYYYY_DATE_FORMAT)}`}
                </Normaltekst>
              </Column>
              <Column xs="6">
                <Normaltekst>
                  {findInYearsMonthsAndDays(opptjeningFom, opptjeningTom)}
                </Normaltekst>
              </Column>
            </Row>
          </Column>
          <Column xs="5">
            <Undertekst>
              <FormattedMessage id="ActivityPanel.Activity" />
            </Undertekst>
            <Normaltekst>
              {opptjeningAktivitetTypes.find((oat) => oat.kode === aktivitetType.kode)?.navn}
            </Normaltekst>
          </Column>
        </Row>
        <ActivityDataSubPanel
          valgtAktivitetstype={aktivitetType}
          arbeidsgiverReferanse={arbeidsgiverReferanse}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          stillingsandel={stillingsandel}
          naringRegistreringsdato={naringRegistreringsdato}
        />
        {!shouldDisablePeriodpicker(hasAksjonspunkt, erGodkjent, erEndret) && (
          <>
            <VerticalSpacer twentyPx />
            <RadioGroupField name="erGodkjent" validate={[required]} readOnly={readOnly} isEdited={erEndret}>
              <RadioOption value="true" label={intl.formatMessage({ id: 'ActivityPanel.Godkjent' })} />
              <RadioOption
                value="false"
                label={(
                  <FormattedMessage
                    id="ActivityPanel.IkkeGodkjent"
                    values={{
                      b: (chunks: any) => <b>{chunks}</b>,
                    }}
                  />
                )}
              />
            </RadioGroupField>
          </>
        )}
        <VerticalSpacer fourPx />
        <TextAreaField
          name="begrunnelse"
          textareaClass={styles.explanationTextarea}
          label={<FormattedMessage id={finnBegrunnelseLabel(erGodkjent, erEndret, readOnly, hasAksjonspunkt)} />}
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={readOnly || shouldDisablePeriodpicker(hasAksjonspunkt, erGodkjent, erEndret)}
        />
        {!shouldDisablePeriodpicker(hasAksjonspunkt, erGodkjent, erEndret) && (
          <>
            <VerticalSpacer sixteenPx />
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Hovedknapp mini htmlType="submit" disabled={!formMethods.formState.isDirty}>
                    <FormattedMessage id="ActivityPanel.Oppdater" />
                  </Hovedknapp>
                </FlexColumn>
                <FlexColumn>
                  <Knapp mini htmlType="button" onClick={cancelSelectedOpptjeningActivity}>
                    <FormattedMessage id="ActivityPanel.Avbryt" />
                  </Knapp>
                </FlexColumn>
              </FlexRow>
            </FlexContainer>
          </>
        )}
      </FaktaGruppe>
    </Form>
  );
};

export default ActivityPanel;
