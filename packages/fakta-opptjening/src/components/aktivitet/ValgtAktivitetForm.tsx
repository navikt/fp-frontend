import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Element, Normaltekst, Undertekst } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import dayjs from 'dayjs';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/fp-react-components';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  VerticalSpacer, FaktaGruppe,
} from '@fpsak-frontend/shared-components';
import {
  findDifferenceInMonthsAndDays,
  hasValidText,
  maxLength,
  minLength,
  required,
  DDMMYYYY_DATE_FORMAT,
} from '@fpsak-frontend/utils';
import {
  RadioGroupField, RadioOption, TextAreaField, Form,
} from '@fpsak-frontend/form-hooks';
import { TimeLineButton } from '@fpsak-frontend/tidslinje';
import {
  ArbeidsgiverOpplysningerPerId, KodeverkMedNavn, AlleKodeverk, OpptjeningAktivitet,
} from '@fpsak-frontend/types';

import ValgtAktivitetSubForm from './ValgtAktivitetSubForm';
import { finnOpptjeningFom, finnOpptjeningTom } from '../../utils/opptjeningDatoUtil';

import styles from './valgtAktivitetForm.less';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const skalIkkeKunneEditere = (hasAksjonspunkt: boolean, erGodkjent: boolean, erEndret: boolean): boolean => {
  if (!hasAksjonspunkt) {
    return true;
  }
  return !!erGodkjent && !erEndret;
};

const finnMånederOgDager = (opptjeningFom: string, opptjeningTom: string): ReactElement => {
  const differanse = findDifferenceInMonthsAndDays(opptjeningFom, opptjeningTom);
  if (!differanse) {
    return <span />;
  }
  return differanse.months >= 1
    ? <FormattedMessage id="ActivityPanel.MonthsAndDays" values={{ months: differanse.months, days: differanse.days }} />
    : <FormattedMessage id="ActivityPanel.Days" values={{ days: differanse.days }} />;
};

const finnBegrunnelseLabel = (erGodkjent: boolean, erEndret: boolean, readOnly: boolean, hasAksjonspunkt: boolean): string => (
  readOnly || skalIkkeKunneEditere(hasAksjonspunkt, erGodkjent, erEndret)
    ? 'ActivityPanel.Begrunnelse'
    : 'ActivityPanel.BegrunnEndringene'
);

export type FormValues = {
  erGodkjent: boolean;
  begrunnelse: string;
}

interface OwnProps {
  alleKodeverk: AlleKodeverk;
  valgtOpptjeningAktivitet: OpptjeningAktivitet;
  valgteFormValues: FormValues;
  readOnly: boolean;
  oppdaterAktivitet: (values: FormValues) => void
  avbrytAktivitet: () => void;
  velgNesteAktivitet: () => void;
  velgForrigeAktivitet: () => void;
  harAksjonspunkt: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  opptjeningAktivitetTyper: KodeverkMedNavn[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  opptjeningFomDato: string;
  opptjeningTomDato: string;
}

/**
 * ValgtAktivitetForm
 *
 * Viser informasjon om valgt aktivitet
 */
export const ValgtAktivitetForm: FunctionComponent<OwnProps> = ({
  readOnly,
  opptjeningAktivitetTyper,
  avbrytAktivitet,
  velgNesteAktivitet,
  velgForrigeAktivitet,
  harAksjonspunkt,
  alleMerknaderFraBeslutter,
  arbeidsgiverOpplysningerPerId,
  valgtOpptjeningAktivitet,
  oppdaterAktivitet,
  valgteFormValues,
  opptjeningFomDato,
  opptjeningTomDato,
}) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: valgteFormValues,
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
            <TimeLineButton text={intl.formatMessage({ id: 'Timeline.prevPeriod' })} type="prev" callback={velgForrigeAktivitet} />
            <TimeLineButton text={intl.formatMessage({ id: 'Timeline.nextPeriod' })} type="next" callback={velgNesteAktivitet} />
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
                  {finnMånederOgDager(opptjeningFom, opptjeningTom)}
                </Normaltekst>
              </Column>
            </Row>
          </Column>
          <Column xs="5">
            <Undertekst>
              <FormattedMessage id="ActivityPanel.Activity" />
            </Undertekst>
            <Normaltekst>
              {opptjeningAktivitetTyper.find((oat) => oat.kode === aktivitetType)?.navn}
            </Normaltekst>
          </Column>
        </Row>
        <ValgtAktivitetSubForm
          valgtAktivitetstype={aktivitetType}
          arbeidsgiverReferanse={arbeidsgiverReferanse}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          stillingsandel={stillingsandel}
          naringRegistreringsdato={naringRegistreringsdato}
        />
        {!skalIkkeKunneEditere(harAksjonspunkt, erGodkjent, erEndret) && (
          <>
            <VerticalSpacer twentyPx />
            <RadioGroupField
              name="erGodkjent"
              validate={[required]}
              readOnly={readOnly}
              isEdited={erEndret}
              parse={(value: string) => value === 'true'}
            >
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
          label={<FormattedMessage id={finnBegrunnelseLabel(erGodkjent, erEndret, readOnly, harAksjonspunkt)} />}
          validate={[required, minLength3, maxLength1500, hasValidText]}
          maxLength={1500}
          readOnly={readOnly || skalIkkeKunneEditere(harAksjonspunkt, erGodkjent, erEndret)}
        />
        {!skalIkkeKunneEditere(harAksjonspunkt, erGodkjent, erEndret) && (
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
                  <Knapp mini htmlType="button" onClick={avbrytAktivitet}>
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

export default ValgtAktivitetForm;
