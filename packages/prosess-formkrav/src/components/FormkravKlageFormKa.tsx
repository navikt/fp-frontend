import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { InjectedFormProps } from 'redux-form';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { behandlingForm } from '@fpsak-frontend/form';
import { KlageVurdering, KodeverkMedNavn } from '@fpsak-frontend/types';

import FormkravKlageForm, { getPaKlagdVedtak, IKKE_PA_KLAGD_VEDTAK } from './FormkravKlageForm';
import { erTilbakekreving, påklagdTilbakekrevingInfo } from './FormkravKlageFormNfp';
import AvsluttetBehandling from '../types/avsluttetBehandlingTsType';

interface OwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  klageVurdering: KlageVurdering;
  submitCallback: (data: any) => Promise<any>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  avsluttedeBehandlinger: AvsluttetBehandling[];
}

/**
 * FormkravKlageFormKA
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for formkrav klage (KA).
 */
export const FormkravKlageFormKa: FunctionComponent<OwnProps & InjectedFormProps> = ({
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
      aksjonspunktCode={aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_KA}
      formProps={formProps}
      alleKodeverk={alleKodeverk}
      avsluttedeBehandlinger={avsluttedeBehandlinger}
    />
  </form>
);

FormkravKlageFormKa.defaultProps = {
  readOnly: true,
  readOnlySubmitButton: true,
};

type FormValues = {
  erKlagerPart: boolean;
  erFristOverholdt: boolean;
  erKonkret: boolean;
  erSignert: boolean;
  begrunnelse: boolean;
  vedtak: string;
}

export const transformValues = (values: FormValues, avsluttedeBehandlinger: AvsluttetBehandling[]) => ({
  erKlagerPart: values.erKlagerPart,
  erFristOverholdt: values.erFristOverholdt,
  erKonkret: values.erKonkret,
  erSignert: values.erSignert,
  begrunnelse: values.begrunnelse,
  kode: aksjonspunktCodes.VURDERING_AV_FORMKRAV_KLAGE_KA,
  vedtak: values.vedtak === IKKE_PA_KLAGD_VEDTAK ? null : values.vedtak,
  erTilbakekreving: erTilbakekreving(avsluttedeBehandlinger, values.vedtak),
  tilbakekrevingInfo: påklagdTilbakekrevingInfo(avsluttedeBehandlinger, values.vedtak),
});

const formName = 'FormkravKlageFormKa';

const buildInitialValues = createSelector([(ownProps: OwnProps) => ownProps.klageVurdering], (klageVurdering) => {
  const klageFormkavResultatKa = klageVurdering ? klageVurdering.klageFormkravResultatKA : null;
  return {
    vedtak: klageFormkavResultatKa ? getPaKlagdVedtak(klageFormkavResultatKa) : null,
    begrunnelse: klageFormkavResultatKa ? klageFormkavResultatKa.begrunnelse : null,
    erKlagerPart: klageFormkavResultatKa ? klageFormkavResultatKa.erKlagerPart : null,
    erKonkret: klageFormkavResultatKa ? klageFormkavResultatKa.erKlageKonkret : null,
    erFristOverholdt: klageFormkavResultatKa ? klageFormkavResultatKa.erKlagefirstOverholdt : null,
    erSignert: klageFormkavResultatKa ? klageFormkavResultatKa.erSignert : null,
  };
});

const mapStateToPropsFactory = (_initialState, initialOwnProps: OwnProps) => {
  const onSubmit = (values: FormValues) => initialOwnProps.submitCallback([transformValues(values, initialOwnProps.avsluttedeBehandlinger)]);
  return (_state, ownProps: OwnProps) => ({
    initialValues: buildInitialValues(ownProps),
    onSubmit,
  });
};

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: formName,
})(FormkravKlageFormKa));
