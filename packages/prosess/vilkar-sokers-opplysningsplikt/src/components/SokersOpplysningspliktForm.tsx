import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Label } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { BTag } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextField,
  type ProsessStegBegrunnelseTextFieldFormValues,
  VilkarResultPicker,
  type VilkarResultPickerFormValues,
} from '@navikt/fp-prosess-felles';
import type {
  Aksjonspunkt,
  ArbeidsgiverOpplysningerPerId,
  Behandlingsresultat,
  Soknad,
  Vilkar,
} from '@navikt/fp-types';
import type { OverstyringSokersOpplysingspliktAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { MangledeVedlegg } from './MangledeVedlegg';

type FormValues = ProsessStegBegrunnelseTextFieldFormValues & VilkarResultPickerFormValues;

interface Props {
  søknad: Soknad;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * SokersOpplysningspliktForm
 *
 * Informasjon om søkers informasjonsplikt er godkjent eller avvist.
 */
export const SokersOpplysningspliktForm = ({ søknad, arbeidsgiverOpplysningerPerId }: Props) => {
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

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();

  const vilkår = vilkårForPanel[0];
  const initialValues = buildInitialValues(vilkår, aksjonspunkterForPanel, behandling.behandlingsresultat);

  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={<FormattedMessage id="SokersOpplysningspliktForm.SokersOpplysningsplikt" />}
        vilkår={vilkår}
        aksjonspunkterForPanel={aksjonspunkterForPanel}
        harÅpentAksjonspunkt={harÅpentAksjonspunkt}
        isSubmittable={isSubmittable}
        isReadOnly={isReadOnly}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
        rendreFakta={<MangledeVedlegg søknad={søknad} arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId} />}
      >
        <Label size="medium">
          <FormattedMessage id="SokersOpplysningspliktForm.Tittel" />
        </Label>
        <VilkarResultPicker
          vilkår={vilkår}
          legend={<FormattedMessage id="SokersOpplysningspliktForm.ErVilkåretOppfylt" />}
          isReadOnly={isReadOnly}
          skalKunneInnvilge={!!søknad}
          vilkårIkkeOppfyltLabel={
            <FormattedMessage
              id="SokersOpplysningspliktForm.ErIkkeOppfylt"
              values={{ b: BTag, br: <br key="break-line" /> }}
            />
          }
        />
        <ProsessStegBegrunnelseTextField readOnly={isReadOnly} />
      </ProsessPanelTemplate>
    </RhfForm>
  );
};

const buildInitialValues = (
  vilkår: Vilkar | undefined,
  aksjonspunkter: Aksjonspunkt[],
  behandlingsresultat: Behandlingsresultat | undefined,
): FormValues => {
  return {
    ...VilkarResultPicker.buildInitialValues(vilkår, aksjonspunkter, behandlingsresultat),
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
