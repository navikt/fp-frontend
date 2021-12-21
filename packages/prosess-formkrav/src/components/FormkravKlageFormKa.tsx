import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@fpsak-frontend/form-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AlleKodeverk, KlageVurdering } from '@fpsak-frontend/types';
import { KlageFormkravAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import FormkravKlageForm, { getPaKlagdVedtak, IKKE_PA_KLAGD_VEDTAK } from './FormkravKlageForm';
import { erTilbakekreving, påklagdTilbakekrevingInfo } from './FormkravKlageFormNfp';
import AvsluttetBehandling from '../types/avsluttetBehandlingTsType';

type FormValues = {
  erKlagerPart?: boolean;
  erFristOverholdt?: boolean;
  erKonkret?: boolean;
  erSignert?: boolean;
  begrunnelse?: string;
  vedtak?: string;
}

const buildInitialValues = (klageVurdering: KlageVurdering): FormValues => {
  const klageFormkavResultatKa = klageVurdering ? klageVurdering.klageFormkravResultatKA : null;
  return {
    vedtak: klageFormkavResultatKa ? getPaKlagdVedtak(klageFormkavResultatKa) : null,
    begrunnelse: klageFormkavResultatKa ? klageFormkavResultatKa.begrunnelse : null,
    erKlagerPart: klageFormkavResultatKa ? klageFormkavResultatKa.erKlagerPart : null,
    erKonkret: klageFormkavResultatKa ? klageFormkavResultatKa.erKlageKonkret : null,
    erFristOverholdt: klageFormkavResultatKa ? klageFormkavResultatKa.erKlagefirstOverholdt : null,
    erSignert: klageFormkavResultatKa ? klageFormkavResultatKa.erSignert : null,
  };
};

export const transformValues = (values: FormValues, avsluttedeBehandlinger: AvsluttetBehandling[]): KlageFormkravAp => ({
  erKlagerPart: values.erKlagerPart,
  erFristOverholdt: values.erFristOverholdt,
  erKonkret: values.erKonkret,
  erSignert: values.erSignert,
  begrunnelse: values.begrunnelse,
  kode: aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_KA,
  vedtakBehandlingUuid: values.vedtak === IKKE_PA_KLAGD_VEDTAK ? null : values.vedtak,
  erTilbakekreving: erTilbakekreving(avsluttedeBehandlinger, values.vedtak),
  tilbakekrevingInfo: påklagdTilbakekrevingInfo(avsluttedeBehandlinger, values.vedtak),
});

interface OwnProps {
  klageVurdering: KlageVurdering;
  submitCallback: (data: KlageFormkravAp) => Promise<void>;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  alleKodeverk: AlleKodeverk;
  avsluttedeBehandlinger: AvsluttetBehandling[];
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * FormkravKlageFormKA
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for formkrav klage (KA).
 */
export const FormkravKlageFormKa: FunctionComponent<OwnProps> = ({
  readOnly,
  klageVurdering,
  readOnlySubmitButton,
  alleKodeverk,
  avsluttedeBehandlinger,
  submitCallback,
  formData,
  setFormData,
}) => {
  const initialValues = useMemo(() => buildInitialValues(klageVurdering), [klageVurdering]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, avsluttedeBehandlinger))}
      setDataOnUnmount={setFormData}
    >
      <FormkravKlageForm
        readOnly={readOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        aksjonspunktCode={aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_KA}
        alleKodeverk={alleKodeverk}
        avsluttedeBehandlinger={avsluttedeBehandlinger}
        isSubmitting={formMethods.formState.isSubmitting}
        isDirty={formMethods.formState.isDirty}
      />
    </Form>
  );
};

export default FormkravKlageFormKa;
