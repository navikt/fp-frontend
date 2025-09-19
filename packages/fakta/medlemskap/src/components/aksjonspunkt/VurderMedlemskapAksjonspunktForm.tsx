import { type PropsWithChildren, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { Button, VStack } from '@navikt/ds-react';
import { RhfForm } from '@navikt/ft-form-hooks';

import { FaktaBegrunnelseTextField } from '@navikt/fp-fakta-felles';
import { AksjonspunktKode, BehandlingTypeEnum, VilkarType } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, ManuellBehandlingResultat } from '@navikt/fp-types';
import type { VurderForutgaendeMedlemskapAp, VurderMedlemskapAp } from '@navikt/fp-types-avklar-aksjonspunkter';
import { useMellomlagretFormData, usePanelDataContext } from '@navikt/fp-utils';

import {
  MedlemskapVurdering,
  SØKER_INNFLYTTET_FOR_SENT_KODE,
  type VurderMedlemskapFormValues,
} from '../../types/vurderingMedlemskapForm';
import { InfoBox } from '../InfoBox';
import { MedlemskapVurderinger } from './MedlemskapVurderinger';

interface Props {
  aksjonspunkt: Aksjonspunkt;
  manuellBehandlingResultat: ManuellBehandlingResultat | null;
}

export const createMedlemskapInitialValues = (
  aksjonspunkt: Aksjonspunkt,
  resultat: ManuellBehandlingResultat | null,
): Partial<VurderMedlemskapFormValues> => {
  const begrunnelse = aksjonspunkt.begrunnelse ?? '';

  if (resultat) {
    const { opphørFom, avslagskode, medlemFom } = resultat;
    if (!avslagskode) {
      return { vurdering: MedlemskapVurdering.OPPFYLT, begrunnelse };
    } else if (opphørFom) {
      return { vurdering: MedlemskapVurdering.DELVIS_OPPFYLT, opphørFom, avslagskode, begrunnelse };
    } else if (medlemFom) {
      return { vurdering: MedlemskapVurdering.IKKE_OPPFYLT, medlemFom, avslagskode, begrunnelse };
    }
    return { vurdering: MedlemskapVurdering.IKKE_OPPFYLT, avslagskode, begrunnelse };
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
export const VurderMedlemskapAksjonspunktForm = ({ aksjonspunkt, manuellBehandlingResultat }: Props) => {
  const { fagsak, behandling, submitCallback, isReadOnly, isSubmittable, alleKodeverk } = usePanelDataContext<
    // @ts-expect-error Johannes ser på denne - mismatch mellom type i ft-repo og generert type
    VurderMedlemskapAp | VurderForutgaendeMedlemskapAp
  >();

  const { mellomlagretFormData, setMellomlagretFormData } = useMellomlagretFormData<VurderMedlemskapFormValues>();
  const [submitting, setSubmitting] = useState(false);

  const formMethods = useForm<VurderMedlemskapFormValues>({
    defaultValues: mellomlagretFormData ?? createMedlemskapInitialValues(aksjonspunkt, manuellBehandlingResultat),
  });

  const begrunnelseVerdi = formMethods.watch('begrunnelse');
  const erForutgåendeAksjonspunkt = aksjonspunkt.definisjon === AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR;

  const bekreft = ({ vurdering, avslagskode, medlemFom, opphørFom, begrunnelse }: VurderMedlemskapFormValues) => {
    setSubmitting(true);
    return submitCallback({
      kode: erForutgåendeAksjonspunkt
        ? AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR
        : AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET,
      begrunnelse,
      avslagskode: vurdering !== MedlemskapVurdering.OPPFYLT ? avslagskode : undefined,
      opphørFom: vurdering === MedlemskapVurdering.DELVIS_OPPFYLT ? opphørFom : undefined,
      medlemFom: avslagskode === SØKER_INNFLYTTET_FOR_SENT_KODE ? medlemFom : undefined,
    });
  };
  const avslagsårsaker = alleKodeverk['Avslagsårsak'][
    erForutgåendeAksjonspunkt ? VilkarType.MEDLEMSKAPSVILKARET_FORUTGAENDE : VilkarType.MEDLEMSKAPSVILKARET
  ].sort((k1, k2) => k1.navn.localeCompare(k2.navn));

  return (
    <ConditionalWrapper isReadOnly={isReadOnly}>
      <RhfForm formMethods={formMethods} onSubmit={bekreft} setDataOnUnmount={setMellomlagretFormData}>
        <VStack gap={isReadOnly ? '2' : '6'}>
          <MedlemskapVurderinger
            erForutgående={erForutgåendeAksjonspunkt}
            erRevurdering={behandling.type === BehandlingTypeEnum.REVURDERING}
            avslagsårsaker={avslagsårsaker}
            readOnly={isReadOnly}
            ytelse={fagsak.fagsakYtelseType}
          />
          <FaktaBegrunnelseTextField
            control={formMethods.control}
            hasReadOnlyLabel
            isReadOnly={isReadOnly}
            isSubmittable={isSubmittable}
            hasBegrunnelse={!!begrunnelseVerdi}
          />
          {!isReadOnly && (
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
      </RhfForm>
    </ConditionalWrapper>
  );
};
