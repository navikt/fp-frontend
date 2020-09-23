import React, { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { submit as reduxSubmit } from 'redux-form';
import { connect } from 'react-redux';

import { AksjonspunktHelpTextTemp, VerticalSpacer } from '@fpsak-frontend/shared-components';
import { FaktaSubmitButton } from '@fpsak-frontend/fakta-felles';
import { getBehandlingFormPrefix } from '@fpsak-frontend/form';
import aksjonspunktCodes, { hasAksjonspunkt } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselSammenligningIndex from '@fpsak-frontend/prosess-fakta-fodsel-sammenligning';
import {
  Aksjonspunkt, FamilieHendelseSamling, FamilieHendelse, Kodeverk, Personopplysninger, Soknad,
} from '@fpsak-frontend/types';

import TermindatoFaktaForm, { termindatoFaktaFormName } from './TermindatoFaktaForm';
import SjekkFodselDokForm, { sjekkFodselDokForm } from './SjekkFodselDokForm';
import SykdomPanel, { sykdomPanelName } from './SykdomPanel';

const {
  TERMINBEKREFTELSE, SJEKK_MANGLENDE_FODSEL, VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT,
} = aksjonspunktCodes;

const getHelpTexts = (aksjonspunkter: any) => {
  const helpTexts = [];
  if (hasAksjonspunkt(VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="VurderVilkarForSykdom" id="FodselInfoPanel.VurderVilkarForSykdom" />);
  }
  if (hasAksjonspunkt(TERMINBEKREFTELSE, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="KontrollerMotTerminbekreftelsen" id="FodselInfoPanel.KontrollerMotTerminbekreftelsen" />);
  }
  if (hasAksjonspunkt(SJEKK_MANGLENDE_FODSEL, aksjonspunkter)) {
    helpTexts.push(<FormattedMessage key="KontrollerMotFodselsdokumentasjon" id="FodselInfoPanel.KontrollerMotFodselsdokumentasjon" />);
  }
  return helpTexts;
};

const formNames = [sykdomPanelName, termindatoFaktaFormName, sjekkFodselDokForm];

interface OwnProps {
  aksjonspunkter: Aksjonspunkt[];
  hasOpenAksjonspunkter: boolean;
  submittable: boolean;
  readOnly: boolean;
  formPrefix: string;
  dispatch: (...args: any[]) => any;
  submitCallback: (...args: any[]) => any;
  avklartBarn?: FamilieHendelse['avklartBarn'];
  termindato?: string;
  vedtaksDatoSomSvangerskapsuke?: number;
  soknad: Soknad;
  soknadOriginalBehandling?: Soknad;
  familiehendelseOriginalBehandling?: FamilieHendelseSamling;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  familiehendelse: FamilieHendelseSamling;
  behandlingId: number;
  behandlingVersjon: number;
  behandlingType: Kodeverk;
  personopplysninger: Personopplysninger;
}

/**
 * FodselInfoPanel
 *
 * Presentasjonskomponent. Har ansvar for å sette opp Redux Formen for faktapenelet til Fødselsvilkåret.
 */
export class FodselInfoPanelImpl extends Component<OwnProps> {
  static defaultProps: {
    avklartBarn: [],
  };

  submittedAksjonspunkter?: any;

  constructor(props) {
    super(props);

    this.submittedAksjonspunkter = {};

    this.submitHandler = this.submitHandler.bind(this);
    this.getSubmitFunction = this.getSubmitFunction.bind(this);
  }

  getSubmitFunction(dispatch: any, formPrefix: any) {
    return (e: any) => {
      this.submittedAksjonspunkter = {};
      formNames.forEach((formName) => dispatch(reduxSubmit(`${formPrefix}.${formName}`)));
      e.preventDefault();
    };
  }

  submitHandler(values: any) {
    this.submittedAksjonspunkter = {
      ...this.submittedAksjonspunkter,
      [values.kode]: values,
    };
    const { aksjonspunkter, submitCallback } = this.props;

    return aksjonspunkter.every((ap: any) => this.submittedAksjonspunkter[ap.definisjon.kode])
      ? submitCallback(Object.values(this.submittedAksjonspunkter))
      : undefined;
  }

  render() {
    const {
      aksjonspunkter,
      hasOpenAksjonspunkter,
      submittable,
      formPrefix,
      readOnly,
      dispatch,
      avklartBarn,
      termindato,
      vedtaksDatoSomSvangerskapsuke,
      soknad,
      soknadOriginalBehandling,
      familiehendelseOriginalBehandling,
      familiehendelse,
      alleMerknaderFraBeslutter,
      personopplysninger,
      behandlingId,
      behandlingVersjon,
      behandlingType,
    } = this.props;
    return (
      <>
        <AksjonspunktHelpTextTemp isAksjonspunktOpen={hasOpenAksjonspunkter}>{getHelpTexts(aksjonspunkter)}</AksjonspunktHelpTextTemp>
        <form onSubmit={this.getSubmitFunction(dispatch, formPrefix)}>
          {hasAksjonspunkt(VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT, aksjonspunkter) && (
            <SykdomPanel
              behandlingId={behandlingId}
              behandlingVersjon={behandlingVersjon}
              readOnly={readOnly}
              aksjonspunkt={aksjonspunkter.find((ap: any) => ap.definisjon.kode === VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT)}
              submitHandler={this.submitHandler}
              morForSykVedFodsel={familiehendelse.gjeldende.morForSykVedFodsel}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
            />
          )}
          {hasAksjonspunkt(TERMINBEKREFTELSE, aksjonspunkter) && (
            <TermindatoFaktaForm
              behandlingId={behandlingId}
              behandlingVersjon={behandlingVersjon}
              aksjonspunkt={aksjonspunkter.find((ap: any) => ap.definisjon.kode === TERMINBEKREFTELSE)}
              readOnly={readOnly}
              submittable={submittable}
              isAksjonspunktOpen={hasOpenAksjonspunkter}
              submitHandler={this.submitHandler}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
              soknad={soknad}
              gjeldendeFamiliehendelse={familiehendelse.gjeldende}
              personopplysninger={personopplysninger}
            />
          )}
          {hasAksjonspunkt(SJEKK_MANGLENDE_FODSEL, aksjonspunkter) && (
            <SjekkFodselDokForm
              behandlingId={behandlingId}
              behandlingVersjon={behandlingVersjon}
              behandlingType={behandlingType}
              aksjonspunkt={aksjonspunkter.find((ap: any) => ap.definisjon.kode === SJEKK_MANGLENDE_FODSEL)}
              readOnly={readOnly}
              submittable={submittable}
              isAksjonspunktOpen={hasOpenAksjonspunkter}
              submitHandler={this.submitHandler}
              soknadOriginalBehandling={soknadOriginalBehandling}
              familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
              alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
              soknad={soknad}
              avklartBarn={avklartBarn}
              gjeldendeFamiliehendelse={familiehendelse.gjeldende}
              personopplysninger={personopplysninger}
            />
          )}
          {aksjonspunkter.length !== 0 && !readOnly
            && (
              <>
                <VerticalSpacer twentyPx />
                <FaktaSubmitButton
                  behandlingId={behandlingId}
                  behandlingVersjon={behandlingVersjon}
                  formNames={formNames}
                  isSubmittable={submittable}
                  isReadOnly={readOnly}
                  hasOpenAksjonspunkter={hasOpenAksjonspunkter}
                />
              </>
            )}
          {aksjonspunkter.length === 0 && (
            <FodselSammenligningIndex
              behandlingsTypeKode={behandlingType.kode}
              avklartBarn={avklartBarn}
              termindato={termindato}
              vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke}
              soknad={soknad}
              soknadOriginalBehandling={soknadOriginalBehandling}
              familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
            />
          )}
        </form>
      </>
    );
  }
}

const nullSafe = (value: any) => value || {};

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  familiehendelse: FamilieHendelseSamling;
}

const mapStateToProps = (_state, ownProps: PureOwnProps) => ({
  formPrefix: getBehandlingFormPrefix(ownProps.behandlingId, ownProps.behandlingVersjon),
  avklartBarn: nullSafe(ownProps.familiehendelse.register).avklartBarn,
  termindato: nullSafe(ownProps.familiehendelse.gjeldende).termindato,
  vedtaksDatoSomSvangerskapsuke: nullSafe(ownProps.familiehendelse.gjeldende).vedtaksDatoSomSvangerskapsuke,
});

export default connect(mapStateToProps)(injectIntl(FodselInfoPanelImpl));
