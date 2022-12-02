import React, {
  FunctionComponent, useCallback, useEffect, useMemo, useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form } from '@navikt/ft-form-hooks';
import { Button, Heading } from '@navikt/ds-react';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@navikt/ft-ui-komponenter';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Aksjonspunkt, DokumentasjonVurderingBehov } from '@fpsak-frontend/types';
import { FaktaBegrunnelseTextFieldNew } from '@fpsak-frontend/fakta-felles';
import { VurderDokumentasjonAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import UttakDokumentasjonFaktaTable from './UttakDokumentasjonFaktaTable';

interface OwnProps {
  aksjonspunkter: Aksjonspunkt[];
  dokumentasjonVurderingBehov: DokumentasjonVurderingBehov[];
  submitCallback: (aksjonspunkter: VurderDokumentasjonAp) => Promise<void>;
  readOnly: boolean;
  submittable: boolean;
  formData: { dokBehov: DokumentasjonVurderingBehov[], begrunnelse: string },
  setFormData: (data: { dokBehov: DokumentasjonVurderingBehov[], begrunnelse: string }) => void,
}

const UttakDokumentasjonFaktaForm: FunctionComponent<OwnProps> = ({
  aksjonspunkter,
  dokumentasjonVurderingBehov,
  readOnly,
  submittable,
  submitCallback,
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const [erBekreftKnappTrykket, settBekreftKnappTrykket] = useState(false);
  const [dokBehov, oppdaterDokBehov] = useState<DokumentasjonVurderingBehov[]>(formData?.dokBehov || dokumentasjonVurderingBehov);

  const bekreft = useCallback((begrunnelse: string) => {
    settBekreftKnappTrykket(true);
    submitCallback({
      kode: aksjonspunktCodes.VURDER_UTTAK_DOKUMENTASJON,
      vurderingBehov: dokBehov,
      begrunnelse,
    });
  }, [dokBehov]);

  const lagretBegrunnelse = aksjonspunkter.length > 0 ? aksjonspunkter[0].begrunnelse : undefined;
  const formMethods = useForm<{ begrunnelse: string }>({
    defaultValues: {
      begrunnelse: formData?.begrunnelse || lagretBegrunnelse,
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
      {aksjonspunkter.some((a) => a.status === aksjonspunktStatus.OPPRETTET) && (
        <>
          <AksjonspunktHelpTextHTML>
            {[intl.formatMessage({ id: 'UttakDokumentasjonFaktaForm.AksjonspunktHjelpetekst' })]}
          </AksjonspunktHelpTextHTML>
          <VerticalSpacer twentyPx />
        </>
      )}
      <UttakDokumentasjonFaktaTable
        harAksjonspunkt={aksjonspunkter.length > 0}
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
        <VerticalSpacer sixteenPx />
        {!readOnly && (
          <Button
            size="small"
            variant="primary"
            disabled={!isSubmittable || (!isDirty && !formMethods.formState.isDirty) || erBekreftKnappTrykket}
            loading={erBekreftKnappTrykket}
          >
            <FormattedMessage id="UttakDokumentasjonFaktaForm.Bekreft" />
          </Button>
        )}
      </Form>
    </>
  );
};

export default UttakDokumentasjonFaktaForm;
