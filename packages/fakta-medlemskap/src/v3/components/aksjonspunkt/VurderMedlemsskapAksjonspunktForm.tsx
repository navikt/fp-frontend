import React, { FC, PropsWithChildren, useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, VStack } from '@navikt/ds-react';
import { Aksjonspunkt } from '@navikt/ft-types';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { FaktaBegrunnelseTextFieldNew } from '@navikt/fp-fakta-felles';
import { useForm } from 'react-hook-form';
import { Form } from '@navikt/ft-form-hooks';
import { VurderMedlemskapAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { AlleKodeverk, ManuellBehandlingResultat } from '@navikt/fp-types';

import VurderingAlternativer from './VurderingAlternativer';
import { Vurdering, VurderMedlemskapFormValues } from '../../types/vurderingMedlemskapForm';
import InfoBox from '../InfoBox';

interface Props {
  submittable: boolean;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  submitCallback: (aksjonspunktData: VurderMedlemskapAp) => Promise<void>;
  aksjonspunkter: Aksjonspunkt[];
  manuellBehandlingResultat: ManuellBehandlingResultat | null;
  ytelse: string;
}

const inngangsAksjonspunkter = [
  AksjonspunktCode.VURDER_MEDLEMSKAPSVILKÅRET,
  // TODO: FORUTGÅENDE ES INC
];

const createInitialValues = (
  aksjonspunkter: Aksjonspunkt[],
  resultat: ManuellBehandlingResultat | null,
): Partial<VurderMedlemskapFormValues> => {
  const aksjonspunkt = aksjonspunkter.find(ap => inngangsAksjonspunkter.some(value => ap.definisjon == value));
  const begrunnelse = aksjonspunkt?.begrunnelse ?? '';

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
const VurderMedlemsskapAksjonspunktForm: FC<Props> = ({
  submittable,
  readOnly,
  alleKodeverk,
  submitCallback,
  aksjonspunkter,
  manuellBehandlingResultat,
  ytelse,
}) => {
  const [isSubmitting, setSubmitting] = useState(false);

  const formMethods = useForm<VurderMedlemskapFormValues>({
    defaultValues: createInitialValues(aksjonspunkter, manuellBehandlingResultat),
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
          <VurderingAlternativer alleKodeverk={alleKodeverk} readOnly={readOnly} ytelse={ytelse} />
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
    </ConditionalWrapper>
  );
};

export default VurderMedlemsskapAksjonspunktForm;
