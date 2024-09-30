import React, { FC, PropsWithChildren, useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';

import { Button, VStack } from '@navikt/ds-react';
import { AksjonspunktCode, KodeverkType, VilkarType } from '@navikt/fp-kodeverk';
import { FaktaBegrunnelseTextFieldNew } from '@navikt/fp-fakta-felles';
import { Form } from '@navikt/ft-form-hooks';
import { Aksjonspunkt, AlleKodeverk, ManuellBehandlingResultat } from '@navikt/fp-types';
import { VurderMedlemskapAp, VurderForutgaendeMedlemskapAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import InfoBox from '../InfoBox';
import { MedlemskapVurderinger } from './MedlemskapVurderinger';
import {
  SØKER_INNFLYTTET_FOR_SENT_KODE,
  Vurdering,
  VurderMedlemskapFormValues,
} from '../../types/vurderingMedlemskapForm';

interface Props {
  submittable: boolean;
  readOnly: boolean;
  alleKodeverk: AlleKodeverk;
  submitCallback: (aksjonspunktData: VurderMedlemskapAp | VurderForutgaendeMedlemskapAp) => Promise<void>;
  aksjonspunkt: Aksjonspunkt;
  manuellBehandlingResultat: ManuellBehandlingResultat | null;
  ytelse: string;
}

export const createInitialValues = (
  aksjonspunkt: Aksjonspunkt,
  resultat: ManuellBehandlingResultat | null,
): Partial<VurderMedlemskapFormValues> => {
  const begrunnelse = aksjonspunkt.begrunnelse ?? '';

  if (resultat) {
    const { opphørFom, avslagskode, medlemFom } = resultat;
    if (avslagskode && opphørFom) {
      return { vurdering: Vurdering.DELVIS_OPPFYLT, opphørFom, avslagskode, begrunnelse };
    } else if (avslagskode && medlemFom) {
      return { vurdering: Vurdering.IKKE_OPPFYLT, medlemFom, avslagskode, begrunnelse };
    } else if (avslagskode && !opphørFom && !medlemFom) {
      return { vurdering: Vurdering.IKKE_OPPFYLT, avslagskode, begrunnelse };
    } else if (!avslagskode) {
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
  const erForutgåendeAksjonspunkt = aksjonspunkt.definisjon === AksjonspunktCode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR;

  const bekreft = useCallback(
    ({ vurdering, avslagskode, medlemFom, opphørFom, begrunnelse }: VurderMedlemskapFormValues) => {
      setSubmitting(true);
      return submitCallback({
        kode: erForutgåendeAksjonspunkt
          ? AksjonspunktCode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR
          : AksjonspunktCode.VURDER_MEDLEMSKAPSVILKÅRET,
        begrunnelse,
        avslagskode: vurdering !== Vurdering.OPPFYLT ? avslagskode : undefined,
        opphørFom: vurdering === Vurdering.DELVIS_OPPFYLT ? opphørFom : undefined,
        medlemFom: avslagskode === SØKER_INNFLYTTET_FOR_SENT_KODE ? medlemFom : undefined,
      });
    },
    [],
  );
  const avslagsarsaker = alleKodeverk[KodeverkType.AVSLAGSARSAK][
    erForutgåendeAksjonspunkt ? VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE : VilkarType.MEDLEMSKAPSVILKARET
  ].sort((k1, k2) => k1.navn.localeCompare(k2.navn));

  return (
    <ConditionalWrapper isReadOnly={readOnly}>
      <Form formMethods={formMethods} onSubmit={bekreft}>
        <VStack gap={readOnly ? '2' : '6'}>
          <MedlemskapVurderinger
            erForutgående={erForutgåendeAksjonspunkt}
            avslagsarsaker={avslagsarsaker}
            readOnly={readOnly}
            ytelse={ytelse}
          />
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
