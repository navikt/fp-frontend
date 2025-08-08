import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ErrorSummary, Heading, HStack, Radio, RadioGroup, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { dateRangesNotOverlapping } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML, OverstyringKnapp } from '@navikt/ft-ui-komponenter';
import dayjs from 'dayjs';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';
import type { BekreftAnnenpartsUttakEøsAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { notEmpty, useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { UttakEøsFaktaTable } from './UttakEøsFaktaTable';

interface Props {
  annenForelderUttakEøs: AnnenforelderUttakEøsPeriode[];
  submittable: boolean;
  kanOverstyre: boolean;
}

export const UttakEøsFaktaForm = ({ annenForelderUttakEøs, submittable, kanOverstyre }: Props) => {
  const intl = useIntl();

  const { aksjonspunkterForPanel, harÅpneAksjonspunkter, isReadOnly, submitCallback } =
    usePanelDataContext<BekreftAnnenpartsUttakEøsAp>();
  annenForelderUttakEøs?.sort((a, b) => dayjs(a.fom).diff(dayjs(b.fom)));

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<{
    harPeriodeIEøs: boolean | undefined;
    annenForelderUttakEøsPerioder: AnnenforelderUttakEøsPeriode[];
    begrunnelse: string | undefined;
  }>();

  const [perioder, setPerioder] = useState<AnnenforelderUttakEøsPeriode[]>(
    mellomlagretFormData?.annenForelderUttakEøsPerioder ?? annenForelderUttakEøs,
  );
  const [erOverstyrt, setErOverstyrt] = useState(false);
  const [harPeriodeIEøs, setHarPeriodeIEøs] = useState(
    mellomlagretFormData?.harPeriodeIEøs ??
      (harÅpneAksjonspunkter && perioder.length === 0 ? undefined : perioder.length > 0),
  );
  const [visLeggTilPeriodeForm, setVisLeggTilPeriodeForm] = useState(false);
  const [feilmelding, setFeilmelding] = useState<string | undefined>();

  const formMethods = useForm<FaktaBegrunnelseFormValues>({
    defaultValues: mellomlagretFormData
      ? { begrunnelse: mellomlagretFormData.begrunnelse }
      : FaktaBegrunnelseTextField.initialValues(aksjonspunkterForPanel[0]),
  });

  const automatiskeAksjonspunkter = aksjonspunkterForPanel.filter(
    a => a.definisjon !== AksjonspunktKode.OVERSTYR_FAKTA_UTTAK_EØS,
  );

  const erRedigerbart = !isReadOnly && (automatiskeAksjonspunkter.length > 0 || erOverstyrt);

  const bekreft = (begrunnelse: string) => {
    if (harPeriodeIEøs && perioder.length === 0) {
      setFeilmelding(intl.formatMessage({ id: 'UttakEøsFaktaForm.FeilmeldingIngenPerioder' }));
      return;
    } else {
      setFeilmelding(undefined);
    }

    return submitCallback({
      kode: erOverstyrt ? AksjonspunktKode.OVERSTYR_FAKTA_UTTAK_EØS : AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART,
      begrunnelse,
      perioder: harPeriodeIEøs ? perioder : [],
    });
  };

  useEffect(() => {
    if (!harPeriodeIEøs) {
      setFeilmelding(undefined);
      return;
    }

    const periodeMap = perioder.map(({ fom, tom }) => [fom, tom]);
    const erOverlappendePerioder = periodeMap.length > 0 ? !!dateRangesNotOverlapping(periodeMap) : undefined;
    if (erOverlappendePerioder) {
      setFeilmelding(intl.formatMessage({ id: 'UttakEøsFaktaForm.OverlappendePerioder' }));
    } else {
      setFeilmelding(undefined);
    }
  }, [perioder, harPeriodeIEøs]);

  const begrunnelse = formMethods.watch('begrunnelse');
  useEffect(() => {
    setMellomlagretFormData({
      harPeriodeIEøs: harPeriodeIEøs,
      annenForelderUttakEøsPerioder: perioder,
      begrunnelse: begrunnelse,
    });
  }, [harPeriodeIEøs, perioder, begrunnelse]);

  return (
    <VStack gap="8">
      <HStack gap="4">
        <Heading size="small">
          <FormattedMessage id="UttakEøsFaktaForm.FaktaUttakEos" />
        </Heading>
        {kanOverstyre && !isReadOnly && automatiskeAksjonspunkter.length === 0 && (
          <OverstyringKnapp onClick={() => setErOverstyrt(true)} erOverstyrt={erOverstyrt} />
        )}
      </HStack>
      {harÅpneAksjonspunkter && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="UttakEøsFaktaForm.Aksjonspunkt" />
        </AksjonspunktHelpTextHTML>
      )}
      {feilmelding && (
        <ErrorSummary>
          <ErrorSummary.Item>{feilmelding}</ErrorSummary.Item>
        </ErrorSummary>
      )}
      <VStack gap="10">
        <RadioGroup
          legend={<FormattedMessage id="UttakEøsFaktaForm.harPeriodeIEøs" />}
          onChange={setHarPeriodeIEøs}
          defaultValue={harPeriodeIEøs}
          readOnly={!erRedigerbart}
          size="small"
        >
          <HStack gap="4">
            <Radio value={true}>
              <FormattedMessage id="UttakEøsFaktaForm.Ja" />
            </Radio>
            <Radio value={false}>
              <FormattedMessage id="UttakEøsFaktaForm.Nei" />
            </Radio>
          </HStack>
        </RadioGroup>
        {harPeriodeIEøs && (
          <UttakEøsFaktaTable
            annenForelderUttakEøsPerioder={perioder}
            setPerioder={setPerioder}
            isReadOnly={!erRedigerbart}
            erRedigerbart={erRedigerbart}
            visLeggTilPeriodeForm={visLeggTilPeriodeForm}
            setVisLeggTilPeriodeForm={setVisLeggTilPeriodeForm}
          />
        )}
        <RhfForm formMethods={formMethods} onSubmit={values => bekreft(notEmpty(values.begrunnelse))}>
          <VStack gap="4">
            <FaktaBegrunnelseTextField
              control={formMethods.control}
              isSubmittable
              isReadOnly={!erRedigerbart}
              hasBegrunnelse
            />
            {erRedigerbart && (
              <FaktaSubmitButton
                isSubmittable={submittable && !feilmelding && harPeriodeIEøs !== undefined}
                isReadOnly={isReadOnly}
                isSubmitting={formMethods.formState.isSubmitting}
                isDirty={formMethods.formState.isDirty}
              />
            )}
          </VStack>
        </RhfForm>
      </VStack>
    </VStack>
  );
};
