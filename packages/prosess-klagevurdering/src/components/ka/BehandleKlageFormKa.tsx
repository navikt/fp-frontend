import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { InjectedFormProps } from 'redux-form';
import { Column, Row } from 'nav-frontend-grid';
import { Undertittel } from 'nav-frontend-typografi';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import {
  behandlingForm, behandlingFormValueSelector, hasBehandlingFormErrorsOfType, isBehandlingFormDirty, isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { KlageVurdering, Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import KlageVurderingRadioOptionsKa from './KlageVurderingRadioOptionsKa';
import FritekstBrevTextField from '../felles/FritekstKlageBrevTextField';
import PreviewKlageLink from '../felles/PreviewKlageLink';
import TempsaveKlageButton from '../felles/TempsaveKlageButton';

import styles from './behandleKlageFormKa.less';

type FormValues = {
  begrunnelse: string;
  fritekstTilBrev: string;
  klageVurdering: Kodeverk;
  klageVurderingOmgjoer: Kodeverk;
  klageMedholdArsak: Kodeverk;
};

interface OwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  previewCallback: (data: any) => Promise<any>;
  saveKlage: (data: any) => Promise<any>;
  formValues?: FormValues;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  sprakkode: Kodeverk;
}

/**
 * BehandleklageformNfp
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for behandling av klage (KA).
 */
export const BehandleKlageFormKaImpl: FunctionComponent<OwnProps & WrappedComponentProps & InjectedFormProps> = ({
  behandlingId,
  behandlingVersjon,
  readOnly,
  handleSubmit,
  saveKlage,
  previewCallback,
  readOnlySubmitButton,
  sprakkode,
  formValues,
  intl,
  alleKodeverk,
  ...formProps
}) => (
  <form onSubmit={handleSubmit}>
    <>
      <Undertittel>{intl.formatMessage({ id: 'Klage.ResolveKlage.Title' })}</Undertittel>
      <VerticalSpacer fourPx />
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={!readOnlySubmitButton}>
        {[<FormattedMessage id="Klage.ResolveKlage.HelpText" key={aksjonspunktCodes.BEHANDLE_KLAGE_NK} />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer sixteenPx />
      <KlageVurderingRadioOptionsKa
        readOnly={readOnly}
        klageVurdering={formValues.klageVurdering}
        medholdReasons={alleKodeverk[kodeverkTyper.KLAGE_MEDHOLD_ARSAK]}
      />
      <div className={styles.confirmVilkarForm}>
        <VerticalSpacer sixteenPx />
        <FritekstBrevTextField
          sprakkode={sprakkode}
          readOnly={readOnly}
        />
        <VerticalSpacer sixteenPx />
        <Row>
          <Column xs="8">
            <ProsessStegSubmitButton
              formName={formProps.form}
              behandlingId={behandlingId}
              behandlingVersjon={behandlingVersjon}
              isReadOnly={readOnly}
              isSubmittable={!readOnlySubmitButton}
              isBehandlingFormSubmitting={isBehandlingFormSubmitting}
              isBehandlingFormDirty={isBehandlingFormDirty}
              hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
            />
            {!readOnly && formValues.klageVurdering && formValues.fritekstTilBrev && (formValues.fritekstTilBrev.length > 2)
            && (
              <PreviewKlageLink
                previewCallback={previewCallback}
                fritekstTilBrev={formValues.fritekstTilBrev}
                klageVurdering={formValues.klageVurdering}
                aksjonspunktCode={aksjonspunktCodes.BEHANDLE_KLAGE_NK}
              />
            )}
          </Column>
          <Column xs="2">
            <TempsaveKlageButton
              klageVurdering={formValues.klageVurdering}
              klageMedholdArsak={formValues.klageMedholdArsak}
              klageVurderingOmgjoer={formValues.klageVurderingOmgjoer}
              fritekstTilBrev={formValues.fritekstTilBrev}
              begrunnelse={formValues.begrunnelse}
              saveKlage={saveKlage}
              readOnly={readOnly}
              aksjonspunktCode={aksjonspunktCodes.BEHANDLE_KLAGE_NK}
            />
          </Column>
        </Row>
      </div>
    </>
  </form>
);

BehandleKlageFormKaImpl.defaultProps = {
  readOnly: true,
  readOnlySubmitButton: true,
};

interface PureOwnProps {
  klageVurdering: KlageVurdering;
  submitCallback: (data: any) => Promise<any>;
  behandlingId: number;
  behandlingVersjon: number;
  readOnly: boolean;
}

export const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.klageVurdering.klageVurderingResultatNK], (klageVurderingResultat) => ({
  klageMedholdArsak: klageVurderingResultat ? klageVurderingResultat.klageMedholdArsak : null,
  klageVurderingOmgjoer: klageVurderingResultat ? klageVurderingResultat.klageVurderingOmgjoer : null,
  klageVurdering: klageVurderingResultat ? klageVurderingResultat.klageVurdering : null,
  begrunnelse: klageVurderingResultat ? klageVurderingResultat.begrunnelse : null,
  fritekstTilBrev: klageVurderingResultat ? klageVurderingResultat.fritekstTilBrev : null,
}));

export const transformValues = (values: FormValues) => ({
  klageMedholdArsak: (values.klageVurdering.kode === klageVurderingType.MEDHOLD_I_KLAGE
    || values.klageVurdering.kode === klageVurderingType.OPPHEVE_YTELSESVEDTAK) ? values.klageMedholdArsak : null,
  klageVurderingOmgjoer: values.klageVurdering.kode === klageVurderingType.MEDHOLD_I_KLAGE ? values.klageVurderingOmgjoer : null,
  klageVurdering: values.klageVurdering,
  fritekstTilBrev: values.fritekstTilBrev,
  begrunnelse: values.begrunnelse,
  kode: aksjonspunktCodes.BEHANDLE_KLAGE_NK,
});

const formName = 'BehandleKlageKaForm';

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const onSubmit = (values: FormValues) => initialOwnProps.submitCallback([transformValues(values)]);
  return (state: any, ownProps: PureOwnProps) => ({
    initialValues: buildInitialValues(ownProps),
    formValues: behandlingFormValueSelector(formName, ownProps.behandlingId, ownProps.behandlingVersjon)(
      state, 'begrunnelse', 'fritekstTilBrev', 'klageVurdering', 'klageVurderingOmgjoer', 'klageMedholdArsak',
    ) || {},
    onSubmit,
  });
};

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: formName,
})(injectIntl(BehandleKlageFormKaImpl)));
