import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Box, Detail, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { Datepicker, Form, RadioGroupPanel } from '@navikt/ft-form-hooks';
import { dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML, ArrowBox } from '@navikt/ft-ui-komponenter';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { ProsessStegBegrunnelseTextFieldNew, ProsessStegSubmitButtonNew } from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, Søknadsfrist } from '@navikt/fp-types';
import type { VurderSoknadsfristAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import styles from './vurderSoknadsfristForeldrepengerForm.module.css';

const isEdited = (hasAksjonspunkt: boolean, gyldigSenFremsetting?: boolean): boolean =>
  hasAksjonspunkt && gyldigSenFremsetting !== undefined;

type FormValues = {
  gyldigSenFremsetting?: boolean;
  ansesMottatt?: string;
  begrunnelse?: string;
};

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  mottattDato: string,
  søknadsfrist?: Søknadsfrist,
): FormValues => {
  const upgMottattDato = søknadsfrist?.mottattDato;
  return {
    gyldigSenFremsetting:
      aksjonspunkter[0].status === AksjonspunktStatus.OPPRETTET ? undefined : upgMottattDato !== mottattDato,
    ansesMottatt: upgMottattDato,
    ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
  };
};

const transformValues = (values: FormValues): VurderSoknadsfristAp => ({
  harGyldigGrunn: values.gyldigSenFremsetting,
  ansesMottattDato: values.ansesMottatt,
  kode: AksjonspunktKode.VURDER_SOKNADSFRIST_FORELDREPENGER,
  ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
});

interface Props {
  mottattDato: string;
  søknadsfrist?: Søknadsfrist;
  readOnlySubmitButton: boolean;
}

/**
 * VurderSoknadsfristForeldrepengerForm
 *
 * Setter opp aksjonspunktet for vurdering av søknadsfristvilkåret.
 */
export const VurderSoknadsfristForeldrepengerForm = ({ readOnlySubmitButton, mottattDato, søknadsfrist }: Props) => {
  const { aksjonspunkterForPanel, isReadOnly, submitCallback, harÅpneAksjonspunkter } =
    usePanelDataContext<VurderSoknadsfristAp>();

  const initialValues = buildInitialValues(aksjonspunkterForPanel, mottattDato, søknadsfrist);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData || initialValues,
  });

  const gyldigSenFremsetting = formMethods.watch('gyldigSenFremsetting');

  const soknadsperiodeStart = søknadsfrist?.søknadsperiodeStart;
  const soknadsperiodeSlutt = søknadsfrist?.søknadsperiodeSlutt;
  const soknadsfristdato = søknadsfrist?.utledetSøknadsfrist;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(formValues: FormValues) => submitCallback(transformValues(formValues))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VStack gap="6">
        <Heading size="small">
          <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Soknadsfrist" />
        </Heading>
        {harÅpneAksjonspunkter && (
          <AksjonspunktHelpTextHTML>
            <FormattedMessage
              id="VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText"
              values={{
                numberOfDays: søknadsfrist?.dagerOversittetFrist,
                soknadsfristdato: soknadsfristdato ? dayjs(soknadsfristdato).format(DDMMYYYY_DATE_FORMAT) : '',
              }}
            />
          </AksjonspunktHelpTextHTML>
        )}
        <HStack justify="space-between">
          <Box className={styles.panel}>
            <Label size="small">
              <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Vurder" />
            </Label>
            <ul className={styles.hyphen}>
              <li>
                <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Punkt1" />
              </li>
              <li>
                <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Punkt2" />
              </li>
              <li>
                <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Punkt3" />
              </li>
            </ul>
          </Box>
          <div>
            <Detail>
              <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.SoknadMottatt" />
            </Detail>
            {mottattDato && <BodyShort size="small">{dayjs(mottattDato).format(DDMMYYYY_DATE_FORMAT)}</BodyShort>}
          </div>
          {soknadsperiodeStart && soknadsperiodeSlutt && (
            <div>
              <Detail>
                <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.SoknadPeriode" />
              </Detail>
              <BodyShort size="small">
                {`${dayjs(soknadsperiodeStart).format(DDMMYYYY_DATE_FORMAT)} - ${dayjs(soknadsperiodeSlutt).format(
                  DDMMYYYY_DATE_FORMAT,
                )}`}
              </BodyShort>
            </div>
          )}
        </HStack>
        <div className={styles.marginTop}>
          <VStack gap="4">
            <ProsessStegBegrunnelseTextFieldNew readOnly={isReadOnly} />
            <RadioGroupPanel
              name="gyldigSenFremsetting"
              validate={[required]}
              isReadOnly={isReadOnly}
              isHorizontal
              isEdited={isEdited(aksjonspunkterForPanel.length > 0, gyldigSenFremsetting)}
              isTrueOrFalseSelection
              radios={[
                {
                  value: 'true',
                  label: <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.GyldigGrunn" />,
                },
                {
                  value: 'false',
                  label: <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn" />,
                },
              ]}
            />
            {gyldigSenFremsetting && (
              <ArrowBox>
                <Datepicker
                  name="ansesMottatt"
                  isReadOnly={isReadOnly}
                  label={<FormattedMessage id="VurderSoknadsfristForeldrepengerForm.NyMottattDato" />}
                  validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
                />
              </ArrowBox>
            )}
            <ProsessStegSubmitButtonNew
              isReadOnly={isReadOnly}
              isSubmittable={!readOnlySubmitButton}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </VStack>
        </div>
      </VStack>
    </Form>
  );
};
