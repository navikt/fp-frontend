import React, {
  FunctionComponent, useCallback, useMemo,
} from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import {
  Undertittel, Element, Undertekst, Normaltekst,
} from 'nav-frontend-typografi';

import { Form } from '@fpsak-frontend/form-hooks';
import { KodeverkMedNavn, Aksjonspunkt, Behandling } from '@fpsak-frontend/types';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import {
  FlexContainer, FlexRow, FlexColumn, Image, VerticalSpacer,
} from '@fpsak-frontend/shared-components';
import { OverstyringPanel, VilkarResultPicker } from '@fpsak-frontend/prosess-felles';
import aksjonspunktStatus from '@fpsak-frontend/kodeverk/src/aksjonspunktStatus';
import { OverstyringAksjonspunkter } from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { DDMMYYYY_DATE_FORMAT, decodeHtmlEntity } from '@fpsak-frontend/utils';
import avslattImage from '@fpsak-frontend/assets/images/avslaatt_hover.svg';
import innvilgetImage from '@fpsak-frontend/assets/images/innvilget_hover.svg';
import keyImage from '@fpsak-frontend/assets/images/key-1-rotert.svg';
import keyUtgraetImage from '@fpsak-frontend/assets/images/key-1-rotert-utgraet.svg';
import { OverstyringAp, OverstyringMedlemskapsvilkaretLopendeAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import styles from './vilkarresultatMedOverstyringForm.less';

type TextValues = {
  id: string;
  values: {
    fom: string;
    b: (chunks: any) => any;
  };
}

const isOverridden = (aksjonspunkter: Aksjonspunkt[], aksjonspunktCode: string): boolean => aksjonspunkter
  .some((ap) => ap.definisjon === aksjonspunktCode);
const isHidden = (
  kanOverstyre: boolean,
  aksjonspunkter: Aksjonspunkt[],
  aksjonspunktCode: string,
): boolean => !isOverridden(aksjonspunkter, aksjonspunktCode) && !kanOverstyre;

const hentErOppfyltTekstkode = (customVilkarOppfyltText?: TextValues) => (customVilkarOppfyltText
  ? customVilkarOppfyltText.id : 'VilkarresultatMedOverstyringForm.ErOppfylt');
const hentErIkkeOppfyltTekstkode = (customVilkarIkkeOppfyltText?: TextValues) => (customVilkarIkkeOppfyltText
  ? customVilkarIkkeOppfyltText.id : 'VilkarresultatMedOverstyringForm.VilkarIkkeOppfylt');

const getCustomVilkarText = (
  medlemskapFom: string,
  behandlingType: string,
  erOppfylt: boolean,
): TextValues | undefined => {
  const isBehandlingRevurderingFortsattMedlemskap = behandlingType === BehandlingType.REVURDERING && !!medlemskapFom;
  if (isBehandlingRevurderingFortsattMedlemskap) {
    return {
      id: erOppfylt ? 'VilkarresultatMedOverstyringForm.VilkarOppfyltRevurderingFom' : 'VilkarresultatMedOverstyringForm.VilkarIkkeOppfyltRevurderingFom',
      values: { fom: moment(medlemskapFom).format(DDMMYYYY_DATE_FORMAT), b: (chunks) => <b>{chunks}</b> },
    };
  }
  return undefined;
};

const getCustomVilkarTextForOppfylt = (
  medlemskapFom: string,
  behandlingType: string,
): TextValues | undefined => getCustomVilkarText(medlemskapFom, behandlingType, true);

const getCustomVilkarTextForIkkeOppfylt = (
  medlemskapFom: string,
  behandlingType: string,
): TextValues | undefined => getCustomVilkarText(medlemskapFom, behandlingType, false);

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  avslagDato?: string;
  begrunnelse?: string;
  isOverstyrt?: boolean;
}

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  overstyringApKode: OverstyringAksjonspunkter,
  behandlingsresultat?: Behandling['behandlingsresultat'],
): FormValues => {
  const aksjonspunkt = aksjonspunkter.find((ap) => ap.definisjon === overstyringApKode);
  return {
    isOverstyrt: aksjonspunkt !== undefined,
    begrunnelse: decodeHtmlEntity(aksjonspunkt && aksjonspunkt.begrunnelse ? aksjonspunkt.begrunnelse : ''),
    ...VilkarResultPicker.buildInitialValues(behandlingsresultat, aksjonspunkter, status),
  };
};

const transformValues = (
  values: FormValues,
  overstyringApKode: OverstyringAksjonspunkter,
): OverstyringAp | OverstyringMedlemskapsvilkaretLopendeAp => ({
  kode: overstyringApKode,
  begrunnelse: values.begrunnelse,
  ...VilkarResultPicker.transformValues(values),
});

