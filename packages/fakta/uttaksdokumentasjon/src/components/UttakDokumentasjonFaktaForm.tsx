import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import { FaktaBegrunnelseTextField } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import type { DokumentasjonVurderingBehov } from '@navikt/fp-types';
import type { VurderDokumentasjonAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { UttakDokumentasjonFaktaTable } from './UttakDokumentasjonFaktaTable/UttakDokumentasjonFaktaTable';

interface Props {
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
  submittable: boolean;
}

export const UttakDokumentasjonFaktaForm = ({ dokumentasjonVurderingBehov, submittable }: Props) => {
  const intl = useIntl();

  const { submitCallback, aksjonspunkterForPanel, isReadOnly } = usePanelDataContext<VurderDokumentasjonAp>();

  const readOnly = isReadOnly || aksjonspunkterForPanel.length === 0;

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<{
    dokBehov: DokumentasjonVurderingBehov[];
    begrunnelse: string;
  }>();

  const [erBekreftKnappTrykket, setErBekreftKnappTrykket] = useState(false);
  const [dokBehov, setDokBehov] = useState<DokumentasjonVurderingBehov[]>(
    mellomlagretFormData?.dokBehov ?? dokumentasjonVurderingBehov,
  );

  const bekreft = (begrunnelse: string) => {
    setErBekreftKnappTrykket(true);
    submitCallback({
      kode: AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON,
      vurderingBehov: dokBehov,
      begrunnelse,
    });
  };

  const lagretBegrunnelse = aksjonspunkterForPanel[0]?.begrunnelse ?? '';
  const formMethods = useForm<{ begrunnelse: string }>({
    defaultValues: {
      begrunnelse: mellomlagretFormData?.begrunnelse ?? lagretBegrunnelse,
    },
  });

  useEffect(
    () => () => {
      setMellomlagretFormData({ dokBehov, begrunnelse: formMethods.getValues('begrunnelse') });
    },
    [],
  );

  const begrunnelse = formMethods.watch('begrunnelse');

  const isSubmittable = submittable && dokBehov?.every(a => a.vurdering) && !!begrunnelse;

  const [isDirty, setIsDirty] = useState<boolean>(false);

  return (
    <VStack gap="6">
      {aksjonspunkterForPanel.some(a => a.status === AksjonspunktStatus.OPPRETTET) && (
        <Alert variant="warning">
          <FormattedMessage id="UttakDokumentasjonFaktaForm.AksjonspunktHjelpetekst" />
        </Alert>
      )}
      <UttakDokumentasjonFaktaTable
        dokumentasjonVurderingBehov={dokBehov}
        oppdaterDokBehov={setDokBehov}
        setDirty={setIsDirty}
        readOnly={readOnly}
      />
      <Form formMethods={formMethods} onSubmit={(values: { begrunnelse: string }) => bekreft(values.begrunnelse)}>
        <VStack gap="4">
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
      </Form>
    </VStack>
  );
};
