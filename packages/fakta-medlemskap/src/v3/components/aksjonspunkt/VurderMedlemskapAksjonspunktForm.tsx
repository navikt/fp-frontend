import React, { FC, PropsWithChildren, useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, VStack } from '@navikt/ds-react';
import { Aksjonspunkt } from '@navikt/ft-types';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { FaktaBegrunnelseTextFieldNew } from '@navikt/fp-fakta-felles';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { AlleKodeverk, ManuellBehandlingResultat } from '@navikt/fp-types';
import InfoBox from '../InfoBox';
import { VilkårResultatPickerMedlemskapsvilkåret } from './VilkårResultatPickerMedlemskapsvilkåret';
import { Vurdering, VurderMedlemskapFormValues } from '../../types/vurderingMedlemskapForm';
import { VurderMedlemskapAp } from '@navikt/fp-types-avklar-aksjonspunkter';

interface Props {
  submittable: boolean;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  submitCallback: (aksjonspunktData: VurderMedlemskapAp) => Promise<void>;
  aksjonspunkt: Aksjonspunkt;
  manuellBehandlingResultat: ManuellBehandlingResultat | null;
  ytelse: string;
}

const createInitialValues = (
  aksjonspunkt: Aksjonspunkt,
  resultat: ManuellBehandlingResultat | null,
): Partial<VurderMedlemskapFormValues> => {
  const begrunnelse = aksjonspunkt.begrunnelse ?? '';

  if (resultat) {
    const { opphørFom, avslagskode } = resultat;
    if (avslagskode && opphørFom) {
      return { vurdering: Vurdering.DELVIS_OPPFYLT, opphørFom, avslagskode, begrunnelse };
    } else if (avslagskode && !opphørFom) {
      return { vurdering: Vurdering.IKKE_OPPFYLT, avslagskode, begrunnelse };
    } else if (!opphørFom && !avslagskode) {
      return { vurdering: Vurdering.OPPFYLT, begrunnelse };
    }
  }
  return { begrunnelse };
};

const ConditionalWrapper = ({ isReadOnly, children }: PropsWithChildren<{ isReadOnly: boolean }>) =>
  isReadOnly ? <InfoBox size="medium">{children}</InfoBox> : <>{children}</>;
/**
 * MedlemskapInfoPanel
 *
 * Har ansvar for å vise faktapanelene for medlemskap.
 */
const VurderMedlemskapAksjonspunktForm: FC<Props> = ({
  submittable,
  readOnly,
  alleKodeverk,
  submitCallback,
  aksjonspunkt,
  manuellBehandlingResultat,
  ytelse,
}) => {
  const [submitting, setSubmitting] = useState(false);

  const formMethods = useForm<VurderMedlemskapFormValues>({
    defaultValues: createInitialValues(aksjonspunkt, manuellBehandlingResultat),
  });
  const begrunnelseVerdi = formMethods.watch('begrunnelse');

  const bekreft = useCallback(({ vurdering, avslagskode, opphørFom, begrunnelse }: VurderMedlemskapFormValues) => {
    setSubmitting(true);
    return submitCallback({
      kode: AksjonspunktCode.VURDER_MEDLEMSKAPSVILKÅRET,
      begrunnelse,
      avslagskode: vurdering !== Vurdering.OPPFYLT ? avslagskode : undefined,
      opphørFom: vurdering === Vurdering.DELVIS_OPPFYLT ? opphørFom : undefined,
    });
  }, []);

  return (
    <ConditionalWrapper isReadOnly={readOnly}>
      <Form formMethods={formMethods} onSubmit={bekreft}>
        <VStack gap={readOnly ? '2' : '6'}>
          <VilkårResultatPickerMedlemskapsvilkåret alleKodeverk={alleKodeverk} readOnly={readOnly} ytelse={ytelse} />
          <FaktaBegrunnelseTextFieldNew
            hasReadOnlyLabel
            isReadOnly={readOnly}
            isSubmittable={submittable}
            hasBegrunnelse={!!begrunnelseVerdi}
          />
          {!readOnly && (
            <div>
              <Button
                size="small"
                variant="primary"
                disabled={submitting || !formMethods.formState.isDirty}
                loading={submitting}
                type="submit"
              >
                <FormattedMessage id="MedlemskapInfoPanel.Submit" />
              </Button>
            </div>
          )}
        </VStack>
      </Form>
    </ConditionalWrapper>
  );
};

export default VurderMedlemskapAksjonspunktForm;
