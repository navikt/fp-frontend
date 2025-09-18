import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, VStack } from '@navikt/ds-react';
import { RhfForm, RhfSelect } from '@navikt/ft-form-hooks';
import { required } from '@navikt/ft-form-validators';
import { FaktaGruppe, OverstyringKnapp } from '@navikt/ft-ui-komponenter';

import { FaktaBegrunnelseTextField, FaktaSubmitButton } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, RelasjonsRolleType } from '@navikt/fp-kodeverk';
import {
  type Aksjonspunkt,
  type foreldrepenger_behandlingslager_behandling_ytelsefordeling_Rettighetstype,
  type OmsorgOgRett,
} from '@navikt/fp-types';
import type { OverstyringRettigheterAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { usePanelDataContext } from '@navikt/fp-utils';

import styles from './overstyrRettigheterForm.module.css';

type FormValues = {
  rettighetstype: foreldrepenger_behandlingslager_behandling_ytelsefordeling_Rettighetstype;
  begrunnelse: string;
};

interface Props {
  omsorgOgRett: OmsorgOgRett;
  aksjonspunkt?: Aksjonspunkt;
  kanOverstyre: boolean;
}

const RETTIGHETSTYPER = {
  ALENEOMSORG: 'Rettighetstype.Aleneomsorg',
  BEGGE_RETT: 'Rettighetstype.BeggeRett',
  BEGGE_RETT_EØS: 'Rettighetstype.BeggeRettEØS',
  BARE_MOR_RETT: 'Rettighetstype.BareMorRett',
  BARE_FAR_RETT: 'Rettighetstype.BareFarRett',
  BARE_FAR_RETT_MOR_UFØR: 'Rettighetstype.BareFarRettMorUfør',
} satisfies Record<foreldrepenger_behandlingslager_behandling_ytelsefordeling_Rettighetstype, string>;

export const RettighetstypeForm = ({ omsorgOgRett, aksjonspunkt, kanOverstyre }: Props) => {
  const { submitCallback, alleMerknaderFraBeslutter, isReadOnly, isSubmittable } =
    usePanelDataContext<OverstyringRettigheterAp>();

  const rettighetstype = omsorgOgRett.rettighetstype ?? undefined;

  const formMethods = useForm<FormValues>({
    defaultValues: {
      rettighetstype: rettighetstype,
      ...FaktaBegrunnelseTextField.initialValues(aksjonspunkt),
    },
  });

  const transformerFeltverdier = (feltVerdier: FormValues) =>
    submitCallback({
      kode: AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG,
      rettighetstype: feltVerdier.rettighetstype,
      ...FaktaBegrunnelseTextField.transformValues(feltVerdier),
    });
  const rettighetstyper =
    omsorgOgRett.relasjonsRolleType === RelasjonsRolleType.MOR
      ? (['ALENEOMSORG', 'BEGGE_RETT', 'BEGGE_RETT_EØS', 'BARE_MOR_RETT'] as const)
      : (['ALENEOMSORG', 'BEGGE_RETT', 'BEGGE_RETT_EØS', 'BARE_FAR_RETT', 'BARE_FAR_RETT_MOR_UFØR'] as const);

  const [erOverstyrt, setErOverstyrt] = useState(!!aksjonspunkt?.begrunnelse);
  const readOnly = !erOverstyrt || isReadOnly || !kanOverstyre;
  return (
    <RhfForm formMethods={formMethods} onSubmit={transformerFeltverdier}>
      <FaktaGruppe
        withoutBorder
        merknaderFraBeslutter={alleMerknaderFraBeslutter[AksjonspunktKode.OVERSTYRING_AV_RETT_OG_OMSORG]}
      >
        <VStack gap="space-24">
          <HStack gap="space-8" align="start">
            <RhfSelect
              name="rettighetstype"
              control={formMethods.control}
              label={<FormattedMessage id="Rettighetstype.SelectLabel" />}
              validate={[required]}
              className={styles['selectType']}
              selectValues={rettighetstyper.map(vt => (
                <option key={vt} value={vt}>
                  <FormattedMessage id={RETTIGHETSTYPER[vt]} />
                </option>
              ))}
              readOnly={readOnly}
            />
            {kanOverstyre && !isReadOnly && (
              <OverstyringKnapp onClick={() => setErOverstyrt(true)} erOverstyrt={erOverstyrt} />
            )}
          </HStack>

          <FaktaBegrunnelseTextField
            control={formMethods.control}
            isSubmittable={isSubmittable}
            isReadOnly={readOnly}
            hasBegrunnelse={true}
            hasVurderingText
          />
          <FaktaSubmitButton
            isSubmittable={isSubmittable}
            isReadOnly={readOnly}
            isSubmitting={formMethods.formState.isSubmitting}
            isDirty={formMethods.formState.isDirty}
          />
        </VStack>
      </FaktaGruppe>
    </RhfForm>
  );
};
