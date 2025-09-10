import { type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Heading, HStack, Label, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { FaktaGruppe } from '@navikt/ft-ui-komponenter';
import { BTag, findDifferenceInMonthsAndDays, periodFormat } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type {
  ArbeidsgiverOpplysningerPerId,
  FerdiglignetNæring,
  KodeverkMedNavn,
  Opptjening,
  OpptjeningAktivitet,
} from '@navikt/fp-types';

import { finnOpptjeningFom, finnOpptjeningTom } from '../../utils/opptjeningDatoUtil';
import { ValgtAktivitetSubForm } from './ValgtAktivitetSubForm';

import styles from './valgtAktivitetForm.module.css';

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const skalIkkeKunneEditere = (hasAksjonspunkt: boolean, erGodkjent: boolean | null, erEndret: boolean): boolean => {
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
  return differanse.months >= 1 ? (
    <FormattedMessage id="ActivityPanel.MonthsAndDays" values={{ months: differanse.months, days: differanse.days }} />
  ) : (
    <FormattedMessage id="ActivityPanel.Days" values={{ days: differanse.days }} />
  );
};

const finnBegrunnelseLabel = (
  erGodkjent: boolean | null,
  erEndret: boolean,
  readOnly: boolean,
  hasAksjonspunkt: boolean,
): string =>
  readOnly || skalIkkeKunneEditere(hasAksjonspunkt, erGodkjent, erEndret)
    ? 'ActivityPanel.Begrunnelse'
    : 'ActivityPanel.BegrunnEndringene';

export type FormValues = {
  erGodkjent: boolean | undefined;
  begrunnelse: string;
};

interface Props {
  valgtOpptjeningAktivitet: OpptjeningAktivitet;
  valgteFormValues: FormValues;
  readOnly: boolean;
  oppdaterAktivitet: (values: FormValues) => void;
  avbrytAktivitet: () => void;
  velgNesteAktivitet: () => void;
  velgForrigeAktivitet: () => void;
  harAksjonspunkt: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  opptjeningAktivitetTyper: KodeverkMedNavn<'OpptjeningAktivitetType'>[];
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  ferdiglignetNæring: FerdiglignetNæring[];
  fastsattOpptjening?: Opptjening['fastsattOpptjening'];
  lukkPeriode: () => void;
}

/**
 * ValgtAktivitetForm
 *
 * Viser informasjon om valgt aktivitet
 */
export const ValgtAktivitetForm = ({
  readOnly,
  opptjeningAktivitetTyper,
  avbrytAktivitet,
  velgNesteAktivitet,
  velgForrigeAktivitet,
  harAksjonspunkt,
  alleMerknaderFraBeslutter,
  arbeidsgiverOpplysningerPerId,
  valgtOpptjeningAktivitet,
  ferdiglignetNæring,
  oppdaterAktivitet,
  valgteFormValues,
  fastsattOpptjening,
  lukkPeriode,
}: Props) => {
  const intl = useIntl();

  const formMethods = useForm<FormValues>({
    defaultValues: valgteFormValues,
  });

  const { arbeidsgiverReferanse, erGodkjent, erEndret, aktivitetType, stillingsandel, naringRegistreringsdato } =
    valgtOpptjeningAktivitet;

  const opptjeningFom = finnOpptjeningFom(
    valgtOpptjeningAktivitet.opptjeningFom,
    fastsattOpptjening?.opptjeningFom,
    fastsattOpptjening?.opptjeningTom,
  );
  const opptjeningTom = finnOpptjeningTom(
    valgtOpptjeningAktivitet.opptjeningTom,
    fastsattOpptjening?.opptjeningFom,
    fastsattOpptjening?.opptjeningTom,
  );

  return (
    <RhfForm formMethods={formMethods} onSubmit={(values: FormValues) => oppdaterAktivitet(values)}>
      <FaktaGruppe
        className={styles.panel}
        merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING]}
      >
        <VStack gap="space-24">
          <VStack gap="space-8">
            <HStack justify="space-between">
              <Heading size="small" level="3">
                <FormattedMessage id="ActivityPanel.Details" />
              </Heading>
              <HStack gap="space-8">
                <Button
                  className={styles.margin}
                  size="xsmall"
                  icon={<ArrowLeftIcon aria-hidden />}
                  onClick={velgForrigeAktivitet}
                  variant="secondary-neutral"
                  type="button"
                  title={intl.formatMessage({ id: 'Timeline.prevPeriod' })}
                >
                  <FormattedMessage id="Timeline.prevPeriodShort" />
                </Button>
                <Button
                  className={styles.margin}
                  size="xsmall"
                  icon={<ArrowRightIcon aria-hidden />}
                  onClick={velgNesteAktivitet}
                  variant="secondary-neutral"
                  type="button"
                  title={intl.formatMessage({ id: 'Timeline.nextPeriod' })}
                  iconPosition="right"
                >
                  <FormattedMessage id="Timeline.nextPeriodShort" />
                </Button>
                <Button
                  size="xsmall"
                  icon={<XMarkIcon aria-hidden />}
                  onClick={lukkPeriode}
                  variant="tertiary-neutral"
                  type="button"
                  title={intl.formatMessage({ id: 'Timeline.lukkPeriode' })}
                />
              </HStack>
            </HStack>
            <HStack gap="space-4">
              <div className={styles.colMargin}>
                <Label size="small">
                  <FormattedMessage id="ActivityPanel.Period" />
                </Label>
                {opptjeningFom && opptjeningTom && (
                  <HStack gap="space-8">
                    <BodyShort size="small">{periodFormat(opptjeningFom, opptjeningTom)}</BodyShort>
                    <BodyShort size="small">{finnMånederOgDager(opptjeningFom, opptjeningTom)}</BodyShort>
                  </HStack>
                )}
              </div>
              <div>
                <Label size="small">
                  <FormattedMessage id="ActivityPanel.Activity" />
                </Label>
                <BodyShort size="small">
                  {opptjeningAktivitetTyper.find(oat => oat.kode === aktivitetType)?.navn}
                </BodyShort>
              </div>
            </HStack>
          </VStack>
          <ValgtAktivitetSubForm
            valgtAktivitetstype={aktivitetType}
            arbeidsgiverReferanse={arbeidsgiverReferanse}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            stillingsandel={stillingsandel}
            naringRegistreringsdato={naringRegistreringsdato}
            ferdiglignetNæring={ferdiglignetNæring}
          />
          {!skalIkkeKunneEditere(harAksjonspunkt, erGodkjent, erEndret) && (
            <RhfRadioGroup
              name="erGodkjent"
              control={formMethods.control}
              hideLegend
              validate={[required]}
              isReadOnly={readOnly}
              isEdited={erEndret}
            >
              <HStack gap="space-16">
                <Radio value={true} size="small">
                  <FormattedMessage id="ActivityPanel.Godkjent" />
                </Radio>
                <Radio value={false} size="small">
                  <FormattedMessage id="ActivityPanel.IkkeGodkjent" values={{ b: BTag }} />
                </Radio>
              </HStack>
            </RhfRadioGroup>
          )}
          <RhfTextarea
            name="begrunnelse"
            control={formMethods.control}
            label={<FormattedMessage id={finnBegrunnelseLabel(erGodkjent, erEndret, readOnly, harAksjonspunkt)} />}
            validate={[required, minLength3, maxLength1500, hasValidText]}
            maxLength={1500}
            readOnly={readOnly || skalIkkeKunneEditere(harAksjonspunkt, erGodkjent, erEndret)}
          />
          {!skalIkkeKunneEditere(harAksjonspunkt, erGodkjent, erEndret) && (
            <HStack gap="space-16">
              <Button size="small" variant="primary" disabled={!formMethods.formState.isDirty}>
                <FormattedMessage id="ActivityPanel.Oppdater" />
              </Button>
              <Button size="small" variant="secondary" onClick={avbrytAktivitet} type="button">
                <FormattedMessage id="ActivityPanel.Avbryt" />
              </Button>
            </HStack>
          )}
        </VStack>
      </FaktaGruppe>
    </RhfForm>
  );
};
