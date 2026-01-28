import type { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@navikt/aksel-icons';
import { Button, Heading, HStack, Radio, VStack } from '@navikt/ds-react';
import { RhfForm, RhfRadioGroup, RhfTextarea } from '@navikt/ft-form-hooks';
import { hasValidText, maxLength, minLength, required } from '@navikt/ft-form-validators';
import { FaktaGruppe, LabeledValue, PeriodLabel } from '@navikt/ft-ui-komponenter';
import { BTag, findDifferenceInMonthsAndDays } from '@navikt/ft-utils';

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

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const skalIkkeKunneEditere = (
  hasAksjonspunkt: boolean,
  erGodkjent: boolean | undefined,
  erEndret: boolean,
): boolean => {
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
  erGodkjent: boolean | undefined,
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
      <FaktaGruppe merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING]}>
        <VStack gap="space-24">
          <VStack gap="space-8">
            <HStack justify="space-between">
              <Heading size="small" level="3">
                <FormattedMessage id="ActivityPanel.Details" />
              </Heading>
              <HStack gap="space-16">
                <Button
                  data-color="neutral"
                  size="xsmall"
                  icon={<ArrowLeftIcon aria-hidden />}
                  onClick={velgForrigeAktivitet}
                  variant="secondary"
                  type="button"
                  title={intl.formatMessage({ id: 'Timeline.prevPeriod' })}>
                  <FormattedMessage id="Timeline.prevPeriodShort" />
                </Button>
                <Button
                  data-color="neutral"
                  size="xsmall"
                  icon={<ArrowRightIcon aria-hidden />}
                  onClick={velgNesteAktivitet}
                  variant="secondary"
                  type="button"
                  title={intl.formatMessage({ id: 'Timeline.nextPeriod' })}
                  iconPosition="right">
                  <FormattedMessage id="Timeline.nextPeriodShort" />
                </Button>
                <Button
                  data-color="neutral"
                  size="xsmall"
                  icon={<XMarkIcon aria-hidden />}
                  onClick={lukkPeriode}
                  variant="tertiary"
                  type="button"
                  title={intl.formatMessage({ id: 'Timeline.lukkPeriode' })} />
              </HStack>
            </HStack>
            <HStack gap="space-32">
              <LabeledValue
                size="small"
                label={<FormattedMessage id="ActivityPanel.Period" />}
                value={
                  opptjeningFom && opptjeningTom ? (
                    <>
                      <PeriodLabel dateStringFom={opptjeningFom} dateStringTom={opptjeningTom} />{' '}
                      {finnMånederOgDager(opptjeningFom, opptjeningTom)}
                    </>
                  ) : (
                    '-'
                  )
                }
              />
              <LabeledValue
                size="small"
                label={<FormattedMessage id="ActivityPanel.Activity" />}
                value={opptjeningAktivitetTyper.find(oat => oat.kode === aktivitetType)?.navn ?? ''}
              />
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
              legend={<FormattedMessage id="ActivityPanel.ErAktivitetenGodkjent" />}
              validate={[required]}
              readOnly={readOnly}
              isEdited={erEndret}
            >
              <Radio value={true} size="small">
                <FormattedMessage id="ActivityPanel.Godkjent" />
              </Radio>
              <Radio value={false} size="small">
                <FormattedMessage id="ActivityPanel.IkkeGodkjent" values={{ b: BTag }} />
              </Radio>
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
