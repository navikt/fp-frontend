import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { InjectedFormProps } from 'redux-form';
import { Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { AksjonspunktHelpTextTemp, FadingPanel, VerticalSpacer } from '@fpsak-frontend/shared-components';
import {
  RadioGroupField, RadioOption, TextAreaField, behandlingForm,
  hasBehandlingFormErrorsOfType, isBehandlingFormDirty, isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import { Aksjonspunkt, AnkeVurdering, Kodeverk } from '@fpsak-frontend/types';

interface OwnProps {
  saveAnke: (data: any) => Promise<any>;
  previewCallback: (data: any) => Promise<any>;
  aksjonspunktCode: string;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  behandlingId: number;
  behandlingVersjon: number;
  ankeVurdering?: Kodeverk;
  fritekstTilBrev?: string;
}

const AnkeMerknader: FunctionComponent<OwnProps & InjectedFormProps> = ({
  readOnly,
  handleSubmit,
  readOnlySubmitButton,
  aksjonspunktCode,
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
            <RadioOption value label={{ id: 'Ankebehandling.Merknad.Merknader.Ja' }} />
            <RadioOption value={false} label={{ id: 'Ankebehandling.Merknad.Merknader.Nei' }} />
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

type FormValues = {
  erMerknaderMottatt: string;
  merknadKommentar: string;
}

const transformValues = (values: FormValues, aksjonspunktCode: string) => ({
  erMerknaderMottatt: values.erMerknaderMottatt,
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
  merknadKommentar: resultat ? resultat.merknadKommentar : null,
  erMerknaderMottatt: resultat ? resultat.erMerknaderMottatt : null,
}));

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const aksjonspunktCode = initialOwnProps.aksjonspunkter[0].definisjon.kode;
  const onSubmit = (values: FormValues) => initialOwnProps.submitCallback([transformValues(values, aksjonspunktCode)]);
  return (_state, ownProps: PureOwnProps) => ({
    aksjonspunktCode,
    initialValues: buildInitialValues(ownProps),
    ankeVurdering: ownProps.ankeVurderingResultat ? ownProps.ankeVurderingResultat.ankeVurdering : null,
    fritekstTilBrev: ownProps.ankeVurderingResultat ? ownProps.ankeVurderingResultat.fritekstTilBrev : null,
    onSubmit,
  });
};

const BehandleMerknaderForm = connect(mapStateToPropsFactory)(behandlingForm({
  form: ankeMerknaderFormName,
})(AnkeMerknader));

export default BehandleMerknaderForm;
