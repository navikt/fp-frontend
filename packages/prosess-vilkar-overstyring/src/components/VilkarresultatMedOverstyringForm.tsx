import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { CheckmarkCircleFillIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { Heading, Label, Detail, BodyShort } from '@navikt/ds-react';
import { FlexContainer, FlexRow, FlexColumn, VerticalSpacer, OverstyringKnapp } from '@navikt/ft-ui-komponenter';

import { Form } from '@navikt/ft-form-hooks';
import { KodeverkMedNavn, Aksjonspunkt, Behandling } from '@navikt/fp-types';
import {
  vilkarUtfallType,
  aksjonspunktStatus,
  OverstyringAksjonspunkter,
  behandlingType as BehandlingType,
} from '@navikt/fp-kodeverk';
import { OverstyringPanel, VilkarResultPicker } from '@navikt/fp-prosess-felles';
import { DDMMYYYY_DATE_FORMAT, decodeHtmlEntity } from '@navikt/ft-utils';
import { OverstyringAp, OverstyringMedlemskapsvilkaretLopendeAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import styles from './vilkarresultatMedOverstyringForm.module.css';

type TextValues = {
  id: string;
  values: {
    fom: string;
    b: (chunks: any) => any;
  };
};

const isOverridden = (aksjonspunkter: Aksjonspunkt[], aksjonspunktCode: string): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === aksjonspunktCode);
const isHidden = (kanOverstyre: boolean, aksjonspunkter: Aksjonspunkt[], aksjonspunktCode: string): boolean =>
  !isOverridden(aksjonspunkter, aksjonspunktCode) && !kanOverstyre;

const hentErOppfyltTekstkode = (customVilkarOppfyltText?: TextValues) =>
  customVilkarOppfyltText ? customVilkarOppfyltText.id : 'VilkarresultatMedOverstyringForm.ErOppfylt';
const hentErIkkeOppfyltTekstkode = (customVilkarIkkeOppfyltText?: TextValues) =>
  customVilkarIkkeOppfyltText ? customVilkarIkkeOppfyltText.id : 'VilkarresultatMedOverstyringForm.VilkarIkkeOppfylt';

const getCustomVilkarText = (
  behandlingType: string,
  erOppfylt: boolean,
  medlemskapFom?: string,
): TextValues | undefined => {
  const isBehandlingRevurderingFortsattMedlemskap = behandlingType === BehandlingType.REVURDERING && !!medlemskapFom;
  if (isBehandlingRevurderingFortsattMedlemskap) {
    return {
      id: erOppfylt
        ? 'VilkarresultatMedOverstyringForm.VilkarOppfyltRevurderingFom'
        : 'VilkarresultatMedOverstyringForm.VilkarIkkeOppfyltRevurderingFom',
      values: { fom: moment(medlemskapFom).format(DDMMYYYY_DATE_FORMAT), b: (chunks: any) => <b>{chunks}</b> },
    };
  }
  return undefined;
};

const getCustomVilkarTextForOppfylt = (behandlingType: string, medlemskapFom?: string): TextValues | undefined =>
  getCustomVilkarText(behandlingType, true, medlemskapFom);

const getCustomVilkarTextForIkkeOppfylt = (behandlingType: string, medlemskapFom?: string): TextValues | undefined =>
  getCustomVilkarText(behandlingType, false, medlemskapFom);

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  opphørFom?: string;
  begrunnelse?: string;
  isOverstyrt?: boolean;
};

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  overstyringApKode: OverstyringAksjonspunkter,
  behandlingsresultat?: Behandling['behandlingsresultat'],
): FormValues => {
  const aksjonspunkt = aksjonspunkter.find(ap => ap.definisjon === overstyringApKode);
  return {
    isOverstyrt: aksjonspunkt !== undefined,
    begrunnelse: decodeHtmlEntity(aksjonspunkt && aksjonspunkt.begrunnelse ? aksjonspunkt.begrunnelse : ''),
    ...VilkarResultPicker.buildInitialValues(aksjonspunkter, status, behandlingsresultat),
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
  medlemskapFom?: string;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: OverstyringAp | OverstyringMedlemskapsvilkaretLopendeAp) => Promise<void>;
  overrideReadOnly: boolean;
  kanOverstyreAccess: {
    isEnabled: boolean;
  };
  toggleOverstyring: (fn: (oldArray: []) => void) => void;
  avslagsarsaker: KodeverkMedNavn[];
  status: string;
  erOverstyrt: boolean;
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
  const initialValues = useMemo(
    () => buildInitialValues(aksjonspunkter, status, overstyringApKode, behandlingsresultat),
    [aksjonspunkter, status, overstyringApKode, behandlingsresultat],
  );
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const togglePa = useCallback(
    () => toggleOverstyring(oldArray => [...oldArray, overstyringApKode]),
    [overstyringApKode],
  );
  const toggleAv = useCallback(() => {
    formMethods.reset();
    toggleOverstyring(oldArray => oldArray.filter(code => code !== overstyringApKode));
  }, [toggleOverstyring, overstyringApKode]);

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  const erVilkarOk = formMethods.watch('erVilkarOk');

  const customVilkarOppfyltText = useMemo(
    () => getCustomVilkarTextForOppfylt(behandlingType, medlemskapFom),
    [medlemskapFom, behandlingType],
  );
  const customVilkarIkkeOppfyltText = useMemo(
    () => getCustomVilkarTextForIkkeOppfylt(behandlingType, medlemskapFom),
    [medlemskapFom, behandlingType],
  );

  const aksjonspunkt = aksjonspunkter.find(ap => ap.definisjon === overstyringApKode);
  const hasAksjonspunkt = aksjonspunkt !== undefined;
  const isSolvable =
    aksjonspunkt !== undefined
      ? !(aksjonspunkt.status === aksjonspunktStatus.OPPRETTET && !aksjonspunkt.kanLoses)
      : false;

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
          {!erOverstyrt && originalErVilkarOk !== undefined && (
            <FlexColumn>
              {originalErVilkarOk && <CheckmarkCircleFillIcon className={styles.godkjentImage} />}
              {!originalErVilkarOk && <XMarkOctagonFillIcon className={styles.avslattImage} />}
            </FlexColumn>
          )}
          <FlexColumn>
            <Heading size="small">
              <FormattedMessage id={panelTittelKode} />
            </Heading>
          </FlexColumn>
          {lovReferanse && (
            <FlexColumn>
              <Detail className={styles.vilkar}>{lovReferanse}</Detail>
            </FlexColumn>
          )}
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            {originalErVilkarOk && (
              <>
                <VerticalSpacer eightPx />
                <Label size="small">
                  <FormattedMessage id="VilkarresultatMedOverstyringForm.ErOppfylt" />
                </Label>
              </>
            )}
            {originalErVilkarOk === false && (
              <>
                <VerticalSpacer eightPx />
                <Label size="small">
                  <FormattedMessage id="VilkarresultatMedOverstyringForm.ErIkkeOppfylt" />
                </Label>
              </>
            )}
            {originalErVilkarOk === undefined && (
              <>
                <VerticalSpacer eightPx />
                <BodyShort size="small">
                  <FormattedMessage id="VilkarresultatMedOverstyringForm.IkkeBehandlet" />
                </BodyShort>
              </>
            )}
          </FlexColumn>
          {originalErVilkarOk !== undefined &&
            !isHidden(kanOverstyreAccess.isEnabled, aksjonspunkter, overstyringApKode) && (
              <FlexColumn>
                <VerticalSpacer eightPx />
                <OverstyringKnapp onClick={togglePa} erOverstyrt={erOverstyrt || overrideReadOnly} />
              </FlexColumn>
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
            customVilkarOppfyltText={
              <FormattedMessage
                id={hentErOppfyltTekstkode(customVilkarOppfyltText)}
                values={
                  customVilkarOppfyltText
                    ? {
                        ...customVilkarOppfyltText.values,
                      }
                    : { b: bTag }
                }
              />
            }
            customVilkarIkkeOppfyltText={
              <FormattedMessage
                id={hentErIkkeOppfyltTekstkode(customVilkarIkkeOppfyltText)}
                values={
                  customVilkarIkkeOppfyltText
                    ? {
                        ...customVilkarIkkeOppfyltText.values,
                      }
                    : { b: bTag }
                }
              />
            }
            readOnly={overrideReadOnly || !erOverstyrt}
            erMedlemskapsPanel={erMedlemskapsPanel}
          />
        </OverstyringPanel>
      )}
    </Form>
  );
};

export default VilkarresultatMedOverstyringForm;
