import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { BodyShort, Box, Detail, Heading, HStack, Label, Radio, VStack } from '@navikt/ds-react';
import { RhfDatepicker, RhfForm, RhfRadioGroup } from '@navikt/ft-form-hooks';
import { dateBeforeOrEqualToToday, hasValidDate, required } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML, ArrowBox } from '@navikt/ft-ui-komponenter';
import { dateFormat, periodFormat } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
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
  const upgMottattDato = søknadsfrist?.mottattDato ?? undefined;
  return {
    gyldigSenFremsetting: aksjonspunkter.at(0)?.status === 'OPPR' ? undefined : upgMottattDato !== mottattDato,
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
}

/**
 * VurderSoknadsfristForeldrepengerForm
 *
 * Setter opp aksjonspunktet for vurdering av søknadsfristvilkåret.
 */
export const VurderSoknadsfristForeldrepengerForm = ({ mottattDato, søknadsfrist }: Props) => {
  const { aksjonspunkterForPanel, isReadOnly, submitCallback, isSubmittable, harÅpentAksjonspunkt } =
    usePanelDataContext<VurderSoknadsfristAp>();

  const initialValues = buildInitialValues(aksjonspunkterForPanel, mottattDato, søknadsfrist);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });

  const gyldigSenFremsetting = formMethods.watch('gyldigSenFremsetting');

  const soknadsperiodeStart = søknadsfrist?.søknadsperiodeStart;
  const soknadsperiodeSlutt = søknadsfrist?.søknadsperiodeSlutt;
  const soknadsfristdato = søknadsfrist?.utledetSøknadsfrist;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(formValues: FormValues) => submitCallback(transformValues(formValues))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <VStack gap="space-24">
        <Heading size="small" level="2">
          <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Soknadsfrist" />
        </Heading>
        {harÅpentAksjonspunkt && (
          <AksjonspunktHelpTextHTML>
            <FormattedMessage
              id="VurderSoknadsfristForeldrepengerForm.AksjonspunktHelpText"
              values={{
                numberOfDays: søknadsfrist?.dagerOversittetFrist,
                soknadsfristdato: soknadsfristdato ? dateFormat(soknadsfristdato) : '',
              }}
            />
          </AksjonspunktHelpTextHTML>
        )}
        <HStack justify="space-between">
          <Box.New className={styles['panel']}>
            <Label size="small">
              <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.Vurder" />
            </Label>
            <ul className={styles['hyphen']}>
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
          </Box.New>
          <div>
            <Detail>
              <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.SoknadMottatt" />
            </Detail>
            {mottattDato && <BodyShort size="small">{dateFormat(mottattDato)}</BodyShort>}
          </div>
          {soknadsperiodeStart && soknadsperiodeSlutt && (
            <div>
              <Detail>
                <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.SoknadPeriode" />
              </Detail>
              <BodyShort size="small">{periodFormat(soknadsperiodeStart, soknadsperiodeSlutt)}</BodyShort>
            </div>
          )}
        </HStack>
        <div className={styles['marginTop']}>
          <VStack gap="space-16">
            <ProsessStegBegrunnelseTextFieldNew readOnly={isReadOnly} />
            <VStack gap="space-12">
              <RhfRadioGroup
                name="gyldigSenFremsetting"
                control={formMethods.control}
                validate={[required]}
                isReadOnly={isReadOnly}
                isEdited={isEdited(aksjonspunkterForPanel.length > 0, gyldigSenFremsetting)}
              >
                <HStack gap="space-16">
                  <Radio value={true} size="small">
                    <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.GyldigGrunn" />
                  </Radio>
                  <Radio value={false} size="small">
                    <FormattedMessage id="VurderSoknadsfristForeldrepengerForm.IkkeGyldigGrunn" />
                  </Radio>
                </HStack>
              </RhfRadioGroup>
              {gyldigSenFremsetting && (
                <ArrowBox>
                  <RhfDatepicker
                    name="ansesMottatt"
                    control={formMethods.control}
                    isReadOnly={isReadOnly}
                    label={<FormattedMessage id="VurderSoknadsfristForeldrepengerForm.NyMottattDato" />}
                    validate={[required, hasValidDate, dateBeforeOrEqualToToday]}
                  />
                </ArrowBox>
              )}
            </VStack>
            <ProsessStegSubmitButtonNew
              isReadOnly={isReadOnly}
              isSubmittable={isSubmittable}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={formMethods.formState.isDirty}
            />
          </VStack>
        </div>
      </VStack>
    </RhfForm>
  );
};
