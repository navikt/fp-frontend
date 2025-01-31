import React, { FunctionComponent, useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Alert, Button, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import { FaktaBegrunnelseTextField } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, AksjonspunktStatus } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, DokumentasjonVurderingBehov } from '@navikt/fp-types';
import { VurderDokumentasjonAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData } from '@navikt/fp-utils';

import UttakDokumentasjonFaktaTable from './UttakDokumentasjonFaktaTable/UttakDokumentasjonFaktaTable';

interface OwnProps {
  aksjonspunkter: Aksjonspunkt[];
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
  submitCallback: (aksjonspunkter: VurderDokumentasjonAp) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
}

const UttakDokumentasjonFaktaForm: FunctionComponent<OwnProps> = ({
  aksjonspunkter,
  dokumentasjonVurderingBehov,
  readOnly,
  submittable,
  submitCallback,
}) => {
  const intl = useIntl();

  const { formData, setFormData } = useFormData<{ dokBehov: DokumentasjonVurderingBehov[]; begrunnelse: string }>();

  const [erBekreftKnappTrykket, setErBekreftKnappTrykket] = useState(false);
  const [dokBehov, setDokBehov] = useState<DokumentasjonVurderingBehov[]>(
    formData?.dokBehov || dokumentasjonVurderingBehov,
  );

  const bekreft = useCallback(
    (begrunnelse: string) => {
      setErBekreftKnappTrykket(true);
      submitCallback({
        kode: AksjonspunktKode.VURDER_UTTAK_DOKUMENTASJON,
        vurderingBehov: dokBehov,
        begrunnelse,
      });
    },
    [dokBehov],
  );

  const lagretBegrunnelse = aksjonspunkter.length > 0 ? aksjonspunkter[0].begrunnelse : undefined;
  const formMethods = useForm<{ begrunnelse: string }>({
    defaultValues: {
      begrunnelse: formData?.begrunnelse || lagretBegrunnelse,
    },
  });

  useEffect(
    () => () => {
      setFormData({ dokBehov, begrunnelse: formMethods.getValues('begrunnelse') });
    },
    [],
  );

  const begrunnelse = formMethods.watch('begrunnelse');

  const isSubmittable = useMemo(
    () => submittable && dokBehov?.every(a => a.vurdering) && !!begrunnelse,
    [dokBehov, begrunnelse],
  );

  const [isDirty, setIsDirty] = useState<boolean>(false);

  return (
    <VStack gap="6">
      {aksjonspunkter.some(a => a.status === AksjonspunktStatus.OPPRETTET) && (
        <Alert variant="warning">
          <FormattedMessage id="UttakDokumentasjonFaktaForm.AksjonspunktHjelpetekst" />
        </Alert>
      )}
      <UttakDokumentasjonFaktaTable
        harAksjonspunkt={aksjonspunkter.length > 0}
        dokumentasjonVurderingBehov={dokBehov}
        oppdaterDokBehov={setDokBehov}
        setDirty={setIsDirty}
        readOnly={readOnly}
      />
      <Form formMethods={formMethods} onSubmit={(values: { begrunnelse: string }) => bekreft(values.begrunnelse)}>
        <VStack gap="4">
          <FaktaBegrunnelseTextField
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

export default UttakDokumentasjonFaktaForm;
