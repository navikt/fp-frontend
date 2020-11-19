import React, { Component } from 'react';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import { KodeverkMedNavn } from '@fpsak-frontend/types';
import Kodeverk from '@fpsak-frontend/types/src/kodeverkTsType';
import VurderEndringRefusjonForm from './refusjon/VurderEndringRefusjonForm';
import FordelingForm from './FordelingForm';

const {
  FORDEL_BEREGNINGSGRUNNLAG,
  VURDER_REFUSJON_BERGRUNN,
} = aksjonspunktCodes;

const harFordelInfo = (bg) => (bg && bg.faktaOmFordeling ? bg.faktaOmFordeling.fordelBeregningsgrunnlag : false);

const harRefusjonInfo = (bg) => bg && bg.refusjonTilVurdering;

const getAksjonspunkt = (aksjonspunkter, def) => (aksjonspunkter && def ? aksjonspunkter.find((ap) => ap.definisjon.kode === def) : undefined);

type OwnProps = {
    readOnly: boolean;
    aksjonspunkter: Aksjonspunkt[];
    submitCallback: (...args: any[]) => any;
    submittable: boolean;
    behandlingId: number;
    behandlingVersjon: number;
    beregningsgrunnlag: Beregningsgrunnlag;
    alleKodeverk: {[key: string]: KodeverkMedNavn[]};
    alleMerknaderFraBeslutter: {
        notAccepted?: boolean;
    };
    behandlingType: Kodeverk;
};

interface OwnState {
  submitEnabled: boolean;
}

/**
 * FordelBeregningsgrunnlagPanel
 *
 * Har ansvar for å sette opp Redux Formen for "avklar fakta om fordeling" panel.
 */
export class FordelBeregningsgrunnlagPanel extends Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props);
    this.state = {
      submitEnabled: false,
    };
  }

  componentDidMount() {
    const { submitEnabled } = this.state;
    if (!submitEnabled) {
      this.setState({
        submitEnabled: true,
      });
    }
  }

  render() {
    const {
      props: {
        readOnly,
        aksjonspunkter,
        submitCallback,
        beregningsgrunnlag,
        behandlingId,
        behandlingVersjon,
        alleKodeverk,
        alleMerknaderFraBeslutter,
        behandlingType,
        submittable,
      },
      state: {
        submitEnabled,
      },
    } = this;
    const fordelAP = getAksjonspunkt(aksjonspunkter, FORDEL_BEREGNINGSGRUNNLAG);
    const refusjonAP = getAksjonspunkt(aksjonspunkter, VURDER_REFUSJON_BERGRUNN);
    const skalViseFordeling = fordelAP && harFordelInfo(beregningsgrunnlag);
    const skalViseRefusjon = refusjonAP && harRefusjonInfo(beregningsgrunnlag);
    return (
      <>
        {skalViseRefusjon
      && (
      <VurderEndringRefusjonForm
        submitEnabled={submitEnabled}
        submittable={submittable}
        readOnly={readOnly}
        submitCallback={submitCallback}
        behandlingId={behandlingId}
        behandlingVersjon={behandlingVersjon}
        beregningsgrunnlag={beregningsgrunnlag}
        aksjonspunkter={aksjonspunkter}
      />
      )}
        {skalViseFordeling
        && (
        <FordelingForm
          submitEnabled={submitEnabled}
          submittable={submittable}
          readOnly={readOnly}
          submitCallback={submitCallback}
          behandlingId={behandlingId}
          behandlingVersjon={behandlingVersjon}
          alleKodeverk={alleKodeverk}
          alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
          beregningsgrunnlag={beregningsgrunnlag}
          behandlingType={behandlingType}
          aksjonspunkter={aksjonspunkter}
        />
        )}
      </>
    );
  }
}

export default FordelBeregningsgrunnlagPanel;
