import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import classNames from 'classnames';
import { createSelector } from 'reselect';
import { getFormValues, InjectedFormProps, reduxForm } from 'redux-form';

import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import { omit } from '@fpsak-frontend/utils';
import {
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { ProsessStegSubmitButton } from '@fpsak-frontend/prosess-felles';
import advarselIcon from '@fpsak-frontend/assets/images/advarsel_ny.svg';
import { VedtaksbrevAvsnitt } from '@fpsak-frontend/types';
import { ForeslaVedtakTilbakekrevingAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import underavsnittType from '../kodeverk/avsnittType';
import TilbakekrevingEditerVedtaksbrevPanel, { FormValues } from './brev/TilbakekrevingEditerVedtaksbrevPanel';

import styles from './tilbakekrevingVedtakForm.less';

const formName = 'TilbakekrevingVedtakForm';

type VedtakData = {
  oppsummeringstekst: string;
  perioderMedTekst: {
    fom: string;
    tom: string;
    faktaAvsnitt: string;
    foreldelseAvsnitt: string;
    vilkaarAvsnitt: string;
    saerligeGrunnerAvsnitt: string;
    saerligeGrunnerAnnetAvsnitt: string;
  }[];
}

const formatVedtakData = (values: FormValues): VedtakData => {
  const perioder = omit(values, underavsnittType.OPPSUMMERING);
  return {
    oppsummeringstekst: values[underavsnittType.OPPSUMMERING] as string,
    perioderMedTekst: Object.keys(perioder).map((key) => ({
      fom: key.split('_')[0],
      tom: key.split('_')[1],
      faktaAvsnitt: perioder[key][underavsnittType.FAKTA],
      foreldelseAvsnitt: perioder[key][underavsnittType.FORELDELSE],
      vilkaarAvsnitt: perioder[key][underavsnittType.VILKAR],
      saerligeGrunnerAvsnitt: perioder[key][underavsnittType.SARLIGEGRUNNER],
      saerligeGrunnerAnnetAvsnitt: perioder[key][underavsnittType.SARLIGEGRUNNER_ANNET],
    })),
  };
};

export type ForhandsvisData = {
  uuid: string;
} & VedtakData;

const fetchPreview = (
  fetchPreviewVedtaksbrev: (data: ForhandsvisData) => Promise<any>,
  uuid: string,
  formVerdier: FormValues,
) => (e: React.KeyboardEvent | React.MouseEvent): void => {
  fetchPreviewVedtaksbrev({
    uuid,
    ...formatVedtakData(formVerdier),
  });
  e.preventDefault();
};

interface PureOwnProps {
  submitCallback: (aksjonspunktData: ForeslaVedtakTilbakekrevingAp) => Promise<void>;
  avsnittsliste: VedtaksbrevAvsnitt[];
  readOnly: boolean;
  fetchPreviewVedtaksbrev: (data: ForhandsvisData) => Promise<any>;
  behandlingUuid: string;
  erRevurderingTilbakekrevingKlage?: boolean;
  erRevurderingTilbakekrevingFeilBeløpBortfalt?: boolean;
}

interface MappedOwnProps {
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
  formVerdier: FormValues;
  vedtaksbrevAvsnitt: VedtaksbrevAvsnitt[];
  perioderSomIkkeHarUtfyltObligatoriskVerdi: string[];
  fritekstOppsummeringPakrevdMenIkkeUtfylt?: boolean;
}

export const TilbakekrevingVedtakFormImpl: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps & WrappedComponentProps> = ({
  intl,
  readOnly,
  fetchPreviewVedtaksbrev,
  vedtaksbrevAvsnitt,
  formVerdier,
  behandlingUuid,
  perioderSomIkkeHarUtfyltObligatoriskVerdi,
  erRevurderingTilbakekrevingKlage,
  erRevurderingTilbakekrevingFeilBeløpBortfalt,
  fritekstOppsummeringPakrevdMenIkkeUtfylt,
  ...formProps
}) => (
  <form onSubmit={formProps.handleSubmit}>
    <VerticalSpacer twentyPx />
    <TilbakekrevingEditerVedtaksbrevPanel
      intl={intl}
      vedtaksbrevAvsnitt={vedtaksbrevAvsnitt}
      formName={formName}
      readOnly={readOnly}
      perioderSomIkkeHarUtfyltObligatoriskVerdi={perioderSomIkkeHarUtfyltObligatoriskVerdi}
      fritekstOppsummeringPakrevdMenIkkeUtfylt={fritekstOppsummeringPakrevdMenIkkeUtfylt}
      erRevurderingTilbakekrevingFeilBeløpBortfalt={erRevurderingTilbakekrevingFeilBeløpBortfalt}
    />
    <VerticalSpacer twentyPx />
    <FlexContainer>
      <FlexRow>
        <FlexColumn>
          <ProsessStegSubmitButton
            text={intl.formatMessage({ id: 'TilbakekrevingVedtakForm.TilGodkjenning' })}
            formName={formName}
            isReadOnly={readOnly}
            isSubmittable={perioderSomIkkeHarUtfyltObligatoriskVerdi.length === 0 && !fritekstOppsummeringPakrevdMenIkkeUtfylt}
          />
        </FlexColumn>
        {perioderSomIkkeHarUtfyltObligatoriskVerdi.length === 0 && (
          <FlexColumn>
            <div className={styles.padding}>
              <a
                href=""
                onClick={fetchPreview(fetchPreviewVedtaksbrev, behandlingUuid, formVerdier)}
                onKeyDown={(e) => (e.key === 'Enter' ? fetchPreview(fetchPreviewVedtaksbrev, behandlingUuid, formVerdier)(e) : null)}
                className={classNames(styles.buttonLink, 'lenke lenke--frittstaende')}
              >
                <FormattedMessage id="TilbakekrevingVedtakForm.ForhandvisBrev" />
              </a>
            </div>
          </FlexColumn>
        )}
        {erRevurderingTilbakekrevingKlage && (
          <FlexColumn className={classNames(styles.infoTextContainer)}>
            <FlexRow>
              <FlexColumn className={classNames(styles.padding, styles.infoTextIconColumn)}>
                <Image className={styles.infoTextIcon} src={advarselIcon} />
              </FlexColumn>
              <FlexColumn className={classNames(styles.infotextColumn)}>
                <FormattedMessage id="TilbakekrevingVedtakForm.Infotekst.Klage" />
              </FlexColumn>
            </FlexRow>
          </FlexColumn>
        )}
      </FlexRow>
    </FlexContainer>
  </form>
);

const transformValues = (values: FormValues): ForeslaVedtakTilbakekrevingAp => ({
  kode: aksjonspunktCodesTilbakekreving.FORESLA_VEDTAK,
  ...formatVedtakData(values),
});

const finnPerioderSomIkkeHarVerdiForObligatoriskFelt = createSelector([
  (ownProps: { vedtaksbrevAvsnitt: VedtaksbrevAvsnitt[] }) => ownProps.vedtaksbrevAvsnitt,
  (ownProps: { formVerdier: FormValues }) => ownProps.formVerdier],
(vedtaksbrevAvsnitt, formVerdier): string[] => vedtaksbrevAvsnitt.reduce((acc: string[], va: VedtaksbrevAvsnitt) => {
  const periode = `${va.fom}_${va.tom}`;
  const friteksterForPeriode = formVerdier[periode];

  const harObligatoriskFaktaTekst = va.underavsnittsliste.some((ua) => ua.fritekstPåkrevet && ua.underavsnittstype === underavsnittType.FAKTA);
  if (harObligatoriskFaktaTekst && (!friteksterForPeriode || !friteksterForPeriode[underavsnittType.FAKTA])) {
    return acc.concat(periode);
  }

  const harObligatoriskSarligeGrunnerAnnetTekst = va.underavsnittsliste
    .some((ua) => ua.fritekstPåkrevet && ua.underavsnittstype === underavsnittType.SARLIGEGRUNNER_ANNET);
  if (harObligatoriskSarligeGrunnerAnnetTekst && (!friteksterForPeriode || !friteksterForPeriode[underavsnittType.SARLIGEGRUNNER_ANNET])) {
    return acc.concat(periode);
  }
  return acc;
}, []));

const harFritekstOppsummeringPakrevdMenIkkeUtfylt = (vedtaksbrevAvsnitt: VedtaksbrevAvsnitt[]): boolean => vedtaksbrevAvsnitt
  .filter((avsnitt) => avsnitt.avsnittstype === underavsnittType.OPPSUMMERING)
  .some((avsnitt) => avsnitt.underavsnittsliste.some((underAvsnitt) => underAvsnitt.fritekstPåkrevet && !underAvsnitt.fritekst));

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback],
(submitCallback) => (values: FormValues) => submitCallback(transformValues(values)));

const mapStateToPropsFactory = (state: any, ownProps: PureOwnProps): MappedOwnProps => {
  const vedtaksbrevAvsnitt = ownProps.avsnittsliste;
  const initialValues = TilbakekrevingEditerVedtaksbrevPanel.buildInitialValues(vedtaksbrevAvsnitt);
  const formVerdier = getFormValues(formName)(state) || {};
  const fritekstOppsummeringPakrevdMenIkkeUtfylt = harFritekstOppsummeringPakrevdMenIkkeUtfylt(vedtaksbrevAvsnitt);
  return {
    initialValues,
    formVerdier,
    vedtaksbrevAvsnitt,
    onSubmit: lagSubmitFn(ownProps),
    perioderSomIkkeHarUtfyltObligatoriskVerdi: finnPerioderSomIkkeHarVerdiForObligatoriskFelt({ vedtaksbrevAvsnitt, formVerdier }),
    fritekstOppsummeringPakrevdMenIkkeUtfylt,
  };
};

const TilbakekrevingVedtakForm = connect(mapStateToPropsFactory)(reduxForm({
  form: formName,
  destroyOnUnmount: false,
})(injectIntl(TilbakekrevingVedtakFormImpl)));

export default TilbakekrevingVedtakForm;