interface OwnProps {
  behandlingType: string;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  medlemskapFom: string;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: OverstyringAp | OverstyringMedlemskapsvilkaretLopendeAp) => Promise<void>;
  overrideReadOnly: boolean;
  kanOverstyreAccess: {
    isEnabled: boolean;
  };
  toggleOverstyring: (fn: (oldArray: []) => void) => void;
  avslagsarsaker: KodeverkMedNavn[];
  status: string;
  erOverstyrt?: boolean;
  panelTittelKode: string;
  overstyringApKode: OverstyringAksjonspunkter;
  lovReferanse?: string;
  erMedlemskapsPanel: boolean;
  erIkkeGodkjentAvBeslutter: boolean;
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
}

/**
 * VilkarresultatForm
 *
 * Viser resultat av vilkårskjøring når det ikke finnes tilknyttede aksjonspunkter.
 * Resultatet kan overstyres av Nav-ansatt med overstyr-rettighet.
 */
const VilkarresultatMedOverstyringForm: FunctionComponent<OwnProps> = ({
  panelTittelKode,
  erOverstyrt,
  overstyringApKode,
  lovReferanse,
  erMedlemskapsPanel,
  avslagsarsaker,
  aksjonspunkter,
  overrideReadOnly,
  kanOverstyreAccess,
  behandlingsresultat,
  toggleOverstyring,
  submitCallback,
  erIkkeGodkjentAvBeslutter,
  medlemskapFom,
  behandlingType,
  status,
  formData,
  setFormData,
}) => {
  const initialValues = useMemo(() => buildInitialValues(aksjonspunkter, status, overstyringApKode, behandlingsresultat),
    [aksjonspunkter, status, overstyringApKode, behandlingsresultat]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const togglePa = useCallback(() => toggleOverstyring((oldArray) => [...oldArray, overstyringApKode]), [overstyringApKode]);
  const toggleAv = useCallback(() => {
    formMethods.reset();
    toggleOverstyring((oldArray) => oldArray.filter((code) => code !== overstyringApKode));
  }, [toggleOverstyring, overstyringApKode]);

  const erVilkarOk = formMethods.watch('erVilkarOk');

  const customVilkarOppfyltText = useMemo(() => getCustomVilkarTextForOppfylt(medlemskapFom, behandlingType), [medlemskapFom, behandlingType]);
  const customVilkarIkkeOppfyltText = useMemo(() => getCustomVilkarTextForIkkeOppfylt(medlemskapFom, behandlingType), [medlemskapFom, behandlingType]);

  const aksjonspunkt = aksjonspunkter.find((ap) => ap.definisjon === overstyringApKode);
  const hasAksjonspunkt = aksjonspunkt !== undefined;
  const isSolvable = aksjonspunkt !== undefined
    ? !(aksjonspunkt.status === aksjonspunktStatus.OPPRETTET && !aksjonspunkt.kanLoses) : false;

  const erOppfylt = vilkarUtfallType.OPPFYLT === status;
  const originalErVilkarOk = vilkarUtfallType.IKKE_VURDERT !== status ? erOppfylt : undefined;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, overstyringApKode))}
      setDataOnUnmount={setFormData}
    >
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
              <Undertekst className={styles.vilkar}>{lovReferanse}</Undertekst>
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
          {originalErVilkarOk !== undefined && !isHidden(kanOverstyreAccess.isEnabled, aksjonspunkter, overstyringApKode) && (
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
          isSolvable={erOverstyrt || isSolvable}
          erVilkarOk={erVilkarOk}
          hasAksjonspunkt={hasAksjonspunkt}
          overrideReadOnly={overrideReadOnly}
          isSubmitting={formMethods.formState.isSubmitting}
          isPristine={!formMethods.formState.isDirty}
          toggleAv={toggleAv}
          erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        >
          <VilkarResultPicker
            avslagsarsaker={avslagsarsaker}
            customVilkarOppfyltText={(
              <FormattedMessage
                id={hentErOppfyltTekstkode(customVilkarOppfyltText)}
                values={customVilkarOppfyltText ? {
                  ...customVilkarOppfyltText.values,
                } : { b: (chunks: any) => <b>{chunks}</b> }}
              />
            )}
            customVilkarIkkeOppfyltText={(
              <FormattedMessage
                id={hentErIkkeOppfyltTekstkode(customVilkarIkkeOppfyltText)}
                values={customVilkarIkkeOppfyltText ? {
                  ...customVilkarIkkeOppfyltText.values,
                } : { b: (chunks: any) => <b>{chunks}</b> }}
              />
            )}
            readOnly={overrideReadOnly || !erOverstyrt}
            erMedlemskapsPanel={erMedlemskapsPanel}
          />
        </OverstyringPanel>
      )}
    </Form>
  );
};

export default VilkarresultatMedOverstyringForm;
