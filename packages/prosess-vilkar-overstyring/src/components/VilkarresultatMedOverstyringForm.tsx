import React, { FunctionComponent, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import { InjectedFormProps } from 'redux-form';
import {
  Undertittel, Element, EtikettLiten, Normaltekst,
} from 'nav-frontend-typografi';

import {
  KodeverkMedNavn, Kodeverk, Aksjonspunkt, Behandling,
} from '@fpsak-frontend/types';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import {
  FlexContainer, FlexRow, FlexColumn, Image, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { OverstyringPanel, VilkarResultPicker } from '@fpsak-frontend/prosess-felles';
import { behandlingForm, behandlingFormValueSelector } from '@fpsak-frontend/form';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { DDMMYYYY_DATE_FORMAT, decodeHtmlEntity } from '@fpsak-frontend/utils';
import avslattImage from '@fpsak-frontend/assets/images/avslaatt_hover.svg';
import innvilgetImage from '@fpsak-frontend/assets/images/innvilget_hover.svg';
import keyImage from '@fpsak-frontend/assets/images/key-1-rotert.svg';
import keyUtgraetImage from '@fpsak-frontend/assets/images/key-1-rotert-utgraet.svg';

import styles from './vilkarresultatMedOverstyringForm.less';

const isOverridden = (aksjonspunktCodes: string[], aksjonspunktCode: string): boolean => aksjonspunktCodes.some((code) => code === aksjonspunktCode);
const isHidden = (
  kanOverstyre: boolean,
  aksjonspunktCodes: string[],
  aksjonspunktCode: string,
): boolean => !isOverridden(aksjonspunktCodes, aksjonspunktCode) && !kanOverstyre;

type FormValues = {
  erVilkarOk: boolean;
  avslagCode?: string;
  avslagDato?: string;
  begrunnelse?: string;
  isOverstyrt?: boolean;
}

interface PureOwnProps {
  behandlingId: number;
  behandlingVersjon: number;
  behandlingType: Kodeverk;
  behandlingsresultat?: Behandling['behandlingsresultat']
  medlemskapFom: string;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: any) => void;
  overrideReadOnly: boolean;
  kanOverstyreAccess: {
    isEnabled: boolean;
  };
  toggleOverstyring: (fn: (oldArray: []) => void) => void;
  avslagsarsaker: KodeverkMedNavn[];
  status: string;
  erOverstyrt?: boolean;
  panelTittelKode: string;
  overstyringApKode: string;
  lovReferanse?: string;
  erMedlemskapsPanel: boolean;
}

type TextValues = {
  id: string;
  values: {
    fom: string;
    b: (chunks: any) => any;
  };
}

interface MappedOwnProps {
  erVilkarOk?: boolean;
  aksjonspunktCodes: string[];
  customVilkarIkkeOppfyltText?: TextValues;
  customVilkarOppfyltText?: TextValues;
  isSolvable: boolean;
  hasAksjonspunkt: boolean;
  originalErVilkarOk?: boolean;
  initialValues: FormValues;
  onSubmit: (formValues: FormValues) => any;
  validate: (formValues: FormValues) => any;
  form: string;
}

/**
 * VilkarresultatForm
 *
 * Presentasjonskomponent. Viser resultat av vilkårskjøring når det ikke finnes tilknyttede aksjonspunkter.
 * Resultatet kan overstyres av Nav-ansatt med overstyr-rettighet.
 */
export const VilkarresultatMedOverstyringForm: FunctionComponent<PureOwnProps & MappedOwnProps & InjectedFormProps> = ({
  panelTittelKode,
  erOverstyrt,
  overstyringApKode,
  lovReferanse,
  isSolvable,
  erVilkarOk,
  originalErVilkarOk,
  customVilkarIkkeOppfyltText,
  customVilkarOppfyltText,
  erMedlemskapsPanel,
  hasAksjonspunkt,
  avslagsarsaker,
  overrideReadOnly,
  kanOverstyreAccess,
  aksjonspunktCodes,
  toggleOverstyring,
  ...formProps
}) => {
  const togglePa = useCallback(() => toggleOverstyring((oldArray) => [...oldArray, overstyringApKode]), [overstyringApKode]);
  const toggleAv = useCallback(() => {
    formProps.reset();
    toggleOverstyring((oldArray) => oldArray.filter((code) => code !== overstyringApKode));
  }, [formProps, overstyringApKode]);

  return (
    <form onSubmit={formProps.handleSubmit}>
      <FlexContainer>
        <FlexRow>
          {(!erOverstyrt && originalErVilkarOk !== undefined) && (
            <FlexColumn>
              <Image className={styles.status} src={originalErVilkarOk ? innvilgetImage : avslattImage} />
            </FlexColumn>
          )}
          <FlexColumn>
            <Undertittel><FormattedMessage id={panelTittelKode} /></Undertittel>
          </FlexColumn>
          {lovReferanse && (
            <FlexColumn>
              <EtikettLiten className={styles.vilkar}>{lovReferanse}</EtikettLiten>
            </FlexColumn>
          )}
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            {originalErVilkarOk && (
              <>
                <VerticalSpacer eightPx />
                <Element><FormattedMessage id="VilkarresultatMedOverstyringForm.ErOppfylt" /></Element>
              </>
            )}
            {originalErVilkarOk === false && (
              <>
                <VerticalSpacer eightPx />
                <Element><FormattedMessage id="VilkarresultatMedOverstyringForm.ErIkkeOppfylt" /></Element>
              </>
            )}
            {originalErVilkarOk === undefined && (
              <>
                <VerticalSpacer eightPx />
                <Normaltekst><FormattedMessage id="VilkarresultatMedOverstyringForm.IkkeBehandlet" /></Normaltekst>
              </>
            )}
          </FlexColumn>
          {originalErVilkarOk !== undefined && !isHidden(kanOverstyreAccess.isEnabled, aksjonspunktCodes, overstyringApKode) && (
            <>
              {(!erOverstyrt && !overrideReadOnly) && (
                <FlexColumn>
                  <VerticalSpacer eightPx />
                  <Image className={styles.key} src={keyImage} onClick={togglePa} />
                </FlexColumn>
              )}
              {(erOverstyrt || overrideReadOnly) && (
                <FlexColumn>
                  <VerticalSpacer eightPx />
                  <Image className={styles.keyWithoutCursor} src={keyUtgraetImage} />
                </FlexColumn>
              )}
            </>
          )}
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer eightPx />
      {(erOverstyrt || hasAksjonspunkt) && (
        <OverstyringPanel
          erOverstyrt={erOverstyrt}
          isSolvable={isSolvable}
          erVilkarOk={erVilkarOk}
          hasAksjonspunkt={hasAksjonspunkt}
          overrideReadOnly={overrideReadOnly}
          isSubmitting={formProps.submitting}
          isPristine={formProps.pristine}
          toggleAv={toggleAv}
        >
          <VilkarResultPicker
            avslagsarsaker={avslagsarsaker}
            customVilkarIkkeOppfyltText={customVilkarIkkeOppfyltText}
            customVilkarOppfyltText={customVilkarOppfyltText}
            erVilkarOk={erVilkarOk}
            readOnly={overrideReadOnly || !erOverstyrt}
            erMedlemskapsPanel={erMedlemskapsPanel}
          />
        </OverstyringPanel>
      )}
    </form>
  );
};

const buildInitialValues = createSelector(
  [(ownProps: PureOwnProps) => ownProps.behandlingsresultat,
    (ownProps: PureOwnProps) => ownProps.aksjonspunkter,
    (ownProps: PureOwnProps) => ownProps.status,
    (ownProps: PureOwnProps) => ownProps.overstyringApKode],
  (behandlingsresultat, aksjonspunkter, status, overstyringApKode): FormValues => {
    const aksjonspunkt = aksjonspunkter.find((ap) => ap.definisjon.kode === overstyringApKode);
    return {
      isOverstyrt: aksjonspunkt !== undefined,
      begrunnelse: decodeHtmlEntity(aksjonspunkt && aksjonspunkt.begrunnelse ? aksjonspunkt.begrunnelse : ''),
      ...VilkarResultPicker.buildInitialValues(behandlingsresultat, aksjonspunkter, status),
    };
  },
);

const getCustomVilkarText = (medlemskapFom: string, behandlingType: Kodeverk, erOppfylt: boolean): TextValues => {
  const isBehandlingRevurderingFortsattMedlemskap = behandlingType.kode === BehandlingType.REVURDERING && !!medlemskapFom;
  if (isBehandlingRevurderingFortsattMedlemskap) {
    return {
      id: erOppfylt ? 'VilkarResultPicker.VilkarOppfyltRevurderingFom' : 'VilkarResultPicker.VilkarIkkeOppfyltRevurderingFom',
      values: { fom: moment(medlemskapFom).format(DDMMYYYY_DATE_FORMAT), b: (chunks) => <b>{chunks}</b> },
    };
  }
  return undefined;
};

const getCustomVilkarTextForOppfylt = createSelector(
  [(ownProps: PureOwnProps) => ownProps.medlemskapFom, (ownProps: PureOwnProps) => ownProps.behandlingType],
  (medlemskapFom, behandlingType): TextValues => getCustomVilkarText(medlemskapFom, behandlingType, true),
);
const getCustomVilkarTextForIkkeOppfylt = createSelector(
  [(ownProps: PureOwnProps) => ownProps.medlemskapFom, (ownProps: PureOwnProps) => ownProps.behandlingType],
  (medlemskapFom, behandlingType): TextValues => getCustomVilkarText(medlemskapFom, behandlingType, false),
);

const transformValues = (values: FormValues, overstyringApKode: string): any => ({
  kode: overstyringApKode,
  begrunnelse: values.begrunnelse,
  ...VilkarResultPicker.transformValues(values),
});

const validate = (values: FormValues): any => VilkarResultPicker.validate(values.erVilkarOk, values.avslagCode);

const lagSubmitFn = createSelector([
  (ownProps: PureOwnProps) => ownProps.submitCallback, (ownProps: PureOwnProps) => ownProps.overstyringApKode],
(submitCallback, overstyringApKode) => (values: FormValues) => submitCallback([transformValues(values, overstyringApKode)]));

const mapStateToPropsFactory = (_initialState, initialOwnProps: PureOwnProps) => {
  const { overstyringApKode } = initialOwnProps;
  const validateFn = (values: FormValues) => validate(values);
  const aksjonspunktCodes = initialOwnProps.aksjonspunkter.map((a) => a.definisjon.kode);
  const formName = `VilkarresultatForm_${overstyringApKode}`;

  return (state, ownProps: PureOwnProps): MappedOwnProps => {
    const {
      behandlingId, behandlingVersjon, aksjonspunkter, erOverstyrt,
    } = ownProps;

    const aksjonspunkt = aksjonspunkter.find((ap) => ap.definisjon.kode === overstyringApKode);
    const isSolvable = aksjonspunkt !== undefined
      ? !(aksjonspunkt.status.kode === aksjonspunktStatus.OPPRETTET && !aksjonspunkt.kanLoses) : false;

    const initialValues = buildInitialValues(ownProps);

    const erOppfylt = vilkarUtfallType.OPPFYLT === ownProps.status;
    const erVilkarOk = vilkarUtfallType.IKKE_VURDERT !== ownProps.status ? erOppfylt : undefined;

    return {
      aksjonspunktCodes,
      initialValues,
      onSubmit: lagSubmitFn(ownProps),
      customVilkarOppfyltText: getCustomVilkarTextForOppfylt(ownProps),
      customVilkarIkkeOppfyltText: getCustomVilkarTextForIkkeOppfylt(ownProps),
      isSolvable: erOverstyrt || isSolvable,
      hasAksjonspunkt: aksjonspunkt !== undefined,
      validate: validateFn,
      form: formName,
      originalErVilkarOk: erVilkarOk,
      erVilkarOk: behandlingFormValueSelector(formName, behandlingId, behandlingVersjon)(state, 'erVilkarOk'),
    };
  };
};

// @ts-ignore Kan ikkje senda med formnavn her sidan det er dynamisk. Må fikse på ein annan måte
const form = behandlingForm({ enableReinitialize: true })(VilkarresultatMedOverstyringForm);
export default connect(mapStateToPropsFactory)(form);
