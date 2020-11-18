import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Hovedknapp } from 'nav-frontend-knapper';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';

import PersonArbeidsforholdPanel from './PersonArbeidsforholdPanel';

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  readOnly: boolean;
  isSubmitting: boolean;
}

interface MappedOwnProps {
  isBekreftButtonReadOnly: boolean;
}

/**
 * BekreftOgForsettKnapp:
 * Ansvarlig for å rendre bekreft og fortsett knappen, samt disable den hvis nødvendig
 */
export const BekreftOgForsettKnapp: FunctionComponent<PureOwnProps & MappedOwnProps> = ({
  readOnly,
  isBekreftButtonReadOnly,
  isSubmitting,
}) => (
  <>
    <VerticalSpacer twentyPx />
    <Hovedknapp
      mini
      spinner={isSubmitting}
      disabled={readOnly || isBekreftButtonReadOnly || isSubmitting}
    >
      <FormattedMessage id="FullPersonInfo.Confirm" />
    </Hovedknapp>
  </>
);

const mapStateToProps = (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
  isBekreftButtonReadOnly: PersonArbeidsforholdPanel.isReadOnly(state, ownProps.behandlingId, ownProps.behandlingVersjon),
});

export default connect(mapStateToProps)(BekreftOgForsettKnapp);
