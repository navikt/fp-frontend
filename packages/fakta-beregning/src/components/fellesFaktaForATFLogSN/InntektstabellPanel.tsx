import React, { useState, useCallback, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import { change, FormAction } from 'redux-form';
import { Knapp } from 'nav-frontend-knapper';
import { Element } from 'nav-frontend-typografi';

import {
  VerticalSpacer, OverstyringKnapp, FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';

import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import Aksjonspunkt from '@fpsak-frontend/types/src/aksjonspunktTsType';
import styles from './InntektstabellPanel.less';

export const MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD = 'manuellOverstyringRapportertInntekt';

const {
  OVERSTYRING_AV_BEREGNINGSGRUNNLAG,
  AVKLAR_AKTIVITETER,
} = aksjonspunktCodes;

type OwnProps = {
    children: React.ReactNode | React.ReactNode[];
    tabell: React.ReactNode;
    hjelpeTekstId?: string;
    skalViseTabell?: boolean;
    kanOverstyre: boolean;
    readOnly: boolean;
    aksjonspunkter: Aksjonspunkt[];
    erOverstyrer: boolean;
};

interface DispatchProps {
  reduxFormChange: (form: string, field: string, value: any, touch?: boolean, persistentSubmitErrors?: boolean) => FormAction;
}
interface StaticFunctions {
  buildInitialValues: (erOverstyrt: boolean) => any;
}

/**
 * Inntektstabell
 *
 *
 */
export const InntektstabellPanelImpl: FunctionComponent<OwnProps & DispatchProps> & StaticFunctions = ({
  tabell,
  hjelpeTekstId,
  children,
  skalViseTabell,
  kanOverstyre,
  readOnly,
  aksjonspunkter,
  reduxFormChange,
}) => {
  const [erOverstyrt, setOverstyring] = useState(false);
  const toggleOverstyring = useCallback(() => {
    setOverstyring(!erOverstyrt);
    reduxFormChange('vurderFaktaBeregningForm', MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD, !erOverstyrt);
  }, [erOverstyrt]);
  return (
    <>
      {children}
      <div className={styles.fadeinTabell}>
        <VerticalSpacer sixteenPx />
        {skalViseTabell && (
          <>
            <FlexContainer>
              <FlexRow>
                <FlexColumn>
                  <Element className={styles.avsnittOverskrift}>
                    <FormattedMessage id="InntektstabellPanel.RapporterteInntekter" />
                  </Element>
                </FlexColumn>
                {(kanOverstyre || erOverstyrt) && (
                <FlexColumn>
                  <OverstyringKnapp
                    onClick={toggleOverstyring}
                    erOverstyrt={erOverstyrt || hasAksjonspunkt(OVERSTYRING_AV_BEREGNINGSGRUNNLAG, aksjonspunkter) || readOnly}
                  />
                </FlexColumn>
                )}
              </FlexRow>
            </FlexContainer>
            <VerticalSpacer sixteenPx />
            {hjelpeTekstId && (
              <Element>
                <FormattedMessage id={hjelpeTekstId} />
              </Element>
            )}
            {tabell}
            {erOverstyrt && (
              <Knapp
                htmlType="button"
                onClick={toggleOverstyring}
                mini
              >
                <FormattedMessage id="InntektstabellPanel.Avbryt" />
              </Knapp>
            )}
          </>
        )}
      </div>
    </>
  );
};

InntektstabellPanelImpl.buildInitialValues = (erOverstyrt) => ({
  // I revurderinger kopieres det ikke med aksjonspunkt, og derfor er det ikke nok å kun se på aksjonspunkt her
  [MANUELL_OVERSTYRING_BEREGNINGSGRUNNLAG_FIELD]: erOverstyrt,
});

InntektstabellPanelImpl.defaultProps = {
  hjelpeTekstId: undefined,
  skalViseTabell: true,
};

const getSkalKunneOverstyre = createSelector([(ownProps: OwnProps) => ownProps.erOverstyrer,
  (ownProps) => ownProps.aksjonspunkter],
(erOverstyrer, aksjonspunkter) => erOverstyrer
&& !aksjonspunkter.some((ap) => ap.definisjon.kode === AVKLAR_AKTIVITETER && isAksjonspunktOpen(ap.status.kode)));

const mapStateToProps = (state, ownProps) => ({
  kanOverstyre: getSkalKunneOverstyre(ownProps),
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    reduxFormChange: change,
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(InntektstabellPanelImpl);
