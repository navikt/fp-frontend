import { useForm, useWatch } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { CheckmarkCircleFillIcon, XMarkOctagonFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Detail, Heading, HStack, Label, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { OverstyringKnapp } from '@navikt/ft-ui-komponenter';
import { BTag, decodeHtmlEntity } from '@navikt/ft-utils';

import { MedlemskapVurdering, MedlemskapVurderinger } from '@navikt/fp-fakta-medlemskap';
import { OverstyringKode } from '@navikt/fp-kodeverk';
import { OverstyringPanel, VilkarResultPicker } from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, Avslagsarsak, BehandlingFpSak, ManuellBehandlingResultat, Vilkår } from '@navikt/fp-types';
import type { OverstyringAksjonspunktTilBekreftelse } from '@navikt/fp-types-avklar-aksjonspunkter';
import {
  erAksjonspunktÅpent,
  useMellomlagretFormData,
  usePanelDataContext,
  usePanelOverstyring,
} from '@navikt/fp-utils';

import styles from './vilkarresultatMedOverstyringForm.module.css';

export type VilkårOverstyringAksjonspunkter =
  | OverstyringKode.OVERSTYRING_AV_SØKNADSFRISTVILKÅRET
  | OverstyringKode.OVERSTYRING_AV_FØDSELSVILKÅRET
  | OverstyringKode.OVERSTYRING_AV_FØDSELSVILKÅRET_FAR_MEDMOR
  | OverstyringKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET
  | OverstyringKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR
  | OverstyringKode.OVERSTYRING_AV_OPPTJENINGSVILKÅRET;

const isOverridden = (aksjonspunkter: Aksjonspunkt[], aksjonspunktCode: string): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === aksjonspunktCode);

const isHidden = (kanOverstyre: boolean, aksjonspunkter: Aksjonspunkt[], aksjonspunktCode: string): boolean =>
  !isOverridden(aksjonspunkter, aksjonspunktCode) && !kanOverstyre;

type FormValues = {
  erVilkårOk?: boolean;
  vurdering?: MedlemskapVurdering;
  avslagskode?: Avslagsarsak;
  opphørFom?: string;
  medlemFom?: string;
  begrunnelse?: string;
  isOverstyrt?: boolean;
};

const erOverstyringAvMedlemskap = (overstyringApKode: OverstyringKode) =>
  OverstyringKode.OVERSTYRING_AV_MEDLEMSKAPSVILKÅRET === overstyringApKode ||
  OverstyringKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR === overstyringApKode;

interface Props {
  medlemskapManuellBehandlingResultat: ManuellBehandlingResultat | undefined;
  vilkår: Vilkår | undefined;
  status: string;
  panelTekstKode: string;
}

/**
 * VilkarresultatForm
 *
 * Viser resultat av vilkårskjøring når det ikke finnes tilknyttede aksjonspunkter.
 * Resultatet kan overstyres av Nav-ansatt med overstyr-rettighet.
 */
