import React, { Component } from 'react';
import { ArbeidsgiverOpplysningerPerId, Feriepengegrunnlag, KodeverkMedNavn } from '@fpsak-frontend/types';
import { FeriepengerPanel } from './FeriepengerPanel';

interface OwnProps {
  feriepengegrunnlag: Feriepengegrunnlag;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

interface OwnState {
  panelErÅpent: boolean;
}

class FeriepengerIndex extends Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props);
    this.state = {
      panelErÅpent: false,
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    const { panelErÅpent } = this.state;
    if (panelErÅpent) {
      this.setState({ panelErÅpent: false });
    } else {
      this.setState({ panelErÅpent: true });
    }
  }

  render() {
    const {
      feriepengegrunnlag,
      alleKodeverk,
      arbeidsgiverOpplysningerPerId,
    } = this.props;
    const { panelErÅpent } = this.state;
    if (!feriepengegrunnlag) {
      return null;
    }
    return (
      <>
        <FeriepengerPanel
          feriepengegrunnlag={feriepengegrunnlag}
          alleKodeverk={alleKodeverk}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          erPanelÅpent={panelErÅpent}
          togglePanel={this.togglePanel}
        />
      </>
    );
  }
}

export default FeriepengerIndex;
