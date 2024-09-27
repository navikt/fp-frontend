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
import { VilkårResultatPickerMedlemskapsvilkåretForutgående } from './VilkårResultatPickerMedlemskapsvilkåretForutgående';
import {
  SØKER_INNFLYTTET_FOR_SENT_KODE,
  Vurdering,
  VurderMedlemskapForutgaendeFormValues,
} from '../../types/vurderingMedlemskapForutgaendeForm';
import VurderForutgaendeMedlemskapAp from '@navikt/fp-types-avklar-aksjonspunkter/src/fakta/VurderForutgaendeMedlemskapAp';

interface Props {
  submittable: boolean;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  submitCallback: (aksjonspunktData: VurderForutgaendeMedlemskapAp) => Promise<void>;
  aksjonspunkt: Aksjonspunkt;
  manuellBehandlingResultat: ManuellBehandlingResultat | null;
}

const createInitialValues = (
  aksjonspunkt: Aksjonspunkt,
  resultat: ManuellBehandlingResultat | null,
): Partial<VurderMedlemskapForutgaendeFormValues> => {
  const begrunnelse = aksjonspunkt.begrunnelse ?? '';

  if (resultat) {
    const { medlemFom, avslagskode } = resultat;
    if (avslagskode) {
      if (medlemFom) {
        return { vurdering: Vurdering.IKKE_OPPFYLT, medlemFom, avslagskode, begrunnelse };
      } else {
        return { vurdering: Vurdering.IKKE_OPPFYLT, avslagskode, begrunnelse };
      }
    } else {
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
  aksjonspunkt,
  manuellBehandlingResultat,
}) => {
  const [submitting, setSubmitting] = useState(false);

  const formMethods = useForm<VurderMedlemskapForutgaendeFormValues>({
    defaultValues: createInitialValues(aksjonspunkt, manuellBehandlingResultat),
  });
  const begrunnelseVerdi = formMethods.watch('begrunnelse');

  const bekreft = useCallback(
    ({ vurdering, avslagskode, medlemFom, begrunnelse }: VurderMedlemskapForutgaendeFormValues) => {
      setSubmitting(true);
      return submitCallback({
        kode: AksjonspunktCode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR,
        begrunnelse,
        avslagskode: vurdering !== Vurdering.OPPFYLT ? avslagskode : undefined,
        medlemFom: avslagskode === SØKER_INNFLYTTET_FOR_SENT_KODE ? medlemFom : undefined,
      });
    },
    [],
  );

  return (
    <ConditionalWrapper isReadOnly={readOnly}>
      <Form formMethods={formMethods} onSubmit={bekreft}>
        <VStack gap={readOnly ? '2' : '6'}>
          <VilkårResultatPickerMedlemskapsvilkåretForutgående alleKodeverk={alleKodeverk} readOnly={readOnly} />
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

export default VurderMedlemsskapAksjonspunktForm;
