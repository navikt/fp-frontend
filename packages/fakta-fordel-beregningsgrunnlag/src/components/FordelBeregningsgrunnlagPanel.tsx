import React, { Component } from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import Beregningsgrunnlag from '@fpsak-frontend/types/src/beregningsgrunnlagTsType';
import { ArbeidsgiverOpplysningerPerId, AlleKodeverk } from '@fpsak-frontend/types';

import FordelBeregningsgrunnlagAP
  from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/FordelBeregningsgrunnlagAP';
import VurderRefusjonBeregningsgrunnlagAP
  from '@fpsak-frontend/types-avklar-aksjonspunkter/src/fakta/VurderRefusjonBeregningsgrunnlagAP';
import VurderEndringRefusjonForm from './refusjon/VurderEndringRefusjonForm';
import FordelingForm from './fordeling/FordelingForm';
import {
  FordelBeregningsgrunnlagMedAksjonspunktValues,
  VurderRefusjonValues,
} from '../types/FordelBeregningsgrunnlagPanelValues';

const {
  FORDEL_BEREGNINGSGRUNNLAG,
  VURDER_REFUSJON_BERGRUNN,
} = aksjonspunktCodes;

const harFordelInfo = (bg: Beregningsgrunnlag): boolean => (bg && bg.faktaOmFordeling ? !!bg.faktaOmFordeling.fordelBeregningsgrunnlag : false);

const harRefusjonInfo = (bg: Beregningsgrunnlag): boolean => !!(bg && bg.refusjonTilVurdering);

const getAksjonspunkt = (aksjonspunkter: Aksjonspunkt[],
  def: string): Aksjonspunkt | undefined => (aksjonspunkter && def ? aksjonspunkter.find((ap) => ap.definisjon === def) : undefined);

interface OwnProps {
  readOnly: boolean;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (aksjonspunktData: FordelBeregningsgrunnlagAP | VurderRefusjonBeregningsgrunnlagAP) => Promise<void>;
  submittable: boolean;
  beregningsgrunnlag: Beregningsgrunnlag;
  alleKodeverk: AlleKodeverk;
  behandlingType: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  formData?: FordelBeregningsgrunnlagMedAksjonspunktValues | VurderRefusjonValues;
  setFormData: (data: FordelBeregningsgrunnlagMedAksjonspunktValues | VurderRefusjonValues) => void,
}

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
        alleKodeverk,
        behandlingType,
        submittable,
        arbeidsgiverOpplysningerPerId,
        formData,
        setFormData,
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
        {skalViseRefusjon && (
        <VurderEndringRefusjonForm
          submittable={submittable}
          readOnly={readOnly}
          submitCallback={submitCallback}
          beregningsgrunnlag={beregningsgrunnlag}
          aksjonspunkter={aksjonspunkter}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          formData={formData as VurderRefusjonValues}
          setFormData={setFormData}
        />
        )}
        {skalViseFordeling && (
          <FordelingForm
            submittable={submittable}
            readOnly={readOnly}
            submitCallback={submitCallback}
            alleKodeverk={alleKodeverk}
            beregningsgrunnlag={beregningsgrunnlag}
            behandlingType={behandlingType}
            aksjonspunkter={aksjonspunkter}
            arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
            formData={formData as FordelBeregningsgrunnlagMedAksjonspunktValues}
            setFormData={setFormData}
          />
        )}
      </>
    );
  }
}

export default FordelBeregningsgrunnlagPanel;
