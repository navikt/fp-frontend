import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { BTag } from '@navikt/ft-utils';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextFieldNew,
  validerApKodeOgHentApEnum,
  VilkarResultPicker,
} from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, BehandlingFpSak, VilkårType } from '@navikt/fp-types';
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
}

/**
 * ErForeldreansvarVilkaarOppfyltForm
 *
 * Setter opp aksjonspunkter for avklaring av foreldreansvarvilkåret 2 eller 4 ledd.
 */
export const ErForeldreansvarVilkaarOppfyltForm = ({ isEngangsstonad, isForeldreansvar2Ledd, status }: Props) => {
  const intl = useIntl();

  const {
    behandling,
    alleKodeverk,
    isSubmittable,
    aksjonspunkterForPanel,
    submitCallback,
    harÅpentAksjonspunkt,
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

  const vilkarTypeKode: VilkårType = isForeldreansvar2Ledd ? 'FP_VK_8' : 'FP_VK_33';
  const avslagsårsaker = alleKodeverk['Avslagsårsak'][vilkarTypeKode];

  const originalErVilkårOk = harÅpentAksjonspunkt ? undefined : 'OPPFYLT' === status;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkterForPanel))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'ErForeldreansvarVilkaarOppfyltForm.Foreldreansvar' })}
        harÅpentAksjonspunkt={isSubmittable}
        isSubmittable={isSubmittable}
        isReadOnly={isReadOnly}
        originalErVilkårOk={originalErVilkårOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        <VStack gap="space-16">
          <Label size="small">
            <FormattedMessage id="ErForeldreansvarVilkaarOppfyltForm.RettTilStonad" />
          </Label>
          <VilkarResultPicker
            avslagsårsaker={avslagsårsaker}
            isReadOnly={isReadOnly}
            customVilkårOppfyltText={
              <FormattedMessage id={isEngangsstonad ? 'FodselVilkarForm.OppfyltEs' : 'FodselVilkarForm.OppfyltFp'} />
            }
            customVilkårIkkeOppfyltText={
              <FormattedMessage
                id={isEngangsstonad ? 'FodselVilkarForm.IkkeOppfyltEs' : 'FodselVilkarForm.IkkeOppfyltFp'}
                values={{ b: BTag }}
              />
            }
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
  behandlingsresultat?: BehandlingFpSak['behandlingsresultat'],
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
      AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_2_LEDD,
      AksjonspunktKode.MANUELL_VURDERING_AV_FORELDREANSVARSVILKÅRET_4_LEDD,
      AksjonspunktKode.AVKLAR_OM_SØKER_HAR_MOTTATT_STØTTE,
    ),
  }));
