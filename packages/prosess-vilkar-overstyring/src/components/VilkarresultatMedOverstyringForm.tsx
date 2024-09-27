import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { CheckmarkCircleFillIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { OverstyringKnapp } from '@navikt/ft-ui-komponenter';

import { Form } from '@navikt/ft-form-hooks';
import { Aksjonspunkt, AlleKodeverk, Behandling, KodeverkMedNavn, ManuellBehandlingResultat } from '@navikt/fp-types';
import {
  AksjonspunktCode,
  aksjonspunktStatus,
  OverstyringAksjonspunkter,
  VilkarType,
  vilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { OverstyringPanel, VilkarResultPicker } from '@navikt/fp-prosess-felles';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import {
  OverstyringAp,
  OverstyringMedlemskapsvilkaretAp,
  OverstyringMedlemskapsvilkaretLopendeAp,
  OverstyringMedlemskapvilkaretForutgaendeAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';

import styles from './vilkarresultatMedOverstyringForm.module.css';
import {
  VilkårResultatPickerMedlemskapsvilkåret,
  VilkårResultatPickerMedlemskapsvilkåretForutgående,
} from '@navikt/fp-fakta-medlemskap';

const isOverridden = (aksjonspunkter: Aksjonspunkt[], aksjonspunktCode: string): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === aksjonspunktCode);

const isHidden = (kanOverstyre: boolean, aksjonspunkter: Aksjonspunkt[], aksjonspunktCode: string): boolean =>
  !isOverridden(aksjonspunkter, aksjonspunktCode) && !kanOverstyre;

type FormValues = {
  erVilkarOk?: boolean;
  avslagskode?: string;
  opphørFom?: string;
  medlemFom?: string;
  begrunnelse?: string;
  isOverstyrt?: boolean;
};

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  overstyringApKode: OverstyringAksjonspunkter,
  behandlingsresultat: Behandling['behandlingsresultat'] | undefined,
  medlemskapManuellBehandlingResultat: ManuellBehandlingResultat | undefined,
): FormValues => {
  const aksjonspunkt = aksjonspunkter.find(ap => ap.definisjon === overstyringApKode);
  const felles = {
    isOverstyrt: aksjonspunkt !== undefined,
    begrunnelse: decodeHtmlEntity(aksjonspunkt && aksjonspunkt.begrunnelse ? aksjonspunkt.begrunnelse : ''),
  };
  console.log(medlemskapManuellBehandlingResultat);

  switch (overstyringApKode) {
    case AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR:
    case AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE:
      return {
        ...felles,
        avslagskode: medlemskapManuellBehandlingResultat?.avslagskode ?? undefined,
        medlemFom: medlemskapManuellBehandlingResultat?.medlemFom ?? undefined,
        opphørFom: medlemskapManuellBehandlingResultat?.opphørFom ?? undefined,
      };
    default:
      return {
        ...felles,
        ...VilkarResultPicker.buildInitialValues(aksjonspunkter, status, behandlingsresultat),
      };
  }
};
type OverstyringVilkår =
  | OverstyringAp
  | OverstyringMedlemskapsvilkaretLopendeAp
  | OverstyringMedlemskapsvilkaretAp
  | OverstyringMedlemskapvilkaretForutgaendeAp;

const transformValues = (values: FormValues, overstyringApKode: OverstyringAksjonspunkter): OverstyringVilkår => {
  const felles = {
    kode: overstyringApKode,
    begrunnelse: values.begrunnelse,
  };
  switch (overstyringApKode) {
    case AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR:
      return {
        ...felles,
        avslagskode: values.avslagskode,
        medlemFom: values.medlemFom,
      };
    case AksjonspunktCode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE:
      return {
        ...felles,
        avslagskode: values.avslagskode,
        opphørFom: values.opphørFom,
      };
    default:
      return {
        ...felles,
        ...VilkarResultPicker.transformValues(values),
      };
  }
};

interface OwnProps {
  alleKodeverk: AlleKodeverk;
  ytelseType: string;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  medlemskapManuellBehandlingResultat?: ManuellBehandlingResultat;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: OverstyringVilkår) => Promise<void>;
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
  vilkarType: string;
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
  alleKodeverk,
  ytelseType,
  panelTittelKode,
  erOverstyrt,
  overstyringApKode,
  lovReferanse,
  vilkarType,
  avslagsarsaker,
  aksjonspunkter,
  overrideReadOnly,
  kanOverstyreAccess,
  behandlingsresultat,
  medlemskapManuellBehandlingResultat,
  toggleOverstyring,
  submitCallback,
  erIkkeGodkjentAvBeslutter,
  status,
  formData,
  setFormData,
}) => {
  const initialValues = useMemo(
    () =>
      buildInitialValues(
        aksjonspunkter,
        status,
        overstyringApKode,
        behandlingsresultat,
        medlemskapManuellBehandlingResultat,
      ),
    [aksjonspunkter, status, overstyringApKode, behandlingsresultat],
  );
  console.log(initialValues);
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

  const erVilkarOk = formMethods.watch('erVilkarOk');

  const aksjonspunkt = aksjonspunkter.find(ap => ap.definisjon === overstyringApKode);
  const hasAksjonspunkt = aksjonspunkt !== undefined;
  const isSolvable =
    aksjonspunkt !== undefined
      ? !(aksjonspunkt.status === aksjonspunktStatus.OPPRETTET && !aksjonspunkt.kanLoses)
      : false;

  const erOppfylt = vilkarUtfallType.OPPFYLT === status;
  const originalErVilkarOk = vilkarUtfallType.IKKE_VURDERT !== status ? erOppfylt : undefined;

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, overstyringApKode))}
      setDataOnUnmount={setFormData}
    >
      <VStack gap="2">
        <VStack gap="4">
          <HStack gap="2">
            {!erOverstyrt && originalErVilkarOk !== undefined && (
              <>
                {originalErVilkarOk && <CheckmarkCircleFillIcon className={styles.godkjentImage} />}
                {!originalErVilkarOk && <XMarkOctagonFillIcon className={styles.avslattImage} />}
              </>
            )}
            <Heading size="small">
              <FormattedMessage id={panelTittelKode} />
            </Heading>
            {lovReferanse && <Detail className={styles.vilkar}>{lovReferanse}</Detail>}
          </HStack>
          <HStack gap="2">
            {originalErVilkarOk && (
              <Label size="small">
                <FormattedMessage id="VilkarresultatMedOverstyringForm.ErOppfylt" />
              </Label>
            )}
            {originalErVilkarOk === false && (
              <Label size="small">
                <FormattedMessage id="VilkarresultatMedOverstyringForm.ErIkkeOppfylt" />
              </Label>
            )}
            {originalErVilkarOk === undefined && (
              <BodyShort size="small">
                <FormattedMessage id="VilkarresultatMedOverstyringForm.IkkeBehandlet" />
              </BodyShort>
            )}
            {originalErVilkarOk !== undefined &&
              !isHidden(kanOverstyreAccess.isEnabled, aksjonspunkter, overstyringApKode) && (
                <OverstyringKnapp onClick={togglePa} erOverstyrt={erOverstyrt || overrideReadOnly} />
              )}
          </HStack>
        </VStack>
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
            {VilkarType.MEDLEMSKAPSVILKARET === vilkarType && (
              <VilkårResultatPickerMedlemskapsvilkåret
                alleKodeverk={alleKodeverk}
                readOnly={overrideReadOnly || !erOverstyrt}
                ytelse={ytelseType}
              />
            )}

            {VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE === vilkarType && (
              <VilkårResultatPickerMedlemskapsvilkåretForutgående
                alleKodeverk={alleKodeverk}
                readOnly={overrideReadOnly || !erOverstyrt}
              />
            )}

            {![VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE, VilkarType.MEDLEMSKAPSVILKARET].includes(
              vilkarType as VilkarType,
            ) && (
              <VilkarResultPicker
                avslagsarsaker={avslagsarsaker}
                readOnly={overrideReadOnly || !erOverstyrt}
                customVilkarOppfyltText={<FormattedMessage id="VilkarresultatMedOverstyringForm.ErOppfylt" />}
                customVilkarIkkeOppfyltText={
                  <FormattedMessage id="VilkarresultatMedOverstyringForm.VilkarIkkeOppfylt" values={{ b: bTag }} />
                }
              />
            )}
          </OverstyringPanel>
        )}
      </VStack>
    </Form>
  );
};

export default VilkarresultatMedOverstyringForm;
