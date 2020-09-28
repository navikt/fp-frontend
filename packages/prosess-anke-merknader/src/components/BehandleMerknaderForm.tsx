import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { InjectedFormProps } from 'redux-form';
import { Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { AksjonspunktHelpTextTemp, FadingPanel, VerticalSpacer } from '@fpsak-frontend/shared-components';
import {
  RadioGroupField, RadioOption, TextAreaField, behandlingForm, behandlingFormValueSelector,
  hasBehandlingFormErrorsOfType, isBehandlingFormDirty, isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import { Aksjonspunkt, AnkeVurdering } from '@fpsak-frontend/types';

import PreviewAnkeLink from './PreviewAnkeLink';

type FormValuesUttrekk = {
  ankeVurdering?: string;
  fritekstTilBrev?: string;
}

type FormValues = {
  erMerknaderMottatt: string;
  merknadKommentar: string;
} & FormValuesUttrekk

interface OwnProps {
  saveAnke: (data: any) => Promise<any>;
  previewCallback: (data: any) => Promise<any>;
  aksjonspunktCode: string;
  formValues?: FormValuesUttrekk;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  behandlingId: number;
  behandlingVersjon: number;
}

const AnkeMerknader: FunctionComponent<OwnProps & InjectedFormProps> = ({
  readOnly,
  handleSubmit,
  previewCallback,
  readOnlySubmitButton,
  aksjonspunktCode,
  formValues,
  behandlingId,
  behandlingVersjon,
  ...formProps
}) => (
  <form onSubmit={handleSubmit}>
    <FadingPanel>
      <Undertittel><FormattedMessage id="Ankebehandling.Merknad.Title" /></Undertittel>
      <VerticalSpacer fourPx />
      <AksjonspunktHelpTextTemp isAksjonspunktOpen={!readOnlySubmitButton}>
        {[<FormattedMessage id="Ankebehandling.Merknad.HelpText" key={aksjonspunktCode} />]}
      </AksjonspunktHelpTextTemp>
      <VerticalSpacer sixteenPx />
      <Row>
        <Column xs="7">
          <FormattedMessage id="Ankebehandling.Merknad.Merknader" />
          <RadioGroupField
            name="erMerknaderMottatt"
            validate={[required]}
            direction="horizontal"
            readOnly={readOnly}
          >
            <RadioOption value="ja" label={{ id: 'Ankebehandling.Merknad.Merknader.Ja' }} />
            <RadioOption value="nei" label={{ id: 'Ankebehandling.Merknad.Merknader.Nei' }} />
          </RadioGroupField>
        </Column>
      </Row>

      <VerticalSpacer sixteenPx />
      <Row>
        <Column xs="7">
          <TextAreaField readOnly={readOnly} label={{ id: 'Ankebehandling.Merknad.Merknader.Kommentarer' }} name="merknadKommentar" />
        </Column>
      </Row>
      <VerticalSpacer sixteenPx />
      <Row>
        <Column xs="8">
          <ProsessStegSubmitButton
            formName={formProps.form}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            isReadOnly={readOnly}
            isSubmittable={!readOnly}
            hasEmptyRequiredFields={false}
            isBehandlingFormSubmitting={isBehandlingFormSubmitting}
            isBehandlingFormDirty={isBehandlingFormDirty}
            hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
          />
          <PreviewAnkeLink
            previewCallback={previewCallback}
            fritekstTilBrev={formValues.fritekstTilBrev}
            ankeVurdering={formValues.ankeVurdering}
            aksjonspunktCode={aksjonspunktCode}
          />
        </Column>
      </Row>
    </FadingPanel>
  </form>
);

AnkeMerknader.defaultProps = {
  readOnly: true,
  readOnlySubmitButton: true,
};

const ankeMerknaderFormName = 'ankeMerknaderForm';

const transformValues = (values: FormValues, aksjonspunktCode: string) => ({
  erMerknaderMottatt: values.erMerknaderMottatt === 'ja',
  merknadKommentar: values.merknadKommentar,
  kode: aksjonspunktCode,
});

interface PureOwnProps {
  ankeVurderingResultat: AnkeVurdering['ankeVurderingResultat'];
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: any) => Promise<any>;
  behandlingId: number;
  behandlingVersjon: number;
}

const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.ankeVurderingResultat], (resultat) => ({
  ankeVurdering: resultat ? resultat.ankeVurdering : null,
  begrunnelse: resultat ? resultat.begrunnelse : null,
  fritekstTilBrev: resultat ? resultat.fritekstTilBrev : null,
}));

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const aksjonspunktCode = initialOwnProps.aksjonspunkter[0].definisjon.kode;
  const onSubmit = (values: FormValues) => initialOwnProps.submitCallback([transformValues(values, aksjonspunktCode)]);
  return (state: any, ownProps: PureOwnProps) => ({
    aksjonspunktCode,
    initialValues: buildInitialValues(ownProps),
    formValues: behandlingFormValueSelector(ankeMerknaderFormName, ownProps.behandlingId, ownProps.behandlingVersjon)(state,
      'ankeVurdering', 'fritekstTilBrev') || {},
    onSubmit,
  });
};

const BehandleMerknaderForm = connect(mapStateToPropsFactory)(behandlingForm({
  form: ankeMerknaderFormName,
})(AnkeMerknader));

export default BehandleMerknaderForm;
