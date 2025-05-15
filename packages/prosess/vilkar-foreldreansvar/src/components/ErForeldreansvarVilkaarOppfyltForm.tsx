import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';
import { BTag } from '@navikt/ft-utils';

import { AksjonspunktKode, KodeverkType, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextFieldNew,
  validerApKodeOgHentApEnum,
  VilkarResultPicker,
} from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, Behandling } from '@navikt/fp-types';
import type {
  Foreldreansvarsvilkar1Ap,
  Foreldreansvarsvilkar2Ap,
  VurdereYtelseSammeBarnSokerAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  begrunnelse?: string;
};

type AksjonspunktData = Array<Foreldreansvarsvilkar1Ap | Foreldreansvarsvilkar2Ap | VurdereYtelseSammeBarnSokerAp>;

interface Props {
  isForeldreansvar2Ledd: boolean;
  isEngangsstonad: boolean;
  status: string;
  readOnlySubmitButton: boolean;
}

/**
 * ErForeldreansvarVilkaarOppfyltForm
 *
 * Setter opp aksjonspunkter for avklaring av foreldreansvarvilkåret 2 eller 4 ledd.
 */
export const ErForeldreansvarVilkaarOppfyltForm = ({
  readOnlySubmitButton,
  isEngangsstonad,
  isForeldreansvar2Ledd,
  status,
}: Props) => {
  const intl = useIntl();

  const {
    behandling,
    alleKodeverk,
    aksjonspunkterForPanel,
    submitCallback,
    harÅpneAksjonspunkter,
    isReadOnly,
    alleMerknaderFraBeslutter,
  } = usePanelDataContext<AksjonspunktData>();

  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );

  const initialValues = buildInitialValues(aksjonspunkterForPanel, status, behandling.behandlingsresultat);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });

  const vilkarTypeKode = isForeldreansvar2Ledd
    ? VilkarType.FORELDREANSVARSVILKARET_2_LEDD
    : VilkarType.FORELDREANSVARSVILKARET_4_LEDD;
  const avslagsarsaker = alleKodeverk[KodeverkType.AVSLAGSARSAK][vilkarTypeKode];

  const originalErVilkarOk = harÅpneAksjonspunkter ? undefined : VilkarUtfallType.OPPFYLT === status;

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkterForPanel))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'ErForeldreansvarVilkaarOppfyltForm.Foreldreansvar' })}
        isAksjonspunktOpen={!readOnlySubmitButton}
        readOnlySubmitButton={readOnlySubmitButton}
        readOnly={isReadOnly}
        originalErVilkarOk={originalErVilkarOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        <VStack gap="4">
          <Label size="small">
            <FormattedMessage id="ErForeldreansvarVilkaarOppfyltForm.RettTilStonad" />
          </Label>
          <VilkarResultPicker
            avslagsarsaker={avslagsarsaker}
            readOnly={isReadOnly}
            customVilkarOppfyltText={
              <FormattedMessage id={isEngangsstonad ? 'FodselVilkarForm.OppfyltEs' : 'FodselVilkarForm.OppfyltFp'} />
            }
            customVilkarIkkeOppfyltText={
              <FormattedMessage
                id={isEngangsstonad ? 'FodselVilkarForm.IkkeOppfyltEs' : 'FodselVilkarForm.IkkeOppfyltFp'}
                values={{ b: BTag }}
              />
            }
          />
          <ProsessStegBegrunnelseTextFieldNew readOnly={isReadOnly} />
        </VStack>
      </ProsessPanelTemplate>
    </Form>
  );
};

const buildInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  status: string,
  behandlingsresultat?: Behandling['behandlingsresultat'],
): FormValues => ({
  ...VilkarResultPicker.buildInitialValues(aksjonspunkter, status, behandlingsresultat),
  ...ProsessStegBegrunnelseTextFieldNew.buildInitialValues(aksjonspunkter),
});

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): AksjonspunktData =>
  aksjonspunkter.map(ap => ({
    ...VilkarResultPicker.transformValues(values),
    ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
    kode: validerApKodeOgHentApEnum(
      ap.definisjon,
      AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_2_LEDD,
      AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKARET_4_LEDD,
      AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
    ),
  }));
