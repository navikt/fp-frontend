import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { AksjonspunktHelpTextHTML } from '@navikt/ft-ui-komponenter';

import { type FaktaBegrunnelseFormValues, FaktaBegrunnelseTextField } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, DokumentasjonVurderingBehov } from '@navikt/fp-types';
import type { VurderDokumentasjonAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { UttakDokumentasjonFaktaTable } from './UttakDokumentasjonFaktaTable/UttakDokumentasjonFaktaTable';

interface Props {
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
}

export const UttakDokumentasjonFaktaForm = ({ dokumentasjonVurderingBehov }: Props) => {
  const intl = useIntl();

  const {
    submitCallback,
    aksjonspunkterForPanel,
    harÅpentAksjonspunkt,
    isReadOnly,
    isSubmittable: submittable,
  } = usePanelDataContext<VurderDokumentasjonAp>();

  const readOnly = isReadOnly || aksjonspunkterForPanel.length === 0;

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<
    {
      dokBehov: DokumentasjonVurderingBehov[];
    } & FaktaBegrunnelseFormValues
  >();

  const [erBekreftKnappTrykket, setErBekreftKnappTrykket] = useState(false);
  const [dokBehov, setDokBehov] = useState<DokumentasjonVurderingBehov[]>(
    mellomlagretFormData?.dokBehov ?? dokumentasjonVurderingBehov,
  );

  const bekreft = (values: FaktaBegrunnelseFormValues) => {
    setErBekreftKnappTrykket(true);
    void submitCallback(transformValues(values, dokBehov));
  };

  const formMethods = useForm<FaktaBegrunnelseFormValues>({
    defaultValues: mellomlagretFormData ?? buildInitialValues(aksjonspunkterForPanel),
  });

  const begrunnelse = useWatch({ control: formMethods.control, name: 'begrunnelse' });

  const isSubmittable = submittable && dokBehov.every(a => a.vurdering) && !!begrunnelse;

  const [isDirty, setIsDirty] = useState<boolean>(false);

  return (
    <VStack gap="space-24">
      {harÅpentAksjonspunkt && (
        <AksjonspunktHelpTextHTML>
          <FormattedMessage id="UttakDokumentasjonFaktaForm.AksjonspunktHjelpetekst" />
        </AksjonspunktHelpTextHTML>
      )}
      <UttakDokumentasjonFaktaTable
        dokumentasjonVurderingBehov={dokBehov}
        oppdaterDokBehov={setDokBehov}
        setDirty={setIsDirty}
        readOnly={readOnly}
      />
      <RhfForm
        formMethods={formMethods}
        setDataOnUnmount={(values: FaktaBegrunnelseFormValues) => setMellomlagretFormData({ ...values, dokBehov })}
        onSubmit={values => bekreft(values)}
      >
        <VStack gap="space-16">
          <FaktaBegrunnelseTextField
            control={formMethods.control}
            label={intl.formatMessage({ id: 'UttakDokumentasjonFaktaForm.Begrunnelse' })}
            isSubmittable
            isReadOnly={readOnly}
            hasBegrunnelse
          />
          {!readOnly && (
            <div>
              <Button
                size="small"
                variant="primary"
                disabled={!isSubmittable || (!isDirty && !formMethods.formState.isDirty) || erBekreftKnappTrykket}
                loading={erBekreftKnappTrykket}
              >
                <FormattedMessage id="UttakDokumentasjonFaktaForm.Bekreft" />
              </Button>
            </div>
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
  dokBehov: DokumentasjonVurderingBehov[],
): VurderDokumentasjonAp => ({
  kode: AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON,
  vurderingBehov: dokBehov,
  begrunnelse: values.begrunnelse,
});
