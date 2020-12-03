import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Column, Row } from 'nav-frontend-grid';
import { Undertittel } from 'nav-frontend-typografi';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import klageVurderingType from '@fpsak-frontend/kodeverk/src/klageVurdering';
import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { ProsessStegBegrunnelseTextField, ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import {
  behandlingForm, behandlingFormValueSelector, hasBehandlingFormErrorsOfType, isBehandlingFormDirty, isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import { KlageVurdering, Kodeverk, KodeverkMedNavn } from '@fpsak-frontend/types';

import KlageVurderingRadioOptionsNfp from './KlageVurderingRadioOptionsNfp';
import FritekstBrevTextField from '../felles/FritekstKlageBrevTextField';
import PreviewKlageLink, { BrevData } from '../felles/PreviewKlageLink';
import TempsaveKlageButton, { TransformedValues } from '../felles/TempsaveKlageButton';

import styles from './behandleKlageFormNfp.less';

type FormValues = {
  klageVurdering?: Kodeverk;
  fritekstTilBrev?: string;
  klageMedholdArsak?: Kodeverk;
  klageVurderingOmgjoer?: Kodeverk;
  begrunnelse?: string;
};

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  previewCallback: (data: BrevData) => Promise<any>;
  saveKlage: (data: TransformedValues) => Promise<any>;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  sprakkode: Kodeverk;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  klageVurdering: KlageVurdering;
  submitCallback: (data: any) => Promise<any>;
}

interface MappedOwnProps {
  initialValues: FormValues;
  formValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
}

/**
 * BehandleklageformNfp
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for behandling av klage (NFP).
 */
export const BehandleKlageFormNfpImpl: FunctionComponent<PureOwnProps & MappedOwnProps & WrappedComponentProps & InjectedFormProps> = ({
  behandlingId,
  behandlingVersjon,
  readOnly,
  handleSubmit,
  previewCallback,
  saveKlage,
  readOnlySubmitButton,
  sprakkode,
  formValues,
  intl,
  alleKodeverk,
  ...formProps
}) => (
  <form onSubmit={handleSubmit}>
    <Undertittel>{intl.formatMessage({ id: 'Klage.ResolveKlage.Title' })}</Undertittel>
    <VerticalSpacer fourPx />
    <AksjonspunktHelpTextTemp isAksjonspunktOpen={!readOnlySubmitButton}>
      {[<FormattedMessage id="Klage.ResolveKlage.HelpText" key={aksjonspunktCodes.BEHANDLE_KLAGE_NFP} />]}
    </AksjonspunktHelpTextTemp>
    <VerticalSpacer sixteenPx />
    <KlageVurderingRadioOptionsNfp
      readOnly={readOnly}
      klageVurdering={formValues.klageVurdering}
      medholdReasons={alleKodeverk[kodeverkTyper.KLAGE_MEDHOLD_ARSAK]}
    />
    <div className={styles.confirmVilkarForm}>
      <ProsessStegBegrunnelseTextField
        readOnly={readOnly}
        textCode="BehandleKlageFormNfp.BegrunnelseForKlage"
      />
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
                aksjonspunktCode={aksjonspunktCodes.BEHANDLE_KLAGE_NFP}
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
            aksjonspunktCode={aksjonspunktCodes.BEHANDLE_KLAGE_NFP}
          />
        </Column>
      </Row>
    </div>
  </form>
);

BehandleKlageFormNfpImpl.defaultProps = {
  readOnly: true,
  readOnlySubmitButton: true,
};

export const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.klageVurdering.klageVurderingResultatNFP], (klageVurderingResultat): FormValues => ({
  klageMedholdArsak: klageVurderingResultat ? klageVurderingResultat.klageMedholdArsak : null,
  klageVurderingOmgjoer: klageVurderingResultat ? klageVurderingResultat.klageVurderingOmgjoer : null,
  klageVurdering: klageVurderingResultat ? klageVurderingResultat.klageVurdering : null,
  begrunnelse: klageVurderingResultat ? klageVurderingResultat.begrunnelse : null,
  fritekstTilBrev: klageVurderingResultat ? klageVurderingResultat.fritekstTilBrev : null,
}));

export const transformValues = (values: FormValues): any => ({
  klageMedholdArsak: (values.klageVurdering.kode === klageVurderingType.MEDHOLD_I_KLAGE
    || values.klageVurdering.kode === klageVurderingType.OPPHEVE_YTELSESVEDTAK) ? values.klageMedholdArsak : null,
  klageVurderingOmgjoer: values.klageVurdering.kode === klageVurderingType.MEDHOLD_I_KLAGE ? values.klageVurderingOmgjoer : null,
  klageVurdering: values.klageVurdering,
  fritekstTilBrev: values.fritekstTilBrev,
  begrunnelse: values.begrunnelse,
  kode: aksjonspunktCodes.BEHANDLE_KLAGE_NFP,
});

const formName = 'BehandleKlageNfpForm';

const lagSubmitFn = createSelector([(ownProps: PureOwnProps) => ownProps.submitCallback],
  (submitCallback) => (values: FormValues) => submitCallback([transformValues(values)]));

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  initialValues: buildInitialValues(ownProps),
  formValues: behandlingFormValueSelector(formName, ownProps.behandlingId, ownProps.behandlingVersjon)(state,
    'klageVurdering', 'begrunnelse', 'fritekstTilBrev', 'klageMedholdArsak', 'klageVurderingOmgjoer') || {},
  onSubmit: lagSubmitFn(ownProps),
});

export default connect(mapStateToProps)(behandlingForm({
  form: formName,
})(injectIntl(BehandleKlageFormNfpImpl)));