export const VilkarresultatMedOverstyringForm = ({
  panelTekstKode,
  vilkår,
  medlemskapManuellBehandlingResultat,
  status,
}: Props) => {
  const { behandling, fagsak, submitCallback, alleMerknaderFraBeslutter } =
    usePanelDataContext<OverstyringAksjonspunktTilBekreftelse<VilkårOverstyringAksjonspunkter>>();

  const { erOverstyrt, toggleOverstyring, overstyringApKode, overrideReadOnly, kanOverstyreAccess } =
    usePanelOverstyring<VilkårOverstyringAksjonspunkter>();

  const initialValues = buildInitialValues(
    behandling.aksjonspunkt,
    status,
    overstyringApKode,
    behandling.behandlingsresultat,
    medlemskapManuellBehandlingResultat,
  );

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });

  const togglePa = () => toggleOverstyring();

  const toggleAv = () => {
    formMethods.reset();
    toggleOverstyring();
  };

  const erVilkårOk = useWatch({ control: formMethods.control, name: 'erVilkårOk' });

  const aksjonspunkt = behandling.aksjonspunkt.find(ap => ap.definisjon === overstyringApKode);
  const hasAksjonspunkt = aksjonspunkt !== undefined;
  const isSolvable =
    aksjonspunkt === undefined ? false : !(erAksjonspunktÅpent(aksjonspunkt) && !aksjonspunkt.kanLoses);

  const originalErVilkårOk = 'IKKE_VURDERT' === status ? undefined : 'OPPFYLT' === status;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, overstyringApKode))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <HStack gap="space-16">
        {!erOverstyrt && originalErVilkårOk !== undefined && (
          <>
            {originalErVilkårOk && <CheckmarkCircleFillIcon className={styles['godkjentImage']} />}
            {!originalErVilkårOk && <XMarkOctagonFillIcon className={styles['avslattImage']} />}
          </>
        )}
        <VStack gap="space-8">
          <VStack>
            <HStack gap="space-8" align="center">
              <Heading size="small" level="3">
                <FormattedMessage id={panelTekstKode} />
              </Heading>
              {vilkår?.lovReferanse && <Detail>{vilkår.lovReferanse}</Detail>}
            </HStack>
            <HStack gap="space-8" align="center">
              {originalErVilkårOk && (
                <Label size="small">
                  <FormattedMessage id="VilkarresultatMedOverstyringForm.ErOppfylt" />
                </Label>
              )}
              {originalErVilkårOk === false && (
                <Label size="small">
                  <FormattedMessage id="VilkarresultatMedOverstyringForm.ErIkkeOppfylt" />
                </Label>
              )}
              {originalErVilkårOk === undefined && (
                <BodyShort size="small">
                  <FormattedMessage id="VilkarresultatMedOverstyringForm.IkkeBehandlet" />
                </BodyShort>
              )}
              {originalErVilkårOk !== undefined &&
                !isHidden(kanOverstyreAccess.isEnabled, aksjonspunkt ? [aksjonspunkt] : [], overstyringApKode) && (
                  <OverstyringKnapp onClick={togglePa} erOverstyrt={erOverstyrt || overrideReadOnly} />
                )}
            </HStack>
          </VStack>
          {(erOverstyrt || hasAksjonspunkt) && (
            <OverstyringPanel
              erOverstyrt={erOverstyrt}
              isSolvable={erOverstyrt || isSolvable}
              erVilkårOk={erVilkårOk}
              hasAksjonspunkt={hasAksjonspunkt}
              overrideReadOnly={overrideReadOnly}
              isSubmitting={formMethods.formState.isSubmitting}
              isPristine={!formMethods.formState.isDirty}
              toggleAv={toggleAv}
              erIkkeGodkjentAvBeslutter={
                aksjonspunkt ? !!alleMerknaderFraBeslutter[aksjonspunkt.definisjon]?.notAccepted : false
              }
            >
              {erOverstyringAvMedlemskap(overstyringApKode) && vilkår ? (
                <MedlemskapVurderinger
                  vilkår={vilkår}
                  readOnly={overrideReadOnly || !erOverstyrt}
                  ytelse={fagsak.fagsakYtelseType}
                  erRevurdering={behandling.type === 'BT-004'}
                  erForutgående={overstyringApKode === OverstyringKode.OVERSTYRING_AV_FORUTGÅENDE_MEDLEMSKAPSVILKÅR}
                />
              ) : (
                <VilkarResultPicker
                  vilkår={vilkår}
                  legend={<FormattedMessage id="VilkarresultatMedOverstyringForm.ErVilkåretOppfylt" />}
                  isReadOnly={overrideReadOnly || !erOverstyrt}
                  vilkårOppfyltLabel={<FormattedMessage id="VilkarresultatMedOverstyringForm.ErOppfylt" />}
                  vilkårIkkeOppfyltLabel={
                    <FormattedMessage id="VilkarresultatMedOverstyringForm.VilkarIkkeOppfylt" values={{ b: BTag }} />
                  }
                />
              )}
            </OverstyringPanel>
          )}
        </VStack>
      </HStack>
    </RhfForm>
  );
};

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  overstyringApKode: VilkårOverstyringAksjonspunkter,
  behandlingsresultat: BehandlingFpSak['behandlingsresultat'],
  medlemskapManuellBehandlingResultat: ManuellBehandlingResultat | undefined,
): FormValues => {
  const aksjonspunkt = aksjonspunkter.find(ap => ap.definisjon === overstyringApKode);
  const felles = {
    isOverstyrt: aksjonspunkt !== undefined,
    begrunnelse: decodeHtmlEntity(aksjonspunkt?.begrunnelse ?? ''),
  };

  if (erOverstyringAvMedlemskap(overstyringApKode)) {
    return aksjonspunkt
      ? {
          ...felles,
          ...MedlemskapVurderinger.initialValues(medlemskapManuellBehandlingResultat),
        }
      : felles;
  }
  return {
    ...felles,
    ...VilkarResultPicker.buildInitialValues(aksjonspunkt ? [aksjonspunkt] : [], status, behandlingsresultat),
  };
};

const transformValues = (
  values: FormValues,
  overstyringApKode: VilkårOverstyringAksjonspunkter,
): OverstyringAksjonspunktTilBekreftelse<VilkårOverstyringAksjonspunkter> => {
  if (erOverstyringAvMedlemskap(overstyringApKode)) {
    return {
      kode: overstyringApKode,
      begrunnelse: values.begrunnelse,
      ...MedlemskapVurderinger.transformValues(values),
    };
  }
  return {
    kode: overstyringApKode,
    begrunnelse: values.begrunnelse,
    ...VilkarResultPicker.transformValues(values),
  };
};
