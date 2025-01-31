import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';

import { Label } from '@navikt/ds-react';
import { Form } from '@navikt/ft-form-hooks';

import { AksjonspunktKode, AksjonspunktStatus, KodeverkType, VilkarType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import {
  ProsessPanelTemplate,
  ProsessStegBegrunnelseTextFieldNew,
  validerApKodeOgHentApEnum,
  VilkarResultPicker,
} from '@navikt/fp-prosess-felles';
import { Aksjonspunkt, AlleKodeverk, Behandling } from '@navikt/fp-types';
import {
  Foreldreansvarsvilkar1Ap,
  Foreldreansvarsvilkar2Ap,
  VurdereYtelseSammeBarnAnnenForelderAp,
  VurdereYtelseSammeBarnSokerAp,
} from '@navikt/fp-types-avklar-aksjonspunkter';
import { useFormData } from '@navikt/fp-utils';

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

interface OwnProps {
  behandlingsresultat?: Behandling['behandlingsresultat'];
  isForeldreansvar2Ledd: boolean;
  isEngangsstonad: boolean;
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  submitCallback: (aksjonspunktData: AksjonspunktData) => Promise<void>;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  alleKodeverk: AlleKodeverk;
  erIkkeGodkjentAvBeslutter: boolean;
}

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

/**
 * ErForeldreansvarVilkaarOppfyltForm
 *
 * Setter opp aksjonspunkter for avklaring av foreldreansvarvilkåret 2 eller 4 ledd.
 */
const ErForeldreansvarVilkaarOppfyltForm: FunctionComponent<OwnProps> = ({
  readOnly,
  readOnlySubmitButton,
  isEngangsstonad,
  behandlingsresultat,
  isForeldreansvar2Ledd,
  status,
  aksjonspunkter,
  erIkkeGodkjentAvBeslutter,
  alleKodeverk,
  submitCallback,
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

  const vilkarTypeKode = isForeldreansvar2Ledd
    ? VilkarType.FORELDREANSVARSVILKARET_2_LEDD
    : VilkarType.FORELDREANSVARSVILKARET_4_LEDD;
  const avslagsarsaker = alleKodeverk[KodeverkType.AVSLAGSARSAK][vilkarTypeKode];

  const isOpenAksjonspunkt = aksjonspunkter.some(ap => ap.status === AksjonspunktStatus.OPPRETTET);
  const originalErVilkarOk = isOpenAksjonspunkt ? undefined : VilkarUtfallType.OPPFYLT === status;

  const bTag = useCallback((...chunks: any) => <b>{chunks}</b>, []);

  return (
    <Form
      formMethods={formMethods}
      onSubmit={(values: FormValues) => submitCallback(transformValues(values, aksjonspunkter))}
      setDataOnUnmount={setFormData}
    >
      <ProsessPanelTemplate
        title={intl.formatMessage({ id: 'ErForeldreansvarVilkaarOppfyltForm.Foreldreansvar' })}
        isAksjonspunktOpen={!readOnlySubmitButton}
        readOnlySubmitButton={readOnlySubmitButton}
        readOnly={readOnly}
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
          readOnly={readOnly}
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
        <ProsessStegBegrunnelseTextFieldNew readOnly={readOnly} />
      </ProsessPanelTemplate>
    </Form>
  );
};

export default ErForeldreansvarVilkaarOppfyltForm;
