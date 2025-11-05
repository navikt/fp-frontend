import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

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
import { MangledeVedlegg } from './MangledeVedlegg.tsx';

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
  const intl = useIntl();

  const {
    aksjonspunkterForPanel,
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
        title={intl.formatMessage({ id: 'SokersOpplysningspliktForm.SokersOpplysningsplikt' })}
        harÅpentAksjonspunkt={harÅpentAksjonspunkt}
        isSubmittable={isSubmittable}
        isReadOnly={isReadOnly}
        originalErVilkårOk={originalErVilkårOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        <VStack gap="space-16">
          {søknad.manglendeVedlegg.length > 0 && (
            <MangledeVedlegg søknad={søknad} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} />
          )}
          <VilkarResultPicker
            vilkår={undefined}
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
