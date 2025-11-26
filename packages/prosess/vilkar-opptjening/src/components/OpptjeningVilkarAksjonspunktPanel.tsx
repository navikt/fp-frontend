import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { RhfForm } from '@navikt/ft-form-hooks';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextField,
  type ProsessStegBegrunnelseTextFieldFormValues,
  VilkarResultPicker,
  type VilkarResultPickerFormValues,
} from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, Behandlingsresultat, FastsattOpptjening, Vilkar } from '@navikt/fp-types';
import type { AvklarOpptjeningsvilkaretAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { OpptjeningVilkarView } from './OpptjeningVilkarView';

type FormValues = VilkarResultPickerFormValues & ProsessStegBegrunnelseTextFieldFormValues;

interface Props {
  fastsattOpptjening: FastsattOpptjening;
}

/**
 * OpptjeningVilkarAksjonspunktPanel
 *
 * Viser panel for å løse aksjonspunkt for avslått opptjeningsvilkår
 */
export const OpptjeningVilkarAksjonspunktPanel = ({ fastsattOpptjening }: Props) => {
  const {
    fagsak,
    behandling,
    isSubmittable,
    aksjonspunkterForPanel,
    vilkårForPanel,
    submitCallback,
    harÅpentAksjonspunkt,
    isReadOnly,
    alleMerknaderFraBeslutter,
  } = usePanelDataContext<AvklarOpptjeningsvilkaretAp>();
  const erSvpFagsak = fagsak.fagsakYtelseType === 'SVP';

  const vilkår = vilkårForPanel[0];
  const initialValues = buildInitialValues(vilkår, aksjonspunkterForPanel, behandling.behandlingsresultat);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={values => submitCallback(transformValues(values))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={<FormattedMessage id="OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret" />}
        harÅpentAksjonspunkt={harÅpentAksjonspunkt}
        vilkår={vilkår}
        aksjonspunkterForPanel={aksjonspunkterForPanel}
        isSubmittable={isSubmittable}
        isReadOnly={isReadOnly}
        alleMerknaderFraBeslutter={alleMerknaderFraBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
        rendreFakta={<OpptjeningVilkarView fastsattOpptjening={fastsattOpptjening} />}
      >
        <VilkarResultPicker
          vilkår={vilkår}
          legend={<FormattedMessage id="OpptjeningVilkarAksjonspunktPanel.VilkårLabel" values={{ erSvpFagsak }} />}
          skalKunneInnvilge={fastsattOpptjening.fastsattOpptjeningAktivitetList.length > 0}
          isReadOnly={isReadOnly}
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

const transformValues = (values: FormValues): AvklarOpptjeningsvilkaretAp => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextField.transformValues(values),
  kode: AksjonspunktKode.VURDER_OPPTJENINGSVILKÅRET,
});
