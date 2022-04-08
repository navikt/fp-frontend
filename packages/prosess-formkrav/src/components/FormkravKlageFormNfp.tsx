import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from '@navikt/ft-form-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { KlageVurdering, AlleKodeverk } from '@fpsak-frontend/types';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { KlageFormkravAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import FormkravKlageForm, { getPaKlagdVedtak, IKKE_PA_KLAGD_VEDTAK } from './FormkravKlageForm';
import AvsluttetBehandling from '../types/avsluttetBehandlingTsType';

type FormValues = {
  erKlagerPart?: boolean;
  erFristOverholdt?: boolean;
  erKonkret?: boolean;
  erSignert?: boolean;
  begrunnelse?: string;
  vedtak?: string;
}

type TilbakekrevingInfo = {
  tilbakekrevingUuid?: string;
  tilbakekrevingVedtakDato?: string;
  tilbakekrevingBehandlingType?: string;
}

const buildInitialValues = (klageVurdering: KlageVurdering): FormValues => {
  const klageFormkavResultatNfp = klageVurdering ? klageVurdering.klageFormkravResultatNFP : null;
  return {
    vedtak: klageFormkavResultatNfp ? getPaKlagdVedtak(klageFormkavResultatNfp) : null,
    begrunnelse: klageFormkavResultatNfp ? klageFormkavResultatNfp.begrunnelse : null,
    erKlagerPart: klageFormkavResultatNfp ? klageFormkavResultatNfp.erKlagerPart : null,
    erKonkret: klageFormkavResultatNfp ? klageFormkavResultatNfp.erKlageKonkret : null,
    erFristOverholdt: klageFormkavResultatNfp ? klageFormkavResultatNfp.erKlagefirstOverholdt : null,
    erSignert: klageFormkavResultatNfp ? klageFormkavResultatNfp.erSignert : null,
  };
};

const getPåklagdBehandling = (avsluttedeBehandlinger: AvsluttetBehandling[], påklagdVedtak: string): AvsluttetBehandling => avsluttedeBehandlinger
  .find((behandling: AvsluttetBehandling) => behandling.uuid === påklagdVedtak);

export const erTilbakekreving = (avsluttedeBehandlinger: AvsluttetBehandling[], påklagdVedtak: string): boolean => {
  const behandling = getPåklagdBehandling(avsluttedeBehandlinger, påklagdVedtak);
  return behandling && (behandling.type === BehandlingType.TILBAKEKREVING || behandling.type === BehandlingType.TILBAKEKREVING_REVURDERING);
};

export const påklagdTilbakekrevingInfo = (avsluttedeBehandlinger: AvsluttetBehandling[], påklagdVedtak: string): TilbakekrevingInfo | null => {
  const erTilbakekrevingVedtak = erTilbakekreving(avsluttedeBehandlinger, påklagdVedtak);
  const behandling = getPåklagdBehandling(avsluttedeBehandlinger, påklagdVedtak);
  return erTilbakekrevingVedtak ? {
    tilbakekrevingUuid: behandling.uuid,
    tilbakekrevingVedtakDato: behandling.avsluttet,
    tilbakekrevingBehandlingType: behandling.type,
  } : null;
};

const transformValues = (values: FormValues, avsluttedeBehandlinger: AvsluttetBehandling[]): KlageFormkravAp => ({
  erKlagerPart: values.erKlagerPart,
  erFristOverholdt: values.erFristOverholdt,
  erKonkret: values.erKonkret,
  erSignert: values.erSignert,
  begrunnelse: values.begrunnelse,
  kode: aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP,
  vedtakBehandlingUuid: values.vedtak === IKKE_PA_KLAGD_VEDTAK ? null : values.vedtak,
  erTilbakekreving: erTilbakekreving(avsluttedeBehandlinger, values.vedtak),
  tilbakekrevingInfo: påklagdTilbakekrevingInfo(avsluttedeBehandlinger, values.vedtak),
});

interface OwnProps {
  klageVurdering: KlageVurdering;
  submitCallback: (data: KlageFormkravAp) => Promise<void>;
  readOnlySubmitButton?: boolean;
  alleKodeverk: AlleKodeverk;
  avsluttedeBehandlinger: AvsluttetBehandling[];
  readOnly?: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * FormkravklageformNfp
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for formkrav klage (NFP).
 */
const FormkravKlageFormNfp: FunctionComponent<OwnProps> = ({
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
        aksjonspunktCode={aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP}
        alleKodeverk={alleKodeverk}
        avsluttedeBehandlinger={avsluttedeBehandlinger}
        isSubmitting={formMethods.formState.isSubmitting}
        isDirty={formMethods.formState.isDirty}
      />
    </Form>
  );
};

export default FormkravKlageFormNfp;
