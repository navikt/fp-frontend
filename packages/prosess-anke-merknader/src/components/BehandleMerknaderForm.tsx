import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { InjectedFormProps } from 'redux-form';
import { Undertittel } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';

import { AksjonspunktHelpTextTemp, FadingPanel, VerticalSpacer } from '@fpsak-frontend/shared-components';
import {
  RadioGroupField, RadioOption, behandlingForm,
  hasBehandlingFormErrorsOfType, isBehandlingFormDirty, isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import { required } from '@fpsak-frontend/utils';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import { Aksjonspunkt, AnkeVurdering, Kodeverk } from '@fpsak-frontend/types';
import CheckboxField from '@fpsak-frontend/form/src/CheckboxField';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FritekstAnkeMerknaderTextField from './FritekstAnkeMerknaderTextField';

interface OwnProps {
  saveAnke: (data: any) => Promise<any>;
  previewCallback: (data: any) => Promise<any>;
  aksjonspunktCode: string;
  readOnly?: boolean;
  readOnlySubmitButton?: boolean;
  behandlingId: number;
  sprakkode: Kodeverk;
  behandlingVersjon: number;
  ankeVurdering?: Kodeverk;
}

const AnkeMerknader: FunctionComponent<OwnProps & InjectedFormProps> = ({
  readOnly,
  handleSubmit,
  readOnlySubmitButton,
  aksjonspunktCode,
  behandlingId,
  behandlingVersjon,
  sprakkode,
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
      <FritekstAnkeMerknaderTextField
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
            isSubmittable={!readOnly}
            isBehandlingFormSubmitting={isBehandlingFormSubmitting}
            isBehandlingFormDirty={isBehandlingFormDirty}
            hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
            textCode="Ankebehandling.Merknad.Merknader.LagreKommentarer"
          />
        </Column>
        {!readOnly && (
          <Column xs="3">
            <CheckboxField name="avsluttBehandling" label={<FormattedMessage id="Ankebehandling.Merknad.AvsluttBehandling" />} />
          </Column>
        )}
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
  avsluttBehandling: string;
}

const transformValues = (values: FormValues, aksjonspunktCode: string) => ({
  erMerknaderMottatt: values.erMerknaderMottatt,
  merknadKommentar: values.merknadKommentar,
  avsluttBehandling: values.avsluttBehandling,
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
  avsluttBehandling: false,
}));

const lagSubmitFn = createSelector([(ownProps: PureOwnProps) => ownProps.submitCallback],
  (submitCallback) => (values: FormValues) => submitCallback([transformValues(values, aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER)]));

const mapStateToProps = (_state, ownProps: PureOwnProps) => ({
  aksjonspunktCode: aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER,
  initialValues: buildInitialValues(ownProps),
  ankeVurdering: ownProps.ankeVurderingResultat ? ownProps.ankeVurderingResultat.ankeVurdering : null,
  onSubmit: lagSubmitFn(ownProps),
});

const BehandleMerknaderForm = connect(mapStateToProps)(behandlingForm({
  form: ankeMerknaderFormName,
})(AnkeMerknader));

export default BehandleMerknaderForm;
