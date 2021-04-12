import React, { FunctionComponent, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { InjectedFormProps } from 'redux-form';
import { createSelector } from 'reselect';
import { Normaltekst } from 'nav-frontend-typografi';
import { Hovedknapp } from 'nav-frontend-knapper';

import {
  ArrowBox,
  FlexColumn, FlexContainer, FlexRow, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import {
  ariaCheck, hasValidText, maxLength, minLength, required,
} from '@fpsak-frontend/utils';
import {
  RadioGroupField, RadioOption, TextAreaField, behandlingForm, behandlingFormValueSelector,
} from '@fpsak-frontend/form';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import {
  Risikoklassifisering, Aksjonspunkt, KodeverkMedNavn,
} from '@fpsak-frontend/types';
import { VurderFaresignalerAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import faresignalVurdering from '../kodeverk/faresignalVurdering';

import styles from './avklarFaresignalerForm.less';

const maxLength1500 = maxLength(1500);
const minLength3 = minLength(3);

const formName = 'avklarFaresignalerForm';
export const begrunnelseFieldName = 'begrunnelse';
export const vurderingerHovedkategori = 'vurderingerHovedkategori';
export const ikkeReelleVurderingerUnderkategori = 'ikkeReelleVurderingerUnderkategori';

type Values = {
  [begrunnelseFieldName]?: string;
  [vurderingerHovedkategori]?: string;
  [ikkeReelleVurderingerUnderkategori]?: string;
}

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  aksjonspunkt?: Aksjonspunkt;
  readOnly: boolean;
  risikoklassifisering?: Risikoklassifisering;
  submitCallback: (data: VurderFaresignalerAp) => Promise<void>;
  faresignalVurderinger: KodeverkMedNavn[];
}

interface MappedOwnProps {
  initialValues: Values;
  onSubmit: (values: Values) => void;
  harValgtReelle: boolean;
}

/**
 * IngenRisikoPanel
 *
 * Presentasjonskomponent. Statisk visning av panel som tilsier ingen faresignaler funnet i behandlingen.
 */
export const AvklarFaresignalerForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  readOnly,
  aksjonspunkt,
  faresignalVurderinger,
  harValgtReelle,
  ...formProps
}) => {
  const underkategoriFaresignalVurderinger = useMemo(() => faresignalVurderinger
    .filter((vurdering) => vurdering.kode !== faresignalVurdering.INNVIRKNING && vurdering.kode !== faresignalVurdering.INGEN_INNVIRKNING),
  []);

  return (
    <FlexContainer>
      <form onSubmit={formProps.handleSubmit}>
        <FlexRow>
          <FlexColumn className={styles.fullWidth}>
            <TextAreaField
              name={begrunnelseFieldName}
              label={<FormattedMessage id="Risikopanel.Forms.Vurdering" />}
              validate={[required, maxLength1500, minLength3, hasValidText]}
              maxLength={1500}
              readOnly={readOnly}
            />
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn>
            <Normaltekst><FormattedMessage id="Risikopanel.Form.Resultat" /></Normaltekst>
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer eightPx />
        <FlexRow>
          <FlexColumn>
            <RadioGroupField
              name={vurderingerHovedkategori}
              validate={[required]}
              direction="vertical"
              readOnly={readOnly}
              isEdited={!isAksjonspunktOpen(aksjonspunkt.status.kode)}
            >
              <RadioOption
                label={faresignalVurderinger.find((vurdering) => vurdering.kode === faresignalVurdering.INNVIRKNING)?.navn}
                value={faresignalVurdering.INNVIRKNING}
              >
                <>
                  {harValgtReelle && (
                  <ArrowBox alignOffset={20}>
                    <RadioGroupField
                      name={ikkeReelleVurderingerUnderkategori}
                      validate={[required]}
                      direction="vertical"
                      readOnly={readOnly}
                    >
                      {underkategoriFaresignalVurderinger.map((vurdering) => (
                        <RadioOption
                          key={vurdering.kode}
                          label={vurdering.navn}
                          value={vurdering.kode}
                        />
                      ))}
                    </RadioGroupField>
                  </ArrowBox>
                  )}
                </>
              </RadioOption>
              <RadioOption
                label={faresignalVurderinger.find((vurdering) => vurdering.kode === faresignalVurdering.INGEN_INNVIRKNING)?.navn}
                value={faresignalVurdering.INGEN_INNVIRKNING}
              />
            </RadioGroupField>
          </FlexColumn>
        </FlexRow>
        <VerticalSpacer sixteenPx />
        <FlexRow>
          <FlexColumn>
            <Hovedknapp
              mini
              spinner={formProps.submitting}
              disabled={!formProps.dirty || readOnly || formProps.submitting}
              onClick={ariaCheck}
            >
              <FormattedMessage id="Risikopanel.Form.Bekreft" />
            </Hovedknapp>
          </FlexColumn>
        </FlexRow>
      </form>
    </FlexContainer>
  );
};

export const buildInitialValues = createSelector([
  (ownProps: PureOwnProps) => ownProps.risikoklassifisering,
  (ownProps: PureOwnProps) => ownProps.aksjonspunkt], (risikoklassifisering, aksjonspunkt): Values => {
  if (aksjonspunkt && aksjonspunkt.begrunnelse && risikoklassifisering && risikoklassifisering.faresignalVurdering) {
    const { kode } = risikoklassifisering.faresignalVurdering;
    return {
      [begrunnelseFieldName]: aksjonspunkt.begrunnelse,
      [vurderingerHovedkategori]: kode === faresignalVurdering.INGEN_INNVIRKNING ? faresignalVurdering.INGEN_INNVIRKNING : faresignalVurdering.INNVIRKNING,
      [ikkeReelleVurderingerUnderkategori]: kode === faresignalVurdering.INGEN_INNVIRKNING ? undefined : kode,
    };
  }
  return undefined;
});

const utledFaresignalVurderingVerdi = (vurderingHovedkategori: string, vurderingUnderkategori: string): string => (
  vurderingHovedkategori === faresignalVurdering.INGEN_INNVIRKNING ? faresignalVurdering.INGEN_INNVIRKNING : vurderingUnderkategori);

const transformValues = (values: Values): VurderFaresignalerAp => ({
  kode: aksjonspunktCodes.VURDER_FARESIGNALER,
  faresignalVurdering: utledFaresignalVurderingVerdi(values[vurderingerHovedkategori], values[ikkeReelleVurderingerUnderkategori]),
  begrunnelse: values[begrunnelseFieldName],
});

const mapStateToPropsFactory = (_initialState, ownProps: PureOwnProps) => {
  const onSubmit = (values) => ownProps.submitCallback(transformValues(values));
  const initialValues = buildInitialValues(ownProps);
  return (state: any): MappedOwnProps => ({
    initialValues,
    onSubmit,
    harValgtReelle: behandlingFormValueSelector(formName, ownProps.behandlingId, ownProps.behandlingVersjon)(state, vurderingerHovedkategori)
      === faresignalVurdering.INNVIRKNING,
  });
};

export default connect(mapStateToPropsFactory)(behandlingForm({ form: formName })(AvklarFaresignalerForm));
