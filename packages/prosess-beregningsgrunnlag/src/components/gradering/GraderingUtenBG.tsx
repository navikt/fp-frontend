import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { InjectedFormProps } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { Element } from 'nav-frontend-typografi';
import { Column, Row } from 'nav-frontend-grid';
import { BeregningsgrunnlagAndel } from '@fpsak-frontend/types';
import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import {
  behandlingForm, RadioGroupField, RadioOption, TextAreaField, hasBehandlingFormErrorsOfType, isBehandlingFormDirty, isBehandlingFormSubmitting,
} from '@fpsak-frontend/form';
import {
  hasValidText, maxLength, minLength, required, getKodeverknavnFn,
} from '@fpsak-frontend/utils';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { AksjonspunktHelpTextHTML, VerticalSpacer } from '@fpsak-frontend/shared-components';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';
import aksjonspunktStatus, { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import createVisningsnavnForAktivitet from '../../util/visningsnavnHelper';
import AvsnittSkiller from '../redesign/AvsnittSkiller';

import styles from './graderingUtenBG.less';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

const formName = 'graderingUtenBGForm';
const begrunnelseFieldName = 'begrunnelse';
const radioFieldName = 'graderingUtenBGSettPaaVent';

const bestemVisning = (andel, getKodeverknavn) => {
  if (andel.arbeidsforhold && andel.aktivitetStatus && andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER) {
    return createVisningsnavnForAktivitet(andel.arbeidsforhold, getKodeverknavn);
  }
  const navn = getKodeverknavn(andel.aktivitetStatus);
  return andel.aktivitetStatus && navn ? navn.toLowerCase() : '';
};

const lagArbeidsgiverString = (andelerMedGraderingUtenBG, getKodeverknavn) => {
  if (!andelerMedGraderingUtenBG || andelerMedGraderingUtenBG.length < 1) {
    return '';
  }
  if (andelerMedGraderingUtenBG.length === 1) {
    return bestemVisning(andelerMedGraderingUtenBG[0], getKodeverknavn);
  }
  const arbeidsgiverVisningsnavn = andelerMedGraderingUtenBG.map((andel) => bestemVisning(andel, getKodeverknavn));
  const sisteNavn = arbeidsgiverVisningsnavn.splice(andelerMedGraderingUtenBG.length - 1);
  const tekst = arbeidsgiverVisningsnavn.join(', ');
  return `${tekst} og ${sisteNavn}`;
};

const lagAksjonspunktViser = (aksjonspunktTekstId, andelerMedGraderingUtenBG, getKodeverknavn) => {
  if (aksjonspunktTekstId === undefined || aksjonspunktTekstId === null) {
    return undefined;
  }
  return (
    <AksjonspunktHelpTextHTML>
      <FormattedMessage
        key="GradringAksjonspunktHP"
        id={aksjonspunktTekstId}
        values={{ arbeidsforholdTekst: lagArbeidsgiverString(andelerMedGraderingUtenBG, getKodeverknavn) }}
      />
    </AksjonspunktHelpTextHTML>
  );
};

type OwnProps = {
    readOnly: boolean;
    andelerMedGraderingUtenBG: BeregningsgrunnlagAndel[];
    submitCallback: (...args: any[]) => any;
    aksjonspunkter: Aksjonspunkt[];
    getKodeverknavn: (...args: any[]) => any;
    behandlingId: number;
    behandlingVersjon: number;
};

/**
 * Komponent som håndterte løsning av aksjonspunkt 5050.
 * Dette aksjonspunktet ble opprettet for å manuelt håndtere en svakhet i løsningen.
 * Denne svakheten er blitt rettet og det skal ikke lenger være mulig å løse aksjonspunktet.
 * Vi må fortsatt støtte visning av saker.
 * // TODO se om vi kan rydde bort all innsendingslogikk her
 */
export const GraderingUtenBG: FunctionComponent<OwnProps & InjectedFormProps> = ({
  andelerMedGraderingUtenBG,
  readOnly,
  aksjonspunkter,
  getKodeverknavn,
  behandlingId,
  behandlingVersjon,
  ...formProps
}) => {
  const aksjonspunkt = aksjonspunkter
    ? aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG)
    : undefined;
  if (!aksjonspunkt || !andelerMedGraderingUtenBG || andelerMedGraderingUtenBG.length === 0) {
    return null;
  }
  const aksjonspunktTekstId = andelerMedGraderingUtenBG.length > 1
    ? 'Beregningsgrunnlag.Gradering.AksjonspunkttekstFlereForhold'
    : 'Beregningsgrunnlag.Gradering.AksjonspunkttekstEtForhold';

  return (
    <form onSubmit={formProps.handleSubmit} className={styles.graderingForm}>

      <AvsnittSkiller luftOver luftUnder dividerParagraf />

      <>
        { lagAksjonspunktViser(aksjonspunktTekstId, andelerMedGraderingUtenBG, getKodeverknavn)}
        <VerticalSpacer sixteenPx />
      </>
      <Element>
        <FormattedMessage id="Beregningsgrunnlag.Gradering.Tittel" />
      </Element>
      <VerticalSpacer sixteenPx />
      <Row>
        <Column xs="9">
          <RadioGroupField
            name={radioFieldName}
            validate={[required]}
            direction="vertical"
            readOnly={readOnly}
            isEdited={!isAksjonspunktOpen(aksjonspunkt.status.kode)}
          >
            <RadioOption
              label={<FormattedMessage id="Beregningsgrunnlag.Gradering.FordelingErRiktig" />}
              value={false}
            />
            <RadioOption
              label={<FormattedMessage id="Beregningsgrunnlag.Gradering.FordelingMåVurderes" />}
              value
            />
          </RadioGroupField>
        </Column>
      </Row>
      <Row>
        <Column xs="6">
          <TextAreaField
            name={begrunnelseFieldName}
            label={<FormattedMessage id="Beregningsgrunnlag.Forms.Vurdering" />}
            validate={[required, maxLength1500, minLength3, hasValidText]}
            maxLength={1500}
            readOnly={readOnly}
          />
        </Column>
      </Row>
      <Row>
        <Column xs="1">
          <VerticalSpacer eightPx />
          <ProsessStegSubmitButton
            formName={formProps.form}
            isReadOnly={readOnly}
            isSubmittable={!readOnly}
            behandlingId={behandlingId}
            behandlingVersjon={behandlingVersjon}
            isBehandlingFormSubmitting={isBehandlingFormSubmitting}
            isBehandlingFormDirty={isBehandlingFormDirty}
            hasBehandlingFormErrorsOfType={hasBehandlingFormErrorsOfType}
          />
        </Column>
      </Row>
    </form>
  );
};

