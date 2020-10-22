import React from 'react';
import { connect } from 'react-redux';
import { InjectedFormProps, setSubmitFailed } from 'redux-form';
import { createSelector } from 'reselect';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import moment from 'moment';
import { Normaltekst, Undertekst, Undertittel } from 'nav-frontend-typografi';
import { Hovedknapp } from 'nav-frontend-knapper';

import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import {
  RadioGroupField, RadioOption, TextAreaField, behandlingForm, behandlingFormValueSelector,
} from '@fpsak-frontend/form';
import {
  AksjonspunktHelpTextTemp, ArrowBox, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { isAksjonspunktOpen } from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import {
  hasValidText, ISO_DATE_FORMAT, minLength, required, getLanguageCodeFromSprakkode,
} from '@fpsak-frontend/utils';
import FodselSammenligningIndex from '@fpsak-frontend/prosess-fakta-fodsel-sammenligning';
import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';
import Behandling from '@fpsak-frontend/types/src/behandlingTsType';
import {
  Aksjonspunkt, FamilieHendelseSamling, Kodeverk, KodeverkMedNavn, Soknad, AvklartBarn, FamilieHendelse,
} from '@fpsak-frontend/types';

import styles from './varselOmRevurderingForm.less';

const minLength3 = minLength(3);

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  behandlingArsaker: Behandling['behandlingArsaker'];
  sprakkode: Kodeverk;
  behandlingType: Kodeverk;
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  soknadOriginalBehandling: Soknad;
  familiehendelseOriginalBehandling: FamilieHendelse;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (...args: any[]) => any;
  previewCallback: (...args: any[]) => any;
  readOnly: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

interface MappedOwnProps {
  sendVarsel?: boolean;
  fritekst?: string;
  begrunnelse?: string;
  kode: string;
  aksjonspunktStatus: string;
  avklartBarn?: AvklartBarn[];
  termindato?: string;
  vedtaksDatoSomSvangerskapsuke?: string;
  behandlingTypeKode:string;
  languageCode: string;
  ventearsaker: KodeverkMedNavn[];
  erAutomatiskRevurdering?: boolean;
}

interface DispatchProps {
  dispatchSubmitFailed: (form: string) => void;
}

interface OwnState {
  showSettPaVentModal: boolean;
}

type Props = PureOwnProps & MappedOwnProps & DispatchProps & WrappedComponentProps & InjectedFormProps;

/**
 * VarselOmRevurderingForm
 *
 * Presentasjonskomponent. Setter opp aksjonspunktet for avklaring av varsel om revurdering i søknad.
 */
export class VarselOmRevurderingFormImpl extends React.Component<Props, OwnState> {
  constructor(props: Props) {
    super(props);
    this.previewMessage = this.previewMessage.bind(this);
    this.bekreftOgFortsettClicked = this.bekreftOgFortsettClicked.bind(this);
    this.hideSettPaVentModal = this.hideSettPaVentModal.bind(this);
    this.handleSubmitFromModal = this.handleSubmitFromModal.bind(this);
    this.state = { showSettPaVentModal: false };
  }

  previewMessage(e: any) {
    const {
      valid,
      pristine,
      fritekst,
      // @ts-ignore submit kjem vel frå rudux-form?
      submit,
      previewCallback,
    } = this.props;
    if (valid || pristine) {
      const data = {
        mottaker: '',
        dokumentMal: 'REVURD',
        fritekst: fritekst || ' ',
      };
      previewCallback(data);
    } else {
      submit();
    }
    e.preventDefault();
  }

  bekreftOgFortsettClicked() {
    const {
      valid: validForm, touch, dispatchSubmitFailed, sendVarsel = false, handleSubmit,
    } = this.props;
    touch('begrunnelse', 'sendVarsel', 'fritekst');
    if (!validForm) {
      dispatchSubmitFailed('VarselOmRevurderingForm');
    }
    if (validForm) {
      if (sendVarsel) {
        this.setState({ showSettPaVentModal: true });
      } else {
        // @ts-ignore Kvifor ingen argument?
        handleSubmit();
      }
    }
  }

  handleSubmitFromModal(values: any) {
    const {
      valid, submitCallback, begrunnelse, kode, fritekst, sendVarsel = false,
    } = this.props;
    submitCallback([{
      kode,
      begrunnelse,
      fritekst,
      sendVarsel,
      ...values,
    }]);
    if (valid) {
      this.hideSettPaVentModal();
    }
  }

  hideSettPaVentModal() {
    this.setState({ showSettPaVentModal: false });
  }

  render() {
    const {
      intl,
      erAutomatiskRevurdering = false,
      languageCode,
      readOnly,
      sendVarsel = false,
      aksjonspunktStatus,
      begrunnelse,
      ventearsaker,
      avklartBarn,
      behandlingTypeKode,
      soknad,
      termindato,
      soknadOriginalBehandling,
      familiehendelseOriginalBehandling,
      vedtaksDatoSomSvangerskapsuke,
      ...formProps
    } = this.props;
    const { showSettPaVentModal } = this.state;

    return (
      <form>
        <Undertittel>{intl.formatMessage({ id: 'VarselOmRevurderingForm.VarselOmRevurdering' })}</Undertittel>
        <VerticalSpacer eightPx />
        {(!readOnly && isAksjonspunktOpen(aksjonspunktStatus)) && (
          <div>
            <AksjonspunktHelpTextTemp isAksjonspunktOpen>
              {[<FormattedMessage key="1" id="VarselOmRevurderingForm.VarselOmRevurderingVurder" />]}
            </AksjonspunktHelpTextTemp>
            <VerticalSpacer twentyPx />
            { erAutomatiskRevurdering && (
              <div>
                <FodselSammenligningIndex
                  behandlingsTypeKode={behandlingTypeKode}
                  avklartBarn={avklartBarn}
                  termindato={termindato}
                  vedtaksDatoSomSvangerskapsuke={vedtaksDatoSomSvangerskapsuke}
                  soknad={soknad}
                  soknadOriginalBehandling={soknadOriginalBehandling}
                  familiehendelseOriginalBehandling={familiehendelseOriginalBehandling}
                />
                <VerticalSpacer sixteenPx />
              </div>
            )}
            <RadioGroupField name="sendVarsel" validate={[required]}>
              <RadioOption label={{ id: 'VarselOmRevurderingForm.SendVarsel' }} value />
              <RadioOption label={{ id: 'VarselOmRevurderingForm.IkkeSendVarsel' }} value={false} />
            </RadioGroupField>
            {sendVarsel && (
              <ArrowBox>
                <TextAreaField
                  badges={[{ textId: languageCode, type: 'fokus', title: 'Malform.Beskrivelse' }]}
                  name="fritekst"
                  label={intl.formatMessage({ id: 'VarselOmRevurderingForm.FritekstIBrev' })}
                  validate={[required, minLength3, hasValidText]}
                />
                <a
                  href=""
                  onClick={this.previewMessage}
                  className={classNames(styles.previewLink, 'lenke lenke--frittstaende')}
                >
                  <FormattedMessage id="VarselOmRevurderingForm.Preview" />
                </a>
              </ArrowBox>
            )}
            <div className={styles.flexContainer}>
              <TextAreaField
                name="begrunnelse"
                label={intl.formatMessage({ id: 'VarselOmRevurderingForm.BegrunnelseForSvar' })}
                validate={[required, minLength3, hasValidText]}
              />
            </div>
            <VerticalSpacer sixteenPx />
            <Hovedknapp
              mini
              htmlType="button"
              onClick={this.bekreftOgFortsettClicked}
              spinner={formProps.submitting}
              disabled={formProps.submitting}
            >
              <FormattedMessage id="VarselOmRevurderingForm.Bekreft" />
            </Hovedknapp>
          </div>
        )}
        {(readOnly || !isAksjonspunktOpen(aksjonspunktStatus)) && (
          <div>
            <Undertekst>{intl.formatMessage({ id: 'VarselOmRevurderingForm.Begrunnelse' })}</Undertekst>
            <Normaltekst>{begrunnelse}</Normaltekst>
          </div>
        )}
        <SettPaVentModalIndex
          showModal={showSettPaVentModal}
          frist={moment().add(28, 'days').format(ISO_DATE_FORMAT)}
          cancelEvent={this.hideSettPaVentModal}
          submitCallback={this.handleSubmitFromModal}
          ventearsaker={ventearsaker}
          visBrevErBestilt
          hasManualPaVent
          erTilbakekreving={behandlingTypeKode === BehandlingType.TILBAKEKREVING || behandlingTypeKode === BehandlingType.TILBAKEKREVING_REVURDERING}
        />
      </form>
    );
  }
}

export const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.aksjonspunkter], (aksjonspunkter) => ({
  kode: aksjonspunkter[0].definisjon.kode,
  begrunnelse: aksjonspunkter[0].begrunnelse,
}));

