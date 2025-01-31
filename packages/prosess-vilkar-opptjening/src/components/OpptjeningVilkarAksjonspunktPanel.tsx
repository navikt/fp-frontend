import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import { AksjonspunktKode, AksjonspunktStatus, VilkarUtfallType } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextFieldNew,
  VilkarResultPicker,
} from '@navikt/fp-prosess-felles';
import { Aksjonspunkt, Behandlingsresultat, FastsattOpptjening } from '@navikt/fp-types';
import { AvklarOpptjeningsvilkaretAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData, usePanelContext } from '@navikt/fp-utils';

import OpptjeningVilkarView from './OpptjeningVilkarView';

export type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  begrunnelse?: string;
};

export const buildInitialValues = (
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
  } = usePanelContext<AvklarOpptjeningsvilkaretAp>();

  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );

  const initialValues = buildInitialValues(aksjonspunkterForPanel, status, behandling.behandlingsresultat);

  const { formData, setFormData } = useFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const isOpenAksjonspunkt = aksjonspunkterForPanel.some(ap => ap.status === AksjonspunktStatus.OPPRETTET);
  const originalErVilkarOk = isOpenAksjonspunkt ? undefined : VilkarUtfallType.OPPFYLT === status;

  const onSubmit = useCallback((values: FormValues) => submitCallback(transformValues(values)), [submitCallback]);

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  const validerAtEnKunKanVelgeOppfyltNårEnHarPerioder = useCallback((verdi: boolean) => {
    if (fastsattOpptjening.fastsattOpptjeningAktivitetList?.length === 0 && verdi === true) {
      return intl.formatMessage({ id: 'OpptjeningVilkarAksjonspunktPanel.KanIkkeVelgeOppfylt' });
    }
    return null;
  }, []);

  const rendreFakta = useCallback(
    () => (
      <>
        <VerticalSpacer sixteenPx />
        <OpptjeningVilkarView
          months={fastsattOpptjening.opptjeningperiode.måneder}
          days={fastsattOpptjening.opptjeningperiode.dager}
          fastsattOpptjeningActivities={fastsattOpptjening.fastsattOpptjeningAktivitetList}
          opptjeningFomDate={fastsattOpptjening.opptjeningFom}
          opptjeningTomDate={fastsattOpptjening.opptjeningTom}
        />
      </>
    ),
    [fastsattOpptjening],
  );

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit} setDataOnUnmount={setFormData}>
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
              values={{ b: bTag }}
            />
          }
          validatorsForRadioOptions={[validerAtEnKunKanVelgeOppfyltNårEnHarPerioder]}
        />
        <VerticalSpacer sixteenPx />
        <ProsessStegBegrunnelseTextFieldNew readOnly={isReadOnly} />
      </ProsessPanelTemplate>
    </Form>
  );
};