export const transformValues = (values) => {
  const skalSettesPaaVent = values[radioFieldName];
  const begrunnelse = values[begrunnelseFieldName];
  return {
    kode: aksjonspunktCodes.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG,
    begrunnelse,
    skalSettesPaaVent,
  };
};

export const buildInitialValues = createSelector(
  [(state, ownProps) => ownProps.venteaarsakKode,
    (state, ownProps) => ownProps.aksjonspunkter], (
    venteKode, aksjonspunkter,
  ) => {
    const vurderGraderingUtenBGAP = aksjonspunkter
      ? aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.VURDER_GRADERING_UTEN_BEREGNINGSGRUNNLAG)
      : undefined;
    const settPaaVentAap = aksjonspunkter
      ? aksjonspunkter.find((ap) => ap.definisjon.kode === aksjonspunktCodes.AUTO_VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG)
      : undefined;
    if (!vurderGraderingUtenBGAP || vurderGraderingUtenBGAP.status.kode !== aksjonspunktStatus.UTFORT) {
      return undefined;
    }
    if (!settPaaVentAap) {
      return {
        graderingUtenBGSettPaaVent: false,
        begrunnelse: vurderGraderingUtenBGAP.begrunnelse,
      };
    }
    if (settPaaVentAap.status.kode === aksjonspunktStatus.UTFORT) {
      return {
        graderingUtenBGSettPaaVent: false,
        begrunnelse: vurderGraderingUtenBGAP.begrunnelse,
      };
    }
    if (venteKode && venteKode === venteArsakType.VENT_GRADERING_UTEN_BEREGNINGSGRUNNLAG) {
      return {
        graderingUtenBGSettPaaVent: true,
        begrunnelse: vurderGraderingUtenBGAP.begrunnelse,
      };
    }
    return undefined;
  },
);

const lagSubmitFn = createSelector([(ownProps: OwnProps) => ownProps.submitCallback],
  (submitCallback) => (values) => submitCallback([transformValues(values)]));

const mapStateToPropsFactory = (initialState, defaultOwnProps) => {
  const getKodeverknavn = getKodeverknavnFn(defaultOwnProps.alleKodeverk, kodeverkTyper);
  return (state, ownProps) => {
    const initialValues = buildInitialValues(state, ownProps);
    return ({
      onSubmit: lagSubmitFn(ownProps),
      getKodeverknavn,
      initialValues,
    });
  };
};

export default connect(mapStateToPropsFactory)(behandlingForm({
  form: formName,
  enableReinitialize: true,
})(GraderingUtenBG));
