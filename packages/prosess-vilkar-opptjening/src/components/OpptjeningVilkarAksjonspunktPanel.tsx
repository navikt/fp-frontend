import React, { FunctionComponent, useCallback, useMemo } from 'react';
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
import { Aksjonspunkt, Behandling, Behandlingsresultat, FastsattOpptjening } from '@navikt/fp-types';
import { AvklarOpptjeningsvilkaretAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData } from '@navikt/fp-utils';

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

interface OwnProps {
  fastsattOpptjening: FastsattOpptjening;
  behandlingsresultat?: Behandling['behandlingsresultat'];
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  isApOpen: boolean;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  submitCallback: (aksjonspunktData: AvklarOpptjeningsvilkaretAp) => Promise<void>;
  lovReferanse?: string;
  erIkkeGodkjentAvBeslutter: boolean;
  erSvpFagsak: boolean;
}

/**
 * OpptjeningVilkarAksjonspunktPanel
 *
 * Viser panel for å løse aksjonspunkt for avslått opptjeningsvilkår
 */
const OpptjeningVilkarAksjonspunktPanel: FunctionComponent<OwnProps> = ({
  isApOpen,
  readOnlySubmitButton,
  readOnly,
  lovReferanse,
  aksjonspunkter,
  behandlingsresultat,
  status,
  fastsattOpptjening,
  submitCallback,
  erIkkeGodkjentAvBeslutter,
  erSvpFagsak,
}) => {
  const intl = useIntl();

  const initialValues = useMemo(
    () => buildInitialValues(aksjonspunkter, status, behandlingsresultat),
    [behandlingsresultat, aksjonspunkter, status],
  );
  const { formData, setFormData } = useFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const isOpenAksjonspunkt = aksjonspunkter.some(ap => ap.status === AksjonspunktStatus.OPPRETTET);
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
        isAksjonspunktOpen={isApOpen}
        readOnlySubmitButton={readOnlySubmitButton}
        readOnly={readOnly}
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
          readOnly={readOnly}
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
        <ProsessStegBegrunnelseTextFieldNew readOnly={readOnly} />
      </ProsessPanelTemplate>
    </Form>
  );
};

export default OpptjeningVilkarAksjonspunktPanel;
