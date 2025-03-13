import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

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
  VurdereYtelseSammeBarnAnnenForelderAp,
  VurdereYtelseSammeBarnSokerAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  begrunnelse?: string;
};

type AksjonspunktData = Array<
  | Foreldreansvarsvilkar1Ap
  | Foreldreansvarsvilkar2Ap
  | VurdereYtelseSammeBarnSokerAp
  | VurdereYtelseSammeBarnAnnenForelderAp
>;

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
      AksjonspunktKode.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
    ),
  }));

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
    defaultValues: mellomlagretFormData || initialValues,
  });

  const vilkarTypeKode = isForeldreansvar2Ledd
    ? VilkarType.FORELDREANSVARSVILKARET_2_LEDD
    : VilkarType.FORELDREANSVARSVILKARET_4_LEDD;
  const avslagsarsaker = alleKodeverk[KodeverkType.AVSLAGSARSAK][vilkarTypeKode];

  const originalErVilkarOk = harÅpneAksjonspunkter ? undefined : VilkarUtfallType.OPPFYLT === status;

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

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
              values={{ b: bTag }}
            />
          }
        />
        <ProsessStegBegrunnelseTextFieldNew readOnly={isReadOnly} />
      </ProsessPanelTemplate>
    </Form>
  );
};
