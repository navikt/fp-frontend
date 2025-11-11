import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { BTag, isObject } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextField,
  type ProsessStegBegrunnelseTextFieldFormValues,
  VilkarResultPicker,
  type VilkarResultPickerFormValues,
} from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, ArbeidsgiverOpplysningerPerId, Behandlingsresultat, Soknad } from '@navikt/fp-types';
import type { OverstyringSokersOpplysingspliktAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { MangledeVedlegg } from './MangledeVedlegg';

type FormValues = ProsessStegBegrunnelseTextFieldFormValues & VilkarResultPickerFormValues;

interface Props {
  søknad: Soknad;
  status: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * SokersOpplysningspliktForm
 *
 * Informasjon om søkers informasjonsplikt er godkjent eller avvist.
 */
export const SokersOpplysningspliktForm = ({ søknad, status, arbeidsgiverOpplysningerPerId }: Props) => {
  const {
    aksjonspunkterForPanel,
    vilkårForPanel,
    isSubmittable,
    submitCallback,
    alleMerknaderFraBeslutter,
    harÅpentAksjonspunkt,
    isReadOnly,
    behandling,
  } = usePanelDataContext<OverstyringSokersOpplysingspliktAp>();

  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );

  const hasSoknad = harSoknad(søknad);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const formMethods = useForm<FormValues>({
    defaultValues:
      mellomlagretFormData ?? buildInitialValues(aksjonspunkterForPanel, status, behandling.behandlingsresultat),
  });

  const originalErVilkårOk = harÅpentAksjonspunkt ? undefined : 'OPPFYLT' === status;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={<FormattedMessage id="SokersOpplysningspliktForm.SokersOpplysningsplikt" />}
        harÅpentAksjonspunkt={harÅpentAksjonspunkt}
        lovReferanse={vilkårForPanel[0]?.lovReferanse}
        isSubmittable={isSubmittable}
        isReadOnly={isReadOnly}
        originalErVilkårOk={originalErVilkårOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
        rendreFakta={<MangledeVedlegg søknad={søknad} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} />}
      >
        <VStack gap="space-16">
          <VilkarResultPicker
            vilkår={undefined}
            legend={<FormattedMessage id="SokersOpplysningspliktForm.ErVilkåretOppfylt" />}
            isReadOnly={isReadOnly}
            skalKunneInnvilge={hasSoknad}
            customVilkårOppfyltText={<FormattedMessage id="SokersOpplysningspliktForm.VilkarOppfylt" />}
            customVilkårIkkeOppfyltText={
              <FormattedMessage
                id="SokersOpplysningspliktForm.VilkarIkkeOppfylt"
                values={{ b: BTag, br: <br key="break-line" /> }}
              />
            }
          />
          <ProsessStegBegrunnelseTextField readOnly={isReadOnly} />
        </VStack>
      </ProsessPanelTemplate>
    </RhfForm>
  );
};

// TODO: søknad er vel alltid objekt så denne sjekken er irrelevant??
const harSoknad = (soknad: Soknad): boolean => isObject(soknad);

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  behandlingsresultat: Behandlingsresultat | undefined,
): FormValues => {
  return {
    ...VilkarResultPicker.buildInitialValues(aksjonspunkter, status, behandlingsresultat),
    ...ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter),
  };
};

const transformValues = (values: FormValues): OverstyringSokersOpplysingspliktAp => {
  return {
    kode: AksjonspunktKode.SØKERS_OPPLYSNINGSPLIKT_OVST,
    ...VilkarResultPicker.transformValues(values),
    ...ProsessStegBegrunnelseTextField.transformValues(values),
  };
};