const formName = 'VarselOmRevurderingForm';

const nullSafe = (value: any) => value || {};

const lagSubmitFn = createSelector([(ownProps: PureOwnProps) => ownProps.submitCallback],
  (submitCallback) => (values: any) => submitCallback([values]));

const EMPTY_ARRAY = [];

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const {
    behandlingId, behandlingVersjon, behandlingType, behandlingArsaker, aksjonspunkter, sprakkode, familiehendelse,
  } = initialOwnProps;
  const erAutomatiskRevurdering = behandlingArsaker.reduce((result, current) => (result || current.erAutomatiskRevurdering), false);
  const aksjonspunkt = aksjonspunkter[0];
  const ventearsaker = initialOwnProps.alleKodeverk[kodeverkTyper.VENT_AARSAK] || EMPTY_ARRAY;
  const languageCode = getLanguageCodeFromSprakkode(sprakkode);

  return (state: any, ownProps: PureOwnProps) => ({
    initialValues: buildInitialValues(ownProps),
    aksjonspunktStatus: aksjonspunkt.status.kode,
    ...behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'sendVarsel', 'fritekst', 'begrunnelse', 'kode'),
    avklartBarn: nullSafe(familiehendelse.register).avklartBarn,
    termindato: nullSafe(familiehendelse.gjeldende).termindato,
    vedtaksDatoSomSvangerskapsuke: nullSafe(familiehendelse.gjeldende).vedtaksDatoSomSvangerskapsuke,
    behandlingTypeKode: behandlingType.kode,
    onSubmit: lagSubmitFn(ownProps),
    languageCode,
    ventearsaker,
    erAutomatiskRevurdering,
  });
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  ...bindActionCreators({
    dispatchSubmitFailed: setSubmitFailed,
  }, dispatch),
});

const VarselOmRevurderingForm = connect(mapStateToPropsFactory, mapDispatchToProps)(injectIntl(behandlingForm({
  form: formName,
  enableReinitialize: true,
})(VarselOmRevurderingFormImpl)));

export default VarselOmRevurderingForm;
