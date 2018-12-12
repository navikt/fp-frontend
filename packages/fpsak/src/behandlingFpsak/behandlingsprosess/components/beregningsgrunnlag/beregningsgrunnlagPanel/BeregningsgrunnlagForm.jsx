import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createSelector } from 'reselect';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Element } from 'nav-frontend-typografi';

import {
  getAlleAndelerIForstePeriode,
  getBehandlingGjelderBesteberegning,
  getBeregningsgrunnlagPerioder,
  getGjeldendeBeregningAksjonspunkt,
} from 'behandlingFpsak/behandlingSelectors';
import { getSelectedBehandlingspunktAksjonspunkter } from 'behandlingFpsak/behandlingsprosess/behandlingsprosessSelectors';
import { behandlingForm } from 'behandlingFpsak/behandlingForm';
import aksjonspunktPropType from 'behandlingFelles/proptypes/aksjonspunktPropType';
import BehandlingspunktSubmitButton from 'behandlingFpsak/behandlingsprosess/components/BehandlingspunktSubmitButton';
import aktivitetStatus from '@fpsak-frontend/kodeverk/src/aktivitetStatus';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { BorderBox, ElementWrapper, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import periodeAarsak from '@fpsak-frontend/kodeverk/src/periodeAarsak';
import { TextAreaField } from '@fpsak-frontend/form';
import {
  hasValidText, maxLength, minLength, required, removeSpacesFromNumber,
} from '@fpsak-frontend/utils';
import YtelserFraInfotrygd
  from 'behandlingFpsak/behandlingsprosess/components/beregningsgrunnlag/tilstotendeYtelser/YtelserFraInfotrygd';
import GrunnlagForAarsinntektPanelFL from '../frilanser/GrunnlagForAarsinntektPanelFL';
import GrunnlagForAarsinntektPanelAT from '../arbeidstaker/GrunnlagForAarsinntektPanelAT';
import GrunnlagForAarsinntektPanelSN from '../selvstendigNaeringsdrivende/GrunnlagForAarsinntektPanelSN';
import FastsettNaeringsinntektSN from '../selvstendigNaeringsdrivende/FastsettNaeringsinntektSN';
import OppsummeringSN from '../selvstendigNaeringsdrivende/OppsummeringSN';
import TilstotendeYtelser from '../tilstotendeYtelser/TilstotendeYtelser';
import MilitaerPanel from '../militær/MilitaerPanel';
import FastsettInntektTidsbegrenset from '../arbeidstaker/FastsettInntektTidsbegrenset';

import styles from './beregningsgrunnlagForm.less';

const {
  FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS,
  VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE,
  FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE,
  FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
  FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET,
} = aksjonspunktCodes;

const minLength3 = minLength(3);
const maxLength1500 = maxLength(1500);

const formName = 'BeregningsgrunnlagForm';

const harPerioderMedAvsluttedeArbeidsforhold = (allePerioder, gjeldendeAksjonspunkt) => allePerioder.filter(periode => periode.periodeAarsaker !== null
  && (periode.periodeAarsaker.map(({ kode }) => kode).includes(periodeAarsak.ARBEIDSFORHOLD_AVSLUTTET))).length > 0
  && (!gjeldendeAksjonspunkt || gjeldendeAksjonspunkt.definisjon.kode === FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD);

const skalViseBegrunnelsesBoksForAtfl = aksjonspunkt => aksjonspunkt
  && (aksjonspunkt.definisjon.kode === FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS
    || aksjonspunkt.definisjon.kode === FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD);

const skalFastsetteSN = aksjonspunkt => aksjonspunkt
  && (aksjonspunkt.definisjon.kode === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE
    || aksjonspunkt.definisjon.kode === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET);

const isSelvstendigMedKombinasjonsstatus = relevanteStatuser => relevanteStatuser.isSelvstendigNaeringsdrivende && relevanteStatuser.isKombinasjonsstatus;

const skalViseSNOppsummering = (relevanteStatuser, gjeldendeAksjonspunkt) => isSelvstendigMedKombinasjonsstatus(relevanteStatuser)
  && (gjeldendeAksjonspunkt ? gjeldendeAksjonspunkt.definisjon.kode !== FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET : true);

const createRelevantePaneler = (alleAndelerIForstePeriode,
  gjeldendeAksjonspunkt,
  relevanteStatuser,
  allePerioder,
  readOnly,
  gjelderBesteberegning) => (
    <div>
      { relevanteStatuser.isSelvstendigNaeringsdrivende
    && (
    <GrunnlagForAarsinntektPanelSN
      alleAndeler={alleAndelerIForstePeriode}
    />
    )
    }
      {(relevanteStatuser.harDagpengerEllerAAP)
    && (
    <div>
      <TilstotendeYtelser
        alleAndeler={alleAndelerIForstePeriode}
        isKombinasjonsstatus={relevanteStatuser.isKombinasjonsstatus}
        skalViseOppjustertGrunnlag={relevanteStatuser.isSelvstendigNaeringsdrivende && !gjelderBesteberegning}
      />
      <VerticalSpacer twentyPx />
    </div>
    )
    }
      <VerticalSpacer eightPx />
      {(relevanteStatuser.isMilitaer)
      && (
        <div>
          <MilitaerPanel
            alleAndeler={alleAndelerIForstePeriode}
          />
          <VerticalSpacer twentyPx />
        </div>
      )
      }
      {(relevanteStatuser.harAndreTilstotendeYtelser)
    && (
      <div>
        <YtelserFraInfotrygd
          alleAndeler={alleAndelerIForstePeriode}
          isKombinasjonsstatus={relevanteStatuser.isKombinasjonsstatus}
          bruttoPrAar={allePerioder[0].bruttoPrAar}
        />
        <VerticalSpacer twentyPx />
      </div>
    )
    }
      { relevanteStatuser.isFrilanser
    && (
    <div>
      <GrunnlagForAarsinntektPanelFL
        alleAndeler={alleAndelerIForstePeriode}
        aksjonspunkt={gjeldendeAksjonspunkt}
        readOnly={readOnly}
        isKombinasjonsstatus={relevanteStatuser.isKombinasjonsstatus}
      />
      <VerticalSpacer twentyPx />
    </div>
    )
    }
      <VerticalSpacer eightPx />
      { relevanteStatuser.isArbeidstaker
    && (
    <div>
      {!harPerioderMedAvsluttedeArbeidsforhold(allePerioder, gjeldendeAksjonspunkt)
      && (
      <GrunnlagForAarsinntektPanelAT
        alleAndeler={alleAndelerIForstePeriode}
        aksjonspunkt={gjeldendeAksjonspunkt}
        allePerioder={allePerioder}
        readOnly={readOnly}
        isKombinasjonsstatus={relevanteStatuser.isKombinasjonsstatus}
      />
      )
      }
      { harPerioderMedAvsluttedeArbeidsforhold(allePerioder, gjeldendeAksjonspunkt)
      && (
      <FastsettInntektTidsbegrenset
        readOnly={readOnly}
        aksjonspunkt={gjeldendeAksjonspunkt}
        gjeldendeAksjonspunkt={gjeldendeAksjonspunkt}
        formName={formName}
      />
      )
      }
    </div>
    )
    }
      { skalViseSNOppsummering(relevanteStatuser, gjeldendeAksjonspunkt)
    && (
    <OppsummeringSN
      alleAndeler={alleAndelerIForstePeriode}
    />
    )
    }
    </div>
);

/**
 * BeregningsgrunnlagForm
 *
 * Presentasjonsskomponent. Holder på alle komponenter relatert til å vise beregningsgrunnlaget til de forskjellige
 * statusene og viser disse samlet i en faktagruppe.
 * Fungerer også som den overordnene formen for disse komponentene og håndterer alt av submits
 * relatert til beregningsgrunnlaget.
 */
export const BeregningsgrunnlagForm = ({
  intl,
  readOnly,
  relevanteStatuser,
  gjeldendeAksjonspunkt,
  allePerioder,
  alleAndelerIForstePeriode,
  readOnlySubmitButton,
  gjelderBesteberegning,
  ...formProps
}) => (
  <form onSubmit={formProps.handleSubmit}>
    <div className={styles.beregningsgrunnlagPanel}>
      { skalViseBegrunnelsesBoksForAtfl(gjeldendeAksjonspunkt)
      && (
      <TextAreaField
        name="ATFLVurdering"
        label={intl.formatMessage({ id: 'Beregningsgrunnlag.Forms.Vurdering' })}
        validate={[required, maxLength1500, minLength3, hasValidText]}
        maxLength={1500}
        readOnly={readOnly}
      />
      )
      }
      <BorderBox>
        <Element>
          <FormattedMessage id="Beregningsgrunnlag.AarsinntektPanel.Beregningsgrunnlag" />
        </Element>
        {
          createRelevantePaneler(
            alleAndelerIForstePeriode,
            gjeldendeAksjonspunkt,
            relevanteStatuser,
            allePerioder,
            readOnly,
            gjelderBesteberegning,
          )
        }
      </BorderBox>
      { skalFastsetteSN(gjeldendeAksjonspunkt)
      && (
      <FastsettNaeringsinntektSN
        gjeldendeAksjonspunkt={gjeldendeAksjonspunkt}
        readOnly={readOnly}
      />
      )
      }
      { gjeldendeAksjonspunkt
        && (
        <ElementWrapper>
          <VerticalSpacer sixteenPx />
          <BehandlingspunktSubmitButton formName={formProps.form} isReadOnly={readOnly} isSubmittable={!readOnlySubmitButton} />
        </ElementWrapper>
        )
      }
    </div>
  </form>
);

BeregningsgrunnlagForm.propTypes = {
  intl: intlShape.isRequired,
  submitCallback: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
  alleAndelerIForstePeriode: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  gjeldendeAksjonspunkt: aksjonspunktPropType,
  relevanteStatuser: PropTypes.shape().isRequired,
  allePerioder: PropTypes.arrayOf(PropTypes.shape()),
  readOnlySubmitButton: PropTypes.bool.isRequired,
  gjelderBesteberegning: PropTypes.bool.isRequired,
};

BeregningsgrunnlagForm.defaultProps = {
  gjeldendeAksjonspunkt: undefined,
  allePerioder: undefined,
};

const buildInitialValues = createSelector(
  [getAlleAndelerIForstePeriode, getSelectedBehandlingspunktAksjonspunkter, getGjeldendeBeregningAksjonspunkt, getBeregningsgrunnlagPerioder],
  (alleAndelerIForstePeriode, aksjonspunkter, gjeldendeAksjonspunkt, allePerioder) => {
    const isAksjonspunktClosed = gjeldendeAksjonspunkt ? !isAksjonspunktOpen(gjeldendeAksjonspunkt.status.kode) : true;
    let tilleggAksjonspunkt;
    if (gjeldendeAksjonspunkt
      && gjeldendeAksjonspunkt.definisjon.kode === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE
      && isAksjonspunktClosed) {
      tilleggAksjonspunkt = aksjonspunkter.find(ap => ap.definisjon.kode === FASTSETT_BRUTTO_BEREGNINGSGRUNNLAG_SELVSTENDIG_NAERINGSDRIVENDE);
    }

    const arbeidstakerAndeler = alleAndelerIForstePeriode.filter(andel => andel.aktivitetStatus.kode === aktivitetStatus.ARBEIDSTAKER);
    const frilanserAndeler = alleAndelerIForstePeriode.filter(andel => andel.aktivitetStatus.kode === aktivitetStatus.FRILANSER);
    const selvstendigNaeringAndeler = alleAndelerIForstePeriode.filter(andel => andel.aktivitetStatus.kode === aktivitetStatus.SELVSTENDIG_NAERINGSDRIVENDE);
    const initialValues = {
      ATFLVurdering: (gjeldendeAksjonspunkt && skalViseBegrunnelsesBoksForAtfl(gjeldendeAksjonspunkt))
        ? gjeldendeAksjonspunkt.begrunnelse
        : '',
    };
    return {
      ...initialValues,
      ...FastsettInntektTidsbegrenset.buildInitialValues(allePerioder),
      ...GrunnlagForAarsinntektPanelAT.buildInitialValues(arbeidstakerAndeler),
      ...GrunnlagForAarsinntektPanelFL.buildInitialValues(frilanserAndeler),
      ...FastsettNaeringsinntektSN.buildInitialValues(selvstendigNaeringAndeler, gjeldendeAksjonspunkt, tilleggAksjonspunkt),
    };
  },
);

const transformValues = (values, relevanteStatuser, alleAndelerIForstePeriode, gjeldendeAksjonspunkt, allePerioder) => {
  if (gjeldendeAksjonspunkt.definisjon.kode === FASTSETT_BEREGNINGSGRUNNLAG_ARBEIDSTAKER_FRILANS) {
    return GrunnlagForAarsinntektPanelAT.transformValues(values, relevanteStatuser, alleAndelerIForstePeriode);
  }
  if (gjeldendeAksjonspunkt.definisjon.kode === VURDER_VARIG_ENDRET_ELLER_NYOPPSTARTET_NAERING_SELVSTENDIG_NAERINGSDRIVENDE
  || gjeldendeAksjonspunkt.definisjon.kode === FASTSETT_BEREGNINGSGRUNNLAG_SN_NY_I_ARBEIDSLIVET) {
    return FastsettNaeringsinntektSN.transformValues(values, gjeldendeAksjonspunkt);
  }
  if (gjeldendeAksjonspunkt.definisjon.kode === FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD) {
    return [{
      kode: FASTSETT_BEREGNINGSGRUNNLAG_TIDSBEGRENSET_ARBEIDSFORHOLD,
      begrunnelse: values.ATFLVurdering,
      fastsatteTidsbegrensedePerioder: FastsettInntektTidsbegrenset.transformValues(values, allePerioder),
      frilansInntekt: values.inntektFrilanser ? removeSpacesFromNumber(values.inntektFrilanser) : null,
    }];
  }
  return [];
};

const mapStateToProps = (state, ownProps) => {
  const { gjeldendeAksjonspunkt } = ownProps;
  const alleAndelerIForstePeriode = getAlleAndelerIForstePeriode(state);
  const isAksjonspunktClosed = gjeldendeAksjonspunkt ? !isAksjonspunktOpen(gjeldendeAksjonspunkt.status.kode) : true;
  const allePerioder = getBeregningsgrunnlagPerioder(state);
  const gjelderBesteberegning = getBehandlingGjelderBesteberegning(state);
  return {
    gjelderBesteberegning,
    alleAndelerIForstePeriode,
    isAksjonspunktClosed,
    allePerioder,
    onSubmit: values => ownProps.submitCallback(transformValues(
      values, ownProps.relevanteStatuser,
      alleAndelerIForstePeriode, gjeldendeAksjonspunkt, allePerioder,
    )),
    initialValues: buildInitialValues(state),
  };
};

export default injectIntl(connect(mapStateToProps)(behandlingForm({ form: formName })(BeregningsgrunnlagForm)));
