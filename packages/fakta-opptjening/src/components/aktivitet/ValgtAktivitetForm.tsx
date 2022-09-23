import React, { FunctionComponent, ReactElement } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import {
  Button, Label, Heading, BodyShort,
} from '@navikt/ds-react';
import dayjs from 'dayjs';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  VerticalSpacer, FaktaGruppe, FlexColumn, FlexContainer, FlexRow,
} from '@navikt/ft-ui-komponenter';
import { findDifferenceInMonthsAndDays, DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import {
  hasValidText,
  maxLength,
  minLength,
  required,
} from '@navikt/ft-form-validators';
import { RadioGroupPanel, TextAreaField, Form } from '@navikt/ft-form-hooks';
import { TimeLineButton } from '@navikt/ft-tidslinje';
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
        <FlexContainer>
          <FlexRow spaceBetween>
            <FlexColumn>
              <Heading size="small"><FormattedMessage id="ActivityPanel.Details" /></Heading>
            </FlexColumn>
            <FlexColumn>
              <TimeLineButton text={intl.formatMessage({ id: 'Timeline.prevPeriod' })} type="prev" callback={velgForrigeAktivitet} />
              <TimeLineButton text={intl.formatMessage({ id: 'Timeline.nextPeriod' })} type="next" callback={velgNesteAktivitet} />
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn className={styles.colMargin}>
              <Label size="small">
                <FormattedMessage id="ActivityPanel.Period" />
              </Label>
              <FlexContainer>
                <FlexRow>
                  <FlexColumn>
                    <BodyShort size="small">
                      {`${dayjs(opptjeningFom).format(DDMMYYYY_DATE_FORMAT)} - ${dayjs(opptjeningTom).format(DDMMYYYY_DATE_FORMAT)}`}
                    </BodyShort>
                  </FlexColumn>
                  <FlexColumn>
                    <BodyShort size="small">
                      {finnMånederOgDager(opptjeningFom, opptjeningTom)}
                    </BodyShort>
                  </FlexColumn>
                </FlexRow>
              </FlexContainer>
            </FlexColumn>
            <FlexColumn>
              <Label size="small">
                <FormattedMessage id="ActivityPanel.Activity" />
              </Label>
              <BodyShort size="small">
                {opptjeningAktivitetTyper.find((oat) => oat.kode === aktivitetType)?.navn}
              </BodyShort>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
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
            <RadioGroupPanel
              name="erGodkjent"
              hideLegend
              validate={[required]}
              isReadOnly={readOnly}
              isEdited={erEndret}
              isHorizontal
              isTrueOrFalseSelection
              radios={[{
                label: intl.formatMessage({ id: 'ActivityPanel.Godkjent' }),
                value: 'true',
              }, {
                label: <FormattedMessage
                  id="ActivityPanel.IkkeGodkjent"
                  values={{
                    b: (chunks: any) => <b>{chunks}</b>,
                  }}
                />,
                value: 'false',
              }]}
            />
          </>
        )}
        <VerticalSpacer sixteenPx />
        <TextAreaField
          name="begrunnelse"
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
                  <Button size="small" variant="primary" disabled={!formMethods.formState.isDirty}>
                    <FormattedMessage id="ActivityPanel.Oppdater" />
                  </Button>
                </FlexColumn>
                <FlexColumn>
                  <Button size="small" variant="secondary" onClick={avbrytAktivitet} type="button">
                    <FormattedMessage id="ActivityPanel.Avbryt" />
                  </Button>
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
