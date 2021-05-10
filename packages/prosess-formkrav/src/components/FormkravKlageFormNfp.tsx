import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { createSelector } from 'reselect';

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

interface PureOwnProps {
  klageVurdering: KlageVurdering;
  submitCallback: (data: KlageFormkravAp) => Promise<void>;
  readOnlySubmitButton?: boolean;
  alleKodeverk: AlleKodeverk;
  avsluttedeBehandlinger: AvsluttetBehandling[];
  readOnly?: boolean;
}

interface MappedOwnProps {
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

/**
 * FormkravklageformNfp
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for formkrav klage (NFP).
 */
export const FormkravKlageFormNfpImpl: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  readOnly,
  readOnlySubmitButton,
  alleKodeverk,
  avsluttedeBehandlinger,
  ...formProps
}) => (
  <form onSubmit={formProps.handleSubmit}>
    <FormkravKlageForm
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

const getPåklagdBehandling = (avsluttedeBehandlinger: AvsluttetBehandling[], påklagdVedtak: string): AvsluttetBehandling => avsluttedeBehandlinger
  .find((behandling: AvsluttetBehandling) => behandling.uuid === påklagdVedtak);

export const erTilbakekreving = (avsluttedeBehandlinger: AvsluttetBehandling[], påklagdVedtak: string): boolean => {
  const behandling = getPåklagdBehandling(avsluttedeBehandlinger, påklagdVedtak);
  return behandling && (behandling.type.kode === BehandlingType.TILBAKEKREVING || behandling.type.kode === BehandlingType.TILBAKEKREVING_REVURDERING);
};

type TilbakekrevingInfo = {
  tilbakekrevingUuid?: string;
  tilbakekrevingVedtakDato?: string;
  tilbakekrevingBehandlingType?: string;
}

export const påklagdTilbakekrevingInfo = (avsluttedeBehandlinger: AvsluttetBehandling[], påklagdVedtak: string): TilbakekrevingInfo | null => {
  const erTilbakekrevingVedtak = erTilbakekreving(avsluttedeBehandlinger, påklagdVedtak);
  const behandling = getPåklagdBehandling(avsluttedeBehandlinger, påklagdVedtak);
  return erTilbakekrevingVedtak ? {
    tilbakekrevingUuid: behandling.uuid,
    tilbakekrevingVedtakDato: behandling.avsluttet,
    tilbakekrevingBehandlingType: behandling.type.kode,
  } : null;
};

const transformValues = (values: FormValues, avsluttedeBehandlinger: AvsluttetBehandling[]): KlageFormkravAp => ({
  erKlagerPart: values.erKlagerPart,
  erFristOverholdt: values.erFristOverholdt,
  erKonkret: values.erKonkret,
  erSignert: values.erSignert,
  begrunnelse: values.begrunnelse,
  kode: aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_NFP,
  vedtak: values.vedtak === IKKE_PA_KLAGD_VEDTAK ? null : Number.parseInt(values.vedtak, 10),
  erTilbakekreving: erTilbakekreving(avsluttedeBehandlinger, values.vedtak),
  tilbakekrevingInfo: påklagdTilbakekrevingInfo(avsluttedeBehandlinger, values.vedtak),
});

const formName = 'FormkravKlageFormNfp';

const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.klageVurdering],
  (klageVurdering): FormValues => {
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
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.avsluttedeBehandlinger],
(submitCallback, avsluttedeBehandlinger) => (values: FormValues) => submitCallback(transformValues(values, avsluttedeBehandlinger)));

const mapStateToProps = (_state, ownProps: PureOwnProps): MappedOwnProps => ({
  initialValues: buildInitialValues(ownProps),
  onSubmit: lagSubmitFn(ownProps),
});

const FormkravKlageFormNfp = connect(mapStateToProps)(reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(FormkravKlageFormNfpImpl));

export default FormkravKlageFormNfp;
