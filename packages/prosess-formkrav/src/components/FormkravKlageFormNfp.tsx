import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { InjectedFormProps } from 'redux-form';
import { createSelector } from 'reselect';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { behandlingForm } from '@fpsak-frontend/form';
import { KlageVurdering, KodeverkMedNavn } from '@fpsak-frontend/types';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';

import FormkravKlageForm, { getPaKlagdVedtak, IKKE_PA_KLAGD_VEDTAK } from './FormkravKlageForm';
import AvsluttetBehandling from '../types/avsluttetBehandlingTsType';

interface OwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  klageVurdering: KlageVurdering;
  submitCallback: (data: any) => Promise<any>;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  avsluttedeBehandlinger: AvsluttetBehandling[];
}

/**
 * FormkravklageformNfp
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for formkrav klage (NFP).
 */
export const FormkravKlageFormNfpImpl: FunctionComponent<OwnProps & InjectedFormProps> = ({
  behandlingId,
  behandlingVersjon,
  readOnly,
  readOnlySubmitButton,
  alleKodeverk,
  avsluttedeBehandlinger,
  ...formProps
}) => (
  <form onSubmit={formProps.handleSubmit}>
    <FormkravKlageForm
      behandlingId={behandlingId}
      behandlingVersjon={behandlingVersjon}
      readOnly={readOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      aksjonspunktCode={aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP}
      formProps={formProps}
      alleKodeverk={alleKodeverk}
      avsluttedeBehandlinger={avsluttedeBehandlinger}
    />
  </form>
);

FormkravKlageFormNfpImpl.defaultProps = {
  readOnly: true,
  readOnlySubmitButton: true,
};

const getPåklagdBehandling = (avsluttedeBehandlinger: AvsluttetBehandling[], påklagdVedtak: string) => avsluttedeBehandlinger
  .find((behandling: AvsluttetBehandling) => behandling.id.toString() === påklagdVedtak);

export const erTilbakekreving = (avsluttedeBehandlinger: AvsluttetBehandling[], påklagdVedtak: string) => {
  const behandling = getPåklagdBehandling(avsluttedeBehandlinger, påklagdVedtak);
  return behandling && (behandling.type.kode === BehandlingType.TILBAKEKREVING || behandling.type.kode === BehandlingType.TILBAKEKREVING_REVURDERING);
};

export const påklagdTilbakekrevingInfo = (avsluttedeBehandlinger: AvsluttetBehandling[], påklagdVedtak: string) => {
  const erTilbakekrevingVedtak = erTilbakekreving(avsluttedeBehandlinger, påklagdVedtak);
  const behandling = getPåklagdBehandling(avsluttedeBehandlinger, påklagdVedtak);
  return erTilbakekrevingVedtak ? {
    tilbakekrevingUuid: behandling.uuid,
    tilbakekrevingVedtakDato: behandling.avsluttet,
    tilbakekrevingBehandlingType: behandling.type.kode,
  } : null;
};

type FormValues = {
  erKlagerPart: boolean;
  erFristOverholdt: boolean;
  erKonkret: boolean;
  erSignert: boolean;
  begrunnelse: boolean;
  vedtak: string;
}

const transformValues = (values: FormValues, avsluttedeBehandlinger: AvsluttetBehandling[]) => ({
  erKlagerPart: values.erKlagerPart,
  erFristOverholdt: values.erFristOverholdt,
  erKonkret: values.erKonkret,
  erSignert: values.erSignert,
  begrunnelse: values.begrunnelse,
  kode: aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP,
  vedtak: values.vedtak === IKKE_PA_KLAGD_VEDTAK ? null : values.vedtak,
  erTilbakekreving: erTilbakekreving(avsluttedeBehandlinger, values.vedtak),
  tilbakekrevingInfo: påklagdTilbakekrevingInfo(avsluttedeBehandlinger, values.vedtak),
});

const formName = 'FormkravKlageFormNfp';

const buildInitialValues = createSelector([(ownProps: OwnProps) => ownProps.klageVurdering],
  (klageVurdering) => {
    const klageFormkavResultatNfp = klageVurdering ? klageVurdering.klageFormkravResultatNFP : null;
    return {
      vedtak: klageFormkavResultatNfp ? getPaKlagdVedtak(klageFormkavResultatNfp) : null,
      begrunnelse: klageFormkavResultatNfp ? klageFormkavResultatNfp.begrunnelse : null,
      erKlagerPart: klageFormkavResultatNfp ? klageFormkavResultatNfp.erKlagerPart : null,
      erKonkret: klageFormkavResultatNfp ? klageFormkavResultatNfp.erKlageKonkret : null,
      erFristOverholdt: klageFormkavResultatNfp ? klageFormkavResultatNfp.erKlagefirstOverholdt : null,
      erSignert: klageFormkavResultatNfp ? klageFormkavResultatNfp.erSignert : null,
    };
  });

const lagSubmitFn = createSelector([
  (ownProps: OwnProps) => ownProps.submitCallback, (ownProps: OwnProps) => ownProps.avsluttedeBehandlinger],
(submitCallback, avsluttedeBehandlinger) => (values: FormValues) => submitCallback([transformValues(values, avsluttedeBehandlinger)]));

const mapStateToProps = (_state, ownProps: OwnProps) => ({
  initialValues: buildInitialValues(ownProps),
  readOnly: ownProps.readOnly,
  onSubmit: lagSubmitFn(ownProps),
});

const FormkravKlageFormNfp = connect(mapStateToProps)(behandlingForm({
  form: formName,
})(FormkravKlageFormNfpImpl));

export default FormkravKlageFormNfp;
