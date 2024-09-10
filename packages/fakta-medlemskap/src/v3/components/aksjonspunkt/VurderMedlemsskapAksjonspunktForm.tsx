import React, { FC, useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, VStack } from '@navikt/ds-react';
import { Aksjonspunkt } from '@navikt/ft-types';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { FaktaBegrunnelseTextFieldNew } from '@navikt/fp-fakta-felles';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';

import { AlleKodeverk, MedlemskapV3 } from '@navikt/fp-types';
import VurderingAlternativer from './VurderingAlternativer';
import VurderMedlemskap from '@navikt/fp-types-avklar-aksjonspunkter/src/fakta/VurderMedlemskapAp';
import { Vurdering, VurderMedlemskapFormValues } from '../../types/vurderingMedlemskapForm';

interface Props {
  submittable: boolean;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  submitCallback: (aksjonspunktData: VurderMedlemskap) => Promise<void>;
  aksjonspunkter: Aksjonspunkt[];
  medlemskap: MedlemskapV3;
}

const inngangsAksjonspunkter = [
  AksjonspunktCode.VURDER_MEDLEMSKAPSVILKÅRET,
  // TODO: FORUTGÅENDE ES INC
];

const createInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  { manuellBehandling }: MedlemskapV3,
): Partial<VurderMedlemskapFormValues> => {
  const aksjonspunkt = aksjonspunkter.find(ap => inngangsAksjonspunkter.some(value => ap.definisjon == value));
  const begrunnelse = aksjonspunkt?.begrunnelse ?? '';

  if (manuellBehandling?.resultat) {
    const { opphørFom, avslagskode } = manuellBehandling.resultat;
    let vurdering = undefined;
    if (opphørFom) {
      vurdering = Vurdering.DELVIS_OPPFYLT;
    } else if (avslagskode) {
      vurdering = Vurdering.IKKE_OPPFYLT;
    } else {
      vurdering = Vurdering.OPPFYLT;
    }
    return {
      begrunnelse,
      vurdering,
      opphørFom: opphørFom ?? undefined,
      avslagskode: avslagskode ?? undefined,
    };
  }

  return {
    begrunnelse,
  };
};

/**
 * MedlemskapInfoPanel
 *
 * Har ansvar for å vise faktapanelene for medlemskap.
 */
const VurderMedlemsskapAksjonspunktForm: FC<Props> = ({
  submittable,
  readOnly,
  alleKodeverk,
  submitCallback,
  aksjonspunkter,
  medlemskap,
}) => {
  const [isSubmitting, setSubmitting] = useState(false);

  const formMethods = useForm<VurderMedlemskapFormValues>({
    defaultValues: createInitialValues(aksjonspunkter, medlemskap),
  });
  const begrunnelseVerdi = formMethods.watch('begrunnelse');

  const bekreft = useCallback(({ avslagskode, opphørFom, begrunnelse }: VurderMedlemskapFormValues) => {
    setSubmitting(true);
    return submitCallback({
      kode: AksjonspunktCode.VURDER_MEDLEMSKAPSVILKÅRET,
      begrunnelse,
      avslagskode,
      opphørFom,
    });
  }, []);

  return (
    <Form formMethods={formMethods} onSubmit={bekreft}>
      <VStack gap="6">
        <VurderingAlternativer alleKodeverk={alleKodeverk} />
        <FaktaBegrunnelseTextFieldNew
          isReadOnly={readOnly}
          isSubmittable={submittable}
          hasBegrunnelse={!!begrunnelseVerdi}
        />
        {!readOnly && (
          <div>
            <Button
              size="small"
              variant="primary"
              disabled={isSubmitting || !formMethods.formState.isDirty}
              loading={isSubmitting}
              type="submit"
            >
              <FormattedMessage id="MedlemskapInfoPanel.Submit" />
            </Button>
          </div>
        )}
      </VStack>
    </Form>
  );
};

export default VurderMedlemsskapAksjonspunktForm;
