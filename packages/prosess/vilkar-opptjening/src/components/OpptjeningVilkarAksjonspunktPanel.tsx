import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { BTag } from '@navikt/ft-utils';

import { AksjonspunktKode, AksjonspunktStatus, VilkarUtfallType } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextFieldNew,
  VilkarResultPicker,
} from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, Behandlingsresultat, FastsattOpptjening } from '@navikt/fp-types';
import type { AvklarOpptjeningsvilkaretAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import { OpptjeningVilkarView } from './OpptjeningVilkarView';

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  begrunnelse?: string;
};

interface Props {
  fastsattOpptjening: FastsattOpptjening;
  status: string;
  readOnlySubmitButton: boolean;
  lovReferanse?: string;
  erSvpFagsak: boolean;
}

/**
 * OpptjeningVilkarAksjonspunktPanel
 *
 * Viser panel for å løse aksjonspunkt for avslått opptjeningsvilkår
 */
export const OpptjeningVilkarAksjonspunktPanel = ({
  readOnlySubmitButton,
  lovReferanse,
  status,
  fastsattOpptjening,
  erSvpFagsak,
}: Props) => {
  const intl = useIntl();

  const {
    behandling,
    aksjonspunkterForPanel,
    submitCallback,
    harÅpneAksjonspunkter,
    isReadOnly,
    alleMerknaderFraBeslutter,
  } = usePanelDataContext<AvklarOpptjeningsvilkaretAp>();

  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues:
      mellomlagretFormData ?? buildInitialValues(aksjonspunkterForPanel, status, behandling.behandlingsresultat),
  });

  const isOpenAksjonspunkt = aksjonspunkterForPanel.some(ap => ap.status === AksjonspunktStatus.OPPRETTET);
  const originalErVilkarOk = isOpenAksjonspunkt ? undefined : VilkarUtfallType.OPPFYLT === status;

  const onSubmit = (values: FormValues) => submitCallback(transformValues(values));

  const validerAtEnKunKanVelgeOppfyltNårEnHarPerioder = (verdi: boolean) => {
    if (fastsattOpptjening.fastsattOpptjeningAktivitetList?.length === 0 && verdi === true) {
      return intl.formatMessage({ id: 'OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt' });
    }
    return null;
  };

  const rendreFakta = () => (
    <OpptjeningVilkarView
      months={fastsattOpptjening.opptjeningperiode.måneder}
      days={fastsattOpptjening.opptjeningperiode.dager}
      fastsattOpptjeningActivities={fastsattOpptjening.fastsattOpptjeningAktivitetList}
      opptjeningFomDate={fastsattOpptjening.opptjeningFom}
      opptjeningTomDate={fastsattOpptjening.opptjeningTom}
    />
  );

  return (
    <RhfForm formMethods={formMethods} onSubmit={onSubmit} setDataOnUnmount={setMellomlagretFormData}>
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'OpptjeningVilkarAksjonspunktPanel.Opptjeningsvilkaret' })}
        isAksjonspunktOpen={harÅpneAksjonspunkter}
        readOnlySubmitButton={readOnlySubmitButton}
        readOnly={isReadOnly}
        lovReferanse={lovReferanse}
        originalErVilkarOk={originalErVilkarOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
        rendreFakta={rendreFakta}
      >
        <Label size="small">
          <FormattedMessage
            id={
              erSvpFagsak
                ? 'OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilSvangerskapspenger'
                : 'OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger'
            }
          />
        </Label>
        <VStack gap="4">
          <VilkarResultPicker
            readOnly={isReadOnly}
            customVilkarOppfyltText={
              <FormattedMessage
                id={
                  erSvpFagsak
                    ? 'OpptjeningVilkarAksjonspunktPanel.ErOppfyltSvp'
                    : 'OpptjeningVilkarAksjonspunktPanel.ErOppfylt'
                }
              />
            }
            customVilkarIkkeOppfyltText={
              <FormattedMessage
                id={
                  erSvpFagsak
                    ? 'OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfyltSvp'
                    : 'OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt'
                }
                values={{ b: BTag }}
              />
            }
            validatorsForRadioOptions={[validerAtEnKunKanVelgeOppfyltNårEnHarPerioder]}
          />
          <ProsessStegBegrunnelseTextFieldNew readOnly={isReadOnly} />
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
  ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
});

const transformValues = (values: FormValues): AvklarOpptjeningsvilkaretAp => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
  kode: AksjonspunktKode.VURDER_OPPTJENINGSVILKARET,
});
