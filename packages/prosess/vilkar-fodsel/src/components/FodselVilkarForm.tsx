import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';
import { BTag } from '@navikt/ft-utils';

import { AksjonspunktKode, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextFieldNew,
  validerApKodeOgHentApEnum,
  VilkarResultPicker,
} from '@navikt/fp-prosess-felles';
import type { Aksjonspunkt, Behandling, KodeverkMedNavn, Vilkar } from '@navikt/fp-types';
import type { VurdereYtelseSammeBarnSokerAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

const avslagsårsakerES = ['1002', '1003', '1032'];

type FormValues = {
  erVilkarOk?: boolean;
  avslagCode?: string;
  begrunnelse?: string;
};

interface Props {
  status: string;
  vilkår: Vilkar[];
  ytelseTypeKode: string;
  readOnlySubmitButton: boolean;
}

/**
 * FodselVilkarForm
 *
 * Setter opp aksjonspunktet for avklaring av Fødselsvilkåret.
 */
export const FodselVilkarForm = ({ readOnlySubmitButton, status, ytelseTypeKode, vilkår }: Props) => {
  const intl = useIntl();

  const {
    behandling,
    alleKodeverk,
    aksjonspunkterForPanel,
    submitCallback,
    harÅpentAksjonspunkt,
    isReadOnly,
    alleMerknaderFraBeslutter,
  } = usePanelDataContext<VurdereYtelseSammeBarnSokerAp>();

  const erIkkeGodkjentAvBeslutter = aksjonspunkterForPanel.some(
    a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted,
  );

  const initialValues = buildInitialValues(aksjonspunkterForPanel, status, behandling.behandlingsresultat);

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<FormValues>();
  const formMethods = useForm<FormValues>({
    defaultValues: mellomlagretFormData ?? initialValues,
  });

  const avslagsårsaker = getFodselVilkarAvslagsårsaker(
    ytelseTypeKode === 'FP',
    alleKodeverk['Avslagsårsak'][VilkarType.FODSELSVILKARET_MOR],
  );

  const originalErVilkårOk = harÅpentAksjonspunkt ? undefined : VilkarUtfallType.OPPFYLT === status;

  return (
    <RhfForm
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkterForPanel))}
      setDataOnUnmount={setMellomlagretFormData}
    >
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'FodselVilkarForm.Fodsel' })}
        harÅpentAksjonspunkt={harÅpentAksjonspunkt}
        readOnlySubmitButton={readOnlySubmitButton}
        isReadOnly={isReadOnly}
        lovReferanse={vilkår[0]?.lovReferanse ?? undefined}
        originalErVilkårOk={originalErVilkårOk}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        isDirty={formMethods.formState.isDirty}
        isSubmitting={formMethods.formState.isSubmitting}
      >
        <VStack gap="space-16">
          <Label size="small">
            <FormattedMessage id="FodselVilkarForm.TidligereUtbetaltStonad" />
          </Label>
          <VilkarResultPicker
            avslagsårsaker={avslagsårsaker}
            isReadOnly={isReadOnly}
            customVilkårOppfyltText={<FormattedMessage id="FodselVilkarForm.Oppfylt" />}
            customVilkårIkkeOppfyltText={<FormattedMessage id="FodselVilkarForm.IkkeOppfylt" values={{ b: BTag }} />}
          />
          <ProsessStegBegrunnelseTextFieldNew useAllWidth readOnly={isReadOnly} />
        </VStack>
      </ProsessPanelTemplate>
    </RhfForm>
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

const transformValues = (values: FormValues, aksjonspunkter: Aksjonspunkt[]): VurdereYtelseSammeBarnSokerAp => ({
  ...VilkarResultPicker.transformValues(values),
  ...ProsessStegBegrunnelseTextFieldNew.transformValues(values),
  kode: validerApKodeOgHentApEnum(aksjonspunkter[0].definisjon, AksjonspunktKode.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN),
});

const getFodselVilkarAvslagsårsaker = (
  isFpFagsak: boolean,
  fødselsvilkårAvslagskoder: KodeverkMedNavn<'Avslagsårsak'>[],
): KodeverkMedNavn<'Avslagsårsak'>[] =>
  isFpFagsak
    ? fødselsvilkårAvslagskoder.filter(arsak => !avslagsårsakerES.includes(arsak.kode))
    : fødselsvilkårAvslagskoder;
