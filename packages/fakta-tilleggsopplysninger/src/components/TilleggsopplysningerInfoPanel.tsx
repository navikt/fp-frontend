import React, { FunctionComponent } from 'react';
import { InjectedFormProps } from 'redux-form';
import { connect } from 'react-redux';

import { behandlingForm } from '@fpsak-frontend/form';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import TilleggsopplysningerFaktaForm from './TilleggsopplysningerFaktaForm';

interface OwnProps {
  hasOpenAksjonspunkter: boolean;
  readOnly: boolean;
  behandlingId: number;
  behandlingVersjon: number;
  tilleggsopplysninger?: string;
}

// TODO (TOR) Fjern redux-form => ingen behov for det her

/**
 * TilleggsopplysningerInfoPanel
 *
 * Presentasjonskomponent. Har ansvar for å sette opp Redux Formen for Tilleggsopplysninger.
 */
export const TilleggsopplysningerInfoPanel: FunctionComponent<OwnProps & InjectedFormProps> = ({
  hasOpenAksjonspunkter,
  readOnly,
  tilleggsopplysninger,
  ...formProps
}) => (
  <form onSubmit={formProps.handleSubmit}>
    <TilleggsopplysningerFaktaForm
      readOnly={!hasOpenAksjonspunkter || readOnly}
      submitting={formProps.submitting}
      tilleggsopplysninger={tilleggsopplysninger}
    />
  </form>
);

TilleggsopplysningerInfoPanel.defaultProps = {
  tilleggsopplysninger: '',
};

const mapStateToPropsFactory = (_initialState: any, initialOwnProps: any) => {
  const onSubmit = () => initialOwnProps.submitCallback([{
    kode: aksjonspunktCodes.TILLEGGSOPPLYSNINGER,
  }]);

  return (_state: any, ownProps: any) => ({
    onSubmit,
    dirty: !ownProps.notSubmittable && ownProps.dirty,
  });
};

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: 'TilleggsopplysningerInfoPanel',
})(TilleggsopplysningerInfoPanel));
