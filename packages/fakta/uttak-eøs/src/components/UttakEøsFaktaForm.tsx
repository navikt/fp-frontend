import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { ErrorSummary, Heading, HStack, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { dateRangesNotOverlapping } from '@navikt/ft-form-validators';
import { AksjonspunktHelpTextHTML, OverstyringKnapp } from '@navikt/ft-ui-komponenter';
import { sortPeriodsByFom } from '@navikt/ft-utils';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, OverstyringKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, AnnenforelderUttakEøsPeriode } from '@navikt/fp-types';
import type {
  AksjonspunktTilBekreftelse,
  OverstyringAksjonspunktTilBekreftelse,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { UttakEøsFaktaTable } from './UttakEøsFaktaTable';

interface Props {
  annenForelderUttakEøs: AnnenforelderUttakEøsPeriode[];
  kanOverstyre: boolean;
}

export const UttakEøsFaktaForm = ({ annenForelderUttakEøs, kanOverstyre }: Props) => {
  const intl = useIntl();

  const { aksjonspunkterForPanel, harÅpentAksjonspunkt, isSubmittable, isReadOnly, submitCallback, alleKodeverk } =
    usePanelDataContext<
      | AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART>
      | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_UTTAK_I_EØS_FOR_ANNENPART>
    >();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<{
    annenForelderUttakEøsPerioder: AnnenforelderUttakEøsPeriode[];
    begrunnelse: string | undefined;
  }>();

  const [perioder, setPerioder] = useState<AnnenforelderUttakEøsPeriode[]>(
    mellomlagretFormData?.annenForelderUttakEøsPerioder ?? annenForelderUttakEøs.sort(sortPeriodsByFom),
  );
  const [erOverstyrt, setErOverstyrt] = useState(false);
  const [visLeggTilPeriodeForm, setVisLeggTilPeriodeForm] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  const formMethods = useForm<FaktaBegrunnelseFormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(aksjonspunkterForPanel),
  });

  const automatiskeAksjonspunkter = aksjonspunkterForPanel.filter(
    a => a.definisjon !== OverstyringKode.OVERSTYRING_AV_UTTAK_I_EØS_FOR_ANNENPART,
  );

  const erRedigerbart = !isReadOnly && (automatiskeAksjonspunkter.length > 0 || erOverstyrt);

  const periodeMap = perioder.map(({ fom, tom }) => [fom, tom]);
  const erOverlappendePerioder = periodeMap.length > 0 ? !!dateRangesNotOverlapping(periodeMap) : undefined;
  const feilmelding = erOverlappendePerioder
    ? intl.formatMessage({ id: 'UttakEøsFaktaForm.OverlappendePerioder' })
    : undefined;

  const begrunnelse = useWatch({ control: formMethods.control, name: 'begrunnelse' });

  useEffect(() => {
    setMellomlagretFormData({
      annenForelderUttakEøsPerioder: perioder,
      begrunnelse: begrunnelse,
    });
  }, [perioder, begrunnelse, setMellomlagretFormData]);

  return (
    <VStack gap="space-16">
      <HStack gap="space-16">
        <Heading size="small">
          <FormattedMessage id="UttakEøsFaktaForm.FaktaUttakEos" />
        </Heading>
        {kanOverstyre && !isReadOnly && automatiskeAksjonspunkter.length === 0 && (
          <OverstyringKnapp onClick={() => setErOverstyrt(true)} erOverstyrt={erOverstyrt} />
        )}
      </HStack>
      {harÅpentAksjonspunkt && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="UttakEøsFaktaForm.Aksjonspunkt" />
        </AksjonspunktHelpTextHTML>
      )}
      {feilmelding && (
        <ErrorSummary>
          <ErrorSummary.Item>{feilmelding}</ErrorSummary.Item>
        </ErrorSummary>
      )}
      <UttakEøsFaktaTable
        annenForelderUttakEøsPerioder={perioder}
        setPerioder={setPerioder}
        isReadOnly={!erRedigerbart}
        erRedigerbart={erRedigerbart}
        visLeggTilPeriodeForm={visLeggTilPeriodeForm}
        setVisLeggTilPeriodeForm={setVisLeggTilPeriodeForm}
        setDirty={setIsDirty}
        alleKodeverk={alleKodeverk}
      />
      <RhfForm
        formMethods={formMethods}
        onSubmit={values => submitCallback(transformValues(values, perioder, erOverstyrt))}
      >
        <VStack gap="space-16">
          <FaktaBegrunnelseTextField
            control={formMethods.control}
            isSubmittable
            isReadOnly={!erRedigerbart}
            hasVurderingText={true}
            hasBegrunnelse
          />
          {erRedigerbart && (
            <FaktaSubmitButton
              isSubmittable={isSubmittable && !feilmelding && !visLeggTilPeriodeForm}
              isReadOnly={isReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isDirty={isDirty || formMethods.formState.isDirty}
            />
          )}
        </VStack>
      </RhfForm>
    </VStack>
  );
};

const buildInitialValues = (aksjonspunkter: Aksjonspunkt[]): FaktaBegrunnelseFormValues =>
  FaktaBegrunnelseTextField.initialValues(aksjonspunkter);

const transformValues = (
  values: FaktaBegrunnelseFormValues,
  perioder: AnnenforelderUttakEøsPeriode[],
  erOverstyrt: boolean,
):  | AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART>
  | OverstyringAksjonspunktTilBekreftelse<OverstyringKode.OVERSTYRING_AV_UTTAK_I_EØS_FOR_ANNENPART> => ({
  kode: erOverstyrt
    ? OverstyringKode.OVERSTYRING_AV_UTTAK_I_EØS_FOR_ANNENPART
    : AksjonspunktKode.AVKLAR_UTTAK_I_EØS_FOR_ANNENPART,
  perioder,
  ...FaktaBegrunnelseTextField.transformValues(values),
});
