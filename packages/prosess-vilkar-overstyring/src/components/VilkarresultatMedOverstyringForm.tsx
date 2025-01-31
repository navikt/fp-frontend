import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { CheckmarkCircleFillIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { OverstyringKnapp } from '@navikt/ft-ui-komponenter';
import { decodeHtmlEntity } from '@navikt/ft-utils';

import { createMedlemskapInitialValues, MedlemskapVurdering, MedlemskapVurderinger } from '@navikt/fp-fakta-medlemskap';
import {
  AksjonspunktKode,
  AksjonspunktStatus,
  BehandlingType,
  OverstyringAksjonspunkter,
  VilkarUtfallType,
} from '@navikt/fp-kodeverk';
import { OverstyringPanel, VilkarResultPicker } from '@navikt/fp-prosess-felles';
import { Aksjonspunkt, Behandling, KodeverkMedNavn, ManuellBehandlingResultat } from '@navikt/fp-types';
import {
  OverstyringAp,
  OverstyringMedlemskapsvilkaretAp,
  OverstyringMedlemskapsvilkaretLopendeAp,
  OverstyringMedlemskapvilkaretForutgaendeAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData } from '@navikt/fp-utils';

import styles from './vilkarresultatMedOverstyringForm.module.css';

const isOverridden = (aksjonspunkter: Aksjonspunkt[], aksjonspunktCode: string): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === aksjonspunktCode);

const isHidden = (kanOverstyre: boolean, aksjonspunkter: Aksjonspunkt[], aksjonspunktCode: string): boolean =>
  !isOverridden(aksjonspunkter, aksjonspunktCode) && !kanOverstyre;

type FormValues = {
  erVilkarOk?: boolean;
  vurdering?: MedlemskapVurdering;
  avslagskode?: string;
  opphørFom?: string;
  medlemFom?: string;
  begrunnelse?: string;
  isOverstyrt?: boolean;
};

function erOverstyringAvMedlemskap(overstyringApKode: AksjonspunktKode) {
  return [
    AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR,
    AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE,
  ].includes(overstyringApKode);
}

const createInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  overstyringApKode: OverstyringAksjonspunkter,
  behandlingsresultat: Behandling['behandlingsresultat'] | undefined,
  medlemskapManuellBehandlingResultat: ManuellBehandlingResultat | undefined,
): FormValues => {
  const aksjonspunkt = aksjonspunkter.find(ap => ap.definisjon === overstyringApKode);
  const felles = {
    isOverstyrt: aksjonspunkt !== undefined,
    begrunnelse: decodeHtmlEntity(aksjonspunkt?.begrunnelse ?? ''),
  };

  if (erOverstyringAvMedlemskap(overstyringApKode)) {
    if (aksjonspunkt) {
      return {
        ...felles,
        ...createMedlemskapInitialValues(aksjonspunkt, medlemskapManuellBehandlingResultat || null),
      };
    } else {
      return felles;
    }
  }
  return {
    ...felles,
    ...VilkarResultPicker.buildInitialValues(aksjonspunkter, status, behandlingsresultat),
  };
};

type OverstyringVilkår =
  | OverstyringAp
  | OverstyringMedlemskapsvilkaretLopendeAp
  | OverstyringMedlemskapsvilkaretAp
  | OverstyringMedlemskapvilkaretForutgaendeAp;

const transformValues = (values: FormValues, overstyringApKode: OverstyringAksjonspunkter): OverstyringVilkår => {
  const { vurdering, avslagskode, begrunnelse, medlemFom, opphørFom } = values;
  const felles = {
    kode: overstyringApKode,
    begrunnelse: begrunnelse,
  };
  switch (overstyringApKode) {
    case AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR:
      return {
        ...felles,
        avslagskode: vurdering !== MedlemskapVurdering.OPPFYLT ? avslagskode : undefined,
        opphørFom: vurdering === MedlemskapVurdering.DELVIS_OPPFYLT ? opphørFom : undefined,
      };
    case AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE:
      return {
        ...felles,
        avslagskode: vurdering !== MedlemskapVurdering.OPPFYLT ? avslagskode : undefined,
        medlemFom: vurdering === MedlemskapVurdering.IKKE_OPPFYLT ? medlemFom : undefined,
      };
    default:
      return {
        ...felles,
        ...VilkarResultPicker.transformValues(values),
      };
  }
};

interface OwnProps {
  ytelseType: string;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  medlemskapManuellBehandlingResultat?: ManuellBehandlingResultat;
  aksjonspunkter: Aksjonspunkt[];
  behandling: Behandling;
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
  erIkkeGodkjentAvBeslutter: boolean;
}

/**
 * VilkarresultatForm
 *
 * Viser resultat av vilkårskjøring når det ikke finnes tilknyttede aksjonspunkter.
 * Resultatet kan overstyres av Nav-ansatt med overstyr-rettighet.
 */
const VilkarresultatMedOverstyringForm: FunctionComponent<OwnProps> = ({
  ytelseType,
  panelTittelKode,
  erOverstyrt,
  overstyringApKode,
  lovReferanse,
  avslagsarsaker,
  aksjonspunkter,
  behandling,
  overrideReadOnly,
  kanOverstyreAccess,
  behandlingsresultat,
  medlemskapManuellBehandlingResultat,
  toggleOverstyring,
  submitCallback,
  erIkkeGodkjentAvBeslutter,
  status,
}) => {
  const initialValues = useMemo(
    () =>
      createInitialValues(
        aksjonspunkter,
        status,
        overstyringApKode,
        behandlingsresultat,
        medlemskapManuellBehandlingResultat,
      ),
    [aksjonspunkter, status, overstyringApKode, behandlingsresultat],
  );

  const { formData, setFormData } = useFormData<FormValues>();
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
      ? !(aksjonspunkt.status === AksjonspunktStatus.OPPRETTET && !aksjonspunkt.kanLoses)
      : false;

  const erOppfylt = VilkarUtfallType.OPPFYLT === status;
  const originalErVilkarOk = VilkarUtfallType.IKKE_VURDERT !== status ? erOppfylt : undefined;

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
            {erOverstyringAvMedlemskap(overstyringApKode) ? (
              <MedlemskapVurderinger
                avslagsarsaker={avslagsarsaker}
                readOnly={overrideReadOnly || !erOverstyrt}
                ytelse={ytelseType}
                erRevurdering={behandling.type === BehandlingType.REVURDERING}
                erForutgående={overstyringApKode === AksjonspunktKode.OVERSTYR_MEDLEMSKAPSVILKAR_FORUTGAENDE}
              />
            ) : (
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
