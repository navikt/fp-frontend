import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { VStack } from '@navikt/ds-react';
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
import type { Aksjonspunkt, Behandlingsresultat, FastsattOpptjening } from '@navikt/fp-types';
import type { AvklarOpptjeningsvilkaretAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { OpptjeningVilkarView } from './OpptjeningVilkarView';

type FormValues = VilkarResultPickerFormValues & ProsessStegBegrunnelseTextFieldFormValues;

interface Props {
  fastsattOpptjening: FastsattOpptjening;
  status: string;
}

/**
 * OpptjeningVilkarAksjonspunktPanel
 *
 * Viser panel for å løse aksjonspunkt for avslått opptjeningsvilkår
 */
export const OpptjeningVilkarAksjonspunktPanel = ({ status, fastsattOpptjening }: Props) => {
  const intl = useIntl();

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

  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues:
      mellomlagretFormData ?? buildInitialValues(aksjonspunkterForPanel, status, behandling.behandlingsresultat),
  });

  const originalErVilkårOk = harÅpentAksjonspunkt ? undefined : 'OPPFYLT' === status;

  const onSubmit = (values: FormValues) => submitCallback(transformValues(values));

  const validerAtEnKunKanVelgeOppfyltNårEnHarPerioder = (verdi: string | number | boolean) => {
    if (fastsattOpptjening.fastsattOpptjeningAktivitetList.length === 0 && verdi === true) {
      return intl.formatMessage({ id: 'OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt' });
    }
    return null;
  };

  return (
    <RhfForm formMethods={formMethods} onSubmit={onSubmit} setDataOnUnmount={setMellomlagretFormData}>
      <ProsessPanelTemplate
        title={<FormattedMessage id="OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret" />}
        harÅpentAksjonspunkt={harÅpentAksjonspunkt}
        isSubmittable={isSubmittable}
        isReadOnly={isReadOnly}
        lovReferanse={vilkårForPanel[0]?.lovReferanse}
        originalErVilkårOk={originalErVilkårOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
        rendreFakta={<OpptjeningVilkarView fastsattOpptjening={fastsattOpptjening} />}
      >
        <VStack gap="space-16">
          <VilkarResultPicker
            // trenger ikke vilkår til avslagsårsak fordi det finnes kun en avslagsårsak for opptjeningsvilkåret
            vilkår={undefined}
            legend={
              <FormattedMessage
                id={
                  erSvpFagsak
                    ? 'OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger'
                    : 'OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger'
                }
              />
            }
            isReadOnly={isReadOnly}
            customVilkårOppfyltText={
              <FormattedMessage id="OpptjeningVilkarAksjonspunktPanel.ErOppfylt" values={{ erSvpFagsak }} />
            }
            customVilkårIkkeOppfyltText={
              <FormattedMessage
                id="OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt"
                values={{ b: BTag, erSvpFagsak }}
              />
            }
            validatorsForRadioOptions={[validerAtEnKunKanVelgeOppfyltNårEnHarPerioder]}
          />
          <ProsessStegBegrunnelseTextField readOnly={isReadOnly} />
        </VStack>
      </ProsessPanelTemplate>
    </RhfForm>
  );
};

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  behandlingsresultat?: Behandlingsresultat,
): FormValues => ({
  ...VilkarResultPicker.buildInitialValues(aksjonspunkter, status, behandlingsresultat),
  ...ProsessStegBegrunnelseTextField.buildInitialValues(aksjonspunkter),
});

const transformValues = (values: FormValues): AvklarOpptjeningsvilkaretAp => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextField.transformValues(values),
  kode: AksjonspunktKode.VURDER_OPPTJENINGSVILKÅRET,
});
