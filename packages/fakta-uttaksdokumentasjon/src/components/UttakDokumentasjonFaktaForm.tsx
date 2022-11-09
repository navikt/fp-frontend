import React, {
  FunctionComponent, useCallback, useEffect, useMemo, useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form } from '@navikt/ft-form-hooks';
import { Heading } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { DokumentasjonVurderingBehov } from '@fpsak-frontend/types';
import { FaktaSubmitButtonNew, FaktaBegrunnelseTextFieldNew } from '@fpsak-frontend/fakta-felles';
import { VurderDokumentasjonAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import UttakDokumentasjonFaktaTable from './UttakDokumentasjonFaktaTable';

interface PureOwnProps {
  harApneAksjonspunkter: boolean;
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
  submitCallback: (aksjonspunkter: VurderDokumentasjonAp) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  formData: { dokBehov: DokumentasjonVurderingBehov[], begrunnelse: string },
  setFormData: (data: { dokBehov: DokumentasjonVurderingBehov[], begrunnelse: string }) => void,
}

const UttakDokumentasjonFaktaForm: FunctionComponent<PureOwnProps> = ({
  harApneAksjonspunkter,
  dokumentasjonVurderingBehov,
  readOnly,
  submittable,
  submitCallback,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const [dokBehov, oppdaterDokBehov] = useState<DokumentasjonVurderingBehov[]>(formData?.dokBehov || dokumentasjonVurderingBehov);

  const bekreft = useCallback((begrunnelse: string) => {
    submitCallback({
      kode: aksjonspunktCodes.VURDER_UTTAK_DOKUMENTASJON,
      vurderingBehov: dokBehov as Required<DokumentasjonVurderingBehov>[],
      begrunnelse,
    });
  }, [dokBehov]);

  const formMethods = useForm<{ begrunnelse: string }>({
    defaultValues: {
      begrunnelse: formData?.begrunnelse,
    },
  });

  useEffect(() => () => {
    setFormData({ dokBehov, begrunnelse: formMethods.getValues('begrunnelse') });
  }, []);

  const begrunnelse = formMethods.watch('begrunnelse');

  const isSubmittable = useMemo(() => submittable && dokBehov?.every((a) => a.vurdering) && !!begrunnelse,
    [dokBehov, begrunnelse]);

  const [isDirty, setDirty] = useState<boolean>(false);

  return (
    <>
      <Heading size="small"><FormattedMessage id="UttakDokumentasjonFaktaForm.Overskrift" /></Heading>
      <VerticalSpacer thirtyTwoPx />
      {harApneAksjonspunkter && (
        <>
          <AksjonspunktHelpTextHTML>
            {[intl.formatMessage({ id: 'UttakDokumentasjonFaktaForm.AksjonspunktHjelpetekst' })]}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer sixteenPx />
        </>
      )}
      <UttakDokumentasjonFaktaTable
        dokumentasjonVurderingBehov={dokBehov}
        oppdaterDokBehov={oppdaterDokBehov}
        setDirty={setDirty}
        readOnly={readOnly}
      />
      <VerticalSpacer twentyPx />
      <Form formMethods={formMethods} onSubmit={(values: { begrunnelse: string }) => bekreft(values.begrunnelse)}>
        <FaktaBegrunnelseTextFieldNew
          name="begrunnelse"
          isSubmittable
          isReadOnly={readOnly}
          hasBegrunnelse
        />
        <VerticalSpacer twentyPx />
        <FaktaSubmitButtonNew
          isSubmittable={isSubmittable}
          isReadOnly={readOnly}
          isSubmitting={formMethods.formState.isSubmitting}
          isDirty={isDirty || formMethods.formState.isDirty}
        />
      </Form>
    </>
  );
};

export default UttakDokumentasjonFaktaForm;
