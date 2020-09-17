import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Hovedknapp } from 'nav-frontend-knapper';

import { VerticalSpacer } from '@fpsak-frontend/shared-components';

import PersonArbeidsforholdPanel from './PersonArbeidsforholdPanel';

interface OwnProps {
  readOnly: boolean;
  isBekreftButtonReadOnly: boolean;
  isSubmitting: boolean;
}

/**
 * BekreftOgForsettKnapp:
 * Ansvarlig for å rendre bekreft og fortsett knappen, samt disable den hvis nødvendig
 */
export const BekreftOgForsettKnapp: FunctionComponent<OwnProps> = ({
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

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
}

const mapStateToProps = (state: any, ownProps: PureOwnProps) => ({
  isBekreftButtonReadOnly: PersonArbeidsforholdPanel.isReadOnly(state, ownProps.behandlingId, ownProps.behandlingVersjon),
});

export default connect(mapStateToProps)(BekreftOgForsettKnapp);
