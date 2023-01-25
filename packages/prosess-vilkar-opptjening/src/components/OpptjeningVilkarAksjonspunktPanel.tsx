import React, { FunctionComponent, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Label } from '@navikt/ds-react';

import { Form } from '@navikt/ft-form-hooks';
import vilkarUtfallType from '@navikt/fp-kodeverk/src/vilkarUtfallType';
import { isAksjonspunktOpen } from '@navikt/fp-kodeverk/src/aksjonspunktStatus';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import {
  VilkarResultPicker, ProsessStegBegrunnelseTextFieldNew, ProsessPanelTemplate,
} from '@navikt/fp-prosess-felles';
import { Aksjonspunkt, Behandling, FastsattOpptjening } from '@navikt/fp-types';
import AksjonspunktKode from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import { AvklarOpptjeningsvilkaretAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import OpptjeningVilkarView from './OpptjeningVilkarView';

export type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  avslagDato?: string;
  begrunnelse?: string;
}

export const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  behandlingsresultat?: Behandling['behandlingsresultat'],
): FormValues => ({
  ...VilkarResultPicker.buildInitialValues(behandlingsresultat, aksjonspunkter, status),
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
  formData?: FormValues;
  setFormData: (data: FormValues) => void;
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
  formData,
  setFormData,
}) => {
  const intl = useIntl();

  const initialValues = useMemo(() => buildInitialValues(aksjonspunkter, status, behandlingsresultat), [behandlingsresultat, aksjonspunkter, status]);
  const formMethods = useForm<FormValues>({
    defaultValues: formData || initialValues,
  });

  const isOpenAksjonspunkt = aksjonspunkter.some((ap) => isAksjonspunktOpen(ap.status));
  const originalErVilkarOk = isOpenAksjonspunkt ? undefined : vilkarUtfallType.OPPFYLT === status;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values))}
      setDataOnUnmount={setFormData}
    >
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
        rendreFakta={() => (
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
        )}
      >
        <Label size="small"><FormattedMessage id="OpptjeningVilkarAksjonspunktPanel.SokerHarVurdertOpptjentRettTilForeldrepenger" /></Label>
        <VilkarResultPicker
          readOnly={readOnly}
          customVilkarOppfyltText={<FormattedMessage id="OpptjeningVilkarAksjonspunktPanel.ErOppfylt" />}
          customVilkarIkkeOppfyltText={
            <FormattedMessage id="OpptjeningVilkarAksjonspunktPanel.ErIkkeOppfylt" values={{ b: (chunks: any) => <b>{chunks}</b> }} />
          }
        />
        <VerticalSpacer sixteenPx />
        <ProsessStegBegrunnelseTextFieldNew readOnly={readOnly} />
      </ProsessPanelTemplate>
    </Form>
  );
};

export default OpptjeningVilkarAksjonspunktPanel;
