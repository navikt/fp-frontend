import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { RhfForm } from '@navikt/ft-form-hooks';
import { BTag } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextField,
  type ProsessStegBegrunnelseTextFieldFormValues,
  validerApKodeOgHentApEnum,
  VilkarResultPicker,
  type VilkarResultPickerFormValues,
} from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, Behandlingsresultat, Vilkar } from '@navikt/fp-types';
import type { VurdereYtelseSammeBarnSokerAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

type FormValues = VilkarResultPickerFormValues & ProsessStegBegrunnelseTextFieldFormValues;

/**
 * FodselVilkarForm
 *
 * Setter opp aksjonspunktet for avklaring av Fødselsvilkåret.
 */
export const FodselVilkarForm = () => {
  const {
    behandling,
    isSubmittable,
    aksjonspunkterForPanel,
    vilkårForPanel,
    submitCallback,
    harÅpentAksjonspunkt,
    isReadOnly,
    alleMerknaderFraBeslutter,
  } = usePanelDataContext<VurdereYtelseSammeBarnSokerAp>();

  const vilkår = vilkårForPanel[0];
  const initialValues = buildInitialValues(vilkår, aksjonspunkterForPanel, behandling.behandlingsresultat);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkterForPanel))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={<FormattedMessage id="FodselVilkarForm.Fodsel" />}
        vilkår={vilkår}
        aksjonspunkterForPanel={aksjonspunkterForPanel}
        harÅpentAksjonspunkt={harÅpentAksjonspunkt}
        isSubmittable={isSubmittable}
        isReadOnly={isReadOnly}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        <VilkarResultPicker
          vilkår={vilkårForPanel[0]}
          legend={<FormattedMessage id="FodselVilkarForm.TidligereUtbetaltStonad" />}
          isReadOnly={isReadOnly}
          vilkårOppfyltLabel={<FormattedMessage id="FodselVilkarForm.Oppfylt" />}
          vilkårIkkeOppfyltLabel={<FormattedMessage id="FodselVilkarForm.IkkeOppfylt" values={{ b: BTag }} />}
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
): FormValues => ({
  ...VilkarResultPicker.buildInitialValues(vilkår, aksjonspunkter, behandlingsresultat),
  ...ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter),
});

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): VurdereYtelseSammeBarnSokerAp => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextField.transformValues(values),
  kode: validerApKodeOgHentApEnum(aksjonspunkter[0]?.definisjon, AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE),
});
