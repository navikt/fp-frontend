import React from 'react';
import { connect } from 'react-redux';
import { InjectedFormProps, setSubmitFailed } from 'redux-form';
import { createSelector } from 'reselect';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { bindActionCreators, Dispatch } from 'redux';
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
  hasValidText, ISO_DATE_FORMAT, minLength, required, getLanguageFromSprakkode,
} from '@fpsak-frontend/utils';
import FodselSammenligningIndex from '@fpsak-frontend/prosess-fakta-fodsel-sammenligning';
import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';
import Behandling from '@fpsak-frontend/types/src/behandlingTsType';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import {
  Aksjonspunkt, FamilieHendelseSamling, Kodeverk, KodeverkMedNavn, Soknad, AvklartBarn, FamilieHendelse,
} from '@fpsak-frontend/types';

import styles from './varselOmRevurderingForm.less';

const minLength3 = minLength(3);

export type ForhandsvisData = {
  mottaker: string;
  dokumentMal: string;
  fritekst: string;
}

type FormValues = {
  kode?: string;
  begrunnelse?: string;
}

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  behandlingArsaker: Behandling['behandlingÅrsaker'];
  sprakkode: Kodeverk;
  behandlingType: Kodeverk;
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
  soknadOriginalBehandling: Soknad;
  familiehendelseOriginalBehandling: FamilieHendelse;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (...args: any[]) => any;
  previewCallback: (data: ForhandsvisData) => Promise<any>;
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
  language: string;
  ventearsaker: KodeverkMedNavn[];
  erAutomatiskRevurdering?: boolean;
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
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

  handleSubmitFromModal(values: any): void {
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

  bekreftOgFortsettClicked(): void {
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

  previewMessage(e: React.MouseEvent): void {
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
        dokumentMal: dokumentMalType.REVURDERING_DOK,
        fritekst: fritekst || ' ',
      };
      previewCallback(data);
    } else {
      submit();
    }
    e.preventDefault();
  }

  hideSettPaVentModal(): void {
    this.setState({ showSettPaVentModal: false });
  }

  render() {
    const {
      intl,
      erAutomatiskRevurdering = false,
      language,
      readOnly,
      sendVarsel = false,
      aksjonspunktStatus,
      begrunnelse,
      ventearsaker,
      avklartBarn,
      behandlingType,
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
                  behandlingsTypeKode={behandlingType.kode}
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
                  badges={[{ text: language, type: 'fokus', title: 'Malform.Beskrivelse' }]}
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
          erTilbakekreving={behandlingType.kode === BehandlingType.TILBAKEKREVING || behandlingType.kode === BehandlingType.TILBAKEKREVING_REVURDERING}
        />
      </form>
    );
  }
}

export const buildInitialValues = createSelector([(ownProps: PureOwnProps) => ownProps.aksjonspunkter], (aksjonspunkter): FormValues => ({
  kode: aksjonspunkter[0].definisjon.kode,
  begrunnelse: aksjonspunkter[0].begrunnelse,
}));

const formName = 'VarselOmRevurderingForm';

const nullSafe = (value: FamilieHendelse): FamilieHendelse => value || {} as FamilieHendelse;

const lagSubmitFn = createSelector([(ownProps: PureOwnProps) => ownProps.submitCallback],
  (submitCallback) => (values: FormValues) => submitCallback([values]));

const EMPTY_ARRAY = [];

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const {
    behandlingId, behandlingVersjon, behandlingArsaker, aksjonspunkter, sprakkode, familiehendelse,
  } = initialOwnProps;
  const erAutomatiskRevurdering = behandlingArsaker.reduce((result, current) => (result || current.erAutomatiskRevurdering), false);
  const aksjonspunkt = aksjonspunkter[0];
  const ventearsaker = initialOwnProps.alleKodeverk[kodeverkTyper.VENT_AARSAK] || EMPTY_ARRAY;
  const language = getLanguageFromSprakkode(sprakkode);

  return (state: any, ownProps: PureOwnProps): MappedOwnProps => ({
    initialValues: buildInitialValues(ownProps),
    aksjonspunktStatus: aksjonspunkt.status.kode,
    ...behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'sendVarsel', 'fritekst', 'begrunnelse', 'kode'),
    avklartBarn: nullSafe(familiehendelse.register).avklartBarn,
    termindato: nullSafe(familiehendelse.gjeldende).termindato,
    vedtaksDatoSomSvangerskapsuke: nullSafe(familiehendelse.gjeldende).vedtaksDatoSomSvangerskapsuke,
    onSubmit: lagSubmitFn(ownProps),
    language,
    ventearsaker,
    erAutomatiskRevurdering,
  });
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  ...bindActionCreators({
    dispatchSubmitFailed: setSubmitFailed,
  }, dispatch),
});

const VarselOmRevurderingForm = connect(mapStateToPropsFactory, mapDispatchToProps)(injectIntl(behandlingForm({
  form: formName,
  enableReinitialize: true,
})(VarselOmRevurderingFormImpl)));

export default VarselOmRevurderingForm;
