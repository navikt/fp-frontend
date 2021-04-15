import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Form, InjectedFormProps } from 'redux-form';
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
import { KlageVurderingResultatAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import KlageVurderingRadioOptionsKa from './KlageVurderingRadioOptionsKa';
import FritekstBrevTextField from '../felles/FritekstKlageBrevTextField';
import PreviewKlageLink, { BrevData } from '../felles/PreviewKlageLink';
import TempsaveKlageButton, { TransformedValues } from '../felles/TempsaveKlageButton';

import styles from './behandleKlageFormKa.less';

export const transformValues = (values: FormValues): KlageVurderingResultatAp => ({
  klageMedholdArsak: (values.klageVurdering.kode === klageVurderingType.MEDHOLD_I_KLAGE
    || values.klageVurdering.kode === klageVurderingType.OPPHEVE_YTELSESVEDTAK) ? values.klageMedholdArsak : null,
  klageVurderingOmgjoer: values.klageVurdering.kode === klageVurderingType.MEDHOLD_I_KLAGE ? values.klageVurderingOmgjoer : null,
  klageVurdering: values.klageVurdering,
  fritekstTilBrev: values.fritekstTilBrev,
  begrunnelse: values.begrunnelse,
  kode: aksjonspunktCodes.BEHANDLE_KLAGE_NK,
});

type FormValues = {
  begrunnelse?: string;
  fritekstTilBrev?: string;
  klageVurdering?: Kodeverk;
  klageVurderingOmgjoer?: Kodeverk;
  klageMedholdArsak?: Kodeverk;
};

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  previewCallback: (data: BrevData) => Promise<any>;
  saveKlage: (data: TransformedValues) => Promise<any>;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  sprakkode: Kodeverk;
  submitCallback: (data: KlageVurderingResultatAp) => Promise<void>;
  klageVurdering: KlageVurdering;
}

interface MappedOwnProps {
  initialValues: FormValues;
  formValues: FormValues;
}

/**
 * BehandleklageformNfp
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for behandling av klage (KA).
 */
export const BehandleKlageFormKaImpl: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
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
  submitCallback,
  ...formProps
}) => (
  <Form onSubmit={handleSubmit((values: FormValues) => submitCallback(transformValues(values)))}>
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
              saveKlage={saveKlage}
              readOnly={readOnly}
              aksjonspunktCode={aksjonspunktCodes.BEHANDLE_KLAGE_NK}
              handleSubmit={handleSubmit}
            />
          </Column>
        </Row>
      </div>
    </>
  </Form>
);

BehandleKlageFormKaImpl.defaultProps = {
  readOnly: true,
  readOnlySubmitButton: true,
};

export const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.klageVurdering.klageVurderingResultatNK], (klageVurderingResultat): FormValues => ({
  klageMedholdArsak: klageVurderingResultat ? klageVurderingResultat.klageMedholdArsak : null,
  klageVurderingOmgjoer: klageVurderingResultat ? klageVurderingResultat.klageVurderingOmgjoer : null,
  klageVurdering: klageVurderingResultat ? klageVurderingResultat.klageVurdering : null,
  begrunnelse: klageVurderingResultat ? klageVurderingResultat.begrunnelse : null,
  fritekstTilBrev: klageVurderingResultat ? klageVurderingResultat.fritekstTilBrev : null,
}));

const formName = 'BehandleKlageKaForm';

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  initialValues: buildInitialValues(ownProps),
  formValues: behandlingFormValueSelector(formName, ownProps.behandlingId, ownProps.behandlingVersjon)(
    state, 'begrunnelse', 'fritekstTilBrev', 'klageVurdering', 'klageVurderingOmgjoer', 'klageMedholdArsak',
  ) || {},
});

export default connect(mapStateToProps)(behandlingForm({
  form: formName,
})(injectIntl(BehandleKlageFormKaImpl)));
